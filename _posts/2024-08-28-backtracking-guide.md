---
title: 'Backtracking : A Comprehensive Guide'
date: 2024-08-28
permalink: /posts/2024/08/backtracking-guide/
tags:
  - backtracking
  - leetcode
---


Backtracking is a powerful algorithmic technique for solving problems related to permutations, combinations, and subsets. The essence of backtracking lies in exploring all potential solutions and then backtracking by undoing the last decision and trying the next possibility. Below is a generalized template for backtracking that can be adapted to a variety of problems like subsets, permutations, and combinations.

```cpp
void backtrack(vector<int>& nums, int start, vector<int>& curr, vector<vector<int>>& res) {
    // Base case: When to add `curr` to `res`
    if (/* condition to add curr to res */) {
        res.push_back(curr); // condition when we should stop our exploration
        return;
    }

    // Recursive case: Try each possibility from the current start position
    for (int i = start; i < nums.size(); i++) {
        // Make a choice by adding nums[i] to curr
        curr.push_back(nums[i]);  // explore candidate

        // Recur with updated start position
        backtrack(nums, i + 1, curr, res);

        // Undo the choice (backtrack)
        curr.pop_back(); // abandon candidate
    }
}
```

A more generalized pattern for backtracking problems looks like the code below:
```cpp

void backtrack(arguments) {
    if (condition == true) { // Condition when we should stop our exploration.
        result.push_back(current);
        return;
    }
    for (int i = num; i <= last; i++) {
        current.push_back(i); // Explore candidate.
        backtrack(arguments);
        current.pop_back();   // Abandon candidate.
    }
}


```

**Template Explanation:**

1. **Base Case**:

   - This is where you define when to add the current state `curr` to the result `res`. For example, in permutations, it would be when `curr` reaches the same length as `nums`. For combinations, it’s when `curr` contains exactly `k` elements.

2. **Recursive Case**:

   - This involves iterating over the choices (usually starting from the current index to avoid revisiting previous elements). The recursive call is made after making a choice, and then the choice is undone to explore other possibilities.


## Types of Problems:

Once you solve a certain number of backtracking-related questions, you’ll start noticing that most backtracking problems are related to either one of these three parent problems → permutations, combinations, or subsets. (All of them are easily solvable using the generalized backtracking template).

1. **Permutation**: Can be thought of as the number of ways to order some input.
   - **Example**: Permutations of ABCD, taken 3 at a time (24 variants): ABC, ACB, BAC, BCA, …

2. **Combination**: Can be thought of as the number of ways of selecting from some input.
   - **Example**: Combination of ABCD, taken 3 at a time (4 variants): ABC, ABD, ACD, and BCD.

3. **Subset**: Can be thought of as a selection of objects from the original set.
   - **Example**: Subset of ABCD: ‘A’, ‘B’, ‘C’, ‘D,’ ‘A,B’, ‘A,C’, ‘A,D’, ‘B,C’, ‘B,D’, ‘C,D’, ‘A,B,C’, …

Explanation of popular problems like finding permutations, combinations, and subsets is included below:



## Specializations for Different Problems

The core logic to find permutations, combinations, and subsets:

If you examine the core logic behind solving permutations, combinations, and subsets, you’ll notice a significant similarity in the approach to these problems. This is why backtracking serves as an effective algorithmic paradigm/pattern for tackling various types of related challenges.

**For Subsets:**

Generating all subsets of a given set of numbers is a fundamental problem in computer science, often appearing in coding interviews.

**Problem:** If we’re given an array of distinct integers `nums = [1,2,3]`, the subsets of this array are `[[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]`.

The backtracking technique is an effective method to solve this problem by recursively building each subset. We incrementally construct subsets by either including or excluding each element in the array, exploring all possible combinations.


```cpp
void backtrack(vector<int>& nums, int start, vector<int>& curr, vector<vector<int>>& res) {
    res.push_back(curr);  // Add the current subset to the result

    for (int i = start; i < nums.size(); i++) {
        curr.push_back(nums[i]);
        backtrack(nums, i + 1, curr, res);
        curr.pop_back();  // Backtrack
    }
}
```

**For Permutations**

**Problem:** If we’re given an array of distinct integers `nums = [1,2,3]`, permutations of this array are `[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]`.

The backtracking technique allows us to solve this problem recursively by trying to build a solution incrementally. We build permutations by swapping elements in the list and exploring all distinct possibilities.


```cpp

void backtrack(vector<int>& nums, int start, vector<vector<int>>& res) {
    if (start >= nums.size()) {
        res.push_back(nums);
        return;
    }

    for (int i = start; i < nums.size(); i++) {
        swap(nums[start], nums[i]);  // Swap to create a new permutation
        backtrack(nums, start + 1, res);
        swap(nums[start], nums[i]);  // Backtrack
    }
}

```

**For Combinations:**

**Problem:** If we’re given an array of distinct integers `nums = [1,2,3]` and asked to find all combinations of length `2`, the combinations of this array are `[[1,2], [1,3], [2,3]]`.

The backtracking approach allows us to solve this problem by building combinations incrementally. We construct combinations by choosing elements in sequence, ensuring that each combination is unique and all possibilities are explored.

```cpp

void backtrack(int n, int k, int start, vector<int>& curr, vector<vector<int>>& res) {
    if (curr.size() == k) {
        res.push_back(curr);
        return;
    }

    for (int i = start; i <= n; i++) {
        curr.push_back(i);
        backtrack(n, k, i + 1, curr, res);
        curr.pop_back();  // Backtrack
    }
}

```


## Selected Backtracking Problems

The following exhaustive list of problems are selected from the top 100 liked problems, most frequently asked problems, and LeetCode 75 lists. The list below will be expanded iteratively to include new questions. This is ** THE ONLY** list of problems that you'll ever need to master backtracking and make it one of your strongest subjects. Only high quality problems will be added to the list below:

- [Generate Parentheses](https://leetcode.com/problems/generate-parentheses)
- [N-Queens](https://leetcode.com/problems/n-queens)
- [Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number)
- [Word Break](https://leetcode.com/problems/word-break)
- [Word Break II](https://leetcode.com/problems/word-break-ii)
- [Subsets](https://leetcode.com/problems/subsets)
- [Subsets II](https://leetcode.com/problems/subsets-ii)
- [Word Search](https://leetcode.com/problems/word-search)
- [Word Search II](https://leetcode.com/problems/word-search-ii)
- [Combination Sum](https://leetcode.com/problems/combination-sum)
- [Combination Sum II](https://leetcode.com/problems/combination-sum-ii)
- [Combination Sum III](https://leetcode.com/problems/combination-sum-iii)
- [Sudoku Solver](https://leetcode.com/problems/sudoku-solver)
- [Path With Maximum Gold](https://leetcode.com/problems/path-with-maximum-gold)
- [Remove Invalid Parentheses](https://leetcode.com/problems/remove-invalid-parentheses)
- [Permutations](https://leetcode.com/problems/permutations)
- [Permutations II](https://leetcode.com/problems/permutations-ii)
- [Combinations](https://leetcode.com/problems/combinations)
- [Target Sum](https://leetcode.com/problems/target-sum)
- [N-Queens II](https://leetcode.com/problems/n-queens-ii)
- [Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning)
- [Restore IP Addresses](https://leetcode.com/problems/restore-ip-addresses)
- [Partition to K Equal Sum Subsets](https://leetcode.com/problems/partition-to-k-equal-sum-subsets)
- [Matchsticks to Square](https://leetcode.com/problems/matchsticks-to-square)
- [Splitting a String Into Descending Consecutive Values](https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values)
- [Find Unique Binary String](https://leetcode.com/problems/find-unique-binary-string)
- [Maximum Length of a Concatenated String with Unique Characters](https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters)