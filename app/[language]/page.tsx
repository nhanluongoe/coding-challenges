import Link from "next/link";
import { notFound } from "next/navigation";
import ProblemList from "./ProblemList";
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
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-[#f6f3eb] px-4 py-6 text-[#18201d] sm:px-6 sm:py-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl flex-col">
        <nav className="mb-10 flex items-center justify-between gap-4">
          <Link
            className="inline-flex items-center rounded-full border border-[#d8d0c2] bg-white px-4 py-2 text-sm font-black text-[#19684b] shadow-sm transition hover:-translate-y-px hover:border-[#19684b] hover:bg-[#fbfff9] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#19684b]/25"
            href="/"
          >
            Back home
          </Link>
          <span className="rounded-full bg-[#202821] px-3 py-1 text-sm font-black text-white">
            {languageSummary.count} problems
          </span>
        </nav>

        <header className="mb-8 grid gap-6 rounded-lg border border-[#d7cdbb] bg-[#fffdf8] p-6 shadow-[0_24px_70px_rgba(45,38,25,0.10)] sm:p-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-[#c9d7cd] bg-white px-4 py-2 text-sm font-bold text-[#19684b]">
              {languageSummary.name} challenge set
            </p>
            <h1 className="max-w-3xl text-[clamp(2.8rem,7vw,5.75rem)] font-black leading-[0.94] tracking-normal">
              {languageSummary.name} problems
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#52625b]">
              Browse every organized {languageSummary.name} challenge in this
              repo. Problem detail links are placeholders until the individual
              challenge pages are implemented.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:min-w-64">
            <div className="rounded-lg border border-[#ded5c6] bg-white px-4 py-4">
              <p className="text-3xl font-black">{languageSummary.count}</p>
              <p className="mt-1 text-sm font-semibold text-[#6b5f52]">
                Problems
              </p>
            </div>
            <div className="rounded-lg border border-[#cfdad3] bg-[#f8fffb] px-4 py-4">
              <p className="text-3xl font-black">
                {languageSummary.name.charAt(0)}
              </p>
              <p className="mt-1 text-sm font-semibold text-[#53675e]">
                Language
              </p>
            </div>
          </div>
        </header>

        <ProblemList
          initialVisibleCount={problemListConfig.initialVisibleCount}
          incrementBy={problemListConfig.incrementBy}
          languageName={languageSummary.name}
          problems={problems}
        />

        <footer className="mt-auto border-t border-[#ddd3c3] pt-5 text-sm font-semibold text-[#6d6358]">
          Built by Nhan Luong - @ {currentYear}
        </footer>
      </div>
    </main>
  );
}
