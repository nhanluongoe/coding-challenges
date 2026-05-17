---
solvedAt: "2022-05-14"
---
# Merge Meetings

- Language: typescript
- Original path: `typescript/140522-merge-meeting.ts`
- Source: Algorithm practice
- Solution: `code.ts`

# Problems

Given a collection of intervals with start and end values, return a condensed list where every overlapping interval has been combined. Intervals may arrive unsorted, so the solution must compare them by start time before merging. If one interval ends exactly when another starts, treat that boundary according to the local convention used by the solution, commonly as a merge for meeting ranges. Preserve only the minimal set of intervals needed to represent the same covered time.

## Examples

- `[[1, 3], [2, 6], [8, 10]]` -> `[[1, 6], [8, 10]]`.
- `[[1, 2], [2, 3]]` -> `[[1, 3]]` when touching intervals merge.
- `[]` -> `[]`.

# Solutions

Sort intervals by start time, then scan once while extending the current interval whenever the next interval overlaps.

# Edge cases

- Empty or single-interval input.
- Intervals that only touch at an endpoint.
- Input intervals arriving out of order.
