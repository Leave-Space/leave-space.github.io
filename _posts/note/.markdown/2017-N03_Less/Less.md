
# Less

> ![Logo][]

## 学习文档

[Less(en-us)][]  

[Less(zh-cn)][]

## 变量

```less
@nice-blue: #5B83AD;

#header {
  color: @nice-blue;
}
// 输出：
#header {
  color: #5B83AD;
}
// 变量可以用于任何地方，变量赋值有"延迟"
```

## 混合(Mixin)

```less
.bordered {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
.post a {
  color: red;
  .bordered;
}
// 输出：
.post a {
  color: red;
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}

// Mixin不仅支持.class的方式还支持#id的方式
// Mixin在调用时也可以带括号
// 如果你想创建一个Mixin，但是你不想要这个Mixin被输出，你可以在它后面加括号
// Mixin可以带参数
```

## 嵌套

```less
#header {
  color: black;
  .navigation {
  font-size: 12px;
  }
  .logo {
  width: 300px;
  }
}
// 输出：
#header {
  color: black;
}
#header .navigation {
  font-size: 12px;
}
#header .logo {
  width: 300px;
}



.clearfix {
  display: block;
  zoom: 1;

  &:after {
  content: " ";
  display: block;
  font-size: 0;
  height: 0;
  clear: both;
  visibility: hidden;
  }
}
// 输出：
.clearfix {
  display: block;
  zoom: 1;
}
.clearfix:after {
  content: " ";
  display: block;
  font-size: 0;
  height: 0;
  clear: both;
  visibility: hidden;
}
// & 代表当前选择器父代
```

## 延伸(extend)

```less
nav ul {
  &:extend(.inline);
  background: blue;
}
.inline {
  color: red;
}
// 输出：
nav ul {
  background: blue;
}
.inline,
nav ul {
  color: red;
}



nav ul {
  &:extend(.inline);
  background: blue;
}
// 等同于
nav ul:extend(.inline) {
  background: blue;
}



// 使用 all 关键字，可以扩展到所有包含指定关键字的规则集
nav ul:extend(.inline all) {
  background: blue;
}



// mixin 与 extend 比较
// 使用mixin
.my-inline-block() {
  display: inline-block;
  font-size: 0;
}
.thing1 {
  .my-inline-block;
}
.thing2 {
  .my-inline-block;
}
// 输出：
.thing1 {
  display: inline-block;
  font-size: 0;
}
.thing2 {
  display: inline-block;
  font-size: 0;
}

// 使用 extend
.my-inline-block {
  display: inline-block;
  font-size: 0;
}
.thing1 {
  &:extend(.my-inline-block);
}
.thing2 {
  &:extend(.my-inline-block);
}
// 输出：
.my-inline-block,
.thing1,
.thing2 {
  display: inline-block;
  font-size: 0;
}



// 追加
.mixin() {
  transform+_: scale(2);
}
.myclass {
  .mixin();
  transform+_: rotate(15deg);
}
// 输出：
.myclass {
  transform: scale(2) rotate(15deg);
}
// 必须在可追加的样式名后添加 "+" 或 "+_"
```

## media 冒泡

```less
.component {
  width: 300px;
  @media (min-width: 768px) {
  width: 600px;
  @media  (min-resolution: 192dpi) {
    background-image: url(/resources/images/retina2x.png);
  }
  }
  @media (min-width: 1280px) {
  width: 800px;
  }
}
// 输出：
.component {
  width: 300px;
}
@media (min-width: 768px) {
  .component {
  width: 600px;
  }
}
@media (min-width: 768px) and (min-resolution: 192dpi) {
  .component {
  background-image: url(/resources/images/retina2x.png);
  }
}
@media (min-width: 1280px) {
  .component {
  width: 800px;
  }
}
```

## 运算

```less
+、-、*、/
```

## 插入文本

```less
~"anything" 或 ~'anything'
```

## 封装和调用

```less
// 封装：
#bundle() {
  .button {
  display: block;
  border: 1px solid black;
  background-color: grey;
  &:hover {
    background-color: white
  }
  }
  .tab { ... }
  .citation { ... }
}

// 调用 .button
#header a {
  color: orange;
  #bundle > .button;
}
// 封装时带 () 的语句不会出现在 CSS 输出中
// 封装时申明的变量为局部变量
// 调用时可以省略 " " 和 ">"
  


// 使用 !important 关键字
.foo (@bg: #f5f5f5, @color: #900) {
  background: @bg;
  color: @color;
}
.unimportant {
  .foo();
}
.important {
  .foo() !important;
}
// 输出：
.unimportant {
  background: #f5f5f5;
  color: #900;
}
.important {
  background: #f5f5f5 !important;
  color: #900 !important;
}



// 使用参数
.mixin(@color) {
  color-1: @color;
}
.mixin(@color; @padding: 2) {
  color-2: @color;
  padding-2: @padding;
}
.mixin(@color; @padding; @margin: 2) {
  color-3: @color;
  padding-3: @padding;
  margin: @margin @margin @margin @margin;
}
.some .selector div {
  .mixin(#008000);
}
// 输出：
.some .selector div {
  color-1: #008000;
  color-2: #008000;
  padding-2: 2;
}
// 参数不仅可以是数字，也可以是样式，样式值



// 使用条件语句
#namespace when (@media = mobile) {
  .mixin() { /* */ }
}
// 等同于
#namespace {
  .mixin() when (@media = mobile) { /* */ }
}



// 与
.mixin (@a) when (isnumber(@a)) and (@a > 0) { ... }

// 或
.mixin (@a) when (@a > 10), (@a < -10) { ... }

// 非
.mixin (@b) when not (@b > 0) { ... }
```

## 注释

```less
块注释
/**/

行注释
// 
```

## 引入

```less
@import "library.less"; 
@import "typo.css";
// 如果没用扩展名将自动追加 less
// 所有扩展名不为 css 的文件都将被当作 less 文件处理
```

## 编译器

Visual Studio 2013 之后移除了 Less 的实时编译功能，可以在 [Marketplace][] 搜索 **Web Compiler** 下载最新版安装作为替代品。

<!-- links -->
[Less]: http://lesscss.org
[Less(en-us)]: http://lesscss.org
[Less(zh-cn)]: http://less.bootcss.com
[Marketplace]: https://marketplace.visualstudio.com/vs
<!-- images -->
[Logo]: /_posts/note/.markdown/2017-N03_Less/images/01.png "Less"
<!-- files -->
