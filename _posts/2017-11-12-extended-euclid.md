---
layout: post
title: ["Thuật toán Euclid mở rộng, ", "Nghịch đảo Modulo, ", "và Định lý số dư Trung Quốc"]
categories: ["Mathematics", "Lecture Notes"]
---

Thuật toán Euclid được dùng để tìm ước chung lớn nhất của hai số nguyên không âm $$a$$ và $$b$$ như sau:

```python
def gcd(a,b):
    while (b != 0):
        r = a % b # chia lấy phần dư
        a = b
        b = r
    return a
```

Dựa trên định lý $$\text{GCD}(a,b) = \text{GCD}(b, a \text{ mod } b)$$.

- **Định lý Bézout** chỉ ra rằng, nếu $$d=\text{GCD}(a,b)$$ thì tồn tại hai số $$x,y$$ sao cho $$d=xa+yb$$. Phương trình này được gọi là đồng nhất thức Bézout (Bézout identity). Hai số $$x,y$$ được gọi là hệ số Bézout (Bézout coefficents) của hai số $$a,b$$.
- **Phương trình Diophantine** là phương trình có dạng $$ax+by=c$$ được mô tả dựa trên định lý Bézout. Phương trình có nghiệm khi và chỉ khi $$d=\text{GCD}(a,b)\| c$$. Một khi phương trình có nghiệm thì sẽ có vô số nghiệm.
    - Giả sử phương trình $$ax+by=c$$ có nghiệm $$(x_0,y_0)$$. Họ nghiệm của phương trình sẽ là $$(x_0+\frac{kb}{d},y_0-\frac{ka}{d})$$. Để ý rằng:

    $$
        a(x_0+\frac{kb}{d}) + b(y_0-\frac{ka}{d})\\
        = ax_0 + by_0 = c
    $$
    
    (Lưu ý, chú thích trên không phải là phần chứng minh họ nghiệm. Bài viết này không trình bày phần chứng minh)
    - Giả sử phương trình $$ax+by=d$$ có nghiệm $$(x_0,y_0)$$, thì $$(\frac{x_0c}{d},\frac{y_0c}{d})$$ là nghiệm của phương trình $$ax+by=c$$.

Để tìm nghiệm của phương trình $$ax+by=c$$, thuật toán tìm ra một nghiệm của phương trình $$ax+by=d$$, rồi sau đó suy ra một nghiệm của phương trình $$ax+by=c$$. Từ đây có thể tiếp tục đưa ra họ nghiệm của phương trình $$ax+by=c$$ và kết thúc bài toán.

Ví dụ, tìm một nghiệm của phương trình $$252x+198y=36$$.

- Dùng thuật toán Euclid để tìm $$\text{GCD}(252,198)$$:
    - $$252 = 198\times 1 + 54$$
    - $$198 = 54\times 3 + 36$$
    - $$54 = 36\times 1 + 18$$
    - $$36 = 18\times 2 + 0$$
- Vậy $$(252,198)=18$$. Công việc chúng ta là tìm một nghiệm của $$252x+198y=18$$.
- Đi ngược từ dưới lên:
    - $$18 = 54 - 36$$
    - $$18 = 54 - (198 - 54\times 3)$$
    - $$18 = 54\times 4 - 198$$
    - $$18 = (252-198)\times 4 - 198$$
    - $$18 = 252 - 198\times 5$$
- Vậy một nghiệm của phương trình $$252x+198y=18$$ là $$(1,-5)$$.
- Suy ra một nghiệm của phương trình $$252x+198y=36$$ là $$(2,-10)$$. (ans)

Có thể suy ra họ nghiệm phương trình đã cho là $$(2+11k, -10-14k)$$

Tuy nhiên, khi trình bày thuật toán này trên máy tính, cần có cách làm ngắn gọn hơn là việc lưu trữ lại các bước của thuật toán Euclid.

Ý tưởng khác là song song với việc tìm ước chung lớn nhất của $$m,n$$, ta duy trì bộ số $$(x,y)$$ thỏa mãn các điều kiện sau:

```
m = xm*a + ym*b
n = xn*a + yn*b
r = xr*a + yr*b
```

Như vậy thì khi thuật toán Euclid kết thúc, ta có số $$m$$ thu được là $$\text{GCD}(m,n)$$, cùng với `xm` và `xn` là các hệ số Bézout của $$a$$ và $$b$$. Toàn bộ thuật toán như sau:

```python
def ext_gcd(a,b):
    m, n = a, b
    xm, ym = 1, 0
    xn, yn = 0, 1
    while (n != 0):
        q = m // n # chia lấy phần nguyên
        r = m % n # chia lấy phần dư
        xr, yr = xm - q*xn, ym - q*yn
        m = n
        xm, ym = xn, yn
        n = r
        xn, yn = xr, yr
    return (xm, ym) # m = gcd(a,b) = xm * a + ym * b
```

Nếu $$ax\equiv 1\pmod{b}$$ thì ta nói $$x$$ là nghịch đảo của $$a$$ theo modulo $$b$$ (hoặc ngược lại, $$a$$ là nghịch đảo của $$x$$ theo modulo $$b$$). Ký hiệu $$a^{-1}\equiv x\pmod{b}$$ hoặc $$x^{-1}\equiv a\pmod{b}$$.

Phần này nói về cách tìm nghịch đảo của $$a$$ theo modulo $$b$$.

Ta có:

$$
    ax-1\vdots b \\
    \Leftrightarrow ax-1=by\\
    \Leftrightarrow ax-by=1
$$

Như vậy, nghịch đảo của $$a$$ theo modulo $$b$$ tồn tại khi và chỉ khi $$\text{GCD}(a,b)=1$$ (điều kiện để phương trình trên có nghiệm). Để tìm được nghịch đảo modulo, ta phải giải phương trình $$ax-by=1$$ và chọn ra nghiệm $$x$$. Lưu ý, việc giải phương trình $$ax-by=1$$ hay giải phương trình $$ax+by=1$$ không ảnh hưởng nhiều đến việc tìm nghịch đảo modulo.

Ví dụ, ta có $$\text{GCD}(103,16)=1$$. Sử dụng hàm `ext_gcd(103, 16)` ta biết được $$103\times 7 - 16\times 45 = 1$$.

Như vậy có hai điều rút ra được:

- $$103^{-1}\equiv 7\pmod{16}$$
- $$16^{-1}\equiv -45\pmod{103} \Leftrightarrow 16^{-1}\equiv -45+103\equiv 58\pmod{103}$$

Họ nghiệm của phương trình $$ax+by=1$$ là $$(x_0+kb,y_0+ka)$$. Điều này cho thấy khoảng cách giữa hai nghiệm $$x$$ liên tiếp là $$b$$, chứng tỏ tồn tại duy nhất một nghịch đảo modulo của $$a$$ trong tập $$\mathbb{N}_b$$.

Nghịch đảo modulo là cách để chúng ta áp dụng "phép chia" vào hai vế của một phép đồng dư (congruence).

Với ví dụ cụ thể, mời các bạn tìm đọc bài viết về thuật toán mã hóa RSA.

Hệ phương trình đồng dư ẩn $$x$$ sau:

$$
    \begin{array}{c}
        x\equiv a_1\pmod{b_1}\\
        x\equiv a_2\pmod{b_2}\\
        \dots\\
        x\equiv a_k\pmod{b_k}\\
    \end{array}    
$$

có nghiệm khi và chỉ khi $$b_1, b_2, \dots, b_k$$ đôi một nguyên tố cùng nhau và nghiệm $$x$$ là duy nhất theo modulo $$B=b_1b_2\dots b_k$$.

Chỉ ra một nghiệm: 

$$
    x=\sum^k_{i=1}(a_ip_iq_i).
$$

Với $$p_i=\frac{B}{b_i}$$ và $$q_i\equiv p_i^{-1}\pmod{b_i}$$.

Để tìm ra nghiệm trên:

- Đặt nghiệm $$x=x_1+x_2+\dots+x_k$$, với $$x_i\equiv a_i\pmod{b_i}$$ (điều kiện thứ nhất) và $$x_i$$ chia hết cho tất cả các giá trị $$b_j$$ còn lại $$(j\neq i)$$ (điều kiện thứ hai). Khi đó $$x$$ sẽ là nghiệm bài toán.
- Vấn đề đặt ra là tìm các giá trị $$x_i$$ để khi lấy tổng sẽ cho ra nghiệm $$x$$ của bài toán.
- Nếu ta đặt $$x_i=p_i=\frac{B}{b_i}$$, thì $$x_i$$ sẽ chia hết cho mọi giá trị $$b_j$$ còn lại $$(j\neq i)$$, ngoại trừ $$b_i$$. Tuy nhiên, như vậy chỉ mới thỏa một điều kiện.
- Để $$x_i\equiv a_i\pmod{b_i}$$, thì $$x_i$$ phải được nhân modulo với một thừa số bằng $$p_i^{-1}a_i$$. Lúc này, $$x_i=p_i\times p_i^{-1}\times a_i\equiv a_i\pmod{b_i}$$. Việc nhân thêm thừa số này không ảnh hưởng đến tính thỏa mãn của điều kiện thứ nhất.

Theo định lý số dư Trung Quốc, nghiệm tìm được là duy nhất theo modulo $$B$$, nên cách giải bài toán này có thể áp dụng để tìm số dư của $$x$$ chia cho $$b_1b_2\dots b_k$$, với dữ liệu cho biết số dư của $$x$$ khi lần lượt chia cho $$b_1,\ b_2,\\dots, b_k$$.

Ví dụ, biết $$5^{2050}\equiv 2\pmod{7}$$ và $$5^{2050}\equiv 1\pmod{11}$$. Hỏi $$5^{2050} \text{ mod } 77 = ?$$

Ở đây mặc dù ta đã biết $$x=5^{2050}$$ rồi, nhưng đây chỉ là một nghiệm trong họ nghiệm của hệ phương trình:

$$
    \begin{array}{c}
        x\equiv 2\pmod{7}\\
        x\equiv 1\pmod{11}\\
    \end{array}
$$

Ta vẫn cần phải tìm nghiệm cho hệ này để ra một nghiệm có giá trị nhỏ hơn, sau đó đem $$\text{mod } 77$$ sẽ ra kết quả bài toán.

<table style="margin:0 auto;" border="1">
<tr>
    <td>$$i$$</td>
    <td>1</td>
    <td>2</td>
</tr>
<tr>
    <td>$$a_i$$</td>
    <td>2</td>
    <td>1</td>
</tr>
<tr>
    <td>$$b_i$$</td>
    <td>7</td>
    <td>11</td>
</tr>
<tr>
    <td>$$p_i=\frac{B}{b_i}$$</td>
    <td>11</td>
    <td>7</td>
</tr>
<tr>
    <td>$$q_i\equiv p_i\pmod{b_i}$$</td>
    <td>2</td>
    <td>8</td>
</tr>
<tr>
    <td>$$x_i=a_ip_iq_i$$</td>
    <td>44</td>
    <td>56</td>
</tr>
</table>
<br>

- $$x = x_1 + x_2 = 100$$.
- $$100 \text{ mod } 77 = 23$$

Vậy:

- $$5^{2050} \text{ mod } 77 = 23$$
- Họ nghiệm hệ phương trình là $$x = 77t+23$$

Trên thực tế, có một vài phép biến đổi để tìm $$5^{2050} \text{ mod } 77$$ mà không cần dùng chiêu "đao to búa lớn" như thế này. Tuy nhiên, cách giải này vô cùng quan trọng vì nó định ra được những bước tính toán cụ thể rạp khuôn để áp dụng vào lập trình, ít tốn kém hơn là dùng máy tính để "mô phỏng" cách làm bằng tay, vốn phụ thuộc nhiều vào khả năng quan sát tinh tế của người giải toán.
