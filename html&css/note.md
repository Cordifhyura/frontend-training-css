# Selector
- attribute
you can pair the element selector with an attribute selector, like this:
```
a[href]{
/* style declaration */
}
```
This selector would match any anchor element with an href attribute.
By the way, you can also use attribute selectors, with or without values, on their own, such as:
```
[href]{
/* style declaration */
}
```
- sibling
Sibling selector syntax uses the combinator ~. As you might expect, this syntax targets elements with the same parent.
```
header ~ ul {
/* style declarations */
}
```
This selector targets any ul that is **preceded** by a header with the same parent element.

The final relationship selector type is the adjacent sibling selector, which targets elements that are **immediately** preceded by a sibling of the specified type. The adjacent sibling combinator is +:
```
li + li {
/* style declarations */
}
```
This syntax would select all li elements **immediately preceded** by a sibling li.

# Inheritance
后加载的同名样试会覆盖先加载的样式

计算特指度时，伪元素（如：：first一1ine）与标签选择符一样，记1分；伪类
（如:link)与类选择符一样，记10分

特指度一样时，采用后加载的样式

!important只能偶尔使用，而且使用之前要想想有没有其他方法可以解决冲突。有时，需为样式改个名字，或者调整样式在样式表里的位置。


# Performance
访客访问网站中的其他网页时，如果使用的是相同的外部样式表，浏览器不会再次下载这个样式表，只会下载所请求的HTML文件，外部样式表则从缓存中读取，这样能节省大量下载时间。
刷新网页时，浏览器不一定会重新加载外部样式表，因此可能看不到最新版样式的效果。
若想解决这种问题，可以按ctrl（）键的同时单击浏览器的刷新按钮，强制重新加载网页（也会重新加载网页链接的所有文件）。使用Chrome或lnternetExpIorer的话，也可以按ctrl+F5组合键；Firefox的键盘快捷键则是Ctrl+Shift+R

# Compile
前面说过，我们应该使用W3C的HTML验证程序确保网页的HTML代码没有错误（参见第1章“验证网页"旁注）；类似地，我们也应该检查css代码，确保无误。

# Conventions/Design
如果网站中的所有页面都使用同一个外部样式表，body标签样式会应用到每个页面的\<body>标签上。使用不同的类（或旧）为\<body>标签定义不同的样式，能为网站中不同的板块或不同类型的页面定义不同的外观。