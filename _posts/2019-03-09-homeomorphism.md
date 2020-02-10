---
layout: post
title: "Homeomorphism and Continuous Mapping"
categories: ["Notes", "Topology without Tears"]
excerpt-separator: <!--more-->
---

A summary of Chapter 4 and 5 of the book "Topology without Tears" by Sidney Morris that I'm reading.

<!--more-->

## Subspace

**Definition.** Let _Y_ be a non-empty subset of the topo space $$(X,\mathcal{T})$$. The collection $$\mathcal{T}_Y=\{O\cap Y:O\in\mathcal{T}\}$$ is a topology on _Y_ and called the <span style="color:red">subspace topology</span> (aka <span style="color:red">relative topology</span>, or <span style="color:red">induced topology</span>, or <span style="color:red">topology induced on _Y_ by $$\mathcal{T}$$</span>)

Note that an open set of $$\mathcal{T}$$ is not necessarily an open set in $$\mathcal{T}_Y$$ and vice versa. For example, the subspace $$[0,1]\cup[3,4]$$ of $$\mathbb{R}$$ has some open sets such as $$[0,1], [0,1),(0.5,1]\cup[3,3.5)$$, etc.

A subspace _S_ of $$\mathbb{R}$$ is connected iff it is an interval, i.e. one of the following forms $$\{a\}, [a,b]$$, $$(a,b), [a,b)$$, $$(a,b], (-\infty, a)$$, $$(-\infty, a]$$, $$(a,\infty)$$, $$[a,\infty)$$, $$(-\infty,\infty)$$

A formal defintion of <span style="color:red">interval</span> is a subset _S_ in $$\mathbb{R}$$ has the property: if $$x,z\in S,\ y\in\mathbb{R}$$ and $$x\lt y\lt z$$, then $$y\in S$$.

## $$T_2$$-space (Hausdorff space)

A topological space $$(X,\mathcal{T})$$ is called a <span style="color:red">Hausdorff</span> or <span style="color:red">$$T_2$$-space</span> if given any pair of distinct points $$a,b\in X$$, there exist open set $$U\ni a,\ V\ni b$$ and $$U\cap V=\empty$$. 

In other words, for any two distinct points there exists a neighbourhood of each which is disjoint from the neighbourhood of the other.

Some conclusions:

- &nbsp;$$\mathbb{R}$$ is Hausdorff.
- Every discrete space is Hausdorff.
- Any Hausdorff space is also Fréchet ($$T_1$$-space).
- Any subspace of a Hausdorff space is Hausdorff.

## $$T_3$$-space (regular Hausdorff)

A topo space $$(X,\mathcal{T})$$ is called a <span style="color:red">regular space</span> if for any closed $$A\subseteq X$$ and $$x\notin A$$, there exist an open set _U_ containing _x_, an open set _V_ containing _A_, such that $$U\cap V=\empty$$.

If a regular space is also Hausdorff, we said it is a <span style="color:red">$$T_3$$-space</span> or <span style="color:red">regular Hausdorff</span>.

Some conclusions:

- Any subspace of a regular space is a regular space.
- &nbsp;$$\mathbb{R}, \mathbb{Q}, \mathbb{Z}, \mathbb{I}, \mathbb{R}^2$$ are regular spaces.
- Any $$T_3$$-space is a $$T_2$$-space.

## Homeomorphisms

**Definition.** Let $$(X,\mathcal{T})$$ and $$(Y,\mathcal{T}_1)$$ be topo spaces. They are said to be homeomorphic if there exists a bijective function $$f:X\rightarrow Y$$ which satisfies:
- For each $$U\in\mathcal{T}_1,\ f^{-1}(U)\in\mathcal{T}$$
- For each $$V\in\mathcal{T},\ f(V)\in\mathcal{T}_1$$

Furthermore, the map is said to be a <span style="color:red">homeomorphism</span> between $$(X,\mathcal{T})$$ and $$(Y,\mathcal{T}_1)$$. We write $$(X,\mathcal{T}) \cong(Y,\mathcal{T}_1)$$.

&nbsp;$$\cong$$ is an equivalance relation with reflexivity, symmetry, and transitivity.

Examples ($$a,b,c,d\in\mathbb{R}$$):
- Any two non-empty intervals (subspace of $$\mathbb{R}$$) are homeomorphic.
- If $$a<b,\ c<d$$, then $$[a,b]\cong[c,d]$$.
- If $$a<b,\ c<d$$, then $$[a,b)\cong[c,d)\cong (a,b]\cong (c,d]$$.
- If $$a<b,\ c<d$$, then $$(a,b)\ncong[c,d)$$; $$(a,b)\ncong [c,d]$$; and $$[a,b)\ncong [c,d]$$.
- &nbsp;$$(-\infty,a]\cong (-\infty,b]\cong [a,\infty)\cong [b,\infty)$$.
- &nbsp;$$\mathbb{Z}\cong\mathbb{N}$$

Properties preserved by homeomorphisms:
- T0-space, T1-space, T2-space, regular space, T3-space
- second countable
- separable space
- discrete, indiscrete, finite-closed, countable-closed
- cardinality

## Reference sources

1. [Sidney Morris - "Topology Without Tears"](topologywithouttears.net/topbook.pdf)

<hr>


