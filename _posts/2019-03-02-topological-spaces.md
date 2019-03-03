---
layout: post
title: "Topological Spaces"
categories: ["Notes", "Topology without Tears"]
excerpt-separator: <!--more-->
---

Recently, I started reading the book "Topology Without Tears" by Sidney Morris. It is such an exciting _adventure_. And as always, I write notes about what I learned.

<!--more-->

## Topology

**Definition.** Let _X_ be a non-empty set and $$\tau$$ be a set of subsets of _X_, i.e. $$\tau\subseteq\mathcal{P}(X)$$. We call $$\tau$$ a <span style="color:red">topology</span> on _X_ if 
1. &nbsp; $$X,\emptyset\in\tau$$
2. The union of any (finite or infinite, countable or uncountable) number of sets that are in $$\tau$$ also belongs to $$\tau$$
3. The intersection of any two sets that are in $$\tau$$ also belongs to $$\tau$$.

The pair $$(X, \tau)$$ is called a topological space.

When $$\tau = \mathcal{P}(X)$$, it is called a <span style="color:red">discrete topology</span> on _X_. Together they form a <span style="color:red">discrete topological space</span>.

When $$\tau = \{\emptyset, X\}$$, it is called a <span style="color:red">indiscrete topology</span> on _X_. Together they form a <span style="color:red">indiscrete topological space</span>.

**Theorem.** If $$(X,\tau)$$ is a topological space (from now abbreviated as t.s.) such that for every element $$x\in X$$, the <span style="color:red">singleton set</span> $$\{x\}\in\tau$$, then $$\tau$$ is a discrete topology (from now abbreviated as topo).

### Open sets, closed sets, clopen sets

If $$(X,\tau)$$ is a t.s., each element of $$\tau$$ is called an <span style="color:red">open set</span>. Meanwhile, we call a set $$S\subseteq X$$ a <span style="color:red">closed set</span> if $$X-S\in\tau$$, i.e. _X-S_ is open.

**Theorem.** If $$(X,\tau)$$ is a t.s.,
1. &nbsp;$$\emptyset, X$$ are closed sets
2. The intersection of any (finite or infinite) number of closed sets is a closed set
3. The union of any two closed sets is a closed set

If _S_ is both an open and a closed set, we call it a <span style="color:red">clopen set</span>. 
- In a discrete t.s., any subset of _X_ is clopen.
- In an indiscrete t.s., only $$\emptyset$$ and _X_ are clopen.
- In any t.s., $$\emptyset$$ and _X_ are clopen.

## The Finite-closed Topology

**Definition.** Let _X_ be any non-empty set. A topo $$\tau$$ on _X_ is called the <span style="color:red">finite-closed topology</span>, or <span style="color:red">cofinite topology</span> on _X_ if the closed subsets of _X_ consist of _X_ and all finite subsets of _X_.

which also means that the open sets are $$\emptyset$$ and subsets of _X_ that have finite complements.

> **"consist of"** is different from **"include"**. When way say "the closed subsets of _X_ consist of _X_ and all finite subsets of _X_", it means **no** sets other than the specified sets are closed, **only** _X_ and all finite subsets of _X_ are closed.

> Also notice the article "**the** finite-closed topo", it means for a non-empty set _X_, there is exactly ONE finite-closed topo.

Infinite sets are not necessarily open sets. If the complement of an infinite set is also an infinite set, it is definitely not an open set.

Let $$\tau$$ be the cofinite topo on _X_. If _X_ has at least 3 distinct clopen subsets, _X_ is finite. <span onClick="toggleShowHide('clopen3')" class="toggleButton" markdown="1"> &#x25B6; Proof</span>

<div id="clopen3" class="toggleContent" markdown="1">

We know that _X_ and $$\emptyset$$ are always clopen. Let _S_ be another clopen set. Since it is open, _X-S_ is finite. Since it is closed, _S_ is finite. Hence $$X=S\cup (X-S)$$ is finite.

</div>

## Some other topologies

### $$T_1$$-space

A topo space $$(X,\tau)$$ is called a <span style="color:red">$$T_1$$-space</span> if every singleton set $$\{x\}$$ is closed. Examples:

- Any discrete space is a $$T_1$$-space, since $$\tau=\{S:S\subset X\}$$ and $$X-\{x\}\subset X$$, which brings us to $$X-\{x\}\in\tau$$ (open set), so $$\{x\}$$ is closed, $$\forall x$$.
- An infinite set with the finite-closed topo is a $$T_1$$-space, because every singleton set is finite, and in the finite-closed topo space every finite set is closed.

### $$T_0$$-space

A topo space $$(X,\tau)$$ is called a <span style="color:red">$$T_0$$-space</span> if for each pair of distinct points _a_ and _b_ in X, there exists an open set contains _a_ but not _b_, or there exists an open set contains _b_ but not _a_. Examples:

- Any $$T_1$$-space is an $$T_0$$-space. For each pair of distinct points _a_ and _b_, $$\{a\}$$ is open and does not contain _b_.
- With the same explanation, any discrete space is a $$T_0$$-space.

### Sierpiński space

It is a $$T_1$$-space on $$X=\{0,1\}$$ but not a $$T_0$$-space, i.e. $$\tau=\{\emptyset, \{0,1\}, \{0\}\}$$ or $$\tau=\{\emptyset, \{0,1\}, \{1\}\}$$

### Countable-closed space

Let _X_ be an infinite set. The <span style="color:red">countable-closed topology</span> is defined to have _X_ and all countable subsets of _X_ as its closed sets.

### Door space

A topo space $$(X,\tau)$$ is called a <span style="color:red">door space</span> if every subset of _X_ is open or closed.

