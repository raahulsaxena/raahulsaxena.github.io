---
title: 'Coding Patterns: A Comprehensive Guide'
date: 2024-07-12
permalink: /posts/2024/07/leetcode-patterns/
tags:
  - coding-patterns
  - leetcode
---

This post includes some popular problems sorted according to the different patterns.
This list excludes tree or graph related BFS and DFS, and dynamic programming.
I feel that those topics require their own posts!

- Backtracking
- Greedy
- Bit Manipulation
- Two Pointers
- Trie
- 2 Heaps
- Cyclic Sort
- In-place reversal of LinkedList
- K way merge
- Merge Intervals
- Sliding Window
- Binary Search
- Monotonic Stack




## Greedy Algorithmic Paradigm
Greedy algorithms make locally optimal choices at each step with the hope of finding a global optimum. They are often used when a problem can be solved by making a series of decisions that look best in the short term.


- [Valid Palindrome II](https://leetcode.com/problems/valid-palindrome-ii)
- [Reorganize String](https://leetcode.com/problems/reorganize-string)
- [Container With Most Water](https://leetcode.com/problems/container-with-most-water)
- [Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii)
- [Valid Parenthesis String](https://leetcode.com/problems/valid-parenthesis-string)
- [Bag of Tokens](https://leetcode.com/problems/bag-of-tokens)
- [Wildcard Matching](https://leetcode.com/problems/wildcard-matching)
- [Strong Password Checker](https://leetcode.com/problems/strong-password-checker)
- [Largest Palindromic Number](https://leetcode.com/problems/largest-palindromic-number)
- [Frequency of the Most Frequent Element](https://leetcode.com/problems/frequency-of-the-most-frequent-element)
- [Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii)
- [Boats to Save People](https://leetcode.com/problems/boats-to-save-people)
- [Minimum Increment to Make Array Unique](https://leetcode.com/problems/minimum-increment-to-make-array-unique)
- [Largest Number](https://leetcode.com/problems/largest-number)
- [Remove K Digits](https://leetcode.com/problems/remove-k-digits)




## Fixed Sliding Window
Sliding Window problems are useful when you need to calculate something over a range of elements in an array or string. In the fixed sliding window pattern, the window size is constant.


- [Sliding Window Maximum](https://leetcode.com/problems/max-consecutive-ones-iii/description/)
- [Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/description/)
- [Permutation in String](https://leetcode.com/problems/permutation-in-string/description/)
- [Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/description/)
- [Maximum Sum of Distinct Subarrays with Length K](https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/description/)

## Variable Sliding Window
In the variable sliding window pattern, the window size can change dynamically depending on the conditions of the problem.


- [Longest Substring Without Repeated Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/description/)
- [Fruit Into Baskets](https://leetcode.com/problems/fruit-into-baskets/description/)
- [Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/description/)
- [Subarray Product Less Than K](https://leetcode.com/problems/subarray-product-less-than-k/description/)
- [Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/description/)

# Top K elements
Top K Elements problems typically require finding the Kth largest or smallest elements in a data structure. These problems are often solved using heaps, which allow for efficient extraction of the Kth largest or smallest elements.

- [Kth Smallest element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst?envType=problem-list-v2&envId=xlepz4mv)
- [Kth Largest element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array?envType=problem-list-v2&envId=xlepz4mv)
- [Top K frequent elements](https://leetcode.com/problems/top-k-frequent-elements?envType=problem-list-v2&envId=xlepz4mv)
- [Find K closest elements](https://leetcode.com/problems/find-k-closest-elements?envType=problem-list-v2&envId=xlepz4mv)
- [Reorganize String](https://leetcode.com/problems/reorganize-string?envType=problem-list-v2&envId=xlepz4mv)
- [Sort characters by frequency](https://leetcode.com/problems/sort-characters-by-frequency?envType=problem-list-v2&envId=xlepz4mv)
- [Maximum frequency Stack](https://leetcode.com/problems/maximum-frequency-stack?envType=problem-list-v2&envId=xlepz4mv)
- [Course Schedule III](https://leetcode.com/problems/course-schedule-iii?envType=problem-list-v2&envId=xlepz4mv)


# K-Way merge
K-Way Merge problems typically involve merging K sorted lists or arrays. These problems are commonly solved using a min-heap, which allows for efficiently merging sorted data structures.

- [Find K pairs with Smallest Sums](https://leetcode.com/problems/find-k-pairs-with-smallest-sums?envType=problem-list-v2&envId=xlepm8xi)
- [Merge Two sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists?envType=problem-list-v2&envId=xlepm8xi)
- [Merge K sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists?envType=problem-list-v2&envId=xlepm8xi)
- [Kth smallest element in a sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix?envType=problem-list-v2&envId=xlepm8xi)
- [Smallest range covering elements from K lists](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists?envType=problem-list-v2&envId=xlepm8xi)

## Merge Intervals

Merge Intervals problems involve working with intervals or ranges. The goal is often to merge overlapping intervals or find a range that satisfies specific criteria. These problems are generally solved by first sorting the intervals and then iterating through them.

- [Merge Intervals](https://leetcode.com/problems/merge-intervals)
- [Insert Interval](https://leetcode.com/problems/insert-interval)
- [Interval List Intersections](https://leetcode.com/problems/interval-list-intersections)
- [Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals)
- [Meeting Rooms](https://leetcode.com/problems/meeting-rooms)
- [Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii)

## Cyclic Sort

Cyclic Sort is a pattern that involves sorting a list of numbers that range from 1 to `n`. The approach is based on placing each number at its correct index (i.e., number `i` at index `i-1`). This pattern is efficient for finding missing numbers, duplicates, or corrupt numbers in a given range.

- [Cyclic Sort](https://leetcode.com/problems/sort-an-array)
- [Find All Numbers Disappeared in an Array](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array)
- [Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number)
- [Find All Duplicates in an Array](https://leetcode.com/problems/find-all-duplicates-in-an-array)
- [Set Mismatch](https://leetcode.com/problems/set-mismatch)
- [First Missing Positive](https://leetcode.com/problems/first-missing-positive)

## In-Place Reversal of LinkedList

In-Place Reversal of LinkedList is a pattern where the linked list is reversed or modified without using extra space (in place). This pattern is useful for reversing a sublist, rotating the linked list, or detecting and removing cycles in the list.

- [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list)
- [Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii)
- [Rotate List](https://leetcode.com/problems/rotate-list)
- [Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group)
- [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle)
- [Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii)

## Bit Manipulation

Bit Manipulation is a powerful technique used to solve problems by directly manipulating bits. This pattern is often used in problems involving sets, subsets, and certain arithmetic operations.

- [Single Number](https://leetcode.com/problems/single-number)
- [Missing Number](https://leetcode.com/problems/missing-number)
- [Counting Bits](https://leetcode.com/problems/counting-bits)
- [Number of 1 Bits](https://leetcode.com/problems/number-of-1-bits)
- [Power of Two](https://leetcode.com/problems/power-of-two)
- [Sum of Two Integers](https://leetcode.com/problems/sum-of-two-integers)


## Binary Search

Binary Search is a pattern that involves dividing the search space in half with each step, typically used in sorted arrays or search problems. It's a highly efficient way to solve problems with logarithmic time complexity.

- [Binary Search](https://leetcode.com/problems/binary-search)
- [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array)
- [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array)
- [Find Peak Element](https://leetcode.com/problems/find-peak-element)
- [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays)
- [Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix)
- [Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix)

## Monotonic Stack

Monotonic Stack is a pattern where you maintain a stack with elements that are either entirely non-increasing or non-decreasing. This technique is useful for problems that require tracking the nearest larger or smaller elements.

- [Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram)
- [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water)
- [Daily Temperatures](https://leetcode.com/problems/daily-temperatures)
- [Next Greater Element I](https://leetcode.com/problems/next-greater-element-i)
- [Next Greater Element II](https://leetcode.com/problems/next-greater-element-ii)
- [Sum of Subarray Minimums](https://leetcode.com/problems/sum-of-subarray-minimums)

## Two Pointers

Two Pointers is a pattern that uses two pointers to traverse an array or list. It is often used in problems where you need to find pairs of elements that satisfy a certain condition, such as finding the pair of numbers that add up to a given sum.

- [Two Sum](https://leetcode.com/problems/two-sum)
- [3Sum](https://leetcode.com/problems/3sum)
- [Container With Most Water](https://leetcode.com/problems/container-with-most-water)
- [Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list)
- [Valid Palindrome](https://leetcode.com/problems/valid-palindrome)
- [Sort Colors](https://leetcode.com/problems/sort-colors)
- [Move Zeroes](https://leetcode.com/problems/move-zeroes)

## Trie

A Trie is a specialized tree-like data structure used to store associative arrays where the keys are usually strings. Tries are used for efficient information retrieval, such as prefix searching.

- [Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree)
- [Word Search II](https://leetcode.com/problems/word-search-ii)
- [Replace Words](https://leetcode.com/problems/replace-words)
- [Add and Search Word - Data structure design](https://leetcode.com/problems/add-and-search-word-data-structure-design)
- [Maximum XOR of Two Numbers in an Array](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array)
- [Design Search Autocomplete System](https://leetcode.com/problems/design-search-autocomplete-system)
- [Map Sum Pairs](https://leetcode.com/problems/map-sum-pairs)

## 2 Heaps

The 2 Heaps pattern is useful for solving problems where you need to find the median of a data stream or maintain the smallest/largest K elements in a dataset. Typically, a min-heap and a max-heap are used together.

- [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream)
- [Sliding Window Median](https://leetcode.com/problems/sliding-window-median)
- [IPO](https://leetcode.com/problems/ipo)
- [Smallest Range Covering Elements from K Lists](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists)
- [Kth Largest Element in a Stream](https://leetcode.com/problems/kth-largest-element-in-a-stream)
- [Find Right Interval](https://leetcode.com/problems/find-right-interval)

## Backtracking

Backtracking is a technique for solving problems recursively by building a solution incrementally, one piece at a time, and removing those solutions that fail to satisfy the problem's constraints.

- [Permutations](https://leetcode.com/problems/permutations)
- [Subsets](https://leetcode.com/problems/subsets)
- [Combination Sum](https://leetcode.com/problems/combination-sum)
- [Word Search](https://leetcode.com/problems/word-search)
- [N-Queens](https://leetcode.com/problems/n-queens)
- [Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning)
- [Sudoku Solver](https://leetcode.com/problems/sudoku-solver)