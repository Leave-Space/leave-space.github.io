
# AngularJS 高级程序设计

> ![Logo][]

# 第 1 章 准备

AngularJS 应用程序是围绕着 MVC 模式而构建的，该模式的重点在于构建这样的应用程序：

* 可扩展
* 可维护
* 可测试
* 标准化

## 你需要知道哪些知识

## 本书的组织结构

第一部分：准备 第二部分：使用 AngularJS 工作 第三部分：AngularJS 模块和服务

## 会有许多实例吗

## 从哪里可以获得实例代码

## 如何搭建你的开发环境

选择 Web 浏览器 Chrome 扩展插件 Batarang AngularJS

选择代码编辑器

安装 Node.js

安装 Web 服务器 这里使用 Connect，在 Node.js 的安装目录下运行如下命令：

```npm
npm install connect
```

在 Node.js 安装目录下创建一个名为 server.js 的文件

```javascript
var connect = require('connect');

connect.createServer(
    connect.static("../angularjs")
).listen(5000);
```

这个简单的文件创建了一个基本的 Web 服务器，将会在端口 5000 上响应请求，对外提供名为 angularjs 的文件夹下所包含的各个文件，该文件夹与 Node.js 安装目录处在同一级

安装测试系统

```npm
npm install -g karma
```

创建 AngularJS 文件夹 在开发过程中这个文件夹将包含你的 AngularJS 应用程序

1. 获取 AngularJS 库
2. 获取 AngularJS 的附加物
3. 获取 Bootstrap
4. 获取 Deployd

执行一个简单的测试 为确保所有的一切都已安装好并能够工作，在 angularjs 文件夹下创建一个名为 test.html 的 HTML 文件

```html
<!DOCTYPE html>
<html ng-app>

<head>
    <title>First Test</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
</head>

<body>
    <div class="btn btn-default">{{"AngularJS"}}</div>
    <div class="btn btn-success">Bootstrap</div>
</body>

</html>
```

1. 启动 Web 服务器

   要启动 Web 服务器，从 Node.js 的安装目录下运行下列命令

```npm
   node server.js
```

这将加载之前创建的 server.js，并在端口 5000 上开始监听 HTTP 请求

提示： 以上示例如果不能运行，则是因为：connect 包在其最新的 3.x 版本的代码库中进行了一些更改，将 static 中间件移动到它自己的包中，你有两个选择：

* 安装较旧的 2.x 版本的 connect 并按原样使用：

  ```npm
    npm install connect@2.XX
  ```

* 继续使用 3.x 版本的 connect，并添加 serve-static：

  ```npm
    npm install serve-static
  ```

  同时更新 server.js 文件以包含新 serve-static 模块：

```javascript
   var connect = require('connect'),
       serveStatic = require('serve-static');

   var app = connect();

   app.use(serveStatic("../angularjs"));
   app.listen(5000);
```

1. 加载测试文件

# 第 2 章 你的第一个 AngularJS 应用

## 准备项目

在 angular 文件夹下新建一个名为 todo.html 的 HTML 文件

```html
<!DOCTYPE html>
<html data-ng-app>

<head>
    <title>TO DO List</title>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
</head>

<body>
    <div class="page-header">
        <h1>Adam's To Do List</h1>
    </div>
    <div class="panel">
        <div class="input-group">
            <input class="form-control" />
            <span class="input-group-btn">
                <button class="btn btn-default">Add</button>
            </span>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Done</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Buy Flowers</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>Get Shoes</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>Collect Tickets</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>Call Joe</td>
                    <td>No</td>
                </tr>
            </tbody>
        </table>
    </div>
</body>

</html>
```

这个文件还没有用到 AngularJS，现在 todo.html 文件只包含了一些静态 HTML 元素，提供了一个待办事项应用的骨架

## 使用 AngularJS

* 将 AngularJS 应用到 HTML 文件

将 AngularJS 加入到 HTML 文件中是挺简单的，只需简单增加一个 script 元素来引入 angular.js 文件，创建一个 AngularJS 模块，并对 html 元素应用一个属性即可

```html
<!DOCTYPE html>
<html ng-app="todoApp">

<head>
    <title>TO DO List</title>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script src="angular.js"></script>
    <script>
        var todoApp = angular.module("todoApp", []);
    </script>
</head>

<body>
    <div class="page-header">
        <h1>Adam's To Do List</h1>
    </div>
    <div class="panel">
        <div class="input-group">
            <input class="form-control" />
            <span class="input-group-btn">
                <button class="btn btn-default">Add</button>
            </span>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Done</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Buy Flowers</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>Get Shoes</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>Collect Tickets</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>Call Joe</td>
                    <td>No</td>
                </tr>
            </tbody>
        </table>
    </div>
</body>

</html>
```

AngularJS 应用是由一个或多个模块组成。模块调用是由 angular.module 方法而创建的

```javascript
...
var todoApp = angular.module("todoApp", []);
...
```

传递给 angular.module 方法的参数是要创建的模块名以及一个由所需要的其他模块构成的数组。我创建了一个名为 todoApp 的模块，遵循了那个让人有点困惑的将 App 附加到模块名称后面的习惯用法，并通过将空数组传递给第二个参数来告诉 AngularJS 不再需要其他模块

警告： 一个常见的错误是忽略了依赖参数，这将会导致错误。你必须提供一个依赖参数，如果没有依赖时就使用一个空数组

我通过 ng-app 属性告诉 AngularJS 如何使用这个模块。AngularJS 通过增加新元素、属性、CSS 类和特殊注释 (虽然鲜有使用) 的方法来扩展 HTML，完成工作。AngularJS 库动态地编译一个文档中的 HTML，以定位和处理这些附加品，并创建应用程序。你可以使用 JavaScript 代码对内置功能进行补充，定制应用程序的行为，并定义自己向 HTML 的附加品

注意： 只有当浏览器对内容完成加载，并使用标准 DOM API 和 JavaScript 特性来添加或删除元素、设置事件处理器等等时，AngularJS 库才会对 HTML 元素进行评估。在 AngularJS 开发中没有明显的编译步骤，只需要修改你的 HTML 和 JavaScript 文件并将其加载到浏览器中

AngularJS 对 HTML 的最重要的附加品是 ng-app 属性，该属性指定了示例中的 html 元素包含一个应当被 AngularJS 编译和处理的模块。当 AngularJS 是唯一被使用的 JavaScript 框架时，惯例是对 HTML 元素使用 ng-app 属性。如果你在将 AngularJS 与其他技术如 jQuery 混用，你可以通过将 ng-app 属性应用到文档里的某个元素来缩小 AngularJS 应用的边界

对 HTML 应用 AngularJS 向 HTML 文档中添加非 HTML 标准的属性和元素看起来会有些奇怪。如果只是不习惯类似于 ng-app 这样的属性用法，有一种可供使用的替代方法。你可以使用 data 属性，即那些以 data - 为前缀的 AngularJS 指令

```html
...
<html data-ng-app="todoApp">
...
```

* 创建数据模型

AngularJS 支持 MVC 模式。遵循 MVC 模式需要将你的应用程序分成 3 个不同的区域：程序中的数据 (模型)、对数据进行操作的逻辑 (控制器)，以及显示数据的逻辑 (视图) 在我的待办事项程序中的数据现在分布在各个 HTML 元素之间。用户名包含在 header 中，如下：

```html
...
<h1>Adam's To Do List</h1>
...
```

待办事项项目的细节包含在表格中的 td 元素里，如下：

```html
...
<tr><td>Buy Flowers</td><td>No</td></tr>
...
```

我的第一个任务就是将所有数据放到一起，并将数据从 HTML 元素中分离出来，以便创建一个模型。因为 AngularJS 程序存在于浏览器中，我需要使用一个 script 元素中的 JavaScript 来定义我的数据模型

```html
<!DOCTYPE html>
<html ng-app="todoApp">

<head>
    <title>TO DO List</title>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script src="angular.js"></script>
    <script>
        var model = {
            user: "Adam",
            items: [{ action: "Buy Flowers", done: false },
            { action: "Get Shoes", done: false },
            { action: "Collect Tickets", done: true },
            { action: "Call Joe", done: false }]
        };

        var todoApp = angular.module("todoApp", []);
    </script>
</head>

<body>
    <div class="page-header">
        <h1>To Do List</h1>
    </div>
    <div class="panel">
        <div class="input-group">
            <input class="form-control" />
            <span class="input-group-btn">
                <button class="btn btn-default">Add</button>
            </span>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Done</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>
</body>

</html>
```

提示： 这里做了简化。模型也能够包含创建、加载、存储和修改数据对象所需的逻辑。在一个 AngularJS 应用中，这些逻辑经常在服务器上，并通过 Web 服务器来访问

我定义了一个名为 model 的 JavaScript 对象，具有与分布在各个 HTML 元素中的数据相对应的属性。user 属性定义了用户名，items 属性定义了一个对象数组，描述了各个待办事项 通常在定义一个模型时，不需要同时定义 MVC 模式的其他部分，但是我想演示如何搭建这个简单的 AngularJS 应用程序，所以也同时定义了其他部分

提示： 在任何 AngularJS 开发项目里，总有一段时期需要定义 MVC 模式的主要部分并整合到一起。在这段时期里，会让人觉得好像在倒退，特别是在类似本章这样的静态程序上工作时。但是这段时间的初始投资最终将会得到回报。当开始搭建一个更复杂和实际的 AngularJS 应用程序时，开始时需要有许多设置和配置，但是很快就能使各种特性就位

* 创建控制器

控制器定义了用于支持视图的业务逻辑，描述控制器的最好方式是解释清楚它不应包含什么样的逻辑，以及控制器中剩下了哪些逻辑 处理存储或读取数据的逻辑是模型的一部分。处理将数据格式化并显示给用户的逻辑是视图的一部分。控制器位于模型和视图之间并连接它们。控制器对用户交互做出响应，更新模型中的数据并向视图提供所需要的数据

控制器是由调用 angular.module 所返回的 module 对象上的 controller 方法创建的。传给 controller 方法的参数是新控制器的名称和一个将会被调用的函数，用于定义控制器功能

```html
<!DOCTYPE html>
<html ng-app="todoApp">

<head>
    <title>TO DO List</title>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script src="angular.js"></script>
    <script>
        var model = {
            user: "Adam",
            items: [{ action: "Buy Flowers", done: false },
            { action: "Get Shoes", done: false },
            { action: "Collect Tickets", done: true },
            { action: "Call Joe", done: false }]
        };

        var todoApp = angular.module("todoApp", []);

        todoApp.controller("ToDoCtrl", function ($scope) {
            $scope.todo = model;
        });
    </script>
</head>

<body ng-controller="ToDoCtrl">
    <div class="page-header">
        <h1>To Do List</h1>
    </div>
    <div class="panel">
        <div class="input-group">
            <input class="form-control" />
            <span class="input-group-btn">
                <button class="btn btn-default">Add</button>
            </span>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Done</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>
</body>

</html>
```

惯例一般是对控制器命名为 `<Name>Ctrl`，这里的 Name 帮助你识别出该控制器在你的应用程序中负责做什么，真正的应用程序一般会生成多个控制器

提示： 像这样的控制器命名方式仅仅是一种习惯，你可以自由选择任何喜欢的名称。遵循广泛使用的惯例是为了能使熟悉 AngularJS 的程序员快速了解你的项目结构

控制器的主要目的之一是为了向视图提供其所需的数据。你不会总是希望视图具有访问整个模型的权限，所以需要使用控制器明确地选出那部分可用的数据，被称作 scope 传给我的控制器函数的参数叫做 $scope—— 也就是说，在 $ 符号后紧跟着 scope 一词。在一个 AngularJS 应用中，以 $ 开头的变量名表示 AngularJS 提供的内置特性。当你看到这个 $ 符号使，一般是指一个内置服务，是一种自包含的组件，能够对多个控制器提供特性，但是 $scope 是比较特殊的，常用于向视图暴露数据和功能 对于这个应用，我想让视图中可以使用整个 model 变量，所以我在 $scope 服务对象上定义了一个名为 todo 的属性，并将整个 model 变量赋给它，如下：

```javascript
...
$scope.todo = model;
...
```

* 创建视图

通过将控制器所提供的数据和用于为浏览器生成显示内容的 HTML 元素绑定在一起，可以生成视图。这需要使用到一种被称为数据绑定的注释来使用模型数据对 HTML 文档进行操作

```html
...
<body ng-controller="ToDoCtrl">
    <div class="page-header">
        <h1>
            {{todo.user}}'s To Do List
            <span class="label label-default">{{todo.items.length}}</span>
        </h1>
    </div>
    <div class="panel">
        <div class="input-group">
            <input class="form-control" />
            <span class="input-group-btn">
                <button class="btn btn-default">Add</button>
            </span>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Done</th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="item in todo.items">
                    <td>{{item.action}}</td>
                    <td>{{item.done}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
...
```

1. 插入模型值

   AngularJS 使用两对大括号 ({{和}}) 表示一个数据绑定表达式。表达式的内容会被当作 JavaScript 进行计算，仅限于通过控制器赋给作用域上的数据和函数。在本例中，我只能访问模型中在定义控制器时赋给类 $scope 对象的那一部分，通过使用在 $scope 对象上创建的属性名即可

   这就是说，如果我想访问 model.user 属性，我得定义一个引用 todo.user 的数据绑定表达式，这是因为我将 model 对象赋给了 $scope.todo 属性 AngularJS 在文档中对 HTML 进行编译，发现 ng-controller 属性后，调用 ToDoCtrl 函数设置将被用于创建视图的作用域。当遇到每个数据绑定表达式后，AngularJS 会查找 $scope 对象上的具体值，并向 HTML 文档中插入该值。这被称为数据绑定或者模型绑定

2. 计算表达式

   数据绑定表达式的内容可以是任何有效的 JavaScript 语句，也就是说你可以执行从模型中创建新数据的操作，如下：

```html
   ...
   <h1>
       {{todo.user}}'s To Do List
       <span class="label label-default">{{todo.items.length}}</span>
   </h1>
   ...
```

AngularJS 计算这个表达式并显示数组中的元素个数，以告诉用户在待办事项列表中有多少个元素

提示： 你应该仅使用表达式来执行一些简单的操作，只为显示而准备数据值。不要使用数据绑定来执行复杂逻辑或者对模型进行操作，那是控制器该做的事

1. 使用指令

   表达式还经常和指令一起使用，用于告诉 AngularJS 你希望内容如何被处理。在示例中用到了 ng-repeat 属性，这个指令用于告诉 AngularJS 从一个集合中的各个对象生成所应用到的元素及其内容，如下：

```html
   ...
   <tr ng-repeat="item in todo.items">
       <td>{{item.action}}</td>
       <td>{{item.done}}</td>
   </tr>
   ...
```

ng-repeat 属性值的格式为 `<name> in <collection>`。我在 todo.items 中指定了 item，就是说为 todo.items 数组中的每个对象生成 tr 元素和包含的 td 元素，并将数组中的对象逐个赋值给一个名为 item 的变量 使用变量 item，我就能够为数组中的每个对象的属性定义绑定表达式，产生如下的 HTML：

```html
   ...
   <tr ng-repeat="item in todo.items" class="ng-scope">
       <td class="ng-binding">Buy Flowers</td>
       <td class="ng-binding">false</td>
   </tr>
   <tr ng-repeat="item in todo.items" class="ng-scope">
       <td class="ng-binding">Get Shoes</td>
       <td class="ng-binding">false</td>
   </tr>
   <tr ng-repeat="item in todo.items" class="ng-scope">
       <td class="ng-binding">Collect Tickets</td>
       <td class="ng-binding">true</td>
   </tr>
   <tr ng-repeat="item in todo.items" class="ng-scope">
       <td class="ng-binding">Call Joe</td>
       <td class="ng-binding">false</td>
   </tr>
   ...
```

指令是 AngularJS 的工作机制的核心，ng-repeat 指令将会是其中频繁使用的一个指令

## 基本功能之外

* 使用双向模型绑定

在前一节中所使用的绑定被称为单向绑定，其值是从模型中取得的，并用于操作模板中的元素 AngularJS 走的更远一步，还提供了双向绑定，模型用于生成元素，元素中的变化也能引起模型中的相应变化。为了演示双向绑定是如何实现的，我修改了 todo.html 文件以便用复选框代表每个任务的状态：

```html
...
<tr ng-repeat="item in todo.items">
    <td>{{item.action}}</td>
    <td>
        <input type="checkbox" ng-model="item.done" />
    </td>
    <td>{{item.done}}</td>
</tr>
...
```

我增添了一个新的 td 元素，以包含一个复选框类型的 input 元素。重要的增加之处在于 ng-model 属性，用于告诉 AngularJS 在 input 元素和对应的数据对象的 done 属性之间创建一个双向绑定，当 HTML 第一次被编译时，AngularJS 将使用 done 属性的值来设置 input 元素的值

双向绑定可被应用到接收用户输入的元素上，一般即是与 HTML 表单元素相关联的元素。具有灵活而动态的模型使得使用 AngularJS 创建复杂的应用程序变得简单

* 创建和使用控制器行为

控制器在作用域上定义行为。行为是对模型中的数据进行操作的函数，用于实现应用程序的业务逻辑。控制器定义的行为用于向视图提供数据并显示给用户，并且根据用户交互更新模型

为了演示这一简单的行为，我打算修改改 todo.html 的 header 中右边显示的标签，以便使其仅显示未完成待办事项的个数

```html
<!DOCTYPE html>
<html ng-app="todoApp">

<head>
    <title>TO DO List</title>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script src="angular.js"></script>
    <script>
        var model = {
            user: "Adam",
            items: [{ action: "Buy Flowers", done: false },
            { action: "Get Shoes", done: false },
            { action: "Collect Tickets", done: true },
            { action: "Call Joe", done: false }]
        };

        var todoApp = angular.module("todoApp", []);

        todoApp.controller("ToDoCtrl", function ($scope) {
            $scope.todo = model;

            $scope.incompleteCount = function () {
                var count = 0;
                angular.forEach($scope.todo.items, function (item) {
                    if (!item.done) { count++ }
                });
                return count;
            }
        });
    </script>
</head>

<body ng-controller="ToDoCtrl">
    <div class="page-header">
        <h1>
            {{todo.user}}'s To Do List
            <span class="label label-default" ng-hide="incompleteCount() == 0">
                {{incompleteCount()}}
            </span>
        </h1>
    </div>
    <div class="panel">
        <div class="input-group">
            <input class="form-control" />
            <span class="input-group-btn">
                <button class="btn btn-default">Add</button>
            </span>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Done</th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="item in todo.items">
                    <td>{{item.action}}</td>
                    <td>
                        <input type="checkbox" ng-model="item.done" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</body>

</html>
```

行为是通过在传入给控制器的 $scope 对象上添加函数而定义的。在示例中，我定义了一个函数用于返回未完成项目的数量，该数量是通过遍历 $scope.todo.items 数组中的对象，对于 done 属性为 false 的对象进行计数而得到的

提示： 我使用 angular.forEach 方法来遍历数据数组中的内容。AngularJS 包含了一些有用的工具方法，对 JavaScript 语言形成很好的补充

向 $scope 对象添加的函数所赋给的属性名称，被用作行为名。行为名叫做 incompleteCount，我可以在 ng-controller 属性的作用域中调用它，ng-controller 属性会将控制器应用到构成视图的 HTML 元素上

在示例中我将 incompleteCount 行为使用了两次。第一次是控制标签显示或隐藏，第二次是作为一个简单的数据绑定用于显示项目个数，如下：

```html
...
<span class="label label-default" ng-hide="incompleteCount() == 0">
    {{incompleteCount()}}
</span>
...
```

如果赋给属性值 ng-hide 的表达式计算结果为 true，ng-hide 指令将会隐藏所使用到的元素

注意： 我调用该行为时使用了圆括号。你可以将对象作为参数传递给行为，这使得创建可使用不同数据对象的通用行为成为可能。我的应用程序足够简单，因此我决定不传入任何参数，而是直接从控制器的 $scope 对象中获取所需数据

* 使用依赖于其他行为的行为

始终贯穿于 AngularJS 的主题之一便是 HTML、CSS 和 JavaScript 等的潜在特性是如何被吸纳到 Web 应用程序开发中的。举个例子，因为行为是通过 JavaScript 函数而创建的，所以你可以在同一个控制器中其他行为所提供的功能的基础上创建新的行为，例如：

```html
<!DOCTYPE html>
<html ng-app="todoApp">

<head>
    <title>TO DO List</title>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script src="angular.js"></script>
    <script>
        var model = {
            user: "Adam",
            items: [{ action: "Buy Flowers", done: false },
            { action: "Get Shoes", done: false },
            { action: "Collect Tickets", done: true },
            { action: "Call Joe", done: false }]
        };

        var todoApp = angular.module("todoApp", []);

        todoApp.controller("ToDoCtrl", function ($scope) {
            $scope.todo = model;

            $scope.incompleteCount = function () {
                var count = 0;
                angular.forEach($scope.todo.items, function (item) {
                    if (!item.done) { count++ }
                });
                return count;
            }

            $scope.warningLevel = function () {
                return $scope.incompleteCount() < 3 ? "label-success" : "label-warning";
            }
        });
    </script>
</head>

<body ng-controller="ToDoCtrl">
    <div class="page-header">
        <h1>
            {{todo.user}}'s To Do List
            <span class="label label-default" ng-class="warningLevel()" ng-hide="incompleteCount() == 0">
                {{incompleteCount()}}
            </span>
        </h1>
    </div>

    <!-- ...elements omitted for brevity... -->

</body>

</html>
```

我定义了一个名为 warningLevel 的新行为，该行为基于未完成事项的数目返回一个 Bootstrap CSS 类名，而未完成事项数是通过调用 incompleteCount 行为而得到的。这种方式减少了控制器中的重复逻辑

我使用 ng-class 指令来应用 warningLevel 行为

```html
...
<span class="label label-default" ng-class="warningLevel()" ng-hide="incompleteCount() == 0">
...
```

提示： 注意这个 span 元素有两个指令，每一个都依赖于不同的行为。你可以自由地将行为和指令组合起来，以实现在程序中所需要的效果

* 响应用户交互

行为和指令结合在一起产生了 AngularJS 应用中的许多功能。最强大的组合之一便是将指令和行为用于响应用户交互

```html
<!DOCTYPE html>
<html ng-app="todoApp">

<head>
    <title>TO DO List</title>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script src="angular.js"></script>
    <script>
        var model = {
            user: "Adam",
            items: [{ action: "Buy Flowers", done: false },
            { action: "Get Shoes", done: false },
            { action: "Collect Tickets", done: true },
            { action: "Call Joe", done: false }]
        };

        var todoApp = angular.module("todoApp", []);

        todoApp.controller("ToDoCtrl", function ($scope) {
            $scope.todo = model;

            $scope.incompleteCount = function () {
                var count = 0;
                angular.forEach($scope.todo.items, function (item) {
                    if (!item.done) { count++ }
                });
                return count;
            }

            $scope.warningLevel = function () {
                return $scope.incompleteCount() < 3 ? "label-success" : "label-warning";
            }

            $scope.addNewItem = function (actionText) {
                $scope.todo.items.push({ action: actionText, done: false });
            }
        });
    </script>
</head>

<body ng-controller="ToDoCtrl">
    <div class="page-header">
        <h1>
            {{todo.user}}'s To Do List
            <span class="label label-default" ng-class="warningLevel()" ng-hide="incompleteCount() == 0">
                {{incompleteCount()}}
            </span>
        </h1>
    </div>
    <div class="panel">
        <div class="input-group">
            <input class="form-control" ng-model="actionText" />
            <span class="input-group-btn">
                <button class="btn btn-default" ng-click="addNewItem(actionText)">Add</button>
            </span>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Done</th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="item in todo.items">
                    <td>{{item.action}}</td>
                    <td>
                        <input type="checkbox" ng-model="item.done" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</body>

</html>
```

我增加了一个名为 addNewItem 的行为，能够取得新的待办事项的文本并向数据模型中添加一个对象，将该文本用作 action 属性的值并设置 done 属性为 false，类似这样：

```javascript
...
$scope.addNewItem = function (actionText) {
    $scope.todo.items.push({ action: actionText, done: false });
}
...
```

本例中的神奇之处在于对指令的两处使用：

```html
...
<input class="form-control" ng-model="actionText" />
...
```

这是与设置复选框时所使用的同一个 ng-model 指令，当使用表单元素时将会多次遇到这个指令。需要注意的是我为指令指定了一个属性名，用于更新本不是模型的一部分。ng-model 指令将会在控制器的作用域中为我动态地创建这个属性，实际上是创建出了用于处理用户输入的动态模型属性。在本例中增添的第二处指令里我使用了这个动态属性：

```html
...
<button class="btn btn-default" ng-click="addNewItem(actionText)">Add</button>
...
```

ng-click 指令设置了一个当 click 事件被触发时的处理器，将会计算一个表达式，在这里，该表达式调用 addNewItem 行为，传入动态的 actionText 属性作为参数

提示： 你很可能已经被教导过不要为个别元素添加事件处理代码，所以将 ng-click 指令应用于 button 元素很可能看起来有点奇怪。不要担心 —— 当 AngularJS 编译 HTML 文档并遇到该指令时，它会不引人注意地设置一个遵循 JavaScript 方式的处理器，这样事件处理器代码就与元素分隔开了。将 AngularJS 指令与编译过程中由那些指令产生的 HTML 和 JavaScript 区分开是非常重要的

对模型数据过滤和排序

```html
...
<tbody>
    <tr ng-repeat="item in todo.items | filter:{done: false} | orderBy:'action'">
        <td>{{item.action}}</td>
        <td>
            <input type="checkbox" ng-model="item.done" />
        </td>
    </tr>
</tbody>
...
```

过滤器可被应用于数据模型的任何部分，在这里你能够看到我使用了过滤器来控制被 ng-repeat 指令用于操作 table 元素中待办事项列表项目详情信息的数据。我使用了两个过滤器：filter 和 orderBy filter 过滤器基于所配置的条件筛选对象。orderBy 过滤器对数据项进行排序

提示： 注意在使用 orderBy 过滤器时，我对所指定的用于排序的属性名是作为一个字符串常量使用的。默认情况下，AngularJS 假设一切都是由作用域所定义的属性，不带引号的，将会视图查找一个名为 action 的作用域属性。这在要通过程序定义值时是非常有帮助的，但是在想指定为一个常量时却意味着要记得使用常量

改进过滤器 前一个例子演示了过滤器特性是如何工作的，但结果却没有多大意义，因为被勾选中的项会永远地对用户隐藏。幸运的是，创建一个自定义的过滤器是件简单的事情

```javascript
    <script>
        var model = {
            user: "Adam",
            items: [{ action: "Buy Flowers", done: false },
            { action: "Get Shoes", done: false },
            { action: "Collect Tickets", done: true },
            { action: "Call Joe", done: false }]
        };

        var todoApp = angular.module("todoApp", []);

        todoApp.filter("checkedItems", function () {
            return function (items, showComplete) {
                var resultArr = [];
                angular.forEach(items, function (item) {
                    if (item.done == false || showComplete == true) {
                        resultArr.push(item);
                    }
                });
                return resultArr;
            }
        });

        todoApp.controller("ToDoCtrl", function ($scope) {
            $scope.todo = model;

            // ...statements omitted for brevity...
        });
    </script>
```

AngularJS 模块对象所定义的 filter 方法用于创建一个过滤器工厂，该工厂会返回一个函数用于过滤一组数据对象。目前暂时不要担心工厂这部分细节，只需要知道使用 filter 方法需要传入一个函数，该函数中需要一个能够返回过滤后数据的函数就足够了。我对过滤器所起的名字是 checkedItems，实际执行过滤功能的函数有两个参数：

```javascript
...
return function (items, showComplete) {
...
```

参数 items 是由 AngularJS 提供的，是应当被过滤的对象集合。在使用过滤器时我将提供 showComplete 参数的值，该值用于决定已经被标记为完成的项是否会被包含在过滤后的数据中

```html
...
<div class="panel">
    <div class="input-group">
        <input class="form-control" ng-model="actionText" />
        <span class="input-group-btn">
            <button class="btn btn-default" ng-click="addNewItem(actionText)">Add</button>
        </span>
    </div>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Description</th>
                <th>Done</th>
            </tr>
        </thead>
        <tbody>
            <tr ng-repeat="item in todo.items | checkedItems:showComplete | orderBy:'action'">
                <td>{{item.action}}</td>
                <td>
                    <input type="checkbox" ng-model="item.done" />
                </td>
            </tr>
        </tbody>
    </table>

    <div class="checkbox-inline">
        <label><input type="checkbox" ng-model="showComplete"> Show Complete</label>
    </div>
</div>
...
```

我增加了一个复选框，使用 ng-model 指令来设置一个名为 showComplete 的模型值，该值通过表格中的 ng-repeat 指令传递给我的自定义过滤器：

```html
...
<tr ng-repeat="item in todo.items | checkedItems:showComplete | orderBy:'action'">
...
```

自定义过滤器的语法与内置过滤器所支持的语法相同。我指定了通过 filter 方法所创建的过滤器的名称，随后跟一个：(冒号)，然后跟随着我要传递给过滤器函数的模型属性名

通过 Ajax 获取数据 我要做的最后一项修改是通过一个 Ajax 请求以 JSON 数据形式获取待办事项列表的数据。我在 angularjs 文件夹下创建了一个名为 todo.json 的文件

```json
[
    {
        "action": "Buy Flowers",
        "done": false
    },
    {
        "action": "Get Shoes",
        "done": false
    },
    {
        "action": "Collect Tickets",
        "done": true
    },
    {
        "action": "Call Joe",
        "done": false
    }
]
```

接下在修改 todo.html 从 todo.json 文件中加载数据

```javascript
...
<script>
    var model = {
        user: "Adam"
    };

    var todoApp = angular.module("todoApp", []);

    todoApp.run(function ($http) {
        $http.get("todo.json").then(function (data) {
            model.items = data.data;
        });
    });

    todoApp.filter("checkedItems", function () {
        return function (items, showComplete) {
            var resultArr = [];
            angular.forEach(items, function (item) {
                if (item.done == false || showComplete == true) {
                    resultArr.push(item);
                }
            });
            return resultArr;
        }
    });

    todoApp.controller("ToDoCtrl", function ($scope) {
        $scope.todo = model;

        $scope.incompleteCount = function () {
            var count = 0;
            angular.forEach($scope.todo.items, function (item) {
                if (!item.done) { count++ }
            });
            return count;
        }

        $scope.warningLevel = function () {
            return $scope.incompleteCount() < 3 ? "label-success" : "label-warning";
        }

        $scope.addNewItem = function (actionText) {
            $scope.todo.items.push({ action: actionText, done: false });
        }
    });
</script>
...
```

我从静态定义的数据模型中移除了 items 数组，并增加了一个对 run 方法的调用，该方法是由 AngularJS 模型对象所定义的。run 方法接受一个函数，并仅在 AngularJS 执行完初始化设置后运行一次，长用于一次性的任务。我对传给 run 方法的函数指定了 $http 作为参数，告诉 AngularJS 我要使用对 Ajax 请求提供支持的服务对象。这种使用参数告诉 AngularJS 需要哪些特性方法，是被称为依赖注入的方法的一部分 $http 服务提供了对底层 Ajax 请求的访问功能。与用于和 RESTful 的 Web 服务交互的 $resource 服务相比较，这里的底层显得并不那么底层。我使用 $http.get 方法来创建一个 HTTP GET 请求，向服务器请求 todo.json 文件

```javascript
...
$http.get("todo.json").then(function (data) {
    model.items = data.data;
});
...
```

从 get 方法得到的结果是一个 promise 对象，该对象用于表示将在未来完成的工作。调用 then 方法能够让我指定一个将在发往服务器的 Ajax 请求完成时被调用的函数，而从服务器获取到的 JSON 数据将会被解析并创建一个 JavaScript 对象，传入给我的 then 函数作为 data 参数，我使用收到的 data 参数对模型进行更新

```javascript
...
$http.get("todo.json").then(function (data) {
    model.items = data.data;
});
...
```

# 第 3 章 结合背景理解 AngularJS

## 理解 AngularJS 的擅长之处

AngularJS 将那些曾经仅对服务器端开发者可用的功能完整地搬到了浏览器端。这意味着使用了 AngularJS 的 HTML 文档每次加载时，AngularJS 会有许多事情要做 —— 需要编译 HTML 元素，需要计算数据绑定，需要执行指令等等 这类工作需要时间去执行，所需时长取决于 HTML 文档及其相关联的 JavaScript 代码的复杂程度，而且关键是浏览器的质量和设备处理能力 因此，优化的目标应该是尽可能地降低这些设置的执行频率，并在其执行时尽可能多地向用户发送应用的更多内容。这意味着需要你仔细考虑所搭建的 Web 应用程序类型。广义上来讲存在两种类型的 Web 应用程序：回合式和单页面

理解回合式和单页面应用程序 很长一段时间以来，Web 应用程序都是遵循回合式模式开发的。由浏览器向服务器请求一个初始的 HTML 文档。用户交互会使得浏览器发送请求并接收一个全新的 HTML 文档。在这类应用程序中，浏览器本质上是一个 HTML 内容的解析引擎，所有应用程序逻辑和数据都保留在服务器上。浏览器发出一系列无状态的 HTTP 请求，服务器处理这些请求并动态生成 HTML 文档 现在许多 Web 开发仍然是为回合式应用而准备的，尤其是因为这对浏览器的要求很少，能够保证最大限度地对客户端的支持。但回合式应用程序存在一些严重的不足之处：用户在下一个 HTML 文档被请求并且加载之前必须等待，它需要大型的服务器端基础设施来处理所有请求并管理所有的应用程序状态，需要许多带宽，因为每个 HTML 文档必须是自包含的 单页面应用程序则另辟蹊径。一个初始的 HTML 文档被发送给浏览器，但是用户交互所产生的 Ajax 请求只会请求较小的 HTML 片段，或者要插入到已有的显示给用户元素中的数据 初始的 HTML 文档不会被再次加载或者替换，在 Ajax 请求被异步执行时用户还可以继续与已有的 HTML 进行交互，即使这只意味着只能看到 "数据加载中" 这样的信息 现在大多数应用会落入到这两种极端之间，倾向于使用以 JavaScript 增强的基本回合式模型，以减少整个页面的变化次数，虽然重点往往在于减少执行客户端校验所产生的表单错误的次数 对于更贴近单页面模型的应用程序，AngularJS 能够对最初付出的工作量给予最大的回报。这并不是说回合式应用程序就不能使用 AngularJS—— 你当然可以，但是有其他更简单和更适合于分离的 HTML 页面的技术，例如 jQuery AngularJS 以单页面应用程序和复杂的回合式应用程序见长。对于较简单的项目，一般来说 jQuery 或者类似的替代者会是更好的选择 现在的 Web 应用项目有一种逐步向单页应用程序模型转移的趋势，这正是 AngularJS 的擅长之处，不仅仅是因为初始化过程得到了优化，更是因为使用 MVC 模式所带来的好处确实在逐步证明其在大型和复杂项目上的优势

AngularJS 与 jQuery AngularJS 与 jQuery 在 Web 应用开发上走的是不同的路。jQuery 完全是通过显式操作浏览器中的 DOM 来创建应用程序。AngularJS 采用的方法则是将浏览器吸收为应用程序开发的基础 但是使用 jQuery 编写和管理大型应用将会比较困难，全面的单元测试也将会是一个挑战 我喜欢使用 AngularJS 工作的原因之一是，它是建立于 jQuery 的核心功能之上的。事实上 AngularJS 包含了一个裁剪版的 jQuery，叫做 jqLite，在编写自定义指令时将用到。而且，如果你将 jQuery 加入到 HTML 文档中，AngularJS 将会自动检测到并优先使用 jQuery 替代 jqLite，尽管会很少需要这么做 那么，简而言之，对于单元测试不那么重要而且需要立即得到结果的低复杂度 Web 应用，适用于 jQuery。jQuery 对于增强回合式类型的 Web 应用生成的 HTML 也是非常理想的，因为你可以轻松使用 jQuery 而无需修改由服务器生成的 HTML 内容。对于更复杂一些的单页面 Web 应用，当你有时间精心设计和规划时，以及当你能够轻松控制由服务器生成的 HTML 时，适于使用 AngularJS

## 理解 MVC 模式

使用 MVC 模式的关键前提在于实现关注点分离，即应用程序中的数据模型与业务逻辑和展示逻辑解耦。在客户端 Web 开发中，这意味着将数据、操作数据的逻辑和 HTML 元素相分离。结果就是得到一个更为容易开发、维护和测试的客户端应用程序 主要的三个构件就是模型、视图和控制器。应用于服务器端开发的 MVC 模式的传统形式：

![MVC模式的服务器端实现][]

AngularJS 是在浏览器中工作的，导致对 MVC 的形式产生一些影响

![MVC模式的AngularJS实现][]

理解模型 模型包含了用户赖以工作的数据。有两种广义上的模型：视图模型，只表示从控制器传往视图的数据；领域模型，包含了业务领域的数据，以及用于创建、存储和操作这些数据的各种操作、转换和规则，统称为模型逻辑

提示： 许多 MVC 模式的新手会对在数据模型中包含逻辑的理念感到困惑，相信 MVC 模式的理念应该是将数据从逻辑中剥离出来。这是一种误解：MVC 框架的目标是将一个应用程序分成三部分功能区域，每一部分都可能同时包含逻辑与数据。其目标并不是从模型中消除逻辑。而是为了确保模型中所包含的逻辑只是用于创建和管理模型数据的

使用 MVC 模式构建的应用程序中的模型应该：

* 包含领域数据
* 包含创建、管理和修改领域数据的逻辑 (这意味着要通过 Web 服务来执行远程逻辑)
* 提供整洁的 API，能够暴露模型数据以及之上的操作

模型不应该：

* 暴露模型数据是如何获取或管理的细节 (换句话说就是数据存储逻辑)
* 包含根据用户交互对模型进行转换的逻辑 (因为这是控制器的职责)
* 包含将数据显示给用户的逻辑 (因为这是视图的职责)

确保将模型与控制器和视图分离的好处是使你可以更容易地测试你的逻辑，并且使得对整个程序的优化和维护变得简单和容易 最好的领域模型应该包含获取和存储持久化数据的逻辑，以及创建、读取、更新和删除操作 (CRUD 操作)。这也可以被理解为模型可以直接包含逻辑，但是更常见的是包含那些用于调用 RESTful 的 Web 服务以调用服务端数据库操作的逻辑

理解控制器 在一个 AngularJS 应用程序中，控制器作为数据模型和视图之间的渠道，控制器会向作用域中添加业务领域逻辑 (行为 / 动作方法)，而作用域是模型的子集

使用 MVC 模式构建的控制器应当：

* 包含初始化作用域所需的逻辑
* 包含视图所需的用于表示作用域中的数据的逻辑 / 行为
* 包含根据用户交互来更新作用域所需的逻辑 / 行为

控制器不应当：

* 包含操作 DOM 的逻辑 (那是视图的职责)
* 包含管理数据持久化的逻辑 (那是模型的职责)
* 在作用域之外操作数据

理解视图数据 领域模型并不是 AngularJS 应用程序中的唯一数据。控制器可以创建视图数据 (视图模型数据 / 视图模型)，以简化视图的定义。视图数据不会被持久化，而且要么是通过综合领域模型数据的几部分而成的，要么是存在于对用户交互的响应之中。视图数据通常是通过控制器作用域来创建和访问的

理解视图 AngularJS 视图是通过 HTML 元素来定义的，而这些元素是通过使用数据绑定或者指令来进行增强或生成的。正是 AngularJS 指令使得视图变得如此灵活，也将 HTML 元素变为动态 Web 应用的基础

视图应当：

* 包含将数据呈现给用户所需的逻辑和标记

视图不应当：

* 包含复杂逻辑 (这最好放到控制器中去)
* 包含创建、存储或操作领域模型的逻辑

视图可以包含逻辑，但是应该尽量简单，并有节制地使用。如果不是将最简单的方法调用或者表达式放到视图中，而是将任何东西都放进视图中，会让整个应用程序变得更难以测试和维护

## 理解 RESTful 服务

在 AngularJS 应用中的领域模型逻辑通常被拆分为客户端和服务端两部分。服务器端包含持久化存储，典型的就是数据库，还包含管理这些存储的逻辑 (操作数据库) 我们并不希望客户端代码直接访问数据存储 —— 这样会在客户端和数据存储之间产生紧耦合，使得单元测试复杂化，也使得在不修改客户端代码的情况下对数据存储的修改变得困难 通过服务器端作为中介来访问数据存储，我们可以消除紧耦合。客户端的逻辑负责从服务器端存取数据，而无须知道数据在后台是如何存储或访问的细节 有许多种在客户端和服务端之间传递数据的方法。最常见的一种是使用 Ajax 请求来调用服务器端的代码，让服务器发送 JSON 并使用 HTML 表单来修改数据 这种方法可以很好地工作，也是 RESTful Web 服务的基础，利用了 HTTP 请求的天然特性来执行对数据的 CRUD 操作

注意： REST 是一种 API 风格，而不是一个定义完善的规范，到底什么是 Web 服务的 REST 化是有争议的

HTTP 方法所对应的常用操作

| 方法   | 描述                                               |
| :----- | :------------------------------------------------- |
| GET    | 获取 URL 所指定的数据对象                          |
| PUT    | 更新 URL 所指定的数据对象                          |
| POST   | 创建一个新的数据对象，通常使用表单数据值作为数据域 |
| DELETE | 删除 URL 所指定的数据对象                          |

你不一定必须按照表中所描述的 HTTP 方法来执行操作。一个常见的变体是 POST 方法通常具有双重职责，如果某个对象存在的话将会对其进行更新，如果不存在的话则创建一个，也就是说不必使用 PUT 方法

幂等的 HTTP 方法 虽然我推荐你尽可能地贴近表中所描述的习惯用法，你仍然可以在 HTTP 方法与对数据存储的操作之间实现任何映射 如果你另辟蹊径，请确保利用了 HTTP 规范中所定义的 HTTP 方法的特性： GET 方法是具有无为性的也就是说对于该方法的响应中所做的操作应该只是读取数据而不会修改它。一个浏览器应当期望能够重复地发出 GET 请求，而不会改变服务器端的状态 PUT 和 DELETE 方法是幂等的，也就是说多次发送同一个请求应该和只发送一次该请求具有同样的效果 POST 方法既不具有无为性也不是幂等的 只有当你在实现自己的 RESTful 的 Web 服务时，所有这些才变得非常重要。如果你在编写一个消费 RESTful 服务的客户端，那么你只需要知道每个 HTTP 方法对应于哪些数据操作就可以了

## 常见的设计陷阱

在本节，我将介绍 AngularJS 项目中遇到的三个最常见的设计陷阱。这不是代码编写的错误，但却是整个 Web 应用范围内的问题，会妨碍项目团队享受 AngularJS 和 MVC 模式所带来的益处

将逻辑放到错误的地方 最常见的问题是把逻辑放到了错误的位置，破坏了 MVC 关注点的分离。以下是这种问题的三个最常见的种类：

* 将业务逻辑放到视图中，而不是控制器中
* 将领域逻辑放到控制器中，而不是模型中
* 在使用 RESTful 的服务时将数据存储逻辑放到客户端模型中

提示： 找到逻辑应该放到哪儿的感觉需要经验，但是如果使用单元测试你将更早地找到问题，因为覆盖该逻辑所需写的测试将无法很好地与 MVC 模式相融合

当你积累了更多的 AngularJS 开发经验之后，知道应该把逻辑放到哪儿就会渐渐成为一种习惯，但是还得遵循以下这三条规则：

* 视图逻辑应该仅为显示准备数据，并且永远都不应该修改模型
* 控制器逻辑永远都不应该直接创建、更新或删除模型中的数据
* 客户端永远都不应该直接访问数据存储

如果你在开发时牢记这些，将会避免最常见的大多数问题

采用数据存储所依赖的数据格式 下一个问题将会出现在当开发团队搭建的应用程序依赖于服务端数据存储的某些特性时。最近我与一个项目团队一起工作，他们所搭建的客户端利用了他们的服务端 SQL Server 的某些特殊数据格式。他们所遇到的问题时他们需要升级到一个更健壮的数据库，而该数据库对于关键数据类型使用的是不同的表示方法 在一个设计良好的从 RESTful 服务获取数据的 AngularJS 应用程序中，服务端的职责应当是隐藏数据存储的实现细节，并向客户端以一种合适的数据格式表达数据，使得客户端使用起来简洁易用。例如，要决定客户端需要如何表示日期，并确保使用的是数据存储中的格式 —— 那么如果数据存储本身无法再支持这种格式，就应当是服务器端的职责来执行各种转换

墨守成规 AngularJS 最强大的特性之一是它是在 jQuery 基础上搭建的，特别是对于指令特性。然而，这所带来的问题是，理论上会使得在项目上使用 AngularJS 变得简单，但实际上以在幕后使用 jQuery 而告终 这看起来也许不像是设计问题，但是往往会使应用程序的轮廓发生变形，因为使用 jQuery 不易分离 MVC 的各个组件，并使得你所创建的 Web 应用难以测试、优化和维护。如果在一个 AngularJS 应用中你在直接使用 jQuery 操作 DOM，那么你就遇到问题了 正如我在本章中前面介绍的，AngularJS 并不是包揽任何功能的万能利器，在项目开发阶段决定打算使用哪些工具是很重要的。如果你打算使用 AngularJS，那么你需要确保不要回退到依赖于那些 jQuery 的隐藏捷径，这最后将会导致无尽的问题

# 第 4 章 HTML 和 Bootstrap CSS 入门

## 了解 HTML

参见 [HTML5 权威指南][]

## 了解 Bootstrap

为了便于演示基本的 Bootstrap 特性，在 angularjs 文件夹下创建了一个名为 bootstrap.html 的 HTML 文件

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Bootstrap Examples</title>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
</head>

<body>
    <div class="panel">
        <h3 class="panel-heading">Button Styles</h3>
        <button class="btn">Basic Button</button>
        <button class="btn btn-primary">Primary</button>
        <button class="btn btn-success">Success</button>
        <button class="btn btn-warning">Warning</button>
        <button class="btn btn-info">Info</button>
        <button class="btn btn-danger">Danger</button>
    </div>
    <div class="well">
        <h3 class="panel-heading">Button Sizes</h3>
        <button class="btn btn-large btn-success">Large Success</button>
        <button class="btn btn-warning">Standard Warning</button>
        <button class="btn btn-small btn-danger">Small Danger</button>
    </div>
    <div class="well">
        <h3 class="panel-heading">Block Buttons</h3>
        <button class="btn btn-block btn-large btn-success">Large Block Success</button>
        <button class="btn btn-block btn-warning">Standard Block Warning</button>
        <button class="btn btn-block btn-small btn-info">Small Block Info</button>
    </div>
</body>

</html>
```

使用基本的 Bootstrap 类 Bootstrap 样式是通过 class 属性使用的，用于关联相关的元素

提示： 并不是所有的 Bootstrap 样式都需要显式地使用 class 属性。标题 h1-h6 无论何时都可以自动地应用样式

例子中用到的基本 Bootstrap 类

| Bootstrap 类  | 描述                                                 |
| :------------ | :--------------------------------------------------- |
| panel         | 表示一个具有圆形边框的面板，一个面板可以有页眉和页脚 |
| panel-heading | 为面板创建标题                                       |
| btn           | 创建一个按钮                                         |
| well          | 使用插图效果将元素分组                               |

1. 修改样式上下文

   Bootstrap 定义了一组可应用到元素上的样式上下文类，用来表示其目的。这些类的指定方式是，将基础 Bootstrap 类的名字 (比如 btn)，一个连字符和 primary、success、warning、info 或 danger 这些词之一联合在一起

```html
   ...
   <button class="btn btn-primary">Primary</button>
   ...
```

上下文类必须和基础类一起使用，这也是为什么 button 元素同时具有 btn 和 btn-primary 类

1. 修改大小

   你可用通过使用大小修改类来改变某些元素被渲染样式的方式。这些类的指定方式是，将一个基础类的名字，一个连字符和 lg 或 sm 之一联合在一起

```html
   ...
   <button class="btn btn-lg btn-success">Large Success</button>
   ...
```

对于 button 元素，你可以使用 btn-block 类来创建一个能够填满合适的横向空间的按钮

```html
   ...
   <button class="btn btn-block btn-lg btn-success">Large Block Success</button>
   ...
```

用 Bootstrap 对表格使用样式 Bootstrap 也包括对表格元素样式的支持

用于表格的 Bootstrap CSS 类

| Bootstrap 类    | 描述                                    |
| :-------------- | :-------------------------------------- |
| table           | 对 table 元素及其内容使用一般样式       |
| table-striped   | 对 table 的主体部分使用各行条纹式的样式 |
| table-bordered  | 对所有行和列使用边框                    |
| table-hover     | 当鼠标滑过表格中的一行时显示不同的样式  |
| table-condensed | 减少表格中的空白以创建更精简的布局      |

所有这些类都可以直接用于 table 元素

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Bootstrap Examples</title>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
</head>

<body>
    <div class="panel">
        <h3 class="panel-heading">Standard Table with Context</h3>
        <table class="table">
            <thead>
                <tr>
                    <th>Country</th>
                    <th>Capital City</th>
                </tr>
            </thead>
            <tr class="success">
                <td>United Kingdom</td>
                <td>London</td>
            </tr>
            <tr class="danger">
                <td>France</td>
                <td>Paris</td>
            </tr>
            <tr>
                <td>Spain</td>
                <td class="warning">Madrid</td>
            </tr>
        </table>
    </div>
    <div class="panel">
        <h3 class="panel-heading">Striped, Bordered and Highlighted Table</h3>
        <table class="table table-striped table-bordered table-hover">
            <thead>
                <tr>
                    <th>Country</th>
                    <th>Capital City</th>
                </tr>
            </thead>
            <tr>
                <td>United Kingdom</td>
                <td>London</td>
            </tr>
            <tr>
                <td>France</td>
                <td>Paris</td>
            </tr>
            <tr>
                <td>Spain</td>
                <td>Madrid</td>
            </tr>
        </table>
    </div>
</body>

</html>
```

确保表格结构正确 注意，在示例中定义表格时我使用了 thead 元素。如果没有使用 thead 元素，那么浏览器将会自动地将 table 元素下的任何直接的 tr 子元素添加到一个 tbody 元素下。如果在使用 Bootstrap 时依赖于这一行为，你会得到一些奇怪的结果

使用 Bootstrap 创建表单

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Bootstrap Examples</title>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
</head>

<body>
    <div class="panel">
        <h3 class="panel-header">
            Form Elements
        </h3>
        <div class="form-group">
            <label>Name:</label>
            <input name="name" class="form-control" />
        </div>
        <div class="form-group">
            <label>Email:</label>
            <input name="email" class="form-control" />
        </div>

        <div class="radio">
            <label>
                <input type="radio" name="junkmail" value="yes" checked /> Yes, send me endless junk mail
            </label>
        </div>
        <div class="radio">
            <label>
                <input type="radio" name="junkmail" value="no" /> No, I never want to hear from you again
            </label>
        </div>
        <div class="checkbox">
            <label>
                <input type="checkbox" /> I agree to the terms and conditions.
            </label>
        </div>
        <input type="button" class="btn btn-primary" value="Subscribe" />
    </div>
</body>

</html>
```

对包含了一个 label 和一个 input 元素的 div 元素使用 form-group 类，可以应用可用于表单的基本样式

```html
...
<div class="form-group">
    <label>Email:</label>
    <input name="email" class="form-control" />
</div>
...
```

对于其他元素有不同的类，在示例中我使用了 checkbox 类，也应用到了 div 元素上，对于那些 type 被设置为 checkbox 的 input 元素

```html
...
<div class="checkbox">
    <label>
        <input type="checkbox" /> I agree to the terms and conditions.
    </label>
</div>
...
```

使用 Bootstrap 创建网格 Bootstrap 提供了可用于创建不同种类的网格布局的样式类，可以含有 1 到 12 列，并提供对响应式布局的支持

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Bootstrap Examples</title>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <style>
        #gridContainer {
            padding: 20px;
        }

        .grid-row>div {
            border: 1px solid lightgrey;
            padding: 10px;
            background-color: aliceblue;
            margin: 5px 0;
        }
    </style>
</head>

<body>
    <div class="panel">
        <h3 class="panel-header">
            Grid Layout
        </h3>
        <div id="gridContainer">
            <div class="row grid-row">
                <div class="col-xs-1">1</div>
                <div class="col-xs-1">1</div>
                <div class="col-xs-2">2</div>
                <div class="col-xs-2">2</div>
                <div class="col-xs-6">6</div>
            </div>
            <div class="row grid-row">
                <div class="col-xs-3">3</div>
                <div class="col-xs-4">4</div>
                <div class="col-xs-5">5</div>
            </div>
            <div class="row grid-row">
                <div class="col-xs-6">6</div>
                <div class="col-xs-6">6</div>
            </div>
            <div class="row grid-row">
                <div class="col-xs-11">11</div>
                <div class="col-xs-1">1</div>
            </div>
            <div class="row grid-row">
                <div class="col-xs-12">12</div>
            </div>
        </div>
    </div>
</body>

</html>
```

表格与网格 table 元素用于表示表格式的数据，却常用于在网格中展示内容。一般来说你应该使用 CSS 在网格中展示内容，因为使用表格会与内容和展现形式分离的原则相悖。CSS3 将网格布局纳入为规范的一部分，但却没有在主流浏览器上得到一致的实现。因此最好的选项就是使用类似 Bootstrap 这样的 CSS 框架 我一直坚持遵守的另一种模式是，知道遇到了一个需要解决的问题。在 Web 应用需要运行在不支持 CSS3 布局的设备上时，我使用 table 元素创建网格布局。像以前那样，我的设备仍然遵循元素类型与布局相分离的模式，但是当你找不到更好的代替品时，不要害怕使用 table 元素作为网格的方式

Bootstrap 网格布局是易于使用的。你只需要对一个 div 元素使用 row 类，就可以指定某一列，其效果是为 div 元素包含的内容设置为网格布局 每一行定义了 12 列，你可以给予子元素使用形如 col-xs 加列数的类名，来指定每个子元素占多少列 Bootstrap 并不对一行中的元素使用任何样式

创建响应式网格 响应式网格可以根据浏览器窗口的大小调整自身布局。响应式网格的主要用途是允许移动设备和桌面设备都可以显示同样的内容，无论有多大的可用屏幕空间都可以利用上

用于响应式表格的 Bootstrap CSS 类

| Bootstrap 类 | 描述                                       |
| :----------- | :----------------------------------------- |
| col-xs-*     |                                            |
| col-sm-*     | 当屏幕宽度大于 768 像素时水平显示网格单元  |
| col-md-*     | 当屏幕宽度大于 940 像素时水平显示网格单元  |
| col-lg-*     | 当屏幕宽度大于 1170 像素时水平显示网格单元 |

当屏幕宽度小于该类所支持的像素时，表格中的单元将以垂直形式排列，而不是水平形式

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Bootstrap Examples</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <style>
        #gridContainer {
            padding: 20px;
        }

        .grid-row>div {
            border: 1px solid lightgrey;
            padding: 10px;
            background-color: aliceblue;
            margin: 5px 0;
        }
    </style>
</head>

<body>
    <div class="panel">
        <h3 class="panel-header">
            Grid Layout
        </h3>
        <div id="gridContainer">
            <div class="row grid-row">
                <div class="col-sm-3">3</div>
                <div class="col-sm-4">4</div>
                <div class="col-sm-5">5</div>
            </div>
            <div class="row grid-row">
                <div class="col-sm-6">6</div>
                <div class="col-sm-6">6</div>
            </div>
            <div class="row grid-row">
                <div class="col-sm-11">11</div>
                <div class="col-sm-1">1</div>
            </div>
        </div>
    </div>
</body>

</html>
```

# 第 5 章 JavaScript 基础

参见 [HTML5 权威指南][]

## 准备示例项目

## 理解 script 元素

## 使用语句

## 定义并使用函数

在 JavaScript 中可以传递对象，所以让你知道对象是否为函数十分有用。为此 AngularJS 提供了 angular.isFunction 方法

注意： 所有的 AngularJS 工具方法都可以通过全局的 angular 对象访问

```html
<!DOCTYPE html>
<html>

<head>
    <title>Example</title>
    <script src="angular.js"></script>
    <script type="text/javascript">
        function printMessage(unknownObject) {
            if (angular.isFunction(unknownObject)) {
                unknownObject();
            } else {
                console.log(unknownObject);
            }
        }
        var variable1 = function sayHello() {
            console.log("Hello!");
        };
        var variable2 = "Goodbye!";
        printMessage(variable1);
        printMessage(variable2);
    </script>
</head>

<body>
    This is a simple example
</body>

</html>
```

## 使用变量及类型

使用基本类型

处理字符串的 AngularJS 方法

| 名称                      | 描述                                      |
| :------------------------ | :---------------------------------------- |
| angular.isString(object)  | 如果参数是字符串返回 true，否则返回 false |
| angular.lowercase(string) | 将参数转换为小写                          |
| angular.uppercase(string) | 将参数转换为大写                          |

创建对象

1. 使用对象字面量

2. 使用函数作为方法

3. 扩展对象

   AngularJS 通过 angular.extend 方法，使从一个对象往另一个对象复制方法和属性变得容易

```html
   <!DOCTYPE html>
   <html>

   <head>
       <title>Example</title>
       <script src="angular.js"></script>
       <script type="text/javascript">
           var myData = {
               name: "Adam",
               weather: "sunny",
               printMessages: function () {
                   console.log("Hello " + this.name + ". ");
                   console.log("Today is " + this.weather + ".");
               }
           };
           var myExtendedObject = {
               city: "London"
           };
           angular.extend(myExtendedObject, myData);
           console.log(myExtendedObject.name);
           console.log(myExtendedObject.city);

       </script>
   </head>

   <body>
       This is a simple example
   </body>

   </html>
```

在本例中，我创建了带有 city 属性的对象，并将它赋值给了变量 myExtendedObject。然后我使用 angular.extend 方法从 myData 对象上复制所有属性和函数到 myExtendedObject 上去

提示： angular.extend 方法保留目标对象上的所有属性和方法。如果你想无保留地创建对象的副本，可以使用 angular.copy 方法代替

使用对象

1. 检查对象

   AngularJS 提供 angular.isObject 方法，如果参数是对象则返回 true

```html
   <!DOCTYPE html>
   <html>

   <head>
       <title>Example</title>
       <script src="angular.js"></script>
       <script type="text/javascript">
           var myObject = {
               name: "Adam",
               weather: "sunny",
           };
           var myName = "Adam";
           var myNumber = 23;
           console.log("myObject: " + angular.isObject(myObject));
           console.log("myName: " + angular.isObject(myName));
           console.log("myNumber: " + angular.isObject(myNumber));
       </script>
   </head>

   <body>
       This is a simple example
   </body>

   </html>
```

1. 读取和修改属性的值
2. 枚举属性

```html
   <!DOCTYPE html>
   <html>

   <head>
       <title>Example</title>
       <script src="angular.js"></script>
       <script type="text/javascript">
           var myData = {
               name: "Adam",
               weather: "sunny",
               printMessages: function () {
                   console.log("Hello " + this.name + ". ");
                   console.log("Today is " + this.weather + ".");
               }
           };
           for (var prop in myData) {
               console.log("Name: " + prop + " Value: " + myData[prop]);
           }
           console.log("---");
           angular.forEach(myData, function (value, key) {
               console.log("Name: " + key + " Value: " + value);
           });
       </script>
   </head>

   <body>
       This is a simple example
   </body>

   </html>
```

JavaScript 的 for…in AngularJS 提供的 angular.forEach 方法是另一个选择，它要的是一个对象和一个将为其每个属性执行的函数。通过 value 和 key 参数将当前属性值及其名称传给函数

1. 添加和删除属性和方法

## 使用 JavaScript 运算符

使用条件语句

对比等于运算符和全等运算符

提示： AngularJS 用 angular.equals 方法扩展了内置的对比较的支持，它拿两个对象或值做参数，如果它们通过全等比较或者两个参数的对象并且它们的所有属性都通过全等比较，那就返回 true，我不倾向于使用该方法

显式转换类型

## 使用数组

## 比较 undefined 和 null 值

你也可以使用 AngularJS 的 angular.isDefined 和 angular.isUndefined 方法

```html
<!DOCTYPE html>
<html>

<head>
    <title>Example</title>
    <script src="angular.js"></script>
    <script type="text/javascript">
        var myData = {
            name: "Adam",
            city: null
        };

        console.log("name: " + angular.isDefined(myData.name));
        console.log("city: " + angular.isDefined(myData.city));
        console.log("country: " + angular.isDefined(myData.country));
    </script>
</head>

<body>
    This is a simple example
</body>

</html>
```

这些方法仅检查值是否已被定义，但不检查是否为 null，也不能用于区别 null 和 undefined 值

## 使用承诺

承诺是一种表述方式，它表明某项工作会以异步方式执行并在未来某个点被完成。最常遇到的方式是产生 Ajax 请求，当请求被完成时，浏览器会暗地里发出 HTTP 请求通知你的应用程序

```html
<!DOCTYPE html>
<html ng-app="demo">

<head>
    <title>Example</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script type="text/javascript">
        var myApp = angular.module("demo", []);

        myApp.controller("demoCtrl", function ($scope, $http) {
            var promise = $http.get("todo.json");
            promise.then(function (data) {
                $scope.todos = data.data;
            });
        });
    </script>
</head>

<body ng-controller="demoCtrl">
    <div class="panel">
        <h1>To Do</h1>
        <table class="table">
            <tr>
                <td>Action</td>
                <td>Done</td>
            </tr>
            <tr ng-repeat="item in todos">
                <td>{{item.action}}</td>
                <td>{{item.done}}</td>
            </tr>
        </table>
    </div>
</body>

</html>
```

示例的重要部分在这：

```javascript
...
myApp.controller("demoCtrl", function ($scope, $http) {
    var promise = $http.get("todo.json");
    promise.then(function (data) {
        $scope.todos = data.data;
    });
});
...
```

$http 服务用于产生 Ajax 请求，然后 get 方法取到你想从服务器获取的文件的 URL Ajax 请求是被异步执行的，当请求发出时，浏览器继续运行我的简单应用程序。$http.get 方法返回承诺对象，我可以用它接收关于 Ajax 请求的通知。then 方法是承诺对象所定义的三个中的一个

承诺对象定义的方法

| 名称                 | 描述                           |
| :------------------- | :----------------------------- |
| error(callback)      | 请求成功完成时调用指定的函数   |
| success(callback)    | 请求未成功完成时调用指定的函数 |
| then(success, error) | 注册成功或失败时调用的函数     |

三个方法都用函数作为参数，并根据承诺的结果而调用。回调函数 success 会被传入从服务器拿到的数据，而回调函数 error 接收遭遇到问题的详情

三个承诺方法都返回承诺对象，让异步任务可以按顺序链接在一起

```html
<!DOCTYPE html>
<html ng-app="demo">

<head>
    <title>Example</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script type="text/javascript">
        var myApp = angular.module("demo", []);

        myApp.controller("demoCtrl", function ($scope, $http) {
            $http.get("todo.json").then(function (response) {
                $scope.todos = response.data;
            }, function () {
                $scope.todos = [{ action: "Error" }];
            }).then(function () {
                $scope.todos.push({ action: "Request Complete" });
            });
        });
    </script>
</head>

<body ng-controller="demoCtrl">
    <div class="panel">
        <h1>To Do</h1>
        <table class="table">
            <tr>
                <td>Action</td>
                <td>Done</td>
            </tr>
            <tr ng-repeat="item in todos">
                <td>{{item.action}}</td>
                <td>{{item.done}}</td>
            </tr>
        </table>
    </div>
</body>

</html>
```

第一，我调用 get 方法创建了 Ajax 请求 第二，我使用 then 方法提供函数，它在 Ajax 请求完成时被调用。第一个在请求成功时调用，第二个在请求失败时调用 第三，我使用 then 方法再次添加了函数，这一次我仅仅为 then 放传入一个函数，意味着如果有问题我也不想要通知。最后的函数不顾之前被调用过的函数，向数据模型添加了一项

## 使用 JSON

JSON 支持一些基本的数据类型，与 JavaScript 巧妙地结合在了一起：Number、String、Boolean、Array、Object 和特殊类型 null JSON 数据看起来和 JavaScript 用来声明数组和对象的字面量类似。唯一不同的是对象的属性名被放到了引号中 AngularJS 使得使用 JSON 很简单。当你通过 Ajax 请求 JSON 数据时，响应会被自动解析成 JavaScript 对象并传给 success 函数，如上一示例中我使用 $http.get 方法从 Web 服务器获取 JSON 文件时所演示的那样 AngularJS 补充了两个显式编码和解码 JSON 的方法：angular.fromJson 和 angular.toJson

```html
<!DOCTYPE html>
<html ng-app="demo">

<head>
    <title>Example</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script type="text/javascript">
        var myApp = angular.module("demo", []);

        myApp.controller("demoCtrl", function ($scope, $http) {
            $http.get("todo.json").then(function (data) {
                var jsonString = angular.toJson(data.data);
                console.log(jsonString);
                $scope.todos = angular.fromJson(jsonString);
            });
        });
    </script>
</head>

<body ng-controller="demoCtrl">
    <div class="panel">
        <h1>To Do</h1>
        <table class="table">
            <tr>
                <td>Action</td>
                <td>Done</td>
            </tr>
            <tr ng-repeat="item in todos">
                <td>{{item.action}}</td>
                <td>{{item.done}}</td>
            </tr>
        </table>
    </div>
</body>

</html>
```

angular.fromJson 方法将 JSON 转换成对象 angular.toJson 方法将对象转换成 JSON

提示： 许多最常见的需要 JSON 数据的 AngularJS 功能都将自定编码和解码数据，所以你不会经常需要使用这些方法

# 第 6 章 SportsStore：一个真正的应用程序

## 开始

准备数据 第一步是创建新的 Deployd 应用程序，在和 angularjs 文件夹同级的位置创建一个名为 deployd 的文件夹，来存储生成的文件 切换到新创建的 deployd 目录，输入以下命令：

```npm
dpd create sportsstore
```

输入以下命令，以启动服务器

```npm
dpd –p 5500 sportsstore\app.dpd dashboard
```

打开 Deployd 控制面板，在浏览器中访问：`http://localhost:5500/dashboard/`

1. 创建数据结构
2. 添加数据
3. 测试数据服务

准备应用程序

1. 创建目录结构

   在 angularjs 文件夹中创建以下目录

   SportsStore 应用程序必需的文件夹

   | 名称        | 描述                            |
   | :---------- | :------------------------------ |
   | components  | 包括独立的自定义 AngularJS 组件 |
   | controllers | 包括应用程序的控制器            |
   | filters     | 包括自定义过滤器                |
   | ngmodules   | 包括可选 AngularJS 模块         |
   | views       | 包括应用程序的局部视图          |

2. 安装 AngularJS 和 Bootstrap

   将 angularjs 的主要 JavaScript 文件和 Bootstrap 的 CSS 文件放入 angularjs 主目录 并不是所有的功能都在 angularjs.js 文件中。为了 SportsStore 应用程序，我将需要一些可选模块中的附加功能，下载以下文件，并将它们放在 angularjs/ngmodules 文件夹中

   | 名称                | 描述                           |
   | :------------------ | :----------------------------- |
   | angular-route.js    | 添加 URL 路由的支持            |
   | angular-resource.js | 添加使用 RESTful 的 API 的支持 |

3. 构建基本大纲

   创建 app.html 文件

```html
   <!DOCTYPE html>
   <html ng-app="sportsStore">

   <head>
       <title>SportsStore</title>
       <script src="angular.js"></script>
       <link href="bootstrap.css" rel="stylesheet" />
       <link href="bootstrap-theme.css" rel="stylesheet" />
       <script>
           angular.module("sportsStore", []);
       </script>
   </head>

   <body>
       <div class="navbar navbar-inverse">
           <a class="navbar-brand" href="#">SPORTS STORE</a>
       </div>
       <div class="panel panel-default row">
           <div class="col-xs-3">
               Categories go here
           </div>
           <div class="col-xs-8">
               Products go here
           </div>
       </div>
   </body>

   </html>
```

在该文件中有两个 AngularJS 的特有格式。第一个是在 script 元素中调用 angular.module 方法

```html
   ...
   <script>
       angular.module("sportsStore", []);
   </script>
   ...
```

模块是在一个 AngularJS 应用程序中的顶级构建块，调用该方法创建了叫做 sportsStore 的新模块。这是马上构建模块的唯一做法，我会在之后使用它定义应用程序的功能 第二个方面是我在 html 元素上应用了 ng-app 指令

```html
   ...
   <html ng-app="sportsStore">
   ...
```

ng-app 指令使定义在 sportsStore 模块中的功能在 HTML 中也可以使用。我喜欢在 html 元素上应用 ng-app 指令，但你也可以更明确，通常也可以在 body 元素上应用它

## 显示伪造的产品数据

创建控制器 我需要控制器作为开端，定义逻辑和需要的数据，以支持其作用域中的视图。我要创建的控制器将被用于整个应用程序。创建新的 controllers/sportsStore.js 文件

```javascript
angular.module("sportsStore")
    .controller("sportsStoreCtrl", function ($scope) {
        $scope.data = {
            products: [
                {
                    name: "Product #1", description: "A product",
                    category: "Category #1", price: 100
                },
                {
                    name: "Product #2", description: "A product",
                    category: "Category #1", price: 110
                },
                {
                    name: "Product #3", description: "A product",
                    category: "Category #2", price: 210
                },
                {
                    name: "Product #4", description: "A product",
                    category: "Category #3", price: 202
                }]
        };
    });
```

注意该文件中的第一段是调用 angular.module 方法。这和我在 app.html 文件中调用的方法一样，定义 SportsStore 应用程序的主模块。不同的是当我定义模块时，提供了额外的参数 第二个参数是数组，目前是空的，它列出模块依赖于 SportsStore 的哪些模块，并让 AngularJS 找到并提供这些模块所提供的功能。如果你试图创建已经存在的模块，AngularJS 会有错误报告，所以你需要确保你的模块名是唯一的 相比之下，在 sportsStore.js 文件中调用 angular.module 方法时没有第二个参数 第二个参数的缺失会告诉 AngularJS，我想找到已经定义的模块。这种情况下，如果指定的模块不存在，AngularJS 会报告错误，所以你需要确保模块已经被创建 两种 angular.module 方法的使用都返回 module 对象，它可用于应用程序功能的定义。我使用 controller 方法定义控制器

注意： 我通常不会向这样在 HTML 文件中调用它以创建主要的应用程序模块，因为在 JavaScript 文件中做每件事都更容易。我分开表述的原因是由于 angular.module 的两用性会导致混淆

顶级控制器在 SportsStore 应用程序中的主要角色是，定义将被用于应用程序显示的不同视图。AngularJS 可以将多个控制器放在一个层级中，它们可以从上层的控制器继承数据和逻辑，而且通过在顶级控制器中定义数据，可以让稍后将定义的控制器更易于使用 我已经定义的数据是一个数组对象，和存储在 Deployd 的数据具有相同的属性，它让我可以立马开始，而不用等到产生 Ajax 请求获取真实产品信息后

注意： 我在控制器的作用域上定义数据时，我在数组中定义了数据，并将其赋值到 data 对象的 products 属性上，它会依次附着在作用域上。在定义你要继承的数据时必须要小心，不要直接将属性赋值到作用域上 (即 $scope.products = [data]))，因为这样其他控制器便可以读取数据，除非数据在频繁的被修改

显示产品详情 在 app.html 文件中添加一些 HTML 标签

```html
<!DOCTYPE html>
<html ng-app="sportsStore">

<head>
    <title>SportsStore</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("sportsStore", []);
    </script>
    <script src="controllers/sportsStore.js"></script>
</head>

<body ng-controller="sportsStoreCtrl">
    <div class="navbar navbar-inverse">
        <a class="navbar-brand" href="#">SPORTS STORE</a>
    </div>
    <div class="panel panel-default row">
        <div class="col-xs-3">
            Categories go here
        </div>
        <div class="col-xs-8">
            <div class="well" ng-repeat="item in data.products">
                <h3>
                    <strong>{{item.name}}</strong>
                    <span class="pull-right label label-primary">
                        {{item.price | currency}}
                    </span>
                </h3>
                <span class="lead">{{item.description}}</span>
            </div>
        </div>
    </div>
</body>

</html>
```

我添加了 script 元素从 controllers 文件夹中引入 sportsStore.js 文件。它包含 sportsStoreCtrl 控制器

```html
...
<script>
    angular.module("sportsStore", []);
</script>
<script src="controllers/sportsStore.js"></script>
...
```

我使用 ng-controller 指令为其视图使用控制器

```html
...
<body ng-controller="sportsStoreCtrl">
...
```

最后我创建了用于显示数据的元素，并为 item.price 应用了内置的 currency 过滤器

```html
...
<div class="well" ng-repeat="item in data.products">
    <h3>
        <strong>{{item.name}}</strong>
        <span class="pull-right label label-primary">
            {{item.price | currency}}
        </span>
    </h3>
    <span class="lead">{{item.description}}</span>
</div>
....
```

## 显示分类列表

创建分类列表 我想以产品数据对象动态生成分类元素，而不是写死 HTML 元素。可以使用一个自定义过滤器实现这个功能。在 filters 目录中创建文件 customFilters.js

```javascript
angular.module("customFilters", [])
    .filter("unique", function () {
        return function (data, propertyName) {
            if (angular.isArray(data) && angular.isString(propertyName)) {
                var results = [];
                var keys = {};
                for (var i = 0; i < data.length; i++) {
                    var val = data[i][propertyName];
                    if (angular.isUndefined(keys[val])) {
                        keys[val] = true;
                        results.push(val);
                    }
                }
                return results;
            } else {
                return data;
            }
        }
    });
```

自定义过滤器使用 module 对象定义的 filter 方法创建，它通过 angular.module 方法获取和创建。我创建了名为 customFilters 的新模块，以包含我的过滤器。这样我就可以向你展示如何在一个应用程序中定义和连接多个模块 给 filter 方法的参数是过滤器的名称，还有用来执行过滤的工厂函数。AngularJS 在其需要创建过滤器实例时调用该函数 所有过滤函数都会被传入需要格式化的数据，但我的过滤器定义了一个额外的参数 propertyName，我使用它指定将被用于生成唯一值列表的对象属性

提示： 我可以把过滤器写死去寻找 category 属性，但那样就会存在局限性。我将属性名作为参数而创建的过滤器可以用于生成任何属性的唯一值列表

提示： 改动过滤器使之只对用户显示的数据有效，不要修改作用域上的原数据

生成分类导航链接

```html
<!DOCTYPE html>
<html ng-app="sportsStore">

<head>
    <title>SportsStore</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("sportsStore", ["customFilters"]);
    </script>
    <script src="controllers/sportsStore.js"></script>
    <script src="filters/customFilters.js"></script>
</head>

<body ng-controller="sportsStoreCtrl">
    <div class="navbar navbar-inverse">
        <a class="navbar-brand" href="#">SPORTS STORE</a>
    </div>
    <div class="panel panel-default row">
        <div class="col-xs-3">
            <a ng-click="selectCategory()" class="btn btn-block btn-default btn-lg">Home</a>
            <a ng-repeat="item in data.products | orderBy:'category' | unique:'category'" ng-click="selectCategory(item)" class=" btn btn-block btn-default btn-lg">
                {{item}}
            </a>
        </div>
        <div class="col-xs-8">
            <div class="well" ng-repeat="item in data.products">
                <h3>
                    <strong>{{item.name}}</strong>
                    <span class="pull-right label label-primary">
                        {{item.price | currency}}
                    </span>
                </h3>
                <span class="lead">{{item.description}}</span>
            </div>
        </div>
    </div>
</body>

</html>
```

我做的第一个改动是更新 sportsStore 模块的定义，声明对我创建的 customFilters 模块的依赖，它包含 unique 过滤器

```html
...
<script>
    angular.module("sportsStore", ["customFilters"]);
</script>
...
```

这就是所谓的声明依赖。在这个例子中，我声明 sportsStore 模块依赖于 customFilters 模块中的功能。这使得 AngularJS 找到 customFilters 模块并使之可用，这样我就可以引用它所包含的组件，这一过程称为解析依赖 我还必须添加 script 元素以载入包含 customFilters 模块的文件

```html
...
<script>
    angular.module("sportsStore", ["customFilters"]);
</script>
<script src="controllers/sportsStore.js"></script>
<script src="filters/customFilters.js"></script>
...
```

注意我可以在创建 sportsStore 模块并声明依赖 customFilters 模块之后，再引入 customFilters.js 文件。在你扩展模块时模块必须先存在，但是在你声明依赖或定义新模块时就没有这个限制了

1. 生成导航元素

```html
   ...
   <a ng-click="selectCategory()" class="btn btn-block btn-default btn-lg">Home</a>
   <a ng-repeat="item in data.products | orderBy:'category' | unique:'category'" ng-click="selectCategory(item)" class=" btn btn-block btn-default btn-lg">
       {{item}}
   </a>
   ...
```

提示： 我指定属性名称时将其放在了单引号之间，AngularJS 默认将表达式中的名称解析为定义在作用域上的变量。要使用静态值，必须使用字符串字面量

提示： 我对调过滤器会有相同的效果。不同的是 orderBy 过滤器可能操作的是字符串数组而不是产品对象，因为 unique 过滤器返回的是字符串数组。过滤器 orderBy 被设计用于操作对象，但是你可以使用：orderBy:'toString ()' 来 排序字符串。别忘了引号，否则 AngularJS 会将 toString 视为作用域属性，而不是调用 toString () 方法

1. 处理单击事件

   我在元素上使用 ng-click 指令指定了当 click 事件出发时 AngularJS 应该做什么

选择分类 在浏览器中单击分类按钮现在不会有任何效果，因为 a 元素上的 ng-click 指令被设置要调用的控制器行为还没有被定义

1. 定义控制器

   为了响应用户单击分类按钮，我需要定义控制器行为 selectCategory。我不想在顶级控制器上添加行为，我要保留整个应用程序所需的行为和数据。作为替代，我会创建新控制器，它将仅被用于产品列表和分类视图。创建 controllers/productListControllers.js

```javascript
   angular.module("sportsStore")
       .controller("productListCtrl", function ($scope, $filter) {

           var selectedCategory = null;

           $scope.selectCategory = function (newCategory) {
               selectedCategory = newCategory;
           }

           $scope.categoryFilterFn = function (product) {
               return selectedCategory == null ||
                   product.category == selectedCategory;
           }
       });
```

我调用定义在 app.html 文件中的 sportsStore 模块上的 controller 方法创建了一个名为 productListCtrl 的控制器，在其中定义了 selectedCategory 行为，它将在每次点击分类时更新 selectedCategory 变量的值。控制器 还定义了 categoryFilterFn，它将过滤产品对象

提示： 注意变量 selectedCategory 没有定义在作用域上。它只是一个常规的 JavaScript 变量，说明它不能视图上的指令或数据绑定访问

1. 应用控制器并过滤产品

   我必须使用 ng-controller 指令向视图应用控制器，以使得 ng-click 指令可以调用 selectCategory 行为

```html
   <!DOCTYPE html>
   <html ng-app="sportsStore">

   <head>
       <title>SportsStore</title>
       <script src="angular.js"></script>
       <link href="bootstrap.css" rel="stylesheet" />
       <link href="bootstrap-theme.css" rel="stylesheet" />
       <script>
           angular.module("sportsStore", ["customFilters"]);
       </script>
       <script src="controllers/sportsStore.js"></script>
       <script src="filters/customFilters.js"></script>
       <script src="controllers/productListControllers.js"></script>
   </head>

   <body ng-controller="sportsStoreCtrl">
       <div class="navbar navbar-inverse">
           <a class="navbar-brand" href="#">SPORTS STORE</a>
       </div>
       <div class="panel panel-default row" ng-controller="productListCtrl">
           <div class="col-xs-3">
               <a ng-click="selectCategory()" class="btn btn-block btn-default btn-lg">Home</a>
               <a ng-repeat="item in data.products | orderBy:'category' | unique:'category'" ng-click="selectCategory(item)" class=" btn btn-block btn-default btn-lg">
                   {{item}}
               </a>
           </div>
           <div class="col-xs-8">
               <div class="well" ng-repeat="item in data.products | filter:categoryFilterFn">
                   <h3>
                       <strong>{{item.name}}</strong>
                       <span class="pull-right label label-primary">
                           {{item.price | currency}}
                       </span>
                   </h3>
                   <span class="lead">{{item.description}}</span>
               </div>
           </div>
       </div>
   </body>

   </html>
```

我添加了对 productListControllers.js 文件的引用，productListCtrl 控制器的 ng-controller 指令放在了 sportsStoreCtrl 控制器的作用域之中，意味着我们可以利用控制器作用域继承

高亮显示选择的分类 先在控制器上添加行为

```javascript
angular.module("sportsStore")
    .constant("productListActiveClass", "btn-primary")
    .controller("productListCtrl", function ($scope, $filter, productListActiveClass) {

        var selectedCategory = null;

        $scope.selectCategory = function (newCategory) {
            selectedCategory = newCategory;
        }

        $scope.categoryFilterFn = function (product) {
            return selectedCategory == null ||
                product.category == selectedCategory;
        }

        $scope.getCategoryClass = function (category) {
            return selectedCategory == category ? productListActiveClass : "";
        }
    });
```

我不想在行为代码中嵌入 class 名，所以我使用 Model 对象上的 constant 方法定义常量 productListActiveClass，在控制器中访问该值，我必须声明常量名称作为依赖

```javascript
...
.controller("productListCtrl", function ($scope, $filter, productListActiveClass) {
...
```

在 app.html 文件中使用 ng-class 指令

```html
...
<div class="col-xs-3">
    <a ng-click="selectCategory()" class="btn btn-block btn-default btn-lg">Home</a>
    <a ng-repeat="item in data.products | orderBy:'category' | unique:'category'" ng-click="selectCategory(item)" class=" btn btn-block btn-default btn-lg"
        ng-class="getCategoryClass(item)">
        {{item}}
    </a>
</div>
...
```

添加分页

1. 更新控制器

   我更新了 productListCtrl 控制器来支持分页

```javascript
   angular.module("sportsStore")
       .constant("productListActiveClass", "btn-primary")
       .constant("productListPageCount", 3)
       .controller("productListCtrl", function ($scope, $filter, productListActiveClass, productListPageCount) {

           var selectedCategory = null;

           $scope.selectedPage = 1;
           $scope.pageSize = productListPageCount;

           $scope.selectCategory = function (newCategory) {
               selectedCategory = newCategory;
               $scope.selectedPage = 1;
           }

           $scope.selectPage = function (newPage) {
               $scope.selectedPage = newPage;
           }

           $scope.categoryFilterFn = function (product) {
               return selectedCategory == null ||
                   product.category == selectedCategory;
           }

           $scope.getCategoryClass = function (category) {
               return selectedCategory == category ? productListActiveClass : "";
           }

           $scope.getPageClass = function (page) {
               return $scope.selectedPage == page ? productListActiveClass : "";
           }
       });
```

显示在页面上的产品数量被定义为常量 productListPageCount，我声明其作为控制器的依赖。在控制器中我定义了两个作用域上的变量来暴露页数和当前被选中的页。同时还定义了 getPageClass，它用来高亮显示被选中的 页面

1. 实现过滤器

   我在 customFilters.js 中创建了两个新的过滤器支持分页

```javascript
   angular.module("customFilters", [])
       .filter("unique", function () {
           return function (data, propertyName) {
               if (angular.isArray(data) && angular.isString(propertyName)) {
                   var results = [];
                   var keys = {};
                   for (var i = 0; i < data.length; i++) {
                       var val = data[i][propertyName];
                       if (angular.isUndefined(keys[val])) {
                           keys[val] = true;
                           results.push(val);
                       }
                   }
                   return results;
               } else {
                   return data;
               }
           }
       })
       .filter("range", function ($filter) {
           return function (data, page, size) {
               if (angular.isArray(data) && angular.isNumber(page) && angular.isNumber(size)) {
                   var start_index = (page - 1) * size;
                   if (data.length < start_index) {
                       return [];
                   } else {
                       return $filter("limitTo")(data.splice(start_index), size);
                   }
               } else {
                   return data;
               }
           }
       })
       .filter("pageCount", function () {
           return function (data, size) {
               if (angular.isArray(data)) {
                   var result = [];
                   for (var i = 0; i < Math.ceil(data.length / size); i++) {
                       result.push(i);
                   }
                   return result;
               } else {
                   return data;
               }
           }
       });
```

过滤器 range 从数组中返回一系列元素。过滤器接收参数有当前被选页面和页面尺寸。其中使用了内置过滤器 limitTo，它从从数组返回指定数量的条目 pageCount 过滤器是 "脏" 的。目的是通过生成的数组执行 ng-repeat 指令以创建分页元素

1. 更新视图

```html
   <!DOCTYPE html>
   <html ng-app="sportsStore">

   <head>
       <title>SportsStore</title>
       <script src="angular.js"></script>
       <link href="bootstrap.css" rel="stylesheet" />
       <link href="bootstrap-theme.css" rel="stylesheet" />
       <script>
           angular.module("sportsStore", ["customFilters"]);
       </script>
       <script src="controllers/sportsStore.js"></script>
       <script src="filters/customFilters.js"></script>
       <script src="controllers/productListControllers.js"></script>
   </head>

   <body ng-controller="sportsStoreCtrl">
       <div class="navbar navbar-inverse">
           <a class="navbar-brand" href="#">SPORTS STORE</a>
       </div>
       <div class="panel panel-default row" ng-controller="productListCtrl">
           <div class="col-xs-3">
               <a ng-click="selectCategory()" class="btn btn-block btn-default btn-lg">Home</a>
               <a ng-repeat="item in data.products | orderBy:'category' | unique:'category'" ng-click="selectCategory(item)" class=" btn btn-block btn-default btn-lg"
                   ng-class="getCategoryClass(item)">
                   {{item}}
               </a>
           </div>
           <div class="col-xs-8">
               <div class="well" ng-repeat="item in data.products | filter:categoryFilterFn | range:selectedPage:pageSize">
                   <h3>
                       <strong>{{item.name}}</strong>
                       <span class="pull-right label label-primary">
                           {{item.price | currency}}
                       </span>
                   </h3>
                   <span class="lead">{{item.description}}</span>
               </div>
               <div class="pull-right btn-group">
                   <a ng-repeat="page in data.products | filter:categoryFilterFn | pageCount:pageSize" ng-click="selectPage($index + 1)" class="btn btn-default"
                       ng-class="getPageClass($index + 1)">
                       {{$index + 1}}
                   </a>
               </div>
           </div>
       </div>
   </body>

   </html>
```

# 第 7 章 SportsStore：导航和结账

## 准备实例项目

## 使用真实项目数据

```javascript
angular.module("sportsStore")
    .constant("dataUrl", "http://localhost:5500/products")
    .controller("sportsStoreCtrl", function ($scope, $http, dataUrl) {

        $scope.data = {};

        $http.get(dataUrl)
            .then(function (response) {
                $scope.data.products = response.data;
            }, function (error) {
                $scope.data.error = error;
            });
    });
```

注意： 原文中使用 success 和 error，这两个方法已被弃用，现用 then 方法实现其功能

处理 Ajax 错误

```html
<!DOCTYPE html>
<html ng-app="sportsStore">

<head>
    <title>SportsStore</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("sportsStore", ["customFilters"]);
    </script>
    <script src="controllers/sportsStore.js"></script>
    <script src="filters/customFilters.js"></script>
    <script src="controllers/productListControllers.js"></script>
</head>

<body ng-controller="sportsStoreCtrl">
    <div class="navbar navbar-inverse">
        <a class="navbar-brand" href="#">SPORTS STORE</a>
    </div>
    <div class="alert alert-danger" ng-show="data.error">
        Error ({{data.error.status}}). The product data was not loaded.
        <a href="/app.html" class="alert-link">Click here to try again</a>
    </div>
    <div class="panel panel-default row" ng-controller="productListCtrl" ng-hide="data.error">
        <div class="col-xs-3">
            <a ng-click="selectCategory()" class="btn btn-block btn-default btn-lg">Home</a>
            <a ng-repeat="item in data.products | orderBy:'category' | unique:'category'" ng-click="selectCategory(item)" class=" btn btn-block btn-default btn-lg"
                ng-class="getCategoryClass(item)">
                {{item}}
            </a>
        </div>
        <div class="col-xs-8">
            <div class="well" ng-repeat="item in data.products | filter:categoryFilterFn | range:selectedPage:pageSize">
                <h3>
                    <strong>{{item.name}}</strong>
                    <span class="pull-right label label-primary">
                        {{item.price | currency}}
                    </span>
                </h3>
                <span class="lead">{{item.description}}</span>
            </div>
            <div class="pull-right btn-group">
                <a ng-repeat="page in data.products | filter:categoryFilterFn | pageCount:pageSize" ng-click="selectPage($index + 1)" class="btn btn-default"
                    ng-class="getPageClass($index + 1)">
                    {{$index + 1}}
                </a>
            </div>
        </div>
    </div>
</body>

</html>
```

## 创建局部视图

在 app.html 文件中的 HTML 错综复杂，没法一下子弄清楚每个元素都在做什么。我可以拆分标签成独立的文件，让后使用 ng-include 指令在运行时引入那些文件。为了这个目的我创建了 views/productList.html 文件

```html
<div class="panel panel-default row" ng-controller="productListCtrl" ng-hide="data.error">
    <div class="col-xs-3">
        <a ng-click="selectCategory()" class="btn btn-block btn-default btn-lg">Home</a>
        <a ng-repeat="item in data.products | orderBy:'category' | unique:'category'" ng-click="selectCategory(item)" class=" btn btn-block btn-default btn-lg"
            ng-class="getCategoryClass(item)">
            {{item}}
        </a>
    </div>
    <div class="col-xs-8">
        <div class="well" ng-repeat="item in data.products | filter:categoryFilterFn | range:selectedPage:pageSize">
            <h3>
                <strong>{{item.name}}</strong>
                <span class="pull-right label label-primary">
                    {{item.price | currency}}
                </span>
            </h3>
            <span class="lead">{{item.description}}</span>
        </div>
        <div class="pull-right btn-group">
            <a ng-repeat="page in data.products | filter:categoryFilterFn | pageCount:pageSize" ng-click="selectPage($index + 1)" class="btn btn-default"
                ng-class="getPageClass($index + 1)">
                {{$index + 1}}
            </a>
        </div>
    </div>
</div>
```

从 app.html 文件中删除这些元素，并用 ng-include 指令替换它们

```html
<!DOCTYPE html>
<html ng-app="sportsStore">

<head>
    <title>SportsStore</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("sportsStore", ["customFilters"]);
    </script>
    <script src="controllers/sportsStore.js"></script>
    <script src="filters/customFilters.js"></script>
    <script src="controllers/productListControllers.js"></script>
</head>

<body ng-controller="sportsStoreCtrl">
    <div class="navbar navbar-inverse">
        <a class="navbar-brand" href="#">SPORTS STORE</a>
    </div>
    <div class="alert alert-danger" ng-show="data.error">
        Error ({{data.error.status}}). The product data was not loaded.
        <a href="/app.html" class="alert-link">Click here to try again</a>
    </div>

    <ng-include src="'views/productList.html'"></ng-include>

</body>

</html>
```

提示： 使用局部视图有三个好处。第一是将应用程序拆成可管理的块，正如我在这做的。第二是创建在一个应用程序中可复用的 HTML 片段。第三是使其更易于为用户显示不同的功能区域

提示： 在使用 ng-include 指令时，我将文件名写成单引号的字面量。如果我不这么做，那指令会在作用域属性上寻找文件

## 创建购物车

![购物车基本流程][]

定义购物车模块和服务 我首先创建 components/cart 文件夹并向其添加 cart.js 文件

```javascript
angular.module("cart", [])
    .factory("cart", function () {

        var cartData = [];

        return {
            addProduct: function (id, name, price) {
                var addedToExistingItem = false;
                for (var i = 0; i < cartData.length; i++) {
                    if (cartData[i].id == id) {
                        cartData[i].count++;
                        addedToExistingItem = true;
                        break;
                    }
                }
                if (!addedToExistingItem) {
                    cartData.push({
                        count: 1, id: id, price: price, name: name
                    });
                }
            },

            removeProduct: function (id) {
                for (var i = 0; i < cartData.length; i++) {
                    if (cartData[i].id == id) {
                        cartData.splice(i, 1);
                        break;
                    }
                }
            },

            getProducts: function () {
                return cartData;
            }
        }
    });
```

我在这里使用了 module.factory 方法，传入服务名称和工厂函数 我的 cart 服务工厂函数返回对象，该对象有三个方法

创建购物车部件 向 cart.js 添加指令

```javascript
angular.module("cart", [])
    .factory("cart", function () {
        var cartData = [];
        return {
            // ...service statements omitted for brevity...
        }
    })
    .directive("cartSummary", function (cart) {
        return {
            restrict: "E",
            templateUrl: "components/cart/cartSummary.html",
            controller: function ($scope) {
                var cartData = cart.getProducts();
                $scope.total = function () {
                    var total = 0;
                    for (var i = 0; i < cartData.length; i++) {
                        total += (cartData[i].price * cartData[i].count);
                    }
                    return total;
                }
                $scope.itemCount = function () {
                    var total = 0;
                    for (var i = 0; i < cartData.length; i++) {
                        total += cartData[i].count;
                    }
                    return total;
                }
            }
        };
    });
```

指令由 AngularJS 模块上的 directive 方法创建，传入指令名和返回指令定义的工厂函数。指令定义中定义的属性告诉 AngularJS 你的指令做什么和如何做。我在 cartSummary 中定义了三个属性：

restrict，指定指令如何应用。E 值说明该指令只能作为元素应用。EA 表示该指令可以作为元素或属性应用 templateUrl，指定将被插入指令的元素内容的局部视图 controller，指定向局部视图提供数据和行为的控制器

简单来说，我的指令定义了控制器，告诉 AngularJS 使用 components/cart/cartSummary.html 视图，还约束了指令让其仅作为元素而被使用。注意控制器声明了对 cart 服务的依赖，它定义在相同的模块中。控制器定义的行为可用于局部视图

```html
<style>
    .navbar-right {
        float: right !important;
        margin-right: 5px;
    }

    .navbar-text {
        margin-right: 10px;
    }
</style>
<div class="navbar-right">
    <div class="navbar-text">
        <b>Your cart:</b>
        {{itemCount()}} item(s), {{total() | currency}}
    </div>
    <a class="btn btn-default navbar-btn">Checkout</a>
</div>
```

提示： 该布局视图包含 style 元素。我通常不喜欢在局部视图中嵌入 style 元素，但当这些更改仅影响该视图，并且存在少量 CSS 时我会这样使用。在其他情况下，我将定义独立的 CSS 文件并将它引入应用程序的主 HTML 文件

应用购物车部件 在应用程序中应用购物车部件需要三个步骤：添加添加 script 元素将 JavaScript 文件的内容引入，添加对 cart 模块的依赖，还有在标签上添加指令内容

```html
<!DOCTYPE html>
<html ng-app="sportsStore">

<head>
    <title>SportsStore</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("sportsStore", ["customFilters", "cart"]);
    </script>
    <script src="controllers/sportsStore.js"></script>
    <script src="filters/customFilters.js"></script>
    <script src="controllers/productListControllers.js"></script>
    <script src="components/cart/cart.js"></script>
</head>

<body ng-controller="sportsStoreCtrl">
    <div class="navbar navbar-inverse">
        <a class="navbar-brand" href="#">SPORTS STORE</a>

        <cart-summary />

    </div>
    <div class="alert alert-danger" ng-show="data.error">
        Error ({{data.error.status}}). The product data was not loaded.
        <a href="/app.html" class="alert-link">Click here to try again</a>
    </div>

    <ng-include src="'views/productList.html'"></ng-include>

</body>

</html>
```

注意，我定义指令时使用了名称 cartSummary，但我在 app.html 中添加的元素是 cart-summary。AngularJS 在两种格式之间映射以正常化组件名

添加产品选择按钮 首先向 productListCtrl 控制器添加添加产品的行为

```javascript
angular.module("sportsStore")
    .constant("productListActiveClass", "btn-primary")
    .constant("productListPageCount", 3)
    .controller("productListCtrl", function ($scope, $filter, productListActiveClass, productListPageCount, cart) {

        var selectedCategory = null;

        $scope.selectedPage = 1;
        $scope.pageSize = productListPageCount;

        $scope.selectCategory = function (newCategory) {
            selectedCategory = newCategory;
            $scope.selectedPage = 1;
        }

        $scope.selectPage = function (newPage) {
            $scope.selectedPage = newPage;
        }

        $scope.categoryFilterFn = function (product) {
            return selectedCategory == null ||
                product.category == selectedCategory;
        }

        $scope.getCategoryClass = function (category) {
            return selectedCategory == category ? productListActiveClass : "";
        }

        $scope.getPageClass = function (page) {
            return $scope.selectedPage == page ? productListActiveClass : "";
        }

        $scope.addProductToCart = function (product) {
            cart.addProduct(product.id, product.name, product.price);
        }
    });
```

我声明了对 cart 的依赖，以调用 cart.addProduct 将产品添加到购物车中

接着向局部视图 productList.html 添加加入到购物车按钮

```html
<div class="panel panel-default row" ng-controller="productListCtrl" ng-hide="data.error">
    <div class="col-xs-3">
        <a ng-click="selectCategory()" class="btn btn-block btn-default btn-lg">Home</a>
        <a ng-repeat="item in data.products | orderBy:'category' | unique:'category'" ng-click="selectCategory(item)" class=" btn btn-block btn-default btn-lg"
            ng-class="getCategoryClass(item)">
            {{item}}
        </a>
    </div>
    <div class="col-xs-8">
        <div class="well" ng-repeat="item in data.products | filter:categoryFilterFn | range:selectedPage:pageSize">
            <h3>
                <strong>{{item.name}}</strong>
                <span class="pull-right label label-primary">
                    {{item.price | currency}}
                </span>
            </h3>
            <button ng-click="addProductToCart(item)" class="btn btn-success pull-right">
                Add to cart
            </button>
            <span class="lead">{{item.description}}</span>
        </div>
        <div class="pull-right btn-group">
            <a ng-repeat="page in data.products | filter:categoryFilterFn | pageCount:pageSize" ng-click="selectPage($index + 1)" class="btn btn-default"
                ng-class="getPageClass($index + 1)">
                {{$index + 1}}
            </a>
        </div>
    </div>
</div>
```

## 添加 URL 导航

在添加结账功能的支持之前，我想先添加 URL 路由的支持 首先我要创建在用户开始结账时要显示的视图 views/checkoutSummary.html

```html
<div class="lead">
    This is the checkout summary view
</div>
<a href="#!/products" class="btn btn-primary">Back</a>
```

注意： 原文中使用`#/` 形式的路由已被弃用，现用`#!/` 形式的新路由

定义 URL 路由 我将从定义我需要的路由开始，它映射指定 URL 于该 URL 应该显示的视图。首先 /product 和 /checkout 将分别映射到 productList.html 和 checkoutSummary.html 视图。其他路由都将默认显示 productList.html 视图。我在 app.html 中对路由做了改动

```html
<!DOCTYPE html>
<html ng-app="sportsStore">

<head>
    <title>SportsStore</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("sportsStore", ["customFilters", "cart", "ngRoute"])
            .config(function ($routeProvider) {

                $routeProvider.when("/checkout", {
                    templateUrl: "/views/checkoutSummary.html"
                });

                $routeProvider.when("/products", {
                    templateUrl: "/views/productList.html"
                });

                $routeProvider.otherwise({
                    templateUrl: "/views/productList.html"
                });
            });
    </script>
    <script src="controllers/sportsStore.js"></script>
    <script src="filters/customFilters.js"></script>
    <script src="controllers/productListControllers.js"></script>
    <script src="components/cart/cart.js"></script>
    <script src="ngmodules/angular-route.js"></script>
</head>

<body ng-controller="sportsStoreCtrl">
    <div class="navbar navbar-inverse">
        <a class="navbar-brand" href="#">SPORTS STORE</a>

        <cart-summary />

    </div>
    <div class="alert alert-danger" ng-show="data.error">
        Error ({{data.error.status}}). The product data was not loaded.
        <a href="/app.html" class="alert-link">Click here to try again</a>
    </div>

    <ng-view />

</body>

</html>
```

我添加了 script 元素将 angular-route.js 文件引入应用程序。该文件提供的功能是在 ngRoute 模块中定义的，我生命了它作为 sportsStore 模块的依赖 我调用模块上的 config 方法设置我的路由。config 方法获取函数作为其参数，它在模块被载入而应用程序还未执行之前执行，提供一次性任意配置任务的机会 我传入 config 方法的函数声明依赖于提供器。创建 AngularJS 服务有不同的方式，其中之一就是创建可通过提供器对象配置的服务，它的名字是服务名与 Provider 连接而成的。我声明依赖的 $routeProvider 就是 $route 服务的提供器，它用于在应用程序中设置 URL 路由

我使用 $routeProvider 对象定义的两个方法设置我需要的路由，when 方法让我能将 URL 匹配视图。我还使用 otherwise 定义了不匹配 when 方法定义的任意一个路由时应该被使用的视图

显示路由视图 路由策略定义了根据拿到的 URL 路径而应该被显示的视图是哪一个，但它没有告诉 AngularJS 它们在哪显示。为此我需要 ng-view 指令。不用进行配置，只是添加指令，告诉 AngularJS 它应该将目前被选则的视图的内容插入到哪里

使用 URL 路由导航

```html
<style>
    .navbar-right {
        float: right !important;
        margin-right: 5px;
    }

    .navbar-text {
        margin-right: 10px;
    }
</style>
<div class="navbar-right">
    <div class="navbar-text">
        <b>Your cart:</b>
        {{itemCount()}} item(s), {{total() | currency}}
    </div>
    <a href="#!/checkout" class="btn btn-default navbar-btn">Checkout</a>
</div>
```

使用 URL 路由的主要好处是组件可以改变 ng-wiew 指令所显示的布局，而不需要预先了解将被显示的视图的任何信息。这使其易于扩展为复杂的应用程序，也使其只改变 URL 路由的配置就可以改变应用程序的行为

## 开始结账流程

第一个任务是定义新的控制器 controllers/checkoutControllers.js

```javascript
angular.module("sportsStore")
    .controller("cartSummaryController", function ($scope, cart) {
        $scope.cartData = cart.getProducts();
        $scope.total = function () {
            var total = 0;
            for (var i = 0; i < $scope.cartData.length; i++) {
                total += ($scope.cartData[i].price * $scope.cartData[i].count);
            }
            return total;
        }
        $scope.remove = function (id) {
            cart.removeProduct(id);
        }
    });
```

新控制器被添加到 sportsStore 模块上并依赖于 cart 服务，它通过作用域属性 cartData 暴露购物车，并定义计算购物车中计算产品的总值，以及从购物车中删除产品的行为。使用控制器创建的特性，我可以完善 checkoutSummary.html 文件

```html
<h2>Your cart</h2>
<div ng-controller="cartSummaryController">
    <div class="alert alert-warning" ng-show="cartData.length == 0">
        There are no products in your shopping cart.
        <a href="#!/products" class="alert-link">Click here to return to the catalogue</a>
    </div>
    <div ng-hide="cartData.length == 0">
        <table class="table">
            <thead>
                <tr>
                    <th>Quantity</th>
                    <th>Item</th>
                    <th class="text-right">Price</th>
                    <th class="text-right">Subtotal</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="item in cartData">
                    <td class="text-center">{{item.count}}</td>
                    <td class="text-left">{{item.name}}</td>
                    <td class="text-right">{{item.price | currency}}</td>
                    <td class="text-right">{{ (item.price * item.count) | currency}}</td>
                    <td>
                        <button ng-click="remove(item.id)" class="btn btn-sm btn-warning">Remove</button>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="3" class="text-right">Total:</td>
                    <td class="text-right">
                        {{total() | currency}}
                    </td>
                </tr>
            </tfoot>
        </table>
        <div class="text-center">
            <a class="btn btn-primary" href="#!/products">Continue shopping</a>
            <a class="btn btn-primary" href="#!/placeorder">Place order now</a>
        </div>
    </div>
</div>
```

应用结账总览 向 app.html 添加 script 元素，并定义我完成结账流程将会需要的额外的路由

```html
<!DOCTYPE html>
<html ng-app="sportsStore">

<head>
    <title>SportsStore</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("sportsStore", ["customFilters", "cart", "ngRoute"])
            .config(function ($routeProvider) {

                $routeProvider.when("/complete", {
                    templateUrl: "/views/thankYou.html"
                });

                $routeProvider.when("/placeorder", {
                    templateUrl: "/views/placeOrder.html"
                });

                $routeProvider.when("/checkout", {
                    templateUrl: "/views/checkoutSummary.html"
                });

                $routeProvider.when("/products", {
                    templateUrl: "/views/productList.html"
                });

                $routeProvider.otherwise({
                    templateUrl: "/views/productList.html"
                });
            });
    </script>
    <script src="controllers/sportsStore.js"></script>
    <script src="filters/customFilters.js"></script>
    <script src="controllers/productListControllers.js"></script>
    <script src="components/cart/cart.js"></script>
    <script src="ngmodules/angular-route.js"></script>
    <script src="controllers/checkoutControllers.js"></script>
</head>

<body ng-controller="sportsStoreCtrl">
    <div class="navbar navbar-inverse">
        <a class="navbar-brand" href="#">SPORTS STORE</a>

        <cart-summary />

    </div>
    <div class="alert alert-danger" ng-show="data.error">
        Error ({{data.error.status}}). The product data was not loaded.
        <a href="/app.html" class="alert-link">Click here to try again</a>
    </div>

    <ng-view />

</body>

</html>
```

新的路由对应的视图将在下一章创建

# 第 8 章 SportsStore：订单和管理

## 准备示例程序

## 获取运输详情

我创建了 views/placeOrder.html 文件捕获用户的运输详情

```html
<h2>Check out now</h2>
<p>Please enter your details, and we'll ship your goods right away!</p>

<div class="well">
    <h3>Ship to</h3>
    <div class="form-group">
        <label>Name</label>
        <input class="form-control" ng-model="data.shipping.name" />
    </div>

    <h3>Address</h3>

    <div class="form-group">
        <label>Street Address</label>
        <input class="form-control" ng-model="data.shipping.street" />
    </div>

    <div class="text-center">
        <button class="btn btn-primary">Complete order</button>
    </div>
</div>
```

关于该视图，首先要注意的是我没有使用 ng-controller 指令指定控制器。这意味着视图将被顶级控制器 sportsStoreCrtl 支持，它管理包括 ng-view 指令在内的视图。我指出这点是因为你不是非得为局部视图添加控制器，当视图不需要任何附加行为时这样比较方便 在示例中最重要的 AngularJS 特性是在 input 元素上对 ng-model 指令的使用 ng-model 指令设有双向数据绑定

提示： 我并非必须更新控制器，让它定义其作用域上的 data.shipping 对象或单独的 name 和 street 属性。AngularJS 作用域非常灵活，如果你预先没定义好，假定你想动态定义属性也是可以的

添加表单验证 AngularJS 支持表单验证，它能检查数值的适用性 AngularJS 表单验证基于表单元素上标准的 HTML 属性，比如 type 和 required。表单验证自动执行，但仍需要一些工作来将验证的反馈呈现给用户，并在应用程序中整合整体验证的结果

1. 验证的准备

   设置表单验证的第一步是在视图上添加 form 元素并在 input 元素上添加验证属性

```html
   <h2>Check out now</h2>
   <p>Please enter your details, and we'll ship your goods right away!</p>

   <form name="shippingForm" novalidate>
       <div class="well">
           <h3>Ship to</h3>
           <div class="form-group">
               <label>Name</label>
               <input class="form-control" ng-model="data.shipping.name" required />
           </div>

           <h3>Address</h3>
           <div class="form-group">
               <label>Street Address</label>
               <input class="form-control" ng-model="data.shipping.street" required />
           </div>

           <div class="text-center">
               <button class="btn btn-primary">Complete order</button>
           </div>
       </div>
   </form>
```

form 元素有三个目的，哪怕我没在应用程序中使用浏览器内置支持的表单验证 第一个目的是启用验证。在自定义指令中 AngularJS 重新定义了一些 HTML 元素以使用特殊特性，其中一个元素就是 form。没有 form 元素，AngularJS 就无法验证诸如 input、select、textarea 等元素的内容 表单元素的第二个目的是禁用任何浏览器可能会执行的验证，它可以通过 novalidate 属性的使用来禁用浏览器验证。它能确保只有 AngularJS 检查用户提供的数据，避免重复验证 最后一个表单元素的目的是定义一个变量，用来报告表单的有效性。它通过 name 属性实现 除此之外，我在 input 元素上使用了 required 属性。这是一个 AngularJS 可以识别的验证属性

1. 显示验证反馈

   一旦 form 元素和验证属性被放好，AngularJS 就会开始验证用户所提供的数据，但我必须拿到用户所有的反馈。有两种反馈形式供我使用：我可以利用 AngularJS 赋给 form 元素的通过验证和未通过验证的 class 来定义 CSS 样式，我还可以使用作用域变量控制相应元素的反馈信息的可见性

```html
   <style>
       .ng-invalid {
           background-color: lightpink;
       }

       .ng-valid {
           background-color: lightgreen;
       }

       span.error {
           color: red;
           font-weight: bold;
       }
   </style>

   <h2>Check out now</h2>
   <p>Please enter your details, and we'll ship your goods right away!</p>

   <form name="shippingForm" novalidate>
       <div class="well">
           <h3>Ship to</h3>
           <div class="form-group">
               <label>Name</label>
               <input name="name" class="form-control" ng-model="data.shipping.name" required />
               <span class="error" ng-show="shippingForm.name.$error.required">
                   Please enter a name
               </span>
           </div>

           <h3>Address</h3>
           <div class="form-group">
               <label>Street Address</label>
               <input name="street" class="form-control" ng-model="data.shipping.street" required />
               <span class="error" ng-show="shippingForm.street.$error.required">
                   Please enter a street address
               </span>
           </div>

           <div class="text-center">
               <button class="btn btn-primary">Complete order</button>
           </div>
       </div>
   </form>
```

AngularJS 赋予 form 元素 ng-valid 和 ng-invalid 样式类，所以我定义了 style 元素 CSS 样式有指示 input 元素有问题的效果，但无法提示问题是什么。为此，我必须为每个元素添加 name 属性，并使用 AngularJS 添加到作用域的验证数据来控制错误信息的可见性

```html
   ...
   <input name="street" class="form-control" ng-model="data.shipping.street" required />
   <span class="error" ng-show="shippingForm.street.$error.required">
       Please enter a street address
   </span>
   ...
```

1. 连接按钮来验证

   在大多数的 Web 应用程序中，所有表单数据都被提供并验证前，都不允许用户到下一步。为了这一目的，我想在未通过表单验证时禁用 "Complete order" 按钮，并在适当的完成表单之后启用它

```html
   ...
   <div class="text-center">
       <button ng-disabled="shippingForm.$invalid" class="btn btn-primary">Complete order</button>
   </div>
   ...
```

添加剩下的表单字段

```html
   <style>
       .ng-invalid {
           background-color: lightpink;
       }

       .ng-valid {
           background-color: lightgreen;
       }

       span.error {
           color: red;
           font-weight: bold;
       }
   </style>

   <h2>Check out now</h2>
   <p>Please enter your details, and we'll ship your goods right away!</p>

   <form name="shippingForm" novalidate>
       <div class="well">
           <h3>Ship to</h3>
           <div class="form-group">
               <label>Name</label>
               <input name="name" class="form-control" ng-model="data.shipping.name" required />
               <span class="error" ng-show="shippingForm.name.$error.required">
                   Please enter a name
               </span>
           </div>

           <h3>Address</h3>
           <div class="form-group">
               <label>Street Address</label>
               <input name="street" class="form-control" ng-model="data.shipping.street" required />
               <span class="error" ng-show="shippingForm.street.$error.required">
                   Please enter a street address
               </span>
           </div>

           <div class="form-group">
               <label>City</label>
               <input name="city" class="form-control" ng-model="data.shipping.city" required />
               <span class="error" ng-show="shippingForm.city.$error.required">
                   Please enter a city
               </span>
           </div>

           <div class="form-group">
               <label>State</label>
               <input name="state" class="form-control" ng-model="data.shipping.state" required />
               <span class="error" ng-show="shippingForm.state.$error.required">
                   Please enter a state
               </span>
           </div>

           <div class="form-group">
               <label>Zip</label>
               <input name="zip" class="form-control" ng-model="data.shipping.zip" required />
               <span class="error" ng-show="shippingForm.zip.$error.required">
                   Please enter a zip code
               </span>
           </div>

           <div class="form-group">
               <label>Country</label>
               <input name="country" class="form-control" ng-model="data.shipping.country" required />
               <span class="error" ng-show="shippingForm.country.$error.required">
                   Please enter a country
               </span>
           </div>

           <h3>Options</h3>
           <div class="checkbox">
               <label>
                   <input name="giftwrap" type="checkbox" ng-model="data.shipping.giftwrap" /> Gift wrap these items
               </label>
           </div>

           <div class="text-center">
               <button ng-disabled="shippingForm.$invalid" class="btn btn-primary">Complete order</button>
           </div>
       </div>
   </form>
```

## 下单

扩展 Deployd 服务 添加新的集合

定义控制器行为 向顶级控制器 sportsStore 中添加发送订单数据到 Deployd 服务器的行为

```javascript
angular.module("sportsStore")
    .constant("dataUrl", "http://localhost:5500/products")
    .constant("orderUrl", "http://localhost:5500/orders")
    .controller("sportsStoreCtrl", function ($scope, $http, $location,
        dataUrl, orderUrl, cart) {

        $scope.data = {};

        $http.get(dataUrl)
            .then(function (response) {
                $scope.data.products = response.data;
            }, function (error) {
                $scope.data.error = error;
            });

        $scope.sendOrder = function (shippingDetails) {
            var order = angular.copy(shippingDetails);
            order.products = cart.getProducts();
            $http.post(orderUrl, order)
                .then(function (data) {
                    $scope.data.orderId = data.id;
                    cart.getProducts().length = 0;
                }, function (error) {
                    $scope.data.orderError = error;
                })
                .finally(function () {
                    $location.path("/complete");
                });
        }
    });
```

调用控制器行为

```html
...
<div class="text-center">
    <button ng-disabled="shippingForm.$invalid" ng-click="sendOrder(data.shipping)" class="btn btn-primary">
        Complete order
    </button>
</div>
...
```

定义视图 请求完成后，我所指定的 URL 路径是 /complete，URL 路由配置会映射它到 /view/thankYou.html

```html
<div class="alert alert-danger" ng-show="data.orderError">
    Error ({{data.orderError.status}}). The order could not be placed.
    <a href="#/placeorder" class="alert-link">Click here to try again</a>
</div>
<div class="well" ng-hide="data.orderError">
    <h2>Thanks!</h2>
    Thanks for placing your order. We'll ship your goods as soon as possible. If you need to contact us, use reference {{data.orderId}}.
</div>
```

## 改进

首先，当你在浏览器中载入 app.html 文件，你可能注意到在视图被显示和产品及分类元素被生成之间有一点延迟。这是因为 Ajax 请求获取数据发生在后端，当等待服务器返回数据时，AngularJS 继续执行应用程序并显示视图，当数据到达再更新它们 然后，为了导航和分页特性，我处理产品数据并筛出分类。在实际项目中，我会考虑在产品数据首次到达时只生成该信息一次，之后就复用它 最后，我会使用 $animate 服务显示短的、突出的动画，在 URL 路径改变时从一个视图过渡到另一个视图

## 管理产品类别

准备 Deployd 添加用户集合

巩固集合 我喜爱的 Deployd 的特性之一是它定义了可用于实现服务端功能的简单 JavaScript API，当对集合进行操作时可以触发一系列的事件。在控制台中单击 products 集合，然后单击 Events，你将看到一系列不同事件的选项卡：On Get、On Validate、On Post、On Put 和 On Delete。这些事件为整个集合定义。你能做许多事情。比如使用 JavaScript 加强验证策略。在 On Put 和 On Delete 标签中输入以下 JavaScript

```javascript
if (me === undefined || me.username != "admin") {
    cancel("No authorization", 401);
}
```

在 Deployd 的 API 中，变量 me 代表当前用户，而 cacel 函数使用指定的消息和 HTTP 状态码终止请求

在 orders 集合中为所有的事件重复这一过程，除了 On Post 和 On Validate

创建管理应用程序 向 angularjs 文件夹添加新文件 admin.html

```html
<!DOCTYPE html>
<html ng-app="sportsStoreAdmin">

<head>
    <title>Administration</title>
    <script src="angular.js"></script>
    <script src="ngmodules/angular-route.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("sportsStoreAdmin", ["ngRoute"])
            .config(function ($routeProvider) {

                $routeProvider.when("/login", {
                    templateUrl: "/views/adminLogin.html"
                });

                $routeProvider.when("/main", {
                    templateUrl: "/views/adminMain.html"
                });

                $routeProvider.otherwise({
                    redirectTo: "/login"
                });
            });
    </script>
</head>

<body>
    <ng-view />
</body>

</html>
```

为了定义路由的 otherwise 方法，我使用了 redirectTo，它将重定向路由到其它路径

添加占位视图 创建验证成功后显示的视图 /views/adminMain.html

```html
<div class="well">
    This is the main view
</div>
```

实现验证 Deployd 验证用户使用标准 HTTP 请求。应用程序发送 POST 请求到 /users/login 并提供 username 和 password 作为参数。如果成功服务器响应状态码 200，如果验证失败则返回 401. 为实现验证我先定义产生 Ajax 调用的控制器 controllers/adminControllers.js

```javascript
angular.module("sportsStoreAdmin")
    .constant("authUrl", "http://localhost:5500/users/login")
    .controller("authCtrl", function ($scope, $http, $location, authUrl) {

        $scope.authenticate = function (user, pass) {
            $http.post(authUrl, {
                username: user,
                password: pass
            }, {
                    withCredentials: true
                }).then(function (data) {
                    $location.path("/main");
                }, function (error) {
                    $scope.authenticationError = error;
                });
        }
    });
```

我使用 angular.module 方法扩展了 sportsStoreAdmin 模块，它是在 admin.html 文件中创建的。我使用 constant 方法指定将被用于验证请求的 URL，以及创建 authCtrl 控制器，定义行为 authenticate 去接收 username 和 password 值作为参数，并使用 $http.post 方法向 Deployd 服务器发出 Ajax 请求，请求成功时我使用 $location 服务改变浏览器路径

提示： 我向 $http.post 提供了可选配置对象，它设置 withCredentials 为 true。这会启用跨域请求的支持，允许 Ajax 请求使用 cookie 处理验证。不启用该项，浏览器将忽略 Deployd 响应的 cookie

我需要在 admin.html 文件中引入包含控制器的 JavaScript 文件，注意确保它在定义了被扩展模块的 script 元素之后

```html
<!DOCTYPE html>
<html ng-app="sportsStoreAdmin">

<head>
    <title>Administration</title>
    <script src="angular.js"></script>
    <script src="ngmodules/angular-route.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("sportsStoreAdmin", ["ngRoute"])
            .config(function ($routeProvider) {

                $routeProvider.when("/login", {
                    templateUrl: "/views/adminLogin.html"
                });

                $routeProvider.when("/main", {
                    templateUrl: "/views/adminMain.html"
                });

                $routeProvider.otherwise({
                    redirectTo: "/login"
                });
            });
    </script>
    <script src="controllers/adminControllers.js"></script>
</head>

<body>
    <ng-view />
</body>

</html>
```

定义验证视图 创建 views/adminLogin.html 文件

```html
<div class="well" ng-controller="authCtrl">

    <div class="alert alert-info" ng-hide="authenticationError">
        Enter your username and password and click Log In to authenticate
    </div>
    <div class="alert alert-danger" ng-show="authenticationError">
        Authentication Failed ({{authenticationError.status}}). Try again.
    </div>

    <form name="authForm" novalidate>
        <div class="form-group">
            <label>Username</label>
            <input name="username" class="form-control" ng-model="username" required />
        </div>
        <div class="form-group">
            <label>Password</label>
            <input name="password" type="password" class="form-control" ng-model="password" required />
        </div>
        <div class="text-center">
            <button ng-click="authenticate(username, password)" ng-disabled="authForm.$invalid" class="btn btn-primary">
                Log In
            </button>
        </div>
    </form>
</div>
```

定义主视图和控制器 定义用于显示产品和订单列表的占位内容。首先，我创建 views/adminProducts.html 文件

```html
<div class="well">
    This is the product view
</div
```

然后，创建 views/adminOrders.html 文件

```html
<div class="well">
    This is the order view
</div
```

我需要占位，这样才能演示管理应用程序中的视图流。URL 路由特性有一系列限制：你不能嵌套多个 ng-view 指令。这使得在 ng-view 中难以安排不同视图的显示。我将演示如何使用 ng-include 指令来处理它，作为不太优雅的替代品。我在 adminControllers.js 文件中定义新的控制器

```javascript
angular.module("sportsStoreAdmin")
    .constant("authUrl", "http://localhost:5500/users/login")
    .controller("authCtrl", function ($scope, $http, $location, authUrl) {

        $scope.authenticate = function (user, pass) {
            $http.post(authUrl, {
                username: user,
                password: pass
            }, {
                    withCredentials: true
                }).then(function (data) {
                    $location.path("/main");
                }, function (error) {
                    $scope.authenticationError = error;
                });
        }
    })
    .controller("mainCtrl", function ($scope) {

        $scope.screens = ["Products", "Orders"];
        $scope.current = $scope.screens[0];

        $scope.setScreen = function (index) {
            $scope.current = $scope.screens[index];
        };

        $scope.getScreen = function () {
            return $scope.current == "Products"
                ? "/views/adminProducts.html" : "/views/adminOrders.html";
        };
    });
```

新控制器叫做 mainCtrl，它提供我使用 ng-include 指令管理视图所需要的行为和数据，这和生成切换视图的导航按钮一样，行为 setScreen 用于改变显示的视图，行为 getScreen 用于获取要显示的视图

修改 adminMain.html 文件

```html
<div class="panel panel-default row" ng-controller="mainCtrl">
    <div class="col-xs-3 panel-body">
        <a ng-repeat="item in screens" class="btn btn-block btn-default" ng-class="{'btn-primary': item == current }" ng-click="setScreen($index)">
            {{item}}
        </a>
    </div>
    <div class="col-xs-8 panel-body">
        <div ng-include="getScreen()" />
    </div>
</div>
```

该视图使用 ng-repeat 指令为 screens 数组生成元素，ng-repeat 指令定义了一些指定的变量，这些变量可以在其生成的元素内引用，其中之一就是 $index。我在 ng-click 指令上用这个值来调用控制器行为 setScreen 视图最重要的地方是使用 ng-include 指令，ng-include 指令可以传入行为

实现订单特性 添加新的控制器到 adminControllers.js 文件，使用 $http 服务向 Deployd 发送 Ajax 的 GET 请求获取订单

```javascript
angular.module("sportsStoreAdmin")
    .constant("authUrl", "http://localhost:5500/users/login")
    .constant("ordersUrl", "http://localhost:5500/orders")
    .controller("authCtrl", function ($scope, $http, $location, authUrl) {

        // ...controller statements omitted for brevity...

    })
    .controller("mainCtrl", function ($scope) {

        // ...controller statements omitted for brevity...

    })
    .controller("ordersCtrl", function ($scope, $http, ordersUrl) {

        $http.get(ordersUrl, { withCredentials: true })
            .then(function (response) {
                $scope.orders = response.data;
            }, function (error) {
                $scope.error = error;
            });

        $scope.selectedOrder;

        $scope.selectOrder = function (order) {
            $scope.selectedOrder = order;
        };

        $scope.calcTotal = function (order) {
            var total = 0;
            for (var i = 0; i < order.products.length; i++) {
                total +=
                    order.products[i].count * order.products[i].price;
            }
            return total;
        }
    });
```

我定义了 URL 常量。控制器函数产生到该 URL 的 Ajax 请求并将数据对象赋给作用域上的 orders 属性，或者赋给 error 对象。注意在调用 $http.get 方法时我设置了 withCredentials 配置项，和执行验证时的一样。这可以确保浏览器将用于安全验证的 cookie 发送给 Deployd 以验证请求 selectOrder 被调用以设置 selectedOrder 属性，我将使用它获取订单详情。行为 calcTotal 算出订单中产品金额的总和 有了 ordersCtrl 控制器，我对 adminOrders.html 文件做了更新

```html
<div ng-controller="ordersCtrl">

    <table class="table table-striped table-bordered">
        <tr>
            <th>Name</th>
            <th>City</th>
            <th>Value</th>
            <th></th>
        </tr>
        <tr ng-repeat="order in orders">
            <td>{{order.name}}</td>
            <td>{{order.city}}</td>
            <td>{{calcTotal(order) | currency}}</td>
            <td>
                <button ng-click="selectOrder(order)" class="btn btn-xs btn-primary">
                    Details
                </button>
            </td>
        </tr>
    </table>

    <div ng-show="selectedOrder">
        <h3>Order Details</h3>
        <table class="table table-striped table-bordered">
            <tr>
                <th>Name</th>
                <th>Count</th>
                <th>Price</th>
            </tr>
            <tr ng-repeat="item in selectedOrder.products">
                <td>{{item.name}}</td>
                <td>{{item.count}}</td>
                <td>{{item.price| currency}} </td>
            </tr>
        </table>
    </div>
</div>
```

视图有两个 table 元素组成。第一个 table 显示订单摘要，连带一个 button 元素，它调用行为 selectOrder 以突出显示订单。第二个 table 只在订单被选中时可见，它显示订单详情

实现产品特性 你可以使用 $http 服务来做 RESTful 的 API，但这么做意味着你必须暴露整组执行贯穿应用程序的操作的 URL。你可以这样定义为你执行操作的服务，但更优雅的替代品是使用可选模块 ngResource 中的 resource 服务，它也有漂亮的方式处理用于发送请求到服务器的 URL 的定义

1. 定义 RESTful 控制器

   创建 controllers/adminProductController.js 文件

```javascript
   angular.module("sportsStoreAdmin")
       .constant("productUrl", "http://localhost:5500/products/")
       .config(function ($httpProvider) {
           $httpProvider.defaults.withCredentials = true;
       })
       .controller("productCtrl", function ($scope, $resource, productUrl) {

           $scope.productsResource = $resource(productUrl + ":id", { id: "@id" });

           $scope.listProducts = function () {
               $scope.products = $scope.productsResource.query();
           }

           $scope.deleteProduct = function (product) {
               product.$delete().then(function () {
                   $scope.products.splice($scope.products.indexOf(product), 1);
               });
           }

           $scope.createProduct = function (product) {
               new $scope.productsResource(product).$save().then(function (newProduct) {
                   $scope.products.push(newProduct);
                   $scope.editedProduct = null;
               });
           }

           $scope.updateProduct = function (product) {
               product.$save();
               $scope.editedProduct = null;
           }

           $scope.startEdit = function (product) {
               $scope.editedProduct = product;
           }

           $scope.cancelEdit = function () {
               $scope.editedProduct = null;
           }

           $scope.listProducts();
       });
```

首先，$resource 服务是建立在 $http 服务所提供的特性基础上的。这意味着我需要启用 withCredentials 选项做点适当的工作，我之前获取验证使用过它。我没有权限访问 $http 服务产生的请求，但我可以通过调用模块上的 config 方法改变所有 Ajax 请求的默认设置，并声明依赖于 $http 服务的提供器

```javascript
   ...
   .config(function ($httpProvider) {
       $httpProvider.defaults.withCredentials = true;
   })
   ...
```

本示例中最重要的一段是：

```javascript
   ...
   $scope.productsResource = $resource(productUrl + ":id", { id: "@id" });
   ...
```

传入 $resource 的第一个参数用来定义将用于产生擦洗的 URL 格式。":id" 部分与第二个参数的映射对象一致，告诉 AngularJS 如果数据对象中有 id 属性，那它应该被添加到用于 Ajax 请求的 URL 中 用于访问 RESTful 的 API 的 URL 和 HTTP 方法是由这两个参数推断出来的，这说明我并非一定要使用 $http 服务产生独立的 Ajax 调用 访问对象是使用 $resource 服务的结果，有 query、get、delete、remove 和 save 方法，可用来获取或操作服务器来的数据。调用这些方法触发执行必要操作的 Ajax 请求

提示： 由访问对象定义的方法与 Deplooyd 所定义的 API 并不完全一致，不过 Deployd 很灵活，足以接收 $resource 服务产生的请求

控制器中的大部分代码都以可用的方式为视图提供了它们的方法，但在 $resource 实现中这些方式有一点问题。由 query 方法返回的数据对象不会在对象被创建或删除时被自动更新，所以我必须包含用于保持本地集合与远端改变同步

1. 定义视图

   更新 views/adminProducts.html 视图

```html
   <style>
       #productTable {
           width: auto;
       }

       #productTable td {
           max-width: 150px;
           text-overflow: ellipsis;
           overflow: hidden;
           white-space: nowrap;
       }

       #productTable td input {
           max-width: 125px;
       }
   </style>

   <div ng-controller="productCtrl">
       <table id="productTable" class="table table-striped table-bordered">
           <tr>
               <th>Name</th>
               <th>Description</th>
               <th>Category</th>
               <th>Price</th>
               <th></th>
           </tr>
           <tr ng-repeat="item in products" ng-hide="item.id == editedProduct.id">
               <td>{{item.name}}</td>
               <td class="description">{{item.description}}</td>
               <td>{{item.category}}</td>
               <td>{{item.price | currency}}</td>
               <td>
                   <button ng-click="startEdit(item)" class="btn btn-xs btn-primary">
                       Edit
                   </button>
                   <button ng-click="deleteProduct(item)" class="btn btn-xs btn-primary">
                       Delete
                   </button>
               </td>
           </tr>
           <tr ng-class="{danger: editedProduct}">
               <td>
                   <input ng-model="editedProduct.name" required />
               </td>
               <td>
                   <input ng-model="editedProduct.description" required />
               </td>
               <td>
                   <input ng-model="editedProduct.category" required />
               </td>
               <td>
                   <input ng-model="editedProduct.price" required />
               </td>
               <td>
                   <button ng-hide="editedProduct.id" ng-click="createProduct(editedProduct)" class="btn btn-xs btn-primary">
                       Create
                   </button>
                   <button ng-show="editedProduct.id" ng-click="updateProduct(editedProduct)" class="btn btn-xs btn-primary">
                       Save
                   </button>
                   <button ng-show="editedProduct" ng-click="cancelEdit()" class="btn btn-xs btn-primary">
                       Cancel
                   </button>
               </td>
           </tr>
       </table>
   </div>
```

1. 添加 HTML 文件的引用

   在 admin.html 文件中添加 script 元素来引入新模块和新控制器并更新主应用程序模块，好让它声明依赖于 ngResource

```html
   <!DOCTYPE html>
   <html ng-app="sportsStoreAdmin">

   <head>
       <title>Administration</title>
       <script src="angular.js"></script>
       <script src="ngmodules/angular-route.js"></script>
       <script src="ngmodules/angular-resource.js"></script>
       <link href="bootstrap.css" rel="stylesheet" />
       <link href="bootstrap-theme.css" rel="stylesheet" />
       <script>
           angular.module("sportsStoreAdmin", ["ngRoute", "ngResource"])
               .config(function ($routeProvider) {

                   $routeProvider.when("/login", {
                       templateUrl: "/views/adminLogin.html"
                   });

                   $routeProvider.when("/main", {
                       templateUrl: "/views/adminMain.html"
                   });

                   $routeProvider.otherwise({
                       redirectTo: "/login"
                   });
               });
       </script>
       <script src="controllers/adminControllers.js"></script>
       <script src="controllers/adminProductController.js"></script>
   </head>

   <body>
       <ng-view />
   </body>

   </html>
```

# 第 9 章 AngularJS 应用剖析

AngularJS 应用程序遵循的是第三章所描述的 MVC 模式，但是开发过程本身依赖于一系列更广泛的构件。当然，存在一些最主要的构件，如模型、视图和控制器，但是在 AngularJS 应用中还有许多其他可供灵活使用的部件，包括模块、指令、过滤器、工厂和服务

## 准备示例项目

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>AngularJS Demo</title>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script src="angular.js"></script>
    <script>
        var myApp = angular.module("exampleApp", []);
        myApp.controller("dayCtrl", function ($scope) {
            // controller statements will go here
        });
    </script>
</head>

<body>
    <div class="panel" ng-controller="dayCtrl">
        <div class="page-header">
            <h3>AngularJS App</h3>
        </div>
        <h4>Today is {{day || "(unknown)"}}</h4>
    </div>
</body>

</html>
```

## 使用模块工作

模块是 AngularJS 应用程序中的顶层组件。实际上无需引入模块也能搭建出简单的 AngularJS 应用，但是不推荐这么做，应为简单的应用程序随着时间推移会变复杂，当变得无法管理时最后的结果只能是重写整个程序。使用模块工作相当简单，而且需要设置和管理模块时仅需写少量额外的 JavaScript 语句，这是值得的投资。在一个 AngularJS 应用中模块具有三种主要角色：

* 将 AngularJS 应用程序与 HTML 文档的区域相关联
* 充当关键 AngularJS 框架功能的门户
* 帮助组织 AngularJS 应用程序中的代码和组件

设置 AngularJS 应用程序的边界 在创建一个 AngularJS 应用程序时的第一步是定义一个模块并将其和 HTML 文档中的一部分区域关联起来。模块是通过 AngularJS.module 方法定义的

```javascript
...
var myApp = angular.module("exampleApp", []);
...
```

module 方法支持三个参数，但是通常只使用前两个 当创建一个将会与 HTML 文档相关联的模块时，惯例是给模块一个名为 App 的后缀名。这个习惯的好处在于更为清晰地体现出模块代表的是代码结构中的顶层 AngularJS 应用程序 —— 这在会包含多个模块的复杂应用程序中将很有用

angular.module 方法所接受的参数

| 名称     | 描述                                    |
| :------- | :-------------------------------------- |
| name     | 新模块的名称                            |
| requires | 该模块所依赖的模块集合                  |
| config   | 该模块的配置，等效于 module.config 方法 |

在 JavaScript 中定义模块只是整个过程的一部分，模块还必须通过 ng-app 属性应用到 HTML 内容中。当 AngularJS 是唯一被使用的框架时，惯例是将 ng-app 属性应用到 html 元素上

```html
...
<html ng-app="exampleApp">
...
```

避免落入模块创建 / 查找陷阱 当创建一个模块时，你必须指定 name 和 requires 参数，即使你的模块并不存在依赖 如果忽略了 requires 参数，AngularJS 就会试图查找一个之前创建过的名为 name 的模块，而不是创建一个。这可能会导致错误

## 使用模块定义 AngularJS 组件

angular.module 方法返回一个 module 对象，也用于使用 AngularJS 所提供的一些重要特性

module 对象的成员方法

| 名称                          | 描述                                                    |
| :---------------------------- | :------------------------------------------------------ |
| animation(name, factory)      | 支持动画特性                                            |
| config(callback)              | 注册一个在模块加载时对该模块进行配置的函数              |
| constant(key, value)          | 定义一个返回常量的服务                                  |
| controller(name, constructor) | 创建一个控制器                                          |
| directive(name, factory)      | 创建一个指令，对标准的 HTML 词汇进行扩展                |
| factory(name, provider)       | 创建一个服务                                            |
| filter(name, factory)         | 创建一个对显示给用户的数据进行格式化的过滤器            |
| provider(name, type)          | 创建一个服务                                            |
| name                          | 返回模块名称                                            |
| run(callback)                 | 注册一个在 AngularJS 加载完毕后对所有模块进行配置的函数 |
| service(name, constructor)    | 创建一个服务                                            |
| value(name, value)            | 定义一个返回常量的服务                                  |

提示： constant 和 value 方法都将创建服务，只是这些服务的可用范围是有限的。这并不影响你使用这些方法，但我认为深刻理解 AngularJS 是如何广泛地使用服务还是不错的

module 对象定义的方法分为三大类：为 AngularJS 应用程序定义组件的方法，使创建这些构建块更容易的方法，以及有助于管理 AngularJS 生命周期的方法

定义控制器 控制室是使用 module.controller 方法来定义的，该方法接受两个参数：控制器名称和一个工厂函数，该函数用于设置控制器并使其就绪

```javascript
...
myApp.controller("dayCtrl", function ($scope) {
    // controller statements will go here
});
...
```

控制器名称的习惯是使用 Ctrl 后缀。传给 Model.controller 的函数用于声明控制器的依赖，即控制器所需的 AngularJS 组件。AngularJS 提供了一些以 $ 符号开头命名的内置服务与特性。$scope 请求 AngularJS 为控制器提供作用域 这是一个依赖注入的例子，AngularJS 会检查函数的参数，并查找相应的组件。AngularJS 将会在函数被调用时自动传入作用域对象

理解依赖注入 一个 AngularJS 应用程序中的一些组件将会依赖于其他组件 依赖注入简化了在组件之间处理依赖的过程。没有依赖注入就不得不以某种方式自己查找依赖项，很可能使用全局变量。这虽然也能够工作，但是不如 AngularJS 的依赖注入技术这么简单 AngularJS 应用程序中的一个组件通过在工厂函数的参数上声明依赖，声明的名称要与所依赖的组件相匹配 换言之，依赖注入改变了函数参数的用途，没有依赖注入，参数将会被用于接收调用者想传入的任何对象，但有了依赖注入后，函数使用参数来提出需求，告诉 AngularJS 它需要什么样的构件 AngularJS 中的依赖注入工作方式所带来的有趣的副作用之一是，参数的顺序总是得与声明依赖的顺序相匹配

```javascript
...
myApp.controller("dayCtrl", function ($scope, $filter) {
...
```

传给函数的第一个参数将是 $scope 组件，第二个将是 $filter 服务对象

```javascript
...
myApp.controller("dayCtrl", function ($filter, $scope) {
...
```

传给函数的第一个参数是 $filter 服务对象，第二个是 $scope 组件。简而言之，你声明依赖注入参数的顺序无关紧要。这一点不同与 JavaScript 通常的工作方式 在开发中使用依赖注入的好处是 AngularJS 负责管理组件并在需要时提供给相应的函数。依赖注入还能为测试带来好处，因为它允许你能够使用假的或者模拟的对象来代替真实构件，从而让你专注于程序的特定部分

1. 将控制器用于视图

   定义控制器只是整个过程的一部分 —— 还必须将其应用于 HTML 元素才能让 AngularJS 知道 HTML 文档的哪一部分构成了给定的控制器的视图。这是通过 ng-controller 属性实现的

```html
   ...
   <body>
       <div class="panel" ng-controller="dayCtrl">
           <div class="page-header">
               <h3>AngularJS App</h3>
           </div>
           <h4>Today is {{day || "(unknown)"}}</h4>
       </div>
   </body>
   ...
```

ng-controller 被属性应用到元素及该元素包括的内容 在创建控制器时指定给参数的 $scope 参数是用于向视图提供数据的，而且只有通过 $scope 配置的数据才能用于表达式和数据绑定中。目前，当你在浏览器中查看 example.html 文件时，数据绑定会生成空 "unknown"，因为我使 用了 "||" 操作符来合并空值

```html
   ...
   <h4>Today is {{day || "(unknown)"}}</h4>
   ...
```

AngularJS 的数据绑定的一个极好的特性是可以使用 JavaScript 表达式。要对 day 属性提供一个值，必须在控制器设置函数中将它赋给 $scope

```javascript
   ...
   <script>
       var myApp = angular.module("exampleApp", []);
       myApp.controller("dayCtrl", function ($scope) {
           var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Staturday"];
           $scope.day = dayNames[new Date().getDay()]
       });
   </script>
   ...
```

1. 创建多个视图

   每个控制器可以支持多个视图，这允许同一份数据以多种不同形式展现

```html
   <!DOCTYPE html>
   <html ng-app="exampleApp">

   <head>
       <title>AngularJS Demo</title>
       <link href="bootstrap.css" rel="stylesheet" />
       <link href="bootstrap-theme.css" rel="stylesheet" />
       <script src="angular.js"></script>
       <script>
           var myApp = angular.module("exampleApp", []);
           myApp.controller("dayCtrl", function ($scope) {
               var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Staturday"];
               $scope.day = dayNames[new Date().getDay()];
               $scope.tomorrow = dayNames[(new Date().getDay() + 1) % 7];
           });
       </script>
   </head>

   <body>
       <div class="panel">
           <div class="page-header">
               <h3>AngularJS App</h3>
           </div>
           <h4 ng-controller="dayCtrl">Today is {{day || "(unknown)"}}</h4>
           <h4 ng-controller="dayCtrl">Tomorrow is {{tomorrow || "(unknown)"}}</h4>
       </div>
   </body>

   </html>
```

我将 ng-controller 属性改变了位置，以使得能够在 HTML 文档中创建两个并存的简单视图 当然，只是用一个视图也能达到同样的效果，但这里我想演示的是控制器和视图可供使用的不同方式

1. 创建多个控制器

   除了最简单的应用程序之外，所有的程序几乎都包含多个控制器，每个控制器负责程序功能中的不同方面

```html
   <!DOCTYPE html>
   <html ng-app="exampleApp">

   <head>
       <title>AngularJS Demo</title>
       <link href="bootstrap.css" rel="stylesheet" />
       <link href="bootstrap-theme.css" rel="stylesheet" />
       <script src="angular.js"></script>
       <script>
           var myApp = angular.module("exampleApp", []);
           myApp.controller("dayCtrl", function ($scope) {
               var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Staturday"];
               $scope.day = dayNames[new Date().getDay()];
           });

           myApp.controller("tomorrowCtrl", function ($scope) {
               var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday",
                   "Thursday", "Friday", "Saturday"];
               $scope.day = dayNames[(new Date().getDay() + 1) % 7];
           });
       </script>
   </head>

   <body>
       <div class="panel">
           <div class="page-header">
               <h3>AngularJS App</h3>
           </div>
           <h4 ng-controller="dayCtrl">Today is {{day || "(unknown)"}}</h4>
           <h4 ng-controller="tomorrowCtrl">Tomorrow is {{day || "(unknown)"}}</h4>
       </div>
   </body>

   </html>
```

我增加了一个名为 tomorrowCtrl 的控制器，用于计算出明天的星期名称。还修改了 HTML 以使每个控制器都有自己的视图

提示： 注意，在这两个视图中都能够使用 day 属性却互不影响。每个控制器都具有自己的作用域，dayCtrl 与 tomorrowCtrl 控制器中的 day 属性是相互隔离的

使用 Fluent API module 对象定义的方法返回的结果仍然是 module 对象本身。这听起来有点奇怪但却是一个简洁的技巧，使得能够使用 Fluent API，即多个方法调用可以链式连接在一起。给出一个简单的例子，可以对上述示例进行重写，而不再需要定义 myApp 变量

```javascript
...
<script>
    angular.module("exampleApp", [])
        .controller("dayCtrl", function ($scope) {
            var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Staturday"];
            $scope.day = dayNames[new Date().getDay()];
        })
        .controller("tomorrowCtrl", function ($scope) {
            var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday",
                "Thursday", "Friday", "Saturday"];
            $scope.day = dayNames[(new Date().getDay() + 1) % 7];
        });
</script>
...
```

我调用了 angular.module 方法并得到了 module 对象作为返回结果，在这个对象上直接调用 controller 方法来建立 dayCtrl 控制器。从 controller 方法得到的结果与调用 angular.module 方法得到的结果是同一个对象，所以我可以再次使用它调用 controller 方法来建立 tomorrowCtrl

定义指令 指令是最强大的 AngularJS 特性了，因为通过它们能够扩展并增强 HTML，从而创建丰富的 Web 应用程序。AngularJS 包含许多内置指令，通过 module.directive 方法可以创建自己定义指令

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>AngularJS Demo</title>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script src="angular.js"></script>
    <script>
        angular.module("exampleApp", [])
            .controller("dayCtrl", function ($scope) {
                var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Staturday"];
                $scope.day = dayNames[new Date().getDay()];
            })
            .controller("tomorrowCtrl", function ($scope) {
                var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday",
                    "Thursday", "Friday", "Saturday"];
                $scope.day = dayNames[(new Date().getDay() + 1) % 7];
            })
            .directive("highlight", function () {
                return function (scope, element, attrs) {
                    if (scope.day == attrs["highlight"]) {
                        element.css("color", "red");
                    }
                }
            });
        ;
    </script>
</head>

<body>
    <div class="panel">
        <div class="page-header">
            <h3>AngularJS App</h3>
        </div>
        <h4 ng-controller="dayCtrl" highlight="Monday">
            Today is {{day || "(unknown)"}}
        </h4>
        <h4 ng-controller="tomorrowCtrl">Tomorrow is {{day || "(unknown)"}}</h4>
    </div>
</body>

</html>
```

工厂函数和工人函数 所有的可用于创建 AngularJS 构件的 module 方法哦都可以接收函数作为参数。这些函数通常被称为工厂函数，之所以这么叫是因为它们创建那些将被 AngularJS 用来执行工作的对象。工厂函数通常会返回一个工人函数，也就是说将被 AngularJS 用来执行工作的对象也是一个函数。再上述示例中传给 directive 方法的第二个参数是一个工厂函数，工厂函数中的 return 语句返回的是另一个函数，每次使用这个指令是 AngularJS 就会调用它，这就是工人函数

将指令应用于 HTML 元素

```html
...
<h4 ng-controller="dayCtrl" highlight="Monday">
...
```

定义过滤器 过滤器被使用再视图中，用于格式化展现给用户的数据。一旦定义过滤器之后，就可以在整个模块中全面应用，也就意味着可以用来保证跨多个控制器和视图之间的数据展示的一致性

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>AngularJS Demo</title>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script src="angular.js"></script>
    <script>
        var myApp = angular.module("exampleApp", []);

        myApp.controller("dayCtrl", function ($scope) {
            $scope.day = new Date().getDay();
        });
        myApp.controller("tomorrowCtrl", function ($scope) {
            $scope.day = new Date().getDay() + 1;
        });
        myApp.directive("highlight", function () {
            return function (scope, element, attrs) {
                if (scope.day == attrs["highlight"]) {
                    element.css("color", "red");
                }
            }
        });

        myApp.filter("dayName", function () {
            var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday",
                "Thursday", "Friday", "Saturday"];
            return function (input) {
                return angular.isNumber(input) ? dayNames[input] : input;
            };
        });
    </script>
</head>

<body>
    <div class="panel">
        <div class="page-header">
            <h3>AngularJS App</h3>
        </div>
        <h4 ng-controller="dayCtrl" highlight="Monday">
            Today is {{day || "(unknown)" | dayName}}
        </h4>
        <h4 ng-controller="tomorrowCtrl">
            Tomorrow is {{day || "(unknown)" | dayName}}
        </h4>
    </div>
</body>

</html>
```

filter 方法用于定义一个过滤器，其参数是新过滤器的名称，以及一个在调用时会创建过滤器的工厂函数

1. 使用过滤器

   过滤器应用在视图里所包含的模板表达式中。数据绑定或者表达式后紧跟一个竖线 "|" 以及过滤器的名称

```html
   ...
   <h4 ng-controller="dayCtrl" highlight="Monday">
       Today is {{day || "(unknown)" | dayName}}
   </h4>
   ...
```

1. 修复指令

   你可能已经注意到了，过滤器破坏了之前创建的指令的功能。这是因为控制器里现在向作用域里添加了一个数值形式的变量来代表当天，而不是经过格式化的字符串名称。有许多方法解决这个问题，比如修改指令的值以使用数值型 —— 但这里想演示一个稍微复杂一些的方法

```javascript
   ...
   myApp.directive("highlight", function ($filter) {
       var dayFilter = $filter("dayName");

       return function (scope, element, attrs) {
           if (dayFilter(scope.day) == attrs["highlight"]) {
               element.css("color", "red");
           }
       }
   });
   ...
```

我想使用这个例子说明的是，在 AngularJS 应用程序中创建的构件并不仅限于在 HTML 元素上使用。在你的 JavaScript 代码里也可以使用 在本例中，向指令的工厂函数添加了 $filter 参数，告诉 AngularJS 当我的函数被调用是要接收过滤器服务对象。$filter 服务允许我访问所有已定义的过滤器，包括前例中的自定义过滤器，通过名称我将获取到我的过滤器

```javascript
   ..
   var dayFilter = $filter("dayName");
   ...
```

这样我就能得到工厂函数所创建的过滤器函数，然后可以调用该函数将数值类型转换为一个名称

```javascript
   ...
   if (dayFilter(scope.day) == attrs["highlight"]) {
   ...
```

定义服务 服务是提供在整个应用程序中所使用的任何功能的单例对象。对于普通任务，AngularJS 自带了一些有用的内置服务，例如创建 HTTP 请求。一些关键的方法也被 AngularJS 作为服务，包括前面例子中使用的 $scope 和 $filter 对象。你也可以创建自己的服务 module 对象所定义的方法中有三个是用来以不同的方式创建服务的：service、factory 和 provider

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>AngularJS Demo</title>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script src="angular.js"></script>
    <script>
        var myApp = angular.module("exampleApp", []);

        myApp.controller("dayCtrl", function ($scope, days) {
            $scope.day = days.today;
        });

        myApp.controller("tomorrowCtrl", function ($scope, days) {
            $scope.day = days.tomorrow;
        });

        myApp.directive("highlight", function ($filter) {
            var dayFilter = $filter("dayName");

            return function (scope, element, attrs) {
                if (dayFilter(scope.day) == attrs["highlight"]) {
                    element.css("color", "red");
                }
            }
        });

        myApp.filter("dayName", function () {
            var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday",
                "Thursday", "Friday", "Saturday"];
            return function (input) {
                return angular.isNumber(input) ? dayNames[input] : input;
            };
        });

        myApp.service("days", function () {
            this.today = new Date().getDay();
            this.tomorrow = this.today + 1;
        });
    </script>
</head>

<body>
    <div class="panel">
        <div class="page-header">
            <h3>AngularJS App</h3>
        </div>
        <h4 ng-controller="dayCtrl" highlight="Monday">
            Today is {{day || "(unknown)" | dayName}}
        </h4>
        <h4 ng-controller="tomorrowCtrl">
            Tomorrow is {{day || "(unknown)" | dayName}}
        </h4>
    </div>
</body>

</html>
```

service 方法具有两个参数：服务名和调用后用来创建服务对象的工厂函数。当 AngularJS 调用工厂函数时，会分配一个可通过 this 关键字访问的新对象，我可以使用这个对象来定义属性。这是一个简单的服务，但是意味着我可以在应用程序的任意位置通过我的服务访问其中定义的属性，这有助于简化开发过程

提示： 即使在 controller 方法之后才调用 service 方法定义服务，也可以在控制器中使用服务

通过声明对服务的依赖可以访问定义的服务

```javascript
...
myApp.controller("tomorrowCtrl", function ($scope, days) {
...
```

AngularJS 使用依赖注入来查找 days 服务并将其作为参数传递给工厂函数，这意味着我们可以直接获取到服务中定义的属性的值

```javascript
...
myApp.controller("tomorrowCtrl", function ($scope, days) {
    $scope.day = days.tomorrow;
});
...
```

定义值 module.value 用于创建返回固定值和对象的服务。这可能看起来有点奇怪，但是却意味着你可以为任何值或对象使用依赖注入，而不仅仅是使用 module 方法创建的那些对象。这使得开发体验更为一致化，使单元测试更为简化，并允许你使用一些高级特性

```javascript
<script>
    var myApp = angular.module("exampleApp", []);

    // ...statements omitted for brevity...

    var now = new Date();
    myApp.value("nowValue", now);


    myApp.service("days", function (nowValue) {
        this.today = nowValue.getDay();
        this.tomorrow = this.today + 1;
    });
</script>
```

在不使用 value 的情况下使用对象 使用值服务看起来好像增加了不必要的复杂性，而且如果说仅仅是为了单元测试方便而增加参数的话，是无法令人信服的。即使这样，你仍将发现创建 AngularJS 值服务比不适用值服务要简单，因为 AngularJS 假设工厂函数的任意参数都 声明了需要解析的依赖。AngularJS 新手经常会试图写如下代码，不使用值服务：

```javascript
...
var now = new Date();

myApp.service("days", function (now) {
    this.today = now.getDay();
    this.tomorrow = this.today + 1;
});
...
```

如果你试图运行这段代码，你将会在浏览器 JavaScript 控制台中看到类似这样的报错：

```txt
Error: [$injector:unpr] Unknown provider: nowProvider <- now <- days
```

这里的问题在于，当调用工厂函数时，AngularJS 不会为 now 参数使用那个局部变量，当引用 now 变量时它已经不存在与作用域中了 如果你坚决不想创建 AngularJS 值服务，那么可以依赖 JavaScript 的闭包特性，它允许你在定义内部函数时从函数里引用外部变量：

```javascript
...
var now = new Date();

myApp.service("days", function () {
    this.today = now.getDay();
    this.tomorrow = this.today + 1;
});
...
```

我从工厂函数中移除了一些参数，就意味着 AngularJS 不会去试图查找要解析的依赖。这段代码可以工作，但却使得 days 服务更难测试了，我的建议是遵循 AngularJS 的创建值服务的方法

## 使用模块组织代码

在前面的示例中，演示了 AngularJS 在创建诸如控制器、指令、过滤器、和服务时，是如何结合工厂函数使用依赖注入的。我前面解释过 angular.module 方法的第二个参数是用于创建服务的，是一个该模块的依赖构成的数组

```javascript
...
var myApp = angular.module("exampleApp", []);
...
```

任何 AngularJS 模块都可以依赖于在其他模块中定义的组件，在复杂应用程序中这是一个能够使组织代码更为容易的特性。为了演示这一特性我在 angularjs 文件夹下添加了一个名为 controllers.js 的文件

```javascript
var controllersModule = angular.module("exampleApp.Controllers", [])

controllersModule.controller("dayCtrl", function ($scope, days) {
    $scope.day = days.today;
});

controllersModule.controller("tomorrowCtrl", function ($scope, days) {
    $scope.day = days.tomorrow;
});
```

在 controllers.js 文件中创建了一个名为 exampleApp.Controllers 的新模块，并使用它定义了前面例子中的两个控制器。一种通常的习惯用法是将你的应用程序组织成具有相同类型组件的模块，并通过使用主模块名加构件类型的命名方式清晰地表明该模块包含什么样的构件，这也是为什么这里起名为 exampleApp.Controllers。类似地，我创建了第二个 JavaScript 文件名为 filters.js

```javascript
angular.module("exampleApp.Filters", []).filter("dayName", function () {
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"];
    return function (input) {
        return angular.isNumber(input) ? dayNames[input] : input;
    };
});
```

我创建了一个名为 exampleApp.Filters 的模块，并使用它定义了前面例子中曾是主模块一部分的过滤器。有一个变化，我使用了 fluent API 在 module 方法的返回结果上调用了 filter 方法

提示： 将模块放到自己的文件夹里或者基于所包含的构件来组织模块并不是必需的，但我通常更加偏好这种方式，对于正在寻找自己的 AngularJS 开发过程和偏好的你来说也是一个良好的起点

接下来可以看到我是如何添加脚本元素以引入 controllers.js 和 filters.js 文件，并将它们所包含的模块作为依赖添加到主模块 exampleApp 中的，在 example.html 文件中我还另外创建了两个模块，以强调模块并不是必须要定义在自己的独立文件里的

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>AngularJS Demo</title>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script src="angular.js"></script>
    <script src="controllers.js"></script>
    <script src="filters.js"></script>
    <script>
        var myApp = angular.module("exampleApp",
            ["exampleApp.Controllers", "exampleApp.Filters",
                "exampleApp.Services", "exampleApp.Directives"]);

        angular.module("exampleApp.Directives", [])
            .directive("highlight", function ($filter) {
                var dayFilter = $filter("dayName");
                return function (scope, element, attrs) {
                    if (dayFilter(scope.day) == attrs["highlight"]) {
                        element.css("color", "red");
                    }
                }
            });

        var now = new Date();
        myApp.value("nowValue", now);

        angular.module("exampleApp.Services", [])
            .service("days", function (nowValue) {
                this.today = nowValue.getDay();
                this.tomorrow = this.today + 1;
            });
    </script>
</head>

<body>
    <div class="panel">
        <div class="page-header">
            <h3>AngularJS App</h3>
        </div>
        <h4 ng-controller="dayCtrl" highlight="Monday">
            Today is {{day || "(unknown)" | dayName}}
        </h4>
        <h4 ng-controller="tomorrowCtrl">
            Tomorrow is {{day || "(unknown)" | dayName}}
        </h4>
    </div>
</body>

</html>
```

为了对主模块声明依赖，我将每个模块的名称添加到一个数组中，并传递给主模块作为第二个参数

```javascript
...
var myApp = angular.module("exampleApp",
    ["exampleApp.Controllers", "exampleApp.Filters", "exampleApp.Services", "exampleApp.Directives"]);
...
```

这些依赖并不是按照某种特定顺序定义的，而且你也可以按照任何顺序定义模块。例如，我先定义了 exampleApp 模块之后才定义 exampleApp.Services 模块，虽然 exampleApp 模块依赖于 exampleApp.Services 模块 AngularJS 会加载定义在程序中的所有模块并解析依赖，将每个模块所包含的构件进行合并。这个合并是很重要的，因为它使得无缝地使用来自其他模块的功能成为可能。例如，在 exampleApp.Services 模块模块中的 days 服务依赖于来自 exampleApp 模块中的 nowValue 值服务，以及 exampleApp.Directives 模块中的指令依赖于 exampleApp.Filters 模块中的过滤器 你可以根据喜好在其他模块中放入尽可能多或尽可能少的功能，在本例中我定义了四个模块，但却将值服务留在主模块定义。我也可以为值服务专门创建一个模块，一个混合了服务和值服务的模块，或者一个适宜我的开发风格的其他混合形式的模块

使用模块生命周期进行工作 module.config 和 module.run 方法注册了那些在 AngularJS 应用的生命周期的关键时刻所调用的函数。传给 config 方法的函数在当前模块被加载后调用，传给 run 方法的函数在所有模块被加载后调用

```javascript
...
<script>
    var myApp = angular.module("exampleApp",
        ["exampleApp.Controllers", "exampleApp.Filters",
            "exampleApp.Services", "exampleApp.Directives"]);

    myApp.constant("startTime", new Date().toLocaleTimeString());
    myApp.config(function (startTime) {
        console.log("Main module config: " + startTime);
    });
    myApp.run(function (startTime) {
        console.log("Main module run: " + startTime);
    });

    angular.module("exampleApp.Directives", [])
        .directive("highlight", function ($filter) {
            var dayFilter = $filter("dayName");
            return function (scope, element, attrs) {
                if (dayFilter(scope.day) == attrs["highlight"]) {
                    element.css("color", "red");
                }
            }
        });

    var now = new Date();
    myApp.value("nowValue", now);

    angular.module("exampleApp.Services", [])
        .service("days", function (nowValue) {
            this.today = nowValue.getDay();
            this.tomorrow = this.today + 1;
        })
        .config(function () {
            console.log("Services module config: (no time)");
        })
        .run(function (startTime) {
            console.log("Services module run: " + startTime);
        });
</script>
...
```

在本示例的第一处修改时使用了 constant 方法，这个方法与 value 方法类似，但是创建的服务能够作为 config 方法所声明的依赖使用，value 服务却做不到这点 config 方法接收一个函数，该函数在调用方法的模块被加载后调用。config 方法通常通过注入来自其他服务的值 (比如连接的详细信息或者用户凭证) 的方式用于配置模块 run 方法也可以接收一个函数，但是函数只会在所有模块加载完后以及解析完它们的依赖后才会被调用 以下是这些回调函数的调用顺序

1. exampleApp.Services 模块的 config 回调函数
2. exampleApp 模块的 config 回调函数
3. exampleApp.Services 模块的 run 回调函数
4. exampleApp 模块的 run 回调函数

AngularJS 做了一些聪明的事情，保证那些具有依赖的模块首先调用其依赖的回调函数。可以看到 exampleApp.Services 模块的回调优先于 exampleApp 的回调被调用。这允许了模块在被用于解析模块依赖之前对自己进行配置，如果运行这个例子，可以从 JavaScript 控制台看到以下输出：

```txt
Services module config: (no time)
Main module config: 16:57:28
Services module run: 16:57:28
Main module run: 16:57:28
```

# 第 10 章 使用绑定和模板指令

## 为什么以及何时使用指令

为什么以及何时使用指令

| 为什么使用                                                   | 什么时候使用                              |
| :----------------------------------------------------------- | :---------------------------------------- |
| 指令暴露了 AngularJS 的核心功能，如事件处理、表单验证和模板。你可以使用自定义指令在视图中使用你的程序功能 | 指令在 AngularJS 程序中的各个部分都能使用 |

## 准备示例项目

在 angularjs 文件夹中创建 directives.html 文件

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Directives</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope) {
                $scope.todos = [
                    { action: "Get groceries", complete: false },
                    { action: "Call plumber", complete: false },
                    { action: "Buy running shoes", complete: true },
                    { action: "Buy flowers", complete: false },
                    { action: "Call family", complete: false }];
            });
    </script>
</head>

<body>
    <div id="todoPanel" class="panel" ng-controller="defaultCtrl">
        <h3 class="panel-header">To Do List</h3>
        Data items will go here...
    </div>
</body>

</html>
```

## 使用数据绑定指令

内置指令的第一类是负责执行数据绑定的。数据绑定使用模型中的值并将其插入到 HTML 文档中

数据绑定指令

| 指令             | 用作     | 描述                                                       |
| :--------------- | :------- | :--------------------------------------------------------- |
| ng-bind          | 属性、类 | 绑定 HTML 元素的 innerText 属性                            |
| ng-bind-html     | 属性、类 | 绑定 HTML 元素的 innerHTML 属性。浏览器将把内容解释为 HTML |
| ng-bind-template | 属性、类 | 与 ng-bind 指令类似，但是允许在属性值中指定多个模板表达式  |
| ng-model         | 属性、类 | 创建一个双向数据绑定                                       |
| ng-non-bindable  | 属性、类 | 声明一块不会执行数据绑定的区域                             |

属性：HTML 属性 类：HTML 样式类

使用指令 所有的数据绑定指令都可以当作一个属性或者类使用。一般来说使用指令的方式只是一种风格偏好的问题，我一般更喜欢将指令用作属性

```html
...
There are <span ng-bind="todos.length"></span> items
...
```

指令被指定为属性名，关于指令的配置则被设置为属性值 如果你不能或者不想使用这种方式，你也可以将指令配置配置为用作标准 class 属性的方式

```html
...
There are <span class="ng-bind: todos.length"></span> items
...
```

并不是所有的指令都可以以任意一种方式使用，有些指令只能被当作自定义元素使用

执行和禁止单向绑定 ng-bind 指令负责创建单项数据绑定，但是很少直接使用它，因为 AngularJS 在 HTML 文档中遇到双大括号时，也会创建这种绑定

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Directives</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope) {
                $scope.todos = [
                    { action: "Get groceries", complete: false },
                    { action: "Call plumber", complete: false },
                    { action: "Buy running shoes", complete: true },
                    { action: "Buy flowers", complete: false },
                    { action: "Call family", complete: false }];
            });
    </script>
</head>

<body>
    <div id="todoPanel" class="panel" ng-controller="defaultCtrl">
        <h3 class="panel-header">To Do List</h3>

        <div>There are {{todos.length}} items</div>

        <div>
            There are
            <span ng-bind="todos.length"></span> items
        </div>

        <div ng-bind-template="First: {{todos[0].action}}. Second: {{todos[1].action}}"></div>

        <div ng-non-bindable>
            AngularJS uses {{ and }} characters for templates
        </div>
    </div>
</body>

</html>
```

提示： AngularJS 不是唯一使用双大括号的 JavaScript 包，因此如果同时使用多个库时可能会遇到问题。AngularJS 允许修改用于内联绑定的字符

组织内联数据绑定 内联绑定的缺点是 AngularJS 将寻找并处理内容中的每一对双大括号。这有可能成文问题，特别是在混用 JavaScript 工具包并想在 HTML 的某部分上使用一些其他模板系统时 (或者只是想以文本方式输出双大括号时)。解决方案是使用 ng-non-bindable 指令

```html
...
<div ng-non-bindable>
    AngularJS uses {{ and }} characters for templates
</div>
...
```

如果我没有使用这个指令，AngularJS 将处理 div 元素的内容并试图绑定到名为 and 的模型属性。在请求一个不存在的模型属性时，AngularJS 也不会报错，它假定这个属性将会在之后创建。相应的是，他根本不会插入任何内容

创建双向数据绑定

```html
...
<body>
    <div id="todoPanel" class="panel" ng-controller="defaultCtrl">
        <h3 class="panel-header">To Do List</h3>

        <div class="well">
            <div>The first item is: {{todos[0].action}}</div>
        </div>

        <div class="form-group well">
            <label for="firstItem">Set First Item:</label>
            <input name="firstItem" class="form-control" ng-model="todos[0].action" />
        </div>
    </div>
</body>
...
```

双向数据绑定仅能应用于那些允许用户输入数据值的元素上

提示： ng-model 指令对使用表单进行工作甚至对于创建自定义表单指令提供了附加的特性

数据模型上的变化被传播到所有相关绑定上，以保证在整个应用程序中保持同步

提示： 在本例中，使用了通过控制器工厂函数中的 $scope 服务显示地添加到数据模型中的属性。数据绑定的一个很好的特性是 AngularJS 将在需要时动态地创建模型属性，也就是说无需费力地定义所有要使用的属性，就可以和视图关联到一起

## 使用模板指令

Web 应用程序往往都在相似的数据对象集合上进行操作，并且使展示给用户的视图随着不同的数据值而变化 AngularJS 包含了一组可使用模板生成 HTML 元素的指令，使得使用数据集合进行工作，以及向响应数据状态的模板中添加基本逻辑变得更为简单

模板指令

| 指令            | 用作           | 描述                                                         |
| :-------------- | :------------- | :----------------------------------------------------------- |
| ng-cloak        | 属性、类       | 应用隐藏内联绑定表达式的 CSS 样式，在文档首次加载时可以短暂显示 |
| ng-include      | 元素、属性、类 | 将 HTML 片段加载，处理并插入到文档对象模型中                 |
| ng-repeat       | 属性、类       | 为对象中的数组或属性中的每个对象生成单个元素及其内容的新副本 |
| ng-repeat-start | 属性、类       | 表示具有多个顶级元素的重复节的开始                           |
| ng-repeat-end   | 属性、类       | 表示具有多个顶级元素的重复节的结束                           |
| ng-switch       | 元素、属性     | 根据数据绑定的值更改文档对象模型中的元素                     |

属性：HTML 属性 类：HTML 样式类

这些指令使你不用写任何 JavaScript 代码就可以向视图中添加简单的逻辑

重复生成元素 通过 ng-repeat 指令完成

```html
<body>
    <div id="todoPanel" class="panel" ng-controller="defaultCtrl">
        <h3 class="panel-header">To Do List</h3>

        <table class="table">
            <thead>
                <tr>
                    <th>Action</th>
                    <th>Done</th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="item in todos">
                    <td>{{item.action}}</td>
                    <td>{{item.complete}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
```

这是使用 ng-repeat 指令最简单而常见的方式：使用一个对象集合为 table 元素生成若干行。使用 ng-repeat 指令的方法可以分为两部分。第一部分是指定数据源以及在模板中要处理的对象被引用的名称

```html
...
<tr ng-repeat="item in todos">
...
```

ng-repeat 指令属性值的基本形式是 `<variable> in <source>` 其中 source 是被控制器的 $scope 所定义的一个对象或者数组。该指令遍历数组中的对象，创建元素及其内容的一个新实例，并且处理所包含的模板。在指令属性值中赋给 `<variable>` 的名称可以用于引用当前数据对象

```html
...
<tr ng-repeat="item in todos">
    <td>{{item.action}}</td>
    <td>{{item.complete}}</td>
</tr>
...
```

1. 重复操作对象属性

   前一例子中使用 ng-repeat 指令遍历数组中的对象，但是你也可以遍历一个对象中的属性。ng-repeat 指令还可以被嵌套使用

```html
   ...
   <table class="table">
       <thead>
           <tr>
               <th>Action</th>
               <th>Done</th>
           </tr>
       </thead>
       <tbody>
           <tr ng-repeat="item in todos">
               <td ng-repeat="prop in item">{{prop}}</td>
           </tr>
       </tbody>
   </table>
   ...
```

外层的 ng-repeat 指令为 todos 数组中的每一个对象生成一个 tr 元素，而且每个对象被赋给变量 item。内层的 ng-repeat 指令为 item 对象的每个属性生成一个 td 元素并将属性值赋给变量 prop。最后 prop 用一个单项数据绑定，作为 td 元素的内容

1. 使用数据对象的键值进行工作

   对于 ng-repeat 指令的配置有一个可供替代的语法选项，允许你从被处理的每个属性或者数据对象中接收一个键值

```html
   ...
   <tr ng-repeat="item in todos">
       <td ng-repeat="(key, value) in item">
           {{key}}={{value}}
       </td>
   </tr>
   ...
```

与单个变量名不同的是，我指定了被一对圆括号包括并以逗号分隔的两个名称。对 ng-repeat 指令所遍历的每个对象或者属性来说，第二个变量将被赋以数据对象或者属性的值。第一个变量的使用方式则依赖于数据源。对于对象 key 是当前属性名，而对于集合 key 则是当前对象所处的位置

1. 使用内置变量工作

   ng-repeat 指令将当前对象或者属性赋给你所指定的变量，但是还有一组内置变量可用于提供被处理数据的上下文信息

```html
   ...
   <table class="table">
       <thead>
           <tr>
               <th>#</th>
               <th>Action</th>
               <th>Done</th>
           </tr>
       </thead>
       <tr ng-repeat="item in todos">
           <td>{{$index + 1}}</td>
           <td ng-repeat="prop in item">
               {{prop}}
           </td>
       </tr>
   </table>
   ...
```

这里使用到了 ng-repeat 指令提供的 $index 变量来显示数组中每一项的位置

内置的 ng-repeat 变量

| 变量    | 描述                                                      |
| :------ | :-------------------------------------------------------- |
| $index  | 返回当前对象或属性的位置                                  |
| $first  | 在当前对象为集合中的第一个对象时返回 true                 |
| $middle | 在当前对象不是集合中的第一个也不是最后一个对象时返回 true |
| $last   | 在当前对象为集合中的最后一个对象时返回 true               |
| $even   | 对于集合中偶数编号的对象返回 true                         |
| $odd    | 对于集合中奇数编号的对象返回 true                         |

可以使用这些变量来控制生成的元素

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Directives</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope) {
                $scope.todos = [
                    { action: "Get groceries", complete: false },
                    { action: "Call plumber", complete: false },
                    { action: "Buy running shoes", complete: true },
                    { action: "Buy flowers", complete: false },
                    { action: "Call family", complete: false }];
            });
    </script>
    <style>
        .odd {
            background-color: lightcoral
        }

        .even {
            background-color: lavenderblush
        }
    </style>
</head>

<body>
    <div id="todoPanel" class="panel" ng-controller="defaultCtrl">
        <h3 class="panel-header">To Do List</h3>

        <table class="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Action</th>
                    <th>Done</th>
                </tr>
            </thead>
            <tr ng-repeat="item in todos" ng-class="$odd ? 'odd' : 'even'">
                <td>{{$index + 1}}</td>
                <td ng-repeat="prop in item">
                    {{prop}}
                </td>
            </tr>
        </table>
    </div>
</body>

</html>
```

我使用 ng-class 指令来设置使用了数据绑定的元素的 class 属性

提示： 也可以直接使用 ng-class-even 和 ng-class-odd 指令

这些内置变量也可以和其他指令结合实现更复杂的功能

```html
...
<table class="table">
    <thead>
        <tr>
            <th>#</th>
            <th>Action</th>
            <th>Done</th>
        </tr>
    </thead>
    <tr ng-repeat="item in todos" ng-class="$odd ? 'odd' : 'even'">
        <td>{{$index + 1}}</td>
        <td>{{item.action}}</td>
        <td>
            <span ng-if="$first || $last">{{item.complete}}</span>
        </td>
    </tr>
</table>
...
```

重复生成多个顶层元素 ng-repeat 指令对所处理的对象或属性重复生成一个顶层元素及其内容。有时候需要对每个数据对象重复生成多个顶层元素。在需要对每个处理的数据项生成多个表格行时最常遇到这种问题 —— 这很难用 ng-repeat 指令来解决，因为在 tr 元素及其父元素之间不允许使用任何中间元素。要解决这个问题，可以使用 ng-repeat-start 和 ng-repeat-end 指令

```html
...
<table class="table">
    <tr ng-repeat-start="item in todos">
        <td>This is item {{$index}}</td>
    </tr>
    <tr>
        <td>The action is: {{item.action}}</td>
    </tr>
    <tr ng-repeat-end>
        <td>Item {{$index}} is {{$item.complete? '' : "not "}} complete</td>
    </tr>
</table>
...
```

ng-repeat-start 指令的配置方法类似于 ng-repeat，但是将会重复生成所有顶层元素直到应用了 ng-repeat-end 属性的元素

使用局部视图工作 ng-include 指令从服务器获取一段 HTML 片段，编译并处理其中包含的任何指令，并添加到 DOM 中。这些片段被称为局部视图。为了演示这是如何工作的，我在 angularjs 文件夹下添加了一个名为 table.html 的文件

```html
<table class="table">
    <thead>
        <tr>
            <th>#</th>
            <th>Action</th>
            <th>Done</th>
        </tr>
    </thead>
    <tr ng-repeat="item in todos" ng-class="$odd ? 'odd' : 'even'">
        <td>{{$index + 1}}</td>
        <td ng-repeat="prop in item">{{prop}}</td>
    </tr>
</table>
```

接着在 directives.html 文件中使用 ng-include 指令来加载、处理 table.html 文件

```html
<body>
    <div id="todoPanel" class="panel" ng-controller="defaultCtrl">
        <h3 class="panel-header">To Do List</h3>

        <ng-include src="'table.html'"></ng-include>
    </div>
</body>
```

这是我们遇到的第一个既能够用作 HTML 元素，也能够用作属性或者类的内置指令 ng-include 指令支持 3 个配置参数，当指令被当作元素使用时，这些参数作为属性使用

注意： 不要将 ng-incude 作为空元素使用。否则 ng-include 元素之后的内容会被从 DOM 中移除

ng-include 指令的配置参数

| 名称       | 描述                                                         |
| :--------- | :----------------------------------------------------------- |
| src        | 指定要加载的内容的 URL                                       |
| onload     | 指定加载内容时要使用的表达式                                 |
| autoscroll | 指定在内容被加载时 AngularJS 是否应该滚动到这部分视图所在的区域 |

动态地选择局部视图 也许你已经注意到我指定 ng-include 指令应该从服务器请求哪个文件的方式有点奇怪

```html
...
<ng-include src="'table.html'"></ng-include>
...
```

我将 table.html 指定为一个字符串，必须这样做是因为 src 属性是被当作 JavaScript 表达式进行计算的，要静态地定义一个文件，就得使用字符串字面量 ng-include 指令的真正威力在于 scr 的设置可以通过计算得到。为了演示这是如何工作的，我在 angularjs 文件夹下添加了一个名为 list.html 的文件

```html
<ol>
    <li ng-repeat="item in todos">
        {{item.action}}
        <span ng-if="item.complete"> (Done)</span>
    </li>
</ol>
```

接着更新 directives.html 文件

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Directives</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope) {
                $scope.todos = [
                    { action: "Get groceries", complete: false },
                    { action: "Call plumber", complete: false },
                    { action: "Buy running shoes", complete: true },
                    { action: "Buy flowers", complete: false },
                    { action: "Call family", complete: false }];

                $scope.viewFile = function () {
                    return $scope.showList ? "list.html" : "table.html";
                };
            });
    </script>
    <style>
        .odd {
            background-color: lightcoral
        }

        .even {
            background-color: lavenderblush
        }
    </style>
</head>

<body>
    <div id="todoPanel" class="panel" ng-controller="defaultCtrl">
        <h3 class="panel-header">To Do List</h3>

        <div class="well">
            <div class="checkbox">
                <label>
                    <input type="checkbox" ng-model="showList"> Use the list view
                </label>
            </div>
        </div>

        <ng-include src="viewFile()"></ng-include>
    </div>
</body>

</html>
```

我在控制器中定义了一个名为 viewFile 的行为，并根据变量 showList 的值返回之前创建的两个 html 片段文件的名字。然后我添加了一个复选框并使用了双向绑定以改变 showList 的值。最后我修改了 ng-include 指令 src 属性的值，使其使用 viewFile 的返回值

将 ng-include 指令用作属性 首先为原有的 ng-include 指令添加 onload 属性

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Directives</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope) {
                $scope.todos = [
                    { action: "Get groceries", complete: false },
                    { action: "Call plumber", complete: false },
                    { action: "Buy running shoes", complete: true },
                    { action: "Buy flowers", complete: false },
                    { action: "Call family", complete: false }];

                $scope.viewFile = function () {
                    return $scope.showList ? "list.html" : "table.html";
                };

                $scope.reportChange = function () {
                    console.log("Displayed content: " + $scope.viewFile());
                }
            });
    </script>
    <style>
        .odd {
            background-color: lightcoral
        }

        .even {
            background-color: lavenderblush
        }
    </style>
</head>

<body>
    <div id="todoPanel" class="panel" ng-controller="defaultCtrl">
        <h3 class="panel-header">To Do List</h3>

        <div class="well">
            <div class="checkbox">
                <label>
                    <input type="checkbox" ng-model="showList"> Use the list view
                </label>
            </div>
        </div>

        <ng-include src="viewFile()" onload="reportChange()"></ng-include>
    </div>
</body>

</html>
```

假定我不想或者无法使用自定义元素，则可以将自定义元素 ng-include 使用以下语句替换

```html
...
<div ng-include="viewFile()" onload="reportChange()"></div>
...
```

ng-include 可以作为任何元素的属性，src 参数将从该属性值中获得，其他的指令配置参数以单独的属性表示

有条件地交换元素 ng-include 指令对于处理较重要的局部代码片段是极佳的，但是你经常会需要在已经存在于文档中的较小代码块之间进行切换 —— 对于这种情况，AngularJS 提供了 ng-switch 指令

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Directives</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope) {

                $scope.data = {};

                $scope.todos = [
                    { action: "Get groceries", complete: false },
                    { action: "Call plumber", complete: false },
                    { action: "Buy running shoes", complete: true },
                    { action: "Buy flowers", complete: false },
                    { action: "Call family", complete: false }];
            });
    </script>
    <style>
        .odd {
            background-color: lightcoral
        }

        .even {
            background-color: lavenderblush
        }
    </style>
</head>

<body>
    <div id="todoPanel" class="panel" ng-controller="defaultCtrl">
        <h3 class="panel-header">To Do List</h3>

        <div class="well">
            <div class="radio" ng-repeat="button in ['None', 'Table', 'List']">
                <label>
                    <input type="radio" ng-model="data.mode" value="{{button}}" ng-checked="$first" /> {{button}}
                </label>
            </div>
        </div>

        <div ng-switch on="data.mode">
            <div ng-switch-when="Table">
                <table class="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Action</th>
                            <th>Done</th>
                        </tr>
                    </thead>
                    <tr ng-repeat="item in todos" ng-class="$odd ? 'odd' : 'even'">
                        <td>{{$index + 1}}</td>
                        <td ng-repeat="prop in item">{{prop}}</td>
                    </tr>
                </table>
            </div>
            <div ng-switch-when="List">
                <ol>
                    <li ng-repeat="item in todos">
                        {{item.action}}
                        <span ng-if="item.complete"> (Done)</span>
                    </li>
                </ol>
            </div>
            <div ng-switch-default>
                Select another option to display a layout
            </div>
        </div>
    </div>
</body>

</html>
```

这个例子首先使用 ng-repeat 指令生成一组单选按钮，这组单选按钮使用双向数据绑定来设置 data.mode 模型属性的值

提示： 我将作用域属性 mode 定义为一个名为 data 的对象的属性。这是必要的，因为 AngularJS 作用域的继承方式和一些指令创建自已作用域的方式决定了需要这样做

本例剩余的部分演示了 ng-switch 指令的使用

提示： ng-switch 指令可以被当作元素使用，但是 ng-switch-when 和 ng-switch-default 部分只能当作属性使用。正因为这样，为了保持一致而将 ng-switch 也作为属性使用

ng-switch 指令中使用了 on 属性指定了一个表达式，用于计算并决定哪部分内容将被显示出来

```html
...
<div ng-switch on="data.mode">
...
```

然后使用 ng-switch-when 指令表示与所指定的值相关联的一块内容

```html
...
<div ng-switch-when="Table">
    <table class="table">
        <!-- elements omitted for brevity -->
    </table>
</div>
<div ng-switch-when="List">
    <ol>
        <!-- elements omitted for brevity -->
    </ol>
</div>
...
```

当属性值与 on 属性所指定的表达式相匹配时，AngularJS 将会显示出 ng-switch-when 指令所应用到的元素。其他在 ng-switch 指令代码块里的元素将被移除。ng-switch-defaule 指令用于指定没有任何一个 ng-switch-when 区域匹配时应当显示的内容

```html
...
<div ng-switch-default>
    Select another option to display a layout
</div>
...
```

ng-switch 指令会在其数据绑定中的值发生变化时做出响应

在 ng-include 和 ng-switch 指令之间做选择 ng-include 和 ng-switch 指令可以产生同样的效果，所以有时候难以决定该用其中哪个指令以达到最佳效果 当需要在较小而简单的内容块之间进行切换，而且在 Web 程序的正常执行过程中需要向用户展示大部分或所有这些内容块时，使用 ng-switch 指令。这是因为必须将 ng-switch 指令所需要的所有内容作为 HTML 文档的一部分交付，如果有内容不大可能会用到时这将会造成带宽的浪费，使加载时间变长 ng-include 指令更适用于较复杂的内容或者在整个应用程序中需要分别独立使用的内容。当需要在不同的地方包含进相同的内容时，局部视图有助于减少项目中的重复内容，但是要记住局部视图是直到第一次被引用时才会被请求，这会在浏览器发出 Ajax 请求并从服务器接收响应时造成延迟 如果拿不准的话，就先使用 ng-switch 指令。它更简单而且易于使用，当内容变得太复杂而难以管理或者需要在同一应用中的其他地方使用相同内容时，可以再改为使用 ng-include 指令

隐藏未处理的内联模板绑定表达式 在较慢的设备上对复杂内容进行处理时，在 AngularJS 仍在解析 HTML、处理指令和进行准备工作时，会有一个浏览器对 HTML 进行加载显示的时刻。在这一时刻，任何所定义的内联模板表达式将会对用户可见 虽然现在这种情况是十分罕见的，但是它确实能够发生。有两种方法解决这一问题。第一种方法是避免使用内联模板表达式，坚持使用 ng-bind 指令。但是这个指令相对于内联表达式而言是比较笨拙的 另一个更好的选择是使用 ng-cloak 指令，它能够在 AngularJS 结束对内容的处理之前先将其隐藏。ng-cloak 指令使用 CSS 对被应用到的元素进行隐藏，当内容被处理后 AngularJS 库移除 CSS 样式，以保证用户永远不会看见内联表达式。你可以按照所需广泛地或者有选择地使用 ng-cloak 指令，一种通常地做法是对 body 元素使用该指令，但这意味着当 AngularJS 处理内容时用户只能看到一个空白的浏览器窗口。我更倾向于更加有选择地使用，将该指令只应用到那些具有内联表达式的文档部分

```html
...
<body>
    <div id="todoPanel" class="panel" ng-controller="defaultCtrl">
        <h3 class="panel-header">To Do List</h3>

        <div class="well">
            <div class="radio" ng-repeat="button in ['None', 'Table', 'List']">
                <label ng-cloak>
                    <input type="radio" ng-model="data.mode" value="{{button}}" ng-checked="$first" /> {{button}}
                </label>
            </div>
        </div>

        <div ng-switch on="data.mode" ng-cloak>
            <div ng-switch-when="Table">
                <table class="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Action</th>
                            <th>Done</th>
                        </tr>
                    </thead>
                    <tr ng-repeat="item in todos" ng-class="$odd ? 'odd' : 'even'">
                        <td>{{$index + 1}}</td>
                        <td ng-repeat="prop in item">{{prop}}</td>
                    </tr>
                </table>
            </div>
            <div ng-switch-when="List">
                <ol>
                    <li ng-repeat="item in todos">
                        {{item.action}}
                        <span ng-if="item.complete"> (Done)</span>
                    </li>
                </ol>
            </div>
            <div ng-switch-default>
                Select another option to display a layout
            </div>
        </div>
    </div>
</body>
...
```

# 第 11 章 使用元素和事件指令

## 准备示例项目

对上一章使用过的 directives.html 文件做一些修改

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Directives</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope) {
                $scope.todos = [
                    { action: "Get groceries", complete: false },
                    { action: "Call plumber", complete: false },
                    { action: "Buy running shoes", complete: true },
                    { action: "Buy flowers", complete: false },
                    { action: "Call family", complete: false }];
            });
    </script>
</head>

<body>
    <div id="todoPanel" class="panel" ng-controller="defaultCtrl">
        <h3 class="panel-header">To Do List</h3>

        <table class="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Action</th>
                    <th>Done</th>
                </tr>
            </thead>
            <tr ng-repeat="item in todos">
                <td>{{$index + 1}}</td>
                <td ng-repeat="prop in item">{{prop}}</td>
            </tr>
        </table>
    </div>
</body>

</html>
```

## 使用元素指令

元素指令

| 指令          | 用作     | 描述                                             |
| :------------ | :------- | :----------------------------------------------- |
| ng-if         | 属性     | 从 DOM 中添加和移除元素                          |
| ng-class      | 属性、类 | 为某个元素设置 class 属性                        |
| ng-class-even | 属性、类 | 对有 ng-repeat 指令生成的偶数元素设置 class 属性 |
| ng-class-odd  | 属性、类 | 对有 ng-repeat 指令生成的奇数元素设置 class 属性 |
| ng-hide       | 属性、类 | 在 DOM 中显示和隐藏元素                          |
| ng-show       | 属性、类 | 在 DOM 中显示和隐藏元素                          |
| ng-style      | 属性、类 | 设置一个或多个 CSS 属性                          |

属性：HTML 属性 类：HTML 样式类

显示、隐藏和移除元素

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Directives</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope) {
                $scope.todos = [
                    { action: "Get groceries", complete: false },
                    { action: "Call plumber", complete: false },
                    { action: "Buy running shoes", complete: true },
                    { action: "Buy flowers", complete: false },
                    { action: "Call family", complete: false }];
            });
    </script>
    <style>
        td>*:first-child {
            font-weight: bold
        }
    </style>
</head>

<body>
    <div id="todoPanel" class="panel" ng-controller="defaultCtrl">
        <h3 class="panel-header">To Do List</h3>

        <div class="checkbox well">
            <label>
                <input type="checkbox" ng-model="todos[2].complete" /> Item 3 is complete
            </label>
        </div>

        <table class="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Action</th>
                    <th>Done</th>
                </tr>
            </thead>
            <tr ng-repeat="item in todos">
                <td>{{$index + 1}}</td>
                <td>{{item.action}}</td>
                <td>
                    <span ng-hide="item.complete">(Incomplete)</span>
                    <span ng-show="item.complete">(Done)</span>
                </td>
            </tr>
        </table>
    </div>
</body>

</html>
```

我使用了 ng-hide 和 ng-show 指令来控制表格中 span 元素的可见性 ng-hide 和 ng-show 指令通过添加和移除一个名为 ng-hide 的 CSS 类来控制元素的可见性。ng-hide 和 ng-show 之间的区别在于，ng-hide 在表达式为 true 时隐藏元素，而 ng-show 在表达式为 true 时显示元素

ng-hide 和 ng-show 指令仍会将所操作的元素保留在 DOM 中，仅仅只是对用户隐藏。你可以使用 ng-if 指令从 DOM 中移除元素而不是隐藏

```html
...
<td>
    <span ng-if="!item.complete">(Incomplete)</span>
    <span ng-if="item.complete">(Done)</span>
</td>
...
```

对于 ng-if 指令来说没有方便的逆指令，因此必须对被绑定的属性进行取反

解决表格的条纹化问题以及与 ng-repeat 的冲突 ng-hide、ng-show 和 ng-if 指令在应用到组成表格的元素时都有一些问题 首先 ng-hide 与 ng-show 的工作方式意味着它们无法容易第在条纹化表格中使用。

```html
...
<table class="table table-striped">
    <thead>
        <tr>
            <th>#</th>
            <th>Action</th>
            <th>Done</th>
        </tr>
    </thead>
    <tr ng-repeat="item in todos" ng-hide="item.complete">
        <td>{{$index + 1}}</td>
        <td>{{item.action}}</td>
        <td>{{item.complete}}</td>
    </tr>
</table>
...
```

我对 table 元素使用了 Bootstrap 的 table-striped CSS 类以创建条纹效果 AngularJS 将处理这些指令，但是因为元素是被隐藏而不是被移除的。所以结果会造成条纹显示的不一致 你可以结合 ng-repeat 和 ng-if 指令来解决这个问题

```html
...
<tr ng-repeat="item in todos" ng-if="!item.complete">
    <td>{{$index + 1}}</td>
    <td>{{item.action}}</td>
    <td>{{item.complete}}</td>
</tr>
...
```

或者你也可以使用过滤器

```html
...
<tr ng-repeat="item in todos | filter: {complete: 'false'}">
    <td>{{$index + 1}}</td>
    <td>{{item.action}}</td>
    <td>{{item.complete}}</td>
</tr>
...
```

管理 class 和 CSS AngularJS 提供了一组可用于将元素添加到 class 中或者设置单个 CSS 属性的指令：ng-class 和 ng-css

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Directives</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope) {
                $scope.todos = [
                    { action: "Get groceries", complete: false },
                    { action: "Call plumber", complete: false },
                    { action: "Buy running shoes", complete: true },
                    { action: "Buy flowers", complete: false },
                    { action: "Call family", complete: false }];

                $scope.buttonNames = ["Red", "Green", "Blue"];

                $scope.settings = {
                    Rows: "Red",
                    Columns: "Green"
                };
            });
    </script>
    <style>
        tr.Red {
            background-color: lightcoral;
        }

        tr.Green {
            background-color: lightgreen;
        }

        tr.Blue {
            background-color: lightblue;
        }
    </style>
</head>

<body>
    <div id="todoPanel" class="panel" ng-controller="defaultCtrl">
        <h3 class="panel-header">To Do List</h3>

        <div class="row well">
            <div class="col-xs-6" ng-repeat="(key, val) in settings">
                <h4>{{key}}</h4>
                <div class="radio" ng-repeat="button in buttonNames">
                    <label>
                        <input type="radio" ng-model="settings[key]" value="{{button}}">{{button}}
                    </label>
                </div>
            </div>
        </div>

        <table class="table table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Action</th>
                    <th>Done</th>
                </tr>
            </thead>
            <tr ng-repeat="item in todos" ng-class="settings.Rows">
                <td>{{$index + 1}}</td>
                <td>{{item.action}}</td>
                <td ng-style="{'background-color': settings.Columns}">
                    {{item.complete}}
                </td>
            </tr>
        </table>
    </div>
</body>

</html>
```

本例的核心是 settings 对象

```javascript
...
$scope.settings = {
    Rows: "Red",
    Columns: "Green"
};
...
```

我将使用 Rows 属性来设置表格中 tr 元素的背景色，并使用 Columns 属性设置 Done 一列的背景色。为了能够改变这些值，我使用 ng-repeat 指令创建了两组单选按钮

使用 ng-class 指令为 tr 元素设置 class

```html
...
<tr ng-repeat="item in todos" ng-class="settings.Rows">
...
```

使用 ng-style 指令为 td 元素设置 CSS 属性

```html
...
<td ng-style="{'background-color': settings.Columns}">
...
```

ng-style 指令被配置为使用一个对象，该对象的属性为相应的应设置的 CSS 属性 —— 在这个例子中是 background-color 属性

设置奇数行和偶数行的 CSS 类 ng-class 指令的另一个变体是由 ng-class-odd 和 ng-class-even 指令提供的，在 ng-repeat 指令中使用这两个指令，并对奇数行或偶数行的元素应用 CSS 类。这和使用 $oddh 和 $even 是类似的

```html
...
<table class="table">
    <thead>
        <tr>
            <th>#</th>
            <th>Action</th>
            <th>Done</th>
        </tr>
    </thead>
    <tr ng-repeat="item in todos" ng-class-even="settings.Rows" ng-class-odd="settings.Columns">
        <td>{{$index + 1}}</td>
        <td>{{item.action}}</td>
        <td>
            {{item.complete}}
        </td>
    </tr>
</table>
...
```

## 处理事件

事件指令

| 指令                                                         | 用作     | 描述                                                         |
| :----------------------------------------------------------- | :------- | :----------------------------------------------------------- |
| ng-blur                                                      | 属性、类 | 对 blur 事件指定自定义行为，在失去焦点时触发                 |
| ng-change                                                    | 属性、类 | 为 change 事件指定自定义行为，在表单元素的内容状态发生变化时触发 |
| ng-click                                                     | 属性、类 | 为 click 事件指定自定义行为，在用户单击时触发                |
| ng-copy ng-cut ng-paste                                      | 属性、类 | 为 copy、cut 和 paste 事件指定自定义行为                     |
| ng-dblclick                                                  | 属性、类 | 为 dbclick 事件指定自定义行为，在用户双击时触发              |
| ng-focus                                                     | 属性、类 | 为 focus 事件指定自定义行为，在元素获得焦点时触发            |
| ng-keydown ng-keypress ng-keyup                              | 属性、类 | 为 keydown、keypress 和 keyup 事件指定自定义行为，在用户按下 / 释放某个键时被触发 |
| ng-mousedown ng-mouseenter ng-mouseleave ng-mousemove ng-mouseover ng-mouseup | 属性、类 | 为 mousedown、mouseenter、mouseleave、mousemove、mouseover 和 mouseup 事件指定自定义行为，在用户使用鼠标与元素发生交互时触发 |
| ng-submit                                                    | 属性、类 | 为 submit 事件指定自定义行为，在表单被提交时触发             |

属性：HTML 属性 类：HTML 样式类

事件处理器指令可用于直接计算表达式或调用控制器中的行为

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Directives</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope) {
                $scope.todos = [
                    { action: "Get groceries", complete: false },
                    { action: "Call plumber", complete: false },
                    { action: "Buy running shoes", complete: true },
                    { action: "Buy flowers", complete: false },
                    { action: "Call family", complete: false }];

                $scope.buttonNames = ["Red", "Green", "Blue"];

                $scope.data = {
                    rowColor: "Blue",
                    columnColor: "Green"
                };

                $scope.handleEvent = function (e) {
                    console.log("Event type: " + e.type);
                    $scope.data.columnColor = e.type == "mouseover" ? "Green" : "Blue";
                }
            });
    </script>
    <style>
        .Red {
            background-color: lightcoral;
        }

        .Green {
            background-color: lightgreen;
        }

        .Blue {
            background-color: lightblue;
        }
    </style>
</head>

<body>
    <div id="todoPanel" class="panel" ng-controller="defaultCtrl">
        <h3 class="panel-header">To Do List</h3>

        <div class="well">
            <span ng-repeat="button in buttonNames">
                <button class="btn btn-info" ng-click="data.rowColor = button">
                    {{button}}
                </button>
            </span>
        </div>

        <table class="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Action</th>
                    <th>Done</th>
                </tr>
            </thead>
            <tr ng-repeat="item in todos" ng-class="data.rowColor" ng-mouseenter="handleEvent($event)" ng-mouseleave="handleEvent($event)">
                <td>{{$index + 1}}</td>
                <td>{{item.action}}</td>
                <td ng-class="data.columnColor">{{item.complete}}</td>
            </tr>
        </table>
    </div>
</body>

</html>
```

我对一组由 ng-repeat 指令产生的按钮元素使用了 ng-click 指令。当这些按钮中的任意一个被单击时，所指定的内联表达式将会被计算，直接更新数据模型中的值

```html
...
<button class="btn btn-info" ng-click="data.rowColor = button">
    {{button}}
</button>
...
```

如果你对使用内联表达式感到不习惯，或者如果你需要执行复杂的逻辑，那么你可以在控制中定义一个行为并在事件指令中调用它

```html
...
<tr ng-repeat="item in todos" ng-class="data.rowColor" ng-mouseenter="handleEvent($event)" ng-mouseleave="handleEvent($event)">
...
```

我对 tr 元素使用了 ng-mouseenter 和 ng-mouseleave 指令，指定了应该调用 handleEvent 行为。这与 JavaScript 传统的事件处理方式是类似的，为了访问 Event 对象，特别使用了 $event 变量，所有的事件指令都定义了该变量 在行为中处理事件时必须小心，因为 AngularJS 为指令名所用的事件名称和底层事件的 type 属性值之间存在不匹配的情况。在本例中我添加了处理 ng-mouseenter 和 ng-mouseleave 事件的指令，但是在行为函数中能够收到其他不同的事件

```javascript
...
$scope.handleEvent = function (e) {
    console.log("Event type: " + e.type);
    $scope.data.rowColor = e.type == "mouseover" ? "Green" : "Blue";
}
...
```

找出在行为中将收到哪些事件的最安全的方法是在函数中使用 console.log 在控制台输出 type 属性的值

理解 AngularJS 中的事件 虽然 AngularJS 提供了一组事件指令，但是你会发现能够创建的事件处理器仍然比通过 jQuery 所创建的要少。这是因为 Web 应用程序中的许多事件是在用户改变表单元素的状态时产生的，比如 input 和 select。在 AngularJS 中你不需要通过事件来响应这些变化，因为你可以使用 ng-model 指令代替。事件处理器仍然在后台被 AngularJS 所使用，但是你不需要自己编写和管理它们 有的开发者对在元素上直接使用事件指令感到不适应，特别是当其包含内联表达式时。这种不适应来自两个原因：一是仅仅因为不习惯，另一个则有值得探讨的价值 常见的原因是 Web 开发者乐于频繁地使用不太引人注意的 JavaScript 来创建事件处理器，而不是直接在元素上添加代码。这并不是 AngularJS 所担心的事，它也用了 jQuery 在背后创建一些不引人注意的处理器。在元素上使用事件指令让人感觉有点奇怪，但是却不会带来那些背后的 JavaScript 所需要极力避免的维护问题 有探讨价值的事结合指令使用表达式的想法，而不是对控制器行为的依赖。我不喜欢在视图中看到除了最简单的逻辑以外的任何东西，而且更偏爱于使用控制器行为。为了防止滥用表达式，要知道在 AngularJS 视图中这要少得多，因为大量依赖了 ng-repeat 这样的指令来生成元素，但使用表达式仍然容易导致创建出不好测试和维护的代码。我的建议事尽量使用指令事件，但是将触发事件时所执行的逻辑放到控制器行为中

创建自定义事件指令 我将创建一个处理 touchstart 和 touchend 事件的指令，分别在用户单击和释放可触摸设备的屏幕时触发

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Directives</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope, $location) {

                $scope.message = "Tap Me!";

            }).directive("tap", function () {
                return function (scope, elem, attrs) {
                    elem.on("touchstart touchend", function () {
                        scope.$apply(attrs["tap"]);
                    });
                }
            });
    </script>
</head>

<body>
    <div id="todoPanel" class="panel" ng-controller="defaultCtrl">
        <div class="well" tap="message = 'Tapped!'">
            {{message}}
        </div>
    </div>
</body>

</html>
```

我使用了 module.directive 方法创建指令，指令名为 tab，返回一个工厂函数，并依次创建一个工人函数来处理指令所应用到的元素。传给工人函数的参数是指令所操作的作用域，指令所应用到的元素的 jqLite 或 jQuery 表示形式，以及应用到的元素的属性的集合 我是使用 jqLite 的 on 方法为 touchstart 和 touchend 事件注册一个处理器函数。我的处理器函数调用 scope.$apply 方法来计算指令属性值所定义的任何表达式，该属性值是从集合中取到的。我对 div 元素使用了该指令，就像使用其他那些指令一样，此处的表达式修改了 message 模型属性

```html
...
<div class="well" tap="message = 'Tapped!'">
...
```

## 管理特殊属性

大多数情况下，AngularJS 能够巧妙地与 HTML 进行工作，与标准元素和属性无缝地结合。尽管如此，HTML 中某些属性的奇怪的工作方式会导致 AngularJS 产生某些问题，并需要使用指令解决

管理布尔属性 大多数 HTML 属性的意义是由赋给属性的值所决定的，但是某些 HTML 属性仅当元素上存在该属性就可产生效果，不论值是什么。这类属性被称为布尔属性

布尔属性指令

| 指令        | 用作 | 描述                                               |
| :---------- | :--- | :------------------------------------------------- |
| ng-checked  | 属性 | 管理 checked 属性 (在 input 元素上使用)            |
| ng-disabled | 属性 | 管理 disabled 属性 (在 input 和 button 元素上使用) |
| ng-open     | 属性 | 管理 open 属性 (在 details 元素上使用)             |
| ng-readonly | 属性 | 管理 readonly 属性 (在 input 元素上使用)           |
| ng-selected | 属性 | 管理 selected 属性 (在 option 元素上使用)          |

属性：HTML 属性 类：HTML 样式类

以 ng-disabled 指令为例演示如何使用这些指令

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Directives</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope) {
                $scope.dataValue = false;
            });
    </script>
</head>

<body>
    <div id="todoPanel" class="panel" ng-controller="defaultCtrl">
        <h3 class="panel-header">To Do List</h3>
        <div class="checkbox well">
            <label>
                <input type="checkbox" ng-model="dataValue"> Set the Data Value
            </label>
        </div>

        <button class="btn btn-success" ng-disabled="dataValue">My Button</button>
    </div>
</body>

</html>
```

管理其他属性 有 3 个指令常用于对 AngularJS 无法直接操作的其他属性进行工作

布尔属性指令

| 指令      | 用作 | 描述                                                         |
| :-------- | :--- | :----------------------------------------------------------- |
| ng-href   | 属性 | 在 a 元素上设置 href 属性                                    |
| ng-src    | 属性 | 在 img 元素上设置 src 属性                                   |
| ng-srcset | 属性 | 在 img 元素上设置 srcset 属性。srcset 属性是扩展 HTML5 的草案标准，允许为不同的显示大小和像素密度指定多个图像。我写这篇文章时，浏览器支持有限 |

在使用 ng-href 指令时，会在 AngularJS 处理完元素之前防止用户通过单击链接跳转到错误的目标位置

属性：HTML 属性 类：HTML 样式类

# 第 12 章 使用表单

## 准备示例项目

创建一个名为 forms.html 的文件

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Forms</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope) {
                $scope.todos = [
                    { action: "Get groceries", complete: false },
                    { action: "Call plumber", complete: false },
                    { action: "Buy running shoes", complete: true },
                    { action: "Buy flowers", complete: false },
                    { action: "Call family", complete: false }];
            });
    </script>
</head>

<body>
    <div id="todoPanel" class="panel" ng-controller="defaultCtrl">

        <h3 class="panel-header">
            To Do List
            <span class="label label-info">
                {{(todos | filter: {complete: 'false'}).length}}
            </span>
        </h3>

        <table class="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Action</th>
                    <th>Done</th>
                </tr>
            </thead>
            <tr ng-repeat="item in todos">
                <td>{{$index + 1}}</td>
                <td>{{item.action}}</td>
                <td>{{item.complete}}</td>
            </tr>
        </table>
    </div>
</body>

</html>
```

## 对表单元素使用双向数据绑定

```html
...
<table class="table">
    <thead>
        <tr>
            <th>#</th>
            <th>Action</th>
            <th>Done</th>
        </tr>
    </thead>
    <tr ng-repeat="item in todos">
        <td>{{$index + 1}}</td>
        <td>{{item.action}}</td>
        <td>
            <input type="checkbox" ng-model="item.complete">
        </td>
    </tr>
</table>
...
```

隐式地创建模型属性 前例中，在创建控制器时对显示定义的模型属性进行了操作，但其实也可以通过使用双向数据绑定来隐式地在数据模型中创建属性 —— 当你在使用表单元素收集用户输入数据以便在数据模型中创建一个新的对象或属性时，这是一个非常有用的特性

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Forms</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope) {
                $scope.todos = [
                    { action: "Get groceries", complete: false },
                    { action: "Call plumber", complete: false },
                    { action: "Buy running shoes", complete: true },
                    { action: "Buy flowers", complete: false },
                    { action: "Call family", complete: false }];

                $scope.addNewItem = function (newItem) {
                    $scope.todos.push({
                        action: newItem.action + " (" + newItem.location + ")",
                        complete: false
                    });
                };
            });
    </script>
</head>

<body>
    <div id="todoPanel" class="panel" ng-controller="defaultCtrl">

        <h3 class="panel-header">
            To Do List
            <span class="label label-info">
                {{ (todos | filter: {complete: 'false'}).length}}
            </span>
        </h3>

        <div class="row">
            <div class="col-xs-6">
                <div class="well">
                    <div class="form-group row">
                        <label for="actionText">Action:</label>
                        <input id="actionText" class="form-control" ng-model="newTodo.action">
                    </div>
                    <div class="form-group row">
                        <label for="actionLocation">Location:</label>
                        <select id="actionLocation" class="form-control" ng-model="newTodo.location">
                            <option>Home</option>
                            <option>Office</option>
                            <option>Mall</option>
                        </select>
                    </div>
                    <button class="btn btn-primary btn-block" ng-click="addNewItem(newTodo)">
                        Add
                    </button>
                </div>
            </div>

            <div class="col-xs-6">
                <table class="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Action</th>
                            <th>Done</th>
                        </tr>
                    </thead>
                    <tr ng-repeat="item in todos">
                        <td>{{$index + 1}}</td>
                        <td>{{item.action}}</td>
                        <td>
                            <input type="checkbox" ng-model="item.complete">
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</body>

</html>
```

我们需要关注的是这个 input 元素

```html
...
<input id="actionText" class="form-control" ng-model="newTodo.action">
...
```

以及这个 select 元素

```html
...
<select id="actionLocation" class="form-control" ng-model="newTodo.location">
    <option>Home</option>
    <option>Office</option>
    <option>Mall</option>
</select>
...
```

他们都使用了 ng-model 指令，用于更新未曾显示定义的模型属性值：newTodo.action 和 newTodo.location 属性。这些属性并不是领域模型的一部分，但在用户单击按钮后调用的 addNewItem 方法里，却需要使用这些属性来得到用户输入值

```html
...
<button class="btn btn-primary btn-block" ng-click="addNewItem(newTodo)">
    Add
</button>
...
...
$scope.addNewItem = function (newItem) {
    $scope.todos.push({
        action: newItem.action + " (" + newItem.location + ")",
        complete: false
    });
};
...
```

提示： 也可以在方法中直接使用 $scope.newTodo，而不必接收一个对象作为参数，但是接收对象参数的方法能够在视图中被多次复用，这在考虑控制器的继承关系时尤为重要

当页面被浏览器第一次加载时，这个 newTodo 对象及其 action 和 location 属性并不存在。在 input 元素或 select 元素改变时，AngularJS 将自动创建出 newTodo 对象，并根据用户正在使用的具体是哪个元素，赋值给该对象的 action 或 location 属性。正因为拥有这样的灵活性，AngularJS 可以较为自由地展示数据模型的状态。在取用不存在的对象或属性时并不会报错，而且当赋值给还不存在的对象或属性时，AngularJS 将会简单创建一个出来 —— 制造出一个所谓的隐式定义属性或对象

提示： 这里虽然使用了 newTodo 对象来将相关的属性聚合为一组，但是也可以在 $scope 对象上直接隐式地定义属性

检查所创建的数据模型对象 在访问属性时使用隐式定义的对象有一些好处，例如能够以简洁的方式调用处理数据的方法。但是也有一些缺点，例如如果刷新浏览器，然后在未编辑输入框内容、也未在下拉列表中选择项时，单击 Add 按钮后，会看到界面没有变化，却能够在 JavaScript 控制器中看到一个类似这样的错误提示信息

```txt
TypeError: Cannot read property 'action' of undefined
```

这个问题是由于控制器中的方法视图访问一个 AngularJS 尚未创建出的对象的属性所致，而该对象必须等到某个表单控件被修改之后，触发了 ng-model 指令后才会被创建出来。当程序依赖于隐式定义时，非常重要的一点就是要考虑到你所访问的对象或属性是否有可能还不存在

```javascript
...
$scope.addNewItem = function (newItem) {
    if (angular.isDefined(newItem) && angular.isDefined(newItem.action)
        && angular.isDefined(newItem.location)) {
        $scope.todos.push({
            action: newItem.action + " (" + newItem.location + ")",
            complete: false
        });
    }
};
...
```

## 校验表单

前面所做的修改放置了 JavaScript 错误的产生，但是会导致应用在与用户进行交互时既不产生任何输出结果也不报错。虽然解决了 JavaScript 报错问题，却将用户搞得摸不着头脑 检查数据对象的存在性是非常必要的，因为这是一个普遍存在的问题，但是更深层次的问题在于，这个简单的示例程序中有一个隐含的约束，即在创建一个新的待办事项之前，必须从用户输入中得到 anction 和 location 参数。本例在代码中实现了强制约束，但是其实同时也应该告知用户 —— 这便引入的关于表单验证的各种问题

用户愚蠢吗？ Web 应用开发者奇怪为什么总能够碰到一些愚蠢的用户 —— 那些在表单中输入无意的数据，并将他们的账户搞得一团糟的用户。确实是有愚蠢的用户的，但是大多数表单数据的问题在于更有危害性的原因：开发者本身。这里总结了为什么用户会输入错误的数据值的四点原因，而这些问题在一定程度上都是可以通过细致的设计和开发来避免的 第一点原因在于用户不理解要求输入的是什么，可能是由于提示不够明确或者仅仅是由于用户没有足够注意。例如，如果要开发一个需要输入信用卡详细信息的应用，可以看看那些错误的请求 —— 其中许多是由于用户在应该输入姓名的地方输入了信用卡账号，反之亦然。用户能够看到两个长长的输入框，按照在其他应用程序中所培养起来的习惯，这两个输入框常常一个用来输入卡号，另一个用来输入姓名。心不在焉的用户虽然看到了提示，却没有花时间阅读每一个输入框上的标签，于是输入了错误的信息。许多表单的填写过程中都会有这样的现象，大部分是你无法控制的，但是相当一部分粗心大意发生在用户已经填写了他们感兴趣的部分，并正要填写你感兴趣的部分的时候 为减少用户的混淆和疏忽，有一些可采取的有效步骤。在整个过程中尽可能早地要求填写那些引起最多错误的信息。例如，在让用户填写冗长的配送地址表单前，先要求填写信用卡详情信息。也可以重新组织表单以减少混淆：例如，让标签语义更清晰些，以及遵循表单元素的惯用顺序 用户输入错误数据的第二点原因是他们并不像提供所要求输入的信息。这种情况下，用户会视图尽快完成表单的填写过程，他们会输入尽可能少的数据以便尽快结束。如果你曾碰到许多 email 地址为 a@a.com 的用户，就应该是遇到这类问题了。请想一想为什么用户不愿意提供精确信息 —— 比如，是否因为要求输入了太多的过于私人的信息？ 第三点原因：用户不具备所要求输入的信息。我生活在英国，就意味着在要求选择一个美国的州名的时候，我会碰到麻烦。因为英国并没有州，如果将该字段置为必选的，就意味着会收集到错误的数据，或者用户根本不会填完你在引导用户填写的表单。这也是为什么全国公共广播电台 (NPR，National Public Radio) 从来收不到来自我的捐款的原因，我喜欢《This American Life》节目，但却无法完成捐款过程 最后一个原因最简单：用户输错了。我打字很快，却并不精确，我经常将我的姓 Freeman 打成 Freman，少一个 e。除了尽可能减少用户输入的文本数量之外，很少有什么能够有效地处理这种错误的办法。只要有可能，就提供一个选项列表供用户选择。这里不再赘述如何设计表单，但需要说明的是，解决这一问题的最好方法是把重点放在用户的关注点上。当问题出现时，应该试着去观察导致用户出现问题的方式，并找出所需的解决方案。你的用户并不知道你是怎样构建系统的，他们也不关心业务流程是怎样的，他们只想完成这件事情。只关注用户要完成的任务，去除主流程之外的旁枝末节，是每个人都乐意看到的

执行基本的表单验证 AngularJS 提供了基本的表单验证方法，实现了对标准 HTML 元素属性的支持，如 type 和 required 等，并增加了一些指令

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Forms</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope) {
                $scope.addUser = function (userDetails) {
                    $scope.message = userDetails.name
                        + " (" + userDetails.email + ") (" + userDetails.agreed + ")";
                }
                $scope.message = "Ready";
            });
    </script>
</head>

<body>
    <div id="todoPanel" class="panel" ng-controller="defaultCtrl">
        <form name="myForm" novalidate ng-submit="addUser(newUser)">
            <div class="well">
                <div class="form-group">
                    <label>Name:</label>
                    <input name="userName" type="text" class="form-control" required ng-model="newUser.name">
                </div>
                <div class="form-group">
                    <label>Email:</label>
                    <input name="userEmail" type="email" class="form-control" required ng-model="newUser.email">
                </div>
                <div class="checkbox">
                    <label>
                        <input name="agreed" type="checkbox" ng-model="newUser.agreed" required> I agree to the terms and conditions
                    </label>
                </div>
                <button type="submit" class="btn btn-primary btn-block" ng-disabled="myForm.$invalid">
                    OK
                </button>
            </div>
            <div class="well">
                Message: {{message}}
                <div>
                    Valid: {{myForm.$valid}}
                </div>
            </div>
        </form>
    </div>
</body>

</html>
```

1. 增加表单元素

   AngularJS 对表单校验的支持主要是基于对标准 HTML 元素 (如 form 和 input) 进行替换的

   提示： 对表单元素使用指令时无需再做任何额外的工作，AngularJS 在遇到诸如 form、input、select 和 textarea 元素时将自动地应用指令。指令将 AngularJS 的特性和表单元素无缝地结合在一起，并且还提供了一些额外的属性用于增强开发体验

   当 AngularJS 遇到 form 元素时，就会自动设置好本章所描述的基本特性，并且向下遍历各个子元素，以便查找是否有其他子元素需要被处理

```html
   ...
   <form name="myForm" novalidate ng-submit="addUser(newUser)">
   ...
```

要想获得 AngularJS 的最佳校验效果，必须为表单设置一些属性。首要的便是 name 属性，替换表单元素的指令将会定义一些有用的变量，用于表示表单数据的有效性，并且通过 name 属性的值来访问这些变量值

提示： 如果想使用如双向模型绑定之类的功能时，form 元素并不是必需的，form 元素只在表单校验时需要用到

正如下一节将要演示的，AngularJS 使用标准 HTML 元素来配置表单校验。这会成为一个问题，因为最新版本的主流浏览器也会使用那些属性，但是对于小范围的元素类型它们的行为并不一致。要禁用浏览器所支持的校验并启用 AngularJS 校验功能，需要在自己的表单元素上增添 novalidate 属性，该属性定义于 HTML5 规范之中，用于告诉浏览器不要自己校验表单，从而允许 AngularJS 不受干扰地工作 关于表单元素，最后要附加的说明是 ng-submit 指令，这个指令为表单的提交事件指定了一个自定义的响应行为，将在用户提交表单时触发

1. 使用校验属性

   下一步是将标准 HTML 校验属性应用于 input 元素上

```html
   ...
   <div class="form-group">
       <label>Email:</label>
       <input name="userEmail" type="email" class="form-control" required ng-model="newUser.email">
   </div>
   ...
```

正如 form 元素那样，为各个想要校验的元素添加 name 属性是非常重要的，这样就可以访问到 AngularJS 所提供的各种特殊变量 另外需要强调其他几个属性，这些属性告诉 AngularJS 需要什么样的校验。type 属性指定到了 input 元素将要接收的数据类型，在这个例子中是 email 类型。HTML5 为 input 元素定义了 type 属性值的新集合，其中可以被 AngularJS 所校验的值如下：

input 元素的 type 属性值

| 属性值   | 描述                                                  |
| :------- | :---------------------------------------------------- |
| checkbox | 创建一个复选框                                        |
| email    | 创建一个接收邮件地址作为值的文本输入框 (HTML5 中新增) |
| number   | 创建一个接收数据值作为值的文本输入框 (HTML5 中新增)   |
| radio    | 创建一个单选框                                        |
| text     | 创建一个接收任何值的标准文本输入框                    |
| url      | 创建一个接收 URL 作为值的文本输入框 (HTML5 中新增)    |

除了 type 属性所指定的格式之外，还可以通过混合使用 html 标准属性与 AngularJS 指令来实现更进一步的约束。在这个例子中使用了 required 属性，指定用户必须为待校验的表单提供一个输入值。当该属性与 type 属性值联合使用时，效果相当于告诉 AngularJS 用户必须提供一个输入值，并且该值必须为 email 类型

注意： email 和 url 的校验是格式检查，而不是检查 email 或 url 是否存在或在被使用

这里的每一个 input 元素都使用 ng-model 指令来设置隐式定义的 newUser 对象的一个属性，并且由于所有的元素都使用 required 属性，结果便是只有当用户输入了名字和格式正确的电子邮箱地址，并且勾选了复选框时，表单才是有效的

1. 监控表单的有效性

   angularjs 中用来替换标准表单元素的指令定义了一些特殊变量，可以被用来检查表单中的各个元素或整个表单的有效性状态

   表单指令所定义的校验变量

   | 变量      | 描述                                           |
   | :-------- | :--------------------------------------------- |
   | $pristine | 如果用户没有与元素 / 表单产生交互，则返回 true |
   | $dirty    | 如果用户与元素 / 表单产生过交互，则返回 true   |
   | $valid    | 当表单 / 元素的校验结果为有效时返回 true       |
   | $invalid  | 当表单 / 元素的校验结果为无效时返回 true       |
   | $error    | 提供校验错误的详情信息                         |

   正如本章稍后将要演示的那样，这些变量可以联合使用，以向用户展示校验错误的反馈信息。以当前例子为例，这里使用了这些特殊变量中的两个。第一处用法是通过内联的数据绑定

```html
   ...
   <div>
       Valid: {{myForm.$valid}}
   </div>
   ...
```

这个表达式将显示 $valid 变量的值，以展示整个表单元素的有效性。正如之前所解释的，对于待校验的元素使用 name 属性是非常重要的，这里可以看到为什么这样做：AngularJS 通过与每个元素的 name 值同名的变量来访问表 单指令所定义的校验变量。第二处用到的变量是 $invalid

```html
   ...
   <button type="submit" class="btn btn-primary btn-block" ng-disabled="myForm.$invalid">
       OK
   </button>
   ...
```

如果表单中的任一元素校验结果不为有效时，$invalid 属性将会返回 true，那么 ng-disabled 指令所指定的表达式结果也为 true，将会使按钮一直被禁用，直到表单校验结果为有效为止

## 提供表单校验反馈信息

使用 CSS 提供校验反馈信息 每次用户与被校验元素产生交互时，AngularJS 就会检查其状态以查看其是否有效 AngularJS 通过在类的集合中添加或移除被校验元素，来报告有效性检查的结果，这一机制可以与 CSS 联合使用

AngularJS 检验中用到的 class

| 变量        | 描述                               |
| :---------- | :--------------------------------- |
| ng-pristine | 用户未曾交互过的元素被添加到这个类 |
| ng-dirty    | 用户曾经交互过的元素被添加到这个类 |
| ng-valid    | 校验结果为有效的元素被添加到这个类 |
| ng-invalid  | 校验结果为无效的元素被添加到这个类 |

在每次用户交互之后，AngularJS 会从这些类中添加或移除正在被校验的元素，也就是说可以使用这些类来向用户提供按键和单击的即时反馈，无论是整个表单还是单个元素

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Forms</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope) {
                $scope.addUser = function (userDetails) {
                    $scope.message = userDetails.name
                        + " (" + userDetails.email + ") (" + userDetails.agreed + ")";
                }

                $scope.message = "Ready";
            });
    </script>
    <style>
        form .ng-invalid.ng-dirty {
            background-color: lightpink;
        }

        form .ng-valid.ng-dirty {
            background-color: lightgreen;
        }

        span.summary.ng-invalid {
            color: red;
            font-weight: bold;
        }

        span.summary.ng-valid {
            color: green;
        }
    </style>
</head>

<body>
    <div id="todoPanel" class="panel" ng-controller="defaultCtrl">
        <form name="myForm" novalidate ng-submit="addUser(newUser)">
            <div class="well">
                <div class="form-group">
                    <label>Name:</label>
                    <input name="userName" type="text" class="form-control" required ng-model="newUser.name">
                </div>
                <div class="form-group">
                    <label>Email:</label>
                    <input name="userEmail" type="email" class="form-control" required ng-model="newUser.email">
                </div>
                <div class="checkbox">
                    <label>
                        <input name="agreed" type="checkbox" ng-model="newUser.agreed" required> I agree to the terms and conditions
                    </label>
                </div>
                <button type="submit" class="btn btn-primary btn-block" ng-disabled="myForm.$invalid">OK</button>
            </div>
            <div class="well">
                Message: {{message}}
                <div>
                    Valid:
                    <span class="summary" ng-class="myForm.$valid ? 'ng-valid' : 'ng-invalid'">
                        {{myForm.$valid}}
                    </span>
                </div>
            </div>
        </form>
    </div>
</body>

</html>
```

为特定的校验约束提供反馈信息 除了对校验元素的整体提示信息外，AngularJS 也会将元素添加到类中以给出关于应用到该元素的每一个校验的具体信息。所使用的类名是基于相应的元素的

```html
...
<style>
    form .ng-invalid-required.ng-dirty {
        background-color: lightpink;
    }

    form .ng-invalid-email.ng-dirty {
        background-color: lightgoldenrodyellow;
    }

    form .ng-valid.ng-dirty {
        background-color: lightgreen;
    }

    span.summary.ng-invalid {
        color: red;
        font-weight: bold;
    }

    span.summary.ng-valid {
        color: green
    }
</style>
...
```

这里将两个校验约束应用到 input 元素上：使用 required 属性要求必须输入一个值，使用 email 要求值必须是邮箱格式

使用特殊变量来提供反馈信息 正如前面所提到的 AngularJS 为表单验证提供了一系列特殊变量，你可以在视图中使用这些变量来检查单个元素或整个表单的校验状态。

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Forms</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope) {
                $scope.addUser = function (userDetails) {
                    $scope.message = userDetails.name
                        + " (" + userDetails.email + ") (" + userDetails.agreed + ")";
                }

                $scope.message = "Ready";
            });
    </script>
    <style>
        form .ng-invalid-required.ng-dirty {
            background-color: lightpink;
        }

        form .ng-invalid-email.ng-dirty {
            background-color: lightgoldenrodyellow;
        }

        form .ng-valid.ng-dirty {
            background-color: lightgreen;
        }

        span.summary.ng-invalid {
            color: red;
            font-weight: bold;
        }

        span.summary.ng-valid {
            color: green;
        }

        div.error {
            color: red;
            font-weight: bold;
        }
    </style>
</head>

<body>
    <div id="todoPanel" class="panel" ng-controller="defaultCtrl">
        <form name="myForm" novalidate ng-submit="addUser(newUser)">
            <div class="well">
                <div class="form-group">
                    <label>Email:</label>
                    <input name="userEmail" type="email" class="form-control" required ng-model="newUser.email">
                    <div class="error" ng-show="myForm.userEmail.$invalid && myForm.userEmail.$dirty">
                        <span ng-show="myForm.userEmail.$error.email">
                            Please enter a valid email address
                        </span>
                        <span ng-show="myForm.userEmail.$error.required">
                            Please enter a value
                        </span>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary btn-block" ng-disabled="myForm.$invalid">OK</button>
            </div>
            <div class="well">
                Message: {{message}}
                <div>
                    Valid:
                    <span class="summary" ng-class="myForm.$valid ? 'ng-valid' : 'ng-invalid'">
                        {{myForm.$valid}}
                    </span>
                </div>
            </div>
        </form>
    </div>
</body>

</html>
```

本例中增加了一个新的 div 元素用于给用户显示校验提示信息。div 元素的可见性是受 ng-show 指令所控制的，将会在 input 元素被输入值后且输入值未通过校验时显示该元素

提示： AngularJS 的校验具有持续性，意味着一个空的、未和用户发生过交互的 input 元素如果定义了 required 属性，将会是无效状态，因为还未输入值。本例中不想在用户开始输入数据前显示错误信息，所以检查了 $dirty 是否为 true，表示只有当用户与元素发生过交互后才会显示错误信息

这里为了访问特殊校验变量，是如何引用 input 元素的

```html
...
<div class="error" ng-show="myForm.userEmail.$invalid && myForm.userEmail.$dirty">
...
```

这里通过联合使用 form 元素的 name 值和 input 元素的 name 值，来访问 input 元素。这就是之前强调要将 name 属性应用到被校验元素的原因 在 div 元素里，为 input 元素的两条校验约束各自定义了错误提示信息，使用 span 元素进行包含。通过使用 $error 变量来控制这些元素的可见性，该变量返回一个对象，该对象的各个属性代表各个校验约束的结果。$error 对象所包含的属性对应了应用到某个元素的所有约束

减少反馈元素的数量 前面的例子中巧妙地演示了特殊校验变量和其他指令联合使用以增强用户体验的办法，但是这样有可能使得你的页面标记中产生一大堆存在冗余信息的元素。一种简单的处理办法是将这些信息统一合并到控制器行为中

```html
...
<script>
    angular.module("exampleApp", [])
        .controller("defaultCtrl", function ($scope) {
            $scope.addUser = function (userDetails) {
                $scope.message = userDetails.name
                    + " (" + userDetails.email + ") (" + userDetails.agreed + ")";
            }

            $scope.message = "Ready";

            $scope.getError = function (error) {
                if (angular.isDefined(error)) {
                    if (error.required) {
                        return "Please enter a value";
                    } else if (error.email) {
                        return "Please enter a valid email address";
                    }
                }
            }
        });
</script>
...
```

这里定义了一个叫做 getError 的方法，它可以接收校验元素中的 $error 对象作为参数，并根据其属性返回一个字符串。$error 对象直到校验出问题时才会被定义，所以这里使用了 angular.isDefined 方法以避免从一个不存在的对象中读取属性。通过数据绑定使用该方法可以简化我们的代码

```html
...
<div class="form-group">
    <label>Email:</label>
    <input name="userEmail" type="email" class="form-control" required ng-model="newUser.email">
    <div class="error" ng-show="myForm.userEmail.$invalid && myForm.userEmail.$dirty">
        {{getError(myForm.userEmail.$error)}}
    </div>
</div>
...
```

延迟校验反馈 AngularJS 表单校验是非常灵敏的，在每次与用户交互后都会更新每个元素的校验状态。有时这会过于灵敏了，它对用户显示错误信息的方式让人觉得有点过头，特别是与传统的表单校验方式相比，传统方式会直到用户尝试提交表单时才延迟显示错误信息 如果不喜欢 AngularJS 这样的默认行为，可以在基本特性的基础上实现延迟反馈

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Forms</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope) {
                $scope.addUser = function (userDetails) {
                    if (myForm.$valid) {
                        $scope.message = userDetails.name
                            + " (" + userDetails.email + ") ("
                            + userDetails.agreed + ")";
                    } else {
                        $scope.showValidation = true;
                    }
                }

                $scope.message = "Ready";

                $scope.getError = function (error) {
                    if (angular.isDefined(error)) {
                        if (error.required) {
                            return "Please enter a value";
                        } else if (error.email) {
                            return "Please enter a valid email address";
                        }
                    }
                }
            });
    </script>
    <style>
        form.validate .ng-invalid-required.ng-dirty {
            background-color: lightpink;
        }

        form.validate .ng-invalid-email.ng-dirty {
            background-color: lightgoldenrodyellow;
        }

        div.error {
            color: red;
            font-weight: bold;
        }
    </style>
</head>

<body>
    <div id="todoPanel" class="panel" ng-controller="defaultCtrl">
        <form name="myForm" novalidate ng-submit="addUser(newUser)" ng-class="showValidation ? 'validate' : ''">
            <div class="well">
                <div class="form-group">
                    <label>Email:</label>
                    <input name="userEmail" type="email" class="form-control" required ng-model="newUser.email">
                    <div class="error" ng-show="showValidation">
                        {{getError(myForm.userEmail.$error)}}
                    </div>
                </div>
                <button type="submit" class="btn btn-primary btn-block">OK</button>
            </div>
        </form>
    </div>
</body>

</html>
```

这里修改了 addUser 方法，用于检查整个表单的有效性，并且在应当显示校验反馈信息时，将一个隐式定义的模型属性 showValidation 设置为 true。addUser 方法直到表单被提交时才会被调用，也就是说用户可以在输入控件中输入任何值，而不用立即收到校验信息 如果表单被提交后有校验错误，隐式定义的模型属性 showValidation 就会被设置为 true，这将会使校验验证信息显示出来，这是通过控制表单上的一个类样式来实现的，可以通过 CSS 选择器定位该目标元素。为了简化视图逻辑，就对包含了反馈信息文字的 div 元素使用了同一个模型属性。现在得到的结果是直到表单第一次被提交时校验反馈信息才会显示给用户，在这之后才变为正常的实时校验反馈

## 使用表单指令属性

使用 input 元素 AngularJS 使用的指令对 input 元素提供了一些额外属性，可以用于与数据模型更好地集成，这些属性仅在 input 元素没有使用 type 属性，或者 type 属性为 text、url、email 和 number 时适用

适用于 input 元素的属性

| 名称         | 描述                                                   |
| :----------- | :----------------------------------------------------- |
| ng-model     | 用于指定双向绑定的模型                                 |
| ng-change    | 用于指定一个表达式，该表达式在元素内容被改变时被计算   |
| ng-minlength | 设置一个合法元素的最小字符数                           |
| ng-maxlength | 设置一个合法元素的最大字符数                           |
| ng-pattern   | 设置一个正则表达式，合法的元素内容必须匹配该正则表达式 |
| ng-required  | 通过数据绑定设置 required 属性的值                     |

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Forms</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope) {
                $scope.requireValue = true;
                $scope.matchPattern = new RegExp("^[a-z]");
            });
    </script>
</head>

<body>
    <div id="todoPanel" class="panel" ng-controller="defaultCtrl">
        <form name="myForm" novalidate>
            <div class="well">
                <div class="form-group">
                    <label>Text:</label>
                    <input name="sample" class="form-control" ng-model="inputValue" ng-required="requireValue" ng-minlength="3" ng-maxlength="10"
                        ng-pattern="matchPattern">
                </div>
            </div>

            <div class="well">
                <p>Required Error: {{myForm.sample.$error.required}}</p>
                <p>Min Length Error: {{myForm.sample.$error.minlength}}</p>
                <p>Max Length Error: {{myForm.sample.$error.maxlength}}</p>
                <p>Pattern Error: {{myForm.sample.$error.pattern}}</p>
                <p>Element Valid: {{myForm.sample.$valid}}</p>
            </div>
        </form>
    </div>
</body>

</html>
```

本例中在校验约束条件中使用了 ng-required、ng-minlength、ng-maxlength 和 ng-pattern 属性。这样做的效果是只有当用户输入了值，且该值是以小写字母开头并且长度在 3 至 10 个字符时，才是合法的

注意： 当 type 属性为 email、url 或 number 时，AngularJS 将会自动设置 ng-pattern 属性为相应的正则表达式，并检查格式是否匹配

使用复选框

当 type 属性为 checkbox 时可适用于 input 元素的属性

| 名称           | 描述                                                 |
| :------------- | :--------------------------------------------------- |
| ng-model       | 用于指定双向绑定的模型                               |
| ng-change      | 用于指定一个表达式，该表达式在元素内容被改变时被计算 |
| ng-true-value  | 指定当元素被勾选中时所绑定的表达式的值               |
| ng-false-value | 指定当元素被取消勾选时所绑定的表达式的值             |

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Forms</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope) { });
    </script>
</head>

<body>
    <div id="todoPanel" class="panel" ng-controller="defaultCtrl">
        <form name="myForm" novalidate>
            <div class="well">
                <div class="checkbox">
                    <label>
                        <input name="sample" type="checkbox" ng-model="inputValue" ng-true-value="'Hurrah!'" ng-false-value="'Boo!'"> This is a checkbox
                    </label>
                </div>
            </div>

            <div class="well">
                <p>Model Value: {{inputValue}}</p>
            </div>
        </form>
    </div>
</body>

</html>
```

ng-true-value 和 ng-false-value 属性的值将被用于设置所绑定的表达式的值，但是只在当复选框的勾选状态被改变时生效。也就是说模型属性不会被自动创建，直到有用户与元素的交互产生时才会被创建

使用文本域

使用选择列表 AngularJS 用于 select 元素的指令包括 ng-required 和 ng-options 属性。ng-options 属性用于从数组和对象中生成 option 元素

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Forms</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope) {
                $scope.todos = [
                    { id: 100, action: "Get groceries", complete: false },
                    { id: 200, action: "Call plumber", complete: false },
                    { id: 300, action: "Buy running shoes", complete: true }];
            });
    </script>
</head>

<body>
    <div id="todoPanel" class="panel" ng-controller="defaultCtrl">
        <form name="myForm" novalidate>
            <div class="well">
                <div class="form-group">
                    <label>Select an Action:</label>
                    <select ng-model="selectValue" ng-options="item.action for item in todos">
                    </select>
                </div>
            </div>

            <div class="well">
                <p>Selected: {{selectValue || 'None'}}</p>
            </div>
        </form>
    </div>
</body>

</html>
```

在这个例子中，定义了一个包含三个项目的模型变量 todos，每个项目包含三个属性 对于 select 元素定义的 ng-options 变量以使得能够从 todos 中生成出 option 元素

```html
...
<select ng-model="selectValue" ng-options="item.action for item in todos">
...
```

这是 ng-options 表达式的基本形式，形如 `<标签> for <项目> in <数组>`。AngularJS 会为数组中的每一个对象生成一个 option 元素，并且将其值设置到标签中去。对于这个示例将会生成如下的 HtML

```html
...
<select ng-model="selectValue" ng-options="item.action for item in todos" class="ng-pristine ng-untouched ng-valid ng-empty">
    <option value="?" selected="selected"></option>
    <option label="Get groceries" value="object:3">Get groceries</option>
    <option label="Call plumber" value="object:4">Call plumber</option>
    <option label="Buy running shoes" value="object:5">Buy running shoes</option>
</select>
...
```

1. 改变第一个选项元素

   需要注意的是 select 元素的输出里包括了一个值为 "?" 且没有任何内容的 option 元素。AngularJS 在 ng-model 属性所指定的变量值为 undefined 时会生成这样的元素。可以通过添加一个空的 option 元素来替代默认的 option 元素

```html
   ...
   <select ng-model="selectValue" ng-options="item.action for item in todos">
       <option value="">(Pick One)</option>
   </select>
   ...
```

这会生成如下 HTML

```html
   ...
   <select ng-model="selectValue" ng-options="item.action for item in todos" class="ng-pristine ng-untouched ng-valid ng-empty">
       <option value="" class="" selected="selected">(Pick One)</option>
       <option label="Get groceries" value="object:3">Get groceries</option>
       <option label="Call plumber" value="object:4">Call plumber</option>
       <option label="Buy running shoes" value="object:5">Buy running shoes</option>
   </select>
   ...
```

1. 改变选项值

   有时不想总是使用整个源对象来设置 ng-model 的值，也可以使用一个稍有不同的表达式来为 ng-options 属性指定对象中的一个属性作为 option 元素的值

```html
   ...
   <select ng-model="selectValue" ng-options="item.id as item.action for item in todos">
       <option value="">(Pick One)</option>
   </select>
   ...
```

表达式形如 `<所选属性> as <标签> for <项目> in <数组>`

1. 创建选项组元素

   ng-options 属性可以用来按照某个属性的值将各个选项进行分组，为每个选项值生成一组 optgroup 元素

```html
   <!DOCTYPE html>
   <html ng-app="exampleApp">

   <head>
       <title>Forms</title>
       <script src="angular.js"></script>
       <link href="bootstrap.css" rel="stylesheet" />
       <link href="bootstrap-theme.css" rel="stylesheet" />
       <script>
           angular.module("exampleApp", [])
               .controller("defaultCtrl", function ($scope) {
                   $scope.todos = [
                       { id: 100, place: "Store", action: "Get groceries", complete: false },
                       { id: 200, place: "Home", action: "Call plumber", complete: false },
                       { id: 300, place: "Store", action: "Buy running shoes", complete: true }];
               });
       </script>
   </head>

   <body>
       <div id="todoPanel" class="panel" ng-controller="defaultCtrl">
           <form name="myForm" novalidate>
               <div class="well">
                   <div class="form-group">
                       <label>Select an Action:</label>
                       <select ng-model="selectValue" ng-options="item.action group by item.place for item in todos">
                           <option value="">(Pick One)</option>
                       </select>
                   </div>
               </div>

               <div class="well">
                   <p>Selected: {{selectValue || 'None'}}</p>
               </div>
           </form>
       </div>
   </body>

   </html>
```

用于将对象进行分组的属性是通过在 ng-options 表达式中通过 grouy by 来进行指定的。在本例中指定了使用 place 属性进行分组，这将产生如下输出

```html
   ...
   <select ng-model="selectValue" ng-options="item.id as item.action group by item.place for item in todos" class="ng-pristine ng-untouched ng-valid ng-empty">
       <option value="" class="" selected="selected">(Pick One)</option>
       <optgroup label="Store">
           <option label="Get groceries" value="number:100">Get groceries</option>
           <option label="Buy running shoes" value="number:300">Buy running shoes</option>
       </optgroup>
       <optgroup label="Home">
           <option label="Call plumber" value="number:200">Call plumber</option>
       </optgroup>
   </select>
   ...
```

提示： 也可以联合使用选项和分组特性，例如：item.id as item.action group by item.place for item in todos

# 第 13 章 使用控制器和作用域

## 为什么以及何时使用控制器和作用域

控制器就像领域模型与视图之间的纽带，它给视图提供数据与服务，并且定义了所需的业务逻辑，从而将用户行为转换成模型上的变化 控制器通过作用域向视图提供数据和逻辑，这是前文所描述的数据绑定技术的基础

为什么以及何时使用控制器和作用域

| 为什么使用                                                   | 什么时候使用                                                 |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| 控制器是模型与视图之间的纽带。控制器使用作用域将模型中的数据公开给视图，并定义根据用户与视图的交互对模型进行更改所需的逻辑 | 控制器的使用遍布整个 AngularJS 程序，并为它支持的视图提供作用域 |

## 准备示例项目

在 angularjs 文件夹下创建一个名为 controllers.html 的文件

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Controllers</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", []);
    </script>
</head>

<body>
    <div class="well">
        Content will go here.
    </div>
</body>

</html>
```

## 理解基本原理

创建和使用控制器 控制器是通过 AngularJS 的 module 对象所提供的 controller 方法而创建出来的。controller 方法的参数是新建控制器的名字和一个将被用于创建控制器的工厂函数。工厂函数可以通过依赖注入特性来声明对 AngularJS 服务的依赖。几乎每个控制器都需要使用到 $scope 服务，用于向视图提供作用域，定义可被视图使用的数据和逻辑

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Controllers</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("simpleCtrl",function($scope){

            });
    </script>
</head>

<body>
    <div class="well" ng-controller="simpleCtrl">
        Content will go here.
    </div>
</body>

</html>
```

你不仅需要创建控制器，还需要区别控制器所支持的视图，这一过程是通过 ng-controller 指令来完成的。该指令所指定的值必须与创建的控制器同名，在 AngularJS 的惯例中，经常使用后缀 Ctrl 来命名控制器，但并不是必需的

设置作用域 当控制器声明了对 $scope 服务的依赖时，就可以使得控制器通过其对应的作用域向视图提供各种能力。作用域不仅定义了控制器和视图之间的关系，而且对许多重要的 AngularJS 特性提供了运转机制 有两种方法通过控制器使用作用域。可以定义数据也可以定义行为，也就是说可以在视图的绑定表达式或指令中调用 JavaScript 函数 创建初始数据和设置行为很简单。只需在传递给控制器工厂函数的 $scope 对象上创建属性，并为它们分配数据值或函数

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Controllers</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("simpleCtrl", function ($scope) {

                $scope.city = "London";

                $scope.getCountry = function (city) {
                    switch (city) {
                        case "London":
                            return "UK";
                        case "New York":
                            return "USA";
                    }
                }
            });
    </script>
</head>

<body>
    <div class="well" ng-controller="simpleCtrl">
        <p>The city is: {{city}}</p>
        <p>The country is: {{getCountry(city) || "Unknown"}}</p>
    </div>
</body>

</html>
```

在控制器的作用域中定义了一个名为 city 的变量，并将一个字符串值赋给它，同时定义了一个名为 getCountry 的行为，只是一个简单的函数，能够接收 city 作为参数并根据 city 的值返回 country。然后通过数据绑定来使用这个变量值以及这个行为，可以通过变量名直接访问任何数据变量，以及通过方法名调用任何行为，就像调用常规的 JavaScript 桉树一样

向控制器行为中传递参数 在上述示例中创建的 getCountry 行为，能够接收 city 作为参数，然后经过处理生成相应的 country。这么做也许会令你觉得有点奇怪，因为在数据绑定中是这样调用该行为的

```html
...
<p>The country is: {{getCountry(city) || "Unknown"}}</p>
...
```

这里传递了作用域里的 city 属性值作为参数给该行为，而该行为本身也是在作用域中的一部分。于是可以这样重写该行为

```javascript
...
$scope.getCountry = function () {
    switch ($scope.city) {
        case "London":
            return "UK";
        case "New York":
            return "USA";
    }
}
...
```

将 city 作为参数传入的原因有两个，一是因为这样意味着我们的行为能够被任何 city 值所使用，而不是仅仅能够被同一个作用域里定义的那个 city 值所使用。这在涉及控制器继承时尤为有用。另一个原因是接收参数能够使单元测试变得更简便一些，因为这样该行为就是自包含的

修改作用域 关于作用域最重要的一点是修改会传播下去，自动更新所有相依赖的数据值，即使是通过行为产生的

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Controllers</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("simpleCtrl", function ($scope) {

                $scope.cities = ["London", "New York", "Paris"];

                $scope.getCountry = function (city) {
                    switch (city) {
                        case "London":
                            return "UK";
                        case "New York":
                            return "USA";
                    }
                }
            });
    </script>
</head>

<body ng-controller="simpleCtrl">

    <div class="well">
        <label>Select a City:</label>
        <select ng-options="city for city in cities" ng-model="city">
        </select>
    </div>

    <div class="well">
        <p>The city is: {{city}}</p>
        <p>The country is: {{getCountry(city) || "Unknown"}}</p>
    </div>
</body>

</html>
```

## 组织控制器

在程序中组织控制器有许多不同的方法

使用整体控制器 第一种途径是在 html 元素上使用 ng-controller 指令，使用控制器 这种方法有一些优点：简单，无需担心各个控制器之间的通信问题。当你使用整体控制器时，实际上你会对整个应用程序创建一个单独的视图

![使用整体控制器][]

这种方法也有缺点：对于简单程序来说还不错，但是当为了交付程序功能而不断添加其所需的行为时，最终将得到一大堆代码

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Controllers</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("simpleCtrl", function ($scope) {

                $scope.addresses = {};

                $scope.setAddress = function (type, zip) {
                    console.log("Type: " + type + " " + zip);
                    $scope.addresses[type] = zip;
                }

                $scope.copyAddress = function () {
                    $scope.shippingZip = $scope.billingZip;
                }
            });
    </script>
</head>

<body ng-controller="simpleCtrl">

    <div class="well">
        <h4>Billing Zip Code</h4>
        <div class="form-group">
            <input class="form-control" ng-model="billingZip">
        </div>
        <button class="btn btn-primary" ng-click="setAddress('billingZip', billingZip)">
            Save Billing
        </button>
    </div>

    <div class="well">
        <h4>Shipping Zip Code</h4>
        <div class="form-group">
            <input class="form-control" ng-model="shippingZip">
        </div>
        <button class="btn btn-primary" ng-click="copyAddress()">
            Use Billing
        </button>
        <button class="btn btn-primary" ng-click="setAddress('shippingZip', shippingZip)">
            Save Shipping
        </button>
    </div>
</body>

</html>
```

当你对于 AngularJS 刚刚入门时，或者在创建一个简单的应用程序时，或是当开始开发时并没有很清晰的设计思路时，这是一种可以用于起步的控制器组织方式。你可以很快起步并上手，在不断推进时也可以采用所介绍的其他组织方式之一

复用控制器 你可以在同一个应用程序中创建多个视图并复用同一个控制器。AngularJS 将会调用每个应用到控制器的工厂函数，结果是每个控制器实例将会拥有自己的作用域。这看起来也许会有点奇怪，但是这种方法能够简化控制器

![创建同一个控制器的多个实例][]

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Controllers</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("simpleCtrl", function ($scope) {
                $scope.setAddress = function (type, zip) {
                    console.log("Type: " + type + " " + zip);
                }
                $scope.copyAddress = function () {
                    $scope.shippingZip = $scope.billingZip;
                }
            });
    </script>
</head>

<body>
    <div class="well" ng-controller="simpleCtrl">
        <h4>Billing Zip Code</h4>
        <div class="form-group">
            <input class="form-control" ng-model="zip">
        </div>
        <button class="btn btn-primary" ng-click="setAddress('billingZip', zip)">
            Save Billing
        </button>
    </div>
    <div class="well" ng-controller="simpleCtrl">
        <h4>Shipping Zip Code</h4>
        <div class="form-group">
            <input class="form-control" ng-model="zip">
        </div>
        <button class="btn btn-primary" ng-click="copyAddress()">
            Use Billing
        </button>
        <button class="btn btn-primary" ng-click="setAddress('shippingZip', zip)">
            Save Shipping
        </button>
    </div>
</body>

</html>
```

在本例中，从 body 元素上移除了 ng-controller 指令，取而代之的是将其应用于内容中的两个不同的区域。这样的效果是创建了两个控制器和视图。AngularJS 对每个视图都调用控制器的工厂函数，结果是给每个视图赋予自己的作用域 在这个应用中，每个控制器向其作用域提供的数据和行为都是与另外一个控制器相互独立的，这样可以允许我们简化视图

1. 作用域之间的通信

   上面这一例子的负面影响是 copyAddress 行为再也不起作用了，幸运的是，AngularJS 提供用于在作用域之间共享数据的机制 作用域实际上是以层级结构的形式组织起来的，顶层的是根作用域。每个控制器都会被赋予一个新的作用域，该作用域是根作用域的一个子作用域

   ![在使用多个控制器时作用域的层级结构][]

   根作用域提供了在各个作用域之间发送事件的方法，这暗示着允许在各个控制器之间进行通信

```javascript
   ...
   <script>
       angular.module("exampleApp", [])
           .controller("simpleCtrl", function ($scope, $rootScope) {

               $scope.$on("zipCodeUpdated", function (event, args) {
                   $scope[args.type] = args.zipCode;
               });

               $scope.setAddress = function (type, zip) {
                   $rootScope.$broadcast("zipCodeUpdated", {
                       type: type, zipCode: zip
                   });
                   console.log("Type: " + type + " " + zip);
               }

               $scope.copyAddress = function () {
                   $scope.zip = $scope.billingZip;
               }
           });
   </script>
   ...
```

根作用域可以作为一个服务被使用，所以在控制器中使用 $rootScope 声明了对它的依赖。所有的作用域，包括 $rootScope 服务，都定义了若干可用于发送和接收事件的方法

用于发送和接收事件的作用域方法

| 方法                   | 描述                                                         |
| :--------------------- | :----------------------------------------------------------- |
| $broadcast(name, args) | 向当前作用域下的所有子作用域发送一个事件。参数是事件名称以及一个用于向事件提供额外数据的对象 |
| $emit(name, args)      | 向当前作用域的父作用域发送一个事件，直至根作用域             |
| $on(name, handler)     | 注册一个事件处理函数，该函数在特定的事件被当前作用域收到时将会被调用 |

$broadcast 和 $emit 事件都是具有方向性的，它们沿着作用域的层级结构向下发送事件直至每一个子作用域，或者向上发送事件直至根作用域。现在看来这稍微有点过度，但是你将会看到，不同的控制器组织方式将会产生更加复杂的作用域层级结构

提示： 这里使用了数组风格的记号来在 $scope 对象上定义属性。$scope 属性的名称被设置为从参数 args.type 属性中取到的值。将 args.type 放在 [和] 之间将会促使 args.type 属性被计算，计算所得的值被用作作用域属性的名称

1. 使用服务调解作用域事件

   AngularJS 中的习惯是使用服务来调解作用域之间的通信。这样的惯用法不会对本例造成多大影响，因为这里只是用了一个单独的控制器，但是如果有多个需要发送同一类事件的控制器时，该方法可以减少重复。这里使用 module.Service 方法创建出一个服务对象，该服务可被控制器用来发送和接收事件，而无需直接与作用域中的事件方法产生交互

```javascript
   ...
   <script>
       angular.module("exampleApp", [])
           .service("ZipCodes", function ($rootScope) {
               return {
                   setZipCode: function (type, zip) {
                       this[type] = zip;
                       $rootScope.$broadcast("zipCodeUpdated", {
                           type: type, zipCode: zip
                       });
                   }
               }
           })
           .controller("simpleCtrl", function ($scope, ZipCodes) {
               $scope.$on("zipCodeUpdated", function (event, args) {
                   $scope[args.type] = args.zipCode;
               });
               $scope.setAddress = function (type, zip) {
                   ZipCodes.setZipCode(type, zip);
                   console.log("Type: " + type + " " + zip);
               }
               $scope.copyAddress = function () {
                   $scope.zip = $scope.billingZip;
               }
           });
   </script>
   ...
```

ZipCodes 服务中声明了对 $rootScope 的依赖，并在 setZipCode 方法中使用 $rootScope 来调用 $broadcast 事件。控制器中声明了对 ZipCodes 的依赖，并调用它的 setZipCode 方法，而不是直接在 $rootScope 上进行操作。在功能上并无变化 —— 这种惯用法将可能被不同控制器所需使用的代码放到同一个地方，达到了减少重复的目的

使用控制器继承 ng-controller 指令可以被内嵌在 HTML 元素上，产生一种被称为控制器继承的效果。这是一种目的在于减少代码重复的特性，可以让你在一个父控制器中定义公用功能并在一个或多个子控制器中使用

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Controllers</title>
    <script src="angular.js"></script>
    <script src="controllers.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
</head>

<body ng-controller="topLevelCtrl">

    <div class="well">
        <h4>Top Level Controller</h4>
        <div class="input-group">
            <span class="input-group-btn">
                <button class="btn btn-default" type="button" ng-click="reverseText()">Reverse</button>
                <button class="btn btn-default" type="button" ng-click="changeCase()">Case</button>
            </span>
            <input class="form-control" ng-model="dataValue">
        </div>
    </div>

    <div class="well" ng-controller="firstChildCtrl">
        <h4>First Child Controller</h4>
        <div class="input-group">
            <span class="input-group-btn">
                <button class="btn btn-default" type="button" ng-click="reverseText()">Reverse</button>
                <button class="btn btn-default" type="button" ng-click="changeCase()">Case</button>
            </span>
            <input class="form-control" ng-model="dataValue">
        </div>
    </div>

    <div class="well" ng-controller="secondChildCtrl">
        <h4>Second Child Controller</h4>
        <div class="input-group">
            <span class="input-group-btn">
                <button class="btn btn-default" type="button" ng-click="reverseText()">Reverse</button>
                <button class="btn btn-default" type="button" ng-click="changeCase()">Case</button>
                <button class="btn btn-default" type="button" ng-click="shiftFour()">Shift</button>
            </span>
            <input class="form-control" ng-model="dataValue">
        </div>
    </div>
</body>

</html>
```

本例中有三个控制器，每一个都通过使用 ng-controller 指令被应用到了 HTML 中的某块区域。名为 topLevelCtrl 的控制器被应用于 body 元素，两个子控制器 firstChildCtrl 和 secondChildCtrl 则被内嵌其中 创建一个名为 controllers.js 的文件

```javascript
var app = angular.module("exampleApp", []);

app.controller("topLevelCtrl", function ($scope) {

    $scope.dataValue = "Hello, Adam";

    $scope.reverseText = function () {
        $scope.dataValue = $scope.dataValue.split("").reverse().join("");
    }

    $scope.changeCase = function () {
        var result = [];
        angular.forEach($scope.dataValue.split(""), function (char, index) {
            result.push(index % 2 == 1
                ? char.toString().toUpperCase() : char.toString().toLowerCase());
        });
        $scope.dataValue = result.join("");
    };
});

app.controller("firstChildCtrl", function ($scope) {

    $scope.changeCase = function () {
        $scope.dataValue = $scope.dataValue.toUpperCase();
    };
});

app.controller("secondChildCtrl", function ($scope) {

    $scope.changeCase = function () {
        $scope.dataValue = $scope.dataValue.toLowerCase();
    };

    $scope.shiftFour = function () {
        var result = [];
        angular.forEach($scope.dataValue.split(""), function (char, index) {
            result.push(index < 4 ? char.toUpperCase() : char);
        });
        $scope.dataValue = result.join("");
    }
});
```

当通过 ng-controller 指令将控制器嵌入另一个控制器中时，子控制器的作用域便继承了父控制器作用域中的数据和行为

![在使用子控制器时的作用域层次结构][]

1. 扩展被继承的数据和行为

   子控制器能够将从父控制器继承来的功能和自己定义的其他功能混合起来

2. 覆盖被继承的数据和行为

   子控制器能够覆盖它们的父控制器中的数据和行为，也就是说数据值和行为能够被同名的局部数据和行为所覆盖 当查找行为时，AngularJS 会从该指令所应用到的控制器的作用域上开始查找。如果该行为存在，就会被执行。如果不存在，AngularJS 将会向作用域层级的上一层继续查找，直到具有指定名称的行为被找到 可以利用这一特性在大多数时候使用父控制器中所提供的功能，而只改写需要自定义的部分。这允许你创建为应用程序的不同部分量身定做的控制器，而无需从父控制器中拷贝代码和数据

3. 理解数据继承

```javascript
   var app = angular.module("exampleApp", []);

   app.controller("topLevelCtrl", function ($scope) {

       $scope.data = {
           dataValue: "Hello, Adam"
       }

       $scope.reverseText = function () {
           $scope.data.dataValue = $scope.data.dataValue.split("").reverse().join("");
           }

       $scope.changeCase = function () {
           var result = [];
           angular.forEach($scope.data.dataValue.split(""), function (char, index) {
               result.push(index % 2 == 1
                   ? char.toString().toUpperCase() : char.toString().toLowerCase());
           });
           $scope.data.dataValue = result.join("");
       };
   });

   app.controller("firstChildCtrl", function ($scope) {

       $scope.changeCase = function () {
           $scope.data.dataValue = $scope.data.dataValue.toUpperCase();
       };
   });

   app.controller("secondChildCtrl", function ($scope) {

       $scope.changeCase = function () {
           $scope.data.dataValue = $scope.data.dataValue.toLowerCase();
       };

       $scope.shiftFour = function () {
           var result = [];
           angular.forEach($scope.data.dataValue.split(""), function (char, index) {
               result.push(index < 4 ? char.toUpperCase() : char);
           });
           $scope.data.dataValue = result.join("");
       }
   });
```

为了取代直接在父控制器作用域上定义的 dataValue 属性，我将它定义在一个名为 data 的对象属性上

```html
   <!DOCTYPE html>
   <html ng-app="exampleApp">

   <head>
       <title>Controllers</title>
       <script src="angular.js"></script>
       <script src="controllers.js"></script>
       <link href="bootstrap.css" rel="stylesheet" />
       <link href="bootstrap-theme.css" rel="stylesheet" />
   </head>

   <body ng-controller="topLevelCtrl">

       <div class="well">
           <h4>Top Level Controller</h4>
           <div class="input-group">
               <span class="input-group-btn">
                   <button class="btn btn-default" type="button" ng-click="reverseText()">Reverse</button>
                   <button class="btn btn-default" type="button" ng-click="changeCase()">Case</button>
               </span>
               <input class="form-control" ng-model="data.dataValue">
           </div>
       </div>

       <div class="well" ng-controller="firstChildCtrl">
           <h4>First Child Controller</h4>
           <div class="input-group">
               <span class="input-group-btn">
                   <button class="btn btn-default" type="button" ng-click="reverseText()">Reverse</button>
                   <button class="btn btn-default" type="button" ng-click="changeCase()">Case</button>
               </span>
               <input class="form-control" ng-model="data.dataValue">
           </div>
       </div>

       <div class="well" ng-controller="secondChildCtrl">
           <h4>Second Child Controller</h4>
           <div class="input-group">
               <span class="input-group-btn">
                   <button class="btn btn-default" type="button" ng-click="reverseText()">Reverse</button>
                   <button class="btn btn-default" type="button" ng-click="changeCase()">Case</button>
                   <button class="btn btn-default" type="button" ng-click="shiftFour()">Shift</button>
               </span>
               <input class="form-control" ng-model="data.dataValue">
           </div>
       </div>
   </body>

   </html>
```

当读取一个直接在作用域上定义的属性的值时，AngularJS 会检查在这个控制器的作用域上是否有一个局部属性，如果没有就会沿着作用域层次结构向上查找是否有一个被继承的属性。然而，当 ng-modle 指令来修改这样一个属 性时，AngularJS 会检查在这个控制器的作用域上是否有这样一个名称的属性，如果没有就会假设你想隐式定义一个这样的属性。结果便是覆盖了该属性值，而至于编辑了子控制器中的输入框之后，就会影响 "Reverse" 按钮的 工作的原因是现在会有两个 dataValue 属性。reverseText 行为是在顶层控制器中定义的，只对顶层作用域中定义的 dataValue 属性起作用，而不会改变子作用域中的 dataValue 属性 而如果在作用域上定义一个对象，然后在对象上定义数据属性，这一切却不会发生。这是因为 JavaScript 对继承的实现是基于所谓的 "原型继承"。重要的知识点是，直接在作用域上定义属性，意味着在子作用域中使用 ng-model 指令时将会创建局部变量

```javascript
   ...
   $scope.dataValue = "Hello, Adam";
   ...
```

但是如果在作用域上定义一个对象，然后在对象上定义数据属性，这将确保 ng-model 会对在父作用域上定义的数据值进行更新。这可不是 Bug，这是一个专门设计的特性，以允许你自己决定控制器及其作用域如何工作，你还可 以在同一个作用域中混合使用这两种技术，如果你想数据值在开始时是被共享的，但是在修改时会被复制一份，就直接在作用域上定义数据属性。如果想确保始终只有一份数据，就通过一个对象来定义数据属性

注意： 我用来演示继承关系的控制器行为都是直接在其作用域上定义的值上直接进行操作的。这样做是为了将继承所带来的问题演示的更明显些，但是 AngularJS 开发中的习惯是使用接收参数的行为。这并不改变继承的工作方式 —— 因 为在查找值时，无论是从行为中直接访问还是从参数中传递，AngularJS 都是遵循相同的步骤顺序的

使用多控制器 一个应用程序可以包含你所需的任意多的控制器。在刚开始使用 AngularJS 时不要担心如何找出最适合的控制器个数。但你需要从代码中努力找到特定的数据值或行为时，你就能够意识到是需要将单个的整体控制器进行分割的 时候了 我的经验是对应用中的每一个主要视图都创建一个新的控制器，但这只是经验之谈，我也经常复用控制器或者依赖于控制器继承。这里没有什么一成不变的规则，你将会自然地发展总结出自己的一系列技术方法

```html
   <!DOCTYPE html>
   <html ng-app="exampleApp">

   <head>
       <title>Controllers</title>
       <script src="angular.js"></script>
       <link href="bootstrap.css" rel="stylesheet" />
       <link href="bootstrap-theme.css" rel="stylesheet" />
       <script>
           var app = angular.module("exampleApp", []);

           app.controller("firstController", function ($scope) {
               $scope.dataValue = "Hello, Adam";
               $scope.reverseText = function () {
                   $scope.dataValue = $scope.dataValue.split("").reverse().join("");
               }
           });

           app.controller("secondController", function ($scope) {
               $scope.dataValue = "Hello, Jacqui";
               $scope.changeCase = function () {
                   $scope.dataValue = $scope.dataValue.toUpperCase();
               };
           });
       </script>
   </head>

   <body>

       <div class="well" ng-controller="firstController">
           <h4>First Controller</h4>
           <div class="input-group">
               <span class="input-group-btn">
                   <button class="btn btn-default" type="button" ng-click="reverseText()">Reverse</button>
               </span>
               <input class="form-control" ng-model="dataValue">
           </div>
       </div>

       <div class="well" ng-controller="secondController">
           <h4>Second Controller</h4>
           <div class="input-group">
               <span class="input-group-btn">
                   <button class="btn btn-default" type="button" ng-click="changeCase()">
                       Case
                   </button>
               </span>
               <input class="form-control" ng-model="dataValue">
           </div>
       </div>
   </body>

   </html>
```

在本例中定义了两个控制器，每一个都应用于独立的 HTML 元素。这意味着两个控制器是互相独立地工作的，彼此并不共享作用域，也不继承数据或行为

![当独立使用控制器时的作用域层次结构][]

## 使用无作用域的控制器

如果作用域看起来增加了不必要的复杂性，而且你的应用程序并未从继承中受益，也不需要在控制器之间进行通信，你可以使用无作用域的控制器。这些控制器可以在根本不需要使用作用域的情况下向视图提供数据和行为。提供给视图的是一个代表控制器的特殊变量

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Controllers</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        var app = angular.module("exampleApp", [])
            .controller("simpleCtrl", function () {
                this.dataValue = "Hello, Adam";

                this.reverseText = function () {
                    this.dataValue = this.dataValue.split("").reverse().join("");
                }
            });
    </script>
</head>

<body>
    <div class="well" ng-controller="simpleCtrl as ctrl">
        <h4>Top Level Controller</h4>
        <div class="input-group">
            <span class="input-group-btn">
                <button class="btn btn-default" type="button" ng-click="ctrl.reverseText()">Reverse</button>
            </span>
            <input class="form-control" ng-model="ctrl.dataValue">
        </div>
    </div>
</body>

</html>
```

本例中的控制器并未声明对 $scope 的依赖，而是通过 JavaScript 的关键字 this 定义了自己数据值和行为

```javascript
...
var app = angular.module("exampleApp", [])
    .controller("simpleCtrl", function () {
        this.dataValue = "Hello, Adam";

        this.reverseText = function () {
            this.dataValue = this.dataValue.split("").reverse().join("");
        }
    });
...
```

当应用无作用域的控制器时，ng-controller 指令的表达式格式会有所不同，需要指定一个代表控制器的变量名，将在视图中访问它

```html
...
<div class="well" ng-controller="simpleCtrl as ctrl">
...
```

表达式的格式形如：`<要应用的控制器> as <变量名>` 然后就可以在视图中使用变量名访问控制器的数据和行为

```html
...
<div class="input-group">
    <span class="input-group-btn">
        <button class="btn btn-default" type="button" ng-click="ctrl.reverseText()">Reverse</button>
    </span>
    <input class="form-control" ng-model="ctrl.dataValue">
</div>
...
```

无作用域的控制器避免了作用域的复杂性

## 显式的更新作用域

在大多数情况下，AngularJS 在自动更新作用域方面表现的相当好，但是有时需要对该过程实现更直接的控制，例如将 AngularJS 和另外的 JavaScript 框架集成起来。可以通过在作用域对象上定义三种方法将 AngularJS 和其他框架集成起来，这些方法允许你注册响应作用域上变化的处理函数，以及从 AngularJS 代码之外向作用域内注入变化

作用域集成方法

| 方法                              | 描述                                                         |
| :-------------------------------- | :----------------------------------------------------------- |
| $apply(expression)                | 向作用域应用变化                                             |
| $watch(expression, handler)       | 注册一个处理函数，当 expression 表达式所引用的变量值变化时，该函数将会被通知到 |
| $watchCollection(object, handler) | 注册一个处理函数，当指定的 object 对象的任一属性变化时，该函数将会被通知到 |

提示： 你也可以向 $apply 方法传递函数而不是表达式，在创建自定义指令时尤为有用，并且允许你在响应用户交互时使用指令所管理的元素自己定义对作用域的更新方法

我打算使用 jQuery UI 来演示这些方法是如何工作的

设置 jQuery UI

```html
 <!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Controllers</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
    <script src="http://code.jquery.com/ui/1.10.2/jquery-ui.min.js">
    </script>
    <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.2/themes/smoothness/jquery-ui.css">
    <script>
        $(document).ready(function () {
            $('#jqui button').button().click(function (e) {
                alert("jQuery UI Button was clicked");
            });
        });

        var app = angular.module("exampleApp", [])
            .controller("simpleCtrl", function ($scope) {

                $scope.buttonEnabled = true;
                $scope.clickCounter = 0;

                $scope.handleClick = function () {
                    $scope.clickCounter++;
                }
            });
    </script>
</head>

<body>
    <div id="angularRegion" class="well" ng-controller="simpleCtrl">
        <h4>AngularJS</h4>
        <div class="checkbox">
            <label>
                <input type="checkbox" ng-model="buttonEnabled"> Enable Button
            </label>
        </div>
        Click counter: {{clickCounter}}
    </div>
    <div id="jqui" class="well">
        <h4>jQuery UI</h4>
        <button>Click Me!</button>
    </div>
</body>

</html>
```

我定义了两部分内容，一部分包含了 AngularJS 指令和数据绑定。另一部分包含了一个 jQuery UI 按钮，重要之处在于对 jQuery UI 小部件进行设置的方法，是通过方法调用实现的

```javascript
...
$('#jqui button').button().click(function (e) {
    alert("jQuery UI Button was clicked");
});
...
```

这行代码选出了使用 jQuery UI 的按钮元素，并设置了一个事件回调函数，在按钮被单击时将会被调用 本例中的 AngularJS 部分包含了一个用于对 jQuery UI 按钮进行启用 / 禁用的复选框，以及一个将用于对按钮的单击次数进行计数的变量和行为

控制按钮状态

```html
...
<script>
    $(document).ready(function () {
        $('#jqui button').button().click(function (e) {
            alert("jQuery UI Button was clicked");
        });
    });

    var app = angular.module("exampleApp", [])
        .controller("simpleCtrl", function ($scope) {

            $scope.buttonEnabled = true;
            $scope.clickCounter = 0;

            $scope.handleClick = function () {
                $scope.clickCounter++;
            }

            $scope.$watch('buttonEnabled', function (newValue) {
                $('#jqui button').button({
                    disabled: !newValue
                });
            });
        });
</script>
...
```

$scope.$watch 方法注册了一个事件处理函数，在作用域中的某个值发生变化时将会被调用。在本例中，该值指定为 buttonEnabled 属性。所创建的处理函数接收该属性的前一值和新值。这里使用了新值通过一个方法调用来修改 jQuery UI 按钮的状态 $watch 提供了对外集成的手段，作用域上的某个变化可以触发调用另一个框架中的相应变化

提示： $watch 方法的第一个参数是表达式，AngularJS 将会计算它并找出你想监控什么。也就是说你可以通过调用一个函数来产生属性名，但也意味着如果你想直接指定一个属性名的话就必须使用字符串

对按钮单击进行计数 $apply 方法提供了对内集成的手段，这样在其他框架中的变化就可以引起在 AngularJS 中的相应变化。我们可以修改 jQuery UI 按钮的事件处理函数以便调用 AngularJS 控制器中定义的 handleClick 行为

```javascript
...
$(document).ready(function () {
    $('#jqui button').button().click(function (e) {
        angular.element(angularRegion).scope().$apply('handleClick()');
    });
});
...
```

这是一段很紧凑的代码。它所做的第一件事是查找到应用了 AngularJS 控制器的那个元素所关联的作用域。记住这段 JavaScript 代码可不是 AngularJS 世界的一部分，所以你不能在这里通过声明对 $scope 的依赖来获取所需的东西 AngularJS 提供了 angular.element 方法，类似于 jQuery 的一部分轻量级实现，传递所关心元素的 id 属性值给这个方法，就可以得到一个定义了 scope 方法的对象，并返回所需的作用域

提示： scope 方法只是 jqLite 的特性之一

找到作用域之后，调用了 $apply 方法来调用 handleClick () 行为。注意这里并没有直接调用 handleClick 行为。必需通过 $apply 方法指定一个表达式，以便让作用域知道产生的变化并传播给所绑定的表达式。对 handleClick 行为的调用将更新 clickCounter 变量。也可以通过类似这样的一个表达式直接修改 clickCounter 变量

```javascript
...
angular.element(angularRegion).scope().$apply('clickCounter = clickCounter + 1');
...
```

但是我更青睐于定义行为，因为这允许我将更新作用域的逻辑保持在 AngularJS 代码的同一个地方。我也推荐你遵循这一方式

# 第 14 章 使用过滤器

## 为什么以及何时使用过滤器

过滤器让你能够定义经常使用的数据转换过程，以便能够在整个应用程序中得到使用，而不需要捆绑到某个特定的控制器或数据类型上。过滤器在数据从作用域传递到指令上时进行转换，但并不会改变源数据，这允许在视图中显示时能够灵活地格式化或转换数据 将转换过程分离到可复用的过滤器中将会增强程序的灵活性

为什么以及何时使用过滤器

| 为什么使用                                                   | 什么时候使用                                           |
| :----------------------------------------------------------- | :----------------------------------------------------- |
| 过滤器包含了转换逻辑，这些逻辑可被用于向视图中显示程序中的任何数据 | 过滤器用于在数据被指令处理并显示到视图中之前将其格式化 |

## 准备示例项目

创建一个名为 filters.html 的文件

```html
<html ng-app="exampleApp">

<head>
    <title>Filters</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope) {
                $scope.products = [
                    { name: "Apples", category: "Fruit", price: 1.20, expiry: 10 },
                    { name: "Bananas", category: "Fruit", price: 2.42, expiry: 7 },
                    { name: "Pears", category: "Fruit", price: 2.02, expiry: 6 },
                    { name: "Tuna", category: "Fish", price: 20.45, expiry: 3 },
                    { name: "Salmon", category: "Fish", price: 17.93, expiry: 2 },
                    { name: "Trout", category: "Fish", price: 12.93, expiry: 4 },
                    { name: "Beer", category: "Drinks", price: 2.99, expiry: 365 },
                    { name: "Wine", category: "Drinks", price: 8.99, expiry: 365 },
                    { name: "Whiskey", category: "Drinks", price: 45.99, expiry: 365 }
                ];
            });
    </script>
</head>

<body ng-controller="defaultCtrl">
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3>
                Products
                <span class="label label-primary">{{products.length}}</span>
            </h3>
        </div>
        <div class="panel-body">
            <table class="table table-striped table-bordered table-condensed">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Category</td>
                        <td>Expiry</td>
                        <td class="text-right">Price</td>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="p in products">
                        <td>{{p.name}}</td>
                        <td>{{p.category}}</td>
                        <td>{{p.expiry}}</td>
                        <td class="text-right">{{p.price}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</body>

</html>
```

下载本地化文件 本章中介绍的一些内置过滤器具有使用本地化规则对数据值进行格式化的能力。为了演示这是如何工作的，需要使用一个用于指定这些规则的文件 访问 angularjs.org 网站，单击 "Download" 按钮，然后单击 "Extras"。将会显示一个 AngularJS 适用的文件列表，单击 "i18n" 链接然后将 angular-locale_zh-cn.js 文件保存到本地 angularjs 文件夹下

## 过滤单个数据的值

AngularJS 具有两种类型的内置过滤器：一类是对单个数据进行操作的，另一类是对数据集合进行操作的

用于单个数据的内置过滤器

| 名称                | 描述                                       |
| :------------------ | :----------------------------------------- |
| currency            | 该过滤器对货币值进行格式化                 |
| date                | 该过滤器对日期值进行格式化                 |
| json                | 该过滤器从 JSON 字符串生成一个对象         |
| number              | 该过滤器对数字值进行格式化                 |
| uppercase lowercase | 这两个过滤器将字符串格式化为全大写或全小写 |

提示： 使用过滤器能够做的最有用的事情之一就是可以将它们链式调用，这样多个过滤器可以按照顺序对同一数据进行操作

格式化货币值 currency 过滤器将数字值格式化为货币值，于是 1.2 便变成了 $1.20

```html
...
<tr ng-repeat="p in products">
    <td>{{p.name}}</td>
    <td>{{p.category}}</td>
    <td>{{p.expiry}}</td>
    <td class="text-right">{{p.price | currency }}</td>
</tr>
...
```

将过滤器应用到数据绑定中只需将竖线符号 ("|") 放到绑定和数据源之后，然后再加上过滤器的名字即可

为什么不在控制器里格式化数据 你也许想知道为什么不在源数据中就格式化为货币值，而是在数据绑定中才使用 currency 过滤器。毕竟，更新一下控制器的工厂函数只是件小事，类似这样：

```html
...
<script>
    angular.module("exampleApp", [])
        .controller("defaultCtrl", function ($scope) {
            $scope.products = [
                { name: "Apples", category: "Fruit", price: 1.20 },
                { name: "Bananas", category: "Fruit", price: 2.42 },
                { name: "Pears", category: "Fruit", price: 2.02 },
                // ...other data objects omitted for brevity...
            ];

            for (var i = 0; i < $scope.products.length; i++) {
                $scope.products[i].price =
                    "$" + Number($scope.products[i].price).toFixed(2);
            }
        });
</script>
...
```

这种方法也许看起来不错，但是它限制了你使用数据的方式。使用了 JavaScript 的 Number.toFixed 方法对数据四舍五入之后，就损失了精度。这在处理更精确的数据值时会很重要 同时这也失去了将数据进行各种不同转换的能力。例如如果想计算 price 属性值的平均值或求和，就不得不将货币字符串解析回数字值 过滤器不仅能够保留作用域中数据的完整性，你还将了解到，将格式化逻辑放到控制器外面意味着它能够在整个应用程序中被使用，这将有助于创建易于测试和维护的可复用格式化逻辑

使用了 currency 过滤器之后数字值被四舍五入为两位小数，并且带有货币符号前缀。默认的货币符号是 $，但也可以指定一个替代符

```html
...
<td class="text-right">{{p.price | currency:"￥" }}</td>
...
```

在过滤器名之后添加了一个冒号 (":") 然后添加一个字符串表示想替换成的符号

格式化其他数字值 number 过滤器格式化数字类型的数据值，调整小数位数，根据需要进行四舍五入

```html
...
<td class="text-right">{{p.price | number:0 }}</td>
...
```

冒号后面的数字指定了要显示的小数位数

注意： number 过滤器会自动在千分位处插入逗号，例如 12345 将会被转换成 12，345

格式化日期 date 过滤器会自动格式化日期，这个日期可以是字符串，JavaScript 日期对象或者毫秒数等等。为了演示 date 过滤器的用法，向控制器中增加了一个返回日期对象的行为，返回的是表示未来若干天后的一个日期对象。然后使用该行为将每个数据对象的 expiry 属性转换为 date 过滤器所使用的数据

```html
<html ng-app="exampleApp">

<head>
    <title>Filters</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope) {
                $scope.products = [
                    { name: "Apples", category: "Fruit", price: 1.20, expiry: 10 },
                    { name: "Bananas", category: "Fruit", price: 2.42, expiry: 7 },
                    { name: "Pears", category: "Fruit", price: 2.02, expiry: 6 },

                    // ...other data objects omitted for brevity...
                ];

                $scope.getExpiryDate = function (days) {
                    var now = new Date();
                    return now.setDate(now.getDate() + days);
                }
            });
    </script>
</head>

<body ng-controller="defaultCtrl">
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3>
                Products
                <span class="label label-primary">{{products.length}}</span>
            </h3>
        </div>
        <div class="panel-body">
            <table class="table table-striped table-bordered table-condensed">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Category</td>
                        <td>Expiry</td>
                        <td class="text-right">Price</td>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="p in products">
                        <td>{{p.name}}</td>
                        <td>{{p.category}}</td>
                        <td>{{getExpiryDate(p.expiry) | date:"dd MMM yy"}}</td>
                        <td class="text-right">{{p.price | number:0 }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</body>

</html>
```

冒号后面的指定了格式化字符串

date 过滤器支持的格式化字符串成分

| 成分 | 描述                                   |
| :--- | :------------------------------------- |
| yyyy | 年份的四位数表示 (2018)                |
| yy   | 年份的两位数表示 (18)                  |
| MMMM | 月份的全称 (August)                    |
| MMM  | 月份的简称 (Aug)                       |
| MM   | 数字形式的月份，补齐为两个字符 (08)    |
| M    | 数字形式的月份，无补齐 (8)             |
| dd   | 每月的第几日，补齐为两个字符 (09)      |
| d    | 每月的第几日，无补齐 (9)               |
| EEEE | 星期几的全称 (Thursday)                |
| EEE  | 星期几的简称 (Thu)                     |
| HH   | 24 小时制的小时数，补齐为两个字符 (04) |
| H    | 24 小时制的小时数，无补齐 (4)          |
| hh   | 12 小时制的小时数，补齐为两个字符 (04) |
| h    | 12 小时制的小时数，无补齐 (04)         |
| mm   | 分钟数，补齐为两个字符 (01)            |
| m    | 分钟数，无补齐 (1)                     |
| ss   | 秒钟数，补齐为两个字符 (02)            |
| s    | 秒钟数，无补齐 (2)                     |
| a    | 上午 / 下午标志                        |
| Z    | 时区的四位字符表示形式                 |

注意： 日期表达式在世界各地是有显著不同的，你必须使用能让用户理解的格式化字符串

改变字符串大小写 uppercase 和 lowercase 过滤器用于将字符串转换成全大写或全小写

```html
...
<td>{{p.name | uppercase}}</td>
<td>{{p.category | lowercase}}</td>
...
```

生成 JSON json 过滤器用于从 JavaScript 对象创建 JSON 字符串

```html
...
<tr ng-repeat="p in products">
    <td colspan="4">{{p | json}}</td>
</tr>
...
```

本地化过滤输出 currency、number 和 date 过滤器都支持使用本地化规则对数据进行格式化，规则定义在本地化文件中，比如在本章开始部分所下载的那个文件

```html
<html ng-app="exampleApp">

<head>
    <title>Filters</title>
    <script src="angular.js"></script>
    <script src="angular-locale_zh-cn.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope) {
                $scope.products = [
                    { name: "Apples", category: "Fruit", price: 1.20, expiry: 10 },
                    { name: "Bananas", category: "Fruit", price: 2.42, expiry: 7 },
                    { name: "Pears", category: "Fruit", price: 2.02, expiry: 6 },
                    { name: "Tuna", category: "Fish", price: 20.45, expiry: 3 },
                    { name: "Salmon", category: "Fish", price: 17.93, expiry: 2 },
                    { name: "Trout", category: "Fish", price: 12.93, expiry: 4 },
                    { name: "Beer", category: "Drinks", price: 2.99, expiry: 365 },
                    { name: "Wine", category: "Drinks", price: 8.99, expiry: 365 },
                    { name: "Whiskey", category: "Drinks", price: 45.99, expiry: 365 }
                ];

                $scope.getExpiryDate = function (days) {
                    var now = new Date();
                    return now.setDate(now.getDate() + days);
                }
            });
    </script>
</head>

<body ng-controller="defaultCtrl">
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3>
                Products
                <span class="label label-primary">{{products.length}}</span>
            </h3>
        </div>
        <div class="panel-body">
            <table class="table table-striped table-bordered table-condensed">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Category</td>
                        <td>Expiry</td>
                        <td class="text-right">Price</td>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="p in products">
                        <td>{{p.name}}</td>
                        <td>{{p.category}}</td>
                        <td>{{getExpiryDate(p.expiry) | date:"shortDate"}}</td>
                        <td class="text-right">{{p.price | currency }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</body>

</html>
```

在本例中增加了一个 script 元素以引入 angular-locale_zh-cn.js 文件 需要注意的是此处为 date 过滤器指定的格式化字符串为 shortDate。这是 date 过滤器所支持的几个常用日期快捷表达式之一

date 过滤器支持的快捷格式字符串

| 格式字符串 | 描述                      |
| :--------- | :------------------------ |
| medium     | 相当于 MMM d, y h:mm:ss a |
| short      | 相当于 M/d/yy h:mm a      |
| fullDate   | 相当于 EEEE, MMMM d,y     |
| longDate   | 相当于 MMMM d, y          |
| mediumDate | 相当于 MMM d, y           |
| shortDate  | 相当于 M/d/yy             |
| mediumTime | 相当于 h:mm:ss a          |
| shortTime  | 相当于 h:mm a             |

本地化的危险 AngularJS 对本地化的支持对于客户端开发框架是一个相当好的标准。它的用途很广泛，但是用来定制一个本地化的应用程序还不够。地区之间的差异不仅仅只是日期、数字和货币形式，你需要仔细规划并咨询专家的建议，才能创建一个真正的本地化应用程序，需要考虑到本土的商业习惯和规则、习语以及宗教信仰等一切相关事物 我的建议是，如果无法保证完成一个完整的本地化应用程序所需的时间、精力和资源，就只集中精力于 en-US 地区。一个特定于美国地区英语环境的 Web 程序将会遵循北美地区的商业和语言习惯，对于说英语的人来说也相对更容易创建 (假设你最常使用英语语言)，而且互联网本身以美国为主导的本质意味着 en-US 的惯用语能够被广泛理解。这种方法将会把不说英语或不懂美式惯用语的潜在客户排除在外，但是这通常比造出一个蹩脚的本地化应用程序要好 说得更清楚一些，就是最好应该是对于每个需要提供服务的地区都能提供相当本地化的应用程序，但是如果除了日期和货币符号外没有本地化其他内容，你只会陷入麻烦之中

## 过滤集合

限制项目数量 limitTo 过滤器可以限制从一个数据对象构成的数组中取出的项目的数量，这在一个仅能容纳一定数量项目的页面中尤为有用

```html
<html ng-app="exampleApp">

<head>
    <title>Filters</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope) {
                $scope.products = [
                    { name: "Apples", category: "Fruit", price: 1.20, expiry: 10 },
                    { name: "Bananas", category: "Fruit", price: 2.42, expiry: 7 },
                    { name: "Pears", category: "Fruit", price: 2.02, expiry: 6 },
                    { name: "Tuna", category: "Fish", price: 20.45, expiry: 3 },
                    { name: "Salmon", category: "Fish", price: 17.93, expiry: 2 },
                    { name: "Trout", category: "Fish", price: 12.93, expiry: 4 },
                    { name: "Beer", category: "Drinks", price: 2.99, expiry: 365 },
                    { name: "Wine", category: "Drinks", price: 8.99, expiry: 365 },
                    { name: "Whiskey", category: "Drinks", price: 45.99, expiry: 365 }
                ];

                $scope.limitVal = "5";
                $scope.limitRange = [];
                for (var i = (0 - $scope.products.length); i <= $scope.products.length; i++) {
                    $scope.limitRange.push(i.toString());
                }
            });
    </script>
</head>

<body ng-controller="defaultCtrl">
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3>
                Products
                <span class="label label-primary">{{products.length}}</span>
            </h3>
        </div>
        <div class="panel-body">
            Limit:
            <select ng-model="limitVal" ng-options="item for item in limitRange"></select>
        </div>
        <div class="panel-body">
            <table class="table table-striped table-bordered table-condensed">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Category</td>
                        <td>Expiry</td>
                        <td class="text-right">Price</td>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="p in products | limitTo:limitVal">
                        <td>{{p.name}}</td>
                        <td>{{p.category}}</td>
                        <td>{{p.expiry}}</td>
                        <td class="text-right">{{p.price | currency }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</body>

</html>
```

最重要的修改就是在 ng-repeat 指令中定义的表达式里对数组应用了 limitTo 过滤器

```html
...
<tr ng-repeat="p in products | limitTo:limitVal">
...
```

limitVal 指定了应该从数据源中使用的项目数

提示： limitTo 过滤器也可以对字符串值进行操作，把每个字符当作数组中的一个对象那样处理

limitTo 过滤器可以接受负值。如果将 limitTo 过滤器配置为一个正数过滤器会从数组中选出前 N 个对象，如果将 limitTo 过滤器配置为一个负数过滤器会从数组中选出后 N 个对象

提示： 不必担心越界问题。如果你指定了一个大于数组大小的数值，limitTo 过滤器将会返回数组中的所有对象

选取项 filter 过滤器用于从数组中选出一些对象。选取条件可以指定为一个表达式，或者一个用于匹配属性值的 map 对象，或者一个函数

```html
...
<tr ng-repeat="p in products | filter:{category:'Fish'}">
    <td>{{p.name}}</td>
    <td>{{p.category}}</td>
    <td>{{p.expiry}}</td>
    <td class="text-right">{{p.price | currency }}</td>
</tr>
...
```

本例中使用的是通过 map 对象进行选取的方法，指定了想要选取的对象必须是 category 属性为 Fish 的。如果你通过一个函数进行过滤，那些使得函数执行结果返回 true 的项目将会被选取

```html
<html ng-app="exampleApp">

<head>
    <title>Filters</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope) {
                $scope.products = [
                    { name: "Apples", category: "Fruit", price: 1.20, expiry: 10 },
                    { name: "Bananas", category: "Fruit", price: 2.42, expiry: 7 },
                    { name: "Pears", category: "Fruit", price: 2.02, expiry: 6 },
                    { name: "Tuna", category: "Fish", price: 20.45, expiry: 3 },
                    { name: "Salmon", category: "Fish", price: 17.93, expiry: 2 },
                    { name: "Trout", category: "Fish", price: 12.93, expiry: 4 },
                    { name: "Beer", category: "Drinks", price: 2.99, expiry: 365 },
                    { name: "Wine", category: "Drinks", price: 8.99, expiry: 365 },
                    { name: "Whiskey", category: "Drinks", price: 45.99, expiry: 365 }
                ];

                $scope.limitVal = "5";
                $scope.limitRange = [];
                for (var i = (0 - $scope.products.length); i <= $scope.products.length; i++) {
                    $scope.limitRange.push(i.toString());
                }

                $scope.selectItems = function (item) {
                    return item.category == "Fish" || item.name == "Beer";
                };
            });
    </script>
</head>

<body ng-controller="defaultCtrl">
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3>
                Products
                <span class="label label-primary">{{products.length}}</span>
            </h3>
        </div>
        <div class="panel-body">
            Limit:
            <select ng-model="limitVal" ng-options="item for item in limitRange"></select>
        </div>
        <div class="panel-body">
            <table class="table table-striped table-bordered table-condensed">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Category</td>
                        <td>Expiry</td>
                        <td class="text-right">Price</td>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="p in products | filter:selectItems">
                        <td>{{p.name}}</td>
                        <td>{{p.category}}</td>
                        <td>{{p.expiry}}</td>
                        <td class="text-right">{{p.price | currency }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</body>

</html>
```

在本例中定义了一个名为 selectItems 的作用域行为。这个行为将会依次调用集合中的每一个项目，并按照顺序返回每一个对象。此处的实现是当 category 属性为 Fish 或 name 属性为 Beer 时返回 true。使用行为向过滤器提供一个函数，使得使用比表达式更为复杂的选取成为可能

对项目排序 orderBy 过滤器可以对数组中的对象进行排序

```html
...
<tr ng-repeat="p in products | orderBy:'price'">
    <td>{{p.name}}</td>
    <td>{{p.category}}</td>
    <td>{{p.expiry}}</td>
    <td class="text-right">{{p.price | currency }}</td>
</tr>
...
```

这是最简单的为对象排序的方式 —— 通过指定排序应该依据的属性名称

警告： 此处对属性名使用了引号。如果你忘记为属性名加引号，orderBy 过滤器将会悄无声息地失败。没有引号时，过滤器会假设你想使用一个作用域变量或者控制器变量，并且认为你将来会在某处着手定义这个变量

1. 设置排序方向

   在只设置了一个属性名的情况下，相当于隐式地请求过滤器为对象进行升序排序。可以通过显示地使用 + 或 - 字符来设置排序顺序

```html
   ...
   <tr ng-repeat="p in products | orderBy:'-price'">
   ...
```

在属性名前加入一个负号前缀 (-) 就指定了应该依据指定的属性进行降序排序

1. 使用函数排序

   之所以需要小心地将属性名指定为字符串的原因是因为 orderBy 过滤器也能够使用一个函数进行排序，也就是说允许不直接按照某个属性值的方式进行排序

```html
   ...
   <script>
       angular.module("exampleApp", [])
           .controller("defaultCtrl", function ($scope) {
               $scope.products = [
                   { name: "Apples", category: "Fruit", price: 1.20, expiry: 10 },
                   { name: "Bananas", category: "Fruit", price: 2.42, expiry: 7 },
                   { name: "Pears", category: "Fruit", price: 2.02, expiry: 6 },
                   { name: "Tuna", category: "Fish", price: 20.45, expiry: 3 },
                   { name: "Salmon", category: "Fish", price: 17.93, expiry: 2 },
                   { name: "Trout", category: "Fish", price: 12.93, expiry: 4 },
                   { name: "Beer", category: "Drinks", price: 2.99, expiry: 365 },
                   { name: "Wine", category: "Drinks", price: 8.99, expiry: 365 },
                   { name: "Whiskey", category: "Drinks", price: 45.99, expiry: 365 }
               ];

               $scope.myCustomSorter = function (item) {
                   return item.expiry < 5 ? 0 : item.price;
               }
           });
   </script>
   ...
```

myCustomSorter 是一个基于多属性执行排序功能的函数，用于排序的函数需传入一个数据数组中的对象，然后返回一个在排序时用于比较的对象或值。在这个函数中如果 expiry 属性小于 5 返回的是 0，如果 expiry 属性不小于 0 返回的是 price 属性。这个函数的效果是将 expiry 属性小于 5 的那些项放到前面，再对 expiry 属性不小于 5 的项使用 price 属性进行排序，将 price 属性值较小的放在前面。接下来将 myCustomSorter 函数应用到 orderBy 过滤器

```html
   ...
   <tr ng-repeat="p in products | orderBy:myCustomSorter">
       <td>{{p.name}}</td>
       <td>{{p.category}}</td>
       <td>{{p.expiry}}</td>
       <td class="text-right">{{p.price | currency }}</td>
   </tr>
   ...
```

1. 用多个谓语进行排序

   AngularJS 排序函数有点奇怪，你会被要求返回一个可以被 orderBy 过滤器用于执行排序的值，而不是被要求比较两个对象并确定它们的相对次序。这意味着当依据多个不同属性排序时，你可能只能得到仅接近于理想效果的结果 幸运的是，你可以配置 orderBy 过滤器为使用一个属性名或函数名构成的数组，用于依次进行排序。如果两个对象对于数组中的第一个属性或者函数具有相同的值，然后 orderBy 过滤器就会考虑使用第二个值或函数，依次继续下去直到能够对数组对象分出次序，或者尝试完所有的属性 / 函数

```html
   ...
   <tr ng-repeat="p in products | orderBy:['myCustomSorter', '-price']">
       <td>{{p.name}}</td>
       <td>{{p.category}}</td>
       <td>{{p.expiry}}</td>
       <td class="text-right">{{p.price | currency }}</td>
   </tr>
   ...
```

## 链式过滤器

所有内置过滤器已经一一展示完毕，但是最优秀的过滤器特性之一是可以将过滤器串联起来使用，创建出更复杂的效果

```html
...
<tr ng-repeat="p in products | orderBy:[myCustomSorter, '-price'] | limitTo: 5">
    <td>{{p.name}}</td>
    <td>{{p.category}}</td>
    <td>{{p.expiry}}</td>
    <td class="text-right">{{p.price | currency }}</td>
</tr>
...
```

提示： 可以将对单个数据值进行操作的过滤器连接起来使用，但是这么做并没有多大意义，比如连接 currency 和 date 这样的内置过滤器，因为它们本来就是为某种特定数据类型设计的。由于这个原因，通常会看到链式调用被用于对集合进行操作的过滤器，使之能够执行复杂的变换

过滤器通过竖线 (|) 符号链式连接在一起，并按照所写下的顺序执行计算

## 创建自定义过滤器

创建格式化数据值的过滤器 过滤器是由 module.filter 方法创建的，该方法接收两个参数：待创建的过滤器名称和一个工厂函数。为了演示如何创建一个过滤器，在 angularjs 文件夹下新增一个名为 customFilters.js 的文件

```javascript
angular.module("exampleApp")
    .filter("labelCase", function () {
        return function (value, reverse) {
            if (angular.isString(value)) {
                var intermediate = reverse ? value.toUpperCase() : value.toLowerCase();
                return (reverse ? intermediate[0].toLowerCase() : intermediate[0].toUpperCase()) + intermediate.substr(1);
            } else {
                return value;
            }
        };
    });
```

注意： 本例中对 angular.module 方法只使用了一个参数。于是会检索之前已经定义的模块以用作进一步的配置 —— 在这里这个模块是在主文件 filters.html 中定义的。检索出这个模块后就能够调用 filter 方法以对 exampleApp 模块形成补充，即使代码是在一个独立的文件中

所创建的过滤器名为 labelCase，它会将一个字符串格式化为只有首字母大小的，所定义的工人函数接收两个参数：第一个是待被过滤的值，第二个参数用于允许过滤器用途被颠倒过来，也就是首字母为小写而剩余其他字母为大写

提示： 注意这里使用了 angular.isString 方法检查过滤器格式化的值是否确实是一个字符串。检查所收到的数据类型是否是所期望的是值得去做的，你的过滤器被误用于指令表达式中时这种的情况是有可能发生的。对于这个过滤器，在不是一个字符串时只是简单返回了未修改过的原数据，但是你可能会更愿意生成一个在测试时能够被检测到的错误

在使用过滤器前需要在 filters.html 文件中添加对 customFilters.js 文件的引用

```html
...
<script>
    angular.module("exampleApp", [])
        .controller("defaultCtrl", function ($scope) {
            // ...statements omitted for brevity...
        });
</script>
<script src="customFilters.js"></script>
...
```

这里将引入 customFilters.js 文件的 script 元素放到了定义 exampleApp 模块的后面，因为 JavaScript 文件中的代码依赖于已经被定义的这个模块。接下来将过滤器应用到文档中

```html
...
<tr ng-repeat="p in products | orderBy:[myCustomSorter, '-price'] | limitTo: 5">
    <td>{{p.name | labelCase}}</td>
    <td>{{p.category | labelCase:true}}</td>
    <td>{{p.expiry}}</td>
    <td class="text-right">{{p.price | currency }}</td>
</tr>
...
```

在将该过滤器应用于 name 属性时没有指定配置选项，也就意味着 AngularJS 会将 null 值传给过滤器工人函数的第二个参数。过滤器中的写法使得第二个参数为 false 或 null 值时会让默认行为被调用，我推荐你对自定义过滤器使用这种方法，因为这样能够使得它更易用。在将该过滤器应用于 category 属性时指定了配置选项为 true，这将会颠倒过滤器所应用的大小写转换过程

创建一个集合过滤器 在本节中将创建一个 skip 过滤器，用于从数组的开头部分移除一定数量的项目 —— 虽然不是特别有用，但是稍后将会依赖它构建别的过滤器

```javascript
angular.module("exampleApp")
    .filter("labelCase", function () {
        // ...statements omitted for brevity...
    })
    .filter("skip", function () {
        return function (data, count) {
            if (angular.isArray(data) && angular.isNumber(count)) {
                if (count > data.length || count < 1) {
                    return data;
                } else {
                    return data.slice(count);
                }
            } else {
                return data;
            }
        }
    });
```

在工人函数中，坚持了数据是否为数组，以及收到的 count 参数是否为数字值。执行了一些边界检查以确保过滤器能够在数组上执行所需的转换，如果这一切都正常，就使用 JavaScript 内置的 slice 方法跳过一定数量的对象。接下来将过滤器应用到文档中

```html
...
<tr ng-repeat="p in products | skip:2 | limitTo: 5">
    <td>{{p.name}}</td>
    <td>{{p.category}}</td>
    <td>{{p.expiry}}</td>
    <td class="text-right">{{p.price | currency }}</td>
</tr>
...
```

此处链式调用了 skip 和 limitTo 过滤器，以强调自定义过滤器和内置过滤器的使用其实是一样的

在已有的过滤器上构建新的过滤器 在本节中打算将 skip 和 limitTo 过滤器的功能合并到单个过滤器中。虽然对这些过滤器使用链式调用很容易，但是我想演示的是如何在已有的过滤器功能上扩展，而不用赋值任何代码

```javascript
angular.module("exampleApp")
    .filter("labelCase", function () {
        // ...statements omitted for brevity...
    })
    .filter("skip", function () {
        // ...statements omitted for brevity...
    })
    .filter("take", function ($filter) {
        return function (data, skipCount, takeCount) {
            var skippedData = $filter("skip")(data, skipCount);
            return $filter("limitTo")(skippedData, takeCount);
        }
    });
```

我的 take 过滤器并没有自己实现转换过程，甚至都不检查所处理的数据是何种类型。取而代之的是，它依赖于 skip 和 limitTo 过滤器，这两个过滤器执行它们自己的校验并应用自己的转换过程，就像被直接使用一样 在示例中，我的过滤器工厂函数声明了对 $filter 服务的依赖，这提供了对模块中已经定义的过滤器的访问能力。这些过滤器在工人函数中通过名称来访问和调用

```javascript
...
var skippedData = $filter("skip")(data, skipCount);
...
```

这条语句在工人函数内调用了 skip 过滤器，然后通过赋值给一个普通的 JavaScript 变量将处理后的数据集存起来。对 limitTo 过滤器重复这样的过程，这让我能够在其他过滤器的基础上构建一个新的过滤器。接下来将过滤器应用到文档中

```html
...
<tr ng-repeat="p in products | take:2:5">
    <td>{{p.name}}</td>
    <td>{{p.category}}</td>
    <td>{{p.expiry}}</td>
    <td class="text-right">{{p.price | currency }}</td>
</tr>
...
```

提示： 这是第一次使用需要提供多个配置参数的过滤器，可以看到提供多个参数值时使用冒号 (:) 将它们进行分隔

我的 take 过滤器并没有从它所依赖的那些过滤器上得到什么实际好处，但是这个例子演示了在不用复制已有功能的情况下，构建一个确实能够带来价值的过滤器是多么简单

# 第 15 章 创建自定义指令

## 为什么以及何时创建自定义指令

内置指令不能满足你的需求时，就可以创建自定义指令，比如当你想在代码中表达复杂的功能而不是在 HTML 中，或者当你想创建一个能够用于多个 AngularJS 程序的自包含功能单元时

为什么以及何时创建自定义指令

| 为什么使用                                                  | 什么时候使用                                                 |
| :---------------------------------------------------------- | :----------------------------------------------------------- |
| 自定义指令让你能创建出超越 AngularJS 所提供的内置指令的功能 | 当内置指令无法按照你想要的方式工作时，或者你想创建可复用于不同应用程序的自包含功能时，就可以创建自定义指令 |

## 准备示例项目

在 angularjs 文件夹下创建一个名为 directives.html 的文件

```html
<html ng-app="exampleApp">

<head>
    <title>Directives</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope) {
                $scope.products = [
                    { name: "Apples", category: "Fruit", price: 1.20, expiry: 10 },
                    { name: "Bananas", category: "Fruit", price: 2.42, expiry: 7 },
                    { name: "Pears", category: "Fruit", price: 2.02, expiry: 6 }
                ];
            });
    </script>
</head>

<body ng-controller="defaultCtrl">
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3>Products</h3>
        </div>
        <div class="panel-body">
            Content will go here
        </div>
    </div>
</body>

</html>
```

## 创建自定义指令

初始目标是创建并应用一个指令，该指令能够生成一个 ul 元素，该元素中包含根据 products 数组生成的 li 元素

定义指令 使用 module.directive 方法来创建指令，参数是新指令的名称和一个用于创建指令的工厂函数

```html
...
<script>
    angular.module("exampleApp", [])
        .directive("unorderedList", function () {
            return function (scope, element, attrs) {
                // implementation code will go here
            }
        })
        .controller("defaultCtrl", function ($scope) {
            $scope.products = [
                { name: "Apples", category: "Fruit", price: 1.20, expiry: 10 },
                { name: "Bananas", category: "Fruit", price: 2.42, expiry: 7 },
                { name: "Pears", category: "Fruit", price: 2.02, expiry: 6 }
            ];
        });
</script>
...
```

注意： 在这个例子中是在控制器的定义之前定义指令的，这并不是必需的，在较大的项目中一般是在一个或多个独立的文件中定义指令

传给 directive 方法的第一个参数设置了新指令的名称为 unorderedList。注意这里使用了标准 JavaScript 大小写习惯，也就是说 unordered 中的 u 是小写，而 List 中的 L 是大小。AngularJS 在遇到混合大小写的名称时有点特殊。接下来将自定义指令应用到文档中

```html
...
<body ng-controller="defaultCtrl">
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3>Products</h3>
        </div>
        <div class="panel-body">
            <div unordered-list="products"></div>
        </div>
    </div>
</body>
...
```

这里将该指令用作 div 元素上的一个属性，但是请注意属性名和创建指令时传给 directive 方法的参数有所不同：是 unordered-list 而不是 unorderedList。传给方法的参数中每个以大写字母开头的词被认为是属性名中的一个独立的词，而每个词之间是以一个连字符分隔的

实现链接函数 指令中的工人函数被称为链接函数，它提供了将指令与 HTML 文档和作用域数据相连接的方法 当 AngularJS 建立指令的每个实例时，链接函数便被调用并接收三个参数：指令被应用到的视图的作用域，指令被应用到的 HTML 元素，以及 HTML 元素的属性。惯例是使用 scope、element 和 attrs 这些参数来定义链接函数

提示： scope、element 和 attrs 参数只是普通的 JavaScript 参数，而不是通过依赖注入提供的功能。也就意味着被传入链接函数的对象的顺序应是固定的

1. 从作用域获取数据

   实现自定义指令需要做的第一步是从作用域获取要显示的数据。与 AngularJS 控制器不同，指令并不声明对 $scope 服务的依赖，取而代之的是传入指令被应用到的视图的控制器所创建的作用域。这很重要，因为它允许单个指令在一个应用程序中被使用多次，而每个程序可能是不同作用域上工作的 之前的示例中将自定义指令用作 div 元素的一个属性，并且使用属性值指定了待处理数组的数组名

```html
   ...
   <div unordered-list="products"></div>
   ...
```

要从作用域中获取数据，需要先得到该属性的属性值。链接函数的第三个参数是一个按照名字索引的属性集合。获取使用指令的属性名没有什么特殊的

```javascript
   ...
   angular.module("exampleApp", [])
       .directive("unorderedList", function () {
           return function (scope, element, attrs) {
               var data = scope[attrs["unorderedList"]];
               if (angular.isArray(data)) {
                   for (var i = 0; i < data.length; i++) {
                       console.log("Item: " + data[i].name);
                   }
               }
           }
       })
   ...
```

从 attrs 集合中使用 "unorderedList" 作为 key 获取相关的值，然后传给 scope 对象来获取数据

```javascript
   ...
   var data = scope[attrs["unorderedList"]];
   ...
```

提示： 注意这里使用了 "unorderedList" 作为 key 来获取 unordered-list 属性的值。AngularJS 在两种命名格式之间会自动进行映射。"unorderedList" 这样的形式是标准化的一个例子，能够被指令以多种不同的形式应用于 HTML 中 获取到数据之后就使用 angular.isArray 方法检查该数据是否确实为数组，并使用 for 循环将每个对象的 name 属性输出到控制台 (在实际项目中这可能是一个蹩脚的设计，因为这假定了指令要处理的所有对象都拥有 name 属性， 妨碍了重用)

1. 生成 HTML 元素

   下一步是从数据对象中生成所需的元素。AngularJS 包含了一个裁剪过的 jQuery，称为 jqLite

```javascript
   ...
   angular.module("exampleApp", [])
       .directive("unorderedList", function () {
           return function (scope, element, attrs) {
               var data = scope[attrs["unorderedList"]];
               if (angular.isArray(data)) {
                   var listElem = angular.element("<ul>");
                   element.append(listElem);
                   for (var i = 0; i < data.length; i++) {
                       listElem.append(angular.element('<li>').text(data[i].name));
                   }
               }
           }
       })
   ...
```

jqLite 的功能通过传递给链接函数的 element 参数暴露出来。首先，先调用了 angular.element 方法创建一个新元素，并在 element 参数上使用 append 方法向文档中插入这个新元素 大多数 jqLite 方法返回的结果是拥有访问 jqLite 各种功能的另一个对象，就像完整的 jQuery 库方法返回 jQuery 对象那样。AngularJS 不会暴露浏览器所提供的 DOM API，任何时候如果想对元素进行操作，都会期望接收一个 jqLite 对象 如果没有 jqLite 对象却需要创建一个 (例如要创建一个新的元素时)，就可以使用 angular.element 方法

打破对数据属性的依赖 我的自定义指令已经可以工作了，但是它存在对用于生成列表项的数组对象的依赖：它假定这些对象都有一个 name 属性。这种依赖将指令和具体的数据对象集合绑定起来了，也意味着无法在程序的别处或在其他程序中使用。有几种处理这种情形的方式

1. 添加一个支持属性

   第一种办法时最简单的，需要定义一个属性，用来指定哪个属性的值将会被显示在 li 项目中

```html
   <html ng-app="exampleApp">

   <head>
       <title>Directives</title>
       <script src="angular.js"></script>
       <link href="bootstrap.css" rel="stylesheet" />
       <link href="bootstrap-theme.css" rel="stylesheet" />
       <script>
           angular.module("exampleApp", [])
               .directive("unorderedList", function () {
                   return function (scope, element, attrs) {
                       var data = scope[attrs["unorderedList"]];
                       var propertyName = attrs["listProperty"];

                       if (angular.isArray(data)) {
                           var listElem = angular.element("<ul>");
                           element.append(listElem);
                           for (var i = 0; i < data.length; i++) {
                               listElem.append(angular.element('<li>')
                                   .text(data[i][propertyName]));
                           }
                       }
                   }
               })
               .controller("defaultCtrl", function ($scope) {
                   $scope.products = [
                       { name: "Apples", category: "Fruit", price: 1.20, expiry: 10 },
                       { name: "Bananas", category: "Fruit", price: 2.42, expiry: 7 },
                       { name: "Pears", category: "Fruit", price: 2.02, expiry: 6 }
                   ];
               })
       </script>
   </head>

   <body ng-controller="defaultCtrl">
       <div class="panel panel-default">
           <div class="panel-heading">
               <h3>Products</h3>
           </div>
           <div class="panel-body">
               <div unordered-list="products" list-property="name"></div>
           </div>
       </div>
   </body>

   </html>
```

本例中通过传递给链接函数的 attrs 参数获得 list-property 属性的值，使用 key 的名字为 listProperty。再说一遍，AngularJS 已经将属性名规范化了。然后使用 listProperty 属性的值从每个数据对象中获取一个值

提示： 如果属性名是以 data - 为前缀的，AngularJS 会在生成传给链接函数的属性集合时移除这一前缀。也就是说，例如，当属性名被规范化并传给链接函数时，属性 data-list-property 和 list-property 都会被表示为 listProperty

1. 计算表达式

   另外添加一个属性是有帮助的，但是仍然存在一些问题。例如，对 list-property 属性应用一个过滤器

```html
   ...
   <body ng-controller="defaultCtrl">
       <div class="panel panel-default">
           <div class="panel-heading">
               <h3>Products</h3>
           </div>
           <div class="panel-body">
               <div unordered-list="products" list-property="price | currency"></div>
           </div>
       </div>
   </body>
   ...
```

这一修改破坏了我的自定义指令，因为我是从属性中读出值并将该值用作要显示在每一个生成的 li 元素中的属性名。这个问题的解决方案是让作用域将属性当作一个表达式来进行计算，通过 scope.$eval 方法可以做到这点，传 给该方法的是要计算的表达式和需要用于执行该计算的任意本地数据

```javascript
   ...
   angular.module("exampleApp", [])
       .directive("unorderedList", function () {
           return function (scope, element, attrs) {
               var data = scope[attrs["unorderedList"]];
               var propertyExpression = attrs["listProperty"];
               if (angular.isArray(data)) {
                   var listElem = angular.element("<ul>");
                   element.append(listElem);
                   for (var i = 0; i < data.length; i++) {
                       listElem.append(angular.element('<li>')
                           .text(scope.$eval(propertyExpression, data[i])));
                   }
               }
           }
       })
   ...
```

获取到 listProperty 属性的值后，就得到了一个需要当作表达式进行计算的字符串。在创建 li 元素时，在传给链接函数的 scope 参数上调用 $eval 方法，并传入表达式和当前数据对象，用作需要计算的表达式属性来源

处理数据变化 要为指令进行介绍的下一个特性是响应作用域中数据变化的能力。目前在 AngularJS 处理时 li 元素的内容就已经被设置了，并且在底层数据值发生变化时无法自动更新

```html
<html ng-app="exampleApp">

<head>
    <title>Directives</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .directive("unorderedList", function () {
                return function (scope, element, attrs) {
                    var data = scope[attrs["unorderedList"]];
                    var propertyExpression = attrs["listProperty"];

                    if (angular.isArray(data)) {
                        var listElem = angular.element("<ul>");
                        element.append(listElem);
                        for (var i = 0; i < data.length; i++) {
                            listElem.append(angular.element('<li>')
                                .text(scope.$eval(propertyExpression, data[i])));
                        }
                    }
                }
            })
            .controller("defaultCtrl", function ($scope) {
                $scope.products = [
                    { name: "Apples", category: "Fruit", price: 1.20, expiry: 10 },
                    { name: "Bananas", category: "Fruit", price: 2.42, expiry: 7 },
                    { name: "Pears", category: "Fruit", price: 2.02, expiry: 6 }
                ];

                $scope.incrementPrices = function () {
                    for (var i = 0; i < $scope.products.length; i++) {
                        $scope.products[i].price++;
                    }
                }
            })
    </script>
</head>

<body ng-controller="defaultCtrl">
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3>Products</h3>
        </div>
        <div class="panel-body">
            <button class="btn btn-primary" ng-click="incrementPrices()">
                Change Prices
            </button>
        </div>
        <div class="panel-body">
            <div unordered-list="products" list-property="price | currency"></div>
        </div>
    </div>
</body>

</html>
```

本例中添加了一个按钮并使用了 ng-click 指令，以便控制器中的 incrementPrices 行为能被调用到

1. 添加监听器

   指令使用之前介绍过的 $watch 方法来监听作用域中的变化

```javascript
   ...
   angular.module("exampleApp", [])
       .directive("unorderedList", function () {
           return function (scope, element, attrs) {
               var data = scope[attrs["unorderedList"]];
               var propertyExpression = attrs["listProperty"];

               if (angular.isArray(data)) {
                   var listElem = angular.element("<ul>");
                   element.append(listElem);
                   for (var i = 0; i < data.length; i++) {
                       var itemElement = angular.element('<li>');
                       listElem.append(itemElement);
                       var watcherFn = function (watchScope) {
                           return watchScope.$eval(propertyExpression, data[i]);
                       }
                       scope.$watch(watcherFn, function (newValue, oldValue) {
                           itemElement.text(newValue);
                       });
                   }
               }
           }
       })
   ...
```

在本例中使用了两个函数，监听器函数基于作用域中的数据计算出一个值，该函数在每次作用域发生变化时都会被调用。如果该函数的返回值发生了变化，处理函数就会被调用

```javascript
   ...
   var watcherFn = function (watchScope) {
       return watchScope.$eval(propertyExpression, data[i]);
   }
   ...
```

我将这个监听器函数传递给 $watch 方法并指定回调函数

```javascript
   ...
   scope.$watch(watcherFn, function (newValue, oldValue) {
       itemElement.text(newValue);
   });
   ...
```

效果是指令能够监控被 li 元素显示的属性值，并在其值改变时更新元素的内容

提示： 这里并没有在 $watch 处理函数之外设置 li 元素的内容。AngularJS 在指令第一个词被使用时会调用处理器；newValue 参数会给出表达式的初始计算值，oldValue 参数则为 undefined

1. 修复词法作用域的问题

   该示例还不能正常工作，这是由于 JavaScript 的特性造成的。问题在于这条语句

```javascript
   ...
   var watcherFn = function (watchScope) {
       return watchScope.$eval(propertyExpression, data[i]);
   }
   ...
```

JavaScript 支持一种被称为闭包的特性，允许函数引用其作用域之外的变量。没有闭包就得确保为你的函数要访问的每一个对象和值定义参数 容易混淆之处在于，函数所访问的变量是在函数被调用时进行计算的，而不是函数被定义时。对于此处的监听函数，这意味着直到 AngularJS 调用这个函数时变量 i 才会被计算。也就是说事件发生的顺序类似这样：

1. AngularJS 调用链接函数来建立指令

2. for 循环开始遍历 products 数组中的各个元素

3. i 的值为 0，对应于数组中的第一个元素

4. for 循环将 i 加 1，变为 1，对应于数组中的第二个元素

5. for 循环将 i 加 1，变为 2，对应于数组中的第三个元素

6. for 循环将 i 加 1，变为 3，已经大于数组长度

7. for 循环结束

8. AngularJS 计算这三个分别设计 data [i] 的监听器函数

   在第 8 步发生时 i 的值为 3，这意味着所有三个监听器都试图访问一个数据数组中并不存在的对象，这就是为什么指令不工作的原因了 要解决这一问题就要对闭包特性加以控制，以便使用一个固定的或有界的变量来引用数据对象，也就是说需要让赋给变量的值是在第 3~5 步中设置的，而不是 AngularJS 在计算监听器函数时设置的就可以了

```javascript
   ...
   angular.module("exampleApp", [])
       .directive("unorderedList", function () {
           return function (scope, element, attrs) {
               var data = scope[attrs["unorderedList"]];
               var propertyExpression = attrs["listProperty"];

               if (angular.isArray(data)) {
                   var listElem = angular.element("<ul>");
                   element.append(listElem);
                   for (var i = 0; i < data.length; i++) {
                       (function () {
                           var itemElement = angular.element('<li>');
                           listElem.append(itemElement);

                           var index = i;
                           var watcherFn = function (watchScope) {
                               return watchScope.$eval(propertyExpression, data[index]);
                           }

                           scope.$watch(watcherFn, function (newValue, oldValue) {
                               itemElement.text(newValue);
                           })
                       }());
                   }
               }
           }
       })
   ...
```

这里在 for 循环内部定义了一个 "立即调用的函数表达式"(IIFE)，这个函数会被立即计算

```javascript
   ...
   (function () {
       // ...statements that will be executed go here...
   }());
   ...
```

我在 IIFE 表达式中定义一个名为 index 的变量，并将 i 的值赋给它。因为 IIFE 是在定义时就被执行的，所以 index 的值不会被 for 循环的下一个迭代所更新，这也意味着在监听器函数里可以从数据数组访问到正确的对象

## 使用 jqLite 工作

jqLite 是 AngularJS 所使用的裁剪版的 jQuery

对文档对象模型导航 要介绍的第一部分是 jqLite 对定位文档对象模型 (DOM) 中的元素的支持。对于简单指令通常不需要对 DOM 进行导航，因为已经对链接函数传入了 element 参数，该参数是一个代表指令所应用到的元素的 jqLite 对象。在更复杂些的指令中你可能必须管理一组元素，这就需要对元素层次结构进行遍历并定位和选出一个或多个要操作的元素的能力

关于 DOM 导航的 jqLite 方法

| 名称       | 描述                                                         |
| :--------- | :----------------------------------------------------------- |
| children() | 返回一组子元素。这个方法的 jqLite 实现不支持 jQuery 所提供的选择器特性 |
| eq(index)  | 从一个元素集合中返回指定索引处的元素                         |
| find(tag)  | 按照指定的 tag 名称定位所有的后代元素。jQuery 的实现为选择元素提供了额外选项，但在这个方法的 jqLite 实现中并不可用 |
| next()     | 获得下一个兄弟元素。这个方法的 jqLite 实现不支持 jQuery 所提供的选择器特性 |
| parent()   | 返回父元素。这个方法的 jqLite 实现不支持 jQuery 所提供的选择器特性 |

在 angularjs 文件夹下添加一个名为 jqlite.html 的文件

```html
<html ng-app="exampleApp">

<head>
    <title>Directives</title>
    <script src="angular.js"></script>
    <script>
        angular.module("exampleApp", [])
            .directive("demoDirective", function () {
                return function (scope, element, attrs) {
                    var items = element.children();
                    for (var i = 0; i < items.length; i++) {
                        if (items.eq(i).text() == "Oranges") {
                            items.eq(i).css("font-weight", "bold");
                        }
                    }
                }
            })
            .controller("defaultCtrl", function ($scope) {
                // controller defines no data or behaviors
            })
    </script>
</head>

<body ng-controller="defaultCtrl">
    <h3>Fruit</h3>
    <ol demo-directive>
        <li>Apples</li>
        <li>Oranges</li>
        <li>Pears</li>
    </ol>
</body>

</html>
```

需要注意的是，这里使用了 eq 方法来获取当前索引下的元素，而不是将 jqLite 对象当作 JavaScript 数组来处理。eq 方法返回一个包含了指定索引处的元素的 jqLite 对象，并且支持所有的 jqLite 方法。使用 JavaScript 数组索引则将返回一个 HTMLElement 对象，是浏览器用于表示 DOM 中的元素的对象

定位后代元素 children 方法返回的所有元素是直接定义在 jqLite 对象所表示的元素下的。如果想更深入一层地向下查找元素，就需要使用 find 方法，它可以在一个元素的后代元素中查找指定类型的元素

```html
...
<ol demo-directive>
    <li>Apples</li>
    <ul>
        <li>Bananas</li>
        <li>Cherries</li>
        <li>Oranges</li>
    </ul>
    <li>Oranges</li>
    <li>Pears</li>
</ol>
...
```

children 方法将只返回 ol 元素下的直接后代，为了对比使用 find 方法在 ol 元素的后代元素中定位所有 li 元素

```javascript
...
angular.module("exampleApp", [])
    .directive("demoDirective", function () {
        return function (scope, element, attrs) {
            var items = element.find("li");
            for (var i = 0; i < items.length; i++) {
                if (items.eq(i).text() == "Oranges") {
                    items.eq(i).css("font-weight", "bold");
                }
            }
        }
    })
...
```

警告： 你可以使用 jqLite 方法在 DOM 中的任意地方进行导航，甚至在指令所应用到的元素的外部。尽管能够在文档中随意漫游这件事听起来很诱人，但我的建议是固守原则，只处理传给链接函数的元素的后代元素

修改元素 jqLite 提供了一组用于修改元素内容和属性的方法

用于修改元素的 jqLite 方法

| 名称                         | 描述                                                         |
| :--------------------------- | :----------------------------------------------------------- |
| addClass(name)               | 将 jqLite 对象中的所有元素添加到指定的 class                 |
| attr(name) attr(name, value) | 获得 jqLite 对象中第一个元素的指定特性的值，或者为所有元素设置指定值 |
| css(name) css(name, value)   | 获得 jqLite 对象中第一个元素的指定 CSS 的值，或者为所有元素设置指定值 |
| hasClass(name)               | 如果 jqLite 对象中有任一对象属于指定的 class 时，返回 true   |
| prop(name) prop(name, value) | 获得 jqLite 对象中第一个元素的指定属性的值，或者为所有元素设置指定值 |
| removeAttr(name)             | 从 jqLite 对象的所有元素中移除某个特性                       |
| removeClass(name)            | 从 jqLite 对象中移除具有指定 class 的元素                    |
| text() text(value)           | 获取 jqLite 对象中所有元素的文本内容拼接后的结果，或者设置所有元素的文本内容 |
| toggleClass(name)            | 为 jqLite 对象中的所有元素切换指定 class 的所属资格。那些不在 class 中的元素将被添加到其中，而那些在 class 中的元素将会从中移除 |
| val() val(value)             | 获取 jqLite 对象中第一个元素的 value 特性，或者设置所有元素的 value 特性 |

注意： 当不带参数的调用 text 方法时，返回的是 jqLite 对象代表的所有元素的文本内容拼接而成的字符串，而不是第一个元素的文本内容

特性与属性的对比 可以看到 attr 和 removeAttr 方法是对特性进行处理的，而 prop 方法是对属性进行操作的 —— 这一区别总是不被人们所了解。区别在于 prop 方法处理的是被 DOM API HTMLElement 对象所定义的属性，而不是被标记语言中的 HTML 元素所定义的特性。通常特性和属性是一样的，但是并非总是如此。一个简单的例子是 class 特性，它在 HTMLElement 对象中是用 className 属性表示的 一般来说，prop 方法是你应该使用的选择，因为它返回的对象与特性值相比更容易使用

创建和移除元素 jqLite 提供用于创建和移除元素的方法

用于创建和移除元素的 jqLite 方法

| 名称                  | 描述                                                         |
| :-------------------- | :----------------------------------------------------------- |
| angular.element(html) | 创建一个 jqLite 对象，该对象表示 HTML 字符串指定的元素       |
| after(elements)       | 在调用方法的元素后面插入特定的内容                           |
| append(elements)      | 在调用方法的 jqLite 对象的每一个子元素上，将特定元素作为最后一个子元素插入 |
| clone()               | 从调用方法的对象复制元素并作为一个新的 jqLite 对象返回       |
| prepend(elements)     | 将指定的元素作为每个元素的第一个子元素插入到调用该方法的 jqLite 对象中 |
| remove()              | 从 DOM 中删除 jqLite 对象的元素                              |
| replaceWith(elements) | 使用指定元素替换调用方法的 jqLite 对象的元素                 |
| wrap(elements)        | 使用特定元素包装 jqLite 对象中的每一个元素                   |

接收元素作为参数的那些方法能够处理 jqLite 对象或者 HTML 片段，这使得动态创建新内容变得简单。Angular.element 方法弥合了两者之间的鸿沟，能够从 DOM 中拿到一个 HTML 片段或者一个 HTMLElement 对象，并将其包装为一个 jqLite 对象 这里需要当心的主要问题就是 jQuery fluent API，这意味着许多这类方法返回的 jqLite 对象中包含了原来在调用方法的 jqLite 对象中就存在的元素，而不是那些参数中的元素。这里演示一个为粗心人而准备的陷阱

```html
<html ng-app="exampleApp">

<head>
    <title>Directives</title>
    <script src="angular.js"></script>
    <script>
        angular.module("exampleApp", [])
            .directive("demoDirective", function () {
                return function (scope, element, attrs) {
                    var listElem = element.append("<ol>");
                    for (var i = 0; i < scope.names.length; i++) {
                        listElem.append("<li>").append("<span>").text(scope.names[i]);
                    }
                }
            })
            .controller("defaultCtrl", function ($scope) {
                $scope.names = ["Apples", "Bananas", "Oranges"];
            })
    </script>
</head>

<body ng-controller="defaultCtrl">
    <h3>Fruit</h3>
    <div demo-directive></div>
</body>

</html>
```

这里将指令应用到的元素改为一个 div 元素上，更新了控制器以便在作用域中定义一个数组，并且修改了指令的链接函数以便让其创建一个包含有一组 li 的 ol 元素，而每一个元素又包含一个 span 元素，span 元素依次含有数组中的一个值，我想生成的这组元素看起来应该类似这样

```html
...
<div demo-directive="">Oranges</div>
    <ol>
        <li>
            <span>Apples</span>
        </li>
        <li>
            <span>Bananas</span>
        </li>
        <li>
            <span>Oranges</span>
        </li>
    </ol>
</div>
...
```

而实际生成的 HTML 看起来却类似这样

```html
...
<div demo-directive="">Oranges</div>
...
```

哪里出错了？答案是从一开始在 DOM 里就操作了错误的元素。这个例子中的第一个 jqLite 操作如下

```javascript
...
var listElem = element.append("<ol>");
...
```

将一个 ol 元素作为传给连接函数的 element 参数的子元素添加进去。接收 append 操作结果的变量使用的名字暗示了问题所在：listElem。实际上 append 方法 (就像那些带有 element 参数的方法那样) 返回的是一个表示操作被执行的元素的 jqLite 对象，在本例中就是 div 元素而不是 ol 对象。这意味着本例中的另一个 jqLite 语句会多大意外的结果

```javascript
...
listElem.append("<li>").append("<span>").text(scope.names[i]);
...
```

这条语句中有三个操作 —— 两个对 append 方法的调用和一个对 text 方法的调用 —— 而且所有的操作都应用在了 div 元素上。首先，添加了一个 li 元素作为 div 元素的一个子元素，然后添加了一个 span 元素。最后，调用了 text 方法，结果是将所有添加到 div 的子元素的文本使用一个字符串替换掉，而且由于是在一个 for 循环里执行这些操作，对数组里的每一个元素都重复了这些操作。这就是为什么 div 元素里最后包含了 Oranges，因为，这是数组中的最后一个值 这是一个难以置信的常见错误，甚至对富有 jQuery 开发经验的人也是。我一直犯这个错，你必须密切注意你所执行的操作是在哪一组元素上 —— 对 jqLite 来说这比 jQuery 更难一些，因为 jqLite 省略掉了一些有助于跟踪正在发生的情况的方法 我发现避免这个问题的最可靠方法之一是使用 angular.element 方法来创建 jqLite 对象并在单独的语句中对它们执行各种操作

```javascript
...
angular.module("exampleApp", [])
    .directive("demoDirective", function () {
        return function (scope, element, attrs) {
            var listElem = angular.element("<ol>");
            element.append(listElem);
            for (var i = 0; i < scope.names.length; i++) {
                listElem.append(angular.element("<li>")
                    .append(angular.element("<span>").text(scope.names[i])));
            }
        }
    })
...
```

结果是本节开始描述的关于 ol、li 和 sapn 元素的结构能够正确显示

处理事件 jqLite 支持处理元素所发生的事件。这些方法与 AngularJS 的内置事件指令用来接收和处理事件的方法是同样的方法

用于处理事件的 jqLite 方法

| 名称                  | 描述                                                         |
| :-------------------- | :----------------------------------------------------------- |
| on(events, handler)   | 为 jqLite 对象所代表的元素发生的事件注册一个处理器。本方法的 jqLite 实现不支持 jQuery 所提供的选择器或事件数据特性 |
| off(events, handler)  | 为 jqLite 对象所代表的元素发生的事件移除一个之前已经注册的处理器。本方法的 jqLite 实现不支持 jQuery 提供的选择器特性 |
| triggerHandler(event) | 触发 jqLite 对象所代表的所有元素上的指定事件                 |

其他 jqLite 方法 jqLite 还提供了一些其他 jQuery 方法，不便于归类到其他种类中，于是在这里统一描述。为保持完整性，这里列出了这些方法

其他 jqLite 方法

| 名称                       | 描述                                                         |
| :------------------------- | :----------------------------------------------------------- |
| data(key, value) data(key) | 将任意数据与 jqLite 代表的所有元素关联起来，或者从 jqLite 对象代表的第一个元素中获取指定 key 的值 |
| removeData(key)            | 从 jqLite 对象代表的元素中移除与指定 key 相关联的数据        |
| html()                     | 返回 jqLite 对象所代表的第一个元素的 HTML                    |
| ready(handler)             | 注册一个监听器函数，该函数将在 DOM 的内容完全被加载时调用一次 |

从 jqLite 访问 AngularJS 特性 jqLite 还提供了一些附加方法，可以提供对 AngularJS 专属的特性的访问

可以访问 AngularJS 特性的其他 jqLite 方法

| 名称                          | 描述                                                         |
| :---------------------------- | :----------------------------------------------------------- |
| controller() controller(name) | 返回与当前元素或其父元素相关联的控制器                       |
| injector()                    | 返回与当前元素或其父元素相关联的注入器                       |
| isolatedScope()               | 如果当前元素有相关联的独立的作用域，则返回该作用域           |
| scope()                       | 返回与当前元素或其父元素相关联的作用域                       |
| inheritedData(key)            | 这个方法与 jQuery 的 data 方法执行同样的功能，但是会沿着元素层次结构向上查找与指定 key 相匹配的值 |

## 使用 jQuery 替换 jqLite

jqLite 只实现了完整 jQuery 可提供的方法中的一部分，而且有些方法并未提供 jquery 程序员习惯的所有选项 jqLite 所强调的是速度、简单和大小，而且一旦你习惯了使用这个可用的有限方法集，你会发现能够做到在指令中需要做的一切事情，即使结果不如使用 jQuery 完整的方法和特性所得到的那么优雅。考虑到所有 AngularJS 内置指令都是通过 jqLite 打造的，你就会明白所有这些基本特性都是可用的 尽管如此，如果确实无法坚持使用 jqLite，你还可以使用完整的 jQuery 库来替换它

提示： 如果使用完整 jquery 库，需要让浏览器下载和处理另一个 JavaScript 文件，并且任何复用你的指令的应用程序也将依赖于 jQuery。我的建议是花点时间熟悉 jqLite，看看是否真的需要切换到 jQuery

```html
<html ng-app="exampleApp">

<head>
    <title>Directives</title>
    <script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .directive("unorderedList", function () {
                return function (scope, element, attrs) {
                    var data = scope[attrs["unorderedList"]];
                    var propertyExpression = attrs["listProperty"];
                    if (angular.isArray(data)) {
                        var listElem = angular.element("<ul>").appendTo(element);
                        for (var i = 0; i < data.length; i++) {
                            (function () {
                                var itemElement =
                                    angular.element("<li>").appendTo(listElem);
                                var index = i;
                                var watcherFn = function (watchScope) {
                                    return watchScope.$eval(propertyExpression,
                                        data[index]);
                                }
                                scope.$watch(watcherFn, function (newValue, oldValue) {
                                    itemElement.text(newValue);
                                });
                            }());
                        }
                    }
                }
            }).controller("defaultCtrl", function ($scope) {
                $scope.products = [
                    { name: "Apples", category: "Fruit", price: 1.20, expiry: 10 },
                    { name: "Bananas", category: "Fruit", price: 2.42, expiry: 7 },
                    { name: "Pears", category: "Fruit", price: 2.02, expiry: 6 }
                ];
                $scope.incrementPrices = function () {
                    for (var i = 0; i < $scope.products.length; i++) {
                        $scope.products[i].price++;
                    }
                }
            })
    </script>
</head>

<body ng-controller="defaultCtrl">
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3>Products</h3>
        </div>
        <div class="panel-body">
            <button class="btn btn-primary" ng-click="incrementPrices()">
                Change Prices
            </button>
        </div>
        <div class="panel-body">
            <div unordered-list="products" list-property="price | currency"></div>
        </div>
    </div>
</body>

</html>
```

这里增加了一个 script 元素，从内容分发网络上加载了 jQuery 库文件，也就是说不用向 angularjs 文件夹下添加任何文件就可以演示程序效果。首先，注意 jQuery 脚本元素出现在加载 AngularJS 的脚本元素之前。AngularJS 在安装 jqLite 之前会检查 jQuery 是否已经被加载了，所以脚本元素必须按照这样的顺序出现。如果在 AngularJS 的后面加载 jQuery，那么 AngularJS 就会使用 jqLite 在使用 jqLite 工作时最容易忽略的方法就是 appendTo，这个方法也是解决之前演示的陷阱的方法之一。这个方法能够创建一些新的元素，将他们添加到文档中，并调用其他 jQuery 方法来修改这些新元素。结果是有效的，能够让我将类似这样的多行 jqLite 语句

```javascript
...
var itemElement = angular.element('<li>');
listElem.append(itemElement);
...
```

替换为类似这样的一条 jQuery 语句

```javascript
...
var listElem = angular.element("<ul>").appendTo(element);
...
```

提示： 虽然我使用 jQuery 工作时依靠这个方法很多，但是我很少在在自己的 AngularJS 项目中用 jQuery 替换 jqLite。我已经学会了适应 jqLite 的局限性，我也推荐你尝试这么做

# 第 16 章 创建复杂指令

## 准备示例项目

从 directives.html 文件中移除对完整 jQuery 库的依赖

```html
<html ng-app="exampleApp">

<head>
    <title>Directives</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .directive("unorderedList", function () {
                return function (scope, element, attrs) {
                    var data = scope[attrs["unorderedList"]];
                    var propertyExpression = attrs["listProperty"];
                    if (angular.isArray(data)) {
                        var listElem = angular.element("<ul>");
                        element.append(listElem);
                        for (var i = 0; i < data.length; i++) {
                            var itemElement = angular.element("<li>")
                                .text(scope.$eval(propertyExpression, data[i]));
                            listElem.append(itemElement);
                        }
                    }
                }
            }).controller("defaultCtrl", function ($scope) {
                $scope.products = [
                    { name: "Apples", category: "Fruit", price: 1.20, expiry: 10 },
                    { name: "Bananas", category: "Fruit", price: 2.42, expiry: 7 },
                    { name: "Pears", category: "Fruit", price: 2.02, expiry: 6 }
                ];
            })
    </script>
</head>

<body ng-controller="defaultCtrl">
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3>Products</h3>
        </div>
        <div class="panel-body">
            <div unordered-list="products" list-property="price | currency"></div>
        </div>
    </div>
</body>

</html>
```

## 定义复杂指令

在前一章中演示了如何使用返回链接函数的工厂函数来创建自定义指令。这是最简单的一种办法，但是这也意味着许多可由指令自定义的选项使用的是默认值。要自定义这些选项工厂函数必须返回一个对象，这是一个 JavaScript 对象，可用于定义指令的部分或全部属性

由指令定义对象所定义的属性

| 名称        | 描述                                   |
| :---------- | :------------------------------------- |
| compile     | 指定一个编译函数                       |
| controller  | 为指令创建一个控制器函数               |
| link        | 为指令指定链接函数                     |
| replace     | 指定模板内容是否替换指令所应用到的元素 |
| require     | 声明对某个控制器的依赖                 |
| restrict    | 指定指令如何被使用                     |
| scope       | 为指令创建一个新的作用域或隔离作用域   |
| template    | 指定一个将被插入到 HTML 文档的外部模板 |
| templateUrl | 指定一个将被插入到 HTML 文档的外部模板 |
| transclude  | 指定指令是否被用于包含任意内容         |

定义指令被如何使用 当只返回一个链接函数时，所创建的指令只能被当作一个属性来使用。这是大多数 AngularJS 指令的使用方式，但是也可以使用 restrict 属性来修改默认配置，并创建可以以其它方式使用的指令

```html
...
<script>
    angular.module("exampleApp", [])
        .directive("unorderedList", function () {
            return {
                link: function (scope, element, attrs) {
                    var data = scope[attrs["unorderedList"] || attrs["listSource"]];
                    var propertyExpression = attrs["listProperty"] || "price | currency";
                    if (angular.isArray(data)) {
                        var listElem = angular.element("<ul>");
                        if (element[0].nodeName == "#comment") {
                            element.parent().append(listElem);
                        } else {
                            element.append(listElem);
                        }
                        for (var i = 0; i < data.length; i++) {
                            var itemElement = angular.element("<li>")
                                .text(scope.$eval(propertyExpression, data[i]));
                            listElem.append(itemElement);
                        }
                    }
                },
                restrict: "EACM"
            }
        })
        .controller("defaultCtrl", function ($scope) {
            $scope.products = [
                { name: "Apples", category: "Fruit", price: 1.20, expiry: 10 },
                { name: "Bananas", category: "Fruit", price: 2.42, expiry: 7 },
                { name: "Pears", category: "Fruit", price: 2.02, expiry: 6 }
            ];
        })
</script>
...
```

链接函数与编译函数的对比 严格地说，你应该使用由 compile 属性指定的编译函数来修改 DOM，使用由 link 属性指定的链接函数来执行非 DOM 操作，比如创建监听器和设置事件处理器等任务。编译 / 链接分离有助于改善特别复杂或者处理大量数据的指令的性能，但是我在自己的项目里试图将一切都放在链接函数里，编译函数只用来创建类似于 ng-repeat 指令这样的功能

这里修改了工厂函数以便让它返回一个对象，也就是指令定义对象，而不仅仅是链接函数。当然，对于指令来说仍然需要一个链接函数，所以我将链接函数赋给了定义对象的 link 属性。下一处修改是给定义对象增添了 restrict 属性。这告诉 AngularJS 我想允许用四种方式中的哪些来使用我的自定义指令，每一种类型都以一个字母代表

用于配置 restrict 定义选项的字母

| 字母 | 描述               |
| :--- | :----------------- |
| E    | 允许指令被用作元素 |
| A    | 允许指令被用作属性 |
| C    | 允许指令被用作类   |
| M    | 允许指令被用作注释 |

提示： 实际项目中很少有一个指令能够以四种方式全部适用，restrict 定义属性的最常见值是 A、E，或者 AE。C 和 M 选项鲜有用到

1. 将指令当作元素使用

   AngularJS 中的习惯是将那些通过定义属性 template 和 templateUrl 管理模板的指令当作元素来使用。这只是一种习惯，你可以将任何自定义指令当作一个元素来使用，只需在 restrict 定义属性的值中包含进字母 E 即可

```html
   ...
   <div class="panel-body">
       <unordered-list list-source="products" list-property="price | currency" />
   </div>
   ...
```

这里将指令当作 unordered-list 元素来使用，并在元素上使用属性对其进行配置。这需要我对指令的链接函数做些修改，因为已经使用新的属性定义了数据源。这里使用 list-source 作为新属性的名字，可以看到如果没有 unordered-list 属性时，示如何检查新属性的值的

```javascript
   ...
   var data = scope[attrs["unorderedList"] || attrs["listSource"]];
   ...
```

1. 将指令当作属性使用

   AngularJS 中的习惯是将大多数指令都当作属性使用

```html
   ...
   <div class="panel-body">
       <div unordered-list="products" list-property="price | currency"></div>
   </div>
   ...
```

1. 将指令当作类使用

   只要有可能，就应该将指令当作元素或属性来使用，这样更容易让人看懂指令应用到了何处。尽管如此，还是可以将指令当作 class 属性的值来使用，这在试图将 AngularJS 集成到一个不容易修改的程序所生成的 HTML 时尤为有用

```html
   ...
   <div class="panel-body">
       <div class="unordered-list: products" list-property="price | currency"></div>
   </div>
   ...
```

这里将 class 属性的值设置为指令名。我想为指令提供一个配置值，因此在指令名后跟随了一个冒号 (:) 字符及配置值 在本例中使用了一点小花招，在指令所应用的元素上定义了名为 list-property 的属性。当然，如果能够在实际项目中那么做的话，我就不需要通过 class 属性来使用指令了。而在实际项目中，可能不得不将该属性也放到 class 中

```html
   ...
   <div class="panel-body">
       <div class="unordered-list: products, price | currency"></div>
   </div>
   ...
```

这将导致 AngularJS 将 unorderedList 属性的值 "products, price | currency" 提供给链接函数，然后我就得负责在链接函数中解析这个值。这里略过这个步骤，因为我想将焦点放在 AngularJS 上，而不是 JavaScript 字符 串解析，这也是我建议你尽可能避免的

1. 将指令当作一个注释来使用

   只要有可能就应该尽可能使用其他选项。用注释使用指令使得其他开发者不易读懂 HTML，因为别人都不曾想到注释还能对应用程序功能起作用。这还可能在使用某些构建工具时发生问题，因为有些工具会为了发布时缩减体积而去除注释

```html
   ...
   <div class="panel-body">
       <!-- directive: unordered-list products -->
   </div>
   ...
```

这个注释必须以单词 directive 开始，跟随一个冒号 (:)、指令名以及可选的配置参数，我依然不想陷入字符串解析的泥沼，所以使用了可选参数来指定数据源并更新链接函数来设置属性表达式的默认值

```javascript
   ...
   var propertyExpression = attrs["listProperty"] || "price | currency";
   ...
```

我必须修改链接函数的操作方式以支持注释方式。对于其它方式，会向指令所应用的元素添加内容，但对注释并不起作用。作为代替，使用 jqLite 定位并操作注释元素的父元素

```javascript
   ...
   if (element[0].nodeName == "#comment") {
       element.parent().append(listElem);
   } else {
       element.append(listElem);
   }
   ...
```

这段代码有点不太正规，且依赖于 jQuery/jqLite 对象被标示为一个 HTMLElement 对象的数组，及浏览器的 HTML 元素的 DOM 表达形式。我通过使用数组索引 0 得到了 jqLite 对象中的第一个元素并调用了其 nodeName 属性，这告诉我指令应用到的元素是何种类型。如果这是一个注释元素，就会使用 jqLite 的 parent 方法获取包含这个元素的父元素，并向其添加我的 ul 元素。这是一种相当丑陋的方法，而且也是为什么要避免用注释来使用指令的另一个原因

## 使用指令模板

到目前为止我的指令都是通过 jqLite 或者 jQuery 来生成元素的。这可以工作，但实质上这是生成声明式的内容所必须的一种方式，对于复杂项目这种方式显然不再合适，因为 jqLite 语句所组成的复杂的代码块是难以阅读和维护的 一个可供替代的方法是，从一个 HTML 模板生成内容，用于替换掉指令所应用到的元素的内容。可以使用 template 定义属性来创建一个简单的模板

```html
<html ng-app="exampleApp">

<head>
    <title>Directives</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .directive("unorderedList", function () {
                return {
                    link: function (scope, element, attrs) {
                        scope.data = scope[attrs["unorderedList"]];
                    },
                    restrict: "A",
                    template: "<ul><li ng-repeat='item in data'>"
                        + "{{item.price | currency}}</li></ul>"
                }
            }).controller("defaultCtrl", function ($scope) {
                $scope.products = [
                    { name: "Apples", category: "Fruit", price: 1.20, expiry: 10 },
                    { name: "Bananas", category: "Fruit", price: 2.42, expiry: 7 },
                    { name: "Pears", category: "Fruit", price: 2.02, expiry: 6 }
                ];
            })
    </script>
</head>

<body ng-controller="defaultCtrl">
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3>Products</h3>
        </div>
        <div class="panel-body">
            <div unordered-list="products">
                This is where the list will go
            </div>
        </div>
    </div>
</body>

</html>
```

结果得到的是一个更简单的指令。在任何语言中使用代码来生成 HTML 都会是繁琐的，即使是使用想 jqLite/jQuery 这样的简洁库时。在这个例子中有两处修改。第一处修改是创建了名为 data 的作用域属性并使用它设置数据来源，而该属性是从指令属性中获取到的。 这是在链接函数中所需做的全部，链接函数不再负责生成向用户展示的 HTML 元素。作为代替使用了 template 定义属性来指定一段 HTML 片段，被用作指令所应用到的元素的内容

```javascript
...
template: "<ul><li ng-repeat='item in data'>{{item.price | currency}}</li></ul>"
...
```

在本示例中我用一个字符串生成模板。我的 HTML 代码片段由一个 ul 元素和一个 li 元素组成，在 li 元素上使用了 ng-repeat 指令以及一个内置的绑定表达式 当 AngularJS 应用自定义表达式时，将把 div 元素的内容替换成 template 定义属性所使用的值，并且查找其他 AngularJS 指令和表达式来计算出新的内容

使用函数作为模板 前面一个例子中是使用字符串来表示模板内容的，但是 template 书信也可以指定一个函数来生成模板化的内容，该函数被传入两个参数 (指令所应用到的元素以及属性集合) 并返回将被插入到文档中的 HTML 代码片段

警告： 不要看使用模板函数生成需要以编程方式生成的内容

这个特性对于将模板内容从指令的其余部分分离出来是十分有用的

```html
...
<head>
    <title>Directives</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script type="text/template" id="listTemplate">
        <ul>
            <li ng-repeat="item in data">{{item.price | currency}}</li>
        </ul>
    </script>
    <script>
        angular.module("exampleApp", [])
            .directive("unorderedList", function () {
                return {
                    link: function (scope, element, attrs) {
                        scope.data = scope[attrs["unorderedList"]];
                    },
                    restrict: "A",
                    template: function () {
                        return angular.element(document.querySelector("#listTemplate")).html();
                    }
                }
            }).controller("defaultCtrl", function ($scope) {
                $scope.products = [
                    { name: "Apples", category: "Fruit", price: 1.20, expiry: 10 },
                    { name: "Bananas", category: "Fruit", price: 2.42, expiry: 7 },
                    { name: "Pears", category: "Fruit", price: 2.02, expiry: 6 }
                ];
            })
    </script>
</head>
...
```

我添加了一个包含了要使用的模板内容的脚本元素，并设置了 template 定义对象函数。jqLite 不支持通过 id 属性选择元素，我也不想为了这么简单的一个指令就使用完整的 jQuery 库，所以我使用了 DOM API 定位脚本元素并将其包装在一个 jqLite 对象中

```html
...
return angular.element(document.querySelector("#listTemplate")).html();
...
```

我使用了 jqLite 的 html 方法获得模板元素的 HTML 内容，并作为模板函数的结果返回

提示： 你也可以只使用 DOM 来获得元素内容

使用外部模板 使用脚本元素是一种有用的分离模板内容的方法，但是元素中仍然存在部分 HTML 文档，在复杂项目中，当你想在程序各个部分之间或者甚至程序之间自由地共享模板时，这将变得难以管理。一个可供替代的方法是在一个单独的文件中定义模板内容，并使用 templateUrl 定义对象属性来指定文件名。在 angularjs 文件夹下新增 itemTemplate.html 文件

```html
<p>This is the list from the template file</p>
<ul>
    <li ng-repeat="item in data">{{item.price | currency}}</li>
</ul>
```

通过 templateUrl 定义属性使用外部模板

```html
...
<script>
    angular.module("exampleApp", [])
        .directive("unorderedList", function () {
            return {
                link: function (scope, element, attrs) {
                    scope.data = scope[attrs["unorderedList"]];
                },
                restrict: "A",
                templateUrl: "itemTemplate.html"
            }
        }).controller("defaultCtrl", function ($scope) {
            $scope.products = [
                { name: "Apples", category: "Fruit", price: 1.20, expiry: 10 },
                { name: "Bananas", category: "Fruit", price: 2.42, expiry: 7 },
                { name: "Pears", category: "Fruit", price: 2.02, expiry: 6 }
            ];
        })
</script>
...
```

通过函数选择一个外部模板 templateUrl 属性可以设置为一个函数，用于指定指令所使用的 URL，从而提供基于指令所应用的元素来动态第选择模板的方式。为了演示这是如何工作的，在 angularjs 文件夹下增添了一个名为 tableTemplate.html 的新 HTML 文件

```html
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Price</th>
        </tr>
    </thead>
    <tbody>
        <tr ng-repeat="item in data">
            <td>{{item.name}}</td>
            <td>{{item.price | currency}}</td>
        </tr>
    </tbody>
</table>
```

通过为 templateUrl 属性使用一个函数来选择模板

```html
<html ng-app="exampleApp">

<head>
    <title>Directives</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .directive("unorderedList", function () {
                return {
                    link: function (scope, element, attrs) {
                        scope.data = scope[attrs["unorderedList"]];
                    },
                    restrict: "A",
                    templateUrl: function (elem, attrs) {
                        return attrs["template"] == "table" ? "tableTemplate.html" : "itemTemplate.html";
                    }
                }
            }).controller("defaultCtrl", function ($scope) {
                $scope.products = [
                    { name: "Apples", category: "Fruit", price: 1.20, expiry: 10 },
                    { name: "Bananas", category: "Fruit", price: 2.42, expiry: 7 },
                    { name: "Pears", category: "Fruit", price: 2.02, expiry: 6 }
                ];
            })
    </script>
</head>

<body ng-controller="defaultCtrl">
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3>Products</h3>
        </div>
        <div class="panel-body">
            <div unordered-list="products">
                This is where the list will go
            </div>
        </div>
        <div class="panel-body">
            <div unordered-list="products" template="table">
                This is where the list will go
            </div>
        </div>
    </div>
</body>

</html>
```

赋给 templateUrl 属性的函数被传入一个 jqLite 对象，该对象代表指令所应用到的元素以及该元素上定义的属性集。检查 template 属性，如果该属性存在且等于 table，则返回 tableTemplate.html 文件的 URL。否则返回 itemTemplate.html 文件的 URL

替换元素 默认情况下，模板的内容是被插入到指令所应用到的元素里的。replace 定义属性能够用于修改这个行为，使得模板可以替换元素。在演示 replace 属性的效果，之前先修改 directives.html 文件对指令做些简化

```html
<html ng-app="exampleApp">

<head>
    <title>Directives</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .directive("unorderedList", function () {
                return {
                    link: function (scope, element, attrs) {
                        scope.data = scope[attrs["unorderedList"]];
                    },
                    restrict: "A",
                    templateUrl: "tableTemplate.html"
                }
            }).controller("defaultCtrl", function ($scope) {
                $scope.products = [
                    { name: "Apples", category: "Fruit", price: 1.20, expiry: 10 },
                    { name: "Bananas", category: "Fruit", price: 2.42, expiry: 7 },
                    { name: "Pears", category: "Fruit", price: 2.02, expiry: 6 }
                ];
            })
    </script>
</head>

<body ng-controller="defaultCtrl">
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3>Products</h3>
        </div>
        <div class="panel-body">
            <div unordered-list="products" class="table table-striped">
                This is where the list will go
            </div>
        </div>
    </div>
</body>

</html>
```

接下来使用 replace 属性

```javascript
...
.directive("unorderedList", function () {
    return {
        link: function (scope, element, attrs) {
            scope.data = scope[attrs["unorderedList"]];
        },
        restrict: "A",
        templateUrl: "tableTemplate.html",
        replace: true
    }
...
```

设置 replace 属性为 true 后的效果是模板内容将替换掉指令所应用到的 div 元素

```html
...
<div class="panel-body">
    <table unordered-list="products" class="table table-striped">
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
...
```

replace 属性不仅仅是用模板替换了元素，还将元素中的属性也转移给了模板内容 这是一种有用的技术，允许指令生成的内容可以被指令所应用到的上下文所配置。例如，我可以将我的自定义指令应用到程序的不同部分，并对每个表格应用不同的样式 你还可以使用这个特性来将其他 AngularJS 指令转移到指令的模板内容中

```html
...
<div class="panel-body">
    <div unordered-list="products" class="table table-striped" ng-repeat="count in [1, 2, 3]">
        This is where the list will go
    </div>
</div>
...
```

这和在模板文件中将 ng-repeat 指令应用到表格元素具有相同的效果，而不需要再复制所包含的 div 元素了

## 管理指令的作用域

指令及其作用域之间的关系意味着，如果你想创建一个可被整个程序所复用的指令时需要小心些。默认情况下链接函数被传入了控制器的作用域，而该控制器管理着包含了指令所应用到的元素的视图。向 angularjs 文件夹中增添 directiveScopes.html 文件

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Directive Scopes</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script type="text/javascript">
        angular.module("exampleApp", [])
            .directive("scopeDemo", function () {
                return {
                    template:
                        "<div class='panel-body'>Name: <input ng-model=name /></div>",
                }
            })
            .controller("scopeCtrl", function ($scope) {
                // do nothing - no behaviours required
            });
    </script>
</head>

<body>
    <div ng-controller="scopeCtrl" class="panel panel-default">
        <div class="panel-body" scope-demo></div>
        <div class="panel-body" scope-demo></div>
    </div>
</body>

</html>
```

这是一个简单的指令，我甚至都不需要定义链接函数 —— 只需要一个 template，ng-model 指令对名为 name 的作用域属性创建了双向绑定 尽管这里有该指令的两个实例，但它们都在 scopeCtrl 控制器上更新同一个 name 属性 指令是有用的，而且很好地演示了作用域是如何保持元数之间的协作的，以及如何捕获或显示同一数据。但是你通常会想要用一个指令来捕获或显示不同的数据，这正是作用域管理所起作用的地方 输入框元素被编辑前和编辑后的效果

![在控制器作用域上运行的指令的多个实例][]

这个例子中，当程序初次开始运行时，还没有作用域数据，但是在指令模板里的 ng-model 指令能够让 AngularJS 在任一输入框元素被修改时动态地创建一个 name 属性。因为本例中只有一个作用域 (根作用域)，两个指令都绑定到同一个属性，这就是为什么它们会被同步

创建多个控制器 最简单但最不优雅的方式是重用指令来为指令的每个实例创建单独的控制器，这样每个实例就有自己的作用域了。这虽是一种不太优雅的技术，但是当你无法控制所使用的指令的源代码，因此也无法更改指令的工作方式时是挺有用的

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Directive Scopes</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script type="text/javascript">
        angular.module("exampleApp", [])
            .directive("scopeDemo", function () {
                return {
                    template:
                        "<div class='panel-body'>Name: <input ng-model=name /></div>",
                }
            })
            .controller("scopeCtrl", function ($scope) {
                // do nothing - no behaviours required
            })
            .controller("secondCtrl", function ($scope) {
                // do nothing - no behaviours required
            });
    </script>
</head>

<body>
    <div class="panel panel-default">
        <div ng-controller="scopeCtrl" class="panel-body" scope-demo></div>
        <div ng-controller="secondCtrl" class="panel-body" scope-demo></div>
    </div>
</body>

</html>
```

使用两个控制器的结果是有了两个作用域，每个作用域都有一个自己的 name 属性，这允许输入框元素可以各自独立地运作

![为指令的每个实例创建控制器的效果][]

给每个实例创建自己的作用域 通过创建控制器来给予指令自己的作用域并不是必需的。另一种更优雅的方式是通过设置 scope 定义对象属性为 true 来请求 AngularJS 为每个指令实例创建一个作用域

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Directive Scopes</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script type="text/javascript">
        angular.module("exampleApp", [])
            .directive("scopeDemo", function () {
                return {
                    template:
                        "<div class='panel-body'>Name: <input ng-model=name /></div>",
                    scope: true
                }
            })
            .controller("scopeCtrl", function ($scope) {
                // do nothing - no behaviours required
            });
    </script>
    </script>
</head>

<body ng-controller="scopeCtrl">
    <div class="panel panel-default">
        <div class="panel-body" scope-demo></div>
        <div class="panel-body" scope-demo></div>
    </div>
</body>

</html>
```

设置 scope 属性为 true 将允许我在同一个控制器里重复使用这个指令，也就是说我可以移除第二个控制器并简化程序 scope 属性被设置为 true 时所创建的作用域也是普通作用域层次结构中的一部分。之前所描述的那些关于对象和属性的继承关系的规则仍然奏效

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Directive Scopes</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script type="text/ng-template" id="scopeTemplate">
        <div class="panel-body">
            <p>Name: <input ng-model="data.name" /></p>
            <p>City: <input ng-model="city" /></p>
            <p>Country: <input ng-model="country" /></p>
        </div>
    </script>
    <script type="text/javascript">
        angular.module("exampleApp", [])
            .directive("scopeDemo", function () {
                return {
                    template: function () {
                        return angular.element(
                            document.querySelector("#scopeTemplate")).html();
                    },
                    scope: true
                }
            })
            .controller("scopeCtrl", function ($scope) {
                $scope.data = { name: "Adam" };
                $scope.city = "London";
            });
    </script>
</head>

<body ng-controller="scopeCtrl">
    <div class="panel panel-default">
        <div class="panel-body" scope-demo></div>
        <div class="panel-body" scope-demo></div>
    </div>
</body>

</html>
```

我们已经见识了使用字符串作为模板的局限性，因此这里使用脚本元素来定义所需的模板并通过 template 函数来选中其内容，模板包括三个输入元素，每个都被 ng-model 指令绑定到作用域中的一个数据值

![在单个控制器中为指令的每个实例赋予其自己的作用域][]

这个例子中的数据排列更复杂了一些，接下来对这些数据进行解释说明：

* data.name 这个属性是在一个对象上定义的，意味着这个值将会在指令的各个实例之间共享，而且所有绑定到该属性的输入框元素将会保持同步
* city 这个属性是在控制器的作用域上被赋值的，意味着指令所用的作用域将会从同一个初始值开始，但是在输入框元素被修改时会在自己的作用域上创建和修改自己的版本
* country 这个属性没有被赋值。当对应的输入框元素被修改时，指令的每个实例将会创建出独立的 country 属性

创建隔离的作用域 在前面的例子中，你看到了如何为指令的每个实例创建独立的作用域，这使得我能够删去多余的控制器，并可以将对象和属性在作用域层次关系上的各种不同继承方式混合使用 这种方法的优点是简单而且与 AngularJS 其他部分相一致，但缺点是你的指令的行为要受所使用到的控制器的支配，因为对于作用域继承的默认规则总是奏效的 这个问题的解决方案是创建一个隔离的作用域，就是 AngularJS 为指令的每个实例创建一个独立的作用域，但是这个作用域并不继承控制器的作用域。在创建一个打算在许多各种不同情况下重用的指令时，以及不想要任何由控制器或作用域层次上的其他地方定义的对象和属性导致的继承时，这是很有用的。当 scope 定义属性被设置为一个对象时，可以创建一个隔离的作用域。隔离的作用域的最基本类型是用一个没有属性的对象表示

```html
...
<script type="text/javascript">
    angular.module("exampleApp", [])
        .directive("scopeDemo", function () {
            return {
                template: function () {
                    return angular.element(
                        document.querySelector("#scopeTemplate")).html();
                },
                scope: {}
            }
        })
        .controller("scopeCtrl", function ($scope) {
            $scope.data = { name: "Adam" };
            $scope.city = "London";
        });
</script>
...
```

如果把 directiveScopes.html 文件加载到浏览器就可以看到隔离的作用域的效果 —— 输入框都是空的。这正是隔离作用域的结果，因为这里没有来自控制器作用域的继承，ng-model 指令所指定的任何属性都没有定义值。如果编辑输入框元素，AngularJS 就会动态地创建这些属性，但是这些属性只是被修改的输入框相关联的指令的隔离作用域的一部分 指令的每个实例都有自己的作用域，但是并未从控制器作用域中继承任何数据值。因为没有继承关系，对通过对象定义的属性做修改就不会传播到控制器作用域上。简而言之，隔离的作用域是从作用域层次结构上被隔绝出来的

![隔离的作用域的效果][]

1. 通过属性值进行绑定

   当创建打算在不同情况下复用的指令时，隔离作用域是一种重要的构件，因为它防止了在控制器作用域这指令之间出现意料外的交互。但是完全隔绝一个指令会使得难以输入和输出数据，所以 AngularJS 提供了一种机制，通过这种机制可以突破隔离从而在控制器作用域和指令间创建所期望的交互 隔绝的作用域允许你使用应用了指令的元素上的属性将数据值绑定到控制器作用域上，这是单向的

```html
   <!DOCTYPE html>
   <html ng-app="exampleApp">

   <head>
       <title>Directive Scopes</title>
       <script src="angular.js"></script>
       <link href="bootstrap.css" rel="stylesheet" />
       <link href="bootstrap-theme.css" rel="stylesheet" />
       <script type="text/ng-template" id="scopeTemplate">
           <div class="panel-body">
               <p>Data Value: {{local}}</p>
           </div>
       </script>
       <script type="text/javascript">
           angular.module("exampleApp", [])
               .directive("scopeDemo", function () {
                   return {
                       template: function () {
                           return angular.element(
                               document.querySelector("#scopeTemplate")).html();
                       },
                       scope: {
                           local: "@nameprop"
                       }
                   }
               })
               .controller("scopeCtrl", function ($scope) {
                   $scope.data = { name: "Adam" };
               });
       </script>
   </head>

   <body ng-controller="scopeCtrl">
       <div class="panel panel-default">
           <div class="panel-body">
               Direct Binding: <input ng-model="data.name" />
           </div>
           <div class="panel-body" scope-demo nameprop="{{data.name}}"></div>
       </div>
   </body>

   </html>
```

在本例中有三处修改，它们一起创建了控制器与指令作用域之间的绑定。第一处修改是在 scope 定义对象中，设置了在指令作用域内一个特性和一个属性之间的单向映射

```javascript
   ...
   scope: {
       local: "@nameprop"
   }
   ...
```

再给 scope 定义对象赋值时，在该对象上定义了一个名为 local 的属性，这告诉 AngularJS 我要在指令作用域上根据那个名称定义一个新的属性。local 属性的值以一个 @字符作为前缀，指定属性 local 的值应该来自一个名为 nameprop 的特性的单向绑定获得 第二处修改是在元素上定义了 nameprop 特性，并应用了我的自定义指令

```html
   ...
   <div class="panel-body" scope-demo nameprop="{{data.name}}"></div>
   ...
```

我通过在 nameprop 特性中提供一个 AngularJS 表达式指定了指令指令作用域中属性 local 的值。在这里选择的是 data.name 属性，但是任何表达式都可以使用 最后一处修改是更新了模板以便能够显示出属性 local 的值

```html
   ...
   <script type="text/ng-template" id="scopeTemplate">
       <div class="panel-body">
           <p>Data Value: {{local}}</p>
       </div>
   </script>
   ...
```

在本例中发生的事情值得重申一次，因为在高级指令开发中这是一个重要的概念，也容易引起许多混淆。我使用了一个隔离的作用域以便我的指令不会继承控制器作用域中的数据，但结果又在使用本来并未期望的数据工作 —— 这是有可能发生的，因为没有办法有选择性地控制一个普通的非隔离的作用域是如何从其父作用域继承数据值的 但是我的指令确实需要访问控制器作用域中的数据值，所以我告诉 AngularJS 在一个特性值所指定的表达式和本地作用域上的一个属性之间创建一个单向绑定

警告： 在隔离作用域上的单向绑定总是被当作字符串计算。如果你想访问一个数组，就必须使用双向绑定

![在隔离作用域上的单项数据绑定][]

如张图所显示的，存在两个数据绑定。第一个将控制器作用域中的 data.name 属性绑定至隔离作用域中的 local 属性，这个绑定是由那个特性值所指定的。第二个是将隔离作用域中的 local 属性绑定至指令模板中的内联表达式

警告: 你会注意到对于本例我从模板中删除了带有 ng-model 指令的输入框元素。这么做是因为我创建了一个单项数据绑定，这意味着在控制器作用域中对 data.name 属性的更新将会更新指令作用域中的 local 属性 —— 而不是反过来。如果需要指令能够修改控制器作用域中的数据，那么你需要一个双向数据绑定

这给予我对所需的作用域继承关系的有选择的控制权，而且，作为附加，在指令被使用时选择范围是可配置的，这是在不需要修改任何代码或 html 标记的情况下允许指令以多种不同方式重用的关键所在

```html
   <!DOCTYPE html>
   <html ng-app="exampleApp">

   <head>
       <title>Directive Scopes</title>
       <script src="angular.js"></script>
       <link href="bootstrap.css" rel="stylesheet" />
       <link href="bootstrap-theme.css" rel="stylesheet" />
       <script type="text/ng-template" id="scopeTemplate">
           <div class="panel-body">
               <p>Data Value: {{local}}</p>
           </div>
       </script>
       <script type="text/javascript">
           angular.module("exampleApp", [])
               .directive("scopeDemo", function () {
                   return {
                       template: function () {
                           return angular.element(
                               document.querySelector("#scopeTemplate")).html();
                       },
                       scope: {
                           local: "@nameprop"
                       }
                   }
               })
               .controller("scopeCtrl", function ($scope) {
                   $scope.data = { name: "Adam" };
               });
       </script>
   </head>

   <body ng-controller="scopeCtrl">
       <div class="panel panel-default">
           <div class="panel-body">
               Direct Binding: <input ng-model="data.name" />
           </div>
           <div class="panel-body" scope-demo nameprop="{{data.name}}"></div>
           <div class="panel-body" scope-demo nameprop="{{data.name + 'Freeman'}}"></div>
       </div>
   </body>

   </html>
```

我创建了自定义指令的第二个实例，并设置 nameprop 特性来绑定到一个基于 data.name 属性的表达式。在本例中我并未对指令做任何修改。我使用同一个功能来显示两个不同的数据值，仅仅通过修改指令所应用到的元素的特性中所指定的表达式即可做到。这是一种强大的技术而且对于创建复杂指令是非常有价值的

1. 创建双向数据绑定

   在隔离作用域中创建双向绑定的过程与创建单项绑定是类似的

```html
   <!DOCTYPE html>
   <html ng-app="exampleApp">

   <head>
       <title>Directive Scopes</title>
       <script src="angular.js"></script>
       <link href="bootstrap.css" rel="stylesheet" />
       <link href="bootstrap-theme.css" rel="stylesheet" />
       <script type="text/ng-template" id="scopeTemplate">
           <div class="panel-body">
               <p>Data Value: <input ng-model="local" /></p>
           </div>
       </script>
       <script type="text/javascript">
           angular.module("exampleApp", [])
               .directive("scopeDemo", function () {
                   return {
                       template: function () {
                           return angular.element(
                               document.querySelector("#scopeTemplate")).html();
                       },
                       scope: {
                           local: "=nameprop"
                       }
                   }
               })
               .controller("scopeCtrl", function ($scope) {
                   $scope.data = { name: "Adam" };
               });
       </script>
   </head>

   <body ng-controller="scopeCtrl">
       <div class="panel panel-default">
           <div class="panel-body">
               Direct Binding: <input ng-model="data.name" />
           </div>
           <div class="panel-body" scope-demo nameprop="data.name"></div>
       </div>
   </body>

   </html>
```

要创建一个双向绑定，得在创建隔离作用域时将字符 "@" 替换为字符 "="，这样前例中这个定义

```javascript
   ...
   scope: {
       local: "@nameprop"
   }
   ...
```

就变成了

```javascript
   ...
   scope: {
       local: "=nameprop"
   }
   ...
```

然而这并不是唯一的一处修改。在使用单向绑定时，提供了一个被双大括号字符所包围的绑定表达式，但是在双向绑定中 AngularJS 需要知道哪个属性需要被更新，所以我将该值设置为一个属性名

```html
   ...
   <div class="panel-body" scope-demo nameprop="data.name"></div>
   ...
```

这些修改创建了双向绑定，这就允许我更新我的指令模板以便包含进去可用于修改数据值的内容。对于这个简单的例子来说，这意味着只需要一个使用 ng-model 指令的输入框

```html
   ...
   <p>Data Value: <input ng-model="local" /></p>
   ...
```

这个例子产生的效果是作用域之间数据更新的流程可以发生在两个方向上 —— 对控制器作用域中 data.name 属性的更新将会更新隔离作用域中的 local 属性，而且 local 属性的变化也会导致 data.name 被更新

1. 计算表达式

   最后一个隔离作用域的特性是指定表达式作为属性并将其在控制器作用域中进行计算的能力

```html
   <!DOCTYPE html>
   <html ng-app="exampleApp">

   <head>
       <title>Directive Scopes</title>
       <script src="angular.js"></script>
       <link href="bootstrap.css" rel="stylesheet" />
       <link href="bootstrap-theme.css" rel="stylesheet" />
       <script type="text/ng-template" id="scopeTemplate">
           <div class="panel-body">
               <p>Name: {{local}}, City: {{cityFn()}}</p>
           </div>
       </script>
       <script type="text/javascript">
           angular.module("exampleApp", [])
               .directive("scopeDemo", function () {
                   return {
                       template: function () {
                           return angular.element(
                               document.querySelector("#scopeTemplate")).html();
                       },
                       scope: {
                           local: "=nameprop",
                           cityFn: "&city"
                       }
                   }
               })
               .controller("scopeCtrl", function ($scope) {
                   $scope.data = {
                       name: "Adam",
                       defaultCity: "London"
                   };

                   $scope.getCity = function (name) {
                       return name == "Adam" ? $scope.data.defaultCity : "Unknown";
                   }
               });
       </script>
   </head>

   <body ng-controller="scopeCtrl">
       <div class="panel panel-default">
           <div class="panel-body">
               Direct Binding: <input ng-model="data.name" />
           </div>
           <div class="panel-body" scope-demo city="getCity(data.name)" nameprop="data.name"></div>
       </div>
   </body>

   </html>
```

这个技术略有些复杂，但是值得解开其中的道理，因为这会非常有用，特别是当需要以一种可复用和可预计的方式创建一个能够利用控制器中定义的行为和数据的指令时 我做的第一处修改是定义了一个简单的控制器行为，用于检查 name 参数并返回相关联的城市名。它所依赖的这个行为和数据是定义在控制器作用域中的，默认情况下不能被指令的隔离作用域所使用 行为的名称是 getCity，为了使这个行为对指令可用，对指令所应用的元素增添了一个新的特性

```html
   ...
   <div class="panel-body" scope-demo city="getCity(data.name)" nameprop="data.name"></div>
   ...
```

city 特性的值是一个表达式，调用了 getCity 行为并将 data.name 属性作为参数传入。要使这个表达式在隔离作用域中可用，在 scope 对象上增添了一个新的属性

```javascript
   ...
   scope: {
       local: "=nameprop",
       cityFn: "&city"
   }
   ...
```

前缀 "&" 告诉 AngularJS 我想将指定特性的值绑定到一个函数。在这里，该特性为 city，我想将其绑定到一个名为 cityFn 的函数。剩下的就是在指令模板中调用函数来计算表达式

```html
   ...
   <div class="panel-body">
       <p>Name: {{local}}, City: {{cityFn()}}</p>
   </div>
   ...
```

注意在调用 cityFun () 时，是使用了圆括号的，要计算被这个特性所指定的表达式，这是必需的，即使当表达式本身就是一个函数调用时

1. 使用隔离作用域的数据来计算表达式

   前面所述技术的一个变体是允许你将来自待计算的隔离作用域的数据作为控制器作用域表达式的一部分。要做到这点，修改表达式以便传递给行为的参数是在控制器作用域上没有被定义过的属性名

```html
   ...
   <div class="panel-body" scope-demo city="getCity(nameVal)" nameprop="data.name"></div>
   ...
```

这里我选择了 nameVal 作为参数名。为了传递来自隔离作用域的数据，更新了计算表达式的模板中的绑定，传入一个为表达式参数提供值的对象

```html
   ...
   <div class="panel-body">
       <p>Name: {{local}}, City: {{cityFn({nameVal: local})}}</p>
   </div>
   ...
```

这所产生的结果是创建出了一个可混合使用定义在隔离作用域和控制器作用域中的数据对表达式进行计算的数据绑定。要小心地注意保证控制器作用域没有定义一个名字和表达式中参数相同的属性，如果定义了，那么来自隔离作用域的值将被忽略

# 第 17 章 高级指令特性

## 准备示例项目

## 使用嵌入包含

术语 "嵌入包含" 的意思是将一个文档的一部分通过引用插入到另一个文档中。在指令的上下文信息中，当你要创建一个可以包含任意内容的包装器指令时，这将十分有用。在 angularjs 文件夹下添加一个名为 transclude.html 的新文件

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Transclusion</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script type="text/ng-template" id="template">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4>This is the panel</h4>
            </div>
            <div class="panel-body" ng-transclude>
            </div>
        </div>
    </script>
    <script type="text/javascript">
        angular.module("exampleApp", [])
            .directive("panel", function () {
                return {
                    link: function (scope, element, attrs) {
                        scope.dataSource = "directive";
                    },
                    restrict: "E",
                    scope: true,
                    template: function () {
                        return angular.element(document.querySelector("#template")).html();
                    },
                    transclude: true
                }
            })
            .controller("defaultCtrl", function ($scope) {
                $scope.dataSource = "controller";
            });
    </script>
</head>

<body ng-controller="defaultCtrl">
    <panel>
        The data value comes from the: {{dataSource}}
    </panel>
</body>

</html>
```

本例的目标是创建一个可将任何内容包装到一组具有 Bootstrap 面板样式的元素中的指令。在这里我定义了名为 panel 的指令并使用 restrict 定义属性将其设置为只能作为元素使用。这并不是必需的，只是我的个人习惯。我想将如下内容

```html
...
<panel>
    The data value comes from the: {{dataSource}}
</panel>
...
```

生成如下 HTML 标记

```html
...
<div class="panel panel-default">
    <div class="panel-heading">
        <h4>This is the panel</h4>
    </div>
    <div class="panel-body" ng-transclude="">
        The data value comes from the: controller
    </div>
</div>
...
```

之所以使用 "嵌入包含" 这样个术语，是因为内容是放在要插入到模板中的 panel 元素里的。在使用嵌入包含时有两个特定步骤是必需的。第一步是在创建指令时将 transclude 定义属性设置为 true

```javascript
...
transclude: true
...
```

提示： 设置 transclude 为 true 后，会对指令所应用到的元素内容进行包装，并不是元素本身。如果你想包含元素本身，就需要将 transclude 属性设置为 "element"

第二步是将 ng-transclude 指令应用到模板中，这指定了插入内容的位置。我想将元素插入到模板中具有 panel-body 样式的 div 下

```html
...
<div class="panel panel-default">
    <div class="panel-heading">
        <h4>This is the panel</h4>
    </div>
    <div class="panel-body" ng-transclude>
    </div>
</div>
...
```

你会注意到我在所嵌入的内容中使用了一个内联的数据绑定

```html
...
The data value comes from the: {{dataSource}}
...
```

这样做是为了演示嵌入包含特性的一个重要方面，即被嵌入包含的内容中的表达式是在控制器作用域中被计算的，而不是指令的作用域。我在控制器的工厂函数和指令的链接函数中都对 dataSource 属性定义了值，但是 AngularJS 从控制器中取得了该值。这种方法的好处在于被嵌入包含的内容不需要知道它的数据是定义在哪个作用域中，你不需要考虑嵌入包含的问题，尽管写表达式就可以了，让 AngularJS 自己去进行计算 尽管如此，如果在计算嵌入包含的表达式时你确实想将指令作用域考虑在内，只需要将 scope 定义属性设置为 false

```javascript
...
restrict: "E",
scope: false,
template: function () {
...
```

这确保了指令在控制器作用域上操作，而且任何定义在链接函数中的值将影响嵌入包含的表达式。这一修改带来的结果是，内联绑定表达式显示的将是来自链接函数中为 dataSource 定义的值

使用编译函数 在前一章中，曾解释过当指令特别复杂或者需要处理大量数据时，使用编译函数操作 DOM，而让链接函数执行其他任务，是比较有利的。在我自己的项目中很少用到编译函数，我倾向于通过简化代码或者优化处理数据的方法来解决性能问题，但是在本节中我将解释编译函数是如何工作的 除了性能外，使用编译函数还有一个好处，就是可以使用嵌入包含来重复生成内容，就像 ng-repeat 所做的那样。在 angularjs 文件夹中添加一个名为 compileFunction.html 的新文件

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Compile Function</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script type="text/javascript">
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope) {
                $scope.products = [{ name: "Apples", price: 1.20 },
                    { name: "Bananas", price: 2.42 }, { name: "Pears", price: 2.02 }];

                $scope.changeData = function () {
                    $scope.products.push({ name: "Cherries", price: 4.02 });
                    for (var i = 0; i < $scope.products.length; i++) {
                        $scope.products[i].price++;
                    }
                }
            })
            .directive("simpleRepeater", function () {
                return {
                    scope: {
                        data: "=source",
                        propName: "@itemName"
                    },
                    transclude: 'element',
                    compile: function (element, attrs, transcludeFn) {
                        return function ($scope, $element, $attr) {
                            $scope.$watch("data.length", function () {
                                var parent = $element.parent();
                                parent.children().remove();
                                for (var i = 0; i < $scope.data.length; i++) {
                                    var childScope = $scope.$new();
                                    childScope[$scope.propName] = $scope.data[i];
                                    transcludeFn(childScope, function (clone) {
                                        parent.append(clone);
                                    });
                                }
                            });
                        }
                    }
                }
            });
    </script>
</head>

<body ng-controller="defaultCtrl" class="panel panel-body">
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <tr simple-repeater source="products" item-name="item">
                <td>{{item.name}}</td>
                <td>{{item.price | currency}}</td>
            </tr>
        </tbody>
    </table>
    <button class="btn btn-default text" ng-click="changeData()">Change</button>
</body>

</html>
```

本例中包含了一个名为 simpleRepeater 的指令，使用了嵌入包含为数值中的对象生成一组元素，就像 ng-repeat 的简化版一样。将该指令应用到 HTML 元素

```html
...
<tbody>
    <tr simple-repeater source="products" item-name="item">
        <td>{{item.name}}</td>
        <td>{{item.price | currency}}</td>
    </tr>
</tbody>
...
```

我使用 source 属性指定了数据对象的来源，并使用 item-name 属性指定了可用于引用嵌入包含的模板中当前对象的名称。在本例中，我指定数据源为控制器创建的 products 数组，指定 item-name 为 item (这允许我在嵌入包含的内容中引用 item.name 和 item.currency) 我的目标是对每一个 product 对象生成 tr 元素，所以我设置了 transclude 定义对象为 element，也就是说元素本身将被包含于嵌入包含中，而不只是其内容。我也可以将我的指令应用到 tbody 元素上并设置 transclude 属性为 true，但我想将两种配置都演示一下 这个指令的核心部分是编译函数，是由 compile 属性指定的。编译函数被传入三个参数，指令所应用到的元素，该元素的属性，以及一个可用于创建嵌入包含内容的副本的函数 最重要的事情是要认识到编译函数会返回一个链接函数 (当 compile 属性被使用时 link 属性将会被忽略)。这可能看起来有点奇怪，但是请记住编译函数的目的是为了修改 DOM，所以从编译函数返回一个链接函数是很有帮助的，因为它提供了一个简易的将数据从指令的一部分传递到下一部分的方法 编译函数应当仅仅是操作 DOM 的，所以并没有为它提供作用域，但是编译函数返回的链接函数可以声明对 $scope、$element 和 $attrs 参数的依赖，对应于普通链接函数中的各个参数 如果还没理解也不用担心，我使用编译函数的原因完全是为了能够得到一个具有作用域并且能调用嵌入包含函数的链接函数。对于创建一个可以重复生成内容的指令，这正是关键的组合

理解编译函数

```javascript
...
compile: function (element, attrs, transcludeFn) {
    return function ($scope, $element, $attr) {
        $scope.$watch("data.length", function () {
            var parent = $element.parent();
            parent.children().remove();
            for (var i = 0; i < $scope.data.length; i++) {
                var childScope = $scope.$new();
                childScope[$scope.propName] = $scope.data[i];
                transcludeFn(childScope, function (clone) {
                    parent.append(clone);
                });
            }
        });
    }
}
...
```

我在链接函数中做的第一件事就是使用 $watch 方法为 data.length 属性在作用域上设置监听器，以便当数据项个数发生改变时能做出响应 在监听函数里我使用了 jqLite 来定位指令所应用到的元素的父元素，并移除其所有子元素。我必须使用父元素进行工作，因为我设置了 transclude 属性为 element 下一步是遍历数据对象。通过调用 $scope.$new 方法创建了一个新的作用域。这允许我为每个实例的 item 属性分配不同的对象

```javascript
...
transcludeFn(childScope, function (clone) {
    parent.append(clone);
});
...
```

这个方法是本例中最重要的部分。对于每个数据对象，调用了传给编译函数的创建嵌入包含内容的副本的函数。第一个参数是包含 item 属性的子作用域，item 属性设置为当前数据项。第二个参数是一个传入了嵌入包含内容的副本的函数，这份副本被使用 jqLite 追加到父元素下。结果是对于每一个数据对象生成了指令所应用到的 tr 元素的一份拷贝，并创建了一个新的作用域，在这个作用域中定义了 item 属性 为了测试指令对数据变化的响应，我添加了一个 Change 按钮调用控制器中的 ChangeDate 行为，这个行为向数据数组中添加一个新项并将所有数据对象中的 price 属性值加 1

## 在指令中使用控制器

指令能够创建出被其他指令所使用的控制器。这允许指令被组合起来创建出更复杂的组件。为了演示这一特性，在 angularjs 文件夹中添加一个名为 directiveControllers.html 的新文件

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Directive Controllers</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script type="text/ng-template" id="productTemplate">
        <td>{{item.name}}</td>
        <td><input ng-model='item.quantity' /></td>
    </script>
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope) {
                $scope.products = [{ name: "Apples", price: 1.20, quantity: 2 },
                { name: "Bananas", price: 2.42, quantity: 3 },
                { name: "Pears", price: 2.02, quantity: 1 }];
            })
            .directive("productItem", function () {
                return {
                    template: document.querySelector("#productTemplate").outerText
                }
            })
            .directive("productTable", function () {
                return {
                    transclude: true,
                    scope: { value: "=productTable", data: "=productData" },
                }
            });
    </script>
</head>

<body ng-controller="defaultCtrl">
    <div class="panel panel-default">
        <div class="panel-body">
            <table class="table table-striped" product-table="totalValue" product-data="products" ng-transclude>
                <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                </tr>
                <tr ng-repeat="item in products" product-item></tr>
                <tr>
                    <th>Total:</th>
                    <td>{{totalValue}}</td>
                </tr>
            </table>
        </div>
    </div>
</body>

</html>
```

这个例子是基于两个指令展开的。productTable 指令被应用于 table 元素并使用了嵌入包含来包装一系列 tr 元素，每个 tr 元素包含一个名为 totalValue 的值的内联绑定。另一个指令 productItem 被使用在表格中，通过 ng-repeat 指令来为 AngularJS 控制器中定义的数据对象生成表格行，这还不是指令控制器的特性，只是一个普通的特性 结果是得到了一个包含有多个 productItem 指令实例的表格，每个实例都有一个与它代表的数据项的 quantity 属性的双向绑定 本节中我的目标是扩展 productTable 指令以使得它能够提供一个被 productItem 指令的实例所使用的函数，该函数能够用于标记输入框元素中的值何时发生了变化。虽然 AngularJS 有许多种方法可以实现这一点，但是我打算向 productTable 指令添加一个控制器并在 productItem 指令中使用它

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Directive Controllers</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script type="text/ng-template" id="productTemplate">
        <td>{{item.name}}</td>
        <td><input ng-model='item.quantity' /></td>
    </script>
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope) {
                $scope.products = [{ name: "Apples", price: 1.20, quantity: 2 },
                { name: "Bananas", price: 2.42, quantity: 3 },
                { name: "Pears", price: 2.02, quantity: 1 }];
            })
            .directive("productItem", function () {
                return {
                    template: document.querySelector("#productTemplate").outerText,
                    require: "^productTable",
                    link: function (scope, element, attrs, ctrl) {
                        scope.$watch("item.quantity", function () {
                            ctrl.updateTotal();
                        });
                    }
                }
            })
            .directive("productTable", function () {
                return {
                    transclude: true,
                    scope: { value: "=productTable", data: "=productData" },
                    controller: function ($scope, $element, $attrs) {
                        this.updateTotal = function () {
                            var total = 0;
                            for (var i = 0; i < $scope.data.length; i++) {
                                total += Number($scope.data[i].quantity);
                            }
                            $scope.value = total;
                        }
                    }
                }
            });
    </script>
</head>

<body ng-controller="defaultCtrl">
    <div class="panel panel-default">
        <div class="panel-body">
            <table class="table table-striped" product-table="totalValue" product-data="products" ng-transclude>
                <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                </tr>
                <tr ng-repeat="item in products" product-item></tr>
                <tr>
                    <th>Total:</th>
                    <td>{{totalValue}}</td>
                </tr>
            </table>
        </div>
    </div>
</body>

</html>
```

名为 controller 的定义对象属性用于为指令创建一个控制器，这个函数可以声明对作用域的依赖，对所应用到的元素的依赖，和对该元素属性的依赖。我用控制器定义了一个名为 updateTotal 的函数，该函数对各项数据中的 quantity 属性进行求和运算。require 定义对象属性用于声明对控制器的依赖，我将该属性加到了 productItem 指令上

```javascript
...
require: "^productTable",
...
```

属性值是指令名和一个可选的前缀

可用于 require 属性值的前缀

| 前缀 | 描述                                   |
| :--- | :------------------------------------- |
| None | 假定两个指令都应用于同一个元素         |
| ^    | 在指令所应用到的父元素上查找另一个指令 |
| ?    | 如果找不到指令并不报错 —— 小心使用     |

为了使用控制器中定义的功能，我在 productItem 指令的链接函数上指定了一个附加的参数

```javascript
...
link: function (scope, element, attrs, ctrl) {
...
```

控制器参数不能被依赖注入，所以你可以调用任何你想调用的东西，我的个人习惯是使用名称 ctrl。做了这些修改后我就可以调用控制器中的函数了，就像它们已经定义在本指令中一样

```javascript
...
ctrl.updateTotal();
...
```

我在调用一个方法执行计算，这个方法不需要任何参数，但是你也可以从一个控制器传递数据到另一个，只要你记得传递给控制器函数的 $scope 参数是定义控制器的指令的作用域，而不是需要它的指令的作用域就可以了

添加另外一个指令 定义控制器函数的价值在于对功能进行分离和重用的能力，从而无需构建和测试单个庞大的组件。在前面的例子中 productTable 控制器并不知道 productItem 控制器的设计或实现，也就是说我可以独立地测试它们并任意修改，只要 productTable 控制器仍然继续提供 updateTotal 函数即可 这种方法也允许你能够混合搭配各种指令的功能，从而在一个程序里创建出各种功能不同的组合，为了演示这一点，我添加了一个新的指令到文件中

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Directive Controllers</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script type="text/ng-template" id="productTemplate">
        <td>{{item.name}}</td>
        <td><input ng-model='item.quantity' /></td>
    </script>
    <script type="text/ng-template" id="resetTemplate">
        <td colspan="2"><button ng-click="reset()">Reset</button></td>
    </script>
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope) {
                $scope.products = [{ name: "Apples", price: 1.20, quantity: 2 },
                { name: "Bananas", price: 2.42, quantity: 3 },
                { name: "Pears", price: 2.02, quantity: 1 }];
            })
            .directive("productItem", function () {
                return {
                    template: document.querySelector("#productTemplate").outerText,
                    require: "^productTable",
                    link: function (scope, element, attrs, ctrl) {
                        scope.$watch("item.quantity", function () {
                            ctrl.updateTotal();
                        });
                    }
                }
            })
            .directive("productTable", function () {
                return {
                    transclude: true,
                    scope: { value: "=productTable", data: "=productData" },
                    controller: function ($scope, $element, $attrs) {
                        this.updateTotal = function () {
                            var total = 0;
                            for (var i = 0; i < $scope.data.length; i++) {
                                total += Number($scope.data[i].quantity);
                            }
                            $scope.value = total;
                        }
                    }
                }
            })
            .directive("resetTotals", function () {
                return {
                    scope: { data: "=productData", propname: "@propertyName" },
                    template: document.querySelector("#resetTemplate").outerText,
                    require: "^productTable",
                    link: function (scope, element, attrs, ctrl) {
                        scope.reset = function () {
                            for (var i = 0; i < scope.data.length; i++) {
                                scope.data[i][scope.propname] = 0;
                            }
                            ctrl.updateTotal();
                        }
                    }
                }
            });
    </script>
</head>

<body ng-controller="defaultCtrl">
    <div class="panel panel-default">
        <div class="panel-body">
            <table class="table table-striped" product-table="totalValue" product-data="products" ng-transclude>
                <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                </tr>
                <tr ng-repeat="item in products" product-item></tr>
                <tr>
                    <th>Total:</th>
                    <td>{{totalValue}}</td>
                </tr>
                <tr reset-totals product-data="products" property-name="quantity"></tr>
            </table>
        </div>
    </div>
</body>

</html>
```

新的指令名为 resetTotals，它向表格中添加了一个 Reset 按钮，可以将所有的数量清零，在一个隔离的作用域上提供了数据数组和要清理的属性名称，该指令就可以通过数据绑定查找到要清零的位置。在值被重置之后，resetTotals 指令调用了 productTable 指令所提供的 updateTotal 方法。这仍然只是一个简单的例子，但是证明了 productTable 指令既不知道也不关心哪个指令使用它的控制器。你可以创建 productTable 的实例，无论其中包含了多少的 resetTotals 和 productItem 指令的实例，一切都将继续工作而无需修改

## 创建自定义表单元素

之前介绍过了 ng-model 指令，ng-model 指令的组织方式允许你能够超越标准表单元素的功能，并以任何你想要的方式来捕获输入数据，当你要创建向用户展示的组件时，这给予了你完全的自由。作为演示我在 angularjs 文件夹下添加了一个名为 customForms.html 的文件

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>CustomForms</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script type="text/ng-template" id="triTemplate">
        <div class="well">
            <div class="btn-group">
                <button class="btn btn-default">Yes</button>
                <button class="btn btn-default">No</button>
                <button class="btn btn-default">Not Sure</button>
            </div>
        </div>
    </script>
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope) {
                $scope.dataValue = "Not Sure";
            })
            .directive("triButton", function () {
                return {
                    restrict: "E",
                    replace: true,
                    require: "ngModel",
                    template: document.querySelector("#triTemplate").outerText,
                    link: function (scope, element, attrs, ctrl) {
                        var setSelected = function (value) {
                            var buttons = element.find("button");
                            buttons.removeClass("btn-primary");
                            for (var i = 0; i < buttons.length; i++) {
                                if (buttons.eq(i).text() == value) {
                                    buttons.eq(i).addClass("btn-primary");
                                }
                            }
                        }
                        setSelected(scope.dataValue);
                    }
                }
            });
    </script>
</head>

<body ng-controller="defaultCtrl">
    <div>
        <tri-button ng-model="dataValue" />
    </div>
    <div class="well">
        Value:
        <select ng-model="dataValue">
            <option>Yes</option>
            <option>No</option>
            <option>Not Sure</option>
        </select>
    </div>
</body>

</html>
```

这个清单定义了我的自定义表单元素的结构，但还没有用到 API。我将解释我是如何控制其工作的，并使用一些新技术。从目前来看，这个例子还未包含任何新的东西。我创建了一个名为 triButton 的指令，该指令可被当作元素来使用，并向用户显示三个使用了 Bootstrap 样式的按钮元素。我声明了对 ngModel 控制器的依赖 (该控制器是被 ng-model 指令所定义的，因为 AngularJS 统一规范了其名称)，并且向链接函数添加了 ctrl 参数 我在链接函数里定义了一个名为 setSelete 的函数，用于突出显示与表单元素选中的值相同的按钮元素。这是通过使用 jqLite 添加和移除 Bootstrap 样式做到的 注意，在 tri-button 元素上使用了 ng-model 指令

```html
...
<tri-button ng-model="dataValue" />
...
```

这将该指令作为元素使用，并且在作用域上设置了一个与 dataValue 属性的双向绑定。我的目标是使用 ngModel 控制器的 API 来实现与 triButton 指令的绑定 我还添加了一个与 dataValue 属性相绑定的下拉列表元素。添加它是因为在实现一个双向数据绑定时，需要能够显示出用户通过自定义指令改变 dataValue 值，以及在别处如何接收和处理被改变的值的效果

处理外部变化 我准备添加的第一个特性是，但 dataValue 属性在我的指令以外被修改时，能够改变突出显示的按钮

```html
...
link: function (scope, element, attrs, ctrl) {
    var setSelected = function (value) {
        var buttons = element.find("button");
        buttons.removeClass("btn-primary");
        for (var i = 0; i < buttons.length; i++) {
            if (buttons.eq(i).text() == value) {
                buttons.eq(i).addClass("btn-primary");
            }
        }
    }

    ctrl.$render = function(){
        setSelected(ctrl.$viewValue || "Not Sure");
    }
}
...
```

修改不大，影响不小。我替换了 ngModel 控制器所定义的 $render 函数，在其中调用了 setSelected 函数。当值在指令之外被修改并且需要更新显示内容时，$render 方法会被 ng-model 指令调用。通过读取 $viewValue 属性可以拿到最新的值

提示： 注意，我移除了清单中原有的对 setSelected 的显示调用。当程序第一次启动时，ngModel 控制器会调用 $render 函数，以使你可以设置指令的初始状态。如果你使用动态定义的属性，$viewValue 的值将会是 undefined，这也是为什么说比较好的实践是提供一个回退值，就像在上述示例中那样 将页面加载到浏览器中，并使用下拉列表元素改变 dataValue 属性的值，就可以看到效果。注意，我的指令代码并没有直接引用 dataValue 属性，数据绑定和数据属性是通过 ngModel 控制器的 API 来管理的 $render 方法和 $viewValue 属性是 ngModel 控制器提供的 API

ngModel 控制器提供的基本方法和属性

| 名称                 | 描述                                                         |
| :------------------- | :----------------------------------------------------------- |
| $render()            | 这是 ngModel 控制器在数据绑定值更改时调用以更新 UI 的函数。它通常被自定义指令覆盖 |
| $setViewValue(value) | 更新数据绑定的值                                             |
| $viewValue           | 返回指令应显示的格式化值                                     |
| $modelValue          | 返回作用域中未格式化的值                                     |
| $formatters          | 将 $modelValue 转换为 $viewValue 的格式化函数构成的数组      |

处理内部变化 我的自定义指令增加的下一个特性是，当用户单击其中的一个按钮时将变化通过 ng-model 指令传播到作用域的能力

```javascript
...
link: function (scope, element, attrs, ctrl) {
    element.on("click",function(event){
        setSelected(event.target.innerText);
        scope.$apply(function(){
            ctrl.$setViewValue(event.target.innerText);
        });
    });

    var setSelected = function (value) {
        var buttons = element.find("button");
        buttons.removeClass("btn-primary");
        for (var i = 0; i < buttons.length; i++) {
            if (buttons.eq(i).text() == value) {
                buttons.eq(i).addClass("btn-primary");
            }
        }
    }

    ctrl.$render = function(){
        setSelected(ctrl.$viewValue || "Not Sure");
    }
}
...
```

我使用了 jqLite 的 on 方法，来为指令模板中的按钮元素的 click 事件注册一个处理函数。当用户单击按钮时，将会通过调用 $setViewValue 方法通知 ngModel 控制器

```javascript
...
scope.$apply(function(){
    ctrl.$setViewValue(event.target.innerText);
});
...
```

在前面曾介绍过 $scope.$apply 方法并解释过它是用于将更新推送到数据模型的。当时给 $scope 方法传入了一个表达式，用于对作用域进行计算，但是在本例中我使用了一个函数作为参数。作用域将会执行函数并更新其状态；使用函数允许我能够向 ngModel 控制器通知变化，并能够让作用域一步就能完成对其状态的更新 为了更新被数据绑定的值，调用了 $setViewValue 方法，该方法接收新的值作为参数。对于本例，我是从被点击的按钮的文本中获取值

警告： 调用 $setViewValue 方法不会导致 ngModel 控制器调用 $render 方法。这意味着你要负责更新指令元素的状态以及反映新的值，这也是为什么我在 click 事件处理函数中调用 setSelected 函数的原因

格式化数据值 在前面描述了 $viewValue 和 $modelValue 属性。ngModel 控制器对格式化数据模型中的值提供了一种简单的机制，以便使其被指令所显示。这些格式化程序是以函数形式表示的，能够将 $modelValue 属性转换成 $viewValue 属性

```javascript
...
link: function (scope, element, attrs, ctrl) {
    ctrl.$formatters.push(function (value) {
        return value == "Huh?" ? "Not Sure" : value;
    });

    // ...other statements omitted for brevity...
}
...
```

清单显示了一个格式化程序，该格式化程序将下拉列表选中的值映射成指令中的对应按钮 $formatters 属性是由被使用的函数按顺序组成的数组，前一个格式化程序的结果被作为参数传入函数，函数返回的是本次格式化结果。在这个例子中格式化程序将一个新的值 "Huh?" 映射为 "Not Sure"。为了使用这个格式化程序，在下拉列表元素中添加一个新的值

```html
...
<div class="well">
    Value:
    <select ng-model="dataValue">
        <option>Yes</option>
        <option>No</option>
        <option>Not Sure</option>
        <option>Huh?</option>
    </select>
</div>
...
```

当下拉列表元素选中 "Huh?"，我的自定义指令突出显示的确实 "Not Sure" 按钮。需要注意的关键之处在于格式化的结果被赋给 $viewValue 属性，但是如果需要的话，仍然可以从 $modelValue 属性中获得未格式化的值

校验自定义表单元素 ngModel 控制器还提供了将自定义指令集成到 AngularJS 表单验证系统的支持。为了演示这是如何工作的，更新了 triButton 指令，以使得只有 "Yes" 和 "No" 值为有效的校验值

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>CustomForms</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <style>
        *.error {
            color: red;
            font-weight: bold;
        }
    </style>
    <script type="text/ng-template" id="triTemplate">
        <div class="well">
            <div class="btn-group">
                <button class="btn btn-default">Yes</button>
                <button class="btn btn-default">No</button>
                <button class="btn btn-default">Not Sure</button>
            </div>
            <span class="error" ng-show="myForm.decision.$error.confidence">
                You need to be sure
            </span>
        </div>
    </script>
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope) {
                $scope.dataValue = "Not Sure";
            })
            .directive("triButton", function () {
                return {
                    restrict: "E",
                    replace: true,
                    require: "ngModel",
                    template: document.querySelector("#triTemplate").outerText,
                    link: function (scope, element, attrs, ctrl) {

                        var validateParser = function (value) {
                            var valid = (value == "Yes" || value == "No");
                            ctrl.$setValidity("confidence", valid);
                            return valid ? value : undefined;
                        }

                        ctrl.$parsers.push(validateParser);

                        element.on("click", function (event) {
                            setSelected(event.target.innerText);
                            scope.$apply(function () {
                                ctrl.$setViewValue(event.target.innerText);
                            });
                        });

                        var setSelected = function (value) {
                            var buttons = element.find("button");
                            buttons.removeClass("btn-primary");
                            for (var i = 0; i < buttons.length; i++) {
                                if (buttons.eq(i).text() == value) {
                                    buttons.eq(i).addClass("btn-primary");
                                }
                            }
                        }

                        ctrl.$render = function () {
                            setSelected(ctrl.$viewValue || "Not Sure");
                        }
                    }
                }
            });
    </script>
</head>

<body ng-controller="defaultCtrl">
    <form name="myForm" novalidate>
        <div><tri-button name="decision" ng-model="dataValue" /></div>
    </form>
</body>

</html>
```

本清单中最大的修改就是对标准表单验证技术的相关修改。我向指令模板中添加了一个 span 元素，该元素的可见性取决于一个名为 confidence 的校验错误属性，还增添了一个表单元素以包装 triButton 指令并为表单元素使用了 name 属性 为了执行校验我定义了一个名为 validateParser 的新函数

```javascript
...
var validateParser = function (value) {
    var valid = (value == "Yes" || value == "No");
    ctrl.$setValidity("confidence", valid);
    return valid ? value : undefined;
}
...
```

解析器函数中传入的是被数据绑定的值，并负责检查该值是否有效。该值的有效性是通过 ngModel 控制器中定义的 $setValidity 方法设置的，该方法的参数是一个 key (用于显示校验信息) 和校验状态 (以一个布尔值表示)。解析器函数还需要对无效的值返回 undefined 作为结果。通过将函数添加到 ngModel 控制器所定义的 $parsers 数组，可以注册该解析器

```javascript
...
ctrl.$parsers.push(validateParser);
...
```

一个指令可以拥有多个解析器函数，就像可以拥有多个格式化程序一样。将页面加载到浏览器中并单击 Yes 按钮，然后单击 Not Sure 按钮就可以看到校验结果 ngModel 控制器提供了一系列将自定义指令集成进校验过程的方法和属性

ngModel 控制器提供的校验方法与属性

| 名称           | 描述                                                         |
| :------------- | :----------------------------------------------------------- |
| $setPristine() | 将校验状态重置为原始状态，从而阻止校验被执行                 |
| $isEmpty()     | 可以设置给指令表示该控件没有值。默认实现适用于标准表单元素，用于查找空字符串、null 或 undefined 值 |
| $parsers       | 用于校验模型值的函数构成的数组                               |
| $error         | 返回一个对象，其各个属性对应于各个校验错误信息               |
| $pristine      | 如果控件还没有被用户修改过，返回 true                        |
| $dirty         | 如果控件已经被用户修改过，返回 true                          |
| $valid         | 如果模型值是有效的，返回 true                                |
| $invalid       | 如果模型值是无效的，返回 true                                |

你也许想知道在单击 Not Sure 按钮显示校验信息之前为什么必须要单击 Yes 按钮。问题在于直到用户与指令所展示的 UI 发生交互之前 (或者更精确地说，当一个新的值被传递给 ngModel 控制器之前)，校验是不会进行的。所以解析器直到模型发生变化时才会被用到 这并不总是必需的，而且对于我的指令来说没有太大意义，但可以通过在 $render 函数中显示调用解析函数来解决这一问题

```javascript
...
ctrl.$render = function () {
    validateParser(ctrl.$viewValue);
    setSelected(ctrl.$viewValue || "Not Sure");
}
...
```

这有点不太正规，但是却能够起作用，只要 HTML 文件一被加载，校验信息就会被显示出来

# 第 18 章 模块与服务的协作

## 为什么以及何时使用和创建服务和模块

服务用于在应用程序中封装你想重用的功能，但正如之前所述，这并不完全适合模型 - 视图 - 控制器 (MVC) 模式。服务通常被用于实现横切关注点 (cross-cutting concerns，横切关注点指的是，一些具有横越多个模块的行为，使用传统的软件开发方法不能够达到有效的模块化的一类特殊关注点)，这是对影响多个组件或被多个组件影响的所有功能的统称。比较典型的例子有日志、安全和联网。它们不是模块的一部分 (除非你的业务是日志、安全和联网)，它们不属于控制器，因为在模块中没有响应用户交互或执行操作，它们也不是视图或指令的一部分，因为它们不能为用户呈现模型。总之，如果你不想使用别的方法创造功能，那就创建服务 模块在 AngularJS 中有两个角色。第一是它使用 ng-app 指令定义应用于 HTML 元素中的应用程序的功能。定义模块是 AngularJS 开发的起点。第二是使用模块来定义功能，比如服务、指令和过滤器，使之在不同的应用程序中某种程度上易于重用

为什么以及何时使用和创建模块和服务

| 为什么使用                                                   | 什么时候使用                                                 |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| 服务允许你打包可重用的功能，使之能在此应用程序中使用。模块允许你打包可重用的功能，使之能跨多个应用程序使用 | 当功能不适应任一其他 MVC 模式并且也是横切关注点时创建服务。创建模块打包功能，使之可被用于多个应用程序 |

## 准备示例项目

在 angularjs 文件夹下新建 example.html 文件

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Services and Modules</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope) {
                $scope.data = {
                    cities: ["London", "New York", "Paris"],
                    totalClicks: 0
                };
                $scope.$watch('data.totalClicks', function (newVal) {
                    console.log("Total click count: " + newVal);
                });
            })
            .directive("triButton", function () {
                return {
                    scope: { counter: "=counter" },
                    link: function (scope, element, attrs) {
                        element.on("click", function (event) {
                            console.log("Button click: " + event.target.innerText);
                            scope.$apply(function () {
                                scope.counter++;
                            });
                        });
                    }
                }
            });
    </script>
</head>

<body ng-controller="defaultCtrl">
    <div class="well">
        <div class="btn-group" tri-button counter="data.totalClicks" source="data.cities">
            <button class="btn btn-default" ng-repeat="city in data.cities">
                {{city}}
            </button>
        </div>
        <h5>Total Clicks: {{data.totalClicks}}</h5>
    </div>
</body>

</html>
```

这个例子基于紧挨着的三个按钮元素，ng-repeat 指令通过控制器在作用域上定义的 cities 数组生成了它们。其中 triButton 指令处理按钮元素的单击事件并更新由控制器定义的计数器，而且它是通过独立作用域数据绑定的 每次单击按钮，控制器和指令将信息写入 JavaScript 控制台

```txt
Total click count: 0
example.html:25 Button click: London
example.html:17 Total click count: 1
```

总单击数通过 HTML 标签中行内绑定的表达式也被显示出来了

提示： 当应用程序首次被浏览器加载时，控制器也会写入信息到控制台中。这是因为我使用了作用域的 $watch 方法，而处理函数在监听器首次建立的时候会被触发

## 使用模块建立应用

当 AngularJS 用于实现复杂应用程序时让人眼前一亮，而且这往往意味着 AngularJS 应用程序有许多组件协同运作为用户实现功能，比如控制器、指令、过滤器、服务。在前面的例子中，我创建的大多数示例都只是为了向你展示其特点，但这并不是在实际的项目中工作，所有的代码和标签都在单个 HTML 文件里。不仅单个文件变得笨拙，而且多个开发者很难在该项目上同时工作 解决方案是分离应用程序的组件到单个文件中，并使用 script 元素在主 HTML 文件中引用那些文件。你可以以对项目有意义的任何方法命名并组织你的文件。常见的方法包括将给定类型的所有组件放在一起 (控制器在一个文件里，指令放在另一个文件里)，并将与应用程序的特定部分相关的所有组件放在一起 (用户管理组件放在一个文件里，内容管理组件放在另一文件里)

提示： 你同样可以在你的应用程序中将 HTML 标签打散成多个文件中，然后在应用程序运行时当你需要的时候加载片段

对于特别大的应用程序，通常是为组织 (功能或组件) 创建文件夹的层次结构，为其他级别创建多个文件。无论你采用什么方法，都需要使用模块来组织代码

提示： 如果你是 AngularJS 的新手，那么我建议你按组件类型开始组织，因为在尝试确定是否应该将某些代码表示为控制器或指令时，它往往是最先考虑的。一旦熟悉了 AngularJS 的工作方式，就可以切换到另一种组织风格

维护单个模块 将组件移到另一个文件中最简单的方法是在同一个模块内这样做。为了证明这一点，我创建了名为 directives.js 的文件，并将 triButton 指令从 example.html 文件中移走

```javascript
angular.module("exampleApp")
    .directive("triButton", function () {
        return {
            scope: { counter: "=counter" },
            link: function (scope, element, attrs) {
                element.on("click", function (event) {
                    console.log("Button click: " + event.target.innerText);
                    scope.$apply(function () {
                        scope.counter++;
                    });
                });
            }
        }
    });
```

使用单个参数调用 module 方法告诉 AngularJS 你想要获得的 module 对象，即那个预先定义的模块。在其上你可以继续调用方法，比如调用 directive 定义新指令。我已经讲了许多定义 module 对象的方法，还讲了其余部分。现在不妨回到第 9 章回顾一下 module 对象的成员方法

为应用程序引入新的 JavaScript 文件内容，我需要添加 script 元素到 example.html 文件

```html
...
<head>
    <title>Services and Modules</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope) {
                $scope.data = {
                    cities: ["London", "New York", "Paris"],
                    totalClicks: 0
                };
                $scope.$watch('data.totalClicks', function (newVal) {
                    console.log("Total click count: " + newVal);
                });
            });
    </script>
    <script src="directives.js"></script>
</head>
...
```

我必须将引入 directives.js 文件的 script 标签添加到定义 exampleApp 模块的 script 标签后面。如果 directives.js 文件在 exampleApp 模块被定义之前就被引入，AngularJS 将报错

创建新模块 将所有内容保存在单个模块中对于简单的应用程序来说很好，但对于更复杂的应用程序，定义多个模块会很有帮助，特别是如果你打算在多个项目中重用功能

```javascript
angular.module("customDirectives", [])
    .directive("triButton", function () {
        return {
            scope: { counter: "=counter" },
            link: function (scope, element, attrs) {
                element.on("click", function (event) {
                    console.log("Button click: " + event.target.innerText);
                    scope.$apply(function () {
                        scope.counter++;
                    });
                });
            }
        }
    });
```

不同的是我调用 angular.module 方法的方式。我提供了两个参数，告诉 AngularJS 我想创建新模块，第一个参数是新模块的名称，在在例子中是 customDirectives；第二个参数是数组，包括了我的新模块所依赖的模块的名称。我使用了空数组表示没有依赖。接下来使用新模块

```html
...
<head>
    <title>Services and Modules</title>
    <script src="angular.js"></script>
    <script src="directives.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", ["customDirectives"])
            .controller("defaultCtrl", function ($scope) {
                $scope.data = {
                    cities: ["London", "New York", "Paris"],
                    totalClicks: 0
                };
                $scope.$watch('data.totalClicks', function (newVal) {
                    console.log("Total click count: " + newVal);
                });
            });
    </script>
</head>
...
```

我添加了 customDirectives 模块作为 exampleApp 模块的依赖。我需要声明这个依赖项，因为在 exampleApp 模块中使用了定义在 customDirectives 模块下的指令

提示： 尽管我在该示例中移动了引入 directives.js 文件的 script，但如果像之前那样将它放在定义 exampleApp 模块的 script 标签后面，应用程序仍然可以工作的很好。AngularJS 在处理依赖前载入其所有模块，只有当你视图在另一个 script 元素中修改已经被定义的模块时有顺序问题

## 创建和使用服务

AngularJS 模块定义了三个方法用于定义服务：facory、service 和 provider。这些方法的使用效果是相同的 (一个服务对象，提供可在整个 AngularJS 应用程序中使用的功能)，但是每个方法创建和管理服务对象的方式略有不同

使用 Factory 方法 创建服务最简单的方法就是使用 module.factory 方法，传入服务名称和 factory 函数作为参数并返回服务对象。我在 angularjs 文件夹中创建了新文件 services.js

```javascript
angular.module("customServices", [])
    .factory("logService", function () {
        var messageCount = 0;
        return {
            log: function (msg) {
                console.log("(LOG + " + messageCount++ + ") " + msg);
            }
        };
    });
```

我定义了新模块 customServices，并调用 factory 方法创建了服务 logService。我的服务工厂函数返回定义了 log 函数的对象，它接受消息作为参数并写入控制台

提示： 我将创建自定义日志服务，但已经有一个内置的了，我可以用其替换掉。内置的服务名为 $log

工厂函数返回的对象是服务对象，只要请求 logService，AngularJS 就会使用该对象。工厂函数只被调用一次，因为只要应用程序中需要服务，就会使用它创建和返回的对象。常见错误是假设服务的每个使用者将接收到不同的服务对象，并假设只有一个 AngularJS 组件会修改像计数器这样的变量

警告： 当心别重复使用服务名称，如果你这样做了，已存在的服务将被覆盖。内置服务以 $ 开头的原因之一就是为了解决命名冲突

我定义了变量 messageCount，它包含在消息中写入 JavaScript 控制台，强调服务对象是单例的这一事实。该变量是个每次消息写入控制台就会增加的计数器，它还将有助于演示被创建对象的实例仅有一个

提示： 注意我是在工厂函数中定义的 messageCount 变量，而不是作为服务对象的一部分。我不想让服务的调用者能够修改该计数器，而放在服务对象的外面则意味着它无法被调用者使用

已创建的服务可以马上应用到主应用程序模块上

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Services and Modules</title>
    <script src="angular.js"></script>
    <script src="directives.js"></script>
    <script src="services.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", ["customDirectives", "customServices"])
            .controller("defaultCtrl", function ($scope, logService) {
                $scope.data = {
                    cities: ["London", "New York", "Paris"],
                    totalClicks: 0
                };
                $scope.$watch('data.totalClicks', function (newVal) {
                    logService.log("Total click count: " + newVal);
                });
            });
    </script>
</head>

<body ng-controller="defaultCtrl">
    <div class="well">
        <div class="btn-group" tri-button counter="data.totalClicks" source="data.cities">
            <button class="btn btn-default" ng-repeat="city in data.cities">
                {{city}}
            </button>
        </div>
        <h5>Total Clicks: {{data.totalClicks}}</h5>
    </div>
</body>

</html>
```

我添加了 script 元素在 HTML 文档中引入 services.js 文件，以确保该服务可用。在这之后就简单多了，在控制器的工厂函数中添加一个参数来声明所依赖的服务。参数名必须和创建服务所使用的名称一致，因为 AngularJS 检查工厂函数的参数并用它们来执行依赖注入。这意味着你可以按任何顺序定义参数，但它确实会阻止你随意定义参数名称。在 directives.js 中调用服务

```javascript
angular.module("customDirectives", ["customServices"])
    .directive("triButton", function (logService) {
        return {
            scope: { counter: "=counter" },
            link: function (scope, element, attrs) {
                element.on("click", function (event) {
                    logService.log("Button click: " + event.target.innerText);
                    scope.$apply(function () {
                        scope.counter++;
                    });
                });
            }
        }
    });
```

一旦声明了对模块和服务的依赖关系，我就调用 logService.log 方法来访问服务提供的简单功能。如果你将示例 HTML 文件加载到浏览器中并单击按钮，你将在 JavaScript 控制台中看到如下输出：

```txt
(LOG + 0) Total click count: 0
(LOG + 1) Button click: London
(LOG + 2) Total click count: 1
(LOG + 3) Button click: New York
(LOG + 4) Total click count: 2
```

你可能想知道为什么使用服务比我在这里直接调用 console.log 的原始示例更好。好处有几个，一是我可以在 services.js 文件中注释一行来禁用整个应用程序的日志记录，而不是搜遍应用程序寻找 console.log 的调用。这在我简单的示例应用程序中不是什么大不了的，但在由许多大而复杂的文件拼凑成的实际项目中却是个大问题 第二个好处就是服务的调用者不必知道服务的实现。在本例中，控制器和指令知道有 logService，还知道它定义了 log 方法，但仅此而已，这意味着我可以完全改变执行日志记录的方式，而不必改变服务对象以外的任何东西 最后一个好处是，我可以从应用程序的其余功能中隔离并单独测试日志记录功能 简而言之，服务允许你在不破坏 MVC 模式的情况下构建通用功能 —— 随着项目规模和复杂性的增长，这变得越来越重要。而且，正如你将了解到的，有些重要的 AngularJS 功能是通过一组内置服务提供的

使用 Service 方法 使用 module.service 方法也可以创建服务对象，但其中稍有不同。当 AngularJS 需要满足由 factory 方法定义的服务的依赖关系时，它只使用工厂函数返回的对象；但对于使用 service 方法定义的服务，AngularJS 使用工厂函数返回的对象作为构造函数， 使用 JavaScript new 关键字来创建服务对象 关键字 new 在 JavaScript 开发中使用并不广泛，使用它时容易导致混淆，因为大多数开发者熟悉的语言是基于类的继承，比如 C# 和 Java，而不 JavaScript 是基于原型的继承。我更新了 services.js 文件

```javascript
var baseLogger = function () {
    this.messageCount = 0;
    this.log = function (msg) {
        console.log(this.msgType + ": " + (this.messageCount++) + " " + msg);
    }
};

var debugLogger = function () { };
debugLogger.prototype = new baseLogger();
debugLogger.prototype.msgType = "Debug";

var errorLogger = function () { };
errorLogger.prototype = new baseLogger();
errorLogger.prototype.msgType = "Error";

angular.module("customServices", [])
    .service("logService", debugLogger)
    .service("errorService", errorLogger);
```

我首先做的是创建了构造函数，它实质上是为了定义将在新的对象上被定义的功能的模板。我的构造函数叫做 baseLogger，它定义了 messageCount 变量和 log 方法。log 方法将 msgType 未定义变量传入 console.log 方法，当我使用 baseLogger 构造函数作为模板时会设置该变量 下一步我要做的是创建新的构造函数 debugLogger，并将它的 prototype 设置为使用 new 关键字和 baseLogger 关键字创建的新对象。new 关键字创建新的对象并将属性和由构造函数所定义的函数复制到新对象中。prototype 属性用于更改模板。我调用它一次，以确保 debugLogger 构造器从 baseLogger 构造器继承属性和方法，然后重新定义 msgType 属性 使用构造函数的关键在于，你可以在模板中定义一次功能，然后把它应用于多个对象。为此，我又创建了名为 errorLogger 的构造函数。我只定义了 messageCount 属性和 log 方法一次，但是它适用于由 debugLogger 和 errorLogger 构造函数创建的对象。要完成示例，我将 debugLogger 和 errorLogger 构造函数注册为服务

```javascript
...
angular.module("customServices", [])
    .service("logService", debugLogger)
    .service("errorService", errorLogger);
...
```

注意，我将构造器传递给了 service 方法。AngularJS 将调用 new 方法创建服务对象。为了测试新的服务，只需要载入 example.html 文件到浏览器中。我不需要对控制器和指令做任何改动。如果你单击按钮将看到如下输出

```txt
Debug: 0 Total click count: 0
Debug: 1 Button click: London
Debug: 2 Total click count: 1
Debug: 3 Button click: New York
Debug: 4 Total click count: 2
```

正如我所说，new 关键字没有被广泛使用，基于原型的继承可能会引起混淆。但在这样做的好处是我在一处定义了 log 方法，但可以在两个服务中使用。缺点是代码啰嗦，许多 JavaScript 程序员不能很轻易的理解 你不一定要在 service 方法中使用原型。你可以把它看作工厂方法，如果你刚刚接触 AngularJS，我建议你这样做

```javascript
angular.module("customServices", [])
    .service("logService", function () {
        return {
            messageCount: 0,
            log: function (msg) {
                console.log("Debug: " + (this.messageCount++) + " " + msg);
            }
        };
    });
```

这不是很灵活，AngularJS 仍然会在幕后使用 new 关键字，总体效果是让 service 方法作为 factory 方法的替代，但它的名称更直接了当

使用 provider 方法 module.provider 方法可以让你更好地控制创建或配置服务对象的方式

```javascript
angular.module("customServices", [])
    .provider("logService", function () {
        return {
            $get: function () {
                return {
                    messageCount: 0,
                    log: function (msg) {
                        console.log("(LOG + " + this.messageCount++ + ") " + msg);
                    }
                };
            }
        }
    });
```

provider 方法的参数是服务的名称和工厂函数。工厂函数必须返回提供器对象，并在其中定义 $get 方法，它可以返回服务对象 需要该服务时，AngularJS 将调用 factory 方法获得提供器对象，然后调用 $get 方法获得服务对象。使用 provider 方法并没有改变服务使用方式，这意味着在该示例中我无需对控制器和指令做任何改变 使用 provider 方法的优点是你可以为 provider 方法添加功能，该方法可用于配置服务对象

```javascript
angular.module("customServices", [])
    .provider("logService", function () {
        var counter = true;
        var debug = true;
        return {
            messageCounterEnabled: function (setting) {
                if (angular.isDefined(setting)) {
                    counter = setting;
                    return this;
                } else {
                    return counter;
                }
            },
            debugEnabled: function (setting) {
                if (angular.isDefined(setting)) {
                    debug = setting;
                    return this;
                } else {
                    return debug;
                }
            },
            $get: function () {
                return {
                    messageCount: 0,
                    log: function (msg) {
                        if (debug) {
                            console.log("(LOG"
                                + (counter ? " + " + this.messageCount++ + ") " : ") ")
                                + msg);
                        }
                    }
                };
            }
        }
    });
```

我定义了两个配置变量 counter 和 debug，它们被用于控制 log 方法输出。我通过调用两个函数 messageCounterEnabled 和 debugEnabled 暴露这些变量，并添加它们到提供器对象中。提供器对象方法的约定是在它们提供参数时用于设置配置，在它们没有参数时用于查询配置。当设置配置时，约定是返回提供器对象作为方法的结果，以便允许将多个配置调用链接在一起 AngularJS 使用服务名称和单词 Provider 来使提供器对象可用于依赖注入，对于示例，可以通过声明对 logServiceProvider 的依赖来获取提供器对象。获取和使用提供器对象的最常见方式是在传入 module.config 方法的函数中。当 AngularJS 加载应用程序中的所有模块时该函数将被执行

```html
...
<script>
    angular.module("exampleApp", ["customDirectives", "customServices"])
        .config(function (logServiceProvider) {
            logServiceProvider.debugEnabled(true).messageCounterEnabled(false);
        })
        .controller("defaultCtrl", function ($scope, logService) {
            $scope.data = {
                cities: ["London", "New York", "Paris"],
                totalClicks: 0
            };
            $scope.$watch('data.totalClicks', function (newVal) {
                logService.log("Total click count: " + newVal);
            });
        });
</script>
...
```

你并非一定要使用 module.config 方法来配置服务，但这样做是明智的。请记住，服务对象是单例的，一旦你对已启动的应用程序做出任何改变，所有正在使用该服务的组件都将受到影响 (这经常会导致意外行为)

## 使用内置模块和服务

AngularJS 提供了一整套可用于执行常见任务的服务

内置 AngularJS 服务

| 名称              | 描述                                                   |
| :---------------- | :----------------------------------------------------- |
| $anchorScroll     | 滚动浏览器窗口至指定的锚点                             |
| $animate          | 使转换内容动画化                                       |
| $compile          | 处理一个 HTML 片段以创建可被用于生成内容的函数         |
| $controller       | 实例化控制器的 $injector 服务的包装器                  |
| $document         | 提供包含 DOM window.document 对象的 jqLite 对象        |
| $exceptionHandler | 处理应用程序中出现的异常                               |
| $filter           | 提供对过滤器的访问                                     |
| $http             | 创建和管理 Ajax 请求                                   |
| $injector         | 创建 AngularJS 组件的实例                              |
| $interpolate      | 处理包含绑定表达式的字符串，以创建可用于生成内容的函数 |
| $interval         | 提供 window.setInterval 函数的增强封装                 |
| $location         | 提供浏览器 location 对象的封装                         |
| $log              | 提供全局 console 对象的封装                            |
| $parse            | 处理表达式并创建可用于生成内容的函数                   |
| $provide          | 实现由 module 公开的许多方法                           |
| $q                | 提供延迟对象或承诺                                     |
| $resource         | 提供对 RESTful API 的支持                              |
| $rootElement      | 提供对 DOM 中根元素的访问                              |
| $rootScope        | 提供对根作用域的访问                                   |
| $route            | 对根据浏览器的 URL 路径更改视图内容提供支持            |
| $routeParams      | 提供有关 URL 路由的信息                                |
| $sanitize         | 将危险的 HTML 字符替换为与之相等的安全显示符           |
| $sce              | 从 HTML 字符串中删除危险元素和属性，以使其安全显示     |
| $swipe            | 识别滑动手势                                           |
| $timeout          | 提供 window.setTimeout 函数的增强封装                  |
| $window           | 提供对 DOM window 对象的引用                           |

# 第 19 章 针对全局对象、错误和表达式的服务

## 准备示例项目

## 访问 DOM API 全局对象

最简单的内置服务以与 AngularJS 的其余部分或 jqLite 一致的方式暴露浏览器 DOM API 的各个方面

暴露 DOM API 功能的服务

| 名称          | 描述                                            |
| :------------ | :---------------------------------------------- |
| $anchorScroll | 滚动浏览器窗口至指定的锚点                      |
| $document     | 提供包含 DOM window.document 对象的 jqLite 对象 |
| $interval     | 提供 window.setInterval 函数的增强封装          |
| $location     | 提供浏览器 location 对象的封装                  |
| $log          | 提供全局 console 对象的封装                     |
| $timeout      | 提供 window.setTimeout 函数的增强封装           |
| $window       | 提供对 DOM window 对象的引用                    |

为什么以及何时使用全局对象服务 AngularJS 包含这些服务的主要原因是使测试更容易。单元测试的一个重要方面是需要隔离一小段代码并测试其行为，而不测试它所依赖的组件 —— 实质上是创建一个焦点测试 (focused test)。DOM API 通过 document 和 window 等全局对象暴露功能。这些对象使得很难在不测试浏览器实现其全局对象的方式的情况下隔离单元测试的代码。使用诸如 $document 之类的服务允许在不直接使用 DOM API 全局对象的情况下编写 AngularJS 代码，并允许使用 AngularJS 测试服务来配置特定的测试场景

访问 window 对象 $window 服务使用起来很简单，声明对它的依赖将为你提供一个对象，它是对全局 window 对象的封装。AngularJS 不会增强或更改此全局对象提供的 API，你可以像访问 DOM API 一样访问 window 对象定义的方法。在 angularjs 文件夹中添加一个名为 domApi.html 的 HTML 文件

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>DOM API Services</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope, $window) {
                $scope.displayAlert = function (msg) {
                    $window.alert(msg);
                }
            });
    </script>
</head>

<body ng-controller="defaultCtrl" class="well">
    <button class="btn btn-primary" ng-click="displayAlert('Clicked!')">Click Me</button>
</body>

</html>
```

我已经声明了对 $window 服务的依赖，以便定义调用 alert 方法的控制器行为。单击按钮元素时，ng-click 指令会调用该行为

访问 document 对象 $document 服务是一个包含 DOM API 全局 window.document 对象的 jqLite 对象。由于该服务通过 jqLite 呈现，你可以使用之前介绍的方法来查询 DOM

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>DOM API Services</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope, $window, $document) {
                $document.find("button").on("click", function (event) {
                    $window.alert(event.target.innerText);
                });
            });
    </script>
</head>

<body ng-controller="defaultCtrl" class="well">
    <button class="btn btn-primary">Click Me</button>
</body>

</html>
```

使用 interval 和 timeout $interval 和 $timeout 服务提供访问 window.setInterval 和 window.setTimeout 函数的入口，以及一些增强功能，使其更好地与 AngularJS 协作

被 $interval 和 $timeout 服务使用的参数

| 参数        | 描述                                                     |
| :---------- | :------------------------------------------------------- |
| fn          | 定时执行的函数                                           |
| delay       | fn 被执行前的毫秒数                                      |
| count       | 循环重复的次数，仅限于 $interval。默认是 0，意味没有限制 |
| invokeApply | 当设置为 true 时，fn 将在 scope.$apply 方法内执行        |

这些函数以同样的方式工作，因为它们均在指定时间周期中延迟执行函数。不同的则是 $timeout 服务延迟和执行函数仅有一次，而 $interval 是周期性的 $timeout：延期执行 $interval：定期调用

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>DOM API Services</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope, $interval) {
                $interval(function () {
                    $scope.time = new Date().toTimeString();
                }, 2000);
            });
    </script>
</head>

<body ng-controller="defaultCtrl">
    <div class="panel panel-default">
        <h4 class="panel-heading">Time</h4>
        <div class="panel-body">
            The time is: {{time}}
        </div>
    </div>
</body>

</html>
```

提示： 传入这些服务的函数所抛出的异常将被传入 $exceptionHandler 服务

我使用 $interval 服务执行函数，该函数会每两秒将当前次数更新到作用域变量中。我省略了最后的两个参数，这意味着使用了默认值

访问 URL $location 服务是对全局 window 对象的 localtion 属性的封装，提供了访问当前 URL 的入口。$location 服务操作第一个 #后面的 URL 部分，这意味着它可以用于当前文档的导航，而不导航到新文件。这可能看起来有点奇怪，但你通常不会想要将用户导航出主文档，因为这会卸载你的 Web 应用程序并丢弃你的数据和状态。考虑以下 URL，这是 AngularJS 应用程序的典型

```txt
http://mydomain.com/app.html#!/cities/london?select=hotels#north
```

$location 服务允许你更改 URL 中我强调的部分，它通过三个组件调用：path (路径)、search (查询字符串) 和 hash (哈希)。这些是引用 #! 之前的 URL 部分的所有术语，AngularJS 在 #之后重新创建一个完整的 URL，以便我们可以在应用程序中导航

$location 服务所定义的方法

| 名称                          | 描述                                                         |
| :---------------------------- | :----------------------------------------------------------- |
| absUrl()                      | 返回当前文档的完整 URL 包括第一个 #! 之前的部分              |
| hash() hash(target)           | 获取或设置 URL 的 hash                                       |
| host()                        | 返回完整 URL 的主机名称                                      |
| path() path(target)           | 获取或设置完整的 URL 路径                                    |
| port()                        | 返回端口号                                                   |
| protocol()                    | 返回完整的 URL 的协议                                        |
| replace()                     | 在 HTML5 浏览器上调用时，URL 中的更改将替换浏览器历史记录中的最新条目，而不是创建新条目 |
| search() search(term, params) | 获取或设置搜索项                                             |
| url() url(target)             | 获取或设置路径、查询字符串和 hash                            |

除了这些方法，$location 服务定义了两个事件，当 URL 改变时你可以使用它们接收通知，无论是由于用户交互还是以编程方式。这些事件的处理程序在作用域上使用 $on 方法进行注册，并传递一个事件对象、新 URL 以及旧 URL

$location 服务所定义的事件

| 名称                   | 描述                                                         |
| :--------------------- | :----------------------------------------------------------- |
| $locationChangeStart   | URL 被改变前触发，你可以在 event 对象中调用 preventDefault 方法来阻止 URL 改变 |
| $locationChangeSuccess | URL 被改变后触发                                             |

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>DOM API Services</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope, $location) {
                $scope.$on("$locationChangeSuccess", function (event, newUrl) {
                    $scope.url = newUrl;
                });
                $scope.setUrl = function (component) {
                    switch (component) {
                        case "reset":
                            $location.path("");
                            $location.hash("");
                            $location.search("");
                            break;
                        case "path":
                            $location.path("/cities/london");
                            break;
                        case "hash":
                            $location.hash("north");
                            break;
                        case "search":
                            $location.search("select", "hotels");
                            break;
                        case "url":
                            $location.url("/cities/london?select=hotels#north");
                            break;
                    }
                }
            });
    </script>
</head>

<body ng-controller="defaultCtrl">
    <div class="panel panel-default">
        <h4 class="panel-heading">URL</h4>
        <div class="panel-body">
            <p>The URL is: {{url}}</p>
            <div class="btn-group ">
                <button class="btn btn-primary" ng-click="setUrl('reset')">Reset</button>
                <button class="btn btn-primary" ng-click="setUrl('path')">Path</button>
                <button class="btn btn-primary" ng-click="setUrl('hash')">Hash</button>
                <button class="btn btn-primary" ng-click="setUrl('search')">Search</button>
                <button class="btn btn-primary" ng-click="setUrl('url')">URL</button>
            </div>
        </div>
    </div>
</body>

</html>
```

此示例包含的按钮允许你设置 URL 的四个可写组件 path、hash、search 和 url。你可以看到每个组件的更改方式以及如何更改，因为更改发生在 #! 之后，所以导航不会导致浏览器加载新文档

1. 使用 HTML5 MURLs

   前面我向你展示的标准 URL 格式是杂乱的，因为应用程序本质上试图复制 #! 之后的 URL，使得浏览器不载入新 HTML 文档 HTML5 的 History API 提供了更优雅的方式来处理这点，并且能改变 URL，而不导致文档重载。所有主流浏览器都支持 History API，而且在 AngularJS 应用程序中它的支持可以通过 $location 服务的提供器对象 $locationProvider 启用

   要使用 HTML5 特性，可以通过调用 html5Mode 方法并将 true 作为参数，具有改变 $location 服务的方法所能操作的 URL 部分的效果

   依次按下按钮 URL 的变化

   | 名称   | 效果                                                         |
   | :----- | :----------------------------------------------------------- |
   | Reset  | `http://localhost:5000/domApi.html#!/`                       |
   | Path   | `http://localhost:5000/domApi.html#!/cities/london`          |
   | Hash   | `http://localhost:5000/domApi.html#!/cities/london#north`    |
   | Search | `http://localhost:5000/domApi.html#!/cities/london?select=hotels#north` |
   | URL    | `http://localhost:5000/domApi.html#!/cities/london?select=hotels#north` |

   这是一个更清晰的 URL 结构，不过它依靠 HTML5 特性，在旧浏览器中是不可用的，而且如果使用 $location 的 HTML5 模式，那么你的应用程序在不支持 History API 的浏览器中将无法工作

2. 滚动到 $location Hash 的位置

   $anchorScroll 服务滚动浏览器窗口以显示 id 对应于 $location.hash 方法的返回值的元素。$anchorScroll 服务使用方便，你不必访问全局文档对象以定位要显示的元素或执行滚动的全局窗口对象

```html
   <!DOCTYPE html>
   <html ng-app="exampleApp">

   <head>
       <title>DOM API Services</title>
       <script src="angular.js"></script>
       <link href="bootstrap.css" rel="stylesheet" />
       <link href="bootstrap-theme.css" rel="stylesheet" />
       <script>
           angular.module("exampleApp", [])
               .controller("defaultCtrl", function ($scope, $location, $anchorScroll) {
                   $scope.itemCount = 50;
                   $scope.items = [];
                   for (var i = 0; i < $scope.itemCount; i++) {
                       $scope.items[i] = "Item " + i;
                   }

                   $scope.show = function (id) {
                       $location.hash(id);
                   }
               });
       </script>
   </head>

   <body ng-controller="defaultCtrl">
       <div class="panel panel-default">
           <h4 class="panel-heading">URL</h4>
           <div class="panel-body">
               <p id="top">This is the top</p>
               <button class="btn btn-primary" ng-click="show('bottom')">Go to Bottom</button>
               <p>
                   <ul>
                       <li ng-repeat="item in items">{{item}}</li>
                   </ul>
               </p>
               <p id="bottom">This is the bottom</p>
               <button class="btn btn-primary" ng-click="show('top')">Go to Top</button>
           </div>
       </div>
   </body>

   </html>
```

在该示例中，我使用 ng-repeat 指令生成了一组 li 元素，使得在屏幕中无法同时看到 id 为 top 和 bottom 的 p 元素。button 元素使用了 ng-click 指令调用控制器行为，行为 show 接受元素 id 作为参数并使用其调用 $location.hash 方法 $anchorScroll 服务很不寻常，因为你不必使用服务对象，你只是声明一个依赖。创建服务对象时，它会开始监视 $location.hash 值，并在更改时自动滚动 你可以通过服务提供器禁用自动滚动，这允许你调用 $anchorScroll 服务作为函数来选择性地滚动

```html
   ...
   <script>
       angular.module("exampleApp", [])
           .config(function ($anchorScrollProvider) {
               $anchorScrollProvider.disableAutoScrolling();
           })
           .controller("defaultCtrl", function ($scope, $location, $anchorScroll) {
               $scope.itemCount = 50;
               $scope.items = [];
               for (var i = 0; i < $scope.itemCount; i++) {
                   $scope.items[i] = "Item " + i;
               }

               $scope.show = function (id) {
                   $location.hash(id);

                   if (id == "bottom") {
                       $anchorScroll();
                   }
               }
           });
   </script>
   ...
```

我在 module.config 方法中禁用自动滚动 我做的就是调用调用 $anchorScrollProvider 上的 disableAutoScrolling 方法。改变 $location.hash 的值将不再触发自动滚动。要明确地触发滚动，就要调用 $anchorScroll 服务函数。我在传到 show 方法的参数为 bottom 时调用了 $anchorScroll 服务函数

执行日志 我在之前构建了我自己的简单日志服务，但 AngularJS 提供了 $log 服务，它是对全局 console 对象的封装。$log 服务定义了 debug、error、info、log 和 warn 方法，与 console 对象定义的那些方法一致。你不一定使用 $log 服务，但它能使单元测试更容易。使用 $log 服务更新自定义日志服务

```javascript
angular.module("customServices", [])
    .provider("logService", function () {
        var counter = true;
        var debug = true;
        return {
            messageCounterEnabled: function (setting) {
                if (angular.isDefined(setting)) {
                    counter = setting;
                    return this;
                } else {
                    return counter;
                }
            },
            debugEnabled: function (setting) {
                if (angular.isDefined(setting)) {
                    debug = setting;
                    return this;
                } else {
                    return debug;
                }
            },
            $get: function ($log) {
                return {
                    messageCount: 0,
                    log: function (msg) {
                        if (debug) {
                            $log.log("(LOG"
                                + (counter ? " + " + this.messageCount++ + ") " : ") ")
                                + msg);
                        }
                    }
                };
            }
        }
    });
```

注意我在 get 函数上声明了对于 $log 服务的依赖。这是使用 provider 创建服务的一个特性，使用 service 和 factory 时不会遇到这个问题

```javascript
angular.module("customServices", [])
    .factory("logService", function ($log) {
        var messageCount = 0;
        return {
            log: function (msg) {
                $log.log("(LOG + " + this.messageCount++ + ") " + msg);
            }
        };
    });
```

提示： $log 服务的默认行为不是调用 dubug 方法。你可以通过设置 $logProvider.debugEnabled 属性为 true 启用

## 异常处理

AngularJS 使用 $exceptionHandler 服务处理任何在应用程序执行时出现的异常。默认实现是调用 $log 服务定义的 error 方法。其中调用了全局的 console.error 方法

为什么以及何时使用异常服务 我认为异常分为两大类。第一类包括那些在编码和测试期间产生的，这是自然开发周期的一部分，帮助你塑造你正在构建的应用程序。另一类是那些在你将应用程序发布之后用户所看到的 处理这些异常的方式是不同的，但要考虑在不同情况下捕获异常的一致方法，以便可以对它们进行响应，并且记录以供将来分析。这就是 $exceptionHandler 服务的用武之地。默认情况下，它只是将异常的详细信息写入 JavaScript 控制台并允许应用程序继续运行 (如果可能的话)，但是它也可以用于执行更复杂的任务，例如在发布后出现问题时，你需要保持用户满意和顺利的进行操作

提示： $exceptionHandler 服务仅处理未捕获的异常。你可以使用 JavaScript 的 try…catch 块来捕获异常

在 angularjs 文件夹中添加一个名为 exceptions.html 的新文件，来演示 $exceptionHandler 服务

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Exceptions</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope) {
                $scope.throwEx = function () {
                    throw new Error("Triggered Exception");
                }
            });
    </script>
</head>

<body ng-controller="defaultCtrl">
    <div class="panel panel-default">
        <div class="panel-body">
            <button class="btn btn-primary" ng-click="throwEx()">Throw Exception</button>
        </div>
    </div>
</body>

</html>
```

直接使用异常服务 尽管 AngularJS 会自动传入异常到 $exceptionHandler 服务，但是你也可以提供更多的上下文，在你的代码中直接使用该服务

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Exceptions</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope, $exceptionHandler) {
                $scope.throwEx = function () {
                    try {
                        throw new Error("Triggered Exception");
                    } catch (ex) {
                        $exceptionHandler(ex.message, "Button Click");
                    }
                }
            });
    </script>
</head>

<body ng-controller="defaultCtrl">
    <div class="panel panel-default">
        <div class="panel-body">
            <button class="btn btn-primary" ng-click="throwEx()">Throw Exception</button>
        </div>
    </div>
</body>

</html>
```

$exceptionHandler 服务对象函数有两个参数：异常和用于描述异常的可选字符串

实现自定义异常处理器 在前面我曾经警告过你重名问题，避免覆盖那些已经由 AngularJS 或其他你可能会用的包所定义的服务。在该部分中，为了定义自定义异常处理策略，我将故意覆盖 AngularJS 实现的 $exceptionHandler 服务

```html
...
<script>
    angular.module("exampleApp", [])
        .controller("defaultCtrl", function ($scope, $exceptionHandler) {
            $scope.throwEx = function () {
                try {
                    throw new Error("Triggered Exception");
                } catch (ex) {
                    $exceptionHandler(ex.message, "Button Click");
                }
            }
        })
        .factory("$exceptionHandler", function ($log) {
            return function (exception, cause) {
                $log.error("Message: " + exception.message + " (Cause: " + cause + ")");
            }
        });
</script>
...
```

我使用了之前介绍的 factory 方法，重定义了 $exceptionHandler 服务对象，如此一来，它更好地格式化了从异常和原因中而来的信息

提示： 你可以用许多更复杂的行为替换默认行为，但我劝你慎重。错误处理代码需要无懈可击，因为如果它含有错误你将无法在应用程序中看到真实问题。最简单的错误处理通常是最好的

## 处理危险数据

在 Web 应用程序中普遍的攻击是，试图让它们显示精心构造的数据去愚弄浏览器或另一个用户。这通常涉及 JavaScript 代码，但攻击也可能涉及 CSS 样式。攻击类型是无穷的，但一种常见的方式是将恶意代内容通过表单注入到应用程序，因此回显给攻击者或者提交给其他用户。AngularJS 有一些不错的内置工具为处理危险数据提供服务

操作危险数据的服务

| 名称      | 描述                                   |
| :-------- | :------------------------------------- |
| $sce      | 从 HTML 中删除危险元素和属性           |
| $sanitize | 用转义字符替换 HTML 字符串中的危险字符 |

为什么以及何时使用危险数据服务 AngularJS 有很好的默认策略来处理有潜在危险的内容，但是当你需要更多的灵活性时，你需要直接使用我在本节中描述的服务。当你编写允许用户生成 HTML 内容的应用程序或处理遗留系统生成的内容时，可能需要这样做

显示危险数据 AngularJS 使用称为严格上下文转义 (strict contextual escaping，SCE) 的功能来防止通过数据绑定表达不安全的值。 默认情况下启用此功能，为了演示它的工作原理，我在 angularjs 文件夹中添加了一个名为 htmlData.html 的新文件

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>SCE</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope) {
                $scope.htmlData = "<p>This is <b onmouseover=alert('Attack!')>dangerous</b> data</p>";
            });
    </script>
</head>

<body ng-controller="defaultCtrl">
    <div class="well">
        <p><input class="form-control" ng-model="htmlData" /></p>
        <p>{{htmlData}}</p>
    </div>
</body>

</html>
```

控制器的作用域在本例中包含了 input 元素所绑定的属性 htmlData，那是由使用内联绑定的表达式所显示的。我已经将属性设置为危险的 HTML 字符串，这样你就不用在 input 元素 中手工输入文本。但是要注意的是，攻击者会视图让浏览器运行一些从 input 元素中来的不属于应用程序的 JavaScript 代码。在这个例子中，显示了警告对话框，但是我所见过的大多数攻击非常疯狂，攻击者试图让应用程序为其他用户显示它们输入的 HTML 为了减少风险，AngularJS 自动将危险符号 (像 HTML 内容里的 < 和>) 替换为能安全显示的转义字符

提示： 转义内容的过程不会影响 scope 中原有的值，只有被绑定显示的数据会受影响。这意味着你可以继续暗中处理 HTML 数据并允许 AngularJS 安全地在浏览器中呈现它

对于大多数应用程序，AngularJS 的默认行为正是需要的，从被显示的数据中预防危险。如果你需要显示未被转义的 HTML 内容，也有一系列技术可以实现

使用不安全绑定 第一个技术就是使用 ng-bind-html 指令，它允许你指定某个数据的值是可信的，并应该不被转义的呈现出来。ng-bind-html 指令依赖于 ngSanitize 模块，主 AngularJS 库没有包括它。访问 angularjs.org 网站，单击 "Download" 按钮，然后单击 "Extras"。将会显示一个 AngularJS 适用的文件列表，单击 "angular-sanitize.js" 链接然后将 angular-sanitize.js 文件保存到本地 angularjs 文件夹下。添加 script 元素以引用 angular-sanitize.js 文件

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>SCE</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script src="angular-sanitize.js"></script>
    <script>
        angular.module("exampleApp", ["ngSanitize"])
            .controller("defaultCtrl", function ($scope) {
                $scope.htmlData = "<p>This is <b onmouseover=alert('Attack!')>dangerous</b> data</p>";
            });
    </script>
</head>

<body ng-controller="defaultCtrl">
    <div class="well">
        <p><input class="form-control" ng-model="htmlData" /></p>
        <p ng-bind-html="htmlData"></p>
    </div>
</body>

</html>
```

虽然内容显示在 HTML 中，但是我在 b 元素上使用的 onmouseover 事件处理器不工作了，这是因为在这里还有一个安全措施，从 HTML 字符串中剔除了危险的元素和属性。这里 htmlData 的值被处理成了

```html
<p>This is <b>dangerous</b> data</p>
```

该过程删除 script 和 css 元素，内联 JavaScript 事件处理器和样式属性以及可能造成问题的任何东西。该过程称为清理，由 ngSanitize 模块中的 $sanitize 服务提供。服务由 ng-bind-html 指令自动使用，这是我必须将 ngSanitize 模块添加到示例的原因

立即清理 依靠 AngularJS 你可以为其呈现的值使用 $sanitize 服务，除非你专门禁用安全措施。无论如何，你可能想更进一步清理你应用程序中存储的值。让呈现的值安全是不错的实践。但是如果你将不安全的 HTML 存储在数据库中，你的应用程序将成为潜在的被攻击对象。而且无法受到 AngularJS 的保护

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>SCE</title>
    <script src="angular.js"></script>
    <script src="angular-sanitize.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", ["ngSanitize"])
            .controller("defaultCtrl", function ($scope, $sanitize) {
                $scope.dangerousData = "<p>This is <b onmouseover=alert('Attack!')>dangerous</b> data</p>";

                $scope.$watch("dangerousData", function (newValue) {
                    $scope.htmlData = $sanitize(newValue);
                });
            });
    </script>
</head>

<body ng-controller="defaultCtrl">
    <div class="well">
        <p><input class="form-control" ng-model="dangerousData" /></p>
        <p ng-bind="htmlData"></p>
    </div>
</body>

</html>
```

我在 input 元素上改变了 ng-model 指令，设置为暗中定义的变量 dangerousData。在控制器中，我使用作用域监听器函数来监听 dangerousData 属性的改变，当有新值时使用 $sanitize 服务对象处理该值。$sanitize 对象是一个函数，它能去除潜在的危险值并返回处理后的结果

明确信任的数据 有些情况下，你可能需要显示没有转义或清理的危险内容。你可以使用 $sce 服务声明内容是可信的

警告： 我在无数的 Web 应用程序项目上工作过许多年，需要我显示不可信的源数据值的次数依旧只是个位数。在每个我工作过的项目上，我一直在尽力安全转义每一条应用程序显示的数据，特别是由用户提供的数据。底线是：不要乱用这些东西，除非你有真正的强需求

$sce 服务对象定义了 trustAsHtml 方法，该方法返回一个值，该值将在应用 SCE 进程时显示

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>SCE</title>
    <script src="angular.js"></script>
    <script src="angular-sanitize.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", ["ngSanitize"])
            .controller("defaultCtrl", function ($scope, $sce) {
                $scope.dangerousData = "<p>This is <b onmouseover=alert('Attack!')>dangerous</b> data</p>";

                $scope.$watch("dangerousData", function (newValue) {
                    $scope.htmlData = $sce.trustAsHtml(newValue);
                });
            });
    </script>
</head>

<body ng-controller="defaultCtrl">
    <div class="well">
        <p><input class="form-control" ng-model="dangerousData" /></p>
        <p ng-bind-html="htmlData"></p>
    </div>
</body>

</html>
```

我用监听器函数来设置 htmlData 属性的值为 $sce.trustAsHtml 方法返回的结果。我使用 ng-bind-html 指令以作为 HTML 显示该值，而不是被转义的文本

## 使用 AngularJS 表达式和指令

AngularJS 提供一组服务，用于处理 AngularJS 内容和绑定的表达式。这些服务将内容处理为函数，你可以在你的应用程序中调用这些生成的内容，范围葱姜丹的表达式到 HTML 片段，包括绑定和指令

操作 AngularJS 表达式的服务

| 名称         | 描述                                                     |
| :----------- | :------------------------------------------------------- |
| $compile     | 将包含绑定和指令的 HTML 片段转换为被调用的函数以生成内容 |
| $interpolate | 将包含内联绑定的字符串转换为被调用的函数以生成内容       |
| $parse       | 将 AngularJS 表达式转换为被调用的函数以生成内容          |

为什么以及何时使用表达式和指令服务 这些服务在编辑指令时很有用，因为它们让你显式控制用于生成和显式内容的过程。在基础指令中你不需要这些服务，但当你陷入那些需要精确管理模板的问题中时，你会发现它们非常重要

转换表达式为函数 $parse 服务使用 AngularJS 表达式作为参数，并将其转换为可使用作用域对象计算表达式的函数。这在自定义指令中很有用，允许通过属性提供表达式并进行计算，而这些指令不需要知道表达式的细节。为了演示 $parse 服务，我在 angularjs 文件夹下添加了一个名为 expressions.html 的新文件

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Expressions</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope) {
                $scope.price = "100.23";
            })
            .directive("evalExpression", function ($parse) {
                return function (scope, element, attrs) {
                    scope.$watch(attrs["evalExpression"], function (newValue) {
                        try {
                            var expressionFn = $parse(scope.expr);
                            var result = expressionFn(scope);
                            if (result == undefined) {
                                result = "No result";
                            }
                        } catch (err) {
                            result = "Cannot evaluate expression";
                        }
                        element.text(result);
                    });
                }
            });
    </script>
</head>

<body ng-controller="defaultCtrl">
    <div class="well">
        <p><input class="form-control" ng-model="expr" /></p>
        <div>
            Result: <span eval-expression="expr"></span>
        </div>
    </div>
</body>

</html>
```

此示例包含一个名为 evalExpression 的指令，该指令配置了一个 scope 属性，该属性包含将使用 $parse 服务计算的表达式。我在 span 元素上使用了指令，并使用名为 expr 的动态作用域属性配置它，它绑定在 input 元素上，允许输入表达式并动态求值 为了有数据可供使用，我使用控制器添加了名为 price 的作用域属性，该属性设置为数值。在 input 元素中输入 price | currency 可以看到效果：price 属性被 currency 滤器处理，其结果做为应用指令的 span 元素的文本内容显式 你通常无法奢望你的用户在应用程序中输入 AngularJS 表达式，但我想演示你能深入到 AngularJS 内部何种程度，并且处理变化的表达式，而不仅仅是改变数值 使用 $parse 服务的过程很简单，服务对象是个函数，它唯一的参数是将被计算的表达式，并且返回在准备执行计算时所使用的函数。换言之 $parse 服务不计算表达式，它是一个完成实际工作的工厂

```javascript
...
var expressionFn = $parse(scope.expr);
...
```

我将表达式传入 $parse 函数并将返回的函数赋给名为 expressionFn 的变量，然后我调用该函数，为表达式传入作用域作为数据值来源

```javascript
...
var result = expressionFn(scope);
...
```

你是必须使用作用域作为表达式的值的来源，但通常情况下都这么做。调用该函数的结果是求得表达式的值。我的例子中这种情况是在 price 属性的值被 currency 过滤器处理后 当你求用户所提供的表达式的值时，你需要处理表达式无效时的可能性 你还必须在计算表达式时做好处理未定义结果的准备，当表达式引用不存在的数据值时。AngularJS 绑定指令自动显示 undefined 值为空字符串，但直接与 $parse 服务一起使用时，你需要自己处理

提供本地数据 上一个例子不是 $parse 服务通常的使用方式，因为你无法奢望用户输入表达式。更为常见的方式是在应用程序中为用户提供的数值定义表达式

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Expressions</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope) {
                $scope.dataValue = "100.23";
            })
            .directive("evalExpression", function ($parse) {
                var expressionFn = $parse("total | currency");
                return {
                    scope: {
                        amount: "=amount",
                        tax: "=tax"
                    },
                    link: function (scope, element, attrs) {
                        scope.$watch("amount", function (newValue) {
                            var localData = {
                                total: Number(newValue) + (Number(newValue) * (Number(scope.tax) / 100))
                            }
                            element.text(expressionFn(scope, localData));
                        });
                    }
                }
            });
    </script>
</head>

<body ng-controller="defaultCtrl">
    <div class="well">
        <p><input class="form-control" ng-model="dataValue" /></p>
        <div>
            Result: <span eval-expression amount="dataValue" tax="10"></span>
        </div>
    </div>
</body>

</html>
```

在这个例子中，我定义了各种指令。表达式在指令工厂函数中被 $parse 服务解析为函数。我仅解析一次表达式，然后在每次 amount 属性改变时调用该函数求得表达式的值 表达式包括 total 属性的引用，它不在作用域中，实际上是在监听器函数中被动态计算了，使用两个属性绑定了独立作用域

```javascript
...
var localData = {
    total: Number(newValue) + (Number(newValue) * (Number(scope.tax) / 100))
}
element.text(expressionFn(scope, localData));
...
```

要注意的关键点是，我将一个包括 total 属性的对象作为参数传入表达式函数。这补充了从作用域中获取的任何值，并为表达式中的 total 的引用提供了值

插入字符串 $interpolate 服务和它的提供器 $interpolateProvider，用于配置 AngularJS 执行插值的方式，这是将表达式插入字符串的过程。$interpolate 服务比 $parse 更灵活，因为它可以处理包含表达式而是只有含有表达式的字符串

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Expressions</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope) {
                $scope.dataValue = "100.23";
            })
            .directive("evalExpression", function ($interpolate) {
                var interpolationFn
                    = $interpolate("The total is: {{amount | currency}} (including tax)");
                return {
                    scope: {
                        amount: "=amount",
                        tax: "=tax"
                    },
                    link: function (scope, element, attrs) {
                        scope.$watch("amount", function (newValue) {
                            var localData = {
                                total: Number(newValue) + (Number(newValue) * (Number(scope.tax) / 100))
                            }
                            element.text(interpolationFn(scope));
                        });
                    }
                }
            });
    </script>
</head>

<body ng-controller="defaultCtrl">
    <div class="well">
        <p><input class="form-control" ng-model="dataValue" /></p>
        <div>
            <span eval-expression amount="dataValue" tax="10"></span>
        </div>
    </div>
</body>

</html>
```

正如这个例子所示，使用 $interpolate 服务比使用 $parse 简单，虽然有一些很重要的差异。最明显的是 $interpolate 服务可以对包含与内联绑定混合的非 AngularJS 内容的字符串进行操作 实际上，表示内联绑定的双括号字符称为插值字符，因为它们与 $interpolate 服务密切相关。 第二个区别是你不能为 $interpolate 服务创建的插值函数提供作用域和局部数据。相反，你必须确保表达式所需的数据值包含在传递给插值函数的对象中

配置 Interpolation AngularJS 并不是唯一使用双括号字符的库，如果你试图混合使用 AngularJS 与另外的库，这可能是个问题。幸运的是，你可以通过 $interpolate 服务的提供器 $interpolateProvider 改变 AngularJS 用于插值的字符

$interpolate 提供器所定义的方法

| 名称                | 描述                       |
| :------------------ | :------------------------- |
| startSymbol(symbol) | 替换开始符号，默认是双括号 |
| endSymbol(symbol)   | 替换结束符号，默认是双括号 |

使用这些方法时你必须小心，因为它们会影响所有 AngularJS 的内插，包括在 HTML 标签中的内联数据绑定

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Expressions</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .config(function ($interpolateProvider) {
                $interpolateProvider.startSymbol("!!");
                $interpolateProvider.endSymbol("!!");
            })
            .controller("defaultCtrl", function ($scope) {
                $scope.dataValue = "100.23";
            })
            .directive("evalExpression", function ($interpolate) {
                var interpolationFn
                    = $interpolate("The total is: !!amount | currency!! (including tax)");
                return {
                    scope: {
                        amount: "=amount",
                        tax: "=tax"
                    },
                    link: function (scope, element, attrs) {
                        scope.$watch("amount", function (newValue) {
                            var localData = {
                                total: Number(newValue) + (Number(newValue) * (Number(scope.tax) / 100))
                            }
                            element.text(interpolationFn(scope));
                        });
                    }
                }
            });
    </script>
</head>

<body ng-controller="defaultCtrl">
    <div class="well">
        <p><input class="form-control" ng-model="dataValue" /></p>
        <div>
            <span eval-expression amount="dataValue" tax="10"></span>
            <p>Original amount: !!dataValue!!</p>
        </div>
    </div>
</body>

</html>
```

我将开始与结束符号改为了！！。我的示例应用程序将不再识别双括号为内联绑定表达式 ngularJS 使用 $interpolate 服务处理常规的内联绑定表达式，由于服务对象是单例的，任何配置的改变都将影响到整个模块

编译内容 $compile 服务处理包含绑定和表达式的 HTML 片段，它将创建一个函数，可以使用该函数从作用域生成内容。这与 $parse 和 $interpolate 服务非常相似，但支持指令

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Expressions</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope) {
                $scope.cities = ["London", "Paris", "New York"];
            })
            .directive("evalExpression", function ($compile) {
                return function (scope, element, attrs) {
                    var content = "<ul><li ng-repeat='city in cities'>{{city}}</li></ul>";
                    var listElem = angular.element(content);
                    var compileFn = $compile(listElem);
                    compileFn(scope);
                    element.append(listElem);
                }
            });
    </script>
</head>

<body ng-controller="defaultCtrl">
    <div class="well">
        <span eval-expression></span>
    </div>
</body>

</html>
```

在该示例中，控制器定义了 cities 数组。指令使用 $compile 服务处理 HTML 片段，该片段使用 ng-repeat 指令和 cities 一起生成 li 元素。我将使用 $compile 服务的过程分解为单个声明 首先，我定义 HTML 片段，并将其包装在 jqLite 对象中

```javascript
...
var content = "<ul><li ng-repeat='city in cities'>{{city}}</li></ul>";
var listElem = angular.element(content);
...
```

我在这个例子中使用了一个简单的片段，但你可以从模板元素中提取更复杂的内容。一步是使用 $compile 服务对象函数来创建将用于生成内容的函数

```javascript
...
var compileFn = $compile(listElem);
...
```

当我有了编译函数，就可以调用它来处理片段中的内容。这将会处理和执行片段包含的表达式和指令，但请注意，调用编译函数并没有返回值

```javascript
...
compileFn(scope);
...
```

相反，内容的处理更新了 jqLite 对象中的元素，这就是我将这些元素添加到 DOM 的原因：

```javascript
...
element.append(listElem);
...
```

效果是 ul 元素，包含了 cities 数组中每个值生成的 li 元素

# 第 20 章 Ajax 和 Promises 服务

## 为什么以及何时使用 Ajax 服务

Ajax 是现代 Web 应用程序的基础，每次你需要和服务器进行通信而不会导致浏览器加载新内容时，你将会需要使用 $http 服务，以产生 Ajax 请求 这就是说如果你使用 RESTful API 的数据，那么你应该使用 $resource 服务，简单来说 $resource 服务提供了比 $http 服务更高一层的 API，可使它更容易执行常规数据操作

## 准备示例项目

在 angularjs 文件夹下新建 productData.json 文件

```json
[
    { "name": "Apples", "category": "Fruit", "price": 1.20, "expiry": 10 },
    { "name": "Bananas", "category": "Fruit", "price": 2.42, "expiry": 7 },
    { "name": "Pears", "category": "Fruit", "price": 2.02, "expiry": 6 },
    { "name": "Tuna", "category": "Fish", "price": 20.45, "expiry": 3 },
    { "name": "Salmon", "category": "Fish", "price": 17.93, "expiry": 2 },
    { "name": "Trout", "category": "Fish", "price": 12.93, "expiry": 4 }
]
```

该文件包括一些产品信息 JSON 是从 JavaScript 中出现的不依赖语言的数据表示方法，而且它不但具有自己的生命，还被多种主流编程语言所支持。XML 曾经是首选的数据交换格式，但 JSON 已经在很大程度上取代了它，因为它更简洁，更容易让开发人员阅读。作为 Web 应用程序的福利，JSON 易于使用 JavaScript 生成和解析，而且符合 JavaScript 语法。AngularJS 自动处理格式化和解析

## 产生 Ajax 请求

$http 服务用于创建和处理 Ajax 请求，这些请求是异步执行的标准 HTTP 请求。Ajax 是现代 Web 应用程序的核心，当用户与应用程序的其余部分交互时，在后台请求内容和数据的能力是创建丰富用户体验的重要方式。为了演示使用 $http 发出 Ajax 请求，在 angularjs 文件夹下添加一个名为 Ajax.html 的文件

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Ajax</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope) {
                $scope.loadData = function () {
                }
            });
    </script>
</head>

<body ng-controller="defaultCtrl">
    <div class="panel panel-default">
        <div class="panel-body">
            <table class="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-hide="products.length">
                        <td colspan="3" class="text-center">No Data</td>
                    </tr>
                    <tr ng-repeat="item in products">
                        <td>{{item.name}}</td>
                        <td>{{item.category}}</td>
                        <td>{{item.price | currency}}</td>
                    </tr>
                </tbody>
            </table>
            <p><button class="btn btn-primary" ng-click="loadData()">Load Data</button></p>
        </div>
    </div>
</body>

</html>
```

该示例包含一个带占位行的表格，该行使用 ng-hide 指令根据名为 products 的作用域数组中的项数控制其可见性。默认情况下未定义数据数组，因此将显示占位行。该表包含我已应用 ng-repeat 指令的行，该指令将在定义数组时为每个产品数据对象生成一行 我添加了一个使用 ng-click 指令来调用名为 loadData 的控制器行为的按钮。该行为当前被定义为一个空函数，但这是我将使用 $http 服务发出 Ajax 请求的地方 我希望在使用 $http 服务前后分别展示该应用程序的代码，以突出显示如何仅添加少量代码就能产生 Ajax 请求并处理响应

```html
...
<script>
    angular.module("exampleApp", [])
        .controller("defaultCtrl", function ($scope, $http) {
            $scope.loadData = function () {
                $http.get("productData.json").then(function (data) {
                    $scope.products = data.data;
                });
            }
        });
</script>
...
```

我声明了对 $http 服务的依赖，并添加了三行代码。作为对照，在 AngularJS 应用程序中使用 Ajax 和在 jQuery 中使用 Ajax 的其中一个差异就是，在 AngularJS 当把从服务器获取到的数据应用到作用域，就会自动刷新作用域的绑定，在应用程序中更新 HTML 元素。而在 jQuery 应用程序中会需要添加处理数据的代码，并且操纵 DOM 显示数据。虽然如此，如果你使用过 jQuery，产生 Ajax 请求的基本机制对你来说将非常相似

产生 Ajax 请求 使用 $http 服务产生 Ajax 请求的方法有两种。第一种是使用 $http 服务定义的快捷方法。另一种是将 $http 服务对象当作函数传入

$http 服务定义的快捷方法

| 方法                    | 描述                                        |
| :---------------------- | :------------------------------------------ |
| get(url, config)        | 对指定的 URL 执行 GET 请求                  |
| post(url, data, config) | 对指定的 URL 执行 POST 请求以提交指定的数据 |
| delete(url, config)     | 对指定的 URL 执行 DELETE 请求               |
| put(url, data, config)  | 对指定的 URL 执行 PUT 请求                  |
| head(url, config)       | 对指定的 URL 执行 HEAD 请求                 |
| jsonp(url, config)      | `http://en.wikipedia.org/wiki/JSONP`        |

你可以发现在前面的示例中，我没有使用配置对象就产生了 GET 请求

```javascript
...
$http.get("productData.json")
...
```

我指定了 productData.json 作为 URL。像这样的 URL 是相对于发起请求的 HTML 文档的，也就是说我不需要硬编码协议、主机名和端口号到该应用程序中

GET 和 POST 选择正确的那个 经验法则是 GET 请求应该被用于所有只读信息的检索，而 POST 请求应该被用于任何改变应用程序状态的操作。GET 请求是安全交互，POST 请求是不安全交互。GET 请求是可寻址的 —— 所有信息都被包含在了 URL 中

接收 Ajax 响应 发出请求只是 Ajax 进程的第一部分，我还必须在准备好后收到响应。Ajax 中的 A 代表异步，这意味着请求在后台执行，并且在将来的某个时间点收到服务器的响应时会通知你 AngularJS 使用名为 promises 的 JavaScript 模式来表示异步操作的结果，例如 Ajax 请求。promise 是一个对象，它定义了可用于注册操作完成时将调用的函数的方法

承诺对象定义的方法

| 名称                 | 描述                           |
| :------------------- | :----------------------------- |
| error(callback)      | 请求成功完成时调用指定的函数   |
| success(callback)    | 请求未成功完成时调用指定的函数 |
| then(success, error) | 注册成功或失败时调用的函数     |

注意： success 和 error 方法已被弃用，现用 then 方法实现其功能

当请求成功时回调函数将收到服务器返回的数据，当请求失败时回调函数将收到引发错误的信息。如果来自服务器的响应是 JSON 数据，则 AngularJS 将解析 JSON 以创建 JavaScript 对象然后将它们传递给回调函数

```javascript
...
$http.get("productData.json").then(function (data) {
    $scope.products = data.data;
});
...
```

1. 了解更多响应细节

   使用承诺对象的 then 方法可以让你把 success 和 error 函数注册在一个方法调用中。更重要的是，它提供了有关服务器响应的更详细信息。then 方法为 success 和 error 方法提供了一组属性

   then 方法为 success 和 error 方法提供的属性

   | 属性    | 描述                                    |
   | :------ | :-------------------------------------- |
   | data    | 从请求中返回的数据                      |
   | status  | 服务器返回的 HTTP 状态码                |
   | headers | 返回一个可用于按名称获取 headers 的函数 |
   | config  | 设置用于配置请求的对象                  |

   你可以看到我如何使用 then 方法注册 success 函数，error 函数是可选的

```javascript
   ...
   $http.get("productData.json").then(function (response) {
       console.log("Status: " + response.status);
       console.log("Type: " + response.headers("content-type"));
       console.log("Length: " + response.headers("content-length"));
       $scope.products = response.data;
   });
   ...
```

在这个例子中我将响应的 HTTP 状态码状以及 content-type 和 content-length 写入了控制台 使用 then 方法时，AngularJS 依然会自动处理 JSON 数据

1. 处理其他数据类型

   虽然使用 $http 服务获取 JSON 数据是最普遍的，但有时你可能也需要处理其他数据类型。如果是这样，你将需要自己解析数据 在 AngularJS 文件夹下新建 productData.xml 文件

```xml
   <products>
       <product name="Apples" category="Fruit" price="1.20" expiry="10" />
       <product name="Bananas" category="Fruit" price="2.42" expiry="7" />
       <product name="Pears" category="Fruit" price="2.02" expiry="10" />
       <product name="Tuna" category="Fish" price="20.45" expiry="3" />
       <product name="Salmon" category="Fish" price="17.93" expiry="2" />
       <product name="Trout" category="Fish" price="12.93" expiry="4" />
   </products>
```

XML 片段定义了包含 product 元素集的 products 元素，每个 product 元素都使用了属性值描述单个产品

```html
   ...
   <script>
       angular.module("exampleApp", [])
           .controller("defaultCtrl", function ($scope, $http) {
               $scope.loadData = function () {
                   $http.get("productData.xml").then(function (response) {
                       $scope.products = [];
                       var productElems = angular.element(response.data.trim()).find("product");
                       for (var i = 0; i < productElems.length; i++) {
                           var product = productElems.eq(i);
                           $scope.products.push({
                               name: product.attr("name"),
                               category: product.attr("category"),
                               price: product.attr("price")
                           });
                       }
                   });
               }
           });
   </script>
   ...
```

XML 和 HTML 密切相关，你可以把 XML 当作 HTML 一样使用 jqLite 处理这些片段，就像我在这个例子中做的一样

配置 Ajax 请求 由 $http 服务定义的方法都接收一个可选参数，该参数配置设置的对象。对于大多数应用程序，都可以使用 Ajax 请求的默认配置，但也可以通过配置对象上定义的属性来调整工作方式

$http 服务配置对象上定义的属性

| 名称                         | 描述                                                         |
| :--------------------------- | :----------------------------------------------------------- |
| data                         | 设置发送到服务器的数据。如果将其设置为对象，AngularJS 会将其序列化为 JSON 格式 |
| headers                      | 设置请求标头。将标头设置为具有属性的对象，这些属性的名称和值对应于要添加到请求的标头和值 |
| method                       | 设置用于请求的 HTTP 方法                                     |
| params                       | 设置 URL 参数，将 params 设置为一个对象，其属性名称和值对应于要包含的参数 |
| timeout                      | 指定请求到期前的毫秒数                                       |
| transformRequest             | 用于在将请求发送到服务器之前对其进行操作                     |
| transformResponse            | 用于在响应从服务器到达时对其进行操作                         |
| url                          | 为请求设置 URL                                               |
| withCredentials              | 设置为 true 时，将启用浏览器的 withCredentials 选项，允许请求包括身份验证 cookies |
| xsrfHeaderNamexsrfCookieName | 这些属性用于响应服务器可能需要的跨站点请求伪造令牌           |

最有趣的配置特性是能够恰当地通过 transformRequest 和 transformResponse 属性转换请求和响应。AngularJS 定义了两个内置转换，传出的数据序列化成 JSON，传入的 JSON 解析成 JavaScript 对象

1. 转换响应

   你可以通过将函数赋给配置对象上的 transformResponse 属性来转换响应。转换函数被传入来自响应的数据和可用于获取标头值的函数。转换函数负责返回数据的替换版本，该版本通常是服务器发送的格式的反序列化版本

```javascript
   ...
   <script>
       angular.module("exampleApp", [])
           .controller("defaultCtrl", function ($scope, $http) {
               $scope.loadData = function () {
                   var config = {
                       transformResponse: function (data, headers) {
                           if (headers("content-type") == "text/xml; charset=UTF-8" && angular.isString(data)) {
                               products = [];
                               var productElems = angular.element(data.trim()).find("product");
                               for (var i = 0; i < productElems.length; i++) {
                                   var product = productElems.eq(i);
                                   products.push({
                                       name: product.attr("name"),
                                       category: product.attr("category"),
                                       price: product.attr("price")
                                   });
                               }
                               return products;
                           } else {
                               return data;
                           }
                       }
                   }

                   $http.get("productData.xml", config).then(function (response) {
                       console.log(response);
                       $scope.products = response.data;
                   });
               }
           });
   </script>
   ...
```

我检查 Content-Type 标头的值以确保我正在处理 XML 数据并检查数据值是否为字符串。可是使用数组分配多个转换函数，因此确保转换函数处理它所期望的数据格式非常重要

警告： 在这个示例中为了演示的简单，我的代码假设请求收到的所有 XML 数据都包括 product 元素的 name、category 和 price。在实际的项目中你应该更小心的检查收到的数据

一旦我确信要处理 XML 数据，我就使用前面演示的 jqLite 技术将 XML 处理成一个 JavaScript 数组，我将其作为 transformResponse 函数的结果返回。转换的效果是我不必在 success 处理函数中处理 XML 数据

提示： 注意，如果响应不包含 XML 数据或者如果数据不是字符串我会返回原始的数据。这很重要，因为无论从转换函数返回的是什么，最终都将传入你的 success 处理函数

1. 转换请求

   你可以通过将函数赋给配置对象上的 transformRequest 属性来转换请求。该函数会被传入将发送到服务器的数据和可用于获取标头值的函数。函数返回的结果将用于请求，这提供了序列化数据的方法

```html
   <!DOCTYPE html>
   <html ng-app="exampleApp">

   <head>
       <title>Ajax</title>
       <script src="angular.js"></script>
       <link href="bootstrap.css" rel="stylesheet" />
       <link href="bootstrap-theme.css" rel="stylesheet" />
       <script>
           angular.module("exampleApp", [])
               .controller("defaultCtrl", function ($scope, $http) {

                   $scope.loadData = function () {
                       $http.get("productData.json").then(function (response) {
                           $scope.products = response.data;
                       });
                   }

                   $scope.sendData = function () {
                       var config = {
                           headers: {
                               "content-type": "application/xml"
                           },
                           transformRequest: function (data, headers) {
                               var rootElem = angular.element("<xml>");
                               for (var i = 0; i < data.length; i++) {
                                   var prodElem = angular.element("<product>");
                                   prodElem.attr("name", data[i].name);
                                   prodElem.attr("category", data[i].category);
                                   prodElem.attr("price", data[i].price);
                                   rootElem.append(prodElem);
                               }
                               rootElem.children().wrap("<products>");
                               return rootElem.html();
                           }
                       }

                       $http.post("Ajax.html", $scope.products, config);
                   }
               });
       </script>
   </head>

   <body ng-controller="defaultCtrl">
       <div class="panel panel-default">
           <div class="panel-body">
               <table class="table table-striped table-bordered">
                   <thead>
                       <tr>
                           <th>Name</th>
                           <th>Category</th>
                           <th>Price</th>
                       </tr>
                   </thead>
                   <tbody>
                       <tr ng-hide="products.length">
                           <td colspan="3" class="text-center">No Data</td>
                       </tr>
                       <tr ng-repeat="item in products">
                           <td>{{item.name}}</td>
                           <td>{{item.category}}</td>
                           <td>{{item.price | currency}}</td>
                       </tr>
                   </tbody>
               </table>
               <button class="btn btn-primary" ng-click="loadData()">Load Data</button>
               <button class="btn btn-primary" ng-click="sendData()">Send Data</button>
           </div>
       </div>
   </body>

   </html>
```

我添加了 button 元素，它使用 ng-click 指令，在单击时调用控制器行为 sendData。该行为依次定义配置对象，其中带有使用 jqLite 从请求数据中生成 XML 的转换函数 (为了填入数据使得它能被发送回服务器，你不得不先单击 Load Data 按钮)

使用 jqLite 生成 XML 你可能不想在实际项目中使用 jqLite 生成 XML，因为有些不错的 JavaScript 库专门提供这一操作。但如果你要创建少量 XML，也不想为你的项目增加新的依赖，那么 jaLite 也能做到。你只需要知道两个技巧。第一个技巧你必须在你创建新元素时，为标签名使用 "<" 和 ">" 符号

```javascript
...
angular.element("<product>");
...
```

如果你漏了 "<" 和 ">" 符号，jqLite 将抛出异常，告诉你使用选择器不能检索到该元素 另一个技巧时关于获取完成的 XML 数据，jqLite 可以轻松获取元素的内容，但不能获取元素本身。要解决此问题，请创建一个虚拟元素

```javascript
...
var rootElem = angular.element("<dummy>");
...
```

我通常使用 xml 标签，但这只是我的倾向 —— 你指定的元素并不会包含在最终的输出中。当你准备好从你的数据中获取 XML 字符串时，使用 wrap 方法插入你需要的顶层元素，然后在虚拟元素上调用 html 方法

```javascript
...
rootElem.children().wrap("<products>");
return rootElem.html();
...
```

你最终的 XML 片段是包含多个 product 元素的 products 元素

提示： 注意我在配置对象中明确地将 content-type 头部设置成 application/xml。AngularJS 没办法知道转换函数如何序列化数据，所以你必须小心正确地设置头部。如果不这么做，服务器可能不能适当的处理请求

设置 Ajax 的默认值 你可以通过 $http 服务提供的 $httpProvider 为 Ajax 请求定义默认设置

$httpProvider 所定义的属性

| 名称                       | 描述                                                         |
| :------------------------- | :----------------------------------------------------------- |
| defaults.headers.common    | 定义用于所有请求的默认标头                                   |
| defaults.headers.post      | 定义用于 POST 请求的默认标头                                 |
| defaults.headers.put       | 定义用于 PUT 请求的默认标头                                  |
| defaults.transformResponse | 定义用于所有响应的转换函数的数组                             |
| defaults.transformRequest  | 定义用于所有请求的转换函数的数组                             |
| interceptors               | 拦截器工厂函数的数组。拦截器是转换函数的复杂形式             |
| withCredentials            | 为所有的请求设置 withCredentials 项。该属性常常用于发起需要验证的跨域请求 |

提示： 定义了这些属性的 defaults 对象也可以通过 $http.defaults 属性访问，该属性允许通过服务更改全局 Ajax 配置

defaults.transformResponse 和 defaults.transformRequest 属性对于将转换函数应用于应用程序中生成的所有 Ajax 请求非常有用。这些属性定义为数组，这意味着必须使用 push 方法进行添加

```html
...
<script>
    angular.module("exampleApp", [])
        .config(function ($httpProvider) {
            $httpProvider.defaults.transformResponse.push(function (data, headers) {
                if (headers("content-type") == "text/xml; charset=UTF-8" && angular.isString(data)) {
                    products = [];
                    var productElems = angular.element(data.trim()).find("product");
                    for (var i = 0; i < productElems.length; i++) {
                        var product = productElems.eq(i);
                        products.push({
                            name: product.attr("name"),
                            category: product.attr("category"),
                            price: product.attr("price")
                        });
                    }
                    return products;
                } else {
                    return data;
                }
            });
        })
        .controller("defaultCtrl", function ($scope, $http) {
            $scope.loadData = function () {
                $http.get("productData.xml").then(function (response) {
                    $scope.products = response.data;
                });
            }
        });
</script>
...
```

使用 Ajax 拦截器 $httpProvider 也提供称为请求拦截器的特性，最好将其视为转换功能的复杂替代方案

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Ajax</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .config(function ($httpProvider) {
                $httpProvider.interceptors.push(function () {
                    return {
                        request: function (config) {
                            config.url = "productData.json";
                            return config;
                        },
                        response: function (response) {
                            console.log("Data Count: " + response.data.length);
                            return response;
                        }
                    }
                });
            })
            .controller("defaultCtrl", function ($scope, $http) {
                $scope.loadData = function () {
                    $http.get("doesnotexit.xml").then(function (response) {
                        $scope.products = response.data;
                    });
                }
            });
    </script>
</head>

<body ng-controller="defaultCtrl">
    <div class="panel panel-default">
        <div class="panel-body">
            <table class="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-hide="products.length">
                        <td colspan="3" class="text-center">No Data</td>
                    </tr>
                    <tr ng-repeat="item in products">
                        <td>{{item.name}}</td>
                        <td>{{item.category}}</td>
                        <td>{{item.price | currency}}</td>
                    </tr>
                </tbody>
            </table>
            <p><button class="btn btn-primary" ng-click="loadData()">Load Data</button></p>
        </div>
    </div>
</body>

</html>
```

$httpProvider.interceptors 属性是个数组，你可以在其中插入返回含有拦截器属性的对象的工厂函数。每个属性对应于不同的拦截器，分配给属性的函数有机会更改请求或响应

拦截器属性

| 名称          | 描述                                                         |
| :------------ | :----------------------------------------------------------- |
| request       | 拦截器函数在发出请求之前调用，并传递给配置对象，该对象定义的属性同：$http 服务配置对象上定义的属性 |
| requestError  | 当前一个请求拦截器抛出错误时，将被调用的拦截器函数           |
| response      | 拦截器函数在收到响应时被调用，并传递给响应对象，该对象定义的属性同：then 方法为 success 和 error 方法提供的属性 |
| responseError | 当前一个响应拦截器抛出错误时，将被调用的拦截器函数           |

在该示例中我的工厂函数返回的对象定义了 request 和 response 属性。我赋给 request 属性的函数演示了拦截器如何强制请求 URL 为 productData.json，而不管传递给 $http 服务方法的是什么。为此，我设置了配置对象上的 url 属性并将其作为函数的结果返回，以便它可以传递给下一个拦截器，如果我的拦截器是最后一个那么请求就可以产生 至于响应拦截器，我演示了如何使用函数来调试从服务器接收的响应。这里根据响应对象的 data 属性输出它包含多少个对象 我的拦截器依赖于 AngularJS 使用拦截器来解析 JSON 数据的事实，这就是为什么我检查对象数组而不是字符串的原因

## 使用承诺

promises 是一种着眼于未来将发生的事情的注册方式，比如关于 Ajax 请求的响应 承诺需要的对象有两个 promises 对象和 deferred 对象。promises 对象用于接收关于未来的结果的通知，deferred 对象对象用于发送通知。绝大多数场合中，最简单的方式是将承诺当作特殊的事件类型，deferred 对象用于根据 promises 对象发送有关某项任务或活动结果的事件 当我谈论 "某项任务或活动" 时，并不是含糊其辞，而是因为承诺可以用来代表将来会发生的任何事情。为了演示 promises，在 angularjs 文件夹下添加一个名为 promises.html 的文件

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Promises</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope) {
            });
    </script>
</head>

<body ng-controller="defaultCtrl">
    <div class="well">
        <button class="btn btn-primary">Heads</button>
        <button class="btn btn-primary">Tails</button>
        <button class="btn btn-primary">Abort</button>
        Outcome: <span></span>
    </div>
</body>

</html>
```

这个例子中包括了三个按钮。我的目标是使用 deferred 对象和 promises 对象连接按钮，以便单击其中一个就能更新 outcome 绑定 AngularJS 提供了 $q 服务来获取和管理承诺

$q 服务定义的方法

| 名称           | 描述                                                         |
| :------------- | :----------------------------------------------------------- |
| all(promises)  | 返回在解析指定数组中的所有 promise 或其中任何 promise 被拒绝时解析的 promise |
| defer()        | 创建一个 deferred 对象                                       |
| reject(reason) | 返回始终被拒绝的承诺                                         |
| when(value)    | 包含始终解析的 promise 中的值 (作为结果使用指定的值)         |

获取和使用 deferred 对象 接下来介绍延迟对象。我通过 $q.defer 方法获取 deferred 对象，该对象定义了一些方法和属性

deferred 对象定义的方法和属性

| 名称            | 描述                                                |
| :-------------- | :-------------------------------------------------- |
| resolve(result) | 表示延迟活动已使用指定值完成                        |
| reject(reason)  | 表示延迟活动已失败或未按指定原因完成                |
| notify(result)  | 提供延期活动的临时结果                              |
| promise         | 返回一个 promise 对象，该对象接收来自其他方法的信号 |

基本的使用模式是获取 deferred 对象，然后使用活动结果作为信号调用 resolve 或 reject 方法，你可以选择性地通过 notify 方法提供临时更新

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Promises</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .directive("promiseWorker", function ($q) {
                var deferred = $q.defer();
                return {
                    link: function (scope, element, attrs) {
                        element.find("button").on("click", function (event) {
                            var buttonText = event.target.innerText;
                            if (buttonText == "Abort") {
                                deferred.reject("Aborted");
                            } else {
                                deferred.resolve(buttonText);
                            }
                        });
                    },
                    controller: function ($scope, $element, $attrs) {
                        this.promise = deferred.promise;
                    }
                }
            })
            .controller("defaultCtrl", function ($scope) {
            });
    </script>
</head>

<body ng-controller="defaultCtrl">
    <div class="well" promise-worker>
        <button class="btn btn-primary">Heads</button>
        <button class="btn btn-primary">Tails</button>
        <button class="btn btn-primary">Abort</button>
        Outcome: <span></span>
    </div>
</body>

</html>
```

新的指令叫作 promiseWorker，它依赖于 $q 服务。在工厂函数中我调用 $q.defer 方法获取新的 deferred 对象，以便我可以在链接函数和控制器中访问它 链接函数使用 jqLite 来定位按钮元素并为 click 事件注册处理函数。收到事件后，我检查被单击元素的 innerText 并调用延迟对象的 resolve 方法或 reject 方法。控制器定义一个 promise 属性，该属性映射到延迟对象的 promise 属性。通过控制器公开此属性，我可以允许其他指令获取与延迟对象关联的 promise 对象，并接收有关结果的信号

提示： 你应该仅将 promise 对象公开给应用程序的其他部分，并使延迟对象远离其他组件，否则这些组件将能够意外地解析或拒绝该承诺。这就是我在工厂函数中将 deferred 对象仅通过控制器的 promise 属性提供的原因

消费承诺 示例应用程序在此处起作用，但并没有明显的效果。因为虽然延迟对象用于发信号通知用户按钮单击的结果，但是没有人接收这些信号。下一步是添加另一个指令，该指令将通过前一个示例中创建的 promise，监视并更新示例中 span 元素的内容

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Promises</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .directive("promiseWorker", function ($q) {
                var deferred = $q.defer();
                return {
                    link: function (scope, element, attrs) {
                        element.find("button").on("click", function (event) {
                            var buttonText = event.target.innerText;
                            if (buttonText == "Abort") {
                                deferred.reject("Aborted");
                            } else {
                                deferred.resolve(buttonText);
                            }
                        });
                    },
                    controller: function ($scope, $element, $attrs) {
                        this.promise = deferred.promise;
                    }
                }
            })
            .directive("promiseObserver", function () {
                return {
                    require: "^promiseWorker",
                    link: function (scope, element, attrs, ctrl) {
                        ctrl.promise.then(function (result) {
                            element.text(result);
                        }, function (reason) {
                            element.text("Fail (" + reason + ")");
                        });
                    }
                }
            })
            .controller("defaultCtrl", function ($scope) {
            });
    </script>
</head>

<body ng-controller="defaultCtrl">
    <div class="well" promise-worker>
        <button class="btn btn-primary">Heads</button>
        <button class="btn btn-primary">Tails</button>
        <button class="btn btn-primary">Abort</button>
        Outcome: <span promise-observer></span>
    </div>
</body>

</html>
```

新指令 promiseObserver 使用 require 属性从其他指令中取得控制器，并获取 promise 对象。promise 对象定义了一些方法

promise 对象定义的方法

| 方法                         | 描述                                                         |
| :--------------------------- | :----------------------------------------------------------- |
| then(success, error, notify) | 注册为响应 deferred 对象的 resolve、reject 和 notify 方法而调用的函数，函数所传参数是用于响应 deferred 对象的方法 |
| catch(error)                 | 注册一个用于错误处理的函数，函数所传参数用于响应 deferred 对象的 reject 方法 |
| finally(fn)                  | 注册一个无论承诺被解决还是被拒绝都会被调用的函数，函数所传参数用于响应 deferred 对象的 resolve 或 reject 方法 |

在示例中，我使用 then 方法来注册将被调用的函数，以响应相关的延迟对象的 resolve 和 reject 方法的调用。这两个函数都会更新已应用指令的元素的内容

理解为什么承诺不是常规事件 在这一点上，你可能想知道为什么我创建 deferred 和 promise 对象，只是为了实现可以通过常规 JavaScript 事件处理程序轻松完成的事情 确实，promises 执行相同的基本功能：它们允许组件指示它希望在将来发生特定事件时得到通知，无论是按钮单击还是从服务器返回的 Ajax 结果。promises 和常规事件都提供了注册在未来事件发生时调用的函数的功能。而且，我确实可以使用常规事件轻松处理我的按钮示例 —— 甚至是 ng-click 指令，它依赖于常规事件但隐藏细节 只有当你开始深入研究细节时，承诺和事件之间的差异以及它们在 AngularJS 应用程序中扮演的角色才会变得明显

1. 使用一次就丢弃

   promise 代表一个活动的单一实例，一旦它们被解决或拒绝，就不能再次使用。如果你在浏览器中载入 promises.html 文件，单击 Heads 按钮后再单击 Tails 按钮，你就可以看到这个。当你单击第一个按钮后屏幕会刷新，结果显示的是 Heads。当你单击第二个按钮时没有任何效果，这是因为承诺在该例子中已经被解决，无法再使用 这很重要，因为这意味着发送给观察者信号代表 "用户第一次选择 Heads、Tails 或 Aborted"。如果我使用常规的 JavaScript 的 click 事件，那么每个单独的事件就是 "用户点击了一个按钮"，而没有任何关于这是用户点击的第一次或是第几次的概念 这是一个重要的区别，它使得承诺适用于发出特定活动结果的信号，而事件则发出可能重现甚至不同的结果信号。或者换句话说，承诺更精确，因为它们表示单个活动的结果或返回值，即用户的决定或特定 Ajax 请求的响应

2. 结果或返回值的信号

   事件允许你在发生某事时发送单个内容 —— 例如单击按钮时。promise 可以以相同的方式使用，但它也可以用于在没有结果时发出信号。因为如果活动未执行或者活动延迟对象中的 reject 方法失败，将触发使用 promise 对象注册的 error 回调函数。你可以在示例中看到这一点，单击 "Aborted" 按钮将调用 reject 方法。显示会被更新以显示用户未做出决定 能够发出活动未发生或出现问题的信号，可以确保你得到确切的结果，这对于诸如在遇到问题时要通知用户的 Ajax 请求等活动非常重要

串联结果 当有确切的结果视图，即使活动没有执行也可以使用承诺的特性之一 —— 将承诺串联在一起以创建更复杂的结果的能力。这是可能的，因为 promise 对象定义的方法返回另一个 promise—— 例如，then。当回调函数完成执行时会解析该 promise

```html
...
<script>
    angular.module("exampleApp", [])
        .directive("promiseWorker", function ($q) {
            var deferred = $q.defer();
            return {
                link: function (scope, element, attrs) {
                    element.find("button").on("click", function (event) {
                        var buttonText = event.target.innerText;
                        if (buttonText == "Abort") {
                            deferred.reject("Aborted");
                        } else {
                            deferred.resolve(buttonText);
                        }
                    });
                },
                controller: function ($scope, $element, $attrs) {
                    this.promise = deferred.promise;
                }
            }
        })
        .directive("promiseObserver", function () {
            return {
                require: "^promiseWorker",
                link: function (scope, element, attrs, ctrl) {
                    ctrl.promise.then(function (result) {
                            return "Success (" + result + ")";
                        }).then(function (result) {
                            element.text(result);
                        });
                }
            }
        })
        .controller("defaultCtrl", function ($scope) {
        });
</script>
...
```

在 promiseObserver 指令的 link 函数中，我获取了 promise 并调用 then 方法来注册一个在解析 promise 时将被调用的回调函数。then 方法的结果是另一个 promise 对象，它将在执行回调函数时解析。我再次使用 then 方法注册第二个 promise 的回调

提示： 为了简单起见，我没包含处理拒绝承诺的处理器，这意味着该示例将仅响应 Heads 和 Tails 按钮

注意第一个回调函数的返回结果入下

```javascript
...
ctrl.promise.then(function (result) {
        return "Success (" + result + ")";
    }).then(function (result) {
        element.text(result);
    });
...
```

将 promises 链接在一起时，可以操纵传递给链中下一个 promise 的结果。在这种情况下，我对结果字符串进行了一些简单的格式化，然后将其作为结果传递给链中的下一个回调。以下是用户单击 Heads 按钮时发生的序列：

1. promiseWorker 指令的链接函数调用 deferred 对象上的 resolve 方法，将 Heads 作为结果传入
2. 承诺得到解决并调用其 success 函数，传递 Heads 值
3. 回调函数格式化 Heads 值并返回格式化的字符串
4. 第二个 promise 被解析并调用其 success 函数，将格式化的字符串作为结果传递给回调函数
5. 回调函数在 HTML 元素中显示格式化的字符串

当你想要建立多米诺骨牌效应的动作时这很重要，链中的每个动作都依赖于前一个的结果。我的字符串格式化示例在这方面并不引人注目，但你可以想象制作一个 Ajax 请求来获取服务的 URL 并将其作为结果传递给下一个 promise，其回调将使用 URL 来请求一些数据

分组承诺 当你想要执行一系列操作时，承诺链很有用，但有时你希望推迟活动直到其他几个结果可用。你可以通过 $ q.all 方法执行此操作，该方法接受一组 promise 并返回一个在所有输入 promise 都被解析之前无法解析的 promise

```html
...
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Promises</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .directive("promiseWorker", function ($q) {
                var deferred = [$q.defer(), $q.defer()];
                var promises = [deferred[0].promise, deferred[1].promise];
                return {
                    link: function (scope, element, attrs) {
                        element.find("button").on("click", function (event) {
                            var buttonText = event.target.innerText;
                            var buttonGroup = event.target.getAttribute("data-group");
                            if (buttonText == "Abort") {
                                deferred[buttonGroup].reject("Aborted");
                            } else {
                                deferred[buttonGroup].resolve(buttonText);
                            }
                        });
                    },
                    controller: function ($scope, $element, $attrs) {
                        this.promise = $q.all(promises).then(function (results) {
                            return results.join();
                        });
                    }
                }
            })
            .directive("promiseObserver", function () {
                return {
                    require: "^promiseWorker",
                    link: function (scope, element, attrs, ctrl) {
                        ctrl.promise.then(function (result) {
                            element.text(result);
                        }, function (reason) {
                            element.text(reason);
                        });
                    }
                }
            })
            .controller("defaultCtrl", function ($scope) {
            });
    </script>
</head>

<body ng-controller="defaultCtrl">
    <div class="well" promise-worker>
        <div class="btn-group">
            <button class="btn btn-primary" data-group="0">Heads</button>
            <button class="btn btn-primary" data-group="0">Tails</button>
            <button class="btn btn-primary" data-group="0">Abort</button>
        </div>
        <div class="btn-group">
            <button class="btn btn-primary" data-group="1">Yes</button>
            <button class="btn btn-primary" data-group="1">No</button>
            <button class="btn btn-primary" data-group="1">Abort</button>
        </div>
        Outcome: <span promise-observer></span>
    </div>
</body>

</html>
...
```

在此示例中，有两组按钮，允许用户选择 Heads/Tails 和 Yes/No。在 promiseWorker 指令中，我创建了一个 deferred 数组和一个相应的 promise 对象数组。我通过控制器公开的承诺是使用 $q.all 方法创建的

```javascript
...
this.promise = $q.all(promises).then(function (results) {
    return results.join();
});
...
```

对 all 方法的调用返回一个 promise，在所有输入 promise 都被解析之前 (promises 数组中的 promise 对象集合) 将不会解析，但如果拒绝任何输入 promise，它将被拒绝。这是 promiseObserver 指令通过注册 success 和 error 回调函数来获取和观察的 promise 对象。要查看效果，可以单击 "Heads" 或 "Tails" 按钮，然后单击 "Yes" 或 "No" 按钮。进行第二次选择后，整体结果将显示出来 我使用 $q.all 方法创建了承诺，并将 promises 数组传入它的 success 函数里。结果按照与输入的 promises 相同的顺序排列，这意味着 Heads/Tails 将始终首先出现在结果数组中。对于此示例，我使用标准 JavaScript 的 join 方法来连接结果，并将它们传递给链中的下一个阶段。如果仔细观察这个例子，你会看到有五个 promise：

1. 当用户选择 Heads 或 Tails 时的 promise
2. 当用户选择 Yes 或 No 时的 promise
3. 当承诺 (1) 和 (2) 都得到解决时的 promise
4. 其回调使用 join 方法连接结果的 promise
5. 其回调显示 HTML 元素中的连接结果的 promise

我不想强调这一点，但是复杂的承诺链会引起很多混乱，所以才在这里列出示例中的动作序列。我假设用户先选择了 Heads/Tails，但如果先选择 Yes/No，序列也大致相同：

1. 当用户选择 Heads 或 Tails 时，承诺 (1) 被解决
2. 当用户选择 Yes 或 No 时，承诺 (2) 被解决
3. 承诺 (3) 在没有任何进一步用户交互的情况下被解决，并将包含承诺 (1) 和 (2) 的结果的数组传递给其 success 回调函数
4. success 函数使用 join 方法创建单个结果
5. 承诺 (4) 被解决
6. 承诺 (5) 被解决
7. 承诺 (5) 的 success 回调更新 HTML 元素

你可以看到一个简单的示例如何导致复杂的组合和承诺链。一开始看起来十分具有压倒性，但随着你习惯使用 promises，你将会欣赏它们提供的精确性和灵活性，这在复杂的应用程序中尤为重要

# 第 21 章 REST 服务

## 为什么以及何时使用 REST 服务

当你使用 RESTful API 时，你应该使用我在本章中描述的服务。开始你可能更喜欢使用 $http 服务产生 Ajax 请求，尤其是当你有 jQuery 开发经历时

## 准备示例项目

我需要一个后端服务来演示使用 RESTful Web 服务的不同方式，所以我将再次使用 Deployd

警告： 我重用了本书 SportsStore 示例中的产品数据集的名称。如果你创建了 SportsStore 示例，请确保在按照本章中的说明操作之前删除 Deployd 目录

创建 RESTful 服务 要创建新服务，我在命令提示符下键入以下内容：

```npm
dpd create products
```

为了启动新服务，我输入以下命令来启动 Deployd 并显示服务控制台：

```npm
dpd -p 5500 products\app.dpd dashboard
```

打开 Deployd 控制面板，在浏览器中访问：`http://localhost:5500/dashboard/`

1. 创建数据结构
2. 添加数据
3. 测试数据服务

Deployd 为创建的数据结构建立了一些 RESTful 服务用以对数据进行操作

创建 AngularJS 应用程序 在 angularjs 文件夹下创建名为 products.html 的新文件

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Products</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script src="products.js"></script>
</head>

<body ng-controller="defaultCtrl">
    <div class="panel panel-primary">
        <h3 class="panel-heading">Products</h3>
        <ng-include src="'tableView.html'" ng-show="displayMode == 'list'"></ng-include>
        <ng-include src="'editorView.html'" ng-show="displayMode == 'edit'"></ng-include>
    </div>
</body>

</html>
```

我将把这个例子拆分成一系列较小的文件，就像你在一个真实的项目中做的那样。此应用程序的主要内容包含在两个视图文件 tableView.html 和 editorView.html 中，我会在稍后创建它们。它们被通过 ng-include 指令导入到 products.html 文件中，并使用范围变量 displayMode 来控制元素的可见性 products.html 文件还引入了 products.js 文件，我使用它来定义应用程序所需的行为

```javascript
angular.module("exampleApp", [])
    .controller("defaultCtrl", function ($scope) {

        $scope.displayMode = "list";
        $scope.currentProduct = null;

        $scope.listProducts = function () {
            $scope.products = [
                { id: 0, name: "Dummy1", category: "Test", price: 1.25 },
                { id: 1, name: "Dummy2", category: "Test", price: 2.45 },
                { id: 2, name: "Dummy3", category: "Test", price: 4.25 }];
        }

        $scope.deleteProduct = function (product) {
            $scope.products.splice($scope.products.indexOf(product), 1);
        }

        $scope.createProduct = function (product) {
            $scope.products.push(product);
            $scope.displayMode = "list";
        }

        $scope.updateProduct = function (product) {
            for (var i = 0; i < $scope.products.length; i++) {
                if ($scope.products[i].id == product.id) {
                    $scope.products[i] = product;
                    break;
                }
            }
            $scope.displayMode = "list";
        }

        $scope.editOrCreateProduct = function (product) {
            $scope.currentProduct =
                product ? angular.copy(product) : {};
            $scope.displayMode = "edit";
        }

        $scope.saveEdit = function (product) {
            if (angular.isDefined(product.id)) {
                $scope.updateProduct(product);
            } else {
                $scope.createProduct(product);
            }
        }

        $scope.cancelEdit = function () {
            $scope.currentProduct = {};
            $scope.displayMode = "list";
        }

        $scope.listProducts();
    });
```

示例中的控制器定义了对 product 数据进行操作所需的所有功能。我定义的行为分为两类，第一类由在作用域中操作数据的行为组成，包括：listProducts、deleteProduct、createProduct 和 updateProduct 函数。其他行为用于支持用户界面，响应用户交互，包括：editOrCreateProduct、saveEdit 和 cancelEdit。 我使用 ng-include 指令导入两个 HTML 视图。第一个叫做 tableView.html，我用它来显示数据并提供允许用户重新加载数据以及创建，删除和编辑产品的按钮

```html
<div class="panel-body">
    <table class="table table-striped table-bordered">
        <thead>
            <tr>
                <th>Name</th>
                <th>Category</th>
                <th class="text-right">Price</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr ng-repeat="item in products">
                <td>{{item.name}}</td>
                <td>{{item.category}}</td>
                <td class="text-right">{{item.price | currency}}</td>
                <td class="text-center">
                    <button class="btn btn-xs btn-primary" ng-click="deleteProduct(item)">
                        Delete
                    </button>
                    <button class="btn btn-xs btn-primary" ng-click="editOrCreateProduct(item)">
                        Edit
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
    <div>
        <button class="btn btn-primary" ng-click="listProducts()">Refresh</button>
        <button class="btn btn-primary" ng-click="editOrCreateProduct()">New</button>
    </div>
</div>
```

该视图使用了我在前面章节中描述过的 AngularJS 特性 另一个视图文件是 editorView.html，我用它来支持用户创建新的产品对象或编辑现有的产品对象

```html
<div class="panel-body">
    <div class="form-group">
        <label>Name:</label>
        <input class="form-control" ng-model="currentProduct.name" />
    </div>
    <div class="form-group">
        <label>Category:</label>
        <input class="form-control" ng-model="currentProduct.category" />
    </div>
    <div class="form-group">
        <label>Price:</label>
        <input class="form-control" ng-model="currentProduct.price" />
    </div>
    <button class="btn btn-primary" ng-click="saveEdit(currentProduct)">Save</button>
    <button class="btn btn-primary" ng-click="cancelEdit()">Cancel</button>
</div>
```

该视图使用 ng-model 指令创建双向数据绑定，以此编辑或创建产品

## 使用 $http 服务

列出产品数据

```javascript
angular.module("exampleApp", [])
    .constant("baseUrl", "http://localhost:5500/products/")
    .controller("defaultCtrl", function ($scope, $http, baseUrl) {

        $scope.displayMode = "list";
        $scope.currentProduct = null;

        $scope.listProducts = function () {
            $http.get(baseUrl).then(function(response){
                $scope.products = response.data;
            });
        }

        ...
    });
```

删除产品 接下来我将重新实现 deleteProduct

```javascript
...
$scope.deleteProduct = function (product) {
    $http({
        method: "DELETE",
        url: baseUrl + product.id
    }).then(function () {
        $scope.products.splice($scope.products.indexOf(product), 1);
    });
}
...
```

$http 服务没有关于 HTTP DELETE 的便捷方法，所以我必须将 $http 服务对象视为函数，并传入配置对象 我将 url 设为基础的 url 加上我想删除的 product id，在删除成功之后我还从本地数组中删除了相应的对象，所以服务器数据和本地副本仍然同步

创建产品 添加对创建产品的支持需要使用 HTTP 的 POST 方法，$http 服务提供了便捷方法

```javascript
...
$scope.createProduct = function (product) {
    $http.post(baseUrl, product).then(function (newProduct) {
        $scope.products.push(newProduct.data);
        $scope.displayMode = "list";
    });
}
...
```

RESTful 服务通过返回使用我发送过去的数据在数据库中创建的对象来响应我的创建请求，这就是我添加到产品数组的对象

更新产品 更新产品对象需要使用 HTTP 的 PUT 方法，$http 服务没有提供便捷方法。这意味着我需要将 $http 服务视为函数，并传入配置对象。来自服务器的响应是被修改过的对象，我依次检查每个对象并比较 id 的值将它放入本地数据数组

```javascript
...
$scope.updateProduct = function (product) {
    $http({
        url: baseUrl + product.id,
        method: "PUT",
        data: product
    }).then(function (modifiedProduct) {
        for (var i = 0; i < $scope.products.length; i++) {
            if ($scope.products[i].id == modifiedProduct.data.id) {
                $scope.products[i] = modifiedProduct.data;
                break;
            }
        }
        $scope.displayMode = "list";
    });
}
...
```

测试 Ajax 实现

## 隐藏 Ajax 实现

使用 $http 服务来使用 RESTful API 非常简单，它可以很好地演示如何将不同的 AngularJS 功能组合在一起来创建应用程序。在功能方面，它工作的很好，但是它在产生的应用程序的设计方面存在严重的问题 问题是操作本地数据和服务器数据的行为是分开的，必须确保它们保持同步。这与 AngularJS 通常的工作方式背道而驰，在这里数据通过作用域在整个应用程序中传播，并且可以自由更新。为了演示这个问题，我在 angularjs 文件夹中添加了一个名为 increment.js 的新文件

```javascript
angular.module("increment", [])
    .directive("increment", function () {
        return {
            restrict: "E",
            scope: {
                value: "=value"
            },
            link: function (scope, element, attrs) {
                var button = angular.element("<button>").text("+");
                button.addClass("btn btn-primary btn-xs");
                element.append(button);
                button.on("click", function () {
                    scope.$apply(function () {
                        scope.value++;
                    })
                })
            },
        }
    });
```

在该文件中的模块叫作 increment，包含一个名为 increment 的指令，当单击按钮时更新数值。该指令作为一个元素应用，并在隔离的作用域上使用双向绑定来获取其数据值。要使用该模块，我必须在 products.html 文件中添加一个脚本元素

```html
...
<head>
    <title>Products</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script src="products.js"></script>
    <script src="increment.js"></script>
</head>
...
```

我还必须在 products.js 文件中为模块添加依赖项

```javascript
angular.module("exampleApp", ["increment"])
    .constant("baseUrl", "http://localhost:5500/products/")
    .controller("defaultCtrl", function ($scope, $http, baseUrl) {

        ...

    });
```

最后，我必须将该指令应用于 tableView.html 文件，以便表中的每一行都有一个增加按钮

```html
...
<tr ng-repeat="item in products">
    <td>{{item.name}}</td>
    <td>{{item.category}}</td>
    <td class="text-right">{{item.price | currency}}</td>
    <td class="text-center">
        <button class="btn btn-xs btn-primary" ng-click="deleteProduct(item)">
            Delete
        </button>
        <button class="btn btn-xs btn-primary" ng-click="editOrCreateProduct(item)">
            Edit
        </button>
        <increment value="item.price" />
    </td>
</tr>
...
```

单击 "+" 按钮可将相应产品对象的 price 属性增加 1 单击 "Refresh" 按钮可以看到问题，该按钮用来自服务器的新数据替换本地产品数据。增量指令在增加 price 属性时没有执行所需的 Ajax 更新，因此本地数据与服务器数据不同步 这似乎是一个人为的例子，但在使用其他开发人员编写的指令或第三方提供的指令时经常会出现这种情况。即使 increment 指令的作者知道需要 Ajax 更新，也无法执行它们，因为所有 Ajax 更新逻辑都包含在控制器中，并且指令无法访问，特别是在另一个模块中 这个问题的解决方案是确保对本地数据的任何更改都会自动导致生成所需的 Ajax 请求，但这意味着需要使用数据的任何组件都必须知道数据是否需要与远程服务器同步，知道如何执行所需的 Ajax 请求以执行更新 AngularJS 通过 $resource 服务提供了部分解决方案，通过隐藏 Ajax 请求和 URL 格式的细节，可以更轻松地在应用程序中使用 RESTful 数据

安装 ngResource 模块 $resource 服务被定义在可选的 ngResource 模块中 访问 angularjs.org 网站，单击 "Download" 按钮，然后单击 "Extras"。将会显示一个 AngularJS 适用的文件列表，单击对应版本的链接然后将 angular-resource.js 文件保存到本地 angularjs 文件夹下 在 products.html 文件中添加一个脚本元素，以引入该模块

```html
...
<head>
    <title>Products</title>
    <script src="angular.js"></script>
    <script src="angular-resource.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script src="products.js"></script>
    <script src="increment.js"></script>
</head>
...
```

使用 $resource 服务 你可以看到我如何在 products.js 文件中使用 $resource 服务来管理从服务器获得的数据，而无需直接创建 Ajax 请求

```javascript
angular.module("exampleApp", ["increment", "ngResource"])
    .constant("baseUrl", "http://localhost:5500/products/")
    .controller("defaultCtrl", function ($scope, $http, $resource, baseUrl) {

        $scope.displayMode = "list";
        $scope.currentProduct = null;
        $scope.productsResource = $resource(baseUrl + ":id", { id: "@id" });

        $scope.listProducts = function () {
            $scope.products = $scope.productsResource.query();
        }

        $scope.deleteProduct = function (product) {
            product.$delete().then(function () {
                $scope.products.splice($scope.products.indexOf(product), 1);
            });
            $scope.displayMode = "list";
        }

        $scope.createProduct = function (product) {
            new $scope.productsResource(product).$save().then(function (newProduct) {
                $scope.products.push(newProduct);
                $scope.displayMode = "list";
            });
        }

        $scope.updateProduct = function (product) {
            product.$save();
            $scope.displayMode = "list";
        }

        $scope.editOrCreateProduct = function (product) {
            $scope.currentProduct = product ? product : {};
            $scope.displayMode = "edit";
        }

        $scope.saveEdit = function (product) {
            if (angular.isDefined(product.id)) {
                $scope.updateProduct(product);
            } else {
                $scope.createProduct(product);
            }
        }

        $scope.cancelEdit = function () {
            if ($scope.currentProduct && $scope.currentProduct.$get) {
                $scope.currentProduct.$get();
            }
            $scope.currentProduct = {};
            $scope.displayMode = "list";
        }

        $scope.listProducts();
    });
```

控制器定义的行为的函数签名保持不变，这很好，因为这意味着我不必更改任何 HTML 元素以使用 $resource 服务。每个行为的实现都发生了变化，不仅因为我获取数据的方式发生了变化，还因为可以对数据的性质做出的假设是不同的

1. 配置 $resource 服务

   我要做的第一件事是设置 $resource 服务，以便它知道如何使用 RESTful Deployd 服务

```javascript
   ...
   $scope.productsResource = $resource(baseUrl + ":id", { id: "@id" });
   ...
```

$resource 服务对象是用于描述符合 RESTful 服务的 URL 的函数。每个对象的 URL 片段都以冒号 (:) 作为前缀。在这个例子中 URL 只包括一个变量，即 product 对象的 id，这在删除或修改对象时是必须的。第一个参数中我将 baseUrl 常量的值与:id 结合起来表示将被改变的 URL 片段。构造出了下面的混合值

```txt
   http://localhost:5500/products/:id
```

第二个参数是一个配置对象，其属性指定变量段的值来自何处。第二个参数中的每个属性必须对应于第一个参数中的变量段，并且该值可以是固定的，或像我在该示例中做的，通过为属性添加 @符号前缀来绑定数据对象上的属性

提示： 大部分真实的应用程序将会需要多个片段部分以表现更复杂的数据集

调用 $resource 服务函数返回的是一个访问对象，它提供了一些动作方法来查询和修改服务器数据

存取对象定义的动作方法

| 名称                    | HTTP 方法 | URL          | 描述                     |
| :---------------------- | :-------- | :----------- | :----------------------- |
| delete(params, product) | DELETE    | /products/id | 根据指定 ID 移除对象     |
| get(id)                 | GET       | /products/id | 根据指定 ID 获取单个对象 |
| query()                 | GET       | /products    | 获取所有对象             |
| remove(params, product) | DELETE    | /products/id | 根据指定 ID 移除对象     |
| save(product)           | POST      | /products/id | 根据指定 ID 修改对象     |

注意 HTTP 方法和定义的 API 是相似的，但不完全相同

1. 列出 REST 数据

   我将调用 $resource 服务对象后返回的存取对象赋给了 productsResource 变量，然后我使用它获取来自服务器的数据

```javascript
   ...
   $scope.productsResource = $resource(baseUrl + ":id", { id: "@id" });

   $scope.listProducts = function () {
       $scope.products = $scope.productsResource.query();
   }
   ...
```

存取对象为我提供了查询和修改服务器上数据的方法，但它本身并不自动执行这些操作，这就是我调用 query 方法获取初始数据的原因。query 方法请求我的 Deployd 服务提供的 /products URL 以获取所有可用的数据对象 从 query 方法返回的结果是初始值为空的数组集合。$resource 服务创建结果数组，然后使用 $http 服务发出 Ajax 请求。当 Ajax 请求完成时，从服务器获得的数据被填充到集合中。这是非常重要的一点

警告： 由 query 方法返回的数组最初是空的，只有当 HTTP 请求在服务器完成才会被填充

处理数据加载 对于大部分应用程序，异步加载数据非常有效，并且作用域的变化将会使数据自动加载。尽管这个例子十分简单但它说明了大部分 AngularJS 应用程序的结构方式：数据到达，导致作用域的更改，使得界面中显示的内容被刷新 有时候在数据到达时你需要做出更直接的响应。为了支持这个，$resource 服务为 query 方法返回的集合数组添加了 $promise 属性。当 Ajax 请求完成时承诺就被解决了。 以下是如何使用 promise 注册成功处理程序的示例

```javascript
   ...
   $scope.listProducts = function () {
       $scope.products = $scope.productsResource.query();
       $scope.products.$promise.then(function (data) {
           // do something with the data
       });
   }
   ...
```

异步发送的数据可以很好地与数据绑定协作，做到自动更新

1. 修改数据对象

   query 方法使用 Resource 对象填充集合数组，它定义服务器返回的数据中的所有属性。还有一些允许操作数据而无需使用集合数组的方法

   Resource 对象支持的方法

   | 名称      | 描述             |
   | :-------- | :--------------- |
   | $delete() | 从服务器删除对象 |
   | $get()    | 从服务器刷新对象 |
   | $remove() | 从服务器删除对象 |
   | $save()   | 保存对象到服务器 |

   使用 $save 方法是最简单的

```javascript
   ...
   $scope.updateProduct = function (product) {
       product.$save();
       $scope.displayMode = "list";
   }
   ...
```

Resource 对象的所有方法执行异步请求时都会返回 promise 对象，你可以在去去完成或失败时使用它接收通知

注意： 为了简单起见，我乐观的认为在这个示例中的所有 Ajax 请求都会成功，但你应该在实际项目中小心应付错误

$get 方法也很直接。在该示例中我使用它撤销 cancelEdit 行为所抛弃的编辑

```javascript
   ...
   $scope.cancelEdit = function () {
       if ($scope.currentProduct && $scope.currentProduct.$get) {
           $scope.currentProduct.$get();
       }
       $scope.currentProduct = {};
       $scope.displayMode = "list";
   }
   ...
```

在我调用 $get 方法之前，我检查是否可以调用它。调用 $get 方法的效果是将编辑过的对象重置为服务器上的存储的状态

1. 删除数据对象

   $delete 和 $remove 方法生成了相同的请求，两种方式完全一样。使用它们的好处是它们发送的请求从服务器移除对象，但不从集合数组移除对象。这是明智的手段，因为在收到响应之前，对服务的请求结果是未知的，如果删除了本地副本但请求随后返回错误，将导致本地数据与服务器数据不同步 为了解决这个问题，我使用了这些方法返回的 promise 对象来注册一个回调处理程序，该处理程序在 deleteProduct 行为成功删除服务器数据时删除本地数据

```javascript
   ...
   $scope.deleteProduct = function (product) {
       product.$delete().then(function () {
           $scope.products.splice($scope.products.indexOf(product), 1);
       });
       $scope.displayMode = "list";
   }
   ...
```

\5. 创建新对象

在存取对象上使用 new 关键字提供了将 $resource 方法应用于数据对象的方法，以便将数据对象保存到服务器。我在 createProduct 行为中使用此技术，以便我可以使用 $save 方法并将新对象写进数据库

```javascript
   ...
   $scope.createProduct = function (product) {
       new $scope.productsResource(product).$save().then(function (newProduct) {
           $scope.products.push(newProduct);
           $scope.displayMode = "list";
       });
   }
   ...
```

与 $delete 方法类似，当新对象存储到服务器时，$save 方法也不更新数组。我使用 $save 方法返回的 promise 对象向集合数组添加对象

配置 $resource 服务动作 集合数组上可以用 get、save、query、remove 和 delete 方法以及各个 Resource 对象上的 $ 前缀动作。这些操作很容易配置，以便方法对应于服务器提供的 API

```javascript
...
$scope.productsResource = $resource(baseUrl + ":id", { id: "@id" }, { create: { method: "POST" }, save: { method: "PUT" } });
...
```

可以使用定义操作的第三个参数调用 $resource 服务对象函数。这些操作表示为对象属性，其名称对应于正在定义或重新定义的操作，因为你可以根据需要替换默认操作 每个操作属性都设置为配置对象。我只使用了一个 method 属性，它设置了用于操作的 HTTP 方法。我改变的结果是我定义了一个名为 create 的新动作，它使用 POST 方法，我重新定义了 save 方法，以便它使用 PUT 方法。这样 productsResource 访问对象支持的操作与 Deployd API 更加一致，将创建新对象的请求与修改现有对象的请求分开。除了 method 属性之外还有一些可用于定义或重新定义操作的配置属性

用于动作的配置属性

| 名称    | 描述                                                         |
| :------ | :----------------------------------------------------------- |
| method  | 设置将用于 Ajax 请求的 HTTP 方法                             |
| params  | 指定作为 $resource 服务函数的第一个 URL 参数的变量           |
| url     | 覆盖此操作的默认 URL                                         |
| isArray | 如果为 true，则指定响应将是 JSON 数组。默认值为 false，表示响应是一个对象 |

另外，你可以使用在第 20 章中介绍的属性配置动作将生成的 Ajax 请求：transformRequest、transformResponse、cache、timeout、withCredentials、responseType 和 interceptor 以这种方式定义的动作就像默认动作一样，可以在集合数组和各个 Resource 对象上调用。你可以看到我如何更新 createProduct 行为以使用我的新的 create 操作

```javascript
...
$scope.createProduct = function (product) {
    new $scope.productsResource(product).$create().then(function (newProduct) {
        $scope.products.push(newProduct);
        $scope.displayMode = "list";
    });
}
...
```

创建 $resource 就绪组件 使用 $resource 服务让我能写出以 RESTful 操作数据，而不需要知道操作数据必要的 Ajax 请求的细节。我将修改 increment 指令，以使它可以使用 $resource 服务获得的数据

避免异步数据陷阱 $resource 服务提供了在整个应用程序中使用 RESTful 数据的解决方案：它隐藏了 Ajax 请求的细节，但它仍然要求使用数据的组件知道数据是 RESTful 的，并且应该使用 $save 和 $delete 等方法进行操作 此时此刻你可能会考虑完成这一过程的方式，使用作用域监听器和事件处理器建立 RESTful 数据的封装，监听改动并自动写入改动到服务器 不要试图尝试这个，它是一个陷阱。事实上，它不能正常工作。因为你将试图隐藏从使用数据的组件支持 REST 的 Ajax 请求的异步性质。不知道使用 RESTful 数据的代码将假定所有操作立即生效，并且浏览器中数据是权威引用，但在 Ajax 请求发送到后台并成功之前，这些假设都不成立 当服务器返回错误时，事情就会彻底奔溃，错误会在数据的同步操作完成并且代码执行完毕很长时间之后到达浏览器。没有令人信服的方法来处理错误：你无法解除操作，而避免应用程序的状态不一致 (因为同步代码仍在执行)，而且你无法发出原始请求，以便再次尝试。你能做的最好的事就是丢弃应用程序的状态并从服务器重新加载数据，这将给用户带来出乎意料的震惊 相反，必须接受重写或调整组件以理解 $resource 服务添加到数据对象的方法

```javascript
...
angular.module("increment", [])
    .directive("increment", function () {
        return {
            restrict: "E",
            scope: {
                item: "=item",
                property: "@propertyName",
                restful: "@restful",
                method: "@methodName"
            },
            link: function (scope, element, attrs) {
                var button = angular.element("<button>").text("+");
                button.addClass("btn btn-primary btn-xs");
                element.append(button);
                button.on("click", function () {
                    scope.$apply(function () {
                        scope.item[scope.property]++;
                        if (scope.restful) {
                            scope.item[scope.method]();
                        }
                    })
                })
            },
        }
    });
...
```

在创建可以对 $resource 服务提供的数据进行操作的组件时，你需要提供配置选项，不仅要启用 RESTful 支持，还要指定更新服务器所需的操作方法。在这个例子中，我使用名为 restful 的属性的值来配置 REST 支持和方法，以获取在值递增时应调用的方法的名称。接下来在 tableView.html 文件中应用这些更改

```html
...
<td class="text-center">
    <button class="btn btn-xs btn-primary" ng-click="deleteProduct(item)">
        Delete
    </button>
    <button class="btn btn-xs btn-primary" ng-click="editOrCreateProduct(item)">
        Edit
    </button>
    <increment item="item" property-name="price" restful="true" method-name="$save" />
</td>
...
```

其结果是，当你单击表行中的 "+" 按钮时，将更新本地值，然后调用 $save 方法将更新发送到服务器

# 第 22 章 视图服务

## 为什么以及何时使用视图服务

我在本章中描述的服务通过允许多个组件控制用户看到的内容来简化复杂应用程序。你不需要在小型或简单的应用程序中使用这些服务

## 准备示例程序

本章将继续使用前一章创建的示例

理解问题 该应用程序包含两个视图文件，tableView.html 和 editorView.html，我使用 ng-include 指令将它们引入主文件 products.html tableView.html 文件包含应用程序的默认视图，并在 table 元素中列出服务器中的数据。当用户创建新 product 或编辑现有 product 时，我切换到 editorView.html 文件的内容。当操作完成或取消再次回到 tableView.html 文件的内容。问题在于我管理视图文件内容显示的方法

```html
...
<div class="panel panel-primary">
    <h3 class="panel-heading">Products</h3>
    <ng-include src="'tableView.html'" ng-show="displayMode == 'list'"></ng-include>
    <ng-include src="'editorView.html'" ng-show="displayMode == 'edit'"></ng-include>
</div>
...
```

问题是使用 ng-show 指令来控制元素的可见性。要确定是否应该向用户显示视图的内容，我检查名为 displayMode 的范围变量的值，并将其与文字值进行比较

```html
...
<ng-include src="'tableView.html'" ng-show="displayMode == 'list'"></ng-include>
...
```

我在 products.js 文件中定义的控制器行为中设置了 displayMode 的值，以显示我需要的内容

这种方法有效，但是它存在问题，即任何需要改变应用程序布局的组件都需要访问控制器作用域下的作用域变量 displayMode。在这样一个简单的应用程序中这没什么问题，因为视图是由单个控制器管理的，但当其他组件需要控制用户看到的内容时它无法扩展 我们需要的是一种将视图选择与控制器分开的方法，以便应用程序内容可以从应用程序的任意部分被呈现

## 使用 URL 路由

AngularJS 支持 URL 路由特性，它使用 $location.path 方法返回的值来加载和显示视图文件，而不需要在应用程序的整个标记和代码中嵌入令人讨厌的文字值。接下来我将展示如何安装并使用 $route 服务

安装 ngRoute 模块 $route 服务被定义在可选的 ngRoute 模块中 访问 angularjs.org 网站，单击 "Download" 按钮，然后单击 "Extras"。将会显示一个 AngularJS 适用的文件列表，单击对应版本的链接然后将 angular-route.js 文件保存到本地 angularjs 文件夹下 在 products.html 文件中添加一个脚本元素，以引入该模块

```html
...
<head>
    <title>Products</title>
    <base href="/">
    <script src="angular.js"></script>
    <script src="angular-resource.js"></script>
    <script src="angular-route.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script src="products.js"></script>
    <script src="increment.js"></script>
</head>
...
```

定义 URL 路由 $route 服务提供的核心功能是设置 URL 与视图文件之间的映射，被称为 URL 路由或就叫作路由。当 $location.path 方法返回的值与其中一个映射匹配时，将加载并显示相应的视图文件。映射是使用 $route 服务的提供器 $routeProvider 定义的。我在 products.js 文件中定义了路由

```javascript
angular.module("exampleApp", ["increment", "ngResource", "ngRoute"])
    .constant("baseUrl", "http://localhost:5500/products/")
    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider.when("/list", {
            templateUrl: "/tableView.html"
        });

        $routeProvider.when("/edit", {
            templateUrl: "/editorView.html"
        });

        $routeProvider.when("/create", {
            templateUrl: "/editorView.html"
        });

        $routeProvider.otherwise({
            templateUrl: "/tableView.html"
        });
    })
    .controller("defaultCtrl", function ($scope, $http, $resource, baseUrl) {
        // ...controller statements omitted for brevity...
    });
```

我添加了对 ngRoute 模块的依赖，并添加了一个 config 函数来定义路由。我的 config 函数声明依赖于 $route 服务的提供器 $routeProvider, 和 $location 服务的提供器 $locationProvider，后者用于启用 HTML5 URL 模式

提示： 我将在本章中使用 HTML5 URL 模式，因为它们更简洁，我知道我将使用的浏览器支持 HTML5 History API。有关 HTML5 的 $location 服务支持，如何检测浏览器提供所需功能以及可能出现问题的详细信息，请参阅第 19 章 使用 $routeProvider.when 方法定义路由。第一个参数是路由将应用的 URL，第二个参数是路由配置对象。我定义的路由可能是最简单的因为 URL 是静态的，而且我还提供了最少的配置信息，templateUrl 配置项指定了当浏览器导航到的 URL 路径匹配传入 when 方法的第一个参数时应该被使用的视图文件

提示： 始终使用前导字符 "/" 指定 templateUrl 的值。如果不这样做，则将相对于 $ location.path 方法返回的值评估 URL，并且更改此值是使用路由时所需的关键活动之一。 如果没有 "/" 字符，当你在应用程序中导航时将会遇到 Not Found 错误

otherwise 方法用于定义当没有其他路由与当前 URL 路径匹配时使用的路由。提供这样的回退路线是一种很好的做法

在 products.js 文件中定义的路由的效果

| URL 路径     | 视图文件        |
| :----------- | :-------------- |
| /list        | tableView.html  |
| /edit        | editorView.html |
| /create      | editorView.html |
| 所有其他路由 | tableView.html  |

提示： 我不是必须需要为 /list 定义路由，因为如果没有其他路由与当前路径匹配，则 otherwise 方法定义的路由会显示 tableView.html 视图。我喜欢在定义路由时写清楚，因为它们可能会变得非常复杂，而且任何使它们易于阅读和理解的事情都是值得做的

显示选择的视图 ngRoute 模块包含一个名为 ng-view 的指令，该指令显示由路径指定的视图文件的内容。该路径与 $location 服务返回的当前 URL 路径相匹配。你可以看到我如何使用 ng-view 指令替换 products.html 文件中的麻烦元素，并删除了我不喜欢的文字值

```html
...
<div class="panel panel-primary">
    <h3 class="panel-heading">Products</h3>
    <div ng-view></div>
</div>
...
```

当 $location.path 返回的值发生更改时，$route 服务通过它的提供器拿到被定义的路由，并更改应用了 ng-view 指令的元素的内容

连接代码和标记 剩下的就是更新代码和标记以更改 URL 而不是 displayMode 变量来更改应用程序的布局。这意味着我需要使用 $location 服务提供的 path 方法

```javascript
angular.module("exampleApp", ["increment", "ngResource", "ngRoute"])
    .constant("baseUrl", "http://localhost:5500/products/")
    .config(function ($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider.when("/list", {
            templateUrl: "/tableView.html"
        });

        $routeProvider.when("/edit", {
            templateUrl: "/editorView.html"
        });

        $routeProvider.when("/create", {
            templateUrl: "/editorView.html"
        });

        $routeProvider.otherwise({
            templateUrl: "/tableView.html"
        });
    })
    .controller("defaultCtrl", function ($scope, $http, $resource, $location, baseUrl) {

        $scope.currentProduct = null;

        $scope.productsResource = $resource(baseUrl + ":id", { id: "@id" },
            { create: { method: "POST" }, save: { method: "PUT" } });

            $scope.listProducts = function () {
            $scope.products = $scope.productsResource.query();
        }

        $scope.deleteProduct = function (product) {
            product.$delete().then(function () {
                $scope.products.splice($scope.products.indexOf(product), 1);
            });
            $location.path("/list");
        }

        $scope.createProduct = function (product) {
            new $scope.productsResource(product).$create().then(function (newProduct) {
                $scope.products.push(newProduct);
                $location.path("/list");
            });
        }

        $scope.updateProduct = function (product) {
            product.$save();
            $location.path("/list");
        }

        $scope.editProduct = function (product) {
            $scope.currentProduct = product;
            $location.path("/edit");
        }

        $scope.saveEdit = function (product) {
            if (angular.isDefined(product.id)) {
                $scope.updateProduct(product);
            } else {
                $scope.createProduct(product);
            }
            $scope.currentProduct = {};
        }

        $scope.cancelEdit = function () {
            if ($scope.currentProduct && $scope.currentProduct.$get) {
                $scope.currentProduct.$get();
            }
            $scope.currentProduct = {};
            $location.path("/list");
        }

        $scope.listProducts();
    });
```

这不是一个巨大的变化。我添加了对 $location 服务的依赖，并用对 $location.path 方法的等效调用替换了更改 displayMode 值的调用。有一个更有趣的变化：我将 editOrCreateProduct 行为替换成了一个名为 editProduct 的行为

这是旧的行为：

```javascript
...
$scope.editOrCreateProduct = function (product) {
    $scope.currentProduct = product ? product : {};
    $scope.displayMode = "edit";
}
...
```

这是它的替代品

```javascript
...
$scope.editProduct = function (product) {
    $scope.currentProduct = product;
    $location.path("/edit");
}
...
```

旧的行为是编辑和创建过程的起点，它们由 product 参数区分。如果 product 参数不为 null，那我就将 currentProduct 变量设置为该对象，填充 editorView.html 视图中的字段

提示： 示例中还存在另一处更改：我更新了 saveEdit 行为以重置 currentProduct 变量的值。如果没有次更改，编辑操作的值将在用户随后创建新产品时显示。这是一个临时问题，随着我在应用程序中扩展对路由的支持，这个问题将得到解决

我能够简化行为的原因是路由功能允许我仅通过更改 URL 来启动创建新产品对象的过程

```html
<div class="panel-body">
    <table class="table table-striped table-bordered">
        <thead>
            <tr>
                <th>Name</th>
                <th>Category</th>
                <th class="text-right">Price</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr ng-repeat="item in products">
                <td>{{item.name}}</td>
                <td>{{item.category}}</td>
                <td class="text-right">{{item.price | currency}}</td>
                <td class="text-center">
                    <button class="btn btn-xs btn-primary" ng-click="deleteProduct(item)">
                        Delete
                    </button>
                    <button class="btn btn-xs btn-primary" ng-click="editProduct(item)">
                        Edit
                    </button>
                    <increment item="item" property-name="price" restful="true" method-name="$save" />
                </td>
            </tr>
        </tbody>
    </table>
    <div>
        <button class="btn btn-primary" ng-click="listProducts()">Refresh</button>
        <a href="create" class="btn btn-primary">New</a>
    </div>
</div>
```

我用 a 元素替换了使用 ng-click 指令调用旧行为的按钮元素。该元素的 href 属性指定了与显示 editorView.html 视图的路由匹配的 URL 你可以在浏览器中载入 products.html 文件以查看效果

警告： 应用程序更改 URL 时路由可以正常工作，但如果用户更改了 URL，它就不起作用；浏览器将用户输入的任何 URL 作为文件的字面请求，并尝试从服务器请求相应的内容

## 使用路由参数

我在上一节中用来定义路由的 URL 是固定的或静态的，这意味着传递给 $location.path 方法或在元素的 href 属性中设置的值必须与我用于 $routeProvider 的值完全匹配

```javascript
...
$routeProvider.when("/create", {
    templateUrl: "/editorView.html"
});
...
```

仅当 URL 的路径与 /create 匹配时，才会激活此路由。 这是路由可以使用的最基本的 URL 类型，因此是最有限的 路由 URL 可以包含路由参数，这些参数与浏览器中显示的一个或多个片段匹配。片段是两个 "/" 字符之间的内容。例如，URL `http://localhost:5000/users/adam/details` 中的片段是 users、adam 和 details。路由参数有两种：保守和贪心。保守的路由参数将会匹配一个片段，而贪心的路由将会匹配尽可能多的片段。为了演示这是如何工作的，我改变了 products.js 文件中的路由

```javascript
...
.config(function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider.when("/list", {
        templateUrl: "/tableView.html"
    });

    $routeProvider.when("/edit/:id", {
        templateUrl: "/editorView.html"
    });

    $routeProvider.when("/edit/:id/:data*", {
        templateUrl: "/editorView.html"
    });

    $routeProvider.when("/create", {
        templateUrl: "/editorView.html"
    });

    $routeProvider.otherwise({
        templateUrl: "/tableView.html"
    });
})
...
```

其中 "/edit/:id" 是一个保守的路由参数，变量由 ":" 字符表示，然后是名称，在这个例子中是 id。路由参数会匹配像 "/edit/1234" 这样的路径，并将值 1234 赋给名为 id 的路由参数 (路由变量是通过 $routeParams 服务访问的) 仅使用静态段和保守路由参数的路由将仅匹配包含与其 URL 相同数量的段的路径。对于 "/edit/:id" 只会匹配有两个片段且第一个片段是 edit 的网址。数量不一致或第一个片段不为 edit 的网址都不会被匹配 你可以使用包括贪心路由参数的路由配置

```javascript
...
$routeProvider.when("/edit/:id/:data*", {
    templateUrl: "/editorView.html"
});
...
```

贪心路由参数由 ":" 后跟名称再跟 "*" 表示，这个例子将匹配任何至少有三个片段且第一个片段是 edit 的路径。第二个片段将赋值给路由参数 id，其余将赋值给路由参数 data

提示： 如果片段变量和路由参数目前没有意义，请不要担心。在我开发以下部分中的示例时，你将看到它们的工作原理

访问路由和路由参数 我在上一节中使用 URL 处理路径并将片段的内容赋给了路由参数，然后可以在代码中访问这些参数。我将演示如何使用 $route 和 $routeParams 服务访问这些值，这两个服务都包含在 ngRoute 模块中 我的第一步是更改 tableView.html 文件中编辑产品对象的按钮

```html
...
<tr ng-repeat="item in products">
    <td>{{item.name}}</td>
    <td>{{item.category}}</td>
    <td class="text-right">{{item.price | currency}}</td>
    <td class="text-center">
        <button class="btn btn-xs btn-primary" ng-click="deleteProduct(item)">
            Delete
        </button>
        <a href="/edit/{{item.id}}" class="btn btn-xs btn-primary">Edit</a>
        <increment item="item" property-name="price" restful="true" method-name="$save" />
    </td>
</tr>
...
```

我用一个 a 元素替换了 button 元素，该元素的 href 属性对应于我在前面定义的路由之一，这会生成一个类似这样的元素

```html
<a href="/edit/18d5f4716c6b1acf" class="btn btn-xs btn-primary">Edit</a>
```

在单击该链接时，我在前面定义的路由参数 id 将被赋值为 18d5f4716c6b1acf，它与用户想要编辑的产品对象的 id 属性一致。接下来我要更改 products.js 文件中的控制器来应对这种改变

```javascript
...
.controller("defaultCtrl", function ($scope, $http, $resource, $location, $route, $routeParams, baseUrl) {

        $scope.currentProduct = null;

        $scope.$on("$routeChangeSuccess", function () {
            if ($location.path().indexOf("/edit/") == 0) {
                var id = $routeParams["id"];
                for (var i = 0; i < $scope.products.length; i++) {
                    if ($scope.products[i].id == id) {
                        $scope.currentProduct = $scope.products[i];
                        break;
                    }
                }
            }
        });

        ...

    });
...
```

注意： 我已从控制器中删除了 editProduct 行为，之前调用该行为以启动编辑过程并显示 editorView.html 视图。由于未通过路由系统启动编辑，因此不再需要此行为

1. 响应路由变化

   我已经添加了对 $route 服务的依赖，它可用于管理当前选择的路由。$route 服务还定义的方法和属性

   $route 服务定义的方法和属性

   | 名称     | 描述                                                         |
   | :------- | :----------------------------------------------------------- |
   | current  | 返回提供当前路由信息的对象，该对象定义了一个 controller 属性，该属性返回与路由关联的控制器以及提供控制器依赖关系集合的 locals 属性。locals 属性返回的集合还包含 $scope 和 $template 属性，这些 属性返回控制器和视图内容的作用域 |
   | reload() | 重新加载视图                                                 |
   | routes   | 返回通过 $routeProvider 定义的路由的集合                     |

   我没有使用上述的任何成员，但我确实依赖 $route 服务的另一个方面，那是一组用于指示当前路由中的变化的事件。这些事件是使用 $on 方法注册的

   由 $route 服务所定义的事件

   | 名称                | 描述                                                 |
   | :------------------ | :--------------------------------------------------- |
   | $routeChangeStart   | 在路由改变之前触发                                   |
   | $routeChangeSuccess | 在路由改变后触发                                     |
   | $routeUpdate        | 在路由刷新时触发，这与 reloadOnSearch 配置属性相关联 |
   | $routeChangeError   | 在路由改变发生错误时触发                             |

   大多数 $route 服务并不是那么有用。通常你需要了解两件事：路由何时改变以及新路由是什么。$routeChangeSuccess 方法提供了第一条信息，$location 服务 (而不是 $route) 提供了第二条信息

```javascript
   ...
   $scope.$on("$routeChangeSuccess", function () {
       if ($location.path().indexOf("/edit/") == 0) {
           // ...statements for responding to /edit route go here...
       }
   });
   ...
```

我注册了当当前路由更改时调用的处理函数，我使用 $location.path 方法来确定应用程序处于什么状态。如果路径以 "/edit/" 开头，那么我会回复编辑操作

1. 获取路由参数

   当处理以 "/edit/" 开头的路径时，我知道我需要获取路由参数 id 的值，以便我可以填充 editorView.html 文件的字段。路由参数的值可以通过 $routeParams 服务访问。参数的值以名称索引集合的形式表现

```javascript
   ...
   $scope.$on("$routeChangeSuccess", function () {
       if ($location.path().indexOf("/edit/") == 0) {
           var id = $routeParams["id"];
           for (var i = 0; i < $scope.products.length; i++) {
               if ($scope.products[i].id == id) {
                   $scope.currentProduct = $scope.products[i];
                   break;
               }
           }
       }
   });
   ...
```

我获取 id 参数的值，然后使用它来定位用户想要编辑的对象

警告： 为简单起见。我假设路由参数 id 的值是正确的格式，并且与数据数组中对象的 id 值对应。你应该在实际项目中小心地验证你接收到的值

## 配置路由

到目前为止我在本章中所定义的路由只定义了 templateUrl 配置属性，它指定路由将显示的视图文件的 URL。这只是可用的配置选项之一。还有一些可用的配置属性，其中最重要的是两个是 controller 和 resolve

路由配置项

| 名称                 | 描述                                                         |
| :------------------- | :----------------------------------------------------------- |
| controller           | 指定与路由显示的视图关联的控制器的名称                       |
| controllerAs         | 指定有用控制器的别名                                         |
| template             | 指定视图内容。这可以是 HTML 字符串，也可以是返回 HTML 的函数 |
| templateUrl          | 指定路由匹配时要显示的视图文件的 URL，这可以是视图路径字符串或返回字符串的函数 |
| resolve              | 指定控制器的的一组依赖项                                     |
| redirectTo           | 指定路由匹配时浏览器应重定向到的路径。可以表示为字符串或函数 |
| reloadOnSearch       | 默认为 true，当为 true 时在 $location 的 search 和 hash 方法的返回值改变时，路由将重新加载 |
| caseInsensitiveMatch | 默认为 true，当为 true 时路由匹配不再区分大小写              |

使用控制器与路由 如果你的应用程序中有很多视图，让它们共享一个控制器将使程序变得难以管理和测试。controller 配置项允许你为视图指定已经通过 Module.controller 方法注册的控制器。其效果是分离出了每个视图的控制器逻辑

```javascript
angular.module("exampleApp", ["increment", "ngResource", "ngRoute"])
    .constant("baseUrl", "http://localhost:5500/products/")
    .config(function ($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider.when("/edit/:id", {
            templateUrl: "/editorView.html",
            controller: "editCtrl"
        });

        $routeProvider.when("/create", {
            templateUrl: "/editorView.html",
            controller: "editCtrl"
        });

        $routeProvider.otherwise({
            templateUrl: "/tableView.html"
        });
    })
    .controller("defaultCtrl", function ($scope, $http, $resource, $location, baseUrl) {

        $scope.productsResource = $resource(baseUrl + ":id", { id: "@id" },
            { create: { method: "POST" }, save: { method: "PUT" } });

        $scope.listProducts = function () {
            $scope.products = $scope.productsResource.query();
        }

        $scope.createProduct = function (product) {
            new $scope.productsResource(product).$create().then(function (newProduct) {
                $scope.products.push(newProduct);
                $location.path("/list");
            });
        }

        $scope.deleteProduct = function (product) {
            product.$delete().then(function () {
                $scope.products.splice($scope.products.indexOf(product), 1);
            });
            $location.path("/list");
        }

        $scope.listProducts();
    })
    .controller("editCtrl", function ($scope, $routeParams, $location) {

        $scope.currentProduct = null;

        if ($location.path().indexOf("/edit/") == 0) {
            var id = $routeParams["id"];
            for (var i = 0; i < $scope.products.length; i++) {
                if ($scope.products[i].id == id) {
                    $scope.currentProduct = $scope.products[i];
                    break;
                }
            }
        }

        $scope.cancelEdit = function () {
            if ($scope.currentProduct && $scope.currentProduct.$get) {
                $scope.currentProduct.$get();
            }
            $scope.currentProduct = {};
            $location.path("/list");
        }

        $scope.updateProduct = function (product) {
            product.$save();
            $location.path("/list");
        }

        $scope.saveEdit = function (product) {
            if (angular.isDefined(product.id)) {
                $scope.updateProduct(product);
            } else {
                $scope.createProduct(product);
            }
            $scope.currentProduct = {};
        }
    });
```

我已经定义了一个名为 editCtrl 的新控制器，并从 defaultCtrl 控制器中移动了代码，现在它独占了 editorView.html 视图。然后，我使用 controller 配置属性将这个控制器与显示 editorView.html 文件的路由关联 每次显示 editorView.html 视图时，都会创建一个新的 editCtrl 控制器实例，这意味着我不需要使用 $route 服务事件来了解视图何时发生更改。我可以只关注我的控制器是否被执行 以这种方式使用控制器的好处之一是适用标准的继承规则，editCtrl 嵌套在 defaultCtrl 中，并且可以访问其作用域中定义的数据和行为。这意味着我可以在顶级控制器中定义通用数据和功能，而只需要在嵌套控制器中定义特定视图的特性

向路由添加依赖 resolve 配置属性允许你指定将注入到使用 controller 属性指定的控制器中的依赖项。这些依赖项可以是服务，但 resolve 属性对于执行初始化视图所需的工作更有用。这是因为你可以将 promise 对象作为依赖项返回，在承诺被解决之前路由不会实例化控制器

```javascript
angular.module("exampleApp", ["increment", "ngResource", "ngRoute"])
    .constant("baseUrl", "http://localhost:5500/products/")
    .factory("productsResource", function ($resource, baseUrl) {
        return $resource(baseUrl + ":id", { id: "@id" },
            { create: { method: "POST" }, save: { method: "PUT" } });
    })
    .config(function ($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider.when("/edit/:id", {
            templateUrl: "/editorView.html",
            controller: "editCtrl"
        });

        $routeProvider.when("/create", {
            templateUrl: "/editorView.html",
            controller: "editCtrl"
        });

        $routeProvider.otherwise({
            templateUrl: "/tableView.html",
            controller: "tableCtrl",
            resolve: {
                data: function (productsResource) {
                    return productsResource.query();
                }
            }
        });
    })
    .controller("defaultCtrl", function ($scope, $location, productsResource) {

        $scope.data = {};

        $scope.createProduct = function (product) {
            new productsResource(product).$create().then(function (newProduct) {
                $scope.data.products.push(newProduct);
                $location.path("/list");
            });
        }

        $scope.deleteProduct = function (product) {
            product.$delete().then(function () {
                $scope.data.products.splice($scope.data.products.indexOf(product), 1);
            });
            $location.path("/list");
        }
    })
    .controller("tableCtrl", function ($scope, $location, $route, data) {

        $scope.data.products = data;

        $scope.refreshProducts = function () {
            $route.reload();
        }
    })
    .controller("editCtrl", function ($scope, $routeParams, $location) {

        $scope.currentProduct = null;

        if ($location.path().indexOf("/edit/") == 0) {
            var id = $routeParams["id"];
            for (var i = 0; i < $scope.data.products.length; i++) {
                if ($scope.data.products[i].id == id) {
                    $scope.currentProduct = $scope.data.products[i];
                    break;
                }
            }
        }

        $scope.cancelEdit = function () {
            $location.path("/list");
        }

        $scope.updateProduct = function (product) {
            product.$save();
            $location.path("/list");
        }

        $scope.saveEdit = function (product) {
            if (angular.isDefined(product.id)) {
                $scope.updateProduct(product);
            } else {
                $scope.createProduct(product);
            }
            $scope.currentProduct = {};
        }
    });
```

列表中有很多变化，我将依次引导你完成它们。最重要的是更改 "/list" 路由的定义，以便它使用 controller 和 resolve 属性

```javascript
...
$routeProvider.otherwise({
    templateUrl: "/tableView.html",
    controller: "tableCtrl",
    resolve: {
        data: function (productsResource) {
            return productsResource.query();
        }
    }
});
...
```

我指定路由应该实例化一个名为 tableCtrl 的控制器，并且我已经使用 resolve 属性来创建一个名为 data 的依赖项。data 属性设置为一个在创建 tableCtrl 控制器之前计算的函数，结果将作为名为 data 的参数传递给 tableCtrl 控制器 我使用 $resource 存取对象从服务器获取数据，这意味着它在控制器加载之前不会被实例化，因此，在此之前也不会显示 tableView.html 视图 为了能够访问路由中的存取对象，我必须创建一个新服务

```javascript
...
.factory("productsResource", function ($resource, baseUrl) {
    return $resource(baseUrl + ":id", { id: "@id" },
        { create: { method: "POST" }, save: { method: "PUT" } });
})
...
```

这与我在之前在控制器中创建 productResource 对象的代码相同，只是通过 factory 方法移动到了服务中，以便在应用程序中更广泛地访问它

```javascript
...
.controller("tableCtrl", function ($scope, $location, $route, data) {

    $scope.data.products = data;

    $scope.refreshProducts = function () {
        $route.reload();
    }
})
...
```

我通过 data 参数从服务器接收产品信息，并将其分配给 $scope.data.products 属性。带路由的控制器适用之前我所讲的控制器和作用域的继承规则，因此我必须添加包含 data 属性的对象，以确保产品数据可供应用程序中的所有控制器使用，而不仅仅是属于 tabelCtrl 控制器的作用域 在路由中添加依赖项的效果是我不再需要 listProducts 行为，因此我将其从 defaultCtrl 控制器中删除。这让 tableView.html 视图中的 Refresh 按钮失效，而无法强行加载数据，所以我定义了一个名为 refreshProducts 的新行为，它使用我之前描述的 $route.reload 方法。 最后的 JavaScript 更改是为了简化 cancelEdit 行为，在取消编辑时不再需要从服务器重新加载单个产品对象，因为当 "/list" 路由被激活时将刷新所有数据 为了反映控制器中的更改，我不得不更新 tableView.html 文件

```html
<div class="panel-body">
    <table class="table table-striped table-bordered">
        <thead>
            <tr>
                <th>Name</th>
                <th>Category</th>
                <th class="text-right">Price</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr ng-repeat="item in data.products">
                <td>{{item.name}}</td>
                <td>{{item.category}}</td>
                <td class="text-right">{{item.price | currency}}</td>
                <td class="text-center">
                    <button class="btn btn-xs btn-primary" ng-click="deleteProduct(item)">
                        Delete
                    </button>
                    <a href="/edit/{{item.id}}" class="btn btn-xs btn-primary">Edit</a>
                    <increment item="item" property-name="price" restful="true" method-name="$save" />
                </td>
            </tr>
        </tbody>
    </table>
    <div>
        <button class="btn btn-primary" ng-click="refreshProducts()">Refresh</button>
        <a href="create" class="btn btn-primary">New</a>
    </div>
</div>
```

有两个简单的变化。第一是更新 ng-repeat 指令以反映我为处理范围层次结构而采用的新数据结构。第二种是更新 "Refresh" 按钮，以便它调用 refreshProducts 行为而不是停用的 listProducts。整体效果是当 "/list" 视图被激活时自动从服务器获取数据，这简化了应用程序的代码

# 第 23 章 动画和触摸服务

## 准备示例项目

本章将继续使用前一章创建的示例

## 动画元素

$animate 服务允许你在 DOM 中添加，删除或移动元素时提供过渡效果。$animate 服务本身并不定义任何动画，而是依赖于 CSS3 动画和过渡功能

为什么以及何时使用动画服务 动画可以用来在应用程序发生重要变化时引起用户的注意，使得从一个状态到另一个状态的转变不那么突兀 动画应该是微妙的，简短的，快速的。目标是吸引用户注意某些事情发生了变化。一致，谨慎地使用动画，高于一切

安装 ngAnimation 模块 $animation 服务被定义在可选的 ngAnimate 模块中 访问 angularjs.org 网站，单击 "Download" 按钮，然后单击 "Extras"。将会显示一个 AngularJS 适用的文件列表，单击对应版本的链接然后将 angular-animate.js 文件保存到本地 angularjs 文件夹下 在 products.html 文件中添加一个脚本元素，以引入该模块

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Products</title>
    <base href="/">
    <script src="angular.js"></script>
    <script src="angular-resource.js"></script>
    <script src="angular-route.js"></script>
    <script src="angular-animate.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script src="products.js"></script>
    <script src="increment.js"></script>
</head>

<body ng-controller="defaultCtrl">
    <div class="panel panel-primary">
        <h3 class="panel-heading">Products</h3>
        <div ng-view></div>
    </div>
</body>

</html>
```

接下来我将在 products.js 文件中添加对 ngAnimate 模块的依赖

```javascript
angular.module("exampleApp", ["increment", "ngResource", "ngRoute", "ngAnimate"])
    .constant("baseUrl", "http://localhost:5500/products/")
    .factory("productsResource", function ($resource, baseUrl) {
        return $resource(baseUrl + ":id", { id: "@id" },
            { create: { method: "POST" }, save: { method: "PUT" } });
    })
    ...
```

定义并应用动画 你不直接使用 $animate 服务来应用动画。相反，你可以使用 CSS 定义动画或过渡，遵循特殊的命名约定，然后将这些名称作为类应用于元素，这些元素也具有 AngularJS 指令

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Products</title>
    <base href="/">
    <script src="angular.js"></script>
    <script src="angular-resource.js"></script>
    <script src="angular-route.js"></script>
    <script src="angular-animate.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script src="products.js"></script>
    <script src="increment.js"></script>
    <style type="text/css">
        .ngFade.ng-enter {
            transition: 0.1s linear all;
            opacity: 0;
        }

        .ngFade.ng-enter-active {
            opacity: 1;
        }
    </style>
</head>

<body ng-controller="defaultCtrl">
    <div class="panel panel-primary">
        <h3 class="panel-heading">Products</h3>
        <div ng-view class="ngFade"></div>
    </div>
</body>

</html>
```

理解这个例子中发生的事情的关键是知道一些内置指令在改变内容时支持动画

支持动画的内置指令和与之相关的名称

| 指令       | 名称                 |
| :--------- | :------------------- |
| ng-repeat  | enter、leave、remove |
| ng-view    | enter、leave         |
| ng-include | enter、leave         |
| ng-switch  | enter、leave         |
| ng-if      | enter、leave         |
| ng-class   | add、remove          |
| ng-show    | add、remove          |
| ng-hide    | add、remove          |

在向用户显示内容时使用 enter，当向用户隐藏内容时使用 leave。在 DOM 中移动内容时使用 remove。在 DOM 中添加和删除内容时使用 add 和 remove 参照以上内容你就可以理解我添加到示例中的 style 元素的内容

```html
...
<style type="text/css">
    .ngFade.ng-enter {
        transition: 0.1s linear all;
        opacity: 0;
    }

    .ngFade.ng-enter-active {
        opacity: 1;
    }
</style>
...
```

我定义了两个 CSS 类，ngFade.ng-enter 和 ngFade.ng-enter-active，这些类的名称很重要。在这种情况下，名称的第一部分 ngFade 是用于将动画或过渡应用于元素的名称

```html
...
<div ng-view class="ngFade"></div>
...
```

提示： 没有要求使用 ng 为顶级类名添加前缀，这是我为避免与其他 CSS 类冲突而采取的措施

名称的第二部分告诉 AngularJS CSS 样式的用途。此示例中有两个名称：ng-enter 和 ng-enter-active。ng - 前缀是必需的，AngularJS 不会在没有它的情况下处理动画。名称的下一部分对应于 ngAnimate 服务中与动画相关的名称。我正在使用 ng-view 指令，该指令将在向用户显示或隐藏视图时执行动画。我的样式使用前缀 ng-enter，它告诉 AngularJS 应该在向用户显示视图时使用它们 这两个样式定义了我希望 ng-view 指令使用的转换的起点和终点。ng-enter 样式定义了转换的起点细节。我指定 CSS opacity 属性最初为 0 并且转换应该在十分之一秒内执行。ng-enter-active 样式定义转换的结束点。我指定 CSS opacity 属性应为 1 总体效果是，当视图发生变化时，ng-view 指令会将 CSS 类应用于新视图，这会将其从透明转换为不透明

避免并行动画的危险 很自然地假设你必须为旧内容的离开和新内容的到来制作动画，但这样做可能会很麻烦。问题是在正常情况下，ng-view 指令将新视图添加到 DOM，然后删除旧视图。如果你尝试为显示新内容和隐藏旧内容同时添加动画，那么最终会同时显示两个内容

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Products</title>
    <base href="/">
    <script src="angular.js"></script>
    <script src="angular-resource.js"></script>
    <script src="angular-route.js"></script>
    <script src="angular-animate.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script src="products.js"></script>
    <script src="increment.js"></script>
    <style type="text/css">
        .ngFade.ng-enter {
            transition: 0.1s linear all;
            opacity: 0;
        }

        .ngFade.ng-enter-active {
            opacity: 1;
        }

        .ngFade.ng-leave {
            transition: 0.1s linear all;
            opacity: 1;
        }

        .ngFade.ng-leave-active {
            opacity: 0;
        }
    </style>
</head>

<body ng-controller="defaultCtrl">
    <div class="panel panel-primary">
        <h3 class="panel-heading">Products</h3>
        <div ng-view class="ngFade"></div>
    </div>
</body>

</html>
```

结果是有一个短暂的瞬间两个视图都可见，这会怎加用户的疑惑。ng-view 指令不用担心这个问题，新的视图将显示在旧的视图下面

## 支持触摸事件

ngTouch 模块包含 $swipe 服务，该服务用于改进对触摸屏设备的支持。ngTouch 模块中的事件提供滑动手势并取代 ng-click 指令。它解决在触控设备上的一个常见事件问题

为什么以及何时使用触摸事件 每当你想要改进对触摸屏设备的支持时，滑动手势都很有用。ngTouch 滑动事件可用于检测从左到右和从右到左的滑动手势。为避免混淆用户，请确保为响应这些手势而执行的操作与底层平台一致。例如，如果从右到左的手势通常意味着在 Web 浏览器中 "返回"，那么就不要在你的应用程序中以不同的方式解释该手势 替换 ng-click 指令对于支持触摸的浏览器非常有用，因为它们合成了单击事件，以便兼容为使用鼠标事件编写的 JavaScript 代码。触摸浏览器通常在用户点击屏幕后等待 300 毫秒，以查看是否发生了另一次点击。如果没有第二次点击，则浏览器生成触摸事件以表示 tap 和 click 事件以模拟鼠标。但是 300 毫秒足以让用户注意到延迟，并且怀疑应用程序没有响应。ngTouch 模块中替换 ng-click 的事件不会等待第二次点击并更快地发出 click 事件

安装 ngTouch 模块 $swipe 服务被定义在可选的 ngTouch 模块中 访问 angularjs.org 网站，单击 "Download" 按钮，然后单击 "Extras"。将会显示一个 AngularJS 适用的文件列表，单击对应版本的链接然后将 angular-touch.js 文件保存到本地 angularjs 文件夹下

处理触控手势 我在 angularjs 文件夹中创建了一个名为 swipe.html 的新文件

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Swipe Events</title>
    <script src="angular.js"></script>
    <script src="angular-touch.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", ["ngTouch"])
            .controller("defaultCtrl", function ($scope, $element) {
                $scope.swipeType = "<None>";
                $scope.handleSwipe = function (direction) {
                    $scope.swipeType = direction;
                }
            });
    </script>
</head>

<body ng-controller="defaultCtrl">
    <div class="panel panel-default">
        <div class="panel-body">
            <div class="well" ng-swipe-right="handleSwipe('left-to-right')" ng-swipe-left="handleSwipe('right-to-left')">
                <h4>Swipe Here</h4>
            </div>
            <div>Swipe was: {{swipeType}}</div>
        </div>
    </div>
</body>

</html>
```

我首先声明对 ngTouch 模块的依赖。事件处理程序通过 ng-swipe-left 和 ng-swipe-right 指令应用。我将这些指令应用于 div 元素，并将它们设置为调用控制器行为，以更新使用内联绑定表达式显示的作用域属性 在启用触摸的设备上或使用鼠标产生手势时将检测滑动手势

使用 ng-click 指令的替代品 我不打算演示如何使用其作为 ng-click 指令的替代品，因为它与我在第 11 章中描述的类似

# 第 24 章 供应与注入服务

在本章中，我将描述 AngularJS 在幕后使用的服务，用于注册 AngularJS 组件并注入它们以解决依赖关系。这些不是你将在日常项目中使用的功能，但它们很有趣，因为它们提供了一些有用的方法以深入 AngularJS 的幕后工作，还因为它们对于单元测试非常有用

## 为什么以及何时使用供应和注入服务

这些是你不需要直接使用的服务，因为它们提供的功能通过 Module 方法公开或由 AngularJS 在幕后使用。了解它们的工作原理有助于你更多地了解 AngularJS，并且可以在单元测试中使用

## 准备示例项目

## 注册 AngularJS 组件

$provide 服务用于注册服务等组件，以便可以注入它们以满足依赖性 ($injector 服务执行实际注入)。在大多数情况下，$provide 服务定义的方法是通过 Module 类型公开和访问的，但是有一个特别的方法不能通过 Module 提供

由 $provide 服务定义的方法

| 名称                     | 描述           |
| :----------------------- | :------------- |
| constant(name, value)    | 定义常量       |
| decorator(name, service) | 定义服务修饰器 |
| factory(name, service)   | 定义服务       |
| provider(name, service)  | 定义服务       |
| service(name, provider)  | 定义服务       |
| value(name, value)       | 定义常量服务   |

未通过 Module 类型公开的方法是 decorator，它用于拦截对服务的请求，以便提供不同的或附加的功能。你可以看到我如何使用 decorator 方法在我添加到 angularjs 文件夹中的名为 components.html 的新文件中更改 $log 服务的行为

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Components</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .config(function ($provide) {
                $provide.decorator("$log", function ($delegate) {
                    $delegate.originalLog = $delegate.log;
                    $delegate.log = function (message) {
                        $delegate.originalLog("Decorated: " + message);
                    }
                    return $delegate;
                });
            })
            .controller("defaultCtrl", function ($scope, $log) {
                $scope.handleClick = function () {
                    $log.log("Button Clicked");
                };
            });
    </script>
</head>

<body ng-controller="defaultCtrl">
    <div class="well">
        <button class="btn btn-primary" ng-click="handleClick()">Click Me!</button>
    </div>
</body>

</html>
```

此示例应用程序包含一个按钮，该按钮使用 ng-click 指令触发名为 handleClick 的作用域行为，该行为使用 $log 服务将消息写入控制台 在 Module.config 方法中我声明了对 $provide 服务的依赖，这允许我调用 decorator 方法 decorator 方法的参数是你要修饰的服务的名称 (表示为文字字符串) 和用于执行修饰操作的函数，它必须声明对 $delegate 的依赖，该委托用于将原始服务传递给你的函数

提示： 你必须为 decorator 方法的第一个参数是专用字符串值。这个参数告诉 AngularJS 你要修饰哪个服务，而不是用于声明依赖

在我的示例中，我将第一个参数设置为 "$log"，它告诉 AngularJS 我想要修饰 $log 服务。这意味着 AngularJS 将实例化 $log 服务对象并将其作为执行修饰操作函数的 $delegate 参数。在修饰器函数中，我可以自由地对 $delegate 对象进行任何我想要的更改，并且当应用程序的其他部分需要 $log 服务时，我返回的结果将用于解析 $log 服务的依赖关系

提示： 你的修饰器函数必须返回你希望用于解析指定服务的依赖项的对象。如果未返回值将使用 JavaScript 的 undefined 值解析依赖项

```javascript
...
$provide.decorator("$log", function ($delegate) {
    $delegate.originalLog = $delegate.log;
    $delegate.log = function (message) {
        $delegate.originalLog("Decorated: " + message);
    }
    return $delegate;
});
...
```

我将 log 方法重命名为 originalLog，并添加一个新的 log 方法，将 "Decorated" 一词添加到日志消息中。你可以在 JavaScript 控制台中查看输出效果

```txt
Decorated: Button Clicked
```

你可以以任何方式更改服务，但必须记住，从修饰器函数返回的对象将传递给已经对服务对象性质有所期望的组件 例如，将 $log 服务中的 log 方法重命名为 detailedLog 是没有没有意义，因为声明对 $log 服务的依赖关系的组件不会期望使用该名称的方法并继续使用原始方法名称。因此，我发现修饰服务最常用于在调用服务方法时向 JavaScript 控制台写入消息，这在调试复杂问题时很有帮助

## 管理注入

$injector 服务负责确定函数声明的依赖关系并解析这些依赖关系

$injector 服务定义的方法

| 名称                     | 描述                                           |
| :----------------------- | :--------------------------------------------- |
| annotate(fn)             | 获取指定函数的参数，包括那些与服务不对应的参数 |
| get(name)                | 获取指定名称的服务的服务对象                   |
| has(name)                | 如果指定名称的服务存在，则返回 true            |
| invoke(fn, self, locals) | 使用指定的值和指定的非服务参数值调用指定的函数 |

$injector 服务是 AngularJS 库的核心，很少需要直接使用它，但它对于理解和定制 AngularJS 的工作方式很有用。但是，对这些自定义内容应该仔细考虑并彻底测试

提示： AngularJS 包含一个名为 $controller 的相关服务，它创建控制器实例。你需要立即创建控制器的唯一情况是编写单元测试时

确定函数依赖 JavaScript 是一种流畅的动态语言，有很多值得推荐的，但它缺乏注释函数来管理其执行和行为的能力。 其他语言支持诸如用于表达函数的指令或元数据的属性的功能 缺少注释意味着 AngularJS 必须花费很多时间来实现依赖注入，依赖注入是通过将函数参数的名称与服务匹配来处理的。通常，编写函数的人要决定参数的名称，但是在 AngularJS 中，名称具有特殊的意义。$injector 服务定义的 annotate 方法用于获取函数声明的依赖项集

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Components</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .controller("defaultCtrl", function ($scope, $injector) {
                var counter = 0;

                var logClick = function ($log, $exceptionHandler, message) {
                    if (counter == 0) {
                        $log.log(message);
                        counter++;
                    } else {
                        $exceptionHandler("Already clicked");
                    }
                }

                $scope.handleClick = function () {
                    var deps = $injector.annotate(logClick);
                    for (var i = 0; i < deps.length; i++) {
                        console.log("Dependency: " + deps[i]);
                    }
                };
            });
    </script>
</head>

<body ng-controller="defaultCtrl">
    <div class="well">
        <button class="btn btn-primary" ng-click="handleClick()">Click Me!</button>
    </div>
</body>

</html>
```

在这个例子中，我定义了一个名为 logClick 的函数，它依赖于 $log 和 $exceptionHandler 服务，以及一个名为 message 的常规参数。这两个服务都没有被控制器工厂函数声明为依赖项，本章这一部分的目标是提供 logClick 函数及其依赖项，以便我可以执行它

提示： 这不是你在实际项目中可能需要做的事情，我只是在演示使用 $injector 服务，以便你可以看到 AngularJS 内部如何工作

我的第一步是从函数本身获取一组依赖项，我使用 $injector.annotate 方法

```javascript
...
var deps = $injector.annotate(logClick);
for (var i = 0; i < deps.length; i++) {
    console.log("Dependency: " + deps[i]);
}
...
```

annotate 方法的参数是你想要分析的函数，结果是函数参数的数组，我在这个例子中写入 JavaScript 控制台，产生以下输出：

```txt
Dependency: $log
Dependency: $exceptionHandler
Dependency: message
```

正如输出所示，我收到了该函数所有参数的列表。当然，并非所有这些都是服务依赖项，但我可以使用 $injector.has 方法来检查是否已注册给定服务

```javascript
...
var deps = $injector.annotate(logClick);
for (var i = 0; i < deps.length; i++) {
    if ($injector.has(deps[i])) {
        console.log("Dependency: " + deps[i]);
    }
}
...
```

我对 has 方法的调用告诉我 $log 和 $ exceptionHandler 服务可用，但 message 参数不是服务依赖项，如下面的输出所示：

```txt
Dependency: $log
Dependency: $exceptionHandler
```

获得服务实例 我可以通过 $injector.get 方法获取我需要的服务对象，该方法接收服务的名称作为参数并返回服务对象。使用我通过 get 方法获得的对象并为非服务参数提供值，我就能够执行 logClick 函数

```html
...
var deps = $injector.annotate(logClick);
var args = [];
for (var i = 0; i < deps.length; i++) {
    if ($injector.has(deps[i])) {
        args.push($injector.get(deps[i]));
    } else if (deps[i] == "message") {
        args.push("Button Clicked");
    }
}
logClick.apply(null, args);
...
```

我构建了一个执行函数所需的参数数组，它将服务和消息参数的值组合在一起。然后我使用方便的 JavaScript apply 方法，该方法允许使用其参数数组调用函数

提示： 你之前可能没有遇到过 apply 方法，因为它没有被广泛使用，尽管它非常方便。第一个参数是在执行函数时将分配给它的对象，第二个参数是将传递给函数的参数数组

如果你在浏览器中加载这个例子并单击两次按钮，将产生如下输出：

```txt
...
Button Clicked
Already clicked
...
```

简化调用过程 在这个函数中我做了很多工作，可以使用 $injector.invoke 方法负责定位服务并管理我需要提供给函数的其他值

```html
...
<script>
    angular.module("exampleApp", [])
        .controller("defaultCtrl", function ($scope, $injector) {
            var counter = 0;

            var logClick = function ($log, $exceptionHandler, message) {
                if (counter == 0) {
                    $log.log(message);
                    counter++;
                } else {
                    $exceptionHandler("Already clicked");
                }
            }

            $scope.handleClick = function () {
                var localVars = { message: "Button Clicked" };
                $injector.invoke(logClick, null, localVars);
            };
        });
</script>
...
```

invoke 方法的参数依次是：将被调用的函数，this 的值，以及一个对象，其属性对应于非服务依赖的函数参数

从根元素中获取 $injector 服务 $rootElement 服务提供对应用 ng-app 指令的 HTML 元素的访问权限，以及 AngularJS 应用程序的根目录。$rootElement 服务呈现为 jqLite 对象，这意味着你可以使用 jqLite 来定位元素或使用 jqLite 方法修改 DOM。本章感兴趣的是，$rootElement 服务对象有一个名为 injector 的方法，返回 $injector 服务对象

```html
...
<script>
    angular.module("exampleApp", [])
        .controller("defaultCtrl", function ($scope, $rootElement) {
            var counter = 0;

            var logClick = function ($log, $exceptionHandler, message) {
                if (counter == 0) {
                    $log.log(message);
                    counter++;
                } else {
                    $exceptionHandler("Already clicked");
                }
            }

            $scope.handleClick = function () {
                var localVars = { message: "Button Clicked" };
                $rootElement.injector().invoke(logClick, null, localVars);
            };
        });
</script>
...
```

# 第 25 章 单元测试

## 为什么以及何时进行单元测试

单元测试是隔离单个小功能并独立于应用程序和 AngularJS 的其他部分进行测试的技术。经过仔细应用，单元测试可以减少开发过程中稍后出现的软件缺陷数量，尤其是用户在部署应用程序之后遇到的缺陷 单元测试最适合具有强大设计技能并且对成品的用途和人员有充分了解的团队。如果没有这些技能和更广泛的视角，单元测试所创建的狭隘焦点可能过分强调单个砖块的质量，而忽略它们用于构建的房屋的整体结构。最糟糕的单元测试环境是我经常遇到的环境：拥有数千名开发人员的大型企业项目。在这些项目中，除了最广泛的术语之外，个别开发人员几乎无法了解总体目标，并让任意的快速单元测试成为质量的唯一衡量标准，而这就要求开发人员假设对外部输入的代码是错的。在这些情况下，单元测试结果为正确的项目在集成测试中将陷入困境，因为所有这些单独的假设都有所欠缺 即便如此，单元测试在仔细应用时也是一个强大的工具。只要确保你能够衡量它带来的好处，单元测试会使你明白许多开发人员天生将注意力倾向于内部，并且通过单元测试并不意味着这些单元在一起可以正常工作。使用单元测试作为更广泛的端到端测试策略的一部分。AngularJS 项目推荐使用 Protractor 进行端到端测试，可以从 [Protractor][] 了解和下载

## 准备示例项目

安装 ngMocks 模块 单元测试的工具被定义在可选的 ngMock 模块中 访问 angularjs.org 网站，单击 "Download" 按钮，然后单击 "Extras"。将会显示一个 AngularJS 适用的文件列表，单击对应版本的链接然后将 angular-mocks.js 文件保存到本地 angularjs 文件夹下

创建测试配置 在第一章的准备步骤中，我安装了 Karma 测试运行器。你需要为每个新项目配置 Karma。从 angularjs 文件夹中的命令行运行以下命令：

```txt
karma init karma.config.js
```

Karma 设置过程系统将提示你回答一些问题。这里列出了本章所需的问题和答案

| 问题                                                         | 答案                                            | 描述                                                         |
| :----------------------------------------------------------- | :---------------------------------------------- | :----------------------------------------------------------- |
| Which testing framework do you want to use ?                 | jasmine                                         | Karma 内置支持三种流行的测试框架：Jasmine，Mocha 和 QUnit。我将在本章中使用 Jasmine |
| Do you want to use Require.js ?                              | no                                              | Require.js 是一个有用的库，用于管理浏览器加载 JavaScript 文件和处理它们之间的依赖关系的方式 |
| Do you want to capture any browsers automatically ?          | Chrome                                          | Karma 能够自动在一个或多个浏览器中执行测试代码。我本章仅讨论使用 Google Chrome，但能够定位多个浏览器对于检测实施问题非常有用，尤其是对于旧版浏览器 |
| What is the location of your source and test files ?         | angular.js angular-mocks.js `*.js` `tests/*.js` | 这个答案告诉 Karma 如何找到应用程序和单元测试代码。在使用通配符导入其他文件之前，列出 AngularJS 库和 ngMocks 模块文件非常重要。你将收到警告，没有与 test/*.js 匹配的文件，但不要担心，我很快就会创建测试文件夹 |
| Should any of the files included by the previous patterns be excluded ? | 空字符串                                        | 此选项允许你过滤 Karma 将加载的文件，本章不需要              |
| Do you want Karma to watch all the files and run the tests on change ? | yes                                             | Karma 将监视文件并当任何一个文件更改时运行单元测试           |

在设置过程中会创建 karma.config.js 文件，这是一个包含配置项的 JavaScript 文件

创建示例应用程序 在 angularjs 文件夹下创建一个名为 app.html 的新文件

```html
<!DOCTYPE html>
<html ng-app="exampleApp">

<head>
    <title>Example</title>
    <script src="angular.js"></script>
    <script src="app.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
</head>

<body ng-controller="defaultCtrl">
    <div class="panel panel-default">
        <div class="panel-body">
            <p>Counter: {{counter}}</p>
            <p>
                <button class="btn btn-primary" ng-click="incrementCounter()">Increment</button>
            </p>
        </div>
    </div>
</body>

</html>
```

我在本章中设置的测试系统的一个限制是它不能用于测试 HTML 文件中的内联脚本元素的内容，并且需要对 JavaScript 文件进行操作，这就是为什么没有 AngularJS 代码的原因。 在 app.html 文件中。这不是一个严重的问题，因为我在本书的文件中只混合使用 HTML 和 JavaScript 代码来保持示例简单，你会发现在实际项目中使用单独的 JavaScript 文件更容易。以下是 app.js 文件的内容，我将其添加到 angularjs 文件夹中，其中包含示例应用程序的 AngularJS 代码

```javascript
angular.module("exampleApp", [])
    .controller("defaultCtrl", function ($scope) {

        $scope.counter = 0;

        $scope.incrementCounter = function () {
            $scope.counter++;
        }
    });
```

## 使用 Karma 和 Jasmine

为了确保测试配置正常，我将创建一个根本不使用 AngularJS 的单元测试。在介绍 ngMocks 模块提供的测试工具之前，这将让我确保 Karma 和 Jasmine 按预期启动并运行 你可以将测试文件放在项目中的任何位置，只要在创建 Karma 配置文件时指定其位置。我的偏好是将测试保存在一个文件夹中，显然足够了，这样测试不会和我的应用程序文件混淆。这是我将在本章中采用的方法，但没有严格的规则，你应该遵循对自己的工作流程最有意义的方法 Jasmine 测试是使用 JavaScript 定义的，为了开始，我在 angularjs 文件夹下创建了 tests 文件夹，并在其中添加了一个名为 firstTest.js 的文件

```javascript
describe("First Test", function () {

    // Arrange (set up a scenario)
    var counter;

    beforeEach(function () {
        counter = 0;
    });

    it("increments value", function () {
        // Act (attempt the operation)
        counter++;
        // Assert (verify the result)
        expect(counter).toEqual(1);
    })

    it("decrements value", function () {
        // Act (attempt the operation)
        counter--;
        // Assert (verify the result)
        expect(counter).toEqual(0);
    })
});
```

提示： 这个单元测试包含一个故意的问题，以便我可以演示 Karma 如何运行 Jasmine 测试。我将在后面修复这个问题

当我编写单元测试时，我遵循 "准备 / 动作 / 断言"(A/A/A) 的模式。"准备" 是指设置测试所需方案的过程。"动作" 指的是执行测试本身，"断言" 指的是检查结果以确保它是正确的 Jasmine 测试是使用 JavaScript 函数编写的，这使得编写测试成为编写应用程序代码的一个很好的扩展。示例中有五个 Jasmine 函数，我在下面对此进行了描述

| 名称       | 描述                                                        |
| :--------- | :---------------------------------------------------------- |
| describe   | 对许多相关测试进行分组 (这是可选的，但它有助于组织测试代码) |
| beforeEach | 在每次测试之前执行一个函数 (这通常用于测试的准备部分)       |
| it         | 执行一个函数来形成一个测试 (测试的动作部分)                 |
| expect     | 标识测试的结果 (测试的断言阶段的一部分)                     |
| toEqual    | 将测试结果与预期值 (测试断言阶段的另一部分) 进行比较        |

如果你不熟悉单元测试并且对这些功能名称很陌生，请不要担心，当你看到更多的例子时，你会很快掌握一切。要注意的基本顺序是 it 函数执行测试函数，以便 expect 和 toEqual 函数可用于评估结果。toEqual 函数只是 Jasmine 评估测试结果的一种方式。我列出了其他的可用功能

| 名称                         | 描述                                              |
| :--------------------------- | :------------------------------------------------ |
| expect(x).toEqual(val)       | 断言 x 与 val 具有相同的值 (但不一定是同一个对象) |
| expect(x).toBe(obj)          | 断言 x 和 obj 是同一个对象                        |
| expect(x).toMatch(regexp)    | 断言 x 匹配指定的正则表达式                       |
| expect(x).toBeDefined()      | 断言 x 已定义                                     |
| expect(x).toBeUndefined()    | 断言 x 尚未定义                                   |
| expect(x).toBeNull()         | 断言 x 为 null                                    |
| expect(x).toBeTruthy()       | 断言 x 为 true 或计算结果为 true                  |
| expect(x).toBeFalsy()        | 断言 x 为 false 或计算结果为 false                |
| expect(x).toContain(y)       | 断言 x 是包含 y 的字符串                          |
| expect(x).toBeGreaterThan(y) | 断言 x 大于 y                                     |

提示： 你可以使用 not 测试其中一种方法的反转。例如，expect (x).not.toEqual (val) 断言 x 与 val 的值不同

运行测试 我在本章前面用于设置 Karma 的配置意味着它将监视 angularjs 和 angularjs/tests 文件夹中的 JavaScript 文件，并在发生更改时运行所有 Jasmine 测试。要启动 Karma，请在 angularjs 文件夹中的命令行中输入以下命令：

```txt
karma start karma.config.js
```

Karma 将加载其配置文件并启动 Chrome 实例，以便它可以使用浏览器。它还将运行它找到的所有 Jasmine 测试，产生如下输出：

```powershell
C:\Users\Andy\Desktop\angularjs>karma start karma.config.js
23 10 2018 22:00:16.497:WARN [karma]: No captured browser, open http://localhost:9876/
23 10 2018 22:00:16.506:INFO [karma-server]: Karma v3.1.0 server started at http://0.0.0.0:9876/
23 10 2018 22:00:16.506:INFO [launcher]: Launching browsers Chrome with concurrency unlimited
23 10 2018 22:00:16.523:INFO [launcher]: Starting browser Chrome
23 10 2018 22:00:18.731:INFO [Chrome 69.0.3497 (Windows 10 0.0.0)]: Connected on socket rO6Cke4QSprKUpsOAAAA with id 23407370
Chrome 69.0.3497 (Windows 10 0.0.0) First Test decrements value FAILED
        Expected -1 to equal 0.
            at <Jasmine>
            at UserContext.<anonymous> (tests/firstTest.js:21:25)
            at <Jasmine>
Chrome 69.0.3497 (Windows 10 0.0.0): Executed 2 of 2 (1 FAILED) (0.025 secs / 0.006 secs)
TOTAL: 1 FAILED, 1 SUCCESS
```

虽然打开了浏览器窗口，但测试的输出将写入命令行控制台 Karma 使用颜色编码来清楚地表明存在问题，你应该在控制台窗口中看到一些红色文本，表明存在问题

1. 理解测试问题

   firstTest.js 文件中有两个单元测试。第一个测试递增计数器：

```javascript
   ...
   it("increments value", function () {
       // Act (attempt the operation)
       counter++;
       // Assert (verify the result)
       expect(counter).toEqual(1);
   })
   ...
```

测试名为 increments value (我将其设置为 it 函数的第一个参数)，并使用 ++ 运算符来增加计数器变量的值。然后我使用 expect 和 toEqual 来检查值是 1。另一个测试递减计数器：

```javascript
   ...
   it("decrements value", function () {
       // Act (attempt the operation)
       counter--;
       // Assert (verify the result)
       expect(counter).toEqual(0);
   })
   ...
```

测试名为 decrements value。我用 -- 运算符来减少计数器变量的值。然后使用 expect 和 toEqual 来检查值是 0。问题是我还使用了 beforeEach 函数来设置计数器变量的值：

```javascript
   ...
   beforeEach(function () {
       counter = 0;
   });
   ...
```

每次测试执行前传递给 beforeEach 的函数都会被执行，这意味着该值不会从第一个测试转移到第二个测试。而是在执行第二次测试之前将值重置为零。你可以在 Karma 输出中看到这一点：

```powershell
   ...
   Chrome 69.0.3497 (Windows 10 0.0.0) First Test decrements value FAILED
           Expected -1 to equal 0.
               at <Jasmine>
               at UserContext.<anonymous> (tests/firstTest.js:21:25)
               at <Jasmine>
   ...
```

测试名称，期望值和实际值都包含在输出中，以便你可以查看哪些测试失败

1. 解决问题

   要解决测试问题，我需要更正有关计数器变量初始值的假设

```javascript
   ...
   it("decrements value", function () {
       // Act (attempt the operation)
       counter--;
       // Assert (verify the result)
       expect(counter).toEqual(-1);
   })
   ...
```

保存更改的文件时，Karma 将自动重新运行测试并生成以下输出：

```powershell
   24 10 2018 08:10:13.539:INFO [watcher]: Changed file "C:/Users/Andy/Desktop/angularjs/tests/firstTest.js".
   Chrome 69.0.3497 (Windows 10 0.0.0): Executed 2 of 2 SUCCESS (0.006 secs / 0 secs)
   TOTAL: 2 SUCCESS
```

现在你已经了解了如何编写简单的 Jasmine 测试并让 Karma 执行它，我将转向 AngularJS 为测试应用程序组件提供的支持

## 理解模拟对象

模拟是创建替换应用程序中的关键组件的对象的过程，以允许有效的单元测试。想象一下，你需要测试使用 $http 服务发出 Ajax 请求的控制器行为。该行为取决于许多其他组件和系统：控制器所属的 AngularJS 模块，$http 服务，处理请求的服务器，包含要求数据的数据库，等等。当测试失败时，你将不知道问题是由你尝试测试的控制器行为还是由于无关的故障引起的。例如，服务器可能已崩溃或无法连接到数据库 测试目标所依赖的组件被替换为模拟对象，模拟对象实现所需组件的 API 但生成虚假的，可预测的结果。你可以更改模拟对象的行为，以创建用于测试代码的不同方案，从而可以轻松地安排各种测试，而无需无休止地重新配置测试服务器，数据库，网络等

测试对象和 API 模拟对象和 AngularJS 提供了一些其他功能，以使测试更容易。ngMocks 模块包含一组用于替换 AngularJS 组件的模拟对象

ngMocks 模块中包含的模拟对象

| 名称              | 描述                                                         |
| :---------------- | :----------------------------------------------------------- |
| angular.mock      | 用于创建模拟模块并解决依赖关系                               |
| $exceptionHandler | $exceptionHandler 服务的模拟实现，它重新生成它接收的异常     |
| $interval         | $interval 服务的模拟实现，允许时间向前移动以按需触发计划的功能 |
| $log              | $log 服务的模拟实现，它通过一组属性公开它接收的消息，每个属性对应一个实际服务定义的方法 |
| $timeout          | $timeout 服务的模拟实现，允许定时器以编程方式过期，以便按需执行相关的函数 |

大多数模拟对象都相当简单，但它们为创建单元测试提供了良好的基础，在接下来的部分中，我将向你展示如何使用它们来测试不同类型的 AngularJS 组件 angular.mock 对象提供了加载模块的方法，并允许在单元测试中解析依赖项

由 angular.mock 对象定义的方法

| 名称         | 描述                                      |
| :----------- | :---------------------------------------- |
| module(name) | 加载指定的模块                            |
| inject(fn)   | 解析依赖关系并将它们注入函数              |
| dump(object) | 序列化 AngularJS 对象 (例如 service 对象) |

除了 ngMocks 模块，AngularJS 还提供了一些对单元测试有用的方法和服务

单元测试的其他方法和服务

| 名称              | 描述                 |
| :---------------- | :------------------- |
| $rootScope.new()  | 创建一个新的作用域   |
| $controller(name) | 创建指定控制器的实例 |
| $filter(name)     | 创建指定过滤器的实例 |

## 测试控制器

首先，我将向你展示如何测试一个控制器，它非常简单，并且我将介绍 AngularJS 模拟对象的一些基本特性。我在 anguljs/TestCube 文件夹中添加了一个名为 controllerTest.js 的文件

```javascript
describe("Controller Test", function () {

    // Arrange
    var mockScope = {};
    var controller;

    beforeEach(angular.mock.module("exampleApp"));

    beforeEach(angular.mock.inject(function ($controller, $rootScope) {
        mockScope = $rootScope.$new();
        controller = $controller("defaultCtrl", {
            $scope: mockScope
        });
    }));

    // Act and Assess
    it("Creates variable", function () {
        expect(mockScope.counter).toEqual(0);
    })

    it("Increments counter", function () {
        mockScope.incrementCounter();
        expect(mockScope.counter).toEqual(1);
    });
});
```

了解正在测试的内容 记住，控制器通过其作用域向视图提供数据和行为，所有这些都是在控制器的工厂函数中设置的。这意味着创建控制器实际上是在测试的安排部分完成的，而动作和断言部分是在作用域上执行的

准备测试 我需要两件事情来执行这个测试：一个控制器的实例和一个传递给它工厂函数的作用域。为了达到这个目标，我必须做一些准备。第一步是加载包含控制器的模块，我这样做：

```javascript
...
beforeEach(angular.mock.module("exampleApp"));
...
```

默认情况下，只有默认的 AngularJS 模块被加载，这意味着你必须为测试中需要的模块调用 module 方法，包括可选的 AngularJS 模块，如 ngResource 和 ngAnimate。我正在测试一个在 exampleApp 模块中定义的控制器，这是我需要加载的唯一模块

提示： 你不必使用 angular.mock.module 前缀。angular.mock 对象定义的方法也是全局定义的，这意味着你可以使用 module ("exampleApp") 替换对 angular.mock.module ("exampleApp") 的调用。 我的偏好是使用更长的形式，因为它使我调用的方法的来源更加明显

1. 解决依赖关系

   正如你在本书中所看到的，依赖注入是 AngularJS 工作方式的重要组成部分，这意味着单元测试需要能够解析依赖关系才能运行。angular.mock.inject 方法将解析它传递的函数的依赖关系，这提供了对测试所需服务的访问，如下所示：

```javascript
   ...
   beforeEach(angular.mock.inject(function ($controller, $rootScope) {
       mockScope = $rootScope.$new();
       controller = $controller("defaultCtrl", {
           $scope: mockScope
       });
   }));
   ...
```

我传递给 inject 方法的函数声明了对 $controller 和 $rootScope 服务的依赖关系。通常，inject 方法用于准备单元测试 我之前显示的函数的目标是创建一个新的作用域并将其传递给示例应用程序中的控制器实例，以便它可以定义其行为和数据。$rootScope 服务定义了一个创建新作用域的 $new 方法，$controller 服务是一个用于实例化控制器对象的函数。$controller 服务函数的参数是控制器的名称 (本例中为 defaultCtrl) 和一个对象，其属性将用于解析控制器工厂函数声明的依赖项。我的简单控制器只需要其工厂函数的作用域，但更复杂的控制器将需要其他服务 (你可以通过注入方法获得) 传递给 inject 方法的函数完成后，控制器将被实例化，其工厂函数将在我创建的作用域上运行。我将 scope 对象分配给一个名为 mockScope 的变量，然后我可以在动作和断言阶段使用它

1. 执行和评估测试

   该测试最重要部分是创建作用域和实例化控制器的设置。测试本身非常简单，我只是检查范围是否有一个名为 counter 的属性，并且调用 incrementCounter 行为正确地更改了值：

```javascript
   ...
   it("Creates variable", function () {
       expect(mockScope.counter).toEqual(0);
   })

   it("Increments counter", function () {
       mockScope.incrementCounter();
       expect(mockScope.counter).toEqual(1);
   });
   ...
```

当你保存 controllerTest.js 文件时，Karma 将运行测试并报告结果，如下所示:

```powershell
   24 10 2018 20:37:59.238:INFO [watcher]: Changed file "C:/Users/Andy/Desktop/angularjs/tests/controllerTest.js".
   Chrome 69.0.3497 (Windows 10 0.0.0): Executed 4 of 4 SUCCESS (0.022 secs / 0.011 secs)
   TOTAL: 4 SUCCESS
```

## 使用模拟对象

模拟 HTTP 响应 $httpBackend 服务提供了一个底层 API，$http 服务使用它来发出 Ajax 请求 (以及 $resource 服务，后者依赖于 $http)。ngMocks 模块中包含的模拟服务 $httpBackend 可以轻松地一致地模拟来自服务器的响应，从而将一个代码单元与真实服务器和网络的变幻莫测分离开来

```javascript
angular.module("exampleApp", [])
    .controller("defaultCtrl", function ($scope, $http) {

        $http.get("productData.json").then(function (response) {
            $scope.products = response.data;
        });

        $scope.counter = 0;

        $scope.incrementCounter = function () {
            $scope.counter++;
        }
    });
```

控制器请求 productData.json URL 并在请求成功时接收响应将数据分配给名为 products 的 scope 属性。为了测试这个新功能，我扩展了 tests/controllerTest.js 文件

```javascript
describe("Controller Test", function () {

    // Arrange
    var mockScope, controller, backend;

    beforeEach(angular.mock.module("exampleApp"));

    beforeEach(angular.mock.inject(function ($httpBackend) {
        backend = $httpBackend;
        backend.expect("GET", "productData.json").respond(
            [{ "name": "Apples", "category": "Fruit", "price": 1.20 },
            { "name": "Bananas", "category": "Fruit", "price": 2.42 },
            { "name": "Pears", "category": "Fruit", "price": 2.02 }]);
    }));

    beforeEach(angular.mock.inject(function ($controller, $rootScope, $http) {
        mockScope = $rootScope.$new();
        $controller("defaultCtrl", {
            $scope: mockScope,
            $http: $http
        });
        backend.flush();
    }));

    // Act and Assess
    it("Creates variable", function () {
        expect(mockScope.counter).toEqual(0);
    })

    it("Increments counter", function () {
        mockScope.incrementCounter();
        expect(mockScope.counter).toEqual(1);
    });

    it("Makes an Ajax request", function () {
        backend.verifyNoOutstandingExpectation();
    });

    it("Processes the data", function () {
        expect(mockScope.products).toBeDefined();
        expect(mockScope.products.length).toEqual(3);
    });

    it("Preserves the data order", function () {
        expect(mockScope.products[0].name).toEqual("Apples");
        expect(mockScope.products[1].name).toEqual("Bananas");
        expect(mockScope.products[2].name).toEqual("Pears");
    });
});
```

模拟服务 $httpBackend 提供了一个 API，它将通过 $http 服务发出的请求与预制结果进行匹配，并控制何时发送这些预制结果。$httpBackend 服务定义了一些方法

由 $httpBackend 服务定义服务所定义的方法

| 名称                                          | 描述                                                 |
| :-------------------------------------------- | :--------------------------------------------------- |
| expect(method, url, data, headers)            | 定义与方法和 URL 匹配的请求 (具有可选数据和标头匹配) |
| flush() flush(count)                          | 发送等待结果 (如果使用可选参数，则返回指定的响应数)  |
| resetExpectations()                           | 重新设定期望值                                       |
| verifyNoOutstandingExpectation()              | 检查是否已收到所有预期请求                           |
| respond(data) response(status, data, headers) | 定义预期请求的响应                                   |

提示： 为了方便查阅，我在表中包含了 respond 方法，但它实际上应用于 expect 方法的结果

使用模拟服务 $httpBackend 的过程相当简单，有以下步骤：

* 定义你希望获得的请求以及它们的响应
* 发送响应
* 检查是否已收到预期请求
* 评估结果

1. 定义期望的请求和响应

   expect 方法用于定义你希望测试的组件发出的请求。必需的参数是 HTTP 方法和将要请求的 URL，但你也可以提供将用于缩小用来匹配请求的数据和标头：

```javascript
   ...
   beforeEach(angular.mock.inject(function ($httpBackend) {
       backend = $httpBackend;
       backend.expect("GET", "productData.json").respond(
           [{ "name": "Apples", "category": "Fruit", "price": 1.20 },
           { "name": "Bananas", "category": "Fruit", "price": 2.42 },
           { "name": "Pears", "category": "Fruit", "price": 2.02 }]);
   }));
   ...
```

在示例单元测试中，我使用 inject 方法获取 $httpBackend 服务以调用 expect 方法。我不必采取任何特殊步骤来获取模拟对象，因为 ngMocks 模块的内容会覆盖默认服务实现

提示： 模拟服务 $httpBackend 定义的 expect 方法与 Jasmine 用于评估测试结果定义的 expect 方法完全无关

我告诉 $httpBackend 期望使用 HTTP GET 方法为 productData.json URL 做出请求，匹配 app.js 文件中的控制器发出的请求 expect 方法的结果是可以调用 respond 方法的对象。我使用了此方法的基本形式，该方法为将返回的数据采用单个参数来模拟来自服务器的响应。请注意，我不必将数据编码为 JSON。这是自动完成的

1. 发送响应

   为了反映 Ajax 请求的异步性质，$httpBackend 模拟服务将不会发送其预设响应，直到调用 flush 方法。这允许你测试长延迟或超时的影响，但是对于此测试我希望尽快发送响应，因此我在执行控制器工厂函数后立即调用 flush 方法，如下所示：

```javascript
   ...
   beforeEach(angular.mock.inject(function ($controller, $rootScope, $http) {
       mockScope = $rootScope.$new();
       $controller("defaultCtrl", {
           $scope: mockScope,
           $http: $http
       });
       backend.flush();
   }));
   ...
```

调用 flush 方法可以解析 $http 服务返回的 promise，并执行在控制器中定义的在请求成功时执行函数。请注意，我必须使用 inject 方法获取 $http 服务，以便我可以通过 $controller 服务将其传递给工厂函数

1. 检查是否收到了预期的请求

   $httpBackend 服务希望每次使用 expect 方法时都会收到一个 HTTP 请求，这样可以很容易地检查正在测试的代码是否已经完成了你期望的所有请求。我的代码只提出了一个请求，但我仍然通过在 Jasmine 函数中调用 verifyNoOutstandingExpectation 方法来检查我的所有预期是否都已满足，如下所示：

```javascript
   ...
   it("Makes an Ajax request", function () {
       backend.verifyNoOutstandingExpectation();
   });
   ...
```

如果未收到所有预期的请求，则 verifyNoOutstandingExpectation 方法将抛出异常。因此，你不需要使用 Jasmine expect 方法

1. 评估结果

   最后一步是评估测试结果。由于我正在测试控制器，因此我对我创建的范围对象执行测试，如下所示：

```javascript
   ...
   it("Processes the data", function () {
       expect(mockScope.products).toBeDefined();
       expect(mockScope.products.length).toEqual(3);
   });

   it("Preserves the data order", function () {
       expect(mockScope.products[0].name).toEqual("Apples");
       expect(mockScope.products[1].name).toEqual("Bananas");
       expect(mockScope.products[2].name).toEqual("Pears");
   });
   ...
```

这些是简单的测试，以确保控制器不会破坏或重新排列数据，尽管在实际项目中，HTTP 测试的重点通常集中在请求而不是数据处理上

模拟时间周期 $interval 和 $timeout 服务定义了额外的方法，允许您显式触发被测试代码注册的回调函数

```javascript
angular.module("exampleApp", [])
    .controller("defaultCtrl", function ($scope, $http, $interval, $timeout) {

        $scope.intervalCounter = 0;
        $scope.timerCounter = 0;

        $interval(function () {
            $scope.intervalCounter++;
        }, 5000, 10);

        $timeout(function () {
            $scope.timerCounter++;
        }, 5000);

        $http.get("productData.json").then(function (response) {
            $scope.products = response.data;
        });

        $scope.counter = 0;

        $scope.incrementCounter = function () {
            $scope.counter++;
        }
    });
```

我定义了两个变量 intervalCounter 和 timerCounter，它们通过传递给 $interval 和 $timeout 服务的函数递增。这些函数在五秒延迟后被调用，这在单元测试中并不理想，因为想法是快速地运行大量测试。$interval 和 $timeout 服务定义了一些方法

由 $interval 和 $timeout 服务定义的方法

| 服务      | 方法                   | 描述                       |
| :-------- | :--------------------- | :------------------------- |
| $timeout  | flush(millis)          | 按指定的毫秒数推进计时器   |
| $timeout  | verifyNoPendingTasks() | 检查是否存在尚未调用的回调 |
| $interval | flush(millis)          | 按指定的毫秒数推进计时器   |

flush 方法可用于向前跳过

```javascript
describe("Controller Test", function () {

    // Arrange
    var mockScope, controller, backend, mockInterval, mockTimeout;

    beforeEach(angular.mock.module("exampleApp"));

    beforeEach(angular.mock.inject(function ($httpBackend) {
        backend = $httpBackend;
        backend.expect("GET", "productData.json").respond(
            [{ "name": "Apples", "category": "Fruit", "price": 1.20 },
            { "name": "Bananas", "category": "Fruit", "price": 2.42 },
            { "name": "Pears", "category": "Fruit", "price": 2.02 }]);
    }));

    beforeEach(angular.mock.inject(function ($controller, $rootScope, $http, $interval, $timeout) {
        mockScope = $rootScope.$new();
        mockInterval = $interval;
        mockTimeout = $timeout;
        $controller("defaultCtrl", {
            $scope: mockScope,
            $http: $http,
            $interval: mockInterval,
            $timeout: mockTimeout
        });
        backend.flush();
    }));

    // Act and Assess
    it("Creates variable", function () {
        expect(mockScope.counter).toEqual(0);
    })

    it("Increments counter", function () {
        mockScope.incrementCounter();
        expect(mockScope.counter).toEqual(1);
    });

    it("Makes an Ajax request", function () {
        backend.verifyNoOutstandingExpectation();
    });

    it("Processes the data", function () {
        expect(mockScope.products).toBeDefined();
        expect(mockScope.products.length).toEqual(3);
    });

    it("Preserves the data order", function () {
        expect(mockScope.products[0].name).toEqual("Apples");
        expect(mockScope.products[1].name).toEqual("Bananas");
        expect(mockScope.products[2].name).toEqual("Pears");
    });

    it("Limits interval to 10 updates", function () {
        for (var i = 0; i < 11; i++) {
            mockInterval.flush(5000);
        }
        expect(mockScope.intervalCounter).toEqual(10);
    });

    it("Increments timer counter", function () {
        mockTimeout.flush(5000);
        expect(mockScope.timerCounter).toEqual(1);
    });
});
```

测试日志 模拟 $log 服务跟踪它收到的日志消息，并通过添加到实际服务方法名称的 logs 属性显示它们：log.logs，debug.logs，warn.logs 等。这些属性可以测试单元代码是否正确记录消息

```javascript
angular.module("exampleApp", [])
    .controller("defaultCtrl", function ($scope, $http, $interval, $timeout, $log) {

        $scope.intervalCounter = 0;
        $scope.timerCounter = 0;

        $interval(function () {
            $scope.intervalCounter++;
        }, 5000, 10);

        $timeout(function () {
            $scope.timerCounter++;
        }, 5000);

        $http.get("productData.json").then(function (response) {
            $scope.products = response.data;
            $log.log("There are " + response.data.length + " items");
        });

        $scope.counter = 0;

        $scope.incrementCounter = function () {
            $scope.counter++;
        }
    });
```

每次调用在 $interval 服务中注册的回调函数时，我都会记录一条消息

```javascript
describe("Controller Test", function () {

    // Arrange
    var mockScope, controller, backend, mockInterval, mockTimeout, mockLog;

    beforeEach(angular.mock.module("exampleApp"));

    beforeEach(angular.mock.inject(function ($httpBackend) {
        backend = $httpBackend;
        backend.expect("GET", "productData.json").respond(
            [{ "name": "Apples", "category": "Fruit", "price": 1.20 },
            { "name": "Bananas", "category": "Fruit", "price": 2.42 },
            { "name": "Pears", "category": "Fruit", "price": 2.02 }]);
    }));

    beforeEach(angular.mock.inject(function ($controller, $rootScope, $http, $interval, $timeout, $log) {
        mockScope = $rootScope.$new();
        mockInterval = $interval;
        mockTimeout = $timeout;
        mockLog = $log;
        $controller("defaultCtrl", {
            $scope: mockScope,
            $http: $http,
            $interval: mockInterval,
            $timeout: mockTimeout,
            $log: mockLog
        });
        backend.flush();
    }));

    // Act and Assess
    it("Creates variable", function () {
        expect(mockScope.counter).toEqual(0);
    })

    it("Increments counter", function () {
        mockScope.incrementCounter();
        expect(mockScope.counter).toEqual(1);
    });

    it("Makes an Ajax request", function () {
        backend.verifyNoOutstandingExpectation();
    });

    it("Processes the data", function () {
        expect(mockScope.products).toBeDefined();
        expect(mockScope.products.length).toEqual(3);
    });

    it("Preserves the data order", function () {
        expect(mockScope.products[0].name).toEqual("Apples");
        expect(mockScope.products[1].name).toEqual("Bananas");
        expect(mockScope.products[2].name).toEqual("Pears");
    });

    it("Limits interval to 10 updates", function () {
        for (var i = 0; i < 11; i++) {
            mockInterval.flush(5000);
        }
        expect(mockScope.intervalCounter).toEqual(10);
    });

    it("Increments timer counter", function () {
        mockTimeout.flush(5000);
        expect(mockScope.timerCounter).toEqual(1);
    });

    it("Writes log messages", function () {
        expect(mockLog.log.logs.length).toEqual(1);
    });
});
```

控制器工厂函数在收到对其 Ajax 请求的响应时将消息写入 $log.log 方法。在单元测试中，我读取了 $log.log.logs 数组的长度，该数组是存储写入 $log.log 方法的消息的位置。除了 logs 属性之外，模拟 $log 服务还定义了一些方法

由模拟 $log 服务定义的方法

| 名称          | 描述                               |
| :------------ | :--------------------------------- |
| assertEmpty() | 如果已写入任何日志消息，则引发异常 |
| reset()       | 清除存储的消息                     |

## 测试其它组件

到目前为止，我向您展示的所有测试都是针对控制器的，但正如前面的章节所示，AngularJS 应用程序中有几种类型的组件。在接下来的部分中，我将演示如何为每个部分编写一个简单的单元测试

测试过滤器 我在 app.js 文件中添加了过滤器

```javascript
angular.module("exampleApp", [])
    .controller("defaultCtrl", function ($scope, $http, $interval, $timeout, $log) {

        $scope.intervalCounter = 0;
        $scope.timerCounter = 0;

        $interval(function () {
            $scope.intervalCounter++;
        }, 5000, 10);

        $timeout(function () {
            $scope.timerCounter++;
        }, 5000);

        $http.get("productData.json").then(function (response) {
            $scope.products = response.data;
            $log.log("There are " + response.data.length + " items");
        });

        $scope.counter = 0;

        $scope.incrementCounter = function () {
            $scope.counter++;
        }
    })
    .filter("labelCase", function () {
        return function (value, reverse) {
            if (angular.isString(value)) {
                var intermediate = reverse ? value.toUpperCase() : value.toLowerCase();
                return (reverse ? intermediate[0].toLowerCase() :
                    intermediate[0].toUpperCase()) + intermediate.substr(1);
            } else {
                return value;
            }
        };
    });
```

我创建了 tests/filterTest.js 文件用来测试过滤器

```javascript
describe("Filter Tests", function () {

    var filterInstance;

    beforeEach(angular.mock.module("exampleApp"));

    beforeEach(angular.mock.inject(function ($filter) {
        filterInstance = $filter("labelCase");
    }));

    it("Changes case", function () {
        var result = filterInstance("test phrase");
        expect(result).toEqual("Test phrase");
    });

    it("Reverse case", function () {
        var result = filterInstance("test phrase", true);
        expect(result).toEqual("tEST PHRASE");
    });
});
```

我使用 inject 方法获取 $filter 服务的一个实例，并使用它来获取过滤器的一个实例，我将其分配给一个名为 filterInstance 的变量。我在 beforeEach 函数中获取了 filter 对象，这意味着我为每个测试获得了一个新的实例

测试指令 由于指令应用于 HTML 并且可以修改 HTML，因此测试指令会稍微复杂一些。这意味着指令的单元测试依赖于 jqLite 和 $compile 服务，我向 app.js 文件添加了指令

```javascript
angular.module("exampleApp", [])
    .controller("defaultCtrl", function ($scope, $http, $interval, $timeout, $log) {

        $scope.intervalCounter = 0;
        $scope.timerCounter = 0;

        $interval(function () {
            $scope.intervalCounter++;
        }, 5000, 10);

        $timeout(function () {
            $scope.timerCounter++;
        }, 5000);

        $http.get("productData.json").then(function (response) {
            $scope.products = response.data;
            $log.log("There are " + response.data.length + " items");
        });

        $scope.counter = 0;

        $scope.incrementCounter = function () {
            $scope.counter++;
        }
    })
    .filter("labelCase", function () {
        return function (value, reverse) {
            if (angular.isString(value)) {
                var intermediate = reverse ? value.toUpperCase() : value.toLowerCase();
                return (reverse ? intermediate[0].toLowerCase() :
                    intermediate[0].toUpperCase()) + intermediate.substr(1);
            } else {
                return value;
            }
        };
    })
    .directive("unorderedList", function () {
        return function (scope, element, attrs) {
            var data = scope[attrs["unorderedList"]];
            if (angular.isArray(data)) {
                var listElem = angular.element("<ul>");
                element.append(listElem);
                for (var i = 0; i < data.length; i++) {
                    listElem.append(angular.element('<li>').text(data[i].name));
                }
            }
        }
    });
```

该指令使用从作用域中获取的值数组生成无序列表。我创建了 tests/directiveTest.js 文件用来测试该指令

```javascript
describe("Directive Tests", function () {

    var mockScope;

    var compileService;

    beforeEach(angular.mock.module("exampleApp"));

    beforeEach(angular.mock.inject(function ($rootScope, $compile) {
        mockScope = $rootScope.$new();
        compileService = $compile;
        mockScope.data = [
            { name: "Apples", category: "Fruit", price: 1.20, expiry: 10 },
            { name: "Bananas", category: "Fruit", price: 2.42, expiry: 7 },
            { name: "Pears", category: "Fruit", price: 2.02, expiry: 6 }];
    }));

    it("Generates list elements", function () {

        var compileFn = compileService("<div unordered-list='data'></div>");
        var elem = compileFn(mockScope);

        expect(elem.children("ul").length).toEqual(1);
        expect(elem.find("li").length).toEqual(3);
        expect(elem.find("li").eq(0).text()).toEqual("Apples");
        expect(elem.find("li").eq(1).text()).toEqual("Bananas");
        expect(elem.find("li").eq(2).text()).toEqual("Pears");
    });
});
```

我使用 inject 方法获取 $rootScope 和 $compile 服务。我创建了一个新的作用域，并将该指令将使用的数据分配给 data 属性。我保留了对 $compile 服务的引用，以便我可以在测试中使用它。我编译了一个应用了该指令的 HTML 片段，指定数据源是作用域数据数组。这会产生一个我用模拟作用域调用的函数来从指令获取 HTML 输出。为了评估结果，我使用 jqLite 来检查指令生成的元素的结构和顺序

测试服务 获取要测试的服务实例很容易，因为可以使用 inject 方法，就像我在早期测试中获取内置和模拟服务一样

```javascript
angular.module("exampleApp", [])
    .controller("defaultCtrl", function ($scope, $http, $interval, $timeout, $log) {

        $scope.intervalCounter = 0;
        $scope.timerCounter = 0;

        $interval(function () {
            $scope.intervalCounter++;
        }, 5000, 10);

        $timeout(function () {
            $scope.timerCounter++;
        }, 5000);

        $http.get("productData.json").then(function (response) {
            $scope.products = response.data;
            $log.log("There are " + response.data.length + " items");
        });

        $scope.counter = 0;

        $scope.incrementCounter = function () {
            $scope.counter++;
        }
    })
    .filter("labelCase", function () {
        return function (value, reverse) {
            if (angular.isString(value)) {
                var intermediate = reverse ? value.toUpperCase() : value.toLowerCase();
                return (reverse ? intermediate[0].toLowerCase() :
                    intermediate[0].toUpperCase()) + intermediate.substr(1);
            } else {
                return value;
            }
        };
    })
    .directive("unorderedList", function () {
        return function (scope, element, attrs) {
            var data = scope[attrs["unorderedList"]];
            if (angular.isArray(data)) {
                var listElem = angular.element("<ul>");
                element.append(listElem);
                for (var i = 0; i < data.length; i++) {
                    listElem.append(angular.element('<li>').text(data[i].name));
                }
            }
        }
    })
    .factory("counterService", function () {
        var counter = 0;
        return {
            incrementCounter: function () {
                counter++;
            },
            getCounter: function () {
                return counter;
            }
        }
    });
```

我使用之前描述的 factory 方法来定义维护计数器的服务，并定义递增和返回计数器值的方法。这本身并不是一项有用的服务，但它让我演示了测试服务的过程。我创建了 tests/serviceTest.js 文件用来测试该服务

```javascript
describe("Service Tests", function () {

    beforeEach(angular.mock.module("exampleApp"));

    it("Increments the counter", function () {
        angular.mock.inject(function (counterService) {
            expect(counterService.getCounter()).toEqual(0);
            counterService.incrementCounter();
            expect(counterService.getCounter()).toEqual(1);
        });
    });
});
```

仅仅为了一些变化，我使用 inject 函数来获取 Jasmine 中的服务对象。然后，我测试计数器值，增加它，然后再次测试。AngularJS 为单元测试提供的工具主要面向实例化服务，这使得它们简单易用

<!-- links -->
[HTML5 权威指南]: open?HTML5-权威指南
[Protractor]: https://github.com/angular/protractor
<!-- images -->
[Logo]: /_posts/note/.markdown/2018-N04_AngularJS-高级程序设计/images/01.jpg "AngularJS-高级程序设计"
[MVC模式的服务器端实现]: /_posts/note/.markdown/2018-N04_AngularJS-高级程序设计/images/02.jpg "MVC模式的服务器端实现"
[MVC模式的AngularJS实现]: /_posts/note/.markdown/2018-N04_AngularJS-高级程序设计/images/03.jpg "MVC模式的AngularJS实现"
[购物车基本流程]: /_posts/note/.markdown/2018-N04_AngularJS-高级程序设计/images/04.jpg "购物车基本流程"
[使用整体控制器]: /_posts/note/.markdown/2018-N04_AngularJS-高级程序设计/images/05.jpg "使用整体控制器"
[创建同一个控制器的多个实例]: /_posts/note/.markdown/2018-N04_AngularJS-高级程序设计/images/06.jpg "创建同一个控制器的多个实例"
[在使用多个控制器时作用域的层级结构]: /_posts/note/.markdown/2018-N04_AngularJS-高级程序设计/images/07.jpg "在使用多个控制器时作用域的层级结构"
[在使用子控制器时的作用域层次结构]: /_posts/note/.markdown/2018-N04_AngularJS-高级程序设计/images/08.jpg "在使用子控制器时的作用域层次结构"
[当独立使用控制器时的作用域层次结构]: /_posts/note/.markdown/2018-N04_AngularJS-高级程序设计/images/09.jpg "当独立使用控制器时的作用域层次结构"
[在控制器作用域上运行的指令的多个实例]: /_posts/note/.markdown/2018-N04_AngularJS-高级程序设计/images/10.jpg "在控制器作用域上运行的指令的多个实例"
[为指令的每个实例创建控制器的效果]: /_posts/note/.markdown/2018-N04_AngularJS-高级程序设计/images/11.jpg "为指令的每个实例创建控制器的效果"
[在单个控制器中为指令的每个实例赋予其自己的作用域]: /_posts/note/.markdown/2018-N04_AngularJS-高级程序设计/images/12.jpg "在单个控制器中为指令的每个实例赋予其自己的作用域"
[隔离的作用域的效果]: /_posts/note/.markdown/2018-N04_AngularJS-高级程序设计/images/13.jpg "隔离的作用域的效果"
[在隔离作用域上的单项数据绑定]: /_posts/note/.markdown/2018-N04_AngularJS-高级程序设计/images/14.jpg "在隔离作用域上的单项数据绑定"
<!-- files -->
