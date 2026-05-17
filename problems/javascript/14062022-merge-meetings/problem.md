---
solvedAt: "2022-06-14"
---
# Merge Meetings

- Language: javascript
- Original path: `javascript/14062022-merge-meetings.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Given time intervals, combine every overlapping or touching interval and return the condensed schedule.

# Solutions

Sort intervals by start time, then scan once while extending the current interval whenever the next interval overlaps.
Time complexity: O(nlogn),
Space complexity: O(n)

# Edge cases

- Empty or single-interval input.
- Intervals that only touch at an endpoint.
- Input intervals arriving out of order.
