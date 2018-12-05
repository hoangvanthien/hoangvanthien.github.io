---
layout: post
title: "Flaws in Michael Shamos' implementation of Rotating Calipers, proposed in \"Computational Geometry\" (1978)"
categories: ["Algorithm"]
excerpt-seperator: <!--more-->
sticky: true
---

I was studying Rotating Calipers the other day, and like many other people, I jumped to Wikipedia as soon as I found it in the result pages. [Wikipedia - Rotating Calipers](https://en.wikipedia.org/wiki/Rotating_calipers). This particular page was a stub. It contained very few information and description about the algorithms, let alone the visuals to support.

I was interested in the problem of finding the largest segment formed from a set of points, which leads to the problem of finding the diameter of the convex hull. Finding convex hull is rather familiar to me, but to find the diameter is something new. The Rotating Calipers technique is one of the most popular method to solve such problem, and it was first introduced by Michael Shamos in his Ph.D. Thesis at Yale University, 1978. You can find his paper online [here](http://euro.ecom.cmu.edu/people/faculty/mshamos/1978ShamosThesis.pdf). The algorithm was proposed on page 79 of the paper (p. 87 of the file).

The paper actually described the method much better than Wikipedia. His idea was indeed very elegant and clever, but his pseudocode on page 79 has many flaws. Some guy had copied this implementation and posted on Wikipedia. What was worse, you could find some other websites on the first-page result of Google that also copied verbatim from Wikipedia. When I found the mistakes, I couldn't doubt myself because this was a 40-year-old paper, so I must have missed some detail somewhere which might have led to the confusion. But after posting my concerns on Reddit and receiving positive feedback, I became more certain with what I had found. I don't know if anyone has spotted the mistakes before me, or if they were corrected in the next editions. To be clear, I'm not declining the efficiency of his general idea, the problems only lay in the details of implementation. In this article, I will explain the algorithm, the flaws, and give an alternative solution.

<!--more-->

## Definitions

- _Convex polygon_ is a polygon that, if you take each segment, draw a line through it, the whole polygon must lie on one side of the line.
- A line that goes through a vertex of the polygon such that the whole polygon lies on one side of the line is called a _supporting line_.
- A _pair of antipodals_ is a pair of vertices such that one can draw two parallel supporting lines through them.
- The _diameter_ of the polygon is said to be the largest distance between a pair of its vertices. This is proven to be the largest distance between a pair of parallel supporting lines, and also concide with the largest distance between a pair of antipodals.

## Rotating Calipers

"Calipers" is the metaphor for "parallel supporting lines". That is, starting with a pair of supporting lines, we will "rotate" them concurrently to a certain direction, while maintaining it touch the polygon. By this method, we can iterate through all pairs of antipodals. Please take a look at the visualization I made below:

<iframe scrolling="no" title="Rotating Calipers" src="https://www.geogebra.org/material/iframe/id/fmjxmkab/width/604/height/502/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/false/rc/false/ld/false/sdz/false/ctl/false" width="604px" height="502px" style="border:0px; max-width: 100%;"> </iframe>

Let's say I have two antipodals A and E, which is obvious as I can draw two parallel supporting lines through it (step 0). We will start rotataing the "calipers" around the polygon counterclockwise. At first, A and E will be the pivots around which we rotate the calipers. We keep rotating until one of the calipers touch the edge of the polygon, then we change the pivot(s) to the other end(s) of the touched edge(s). Normally we only change one pivot, but when the polygon has two parallel edges, the calipers may touch the edges at the same time, then we shall move two pivots to their next vertices.

- Step 0: The calipers can be drawn in anyway, it doesn't matter (of course, they must be parallel supporting lines that squeeze the polygon between them!).
- Step 1: Rotate the calipers, they touch AB first! So B-E is another pair of antipodals. Pivot A is moved to B, while pivot E is unchanged.
- Step 2: Rotate the calipers, they touch BC and EF at the same time! So in this case we have three more pairs of antipodals: B-F, C-E, and C-F. Pivots B and E are both moved to C and F, respectively.
- Step 3: Rotate the calipers, one line touches FG before the other line touches CD. We collect C-G as another pair. Pivot F is moved to G.
- Step 4: Rotate the calipers, one line touches CD before the other line touches GA. We collect D-G as another pair. Pivot C is moved to D.
- Step 5: Rotate the calipers, one line touches GA before the other line touches DE. We collect D-A as another pair. Pivot G is moved to A.
- Step 6: (not shown) Because the pivot that was at E at the beginning has travelled all the way through G and to A, if we continue to rotating, we will collect A-E as a pair again. We can stop here with the result of 8 pairs of antipodals.

## The flaws

Take a look at Shamos' algorithm (here I copied directly from Wikipedia, but be noticed that this is no different from what was presented in his paper, this writing is just more easy to read):

```c++
/* p[] is in standard form, ie, counter clockwise order, 
     distinct vertices, no collinear vertices.
   ANGLE(m,n) is a procedure that returns the clockwise angle 
     swept out by a ray as it rotates from a position parallel 
     to the directed segment Pm,Pm+1 to a position parallel to Pn,Pn+1
   We assume all indices are reduced to mod N (so that N+1 = 1).
*/
GetAllAntiPodalPairs(p[1..n])
  //Find first anti-podal pair by locating vertex opposite P1
  i = 1
  j = 2
  while angle(i, j) < pi
    j++
  yield i,j

  /* Now proceed around the polygon taking account of
     possibly parallel edges. Line L passes through
     Pi, Pi+1 and M passes through Pj, Pj+1
  */

  //Loop on j until all of P has been scanned
  current = i  
  while j <> n
    if angle(current, i+1) <= angle(current, j+1)
      j++
      current = j
    else
      i++
      current = i
    yield i,j

    //Now take care of parallel edges
    if angle(current, i+1) = angle(current, j+1)
      yield i+1, j
      yield i, j+1
      yield i+1, j+1
      if current = i
        j++
      else
        i++
```

Consider the definition of `ANGLE(m,n)`. This would basically mess up the whole algorithm. If you apply this algorithm to my polygon drawn above, you will see the loop that was supposed to find the first pair of antipodals will be terminated at the first check `angle(i, j) < pi`. If we move vector AB and vector BC to the same starting point and sweep an angle from AB to BC **clockwise**, I am 100% sure that you will always get an angle larger than $\pi$, unless the polygon is concave.

Even if `ANGLE(m,n)` had been defined correctly, i.e. counterclockwise angle, the use of this function would have also had many other problems. The comparison between `angle(current, i+1)` and `angle(current, j+1)` is false by the logic of his idea. Two calipers, although represented as lines, when taken to calculate the angles, their directions must be opposite. Otherwise, one of the expression will be larger than pi, and the other will be smaller than pi, which is exactly happening in this algorithm. This led to the parallel edges being completely ignored. What is worse, the calipers are rotated incorrectly, the pivots are wrongly positioned. I have tested this myself, but I could not predict the cause behind, or what he actually meant in this implementation. This is because the mistake was rooted in the definition of a primitive function like `angle`, making analysing very difficult. I am certain that he was wrong, but to actually fix his pseudocode, I had no way but to rewrite the whole thing in my own way.

## A more precise approach

Allow me to remove the variable `current`. In fact, I found it the centre of confusion. Neither in the code nor elsewhere in the paper did he mention this factor. I tried my best to follow his idea, while keeping it as simplest as possible.

```c++
/* p[] is in standard form, ie, counter clockwise order, 
     distinct vertices, no collinear vertices.
   ANGLE(m,n) is a procedure that returns the COUNTERclockwise angle 
     swept out by a ray as it rotates from a position parallel 
     to the directed segment Pm,Pm+1 to a position parallel to Pn,Pn+1
   We assume all indices are reduced to mod N (so that N+1 = 1).
*/
GetAllAntiPodalPairs(p[1..n])
  //Find first anti-podal pair by locating vertex opposite P1
  //(Reuse this piece of code from Shamos, very beautifully written)
  i = 1
  j = 2
  while angle(i, j) < pi
    j++
  yield i,j

  //Loop on j until all of P has been scanned 
  while j <> 1
    let a = 2*pi - angle(i, j) // clockwise angle
    if (a == pi): // Pi Pi+1 and Pj Pj+1 are parallel
      yield i+1, j
      yield i, j+1
      yield i+1, j+1
      // Notice that (i, j) has been added to the result before
      // being the pivots, so no need to yield i,j
      i++
      j++
    elif (a < pi): // Will touch Pi Pi+1 first
      yield i+1, j
      i++
    else:
      yeild i, j+1 // Will touch Pj Pj+1 first
      j++
```

## Explanation

### How do I know which edge the calipers will touch first?

This came to the problem of comparing angles. Please slide to step 2, when we need to determine if the next rotation will make the calipers touch FG or CD first. We need to compare the angles at C and F. If we translate CD such that C $\equiv$ F. The two angles now have the same origin, and they are formed by one line and two segments. Considering the angle form by the two segments will give us a verdict of the comparison between the two original angles.

### How do I know it will produce all pairs of antipodals?

The algorithm begins with a pair of parallel supporting lines, then it tries to rotate it in all ways possible (literally, the condition to stop rotating and moving to the next pivots is when they are about to cut the polygon). With one direction of the calipers, the pair of supporting lines can only be assigned to exactly one pair of antipodals, as moving it to any other vertices elsewhere will cut the polygon immediately. Remember that the polygon always lie on only one side of a supporting line. As we tried all direction, we are sure that we would have gone through all antipodals.

<hr>

Please drop me an email and let me know if you think my arguments are invalid, or if you simply want to discuss this topic with me. Thanks for taking time reading! Have a nice day. ༼ つ ◕_◕ ༽つ
