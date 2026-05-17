"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import EyeIcon from "@/components/icons/EyeIcon";

type ProblemRevealPanelsProps = {
  markdown: string;
  highlightedCode: string;
  solution: string;
  codeLanguageLabel: string;
};

function splitMarkdown(markdown: string) {
  const solutionMatch = markdown.match(/^# Solutions\s*$/m);

  if (!solutionMatch || solutionMatch.index === undefined) {
    return {
      beforeSolution: markdown,
      solutionMarkdown: "",
      afterSolution: "",
    };
  }

  const beforeSolution = markdown.slice(0, solutionMatch.index).trimEnd();
  const solutionStart = solutionMatch.index;
  const afterSolutionMatch = markdown
    .slice(solutionStart + solutionMatch[0].length)
    .match(/\n# (?!Solutions\b).+$/m);

  if (!afterSolutionMatch || afterSolutionMatch.index === undefined) {
    return {
      beforeSolution,
      solutionMarkdown: markdown.slice(solutionStart).trim(),
      afterSolution: "",
    };
  }

  const afterSolutionStart =
    solutionStart + solutionMatch[0].length + afterSolutionMatch.index + 1;

  return {
    beforeSolution,
    solutionMarkdown: markdown.slice(solutionStart, afterSolutionStart).trim(),
    afterSolution: markdown.slice(afterSolutionStart).trim(),
  };
}

export default function ProblemRevealPanels({
  markdown,
  highlightedCode,
  solution,
  codeLanguageLabel,
}: ProblemRevealPanelsProps) {
  const { beforeSolution, solutionMarkdown, afterSolution } =
    splitMarkdown(markdown);
  const [isSolutionVisible, setIsSolutionVisible] = useState(false);
  const [isCodeVisible, setIsCodeVisible] = useState(false);

  return (
    <section className="grid min-w-0 flex-1 gap-4 xl:grid-cols-[minmax(320px,0.78fr)_minmax(0,1.42fr)]">
      <article className="min-w-0 rounded-lg border border-(--color-border-strong) bg-(--color-background-surface) p-5 shadow-(--shadow-card) sm:p-6">
        <div className="mb-5 border-b border-(--color-border-subtle) pb-4">
          <h2 className="text-2xl font-black tracking-normal">Requirement</h2>
        </div>
        <div className="markdown-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {beforeSolution}
          </ReactMarkdown>
          {solutionMarkdown ? (
            <section className="mt-5 overflow-hidden rounded-lg border border-(--color-border-default) bg-white shadow-(--shadow-sm)">
              <div className="flex items-center justify-between gap-3 px-4 py-3">
                <span className="min-w-0">
                  <span className="block text-sm font-black text-(--color-text-primary)">
                    Solution notes
                  </span>
                  <span className="block text-sm font-semibold text-(--color-text-muted)">
                    {isSolutionVisible ? "Visible" : "Hidden"}
                  </span>
                </span>
                <button
                  aria-label={
                    isSolutionVisible
                      ? "Hide solution notes"
                      : "Show solution notes"
                  }
                  aria-pressed={isSolutionVisible}
                  className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-(--color-border-default) bg-(--color-primary-100) text-(--color-primary-600) transition hover:-translate-y-px hover:bg-(--color-primary-500) hover:text-white focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-(--color-primary-100)"
                  type="button"
                  onClick={() => setIsSolutionVisible((visible) => !visible)}
                >
                  <EyeIcon hidden={!isSolutionVisible} />
                </button>
              </div>
              {isSolutionVisible ? (
                <div className="border-t border-(--color-border-subtle) px-4 py-4">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {solutionMarkdown}
                  </ReactMarkdown>
                </div>
              ) : null}
            </section>
          ) : null}
          {afterSolution ? (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {afterSolution}
            </ReactMarkdown>
          ) : null}
        </div>
      </article>

      <article className="min-w-0 overflow-hidden rounded-lg border border-(--color-dark-800) bg-(--color-dark-900) shadow-(--shadow-code)">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
          <div className="min-w-0">
            <h2 className="text-2xl font-black tracking-normal text-white">
              Solution
            </h2>
            <p className="mt-1 break-all text-sm font-bold text-(--color-dark-muted)">
              {solution}
            </p>
          </div>
          <span className="shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs font-black uppercase text-(--color-dark-text)">
            {codeLanguageLabel}
          </span>
        </div>
        <div className="relative">
          <div
            className={`solution-code max-h-[78vh] overflow-auto transition duration-300 ${
              isCodeVisible ? "blur-0" : "blur-[7px]"
            }`}
            // biome-ignore lint/security/noDangerouslySetInnerHtml: Shiki generates highlighted HTML from local repository source files.
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
          {!isCodeVisible ? (
            <div className="absolute inset-0 grid place-items-center bg-(--color-dark-900)/55 px-5 text-center backdrop-blur-[1px]">
              <button
                aria-label="Reveal solution"
                className="group inline-flex min-h-28 min-w-44 flex-col items-center justify-center rounded-lg border border-white/15 bg-(--color-dark-800)/95 px-6 py-5 text-white shadow-(--shadow-code) transition hover:-translate-y-1 hover:border-white/30 hover:bg-[#26342b] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-white/25"
                type="button"
                onClick={() => setIsCodeVisible(true)}
              >
                <span className="mb-3 flex size-11 items-center justify-center rounded-full bg-white/10 transition group-hover:bg-white group-hover:text-(--color-dark-900)">
                  <EyeIcon hidden />
                </span>
                <span className="text-base font-black">Reveal solution</span>
              </button>
            </div>
          ) : null}
        </div>
      </article>
    </section>
  );
}
