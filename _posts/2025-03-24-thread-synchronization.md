---
layout: post
title: Let's synchronize our threads
date: 2025-03-22 15:09:00
description: Basics of thread synchronization in C++
tags: [mutex, condition-variable, multi-threading]
categories: [Systems Coding]
featured: false
---



Consider that there is a program that is being used for managing the banking data. Now, assume that two threads are being used for credit and debit in a bank account. Now, assume the following sequence of transactions of a user:

> 1. Initial Balance = 300
> 2. Credited_process: 400, Current Balance = 700
> 3. Debited_process: 500, Current Balance = 200

Now, assume that there is no synchronization between the processes running on the different threads. So, it is possible that the sequence of the operation can be:

> 1. Initial Balance: 300
> 2. ~~Debited_process: 500, Current Balance = 300~~
> 3. Credit_process: 400, Current Balance = 700

Due to this change in the sequence, the user wont be able to withdraw his/her money from the bank account even though he had credited enough money in the account. Here, both credit_process and debit_process threads can be synchronized so that when there is a simultaneous credit and debit requests, it should first execute the credit request.

There can be many such concurrency issues that arises due to non-synchronized operations. Some of them are:

1. [Race Condition](https://www.geeksforgeeks.org/race-condition-vulnerability/)
2. [Deadlocks](https://www.geeksforgeeks.org/introduction-of-deadlock-in-operating-system/)
3. Starvation

Thread synchronization in C++ can be achieved by:

1. Mutex in C++

Mutex is a synchronization primitive that locks the access to the shared resource if some thread is already accessing it.

Example:

```cpp

// C++ program to illustrate the execution of multithreading
// program without any synchronization
#include <iostream>
#include <thread>
using namespace std;

// shared data
double val = 0;
int cnt = 0;

void add(double num)
{
    val += num;
    cnt++;
    cout << "Thread " << cnt << ": " << val << endl;
}

// driver code
int main()
{
    thread t1(add, 300);
    thread t2(add, 600);
    t1.join();
    t2.join();
    cout << "After addition : " << val << endl;
    return 0;
}

```

****Output****

Thread Thread 22: : 900900

After addition : 900

In the above code snippet, we created two threads and we have an add function which in turn adds the values. Both the threads, t1 and t2 go to the add function simultaneously. Now, it becomes difficult to decide which thread will execute first and modify the value of num as both of them move to the add function simultaneously. Such a condition is called race condition. Thus, we should apply thread synchronization to avoid this race condition.

```cpp

// C++ program to illustrate the use of mutex locks to
// synchronize the threads
#include <iostream>
#include <mutex>
#include <thread>
using namespace std;

// shared lock
double val = 0;

// mutex lock
mutex m;

int cnt = 0;

void add(double num)
{
    m.lock();
    val += num;
    cnt++;
    cout << "Thread " << cnt << ": " << val << endl;
    m.unlock();
}

// driver code
int main()
{
    thread t1(add, 300);
    thread t2(add, 600);
    t1.join();
    t2.join();
    cout << "After addition : " << val << endl;
    return 0;
}

```

****Output****

Thread 1: 300
Thread 2: 900
After addition : 900

or

Thread 1: 600  
Thread 2: 900  
After addition : 900

We have prevented both threads from going into add together, but we can't control the order in which they enter.

Now, both the threads will not be able to access the critical section at the same time as we have applied lock . Thus, here using mutex we were able to achieve thread synchronization.

2. Condition Variable in C++

The [condition variable](https://www.geeksforgeeks.org/cpp-multithreading-condition-variables/) is another such synchronization primitive but it is mainly used to notify the threads about the state of the shared data. It is used with the mutex locks to create processes that automatically wait and notify the state of the resource to each other.

```cpp

// C++ program to illustrate the use of condition variable
#include <condition_variable>
#include <iostream>
#include <mutex>
#include <thread>

using namespace std;

// condition variable and mutex lock
condition_variable cv;
mutex m;

// shared resource
int val = 0;

void add(int num)
{
    lock_guard<mutex> lock(m);
    val += num;
    cout << "After addition: " << val << endl;
    cv.notify_one();
}

void sub(int num)
{
    unique_lock<mutex> ulock(m);
    cv.wait(ulock,
            [] { return (val != 0) ? true : false; });
    if (val >= num) {
        val -= num;
        cout << "After subtraction: " << val << endl;
    }
    else {
        cout << "Cannot Subtract now!" << endl;
    }
    cout << "Total number Now: " << val << endl;
}

// driver code
int main()
{
    thread t2(sub, 600);
    thread t1(add, 900);
    t1.join();
    t2.join();
    return 0;
}


```

Explanation:

In this program, we create two threads, and try to perform addition and then subtraction, but notice how we have passed the thread t2 first.

Assuming t2 goes to sub() function first, it first locks the mutex and then checks the condition if value is 0 or not. Since , initially value is 0, the predicate returns false, as soon as it returns false, it releases the mutex and wait for the condition to be true ie. val != 0, Now as the mutex is released, addition is performed in the add() function and after that notify_one() gets executed which notifies the waiting thread which in turn tries to get the lock and again checks the condition.

One of the best use case of condition variable is the producer consumer problem.

3. Promise and Future (Not studied in detail)

The std::future and std::promise are used to return the data from a task executed on the other thread. The std::promise is used to sent the data and the std::future is used to receive the data on the main process. The std::future get() method can be used to retrieve the data returned by the process and is able to hold the current process till the value is returned.