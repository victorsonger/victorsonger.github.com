---
layout: post
title: 函数式编程
excerpt_separator:  <!--more-->
---

整理自 [Angelos Chalaris](https://hackernoon.com/@chalarangelo) 的 [A Quick Introduction to Functional Javascript](https://hackernoon.com/a-quick-introduction-to-functional-javascript-7e6fe520e7fa)

### 函数式编程的概念

函数式编程是一种编程范式，它将计算视为数学函数的评估，并避免改变状态和可变数据。

### 高阶函数

想要理解函数式编程，首先要知道JavaScript中的高阶函数（Higher-order function）的概念。

简单来说，高阶函数就是指一个函数接收另一个函数作为参数，或者返回一个函数作为结果。即函数是值，我们可以像传递变量一样，四处传递函数。

举个例子：

{% highlight js %}
// Create a function.
function f(x){
  return x * x;
}
// Use the function.
f(5); // 25

// Create an anonymous function and assign 
// it to a variable.
var g = function(x){
  return x * x;
}
// Now you can pass the function around.
var h = g;
// And use it
h(5); // 25
{% endhighlight %}

```scss
$sidebar-bg-color: #202020 !default;
$sidebar-sticky: true !default;
$layout-reverse: false !default;
$link-color: #268bd2 !default;
```

To override these variables, create your own `assets/css/main.scss` file.
Define your own variables, then import in Hydeout's SCSS, like so:

```
---
# Jekyll needs front matter for SCSS files
---

$sidebar-bg-color: #ac4142;
$link-color: #ac4142;
$sidebar-sticky: false;
@import "hydeout";
```

See the [_variables](_sass/hydeout/_variables.scss) file for other variables
you can override.

You can also insert custom head tags (e.g. to load your own stylesheets) by
defining your own `_includes/custom-head.html` or insert tags at the end
of the body (e.g. for custom JS) by defining your own
`_includes/custom-foot.html`.

### New Features

* Hydeout also adds a new tags page (accessible in the sidebar) and a new
  "category" layout for dedicated category pages.

* Category pages are automatically added to the sidebar. All other pages
  must have `sidebar_link: true` in their front matter to show up in
  the sidebar.

* A simple redirect-to-Google search is available. If you want to use
  Google Custom Search or Algolia or something with more involved,
  override the `search.html`.

* Disqus integration is ready out of the box. Just add the following to
  your config file:

  ```yaml
  disqus:
    shortname: my-`disqus-shortname
  ```

  If you don't want Disqus or want to use something else, override
  `comments.html`.

* For Google Analytics support, define a `google_analytics` variable with
  your property ID in your config file.

There's also a bunch of minor tweaks and adjustments throughout the
theme. Hope this works for you!
