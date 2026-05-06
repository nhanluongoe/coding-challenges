import Link from "next/link";
import type { ProblemActivity } from "@/lib/problems";
import { formatDate } from "@/lib/util";

type ProblemActivityCardProps = {
  problem: ProblemActivity;
};

export default function ProblemActivityCard({
  problem,
}: ProblemActivityCardProps) {
  return (
    <Link
      className="block rounded-lg border border-(--color-border-default) bg-white px-4 py-3 transition hover:-translate-y-px hover:border-(--color-primary-500) hover:bg-(--color-background-surface-alt) focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-(--color-primary-100)"
      href={`/${problem.language}/${problem.slug}`}
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
  );
}
