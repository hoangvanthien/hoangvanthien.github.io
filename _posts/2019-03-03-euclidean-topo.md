---
layout: post
title: "The Euclidean Topology and Basis for a Topology"
categories: ["Notes", "Topology without Tears"]
excerpt-separator: <!--more-->
---

This is my notes for the second chapter of the book "Topology without Tears" by Sidney Morris. We're going to discuss the Euclidean topology. During the writing of this note, I also had the first sense of the close relationship between geometry and topology. This is one of the rare notes that have GeoGebra visualizations, so keep reading! You will find one in a proof somewhere in this post!

<!--more-->

## The Euclidean Topology on $$\mathbb{R}$$

**Definition.** A subset _S_ in $$\mathbb{R}$$ is said to be open in the <span style="color:red">Euclidean topology</span> on $$\mathbb{R}$$ if for each $$x\in S$$, there exist $$a,b\in\mathbb{R}$$ such that $$x\in(a,b)\subseteq S$$

It is common that if we say the topology on $$\mathbb{R}$$ without defining the topology, we mean the Euclidean topology.

**Properties**

Let $$r,s\in\mathbb{R},\ r < s$$.

- _(r,s)_, $$(r,\infty)$$ and $$(-\infty, r)$$ are <span style="color:blue">open</span> sets.
- _[r,s]_, $$\{r\}$$, $$\mathbb{Z}$$, $$[r,\infty)$$, and $$(-\infty, r]$$ are <span style="color:blue">closed</span> sets.
- _[r,s)_, _(r,s]_, $$\mathbb{Q}$$, $$\mathbb{I}$$ are <span style="color:blue">neither</span> closed nor open.
- The only <span style="color:blue">clopen</span> sets are the trivial sets, i.e. $$\mathbb{R},\ \emptyset$$.
- Not all open sets are intervals _(r,s)_. Some open sets may be the union of several intervals.

If _F_ is a non-empty countable subset of $$\mathbb{R}$$, then _F_ is not open, but it can be closed or not closed, depends on the choice of _F_. <span onClick="toggleShowHide('sol1')" class="toggleButton" markdown="1"> &#x25B6; Proof</span>
<div id="sol1" class="toggleContent" markdown="1">

Suppose _F_ is open, then for each $$x\in F$$, there exist $$a,b\in\mathbb{R}$$ such that $$x\in (a,b)\subseteq F$$. However, _F_ is countable and _(a,b)_ is uncountable, contradicts $$(a,b)\subseteq F$$. Hence _F_ is not open.

_F_ can be closed or not, dependently on _F_ itself. For example, if _F_ is the set of all primes, $$\mathbb{R}-F=(-\infty, 2)\cup(2,3)\cup(3,5)\cup\dots$$ is the infinite union of open sets, hence an open set.

On the other hand, suppose $$F=\mathbb{Q}$$ the set of all rationals. _F_ is still countable because it is isomorphic to $$\mathbb{Z}\times\mathbb{Z}$$, which is the Cartesian product of two countable sets. However, we cannot use the same argument as presented when _F_ is the set of all primes, because we basically cannot "sort" _F_ (between any two rational numbers there are infinitely many other rational numbers). We shall check if $$\mathbb{R}-F=\mathbb{I}$$ is open using the definition and proof by contradiction. Suppose it is open, then for every $$x\in\mathbb{I}$$ we can find an interval $$(a,b)$$ containing $$x$$ and is a subset of $$\mathbb{I}$$. However, such an interval will never exist because in the interval there are rational numbers, so it can't be a subset of $$\mathbb{I}$$. Hence $$\mathbb{I}$$ is not open and $$F=\mathbb{Q}$$ is not closed.

</div>

### $$F_{\sigma}$$-set

**Definition.** In a topology space $$(X,\mathcal{T})$$, a subset _S_ is said to be an $$F_{\sigma}$$-set if it is the union of countable number of closed sets.

**Corollary.** In the Euclidean topology on $$\mathbb{R}$$, all intervals _(a,b)_ and _[a,b]_ are $$F_{\sigma}$$-sets.

### $$G_{\delta}$$-set

**Definition.** In a topology space $$(X,\mathcal{T})$$, a subset _S_ is said to be an $$G_{\delta}$$-set if it is the intersection of countable number of open sets.

**Corollary.** In the Euclidean topology on $$\mathbb{R}$$, all intervals _(a,b)_ and _[a,b]_ are $$F_{\sigma}$$-sets.

### Examples

&nbsp;1. Let $$S=\{0, 1, 1/2, 1/3, \dots, 1/n,\dots\}$$. Prove that _S_ is closed.
<span onClick="toggleShowHide('ex1')" class="toggleButton" markdown="1"> &#x25B6; Proof</span>
<div id="ex1" class="toggleContent" markdown="1">

$$\mathbb{R}-S=(-\infty,0)\cup\left(\bigcup_{i\in\mathbb{N}^+}(1/(i+1), 1/i)\right)\cup(1,\infty)$$

is the union of open intervals, hence open. $$\Rightarrow S$$ is closed.

</div>

&nbsp;2. Is the set $$S=\{1, 1/2, 1/3, \dots, 1/n,\dots\}$$ closed? <span onClick="toggleShowHide('ex2')" class="toggleButton" markdown="1"> &#x25B6; Answer</span>
<div id="ex2" class="toggleContent" markdown="1">

$$\mathbb{R}-S=(-\infty,0]\cup\left(\bigcup_{i\in\mathbb{N}^+}(1/(i+1), 1/i)\right)\cup(1,\infty)$$

This is not an open set because by definition, when $$x=0$$ we cannot find any open interval containing 0 and is a subset of $$\mathbb{R}-S$$. Hence $$S$$ is not closed. (This is another example of a countable set **not** being a closed set.)

</div>

## Basis of a Topology

**Theorem.** A subset _S_ in $$\mathbb{R}$$ is open iff it is a union of open intervals.

Just like a vector space, in a topological space, the notion "basis" also appears and is defined below:

**Definition.** Let $$(X,\mathcal{T})$$ be a topo space. A collection $$\mathcal{B}\subseteq\mathcal{T}$$ is said to be a <span style="color:red">basis</span> for the topology $$\mathcal{T}$$ if every open set of $$\mathcal{T}$$ can be represented as the union of members of $$\mathcal{B}$$.

Some examples:

- &nbsp;$$\mathcal{B}=\{(a,b): a,b\in\mathbb{Q}, a<b\}$$ is the basis of the Euclidean topo on $$\mathbb{R}$$.
- &nbsp;$$\mathcal{B}=\{(a,b): a,b\in\mathbb{R}, a<b\}$$ is the basis of the Euclidean topo on $$\mathbb{R}$$.
- &nbsp;$$\mathcal{B}=\{\{a\}:a\in X\}$$ is the basis of the discrete topo space on _X_.

By definition, there can be many bases for the same topo. It can easily be seen that if $$\mathcal{B}\subseteq\mathcal{T}$$ is a basis, then any $$\mathcal{B}'$$ that $$\mathcal{B}\subseteq \mathcal{B}'\subseteq\mathcal{T}$$ is also a basis. However, one cannot arbitrarily choose a set $$B$$ and generate $$\mathcal{T}$$ and call $$\mathcal{T}$$ a topology. There are certains conditions so that $$\mathcal{B}$$ is a basis.

**Theorem.** Let _X_ be a non-empty set and let $$\mathcal{B}$$ be a collection of subsets of _X_. The collection of all unions of members of $$\mathcal{B}$$ is a topology iff:

- &nbsp;$$X = \bigcup_{B\in\mathcal{B}} B$$, and
- &nbsp;$$\forall B_1, B_2\in\mathcal{B},\ B_1\cap B_2$$ is a union of members of $$\mathcal{B}$$.

<div class="post-image-right">
    <a href="/img/euclidean-topo/basis_vs_topo.png" data-lightbox="et" data-title="The relationship between the class of basis and the class of topology is a well-defined surjective mapping.">
        <img src="/img/euclidean-topo/basis_vs_topo.png">
    </a>
    <p class="post-image-caption">The relationship between the class of basis and the class of topology is a well-defined surjective mapping.</p>
</div>

If a collection $$\mathcal{B}$$ satisfies these conditions, there is a **unique** topology for which $$\mathcal{B}$$ is the basis. This topology consists of all unions of members of $$\mathcal{B}$$. Otherwise, $$\mathcal{B}$$ is not a basis for **any** topology. <span onClick="toggleShowHide('uniqueproof')" class="toggleButton" markdown="1"> &#x25B6; Why unique?</span>
<div id="uniqueproof" class="toggleContent" markdown="1">

Let's call $$\mathcal{T}_1$$ the topology generated by $$\mathcal{B}$$  (i.e. $$\mathcal{T}_1$$ is the set of all possible unions of members of $$\mathcal{B}$$). Assume that there exists $$\mathcal{T}_2$$ a topology in which each open set is a union of members of $$\mathcal{B}$$. That means $$\mathcal{B}\subseteq\mathcal{T}_2\subseteq\mathcal{T}_1$$. Suppose that $$\mathcal{T}_2\neq\mathcal{T}_1$$, so there is a subset of _X_ that is a union of members of $$\mathcal{T}_2$$ (because $$\mathcal{B}\subseteq\mathcal{T}_2$$), but is not in $$\mathcal{T}_2$$, so $$\mathcal{T}_2$$ is not a topology. By contradiction, we conclude $$\mathcal{T}_2=\mathcal{T}_1$$ and the topology that has $$\mathcal{B}$$ as its basis is unique.

</div>

If $$\mathcal{B}$$ is a basis of $$\mathcal{T}$$, then: a subset _S_ of _X_ is open **iff** _S_ is a union of members of $$\mathcal{B}$$.

**Sum up:** One topology can have many bases, but a topology is unique to its basis. It is a [well-defined](https://en.wikipedia.org/wiki/Well-defined) surjective mapping from the class of basis to the class of topology.

### Open rectangle

We define an <span style="color:red">open rectangle</span> (whose sides parallel to the axes) on the plane to be:

$$\{(x,y): (x,y)\in\mathbb{R}^2,\ a<x<b,\ c<y<d\}\subseteq\mathbb{R}^2$$

The collection $$\mathcal{B}$$ of all open rectangles is the basis for the Euclidean topology on $$\mathbb{R}^2$$.

In general, let's define an <span style="color:red">n-orthotope</span> (whose sides parallel to the axes) in an $$\mathbb{R}^n$$ space to be:

$$
\{(x_1,x_2,\dots,x_n):(x_1,x_2,\dots,x_n)\in\mathbb{R}^n,\ a_i<x_i<b_i,\ i=1,2,\dots,n\}
$$

The collection $$\mathcal{B}$$ of all n-orthotopes is the basis for the Euclidean topology on $$\mathbb{R}^n$$.

### Open disc

**Theorem.** Every disc $$\{(x,y):(x-a)^2+(y-b)^2<c^2,\ a,b,c\in\mathbb{R}^2\}$$ is an open subset of $$\mathbb{R}^2$$.<span onClick="toggleShowHide('discisopen')" class="toggleButton" markdown="1"> &#x25B6; Proof</span>
<div id="discisopen" class="toggleContent" markdown="1">

Consider a disc $$D=\{(x,y):(x,y)\in\mathbb{R}^2,\ x^2+y^2<1\}$$. Choose an arbitrary point $$(r_x, r_y)$$ within this disc. Let $$r=\sqrt{r_x^2+r_y^2}$$. Construct an open rectangle with $$(r_x\pm\frac{1-r}{2},\ r_y\pm\frac{1-r}{2})$$ be the vertices. We need to prove this rectangle lies completely within the disc, i.e. its four vertices lie in the disc.

Let $$d$$ be the greatest distance from the center of the disk $$(0,0)$$ to the rectangle's vertices. By the triangle inequality, we have $$d$$ smaller than the total distance from the center to the point $$(r_x, r_y)$$ and the distance from there to the furthest vertex.

$$d \lt r+\frac{1-r}{2}\sqrt{2}$$

On the other hand, since $$\sqrt{2}/2\lt 1$$, we have

$$r+\frac{1-r}{2}\sqrt{2}\lt r+1-r=1$$

Hence $$d<1$$.

In the visualization below, you can drag the point C around. As long as C lies in the disc, you can see that the rectangle (or more precisely, the square) always lie in the disc.

<iframe scrolling="no" title="Open Rectangle inside Open Disc" src="https://www.geogebra.org/material/iframe/id/asrvwpte/width/604/height/502/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/true/ctl/false" width="604px" height="502px" style="border:0px; max-width:100%"> </iframe>

That means we can say that this disc is composed of the infinite uncountable union of open rectangles, hence it is an open set. In a general case, we can also prove any disc is open by applying similar arguments as above.

</div>

**Theorem.** The collection of all open discs is a basis for a topology on $$\mathbb{R}^2$$. <span onClick="toggleShowHide('discsarebasis')" class="toggleButton" markdown="1"> &#x25B6; Proof idea</span>
<div id="discsarebasis" class="toggleContent" markdown="1">

It's easy to see that the union of all open discs form $$\mathbb{R}^2$$. We need to prove that the intersection of any two discs can be decomposed into a (uncountable and infinite) union of open discs. We use a similar technique as the proof for the previous theorem. Consider a point $$(x,y)\in D_1\cap D_2$$. Find a way to draw a disc that takes this point as its center, such that the disc completely lies within $$D_1\cap D_2$$. Then we conclude the intersection is composed of an infinite uncountable union of open discs. Hence the set of all open discs is a basis.

</div>

**Note:**

- The circumference of a disc is a closed set in $$\mathbb{R}^2$$.
- An [n-sphere](https://en.wikipedia.org/wiki/N-sphere) is a closed set in $$\mathbb{R}^{n+1}$$.
- An n-ball (the surface of the n-sphere and the space within it) is a closed set in $$\mathbb{R}^{n+1}$$

### Second axiom of countability

If one basis of a topology is countable, we say that the topology is <span style="color:red">second countable</span> and satisfies the <span style="color:red">second axiom of countability</span>.

Examples:

- &nbsp;$$\mathbb{R}$$ is second countable. The collection of all open intervals $$(a, b)$$ whereas $$a,b\in\mathbb{Q}$$ is the basis of $$\mathbb{R}$$. The basis is countable.
- &nbsp;$$\mathbb{R}^n$$ is second countable.
- The discrete topology on an uncountable set is **not** second countable.<span onClick="toggleShowHide('discretenot2ndcountable')" class="toggleButton" markdown="1"> &#x25B6; Why?</span>
<div id="discretenot2ndcountable" class="toggleContent" markdown="1">

We need to prove that any basis for this topology is uncountable. First, we concede that the singleton sets are open sets, so each must be a union of members of $$\mathcal{B}$$ (the basis). That means each singleton set must also appear in $$\mathcal{B}$$ itself. The set on which this topology is defined is uncountable, so there are uncountably many singleton sets. $$\Rightarrow \mathcal{B}$$ is uncountable.

</div>

- The finite-closed topology on $$\mathbb{Z}$$ is second countable. <span onClick="toggleShowHide('zis2ndcountable')" class="toggleButton" markdown="1"> &#x25B6; Why?</span>
<div id="zis2ndcountable" class="toggleContent" markdown="1">

We first prove that there is countably many finite closed sets. As $$\mathbb{Z}$$ is countable, it can be written in the form $$\{z_0, z_1, z_2,\dots\}$$. A finite set $$S\subset \mathbb{Z}$$ has the form $$\{z_{k_0},z_{k_1},\dots,z_{k_n}\}$$ whereas $$k_i\in\mathbb{N},\ i\in\{0,1,\dots,n\}$$. We shall have a binary representation for _S_. It is obvious now that there is a one-to-one correspondence between the class of finite subset of $$\mathbb{Z}$$ and the class of natural number. Hence the class of finite subset of $$\mathbb{Z}$$ is countable. Furthermore, there is also a one-to-one correspondence between the class of closed sets and the class of open sets (by definition _S_ is closed iff _X-S_ is open). We can conclude that there are countable number of open sets. The basis of the topology is a subset of the topology itself, so the basis is also countable. Hence the topology satisfies the second axiom of countability.

</div>

## Basis for a given topology

**Theorem.** Let $$(X,\mathcal{T})$$ be a topological space. A set $$\mathcal{B}\subseteq\mathcal{T}$$ is a basis of $$\mathcal{T}$$ **iff** $$\forall x\in U\in \mathcal{T}$$, there exist $$B\in\mathcal{B}$$ such that $$x\in B\subseteq U$$. <span onClick="toggleShowHide('dsdksjdks')" class="toggleButton" markdown="1"> &#x25B6; Proof</span>
<div id="dsdksjdks" class="toggleContent" markdown="1">

&nbsp;1. Prove that if $$\mathcal{B}$$ is a basis of $$\mathcal{T}$$, then $$\forall x\in U\in \mathcal{T}$$, there exist $$B\in\mathcal{B}$$ such that $$x\in B\subseteq U$$.

Since _U_ is an open set, it is the union of $$B_i,\ i\in I$$, where $$B_i\in\mathcal{B}$$ and $$I$$ is some index set. But $$x\in U$$ implies that there exists some $$B_i$$ such that $$x\in B_i$$, and obviously $$B_i\subseteq U$$.

&nbsp;2. Prove that $$\mathcal{B}$$ is a basis of $$\mathcal{T}$$ if $$\forall x\in U\in \mathcal{T}$$ there exist $$B\in\mathcal{B}$$ such that $$x\in B\subseteq U$$.

This case is pretty obvious, any open set can be written:

$$
U=\bigcup_{x\in U}B_x
$$

where $$B_x$$ is the member of $$\mathcal{B}$$ that contains the point _x_.

</div>

**Theorem.** Let $$\mathcal{B}$$ be a basis of the topo space $$(X,\mathcal{T})$$. A subset _U_ of _X_ is an open set iff $$\forall x\in U$$, there exists $$B\in\mathcal{B}$$ such that $$x\in B\subseteq U$$. <span onClick="toggleShowHide('faokroqok')" class="toggleButton" markdown="1"> &#x25B6; Proof</span>
<div id="faokroqok" class="toggleContent" markdown="1">

&nbsp;1. Prove that if $$U$$ is open then $$\forall x\in U$$, there exists $$B\in\mathcal{B}$$ such that $$x\in B\subseteq U$$.

This is basically the same as the first part of the previous theorem's proof.

&nbsp;2. Prove that $$U$$ is open if $$\forall x\in U$$, there exists $$B\in\mathcal{B}$$ such that $$x\in B\subseteq U$$.

Again, very similar to the previous proof, we can show that $$U$$ is the union of members of $$\mathcal{B}$$, and therefore open.

</div>

To sum up: Given a topo space $$(X,\mathcal{T}),\ \mathcal{B}\subseteq\mathcal{T},\ U\subseteq X$$

- &nbsp;$$\mathscr{A}$$ is the proposition "$$\mathcal{B}$$ is a basis"
- &nbsp;$$\mathscr{B}$$ is the proposition "_U_ is an open set"
- &nbsp;$$\mathscr{C}$$ is the proposition "$$\forall x\in U$$, there exists $$B\in\mathcal{B}$$ such that $$x\in B\subseteq U$$"

We have:

- &nbsp;$$\mathscr{A}\Rightarrow\mathscr{B}\textrm{ and }\mathscr{C}$$
- &nbsp;$$\mathscr{A}\textrm{ and }\mathscr{C}\Rightarrow\mathscr{B}$$
- &nbsp;$$\mathscr{A}\textrm{ and }\mathscr{B}\Rightarrow\mathscr{C}$$ (note: must consider all open sets)
- &nbsp;$$\mathscr{B}\textrm{ and }\mathscr{C}\Rightarrow\mathscr{A}$$

### When do two bases generate the same topology?

**Theorem.** Let $$\mathcal{B}_1, \mathcal{B}_2$$ be the bases for topologies $$\mathcal{T}_1, \mathcal{T}_2$$, respectively, on a non-empty set _X_. Then $$\mathcal{T}_1=\mathcal{T}_2$$ iff:
- &nbsp;$$\forall x,B:x\in B\in\mathcal{B}_1$$, there exists $$B'\in\mathcal{B}_2$$ such that $$x\in B'\subseteq B$$. (i.e. $$\mathcal{B}_2$$ is a basis of $$\mathcal{T}_1$$)
- &nbsp;$$\forall x,B:x\in B\in\mathcal{B}_2$$, there exists $$B'\in\mathcal{B}_1$$ such that $$x\in B'\subseteq B$$. (i.e. $$\mathcal{B}_1$$ is a basis of $$\mathcal{T}_2$$)

## Subbasis

**Definition.** Let $$(X,\mathcal{T})$$ be a topo space. A non-empty collection $$\mathcal{S}$$ of subsets of _X_ is called a <span style="color:red">subbasis</span> if the collection of all finite intersections of memebers of $$\mathcal{S}$$ forms a basis of $$\mathcal{T}$$.

Examples:

- The collection of all open intervals $$(-\infty, a)$$ and $$(b,\infty)$$ is a subbasis for (the Euclidean topo) $$\mathbb{R}$$.
- The collection of all closed intervals $$[a,b]$$ where $$a\lt b$$ is a subbasis for the discrete topology on $$\mathbb{R}$$.
- The collection of all sets $$X-\{x\},\ x\in X$$ is a subbasis for the finite-closed topology on _X_, where _X_ has at least 2 points. <span onClick="toggleShowHide('roqkeofij')" class="toggleButton" markdown="1"> &#x25B6; Proof idea</span>
<div id="roqkeofij" class="toggleContent" markdown="1">

We see that the finite intersection of some sets $$X-\{x_i\},\ i\in\{1,\dots,n\}$$, $$x_i\in X$$ is $$X-\{x_1,x_2,\dots,x_n\}$$, which is an open set of the finite-closed topology on _X_. Let $$\mathcal{B}$$ be the collection of all such intersections. We concede that $$\mathcal{B}$$ contains all open sets of _X_, except that $$X\notin\mathcal{B}$$. However, $$\mathcal{B}$$ covers _X_, hence any open set is a union of members of $$\mathcal{B}$$. And by definition of a basis, we conclude $$\mathcal{B}$$ is a basis of the finite-closed topo.

</div>

## Reference sources

1. [Sidney Morris - "Topology Without Tears"](topologywithouttears.net/topbook.pdf)

