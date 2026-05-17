---
solvedAt: "2024-07-31"
---
# Minimum Substring Window

- Language: javascript
- Original path: `javascript/sliding-window/minimum-substr-window.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Given a source string and a pattern string, find the shortest substring of the source that contains every character required by the pattern. Character multiplicity matters, so a pattern containing two copies of a character requires two copies in the window. If several windows contain the pattern, return the shortest one; if no window qualifies, return an empty string or the variant's no-result value.

## Examples

- `"ADOBECODEBANC"`, pattern `"ABC"` -> `"BANC"`.
- Pattern longer than string -> `""`.
- `"aa"`, pattern `"aa"` -> `"aa"`.

# Solutions

Use recursive depth-first traversal, returning the information each parent needs from its children.
Time complexity: O(n)
Space complexity: O(1)

# Edge cases

- Empty tree.
- Single-node tree.
- Skewed tree that stresses recursion depth or balance checks.
