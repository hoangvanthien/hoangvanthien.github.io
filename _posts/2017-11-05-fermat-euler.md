---
layout: post
title: ["Định lý nhỏ Fermat ", "và Phi hàm Euler"]
categories: ["Mathematics", "Lecture Notes"]
---

- Hàm phi ($\varphi$) Euler của một số nguyên dương $n$ được định nghĩa là số các số nguyên dương $m$ không vượt quá $n$ sao cho $(m,n)=1$.
    - Ví dụ, số 10 có 4 số nguyên dương không vượt quá 10 và nguyên tố cùng nhau với 10, đó là 1, 3, 7, 9. Như vậy, $\varphi(10)=4$.
- Nếu $n=p$ là số nguyên tố, dễ thấy $\varphi(p)=p-1$.
- Nếu $n=p^k$ thì $\varphi(p^k)=p^k-p^{k-1}$.
    - **Chứng minh:** Có tổng cộng $p^k$ số nguyên dương cần xét. Trong số đó, các số $m$ có ước chung lớn nhất với $n$ khác 1 sẽ có dạng $m=px$, với $x$ là bất cứ số nguyên dương nào đảm bảo $px\leq p^k$, như vậy có tổng cộng $p^{k-1}$ giá trị $x$ như thế. Suy ra số các số nguyên tố cùng nhau với $n$ là $p^k-p^{k-1}$. (QED)
- Nếu $n=p_1p_2$ (với $p_1 \neq p_2$) thì $\varphi(p_1p_2) = \varphi(p_1)\times\varphi(p_2)$.
    - **Chứng minh:** Có tổng cộng $p_1p_2$ số nguyên dương cần xét. Trong số đó, các số $m$ có ước chung lớn nhất với $n$ khác 1 sẽ có dạng $m=p_1x$ hoặc $m=p_2x$ sao cho $m\leq n$. Trong trường hợp đầu, $x$ trải dài từ $1$ đến $p_2$. Trong trường hợp sau, $x$ trải dài từ $1$ đến $p_1$. Tuy nhiên, có hai giá trị $m$ được đếm hai lần, đó là $p_1p_2$. Như vậy có tổng cộng $p_1+p_2-1$ số không nguyên tố cùng nhau với $n$. Như vậy: 

$$
    \varphi(n)=p_1p_2-(p_1+p_2-1)\\
    =p_1p_2 - p_1 - p_2 + 1\\
    =p_1(p_2-1)-(p_2-1)\\
    =(p_1-1)(p_2-1)\\
    =\varphi(p_1)\times\varphi(p_2)
$$

- Nếu $n=ab$ (với $a,b$ nguyên tố cùng nhau) thì $\varphi(ab)=\varphi(a)\times\varphi(b)$ (trường hợp tổng quát hơn của định lý trước).
    - **Chứng minh**: Tất cả các số nguyên dương $m$ không vượt quá $n=ab$ có dạng $m=aq+r$ với $q,r$ là các số nguyên lần lượt nằm trong khoảng $[0,b-1]$ và $[1,a]$.
    Công việc cần làm là đếm xem có bao nhiêu cặp giá trị $(q,r)$ thỏa bài toán.
    <br><br>_**Bước 1:**_ Chọn $r$. Nhận thấy rằng $d=(r,a)\neq 1$, nếu không, $m\vdots d$ và $n\vdots d$ suy ra $(m,n)\neq 1$. Xét việc chọn các giá trị $r$ thỏa mãn $(r,a)=1$, có tổng cộng $\varphi(a)$ giá trị $r$ như thế.
    <br><br>_**Bước 2:**_ Chọn $q$. Với mỗi giá trị $r$ đã chọn, có tổng cộng $b$ số $m=aq+r$ cần phải xét, với $q$ chạy từ $0$ đến $b-1$. Vì $a$ và $b$ nguyên tố cùng nhau nên các số $r$, $a+r$, $2a+r$, $\dots$, $(b-1)a+r$ khi đem chia cho $b$ lấy phần dư sẽ cho ra các kết quả đôi một khác nhau, tạo nên tập hợp $\{0,1,\dots,b-1\}$. Ta cần chọn ra các giá trị $m$ nguyên tố cùng nhau với $b$. Trong trường hợp đó, kết quả $m \mod b$ phải ra một số nguyên tố cùng nhau với $b$ và khác 0. Có $\varphi(b)$ giá trị $q$ để tạo ra các giá trị $m$ như thế.
    <br><br>Các số nguyên được chọn qua hai bước sẽ vừa nguyên tố cùng nhau với $a$ và $b$, mặt khác $(a,b)=1$, nên chúng cũng nguyên tố cùng nhau với $ab$. Áp dụng quy tắc nhân thì có $\varphi(a)\varphi(b)$ số. (QED)

- Định lý Euler: Với mọi số nguyên dương $n$ nguyên tố cùng nhau với $a$, ta có: 

$$
    a^{\varphi(n)}\equiv 1\pmod{n}
$$

Định lý nhỏ Fermat chỉ ra rằng nếu $p$ là một số nguyên tố thì:

$$
    a^p \equiv a \pmod{p}\\
    \Leftrightarrow (a^p - a)\ \vdots\ p
$$

Nếu $(a,p) = 1$ thì ta có $(a^{p-1} - 1)\ \vdots\ p \Leftrightarrow a^{p-1} \equiv 1\pmod{p}$. Đây là một trường hợp nhỏ của định lý Euler với $n=p$
