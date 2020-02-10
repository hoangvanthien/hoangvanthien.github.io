---
layout: post
title: "Các khái niệm cơ bản trong ma trận"
categories: ["Mathematics - Matrix Analysis"]
---
Ghi lại nhanh sau này coi lại, đã dốt toán lại còn không nhớ dai.

Cho ma trận $$m\times n$$ sau:

$$ \begin{bmatrix} a_{11} & a_{12} & \dots & a_{1n} \\ 
                        a_{21} & a_{22} & \dots & a_{2n} \\
                        \vdots & \vdots & \ddots & \vdots \\
                        a_{m1} & a_{m2} & \dots & a_{mn} \end{bmatrix} $$

- Đối với ma trận vuông $$A$$ bậc $$n$$, đường chéo gồm các phần tử $$ a_{11}, a_{22}, \dots, a_{mn} $$ được gọi là đường chéo chính (**principal** or **leading** diagonal). Tổng các phần tử trên đường chéo chính gọi là **trace** của $$A$$.
- Ma trận chéo là ma trận mà các phần tử khác 0 chỉ nằm trên đường chéo chính. Trường hợp đặc biệt, nếu cả đường chéo chính chỉ gồm các số 1 thì đó gọi là ma trận đơn vị (**identity** or **unit** matrix).
- Cách tạo ma trận chuyển vị $$ A^T $$: Đem cột rải thành hàng
- Ma trận đối xứng (**symmetric matrix**) khi $$ A = A^T $$, phản đối xứng (**skew symmetric matrix**) khi $$ A = -A^T $$
- Hai ma trận bằng nhau khi chúng có cùng shape, các cặp phần tử tương ứng đều bằng nhau.
- Nhân vô hướng (multiplication by a scalar) một số với ma trận: nhân số đó với từng phần tử trong ma trận
- Cộng ma trận (phải cùng shape): các cặp phần tử tương ứng cộng nhau
    - Tính chất giao hoán (commulative) $$ A+B=B+A $$
    - Tính chất kết hợp (associative) $$ (A+B)+C=A+(B+C) $$
    - Tính chất phân phối (distributive): $$ \lambda(A+B)=\lambda A+\lambda B $$
- Nhân ma trận `a[m][n]` với `b[n][k]`, tạo ra ma trận `c[m][k]`:
    
```python
    for i in range(m):
        for j in range(k):
            for x in range(n):
                c[i][j] += a[i][x] * b[x][j]
```

- Tính chất nhân ma trận:
    - Phản giao hoán: $$ AB\neq BA $$
    - Tính chất kết hợp: $$ (AB)C=A(BC) $$
    - Nếu $$ \lambda $$ là số, thì: $$ (\lambda A)B = A(\lambda B) = \lambda(AB) $$
    - Tính chất phân phối với phép cộng: $$ (A+B)C=AC+BC $$ và $$ A(B+C)=AB+AC $$
- Tính chất của ma trận chuyển vị:
    - $$ (A+B)^T=A^T+B^T $$
    - $$ (A^T)^T = A $$
    - $$ (AB)^T=B^TA^T $$

Định thức (determinant) của ma trận vuông bậc $$n$$ $$A$$ được định nghĩa đệ quy như sau:

- Nếu ma trận chỉ có một phần tử, $$\|A\| = a_{11}$$
- Ngược lại, $$ \|A\|=\sum_{j=1}^{n}(-1)^{i+j}a_{ij}M_{ij} $$ (với $$i$$ bất kì), trong đó $$M_{ij}$$ là định thức của ma trận vuông còn lại sau khi bỏ hàng $$i$$ cột $$j$$.

Khái niệm:

- $$M_{ij}$$ được gọi là minor của phần tử $$i,j$$
- $$(-1)^{i+j}M_{ij}$$ được gọi là cofactor của phần tử $$i,j$$

Tính chất của định thức:

- Nếu matrix có hai hàng (cột) bằng nhau thì det bằng 0.
- Nếu một hàng (cột) của matrix cùng chia hết cho một số $$\lambda$$ thì có thể tách nhân tử $$\lambda$$ ra ngoài matrix, tính det của matrix mới, rồi nhân với $$\lambda$$ để có được det của matrix ban đầu.
- Tráo đổi hai hàng (cột) của matrix làm đổi dấu det.

$$ \begin{vmatrix} a_{11}+b_{11} & a_{12}+b_{12}\\ a_{21} & a_{22} \end{vmatrix}=\begin{vmatrix} a_{11} & a_{12}\\ a_{21} & a_{22} \end{vmatrix}+\begin{vmatrix} b_{11} & b_{12} \\ a_{21} & a_{22} \end{vmatrix} $$

- $$\|A^T\|=\|A\|$$
- $$\|AB\|=\|A\|B\|$$

Ma trận liên hợp (**adjoint matrix**) là ma trận chuyển vị của ma trận các cofactor của một ma trận vuông.

- $$A(\textrm{adj}\ A) = \|A\|I$$
- $$\|\textrm{adj}\ A\|=\|A\|^{n-1}$$, với $$n$$ là bậc của ma trận
- $$\textrm{adj}\ AB=(\textrm{adj}\ B)(\textrm{adj}\ A)$$

Ma trận nghịch đảo:

- $$ A^{-1}A=AA^{-1}=I $$
- Nếu det của **A** khác 0: $$ A^{-1}=(\textrm{adj}\ A)^T/\|A\| $$, ngược lại thì nghịch đảo của **A** không tồn tại
- $$ (AB)^{-1}=B^{-1}A^{-1} $$



