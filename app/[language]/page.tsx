import Link from "next/link";
import { notFound } from "next/navigation";
import ProblemList from "@/components/ProblemList";
import {
  getLanguageName,
  getLanguages,
  getProblemsForLanguage,
} from "@/lib/problems";

const problemListConfig = {
  initialVisibleCount: 12,
  incrementBy: 12,
};

type LanguagePageProps = {
  params: Promise<{
    language: string;
  }>;
};

export async function generateStaticParams() {
  const languages = await getLanguages();

  return languages.map((language) => ({
    language: language.slug,
  }));
}

export async function generateMetadata({ params }: LanguagePageProps) {
  const { language } = await params;
  const languages = await getLanguages();
  const exists = languages.some((item) => item.slug === language);

  if (!exists) {
    return {
      title: "Language not found",
    };
  }

  return {
    title: `${getLanguageName(language)} Problems | Coding Challenges`,
    description: `Browse ${getLanguageName(language)} coding challenges.`,
  };
}

export default async function LanguagePage({ params }: LanguagePageProps) {
  const { language } = await params;
  const languages = await getLanguages();
  const languageSummary = languages.find((item) => item.slug === language);

  if (!languageSummary) notFound();

  const problems = await getProblemsForLanguage(language);

  return (
    <main>
      <div className="mx-auto w-full max-w-6xl">
        <nav className="mb-10 flex items-center justify-between gap-4">
          <Link
            className="inline-flex items-center rounded-full border border-(--color-border-default) bg-white px-4 py-2 text-sm font-black text-(--color-primary-500) shadow-(--shadow-sm) transition hover:-translate-y-px hover:border-(--color-primary-500) hover:bg-(--color-background-surface-alt) focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-(--color-primary-100)"
            href="/"
          >
            Back home
          </Link>
          <span className="rounded-full bg-(--color-dark-800) px-3 py-1 text-sm font-black text-white">
            {languageSummary.count} problems
          </span>
        </nav>

        <header className="mb-8 grid gap-6 rounded-lg border border-(--color-border-strong) bg-(--color-background-surface) p-6 shadow-(--shadow-panel) sm:p-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-(--color-border-default) bg-white px-4 py-2 text-sm font-bold text-(--color-primary-500)">
              {languageSummary.name} challenge set
            </p>
            <h1 className="max-w-3xl text-(length:--font-size-language-title) font-black leading-(--font-line-height-language-title) tracking-normal">
              {languageSummary.name} problems
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-(--color-text-secondary)">
              Browse every organized {languageSummary.name} challenge in this
              repo, with detail pages, solution code, and resolved-date metadata
              where available.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:min-w-64">
            <div className="rounded-lg border border-(--color-border-default) bg-white px-4 py-4">
              <p className="text-3xl font-black">{languageSummary.count}</p>
              <p className="mt-1 text-sm font-semibold text-(--color-text-warm-muted)">
                Problems
              </p>
            </div>
            <div className="rounded-lg border border-(--color-border-default) bg-(--color-background-surface-alt) px-4 py-4">
              <p className="text-3xl font-black">
                {languageSummary.name.charAt(0)}
              </p>
              <p className="mt-1 text-sm font-semibold text-(--color-text-secondary)">
                Language
              </p>
            </div>
          </div>
        </header>

        <ProblemList
          initialVisibleCount={problemListConfig.initialVisibleCount}
          incrementBy={problemListConfig.incrementBy}
          languageSlug={languageSummary.slug}
          languageName={languageSummary.name}
          problems={problems}
        />
      </div>
    </main>
  );
}
