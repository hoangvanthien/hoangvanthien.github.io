---
layout: post
title: "Topological Spaces"
categories: ["Notes", "Topology without Tears"]
excerpt-separator: <!--more-->
---

Recently, I started reading the book "Topology Without Tears" by Sidney Morris. It is such an exciting _adventure_. And as always, I write notes about what I learned.

<!--more-->

## Topology

**Definition.** Let _X_ be a non-empty set and $$\mathcal{T}$$ be a set of subsets of _X_, i.e. $$\mathcal{T}\subseteq\mathcal{P}(X)$$. We call $$\mathcal{T}$$ a <span style="color:red">topology</span> on _X_ if 
1. &nbsp; $$X,\emptyset\in\mathcal{T}$$
2. The union of any (finite or infinite, countable or uncountable) number of sets that are in $$\mathcal{T}$$ also belongs to $$\mathcal{T}$$
3. The intersection of any two sets that are in $$\mathcal{T}$$ also belongs to $$\mathcal{T}$$.

The pair $$(X, \mathcal{T})$$ is called a topological space.

When $$\mathcal{T} = \mathcal{P}(X)$$, it is called the <span style="color:red">discrete topology</span> on _X_. Together they form the <span style="color:red">discrete topological space</span>.

When $$\mathcal{T} = \{\emptyset, X\}$$, it is called the <span style="color:red">indiscrete topology</span> on _X_. Together they form the <span style="color:red">indiscrete topological space</span>.

> Notice the article "**the** (in)discrete topo", it means for a non-empty set _X_, there is exactly ONE such topo.

**Theorem.** If $$(X,\mathcal{T})$$ is a topological space (from now abbreviated as t.s.) such that for every element $$x\in X$$, the <span style="color:red">singleton set</span> $$\{x\}\in\mathcal{T}$$, then $$\mathcal{T}$$ is a discrete topology (from now abbreviated as topo).

### Open sets, closed sets, clopen sets

If $$(X,\mathcal{T})$$ is a t.s., each element of $$\mathcal{T}$$ is called an <span style="color:red">open set</span>. Meanwhile, we call a set $$S\subseteq X$$ a <span style="color:red">closed set</span> if $$X-S\in\mathcal{T}$$, i.e. _X-S_ is open.

**Theorem.** If $$(X,\mathcal{T})$$ is a t.s.,
1. &nbsp;$$\emptyset, X$$ are closed sets
2. The intersection of any (finite or infinite) number of closed sets is a closed set
3. The union of any two closed sets is a closed set

If _S_ is both an open and a closed set, we call it a <span style="color:red">clopen set</span>. 
- In a discrete t.s., any subset of _X_ is clopen.
- In an indiscrete t.s., only $$\emptyset$$ and _X_ are clopen.
- In any t.s., $$\emptyset$$ and _X_ are clopen.

## The Finite-closed Topology

**Definition.** Let _X_ be any non-empty set. A topo $$\mathcal{T}$$ on _X_ is called the <span style="color:red">finite-closed topology</span>, or <span style="color:red">cofinite topology</span> on _X_ if the closed subsets of _X_ consist of _X_ and all finite subsets of _X_.

which also means that the open sets are $$\emptyset$$ and subsets of _X_ that have finite complements.

> **"consist of"** is different from **"include"**. When way say "the closed subsets of _X_ consist of _X_ and all finite subsets of _X_", it means **no** sets other than the specified sets are closed, **only** _X_ and all finite subsets of _X_ are closed.

Infinite sets are not necessarily open sets. If the complement of an infinite set is also an infinite set, it is definitely not an open set.

Let $$\mathcal{T}$$ be the cofinite topo on _X_. If _X_ has at least 3 distinct clopen subsets, _X_ is finite. <span onClick="toggleShowHide('clopen3')" class="toggleButton" markdown="1"> &#x25B6; Proof</span>

<div id="clopen3" class="toggleContent" markdown="1">

We know that _X_ and $$\emptyset$$ are always clopen. Let _S_ be another clopen set. Since it is open, _X-S_ is finite. Since it is closed, _S_ is finite. Hence $$X=S\cup (X-S)$$ is finite.

</div>

## Some other topologies

### $$T_1$$-space (Fréchet space)

A topo space $$(X,\mathcal{T})$$ is called a <span style="color:red">$$T_1$$-space</span> if every singleton set $$\{x\}$$ is closed. Another definition is that for every pair of distinct points _a_ and _b_ in _X_, there exists an open set containing _a_ but not _b_, **and** there exists an open set containing _b_ but not _a_. Examples:

- Any discrete space is a $$T_1$$-space, since $$\mathcal{T}=\{S:S\subset X\}$$ and $$X-\{x\}\subset X$$, which brings us to $$X-\{x\}\in\mathcal{T}$$ (open set), so $$\{x\}$$ is closed, $$\forall x$$.
- An infinite set with the finite-closed topo is a $$T_1$$-space, because every singleton set is finite, and in the finite-closed topo space every finite set is closed.

### $$T_0$$-space (Kolmogorov space)

A topo space $$(X,\mathcal{T})$$ is called a <span style="color:red">$$T_0$$-space</span> if for each pair of distinct points _a_ and _b_ in X, there exists an open set containing _a_ but not _b_, **or** there exists an open set containing _b_ but not _a_. Examples:

- Any $$T_1$$-space is an $$T_0$$-space. For each pair of distinct points _a_ and _b_, $$\{a\}$$ is open and does not contain _b_.
- With the same explanation, any discrete space is a $$T_0$$-space.

### Sierpiński space

It is a $$T_1$$-space on $$X=\{0,1\}$$ but not a $$T_0$$-space, i.e. $$\mathcal{T}=\{\emptyset, \{0,1\}, \{0\}\}$$ or $$\mathcal{T}=\{\emptyset, \{0,1\}, \{1\}\}$$

### Countable-closed space

Let _X_ be an infinite set. The <span style="color:red">countable-closed topology</span> is defined to have _X_ and all countable subsets of _X_ as its closed sets.

### Door space

A topo space $$(X,\mathcal{T})$$ is called a <span style="color:red">door space</span> if every subset of _X_ is open or closed.

## Some topologies on $$\mathbb{R}$$

- The discrete topology
- The indiscrete topology
- The finite-closed topology
- &nbsp;$$\mathcal{T}$$ consists of $$\mathbb{R}, \emptyset$$, and every interval _(-n, n)_ for _n_ positive integer. <span onClick="toggleShowHide('sol1')" class="toggleButton" markdown="1"> &#x25B6; Why?</span>

<div id="sol1" class="toggleContent" markdown="1">

We can safely say that $$\mathcal{T}$$ is countable. Let's prove that any union of elements in $$\mathcal{T}$$ is also in $$\mathcal{T}$$.

$$
S = \bigcup_{n\in I} (-n, n),\ \mathrm{where}\ I\subseteq \mathbb{N}^+
$$

If _I_ is finite, $$S=(-m,m)$$ where _m_ is the maximum element in _I_, hence it is also in $$\mathcal{T}$$. Otherwise, _I_ is infinite and equal to $$\mathbb{N}^+$$, hence $$S=\mathbb{R}\in\mathcal{T}$$.

It is easy to prove the intersection between two sets in $$\mathcal{T}$$ is also in $$\mathcal{T}$$.

</div>

- &nbsp;$$\mathcal{T}$$ consists of $$\mathbb{R}, \emptyset$$, and every interval _[-n, n]_ for _n_ positive integer.
- &nbsp;$$\mathcal{T}$$ consists of $$\mathbb{R}, \emptyset$$, and every interval $$[n,\infty)$$ for _n_ positive integer.
- &nbsp;$$\mathcal{T}$$ consists of $$\mathbb{R}, \emptyset$$, and every interval _(-r, r)_ for _r_ positive real.
- &nbsp;$$\mathcal{T}$$ consists of $$\mathbb{R}, \emptyset$$, and every interval _[-r, r]_ and interval _(-r, r)_ for _r_ positive real.
- &nbsp;$$\mathcal{T}$$ consists of $$\mathbb{R}, \emptyset$$, and every interval _[-n, n]_ and interval _(-r, r)_ for _n_ positive integer and _r_ positive real.

### Not a topology on $$\mathbb{R}$$

- &nbsp;$$\mathcal{T}$$ consists of $$\mathbb{R}, \emptyset$$, and every interval _[-r, r]_ for _r_ positive real. <span onClick="toggleShowHide('sol2')" class="toggleButton" markdown="1"> &#x25B6; Why?</span>
<div id="sol2" class="toggleContent" markdown="1">

You can always find some infinite monotonic increasing sequence of real number that converges to a real value _r_, but never precisely reach _r_. The infinite union of sets derived from the sequence converges to $$(-r,r)\notin\mathcal{T}$$.

</div>

- &nbsp;$$\mathcal{T}$$ consists of $$\mathbb{R}, \emptyset$$, and every interval _(-q, q)_ for _q_ positive rational. <span onClick="toggleShowHide('sol3')" class="toggleButton" markdown="1"> &#x25B6; Why?</span>
<div id="sol3" class="toggleContent" markdown="1">

You can find some infinite monotonic increasing sequence of **rational** number that converges to an **irrational** number, e.g. partial sums of the Maclaurin series representation of $$e$$. The infinite union of sets derived from the sequence converges to $$(-r,r)\notin\mathcal{T}$$.

</div>

## Reference sources

1. [Sidney Morris - "Topology Without Tears"](topologywithouttears.net/topbook.pdf)
