---
layout: post
title: "Ánh xạ tuyến tính"
categories: ["Mathematics"]
ext-js: ["main.js"]
excerpt-seperator: <!--more-->
---

Trong số các ánh xạ từ không gian vector $V$ đến không gian vector $W$ có một lớp quan trọng là lớp ánh xạ tuyến tính, aka _Linear Transformation_.

Ánh xạ tuyến tính bảo toàn các tính chất về phép cộng và phép nhân với một số. Cụ thể, nếu có $T : V \rightarrow W$ thì:

- $$T(u+v) = T(u) + T(v)$$, $\forall u,v\in V$
- $$T(ku) = kT(u)$$, $\forall k\in \mathbb{R},\ \forall u\in V$.

<!--more-->

<!-- Xét ánh xạ $T: \mathbb{R}^n \rightarrow \mathbb{R}^m$. Khi đó ánh xạ này có thể được biểu diễn qua một ma trận $A\in \mathscr{M}_{m\times n}$:

$$x\in \mathbb{R}^n \mapsto Ax$$ -->

Cho $V$ và $W$ lần lượt là hai không gian vector $n$ chiều và $m$ chiều, mọi ánh xạ tuyến tính $T: V\rightarrow W$ có thể được biểu diễn qua một ma trận $A\in \mathscr{M}_{m\times n}$.

Gọi $\{v_1, v_2, \dots, v_n\}$ là cơ sở của $V$, khi đó, mọi vector $v$ có biểu diễn duy nhất:

$$v = \sum_{j=1}^n c_jv_j$$

Vậy nên $T(v) = c_1T(v_1)+\dots+c_nT(v_n)$

Ngoài ra thì $T(v_j)\in W$ nên nếu $\{w_1, \dots, w_m\}$ là cơ sở của $W$ thì: 

$$T(v_j) = a_{1j}w_1 + a_{2j}w_2 + \dots + a_{mj}w_m$$

Như vậy, nếu ta viết tọa độ của $n$ giá trị $T(v_j)$ ứng với cơ sở trong $W$ nói trên thành các cột của một ma trận $A\in \mathscr{M}_{m\times n}$ thì ánh xạ $T$ được biểu diễn:

$$
\begin{bmatrix}
c_1\\ c_2\\ \vdots\\ c_n
\end{bmatrix}
\mapsto
\begin{bmatrix}
\dots & a_{1j} & \dots\\
\dots & a_{2j} & \dots\\
\vdots & \vdots & \vdots\\
\dots & a_{mj} & \dots
\end{bmatrix}
\begin{bmatrix}
c_1\\ c_2\\ \vdots\\ c_n
\end{bmatrix}
$$

$$
v\mapsto Av
$$

Ma trận $A$ gọi là ma trận ánh xạ, aka _transformation matrix_.

## Các ví dụ về ánh xạ tuyến tính

### Rotation

Phép quay mặt phẳng tọa độ (không gian Euclid $\mathbb{R}^2$) một góc $\varphi$ là một ánh xạ tuyến tính từ $\mathbb{R}^2$ đến chính nó và có ma trận ánh xạ là:

$$
\begin{bmatrix} \cos\varphi & -\sin\varphi\\ \sin\varphi & \cos\varphi \end{bmatrix}
$$

### Identically zero mapping

Ánh xạ $T: V\rightarrow W$ chiếu từ một $v\in V$ đến phần tử trung hòa của $W$ gọi là _ánh xạ không_.

$$T: v\mapsto [0]$$

### Identity mapping

Ánh xạ $T: V\rightarrow V$ định nghĩa bởi $T(v) = v$ được gọi là _ánh xạ đồng nhất_ .

### Scaling

Phép biến đổi tỉ lệ là ánh xạ $T: V\rightarrow V$ được định nghĩa bởi $T(v) = kv$ với $k \in \mathbb{R}$. Nếu $k > 1$, nó được gọi là phép giãn (_dilation_). Nếu $k < 1$, nó được gọi là phép co (_contraction_).

### Orthographic projection

Phép chiếu trực giao (cũng được gọi là _orthogonal projection_) là ánh xạ $T: V\rightarrow W$ được định nghĩa bởi:

$$
T(v) = \langle v, w_1\rangle w_1 + \dots + \langle v, w_m\rangle w_m
$$

## Các tính chất của ánh xạ tuyến tính

$V$ và $W$ là hai không gian vector. $T: V\rightarrow W$ là một ánh xạ tuyến tính. Ta có:

- $T(0) = 0$
- $T(-v) = -T(v), \forall v\in V$

Tập tất cả các phần tử của $V$ có ảnh là $0\in W$ được gọi là hạt nhân (_kernel_ hay _null space_) của ánh xạ, kí hiệu $\mathrm{Ker}(T)$. Đây cũng là một không gian vector, và là không gian con của $V$.

Tập tất cả các phần tử của $W$ có ít nhất một nghịch ảnh (_pre-image_) trong $V$ được gọi là ảnh (_image_) của ánh xạ, kí hiệu $\mathrm{Im}(T)$. Ta có $\mathrm{Im}(T) = T(V)$. Đây là một không gian con của $W$.

Cho $T: \mathbb{R}^n \rightarrow \mathbb{R}^m$ là ánh xạ tuyến tính biểu diễn bằng một ma trận $A$. Không gian nghiệm của hệ thuần nhất $Ax = 0$ là $\mathrm{Ker} (T)$. Mặt khác, tập hợp những vector $b$ sao cho hệ $Ax=b$ thỏa mãn là $\mathrm{Im} (T)$, hay gọi cách khác là _không gian cột_ (_column space_, other names: _range_, _image_) của $A$ (tức là không gian sinh bởi các cột của $A$). Số chiều của không gian cột của $A$ được gọi là hạng của ánh xạ (và cũng bằng hạng của $A$):

$$
\mathrm{dim}(\mathrm{Im}(T)) = \rho(A)
$$

## Định lý về số chiều (Rank-nullity theorem)

$V$ và $W$ là hai không gian vector, $V$ có hữu hạn chiều. $T: V\rightarrow W$ là một ánh xạ tuyến tính. Định lý phát biểu rằng tổng số chiều của hạt nhân và ảnh của $T$ bằng số chiều của $V$. Tức là:

$$\mathrm{dim}(\mathrm{Ker}(T)) + \mathrm{dim}(\mathrm{Im}(T)) = \mathrm{dim}(V)$$

hay viết cách khác:

$$\mathrm{nullity}(T) + \mathrm{rank}(T) = \mathrm{dim}(V)$$

<h3 onClick="toggleShowHide('proof-rank-nullity-theorem')" class="toggleButton"> &#x25B6; Chứng minh</h3>

<div id="proof-rank-nullity-theorem" class="toggleContent" markdown="1">

Giả sử $V$ có số chiều là $n$ và $\mathrm{dim}(\mathrm{Ker}(T)) = k$ (với $0 < k < n$). Do đó, $\mathrm{Ker}(T)$ sẽ có cơ sở là:

$$
S_1=\{v_1, v_2, \dots, v_k\}
$$

Ta có thể bổ sung thêm $n-k$ vector độc lập tuyến tính để tạo thành:

$$
S_2=\{v_1, v_2, \dots, v_k, v_{k+1}, \dots, v_n\}
$$

là cơ sở của $V$.

Ta cần chứng minh $\mathrm{dim}(\mathrm{Im}(T))$ có $n-k$ chiều. Xét họ vector:

$$
S_3 = \{T(v_{k+1}), \dots, T(v_n)\}
$$

Ta sẽ chứng minh $S_3$ là họ độc lập tuyến tính và sinh ra $\mathrm{Im}(T)$.

- $S_3$ sinh ra $\mathrm{Im}(T)$:

Xét $v\in V$, ta có:

$$
v = c_1v_1 + c_2v_2 + \dots + c_nv_n
$$

$T(v)\in \mathrm{Im}(T)$, và:

$$
\begin{align*}
    T(v) &= T(c_1v_1 + c_2v_2 + \dots + c_nv_n)\\
        &= c_1T(v_1) + \dots + c_nT(v_n)\\
        &= c_{k+1}T(v_{k+1}) + \dots + c_nT(v_n)
\end{align*}
$$

(nhắc lại, $v_i\in \mathrm{Ker}(T)$ với $i \leq k$, nên $T(v_i) = 0$)

Như vậy, $S_3$ sinh ra $\mathrm{Im}(T)$.

- $S_3$ là độc lập tuyến tính.

Xét phương trình:

$$
\begin{align*}
                    & c_{k+1}T(v_{k+1}) + \dots + c_nT(v_n) = 0\\
    \Leftrightarrow & T(c_{k+1}v_{k+1} + \dots + c_nv_n) = 0\\
    \Leftrightarrow & c_{k+1}v_{k+1} + \dots + c_nv_n \in \mathrm{Ker}(T)
\end{align*}
$$

Do đó, $c_{k+1}v_{k+1} + \dots + c_nv_n$ có thể được biểu diễn qua một tổ hợp tuyến tính các vector trong $S_1$, ta viết:

$$
\begin{align*}
                    & c_{k+1}v_{k+1} + \dots + c_nv_n = c_1v_1 + \dots + c_kv_k\\
    \Leftrightarrow & c_1v_1 + \dots + c_kv_k - c_{k+1}v_{k+1} - \dots - c_nv_n = 0\\
\end{align*}
$$

Mà $S_2$ là cơ sở của $V$, nên rút ra được rằng $c_i=0\ \forall i$. Suy ra rằng $c_{k+1} = \dots = c_n = 0$.

Vậy $S_3$ độc lập tuyến tính.

Từ hai điều trên cho thấy $S_3$ là một cơ sở của $\mathrm{Im}(T)$, nên số chiều của $\mathrm{Im}(T)$ bằng số vector trong $S_3$ bằng $n-k$.

Trong trường hợp $k = 0$, dễ thấy rằng $\mathrm{Ker}(T) = \\{0\\}$. Ta đặt $S_2 = \\{v_1,\dots, v_n\\}$ là một cơ sở của $V$ và chứng minh $S_3 = \\{T(v_1),\dots, T(v_n)\\}$ sinh ra $\mathrm{Im}(T)$ và độc lập tuyến tính:

$$
\begin{align*}
    T(v) &= T(c_1v_1 + c_2v_2 + \dots + c_nv_n)\\
        &= c_1T(v_1) + \dots + c_nT(v_n)\\
\end{align*}
$$

Vậy $S_3$ sinh ra $\mathrm{Im}(T)$.

$$
\begin{align*}
                    & c_1T(v_1) + \dots + c_nT(v_n) = 0\\
    \Leftrightarrow & T(c_1v_1 + \dots + c_nv_n) = 0\\
    \Leftrightarrow & c_1v_1 + \dots + c_nv_n \in \mathrm{Ker}(T)\\
    \Leftrightarrow & c_1v_1 + \dots + c_nv_n = 0\\
\end{align*}
$$

vì $\mathrm{Ker}(T)$ chỉ có một vector duy nhất là 0. Mà $S_2$ độc lập tuyến tính, nên $c_i=0\ \forall i$, dẫn đến $S_3$ độc lập tuyến tính.

Vậy $\mathrm{dim}(\mathrm{Im}(T)) = n$.

Trong trường hợp $k = n$, thêm yếu tố $\mathrm{Ker}(T)$ là không gian con của $V$, ta có $\mathrm{Ker}(T) = V$. Chọn $S_2 = \\{v_1,\dots,v_n\\}$ làm cơ sở của $V$.

Như vậy, ta thấy $T(v) \in \mathrm{Im}(T)$ và $T(v) = 0\ \forall v\in V$. Tức là $\mathrm{Im}(T) = \\{0\\}$, suy ra số chiều bằng 0.
</div> <!--end proof-->

### Hệ quả

Nếu $W$ là một không gian con của $V$. Nếu ta định nghĩa:

$$
W^{\perp} = \{v\in V : \langle w, v\rangle = 0\ \forall w\in W\}
$$

Thì $\mathrm{dim} W + \mathrm{dim} W^{\perp} = \mathrm{dim} V$. (Chứng minh tương tự)

## Tính đẳng cấu

Xét ánh xạ $f: A\rightarrow B$ trong đó $A$ và $B$ là các cấu trúc đại số đi kèm với một luật thành trong (ký hiệu là *). Nếu ta có:

$$f(x*y) = f(x)*f(y)$$

(cũng áp dụng cho các phép toán đa ngôi)

thì $f$ được gọi là một _phép đồng cấu_ (**homo**morphism).

Áp dụng với ánh xạ tuyến tính $T: V\rightarrow W$, trong đó luật thành trong là phép cộng vector. Ta có:

$$T(x+y) = T(x) + T(y)$$

nên $T$ là một phép đồng cấu.

- Nếu $V\equiv W$ thì $T$ gọi là _phép tự đồng cấu_ (**endo**morphism).

- Nếu $T$ là một song ánh thì $T$ gọi là _phép đẳng cấu_ (**iso**morphism).

- Nếu $V\equiv W$ và $T$ là một song ánh thì $T$ gọi là _phép tự đẳng cấu_ (**auto**morphism).

## Matrix Similarity

Giả sử $A$ và $B$ là hai ma trận vuông cùng cấp $n$. Ta nói $B$ đồng dạng với $A$, kí hiệu $A \backsim B$, nếu tồn tại một ma trận khả đảo $P$ cấp $n$ sao cho:

$$B = PAP^{-1}$$

**Chú ý**: Nếu đặt $Q = P^{-1}$, công thức trên có thể viết lại thành:

$$B = Q^{-1}AQ$$

Giả sử $T: V\rightarrow V$ là một ánh xạ tuyến tính và $V$ có $n$ chiều. Nếu $A$ là ma trận của $T$ đối với cơ sở $B$ và $A'$ là ma trận của $T$ đối với cơ sở $B'$ thì:

$$A' = PAP^{-1}$$

trong đó $P$ là ma trận chuyển cơ sở từ $B$ sang $B'$ (nghĩa là $P\[x\]_B = \[x\]\_\{B'\}$ ).

<h3 onClick="toggleShowHide('proof-matrix-sim')" class="toggleButton"> &#x25B6; Chứng minh</h3>
<div id="proof-matrix-sim" class="toggleContent" markdown="1">

Ta có $A\[x\]_B = \[T(x)\]_B$ và $A'\[x\]\_\{B'\} = \[T(x)\]\_\{B'\}$. Suy ra 

$$
A'[x]_{B'} = [T(x)]_{B'} = P[T(x)]_{B}\\
= PA[x]_B = PAP^{-1}[x]_{B'}
$$

Vậy nên:

$$A' = PAP^{-1}$$

</div>

### Vấn đề rút gọn ma trận

Người ta đặt vấn đề như sau. Cho một ánh xạ tuyến tính với ma trận $A$ vuông bất kì. Có thể chuyển sang một cơ sở khác bằng ma trận $P$ sao cho ma trận $A'$ của ánh xạ nói trên ứng với cơ sở mới có dạng đơn giản hơn $A$ (chẳng hạn như $A'$ có dạng chéo, dạng ma trận thưa).
