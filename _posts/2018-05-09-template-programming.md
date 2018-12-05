---
layout: post
categories: ["C++"]
title: ["A Collection of Concepts and Issues in Template Metaprogramming"]
excerpt_separator: <!--more-->
sticky: true
---

This is a note from Walter E. Brown's talk at CppCon 2014 -- "Modern Template Metarogramming - A compendium."

Metaprogramming is to write templates, and the compiler will see how the templates are called, then it will generate the real code based on the template. It is used to enhance run-time performance and adaptability.

> **DISCLAIMER:** The following is my understanding about the subject. My understanding does not represent Walter E. Brown's opinion, nor should it necessarily be the fact. Readers should carefully consider before re-use this as reference material. I'm open to new ideas and very active online, so don't hestitate to send me an email if you want to improve this post.

# Simple example

```cpp
template <int N>
struct abs {
    static_assert(N != INT_MIN); // There is no opposite number of the smallest int
    static constexpr auto value = (N > 0) ? N : -N;
}
// ...
int const n = -15;
std::cout << (abs<n>::value) << std::endl;
```

One thing to remember is we're working with compile time, we do not touch run time, so we have to work with what we know at compile time. You can call `abs<-3>`, `abs<n>` (with `n` being a constant), but you cannot call `abs<m>` if `m` is not known at compile time. Again, templates are used to generate code at compile time, using what compiler knows at compile time.

`abs` was a template class/struct ([difference?](https://stackoverflow.com/a/92951/3209478)). We assigned `value` to be a `static` property so that we can call `value` without initialize an instance of `abs` (as if you're working with `namespace`).

Brown called `abs` implemented above "**metafunction**." It is a class that represents a function. I prefer to look at it as... a class. It is a more general term and in the big picture a class appears to be more obvious.

<!--more-->

# Specialization

Find the greatest common divisor of two numbers (again, known at compile time)

```cpp
template <unsigned M, unsigned N> // doesn't matter unsigned int, unsigned long, etc. Anything unsigned works.
struct gcd {
    static constexpr auto value = gcd<N, M%N>::value;
}
```

And we know that the recursion base of this algorithm is when N = 0. We specialize this by adding a partial specialization:

```cpp
template <unsigned M>
struct gcd<M,0> { // partial specialization
    static_assert(M != 0);
    static constexpr auto value = M;
}
```

# Template with types as parameters

In the above examples, we've shown templates that receive parameters that are values known in compile time, wrapped between `<` and `>`. But the power of template is more than that, parameters can be types rather than values. Imagine you call a function but `int` and `double` are parameters. It works similarly.

The example below shows how many dimension an array-type has (note that I used the word "type," I'm **not** doing anything with variable here). **Simply speaking**, if you throw a type that is not array to this function, it gives you 0, otherwise it will `return 1 + number of dimensions after remove one dimension`.

```cpp
template <class T>
struct rank { static constexpr size_t value = 0; } // general (meta)function for all type T

template <class T, size_t N>
struct rank <T[N]> { // partial spec for array type, T[N] has at least one dimension ([N])
    static constexpr size_t value = 1 + rank<T>::value; // removed dimension [N], the remaining is T
}
```

When you write a template that accepts types, you can write `class T` or `typename T`, there are no difference. The keyword `typename`, however, is used in another context that we'll catch up on that later ([want to know now?](https://stackoverflow.com/a/1600968/3209478)).

# Template that returns types

We've been playing with `value`. You can also return a type with metafunction. Consider the function of "removing" constant below, when you give it something like `const int`, it will give you `int`. As Brown put it, "no real removing, just 'give me the equivalent type without const'".

We will build this metafunction as we've done with examples above: start with a general case (any type), and then make a specialization (for const type):

```cpp
template <class T>
struct remove_const { using type = T; } // generally, just throw back whatever type the user gave you....

template <class T>
struct remove_const<T const> { using type = T; } // ... but if the user gave something has const with it, 
                                                // return them the same thing but without const

// ...
typename remove_const<T>::type var1; // why there is "typename" here?
typename remove_const_t<T> var2; // C++14 equivalent
```

The convention that we should follow is that the metafunction returns a type has a typename inside it named `type`, so that we can make use of this type result for other things, e.g. declare variable by prepend "typename" like the above example. `typename` specifies that the identifier that follows is a type, not a value member of `remove_const<T>`.

And for those metafunctions that return types, C++14 generate another metafunction for you with suffix `_t` so you can call out the type without jumping inside the class (metafunction).

# Compile-time decision-making

Consider an example of a metafunction that takes a boolean and two typenames and returns the first typename if the boolean value is true, otherwise returns the second typename.

```cpp
template <class T>
struct type_is { using type = T; }

template <bool, class T, class> // unnamed params as place holders
struct IF : type_is<T> { }; // general

template <class T, class F>
struct IF<false, T, F> : type_is<F> { }; // partial specialization
```

# SFINAE

During template instantiation (simply saying, generating real code from templates), the compiler will

- Obtain the template arguments:
    - If you explicitly ask the compiler to generate code from a template, providing explicit arguments, the compiler will use them. This process is called "explicit template instantiation."
    - If you simply call the function that was templated, the compiler will choose the best matched template to generate the function for you.
- Replace the template arguments throughout the template.

Consider the function `enable_if` in C++ Library, it is implemented like this:

```cpp
template<bool, class T>
struct enable_if : type_is<T> { }; // by default, return type T

template<class T>
struct enable_if<false, T> { }; // if the boolean is false, return no type at all
```

To illustrate the meaning of SFINAE (I will explain what that acronym means), firstly imagine we have a function `do_stuff`, that works differently, depends on the type of input we give this function:

```cpp
template<class T>
enable_if_t<std::is_integral<T>::value, T> do_stuff(T var) { /* If var is integral type */ }

template<class T>
enable_if_t<std::is_floating_point<T>::value, T> do_stuff( var) { /* If var is floating point type */ }
```

If you call the function with an integral argument, the first template matches, the second template **fails to instantiate** (generate) **the function for you**. There is no field `type` in `enable_if` if the boolean given was false, it makes no sense to create a function without knowing what type of data it returns! This is called ill-formed code. However, you will get no compiler error. As long the compiler can find a template matched to what you want, it will not complain. SFINAE means "Substitution Failure Is Not An Error."

What if you call the function with an argument of type, say, `std::string`? The compiler will complain "no matching function," because both templates provided produce ill-formed code, the compiler ends up finding any good template for you, hence no function was created, leading to a compiler error.

# `integral_constant`

`integral_constant` is a class that does nothing much, it takes a type and a constant of that type, and creates an attribute `value` holding that constant's value.

```cpp
template <class T, T v>
struct integral_constant {
    static constexpr T value = v;
    constexpr T operator ()() const noexcept { return value; } // Functor (we'll talk about this below)
    constexpr operator T() const noexcept { return value; } // Allow casting
    // ... Other useful things
}
```

Next time, if you want to make a template class that quickly returns some integral value, make it inherited to `integral_constant<...>` instead of typing `static constexpr ...`. Recall the example of calculating the rank of an array type, this time we make them inherited to `integral_constant` like this:

```cpp
template <class T>
struct rank : integral_constant<size_t, 0u> { }; // general

template <class T, int N>
struct rank<T[N]> : integral_constant<size_t, 1u + rank<T>::value> { }; // partial specialization
```

The code looks cleaner and shorter.

C++11 also comes with two class `true_type` and `false_type` that contain `value` of `true` and `false`, respectively. They're used very similar like `integral_constant`. You use inheritance for template classes instead of making a new attribute of the same name in every class. Example, given two types, are they the same?

```cpp
template <class, class>
struct is_same : false_type { }; // general

template <class T>
struct is_same<T, T> : true_type { }; // partial specialization
```

# Value-returning metafunction calls:

In the previous section I described the `integral_constant` template. There are functor and casting involved in order to make the calling routine more flexible.

Examples:

- Normal call: `integral_constant<int, 42>::value`
- Use functor ([what is that?](https://stackoverflow.com/a/356993/3209478)): `integral_constant<int, 42>{}()`
- Use casting: `int(integral_constant<int, 42>{})`

If you removed `operator()()`, you cannot use the second way. The same applies to casting. You want the user to have many ways to call a value, then you have to provide them. But you cannot write those ways repeatedly in all metafunctions. Hence you create `integral_constant` and make other classes inherit it.

# Parameter pack

Let's generalize the metafunction `is_same` be `is_one_of`. You give a type, and a list of types (at the time of writing template, you do not know how long that list is, but when the user use your library, they have to give a definite-length list). The class is implemented as following:

```cpp
template <class T, class... P0toN> // Yes, use three dots like that
struct is_one_of; // general: just an interface

template <class T>
struct is_one_of<T> : false_type { }; // partial specialization: a type and empty list

template <class T, class... P1toN>
struct is_one_of<T, T, P1toN> : true_type { }; 
// partial spec: the given type matches the first element of the list

template <class T, class U, class... P1toN>
struct is_one_of<T, U, P1toN> : is_one_of<T, P1toN> { }; 
// partial spec: ignore the first elem, check the rest of the list
```

# Unevaluated operands

These **operators**: `sizeof`, `alignof`, `typeid`, `decltype`, `declval`, and `noexcept` **never** evaluate their **operands**. They inspect the operands. They jump into the code, analyze the construction, and return the result, as if we--the developers--analyze our code with our eyes and brains without running it.

We can make use of `decltype` and `declval` to test if something (an assignment, an expression, etc.) works, without actually execute/evaluate/construct things. Thanks to SFINAE, if the code is ill-formed, no error will be issued and the compiler can move on to the next overload. I was seriously amazed by the application of SFINAE.

Simply speaking, `decltype(expression)` will return a typename of the enclosed expression, and `declval<T>()` will return an rvalue reference of `T` (that is `T&&`) ([what is rvalue?](https://eli.thegreenplace.net/2011/12/15/understanding-lvalues-and-rvalues-in-c-and-c/)).

Let's put this into action. We will test if a type is copy-able and assignable (that means operator `=` works under that type).

```cpp
template <class T>
struct is_copy_assignable {
private:
    template<class U, class = decltype( declval<U&>() = declval<U const &>() )>
    static true_type try_assign( U&& ); 
        // only match if template arguments are obtained successfully

    static false_type try_assign( ... ); // this overload always matches
public:
    using type = decltype(try_assign(declval<T>()));
}
// ...
cout << is_copy_assignable<int>::type::value;
```

You can see that we make use of SFINAE very effectively: the first function will only match `try_assign(declval<T>())` if there is no problem to assign `declval<U&>() = declval<U>()`. If the assignment fail, it results in no error! It simply moves to the next overload with argument `...` (this will match anything).

We need not to do anything within the function `try_assign`. As long as we tell the return type (`true_type` or `false_type`), the function will automatically return a value of that type.

If you notice, the way we implement `is_copy_assignable` is more complicated and... uglier than `is_one_of` or `is_same` which conveniently inherit `true_type` and `false_type`.

# `void_t`

Brown suggested an alias that works as a metafunction, called `void_t`. You give this template class anything, and all it does is giving you back a void type.

```cpp
template <class ...>
using void_t = void;
```

## Remake `try_assign` 
You can make use of this alias template to do what `try_assign` did! It's super short and straightforward:

```cpp
template <class T, class = void>
struct is_copy_assignable : false_type {};

template <class T>
struct is_copy_assignable<T, 
                void_t<decltype( declval<U&>() = declval<U const &>() )>> 
                : true_type {};
```

Brown believed that `void_t` has a vast application, could be universally applicable! In my limited imagination, the combination between `void_t` and `decltype` is super useful when you need to check if something works or exists, without actually raising an error. `decltype` is powerful because it **inspects** instead of **evaluates**. 

This is smart. This can be summed up in one life motto: "You don't need to make mistakes to know an action is wrong, you study that action and deduce."

## Checking a type has a type member `type`

```cpp
template<class, class = void>
struct has_type_member : false_type { };

template<class T>
struct has_type_member<T, void_t<typename T::type> > : true_type { };
```

If `T` doesn't have `type` as a type member, calling `typename T::type` will be illegal (ill-formed code), so the partial specialization is ignored and the primary specialization is chosen. Otherwise, the partial specialization is chosen over the primary one because it is more specialized.

Please read [this beautiful explanation](https://stackoverflow.com/a/27688405/3209478) about `void_t`.

# See also

I want to credit the following sources for helping me write this post. I do not recommend you go through all of these, but if you stumble upon a confusion, check this list first to see if they can help you before googling.

1. [Walter E. Brown - "Modern Template Metaprogramming: A Compendium" - Part 1](https://www.youtube.com/watch?v=Am2is2QCvxY)
2. [Walter E. Brown - "Modern Template Metaprogramming: A Compendium" - Part 2](https://www.youtube.com/watch?v=a0FliKwcwXE)
3. [Eli Bendersky - "Understanding lvalues and rvalues in C and C++"](https://eli.thegreenplace.net/2011/12/15/understanding-lvalues-and-rvalues-in-c-and-c/)
4. [Cpp Reference - "Partial Template Specialization"](http://en.cppreference.com/w/cpp/language/partial_specialization)
5. [dyp @ StackOverFlow - "How does void_t work?"](https://stackoverflow.com/a/27688405/3209478)
6. [Karthik T @ StackOverFlow - "Difference between `constexpr` and `const`"](https://stackoverflow.com/a/14116014/3209478)
7. [Mats Fredriksson @ StackOverFlow - "Meaning of 'const' last in a C++ method declaration?"](https://stackoverflow.com/a/751783/3209478)
8. [Cpp Reference - "Type Alias, Alias Template"](http://en.cppreference.com/w/cpp/language/type_alias)
9. [Cpp reference - "Class Template"](http://en.cppreference.com/w/cpp/language/class_template)
10. [R Sahu @ StackOverFlow - "Template Specialization and Instantiation"](https://stackoverflow.com/a/28470089/3209478)
11. [Nawaz @ StackOverFlow - "Why do we use volatile keyword in C++?"](https://stackoverflow.com/a/4437555/3209478)
12. [Assaf Lavie @ StackOverFlow - "What are the differences between struct and class in C++?"](https://stackoverflow.com/a/999810/3209478)
13. [Aaron Klotz @ StackOverFlow - "Differences of keywords typename and class in template"](https://stackoverflow.com/a/2024173/3209478)
14. [Naveen @ StackOverFlow - "Officially, what is typename for?"](https://stackoverflow.com/a/1600968/3209478)
15. [jalf @ StackOverFlow - "C++ Functors, and their uses"](https://stackoverflow.com/a/356993/3209478)
16. [Thomas Becker - "C++ Rvalue References Explained" - Page 1](http://thbecker.net/articles/rvalue_references/section_01.html)
17. [Thomas Becker - "C++ Rvalue References Explained" - Page 8](http://thbecker.net/articles/rvalue_references/section_08.html)
18. [Arne Mertz - "Modern C++ Features – decltype and std::declval"](https://arne-mertz.de/2017/01/decltype-declval/)
19. [CPlusPlus.com - "is_copy_assignable"](http://www.cplusplus.com/reference/type_traits/is_copy_assignable/)
20. Countless of other sources that have formed my understanding bit by bit.
