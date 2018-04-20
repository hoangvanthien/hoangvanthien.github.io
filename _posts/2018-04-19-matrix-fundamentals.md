---
layout: post
title: "Các khái niệm cơ bản trong ma trận"
categories: ["Mathematics - Matrix Analysis"]
---
Ghi lại nhanh sau này coi lại, đã dốt toán lại còn không nhớ dai.

Cho ma trận $m\times n$ sau:

$$ \begin{array}{cccc} a_{11} & a_{12} & \dots & a_{1n} \\ 
                        a_{21} & a_{22} & \dots & a_{2n} \\
                        \vdots & \vdots & \ddots & \vdots \\
                        a_{m1} & a_{m2} & \dots & a_{mn} \end{array} $$

- Đối với ma trận vuông $\textbf{A}$ bậc $n$, đường chéo gồm các phần tử $ a_{11}, a_{22}, \dots, a_{mn} $ được gọi là đường chéo chính (**principal** or **leading** diagonal). Tổng các phần tử trên đường chéo chính gọi là **trace** của $\textbf{A}$.
- Ma trận chéo là ma trận mà các phần tử khác 0 chỉ nằm trên đường chéo chính. Trường hợp đặc biệt, nếu cả đường chéo chính chỉ gồm các số 1 thì đó gọi là ma trận đơn vị (**identity** or **unit** matrix).
- Cách tạo ma trận chuyển vị $ \textbf{A}^T $: Đem cột rải thành hàng
- Ma trận đối xứng (**symmetric matrix**) khi $ \textbf{A} = \textbf{A}^T $, phản đối xứng (**skew symmetric matrix**) khi $ \textbf{A} = -\textbf{A}^T $
- Hai ma trận bằng nhau khi chúng có cùng shape, các cặp phần tử tương ứng đều bằng nhau.
- Nhân vô hướng (multiplication by a scalar) một số với ma trận: nhân số đó với từng phần tử trong ma trận
- Cộng ma trận (phải cùng shape): các cặp phần tử tương ứng cộng nhau
    - Tính chất giao hoán (commulative) $ \textbf{A}+\textbf{B}=\textbf{B}+\textbf{A} $
    - Tính chất kết hợp (associative) $ (\textbf{A}+\textbf{B})+\textbf{C}=\textbf{A}+(\textbf{B}+\textbf{C}) $
    - Tính chất phân phối (distributive): $ \lambda(\textbf{A}+\textbf{B})=\lambda\textbf{A}+\lambda\textbf{B} $
- Nhân ma trận `a[m][n]` với `b[n][k]`, tạo ra ma trận `c[m][k]`:
    
```python
    for i in range(m):
        for j in range(k):
            for x in range(n):
                c[i][j] += a[i][x] * b[x][j]
```

- Tính chất nhân ma trận:
    - Phản giao hoán: $ \textbf{A}\textbf{B}\neq\textbf{B}\textbf{A} $
    - Tính chất kết hợp: $ (\textbf{A}\textbf{B})\textbf{C}=\textbf{A}(\textbf{B}\textbf{C}) $
    - Nếu $ \lambda $ là số, thì: $ (\lambda\textbf{A})\textbf{B} = \textbf{A}(\lambda\textbf{B}) = \lambda(\textbf{A}\textbf{B}) $
    - Tính chất phân phối với phép cộng: $ (\textbf{A}+\textbf{B})\textbf{C}=\textbf{A}\textbf{C}+\textbf{B}\textbf{C} $ và $ \textbf{A}(\textbf{B}+\textbf{C})=\textbf{A}\textbf{B}+\textbf{A}\textbf{C} $
- Tính chất của ma trận chuyển vị:
    - $ (\textbf{A}+\textbf{B})^T=\textbf{A}^T+\textbf{B}^T $
    - $ (\textbf{A}^T)^T = \textbf{A} $
    - $ (\textbf{A}\textbf{B})^T=\textbf{B}^T\textbf{A}^T $

Định thức (determinant) của ma trận vuông bậc $n$ $\textbf{A}$ được định nghĩa đệ quy như sau:

- Nếu ma trận chỉ có một phần tử, $\|\textbf{A}\| = a_{11}$
- Ngược lại, $ \|\textbf{A}\|=\sum_{j=1}^{n}(-1)^{i+j}a_{ij}M_{ij} $ (với $i$ bất kì), trong đó $M_{ij}$ là định thức của ma trận vuông còn lại sau khi bỏ hàng $i$ cột $j$.

Khái niệm:

- $M_{ij}$ được gọi là minor của phần tử $i,j$
- $(-1)^{i+j}M_{ij}$ được gọi là cofactor của phần tử $i,j$

Tính chất của định thức:

- Nếu matrix có hai hàng (cột) bằng nhau thì det bằng 0.
- Nếu một hàng (cột) của matrix cùng chia hết cho một số $\lambda$ thì có thể tách nhân tử $\lambda$ ra ngoài matrix, tính det của matrix mới, rồi nhân với $\lambda$ để có được det của matrix ban đầu.
- Tráo đổi hai hàng (cột) của matrix làm đổi dấu det.

$$ \textrm{det}\left( \begin{array}{cc} a_{11} + b_{11} & a_{12}+b_{12}\\ a_{21} & a_{22} \end{array} \right) = \textrm{det}\left( \begin{array}{cc} a_{11} & a_{12}\\ a_{21} & a_{22} \end{array} \right) + \textrm{det}\left( \begin{array}{cc} b_{11} & b_{12}\\ a_{21} & a_{22} \end{array} \right) $$

- $\|\textbf{A}^T\|=\|\textbf{A}\|$
- $\|\textbf{AB}\|=\|\textbf{A}\|\textbf{B}\|$

Ma trận liên hợp (**adjoint matrix**) là ma trận chuyển vị của ma trận các cofactor của một ma trận vuông.

- $\textbf{A}(\textrm{adj}\ \textbf{A}) = \|\textbf{A}\|\textbf{I}$
- $\|\textrm{adj}\ \textbf{A}\|=\|\textbf{A}\|^{n-1}$, với $n$ là bậc của ma trận
- $\textrm{adj}\ \textbf{AB}=(\textrm{adj}\ \textbf{B})(\textrm{adj}\ \textbf{A})$

Ma trận nghịch đảo:

- $ \textbf{A}^{-1}\textbf{A}=\textbf{A}\textbf{A}^{-1}=\textbf{I} $
- Nếu det của **A** khác 0: $ \textbf{A}^{-1}=(\textrm{adj}\ \textbf{A})/\|\textbf{A}\| $, ngược lại thì nghịch đảo của **A** không tồn tại
- $ (\textbf{A}\textbf{B})^{-1}=\textbf{B}^{-1}\textbf{A}^{-1} $
