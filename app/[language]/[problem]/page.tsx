import Link from "next/link";
import { notFound } from "next/navigation";
import { codeToHtml } from "shiki";
import ProblemRevealPanels from "@/components/ProblemRevealPanels";
import {
  getLanguageName,
  getLanguages,
  getProblemDetail,
  getProblemsForLanguage,
  type ProblemDetail,
} from "@/lib/problems";

type ProblemPageProps = {
  params: Promise<{
    language: string;
    problem: string;
  }>;
};

export async function generateStaticParams() {
  const languages = await getLanguages();
  const params = await Promise.all(
    languages.map(async (language) => {
      const problems = await getProblemsForLanguage(language.slug);

      return problems.map((problem) => ({
        language: language.slug,
        problem: problem.slug,
      }));
    }),
  );

  return params.flat();
}

export async function generateMetadata({ params }: ProblemPageProps) {
  const { language, problem } = await params;

  try {
    const detail = await getProblemDetail(language, problem);

    return {
      title: `${detail.title} | ${getLanguageName(language)} Problems`,
      description: `Read the requirement and solution code for ${detail.title}.`,
    };
  } catch {
    return {
      title: "Problem not found",
    };
  }
}

export default async function ProblemPage({ params }: ProblemPageProps) {
  const { language, problem } = await params;
  let detail: ProblemDetail;

  try {
    detail = await getProblemDetail(language, problem);
  } catch {
    notFound();
  }

  const languageName = getLanguageName(language);
  const highlightedCode = await codeToHtml(detail.code, {
    lang: detail.codeLanguage,
    theme: "github-dark",
  });

  return (
    <main>
      <div className="mx-auto w-full max-w-[96rem]">
        <nav className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            <Link
              className="inline-flex items-center rounded-full border border-(--color-border-default) bg-white px-4 py-2 text-sm font-black text-(--color-primary-500) shadow-(--shadow-sm) transition hover:-translate-y-px hover:border-(--color-primary-500) hover:bg-(--color-background-surface-alt) focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-(--color-primary-100)"
              href="/"
            >
              Home
            </Link>
            <Link
              className="inline-flex items-center rounded-full border border-(--color-border-default) bg-white px-4 py-2 text-sm font-black text-(--color-primary-500) shadow-(--shadow-sm) transition hover:-translate-y-px hover:border-(--color-primary-500) hover:bg-(--color-background-surface-alt) focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-(--color-primary-100)"
              href={`/${language}`}
            >
              {languageName} list
            </Link>
          </div>

          <span className="max-w-full break-all rounded-full bg-(--color-dark-800) px-3 py-1 text-sm font-black text-white">
            {detail.solution}
          </span>
        </nav>

        <header className="mb-6 rounded-lg border border-(--color-border-strong) bg-(--color-background-surface) p-5 shadow-(--shadow-panel) sm:p-8">
          <p className="mb-4 inline-flex rounded-full border border-(--color-border-default) bg-white px-4 py-2 text-sm font-bold text-(--color-primary-500)">
            {languageName} challenge
          </p>
          <h1 className="max-w-4xl break-words text-(length:--font-size-page-title) font-black leading-(--font-line-height-page-title) tracking-normal">
            {detail.title}
          </h1>
        </header>

        <ProblemRevealPanels
          markdown={detail.markdown}
          highlightedCode={highlightedCode}
          solution={detail.solution}
          codeLanguageLabel={detail.codeLanguageLabel}
        />
      </div>
    </main>
  );
}
