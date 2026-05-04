import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

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
};

function titleize(value: string) {
  return value
    .replace(/\.[^.]+$/, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

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
        "utf8",
      );
      const title = markdown.match(/^#\s+(.+)$/m)?.[1] ?? titleize(entry.name);
      const solution =
        markdown.match(/^- Solution:\s+`(.+)`$/m)?.[1] ?? "code";

      return {
        slug: entry.name,
        title,
        solution,
      };
    });

  return (await Promise.all(problems)).sort((a, b) =>
    a.title.localeCompare(b.title),
  );
}
