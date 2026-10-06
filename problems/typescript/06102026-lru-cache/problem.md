---
solvedAt: "2026-10-06"
---
# LRU Cache

- Language: typescript
- Original path: `typescript/06102026-lru-cache/code.ts`
- Source: Algorithm practice
- Solution: `code.ts`

# Problems

Design and implement a data structure for a Least Recently Used (LRU) cache that supports the following operations:

- `LRUCache(capacity: number)`: Initialize an LRU cache with the specified capacity.
- `get(key: number): number`: Return the value associated with the key. Return `-1` if the key does not exist. Accessing a key makes it the most recently used key.
- `put(key: number, value: number): void`: Add a key and its value to the cache. If the key already exists, update its value and make it the most recently used key. If adding a key exceeds the capacity, evict the least recently used entry.

## Example

```text
Capacity: 3

Operations:
put(1, 100)
put(2, 250)
get(2)       -> 250
put(4, 300)
put(3, 200)  // evicts key 1
get(4)       -> 300
get(1)       -> -1

Output: [250, 300, -1]
```

# Constraints

- All keys and values are positive integers.
- The cache capacity is positive.

# Solutions

Implement your solution in `code.ts`.

# Edge cases

- The cache has a capacity of one.
- Accessing a key changes which entry is least recently used.
- Updating an existing key does not increase the cache size.
- Updating an existing key makes it the most recently used entry.
- Getting a missing key returns `-1`.
