---
layout: post
title: "Không gian vector"
categories: ["Mathematics"]
excerpt_separator: <!--more-->
---

Chúng ta đã biết khái niệm về vector hình học ở cấp 3. Chúng có thể cộng với nhau và nhân với một số (scaling) cho ra một vector mới. Trong thực tế có nhiều thứ mang hai đặc điểm đó, ví dụ như đa thức: hai đa thức có thể cộng với nhau, một đa thức có thể nhân với một số, tạo ra một đa thức mới. Người ta cho ra đời một khái niệm _không gian vector_ (vector space) tổng quát mà trong đó vector có thể là một vector hình học, một đa thức, một hàm số liên tục, v.v..

<!--more-->

Xét tập $$V$$ mà mỗi phần tử gọi là một vector và trường số thực $$\mathbb{R}$$. Giả sử ta có hai phép toán: phép cộng hai vector và phép nhân một vector với một số thực. $$V$$ là một không gian vector nếu nó thỏa mãn tất cả các điều sau:

- $$(V, +)$$ là một nhóm Abelian có phần tử đơn vị ký hiệu là $$\overrightarrow{0}$$.
- Với $$a,b\in \mathbb{R}$$ và $$x,y\in V$$ ta có:

    - $$ax\in V$$
    - $$a(x+y) = ax+ay$$
    - $$(a+b)x = ax+bx$$
    - $$a(bx) = (ab)x$$
    - $$1\times x = x$$

Hệ quả:

- $$0x = \overrightarrow{0}$$
- $$-x = (-1)x$$
- $$a\overrightarrow{0} = \overrightarrow{0}$$
- Nếu $$kx=\overrightarrow{0}$$ thì hoặc $$k=0$$ hoặc $$x=\overrightarrow{0}$$.

Nếu $$W\subset V$$ và phép cộng đóng kín trong $$W$$ và phép nhân với một số thực cũng đóng kín trong $$W$$ thì $$W$$ gọi là một _không gian con_ (_subspace_).

## Không gian hữu hạn chiều

### Tổ hợp tuyến tính

Cho một tập $$n$$ vector $$S=\\{x_1,x_2,\dots, x_n\\}$$ thuộc không gian vector $$V$$. Một _tổ hợp tuyến tính_ (_linear combination_) của $$n$$ vector này là một vector có dạng $$c_1x_1+c_2x_2+\dots+c_nx_n$$ trong đó $$c_i$$ là các hằng số thực. Tập $$W$$ gồm tất cả các tổ hợp tuyến tính được gọi là một _bao tuyến tính_ (_linear span_) của họ $$S$$, ký hiệu là $$\mathrm{span}(S)$$. Bản thân bao tuyến tính là một không gian vector, và đó là một không gian con của $$V$$.

_Độc lập tuyến tính_ (aka _Linear Independence_) là một đặc điểm mô tả các họ vector $$S=\\{x_1,x_2,\dots, x_n\\}$$ nào có tính chất sau:

$$
c_1x_1+c_2x_2+\dots+c_nx=0\\
\Leftrightarrow c_1=c_2=\dots=c_n=0
$$

Giả sử dựng ma trận $$A$$ với mỗi cột là tọa độ của các vector trong $$S$$, và đồng thời $$V$$ là một không gian $$n$$ chiều (tức $$A$$ là ma trận vuông), thì phương trình $$c_1x_1+c_2x_2+\dots+c_nx=0$$ có thể được viết thành hệ phương trình thuần nhất. Lúc này để hệ có nghiệm duy nhất, $$\mathrm{det}(A)\neq 0$$. Đây cũng là điều kiện cần và đủ để $$S$$ là một họ độc lập tuyến tính.

Nói nôm na, độc lập tuyến tính (từ trái nghĩa: phụ thuộc tuyến tính) có nghĩa là không tồn tại bất cứ $$x_i$$ nào có thể được biểu diễn bằng một tổ hợp tuyến tính từ $$n-1$$ vector còn lại. Định nghĩa toán học thực sự sẽ phức tạp hơn và khó hình dung hơn cách diễn đạt này.

### Không gian $$n$$ chiều

Trong một không gian vector $$V$$, nếu có $$n$$ vector độc lập tuyến tính và không có quá $$n$$ vector độc lập tuyến tính thì $$V$$ được định nghĩa là một không gian $$n$$ chiều.

Xét trong không gian vector và một cơ sở $$B$$ nào đó (xem thêm phần cơ sở ở dưới), ta biểu diễn $$S=\\{x_1,x_2,\dots, x_n\\}$$ dưới dạng ma trận $$M$$ gồm $$n$$ cột, mỗi cột là tọa độ của vector đối với cơ sở $$B$$ (xem thêm phần tọa độ ở dưới). Hạng của ma trận $$M$$ bằng hạng của họ vector $$S$$ và bằng số chiều của $$\mathrm{span}(S)$$.

### Cơ sở

Một họ $$n$$ vector $$S$$ độc lập tuyến tính trong không gian $$n$$ chiều $$V$$ được gọi là một _cơ sở_ (_basis_, số nhiều _bases_).

Như vậy, hiển nhiên $$S$$ độc lập tuyến tính là cơ sở của $$\mathrm{span}(S)$$.

Ngoài ra, $$S$$ là một cơ sở của $$V$$ nếu và chỉ nếu mỗi vector trong $$V$$ luôn có một tổ hợp tuyến tính duy nhất từ cơ sở của $$V$$.

Trong không gian vector $$n$$ chiều, một cơ sở $$S=\\{v_1, v_2,\dots,v_n\\}$$ gọi là cơ sở _chính tắc_ (_standard basis_) nếu $$v_i$$ là một vector có thành phần thứ $$i$$ bằng 1 và những thành phần còn lại bằng 0 (có dạng $$v_i = (0\ 0\ \dots\ 0\ 1\ 0\ 0\dots\ 0)$$).

**Bổ đề Steinitz**: Nếu ta có $$S = \\{v_1, v_2,\dots,v_r\\}$$ là một họ vector độc lập tuyến tính trong không gian $$n$$ chiều $$V$$ ($$r < n$$) thì ta có thể bổ sung $$n-r$$ vector nữa để hình thành một cơ sở của $$V$$.

## Tích vô hướng

Trong hình học Euclid $$\mathbb{R}^n$$, ta đã được biết khái niệm tích vô hướng của hai vector $$x=(x_1,x_2,\dots,x_n)$$ và $$y=(y_1,y_2,\dots,y_n)$$ như sau: 

$$
\langle x,y\rangle = x_1y_1 + x_2y_2 + \dots + x_ny_n
$$

Tuy nhiên trong một không gian vector bất kỳ, tích vô hướng có thể mang những dịnh nghĩa khác nhau. Dưới đây là 5 tiên đề để một phép tính được công nhận là tích vô hướng:

- $$\langle a,b\rangle$$ là một số xác định với mọi vector $$a,b$$
- $$\langle a,b\rangle = \langle b,a\rangle$$
- $$\langle a+b,c\rangle = \langle a,c\rangle + \langle b,c\rangle$$
- $$\langle ka,b\rangle = k\langle a,b\rangle$$ với $$k$$ là một số
- $$\langle a,a\rangle \geq 0$$ và $$\langle a,a\rangle=0 \Leftrightarrow a=\overrightarrow{0}$$

Ví dụ khác: Ta đã biết tập hợp tất cả các hàm liên tục trên $$\[a,b\]$$ là một không gian vector. Tích vô hướng của không gian này có thể được định nghĩa như sau:

$$
\langle f,g\rangle = \int^b_a f(x)g(x)dx
$$

Không gian vector $$n$$ chiều có trang bị một tích vô hướng gọi là _không gian Euclid_ (Euclidean space).

### Độ dài của vector

Độ dài của vector $$v$$ ký hiệu là $$\|v\|$$ hoặc $$‖v‖$$, bằng căn bậc hai của tích vô hướng của $$v$$ và chính nó, tức là $$\sqrt{\langle v,v\rangle}$$

Các tính chất:

- Bất đẳng thức Cauchy-Schwarz chỉ ra rằng:

$$
|\langle u,v\rangle| \leq \|u\|\times\|v\|
$$

- $$‖v‖\geq 0$$
- $$‖v‖=0 \Leftrightarrow v=\overrightarrow{0}$$
- $$‖kv‖ = \|k\|‖v‖$$
- $$‖u+v‖ \leq ‖u‖ + ‖v‖$$

### Khoảng cách giữa hai vector

Định nghĩa:

$$
d(u,v) = \|u-v\|
$$

Tính chất:

- $$d(u,v) = d(v,u)$$
- Bất đẳng thức tam giác: $$d(u,v) \leq d(u,w) + d(w,v)$$

## Trực giao

Hai vector vuông góc với nhau (còn gọi là trực giao -- _orthogonal_) khi tích vô hướng của chúng bằng 0. Một họ vector mà trong đó các vector đôi một trực giao với nhau được gọi là họ trực giao (_orthogonal set_). Thêm nữa, nếu tất cả các vector trong họ đều có độ dài bằng 1 thì họ đó gọi là họ trực chuẩn (_orthonormal_).

Họ trực giao của các vector khác 0 luôn luôn là họ độc lập tuyến tính.

Nếu một không gian $$n$$ chiều có cơ sở là một họ trực chuẩn $$S=\\{v_1, v_2,\dots,v_n\\}$$ thì mọi vector $$u$$ trong không gian đó có thể biểu diễn dưới dạng sau:

$$
u = \langle u,v_1\rangle v_1 + \langle u,v_2\rangle v_2 + \dots + \langle u,v_n\rangle v_n
$$

### Hình chiếu của một vector lên không gian con

Giả sử $$S=\\{v_1, v_2,\dots,v_m\\}$$ là một họ trực chuẩn các vector trong $$V$$. Gọi $$W=\mathrm{span}(S)$$ là không gian con của $$V$$. Hình chiếu trực giao (đặt là $$w$$) của vector $$u$$ bất kỳ trong $$V$$ lên không gian con $$W$$ là một vector thuộc $$W$$ và $$u-w$$ trực giao với mọi vector trong $$W$$. Hình chiếu trực giao được tính bằng công thức sau:

$$
w = \langle u,v_1\rangle v_1 + \langle u,v_2\rangle v_2 + \dots + \langle u,v_m\rangle v_m
$$

Chứng minh dễ dàng $$w\in W$$. Trường hợp $$u-w$$ trực giao với mọi vector $$x$$ trong $$w$$ có thể được suy ra bằng cách chứng minh $$u-w$$ trực giao với mọi $$v_i\in S$$:

$$
\begin{aligned}
\langle u-w, v_i\rangle & = \langle u,v_i\rangle - \langle w,v_i\rangle\\
 & = \langle u,v_i\rangle - \langle u,v_i\rangle\\
 & = 0
\end{aligned}
$$

Do mọi vector $$x$$ trong $$W$$ đều được biểu diễn bằng một tổ hợp tuyến tính các vector trong họ $$S$$ và $$u-w$$ trực giao với tất cả các vector trong họ $$S$$ nên suy ra $$u-w$$ trực giao với mọi vector $$x$$.

Như vậy biểu thức $$w$$ là công thức đúng.

### Quá trình Gram-Schmidt

Cho một không gian vector $$V$$ có cơ sở $$S=\\{v_1, v_2,\dots,v_n\\}$$. Phương pháp biến đổi $$S$$ thành một họ trực giao $$S'=\\{u_1, u_2,\dots,u_n\\}$$ sao cho $$\mathrm{span}(S') = V$$ gọi là quá trình trực giao hóa. Một trong những phương pháp đó là quá trình Gram-Schmidt:

- $$u_1 = v_1,\ \eta_1 = \frac{u_1}{|u_1|}$$
- $$u_2 = v_2 - w_2,\ \eta_2 = \frac{u_2}{|u_2|}$$
- $$\vdots$$
- $$ u_n = v_n - w_n,\ \eta_n = \frac{u_n}{|u_n|} $$

Trong đó $$w_i$$ là vector hình chiếu của $$v_i$$ lên không gian tạo bởi họ trực chuẩn $$\{\eta_1, \dots, \eta\_{i-1}\}$$, được tính như vừa trình bày ở phần trên.

Kết thúc $$n$$ bước ta có $$\{\eta_1, \dots, \eta\_{i-1}\}$$ là họ đã được trực chuẩn hóa từ cơ sở $$S$$.

## Tọa độ

Giả sử $$S=\\{v_1, v_2,\dots,v_n\\}$$ là một họ các vector độc lập tuyến tính sinh ra $$V$$. Như đã đề cập ở trên, mọi vector $$u\in V$$ được biểu diễn bằng một tổ hợp tuyến tính các vector trong cơ sở:

$$
u = c_1v_1 + c_2v_2 + \dots + c_nv_n
$$

Vector $$(u)_S = (c_1,c_2,\dots,c_n)$$ gọi là vector tọa độ của $$u$$ đối với cơ sở $$S$$ (coordinate vector of $$u$$ with respect to $$S$$). Ma trận

$$
[u]_S=\begin{bmatrix}
c_1\\
c_2\\
\dots\\
c_n
\end{bmatrix}
$$

gọi là ma trận tọa độ của $$u$$ đối với cơ sở $$S$$ (coordinate matrix of $$u$$ with respect to $$S$$).

## Chuyển cơ sở

### Ví dụ

Trong không gian $$\mathbb{R}^2$$ xét hai cơ sở:

$$
S = \{v_1,v_2\} = \left\{\begin{bmatrix}1\\2\end{bmatrix}, \begin{bmatrix}3\\-1\end{bmatrix}\right\}\\

S' = \{v_1',v_2'\} = \left\{\begin{bmatrix}1\\0\end{bmatrix}, \begin{bmatrix}0\\1\end{bmatrix}\right\}\\
$$

Cho $$u = 2v_1 + 7v_2$$. Hãy tìm cách biểu diễn $$u$$ qua $$v_1'$$ và $$v_2'$$.

Cách giải khá đơn giản: Đầu tiên ta tìm cách biểu diễn $$v_1$$ và $$v_2$$ trước, rồi thay vào biểu thức $$u$$.

$$
\left\{\begin{matrix}
    v_1 = v_1' + 2v_2'\\
    v_2 = 3v_1' - v_2'\\
    \end{matrix}\right.
$$

Từ đó, $$u = 2(v_1' + 2v_2') + 7(3v_1'-v_2') = 23v_1' - 3v_2'$$

Tổng quát hơn:

$$
[u]_{S'} = \begin{bmatrix}1 & 3\\ 2 & -1\end{bmatrix}\begin{bmatrix}2\\ 7\end{bmatrix} = P[u]_S
$$

Ma trận $$P$$ được gọi là ma trận chuyển đổi (_change-of-basis matrix_) từ cơ sở $$S$$ sang $$S'$$. Ma trận này được tính bằng cách sau:

- Dựng các vector trong cơ sở $$S$$ và $$S'$$ thành các cột, tạo nên hai ma trận lần lượt là $$A$$ và $$B$$.
- Tính $$P = B^{-1}A$$.

Khi được biết biểu diễn $$\[u\]\_B$$, ta có thể tính $$\[u\]\_{B'} = P\[u\]\_B$$.
Ngược lại, khi biết $$\[u\]\_{B'}$$, ta có thể tính $$\[u\]\_B = P^{-1}\[u\]\_{B'}$$.

Thật vậy, giả sử chúng ta biểu diễn mỗi vector $$v_1, \dots, v_n$$ qua cơ sở mới $$S'$$ như sau:

<h4 onClick="toggleShowHide('proof-change-of-basis')" class="toggleButton" markdown="1"> &#x25B6; Xem thêm</h4>
<div id="proof-change-of-basis" class="toggleContent" markdown="1">

$$
\left\{\begin{matrix}

v_1 = p_{11}v_1' + p_{21}v_2' + \dots + p_{n1}v_n'\\
v_2 = p_{12}v_1' + p_{22}v_2' + \dots + p_{n2}v_n'\\
\dots\\
v_n = p_{1n}v_1' + p_{2n}v_2' + \dots + p_{nn}v_n'

\end{matrix}\right.
$$

Ta có:

$$
\begin{bmatrix} v_1 & \dots & v_n \end{bmatrix} = \begin{bmatrix} v_1' & \dots & v_n' \end{bmatrix} \begin{bmatrix} p_{11} & \dots & p_{1n}\\ \vdots & \ddots & \vdots\\ p_{n1} & \dots & p_{nn} \end{bmatrix}
$$

Viết gọn hơn là: $$A = BP \Leftrightarrow P = B^{-1}A$$

Xét một vector $$u$$ có tọa độ $$\[u\]\_S = (x_1, \dots, x_n)$$ và $$\[u\]\_{S'} = (y_1, \dots, y_n)$$

$$
\begin{aligned}
u &= \begin{bmatrix} v_1 & \dots & v_n \end{bmatrix}\begin{bmatrix} x_1\\ \dots\\ x_n \end{bmatrix}\\
  &= A\begin{bmatrix} x_1\\ \dots\\ x_n \end{bmatrix}\\
  &= BP\begin{bmatrix} x_1\\ \dots\\ x_n \end{bmatrix}\\
  &= B\left(P\begin{bmatrix} x_1\\ \dots\\ x_n \end{bmatrix}\right)
\end{aligned}
$$

Bản thân $$P\begin{bmatrix} x_1 & \dots & x_n \end{bmatrix}^T$$ cũng là một vector, và việc nó được nhân tiền tố với $$B$$ (gồm các vector trong $$S'$$) tạo ra $$u$$ cho thấy $$P\begin{bmatrix} x_1 & \dots & x_n \end{bmatrix}^T$$ là biểu diễn của $$u$$ trong cơ sở $$S'$$.

Lập luận tương tự, với $$P^{-1} = A^{-1}B$$ chính là ma trận chuyển cơ sở từ $$S'$$ sang $$S$$.

</div>

> Side note: Việc gọi $$P$$ là ma trận chuyển cơ sở cần đi kèm với công thức $$\[u\]\_S = P\[u\]\_{S'}$$ để cho thấy sự liên hệ toán học rõ ràng giữa hai tọa độ. Cách nói "chuyển từ cơ sở $$S$$ sang $$S'$$" vẫn chưa đầy đủ và dễ gây hiểu nhầm.

### Tính chất

Chính từ cách xây dựng $$P$$ thông qua hai cơ sở (vốn độc lập tuyến tính) nên $$\mathrm{det}(P)\neq 0$$, tức là $$P$$ khả đảo. Ma trận $$P^{-1}$$ gọi là ma trận chuyển đổi từ $$S'$$ sang $$S$$ vì:

$$
[u]_S = P^{-1}[u]_{S'}
$$

Mặt khác, nếu $$S$$ và $$S'$$ là hai cơ sở trực chuẩn thì $$P$$ gọi là ma trận trực giao với tính chất 

$$
PP^{T} = P^{T}P = I
$$
