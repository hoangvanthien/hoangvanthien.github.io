---
layout: post
title: "Các cấu trúc đại số"
categories: ["Mathematics"]
excerpt_separator: <!--more-->
---

## Property of closure

_Closure_ (aka. _luật hợp thành trong_) trên tập E là một **phép toán** mà khi tác động giữa hai phần tử thuộc E, chỉ cho ra một kết quả duy nhất và kết quả này cũng thuộc E. Closure là một ánh xạ $E\times E\mapsto E$. Lúc này ta gọi $E$ là một tập kín (_closed set_) dưới phép toán nói trên.

Ví dụ, trong tập $\mathbb{N}$, phép cộng (+) và phép nhân (*) là các luật thành trong, nhưng phép trừ (-) thì không phải, vì kết quả phép trừ có thể là số âm, nằm ngoài phạm vi của tập $\mathbb{N}$.

<!--more-->

### Tính chất của một luật hợp thành trong

Dưới đây là một số tính chất **có thể có** của một luật hợp thành trong (ký hiệu bằng dấu sao (*)).

1. Tính kết hợp (_Associativity_): $\forall a,b,c\in E$ ta có $a\*(b\*c) = (a\*b)\*c$.
2. Tính giao hoán (_Commutativity_): $\forall a,b\in E$ ta có $a\*b = b\*a$.
3. Phần tử trung hòa (_Identity element_): Một phần tử $e$ được gọi là phần tử trung hòa nếu $\forall a\in E$ ta có $a\* e=e\* a=a$. Cách gọi khác: phần tử đơn vị.
4. Phần tử đối (_Inverse element_): Một phần tử $a'$ được gọi là phần tử đối của $a$ nếu $a\* a' = a'\* a = e$.

## Algebraic structures

Tập E được trang bị cùng với một luật hợp thành trong được gọi là một cấu trúc đại số (_algebraic structure_). Tùy theo tính chất của luật hợp thành trong mà các cấu trúc được gọi tên và phân loại khác nhau. Các cấu trúc thông dụng nhất gồm: nhóm, vành, và trường.

### Group

Tập G là một tập kín dưới phép toán (*). Cặp (G, *) là một nhóm nếu:

- (*) có tính kết hợp.
- (*) có duy nhất một phần tử trung hòa.
- Mọi phần tử của G đều có đúng một phần tử đối.

Nếu có thêm:

- (*) có tính giao hoán.

thì nhóm (G, *) gọi là nhóm giao hoán, hoặc là _nhóm Abelian_.

Như vậy, có thể suy ra hai quy tắc sau đúng trong một nhóm:

- Quy tắc giản ước: $a\* x=b\* x \Rightarrow a = b$
- Quy tắc chuyển vế: $a\* x=b \Rightarrow x = a'\* b$

Hai quy tắc này là những công cụ hữu hiệu để giải phương trình trong một nhóm.

### Ring

Tập A là một tập kín dưới hai phép toán (+) và (*). Lưu ý đây chỉ là ký hiệu, không mang nghĩa đen về phép toán cộng và nhân. Song, nhiều tài liệu vẫn gọi hai luật thành trong này là luật cộng và luật nhân. Bộ ba (A, +, *) được gọi là một vành nếu:

- (A, +) là một nhóm giao hoán. Ký hiệu phần tử trung hòa của luật cộng là 0.
- (*) có tính kết hợp.
- (*) có tính phân phối với luật (+). Tức là:

$$ a*(b+c) = a* b + a* c $$

$$ (b+c)* a = b* a + c* a $$

- $a\* 0 = 0\* a = 0$

Nếu có thêm:

- (*) có tính giao hoán.

thì vành (A, +, *) gọi là _vành giao hoán_.

Nếu có thêm:

- (*) có đúng một phần tử trung hòa. Ký hiệu phần tử trung hòa của luật nhân là 1.

thì vành (A, +, *) gọi là _vành có đơn vị_.

Như vậy, chúng ta không có định nghĩa luật chia trong vành (luật chia thực tế là quy định phần tử đối của luật nhân). Điều này có nghĩa là chúng ta chưa giải được những phương trình như $a\* b=c$. Tuy nhiên, trong _vành nguyên_ (aka _integral domain_), phương trình $a\* b = 0$ có thể được giải qua mệnh đề tương đương "$a = 0$ hoặc $b = 0$".

### Field

Gọi (F, +, *) là một vành giao hoán có đơn vị. Nếu:

- Mọi phần tử khác 0 (phần tử đơn vị của luật cộng) đều có đúng một phần tử đối trong luật nhân.

thì bộ ba này được gọi là một _trường_.

### Một số suy luận

Nếu ta không xét phần tử 0 trong F, thì (F, \*) trở thành một nhóm giao hoán. Hệ quả là (\*) có tính giản ước và chuyển vế, nhưng tính chất này không áp dụng với phần tử 0, vì ta đã giả sử xóa 0 đi rồi.

Trường là một vành nguyên.

