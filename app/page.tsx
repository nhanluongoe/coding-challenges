import Link from "next/link";
import { getLanguages } from "@/lib/problems";

export default async function Home() {
  const languages = await getLanguages();
  const totalProblems = languages.reduce(
    (total, language) => total + language.count,
    0,
  );
  const featuredLanguage = languages.reduce(
    (largest, language) => (language.count > largest.count ? language : largest),
    languages[0],
  );

  return (
    <main className="grid min-h-[calc(100vh-8rem)] overflow-hidden">
      <section
        className="mx-auto grid w-full max-w-6xl self-center gap-10 py-8 lg:grid-cols-[minmax(0,1.04fr)_minmax(360px,0.7fr)] lg:items-center"
        aria-labelledby="page-title"
      >
        <div>
          <p className="mb-5 inline-flex rounded-full border border-[var(--color-border-default)] bg-white px-4 py-2 text-sm font-bold text-[var(--color-primary-500)] shadow-[var(--shadow-sm)]">
            {totalProblems} problems across {languages.length} languages
          </p>

          <h1
            id="page-title"
            className="mb-6 max-w-3xl text-[length:var(--font-size-display)] font-black leading-[var(--font-line-height-display)] tracking-normal text-[var(--color-text-primary)]"
          >
            Keep solving coding challenges
          </h1>

          <p className="mb-8 max-w-2xl text-lg leading-8 text-[var(--color-text-secondary)] sm:text-xl">
            Pick a language, revisit a pattern, and keep the reps moving. This
            collection is organized straight from the local problem directory.
          </p>

          <div className="mb-8 grid grid-cols-3 gap-3">
            <div className="rounded-lg border border-[var(--color-border-default)] bg-[var(--color-background-surface)] px-4 py-4">
              <p className="text-2xl font-black text-[var(--color-text-primary)]">
                {totalProblems}
              </p>
              <p className="mt-1 text-sm font-semibold text-[var(--color-text-warm-muted)]">
                Challenges
              </p>
            </div>
            <div className="rounded-lg border border-[var(--color-border-default)] bg-[var(--color-background-surface-alt)] px-4 py-4">
              <p className="text-2xl font-black text-[var(--color-text-primary)]">
                {languages.length}
              </p>
              <p className="mt-1 text-sm font-semibold text-[var(--color-text-secondary)]">
                Languages
              </p>
            </div>
            <div className="rounded-lg border border-[var(--color-border-default)] bg-[var(--color-background-surface)] px-4 py-4">
              <p className="text-2xl font-black text-[var(--color-text-primary)]">
                {featuredLanguage.name}
              </p>
              <p className="mt-1 text-sm font-semibold text-[var(--color-text-warm-muted)]">
                Most practiced
              </p>
            </div>
          </div>

          <div
            className="grid grid-cols-1 gap-3 sm:grid-cols-2"
            aria-label="Programming languages"
          >
            {languages.map((language) => (
              <Link
                className="group flex min-h-24 items-center justify-between rounded-lg border border-[var(--color-border-default)] bg-white px-5 py-4 text-[var(--color-text-primary)] shadow-[var(--shadow-card)] transition duration-[var(--motion-duration-base)] ease-out hover:-translate-y-1 hover:border-[var(--color-primary-500)] hover:bg-[var(--color-background-surface-alt)] hover:shadow-[var(--shadow-card-hover)] focus-visible:-translate-y-1 focus-visible:border-[var(--color-primary-500)] focus-visible:bg-[var(--color-background-surface-alt)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-primary-100)]"
                href={`/${language.slug}`}
                key={language.slug}
              >
                <span>
                  <span className="block text-xl font-black">
                    {language.name}
                  </span>
                  <span className="mt-1 block text-sm font-semibold text-[var(--color-text-muted)]">
                    {language.count} challenges
                  </span>
                </span>
                <span className="flex size-10 items-center justify-center rounded-full bg-[var(--color-primary-100)] text-lg font-black text-[var(--color-primary-500)] transition group-hover:bg-[var(--color-primary-500)] group-hover:text-white">
                  {language.name.charAt(0)}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-background-surface)] p-5 shadow-[var(--shadow-panel)]">
          <div className="mb-5 flex items-center justify-between border-b border-[var(--color-border-subtle)] pb-4">
            <div>
              <p className="text-sm font-black uppercase text-[var(--color-primary-500)]">
                Practice map
              </p>
              <p className="mt-1 text-sm font-semibold text-[var(--color-text-warm-muted)]">
                Problem folders by language
              </p>
            </div>
            <div className="rounded-full bg-[var(--color-dark-800)] px-3 py-1 text-sm font-black text-white">
              live
            </div>
          </div>

          <div className="space-y-5">
            {languages.map((language) => (
              <div key={language.slug}>
                <div className="mb-2 flex items-center justify-between gap-4">
                  <span className="font-bold text-[var(--color-dark-800)]">
                    {language.name}
                  </span>
                  <span className="text-sm font-bold text-[var(--color-text-warm-muted)]">
                    {language.count}
                  </span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-[var(--color-border-subtle)]">
                  <div
                    className="h-full rounded-full bg-[var(--color-primary-500)]"
                    style={{
                      width: `${Math.max(
                        8,
                        Math.round((language.count / totalProblems) * 100),
                      )}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
