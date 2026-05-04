import Link from "next/link";
import { readdir } from "node:fs/promises";
import path from "node:path";

const displayNames: Record<string, string> = {
  go: "Go",
  java: "Java",
  javascript: "JavaScript",
  ruby: "Ruby",
  typescript: "TypeScript",
};

async function getLanguages() {
  const problemsDirectory = path.join(process.cwd(), "problems");
  const entries = await readdir(problemsDirectory, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => ({
      slug: entry.name,
      name:
        displayNames[entry.name] ??
        entry.name
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" "),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export default async function Home() {
  const languages = await getLanguages();
  const currentYear = new Date().getFullYear();

  return (
    <main className="grid min-h-screen grid-rows-[1fr_auto] bg-[#f7f8f5] px-4 py-9 text-[#1d2521] sm:px-6 sm:pb-7 sm:pt-14">
      <section
        className="mx-auto w-full max-w-[920px] self-center"
        aria-labelledby="page-title"
      >
        <h1
          id="page-title"
          className="mb-6 max-w-[760px] text-[clamp(2.5rem,7vw,5.75rem)] font-bold leading-[0.95] tracking-normal sm:mb-8"
        >
          Keep solving coding challenges
        </h1>

        <div
          className="grid grid-cols-1 gap-3 sm:grid-cols-[repeat(auto-fit,minmax(148px,1fr))]"
          aria-label="Programming languages"
        >
          {languages.map((language) => (
            <Link
              className="inline-flex min-h-14 items-center justify-center rounded-lg border border-[#d8ded5] bg-white text-base font-bold text-[#1d2521] no-underline transition duration-150 ease-out hover:-translate-y-px hover:border-[#157f58] hover:bg-[#eaf4ee] hover:text-[#157f58] focus-visible:-translate-y-px focus-visible:border-[#157f58] focus-visible:bg-[#eaf4ee] focus-visible:text-[#157f58] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#157f58]/25"
              href="#"
              key={language.slug}
            >
              {language.name}
            </Link>
          ))}
        </div>
      </section>

      <footer className="mx-auto mt-12 w-full max-w-[920px] text-[0.95rem] text-[#66736d]">
        Built by Nhan Luong - @ {currentYear}
      </footer>
    </main>
  );
}
