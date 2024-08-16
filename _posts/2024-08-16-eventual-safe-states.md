---
title: '802: Find Eventual Safe States'
date: 2024-08-16
permalink: /posts/2024/08/eventual-safe-states/
tags:
  - graph
  - graph-coloring
  - leetcode
  - dfs
---


# LeetCode 802: Find Eventual Safe States

## Problem Statement

Given a directed graph with `n` nodes labeled from `0` to `n - 1`, we need to identify all the **safe nodes** in the graph. A node is considered safe if every possible path starting from that node leads to a terminal node or another safe node. A terminal node is defined as a node that has no outgoing edges.

The graph is represented by a 0-indexed 2D integer array `graph`, where `graph[i]` is an integer array of nodes adjacent to node `i`, meaning there is a directed edge from node `i` to each node in `graph[i]`.

The task is to return an array containing all the safe nodes in ascending order.

### Example 1:
```plaintext
Input: graph = [[1,2],[2,3],[5],[0],[5],[],[]]
Output: [2,4,5,6]
```

## Explanation:

- Nodes 5 and 6 are terminal nodes as there are no outgoing edges from either of them.
- Nodes 2, 4, 5, and 6 are safe because every path starting at these nodes eventually leads to a terminal node.

### Example 2:
```plaintext
Input: graph = [[1,2,3,4],[1,2],[3,4],[0,4],[]]
Output: [4]
```

## Explanation:

- Only node 4 is a terminal node, and every path starting at node 4 leads to node 4, making it the only safe node.

## Constraints:

- `n == graph.length`
- `1 <= n <= 10^4`
- `0 <= graph[i].length <= n`
- `0 <= graph[i][j] <= n - 1`
- `graph[i] is sorted in a strictly increasing order.`
- The graph may contain self-loops.
- The number of edges in the graph will be in the range `[1, 4 * 10^4]`.

----

## My Approach

The problem can be tackled using Depth-First Search (DFS) combined with a coloring strategy to identify all eventual safe nodes in the graph.

Steps Involved

1. **DFS with Coloring:**
   - We initiate a DFS from each node to explore the graph. During the DFS, we use a `color` array to mark the state of each node:
     - `0`: Node is unvisited.
     - `1`: Node is being visited (currently in the DFS path).
     - `2`: Node is safe (all paths starting from this node lead to a terminal node or another safe node).
   - If we encounter a node that is already in the DFS path (`color[i] == 1`), it means we’ve detected a cycle, so the node is unsafe.
   - If a node and all its connected nodes are safe, we mark it as safe (`color[i] = 2`).

2. **Result Compilation:**
   - After processing all nodes using DFS, we collect all nodes that are marked as safe and return them in sorted order.


### Code Implementation:

Here’s the code that implements the above approach:

```cpp
class Solution {
public:

    static bool dfs(int i, vector<vector<int>> &graph, vector<int> &color){

        if(color[i] > 0){
            return color[i] == 2;
        } 

        color[i] = 1;
        vector<int> connectedNodes = graph[i];

        bool check = true;
        for(int k = 0; k < connectedNodes.size(); k++){

            int connectedNode = connectedNodes[k];
            if(color[connectedNode] == 2) continue;
            if(color[connectedNode] == 1 || !dfs(connectedNode, graph, color)) return false;
        }

        color[i] = 2;

        return true;

    };

    vector<int> eventualSafeNodes(vector<vector<int>>& graph) {

        set<int> terminalNodes;
        int n = graph.size();
        vector<int> color(n, 0);

        for(int i = 0; i < n; i++){

            if(dfs(i, graph, color)){
                terminalNodes.insert(i);
            }
        }

        vector<int> res (terminalNodes.begin(), terminalNodes.end());

        return res; 
    }
};
```

### Explanation:

- **DFS with Coloring:**
  - The `dfs` function performs the core logic. It checks whether a node and all nodes reachable from it are safe. If a node is already being visited (`color[i] == 1`), a cycle is detected, indicating the node is unsafe. Once a node is confirmed as safe, it is marked with `color[i] = 2`.

- **Eventual Safe Nodes:**
  - The main function iterates over all nodes and uses DFS to determine their safety. Safe nodes are stored in a set to ensure they are unique and are eventually converted into a sorted list for the final output.
  
### Conclusion

This approach efficiently identifies all eventual safe nodes in the graph by leveraging DFS and a coloring strategy to manage node states. The algorithm handles cycles and terminal nodes, ensuring that all returned nodes are indeed safe. The method is optimal for large graphs, making it well-suited for this problem.
