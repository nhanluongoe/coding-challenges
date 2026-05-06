import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import {
  getCodeLanguage,
  getProblemSolution,
  getProblemTitle,
  getResolvedDateFromMarkdown,
  stripFrontmatter,
  titleize,
} from "@/lib/util";

const problemsDirectory = path.join(process.cwd(), "problems");

const displayNames: Record<string, string> = {
  go: "Go",
  java: "Java",
  javascript: "JavaScript",
  ruby: "Ruby",
  typescript: "TypeScript",
};

export type LanguageSummary = {
  slug: string;
  name: string;
  count: number;
};

export type ProblemSummary = {
  slug: string;
  title: string;
  solution: string;
  resolvedAt: string | null;
};

export type ProblemDetail = ProblemSummary & {
  code: string;
  codeLanguage: string;
  codeLanguageLabel: string;
  markdown: string;
};

export type ProblemActivity = ProblemSummary & {
  language: string;
  languageName: string;
};

export type DailyActivity = {
  date: string;
  count: number;
  problems: ProblemActivity[];
};

export type ActivityDashboard = {
  days: DailyActivity[];
};

export function getLanguageName(slug: string) {
  return displayNames[slug] ?? titleize(slug);
}

export async function getLanguages(): Promise<LanguageSummary[]> {
  const entries = await readdir(problemsDirectory, { withFileTypes: true });
  const languages = entries
    .filter((entry) => entry.isDirectory())
    .map(async (entry) => {
      const languageProblems = await readdir(
        path.join(problemsDirectory, entry.name),
        { withFileTypes: true },
      );

      return {
        slug: entry.name,
        name: getLanguageName(entry.name),
        count: languageProblems.filter((problem) => problem.isDirectory())
          .length,
      };
    });

  return (await Promise.all(languages)).sort((a, b) =>
    a.name.localeCompare(b.name),
  );
}

export async function getProblemsForLanguage(
  language: string,
): Promise<ProblemSummary[]> {
  const languageDirectory = path.join(problemsDirectory, language);
  const entries = await readdir(languageDirectory, { withFileTypes: true });
  const problems = entries
    .filter((entry) => entry.isDirectory())
    .map(async (entry) => {
      const problemDirectory = path.join(languageDirectory, entry.name);
      const markdown = await readFile(
        path.join(problemDirectory, "problem.md"),
        {
          encoding: "utf8",
        },
      );

      return {
        slug: entry.name,
        title: getProblemTitle(markdown, entry.name),
        solution: getProblemSolution(markdown),
        resolvedAt: getResolvedDateFromMarkdown(markdown),
      };
    });

  return (await Promise.all(problems)).sort((a, b) =>
    a.title.localeCompare(b.title),
  );
}

export async function getProblemDetail(
  language: string,
  problem: string,
): Promise<ProblemDetail> {
  const problemDirectory = path.join(problemsDirectory, language, problem);
  const markdown = await readFile(path.join(problemDirectory, "problem.md"), {
    encoding: "utf8",
  });
  const title = getProblemTitle(markdown, problem);
  const solution = getProblemSolution(markdown);
  const code = await readFile(path.join(problemDirectory, solution), {
    encoding: "utf8",
  });
  const codeLanguage = getCodeLanguage(solution, language);

  return {
    slug: problem,
    title,
    solution,
    resolvedAt: getResolvedDateFromMarkdown(markdown),
    code,
    codeLanguage,
    codeLanguageLabel: getLanguageName(codeLanguage),
    markdown: stripFrontmatter(markdown),
  };
}

export async function getProblemActivityDashboard(): Promise<ActivityDashboard> {
  const languages = await getLanguages();
  const problemsByLanguage = await Promise.all(
    languages.map(async (language) => {
      const problems = await getProblemsForLanguage(language.slug);

      return problems.map((problem) => ({
        ...problem,
        language: language.slug,
        languageName: language.name,
      }));
    }),
  );
  const problems = problemsByLanguage.flat();
  const resolvedProblems = problems.filter((problem) => problem.resolvedAt);
  const problemsByDate = resolvedProblems.reduce<
    Record<string, ProblemActivity[]>
  >((dates, problem) => {
    if (!problem.resolvedAt) return dates;

    dates[problem.resolvedAt] = [...(dates[problem.resolvedAt] ?? []), problem];

    return dates;
  }, {});
  const days = Object.entries(problemsByDate)
    .map(([date, dailyProblems]) => ({
      date,
      count: dailyProblems.length,
      problems: dailyProblems.sort((a, b) => a.title.localeCompare(b.title)),
    }))
    .sort((a, b) => a.date.localeCompare(b.date));

  return {
    days,
  };
}
