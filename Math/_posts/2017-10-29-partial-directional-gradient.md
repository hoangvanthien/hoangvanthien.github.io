---
layout: post
title: ["Đạo hàm thành phần, ", "Đạo hàm có hướng, ", "và Gradient"]
subtitle: Weekly learning &#35;1
---

## 1. Đạo hàm riêng

Nói về đạo hàm, như các bạn học ở lớp 11, 12 thì đạo hàm biểu thị tốc độ thay đổi của hàm. Ví dụ hàm $y=f(x)$ có đạo hàm là $\frac{dy}{dx}$ để biểu thị tỉ lệ thay đổi của hàm $y$ khi biến đầu vào (input) $x$ thay đổi một lượng rất nhỏ $dx$. Đối với đồ thị trên mặt phẳng tọa độ, đạo hàm tại một điểm trên đồ thị bằng độ dốc của đường biểu diễn đồ thị đó. Chính vì thế mới có nguyên tắc tìm tiếp tuyến của đồ thị tại một điểm bằng cách tính đạo hàm. Nếu bạn từng làm gà chọi thi đại học, mấy cái mình nói ra ở đây chắc hẳn quá quen thuộc với bạn rồi.

Đạo hàm như vậy là đạo hàm thông thường (ordinary derivative).

Đạo hàm riêng (partial derivative) cũng hoạt động trên nguyên tắc tương tự. Giả sử cho hàm $z = f(x, y) = x^3y^2$.

{:.center}
<img src="/img/partial-directional-gradient/x3y2.jpg">

Đạo hàm riêng _theo biến $y$_, ký hiệu là $f_y$ hoặc $\frac{\partial z}{\partial y}$ sẽ được tính giống như đạo hàm bình thường nếu ta xem tất cả các biến *khác* $y$ là hằng số. Với đạo hàm thường ta dùng chữ $d$, đạo hàm riêng ta dùng chữ $\partial$ (đọc là "del" hoặc "partial").

$$
    \frac{\partial z}{\partial y} = 2x^3y
$$

Khi xem $x$ là hằng số, mình sẽ dùng một mặt phẳng, chẳng hạn $x=1$, để cắt đồ thị $z=x^3y^2$.

{:.center}
<img src="/img/partial-directional-gradient/x3y2-cut.jpg">

để lại giao tuyến là đường $1^3y^2=y^2$

Lợi ích của việc dùng đạo hàm riêng là mình có thể quan sát được sự biến động của hàm khi chỉ thay đổi một biến và giữ nguyên các thông số input còn lại. Để có đầy đủ thông tin về tốc độ thay đổi đó, chúng ta cần phải biết các biến được giữ nguyên là biến nào và có giá trị giữ nguyên bằng mấy, sau đó thay các giá trị này vào.

Theo ví dụ trên thì:

- Đạo hàm riêng theo biến $y$ của đại lượng $z$ khi $x=1$ là $2y$.
- Tại điểm $x=1, y=2$ trên mặt phẳng $z=f(x,y)$, đạo hàm riêng theo biến $y$ bằng $2y = 2\times 2 = 4$.
- Tức là tại điểm đó, nếu bạn giữ nguyên $x$ và dịch chuyển $y$ một lượng rất nhỏ bằng $\partial y$ thì đại lượng $z$ cũng sẽ thay đổi một lượng, nhưng gấp 4 lần $\partial y$ mà bạn thay đổi với $y$.
- Chính vì vậy ta viết $\frac{\partial z}{\partial y} = 4$.

## 2. Gradient

Gradient của hàm $f(\textbf{v})$ với $\textbf{v} = (v_1, v_2, ..., v_n)$ là một vector:

$$
\nabla f = \left[\begin{array}{c} \frac{\partial f}{\partial v_1}\\ \frac{\partial f}{\partial v_2}\\ \dots\\ \frac{\partial f}{\partial v_n} \end{array}\right]
$$

## 3. Đạo hàm có hướng

Mình không biết dịch "directional derivative" ra tiếng Việt như thế nào nên dịch thô thiển như vậy thôi. Đạo hàm có hướng có nhiều ý nghĩa và chức năng khác nhau, trong bài này chỉ nói đến việc mô tả tốc độ thay đổi của hàm.

Đạo hàm có hướng là một dạng tổng quát của đạo hàm riêng. Nếu đạo hàm riêng chỉ có thể xét cho sự thay đổi của một biến thì đạo hàm có hướng xét sự thay đổi của nhiều biến.

Mình sẽ nhóm các biến vào một vector, tức là thay vì ghi $z=f(x,y)$ thì ghi $z=f(\textbf{v})$ và ngầm hiểu $$\textbf{v}=\left[\begin{array}{c}x\\ y\end{array}\right]$$.

Do mình có 2 biến $x, y$ nên _không gian input_ của mình sẽ là mặt phẳng. _Không gian output_ của hàm $f$ là một tia số. Hàm $f$ làm nhiệm vụ "nối" một điểm trong không gian input đến một điểm trong không gian output, các bạn cứ tạm hình dung giống như ánh xạ vậy nhé.

Giả sử mình có một vector $\textbf{w}$, câu hỏi đặt ra là nếu điểm trong không gian input của mình bị đẩy lệch đi một ít **theo** chiều của vector $\textbf{w}$, thì điểm trong không gian output của mình sẽ bị lệch đi bao nhiêu lần?

Quan sát hình sau. Hai điểm cùng màu là một bộ input-output tương ứng nhau cho hàm $f$. Ví dụ ở bên trái, điểm màu đỏ $(1,2)$ làm input thì sẽ cho điểm màu đỏ ở ảnh phải có giá trị $f(x,y)=x^3y^2=4$. Bây giờ nếu trong hình trái, mình dời điểm màu đỏ sang vị trí điểm màu xanh theo **hướng** (chỉ hướng thôi nhé, còn khoảng cách được quyết định bởi $h\rightarrow 0$) của $\textbf{w}=(1,3)$, thì ở hình bên phải độ dời đó sẽ gấp bao nhiêu lần so với bên trái?

<div class="row">
    <div class="col-xs-6">
        <center>
        <img src="/img/partial-directional-gradient/2d-input.png">
        </center>
    </div>
    <div class="col-xs-6">
        <center>
        <img src="/img/partial-directional-gradient/1d-output.png">
        </center>
    </div>
</div>

Từ đó nảy sinh ra ký hiệu $\frac{\partial f}{\partial \textbf{w}}$, hoặc $\nabla_{\textbf{w}}f(\textbf{v})$ và đạo hàm có hướng. Nếu bạn nắm được cách tính đạo hàm bình thường, chắc chắn cách tính sau sẽ không có gì đáng ngạc nhiên:

$$\frac{\partial f}{\partial \textbf{w}} = \nabla_{\textbf{w}}f(\textbf{v}) = D_{\textbf{w}}f(\textbf{v}) = \lim_{h\rightarrow 0}\frac{f(\textbf{v}+h\textbf{w}) - f(\textbf{v})}{h} = \nabla_{\textbf{w}} f(\textbf{v}) = \nabla f\cdot\textbf{w}$$

Một số tài liệu sẽ định nghĩa khác một tí, chỉ xét đến chiều của vector và dùng để tính tốc độ thay đổi của hàm:

$$\nabla_{\textbf{w}}f(\textbf{v} = \nabla_{\textbf{w}} f(\textbf{v}) = \frac{\nabla f\cdot\textbf{w}}{\left|\left|\textbf{w}\right|\right|}$$

<hr>

**Note:**
À, ừm... đó là vì để đảm bảo mình luôn xét sự dịch chuyển theo vector đơn vị (vector có độ dài bằng 1). Nếu bạn chưa hiểu thì hãy tưởng tượng nhé. Trong ví dụ trên, dù ta lấy $\textbf{w}=(1,3)$ hay $\textbf{w}=(2,6)$ chúng ta đều mong muốn $\nabla_{\textbf{w}}f(\textbf{v})$ ra một giá trị duy nhất, đúng không? Vì mục tiêu lúc này của đạo hàm hướng là mô tả **sự thay đổi của hàm khi thay đổi input theo một chiều nhất định.**

Một số người còn xét đến độ lớn của $\textbf{w}$ và cho rằng nếu nó càng lớn thì tốc độ tăng cũng phải lớn theo. Mình đã có thử đặt câu hỏi này trên [Reddit](https://www.reddit.com/r/math/comments/79kfwb/why_dont_people_use_unit_vector_in_the_definition/) và trên [Quora](https://www.quora.com/Why-dont-people-use-unit-vector-in-the-formal-definition-of-directional-derivative-What-is-the-usefulness-of-keeping-it-general-like-that/answer/Alon-Amit). Hóa ra là nó tạo sự thuận tiện cho các tính chất khác :)) ("because it's mathematically convenient!"). Nếu có dịp mình sẽ nghiên cứu sâu thêm mảng này. Tạm thời bây giờ, nếu đơn thuần tính tốc độ hàm thì mình cần dùng vector đơn vị, với lý do đã đề cập ở trên.

<hr>

Theo ví dụ trên thì:

$$
\begin{align*}
    \nabla_{\textbf{w}} f(\textbf{v}) &= \frac{1}{\sqrt{10}}\left( 1\frac{\partial f}{\partial x} + 3\frac{\partial f}{\partial y} \right)\\
    &= \frac{1}{\sqrt{10}}\left( 3x^2y^2 + 6x^3y \right)
\end{align*}
$$

Tại các điểm input cụ thể, bạn có thể thay vào và tính ra được đạo hàm hướng tại điểm đó, còn gọi là tính độ dốc (slope). 

## 4. Ý nghĩa của gradient

Tốc độ thay đổi của hàm $f$:

$$\nabla_{\textbf{w}} f(\textbf{v}) = \nabla f\cdot\textbf{w}$$

Tại một điểm input cố định, hàm $f$ tăng nhanh nhất (max) khi $w$ cùng hướng với $\nabla f$ (tính chất tích vô hướng).

Do đó, người ta gọi gradient là chiều tăng nhanh nhất của hàm (direction of steepest ascent).

Các contour lines nằm sát nhau sẽ gần như song song và cách nhanh nhất di chuyển giữa hai đường song song là qua đường vuông góc chung. Cách đi này trùng với hướng gradient, hệ quả là, gradient luôn vuông góc với các đường contour lines.

{:.center}
<img src="/img/partial-directional-gradient/contour.jpg">
