---
solvedAt: "2022-05-14"
---
# Merge Meetings

- Language: typescript
- Original path: `typescript/140522-merge-meeting.ts`
- Source: Algorithm practice
- Solution: `code.ts`

# Problems

Given time intervals, combine every overlapping or touching interval and return the condensed schedule.

# Solutions

Sort intervals by start time, then scan once while extending the current interval whenever the next interval overlaps.

# Edge cases

- Empty or single-interval input.
- Intervals that only touch at an endpoint.
- Input intervals arriving out of order.
