"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type {
  ActivityDashboard,
  DailyActivity,
  ProblemActivity,
} from "@/lib/problems";

type ResolutionDashboardProps = {
  dashboard: ActivityDashboard;
};

type ActivityCell =
  | {
      date: string;
      count: number;
      problems: ProblemActivity[];
      type: "day";
    }
  | {
      key: string;
      type: "blank";
    };

function parseDateKey(dateKey: string) {
  const [year, month, day] = dateKey.split("-").map(Number);

  return new Date(year, month - 1, day);
}

function toDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function formatDate(dateKey: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(parseDateKey(dateKey));
}

function formatDateWithoutYear(dateKey: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
  }).format(parseDateKey(dateKey));
}

function getActivityColor(count: number) {
  if (count >= 6) return "bg-(--color-primary-600)";
  if (count >= 3) return "bg-(--color-primary-500)";
  if (count >= 2) return "bg-[#64a47e]";
  if (count === 1) return "bg-[#b7d7c2]";

  return "bg-(--color-border-subtle)";
}

function getSolvedLabel(count: number, date: string) {
  const noun = count === 1 ? "problem" : "problems";

  return `${count} ${noun} solved on ${formatDate(date)}`;
}

function getYears(days: DailyActivity[]) {
  const years = new Set(
    days.map((day) => parseDateKey(day.date).getFullYear()),
  );

  return [...years].sort((a, b) => b - a);
}

function getDaysForYear(days: DailyActivity[], year: number) {
  return days.filter((day) => parseDateKey(day.date).getFullYear() === year);
}

function getActivityCells(days: DailyActivity[], year: number): ActivityCell[] {
  const activityByDate = new Map(days.map((day) => [day.date, day]));
  const startDate = new Date(year, 0, 1);
  const endDate = new Date(year, 11, 31);
  const blanks = Array.from({ length: startDate.getDay() }, (_, index) => ({
    key: `blank-${year}-${index}`,
    type: "blank" as const,
  }));
  const dayCount =
    Math.round(
      (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24),
    ) + 1;
  const realDays = Array.from({ length: dayCount }, (_, index) => {
    const date = new Date(year, 0, index + 1);
    const dateKey = toDateKey(date);
    const activity = activityByDate.get(dateKey);

    return {
      date: dateKey,
      count: activity?.count ?? 0,
      problems: activity?.problems ?? [],
      type: "day" as const,
    };
  });

  return [...blanks, ...realDays];
}

function getRecentResolvedProblems(days: DailyActivity[]) {
  return days
    .flatMap((day) => day.problems)
    .sort((a, b) => {
      const dateComparison = (b.resolvedAt ?? "").localeCompare(
        a.resolvedAt ?? "",
      );

      return dateComparison || a.title.localeCompare(b.title);
    })
    .slice(0, 8);
}

export default function ResolutionDashboard({
  dashboard,
}: ResolutionDashboardProps) {
  const years = useMemo(() => getYears(dashboard.days), [dashboard.days]);
  const [selectedYear, setSelectedYear] = useState(
    years[0] ?? new Date().getFullYear(),
  );
  const selectedDays = useMemo(
    () => getDaysForYear(dashboard.days, selectedYear),
    [dashboard.days, selectedYear],
  );
  const activityCells = useMemo(
    () => getActivityCells(selectedDays, selectedYear),
    [selectedDays, selectedYear],
  );
  const recentResolvedProblems = useMemo(
    () => getRecentResolvedProblems(selectedDays),
    [selectedDays],
  );
  const activeDayCount = selectedDays.length;
  const resolvedCount = selectedDays.reduce(
    (total, day) => total + day.count,
    0,
  );
  const peakDay = selectedDays.reduce(
    (largest, day) => (day.count > largest.count ? day : largest),
    selectedDays[0] ?? { date: "", count: 0, problems: [] },
  );
  const startDate = `${selectedYear}-01-01`;
  const endDate = `${selectedYear}-12-31`;

  return (
    <section
      className="mx-auto w-full max-w-6xl py-8 sm:py-12"
      aria-labelledby="activity-title"
    >
      <div className="mb-6">
        <p className="mb-3 inline-flex rounded-full border border-(--color-border-default) bg-white px-4 py-2 text-sm font-bold text-(--color-primary-500) shadow-(--shadow-sm)">
          Solved-date metadata
        </p>
        <h2
          className="text-3xl font-black tracking-normal sm:text-4xl"
          id="activity-title"
        >
          Resolution dashboard
        </h2>
      </div>

      <div className="rounded-lg border border-(--color-border-strong) bg-(--color-background-surface) p-5 shadow-(--shadow-panel)">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_120px]">
          <div>
            <div className="mb-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg border border-(--color-border-default) bg-white px-4 py-4">
                <p className="text-3xl font-black">{resolvedCount}</p>
                <p className="mt-1 text-sm font-semibold text-(--color-text-warm-muted)">
                  Dated solves
                </p>
              </div>
              <div className="rounded-lg border border-(--color-border-default) bg-white px-4 py-4">
                <p className="text-3xl font-black">{activeDayCount}</p>
                <p className="mt-1 text-sm font-semibold text-(--color-text-warm-muted)">
                  Active days
                </p>
              </div>
              <div className="rounded-lg border border-(--color-border-default) bg-(--color-background-surface-alt) px-4 py-4">
                <p className="text-3xl font-black">{peakDay.count}</p>
                <p className="mt-1 text-sm font-semibold text-(--color-text-secondary)">
                  Peak day
                </p>
              </div>
            </div>

            <div className="overflow-x-auto rounded-lg border border-(--color-border-default) bg-white p-4">
              <div
                className="grid auto-cols-[14px] grid-flow-col grid-rows-7 gap-1"
                style={{ gridTemplateRows: "repeat(7, minmax(0, 1fr))" }}
              >
                {activityCells.map((cell) =>
                  cell.type === "blank" ? (
                    <span
                      aria-hidden="true"
                      className="size-3"
                      key={cell.key}
                    />
                  ) : (
                    <span
                      aria-label={getSolvedLabel(cell.count, cell.date)}
                      className="group relative inline-flex size-3"
                      key={cell.date}
                      role="img"
                      title={getSolvedLabel(cell.count, cell.date)}
                    >
                      <span
                        className={`size-3 rounded-[3px] ${getActivityColor(cell.count)}`}
                      />
                      <span className="-translate-x-1/2 pointer-events-none absolute top-5 left-1/2 z-20 hidden w-max rounded-md bg-(--color-dark-900) px-2 py-1 text-xs font-black whitespace-nowrap text-white shadow-(--shadow-sm) group-hover:block group-focus:block">
                        {getSolvedLabel(cell.count, cell.date)}
                      </span>
                    </span>
                  ),
                )}
              </div>
              <div className="mt-4 flex items-center justify-between gap-4 text-xs font-bold text-(--color-text-muted)">
                <span>{formatDateWithoutYear(startDate)}</span>
                <span>{selectedYear}</span>
                <span>{formatDateWithoutYear(endDate)}</span>
              </div>
            </div>
          </div>

          <div
            className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible"
            aria-label="Resolution years"
            role="tablist"
          >
            {years.map((year) => (
              <button
                aria-selected={year === selectedYear}
                className={`rounded-lg px-4 py-2 text-left text-sm font-black transition focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-(--color-primary-100) ${
                  year === selectedYear
                    ? "bg-(--color-primary-500) text-white shadow-(--shadow-sm)"
                    : "bg-white text-(--color-text-muted) hover:bg-(--color-background-surface-alt) hover:text-(--color-primary-500)"
                }`}
                key={year}
                onClick={() => setSelectedYear(year)}
                role="tab"
                type="button"
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        <section className="mt-6" aria-labelledby="recent-resolved-title">
          <div className="mb-4 border-b border-(--color-border-subtle) pb-4">
            <h3
              className="text-xl font-black tracking-normal"
              id="recent-resolved-title"
            >
              Recent resolved
            </h3>
            <p className="mt-1 text-sm font-semibold text-(--color-text-muted)">
              Latest dated problem folders in {selectedYear}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {recentResolvedProblems.map((problem) => (
              <Link
                className="block rounded-lg border border-(--color-border-default) bg-white px-4 py-3 transition hover:-translate-y-px hover:border-(--color-primary-500) hover:bg-(--color-background-surface-alt) focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-(--color-primary-100)"
                href={`/${problem.language}/${problem.slug}`}
                key={`${problem.language}/${problem.slug}`}
              >
                <span className="block text-sm font-black text-(--color-primary-500)">
                  {formatDate(problem.resolvedAt ?? "")}
                </span>
                <span className="mt-1 block font-black leading-tight">
                  {problem.title}
                </span>
                <span className="mt-2 block text-xs font-bold uppercase text-(--color-text-muted)">
                  {problem.languageName}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
