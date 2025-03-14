---
layout: post
title: Let's do Dynamic Programming
date: 2025-03-13 15:09:00
description: The best dynamic programming study plan (incl. questions)
tags: leetcode
categories: sample-posts
featured: false
---


This page is continually updated with new and improved content to ensure the best curation for Dynamic Programming problems.
## Important Links:

- Source : Striver SDE Sheet, 
- [Ultimate Dynamic Programming Roadmap](https://www.reddit.com/r/leetcode/comments/14o10jd/the_ultimate_dynamic_programming_roadmap/)
- [Youtube Link](https://www.youtube.com/watch?v=9k31KcQmS_U&ab_channel=AlgoMonster)
[- DP Patterns (Coded)](https://leetcode.com/discuss/study-guide/458695/Dynamic-Programming-Patterns)
- [All DP Problems sorted patterwise](https://leetcode.com/discuss/study-guide/1000929/solved-all-dynamic-programming-dp-problems-in-7-months)

## Pattern 1: 0/1 Knapsack (Bounded)


Solution is built upon subset, but with few more restrictions. For example you want to complete some courses, they have some reward points associated. But you can attend only k number of courses. Now try to maximize your points. This type of problems are just an extension to simple DP, where you add one more dimension to consider provided restriction.

### Problems:

- [Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/)
- [Last Stone Weight II](https://leetcode.com/problems/last-stone-weight-ii/)
- [Target Sum](https://leetcode.com/problems/target-sum/)

## Pattern 2: 0/1 Knapsack (Unbounded)


Dp state is similar to the classical knapsack problem.

### Problems:

- [Coin Change I](https://leetcode.com/problems/coin-change/description/)
- [Coin Change II](https://leetcode.com/problems/coin-change-ii/description/)

## Pattern 3: Fibonacci (or Linear DP)


You just need to find the repetitive part of the solution and improve it by saving its result.

Dp solution requires us to solve the sub problem on every prefix of the array. A prefix of the array is a subarray from 0 to i for some i.

### Problems:

- [Fibonacci Number](https://leetcode.com/problems/fibonacci-number/)
- [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)
- [Min Cost Climbing Stairs](https://leetcode.com/problems/min-cost-climbing-stairs/)
- [House Robber I](https://leetcode.com/problems/house-robber/)
- [House Robber II](https://leetcode.com/problems/house-robber-ii/)
- [Decode Ways](https://leetcode.com/problems/decode-ways/)

## Pattern 4: String DP


### Problems:

- [Is Subsequence](https://leetcode.com/problems/is-subsequence/)
- [Palindromic Partitioning I](https://leetcode.com/problems/palindrome-partitioning/)
- [Palindromic Partitioning II](https://leetcode.com/problems/palindrome-partitioning-ii/)
- [Word Break](https://leetcode.com/problems/word-break/)
- [Longest Valid Parentheses](https://leetcode.com/problems/longest-valid-parentheses/)
- [Word Break II](https://leetcode.com/problems/word-break-ii/)
- [Concatenated Words](https://leetcode.com/problems/concatenated-words/description/)
- [Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/description/)

## Pattern 5: Longest Common Subsequence (LCS) [String DP]


### Problems:

- [Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/)
- [Maximum length of repeated Subarray](https://leetcode.com/problems/maximum-length-of-repeated-subarray/)
- [Edit Distance](https://leetcode.com/problems/edit-distance/description/?envType=problem-list-v2&envId=55afh7m7)
- [Interleaving String](https://leetcode.com/problems/interleaving-string/)
- [Longest Happy String](https://leetcode.com/problems/longest-happy-string/description/)
- [Longest String Chain](https://leetcode.com/problems/longest-string-chain/description/)
- [Shortest Common Supersequence](https://leetcode.com/problems/shortest-common-supersequence/)
- [Minimum Insertion Steps to Make a String Palindrome](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/description/)

## Pattern 6: Palindromes (LCS)


### Problems:

- [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/)
- [Longest Palindromic Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence/)
- [Minimum Insertion Steps to make a string Palindrome](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/description/)
- [Valid Palindrome III](https://leetcode.com/problems/valid-palindrome-iii/)
- [Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/)

## Pattern 7: Longest Increasing Subsequence (LIS)


Dp problem is solved on every prefix of the array. Transition is from every index j < i.

### Problems:

- [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)
- [Russian Doll Envelops](https://leetcode.com/problems/russian-doll-envelopes/)
- [Number of Longest Increasing Subsequence](https://leetcode.com/problems/number-of-longest-increasing-subsequence/)
- [Make Array Strictly Increasing](https://leetcode.com/problems/make-array-strictly-increasing/description/)

## Pattern 8: Matrix Chain Multiplication


Dp problem is solved on every single interval (subarray) of the array.

### Problems:

- [Remove Boxes](https://leetcode.com/problems/remove-boxes/)
- [Unique Binary Search Trees](https://leetcode.com/problems/unique-binary-search-trees/)
- [Burst Balloons](https://leetcode.com/problems/burst-balloons/)
- [Minimum Cost Tree from Leaf Values](https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/)

## Pattern 9: Kadane’s Algorithm


### Problems:

- [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)
- [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)
- [Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/)
- [Longest Turbulent Subarray](https://leetcode.com/problems/longest-turbulent-subarray/description/)
- [Largest Divisible Subset](https://leetcode.com/problems/largest-divisible-subset/description/)

## Pattern 10: DP on Trees


### Problems:

- [Binary Tree Cameras](https://leetcode.com/problems/binary-tree-cameras/description/)
- [Maximum Sum BST in Binary Tree](https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/description/)
- [Longest ZigZag Path in a Binary Tree](https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/description/)
- [House Robber III](https://leetcode.com/problems/house-robber-iii/description/)
- [Unique Binary Search Trees II](https://leetcode.com/problems/unique-binary-search-trees-ii/description/)

## Pattern 11: Grid DP


Dp table will have the same dimensions as grid, the state at cell i,j will be related to the grid at cell i,j.

### Problems:

- [Matrix Block Sum](https://leetcode.com/problems/matrix-block-sum/)
- [Dungeon Game](https://leetcode.com/problems/dungeon-game/)
- [Maximal Square](https://leetcode.com/problems/maximal-square/)
- [Minimum Falling Path Sum](https://leetcode.com/problems/minimum-falling-path-sum/)
- [Unique Paths](https://leetcode.com/problems/unique-paths/)
- [Unique Paths II](https://leetcode.com/problems/unique-paths-ii/)
- [Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/)

## Pattern 12: DP + Bitmask


### Problems:

- [Partition to K equal Sum Subsets](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/)
- [Stickers to Spell Word](https://leetcode.com/problems/stickers-to-spell-word/)
- [Shortest Path Visiting All Nodes](https://leetcode.com/problems/shortest-path-visiting-all-nodes/)

## Pattern 13: Graph DP


### Problems:

- [Cheapest Flights within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/)
- [Find the shortest superstring](https://leetcode.com/problems/find-the-shortest-superstring/)