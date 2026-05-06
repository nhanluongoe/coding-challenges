import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { codeToHtml } from "shiki";
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

        <section className="grid min-w-0 flex-1 gap-4 xl:grid-cols-[minmax(320px,0.78fr)_minmax(0,1.42fr)]">
          <article className="min-w-0 rounded-lg border border-(--color-border-strong) bg-(--color-background-surface) p-5 shadow-(--shadow-card) sm:p-6">
            <div className="mb-5 border-b border-(--color-border-subtle) pb-4">
              <h2 className="text-2xl font-black tracking-normal">
                Requirement
              </h2>
            </div>
            <div className="markdown-content">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {detail.markdown}
              </ReactMarkdown>
            </div>
          </article>

          <article className="min-w-0 overflow-hidden rounded-lg border border-(--color-dark-800) bg-(--color-dark-900) shadow-(--shadow-code)">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
              <div className="min-w-0">
                <h2 className="text-2xl font-black tracking-normal text-white">
                  Solution
                </h2>
                <p className="mt-1 break-all text-sm font-bold text-(--color-dark-muted)">
                  {detail.solution}
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs font-black uppercase text-(--color-dark-text)">
                {detail.codeLanguageLabel}
              </span>
            </div>
            <div
              className="solution-code max-h-[78vh] overflow-auto"
              // biome-ignore lint/security/noDangerouslySetInnerHtml: Shiki generates highlighted HTML from local repository source files.
              dangerouslySetInnerHTML={{ __html: highlightedCode }}
            />
          </article>
        </section>
      </div>
    </main>
  );
}
