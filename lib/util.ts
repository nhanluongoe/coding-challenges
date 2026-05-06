import type { DailyActivity, ProblemActivity } from "@/lib/problems";

export type ActivityCell =
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

export function titleize(value: string) {
  return value
    .replace(/\.[^.]+$/, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export function getCodeLanguage(solution: string, language: string) {
  const extension = solution.includes(".")
    ? (solution.split(".").at(-1) ?? "")
    : "";
  const languageByExtension: Record<string, string> = {
    go: "go",
    java: "java",
    js: "javascript",
    rb: "ruby",
    ts: "typescript",
  };

  return languageByExtension[extension] ?? language;
}

export function getResolvedDateFromMarkdown(markdown: string) {
  const frontmatterMatch = markdown.match(/^---\n([\s\S]*?)\n---/);
  const frontmatterSolvedAt = frontmatterMatch?.[1].match(
    /^solvedAt:\s*["']?(\d{4}-\d{2}-\d{2})["']?$/m,
  )?.[1];
  const listSolvedAt = markdown.match(
    /^-\s*(?:Solved|Resolved|Completed):\s*`?(\d{4}-\d{2}-\d{2})`?$/im,
  )?.[1];

  return frontmatterSolvedAt ?? listSolvedAt ?? null;
}

export function stripFrontmatter(markdown: string) {
  return markdown.replace(/^---\n[\s\S]*?\n---\n*/, "");
}

export function parseDateKey(dateKey: string) {
  const [year, month, day] = dateKey.split("-").map(Number);

  return new Date(year, month - 1, day);
}

export function toDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function formatDate(dateKey: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(parseDateKey(dateKey));
}

export function formatDateWithoutYear(dateKey: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
  }).format(parseDateKey(dateKey));
}

export function getActivityColor(count: number) {
  if (count >= 6) return "bg-(--color-primary-600)";
  if (count >= 3) return "bg-(--color-primary-500)";
  if (count >= 2) return "bg-[#64a47e]";
  if (count === 1) return "bg-[#b7d7c2]";

  return "bg-(--color-border-subtle)";
}

export function getSolvedLabel(count: number, date: string) {
  const noun = count === 1 ? "problem" : "problems";

  return `${count} ${noun} solved on ${formatDate(date)}`;
}

export function getYears(days: DailyActivity[]) {
  const years = new Set(
    days.map((day) => parseDateKey(day.date).getFullYear()),
  );

  return [...years].sort((a, b) => b - a);
}

export function getDaysForYear(days: DailyActivity[], year: number) {
  return days.filter((day) => parseDateKey(day.date).getFullYear() === year);
}

export function getActivityCells(
  days: DailyActivity[],
  year: number,
): ActivityCell[] {
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

export function getRecentResolvedProblems(days: DailyActivity[]) {
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
