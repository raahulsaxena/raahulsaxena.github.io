---
layout: post
title: Topological Sort
date: 2024-08-15 15:09:00
description: Explanation of TopologicalSort
tags: formatting code
categories: sample-posts
featured: false
---

Topological Sort only exists in a Directed Acyclic Graph (DAG), which is a graph with directed edges and no cycles. The idea behind topological sorting is to order the vertices of the graph in such a way that for every directed edge (u → v), vertex u comes before vertex v in the ordering.

### Characteristics of Topological Sort

- **DAG Property**: As mentioned, topological sorting is only possible if the graph is a Directed Acyclic Graph. If there are cycles in the graph, a topological sort is not possible because there is no valid ordering of vertices.
  
- **Uniqueness**: A topological sort can have multiple valid orderings, especially if the graph has vertices with no dependencies. However, for many DAGs, the ordering is unique.

- **Applications**: Topological sort has wide applications in real-world problems, including:
  - Task scheduling (ensuring that certain tasks are completed before others).
  - Resolving dependencies in package management systems.
  - Compiler optimization to order statements for efficient execution.

### Example

Consider a graph where the vertices represent tasks and the edges represent dependencies between tasks. A directed edge from task A to task B implies that task A must be completed before task B can start.

For the following graph:

A possible topological sort would be `A, C, B, E, D`, as this respects all the dependency constraints.

### Algorithm to Perform Topological Sort

There are two main methods for performing topological sort: **Kahn's Algorithm** (using in-degrees) and **Depth-First Search (DFS)**.

#### 1. Kahn's Algorithm (Using In-Degree)

1. Calculate the in-degree (number of incoming edges) for each vertex.
2. Push all vertices with an in-degree of 0 (no dependencies) to a queue.
3. While the queue is not empty:
   - Remove a vertex from the queue and add it to the topological sort.
   - For each adjacent vertex, reduce its in-degree by 1.
   - If any vertex’s in-degree becomes 0, push it to the queue.
4. If the number of vertices added to the topological sort equals the total number of vertices, then a valid topological sort exists.

#### 2. DFS-based Algorithm

1. Perform a Depth-First Search (DFS) traversal of the graph.
2. Keep track of visited nodes to avoid revisiting.
3. Mark nodes as "visited" and add them to the topological sort once all their adjacent vertices have been processed.
4. Reverse the order of vertices in the final result, as nodes are added to the topological sort only after their adjacent vertices are fully explored.

### Time Complexity

- **Kahn’s Algorithm**: The time complexity of Kahn’s Algorithm is O(V + E), where V is the number of vertices and E is the number of edges in the graph.
  
- **DFS-based Algorithm**: The time complexity of the DFS-based approach is also O(V + E), as each vertex and edge is visited once.
