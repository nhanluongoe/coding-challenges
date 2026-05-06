"use client";

import { useMemo, useState } from "react";
import ProblemActivityCard from "@/components/ProblemActivityCard";
import SelectedDayProblems from "@/components/SelectedDayProblems";
import type { ActivityDashboard } from "@/lib/problems";
import {
  formatDateWithoutYear,
  getActivityCells,
  getActivityColor,
  getDayActivityByDate,
  getDaysForYear,
  getRecentResolvedProblems,
  getSolvedLabel,
  getYears,
} from "@/lib/util";

type ResolutionDashboardProps = {
  dashboard: ActivityDashboard;
};

export default function ResolutionDashboard({
  dashboard,
}: ResolutionDashboardProps) {
  const years = useMemo(() => getYears(dashboard.days), [dashboard.days]);
  const [selectedYear, setSelectedYear] = useState(
    years[0] ?? new Date().getFullYear(),
  );
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
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
  const selectedDayActivity = useMemo(
    () => getDayActivityByDate(selectedDays, selectedDate),
    [selectedDays, selectedDate],
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
                    <button
                      aria-label={getSolvedLabel(cell.count, cell.date)}
                      aria-pressed={selectedDate === cell.date}
                      className="group relative inline-flex size-3 cursor-pointer rounded-[3px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-primary-500)"
                      key={cell.date}
                      onClick={() => setSelectedDate(cell.date)}
                      title={getSolvedLabel(cell.count, cell.date)}
                      type="button"
                    >
                      <span
                        className={`size-3 rounded-[3px] ${getActivityColor(cell.count)} ${
                          selectedDate === cell.date
                            ? "ring-2 ring-(--color-dark-900) ring-offset-2"
                            : ""
                        }`}
                      />
                      <span className="-translate-x-1/2 pointer-events-none absolute top-5 left-1/2 z-20 hidden w-max rounded-md bg-(--color-dark-900) px-2 py-1 text-xs font-black whitespace-nowrap text-white shadow-(--shadow-sm) group-hover:block group-focus:block">
                        {getSolvedLabel(cell.count, cell.date)}
                      </span>
                    </button>
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
                onClick={() => {
                  setSelectedYear(year);
                  setSelectedDate(null);
                }}
                role="tab"
                type="button"
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {selectedDate ? (
          <SelectedDayProblems
            selectedDate={selectedDate}
            selectedDayActivity={selectedDayActivity}
          />
        ) : null}

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
              <ProblemActivityCard
                key={`${problem.language}/${problem.slug}`}
                problem={problem}
              />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
