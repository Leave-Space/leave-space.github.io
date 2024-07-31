
# HTML5 权威指南

> ![Logo][]

# 第 1 章 HTML5 背景知识

## HTML 的历史

介绍 HTML 的出现和发展、介绍 JavaScript、介绍浏览器战争 介绍 HTML 插件、介绍语义元素的出现、介绍 HTML 标准滞后于使用的发展态势

## HTML5 简介

初步介绍 HTML5：新标准、原生多媒体支持、Canvas、语义 Web

## HTML5 现状

介绍浏览器对 HTML5 的支持、网站对 HTML5 的支持

## 本书结构

# 第 2 章 准备工作

## 挑选浏览器

## 挑选 HTML 编辑器

## 挑选 Web 服务器

## 获取 Node.js

## 获取示例代码

# 第 3 章 初探 HTML

## 使用元素

介绍 HTML 元素格式 介绍空元素、自闭合标签、虚元素

## 使用元素属性

介绍元素属性 介绍布尔属性、自定义属性

## 创建 HTML 文档

介绍 HTML 文档基本结构 (外层结构、元数据、内容) 介绍父元素、子元素、后代元素和兄弟元素 介绍元素类型 (源数据元素、流元素、短语元素)

## 使用 HTML 实体

介绍转义特殊字符

## HTML5 全局属性

| 属性            | 说明                     |
| :-------------- | :----------------------- |
| accesskey       | 快捷键                   |
| class           | 样式类                   |
| contenteditable | 内容可以编辑             |
| contextmenu     | 右键菜单，尚无浏览器支持 |
| dir             | 文字方向                 |
| draggable       | 可拖放元素               |
| dropzone        | 可拖放区域               |
| hidden          | 隐藏                     |
| id              | ID                       |
| lang            | 语言                     |
| spellcheck      | 拼写检查                 |
| style           | 元素内嵌样式             |
| tabindex        | Tab 键索引               |
| title           | 工具提示                 |

## 有用的 HTML 工具

# 第 4 章 初探 CSS

## 定义和应用样式

初步介绍 CSS 属性 介绍元素内嵌样式、文档内嵌样式、外部样式表

## 样式的层叠和继承

介绍浏览器样式、用户样式 介绍样式的层叠次序：

1. 元素内嵌样式
2. 文档内嵌样式
3. 外部样式
4. 用户样式
5. 浏览器样式

介绍重要样式：**!important** 介绍根据具体程度和定义次序解决同级样式冲突 介绍继承：与元素外观相关的样式会被继承，与元素在页面上的布局相关的样式不会被继承；使用 **inherit** 强制继承

## CSS 中的颜色

介绍十六进制色码、rgb、rgba、hsl、hsla

## CSS 中的长度

绝对长度

| 长度单位 | 说明 |
| :------- | :--- |
| in       | 英寸 |
| cm       | 厘米 |
| mm       | 毫米 |
| pt       | 磅   |
| pc       | pica |

相对长度

| 长度单位 | 说明               |
| :------- | :----------------- |
| em       | 与元素字号相关     |
| rem      | 与根元素字号相关   |
| ex       | 与 "x" 的高度相关  |
| px       | 像素               |
| %        | 另一属性值的百分比 |

虽然 px 被定义为相对长度，但是由于定义的模糊 (参考像素是距读者一臂之遥的像素密度为 96dpi 的设备上一个像素的视角)；px 的定义被浏览器忽略，并将 1px 视为 1/96in 介绍未被浏览器广泛支持的 CSS 长度单位 介绍 calc 算式

## 其他 CSS 单位

角度

| 角度单位 | 说明                      |
| :------- | :------------------------ |
| deg      | 度 (0~360)                |
| grad     | 百分度 (0~400)            |
| rad      | 弧度 (0~6.28)             |
| trun     | 转 (1 truen 等于 360 deg) |

时间

| 时间单位 | 说明                   |
| :------- | :--------------------- |
| s        | 秒                     |
| ms       | 毫秒 (1s 等于 1000 ms) |

## 测试 CSS 特性的支持情况

[Can I use][]
[Modernizr][]

## 有用的 CSS 工具

简要介绍 Less 简要介绍 CSS 框架

# 第 5 章 初探 JavaScript

## 准备使用 JavaScript

初步介绍 JavaScript 介绍内嵌脚本、外部脚本

## 使用语句

介绍 JavaScript 脚本的简单使用

## 定义和使用函数

介绍无参函数、有参函数、带返回值的函数 调用函数时提供的参数数目不必与函数定义中的参数数目相同，如果提供的值少于定义的参数，未提供值的参数将赋值为：underfined 如果提供的值多于定义的传参数，超出部分将被舍弃。其结果是，JavaScript 无法实现函数重载，如果存在同名函数最后定义的那个将被应用

```javascript
function myFunction() {
    document.writeln("Hello World");
}


function MyFunction(name, weather) {
    document.writeln("Hello " + name + ".");
    document.writeln("It is " + weather + " today.");
}


function MyFunction(name) {
    return "My name is " + name;
}
```

## 使用变量和类型

介绍 var 关键字 介绍 JavaScript 基本类型，泛型不是没有类型，泛型只是不必明确声明类型。JavaScript 隐含三种类型 (string、number 和 boolean)

介绍 JavaScript 对象的使用

```javascript
//创建对象
var myObject = new Object();

myObject.name = "Freeman";
myObject.age = 20;

//创建对象
var myObject = {
    name: "Freeman",
    age: 20
}

//将函数用作方法
var myObject = {
    name: "Freeman",
    age: 20,
    say: function () {
        document.writeln("Hello, My name is " + this.name);
    }
}

//使用对象
myObject.name;
myObject[name];

myObject.age = 12;
myObject[age] = 2;

//枚举对象
for (var item in myObject)
{
    document.writeln(item + ":" + myObject[item]);
}

//增删属性和方法
myObject.sex = "man";

delete myObject.sex;

//判断对象是否具有某个属性

var hasName = "name" in myObject;
```

## 使用 JavaScript 运算符

介绍 JavaScript 运算符，类型转换

| 运算符        | 说明                           |
| :------------ | :----------------------------- |
| ++、--        | 前置或后置自增和自减           |
| +、-、*、/、% | 加、减、乘、除、求余           |
| <、<=、>、>=  | 小于、小于等于、大于、大于等于 |
| ==、!=        | 等于、不等于                   |
| ===、!==      | 等同、不等同                   |
| &&、`||`      | 逻辑与、逻辑或                 |
| =             | 赋值                           |
| +             | 字符串连接                     |
| ?:            | 三元条件语句                   |

相等比较的是两个操作数的值 (会自动转换类型)，等同不仅比较两操作数的值还比较两个数的数据类型 (不会自动转换类型) JavaScript 基本类型的比较是值的比较，而 JavaScript 对象的比较则是引用的比较

```javascript
var firstVal = 5;
var secondVal = "5";

if (firstVal == secondVal) {
    document.writeln("They are the same");    //true
}
else
{
    document.writeln("They are NOT the same");
}


var myData1 = {
     name: "Adam",
     weather: "sunny",
 };
 var myData2 = {
     name: "Adam",
     weather: "sunny",
 };

 var myData3 = myData2;

 var test1 = myData1 == myData2;    //false
 var test2 = myData2 == myData3;    //true
 var test3 = myData1 === myData2;    //false
 var test4 = myData2 === myData3;    //true
```

字符串连接符 (+) 比加法运算符优先级更高，由于 JavaScript 进行自动的类型转换所以容易导致错误

数值到字符串的常用转换方法

| 方法                       | 说明                            |
| :------------------------- | :------------------------------ |
| toString()、String(number) | 十进制数转字符串                |
| toString(2)                | 二进制数转字符串                |
| toString(8)                | 八进制数转字符串                |
| toString(16)               | 十六进制数转字符串              |
| toFixed(n)                 | 将数值保留 n 位小数后转为字符串 |
| toExponential(n)           |                                 |
| toPrecision(n)             |                                 |

字符串到数值的常用转换方法

| 方法            | 说明               |
| :-------------- | :----------------- |
| Number(str)     | 字符串转整数或实数 |
| parseInt(str)   | 字符串转整数       |
| parseFloat(str) | 字符串转整数或实数 |

## 使用数组

介绍数组的创建、赋值、读取和修改，以及内置的数组方法

```javascript
//创建数组时不需要声明数组大小(JavaScript数组会自动调整大小)
//不需要指定数据类型(JavaScript数组可以混合包含各种数据类型的数据)
var myArray = new Array();
myArray[0] = 100;
myArray[1] = "Adam";
myArray[2] = true;

var myArry = [100, "Adam", true];
```

读取和修改数组

```javascript
var myArray = [100, "Adam", true];
document.writeln("Index 0: " + myArray[0]);

//枚举数组
for (var i = 0; i < myArray.length; i++)
{
    document.writeln("Index " + i + ": " + myArray[i]);
}
```

使用内置的数组方法

| 方法               | 说明                                                         | 返回值 |
| :----------------- | :----------------------------------------------------------- | :----- |
| concat(otherArray) | 将数组和参数所指的数组合并为一个数组，可以指定多个数组       | 数组   |
| join(separator)    | 将所有数组元素连接为一个字符串。元素内容用参数指定的字符串分隔 | 字符串 |
| pop()              |                                                              |        |
| push(item)         |                                                              |        |
| reverse()          | 反转数组                                                     | 数组   |
| shift()            |                                                              |        |
| slice(start,end)   | 返回一个子数组                                               | 数组   |
| sort()             | 对数组元素进行排序                                           | 数组   |
| unshift(item)      |                                                              |        |

## 处理错误

介绍 try、catch、finally 子句

```javascript
try {
    var myArray;
    for (var i = 0; i < myArray.length; i++)
    {
        document.writeln("Index " + i + ": " + myArray[i]);
    }
}
catch (e) {
    document.writeln("Error: " + e);
}
finally {
    document.writeln("Statements here are always executed");
}
```

Error 对象的属性

| 属性    | 说明                        | 返回值 |
| :------ | :-------------------------- | :----- |
| message | 对错误的说明                | 字符串 |
| name    | 错误的名称，默认为 Error    | 字符串 |
| number  | 该错误的错误代号 (如果存在) | 数子   |

## 比较 undefined 和 null

在读取未赋值的变量或试图读取对象没有的属性时得到的就是 undefined unll 用于表示已经赋值，但不是一个有效的 object、string、number 或 bollean 值 (也就是说所定义的是一个无值 {no value})

检查变量的属性为 null 或者 undefined 而不加区分可以使用逻辑非运算符 (!)

```javascript
var myData = {
    name: "Adam",
    city: null
};
if (!myData.name) {
    document.writeln("name IS null or undefined");
} 
else {
    document.writeln("name is NOT null or undefined");
}
if (!myData.city) {
    document.writeln("city IS null or undefined");
}
else {
    document.writeln("city is NOT null or undefined");
}
```

在比较两个值时，如果想不加区分的比较可以使用相等运算符 (==)，如果想要区分 null 和 undefined 则可以使用等同运算符 (===)

```javascript
var firstVal = null;
var secondVal;

var equality = firstVal == secondVal;    //true
var identity = firstVal === secondVal;    //false
```

## 常用的 JavaScript 工具

介绍 JavaScript 调试器、JavaScript 库

# 第 6 章 HTML5 元素背景知识

## 语义与元素分离

介绍语义元素和呈现元素

## 元素选用原则

适量使用标签 不要乱用标签 保持标签的一致性 对用户不要想当然

## 元素说明体例

## 元素速览

介绍文档和元数据元素、文本元素、对内容分组、划分内容、制表、创建表单、嵌入内容和未实现的元素

# 第 7 章 创建 HTML 文档

详细介绍文档元素和源数据元素

## 构筑基本的文档结构

介绍 DOCTYPE 元素、html 元素、head 元素、body 元素

```html
<!DOCTYPE HTML>
<html>
<head>
    <title>Example</title>
</head>
<body>
    <p>
        I like <code id="applecode">apples</code> and oranges.
    </p>
    <a href="http://apress.com">Visit Apress.com</a>
</body>
</html>
```

## 用元数据元素说明文档

介绍 title 元素、base 元素、meta 元素、style 元素、link 元素

```javascript
<!DOCTYPE HTML>
<html>
<head>
    <title>Example</title>
    <base href="http://titan/listings/" />
    <meta name="author" content="Adam Freeman" />
    <meta name="description" content="A simple example" />
    <link rel="stylesheet" type="text/css" href="styles.css" />
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    <link rel="prefetch" href="/page2.html" />
</head>
<body>
    <p>
        I like <code id="applecode">apples</code> and oranges.
    </p>
    <a href="http://apress.com">Visit Apress.com</a>
    <a href="page2.html">Page 2</a>
</body>
</html>
```

## 使用脚本元素

介绍 scrip 元素、延迟加载脚本、异步载入脚本、noscript 元素

```javascript
<!DOCTYPE HTML>
<html>
<head>
    <title>Example</title>
    <base href="http://titan/listings/" />
    <meta name="author" content="Adam Freeman" />
    <meta name="description" content="A simple example" />
    <link rel="stylesheet" type="text/css" href="styles.css" />
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    <script defer src="simple2.js"></script>
    <noscript>
        <meta http-equiv="refresh" content="0; http://www.apress.com" />
    </noscript>
</head>
<body>
    <p>
        I like <code id="applecode">apples</code> and oranges.
    </p>
    <a href="http://apress.com">Visit Apress.com</a>
    <a href="page2.html">Page 2</a>
</body>
</html>
```

# 第 8 章 标记文字

尽量使用语义元素，绕开那些补了点语义脂粉的呈现元素，将呈现交给 CSS 处理

## 生成超链接

介绍外部超链接、相对 URL、内部超链接、设定浏览环境

target 属性可以使用的值

| 属性     | 说明                             |
| :------- | :------------------------------- |
| _black   | 在新窗口或者标签页中打开文档     |
| _partent | 在父窗框组 (frameset) 中打开文档 |
| _self    | 在当前窗口中打开文档 (Defult)    |
| _top     | 在顶层窗口打开文档               |
| frame    | 在指定窗框中打开文档             |

## 用基本的文字元素标记内容

介绍 b 元素、em 元素、i 元素、s 元素、strong 元素、u 元素、small 元素、sub 元素和 sup 元素

| 元素     | 用途                                                         | 习惯样式                                                     |
| :------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| b        | b 元素可以用来标记一段文字，但并不表示特别的强调或重要性。HTML5 规范中给出的例子是文字提要中的关键字和产品评论中的产品名称在 HTML4 中 b 元素只具有呈现性质的含义，在 HTML5 中将其呈现性质的一面降为习惯样式 | b { font-weight: bolder; }                                   |
| em       | em 元素表示对一段文字的强调                                  | em { font-style: italic; }                                   |
| i        | i 元素表示一段文字与周围内容有本质区别。这个定义比较含糊，不过这个元素常用的地方包括外文词语、科技术语甚至某人的想法 (与语言相区别) 在 HTML4 中 i 元素只具有呈现性质的含义，在 HTML5 中将其呈现性质的一面降为习惯样式 | i { font-style: italic; }                                    |
| s        | s 元素用来表示一段文字不再正确或准确，在 HTML4 中 s 元素只具有呈现性质的含义，在 HTML5 中将其呈现性质的一面降为习惯样式 | s { text-decoration: line-through; }                         |
| strong   | strong 元素表示一段重要文字                                  | strong { font-weight: bolder; }                              |
| u        | u 元素让一段文字从周围的内容中凸显出来，但并不表示强调或其重要性有所增加这个说明很含糊。u 元素以前只具有呈现方面的作用，没有实际语义。实际上这仍然是一个呈现性的元素，其效果是为文字添加下划线 (尽管可以用 CSS 改变这种行为，但是我不赞成用这种方式改变元素的用途) | u { text-decoration:underline; }                             |
| small    | small 元素表示小号字体内容，通常用于免责声明和澄清声明在 HTML4 中 small 元素只具有呈现性质的含义，在 HTML5 中将其呈现性质的一面降为习惯样式 | small { font-size: smaller; }                                |
| sub、sup | sub 元素和 sup 元素分别用于表示下标和上标                    | sub { vertical-align: sub;font-size: smaller; }sup { vertical-align: super;font-size: smaller;} |

## 换行

介绍 br 元素和 wbr 元素

| 元素 | 用途                                                         | 习惯样式                                                     |
| :--- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| br   | br 元素会引起一次换行                                        | 让后续内容从新行开始显示 (无法用 CSS 办到)br 元素只宜用在换行也是内容一部分的情况，切勿用它创建段落或别的内容组，那都是其他元素的任务 |
| wbr  | wbr 元素是 HTML5 中新增的，用来表示长度超过当前浏览器窗口的内容适合在此换行，究竟换不换行由浏览器决定。wbr 元素只不过是对恰当的换行位置的建议而已 | 如果需要换行，则从新行开始显示后续内容                       |

## 表示输入和输出

介绍 code 元素、var 元素、 samp 元素、kbd 元素

| 元素 | 用途                                                         | 习惯样式                         |
| :--- | :----------------------------------------------------------- | :------------------------------- |
| code | 表示计算机代码片段                                           | code { font-family: monospace; } |
| var  | 在编程语境中表示变量，也可表示一个供读者在想象中插入一个指定值的占位符 | var { font-style: italic; }      |
| samp | 表示程序或计算机系统的输出                                   | samp { font-family: monospace; } |
| kbd  | 表示用户输入                                                 | kbd { font-family: monospace; }  |

## 使用标题引用、引文、定义和缩写

介绍 abbr 元素、dfn 元素、q 元素、cite 元素

| 元素 | 用途                                                         | 习惯样式                                                     |
| :--- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| abbr | abbr 元素用来表示缩写，其 title 属性表示的是该缩写代表的完整词语 | 无                                                           |
| dfn  | dfn 元素表示定义中的术语，也即用来解释一个词 (或短语) 的含义的句子中的词 (或短语) 如果要为 dfn 元素设置 title 属性，那么必须将其设置为所定义的术语。如果 dfn 元素包含一个 abbr 元素，那么该缩写就是要定义的术语。如果元素内容为文字并且没有 title 属性，那么其文字内容就是要定义的术语 | 无                                                           |
| q    | q 元素表示引自他处的内容 q 元素的 cite 属性可以用来指定来源文章的 URL | q { display: inline; }q:before { content: open-quote; }q:after { content: close-quote; } |
| cite | cite 元素表示所引用作品的标题。cite 元素不能用来引用人名，只能用于作品标题 | cite { font-style: italic; }                                 |

## 使用语言元素

介绍 ruby 元素、rt 元素和 rp 元素、bdo 元素

| 元素 | 用途                                                         | 习惯样式                 |
| :--- | :----------------------------------------------------------- | :----------------------- |
| ruby | ruby 元素表示一段包含注音符号 (注音符号是用来帮助读者掌握表意语言 {如汉语和日语} 文字正确发音的符号) 的文字，ruby 元素需要与 rt 元素和 rp 元素搭配使用 | ruby { text-indent: 0; } |
| rt   | rt 元素用来标记注音符号                                      | 无                       |
| rp   | rp 元素用来标记供不支持注音符号特性的浏览器显示在注音符号前后的括号 | 无                       |
| bdo  | bdo 元素用来撇开默认的文字方向设置，明确地指定其内容中文字的方向，使用 bdo 元素必须加上 dir 属性 | 无                       |
| bdi  | bdi 元素表示一段出于文字方向考虑而与其他内容隔离开来的文字   | 无                       |

## 其他文本元素

介绍 span 元素、mark 元素、ins 元素和 del 元素、time 元素

| 元素 | 用途                                                         | 习惯样式                                         |
| :--- | :----------------------------------------------------------- | :----------------------------------------------- |
| span | span 元素本身没有任何含义。它可以用来把一些全局属性应用到段落上 | 无                                               |
| mark | mark 元素是 HTML5 中新增的，用来表示因为与某段上下文相关而被突出显示的一段文字 | mark { background-color: yellow; color: black; } |
| ins  | ins 元素用来表示文档中添加的内容，cite 属性用来指定解释添加相关文字原因的文档的 URL，datetime 属性则用来设置修改时间 | ins { text-decoration: underline; }              |
| del  | del 元素用来表示文档中删除的文字，cite 属性用来指定解释删除相关文字原因的文档的 URL，datetime 属性则用来设置修改时间 | del { text-decoration: line-through; }           |
| time | time 元素可以用来表示时间或日期，如果布尔属性 pubdate 存在，那么 time 属性表示的是整个 HTML 文档或离该元素最近的 article 元素的发布日期 | 无                                               |

# 第 9 章 组织内容

## 为什么要对内容分组

因为 HTML 要求浏览器忽略 HTML 文档中的结构

## 建立段落

介绍 p 元素

| 元素 | 用途           | 习惯样式                                                     |
| :--- | :------------- | :----------------------------------------------------------- |
| p    | p 元素代表段落 | p { display: block; margin-before: 1em; margin-after: 1em; margin-start: 0; margin-end: 0; } |

## 使用 div 元素

div 元素师没有具体的含义。找不到其他恰当的元素可用时可以使用这个元素为内容建立结构并使用 class 或者 id 赋予其含义 不在万不得已的情况下最好不要使用 div 元素，应该优先考虑那些具有语义重要性的元素

| 元素 | 用途                                                         | 习惯样式                |
| :--- | :----------------------------------------------------------- | :---------------------- |
| div  | div 元素相当于流元素中的 span。没有具体的含义，可以用来在文档中添加自定义的结构。 建立自定义结构的缺点在于其含义只限于设计者的网页或 Web 应用系统 | div { display: block; } |

## 使用预先编排好格式的内容

介绍 pre 元素 pre 元素可以改变浏览器处理内容的方式，组织合并空白字符，让源文档中的格式得以保留 这在文档中有一部分内容的原始格式意义重大时可以派上用场。除此之外最好不要使用它 pre 元素和 code 元素搭配在一起的时候尤其有用

| 元素 | 用途                                 | 习惯样式                                                     |
| :--- | :----------------------------------- | :----------------------------------------------------------- |
| pre  | pre 元素中的内容可以保留源文档的格式 | pre { display: block; font-family: monospace; white-space: pre; margin: 1em 0; } |

## 引用他处内容

介绍 blockquote 元素 blockquote 元素表示引自他处的内容，与 q 元素类似，但是通常用在要引用的内容更多的情况下

| 元素       | 用途                                                         | 习惯样式                                                     |
| :--------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| blockquote | blockquote 元素用来引用内容，cite 属性用来指定引用的内容来源 | blockquote { display: block; margin-before: 1em; margin-after: 1em; margin-start: 40px; margin-end: 40px; } |

## 添加主题分割

介绍 hr 元素 hr 元素代表段落级别的主题分隔

| 元素 | 用途                                                         | 习惯样式                                                     |
| :--- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| hr   | hr 元素代表着向另一个相关主题的转换，比如：故事中地点的改变，另一个是工具书某一部分中主题的改变 | hr { display: block; margin-before: 0.5em; margin-after: 0.5em; margin-start: auto; margin-end: auto; border-style: inset; border-width: 1px; } |

## 将内容组织为列表

介绍 ol 元素、ul 元素、li 元素、dl 元素、dt 元素、dd 元素

| 元素 | 用途                                                         | 习惯样式                                                     |
| :--- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| ol   | ol 元素表示有序列表，可以使用 start 属性设置列表项的起始值，type 属性用来设定编号类型 | ol { display: block; list-style-type: decimal; margin-before: 1em; margin-after: 1em; margin-start: 0; margin-end: 0; padding-start: 40px; } |
| ul   | ul 元素表示无序列表，无序列表的项目符号样式可以通过 css 控制 | ul { display: block; list-style-type: disc; margin-before: 1em; margin-after: 1em; margin-start: 0; margin-end: 0; padding-start: 40px; } |
| li   | li 元素表示列表中的项目，可以与 ul、ol、menu 元素搭配使用。value 属性可以用来指定列表项计数器的值 | li { display: list-item; }                                   |
| dl   | dl 元素表示说明列表                                          | dl { display: block; margin-before: 1em; margin-after: 1em; margin-start: 0; margin-end: 0; } |
| dt   | dt 元素表示说明列表中的术语                                  | dt { display: block; }                                       |
| dd   | dd 元素表示说明列表中的定义                                  | dd { display: block; margin-start: 40px; }                   |

## 使用插图

介绍 figure 元素和 figcaption 元素

| 元素       | 用途                                                         | 习惯样式                                                     |
| :--------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| figure     | figure 元素表示图片引用，某种图表或图示。figure 元素可以包含一个 figcaption 元素 | figure { display: block; margin-before: 1em; margin-after: 1em; margin-start: 40px; margin-end: 40px; } |
| figcaption | figcaption 元素表示插图的标题                                | figcaption { display: block; }                               |

# 第 10 章 文档分节

## 添加基本标题

介绍 h1 ~ h6

| 元素 | 用途         | 习惯样式                                                     |
| :--- | :----------- | :----------------------------------------------------------- |
| h1   | 表示一级标题 | h1 { display: block; font-size: 2em; margin-before: 0.67em; margin-after: 0.67em; margin-start: 0; margin-end: 0; font-weight: bold; } |
| h2   | 表示二级标题 | h2 { display: block; font-size: 1.5em; margin-before: 0.83em; margin-after: 0.83em; margin-start: 0; margin-end: 0; font-weight: bold; } |
| h3   | 表示三级标题 | h3 { display: block; font-size: 1.17em; margin-before: 1em; margin-after: 1em; margin-start: 0; margin-end: 0; font-weight: bold; } |
| h4   | 表示四级标题 | h4 { display: block; margin-before: 1.33em; margin-after: 1.33em; margin-start: 0; margin-end: 0; font-weight: bold; } |
| h5   | 表示五级标题 | h5 { display: block; font-size: .83em; margin-before: 1.67em; margin-after: 1.67em; margin-start: 0; margin-end: 0; font-weight: bold; } |
| h6   | 表示六级标题 | h6 { display: block; font-size: .67em; margin-before: 2.33em; margin-after: 2.33em; margin-start: 0; margin-end: 0; font-weight: bold; } |

## 隐藏子标题

介绍 hgroup 元素 hgroup 元素主要用来解决子标题的问题

| 元素   | 用途                                                         | 习惯样式                   |
| :----- | :----------------------------------------------------------- | :------------------------- |
| hgroup | hgroup 元素可以将几个标题元素作为一个整体处理，hgroup 元素的级别取决于其第一个标题子元素 | hgroup { display: block; } |

## 生成节

介绍 section 元素

| 元素    | 用途                                                         | 习惯样式                    |
| :------ | :----------------------------------------------------------- | :-------------------------- |
| section | section 元素是在 HTML5 中新增的，顾名思义，它表示的是文档中的一节。使用标题元素的时候实际上也生成的隐含的节。用 section 元素则可以明确地生成节并且将其与标题分开。section 元素用来包含的是那种应该列入文档大纲或目录中的内容 | section { display: block; } |

## 添加首部和尾部

介绍 header 元素和 footer 元素 每一节都可以有一个 header 元素和 footer 元素

| 元素   | 用途                                                         | 习惯样式                   |
| :----- | :----------------------------------------------------------- | :------------------------- |
| header | header 元素表示一节的首部，里面可以包含各种适合出现在首部的东西。header 元素通常包含一个标题元素或者一个 hgroup 元素 | header { display: block; } |
| footer | footer 元素是 header 元素的配套元素，表示一节的尾部。footer 通常包含着该节的总结信息，还可以包含作者介绍、版权信息、到相关内容的链接等 | footer { display: block; } |

## 添加导航区域

介绍 nav 元素

## 使用 article

介绍 article 元素

| 元素    | 用途                                                         | 习惯样式                    |
| :------ | :----------------------------------------------------------- | :-------------------------- |
| article | article 元素代表 HTML 文档中一段独立成篇的内容，从理论上讲，可以独立于页面其余内容发布或使用。这不是说作者必须单独发布它，而是说判断是否使用该元素时要以独立性为依据 | article { display: block; } |

## 生成附注栏

介绍 aside 元素

| 元素  | 用途                                                         | 习惯样式                  |
| :---- | :----------------------------------------------------------- | :------------------------ |
| aside | aside 元素用来表示跟周边内容稍粘一点边的内容，类似于书籍或者杂志中的侧边栏。其内容与页面其他内容，article 或 section 有点关系，但并非主体内容的一部分。它可能是一些背景信息，到相关文章的链接，诸如此类 | aside { display: block; } |

## 提供联系信息

介绍 address 元素 address 元素身为 article 元素的后代元素时，它提供的联系信息被视为该 article 的。否则，当 address 元素身为 body 元素的子元素时 (在 body 元素和 address 元素之间没有隔着 article 元素)，它提供的联系信息被视为整个文档的 address 元素不能用来表示文档或文章的联系信息之外的地址。例如，它不能用在文档内容中表示客户或用户的地址

| 元素    | 用途                                              | 习惯样式                                        |
| :------ | :------------------------------------------------ | :---------------------------------------------- |
| address | address 元素用来表示文档或 article 元素的联系信息 | address { display: block; font-style: italic; } |

## 生成详情区域

介绍 details 元素和 summary 元素

| 元素    | 用途                                                         | 习惯样式                    |
| :------ | :----------------------------------------------------------- | :-------------------------- |
| details | details 元素在文档中生成一个区域，用户可以展开它以了解关于某主题的更多详情。 | details { display: block; } |
| summary | details 元素通常包含一个 summary 元素，summary 元素的作用是为该详情区域生成一个说明标签或标题 | summary { display: block; } |

# 第 11 章 表格元素

## 生成基本表格

介绍 table 元素、tr 元素、td 元素

| 元素  | 用途                                                         | 习惯样式                                                     |
| :---- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| tabel | table 元素表示 HTML 文档中的表格，在 HTML5 中 cellpadding、cellspacing 等属性以不再使用，其功能改用 css 实现。border 属性的值必须为 **1** 或空字符串 ( **""** )，表格边框的粗细必须用 css 设置 | table { display: table; border-collapse: separate; border-spacing 2px; border-color: gray; } |
| tr    | tr 元素表示表格中的行                                        | tr { display: table-row; vertical-align: inherit; border-color: inherit;} |
| td    | td 元素表示表格中的单元格                                    | td { display: table-cell; vertical-align: inherit; }         |

## 添加表头单元格

介绍 th 元素

| 元素 | 用途                                                         | 习惯样式                                                     |
| :--- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| th   | th 元素表示表头的单元格，它可以用来区分数据和对数据的说明 (一般出现在第一列或者第一行) | th { display: table-cell; vertical-align: inherit; font-weight: bold; text-align: center; } |

## 为表格添加结构

介绍 thead 元素、tbody 元素、tfoot 元素

| 元素  | 用途                                                         | 习惯样式                                                     |
| :---- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| thead | thead 元素表示表格的表头部分                                 | thead { display: table-header-group; vertical-align: middle; border-color: inherit; } |
| tbody | tbody 元素表示表格的主体部分                                 | tbody { display: table-row-group; vertical-align: middle; border-color: inherit; } |
| tfoot | tfoot 元素表示表格的表脚部分，在 HTML5 之前 tfoot 元素只能出现在 tbody 元素 (如果没有 tbody 则是第一个 tr 元素) 之前。在 HTML5 中 则可以把 tfoot 元素放在 tbody 元素之后或最后一个 tr 元素之后 | thead { display: table-footer-group; vertical-align: middle; border-color: inherit; } |

## 制作不规则表格

介绍 rowspan 属性、colspan 属性

| 属性    | 说明                       |
| :------ | :------------------------- |
| rowspan | rowspan 指定单元格所跨行数 |
| colspan | colspan 指定单元格所跨列数 |

## 把表头与单元格关联起来

介绍 headers 属性

| 属性    | 说明                                                         |
| :------ | :----------------------------------------------------------- |
| headers | headers 属性的值可以设置为一个或者多个 th 单元格的 id 属性值 |

## 为表格添加标题

介绍 captio 元素

| 元素    | 用途                                                         | 习惯样式                                                |
| :------ | :----------------------------------------------------------- | :------------------------------------------------------ |
| caption | caption 元素可以为表格定义一个标题，一个表格只能包含一个 caption 元素 | caption { display: table-caption; text-align: center; } |

## 处理列

介绍 colgroup 元素、col 元素

| 元素     | 用途                                                         | 习惯样式                                  |
| :------- | :----------------------------------------------------------- | :---------------------------------------- |
| colgroup | colgroup 元素可以对表格以列分组，colgroup 元素的 span 属性指定了 colgroup 元素负责的列数 | colgroup { display: table-column-group; } |
| col      | col 元素位于没有 span 属性的 colgroup 元素之中。col 元素也具有 span 属性，可以用 col 元素的 span 属性让一个 col 元素代表几列。不用 span 属性的 col 元素只代表一列 | col { display: table-column; }            |

## 设置表格边框

介绍 boder 属性

| 属性  | 说明                                                         |
| :---- | :----------------------------------------------------------- |
| boder | table 元素定义了 boder 属性。使用这个属性就是告诉浏览器这个表格是用来表示表格式数据而不是用来布置其他元素的.border 属性的值必须为 **1** 或空字符串 ( **""** ), 该属性并不控制边框的样式 |

# 第 12 章 表单

## 制作基本表单

介绍 form 元素、input 元素、button 元素

| 元素   | 用途                            | 习惯样式                                  |
| :----- | :------------------------------ | :---------------------------------------- |
| form   | form 元素表示 HTML 页面上的表单 | form { display: block; margin-top: 0em; } |
| input  | input 元素的作用是收集用户输入  | 这种元素的外观取决于 type 属性            |
| button | button 元素用来触发事件         | 无                                        |

## 配置表单

详细介绍 form 元素

| 属性         | 说明                                                         |
| :----------- | :----------------------------------------------------------- |
| action       | action 属性说明了提交表单时浏览器应该把从用户收集的数据发送到什么地方。如果不设置 action 属性那么浏览器将会把数据发送到用以加载该 HTML 文档的 URL。如果为 action 属性指定一个相对 URL，那么该值会被嫁接在当前页的 URL (如果使用了 base 元素，则是该元素的 href 属性值) 的后面 |
| method       | method 属性用来指定将表单发送到服务器的 HTTP 方法，允许的值只有 GET 和 POST 这两个。GET 请求用于安全交互，同一个请求可以发起任意多次而不会产生额外作用。OPST 请求则用于不安全交互，提交数据的行为会导致一些状态的改变。一般而言，GET 请求应该用于获取只读信息，而 POST 请求则应该用于会改变应用程序状态的各种操作 |
| enctype      | enctype 属性指定了浏览器对发送给服务器的数据采用的编码方式。该属性可用的值有三个：applaction/x-www-form-rlencoded 编码，这是默认的编码，除了不能用来上传文件到服务器外，它适用于各种类型的表单。每项数据的名称和值都与 URL 采用同样的编码方案；multipart/form-data 编码，这种编码一般只用于需要上传文件到服务器的表单；text/plan 编码，这种编码没有正式的规范，由浏览器实现，要慎用 |
| autocomplete | autocomplete 属性用来指定是否允许浏览器自动完成表单，允许的值有 on 和 off，默认为 on，input 也有 autocomplete 属性 |
| target       | 默认情况下浏览器会用提交表单后返回的信息替换掉原有的页面，这可以用 form 元素的 target 属性予以改变。该属性的工作机制与 a 元素的一样 |
| name         | name 属性用来给 form 设置名称，以便使用 DOM 时区分各个表单，form 元素的 name 属性不同于 input 元素的 name 属性，在提交表单时不会发送给服务器 |

## 在表单中添加说明标签

可以用 label 元素为表单中的 input 元素添加说明，并为 label 的 for 属性指定其说明的 input 元素的 id 属性的值，以便屏幕阅读器对表单的处理

## 自动聚焦到某个 input 元素

介绍 autofocus 属性

## 禁用单个 input 元素

介绍 disabled 属性

## 对表单元素编组

介绍 fieldset 元素、legend 元素

| 元素     | 用途                                                         | 习惯样式                                                     |
| :------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| fieldset | fieldset 元素可以将一些元素组织在一起，并使用内嵌的 legend 元素为分组添加说明标签。在 fieldset 元素上应用 disabled 属性 fieldset 下的所有元素都将被禁用 | fieldset { display: block; margin-start: 2px; margin-end: 2px; padding-before: 0.35em; padding-start: 0.75em; padding-end: 0.75em; padding-after: 0.625em; border: 2px groove; } |
| legend   | legend 元素可以用来为 fieldset 元素添加说明标签              | legend { display: block; padding-start: 2px; padding-end: 2px; border: none; } |

## 使用 button 元素

| 属性 | 说明                                                         |
| :--- | :----------------------------------------------------------- |
| type | type 属性用来指定 button 元素的类型，可选值有：button、submit、reset |

当 type 属性设置为 submit 时，button 元素具有以下属性

| 属性           | 说明                                                         |
| :------------- | :----------------------------------------------------------- |
| form           | 指定按钮关联的表单                                           |
| formaction     | 覆盖 form 元素的 action 属性，另行指定表单将要提交到的 URL   |
| formenctype    | 覆盖 form 元素的 enctype 属性，另行指定表单的编码方式        |
| formmethod     | 覆盖 form 元素的 method 属性                                 |
| formtarget     | 覆盖 form 元素的 target 属性                                 |
| formnovalidate | 覆盖 form 元素的 novalidate 属性，表明是否应该执行客户端数据有效性检查 |

当 type 属性设置为 button 时可以用包含标记的文字显示 button 上的内容

## 使用表单外的元素

在 HTML4 中表单元素必须放在 form 元素中。在 HTML5 中可以通过将 form 元素外的表单元素的 form 属性指定为相应表单的 id 属性的值，将表单元素关联到表单中

# 第 13 章 定制 input 元素

## 用 input 元素输入文字

介绍 input 的 type 属性为 text 时 input 的附加属性

| 属性        | 说明                                                         |
| :---------- | :----------------------------------------------------------- |
| dirname     | 指定文本框中文字的方向，尚未得到浏览器支持                   |
| list        | 指定为文本框提供建议值的 datalist 元素的 id                  |
| maxlength   | 指定用户可以在文本框中输入的字符的最大数目                   |
| pattern     | 指定一个用于输入验证的正则表达式                             |
| placeholder | 指定关于所需数据类型的提示                                   |
| readonly    | 用来将文本框设置为只读，以阻止用户编辑其内容。使用 disable 可以禁用文本框，也可以达到阻止用户编辑的效果。不同的是应用 readonly 属性的元素在提交表单时会被发送给服务器，而应用 disabled 属性的元素则不会被发送 |
| required    | 表明用户必须输入一个值，否则无法通过验证                     |
| size        | 通过指定文本框中可见的字符数目设定其宽度                     |
| value       | 设置文本框的初始值                                           |

datalist 元素介绍

| 元素     | 用途                                                         | 习惯样式 |
| :------- | :----------------------------------------------------------- | :------- |
| datalist | 为 input 元素可以用来提供一批值，以便帮助用户输入需要的数据。不同类型的 input 元素使用 datalist 元素的方式略有差异。datalist 中可以包含多个 option 元素 | 无       |
| option   | 包含在 datalist 中的每一个 option 元素都代表一个供用户选择的值。其 value 属性就是该选项被选中时的值，显示在选择列表中的未必是 value 属性值，还可以是 label 属性的值。label 属性的值只用于显示 | 无       |

## 用 input 元素输入密码

介绍 input 的 type 属性为 password 时 input 的附加属性 type 属性设置为 password 的 input 元素用于输入密码。其提供的的附加属性和 type 属性为 text 时提供的附加属性相同，而且用法也相同。用户在密码框中输入的字符只是被显示为掩饰字符，而不是替换为掩饰字符，提交表单时以明文传输，如果对安全性有较高要求应该考虑使用 SSL/HTTPS 对浏览器和服务器之间的通信内容加密

## 用 input 元素生成按钮

介绍 input 的 type 属性为 button、submit、reset 时 input 的附加属性 input 元素的 type 属性为 button 和 reset 时其作用等同于应用同样属性值的 button 元素，唯一不同的是当 button 元素的 type 属性设置为 button 时可以用包含标记的文字显示 button 上的内容，其原因为 input 元素是虚元素 input 元素的 type 属性为 submit 时其附加属性和 button 元素的 type 属性为 submit 时的附加属性相同

## 用 input 元素为输入数据把关

介绍 介绍 input 的 type 属性为 checkbox、color、date、datetime、datetime-local、email、month、number、radiobutton、range、tel、time、week、url 的各种情况

用 input 元素获取数值 介绍 input 的 type 属性为 number 时 input 的附加属性

| 属性     | 说明                                                 |
| :------- | :--------------------------------------------------- |
| list     | 指定为文本框提供建议值的 datalist 元素的 id 属性的值 |
| min      | 设定可接受的最小值                                   |
| max      | 设定可接受的最大值                                   |
| readonly | 用来将文本框设置为只读                               |
| required | 表示用户必须输入一个值                               |
| step     | 指定上下调节数值的步长                               |
| value    | 指定元素的初始值                                     |

用 input 元素获取指定范围内的值 介绍 input 元素的 type 属性为 range 时 input 的附加属性 range 型 input 元素的属性和 number 型相同，但二者在浏览器中的显示结果不同，range 型 input 元素通常显示为一个 滑块

用 input 元素获取布尔型输入 介绍 input 的 type 属性为 checkbox 时 input 的附加属性 checkbox 型 input 元素的不足之处在于：提交表单时只有处于勾选状态的复选框的值会被提交给服务器

| 属性     | 说明                                                   |
| :------- | :----------------------------------------------------- |
| checked  | 设置了该属性的复选框刚显示出来时或重置表单后呈勾选状态 |
| required | 表示用户必须输入一个值                                 |
| value    | 设定在复选框勾选时提交给服务器的数据值，默认为 on      |

用 input 元素生成一组固定选项 介绍 input 元素的 type 属性为 radio 时 input 元素的附加属性 每一个 radio 型 input 元素代表着提供给用户的一个选项，要生成一组互斥的选项，只需要将相关的 input 元素的 name 属性设置为相同的值即可 与 checkbox 型 input 元素类似：未选中的单选按钮的值不会被发送给服务器

| 属性     | 说明                                                   |
| :------- | :----------------------------------------------------- |
| checked  | 设置了该属性的复选框刚显示出来时或重置表单后呈勾选状态 |
| required | 表示用户必须输入一个值                                 |
| value    | 设定在复选框勾选时提交给服务器的数据值                 |

用 input 元素获取有规定格式的字符串 介绍 input 元素的 type 属性为 email、tel、url 时 input 的附加属性

| 属性        | 说明                                                         |
| :---------- | :----------------------------------------------------------- |
| list        | 指定为文本框提供建议值的 datalist 元素的 id 属性的值         |
| maxlength   | 设定用户能在文本框中输入的字符的最大数目                     |
| pattern     | 指定一个用于输入验证的正则表达式                             |
| placeholder | 指定关于所需数据类型的提示                                   |
| readonly    | 用来将文本框设置为只读                                       |
| required    | 表示用户必须输入一个值                                       |
| size        | 通过指定文本框中可见字符的数目设定其宽度                     |
| value       | 指定元素的初始值，对于 email 型 input 元素，其值可能是单个邮箱地址，也可能是以逗号分隔的多个邮箱地址 |

对于 emlil 型 input 元素还支持一个名为 multiple 的属性，设置了该属性的 input 元素可以接受多个电子邮箱地址

用 input 元素获取时间和日期 介绍 input 元素的 type 属性为 datetime、datetime-local、date、month、time、week 时 input 的附加属性 浏览器对于这种新型 input 元素的支持不尽如人意，但是肯定会越来越好

| 属性     | 说明                                                 |
| :------- | :--------------------------------------------------- |
| list     | 指定为文本框提供建议值的 datalist 元素的 id 属性的值 |
| min      | 设定可接受的最小值                                   |
| max      | 设定可接受的最大值                                   |
| readonly | 用来将文本框设置为只读                               |
| required | 表示用户必须输入一个值                               |
| step     | 指定上下调节数值的步长                               |
| value    | 指定元素的初始值                                     |

用 input 元素获取颜色值 介绍 input 元素的 type 属性为 color 时 input 元素的附加属性 浏览器对于 color 型的 input 元素支持也不是太好

| 属性 | 说明                                                 |
| :--- | :--------------------------------------------------- |
| list | 指定为文本框提供建议值的 datalist 元素的 id 属性的值 |

## 用 input 元素获取搜索用词

介绍 input 元素的 type 属性为 search 时 input 元素的附加属性 search 型的 input 元素会生成一个单行文本框，供用户输入搜索用词。 这种 input 元素有点与众不同，它实际上什么事都不做。它既不会对用户输入的数据做出限制，也没有诸如搜索本页或借助用户的默认搜索引擎进行搜索这样的功能。 这类 input 元素支持的额外属性与 text 型 input 元素相同。 浏览器可以设法用这种文本框的外观表明它是用来获取搜索用词的。Chrome 的做法是先显示一个标准的文本框，一旦用户在其中输入了内容，就再显示一个取消标记

## 用 input 元素生成隐藏数据项

介绍 input 元素的 type 属性为 hidden 时 input 元素的附加属性 有时设计者会希望使用一些用户看不到或不能编辑的数据项，但又要求提交表单时也能将其发送给服务器。 比如：Web 应用程序让用户查看并编辑一些数据库记录时，往往需要用一种简便易行的方法将主键保存在网页上以便知道用户编辑的是哪一条记录，但又不想让用户看到它。 hidden 型 input 元素可以用来达到这个目的 只有那些出于方便或易用性而不是因为机密性或涉及安全原因需要隐藏的数据才适合使用这种 input 元素。用户只要查看页面的源代码就能看到隐藏的 input 元素，而且该元素的值是以明文的形式从浏览器发送到服务器的。 大多数 Web 应用程序框架都能将机密数据安全地存放在服务器上，然后根据会话标识 (一般使用 cookie) 将请求与它关联起来

## 用 input 元素生成图像按钮和分区响应图

介绍 input 元素的 type 属性为 image 时 input 元素的附加属性 image 型的 input 元素生成的按钮显示为一幅图片，点击它可以提交表单。在发送的数据中包括来自那个 inage 型 input 元素的两个数据项，它们分别代表用户点击位置相对于图片左上角的 x 坐标和 y 坐标

| 属性           | 说明                                                         |
| :------------- | :----------------------------------------------------------- |
| alt            | 提供元素的说明文字，对需要借助残障辅助技术的用户很有用       |
| formaction     | 等价于 button 元素的同名属性                                 |
| fromenctype    | 等价于 button 元素的同名属性                                 |
| formmethod     | 等价于 button 元素的同名属性                                 |
| fromtarget     | 等价于 button 元素的同名属性                                 |
| formnovalidate | 等价于 button 元素的同名属性                                 |
| height         | 以像素为单位设置图片的高度，不设置这个属性的话图像将以其本身的高度显示 |
| width          | 以像素为单位设置图片的宽度，不设置这个属性的话图像将以其本身的宽度显示 |
| src            | 指定要显示的图像的 URL                                       |

## 用 input 元素上传文件

介绍 input 元素的 type 属性为 file 时 input 元素的附加属性 表单编码类型 (enctype) 为 multipart/form-data 的时候才能上传文件

| 属性     | 说明                                                         |
| :------- | :----------------------------------------------------------- |
| accept   | 指定接受的 MIME 类型。关于 MIME 类型的定义， 参见 [RFC 2046][] |
| multiple | 设置这个属性的 input 元素可以一次上传多个文件                |
| required | 表示用户必须提供一个值                                       |

# 第 14 章 其他表单元素及输入验证

## 使用其他表单元素

介绍 select、optgroup、textarea、output 和 keygen 元素

| 元素     | 用途                                                         | 习惯样式                    |
| :------- | :----------------------------------------------------------- | :-------------------------- |
| select   | select 元素可以生成选项列表。该元素的 name、disabled、form、autofocus 和 required 属性与 input 元素的类似。size 属性用来设定要显示给用户的选项数目。元素如果设置了 multiple 属性的话，那么用户就能一次选择多个选项。提供给用户的选项由 option 元素定义，他就是与 datalist 元素搭配使用的那种 option 元素。设置了 selected 属性的选项会被自动选中。可以使用 opgroup 元素为 option 建立分组 | 无，显示效果因浏览器而异    |
| optgroup | optgroup 元素的用途是对 option 元素分组。其 label 属性可用来为整组选项提供一个小标题，而 disabled 属性则可以用来阻止选择组内的任何选项 | 无                          |
| textarea | textarea 元素用于生成多行文本框。textarea 元素的 name、disabled、form、readonly、maxlength、autofocus、required、placeholder、dirname 属性于 input 元素的类似，rows 和 cols 属性可以用来设置其大小。wrap 属性有两个值：hard 和 soft，可用来控制在用户输入的文字中插入换行符的方式 | 无                          |
| output   | output 元素可以表示计算结果                                  | output { display: inline; } |
| keygen   | keygen 元素的用途是生成公私钥对，但这一 HTML5 中新增的元素并未得到浏览器良好的支持 | 无                          |

## 使用输入验证

HTML 5 引入了输入验证的支持，但是浏览器并未提供良好的支持，且提示样式对开发人员来说存在不可控性

| 验证属性 | 元素                                                         |
| :------- | :----------------------------------------------------------- |
| required | textarea、select、input (text、password、checkbox、radio、file、datetime、datetime-local、date、month、time、week、number、email、url、search 及 tel 型) |
| min、max | input (datetime、datetime-local、date、month、time、week、number 及 range 型) |
| pattern  | input (text、password、email、url、search 及 tel 型)         |

设置了 min 和 max 属性之后会对输入值的范围进行验证，但不会验证空值

想要不经过输入验证就能提交表单，可以设置 form 元素的 movalidate 属性，也可以设置用来提交表单的 button 或 input 元素的 formnovalidate 属性

# 第 15 章 嵌入内容

## 嵌入图像

介绍 img、map、area 元素

| 元素 | 用途                                                         | 习惯样式 |
| :--- | :----------------------------------------------------------- | :------- |
| img  | img 元素允许我们在 HTML 文档里嵌入图像。src 属性指定了欲嵌入图像的 URL，alt 属性定义了 img 元素的备用内容。此内容会在图像无法显示时呈现。widht 和 height 属性告诉浏览器图像的尺寸有多大，而不是你希望它有多大。不应该使用这些属性来动态缩放图像。可以在超链接里嵌入 img 元素，如果点击了这张图像，浏览器会导航至父元素 a 的 href 属性所指定的 URL 上。给 img 元素应用 ismap 属性就创建了一个服务器端分区响应图，意思是在图像上点击的位置会附加到 URL 上。也可以通过 img 元素的 usemap 属性结合 map 和 area 元素创建客户端分区响应图 | 无       |
| map  | map 元素用于指定客户端分区响应区域的集合。map 元素具有 name 属性，如果具有 id 属性则必须和 name 属性相同。 map 元素可以包含多个 area 元素，用来定义图像上的多个区域。通常 img 元素通过将自身的 usemap 属设置为 # + map 元素的 name 值的形式和 map 元素建立联系 | 无       |
| area | area 元素表示图像上的一块区域。area 元素的属性可以分为两类：一类与目标地址相关用于处理 area 元素所代表的区域被点击后会导航到的 URL (href，此区域被点击时浏览器应该加载的 URL；alt，同 img；target，应该用来显示 URL 的浏览上下文；rel，描述了当前文档和目标文档之间的关系；media，此区域适合的媒介；hreflang，目标文档的语言；type，目标文档的 MIME 类型)，另一类属性则用来定义图像上的区域 (shape 和 coords，shape 和 coords 属性是共同起作用的。coords 属性的意思根据 shape 属性的值而定) | 无       |

shape 和 coords 属性的值

| shape 值 | coords 值的性质和意思                                        |
| :------- | :----------------------------------------------------------- |
| rect     | 这个值代表了一个矩形区域。coords 属性必须由四个用逗号分隔的整数组成，它们分别代表了：图像的左边到矩形左边的距离，图像的上边到矩形上边的距离，图像的左边到矩形右边的距离，图像的上边到矩形底边的距离 |
| circle   | 这个值代表了一个圆形区域。coords 属性必须由三个用逗号分隔的整数组成，它们分别代表了：图像的左边到圆心的距离，图像的上边到圆心的距离，圆形的半径 |
| poly     | 这个值代表了一个多边形。coords 属性必须至少包含六个用逗号分隔的整数，每一对数字各代表多边形的一个顶点 |
| default  | 这个值的意思是默认区域，即覆盖整张图片。shape 属性设置这个值时不需要提供 coords 值 |

## 嵌入另一张 HTML 文档

介绍 iframe 元素

| 元素   | 用途                                                         | 习惯样式                      |
| :----- | :----------------------------------------------------------- | :---------------------------- |
| iframe | iframe 元素允许我们在现有的 HTML 文档中嵌入另一张文档。width 和 height 属性指定了像素尺寸。src 属性指定了 iframe 一开始应该加载并显示的 URL，而 scrdoc 属性可以让你定义一张用于内嵌显示的 HTML 文档。HTML5 引入了两个新属性：seamless，它指示浏览器把 iframe 的内容显示的像主 HTML 文档的一个组成部分；sandbox，它对 HTML 文档进行限制，这个属性不指定值时，iframe 中的脚本、表单、插件、指向其他浏览器上下文的链接会被禁用，iframe 的内容被视为与 HTML 文档的其余部分来源不同。也可以通过定义 sandbox 属性的值来启用各种功能 (allow-forms，启用表单；allow-scripts，启用脚本；allow-top-navigation，允许链接指向顶层的浏览上下文，这样就能用另一个文档替换当前整个文档，或者创建新的标签和窗口；allow-same-origin，允许 iframe 里的内容被视为与文档其余部分拥有同一个来源位置) | iframe { border: 2px inset; } |

## 通过插件嵌入内容

介绍 object 和 embed 元素

| 元素   | 用途                                                         | 习惯样式 |
| :----- | :----------------------------------------------------------- | :------- |
| embed  | embed 元素通常用于插件，但也可以用来嵌入浏览器能直接处理的内容，比如图像。src 属性指定了内容的地址，type 属性指定了内容的 MIME 类型当 type 属性不存在时浏览器会尝试自己推断类型，width 和 height 属性决定嵌入内容将在屏幕上占据的空间大小。除此之外你应用的所有属性都会被当作是插件或内容的参数 | 无       |
| object | object 元素实现的效果和 embed 元素一样，但它的工作方式稍有不同，并带有一些额外的功能。date 属性提供了内容的地址，type、width 和 height 属性和在 embed 元素中的效果一致。使用 param 元素来定义将要传递给插件的参数，每个参数都对应一个 param 元素，param 元素的 name 和 value 属性分别定义参数的 name 和 value。object 元素的一大优点是可以包含备用内容，在指定内容不可用时显示出来，param 元素会被忽略。object 元素还可以用来嵌入图像并实现和 img 元素一样的分区响应图，亦可以嵌入 HTML 文档实现和 iframe 元素一样的功能 | 无       |

## 嵌入数字表现形式

介绍 progress 和 meter 元素

| 元素     | 用途                                                         | 习惯样式 |
| :------- | :----------------------------------------------------------- | :------- |
| progress | progress 元素可以用来显示进度。value 属性定义了当前进度，它位于 0 和 max 属性的值之间，max 被省略时范围时 0 至 1，用浮点数来表示进度。也可以用 form 属性和表单建立关联 | 无       |
| meter    | meter 元素显示了某个范围内所有可能值中的一个。min 和 max 属性设定了可能值所处范围的边界，它们可以用浮点数来表示。value 属性用来指定 meter 元素的值。meter 元素的显示可以分为：过低、过高和最佳，分别用 low、high 和 optimum 指定对应的值。也可以用 form 属性和表单建立关联 | 无       |

## 嵌入其他元素

简要提及 audio、video、source、track 和 canvas 元素

# 第 16 章 理解 CSS

## css 标准化过程

在模块定义还不稳定的阶段，浏览器会采用厂商前缀实现某个特性

| 浏览器            | 厂商前缀 |
| :---------------- | :------- |
| Chrome、Safari    | -webkit- |
| Opera             | -o-      |
| Firefox           | -moz-    |
| Internet Explorer | -ms-     |

## 盒模型

## 选择器简明参考

## 属性简明参考

# 第 17 章 使用 CSS 选择器 (第 Ⅰ 部分)

## 使用 CSS 基本选择器

| 选择器          | 说明                                                         |
| :-------------- | :----------------------------------------------------------- |
| *               | 选取所有元素                                                 |
| `<type>`        | 选取指定类型的元素                                           |
| `.<class>`      | 选取指定类的元素                                             |
| `#<id>`         | 选取 id 属性为指定值的元素                                   |
| `[attr]`        | 选取定义了 attr 属性的元素                                   |
| `[attr="val"]`  | 选取定义了 attr 属性，且属性值为 val 的元素                  |
| `[attr^="val"]` | 选取定义了 attr 属性，且属性值以 val 字符串打头的元素        |
| `[attr$="val"]` | 选取定义了 attr 属性，且属性值以 val 字符串结尾的元素        |
| `[attr*="val"]` | 选取定义了 attr 属性，且属性值包含 val 字符串的元素          |
| `[attr~="val"]` | 选取定义了 attr 属性，且属性包含多个值，而其中一个值为 val 的元素 |
| `[attr|="val"]` | 选取定义了 attr 属性，且属性值是以连字符分隔的一串值，而第一个为 val 的元素 |

## 复合选择器

| 选择器              | 说明                                                         |
| :------------------ | :----------------------------------------------------------- |
| <选择器>,< 选择器 > | 选取同时匹配所有选择器的元素                                 |
| <选择器> < 选择器 > | 目标元素为匹配第一个选择器的元素的后代，且匹配第二个元素     |
| <选择器>>< 选择器 > | 目标元素为匹配第一个选择器的元素的直接后代，且匹配第二个元素 |
| <选择器>+< 选择器 > | 目标元素紧跟在匹配第一个选择器的元素之后，且匹配第二个元素   |
| <选择器>~< 选择器 > | 目标元素跟在匹配第一个选择器的元素之后，且匹配第二个元素     |

## 使用伪元素选择器

伪选择器分两种：伪元素和伪类，顾名思义伪元素实际上并不存在

| 选择器          | 说明                         |
| :-------------- | :--------------------------- |
| ::first-line    | 选取块级文本元素的首行       |
| ::first-letter  | 选取块级文本元素的首字母     |
| :before、:after | 在选取元素之前或之后插入内容 |

# 第 18 章 使用 CSS 选择器 (第 Ⅱ 部分)

## 使用结构性伪类选择器

| 选择器               | 说明                                    |
| :------------------- | :-------------------------------------- |
| :root                | 选择文档中的根元素，总是返回 html       |
| :first-child         | 选取元素的第一个子元素                  |
| :last-child          | 选取元素的最后一个子元素                |
| :only-child          | 选取元素的唯一一个子元素                |
| :only-of-type        | 选取元素的特定类型的唯一子元素          |
| :nth-child(n)        | 选取父元素的第 n 个子元素               |
| :nth-last-child(n)   | 选取父元素的倒数第 n 个子元素           |
| :nth-of-type(n)      | 选取父元素的特定类型的第 n 个子元素     |
| :nth-last-of-type(n) | 选取父元素的特定类型的倒数第 n 个子元素 |

## 使用 UI 伪类选择器

| 选择器                   | 说明                                            |
| :----------------------- | :---------------------------------------------- |
| :enabled                 | 选取已启用的元素                                |
| :disabled                | 选取已禁用的元素                                |
| :checked                 | 选取所有选中的复选框和单选框                    |
| :default                 | 选取默认元素                                    |
| :valid、:invalid         | 选取基于输入验证判定的有效或者无效的 input 元素 |
| :in-range、:out-of-range | 选取被限定在指定范围之内或者之外的 input 元素   |
| :required、:optional     | 根据是否允许使用 required 属性选取 input 元素   |

## 使用动态伪类选择器

| 选择器   | 说明                           |
| :------- | :----------------------------- |
| :link    | 选取未访问的链接元素           |
| :visited | 选取用户已访问的链接元素       |
| :hover   | 选取鼠标指针悬停在其上面的元素 |
| :active  | 选取当前被用户激活的元素       |
| :focus   | 选取获得焦点的元素             |

## 其他伪类选择器

| 选择器           | 说明                             |
| :--------------- | :------------------------------- |
| `:not(<select>)` | 否定选择器                       |
| :empty           | 选取不包含任何子元素或文本的元素 |
| :lang(language)  | 选取 lang 属性为指定值的元素     |
| :target          | 选取 URL 片段标识符指向的元素    |

# 第 19 章 使用边框和背景

## 应用边框样式

| 属性                       | 说明                                 |
| :------------------------- | :----------------------------------- |
| border                     | 为所有边界设置所有边框宽度的简写属性 |
| border-bottom              | 为所有下边框设置宽度的简写属性       |
| border-bottom-color        | 为所有下边框设置颜色                 |
| border-bottom-left-radius  | 将边框左下角设置为圆角               |
| border-bottom-right-radius | 将边框右下角设置为圆角               |
| border-bottom-style        | 设置元素下边框的样式                 |
| boder-bottom-width         | 设置元素下边框的宽度                 |
| boder-color                | 设置四条边框的颜色                   |
| border-image               | 使用图像作为边框的简写属性           |
| border-image-outset        | 指定图像向边框盒外部分扩展的区域     |
| border-image-repeat        | 指定边框图像的缩放和重复方式         |
| border-image-slice         | 指定边框图像的切割方式               |
| border-image-source        | 指定边框图像的来源路径               |
| border-image-width         | 设置边框图像的宽度                   |
| border-left                | 设置元素左边框的简写属性             |
| border-left-color          | 设置左边框的颜色                     |
| border-left-style          | 设置左边框的样式                     |
| border-left-width          | 设置左边框的宽度                     |
| border-radius              | 指定圆角边框的简写属性               |
| border-right               | 设置元素右边框的简写属性             |
| border-right-color         | 设置右边框的颜色                     |
| border-right-style         | 设置右边框的样式                     |
| border-right-width         | 设置右边框的宽度                     |
| border-style               | 设置所有边框样式的简写属性           |
| border-top                 | 设置上边框的简写属性                 |
| border-top-color           | 设置上边框的颜色                     |
| border-top-left-radius     | 将边框左上角设置为圆角               |
| border-top-right-radius    | 将边框右上角设置为圆角               |
| border-top-style           | 设置上边框的样式                     |
| border-top-width           | 设置上边框的宽度                     |
| border-width               | 设置四个边框的宽度                   |

## 设置元素的背景

| 属性                  | 说明                                                   |
| :-------------------- | :----------------------------------------------------- |
| background            | 设置所有背景值的简写属性                               |
| background-attachment | 设置元素的背景附着属性，决定背景图片是否随页面一起滚动 |
| background-clip       | 设置元素背景颜色和图像的裁剪区域                       |
| background-color      | 设置背景颜色                                           |
| background-image      | 设置背景图片                                           |
| background-origin     | 设置背景图像绘制的起始位置                             |
| background-position   | 设置背景图像在元素盒子中的位置                         |
| background-repeat     | 设置背景图像的重复方式                                 |
| background-size       | 设置背景图像的绘制尺寸                                 |

## 创建盒子阴影

| 属性       | 说明                         |
| :--------- | :--------------------------- |
| box-shadow | 设置元素的一个或多个阴影效果 |

## 应用轮廓

| 属性           | 说明                             |
| :------------- | :------------------------------- |
| outline-color  | 设置元素边框外围轮廓的颜色       |
| outline-offset | 设置轮廓距离元素边框边缘的偏移量 |
| outline-style  | 设置轮廓的样式                   |
| outline-width  | 设置轮廓的宽度                   |
| outline        | 在一条声明中设置轮廓的简写属性   |

# 第 20 章 使用盒模型

## 为元素应用内边距

| 属性           | 说明                                 |
| :------------- | :----------------------------------- |
| padding        | 设置元素盒子四个内边距宽度的简写属性 |
| padding-bottom | 设置盒子下内边距的宽度               |
| padding-left   | 设置盒子左内边距的宽度               |
| padding-right  | 设置盒子右内边距的宽度               |
| padding-top    | 设置盒子上内边距的宽度               |
| visibility     | 设置元素的可见性                     |

## 为元素应用外边距

| 属性          | 说明                                 |
| :------------ | :----------------------------------- |
| margin        | 设置元素盒子四个外边距宽度的简写属性 |
| margin-bottom | 设置盒子下外边距的宽度               |
| margin-left   | 设置盒子左外边距的宽度               |
| margin-right  | 设置盒子右外边距的宽度               |
| margin-top    | 设置盒子上外边距的宽度               |

## 控制元素的尺寸

| 属性       | 说明                             |
| :--------- | :------------------------------- |
| width      | 设置元素的宽度                   |
| height     | 设置元素盒子的高度               |
| max-height | 设置元素的最大高度               |
| max-width  | 设置元素的最大宽度               |
| min-height | 设置元素的最小高度               |
| min-width  | 设置元素的最小宽度               |
| box-sizing | 设置要应用盒子尺寸相关属性的元素 |

## 处理溢出内容

| 属性       | 说明                                           |
| :--------- | :--------------------------------------------- |
| overflow   | 设置内容横向和竖向溢出盒子时处理方式的简写属性 |
| overflow-x | 设置内容横向溢出盒子时的处理方式               |
| overflow-y | 设置内容竖向溢出盒子时的处理方式               |

## 控制元素的可见性

| 属性       | 说明             |
| :--------- | :--------------- |
| visibility | 设置元素的可见性 |

## 设置元素的盒类型

display 属性的值： inline (盒子显示为文本行中的字) block (盒子显示为段落) inline-block (盒子显示为文本行) list-item (盒子显示为列表项，通常具有 i 项目符号或者其他标记符) run-in (盒子类型取决于周围的元素) compact (盒子的类型为块或者标记盒) flexbox (这个值跟弹性盒布局相关) table (这个值跟表格中的元素布局相关) none (元素不可见，且在页面布局中不占空间)

| 属性    | 说明               |
| :------ | :----------------- |
| display | 设置元素盒子的类型 |

## 创建浮动盒

| 属性  | 说明                                                         |
| :---- | :----------------------------------------------------------- |
| float | 将元素移动到其包含块的左边界或右边界，或者另一个浮动元素的边界 |
| clear | 设置盒子的左边界、右边界或左右两个边界不允许出现浮动元素     |

# 第 21 章 创建布局

## 定位内容

position 属性的值： static (元素为普通布局，默认值) relative (元素位置相对于普通位置定位) absolute (元素相对于 position 值不为 static 的第一位祖先元素定位) fixed (元素相对于浏览器窗口定位)

| 属性     | 说明                                         |
| :------- | :------------------------------------------- |
| position | 设置元素的定位方法                           |
| left     | 设置元素左外边距边界与包含块左边界之间的偏移 |
| right    | 设置元素右外边距边界与包含块右边界之间的偏移 |
| top      | 设置元素上外边距边界与包含块上边界之间的偏移 |
| bottom   | 设置元素下外边距边界与包含块下边界之间的偏移 |
| z-index  | 设置元素的堆叠顺序                           |

## 创建多列布局

定义了 column-count 浏览器会自行调整 column-width 定义了 column-width 浏览器会自行调整 column-count

| 属性              | 说明                                     |
| :---------------- | :--------------------------------------- |
| column-count      | 指定多列布局的列数                       |
| column-fill       | 指定多列布局中列于列之间的内容如何分布   |
| column-gap        | 指定多列布局中列于列之间的间隔           |
| column-rule       | 多列布局中定义列于列之间的规则的简写属性 |
| column-rule-color | 设置多列布局中的颜色规则                 |
| column-rule-style | 设置多列布局中的样式规则                 |
| column-rule-width | 设置多列布局中的宽度规则                 |
| columns           | 在多列布局中设置列数和列宽的简写属性     |
| column-span       | 指定多列布局中元素能跨多少列             |
| column-width      | 指定多列布局中列的宽度                   |

## 创建弹性盒布局

借助 `display: box` 创建弹性盒容器

| 属性                                              | 说明                                                         |
| :------------------------------------------------ | :----------------------------------------------------------- |
| box-align                                         | 如果内容元素的高度小于容器的高度，告诉浏览器如何处理多余的空间 |
| box-flex                                          | 指定元素的可伸缩性，应用于弹性盒容器内的元素                 |
| box-pack                                          | 如果可伸缩元素达到最大尺寸，告诉浏览器如何分配空间           |
| flex-align、flex-direction、flex-order、flex-pack | 它们都是由弹性盒子布局定义的目前还没有实现                   |

## 创建表格布局

借助 `display: table` 创建表格容器

| 属性               | 说明                                  |
| :----------------- | :------------------------------------ |
| table              | 类似 table 元素                       |
| inline-table       | 类似 table 元素，但是创建一个行内元素 |
| table-caption      | 类似 caption 元素                     |
| table-column       | 类似 col 元素                         |
| table-column-group | 类似 colgroup 元素                    |
| table-header-group | 类似 thead 元素                       |
| table-row-group    | 类似 tbody 元素                       |
| table-footer-group | 类似 tfooter 元素                     |
| table-row          | 类似 tr 元素                          |
| table-cell         | 类似 td 元素                          |

# 第 22 章 设置文本样式

## 应用基本文字样式

需要注意的重要一点是：text-align: [left|right] 是将文本对齐到某个边界，而 text-align: [start|end] 是将文本对齐到语言使用的边界。这个在文本排列方式不同时尤为明显

| 属性           | 说明                                                 |
| :------------- | :--------------------------------------------------- |
| text-align     | 设置文本对齐方式                                     |
| text-justify   | 设置文本对齐方式                                     |
| whitespace     | 指定空白字符串的处理方式                             |
| direction      | 指定文本方向                                         |
| letter-spacing | 设置字体间距                                         |
| word-spacing   | 制定单词间距                                         |
| line-height    | 设置行高                                             |
| word-wrap      | 告诉浏览器当一个单词的长度超出包含块的宽度时如何处理 |
| text-indent    | 规定文本块中首行文本的缩进                           |

## 文本装饰与大小写转换

| 属性            | 说明                            |
| :-------------- | :------------------------------ |
| text-decoration | 规定添加到文本的修饰 (如下划线) |
| text-transform  | 控制文本块字母大小写            |

## 创建文本阴影

| 属性        | 说明                 |
| :---------- | :------------------- |
| text-shadow | 指定文本块的阴影效果 |

## 使用字体

| 属性         | 说明                                           |
| :----------- | :--------------------------------------------- |
| font         | 在一条声明中设置文本字体、大小和颜色的简明属性 |
| @font-face   | 指定网页使用的字体                             |
| font-failmy  | 指定文本所用的字体系列，排在前面的优先使用     |
| font-size    | 指定字体大小                                   |
| font-style   | 指定使用正常字体、斜体还是倾斜字体             |
| font-variant | 指定字体是否以小型大写字母显示                 |
| font-weigth  | 设置文本粗细                                   |

# 第 23 章 过渡、动画和变换

## 使用过渡

过渡效果一般是由浏览器直接改变元素的 CSS 属性实现的 创建反向过渡

| 属性                       | 说明                             |
| :------------------------- | :------------------------------- |
| transition                 | 指定 CSS 属性过渡效果的简写属性  |
| transition-delay           | 指定触发过渡的延迟时间           |
| transition-duration        | 指定过渡的持续时间               |
| transition-property        | 指定带有过渡效果的属性           |
| transition-timing-function | 指定过渡期间计算中间属性值的函数 |

## 使用动画

| 属性                      | 说明                           |
| :------------------------ | :----------------------------- |
| animation                 | 设置动画的简写属性             |
| animation-delay           | 指定动画开始前的延迟时间       |
| animation-direction       | 指定动画重复播放时的播放方向   |
| animation-duration        | 指定动画持续时间               |
| animation-iteration-count | 指定动画的循环次数             |
| animation-name            | 指定用于动画的关键帧集合的名称 |
| animation-play-state      | 指定动画状态 (播放或暂停)      |
| animation-timing-function | 指定关键帧之间计算属性值的函数 |
| @keyframes                | 为动画指定一个以上的关键帧     |

## 使用变换

| 属性             | 说明                 |
| :--------------- | :------------------- |
| transform        | 指定应用于元素的变换 |
| transform-origin | 指定元素变换的起点   |

# 第 24 章 其他 CSS 属性和特性

## 设置元素的颜色和透明度

| 属性    | 说明             |
| :------ | :--------------- |
| color   | 指定元素的前景色 |
| opacity | 设置元素的透明度 |

## 设置表格样式

| 属性            | 说明                         |
| :-------------- | :--------------------------- |
| border-collapse | 设置相邻单元格的边框处理样式 |
| border-spacing  | 设置相邻单元格边框的间距     |
| caption-side    | 指定表格标题的位置           |
| empty-cells     | 设置空白单元格是否显示边框   |
| table-layout    | 指定表格的布局样式           |

## 设置列表样式

| 属性                | 说明                                 |
| :------------------ | :----------------------------------- |
| list-style          | 设置列表样式的简写属性               |
| list-style-image    | 指定列表项标记使用的图像             |
| list-style-position | 指定列表项标记相对于列表项内容的位置 |
| list-style-type     | 指定列表项标记的类型                 |

## 设置光标样式

| 属性   | 说明           |
| :----- | :------------- |
| cursor | 指定光标的形状 |

# 第 25 章 理解 DOM

## 理解文档对象模型

## 理解 DOM Level 和兼容性

## DOM 快速查询

# 第 26 章 使用 Document 对象

## 使用 Document 元数据

| 名称           | 说明                                                  |
| :------------- | :---------------------------------------------------- |
| characterSet   | 返回文档的字符集编码，这是一个只读属性                |
| charset        | 获取或设置文档的字符集编码                            |
| compatModel    | 获取文档的兼容性模式                                  |
| cookie         | 获取或设置当前文档的 cookie                           |
| defaultCharset | 获取浏览器所使用的默认字符编码                        |
| defaultView    | 放回当前文档的 Windows 对象                           |
| dir            | 获取或设置文档的文本方向                              |
| domain         | 获取或设置当前文档的域名                              |
| implementation | 提供关于 DOM 可用功能的信息                           |
| lastModified   | 返回文档的最后修改时间                                |
| location       | 提供关于当前文档 URL 的信息                           |
| readyState     | 返回当前文档的状态                                    |
| referrer       | 返回链接到当前文档的文档 URL (它是对应 HTTP 标头的值) |
| title          | 获取或设置当前文档的标题                              |

Location 对象的方法和属性

| 属性                | 说明                                    |
| :------------------ | :-------------------------------------- |
| protocol            | 获取或设置文档 URL 的协议部分           |
| host                | 获取或设置文档 URL 的主机名和端口号部分 |
| href                | 获取或设置当前文档的地址                |
| hostname            | 获取或设置文档 URL 的主机名部分         |
| port                | 获取或设置文档 URL 的端口号部分         |
| pathname            | 获取或设置文档 URL 的路径部分           |
| search              | 获取或设置文档的查询 (问号串) 部分      |
| hash                | 获取或设置文档 URL 的锚 (井号串) 部分   |
| `assign(<URL>)`     | 导航到指定的 URL 上                     |
| `replace(<URL>)`    | 清除当前文档并导航至 URL 所指定的新文档 |
| reload()            | 重新加载当前文档                        |
| `resolveURL(<URL>)` | 将指定的相对 URL 解析为绝对 URL         |

可以添加到 cookie 的额外字段

| 额外项              | 说明                                                         |
| :------------------ | :----------------------------------------------------------- |
| `path=<path>`       | 设置 cookie 关联的路径，如果没有指定则默认使用当前文档的路径 |
| `domain=<domain>`   | 设置 cookie 关联的域名，如果没有指定则默认使用当前文档的域名 |
| `max-age=<seconds>` | 设置 cookie 的有效期，以秒的形式从它创建之时起开始计算       |
| `expires=<date>`    | 设置 cooki 的有效期，使用的是 GMT 格式的日期                 |
| secure              | 只有在安全 (HTTPS) 连接时才会发送 cookie                     |

## 获取 HTML 元素对象

Document 对象的元素属性

| 属性            | 说明                                                    |
| :-------------- | :------------------------------------------------------ |
| activeElement   | 返回代表文档中当前获得焦点元素的对象                    |
| body            | 返回代表文档中 body 元素的对象                          |
| embeds、plugins | 返回所有代表文档中 embed 元素的对象                     |
| forms           | 返回所有代表文档中 form 元素的对象                      |
| head            | 返回代表 head 元素的对象                                |
| images          | 返回所有代表 img 元素的对象                             |
| links           | 返回所有代表文档中具备 href 属性的 a 和 area 元素的对象 |
| scripts         | 返回所有代表 script 元素的对象                          |

几乎所有 Document 对象实现的搜索方法 HTMLElement 对象实现，这让你可以合并进行链式搜索

寻找元素的 Document 方法

| 属性                              | 说明                                |
| :-------------------------------- | :---------------------------------- |
| `getElementById(<id>)`            | 返回带有指定 id 值的元素            |
| `getElementsByClassName(<class>)` | 返回带有指定 class 值的元素         |
| `getElementsByName(<name>)`       | 返回带有指定 name 值的元素          |
| `getElementsByTagName(<tag>)`     | 返回带有指定类型的元素              |
| `querySelector(<selector>)`       | 返回匹配特定 css 选择器的第一个元素 |
| `querySelectorAll(<selector>)`    | 返回匹配特定 css 选择器的所有元素   |

## 在 DOM 树里导航

| 属性            | 说明                            |
| :-------------- | :------------------------------ |
| childNodes      | 返回子元素的集合                |
| firstChild      | 返回某个元素的第一个子元素      |
| hasChildNodes() | 如果当前元素有子元素则返回 true |
| lastChild       | 返回最后一个子元素              |
| nextSibling     | 返回位于当前元素之后的兄弟元素  |
| parentNode      | 返回父元素                      |
| previousSibling | 返回位于当前元素之前的兄弟元素  |

# 第 27 章 使用 Window 对象

## 获取 Window 对象

可以在 Document 对象上使用 defaultView 属性，或者直接使用全局变量 window

## 获取窗口信息

窗口相关的成员

| 名称                | 说明                                 |
| :------------------ | :----------------------------------- |
| innerHeight         | 获取窗口内容区域的高度               |
| innerWidth          | 获取窗口内容区域的宽度               |
| outerHeight         | 获取窗口的高度，包括边框和菜单等     |
| outerWidth          | 获取窗口的宽度，包括边框和菜单栏等   |
| pageXOffset         | 获取窗口从左上角算起水平滚动过的像素 |
| pageYOffset         | 获取窗口从左上角算起垂直滚动过的像素 |
| screen              | 返回一个描述屏幕的 Screen 对象       |
| screenLeft、ScreenX | 获取从窗口左边缘到屏幕左边缘的像素数 |
| screenTop、ScreenY  | 获取从窗口上边缘到屏幕上边缘的像素数 |

Screen 对象的属性

| 名称        | 说明                                              |
| :---------- | :------------------------------------------------ |
| availHeight | 返回屏幕上可供显示窗口部分的高度 (排除工具栏之类) |
| availWidth  | 返回屏幕上可供显示窗口部分的宽度 (排除工具栏之类) |
| colorDepth  | 返回屏幕的颜色深度                                |
| height      | 返回屏幕的高度                                    |
| width       | 返回屏幕的宽度                                    |

## 与窗口进行交互

| 名称                 | 说明                         |
| :------------------- | :--------------------------- |
| blur()               | 让窗口失去键盘焦点           |
| close()              | 关闭窗口                     |
| focus()              | 让窗口获得键盘焦点           |
| print()              | 提示用户打印页面             |
| `scrollBy(<x>, <y>)` | 让文档相对其当前位置进行滚动 |
| `scrollTo(<x>, <y>)` | 滚动到指定的位置             |
| stop()               | 停止载入文档                 |

## 对用户进行提示

Window 的交互功能

| 名称                   | 说明                                   |
| :--------------------- | :------------------------------------- |
| alert(msg)             | 向用户显示一个对话框窗口并等待其被关闭 |
| `confirm(<msg>)`       | 显示一个带有确认和取消提示的对话框窗口 |
| `prompt(<msg>, <val>)` | 显示对话框提示用户输入一个值           |
| showModalDialog()`     | 弹出一个窗口显示指定的 URL             |

## 获取基本信息

提供信息的对象属性

| 名称     | 说明                             |
| :------- | :------------------------------- |
| document | 返回与此窗口关联的 Document 对象 |
| history  | 方提供对浏览器历史的访问         |
| location | 提供当前文档地址的详细信息       |

## 使用浏览器历史

History 对象的属性和方法

| 名称                                    | 说明                                                         |
| :-------------------------------------- | :----------------------------------------------------------- |
| back()                                  | 在浏览历史里后退一步                                         |
| forward()                               | 在浏览历史里前进一步                                         |
| `go(<index>)`                           | 转到相对于当前文档的某个浏览历史位置。正值是前进，负值是后退 |
| length                                  | 返回浏览历史里的项目数                                       |
| `pushState(<state>, <title>, <url>)`    | 向浏览历史添加一个条目                                       |
| `replaceState(<state>, <title>, <url>)` | 替换浏览器历史中的当前条目                                   |
| state                                   | 返回浏览器历史里关联当前文档的状态数据                       |

## 使用跨文档消息传递

通常情况下，不同来源 (origins) 的脚本是不允许进行通信的

跨文档消息传递方法

| 名称                           | 说明                 |
| :----------------------------- | :------------------- |
| `postMessage(<msg>, <origin>)` | 给另一个文档发送消息 |

寻找内嵌的 window

| 名称        | 说明                                       |
| :---------- | :----------------------------------------- |
| defaultView | 返回活动文档的 window                      |
| frames      | 返回文档内嵌 iframe 元素的 Window 对象数组 |
| opener      | 返回打开当前浏览器上下文环境 Window        |
| parent      | 返回当前 Window 的父 Window                |
| self        | 返回当前文档的 Window                      |
| top         | 返回最上层的 Window                        |
| length      | 返回文档内嵌的 iframe 元素数量             |
| `[<index>]` | 返回指定索引位置内嵌文档的 Window          |
| `[<name>]`  | 返回指定名称内嵌文档的 Window              |

MessageEvent 的属性

| 名称   | 说明                         |
| :----- | :--------------------------- |
| data   | 返回别的脚本发送的消息       |
| origin | 返回发送消息脚本的来源       |
| source | 返回发送消息脚本所关联的窗口 |

## 使用计时器

计时器方法

| 名称                             | 说明                                           |
| :------------------------------- | :--------------------------------------------- |
| `clearInterval(<id>)`            | 撤销某个时间间隔计时器                         |
| `clearTimeout(<id>)`             | 撤销某个超时计时器                             |
| `setInterval(<functon>, <time>)` | 创建一个计时器，每隔 time 毫秒调用指定的函数   |
| `setTimeout(<function>，<time>)` | 创建一个计时器，等待 time 毫秒后调用指定的函数 |

# 第 28 章 使用 DOM 元素

## 使用元素对象

元素数据属性

| 名称       | 说明                                 |
| :--------- | :----------------------------------- |
| checked    | 获取或设置 checked 属性的存在状态    |
| classList  | 获取或设置元素所属类的列表           |
| className  | 获取或设置元素所属类的列表           |
| dir        | 获取或设置 dir 属性的值              |
| disabled   | 获取或设置 disabled 属性的存在状态   |
| hidden     | 获取或设置 hidden 属性的存在状态     |
| id         | 获取或设置 id 属性的值               |
| lang       | 获取或设置 lang 属性的值             |
| spellcheck | 获取或设置 spellcheck 属性的存在状态 |
| tabIndex   | 获取或设置 tabindex 属性的值         |
| tagName    | 返回标签名 (象征元素的类型)          |
| title      | 获取或设置 title 属性的值            |

DOMTokenList 的成员

| 名称                | 说明                                   |
| :------------------ | :------------------------------------- |
| `add(<class>)`      | 给元素添加指定的类                     |
| `contains(<class>)` | 如果元素属于指定的类则返回 true        |
| length              | 返回元素所属类的数量                   |
| `remove(<calss>)`   | 从元素上移除指定的类                   |
| `toggle(<class>)`   | 如果类不存在就添加它，如果存在则移除它 |

与 HTML 属性相关的属性和方法

| 名称                          | 说明                              |
| :---------------------------- | :-------------------------------- |
| attributes                    | 返回应用到元素上的属性            |
| dataset                       | 返回以 data - 开头的属性          |
| `getAttribute(<name>)`        | 返回指定属性的值                  |
| `hasAttribute(<name>)`        | 如果元素带有指定的属性则返回 true |
| `removeAttribute(<name>)`     | 从元素上移除指定属性              |
| `setAttribute(<name>, <val>)` | 应用一个指定名称和值的属性        |

## 使用 Text 对象

Text 对象的成员

| 名称                                       | 说明                                                         |
| :----------------------------------------- | :----------------------------------------------------------- |
| `appendData(<string>)`                     | 在文本块的末尾附加指定字符串                                 |
| data                                       | 获取或设置文本                                               |
| `deleteData(<offset>, <count>)`            | 移除字符串中的文本。第一个数字是偏移量，第二个数字是要移除的字符数量 |
| `insertData(<offset>, <string>)`           | 在指定的偏移量位置插入指定的字符串                           |
| length                                     | 返回字符数量                                                 |
| `replaceData(<offset>, <count>, <string>)` | 使用指定字符串替换一部分文本                                 |
| `replaceWholeText(<string>)`               | 替换全部文本                                                 |
| `splitText(<number>)`                      | 将现有的字符串在指定的偏移量位置一分为二                     |
| `subString(<offset>, <count>)`             | 返回文本的字串                                               |
| wholeText                                  | 获取文本                                                     |

## 修改模型

DOM 操纵成员

| 名称                                   | 说明                                   |
| :------------------------------------- | :------------------------------------- |
| appendChild(HTMLElement)               | 将指定元素附加为当前元素的子元素       |
| cloneNode(boolen)                      | 复制某个元素                           |
| compareDocumentPosttion(HTMLElement)   | 判断某个元素的相对位置                 |
| innerHtml                              | 获取或设置指定元素的内容               |
| `insertAdjacentHTML(<pos>, <text>)`    | 相对于元素的位置插入 HTML              |
| `insertBefore(<newelem>, <childElem>)` | 将第一个元素插入到第二个 (子) 元素之前 |
| `isEqualNode(<HTMLElement>)`           | 判断指定元素是否与当前元素相等         |
| isSameNode(HTMLElement)                | 判断指定元素是否就是当前元素           |
| outerHTML                              | 获取或设置某个元素的 HTML 和内容       |
| removeChild(HTMLElement)               | 从当前元素上移除指定的子元素           |
| replaceChild(HTMLElement, HTMLElement) | 替换当前元素的某个子元素               |

| 名称                     | 说明                                 |
| :----------------------- | :----------------------------------- |
| `createElement(<tag>)`   | 用指定标签类型创建一个新的 HTML 元素 |
| `createTextNode(<text>)` | 用指定内容创建一个新的 Text 对象     |

insertAdjacentHTML 方法的定位参数值

| 值          | 说明                                   |
| :---------- | :------------------------------------- |
| afterbegin  | 将片段作为当前元素的第一个子元素插入   |
| afterend    | 将片段插入当前元素之后                 |
| beforebegin | 将片段插入当前元素之前                 |
| beforeend   | 将片段作为当前元素的最后一个子元素插入 |

# 第 29 章 为 DOM 元素设置样式

## 使用样式表

可以通过 document.styleSheets 属性访问文档中可用的 CSS 样式表

CSSStyleSheet 对象的成员

| 成员                        | 说明                             |
| :-------------------------- | :------------------------------- |
| cssRules                    | 返回样式表的规则合集             |
| `deleteRule(<pos>)`         | 从样式表中移除一条规则           |
| disabled                    | 获取或设置样式表的禁用状态       |
| href                        | 返回链接样式表的 href            |
| `insertRule(<rule>, <pos>)` | 插入一条新规则到样式表中         |
| media                       | 返回应用到样式表上的媒介限制集合 |
| ownerNode                   | 返回样式所定义的元素             |
| title                       | 返回 title 属性的值              |
| type                        | 返回 type 属性的值               |

MediaList 对象的成员

| 成员                     | 说明                    |
| :----------------------- | :---------------------- |
| `appendMedium(<medium>)` | 添加一个新媒介到列表中  |
| `deleteMedium(<medium>)` | 从列表中移除一个媒介    |
| `item(<pos>)`            | 返回指定索引的媒介      |
| length                   | 返回媒介的数量          |
| mediaText                | 返回 media 属性的文本值 |

CSSStyleSheet.disabled 属性可以用来一次性启用和禁用某个样式表里的所有样式 CSSStyleSheet.cssRules 属性会返回一个 CSSRuleList 对象，它允许你访问样式表里的各种样式

CSSRuleList 对象成员

| 成员          | 说明                    |
| :------------ | :---------------------- |
| `item(<pos>)` | 返回指定索引的 CSS 样式 |
| length        | 返回样式表里的样式数量  |

样式表里的每一种 CSS 样式都由一个 CSSStyleRule 对象代表

CSSStyleRule 对象的成员

| 成员             | 说明                              |
| :--------------- | :-------------------------------- |
| cssText          | 获取或设置样式的文本 (包括选择器) |
| parentStyleSheet | 获取此样式所属的样式表            |
| selectorText     | 获取或设置样式表的选择器文本      |
| style            | 获取一个代表具体样式属性的对象    |

## 使用元素样式

要获取某个元素的 style 属性所定义的样式属性，需要读取 HTMLElement 对象里定义的 style 属性值，它会返回一个 CSSStyleDeclaration 对象

## 使用 CSSStyleDeclaration 对象

你处理的是样式表还是某个元素的 style 属性并重要。要通过 DOM 完全控制 CSS，必须使用 CSSStyleDeclaration 对象

CSSStyleDeclaration 对象的成员

| 成员                                       | 说明                              |
| :----------------------------------------- | :-------------------------------- |
| cssText                                    | 获取或设置样式的文本              |
| `getPropertyCSSValue(<name>)`              | 获取指定的属性                    |
| `getPropertyPriority(<name>)`              | 获取指定属性的优先级              |
| `getPropertyVale(<name>)`                  | 获取字符串形式的指定值            |
| `item(<ops>)`                              | 获取指定位置的项目                |
| length                                     | 获取项目的数量                    |
| parentRule                                 | 如果存在样式规则就获取它          |
| `removeProperty(<name>)`                   | 移除指定的属性                    |
| `setProperty(<name>, <value>, <priority>)` | 设置指定属性的值和优先级          |
| `<style>`                                  | 获取或设置指定 CSS 属性的便捷属性 |

操作 CSSStyleDeclaration 对象最简单的方式是使用便捷属性，它们分别对应于各个 CSS 属性。便捷属性的一般命名模式：去掉连字符，然后大写第二个及其之后单词的首字母

CSSStyleSheet 便捷属性

| 成员                 | 对应于                |
| :------------------- | :-------------------- |
| background           | background            |
| backgroundAttachment | background-attachment |
| backgroundColor      | background-color      |
| backgroundImage      | background-image      |
| backgroundPosition   | background-position   |
| backgroundRepart     | background-repart     |
| border               | border                |
| borderBottom         | border-bottom         |
| borderBottomColor    | border-bottom-color   |
| borderBottomStyle    | border-bottom-style   |
| borderBottomWidth    | border-bottom-width   |
| corderCollapse       | border-collapse       |
| borderColor          | border-color          |
| bordrLeft            | border-left           |
| borderLeftColor      | border-left-color     |
| borderLeftStyle      | border-left-style     |
| borderLeftWidth      | border-left-width     |
| borderRight          | borer-right           |
| borderRightColor     | border-right-color    |
| borderRightStyle     | border-right-style    |
| borderRightWidth     | border-right-width    |
| borderSpacing        | border-spacing        |
| borderStyle          | border-style          |
| borderTop            | borer-top             |
| borderTopColor       | border-top-color      |
| borderTopStyle       | border-top-style      |
| borderTopWidth       | border-top-width      |
| borderWidth          | border-width          |
| captionSide          | caption-side          |
| clear                | clear                 |
| color                | color                 |
| cssFloat             | float                 |
| cursor               | cursor                |
| direction            | direcion              |
| display              | display               |
| emptyCells           | empty-cells           |
| font                 | font                  |
| fontFamily           | font-family           |
| fontSize             | font-size             |
| fontStyle            | font-style            |
| fontVariant          | font-variant          |
| fontWeight           | font-weight           |
| height               | height                |
| letterSpacing        | letter-spacing        |
| lineHeight           | line-height           |
| listStyle            | list-style            |
| listStyleImage       | list-style-image      |
| listStylePosition    | list-style-position   |
| listStyleType        | list-style-type       |
| margin               | margin                |
| marginBottom         | margin-bottom         |
| marginLeft           | margin-left           |
| marginRight          | margin-right          |
| marginTop            | margin-top            |
| maxHeight            | max-height            |
| maxWidth             | max-width             |
| minHeight            | min-height            |
| minWidth             | min-width             |
| outline              | outline               |
| outineColor          | outline-color         |
| outineStyle          | outine-style          |
| outineWidth          | outine-width          |
| overflow             | overflow              |
| padding              | padding               |
| paddingBottom        | padding-bottom        |
| paddingLeft          | padding-left          |
| paddingRight         | padding-right         |
| paddingTop           | padding-top           |
| tableLayout          | table-layout          |
| textAlign            | text-align            |
| textDecoration       | text-decoration       |
| textIndent           | text-indent           |
| textShadow           | text-shadow           |
| textTransform        | text-transform        |
| visibility           | visibility            |
| whitespace           | whitespace            |
| width                | width                 |
| wordSpacing          | word-spacing          |
| zIndex               | z-index               |

使用细粒度的 CSS DOM 对象 枚举某个样式里的属性和使用 getPropertyValue 方法，可以找出哪些属性已被使用。但是，仍然需要进一步了解各个属性才能使用它们。 某些情形下你不想预先知道这个，可以使用 CSSStyleDeclaration.getProperlyCSSValue 方法来获取 CSSPrimitiveValue 对象，这些对象代表了样式里各个属性所定义的值。

CSSPrimitiveValue 对象的成员

| 成员                             | 说明                   |
| :------------------------------- | :--------------------- |
| cssText                          | 获得一个用文本表示的值 |
| `getFloatValue(<type>)`          | 获得一个数值           |
| getRGBColorValue()               | 获得一个颜色值         |
| getStringValue()                 | 获得一个字符串值       |
| primitiveType                    | 获得值的单位类型       |
| `setFloatValue(<type>, <value>)` | 设置一个数值           |
| `setStringVale(<type>, <value>)` | 设置一个基于字符串的值 |

| 基本单位类型   | 说明                            |
| :------------- | :------------------------------ |
| CSS_NUMBER     | 此单位是用数字表达的            |
| CSS_PERCENTAGE | 此单位是用百分比表达的          |
| CSS_EMS        | 此单位是以 em 表达的            |
| CSS_PX         | 此单位是以 CSS 像素表达的       |
| CSS_CM         | 此单位是以厘米表达的            |
| CSS_IN         | 此单位是以英寸表达的            |
| CSS_PT         | 此单位是以点 (point) 表达的     |
| CSS_PC         | 此单位是以十二点活字表达的      |
| CSS_DEG        | 此单位是以度表达的              |
| CSS_RAD        | 此单位是以弧度表达的            |
| CSS_GRAD       | 此单位是以梯度 (gradian) 表达的 |
| CSS_MS         | 此单位是以毫米表达的            |
| CSS_S          | 此单位是以秒表达的              |
| CSS_STRING     | 此单位是用字符串表达的          |
| CSS_RGBCOLOR   | 此单位是用颜色表达的            |

## 使用计算样式

浏览器用于显示某个元素的 CSS 属性值集合被称为 **计算样式** ，可以通过 document.defultView.getComputedStyle 方法获取包含某一元素计算样式的 CSSStyleDeclaration 对象。但无法修改计算样式，要做到这一点，必须修改样式表，或者通过元素的 style 属性直接给它应用样式属性

# 第 30 章 使用事件

## 使用简单事件处理器

## 使用 DOM 和事件对象

可以使用 addEventListener 方法为元素添加事件 Event 对象定义了所有事件都常用的一写功能

Event 对象的函数和属性

| 名称                       | 说明                                                         |
| :------------------------- | :----------------------------------------------------------- |
| type                       | 事件名称                                                     |
| target                     | 事件指向的元素                                               |
| currentTarget              | 带有当前被触发事件监听器的元素                               |
| eventPhase                 | 事件生命周期的阶段                                           |
| bubbles                    | 如果事件会在文档里冒泡则返回 true，否则返回 false            |
| cancelable                 | 如果事件带有可撤销的默认行为则返回 true，否则返回 false      |
| timeStamp                  | 事件的创建时间，如果时间不可用则为 0                         |
| stopPropagation()          | 在当前元素的事件监听器被触发后终止事件在元素树中的流动       |
| stopImmediatePropagation() | 立即终止事件在元素树中的流动。当前元素上未被触发的事件监听器会被忽略 |
| preventDefault()           | 防止浏览器执行与事件关联的默认操作                           |
| defaultPrevented           | 如果调用过 repventDefault () 则返回 true                     |

一个事件的生命周期包括三个阶段：捕捉、目标、冒泡。当某个事件被触发时，浏览器会找出事件涉及的元素，它被称为该事件的目标。 浏览器会找出 body 元素和目标元素之间的所有元素并分别检查它们，看看它们是否带有事件处理器且要求获得其后代元素触发事件的通知。 浏览器会先触发这些事件处理，然后才会轮到目标自身的事件处理器。 事件捕捉让目标元素的各个上级元素都有机会在事件传递到目标元素本身之前对其做出反应。上级元素的事件处理器可以阻止事件流向目标，方法是对 Event 对象调用 stopPropagation 或 stopImmediatePropagation 函数

Evens.eventPhase 属性的值

| 名称            | 说明               |
| :-------------- | :----------------- |
| CAPTURING_PHASE | 此事件处于捕捉阶段 |
| AT_TARGET       | 此事件处于目标阶段 |
| BUBBLING_PHASE  | 此事件处于冒泡阶段 |

完成目标阶段之后，浏览器开始转而沿着上级元素链朝 body 元素前进。在沿途的每个元素上，浏览器都会检查是否存在针对该事件类型但没有启用捕捉的监听器 (也就是说 addEventListener 函数的第三个参数是 false)。这就是所谓的事件冒泡

有些事件定义了一种默认行为，会在事件被触发时执行。当某一事件拥有默认行为时，它的 cancelable 属性就会是 true。 可以通过调用 preventDefault 函数来阻止默认行为的执行。调用 preventDefault 函数不会阻止事件流经历捕捉、目标和冒泡阶段。

## 使用 HTML 事件

文档和窗口的事件

| 名称             | 说明                             |
| :--------------- | :------------------------------- |
| readystatechange | 在 readystate 属性的值改变时触发 |

window 对象的事件

| 名称          | 说明                                                        |
| :------------ | :---------------------------------------------------------- |
| onabort       | 在文档或资源的加载过程被中止时触发                          |
| onafterprint  | 在用户打印文档后触发                                        |
| onbeforeprint | 在调用 Window.print () 方法之后，向用户呈现打印选项之前触发 |
| onerror       | 在文档或资源载入出错时触发                                  |
| onhashchange  | 在地址的锚 (井号串) 部分变动时触发                          |
| onload        | 在文档或资源载入完成时触发                                  |
| onunload      | 在文档从窗口或浏览器中卸载时触发                            |
| onpopstate    | 触发时会提供一个关联浏览器历史的状态对象                    |
| onresize      | 在窗口大小改变时触发                                        |

与鼠标相关的事件

| 名称       | 说明                                                         |
| :--------- | :----------------------------------------------------------- |
| click      | 再按下鼠标按钮后释放时触发                                   |
| dblclick   | 在两次按下鼠标按钮并释放时触发                               |
| mousedown  | 在鼠标按钮被按下时触发                                       |
| mouseenter | 在光标移入元素或其下属元素所占据的屏幕区域时触发             |
| mouseleave | 在光标移除元素及其下属元素所占据的屏幕区域时触发             |
| mousemove  | 在光标位于元素上方并移动时触发                               |
| mouseout   | 与 mouseleave 相似，区别是当光标还在下属元素上时此事件也会被触发 |
| mouseover  | 与 mouseenter 相似，区别是当光标还在下属元素上时此事件也会被触发 |
| mouseup    | 当鼠标按钮被释放时触发                                       |

当某个鼠标事件被触发时，浏览器会指派一个 MouseEvent 对象

MouseEnvnt 对象

| 名称     | 说明                                                         |
| :------- | :----------------------------------------------------------- |
| button   | 表明点击的时哪个键。0 是鼠标主键，1 是中键， 2 是次键 / 右键 |
| altkey   | 如果在事件触发时按下了 alt/option 键则返回 true              |
| clinetX  | 返回事件触发时鼠标相对于元素视口的 X 坐标                    |
| clientY  | 返回事件触发时鼠标相对于元素视口的 Y 坐标                    |
| screenX  | 返回事件触发时鼠标相对于屏幕坐标系的 X 坐标                  |
| screenY  | 返回事件触发时鼠标相对于屏幕坐标系的 Y 坐标                  |
| shiftKey | 如果在事件触发时按下了 shift 键则返回 true                   |
| ctrlKey  | 如果在事件触发时按下了 ctrl 键则返回 true                    |

与键盘焦点相关的事件

| 名称     | 说明                         |
| :------- | :--------------------------- |
| blur     | 在元素失去键盘焦点时触发     |
| focus    | 在元素获得键盘焦点时触发     |
| focusin  | 在元素即将获得键盘焦点时触发 |
| focusout | 在元素即将失去键盘焦点时触发 |

FocusEvent 对象代表了这些事件

FocusEvent 对象

| 名称          | 说明                                                         |
| :------------ | :----------------------------------------------------------- |
| relatedTarget | 元素即将获得或失去焦点。这个属性只能用于 focusin 和 focusout 事件 |

与键盘相关的事件

| 名称     | 说明                         |
| :------- | :--------------------------- |
| keydown  | 在用户按下某个键时触发       |
| keypress | 在用户按下某个键并释放时触发 |
| keyup    | 在用户释放某个键时触发       |

KeyboardEvent 对象代表了这些事件

KeyboardEvent 对象

| 名称     | 说明                                         |
| :------- | :------------------------------------------- |
| char     | 返回按键代表的字符                           |
| key      | 返回所按的键                                 |
| ctrlKey  | 如果在按键时 ctrl 键处于按下状态则返回 true  |
| shiftKey | 如果在按键时 shift 键处于按下状态则返回 true |
| altKey   | 如果在按键时 alt 键处于按下状态的返回 true   |
| repeat   | 如果该键一直处于按下状态则返回 true          |

form 事件

| 名称   | 说明                   |
| :----- | :--------------------- |
| reset  | 在某张表单被重置时触发 |
| submit | 在某张表单被提交时触发 |

# 第 31 章 使用元素专属对象

## 文档和元数据对象

HTMLBaseElement 对象 [base]

| 名称   | 说明               |
| :----- | :----------------- |
| href   | 对应于 href 属性   |
| target | 对应于 target 属性 |

HTMLBodyElement 的事件 [body]

| 事件   | 说明                                                 |
| :----- | :--------------------------------------------------- |
| error  | 在脚本或图像等资源的加载发生错误时触发               |
| load   | 在文档和它所有的资源都已加载完成时触发               |
| unload | 在浏览器卸载文档 (通常是因为用户导航到了别处) 时触发 |

HTMLLinkElement 对象 [link]

| 名称     | 说明                 |
| :------- | :------------------- |
| disabled | 对应于 disabled 属性 |
| href     | 对应于 href 属性     |
| rel      | 对应于 rel 属性      |
| media    | 对应于 media 属性    |
| hreflang | 对应于 hreflang 属性 |
| type     | 对应于 type 属性     |

HTMLMetaElement 对象 [meta]

| 名称      | 说明                   |
| :-------- | :--------------------- |
| name      | 对应于 name 属性       |
| httpEquiv | 对应于 http-equiv 属性 |
| content   | 对应于 content 属性    |

HTMLScriptElement 对象 [script]

| 事件    | 说明                |
| :------ | :------------------ |
| src     | 对应于 src 属性     |
| async   | 对应于 async 属性   |
| defer   | 对应于 defer 属性   |
| type    | 对应于 type 属性    |
| charset | 对应于 charset 属性 |
| text    | 对应于 text 属性    |

HTMLStyleElement 对象 [style]

| 名称     | 说明                 |
| :------- | :------------------- |
| disabled | 对应于 disabled 属性 |
| media    | 对应于 media 属性    |
| typed    | 对应于 typed 属性    |
| scoped   | 对应于 scoped 属性   |

HTMLTitleElement 对象 [title]

| 名称 | 说明                        |
| :--- | :-------------------------- |
| text | 获取或设置 title 元素的内容 |

head 和 html 元素分别是由 HTMLHeadElement 和 HTMLHtmlElement 对象代表的

## 文本元素

HTMLAnchorElement 对象 [a]

| 名称     | 说明                                                         |
| :------- | :----------------------------------------------------------- |
| href     | 对应于 href 属性                                             |
| target   | 对应于 target 属性                                           |
| rel      | 对应于 rel 属性                                              |
| media    | 对应于 media 属性                                            |
| hreflang | 对应于 hreflang 属性                                         |
| type     | 对应于 type 属性                                             |
| text     | 获取或设置此元素包含的文本                                   |
| protocol | 这个便捷属性用于获取或设置 href 属性值里的协议名部分         |
| host     | 这个便捷属性用于获取或设置 href 属性值里的主机名和端口号部分 |
| hostname | 这个便捷属性用于获取或设置 href 属性值里的主机名部分         |
| port     | 这个便捷属性用于获取或设置 href 属性值里的端口号部分         |
| pathname | 这个便捷属性用于获取或设置 href 属性值里的路径部分           |
| search   | 这个便捷属性用于获取或设置 href 属性值里的查询字符串部分     |
| hash     | 这个便捷属性用于获取或设置 href 属性值里的文档片段部分       |

HTMLModElement 对象 [del&ins]

| 名称     | 说明                 |
| :------- | :------------------- |
| cite     | 对应于 cite 属性     |
| dateTime | 对应于 datetime 属性 |

HTMLQuoteElement 对象 [q]

| 名称 | 说明             |
| :--- | :--------------- |
| cite | 对应于 cite 属性 |

HTMLTimeElenment 对象 [time]

| 名称        | 说明                               |
| :---------- | :--------------------------------- |
| dateTime    | 对应于 datetime 属性               |
| pubDate     | 对应于 pubdate 属性                |
| valueAsDate | 解析时间和日期并返回一个 Date 对象 |

## 分组元素

HTMLLIElement 对象 [li]

| 名称  | 说明              |
| :---- | :---------------- |
| value | 对应于 calue 属性 |

HTMLOLListElement 对象 [ol]

| 名称     | 说明                 |
| :------- | :------------------- |
| reversed | 对应于 reversed 属性 |
| start    | 对应于 start 属性    |
| type     | 对应于 type 属性     |

## 区块元素

HTMLDetailsElement 对象 [details]

| 名称 | 说明             |
| :--- | :--------------- |
| open | 对应于 open 属性 |

## 表格元素

HTMLTableColElement 对象 [col&colgroup]

| 名称 | 说明             |
| :--- | :--------------- |
| span | 对应于 span 属性 |

HTMLTableElement 对象 [table]

| 名称                 | 说明                                        |
| :------------------- | :------------------------------------------ |
| border               | 对应于 border 属性                          |
| caption              | 返回表格的 caption 元素                     |
| createCaption()      | 返回表格的 caption 元素，如果有必要就创建它 |
| deleteCaption()      | 删除表格的 caption 元素                     |
| tHead                | 返回表格的 thead 元素                       |
| createTHead()        | 返回表格的 thead 元素，如果有必要就创建它   |
| deleteTHead()        | 删除表格的 thead 元素                       |
| tFoot                | 返回表格的 tfoot 元素                       |
| createTFoot()        | 返回表格的 tfoot 元素，如果有必要就创建它   |
| deleteTFoot()        | 删除 tfoot 元素                             |
| tBodies              | 返回表格的 tbody 元素                       |
| createTBody()        | 返回表格的 tbody 元素，如果有必要就创建它   |
| deleteTBody()        | 删除 tbody 元素                             |
| rows                 | 返回表格各行                                |
| `insertRow(<index>)` | 在表格的指定位置创建一个新行                |
| `deleteRow(<index>)` | 删除指定索引处的表格行                      |

HTMLTableSectionElement 对象 [thead&tbody&tfoot]

| 名称                 | 说明                         |
| :------------------- | :--------------------------- |
| rows                 | 返回表格此区块的各行         |
| `insertRow(<index>)` | 在表格的指定位置创建一个新行 |
| `deleteRow(<index>)` | 删除指定索引处的表格行       |

HTMLTableHeaderCellElement 对象 [th]

| 名称                 | 说明                         |
| :------------------- | :--------------------------- |
| rows                 | 返回表格此区块的各行         |
| `insertRow(<index>)` | 在表格的指定位置创建一个新行 |
| `deleteRow(<index>)` | 删除指定索引处的表格行       |

HTMLTableRowElement 对象 [tr]

| 名称                  | 说明                         |
| :-------------------- | :--------------------------- |
| rowIndex              | 返回行在表格里的位置         |
| sectionRowIndex       | 返回行在表格区块里的位置     |
| cells                 | 返回单元格元素的集合         |
| `insertCell(<index>)` | 在指定索引处插入一个新单元格 |
| `deleteCell(<index>)` | 删除指定索引处的单元格       |

没有额外属性的表格元素对象

| 名称    | 说明                     |
| :------ | :----------------------- |
| caption | HTMLTableCaptionElement  |
| td      | HTMLTableDataCellElement |

## 表单元素

HTMLButtonElement 对象 [button]

| 名称           | 说明                                       |
| :------------- | :----------------------------------------- |
| autofocus      | 对应于 autofocus 属性                      |
| disabled       | 对应于 disabled 属性                       |
| form           | 返回此元素关联的 form 元素                 |
| formAction     | 对应于 formaction 属性                     |
| formEncType    | 对应于 formenctype 属性                    |
| formMethod     | 对应于 formMethod 属性                     |
| formNoValidate | 对应于 formnovalidate 属性                 |
| formTarget     | 对应于 formtarget 属性                     |
| name           | 对应于 name 属性                           |
| type           | 对应于 type 属性                           |
| value          | 对应于 value 属性                          |
| labels         | 返回属性与此 button 元素相关的说明标签元素 |

HTMLDataListElement 对象 [datalist]

| 名称    | 说明                                     |
| :------ | :--------------------------------------- |
| options | 返回 datalist 元素包含的 option 元素集合 |

HTMLFieldSetElement 对象 [fieldset]

| 名称     | 说明                             |
| :------- | :------------------------------- |
| disabled | 对应于 disabled 属性             |
| form     | 对应于 form 属性                 |
| name     | 对应于 name 属性                 |
| elements | 返回 fieldset 包含的表单控件集合 |

HTMLFormElement 对象 [form]

| 名称            | 说明                                                        |
| :-------------- | :---------------------------------------------------------- |
| acceptCharset   | 对应于 accept-charset 属性                                  |
| action          | 对应于 action 属性                                          |
| autocomplete    | 对应于 autocomplete 属性                                    |
| enctype         | 对应于 enctype 属性                                         |
| encoding        | 对应于 encoding 属性                                        |
| method          | 对应于 method 属性                                          |
| name            | 对应于 name 属性                                            |
| noValidate      | 对应于 noValidate 属性                                      |
| atrget          | 对应于 atrget 属性                                          |
| elements        | 返回表单里的所有元素                                        |
| lenght          | 返回表单里的元素数量                                        |
| `[<name>]`      | 返回具有指定名称的表单元素                                  |
| `[<index>]`     | 返回位于指定索引处的表单元素                                |
| submit()        | 提交表单                                                    |
| reset()         | 重置表单                                                    |
| checkValidity() | 如果所有表单元素都通过了输入验证就返回 true，否则返回 false |

HTMLInoutElement 对象 [input]

| 名称                       | 说明                                                         |
| :------------------------- | :----------------------------------------------------------- |
| accept                     | 对应于 accept 属性                                           |
| alt                        | 对应于 alt 属性                                              |
| autocomplete               | 对应于 autocomplete 属性                                     |
| autofocus                  | 对应于 autofocus 属性                                        |
| checked                    | 如果元素被选中则返回 true                                    |
| dirName                    | 对应于 dirname 属性                                          |
| disabled                   | 对应于 disabled 属性                                         |
| form                       | 对应于 form 属性                                             |
| formAction                 | 对应于 formaction 属性                                       |
| formEncType                | 对应于 formenctype 属性                                      |
| formMethod                 | 对应于 formMethod 属性                                       |
| formNoValidate             | 对应于 formnovalidate 属性                                   |
| formTarget                 | 对应于 formtarget 属性                                       |
| list                       | 对应于 list 属性                                             |
| max                        | 对应于 max 属性                                              |
| maxLength                  | 对应于 maxlength 属性                                        |
| min                        | 对应于 min 属性                                              |
| multiple                   | 对应于 multiple 属性                                         |
| name                       | 对应于 name 属性                                             |
| pattern                    | 对应于 pattern 属性                                          |
| placeholder                | 对应于 placeholder 属性                                      |
| readOnly                   | 对应于 readonly 属性                                         |
| required                   | 对应于 required 属性                                         |
| size                       | 对应于 size 属性                                             |
| src                        | 对应于 src 属性                                              |
| step                       | 对应于 step 属性                                             |
| type                       | 对应于 type 属性                                             |
| value                      | 对应于 value 属性                                            |
| valueAsDate                | 获取或设置日期形式的 value 属性                              |
| valueAsNumber              | 获取或设置数字形式的 value 属性                              |
| selectedOption             | 从 list 属性指定的 datalist 里获取匹配 input 元素 value 的 option 元素 |
| `stepUp(<step>)`           | 给 value 增加指定的量                                        |
| `stepDown(<step>)`         | 给 value 减少指定的量                                        |
| willValidate               | 如果此元素将在提交表单时进行输入验证就返回 true，否则返回 false |
| validity                   | 返回对输入的有效性评估                                       |
| validationMessage          | 返回在应用输入验证时展示给用户的错误消息                     |
| checkValidity()            | 对此元素执行输入验证                                         |
| `setCustomValidity(<msg>)` | 设置一条自定义的验证消息                                     |
| labels                     | 返回与此元素关联的说明标签元素                               |

HTMLLableElement 对象 [label]

| 名称    | 说明                      |
| :------ | :------------------------ |
| form    | 返回与此元素关联的 form   |
| htmlFor | 对应于 for 属性           |
| control | 返回 for 属性所指定的元素 |

HTMLLegendElement 对象 [legend]

| 名称 | 说明                    |
| :--- | :---------------------- |
| form | 返回与此元素关联的 form |

HTMLOptGroupElement 对象 [optgroup]

| 名称     | 说明                 |
| :------- | :------------------- |
| disabled | 对应于 disabled 属性 |
| label    | 对应于 label 属性    |

HTMLOptionElement 对象 [option]

| 名称     | 说明                               |
| :------- | :--------------------------------- |
| disabled | 对应于 disabled 属性               |
| form     | 返回与此元素关联的 form            |
| label    | 对应于 label 属性                  |
| selected | 对应于 selected 属性               |
| value    | 对应于 value 属性                  |
| text     | 对应于 text 属性                   |
| index    | 发挥此元素在 select 父元素里的所有 |

HTMLOutputHTML 对象 [output]

| 名称                       | 说明                                                         |
| :------------------------- | :----------------------------------------------------------- |
| htmlFor                    | 对应于 for 属性                                              |
| form                       | 返回与此元素关联的 form                                      |
| name                       | 对应于 name 属性                                             |
| type                       | 对应于 type 属性                                             |
| value                      | 对应于 value 属性                                            |
| willValidate               | 如果此元素将在提交表单时进行输入验证就返回 true，否则返回 false |
| validationMessage          | 返回在应用输入验证时展示给用户的错误消息                     |
| checkValidity()            | 对此元素执行输入验证                                         |
| `setCustomValidity(<msg>)` | 设置一条自定义的验证消息                                     |
| labels                     | 返回与此元素关联的说明标签元素                               |

HTMLSelectElement 对象 [select]

| 名称                       | 说明                                                         |
| :------------------------- | :----------------------------------------------------------- |
| autofocus                  | 对应于 autofocus 属性                                        |
| disabled                   | 对应于 disabled 属性                                         |
| form                       | 返回此元素关联的 form 元素                                   |
| multiple                   | 对应于 multiple 属性                                         |
| name                       | 对应于 name 属性                                             |
| required                   | 对应于 required 属性                                         |
| size                       | 对应于 size 属性                                             |
| type                       | 如果此元素带有 multiple 属性就返回 select-multiple，否则返回 select-one |
| options                    | 返回 option 元素的集合                                       |
| lenght                     | 获取或设置选项元素的数量                                     |
| `[<index>]`                | 获取指定索引处的元素                                         |
| selectedOptions            | 返回选中的 option 元素                                       |
| selectedIndex              | 返回第一个选中 option 元素的索引                             |
| value                      | 获取或设置选中的值                                           |
| willValidate               | 如果此元素将在提交表单时进行输入验证就返回 true，否则返回 false |
| validationMessage          | 返回在应用输入验证时展示给用户的错误消息                     |
| checkValidity()            | 对此元素执行输入验证                                         |
| `setCustomValidity(<msg>)` | 设置一条自定义的验证消息                                     |
| labels                     | 返回与此元素关联的说明标签元素                               |

HTMLTextAreaElement 对象 [textarea]

| 名称                       | 说明                                                         |
| :------------------------- | :----------------------------------------------------------- |
| autofocus                  | 对应于 autofocus 属性                                        |
| cols                       | 对应于 cols 属性                                             |
| dirName                    | 对应于 dirname 属性                                          |
| disabled                   | 对应于 disabled 属性                                         |
| form                       | 返回与此元素关联的 form                                      |
| maxLength                  | 对应于 maxlength 属性                                        |
| name                       | 对应于 name 属性                                             |
| placeholder                | 对应于 placeholder 属性                                      |
| readyOnly                  | 对应于 readyonly 属性                                        |
| rows                       | 对应于 rows 属性                                             |
| wrap                       | 对应于 wrap 属性                                             |
| type                       | 返回 textarea                                                |
| value                      | 返回此元素的内容                                             |
| textLength                 | 返回 value 属性的长度                                        |
| willValidate               | 如果此元素将在提交表单时进行输入验证就返回 true，否则返回 false |
| validationMessage          | 返回在应用输入验证时展示给用户的错误消息                     |
| checkValidity()            | 对此元素执行输入验证                                         |
| `setCustomValidity(<msg>)` | 设置一条自定义的验证消息                                     |
| labels                     | 返回与此元素关联的说明标签元素                               |

HTMLAreaElement 对象 [area]

| 名称     | 说明                                                         |
| :------- | :----------------------------------------------------------- |
| alt      | 对应于 alt 属性                                              |
| coords   | 对应于 coords 属性                                           |
| shape    | 对应于 shape 属性                                            |
| href     | 对应于 href 属性                                             |
| target   | 对应于 target 属性                                           |
| rel      | 对应于 rel 属性                                              |
| media    | 对应于 media 属性                                            |
| hrefLang | 对应于 hreflang 属性                                         |
| type     | 对应于 type 属性                                             |
| protocol | 这个便捷属性用于获取或设置 href 属性值里的协议名部分         |
| host     | 这个便捷属性用于获取或设置 href 属性值里的主机名和端口号部分 |
| hostname | 这个便捷属性用于获取或设置 href 属性值里的主机名部分         |
| port     | 这个便捷属性用于获取或设置 href 属性值里的端口号部分         |
| pathname | 这个便捷属性用于获取或设置 href 属性值里的路径部分           |
| search   | 这个便捷属性用于获取或设置 href 属性值里的查询字符串部分     |
| hash     | 这个便捷属性用于获取或设置 href 属性值里的文档片段部分       |

HTMLEmbedElement 对象 [embed]

| 名称   | 说明               |
| :----- | :----------------- |
| src    | 对应于 src 属性    |
| type   | 对应于 type 属性   |
| width  | 对应于 width 属性  |
| height | 对应于 height 属性 |

HTMLIframeElement 对象 [iframe]

| 名称            | 说明                 |
| :-------------- | :------------------- |
| src             | 对应于 src 属性      |
| srcdoc          | 对应于 srcdoc 属性   |
| name            | 对应于 name 属性     |
| sandbox         | 对应于 sandbox 属性  |
| seamless        | 对应于 seamless 属性 |
| width           | 对应于 width 属性    |
| height          | 对应于 height 属性   |
| contentDocument | 返回 document 对象   |
| contentWindow   | 返回 window 对象     |

HTMLImageElement 对象 [img]

| 名称     | 说明                        |
| :------- | :-------------------------- |
| alt      | 对应于 alt 属性             |
| src      | 对应于 src 属性             |
| useMap   | 对应于 usermap 属性         |
| isMap    | 对应于 ismap 属性           |
| width    | 对应于 width 属性           |
| height   | 对应于 height 属性          |
| complete | 如果图像已被下载则返回 true |

HTMLMapElement 对象 [map]

| 名称   | 说明                                      |
| :----- | :---------------------------------------- |
| name   | 对应于 name 属性                          |
| areas  | 返回分区响应图里所有的 area 元素          |
| images | 返回分区响应图里所有的 img 和 object 元素 |

HTMLMeteElement 对象 [meter]

| 名称   | 说明                           |
| :----- | :----------------------------- |
| value  | 对应于 value 属性              |
| max    | 对应于 max 属性                |
| form   | 返回与此元素关联的 form        |
| labels | 返回与此元素关联的说明标签元素 |

HtMLObjectElement 对象 [object]

| 名称                       | 说明                                                         |
| :------------------------- | :----------------------------------------------------------- |
| data                       | 对应于 data 属性                                             |
| type                       | 对应于 type 属性                                             |
| form                       | 返回与此元素关联的 form                                      |
| name                       | 对应于 name 属性                                             |
| userMap                    | 对应于 usermap 属性                                          |
| width                      | 对应于 width 属性                                            |
| height                     | 对应于 height 属性                                           |
| contentDocument            | 返回 document 对象                                           |
| contentWindow              | 返回 window 对象                                             |
| willValidate               | 如果此元素将在提交表单时进行输入验证就返回 true，否则返回 false |
| validationMessage          | 返回在应用输入验证时展示给用户的错误消息                     |
| checkValidity()            | 对此元素执行输入验证                                         |
| `setCustomValidity(<msg>)` | 设置一条自定义的验证消息                                     |
| labels                     | 返回与此元素关联的说明标签元素                               |

HTMLParamElement 对象 [param]

| 名称  | 说明              |
| :---- | :---------------- |
| name  | 对应于 name 属性  |
| value | 对应于 value 属性 |

HTMLProgressElement 对象 [progress]

| 名称     | 说明                           |
| :------- | :----------------------------- |
| value    | 对应于 value 属性              |
| position | 对应于 position 属性           |
| max      | 对应于 max 属性                |
| form     | 返回与此元素关联的 form        |
| labels   | 返回与此元素关联的说明标签元素 |

# 第 32 章 使用 Ajax (第 Ⅰ 部分)

## Ajax 起步

Ajax 的关键在于 XMLHttpRequest 对象。

## 使用 Ajax 事件

XMLHttpRequest 对象定义的事件

| 名称             | 说明                                     |
| :--------------- | :--------------------------------------- |
| abort            | 在请求被中止时触发                       |
| error            | 在请求失败时触发                         |
| load             | 在请求成功时触发                         |
| loadend          | 在请求已完成时触发，无论成功还是发生错误 |
| loadstart        | 在请求开始时触发                         |
| progress         | 触发以提示请求的进度                     |
| readystatechange | 在请求生命周期的不同阶段触发             |
| timeout          | 如果请求超时则触发                       |

这些事件大多数会在请求的某一个特定时点上触发。readystatechange 和 progress 这两个事件是例外，它们可以多次触发以提供进程更新。

XMLHttpRequest readyState 属性的值

| 值               | 数值 | 说明                       |
| :--------------- | :--- | :------------------------- |
| UNSENT           | 0    | 已创建 XMLHttpRequest 对象 |
| OPENED           | 1    | 已调用 open 方法           |
| HEADERS_RECEIVED | 2    | 已收到服务器响应的标头     |
| LOADING          | 3    | 已收到服务器响应           |
| DONE             | 4    | 响应已完成或失败           |

调度 XMLHttpRequest 的事件时，浏览器会对 readystatechange 事件使用常规的 Event 对象，对其他事件则使用 ProgressEvent 对象。ProgressEvent 对象定义了 Event 对象的所有成员，并增加了以下成员。

ProgressEvent 定义的额外属性

| 名称             | 说明                                  |
| :--------------- | :------------------------------------ |
| lengthComputable | 如果能够计算数据流的总长度则返回 true |
| loaded           | 返回当前已载入的数据量                |
| total            | 返回可用的数据总量                    |

## 处理错误

使用 Ajax 时必须留心两类错误。它们之间的区别源于视角不同。 第一类错误是从 XMLAHttpRequest 对象的角度看到的问题：某些因素组织了请求发送到服务器，例如 DNS 无法解析主机名，连接请求被拒绝，或者 URL 无效。 第二类问题是从应用程序的角度看到的问题，而非 XMLHttpRequest 对象。它们发生于请求成功发送至服务器，服务器接受请求、进行处理并生成响应，而该相应并不指向你期望的内容时。例如你请求的 URL 不存在。

一般可以通过三种方式来处理这些错误：

1. 添加 try…catch 语句
2. 注册 error 事件
3. 检查 status 属性

## 获取和设置标头

XMLHttpRequest 对象中与标头有关的方法

| 方法                                  | 说明                           |
| :------------------------------------ | :----------------------------- |
| `setRequestHeader(<header>, <value>)` | 用指定值设置标头               |
| `getResponseHeader(<header>)`         | 获取指定标头的值               |
| getAllResponseHeader()                | 以单个字符串的形式获取所有标头 |

可以通过标头更改 HTTP 请求的类型、内容缓存机制、也可以读取响应标头

## 生成跨源 Ajax 请求

从一个来源到另一个来源的 Ajax 请求被称为跨源请求。默认情况下，浏览器限制脚本只能在它们所属的文档的来源内生成 Ajax 请求。 这一策略的目的是降低跨站脚本攻击 (cross-site scripting，CSS) 的风险，但它的问题在于一刀切地禁止了跨源请求。这就导致人们使用一些非常规的手段来诱使浏览器生成违反这一策略的请求。 跨源资源共享 (Cross-Origin Resourece Sharing，CORS) 规范提供了一种合法的方式来生成跨源请求。 作为 CORS 的一部分，浏览器会给请求添加一个 Origin 标头以注明当前文档的来源。可以通过它来更灵活地设置 Access-Control-Allow-Origin 标头的值

## 中止请求

XMLHttpReques 的 abort 方法

| 成员    | 说明           |
| :------ | :------------- |
| abort() | 中断当前的请求 |

# 第 33 章 使用 Ajax (第 Ⅱ 部分)

## 准备向服务器发送数据

## 发送表单数据

向服务器发送数据的最基本方式是自己收集数据并格式化它

```javascript
var formData = "";
var inputElements = document.getElementsByTagName("input");
for (var i = 0; i < inputElements.length; i++) {
    formData += inputElements[i].name + "=" + inputElements[i].value + "&";
}

var httpRequest = new XMLHttpRequest();
httpRequest.open("post","/login");
httpRequest.send(formData);
```

## 使用 FormData 对象发送表单数据

```javascript
var formData = new FormData(document.getElementById("myfrom"));

var httpRequest = new XMLHttpRequest();
httpRequest.open("post","/login");
httpRequest.send(formData);
```

FormData 对象定义了一个发放，它允许你给要发送到服务器的数据添加名称 / 值对

XMLHttpRequest 对象中与标头有关的方法

| 方法                      | 说明                 |
| :------------------------ | :------------------- |
| `append(<name>, <value>)` | 给数据集附加名称和值 |

可以使用 append 增补从表单中收集的数据，也可以在不使用 HTMLFormElement 对象的情况下创建 FormData 对象。这就意味着可以使用 append 方法来选择向客户端发送哪些数据

```javascript
var formData = new FormData();
var inputElements = document.getElementsByTagName("input");
for (var i = 0; i < inputElements.length; i++) {
    formData.append(inputElements[i].name, inputElements[i].value);
}

var httpRequest = new XMLHttpRequest();
httpRequest.open("post","/login");
httpRequest.send(formData);
```

## 发送 JSON 数据

JavaScript 对象表示法 (JavaScrip Object Notation，JSON)

JSON 对象定义的方法

| 方法                  | 说明                                   |
| :-------------------- | :------------------------------------- |
| `parse(<json>)`       | 解析用 JSON 编码的字符串并创建一个对象 |
| `stringify(<object>)` | 为指定的对象创建用 JSON 编码的数据表示 |

为了告诉服务器客户端发送的是 JSON 数据，需要在 send 前把请求的 Content-Type 标头设置为 application/json

```javascript
var formData = new Object();
var inputElements = document.getElementsByTagName("input");
for (var i = 0; i < inputElements.length; i++) {
    formData[inputElements[i].name] = inputElements[i].value;
}

var httpRequest = new XMLHttpRequest();
httpRequest.open("post", "/login");
httpRequest.setRequestHeader("Content-Type", "application.json");
httpRequest.send(JSON.stringify(formData));
```

## 发送文件

可以使用 FormData 对象和 type 属性为 file 的 input 元素向服务器发送文件。当表单提交时 FormData 对象会自动确保用户选择的文件内容与其他的表单值一同上传。

## 追踪上传进度

可以在数据发送到服务器时追踪它的进度。具体的做法是使用 XMLHttpRequest 对象的 uploda 属性

upload 属性

| 名称   | 说明                         |
| :----- | :--------------------------- |
| upload | 返回一个可用于监控进度的对象 |

upload 属性返回的 XMLHttpRequestUploda 对象只定义了注册事件处理器所需的属性：onprogress、onload 等

```javascript
// <progress id = "prog" value = "0" />

var form = document.getElementById("myform");
var progress = document.getElementById("prog");

var formData = new FormData(form);
var httpRequest = new XMLHttpRequest();

var upload = httpRequest.upload;
upload.onprogress = function (e) {
    progress.max = e.total;
    progress.value = e.loaded;
}
upload.onload = function (e) {
    progress.value = 1;
    progress.max = 1;
}

httpRequest.open("post", "/login");
httpRequest.send(formData);
```

## 请求并处理不同内容类型

接收 HTML 片段：

```javascript
var httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = handleResponse;

......

httpRequest.send();

function handleResponse() {
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        httpRequest.overrideMimeType("text/html");
        document.getElementById("results").innerHTML = httpRequest.responseText;
    }
}
```

接收 XML 数据

```javascript
var httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = handleResponse;

......

httpRequest.send();

function handleResponse() {
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        httpRequest.overrideMimeType("application/xml");
        var xmlDoc = httpRequest.responseXML;
        var val = xmlDoc.getElementsByTagName("root")[0].getAttribute("userName");
        document.getElementById("results").innerHTML = val;
    }
}
```

接收 JSON 数据

```javascript
var httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = handleResponse;

......

httpRequest.send();

function handleResponse() {
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        var data = JSON.parse(httpRequest.responseText);
        document.getElementById("results").innerHTML = data.userName;
    }
}
```

# 第 34 章 使用多媒体

## 使用 video 元素

video 元素的属性

| 属性     | 说明                                             |
| :------- | :----------------------------------------------- |
| autoplay | 如果存在，此属性会使浏览器尽可能立刻开始播放视频 |
| preload  | 告诉浏览器是否要预先载入视频                     |
| controls | 除非此属性存在，否则浏览器不会显示播放控件       |
| loop     | 如果存在，此属性会让浏览器反复播放视频           |
| poster   | 指定在视频数据载入时显示的图片                   |
| height   | 指定视频的高度                                   |
| width    | 指定视频的宽度                                   |
| muted    | 如果此属性存在，视频从一开始就会处于静音状态     |
| src      | 指定要显示的视频                                 |

preload 属性所允许的值

| 值       | 说明                                                         |
| :------- | :----------------------------------------------------------- |
| none     | 用户开始播放之前不会载入视频                                 |
| metadata | 用户开始播放之前只能载入视频的元数据 (宽度、高度、第一帧、长度和其他此类信息) |
| auto     | 要求浏览器尽快下载整个视频。浏览器可以忽略这个请求           |

可以在 video 标签中嵌入多个 sourece 元素，以指定多个播放源为浏览器提供备选视频格式。浏览器会沿着列表顺序寻找它能够播放的视频文件

sourece 元素的属性

| 属性  | 说明                                         |
| :---- | :------------------------------------------- |
| src   | 指定要显示的媒体文件源                       |
| type  | 指定文件的 MIME 类型                         |
| media | 向浏览器指明该媒体文件最适合在哪种设备上播放 |

HTML5 规范包含了 track 元素，它提供了一套视频相内容的实现机制。这些内容包括字幕、说明和章节标题

## 使用 audio 元素

audio 元素和 video 元素有许多共同点

## 通过 DOM 操作嵌入式媒体

audio 和 video 元素有着很大的相似性，所以 HTMLMediaElement 对象在 DOM 里为它们统一定义了核心功能。 audio 元素在 DOM 里由 HTMLAudioElement 对象所代表，但此对象没有定义不同于 HTMLMediaElement 的额外功能。video 元素由 HTMLVideoElement 对象所代表，而它定义了一些额外属性。

HTMLMediaElement 对象的基本成员

| 成员                  | 说明                                     |
| :-------------------- | :--------------------------------------- |
| autoplay              | 获取或设置 autoplay 属性是否存在         |
| `canPlayType(<type>)` | 获取浏览器是否能播放特定 MIME 类型的提示 |
| currentSrc            | 获取当前的来源                           |
| controls              | 获取或设置 controls 属性是否存在         |
| defaultMuted          | 获取或设置 muted 属性一开始是否存在      |
| loop                  | 获取或设置 loop 属性是否存在             |
| muted                 | 获取或设置 muted 属性是否存在            |
| preload               | 获取或设置 preload 属性的值              |
| src                   | 获取或设置 src 属性的值                  |
| volume                | 获取或设置音量，范围从 0.0 到 1.0        |

HTMLVideoElement 对象定义的额外属性

| 成员        | 说明                       |
| :---------- | :------------------------- |
| height      | 获取或设置 height 属性的值 |
| width       | 获取或设置 width 属性的值  |
| poster      | 获取或设置 poster 属性的值 |
| videoHeight | 获取视频的原始高度         |
| videoWidth  | 获取视频的原始宽度         |

canPlayType 方法可以用来了解浏览器是否能够播放特定的媒体格式。

canPlayType 属性所允许的值

| 值           | 说明                             |
| :----------- | :------------------------------- |
| ""(空字符串) | 浏览器无法播放该媒体类型         |
| maybe        | 浏览器也许可以播放该媒体类型     |
| probably     | 浏览器有相当把握能播放该媒体类型 |

HTMLMediaElement 对象定义了许多成员，它们让你能够控制回放和获得回放信息

HTMLMediaElement 对象的回放成员

| 成员         | 说明                                    |
| :----------- | :-------------------------------------- |
| currentTimes | 返回媒体文件当前的回放点                |
| duration     | 返回媒体文件的总时长                    |
| ended        | 如果媒体文件已经播放完毕则返回 true     |
| pause()      | 暂停媒体回放                            |
| paused       | 如果回放暂停就返回 true，否则返回 false |
| play()       | 开始媒体播放                            |

# 第 35 章 用 canvas 元素 (第 Ⅰ 部分)

## 开始使用 canvas 元素

canvas 元素非常简单，这是指它所有的功能都体现在一个 JavaScript 对象上，因此该元素本身只有两个属性 `widht` 和 `height`

## 获取画布上下文

为了在 canvas 元素上绘画，我们需要获得一个上下文对象，这个对象会开放针对特定图形样式的绘画函数。 通过在 DOM 里代表 canvas 元素的对象获取上下文。

HTMLCanvasElement 对象

| 成员                    | 说明                 |
| :---------------------- | :------------------- |
| height                  | 对应于 height 属性   |
| width                   | 对应于 width 属性    |
| `getContext(<context>)` | 为画布返回绘画上下文 |

```html
<body>
    <canvas id="canvas" width="500" height="140">
        Your browser doesn't support the <code>canvas</code> element.
    </canvas>
<script>
    var context = document.getElementById("canvas").getContext("2d");
    context.fillRect(10, 10, 50, 50);
</script>
</body>
```

## 绘制矩形

简单的图形方法

| 成员                   | 说明             |
| :--------------------- | :--------------- |
| clearRect(x, y, w, h)  | 清楚指定的矩形   |
| fillRect(x, y, w, h)   | 绘制一个实心矩形 |
| strokeRect(x, y, w, h) | 绘制一个空心矩形 |

所有这三个方法都需要四个参数。前两个是从 canvas 元素左上角算起的偏移量。w 和 h 参数指定了待绘制矩形的宽度和高度。

## 设置画布绘制状态

绘图操作有绘制状态加以配置。后者是一组属性，指定了从线条宽度到填充色的所有参数。当我们绘制一个图形时，就会用到绘制状态的当前设置。

```javascript
var context = document.getElementById("canvas").getContext("2d");

context.lineWidth = 2;
context.strokeRect(10, 10, 50, 50);
context.lineWidth = 8;
context.strokeRect(80, 10, 50, 50);
```

基本的绘制状态属性

| 属性        | 说明                             |
| :---------- | :------------------------------- |
| fillStyle   | 获取或设置用于实心图形的样式     |
| lineJoin    | 获取或设置线条与图形连接时的样式 |
| lineWidth   | 获取或设置线条的宽度             |
| strokeStyle | 获取或设置用于线条的样式         |

lineJoin 属性所允许取的值

| 值    | 说明 |
| :---- | :--- |
| round | 圆角 |
| bevel | 切角 |
| miter | 直角 |

可以使用 css 颜色设置 fillStyle 和 strokeStyle 的颜色。 除了纯色，我们还可以把填充和笔触的样式设置成渐变色。canvas 元素支持两类渐变：线性和径向

渐变方法

| 名称                                         | 说明         |
| :------------------------------------------- | :----------- |
| createLinearGradient(x0, y0, x1, y1)         | 创建线性渐变 |
| createRadialGradient(x0, y0, r0, x1, y1, r1) | 创建径向渐变 |

这两个方法都返回一个 CanvasGradient 对象，它定义了 addColorStop () 方法。其中的参数描述了渐变使用的线条或圆。

CanvasGradient 的方法

| 名称             | 说明                       |
| :--------------- | :------------------------- |
| addColorStop(, ) | 给渐变的梯度线添加一种纯色 |

```javascript
var context = document.getElementById("canvas").getContext("2d");

var grad = context.createLinearGradient(0, 0, 500, 140);
grad.addColorStop(0, "red");
......
grad.addColorStop(1, "black");

context.fillStyle = grad;
context.fillRect(0, 0, 500, 140);
```

我们在定义梯度线时要相对于画布进行设置，而不是绘制的图形。这一点经常会在初期造成混淆

```javascript
// before
var context = document.getElementById("canvas").getContext("2d");

var grad = context.createLinearGradient(0, 0, 500, 140);
grad.addColorStop(0, "red");
......
grad.addColorStop(1, "black");

context.fillStyle = grad;
context.fillRect(10, 10, 50, 50);

// after
var context = document.getElementById("canvas").getContext("2d");

var grad = context.createLinearGradient(10, 10, 60, 60);
grad.addColorStop(0, "red");
......
grad.addColorStop(1, "black");

context.fillStyle = grad;
context.fillRect(10, 10, 50, 50);
```

createRadialGradient 方法的六个参数分别代表：

- 起点圆的圆心坐标 (第一个和第二个参数)
- 起点圆的半径 (第三个参数)
- 终点圆的圆心坐标 (第四个和第五个参数)
- 终点圆的半径 (第六个参数)

```javascript
var context = document.getElementById("canvas").getContext("2d");

var grad = context.createRadialGradient(250, 70, 20, 200, 60, 100);
grad.addColorStop(0, "red");
......
grad.addColorStop(1, "black");

context.fillStyle = grad;
context.fillRect(150, 20, 75, 50);    

context.lineWidth = 8;
context.strokeStyle = grad;
context.strokeRect(250, 20, 75, 50);
```

除了纯色和渐变之外，我们还可以创建图案，具体的做法时使用画布上下文对象所定义的 createPattern 方法。 2D 绘图上下文定义了对三种团类型的支持：图像、视频和画布。但是只有图像得以实现 (而且目前只有 Firefox 和 Opera 浏览器实现了它)。 要将图像作为图案，需要把一个 HTMLImageElement 对象作为第一个参数传递个 createPattern 方法。第二个参数是重复样式，它的值必须是以下之一：

图案的重复值

| 值        | 说明                     |
| :-------- | :----------------------- |
| repeat    | 图像应当被垂直和水平重复 |
| repeat-x  | 图像应当被水平重复       |
| repeat-y  | 图像应当被垂直重复       |
| no-repeat | 图像在图案里不应当被重复 |

```javascript
var context = document.getElementById("canvas").getContext("2d");
var imageElement = document.getElementById("banana");

var pattern = context.createPattern(imageElement, "no-repeat");

context.fillStyle = pattern;
context.fillRect(0, 0, 500, 140);
```

## 保存和恢复绘制状态

保存和恢复状态

| 值        | 说明                                       |
| :-------- | :----------------------------------------- |
| save()    | 保存绘制状态属性的值，并把它们推入状态栈   |
| restore() | 取出状态栈的第一组值，用它们来设置绘制状态 |

绘制状态保存时会被放在一个后进先出 (LIFO) 的栈中，意思是我们用 save 方法最后保存的状态会被 restore 方法首先进行恢复。

```javascript
var context = document.getElementById("canvas").getContext("2d");

context.fillStyle = "red";
context.save();    
context.fillRect(10, 10, 20, 20);

context.fillStyle = "green";
context.fillRect(40, 10, 20, 20);

context.restore();
context.fillRect(70, 10, 20, 20);
```

画布里的内容不会被保存或恢复，只有绘制状态的属性值才会。

## 绘制图像

可以用 drawImage 方法在画布上绘制图像。这个方法需要三个、五个或九个参数。第一个参数始终是图像的来源，它可以是代表 img、video 或其他 canvas 元素的 DOM 对象。

```javascript
var context = document.getElementById("canvas").getContext("2d");
var imageElement = document.getElementById("banana");

context.drawImage(imageElement, 10, 10);
```

使用三个参数时，第二个和第三个参数给出了图像应当在画布上绘制的坐标。图像按照它原始的宽度和高度进行绘制。 使用五个参数时，额外的参数指定了应当给图像绘制的宽度和高度，以代替原尺寸。 使用九个参数时：

- 第二个和第三个参数是在源图像内的偏移量
- 第四个和第五个参数时源图像所需使用区域的宽度和高度
- 第六个和第七个参数指定了所选区域的左上角将要在画布上绘制的坐标
- 第八个和第九个参数指定了所选区域将要绘制的宽度和高度

我们也可以用 video 元素作为 drawImage 方法的图像来源，这么做其实是对视频做了截图。当前的视频帧会被 drawImage 方法用来描绘桌面 我们还可以将一张画布的内容作为另一张里的 drawImage 方法的来源。

# 第 36 章 使用 canvas 元素 (第 Ⅱ 部分)

## 用路径绘图

基本路径方法

| 名称                | 说明                                                         |
| :------------------ | :----------------------------------------------------------- |
| beginPath()         | 开始一条新路径                                               |
| closePath()         | 尝试闭合现有路径，方法是绘制一条线，连接最后那条线的终点与初始坐标 |
| fill()              | 填充用子路径描述的图形                                       |
| isPointInPath(x, y) | 如果指定的点在当前路径所描述的图形之内则返回 true            |
| lineTo(x, y)        | 绘制一条到指定坐标的自路径                                   |
| moveTo(x, y)        | 移动到指定坐标而不绘制自路径                                 |
| rect(x, y, w, h)    | 绘制一个矩形，其左上角位于 (x, y)，宽度是 w，高度是 h        |
| stroke()            | 给子路径描述的图形绘制轮廓线                                 |

绘制一条路径的基本顺序如下：

- 调用 beginPath 方法
- 用 moveTo 方法移动到起点
- 用 arc 和 lineTo 等方法绘制子路径
- 调用 colsePath 方法 (可选)
- 调用 fill 或 stroke 方法

```javascript
var context = document.getElementById("canvas").getContext("2d");

context.fillStyle = "yellow";
context.strokeStyle = "red";
context.lineWidth = 2;

context.beginPath();
context.moveTo(10, 10);
context.lineTo(10, 100);
context.lineTo(100, 100);
// context.lineTo(100, 10);
// context.lineTo(10, 10);    

// context.closePath();
context.fill();
context.stroke();

context.beginPath();
context.moveTo(150, 10);
context.lineTo(150, 100);
context.lineWidth = 10;
context.lineCap = "round";  
context.stroke(); 
```

在绘制线条或未闭合图形时可以使用 lineCap 属性来设置线条末端的样式

lineCap 属性的值

| 值     | 说明   |
| :----- | :----- |
| butt   | 默认值 |
| round  | 圆形   |
| square | 方形   |

rect 用于绘制多个矩形的情况，使用 rect 方法时不需要使用 moveTo 方法，因为在此方法的前两个参数里已经指定了矩形的坐标

## 绘制圆弧

可以使用 arc 和 arcTo 方法绘制圆弧

圆弧方法

| 名称                                            | 说明                                                         |
| :---------------------------------------------- | :----------------------------------------------------------- |
| arc(x, y, rad, startAngle, endAngle, direction) | 绘制一段圆弧到 (x, y)，半径为 rad，起始角度为 startAngle，结束角度为 endAngle。可选参数 direction 指定了圆弧的方向 |
| arcTo(x1, y1, x2, y2, rad)                      | 绘制一段半径为 rad，经过 (x1 ,y1)，直到 (x2, y2) 的圆弧      |

arcTo 方法绘制的圆弧依靠两条线完成。第一条线是从上一条子路径的终点绘制到前两个方法参数所描述的点。第二条线是从前两个方法参数所描述的点绘制到第三个和第四个参数所描述的点。然后 canvas 会绘制从上一条子路径的终点到第二个点之间最短的一条圆弧，其半径由最后一个参数指定。

```javascript
var context = document.getElementById("canvas").getContext("2d");

context.fillStyle = "yellow";
context.lineWidth = 1.5;
var point1 = [100, 10], point2 = [200, 10], point3 = [200, 110];

context.beginPath();
context.strokeStyle = "blue";    
context.moveTo(point1[0], point1[1]);    
context.lineTo(point2[0], point2[1]);
context.stroke();

context.beginPath();
context.strokeStyle = "purple";    
context.moveTo(point2[0], point2[1]);    
context.lineTo(point3[0], point3[1]);
context.stroke(); 

context.beginPath();
context.strokeStyle = "red";    
context.moveTo(point1[0], point1[1]);
context.arcTo(point2[0], point2[1], point3[0], point3[1], 100)
context.stroke();  
```

响应鼠标移动

```javascript
var canvasElement = document.getElementById("canvas");
var context = canvasElement.getContext("2d");

context.fillStyle = "yellow";
context.lineWidth = 1.5;
var point1 = [100, 10], point2 = [200, 10], point3 = [200, 110];

draw();

canvasElement.onmousemove = function (e) {
    if (e.ctrlKey) {
        point1 = [e.clientX, e.clientY];
    }
    else if (e.shiftKey) {
        point2 = [e.clientX, e.clientY];
    }
    else {
        point3 = [e.clientX, e.clientY];
    }

    context.clearRect(0, 0, 540, 140);
    draw();
}

function draw() {
    context.beginPath();
    context.strokeStyle = "blue";
    context.moveTo(point1[0], point1[1]);
    context.lineTo(point2[0], point2[1]);
    context.stroke();

    context.beginPath();
    context.strokeStyle = "purple";
    context.moveTo(point2[0], point2[1]);
    context.lineTo(point3[0], point3[1]);
    context.stroke();

    context.beginPath();
    context.strokeStyle = "red";
    context.moveTo(point1[0], point1[1]);
    context.arcTo(point2[0], point2[1], point3[0], point3[1], 50)
    context.stroke();
}
```

cra 方法使用起来略微简单一些。只需用前两个方法参数在画布上指定一个点。用第三个参数指定圆弧的半径，然后指定圆弧的起始和结束教区，最后一个参数指定绘制圆弧时是按顺时针还是逆时针方向

```javascript
var context = document.getElementById("canvas").getContext("2d");

context.fillStyle = "yellow";
context.strokeStyle = "red";
context.lineWidth = .5;

context.beginPath();
context.arc(70, 70, 60, 0, Math.PI * 2, true);
context.fill();
context.stroke();

context.beginPath();
context.arc(220, 70, 60, Math.PI / 2, Math.PI, true);
context.fill();
context.stroke();

context.beginPath();
var val = 0;
for (var i = 0; i < 4; i++) {
    context.arc(370, 70, 60, val, val + Math.PI / 4, false);
    val += Math.PI / 2;
}
context.closePath();
context.fill();
context.stroke();
```

## 绘制贝塞尔曲线

canvas 支持绘制两种贝塞尔曲线：三次和二次

曲线方法

| 名称                                    | 说明                                                         |
| :-------------------------------------- | :----------------------------------------------------------- |
| bezierCurveTo(cx1, xy1, cx2, cy2, x, y) | 绘制一段贝塞尔曲线到点 (x, y)，控制点为 (cx1, cy1) 和 (cx2, cy2) |
| quadraticCurveTo(cx, cy, x, y)          | 绘制一段二次贝塞尔曲线到点 (x, y)，控制点为 (cx, cy)         |

```javascript
var canvasElement = document.getElementById("canvas");
var context = canvasElement.getContext("2d");

var startPoint = [50, 100], endPoint = [400, 100], cp1 = [250, 50], cp2 = [350, 50];

draw();

canvasElement.onmousemove = function (e) {
    if (e.shiftKey) {
        cp1 = [e.clientX, e.clientY];
    }
    else if (e.ctrlKey) {
        cp2 = [e.clientX, e.clientY];
    }

    context.clearRect(0, 0, 540, 140);
    draw();
}

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "blue";

    context.beginPath();
    context.moveTo(startPoint[0], startPoint[1]);
    context.bezierCurveTo(cp1[0], cp1[1], cp2[0], cp2[1], endPoint[0], endPoint[1]);
    context.stroke();

    context.lineWidth = 2;
    context.strokeStyle = "red";
    var points = [startPoint, endPoint, cp1, cp2];
    for (var i = 0; i < points.length; i++) {
        drawPoint(points[i]);
    }
    drawLine(startPoint, cp1);
    drawLine(endPoint, cp2);
}

function drawPoint(point) {
    context.beginPath();
    context.strokeRect(point[0] - 2, point[1] - 2, 4, 4)
}

function drawLine(from, to) {
    context.beginPath();
    context.moveTo(from[0], from[1]);
    context.lineTo(to[0], to[1]);
    context.stroke();
}
var canvasElement = document.getElementById("canvas");
var context = canvasElement.getContext("2d");

var startPoint = [50, 100], endPoint = [400, 100], cp1 = [250, 50];

draw();

canvasElement.onmousemove = function (e) {
    if (e.shiftKey) {
        cp1 = [e.clientX, e.clientY];
    }
    else if (e.ctrlKey) {
        cp2 = [e.clientX, e.clientY];
    }

    context.clearRect(0, 0, 540, 140);
    draw();
}

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "blue";

    context.beginPath();
    context.moveTo(startPoint[0], startPoint[1]);
    context.quadraticCurveTo(cp1[0], cp1[1], endPoint[0], endPoint[1]);
    context.stroke();

    context.lineWidth = 2;
    context.strokeStyle = "red";
    var points = [startPoint, endPoint, cp1];
    for (var i = 0; i < points.length; i++) {
        drawPoint(points[i]);
    }
    drawLine(startPoint, cp1);
}

function drawPoint(point) {
    context.beginPath();
    context.strokeRect(point[0] - 2, point[1] - 2, 4, 4)
}

function drawLine(from, to) {
    context.beginPath();
    context.moveTo(from[0], from[1]);
    context.lineTo(to[0], to[1]);
    context.stroke();
}
```

## 创建剪辑区域

前面介绍过，可以用 stroke 和 fill 方法来绘制或填充一条路径。还有另外一种方式可以做到这一点，俺就是 clip 方法

裁剪方法

| 名称   | 说明             |
| :----- | :--------------- |
| clip() | 创建新的裁剪区域 |

一旦定义了一块裁剪区域，就只有区域内的路径才会显示到屏幕上了

```javascript
var context = document.getElementById("canvas").getContext("2d");

context.fillStyle='yellow';
context.beginPath();
context.rect(0, 0, 540, 140);
context.fill();

context.beginPath();
context.rect(100, 20, 300, 100)
context.clip();

context.fillStyle='red';
context.beginPath();
context.rect(0, 0, 540, 140);
context.fill();
```

## 绘制文本

文本方法

| 名称                              | 说明                                                         |
| :-------------------------------- | :----------------------------------------------------------- |
| `fillText(<text>, x, y, width)`   | 在位置 (x, y) 上绘制并填充指定文本。宽度参数是可选的，它设置了文本宽度的上限 |
| `strokeText(<text>, x, y, width)` | 在位置 (x, y) 上绘制并描边指定文本。宽度参数是可选的，它设置了文本宽度的上限 |

可以使用三种绘制状态属性来控制文本绘制方向

| 名称         | 说明                                                         |
| :----------- | :----------------------------------------------------------- |
| font         | 设置绘制文本时使用的字体                                     |
| textAlign    | 设置文本的对齐方式：start、end、left、right、center          |
| textBaseline | 设置文本的基线：top、hanging、middle、alphabetic、ideographic、bottom |

```javascript
var context = document.getElementById("canvas").getContext("2d");

context.fillStyle="lightgrey";
context.strokeStyle = "black";
context.lineWidth = 3;

context.font = "100px sans-serif";
context.fillText("Hello", 50, 100);
context.strokeText("Hello", 50, 100);
```

## 使用特效和变换

阴影属性

| 名称          | 说明                 |
| :------------ | :------------------- |
| shadowBlur    | 设置阴影的模糊程度   |
| shadowColor   | 设置阴影颜色         |
| shadowOffsetX | 设置阴影的水平偏移量 |
| shadowOffsetY | 设置阴影的垂直偏移量 |

可以通过为 fillStyle 或 strokeStyle 指定一个 rgba 值，来设置文本和图形的透明度，还可以使用绘制状态属性 `globalAlpha`

```javascript
var context = document.getElementById("canvas").getContext("2d");

context.fillStyle="lightgrey";
// context.fillStyle="rgba(255, 0, 0, 0.5)";    
context.globalAlpha = 0.5;
context.strokeStyle = "black";
context.lineWidth = 3;

context.shadowOffsetX= 5;
context.shadowOffsetY= 5;
context.shadowBlur = 5;
context.shadowColor = "grey";

context.strokeRect(250, 20, 100, 100);

context.beginPath();
context.arc(430, 70, 50, 0, Math.PI, true);
context.stroke();

context.beginPath();
context.arc(430, 80, 40, 0, Math.PI, false);
context.fill();

context.font = "80px sans-serif";
context.fillText("Hello", 10, 100);
context.strokeText("Hello", 10, 100);
```

可以将透明度和 globalCompositeOperation 属性结合使用，来控制图形和文本在画布上绘制的方式。

globalCompositeOperation 允许的值

| 值               | 说明                                                         |
| :--------------- | :----------------------------------------------------------- |
| copy             | 将来源绘制于目标之上，忽略一切透明度设置                     |
| destination-atop | 与 source-atop 相同，但用目标图像来代替源图像，反之亦然      |
| destination-in   | 与 source-in 相同，但用目标图像来代替源图像，反之亦然        |
| destination-over | 与 source-over 相同，但用目标图像来代替源图像，反之亦然      |
| destination-out  | 与 source-out 相同，但用目标图像来代替源图像，反之亦然       |
| lighter          | 显示来源图像和目标图像的总和，颜色值限制最高 255 (100%)      |
| source-atop      | 在两个图像都不透明处显示来源图像，目标图像不透明但来源图像透明处显示目标图像。其他位置显示为透明 |
| source-in        | 来源图像和目标图像都不透明处显示来源图像，其他位置显示为透明 |
| source-out       | 来源图像不透明但目标图像透明处显示来源图像。其他位置显示为透明 |
| source-over      | 来源图像不透明处显示来源图像。其他位置显示目标图像           |
| xor              | 对来源图像和目标图像执行异或运算                             |

```html
<body>
    <canvas id="canvas" width="540" height="140">
        Your browser doesn't support the
        <code>canvas</code> element.
    </canvas>
    <label>Composite Value:</label>
    <select id="list">
        <option>copy</option>
        <option>destination-atop</option>
        <option>destination-in</option>
        <option>destination-over</option>
        <option>destination-out</option>
        <option>lighter</option>
        <option>source-atop</option>
        <option>source-in</option>
        <option>source-out</option>
        <option>source-over</option>
        <option>xor</option>
    </select>
<script>
    var context = document.getElementById("canvas").getContext("2d");

    context.fillStyle = "lightgrey";
    context.strokeStyle = "black";
    context.lineWidth = 3;

    var compVal = "copy";
    document.getElementById("list").onchange = function (e) {
        compVal = e.target.value;
        draw();
    }

    function draw() {
        context.clearRect(0, 0, 540, 140);
        context.globalAlpha = 1.0;
        context.font = "100px sans-serif";
        context.fillText("Hellow", 10, 100);
        context.fillText("Hellow", 10, 100);

        context.globalCompositeOperation = compVal;

        context.fillStyle = "red";
        context.globalAlpha = 0.5;
        context.fillRect(100, 10, 150, 100);
    }
</body>    
</script>
```

我们可以给画布应用变换，它会应用到后续所有绘图操作上

变换属性

| 名称                           | 说明                                                 |
| :----------------------------- | :--------------------------------------------------- |
| `scale(<xScale>, <yScale>)`    | 沿 X 轴缩放画布 xScale 倍，沿 Y 轴缩放画布 yScale 倍 |
| `rotate(<angle>)`              | 使画布围绕点 (0, 0) 顺时针旋转指定的弧度数           |
| `translate(<x>, <y>)`          | 重映射画布坐标为沿 X 轴 x，沿 Y 轴 y                 |
| transform(a, b, c, d, e, f)    | 合并现有的变换和 a-f 值所指定的矩阵                  |
| setTransform(a, b, c, d, e, f) | 用 a-f 值所指定的矩阵替换现有的变换                  |

这些方法创建的变换只会应用到后续的绘图操作上，画布上现有的内容保持不变

```javascript
var context = document.getElementById("canvas").getContext("2d");

context.fillStyle = "lightgrey";
context.strokeStyle = "black";
context.lineWidth = 3;

context.clearRect(0, 0, 540, 140);
context.globalAlpha = 1.0;
context.font = "100px sans-serif";
context.fillText("Hellow", 10, 100);
context.fillText("Hellow", 10, 100);

context.scale(1.3, 1.3);
context.translate(100, -50);
context.rotate(0.5);

context.fillStyle = "red";
context.globalAlpha = 0.5;
context.fillRect(100, 10, 150, 100);
```

# 第 37 章 使用拖放

## 创建来源项目

通过 draggable 属性告诉浏览器文档里的哪些元素可以被拖动

draggable 属性的值

| 值    | 说明                                   |
| :---- | :------------------------------------- |
| true  | 此元素能被拖动                         |
| false | 此元素不能被拖动                       |
| auto  | 浏览器可以自主决定某个元素是否能被拖动 |

可以通过一系列事件来利用拖放功能。这些事件有的针对被拖动的元素，有的针对可能的释放区

被拖动元素的事件

| 名称      | 说明                   |
| :-------- | :--------------------- |
| dragstart | 在元素开始被拖动时触发 |
| drag      | 在元素被拖动时反复触发 |
| dragend   | 在拖动操作完成时触发   |

## 创建释放区

要让某个元素成为释放区，需要处理 dragenter 和 dragover 事件。它们是针对释放区的其中两个事件

释放区事件

| 名称      | 说明                                         |
| :-------- | :------------------------------------------- |
| dragenter | 当被拖动元素进入释放区所占据的屏幕空间时触发 |
| dragover  | 当被拖动元素在释放区内移动时触发             |
| dragleave | 当被拖动元素没有放下就离开释放区时触发       |
| drop      | 当被拖动元素在释放区里放下时触发             |

dragenter 和 dragover 事件的默认行为是拒绝接受任何被拖放的项目，因此我们必须要做的最重要的事就是防止这种默认行为被执行

```html
<head>
    <meta charset="utf-8" />
    <style>
        #square {
            width: 26px;
            height: 26px;
            background-color: cornflowerblue;
            border: 2px solid whitesmoke;
            float: left;
        }

        #target {
            width: 180px;
            height: 180px;
            border: 2px solid whitesmoke;
        }
    </style>
</head>

<body>
    <div id="target"></div>
    <div id="square" draggable="true"></div>
<script>
    var square = document.getElementById("square");
    var target = document.getElementById("target");
    var draggedID;

    target.ondragenter = handleDrag;
    target.ondragover = handleDrag;

    function handleDrag(e) {
        e.preventDefault();
    }

    target.ondrop = function (e) {
        var newElem = document.getElementById(draggedID).cloneNode(false);
        //target.innerHTML = "";
        target.appendChild(newElem);

        e.preventDefault();
    }

    square.ondragstart = function (e) {
        draggedID = e.target.id;
    }
</script>
</body>
```

## 使用 DataTransfer 对象

与拖放操作所触发的事件同时派发的对象是 DragEvent，它派生于 MouseEvent。DragEvent 对象定义了 Event 与 MouseEvent 对象的所有功能

DragEvent 对象定义的属性

| 名称         | 说明                           |
| :----------- | :----------------------------- |
| dataTransfer | 返回用于传输数据到释放区的对象 |

我们可以用 DataTransfer 对象从被拖动元素传输任意数据到释放区元素上

DataTransfer 对象定义的属性

| 名称                        | 说明                   |
| :-------------------------- | :--------------------- |
| types                       | 返回数据的格式         |
| `getData(<format>)`         | 返回指定格式的数据     |
| `setData(<format>, <data>)` | 设置指定格式的数据     |
| `clearData(<format>)`       | 移除指定格式的数据     |
| files                       | 返回已被拖动文件的列表 |

```javascript
var square = document.getElementById("square");
var target = document.getElementById("target");

target.ondragenter = handleDrag;
target.ondragover = handleDrag;

function handleDrag(e) {
    e.preventDefault();
}

target.ondrop = function (e) {
    var draggedID = e.dataTransfer.getData("Text");
    var newElem = document.getElementById(draggedID).cloneNode(false);
    //target.innerHTML = "";
    target.appendChild(newElem);

    e.preventDefault();
}

square.ondragstart = function (e) {
    e.dataTransfer.setData("Text",e.target.id)
}
```

你可能会觉得奇怪：为什么这种方式比使用全局变量更好？答案是它能够跨浏览器工作。 这里的意思不是指跨同一个浏览器里的窗口或标签页，而是横跨不同类型的浏览器。这意味着我们可以从 Chrome 浏览器的文档里拖动一个元素，然后在 Firefox 浏览器的文档里释放它，因为拖放功能的支持是集成在操作系统里的，有着相同的特性。

可以用 DataTransfer 对象里存放的数据来选择我们愿意在释放区接受哪些种类的数据

```javascript
var square = document.getElementById("square");
var target = document.getElementById("target");

target.ondragenter = handleDrag;
target.ondragover = handleDrag;

function handleDrag(e) {
    if (e.target.dataTransfer.getData("Text") == "target") {
        e.preventDefault();
    }
}

target.ondrop = function (e) {
    var draggedID = e.dataTransfer.getData("Text");
    var newElem = document.getElementById(draggedID).cloneNode(false);
    //target.innerHTML = "";
    target.appendChild(newElem);

    e.preventDefault();
}

square.ondragstart = function (e) {
    e.dataTransfer.setData("Text", e.target.id)
}
```

\* 这种过滤方式在 Chrome 浏览器里不可用，因为在 dragenter 和 dragover 事件的处理函数里调用 getData 方法是无效的

拖放文件 HTML5 提供的文件 API 允许我们使用本机文件，不过是以严格受控的方式

```html
<body>
    <div id="target"></div>
    <div id="plan"></div>
<script>
    var target = document.getElementById("target");

    target.ondragenter = handleDrag;
    target.ondragover = handleDrag;

    function handleDrag(e) {
        e.preventDefault();
    }

    target.ondrop = function (e) {
        e.preventDefault();

        var files = e.dataTransfer.files;
        var plan = document.getElementById("target");
        for (var i = 0; i < files.length; i++) {
            plan.innerHTML += "<p>Name:" + files[i].name + "    Type:  " + files[i].type + "    Size:" + files[i].size + "</p>";
        }
    }
</script>
</body>
```

当用户把文件放入我们的释放区域时，DataTransfer 对象的文件属性会返回一个 FileList 对象，其中可包含多个 File 对象

File 对象定义的属性

| 名称 | 说明                           |
| :--- | :----------------------------- |
| name | 获取文件名                     |
| type | 获取文件类型，以 MIME 类型计算 |
| size | 获取文件大小 (KB)              |

在表单里上传被释放的文件

```html
<body>
    <div id="target"></div>
    <div id="plan"></div>

    <form id="form">
        <input type="file" id="file" name="file" />
        <input type="submit" id="file" name="file" value="submit" />
    </form>
<script>
    var target = document.getElementById("target");

    target.ondragenter = handleDrag;
    target.ondragover = handleDrag;

    function handleDrag(e) {
        e.preventDefault();
    }

    document.getElementById("submit").onclick = response;

    var fileList;

    target.ondrop = function (e) {
        e.preventDefault();

        fileList = e.dataTransfer.files;
    }

    function response(e) {
        e.preventDefault();

        var form = document.getElementById("form");
        var formData = new FormData(form);
        if (fileList || true) {
            for (var i = 0; i < fileList.length; i++) {
                formData.append("file" + i, fileList[i]);
            }
        }

        var httpRequest = new XMLHttpRequest();
        httpRequest.open("POST", form.action);
        httpRequest.send(formData);
    }
</script>
</body>
```

# 第 38 章 使用地理位置

## 使用地理定位

我们通过 navigator.geolocation 访问地理定位功能，它会返回一个 Geolocation 对象

Geolocation 对象

| 名称                                                 | 说明             |
| :--------------------------------------------------- | :--------------- |
| getCurrentPosition(callback, errorCallback, options) | 获取当前位置     |
| watchPosition(callback, error, options)              | 开始监控当前位置 |
| clearWatch(id)                                       | 停止监控当前位置 |

getCurrentPosition 方法能获取当前位置，不过位置信息不是由函数自身返回的。我们需要提供一个成功的回调函数，它会在位置信息可用时触发 (这样做考虑到了请求位置信息和信息变得可用之间可能会有延迟)，并返回一个 Position 对象

Position 对象

| 名称      | 说明                                          |
| :-------- | :-------------------------------------------- |
| coords    | 返回当前位置的坐标，这是一个 Coordinates 对象 |
| timestamp | 返回获取坐标信息的时间                        |

Coordinates 对象

| 名称             | 说明                        |
| :--------------- | :-------------------------- |
| latitude         | 返回用十进制表示的纬度      |
| longitude        | 返回用十进制表示的经度      |
| altitude         | 返回用米表示的海拔高度      |
| accuracy         | 返回用米表示的坐标精度      |
| altitudeAccuracy | 返回用米表示的海拔精度      |
| heading          | 返回用度表示的行进方向      |
| speed            | 返回用米 / 秒表示的行进速度 |

Chrome、Firefox 和 Opera 浏览器都使用 Google 的地理定位服务，Internet Explore 和 Safari 则使用它们自己的

```html
<body>
    <div id="geolocation"></div>
<script>
    navigator.geolocation.getCurrentPosition(displayPosition);

    function displayPosition(pos) {
        var properties = ["longitude", "latitude", "altitude", "accuracy", "altitudeAccuracy", "heading", "speed"];

        for (var i = 0; i < properties.length; i++) {
            document.getElementById("geolocation").innerHTML += "<p>" + properties[i] + ":" + pos.coords[properties[i]] + "</p>";
        }
    }
</script>
</body>
```

## 处理地理定位错误

我们可以给 getCurrentPosition 方法提供第二个参数，它让我们可以指定一个函数，在获取位置发生错误时调用它。此函数会获得一个 PositionError 对象

PositionError 对象

| 名称    | 说明                   |
| :------ | :--------------------- |
| code    | 返回代表错误类型的代码 |
| message | 返回描述错误的字符串   |

code 属性有 3 个可能的值

PositionError.code 属性的值

| 值   | 说明                       |
| :--- | :------------------------- |
| 1    | 用户未授权使用地理定位功能 |
| 2    | 不能确定位置               |
| 3    | 请求位置的尝试已超时       |

```html
<body>
    <div id="geolocation"></div>
<script>
    navigator.geolocation.getCurrentPosition(displayPosition, handleError);

    ......

    function handleError(err) {
        document.getElementById("geolocation").innerHTML += "<p>Error code:" + err.code +"</p>";
        document.getElementById("geolocation").innerHTML += "<p>Error Message:" + err.message +"</p>";
    }
</script>
</body>
```

## 指定地理定位选项

我们可以给 getCurrentPosition 方法提供的第三个参数是一个 PositionOptions 对象，这个对象允许我们可以控制部分位置信息的获取方式

PositionOptions 对象

| 名称               | 说明                                                         |
| :----------------- | :----------------------------------------------------------- |
| enableHighAccuracy | 告诉浏览器我们希望得到可能的最佳结果                         |
| timeout            | 限制请求位置的时间，设置多少毫秒后会报告一个超时错误         |
| maximumAge         | 告诉浏览器我们愿意接受缓存过的位置，只要它不早于指定的毫秒数 |

```html
<body>
    <div id="geolocation"></div>
<script>

    var options = {
        enableHighAccuracy: false,
        timeout: 2000,
        maximumAge: 30000
    };

    navigator.geolocation.getCurrentPosition(displayPosition, handleError, options);

    ......
</script>
</body>
```

## 监控位置

可以使用 watchPosition 方法不断获得关于位置的更新。这个方法所需的参数和 getCurrentPosition 方法相同，工作方式也一样。 它们的区别在于：随着位置发生改变，回调函数会被反复地调用。 当想要停止监控时，可以把 watchPosition 方法返回的 ID 值传递给 clearWatch 方法

```html
<body>
    <div id="geolocation"></div>
    <button id="pressme">Cancel Watch</button>
<script>
    var options = {
        enableHighAccuracy: false,
        timeout: 2000,
        maximumAge: 30000
    };

    var watchID = navigator.geolocation.watchPosition(displayPosition, handleError, options);

    document.getElementById("pressme").onclick = function (e) {
        navigator.geolocation.clearWatch(watchID);
    };

    function displayPosition(pos) {
        var properties = ["longitude", "latitude", "altitude", "accuracy", "altitudeAccuracy", "heading", "speed"];

        for (var i = 0; i < properties.length; i++) {
            document.getElementById("geolocation").innerHTML += "<p>" + properties[i] + ":" + pos.coords[properties[i]] + "</p>";
        }
    }

    function handleError(err) {
        document.getElementById("geolocation").innerHTML += "<p>Error code:" + err.code + "</p>";
        document.getElementById("geolocation").innerHTML += "<p>Error Message:" + err.message + "</p>";
    }
</script>
</body>
```

# 第 39 章 使用 Web 存储

Web 存储允许我们在浏览器里保存简单的键 / 值数据。web 存储和 cookie 很相似，但它有着更好的实现方式，能保存的数据量也更大

## 使用本地存储

我们可以通过全局属性 localStorage 访问本地存储功能，这个属性会返回一个 Storage 对象，Storage 对象被用来保存键 / 值形式的字符串对 浏览器不会删除我们用 localStorage 对象添加的数据，除非用户自己清除浏览器数据

Storage 对象

| 名称                      | 说明                                              |
| :------------------------ | :------------------------------------------------ |
| clear()                   | 移除保存的键值对                                  |
| `getItem(<key>)`          | 取得与指定键关联的值                              |
| `key(<index>)`            | 取得指定索引的键                                  |
| length()                  | 返回已保存的键 / 值对数量                         |
| `removeItem(<key>)`       | 移除指定键对应的键 / 值对                         |
| `setItem(<key>, <value>)` | 添加一个新的键 / 值对，如果键已经使用就更新它的值 |
| `[<key>]`                 | 用数组的访问形式取得与指定键关联的值              |

```html
<body>
    <div id="localstorage"></div>
<script>
    if (localStorage.getItem("userID") == null) {
        localStorage.setItem("userID", Date.now());
    }
    document.getElementById("localstorage").innerHTML = localStorage.getItem("userID");
</script>
</body>
```

监听存储事件

通过本地存储功能保存的数据对所有来源相同的文档都是可用的。某个文档对本地存储进行修改时会触发 storage 事件，我们可以监听其他同源文档上的这个事件来确保我们能跟上最新的变化，与 storage 事件同时指派的对象是一个 StorageEvent 对象

StorageEvent 对象

| 名称        | 说明                        |
| :---------- | :-------------------------- |
| key         | 返回发生变化的键            |
| oldValue    | 返回关联此键的旧值          |
| newValue    | 返回关联此键的新值          |
| url         | 返回制造变化的文档 URL      |
| storageArea | 返回发生变化的 Storage 对象 |

```html
<body>
    <div id="localstorage"></div>
<script>
    localStorage.setItem("userID", Date.now());

    document.getElementById("localstorage").innerHTML = localStorage.getItem("userID");

    window.onstorage = handleStorage;

    function handleStorage(e) {
        document.getElementById("localstorage").innerHTML += "<p>key:" + e.key + " oldValue:" + e.oldValue + " newValue:" + e.newValue;
    }
</script>
</body>
```

## 使用会话存储

会话存储的工作方式和本地存储很接近，不同之处在于数据是各个浏览上下文私有的，会在文档被关闭时移除。 我们通过全局变量 sessionStorage 访问会话存储，它会返回一个 Storage 对象

```html
<body>
    <div id="localstorage"></div>
<script>
    if (sessionStorage.getItem("userID") == null) {
        sessionStorage.setItem("userID", Date.now());
    }
    document.getElementById("localstorage").innerHTML = sessionStorage.getItem("userID");
</script>
</body>
```

这个例子的工作方式和之前本地存储的例子很接近，不同之处在于可见性和寿命受到限制。 这些限制会影响 storage 事件的处理方式：前面提到过 storage 事件只会在共享存储的文档中触发。对于会话存储，这就意味着事件只会在内嵌文档中触发，比如 iframe 里的文档

# 第 40 章 创建离线 Web 应用程序

离线应用程序缓存功能允许我们指定 Web 应用程序所需的全部资源，这样浏览器就能在加载 HTML 文档时把它们都下载下来。通过这种方式，用户即使无法访问网络也能继续使用我们的应用程序。

## 定义问题

我们创建离线应用程序的目标是：确保所有需要的资源即使在离线状态下也可用，从而让应用程序能正常工作

## 定义清单

清单允许我们列出离线工作所需的全部资源。 清单文件是一个简单的文本文件。第一行始终是 `CACHE MANIFEST`，然后我们再列出应用程序所需的资源，每个文本行列一个

```txt
CACHE MANIFEST
example.html
banana100.png
apple100.png
cherries100.png 
```

离线应用程序的规范建议我们把 HTML 文档本身也加入清单中，虽然当清单被载入和读取时文档已经在浏览器缓存里了

清单文件没有固定的命名方案，但是 `.appcache` 是最常用的。比如说：fruit.appcache。无论使用哪一种命名方案，都必须让 Web 服务器把里面的内容向浏览器描述为 **MIME** 类型 **txt/cache-manifest** 。如果服务器没有正确设置 MIME 类型，浏览器就不会使用缓存文件

我们通过 html 元素的 **manifest** 属性来关联文档与清单文件

```html
<html manifest="fruit.appcache">
......
</html>
```

指定清单区域 我们可以给清单文件添加不同的区域。可用的区域共有三种：

1. CACHE 缓存区域
2. FALLBACK 备用区域
3. NETWORK 网络区域

```txt
CACHE MANIFEST

example.html
banana100.png

CACHE:
apple100.png
cherries100.png
```

我们把一些资源放在清单文件开头的默认区域里，另一些则放在 CACHE 区域里。这么左的效果等同于之前的清单，但它让我们可以在其他区域的后面定义我们想要的资源

```txt
CACHE MANIFEST

example.html
banana100.png

FALLBACK:
*.png offline.png

CACHE:
apple100.png
```

FALLBACK 区域允许我们指定浏览器如何处理没有包括在清单内的资源

清单文件里的 NETWORK 区域定义了一组不该被缓存的资源，浏览器应该始终从服务器请求它们，甚至在离线时也不例外。

```txt
CACHE MANIFEST

example.html
banana100.png

FALLBACK:
* offline.html

NETWORK:
cherries100.png

CACHE:
apple100.png
```

## 检测浏览器状态

我们可以通过 window.navigator.onLine 属性判断浏览器是在线还是离线

onLine 属性

| 名称                    | 说明                                                         |
| :---------------------- | :----------------------------------------------------------- |
| window.navigator.onLine | 如果浏览器确定为离线就返回 false，如果浏览器可能在线则返回 true |

这个属性只有当浏览器确定它为离线状态时才是明确的。true 值并不等于确认浏览器在线，而是指它不确定是否为离线

```html
<body>
    The browser is:
    <span id="status">unknown</span>.
    <script>
        var statusValue;

        if (window.navigator.onLine) {
            statusValue = "online";
        } else {
            statusValue = "offline";
        }
        document.getElementById("status").innerHTML = statusValue;
    </script>
</body>
```

## 使用离线缓存

我们可以通过 window.applicationCache 属性直接使用离线缓存，它会返回一个 ApplicationCache 对象

ApplicationCache 对象

| 名称        | 说明                                         |
| :---------- | :------------------------------------------- |
| update()    | 更新缓存以确保清单里的项目都已下载了最新版本 |
| swapCache() | 交换当前缓存与较新的缓存                     |
| status      | 返回缓存的状态                               |

status 属性会返回一个数值

ApplicationCache 的 status 属性

| 值   | 名称        | 说明                                                         |
| :--- | :---------- | :----------------------------------------------------------- |
| 0    | UNCACHED    | 此文档没有缓存，或者缓存数据尚未被下载                       |
| 1    | IDLE        | 缓存没有执行任何操作                                         |
| 2    | CHECKING    | 浏览器正在检查清单或清单所指定项目的更新                     |
| 3    | DOWNLOADING | 浏览器正在下载清单或内容的更新                               |
| 4    | UPDATEREADY | 有更新后的缓存数据可用                                       |
| 5    | OBSOLETE    | 缓存数据已废弃，不应该再使用了。这是请求清单文件时返回 HTTP 状态码 **4xx** 所造成的 (通常表明清单文件已被移走 / 删除) |

除了这些方法和状态属性外，ApplicationCache 对象还定义了一组事件，它们会在缓存状态改变时触发

| 名称        | 说明                                   |
| :---------- | :------------------------------------- |
| checking    | 浏览器正在获取初始清单或者检查清单更新 |
| noupdate    | 没有更新可用，当前的清单是最新版       |
| downloading | 浏览器正在下载清单里指定的内容         |
| progress    | 在下载阶段中触发                       |
| cached      | 清单里指定的所有内容都已被下载和缓存了 |
| updateready | 新资源已下载并且可以使用了             |
| obsolete    | 缓存已废弃                             |

```html
<!DOCTYPE HTML>
<html manifest="fruit.appcache">

<head>
    <title>Example</title>
    <style>
        img {
            border: medium double black;
            padding: 5px;
            margin: 5px;
        }

        div {
            margin-top: 10px;
            margin-bottom: 10px
        }

        table {
            margin: 10px;
            border-collapse: collapse;
        }

        th,
        td {
            padding: 2px;
        }

        body>* {
            float: left;
        }
    </style>
</head>

<body>
    <div>
        <img id="imgtarget" src="banana100.png" />
        <div>
            <button id="banana">Banana</button>
            <button id="apple">Apple</button>
            <button id="cherries">Cherries</button>
        </div>
        <div>
            <button id="update">Update</button>
            <button id="swap">Swap Cache</button>
        </div>
        The status is:
        <span id="status"></span>
    </div>
    <table id="eventtable" border="1">
        <tr>
            <th>Event Type</th>
        </tr>
    </table>
    <script>
        var buttons = document.getElementsByTagName("button");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].onclick = handleButtonPress;
        }

        window.applicationCache.onchecking = handleEvent;
        window.applicationCache.onnoupdate = handleEvent;
        window.applicationCache.ondownloading = handleEvent;
        window.applicationCache.onupdateready = handleEvent;
        window.applicationCache.oncached = handleEvent;
        window.applicationCache.onobselete = handleEvent;

        function handleEvent(e) {
            document.getElementById("eventtable").innerHTML +=
                "<tr><td>" + e.type + "</td></td>";
            checkStatus();
        }

        function handleButtonPress(e) {
            switch (e.target.id) {
                case 'swap':
                    window.applicationCache.swapCache();
                    break;
                case 'update':
                    window.applicationCache.update();
                    checkStatus();
                    break;
                default:
                    document.getElementById("imgtarget").src = e.target.id
                        + "100.png";
            }
        }

        function checkStatus() {
            var statusNames = ["UNCACHED", "IDLE", "CHECKING", "DOWNLOADING",
                "UPDATEREADY", "OBSOLETE"];
            var status = window.applicationCache.status;
            document.getElementById("status").innerHTML = statusNames[status];
        }
    </script>
</body>
</html>
CACHE MANIFEST

CACHE:
example.html
banana100.png
cherries100.png
apple100.png

FALLBACK:
* offline.html
```

制作更新 要引发缓存变化，我们必须在服务器上制作某种更新 (比如：替换文件实现)

获取更新 调用 update () 方法

应用更新 调用 swapCache () 方法

<!-- links -->
[Can I use]: http://caniuse.com/
[Modernizr]: http://modernizr.com/
[RFC 2046]: https://tools.ietf.org/.html/rfc2046
<!-- images -->
[Logo]: /_posts/note/.markdown/2017-N06_HTML5-权威指南/images/01.jpg "HTML5-权威指南"
<!-- files -->
