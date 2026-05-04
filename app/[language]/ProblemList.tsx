"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { ProblemSummary } from "@/lib/problems";

type ProblemListProps = {
  initialVisibleCount: number;
  incrementBy: number;
  languageName: string;
  problems: ProblemSummary[];
};

export default function ProblemList({
  initialVisibleCount,
  incrementBy,
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
          <p className="mt-1 text-sm font-semibold text-[#6b756f]">
            Showing {visibleProblems.length} of {problems.length} challenges
          </p>
        </div>

        {remainingCount > 0 ? (
          <p className="text-sm font-bold text-[#7a6c5b]">
            {remainingCount} still tucked away
          </p>
        ) : (
          <p className="text-sm font-bold text-[#19684b]">
            Full list expanded
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProblems.map((problem, index) => (
          <Link
            className="group flex min-h-36 flex-col justify-between rounded-lg border border-[#d8d0c2] bg-white p-5 shadow-[0_10px_30px_rgba(45,38,25,0.06)] transition duration-200 ease-out hover:-translate-y-1 hover:border-[#19684b] hover:bg-[#fbfff9] hover:shadow-[0_16px_38px_rgba(25,104,75,0.14)] focus-visible:-translate-y-1 focus-visible:border-[#19684b] focus-visible:bg-[#fbfff9] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#19684b]/25"
            href="#"
            key={problem.slug}
          >
            <span>
              <span className="mb-4 inline-flex rounded-full bg-[#e7f1eb] px-3 py-1 text-xs font-black text-[#19684b]">
                #{String(index + 1).padStart(3, "0")}
              </span>
              <span className="block text-xl font-black leading-tight">
                {problem.title}
              </span>
            </span>
            <span className="mt-6 flex items-center justify-between gap-4 border-t border-[#eee5d6] pt-4 text-sm font-bold text-[#6b756f]">
              <span>{problem.solution}</span>
              <span className="text-[#19684b] transition group-hover:translate-x-1">
                Open
              </span>
            </span>
          </Link>
        ))}
      </div>

      {remainingCount > 0 ? (
        <div className="mt-8 flex justify-center pb-2 sm:mt-10 sm:pb-4">
          <button
            className="rounded-full border border-[#19684b] bg-[#19684b] px-6 py-3 text-sm font-black text-white shadow-[0_12px_28px_rgba(25,104,75,0.18)] transition hover:-translate-y-px hover:bg-[#12573f] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#19684b]/25"
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
