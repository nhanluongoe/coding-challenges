"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { ProblemSummary } from "@/lib/problems";

type ProblemListProps = {
  initialVisibleCount: number;
  incrementBy: number;
  languageSlug: string;
  languageName: string;
  problems: ProblemSummary[];
};

export default function ProblemList({
  initialVisibleCount,
  incrementBy,
  languageSlug,
  languageName,
  problems,
}: ProblemListProps) {
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  const visibleProblems = useMemo(
    () => problems.slice(0, visibleCount),
    [problems, visibleCount],
  );
  const remainingCount = Math.max(0, problems.length - visibleProblems.length);

  return (
    <section className="mb-14 sm:mb-16" aria-label={`${languageName} problems`}>
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-black tracking-normal">Problem list</h2>
          <p className="mt-1 text-sm font-semibold text-(--color-text-muted)">
            Showing {visibleProblems.length} of {problems.length} challenges
          </p>
        </div>

        {remainingCount > 0 ? (
          <p className="text-sm font-bold text-(--color-text-warm-muted)">
            {remainingCount} still tucked away
          </p>
        ) : (
          <p className="text-sm font-bold text-(--color-primary-500)">
            Full list expanded
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProblems.map((problem, index) => (
          <Link
            className="group flex min-h-36 flex-col justify-between rounded-lg border border-(--color-border-default) bg-white p-5 shadow-(--shadow-card) transition duration-(--motion-duration-base) ease-out hover:-translate-y-1 hover:border-(--color-primary-500) hover:bg-(--color-background-surface-alt) hover:shadow-(--shadow-card-hover) focus-visible:-translate-y-1 focus-visible:border-(--color-primary-500) focus-visible:bg-(--color-background-surface-alt) focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-(--color-primary-100)"
            href={`/${languageSlug}/${problem.slug}`}
            key={problem.slug}
          >
            <span>
              <span className="mb-4 inline-flex rounded-full bg-(--color-primary-100) px-3 py-1 text-xs font-black text-(--color-primary-500)">
                #{String(index + 1).padStart(3, "0")}
              </span>
              <span className="block text-xl font-black leading-tight">
                {problem.title}
              </span>
            </span>
            <span className="mt-6 flex items-center justify-between gap-4 border-t border-(--color-border-subtle) pt-4 text-sm font-bold text-(--color-text-muted)">
              <span>{problem.solution}</span>
              <span className="text-(--color-primary-500) transition group-hover:translate-x-1">
                Open
              </span>
            </span>
          </Link>
        ))}
      </div>

      {remainingCount > 0 ? (
        <div className="mt-8 flex justify-center pb-2 sm:mt-10 sm:pb-4">
          <button
            className="rounded-full border border-(--color-primary-500) bg-(--color-primary-500) px-6 py-3 text-sm font-black text-white shadow-(--shadow-card-hover) transition hover:-translate-y-px hover:bg-(--color-primary-600) focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-(--color-primary-100)"
            onClick={() =>
              setVisibleCount((current) =>
                Math.min(current + incrementBy, problems.length),
              )
            }
            type="button"
          >
            See more problems
          </button>
        </div>
      ) : null}
    </section>
  );
}
