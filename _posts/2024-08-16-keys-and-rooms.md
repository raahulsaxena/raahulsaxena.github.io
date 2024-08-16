---
title: '841: Keys and Rooms'
date: 2024-08-16
permalink: /posts/2024/08/keys-and-rooms/
tags:
  - graph
  - depth-first-search
  - leetcode
  - dfs
  - recursion
---

## Problem Statement

You are given `n` rooms labeled from `0` to `n - 1`, and all the rooms are locked except for room `0`. Your goal is to visit all the rooms, but you cannot enter a locked room without having its key.

When you visit a room, you may find a set of distinct keys in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock other rooms.

Given an array `rooms` where `rooms[i]` is the set of keys that you can obtain if you visited room `i`, return `true` if you can visit all the rooms, or `false` otherwise.

### Example 1:
```plaintext
Input: rooms = [[1],[2],[3],[]]
Output: true
```
**Explanation:**
- We visit room `0` and pick up key `1`.
- We then visit room `1` and pick up key `2`.
- We then visit room `2` and pick up key `3`.
- We then visit room `3`.
- Since we were able to visit every room, we return `true`.

### Example 2:
```plaintext
Input: rooms = [[1,3],[3,0,1],[2],[0]]
Output: false
```
**Explanation:**
- We cannot enter room number `2` since the only key that unlocks it is in that room.

## Constraints:

- `n == rooms.length`
- `2 <= n <= 1000`
- `0 <= rooms[i].length <= 1000`
- `1 <= sum(rooms[i].length) <= 3000`
- `0 <= rooms[i][j] < n`
- All the values of `rooms[i]` are unique.

---

## My Approach

To solve this problem, I utilized a **Depth-First Search (DFS)** strategy to simulate the process of visiting rooms and collecting keys. The idea is to start from room `0`, which is unlocked, and recursively visit all reachable rooms by collecting and using keys found along the way.

### Steps Involved:

1. **DFS to Visit Rooms:**
   - We initiate a DFS from room `0` because it is the only unlocked room initially.
   - During the DFS, we mark each visited room as `true` in a `visited` array.
   - For every room visited, we recursively visit all the rooms that can be unlocked with the keys found in the current room.
   - This continues until all possible rooms that can be unlocked are visited.

2. **Checking All Rooms:**
   - After the DFS completes, we check the `visited` array to ensure that all rooms have been visited.
   - If there is any room that hasn’t been visited, we return `false`, indicating that it’s impossible to visit all the rooms.
   - If all rooms have been visited, we return `true`.

### Code Implementation:

Here’s the code implementing the above approach:

```cpp
class Solution {
public:

    static void visit(int i, vector<vector<int>>& rooms, vector<bool> &visited ){

        if(visited[i]) return;

        visited[i] = true;

        for(int k = 0; k < rooms[i].size(); k++){

            visit(rooms[i][k], rooms, visited);

        }

        return;

    };

    bool canVisitAllRooms(vector<vector<int>>& rooms) {

        int n = rooms.size();
        vector<bool> visited(n, false);

        visit(0, rooms, visited);
              
        for(int i = 0; i < visited.size(); i++){
            if(!visited[i]) return false;
        }

        return true;
    }
};
```

### Explanation:

- **DFS to Visit Rooms:**
  - The `visit` function is the core of the DFS logic. It marks the current room as visited and then recursively visits all rooms for which the current room holds the keys.
  - If a room is already visited, the function returns immediately to prevent unnecessary recursive calls.

- **Checking All Rooms:**
  - After initiating the DFS from room `0`, we iterate through the `visited` array to check if there’s any room that hasn’t been visited. If all rooms are visited, we return `true`; otherwise, we return `false`.

### Conclusion

This approach efficiently solves the problem by leveraging DFS to explore all accessible rooms starting from room `0`. The recursive nature of DFS ensures that all possible rooms that can be unlocked are visited, and the final check guarantees that we have visited every room. This method is well-suited for the constraints of the problem, ensuring both correctness and efficiency.
