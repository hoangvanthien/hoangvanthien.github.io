---
layout: post
title: "Limit Points"
categories: ["Notes", "Topology without Tears"]
excerpt-separator: <!--more-->
---

A summary of Chapter 3 of the book "Topology without Tears" by Sidney Morris that I'm reading.

<!--more-->

## Limit Points

**Definition.** Let _A_ be subset of a topo space $$(X, \mathcal{T})$$. A point $$x\in X$$ is called a <span style="color:red">limit point of _A_</span> (aka <span style="color:red">accumulation point</span> or <span style="color:red">cluster point</span>) if $$\forall U\in\mathcal{T}$$ that contains _x_ contain a point of _A_ other than _x_. In other words, 

$$(U\cap A)-\{x\}\neq\emptyset\Leftrightarrow(U-\{x\})\cap A\neq\emptyset$$

**Theorem.** $$A\subseteq X$$ is a closed set in the topo space $$(X,\mathcal{T})$$ iff _A_ contains all of its limit points. <span onClick="toggleShowHide('fdiaoio')" class="toggleButton" markdown="1"> &#x25B6; Proof</span>
<div id="fdiaoio" class="toggleContent" markdown="1">

Suppose that _A_ is closed and $$x\notin A$$ but $$x$$ is a limit point of _A_. Therefore, $$\forall U\in\mathcal{T}$$ that contains _x_ contain a point of _A_ other than _x_. However, $$X-A$$ is an open set containing _x_ but does not intersect _A_. Hence _x_ is not a limit point, which contradicts to the assumption. Hence if _A_ is closed then it contains all of its limit points.

Suppose that _A_ contains all of its limit points. For any $$x\notin A$$, _x_ is not a limit point, so $$\exist U_x\in\mathcal{T}$$ such that $$x\in U_x$$ and $$U_x\cap A=\emptyset$$, i.e. $$U_x\subseteq X-A$$. We can write _X-A_ as an infinite union $$\bigcup_{x\notin A}U_x$$ of open sets, hence _X-A_ is open and _A_ is closed.

</div>

Note that if $$x\in A$$ doesn't guarantee it is a limit point. For example, if _A_ is a finite subset of the topology $$\mathbb{R}$$, no point in _A_ is a limit point, neither is any other point in $$\mathbb{R}$$ is a limit point. Because for every $$x\in\mathbb{R}$$, you can always find an interval $$(a,b)$$ containing _x_ but intersect $$A-\{x\}$$ trivially.

Another example is that in the discrete topology $$(X,\mathcal{T})$$, no point is a limit point of any set. Recall that the basis of the discrete topology is the set of singleton sets. For any point _x_ and a subset _A_ of _X_, $$\{x\}$$ is an open set containing _x_ but $$(A\cap\{x\})-\{x\} = \emptyset$$.

## Closure

**Theorem.** Let _A'_ be the set of all limit points of _A_ in the topo space $$(X,\mathcal{T})$$. Then $$\bar{A}=A\cup A'$$ is a closed set and it is called the <span style="color:red">closure</span> of _A_.

This gives us some conclusions:

- &nbsp;$$\bar{A}$$ is the smallest closed set containing _A_.
- Every closed set containing _A_ must also contain $$\bar{A}$$.
- &nbsp;$$\bar{A}$$ is the intersection of all closed sets containing _A_. 
- _A_ is closed iff _A_ is a closure of itself.

Examples:

- The closure of $$A=\left\{1,\frac12,\frac13,\dots,\frac1n,\dots\right\}$$ in $$\mathbb{R}$$ is <span onClick="toggleShowHide('rieqjmif')" class="toggleButton" markdown="1"> &#x25B6; Reveal</span>
<div id="rieqjmif" class="toggleContent" markdown="1">

It has been proven that $$A$$ is not a closed set, but $$A\cup\{0\}$$ is a closed set, and also the smallest closed set containing _A_, hence it is the closure of _A_.

- The closure of $$\mathbb{Q}$$ in $$\mathbb{R}$$ is $$\mathbb{R}$$. <span onClick="toggleShowHide('fekqoijr')" class="toggleButton" markdown="1"> &#x25B6; Proof</span>
<div id="fekqoijr" class="toggleContent" markdown="1">

Suppose that $$\bar{\mathbb{Q}}\neq\mathbb{R}$$, i.e. $$\forall x\in \mathbb{R}-\bar{\mathbb{Q}}$$ (an open set) we have $$a<b,\ a,b\in\mathbb{R}$$ such that $$x\in (a,b)\subseteq \mathbb{R}-\bar{\mathbb{Q}}$$. However this interval also contains rational numbers, which contradicts to $$(a,b)\subseteq\mathbb{R}-\bar{\mathbb{Q}}$$. Hence $$\bar{\mathbb{Q}} = \mathbb{R}$$.

</div>

- The closure of $$\mathbb{Z}$$ in $$\mathbb{R}$$ is $$\mathbb{Z}$$ because it is a closed set.
- The closure of $$\mathbb{I}$$ in $$\mathbb{R}$$ is $$\mathbb{R}$$ because any interval $$(a,b)$$ contains infinitely many irrational numbers, hence intersect $$\mathbb{I}$$ non-trivially.

</div>


**Definition.** Let _A_ be a subset of a topo space $$(X,\mathcal{T})$$. We say _A_ is <span style="color:red">dense</span> in _X_ (aka <span style="color:red">everywhere dense</span>) if $$\bar{A}=X$$.

**Theorem.** _A_ is dense iff every non-empty open set intersects _A_ non-trivially. <span onClick="toggleShowHide('foeqijiom')" class="toggleButton" markdown="1"> &#x25B6; Proof</span>
<div id="foeqijiom" class="toggleContent" markdown="1">

Suppose that _A_ is dense, i.e. $$\bar{A}=X$$, **but** there exists a non-empty open set _U_ that $$U\cap A=\emptyset$$, so $$x\in U$$ is not a limit point of _A_. This contradicts to the assumption that every point in _X_ is a limit point. Hence every non-empty open set intersects _A_ non-trivially.

Suppose that every non-empty open set intersects _A_ non-trivially. For any point $$x\in X-A$$, any open set _U_ containing _x_ is surely non-empty, so $$U\cap A\neq\emptyset$$. Since $$x\notin A$$, we have $$U\cap A-\{x\}\neq\emptyset$$, hence _x_ is a limit point. Now we have that all points in _X-A_ are limit points of _A_. The closure of _A_ is hence $$\bar{A}=(X-A)\cup A=X$$.

</div>


**Theorem.** $$\overline{A\cap B}\subseteq\overline{A}\cap\overline{B}$$. <span onClick="toggleShowHide('efmoiqm')" class="toggleButton" markdown="1"> &#x25B6; Proof</span>
<div id="efmoiqm" class="toggleContent" markdown="1">

Let $$x$$ be a limit point of $$A\cap B$$. We have that $$\forall S$$ open and containing _x_:

$$
(S-\{x\})\cap A\cap B\neq\emptyset\\
\Leftrightarrow \left\{\begin{matrix} (S-\{x\})\cap A\neq\emptyset\\ (S-\{x\})\cap B\neq\emptyset \end{matrix}\right.
$$

That means _x_ is a limit point of _A_ and a limit point of _B_. $$\Rightarrow x\in\overline{A}\cap\overline{B}$$.

Now we shall prove that $$A\cap B\subseteq\overline{A}\cap\overline{B}$$.

$$
\overline{A}\cap\overline{B}=(A\cup A')\cap\overline{B}\\
= (A\cap\overline{B})\cup(A'\cap\overline{B})\supseteq A\cap\overline{B}\\
= A\cap(B\cup B')=(A\cap B)\cup (A\cap B')\\
\supseteq (A\cap B)
$$

The theorem has been proven.

</div>

An example of $$\overline{A\cap B}\neq\overline{A}\cap\overline{B}$$ is when $$A=\mathbb{I}$$ and $$B=\mathbb{Q}$$. The LHS is $$\emptyset$$ while the RHS is $$\mathbb{R}$$.

**Theorem.** Let _S_ be a dense subset of a topo space $$(X,\mathcal{T})$$. For every open set $$U$$, $$\overline{S\cap U}=\overline{U}$$. <span onClick="toggleShowHide('fdkaimjq')" class="toggleButton" markdown="1"> &#x25B6; Proof</span>
<div id="fdkaimjq" class="toggleContent" markdown="1">

The proposition is obviously true when $$U = \emptyset$$, hence we only take care of the case $$U\neq\emptyset$$ below.

First, $$\overline{S\cap U}\subseteq\overline{S}\cap\overline{U}=X\cap\overline{U}=\overline{U}$$

We need to prove $$ \overline{U}\subseteq\overline{S\cap U} $$.

Let $$x\in \overline{U}$$ be a limit point of $$U$$. We need to prove that $$x\in\overline{S\cap U}$$, i.e. $$x$$ is a limit point of $$S\cap U$$ or belongs to $$S\cap U$$. Anyway, we have that for any open set _A_ containing _x_, $$(A-\{x\})\cap U\neq\emptyset$$.

- If $$x$$ is a limit point of $$S$$, we also have $$(A-\{x\})\cap S\neq\emptyset$$. Moreover, since $$S$$ is dense and $$U$$ is open, we have $$S\cap U\neq\emptyset$$. This implies that $$(A-\{x\})\cap S\cap U\neq\emptyset$$. Hence $$x$$ is a limit point of $$S\cap U$$. $$\Rightarrow x\in\overline{S\cap U}$$.
- If $$x$$ is not a limit point of $$S$$, for sure we have $$x\in S$$ (because _S_ is dense, if _x_ was not in _S_ then _x_ would be a limit point). That means there exists an open set $$B$$ containing $$x$$ such that $$(B\cap S)-\{x\}=\emptyset$$. Moreover, we already know $$x\in B\cap S$$, we can conclude $$B\cap S=\{x\}$$. Since $$B$$ is open, we also have $$(B\cap U)-\{x\}\neq\emptyset$$, which implies $$B\cap U\neq\emptyset$$. We already know $$S\cap U\neq\emptyset$$, hence $$B\cap S\cap U\neq\emptyset$$, which leads to $$\{x\}\cap U\neq\emptyset$$, and finally $$x\in U$$. This means $$x\in S\cap U$$.

So, if $$x$$ is a limit point of $$U$$, $$x\in\overline{S\cap U}$$.

Now, what if $$x\in\overline{U}$$ is not a limit point of $$U$$? In that case, we're sure $$x\in U$$, otherwise $$x$$ is one of the limit points added to the closure. Since $$x$$ is not a limit point, there exists an open set $$B\ni x$$ such that $$(B\cap U)-\{x\}=\emptyset$$. Furthermore, we know that $$x\in B$$ and $$x\in U$$, therefore $$B\cap U=\{x\}$$. Since $$S$$ is dense and $$B,U$$ are open sets, $$S\cap B$$ and $$S\cap U$$ are non-trivial. This leads to $$S\cap B\cap U\neq\empty$$ $$\Rightarrow$$ $$S\cap B\cap U = S\cap\{x\}=\{x\}$$. Hence $$x\in S$$, which implies $$x\in U\cap S$$, and finally $$x\in \overline{S\cap U}$$.

Hence $$\overline{U}\subseteq\overline{S\cap U}$$.

Hence $$\overline{S\cap U}=\overline{U}$$.

</div>

## Neighborhood

**Definition.** Let $$(X,\mathcal{T})$$ a topo space, _N_ a subset of _X_, and _p_ a point in _N_. _N_ is called a neighborhood of _p_ if there exists some open set _U_ such that $$p\in U\subseteq N$$.

One can have an alternative definition of limit point from this: A point _x_ is a limit point of _A_ iff every neighborhood of _x_ intersect _A_ at a point other than _x_.

## Connectedness

Given a set $$S$$ of real numbers. As you may have known, if there exists $$b\in S$$ such that $$b$$ is greater than any other numbers of _S_ then _b_ is called the greatest element. _S_ is said to be bounded above if there exists a real number _c_ such that _c_ is greater than any element in _S_. We call _c_ an upper bound of _S_. The least upper bound is called <span style="color:red">supremium</span>. Similarly, the greatest lower bound is called <span style="color:red">infimum</span>.

**Lemma.** Let $$S\subseteq \mathbb{R}$$ and _S_ is bounded above with _p_ being its supremum. If _S_ is closed, then $$p\in S$$.

**Theorem.** The only clopen subsets of $$\mathbb{R}$$ are $$\mathbb{R}$$ and $$\emptyset$$.

**Definition.** Let $$(X,\mathcal{T})$$ a topo space. It is said to be <span style="color:red">connected</span> if the only clopen sets are _X_ and $$\emptyset$$.

**Remark.** Let $$(X,\mathcal{T})$$ a topo space. It is said to be <span style="color:red">disconnected</span> iff there exists a non-empty set _A_ different from _X_ such that _A_ and _X-A_ are open.

The notion of connectedness is very important and we shall discuss in the next posts.

## Reference sources

1. [Sidney Morris - "Topology Without Tears"](topologywithouttears.net/topbook.pdf)

<hr>

Special thanks to Tran Hoang Bao Linh for giving some nice examples in this post.

