---
layout: post
title: "Expected value of a random divisor selector"
categories: "Mathematics"
excerpt-seperator: <!--more-->
---

Consider a sequence $$\{u_i\}_{i=0}^k$$, in which let $$u_1 = n$$ and $$u_i \vert u_{i-1}\ (i > 0)$$. Apparently there are a lot of sequences like that. For each $$i > 0$$, $$u_i$$ is selected randomly with equal possibilities among the divisors of $$u_{i-1}$$. Let's denote $$F(n)$$ the expected value of $$u_k$$. What is $$F(n)$$? Read the [problem statement](https://codeforces.com/contest/1097/problem/D).

For example, we have $$u_0 = 6$$ and need to calculate $$E(u_3)$$. All possible sequences of $$\{u_i\}$$ are:

$$
6, 6, 6\\
6, 6, 3\\
6, 6, 2\\
6, 6, 1\\
6, 3, 3\\
6, 3, 1\\
6, 2, 2\\
6, 2, 1\\
6, 1, 1
$$

Can we simply calculate the average value of $$u_2$$?, in this case:

$$(6 + 3 + 2 + \dots + 1 + 1) \div 9 = \frac{20}{9}$$

No we can't, because the possibilities for the sequences to happen are not all the same. For example, the possibility of $$(6, 6, 6)$$ is $$\frac{1}{4}\times\frac{1}{4}=\frac{1}{16}$$, while that of $$(6, 3, 1)$$ is only $$\frac{1}{4}\times\frac{1}{2}=\frac{1}{8}$$.

<!--more-->

## Observation

Consider $$u_i = p_1^{t_1}p_2^{t_2}\dots p_m^{t_m}$$ (prime factorization). The process of choosing $$u_{i+1}$$ (which is a divisor of $$u_i$$) can be interpreted as $$m$$ _independent_ steps (_events_). In step $$j$$, we choose $$w_j$$ as a random number from 0 to $$t_j$$. After all $$m$$ steps, we have $$u_{i+1} = p_1^{w_1}p_2^{w_2}\dots p_m^{w_m}$$.

This means, instead of dealing with the problem above with any number $$n$$, we can break it down into $$m$$ (the number of prime factors of $$n$$) smaller problems. Each small problem requires finding the expected value of $$u_k$$ given $$u_1 = p^t$$, in other word, finding $$F(p^t)$$. Suppose that $$n = p_1^{t_1}p_2^{t_2}\dots p_m^{t_m}$$, then:

$$F(n) = F(p_1^{t_1})F(p_2^{t_2})\dots F(p_m^{t_m})$$

## The smaller problem

How do we calculate $$F(p^t)$$? This should be done easily with dynamic programming or recursion. We consider the probability for the $$i$$-th term of the sequence to equal $$p^j$$:

$$
P(u_i = p^j) = \sum_{x=j}^t \left( P(u_{i-1}=p^x)\times \frac{1}{x+1}\right)
$$

Then the rest is straightforward:

$$
F(p^t) = \sum_{x=0}^t \left(p^x\times P(u_k=p^x)\right)
$$

## Complexity analysis

Factorizing $$n$$ takes $$O(\sqrt{n})$$. Calculating $$F(p^t)$$ takes $$O(kt)$$. Since $$t \leq \log(n)$$, the overall complexity is $$O(\sqrt{n} + k\log(n))$$.

See [my solution](https://codeforces.com/contest/1097/submission/48079143) written in C++.

