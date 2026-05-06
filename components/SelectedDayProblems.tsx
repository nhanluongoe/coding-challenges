import ProblemActivityCard from "@/components/ProblemActivityCard";
import type { DailyActivity } from "@/lib/problems";
import { formatDate, getSolvedLabel } from "@/lib/util";

type SelectedDayProblemsProps = {
  selectedDate: string;
  selectedDayActivity: DailyActivity | null;
};

export default function SelectedDayProblems({
  selectedDate,
  selectedDayActivity,
}: SelectedDayProblemsProps) {
  return (
    <section className="mt-6" aria-labelledby="selected-day-title">
      <div className="mb-4 border-b border-(--color-border-subtle) pb-4">
        <h3
          className="text-xl font-black tracking-normal"
          id="selected-day-title"
        >
          Resolved on {formatDate(selectedDate)}
        </h3>
        <p className="mt-1 text-sm font-semibold text-(--color-text-muted)">
          {selectedDayActivity
            ? getSolvedLabel(selectedDayActivity.count, selectedDate)
            : getSolvedLabel(0, selectedDate)}
        </p>
      </div>

      {selectedDayActivity ? (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {selectedDayActivity.problems.map((problem) => (
            <ProblemActivityCard
              key={`${problem.language}/${problem.slug}`}
              problem={problem}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-(--color-border-default) bg-white px-4 py-5 text-sm font-bold text-(--color-text-muted)">
          No problems solved on this date.
        </div>
      )}
    </section>
  );
}
