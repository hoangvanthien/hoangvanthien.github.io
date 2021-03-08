---
layout: post
title: "Inductive proof of the inversion statistic's distribution on permutation set"
excerpt-separator: <!--more-->
categories: ["Pattern Avoiding Permutations"]
---

Greetings, folks. Yes, I'm still alive and I still love writing blogs. Last year (2020) has been a very rough year for me, you know, depression and stuff, but I finally got myself together. I'll be doing a bachelor thesis on pattern-avoid permutations, particularly trying to prove some equidistributions of some pairs of statistics on two set of PAP. I'm using this blog to take notes of my progress. On the off chance that someone would steal my ideas, I have two things to tell you: 1. I would be very flattered, 2. please don't do so.

Anyway, when we study Math, it's important to ask questions and verify what we study. We're often taught to prove a theorem before going with it. I'm doing the same today: As I was reading Amini's paper [1], I encountered a very beautiful distribution formula of the inversion statistic, and Dr. Huong Tran, my advisor, told me to prove it. I will present some introductory terminologies first, then present the proof. My proof isn't very elegant and formal, but it's pretty intuitive, visual, and intelligible. Hope you'll like it. :)

<!--more-->

## Terminologies

A statistic is essentially a map: $$\text{stat}:S\rightarrow\mathbb{N}$$. The distribution of $$\text{stat}$$ is the coefficients of the generating function:

$$
\sum_{\sigma\in S} q^{\text{stat}(\sigma)}
$$

<span onClick="toggleShowHide('goisjlo')" class="toggleButton" markdown="1"> &#x25B6; Example?</span>
<div id="goisjlo" class="toggleContent" markdown="1">

Given $$S=\{\sigma_1, \sigma_2, \sigma_3, \sigma_4\}$$ and $$\text{stat}$$:

$$
\begin{array}{l|llll}
\sigma & \sigma_1 & \sigma_2 & \sigma_3 & \sigma_4\\\hline
\text{stat} & 1 & 2 & 1 & 3
\end{array}
$$

Then the said generating function for $\text{stat}$ is:

$$\sum_{\sigma\in S} q^{\text{stat}(\sigma)}=q^1+q^2+q^1+q^3=2q+q^2+q^3$$

By looking at the term $$2q$$, we know that there are two occurrences of 1 in the second row of the table above.
</div>

Let $$S_n$$ be the set of permutations $$\sigma=a_1a_2\dots a_n$$ over the set $$[n]=\{1,2,\dots,n\}$$. Denote $$\sigma(k)=a_k$$.

The _inversion set_ $$\text{Inv}(\sigma)$$ of a permutation $$\sigma$$ is the set of pairs $$(i,j)$$ such that $$i\lt j$$ and $$\sigma(i)\gt \sigma(j)$$.

We define the _inversion statistic_ to be:

$$
\text{inv}~:~S_n\rightarrow\mathbb{N}\\
\sigma\mapsto\vert \text{Inv}(\sigma)\vert
$$

The distribution of $$\text{inv}$$ is given by the generating function:

$$f_k(q)\triangleq \sum_{\sigma\in S_n} q^{\text{inv}(\sigma)}=[n]_q!$$

where $$[n]_q!=[1]_q[2]_q\dots[n]_q$$ and $$[t]_q=(1+q+q^2+\dots+q^{t-1})$$ where $$t=1,2,\dots,n$$.

## Proof

First, we need to see if this is true with $$n=2$$.

$$
\begin{array}{l|ll}
\sigma & 12 & 21\\\hline
\text{inv}(\sigma) & 0 & 1
\end{array}
$$

From the table, we have:

$$
\sum_{\sigma\in S_2}q^{\text{inv}(\sigma)}=1q^0+1q^1=1+q
$$

From the formula, we have:

$$[2]_q! = [1]_q[2]_q = 1(1+q)=1+q$$

thus it's indeed

$$\sum_{\sigma\in S_2}q^{\text{inv}(\sigma)}=[2]_q!$$

Assume that the formula is true with $n=k$:

$$\sum_{\sigma\in S_k} q^{\text{inv}(\sigma)}=[k]_q!$$

Now, we need to prove that

$$f_{k+1}(q) = \sum_{\sigma\in S_{k+1}} q^{\text{inv}(\sigma)}=[k+1]_q!$$

We know that we can construct $$S_{k+1}$$ by inserting $$k+1$$ to every possible place of every string in $$S_k$$.

<span onClick="toggleShowHide('hfvbwakbukq')" class="toggleButton" markdown="1"> &#x25B6; Example?</span>
<div id="hfvbwakbukq" class="toggleContent" markdown="1">

$$S_2=\{12,21\}$$

Constructing $$S_3$$: Insert 3 into 12, being the first position (312), middle position (132), last position (123). Insert 3 into 21, being the first position (321), middle position (231), last position (213). Thus $$S_3 = \{312,132,123,321,231,213\}$$.

</div>

Let $$I(k,x)$$ be the coefficient of $$q^x$$ in $$f_k(q)$$.

By inserting $$k+1$$ to every possible place in a permutation, the inversion value can be **increased by** 0 (inserting to the last position), 1, 2, ..., up to $$k$$ (inserting to the first position). 

$$\Rightarrow I(k+1,x)=I(k,x)+I(k,x-1)+\dots+I(k,\text{max}(0,x-k))$$

where $$x\in \{0,1,\dots,\frac{k(k+1)}{2}\}$$.

$$
f_k(q) = I(k,0)q^0+I(k,1)q^1+\dots+I(k,\frac{k(k-1)}{2})q^{\frac{k(k-1)}{2}}
$$

$$
\begin{array}{rlll}
f_k(q)(1+q+\dots+q^k) = & I(k,0)q^0 + & & \\
                      & I(k,0)q^1 + &I(k,1)q^1 + &\\
                      & I(k,0)q^2 + &I(k,1)q^2 &+\ I(k,2)q^2+\\
                      & \vdots & & \\
                      & I(k,0)q^k + &I(k,1)q^k &+\ I(k,2)q^k + \dots + I(k,k)q^k +\\
                      & &I(k,1)q^{k+1} &+\ I(k,2)q^{k+1} + \dots + I(k,k+1)q^{k+1}\\
                      & & &+\ I(k,2)q^{k+2} +\dots +I(k,k+2)q^{k+2}\\
                      & & &+q^x\sum_{x=k+3}^{\frac{k(k+1)}{2}}\sum_{t=x-k}^x I(k,t)
\end{array}\\

$$

In conclusion:

$$
\begin{align*}
f_k(q)(1+q+\dots+q^k) &= \sum_{x=0}^{\frac{k(k+1)}{2}}I(k+1, x)q^x\\
&= f_{k+1}(q)\\
\Rightarrow [k]_q! [k+1]_q &= f_{k+1}(q)\\
\Rightarrow [k+1]_q! &= f_{k+1}(q)
\end{align*}
$$