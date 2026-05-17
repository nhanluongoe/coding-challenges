---
solvedAt: "2021-07-01"
---
# Remove Duplicates

- Language: ruby
- Original path: `ruby/010721-remove-duplicates.rb`
- Source: Algorithm practice
- Solution: `code.rb`

# Problems

Remove duplicates from a sorted array in place and return the new logical length.

# Solutions

Use a slow pointer for the next unique slot and a fast pointer to scan the array.

# Edge cases

- Empty input.
- All values are duplicates.
- No duplicates.
