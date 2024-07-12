



---
title: 'Curated Binary Tree Leetcode Guide'
date: 2024-07-12
permalink: /posts/2024/07/binary-tree-guide/
tags:
  - binary-tree
  - leetcode
---



# Trees


- **Prerequisites** that you should be familiar with before : *Recursion, stack, queue*
- All the **traversals** are important.
- **LCA & Height of Binary Tree** are important subproblems.
- A basic instinct for solving DFS based questions is to do a recursive call and for all BFS(level order traversal) is to make queue and iterate, but also think upon how to iterate in DFS(Hint think on stack) and recurse in BFS based.
- **Intuition for Level Order Traversal** iteratively using queue:
    - Construct a queue of type: TreeNode `queue<TreeNode* > q`, initially push the given root in it.
    - Iterate through the queue until empty:
        - Store the current size of queue `tempSize`, this will be the size of the current level of the tree.
        - Now we need to traverse this level so iterate for `tempSize>=0` :
            - Pop the current element and apply the needed operation for the same and if left or right child exist then pass them to the queue.

## Important Tree Patterns


- LCA: Ancestor Problems
- Rooted Path: Root to Leaf path Problems
- Serialize and Deserialize
- Level order Traversal related
- Node Deletion
- Tree Construction

## Day 1: Basic Traversals (3)



- [Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/description/) (Do Iterative too)
- [Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/description/) (Do Iterative too)
- [Postorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/description/) (Do Iterative too)

## Day 2: Advanced Traversals (5)


- [Level order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/description/)
- [Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/)
- [Vertical Order Traversal](https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/description/)
- Morris Inorder Traversal
- Morris Preorder Traversal

## Day 3: Views of Binary Tree (4)


- [Top View of Binary Tree](https://www.geeksforgeeks.org/problems/top-view-of-binary-tree/1)
- [Left View of Binary Tree](https://www.geeksforgeeks.org/problems/left-view-of-binary-tree/1)
- [Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/description/)
- [Boundary of a Binary Tree](https://leetcode.com/problems/boundary-of-binary-tree/description/)

## Day 4: Binary Tree Properties and Depth Calculations (9)


- [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/description/)
- [Minimum Depth of Binary Tree](https://leetcode.com/problems/minimum-depth-of-binary-tree/description/)
- [Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/)
- [Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/description/)
- [Maximum Width of Binary Tree](https://leetcode.com/problems/maximum-width-of-binary-tree/description/)
- [Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/description/)
- [Find Leaves of Binary Tree](https://leetcode.com/problems/find-leaves-of-binary-tree/description/)
- [Maximum Level Sum of a Binary Tree](https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/)
- [Deepest Leaves Sum](https://leetcode.com/problems/deepest-leaves-sum/description/)

## Day 5: Lowest Common Ancestor (4)


- [Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)
- [Maximum Difference Between Node and Ancestor](https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/description/)
- [Lowest Common Ancestor of Deepest Leaves](https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/description/)
- [Kth Ancestor of a Tree Node](https://leetcode.com/problems/kth-ancestor-of-a-tree-node/description/)

## Day 6: Rooted Path - Root to Leaf (4)

---

- [Binary Tree Paths](https://leetcode.com/problems/binary-tree-paths/description/)
- [Sum Root to Leaf Numbers](https://leetcode.com/problems/sum-root-to-leaf-numbers/description/)
- [Pseudo-Palindromic Paths in a Binary Tree](https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/description/)
- [Path Sum III](https://leetcode.com/problems/path-sum-iii/description/)

## Day 7: Tree Construction and Conversion (7)

- [Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/)
- [Construct Binary Tree from Inorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/)
- [Flatten Binary Tree to Linked List](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description/)
- [Construct String from Binary Tree](https://leetcode.com/problems/construct-string-from-binary-tree/description/)
- [Maximum Binary Tree](https://leetcode.com/problems/maximum-binary-tree/description/)
- [Recover a Tree from Preorder Traversal](https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/description/)
- [All Possible Fulll Binary Trees](https://leetcode.com/problems/all-possible-full-binary-trees/description/)

## Day 8: Advance Binary Tree Problems (3)

- [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/description/)
- [Serialize and Deserialize the Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/description/)
- [Binary Tree Cameras](https://leetcode.com/problems/binary-tree-cameras/)