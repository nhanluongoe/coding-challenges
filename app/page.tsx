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
    <main className="page-shell">
      <section className="hero" aria-labelledby="page-title">
        <h1 id="page-title">Keep solving coding challenges</h1>

        <div className="language-grid" aria-label="Programming languages">
          {languages.map((language) => (
            <Link className="language-button" href="#" key={language.slug}>
              {language.name}
            </Link>
          ))}
        </div>
      </section>

      <footer>Built by Nhan Luong - @ {currentYear}</footer>
    </main>
  );
}
