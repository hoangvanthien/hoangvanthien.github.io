---
layout: post
title: "Partition a permutation into monotonic subsequences"
categories: "Algorithms"
excerpt-seperator: <!--more-->
---

You are given a permutation of size $$n$$, i.e. a sequence of $$n$$ distinct numbers. The task is to partition this permutation into monotonic subsequences. The number of subsequences (syn.: partition) does not need to be minimum, but it has to be smaller than $$f(n)$$, which denotes the minimum $$k$$ such that any permutation of size $$n$$ can be splited into at most $$k$$ subsequences.

I came across this problem on [Codeforces](https://codeforces.com/contest/1097/problem/E) a while ago. They did provide a [solution](https://codeforces.com/blog/entry/64310) (thanks, Radewoosh!), but since I love to proving things, I want to note down some of my insights and findings.

<!--more-->

## Observations

Let $$t$$ be the greatest $$\tau$$ such that $$\frac{\tau(\tau+1)}{2} \leq n $$. Consider the permutation (size $$n$$) in which the first $$\frac{t(t+1)}{2}$$ terms are 1, 3, 2, 6, 5, 4, 10, 9, 8, 7, ... ([OEIS A038722](http://oeis.org/A038722)), followed by the rest of $$n-\frac{t(t+1)}{2}$$ terms sorted decreasingly. We call this sequence $$\sigma(n)$$. For example:

- &nbsp; $$\sigma(6)=\{1, 3, 2, 6, 5, 4\}$$
- &nbsp; $$\sigma(8)=\{1, 3, 2, 6, 5, 4, 8, 7\}$$

### What is the minimum number of monotonic partitions of $$\sigma$$?

We notice that $$\sigma$$ can be seperated into several **contiguous** subarray, each subarray has decreasing elements. For example:

$$\sigma(8)=\{1\vert 3,2\vert 6,5,4\vert 8,7\}$$

The number of such subarrays (denoted as $$m$$) is either $$t$$ or $$t+1$$, depends on whether $$n-\frac{t(t+1)}{2}=0$$ or not. What is the minimum number of partitions of $$\sigma$$ (denoted as $$g(\sigma)$$)? We can easily tell that every element in the subarray $$l$$ is less than any element in the subarray $$r$$, if $$l$$ is on the left of $$r$$. We will use a greedy algorithm to compute $$g(\sigma)$$. Let's say $$a, b$$ is the number of increasing / decreasing subsequences.

1. &nbsp;$$b = 0$$. If two elements are in the same subarray, they must belong to two different increasing subsequences. The biggest subarray size is $$t$$, and each element in this subarray belong to a distinct increasing subsequence, hence $$a=t$$.

2. &nbsp;$$b\neq 0$$. If we have a decreasing subsequence $$d$$, we have to expand it to the whole subarray. The action of expanding means we take some elments from other subsequences and bring them into $$d$$. This cannot add more subsequences, but can even remove some of them. So it's legit to expand. If we have chosen $$b$$ subarrays to be $$b$$ decreasing subsequences, $$a$$ will be the max size of the other subarrays. So, those $$b$$ decreasing subsequences should be the $$b$$ biggest subarrays of $$\sigma$$ to reduce $$a$$. For example, the sizes of the subarrays in $$\sigma(8)$$ is: 1, 2, 2, 3 ($$t=3$$); $$b=2\Rightarrow a=1$$; $$b=1\Rightarrow a=3$$.  With this in mind:

$$
a = \left\{\begin{aligned}
t-b,&\quad \mathrm{if}\quad t-b\geq n-\frac{t(t+1)}{2}\\
t-b+1,&\quad \mathrm{otherwise}
\end{aligned}\right.
$$

Which basically means the first method always yields the minimal $$g(\sigma)$$. The second method is as effective, sometimes worse, but never better than the first method.

Conclusion: $$g(\sigma)=t$$.

### What is the relation between $$f(n)$$ and $$t$$?

It's easy to see that: 

$$f(n)=\mathrm{max}(g(\alpha)),\ \forall \alpha\in P_n\\
\Rightarrow f(n)\geq g(\sigma) = t
$$

I cannot tell the exact value of $$f(n)$$, but I can use $$t$$ as the new upper bound instead of $$t$$. If we can partition _any_ permutation into at most $$t$$ subsequences, since we're guaranteed that $$t\leq f(n)$$, such a solution will be immediately valid. We're close to solving the problem. 

## How to partition a permutation of $$n$$ into at most $$t$$ subsequences?

Let me remind you that $$t$$ is the greatest $$\tau$$ such that $$n\geq \frac{\tau(\tau+1)}{2}$$.

We can make use of the classic problem "Longest Increasing Sequence" (or LIS). The algorithm is as follows:

1. If $$n=0$$, we have nothing to do.
2. If $$\vert LIS\vert \leq t$$, then we can immediately split the permutation into $$\vert LIS\vert$$ decreasing subsequences. (See more: [Patience Sort](https://en.wikipedia.org/wiki/Patience_sorting)). There, we did it!
2. Otherwise, we erase exactly $$t$$ elements from the LIS, use them as a subsequence, leaving $$n-t$$ elements, and $$t-1$$ is the largest $$\tau$$ such that $$n-t\geq \frac{\tau(\tau+1)}{2}$$. Back to step 1, with updated parameters: $$n:=n-t$$ and $$t:=t-1$$.

The partition strategy is very elegant, though the proof and observation leading to the algorithm are so sophisticated.

See [my implementation](https://codeforces.com/contest/1097/submission/48174273) in C++. Special thanks to Meteusz Radecki, the author of this problem, I really enjoy it.



