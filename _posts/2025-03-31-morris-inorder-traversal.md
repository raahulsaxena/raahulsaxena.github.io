---
layout: post
title: Tree traversals in O(1) space? Let's do Morris Traversals
date: 2025-03-31 15:09:00
description: Basics of thread synchronization in C++
tags: [mutex, condition-variable, multi-threading]
categories: [Systems Coding]
featured: false
---

## Intuition

Tree traversals typically use **recursion** (O(h) space for stack) or **explicit stack-based iteration** (O(n) space). But what if we could achieve **O(1) space complexity**? That’s where **Morris Traversal** comes in!

Morris Traversal modifies the tree temporarily by creating **threaded links** to traverse without extra space.

### Steps:
1. If `curr` has no left child:
   - Print `curr` (process the node)
   - Move `curr` to its right child
2. If `curr` has a left child:
   - Find the **rightmost node** (predecessor) in `curr->left` subtree.
   - If the predecessor’s `right` is NULL:
     - Make it point to `curr` (threading the tree).
     - Move `curr` to its left.
   - If the predecessor’s `right` already points to `curr` (thread exists):
     - Remove the thread.
     - Print `curr`.
     - Move `curr` to its right child.

This effectively simulates **inorder traversal without recursion or extra space!**

## Implementation

Here's the C++ implementation:

```cpp
class Solution {
public:
    vector<int> inorderTraversal(TreeNode* root) {
        vector<int> res;
        TreeNode* curr = root;

        while (curr != NULL) {
            if (curr->left == NULL) {
                res.push_back(curr->val);
                curr = curr->right;
            } else {
                TreeNode* prev = curr->left;
                while (prev->right && prev->right != curr) {
                    prev = prev->right;
                }
                
                if (prev->right == NULL) {
                    prev->right = curr;
                    curr = curr->left;
                } else {
                    prev->right = NULL;
                    res.push_back(curr->val);
                    curr = curr->right;
                }
            }
        }
        return res;
    }
};
```

## Why is this efficient?
- **Time Complexity:** O(n) (each node is visited at most twice)
- **Space Complexity:** O(1) (no extra stack or recursion depth used)

## When to use Morris Traversal?
- If modifying the tree temporarily is acceptable
- When optimizing space is a priority

This technique is particularly useful for **inorder** traversal but can be adapted for **preorder** as well. Morris traversal helps achieve iterative tree traversal **without recursion or additional memory overhead**. 🚀
