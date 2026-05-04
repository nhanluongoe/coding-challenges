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
  let detail;

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
      <div className="mx-auto w-full max-w-7xl">
        <nav className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            <Link
              className="inline-flex items-center rounded-full border border-[#d8d0c2] bg-white px-4 py-2 text-sm font-black text-[#19684b] shadow-sm transition hover:-translate-y-px hover:border-[#19684b] hover:bg-[#fbfff9] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#19684b]/25"
              href="/"
            >
              Home
            </Link>
            <Link
              className="inline-flex items-center rounded-full border border-[#d8d0c2] bg-white px-4 py-2 text-sm font-black text-[#19684b] shadow-sm transition hover:-translate-y-px hover:border-[#19684b] hover:bg-[#fbfff9] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#19684b]/25"
              href={`/${language}`}
            >
              {languageName} list
            </Link>
          </div>

          <span className="rounded-full bg-[#202821] px-3 py-1 text-sm font-black text-white">
            {detail.solution}
          </span>
        </nav>

        <header className="mb-6 rounded-lg border border-[#d7cdbb] bg-[#fffdf8] p-6 shadow-[0_20px_58px_rgba(45,38,25,0.10)] sm:p-8">
          <p className="mb-4 inline-flex rounded-full border border-[#c9d7cd] bg-white px-4 py-2 text-sm font-bold text-[#19684b]">
            {languageName} challenge
          </p>
          <h1 className="max-w-4xl text-[clamp(2.4rem,6vw,5rem)] font-black leading-[0.95] tracking-normal">
            {detail.title}
          </h1>
        </header>

        <section className="grid flex-1 gap-4 lg:grid-cols-2">
          <article className="rounded-lg border border-[#d7cdbb] bg-[#fffdf8] p-5 shadow-[0_16px_44px_rgba(45,38,25,0.08)] sm:p-6">
            <div className="mb-5 border-b border-[#eee5d6] pb-4">
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

          <article className="overflow-hidden rounded-lg border border-[#1f2a23] bg-[#111713] shadow-[0_16px_44px_rgba(17,23,19,0.18)]">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
              <div>
                <h2 className="text-2xl font-black tracking-normal text-white">
                  Solution
                </h2>
                <p className="mt-1 text-sm font-bold text-[#9fb2a8]">
                  {detail.solution}
                </p>
              </div>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-black uppercase text-[#d7f3e4]">
                {detail.codeLanguageLabel}
              </span>
            </div>
            <div
              className="solution-code max-h-[72vh] overflow-auto"
              dangerouslySetInnerHTML={{ __html: highlightedCode }}
            />
          </article>
        </section>
      </div>
    </main>
  );
}
