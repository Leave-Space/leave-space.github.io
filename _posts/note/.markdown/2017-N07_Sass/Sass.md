
# Sass

> ![Logo][]

## 学习文档

[Sass(en-us)][]

[Sass(zh-cn)][]

## 语法格式

Sass 有两种语法：

* SCSS，Scss 是对 CSS 语法的扩展。每个有效的 CSS 样式表都是有效的 SCSS 文件。文件扩展名为.scss
* SASS，Sass 提供了更简洁的编写 CSS 的方法，使用缩进代替括号表示选择器的嵌套，使用换行符代替分号分隔属性。文件扩展名为.sass 两种文件可以互相导入，或者通过 sass-convert 命令行工具互相转换

## 嵌套

```scss
//一般嵌套
#main p {
    color: #00ff00;
    width: 97%;
    .redbox {
    background-color: #ff0000;
    color: #000000;
    }
}
//编译为：
#main p {
    color: #00ff00;
    width: 97%;
}
#main p .redbox {
    background-color: #ff0000;
    color: #000000;
}



//父选择器
a {
    font-weight: bold;
    text-decoration: none;
    &:hover { text-decoration: underline; }
    body.firefox & { font-weight: normal; }
}
//编译为：
a {
    font-weight: bold;
    text-decoration: none;
}
a:hover {
    text-decoration: underline;
}
body.firefox a {
    font-weight: normal;
}

//可以用 & 判断父选择器的有无
@mixin does-parent-exist {
    @if & {
    &:hover {
        color: red;
    }
    } @else {
    a {
        color: red;
    }
    }
}
#main {
    color: black;
    &-sidebar { border: 1px solid; }
}
//编译为：
#main {
    color: black;
}
#main-sidebar {
    border: 1px solid;
}



//属性嵌套
.funky {
    font: {
    family: fantasy;
    size: 30em;
    weight: bold;
    }
}
//编译为：
.funky {
    font-family: fantasy;
    font-size: 30em;
    font-weight: bold;
}

.funky {
    font: 20px/24px {
    family: fantasy;
    weight: bold;
    }
}
//编译为：
.funky {
    font: 20px/24px;
    font-family: fantasy;
    font-weight: bold;
}
```

## 注释

```scss
/* 此类注释会被输出到 CSS 文件中 */
// 此类注释不会被输出到 CSS 文件中
//编译为：
/* 此类注释会被输出到 CSS 文件中 */
```

## Interactive Shell

## 变量

```scss
//变量支持块级作用域，嵌套规则内定义的变量只能在嵌套规则内使用(局部变量)，不在嵌套规则内定义的变量则可在任何地方使用(全局变量)。将局部变量转换为全局变量可以在末尾添加 !global 声明
$width: 5em;
#main {
    width: $width;
}
//编译为：
#main {
    width: 5em;
}
```

## 数据类型

SassScript 支持 6 种主要的数据类型：

* 数字，1,2,13,10px
* 字符串，有引号字符串与无引号字符串，"foo",'bar',baz
* 颜色，blue,#04a3f9,rgba (255,0,0,0.5)
* 布尔型，true,false
* 空值，null
* 数组 (list)，用空格或逗号作分隔符，1.5em1em02em,Helvetica,Arial,sans-serif
* maps, 相当于 JavaScript 的 object，(key1:value1,key2:value2)

SassScript 也支持其他 CSS 属性值，比如 Unicode 字符集，或！important 声明。然而 Sass 不会特殊对待这些属性值，一律视为无引号字符串

## 运算

SassScript 支持数字的加减乘除、取整等运算 (+,-,*,/,%)， 关系运算 <,>,<=,>= 也可用于数字运算，相等运算 ==,!= 可用于所有数据类型

### 圆括号

圆括号可以用来影响运算的顺序

## 函数

SassScript 定义了多种函数，有些甚至可以通过普通的 CSS 语句调用

```scss
p {
    color: hsl(0, 100%, 50%);
}
//编译为：
p {
    color: #ff0000;
}



//关键词参数
p {
    color: hsl($hue: 0, $saturation: 100%, $lightness: 50%);
}
```

## 插入语句

```scss
$name: foo;
$attr: border;
p.#{$name} {
    #{$attr}-color: blue;
}
//编译为：
p.foo {
    border-color: blue;
}

p {
    $font-size: 12px;
    $line-height: 30px;
    font: #{$font-size}/#{$line-height};
}
//编译为：
p {
    font: 12px/30px;
}
```

### 变量默认值

```scss
//可以在变量的结尾添加 !default 给一个未通过 !default 声明赋值的变量赋值，此时，如果变量已经被赋值，不会再被重新赋值，但是如果变量还没有被赋值，则会被赋予新的值。变量是 null 空值时将视为未被 !default 赋值
$content: "First content";
$content: "Second content?" !default;
$new_content: "First time reference" !default;
#main {
    content: $content;
    new-content: $new_content;
}
//编译为：
#main {
    content: "First content";
    new-content: "First time reference";
}

$content: null;
$content: "Non-null content" !default;
#main {
    content: $content;
}
//编译为：
#main {
    content: "Non-null content"; 
}
```

## 导入

Sass 允许导入 SCSS 或 Sass 文件。被导入的文件将编译到同一个 CSS 文件中，被导入的文件中的变量或者混合指令 (mixin) 都可以在导入的文件中使用

通常，@import 寻找 Sass 文件并将其导入，但在以下情况下，@import 仅作为普通的 CSS 语句：

* 文件拓展名是.css；
* 文件名以 http:// 开头；
* 文件名是 url ()；
* @import 包含 mediaqueries

如果导入时没有指定拓展名，Sass 将会试着寻找文件名相同，拓展名为.scss 或.sass 的文件并将其导入

如果需要导入 SCSS 或者 Sass 文件，但又不希望将其编译为 CSS，只需要在文件名前添加下划线，这样会告诉 Sass 不要编译这些文件，但导入语句中却不需要添加下划线 例如，将文件命名为 `_colors.scss`，便不会编译 `_colours.css` 文件 @import "colors"; 导入的其实是 `_colors.scss` 文件

注意，不可以同时存在添加下划线与未添加下划线的同名文件，添加下划线的文件将会被忽略。

嵌套导入 可以将 @import 嵌套进 CSS 样式或者 @media 中，这样导入的样式只能出现在嵌套的层中

```scss
@import "foo.scss";
//或
@import "foo";
//都会导入文件 foo.scss



@import "foo.css";
@import "foo" screen;
@import "http://foo.com/bar";
@import url(foo);
//编译为：
@import "foo.css";
@import "foo" screen;
@import "http://foo.com/bar";
@import url(foo);



//Sass 允许同时导入多个文件
@import "rounded-corners", "text-shadow";



//导入文件也可以使用 #{ } 插值语句
$family: unquote("Droid+Sans");
@import url("http://fonts.googleapis.com/css?family=\#{$family}");
//编译为：
@import url("http://fonts.googleapis.com/css?family=Droid+Sans");
```

## media

Sass 中 @media 指令与 CSS 中用法一样，只是增加了一点额外的功能：允许其在 CSS 规则中嵌套。如果 @media 嵌套在 CSS 规则内，编译时，@media 将被编译到文件的最外层，包含嵌套的父选择器

```scss
.sidebar {
    width: 300px;
    @media screen and (orientation: landscape) {
    width: 500px;
    }
}
//编译为：
.sidebar {
    width: 300px;
}
@media screen and (orientation: landscape) {
    .sidebar {
        width: 500px; 
    }
}

//@media 的 queries 允许互相嵌套使用，编译时，Sass 自动添加 and
@media screen {
    .sidebar {
    @media (orientation: landscape) {
        width: 500px;
    }
    }
}
//编译为：
@media screen and (orientation: landscape) {
    .sidebar {
    width: 500px;
    }
}

//@media 甚至可以使用 SassScript(比如变量，函数，以及运算符)代替条件的名称或者值
$media: screen;
$feature: -webkit-min-device-pixel-ratio;
$value: 1.5;

@media #{$media} and ($feature: $value) {
    .sidebar {
    width: 500px;
    }
}
//编译为：
@media screen and (-webkit-min-device-pixel-ratio: 1.5) {
    .sidebar {
    width: 500px;
    }
}
```

## 扩展

```scss
.error {
    border: 1px #f00;
    background-color: #fdd;
}
.seriousError {
    @extend .error;
    border-width: 3px;
}
//上面代码的意思是将 .error 下的所有样式继承给 .seriousError
//其他使用到 .error 的样式也会同样继承给 .seriousError

.error {
    border: 1px #f00;
    background-color: #fdd;
}
.error.intrusion {
    background-image: url("/image/hacked.png");
}
.seriousError {
    @extend .error;
    border-width: 3px;
}
//编译为：
.error, .seriousError {
    border: 1px #f00;
    background-color: #fdd;
}
.error.intrusion, .seriousError.intrusion {
    background-image: url("/image/hacked.png"); 
}
.seriousError {
    border-width: 3px;
}

.hoverlink {
    @extend a:hover;
}
a:hover {
    text-decoration: underline;
}
//编译为：
a:hover, .hoverlink {
    text-decoration: underline; 
}

.hoverlink {
    @extend a:hover;
}
.comment a.user:hover {
    font-weight: bold;
}
//编译为：
.comment a.user:hover, .comment .user.hoverlink {
    font-weight: bold; 
}
```

### 仅用于扩展

有时，需要定义一套样式并不是给某个元素用，而是只通过 @extend 指令使用，尤其是在制作 Sass 样式库的时候，希望 Sass 能够忽略用不到的样式  
如果使用普通的 CSS 规则，最后会编译出很多用不到的样式，也容易与其他样式名冲突，所以，Sass 引入了 "占位符选择器"(placeholder selectors)，看起来很像普通的 id 或 class 选择器，只是 # 或 . 被替换成了 %。可以像 class 或者 id 选择器那样使用，当它们单独使用时，不会被编译到 CSS 文件中  
占位符选择器需要通过 @extend 指令使用，用法与 class 或者 id 选择器一样，被延伸后，占位符选择器本身不会被编译

```scss
#context a%extreme {
    color: blue;
    font-weight: bold;
    font-size: 2em;
}
.notice {
    @extend %extreme;
}
//编译为：
#context a.notice {
    color: blue;
    font-weight: bold;
    font-size: 2em;
}
```

### 可选扩展

如果 @extend 指令没有匹配的选择器时，将会报错，会生成新的选择器 如果要求 @extend 不生成新选择器，可以通过！optional 声明达到这个目的

```scss
a.important {
    @extend .notice !optional;
}
```

### 在指令中延伸

如果在 @media(或者其他 CSS 指令)中使用 @extend，必须延伸给相同指令层中的选择器

```scss
//正确
@media print {
    .error {
    border: 1px #f00;
    background-color: #fdd;
    }
    .seriousError {
    @extend .error;
    border-width: 3px;
    }
}

//错误
.error {
    border: 1px #f00;
    background-color: #fdd;
}
@media print {
    .seriousError {
    @extend .error;
    border-width: 3px;
    }
}
```

## 在根目录下发布

@at-root 指令会导致一个或多个规则在文档的根目录中发布，而不是嵌套在其父选择器下面

```scss
.parent {
    ...
    @at-root .child { ... }
}
//编译为：
.parent { ... }
.child { ... }

.parent {
    ...
    @at-root {
    .child1 { ... }
    .child2 { ... }
    }
    .step-child { ... }
}
//编译为：
.parent { ... }
.child1 { ... }
.child2 { ... }
.parent .step-child { ... }

@media print {
    .page {
    width: 8in;
    @at-root (without: media) {
        color: red;
    }
    }
}
//编译为：
@media print {
    .page {
    width: 8in;
    }
}
.page {
    color: red;
}
```

## Debug

@debug 指令将 SassScript 表达式的值打印到标准错误输出流。它有助于调试 SassScript 复杂的 Sass 文件

```scss
@debug 10em + 12em;
//编译为：
Line 1 DEBUG: 22em
```

## 抛出错误

## 控制指令

### if()

### @if

```scss
//当 @if 的表达式返回值不是 false 或者 null 时，条件成立，输出 {} 内的代码
p {
    @if 1 + 1 == 2 { border: 1px solid; }
    @if 5 < 3 { border: 2px dotted; }
    @if null  { border: 3px double; }
}
//编译为：
p {
    border: 1px solid; 
}

//@if 声明后面可以跟多个 @else if 声明，或者一个 @else 声明。如果 @if 声明失败，Sass 将逐条执行 @else if 声明，如果全部失败，最后执行 @else 声明
$type: monster;
p {
    @if $type == ocean {
    color: blue;
    } @else if $type == matador {
    color: red;
    } @else if $type == monster {
    color: green;
    } @else {
    color: black;
    }
}
//编译为：
p {
    color: green;
}
```

### @for

```scss
//@for 指令可以在限制的范围内重复输出格式，每次按要求(变量的值)对输出结果做出变动。这个指令包含两种格式：@for $var from <start> through <end>，或者 @for $var from <start> to <end>，区别在于 through 与 to 的含义：当使用 through 时，条件范围包含 <start> 与 <end> 的值，而使用 to 时条件范围只包含 <start> 的值不包含 <end> 的值。另外，$var 可以是任何变量，比如 $i；<start> 和 <end> 必须是整数值

@for $i from 1 through 3 {
    .item-#{$i} { width: 2em * $i; }
}
//编译为：
.item-1 {
    width: 2em; 
}
.item-2 {
    width: 4em; 
}
.item-3 {
    width: 6em; 
}
```

### @each

```scss
//@each 指令的格式是 $var in <list>, $var 可以是任何变量名，比如 $length 或者 $name，而 <list> 是一连串的值，也就是值列表
//@each 将变量 $var 作用于值列表中的每一个项目，然后输出结果

@each $animal in puma, sea-slug, egret, salamander {
    .#{$animal}-icon {
    background-image: url('/images/#{$animal}.png');
    }
}
//编译为：
.puma-icon {
    background-image: url('/images/puma.png'); 
}
.sea-slug-icon {
    background-image: url('/images/sea-slug.png'); 
}
.egret-icon {
    background-image: url('/images/egret.png'); 
}
.salamander-icon {
    background-image: url('/images/salamander.png'); 
}
```

### 多重循环

```scss
//@each指令也可以使用多个变量，如@each $ var1，$ var2，... in
@each $animal, $color, $cursor in (puma, black, default),
                                    (sea-slug, blue, pointer),
                                    (egret, white, move) {
    .#{$animal}-icon {
    background-image: url('/images/#{$animal}.png');
    border: 2px solid $color;
    cursor: $cursor;
    }
}
//编译为：
.puma-icon {
    background-image: url('/images/puma.png');
    border: 2px solid black;
    cursor: default; 
}
.sea-slug-icon {
    background-image: url('/images/sea-slug.png');
    border: 2px solid blue;
    cursor: pointer; 
}
.egret-icon {
    background-image: url('/images/egret.png');
    border: 2px solid white;
    cursor: move; 
}

@each $header, $size in (h1: 2em, h2: 1.5em, h3: 1.2em) {
    #{$header} {
    font-size: $size;
    }
}
//编译为：
h1 {
    font-size: 2em; 
}
h2 {
    font-size: 1.5em; 
}
h3 {
    font-size: 1.2em; 
}
```

### @while

```scss
//@while 指令重复输出格式直到表达式返回结果为 false。这样可以实现比 @for 更复杂的循环
$i: 6;
@while $i > 0 {
    .item-#{$i} { width: 2em * $i; }
    $i: $i - 2;
}
//编译为：
.item-6 {
    width: 12em; 
}
.item-4 {
    width: 8em; 
}
.item-2 {
    width: 4em; 
}
```

## 混合

```scss
//混合指令(Mixin)用于定义可重复使用的样式，避免了使用无语意的 class
//定义混合指令 @mixin
@mixin large-text {
    font: {
    family: Arial;
    size: 20px;
    weight: bold;
    }
    color: #ff0000;
}

//引用混合样式 @include
.page-title {
    @include large-text;
    padding: 4px;
    margin-top: 10px;
}
//编译为：
.page-title {
    font-family: Arial;
    font-size: 20px;
    font-weight: bold;
    color: #ff0000;
    padding: 4px;
    margin-top: 10px; 
}

@mixin silly-links {
    a {
    color: blue;
    background-color: red;
    }
}
@include silly-links;
//编译为：
a {
    color: blue;
    background-color: red; 
}

@mixin compound {
    @include highlighted-background;
    @include header-text;
}
@mixin highlighted-background { background-color: #fc0; }
@mixin header-text { font-size: 20px; }



//参数
//参数用于给混合指令中的样式设定变量，并且赋值使用
@mixin sexy-border($color, $width) {
    border: {
    color: $color;
    width: $width;
    style: dashed;
    }
}
p { @include sexy-border(blue, 1in); }
//编译为：
p {
    border-color: blue;
    border-width: 1in;
    border-style: dashed; 
}

//混合指令也可以使用给变量赋值的方法给参数设定默认值，然后，当这个指令被引用的时候，如果没有给参数赋值，则自动使用默认值
@mixin sexy-border($color, $width: 1in) {
    border: {
    color: $color;
    width: $width;
    style: dashed;
    }
}
p { @include sexy-border(blue); }
h1 { @include sexy-border(blue, 2in); }
//编译为：
p {
    border-color: blue;
    border-width: 1in;
    border-style: dashed; 
}
h1 {
    border-color: blue;
    border-width: 2in;
    border-style: dashed; 
}

//关键词参数
//混合指令也可以使用关键词参数
//关键词参数给函数提供了更灵活的接口，以及容易调用的参数。关键词参数可以打乱顺序使用，如果使用默认值也可以省缺，另外，参数名被视为变量名，下划线、短横线可以互换使用
p { @include sexy-border($color: blue); }
h1 { @include sexy-border($color: blue, $width: 2in); }

//参数变量
//有时，不能确定混合指令需要使用多少个参数，比如一个关于 box-shadow 的混合指令不能确定有多少个 'shadow' 会被用到。这时，可以使用参数变量 … 声明(写在参数的最后方)告诉 Sass 将这些参数视为值列表处理
@mixin box-shadow($shadows...) {
    -moz-box-shadow: $shadows;
    -webkit-box-shadow: $shadows;
    box-shadow: $shadows;
}
.shadows {
    @include box-shadow(0px 4px 5px #666, 2px 6px 10px #999);
}
//编译为：
.shadowed {
    -moz-box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;
    -webkit-box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;
    box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;
}

//参数变量也可以用在引用混合指令的时候 (@include)，与平时用法一样，将一串值列表中的值逐条作为参数引用
@mixin colors($text, $background, $border) {
    color: $text;
    background-color: $background;
    border-color: $border;
}
$values: #ff0000, #00ff00, #0000ff;
.primary {
    @include colors($values...);
}
//编译为：
.primary {
    color: #ff0000;
    background-color: #00ff00;
    border-color: #0000ff;
}

//您可以使用变量参数来包装mixin并添加其他样式，而无需更改mixin的参数签名。 如果这样做，即使关键字参数也将传递给包装的mixin
@mixin wrapped-stylish-mixin($args...) {
    font-weight: bold;
    @include stylish-mixin($args...);
}
.stylish {
    //$width 参数将会传递给 stylish-mixin 作为关键词
    @include wrapped-stylish-mixin(#00ff00, $width: 100px);
}

//向混合样式中导入内容
在引用混合样式的时候，可以先将一段代码导入到混合指令中，然后再输出混合样式，额外导入的部分将出现在 @content 标志的地方
@mixin apply-to-ie6-only {
    * html {
    @content;
    }
}
@include apply-to-ie6-only {
    #logo {
    background-image: url(/logo.gif);
    }
}
//编译为：
* html #logo {
    background-image: url(/logo.gif);
}

//为便于书写，@mixin 可以用 = 表示，而 @include 可以用 + 表示
=apply-to-ie6-only
    * html
    @content

+apply-to-ie6-only
    #logo
    background-image: url(/logo.gif)
```

## 函数指令

```scss
//Sass 支持自定义函数，并能在任何属性值或 Sass script 中使用
$grid-width: 40px;
$gutter-width: 10px;
@function grid-width($n) {
    @return $n * $grid-width + ($n - 1) * $gutter-width;
}
#sidebar { width: grid-width(5); }
//编译为：
#sidebar {
    width: 240px; 
}

//与 mixin 相同，也可以传递若干个全局变量给函数作为参数。一个函数可以含有多条语句，需要调用 @return 输出结果
//自定义的函数也可以使用关键词参数，上面的例子还可以这样写：
#sidebar { width: grid-width($n: 5); }
//建议在自定义函数前添加前缀避免命名冲突，其他人阅读代码时也会知道这不是 Sass 或者 CSS 的自带功能
//自定义函数与 mixin 相同，都支持 variable arguments(自定义参数)
```

## 输出格式

Sass 默认的 CSS 输出格式很美观也能清晰反映文档结构，为满足其他需求 Sass 也提供了多种输出格式。

Sass 提供了四种输出格式，可以通过:style option 选项设定，或者在命令行中使用 --style 选项

:nested、:expanded、:compact、:compressed

## 拓展 Sass

### 自定义 Sass 函数

### 存储缓存

### 自定义导入

<!-- links -->
[Sass(en-us)]: http://sass-lang.com/
[Sass(zh-cn)]: https://www.sass.hk/
<!-- images -->
[Logo]: /_posts/note/.markdown/2017-N07_Sass/images/01.png "Sass"
<!-- files -->
