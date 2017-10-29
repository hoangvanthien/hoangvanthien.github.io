---
layout: post
title: Làm quen với Django
subtitle: "The web framework for perfectionists with deadlines."
---
# Tạo project
```bash
$ django-admin startproject <PROJECT-NAME>
```
Lệnh trên sẽ tạo một thư mục có tên `<PROJECT-NAME>` và đặt nội dung của app vào đó.

`cd` vào thư mục vừa tạo này, gõ `ls` sẽ thấy file tên `manage.py`. File này dạng như mở rộng chức năng của `django-admin` và thường được dùng để kiểm soát vài thứ trong project.

```
<PROJECT-NAME>/
    manage.py
    <PROJECT-NAME>/
        __init__.py
        settings.py
        urls.py
        wsgi.py

```

# Chạy server

Thử chạy project vừa tạo xem có vấn đề gì không (tốt nhất là không):

```bash
$ python manage.py runserver
```

# Tạo app
Trong project này, bạn sẽ tạo nhiều app khác nhau. Có thể hình dung project là module lớn, còn app lại là một module 
