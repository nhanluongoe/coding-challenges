import Link from "next/link";
import ResolutionDashboard from "@/components/ResolutionDashboard";
import { getLanguages, getProblemActivityDashboard } from "@/lib/problems";
import {
  getFeaturedLanguage,
  getPracticeSharePercentage,
  getTotalProblemCount,
} from "@/lib/util";

export default async function Home() {
  const languages = await getLanguages();
  const dashboard = await getProblemActivityDashboard();
  const totalProblems = getTotalProblemCount(languages);
  const featuredLanguage = getFeaturedLanguage(languages);

  return (
    <main className="overflow-hidden">
      <section
        className="mx-auto grid min-h-[calc(100vh-8rem)] w-full max-w-6xl gap-10 py-8 lg:grid-cols-[minmax(0,1.04fr)_minmax(360px,0.7fr)] lg:items-center"
        aria-labelledby="page-title"
      >
        <div>
          <p className="mb-5 inline-flex rounded-full border border-(--color-border-default) bg-white px-4 py-2 text-sm font-bold text-(--color-primary-500) shadow-(--shadow-sm)">
            {totalProblems} problems across {languages.length} languages
          </p>

          <h1
            id="page-title"
            className="mb-6 max-w-3xl text-(length:--font-size-display) font-black leading-(--font-line-height-display) tracking-normal text-(--color-text-primary)"
          >
            Keep solving coding challenges
          </h1>

          <p className="mb-8 max-w-2xl text-lg leading-8 text-(--color-text-secondary) sm:text-xl">
            Pick a language, revisit a pattern, and keep the reps moving. This
            collection is organized straight from the local problem directory.
          </p>

          <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-(--color-border-default) bg-(--color-background-surface) px-4 py-4">
              <p className="break-words text-2xl font-black text-(--color-text-primary)">
                {totalProblems}
              </p>
              <p className="mt-1 text-sm font-semibold text-(--color-text-warm-muted)">
                Challenges
              </p>
            </div>
            <div className="rounded-lg border border-(--color-border-default) bg-(--color-background-surface-alt) px-4 py-4">
              <p className="break-words text-2xl font-black text-(--color-text-primary)">
                {languages.length}
              </p>
              <p className="mt-1 text-sm font-semibold text-(--color-text-secondary)">
                Languages
              </p>
            </div>
            <div className="rounded-lg border border-(--color-border-default) bg-(--color-background-surface) px-4 py-4">
              <p className="break-words text-2xl font-black text-(--color-text-primary)">
                {featuredLanguage.name}
              </p>
              <p className="mt-1 text-sm font-semibold text-(--color-text-warm-muted)">
                Most practiced
              </p>
            </div>
          </div>

          <section
            className="grid grid-cols-1 gap-3 sm:grid-cols-2"
            aria-label="Programming languages"
          >
            {languages.map((language) => (
              <Link
                className="group flex min-h-24 items-center justify-between gap-4 rounded-lg border border-(--color-border-default) bg-white px-5 py-4 text-(--color-text-primary) shadow-(--shadow-card) transition duration-(--motion-duration-base) ease-out hover:-translate-y-1 hover:border-(--color-primary-500) hover:bg-(--color-background-surface-alt) hover:shadow-(--shadow-card-hover) focus-visible:-translate-y-1 focus-visible:border-(--color-primary-500) focus-visible:bg-(--color-background-surface-alt) focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-(--color-primary-100)"
                href={`/${language.slug}`}
                key={language.slug}
              >
                <span className="min-w-0">
                  <span className="block break-words text-xl font-black">
                    {language.name}
                  </span>
                  <span className="mt-1 block text-sm font-semibold text-(--color-text-muted)">
                    {language.count} challenges
                  </span>
                </span>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-(--color-primary-100) text-lg font-black text-(--color-primary-500) transition group-hover:bg-(--color-primary-500) group-hover:text-white">
                  {language.name.charAt(0)}
                </span>
              </Link>
            ))}
          </section>
        </div>

        <div className="rounded-lg border border-(--color-border-strong) bg-(--color-background-surface) p-5 shadow-(--shadow-panel)">
          <div className="mb-5 flex items-center justify-between border-b border-(--color-border-subtle) pb-4">
            <div>
              <p className="text-sm font-black uppercase text-(--color-primary-500)">
                Practice map
              </p>
              <p className="mt-1 text-sm font-semibold text-(--color-text-warm-muted)">
                Problem folders by language
              </p>
            </div>
            <div className="rounded-full bg-(--color-dark-800) px-3 py-1 text-sm font-black text-white">
              live
            </div>
          </div>

          <div className="space-y-5">
            {languages.map((language) => (
              <div key={language.slug}>
                <div className="mb-2 flex items-center justify-between gap-4">
                  <span className="font-bold text-(--color-dark-800)">
                    {language.name}
                  </span>
                  <span className="text-sm font-bold text-(--color-text-warm-muted)">
                    {language.count}
                  </span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-(--color-border-subtle)">
                  <div
                    className="h-full rounded-full bg-(--color-primary-500)"
                    style={{
                      width: `${getPracticeSharePercentage(
                        language.count,
                        totalProblems,
                      )}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ResolutionDashboard dashboard={dashboard} />
    </main>
  );
}
