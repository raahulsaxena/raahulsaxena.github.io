---
title: 'Graphs: A Comprehensive Guide'
date: 2024-07-12
permalink: /posts/2024/08/graph-problems-guide/
tags:
  - graphs
  - algorithms
  - leetcode
---

Graph problems are a fundamental part of computer science and are frequently encountered in competitive programming and technical interviews. They require a good understanding of graph theory and the ability to recognize various problem patterns. In this post, we'll explore different types of graph problems, the patterns they follow, and some example problems to practice.

### Important Sub-topics

- Breadth-First Search (BFS)
- Depth-First Search (DFS)
- Connected Components
- Dijkstra’s Algorithm
- Union-Find
- Minimum Spanning Tree (MST) - Prim's and Kruskal's Algorithms
- Topological Sort
- Floyd-Warshall and Bellman-Ford Algorithms

## Pattern 1: Breadth-First Search (BFS)

### Overview:
Breadth-First Search is an algorithm for traversing or searching tree or graph data structures. It starts at the root (or an arbitrary node in a graph) and explores the neighbor nodes at the present depth prior to moving on to nodes at the next depth level.

### Problems:

- [Flood Fill](https://leetcode.com/problems/flood-fill/)
- [Number of Islands](https://leetcode.com/problems/number-of-islands/)
- [Word Ladder I](https://leetcode.com/problems/word-ladder/)
- [Word Ladder II](https://leetcode.com/problems/word-ladder-ii/)
- [Evaluate Division](https://leetcode.com/problems/evaluate-division/)

### Code Example:

```cpp
// BFS implementation in C++
#include <queue>
#include <vector>

void bfs(int startNode, const std::vector<std::vector<int>>& graph) {
    std::queue<int> q;
    std::vector<bool> visited(graph.size(), false);
    
    q.push(startNode);
    visited[startNode] = true;
    
    while (!q.empty()) {
        int node = q.front();
        q.pop();
        // Process the node
        
        for (int neighbor : graph[node]) {
            if (!visited[neighbor]) {
                q.push(neighbor);
                visited[neighbor] = true;
            }
        }
    }
}
```


## Pattern 2: Depth First Search
### Overview:

Depth-First Search is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root (or an arbitrary node in a graph) and explores as far as possible along each branch before backtracking.


### Problems:

- [Number of Islands](https://leetcode.com/problems/number-of-islands/)
- [Flood Fill](https://leetcode.com/problems/flood-fill/)
- [Longest Increasing Path in a Matrix](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/)
- [Evaluate Division](https://leetcode.com/problems/evaluate-division/)
- [Robot Room Cleaner](https://leetcode.com/problems/robot-room-cleaner/)
- [Most Stones Removed with Same Row or Column](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/)
- [Reconstruct Itinerary](https://leetcode.com/problems/reconstruct-itinerary/)
- [Tree Diameter](https://leetcode.com/problems/tree-diameter/)
- [Accounts Merge](https://leetcode.com/problems/accounts-merge/)

### Code Example:

```cpp
// DFS implementation in C++
#include <vector>

void dfs(int node, const std::vector<std::vector<int>>& graph, std::vector<bool>& visited) {
    visited[node] = true;
    // Process the node
    
    for (int neighbor : graph[node]) {
        if (!visited[neighbor]) {
            dfs(neighbor, graph, visited);
        }
    }
}

```



## Pattern 3: Connected Components

###Overview:

Connected Components refer to a set of nodes such that there is a path between any two nodes in the set. In undirected graphs, it can be found using either BFS or DFS.


### Problems:

- [Number of Provinces](https://leetcode.com/problems/number-of-provinces/)
- [Number of Connected Components in an Undirected Graph](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/)
- [Number of Operations to Make Network Connected](https://leetcode.com/problems/number-of-operations-to-make-network-connected/)
- [Accounts Merge](https://leetcode.com/problems/accounts-merge/)
- [Critical Connections in a Network](https://leetcode.com/problems/critical-connections-in-a-network/)

## Pattern 4: Djikstra

---

### Overview:

Dijkstra’s Algorithm is used to find the shortest path between nodes in a graph, which may represent, for example, road networks. It works by picking the unvisited node with the smallest known distance, calculating the distance through it to each unvisited neighbor, and updating the neighbor’s distance if smaller. Then it marks the visited node as complete.

### Problems:

- [Path With Maximum Minimum Valued](https://leetcode.com/problems/path-with-maximum-minimum-value/)
- [Network Delay Time](https://leetcode.com/problems/network-delay-time/)
- [Path with Maximum Probability](https://leetcode.com/problems/path-with-maximum-probability/)
- [Path With Minimum Effort](https://leetcode.com/problems/path-with-minimum-effort/)
- [Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/)

### Code Example:
```cpp
// Dijkstra's Algorithm in C++
#include <vector>
#include <queue>
#include <utility>

void dijkstra(int start, const std::vector<std::vector<std::pair<int, int>>>& graph) {
    std::vector<int> dist(graph.size(), INT_MAX);
    dist[start] = 0;
    std::priority_queue<std::pair<int, int>, std::vector<std::pair<int, int>>, std::greater<>> pq;
    pq.push({0, start});
    
    while (!pq.empty()) {
        int distance = pq.top().first;
        int node = pq.top().second;
        pq.pop();
        
        if (distance > dist[node]) continue;
        
        for (auto& neighbor : graph[node]) {
            int nextNode = neighbor.first;
            int weight = neighbor.second;
            
            if (dist[node] + weight < dist[nextNode]) {
                dist[nextNode] = dist[node] + weight;
                pq.push({dist[nextNode], nextNode});
            }
        }
    }
}

```


## Pattern 5: Union Find problems

### Overview:
The Union-Find data structure, also known as Disjoint Set Union (DSU), is used to keep track of elements which are split into one or more disjoint sets. It provides efficient operations for union and find.


### Problems:

- [Number of Islands](https://leetcode.com/problems/number-of-islands/)
- [Largest Component Size by Common Factor](https://leetcode.com/problems/largest-component-size-by-common-factor/)
- [Most Stones Removed with Same Row or Column](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/)
- [Number of Connected Components in an Undirected Graph](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/)


### Code Example:

```cpp
// Union-Find implementation in C++
#include <vector>

class UnionFind {
public:
    UnionFind(int size) : root(size), rank(size, 1) {
        for (int i = 0; i < size; ++i) {
            root[i] = i;
        }
    }

    int find(int x) {
        if (x == root[x]) return x;
        return root[x] = find(root[x]);
    }

    void unionSet(int x, int y) {
        int rootX = find(x);
        int rootY = find(y);
        if (rootX != rootY) {
            if (rank[rootX] > rank[rootY]) {
                root[rootY] = rootX;
            } else if (rank[rootX] < rank[rootY]) {
                root[rootX] = rootY;
            } else {
                root[rootY] = rootX;
                rank[rootX] += 1;
            }
        }
    }

private:
    std::vector<int> root;
    std::vector<int> rank;
};
```

## Pattern 6: Minimum Spanning Tree

### Overview:

A Minimum Spanning Tree is a subset of the edges of a connected, edge-weighted undirected graph that connects all the vertices together, without any cycles and with the minimum possible total edge weight.

### Problems:

- [Connecting Cities With Minimum Cost](https://leetcode.com/problems/connecting-cities-with-minimum-cost/)
- [Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/)

### Code Example:

```cpp
// Kruskal's Algorithm for MST in C++
#include <vector>
#include <algorithm>

class KruskalMST {
public:
    KruskalMST(int size) : uf(size) {}

    int findMST(const std::vector<std::vector<int>>& edges) {
        int mstWeight = 0;
        std::vector<std::vector<int>> sortedEdges = edges;
        std::sort(sortedEdges.begin(), sortedEdges.end(), [](const auto& a, const auto& b) {
            return a[2] < b[2];
        });
        
        for (const auto& edge : sortedEdges) {
            if (uf.find(edge[0]) != uf.find(edge[1])) {
                uf.unionSet(edge[0], edge[1]);
                mstWeight += edge[2];
            }
        }
        
        return mstWeight;
    }

private:
    UnionFind uf;
};

```
## Pattern 7: Topological Sort

### Overview:

Topological Sort is a linear ordering of vertices in a Directed Acyclic Graph (DAG) such that for every directed edge uv, vertex u comes before v in the ordering.


### Problems:

- [Course Schedule I](https://leetcode.com/problems/course-schedule/)
- [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/)
- [Alien Dictionary](https://leetcode.com/problems/alien-dictionary/solution/)
- [Sort Items by Groups Respecting Dependencies](https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/)

### Code Example:
```cpp
// Topological Sort using DFS
#include <vector>
#include <stack>

void topologicalSortUtil(int v, const std::vector<std::vector<int>>& graph, std::vector<bool>& visited, std::stack<int>& Stack) {
    visited[v] = true;

    for (int i : graph[v])
        if (!visited[i])
            topologicalSortUtil(i, graph, visited, Stack);

    Stack.push(v);
}

void topologicalSort(const std::vector<std::vector<int>>& graph) {
    std::stack<int> Stack;
    std::vector<bool> visited(graph.size(), false);

    for (int i = 0; i < graph.size(); i++)
        if (visited[i] == false)
            topologicalSortUtil(i, graph, visited, Stack);

    while (Stack.empty() == false) {
        std::cout << Stack.top() << " ";
        Stack.pop();
    }
}
```


## Additional Algorithms (Optional)


## Floyd Warshall

- [Find the City With the Smallest Number of Neighbors at a Threshold Distance](https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/)
- [Network Delay Time](https://leetcode.com/problems/network-delay-time/)

## Bellman-Ford

- [Network Delay Time](https://leetcode.com/problems/network-delay-time/)