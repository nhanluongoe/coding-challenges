import Link from "next/link";
import { getLanguages } from "@/lib/problems";

export default async function Home() {
  const languages = await getLanguages();
  const currentYear = new Date().getFullYear();
  const totalProblems = languages.reduce(
    (total, language) => total + language.count,
    0,
  );
  const featuredLanguage = languages.reduce(
    (largest, language) => (language.count > largest.count ? language : largest),
    languages[0],
  );

  return (
    <main className="grid min-h-screen grid-rows-[1fr_auto] overflow-hidden bg-[#f6f3eb] px-4 py-6 text-[#18201d] sm:px-6 sm:py-8">
      <section
        className="mx-auto grid w-full max-w-6xl self-center gap-10 py-8 lg:grid-cols-[minmax(0,1.04fr)_minmax(360px,0.7fr)] lg:items-center"
        aria-labelledby="page-title"
      >
        <div>
          <p className="mb-5 inline-flex rounded-full border border-[#c9d7cd] bg-white px-4 py-2 text-sm font-bold text-[#19684b] shadow-sm">
            {totalProblems} problems across {languages.length} languages
          </p>

          <h1
            id="page-title"
            className="mb-6 max-w-3xl text-[clamp(3rem,8vw,6.6rem)] font-black leading-[0.92] tracking-normal text-[#18201d]"
          >
            Keep solving coding challenges
          </h1>

          <p className="mb-8 max-w-2xl text-lg leading-8 text-[#52625b] sm:text-xl">
            Pick a language, revisit a pattern, and keep the reps moving. This
            collection is organized straight from the local problem directory.
          </p>

          <div className="mb-8 grid grid-cols-3 gap-3">
            <div className="rounded-lg border border-[#ded5c6] bg-[#fffdf8] px-4 py-4">
              <p className="text-2xl font-black text-[#18201d]">
                {totalProblems}
              </p>
              <p className="mt-1 text-sm font-semibold text-[#6b5f52]">
                Challenges
              </p>
            </div>
            <div className="rounded-lg border border-[#cfdad3] bg-[#f8fffb] px-4 py-4">
              <p className="text-2xl font-black text-[#18201d]">
                {languages.length}
              </p>
              <p className="mt-1 text-sm font-semibold text-[#53675e]">
                Languages
              </p>
            </div>
            <div className="rounded-lg border border-[#d9d2e6] bg-[#fcfaff] px-4 py-4">
              <p className="text-2xl font-black text-[#18201d]">
                {featuredLanguage.name}
              </p>
              <p className="mt-1 text-sm font-semibold text-[#665b78]">
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
                className="group flex min-h-24 items-center justify-between rounded-lg border border-[#d8d0c2] bg-white px-5 py-4 text-[#18201d] shadow-[0_10px_30px_rgba(45,38,25,0.06)] transition duration-200 ease-out hover:-translate-y-1 hover:border-[#19684b] hover:bg-[#fbfff9] hover:shadow-[0_16px_38px_rgba(25,104,75,0.14)] focus-visible:-translate-y-1 focus-visible:border-[#19684b] focus-visible:bg-[#fbfff9] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#19684b]/25"
                href={`/${language.slug}`}
                key={language.slug}
              >
                <span>
                  <span className="block text-xl font-black">
                    {language.name}
                  </span>
                  <span className="mt-1 block text-sm font-semibold text-[#6b756f]">
                    {language.count} challenges
                  </span>
                </span>
                <span className="flex size-10 items-center justify-center rounded-full bg-[#e7f1eb] text-lg font-black text-[#19684b] transition group-hover:bg-[#19684b] group-hover:text-white">
                  {language.name.charAt(0)}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-[#d7cdbb] bg-[#fffdf8] p-5 shadow-[0_24px_70px_rgba(45,38,25,0.12)]">
          <div className="mb-5 flex items-center justify-between border-b border-[#eee5d6] pb-4">
            <div>
              <p className="text-sm font-black uppercase text-[#19684b]">
                Practice map
              </p>
              <p className="mt-1 text-sm font-semibold text-[#7a6c5b]">
                Problem folders by language
              </p>
            </div>
            <div className="rounded-full bg-[#202821] px-3 py-1 text-sm font-black text-white">
              live
            </div>
          </div>

          <div className="space-y-5">
            {languages.map((language) => (
              <div key={language.slug}>
                <div className="mb-2 flex items-center justify-between gap-4">
                  <span className="font-bold text-[#202821]">
                    {language.name}
                  </span>
                  <span className="text-sm font-bold text-[#7a6c5b]">
                    {language.count}
                  </span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-[#ece4d6]">
                  <div
                    className="h-full rounded-full bg-[#19684b]"
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

      <footer className="mx-auto w-full max-w-6xl border-t border-[#ddd3c3] pt-5 text-sm font-semibold text-[#6d6358]">
        Built by Nhan Luong - @ {currentYear}
      </footer>
    </main>
  );
}
