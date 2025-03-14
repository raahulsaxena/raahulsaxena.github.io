---
layout: post
title: Mastering Knapsack The Dynamic Programming Patterns You Need to Know
date: 2025-03-13 15:09:00
description: Knapsack problems are a cornerstone of dynamic programming, appearing in countless algorithmic challenges. In this guide, we break down the 0-1 Knapsack and Unbounded Knapsack patterns
tags: leetcode
categories: problem-solving
featured: false
---


This pattern has two sub-patterns namely, 0-1 Knapsack and Unbounded Knapsack.
Together, the type of problems that match these patterns are called "Knapsack-like" problems.

## Pattern: 0-1 Knapsack
### Overview:
The 0/1 Knapsack pattern is one of the most fundamental dynamic programming problems. In this pattern, you are given a set of items, each with a weight and a value, and a knapsack with a limited capacity. The goal is to maximize the value of the items in the knapsack without exceeding its capacity. The "0/1" refers to the fact that each item can either be included in the knapsack (1) or excluded (0).

This pattern can be extended to problems where you need to make decisions under constraints, such as selecting courses with a certain number of credit hours, choosing projects with a fixed number of resources, or dividing a set of numbers into subsets with equal sums.

### Key Concepts:

- **Decision Making:** At each step, you must decide whether to include or exclude an item (or option) based on the problem's constraints.
- **State Representation:** The state is typically represented by the remaining capacity of the knapsack and the items under consideration.
- **Recursive Relation:** The problem can be broken down recursively by considering two scenarios: including the current item or excluding it.

### Code Example: Partition Equal Subset Sum

Let's explore the "Partition Equal Subset Sum" problem, where we need to determine if a given set of numbers can be partitioned into two subsets with equal sums.

**Problem Statement:**

Given a non-empty array `nums` containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

**Code Implementation:**

```cpp
#include <vector>
#include <numeric>
#include <iostream>

bool canPartition(std::vector<int>& nums) {
    int totalSum = std::accumulate(nums.begin(), nums.end(), 0);
    
    // If the total sum is odd, it's impossible to partition it into two equal subsets
    if (totalSum % 2 != 0) {
        return false;
    }
    
    int target = totalSum / 2;
    int n = nums.size();
    std::vector<std::vector<bool>> dp(n + 1, std::vector<bool>(target + 1, false));
    
    // Initialize DP table: we can always have a sum of 0 with an empty subset
    for (int i = 0; i <= n; ++i) {
        dp[i][0] = true;
    }
    
    // Fill the DP table
    for (int i = 1; i <= n; ++i) {
        for (int j = 1; j <= target; ++j) {
            if (nums[i - 1] <= j) {
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    
    return dp[n][target];
}

int main() {
    std::vector<int> nums = {1, 5, 11, 5};
    if (canPartition(nums)) {
        std::cout << "Can partition into equal subsets." << std::endl;
    } else {
        std::cout << "Cannot partition into equal subsets." << std::endl;
    }
}
```

### Explanation:

1. **State Representation:**
   - The DP table `dp[i][j]` represents whether it is possible to achieve a sum `j` using the first `i` items.

2. **Base Case:**
   - We can always achieve a sum of `0` by excluding all items, hence `dp[i][0] = true` for all `i`.

3. **Recursive Relation:**
   - For each item `i` and target sum `j`, we have two choices:
     - **Exclude the current item:** In this case, `dp[i][j] = dp[i-1][j]`.
     - **Include the current item:** Check if the remaining sum `j - nums[i-1]` can be achieved with the previous items, i.e., `dp[i][j] = dp[i-1][j-nums[i-1]]`.

4. **Final Answer:**
   - The final answer is stored in `dp[n][target]`, where `n` is the number of items and `target` is half of the total sum of the array.

### Problems:

- [Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/)
- [Last Stone Weight II](https://leetcode.com/problems/last-stone-weight-ii/)
- [Target Sum](https://leetcode.com/problems/target-sum/)

## Pattern 2: Unbounded Knapsack

### Overview:

The Unbounded Knapsack pattern is a variation of the 0/1 Knapsack problem where you are allowed to include an unlimited number of instances of each item. This pattern is applicable in scenarios where repetition is allowed, such as cutting rods into pieces, making change with coins, or maximizing profit with unlimited resources.

### Key Concepts:

- **Decision Making:** At each step, you must decide whether to include an item in the knapsack, and unlike the 0/1 Knapsack, you can include the same item multiple times.
- **State Representation:** The state is represented by the current capacity of the knapsack and the items considered so far.
- **Recursive Relation:** The recursive relationship accounts for the possibility of reusing the same item multiple times.

### Code Example: Coin Change

Let's explore the "Coin Change" problem, where you need to determine the minimum number of coins needed to make up a given amount.

**Problem Statement:**

Given an array of integers `coins` representing different denominations of coins and an integer `amount` representing a total amount of money, return the fewest number of coins needed to make up that amount. If that amount cannot be made up by any combination of the coins, return `-1`.

**Code Implementation:**

```cpp
#include <vector>
#include <algorithm>
#include <climits>
#include <iostream>

int coinChange(std::vector<int>& coins, int amount) {
    std::vector<int> dp(amount + 1, INT_MAX);
    dp[0] = 0; // Base case: To make 0 amount, 0 coins are needed
    
    for (int i = 1; i <= amount; ++i) {
        for (int coin : coins) {
            if (i - coin >= 0 && dp[i - coin] != INT_MAX) {
                dp[i] = std::min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    
    return dp[amount] == INT_MAX ? -1 : dp[amount];
}

int main() {
    std::vector<int> coins = {1, 2, 5};
    int amount = 11;
    int result = coinChange(coins, amount);
    
    if (result != -1) {
        std::cout << "Minimum coins required: " << result << std::endl;
    } else {
        std::cout << "Amount cannot be made with given coins." << std::endl;
    }
```

### Explanation:

1. **State Representation:**
   - The DP array `dp[i]` represents the minimum number of coins needed to make the amount `i`.

2. **Base Case:**
   - To make the amount `0`, `0` coins are needed, so `dp[0] = 0`.

3. **Recursive Relation:**
   - For each amount `i`, we iterate over all the coins. If `i - coin >= 0`, then `dp[i]` can be updated as `dp[i] = std::min(dp[i], dp[i - coin] + 1)`. This checks if the current coin can contribute to the solution and updates the minimum coins needed.

4. **Final Answer:**
   - The final answer is stored in `dp[amount]`. If it’s still `INT_MAX`, then the amount cannot be made with the given coins, so return `-1`.

### Problems:

- [Coin Change](https://leetcode.com/problems/coin-change/)
- [Rod Cutting](https://www.geeksforgeeks.org/cutting-a-rod-dp-13/)
- [Unbounded Knapsack](https://www.geeksforgeeks.org/unbounded-knapsack-repetition-items-allowed/)