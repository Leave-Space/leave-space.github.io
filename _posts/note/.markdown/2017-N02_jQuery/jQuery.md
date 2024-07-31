
# jQuery

> ![Logo][]

## 学习文档

[jQuery(en-us)][]  

[jQuery(zh-cn)][]

## 选择器

### 属性选择器

```javascript
.("selector[name="value"]")
// 指定属性是给定值的元素

.("selector[name*='value']")
// 指定属性包含给定字符串的元素

.("selector[name~='value']")
// 指定属性用空格分隔的值中包含给定值的元素

.("selector[name|='value']")
// 指定属性值等于给定值或以该值为前缀("value-xxx")的元素

.("selector[name^="value"]")
// 指定属性是以给定字符串开始的元素

.("selector[name$="value"]")
// 指定属性以给定值结尾的元素

.("selector[name!="value"]")
// 不存在指定属性，或者指定的属性值不等于给定值的元素

.("selector[name]")
// 具有指定属性的元素，属性值可以是任何值的元素

.("selector[name="value"][name2="value2"]")
// 匹配所有指定的属性筛选器的元素
```

### 基础选择器

```javascript
.("*")
// 所有的元素

.("element")
// 一类元素

.(".className")
// 具有指定类名的元素

.("#id")
// 具有指定id的元素

.("selector1,selector2,selectorN")
// 多个选择器组合
```

### 基础过滤

```javascript
.("selector:animated")
// 正在执行动画效果的元素

.("selector:eq(index)")
// 在匹配的集合中选择索引值为index的元素

.("selector:gt(index)")
// 在匹配的集合中选择索引值大于index的元素

.("selector:lt(index)")
// 在匹配的集合中选择索引值小于index的元素

.slice(start, [end])
// 在匹配的集合中选择索引值在start和end之间的元素

.("selector:odd")
// 选择所引值为奇数的元素

.("selector:even")
// 选择所引值为偶数的元素

.("selector:first")
.first()
// 选择第一个匹配的元素

.("selector:last")
.last()
// 选择最后一个匹配的元素

.("selector:header")
// 选择所有标题元素(h1、h2、h3...)

.("selector::lang(language)")
// 选择语言等于language的元素

.(":root")
// 选择该文档的根元素

.("selector:target")
// 选择由文档URI的格式化识别码表示的目标元素

.is(selector)
// 选定元素是selector要求的元素

.not(selector)
// 选定元素不是selector要求的元素

.map(callback(index, domElement))
// 选定元素中的所有元素
```

### 子元素过滤

```javascript
.("selector:first-child")
// 父级元素下的第一个子元素

.("selector:last-child")
// 父级元素下的最后一个子元素

.("selector:first-of-type")
// 同属于一个父元素之下，并且标签名相同的子元素中的第一个元素

.("selector:last-of-type")
// 同属于一个父元素之下，并且标签名相同的子元素中最后一个元素

.("selector:nth-child(n)")
// 第n个子元素，元素索引从1开始

.("selector:nth-last-child(n)")
// 倒数第n个子元素，元素索引从1开始

.eq(index)
// 第n个子元素，元素索引从1开始

.("selector:nth-of-type(n))
// 同属于一个父元素之下，并且标签名相同的子元素中的第n个

.("selector:nth-last-of-type(n))
// 同属于一个父元素之下，并且标签名相同的子元素中的倒数第n个，元素索引从1开始

.("selector:only-child")
// 父元素下唯一的子元素

.("selector:only-of-type")
// 父元素下标签名唯一的子元素

.filter(selector)
// 选定元素中满足selector要求的元素
```

### 内容过滤

```javascript
.("selector:contains(text)")
// 包含指定文本的元素

.("selector:empty()")
// 内容为空的元素

.("selector:parent")
// 内容不为空的元素

.("xxx:has(selector)")
.has(selector)
// 元素或其子孙元素至少包含一个满足selector要求的元素的元素
```

### 表单

```javascript
.("selector:button")
// 按钮

.("selector:checkbox")
// 复选框

.("selector:radio")
// 单选框

.("selector:text")
// 文本框

.("selector:password")
// 密码框

.("selector:image")
// 图像元素

.("selector:file")
// File

.("selector:reset")
// reset

.("selector:submit")
// 提交

.("selector:input")
// 所有input元素


.("selector:focus")
// 获得焦点的元素

.("selector:checked")
// 被勾选的元素

.("selector:selected")
// 被选中的元素

.("selector:disabled")
// 被禁用的元素

.("selector:enabled")
// 可用的元素
```

### 层级

```javascript
.("parent>child")
// 直接子元素

.("selector selector")
// 满足selector的后代元素

.("selector + selector")
// 元素后的第一个兄弟元素

.(selectorx ~ selector)
// 元素后的所有兄弟元素
```

### 可见性过滤

```javascript
.("selector:hidden")
// 隐藏的元素

.("selector:visible")
// 可见的元素
```

## 树遍历

```javascript
.children([selector])
// 选定元素子元素中满足selector要求的所有元素

.find(selector)
// 选定元素子孙元素中满足selector要求的所有元素

.parent([selector])
// 选定元素父元素中满足selector要求的所有元素

.parents([selector])
// 选定元素祖先元素中满足selector要求的所有元素

.parentsUntil()
// .parents()取反

.closest(selector)
// 逐级向上寻找并返回选定元素祖先元素中满足selector要求的第一个元素

.next([selector])
// 选定元素后紧邻的同辈且满足selector要求的元素

.nextAll([selector])
// 选定元素后的同辈且满足selector要求的所有元素

.nextUntil()
// .next()取反

.prev([selector])
// 选定元素前紧邻的同辈且满足selector要求的元素

.prevAll([selector])
// 选定元素前的同辈且满足selector要求的所有元素

.prevUntil()
// .prev()取反

.siblings([selector])
// 选定元素的同辈且满足selector要求的所有元素
```

## DOM 操作

### CSS 属性

```javascript
.css(cssName,[value])
// 获取或设置元素样式的值
// 同时获取多个样式的值：
    .css([cssName, cssName])

.height([value])
// 获取或设置元素的高度
// 不包括 margin、padding、border

.innerHeight()
// 获取元素的高度
// 不包括 margin、border；包括 padding

.outHeight([includeMargin])
// 获取元素的高度
// includeMargin 布尔值，表明是否在计算时包含margin

.offset([{ top: value, left: value }])
// 获取或设置元素相对于文档的坐标

.offsetParent()
// 获取离制定元素最近的含有定位信息的祖先元素

.position()
// 获取元素相对于父元素的便宜位置

.scrollLeft([value])
// 获取或设置水平滚动条的位置

.scrollTop([value])
// 获取或设置垂直滚动条的位置
```

### Class 属性

```javascript
.addClass(className)
// 为元素添加样式
// 同时添加多个样式，可以用空格将样式名隔开
// index表示元素集合中元素的索引

.removeClass(className)
// 移除元素样式
// 用法同 .addClass

.hasClass(className)
// 判断元素是否具有指定样式，返回 true 或 false
// 判断元素是否具有所有的多个样式，可以用空格将样式名隔开

.toggleClass(className)
// 切换样式
// 同时切换多个样式，可以用空格将样式名隔开
```

### 复制元素

```javascript
.clone()
// 复制元素
```

### DOM 插入

#### DOM 插入现有元素内

```javascript
.prepend(content)
// 将参数插入选定元素内部的头部

.append(content)
// 将参数插入选定元素内部的尾部

.prependTo(selector)
// 将选定元素插入到满足selector要求的元素内部的头部

.appendTo(selector)
// 将选定元素插入到满足selector要求的元素内部的尾部

.html(html)
// 替换或获取元素内的内容，包括html标签

.text(text)
// 替换或获取元素内的内容，不包括html标签
```

#### DOM 插入现有元素外

```javascript
.before(content)
// 将参数插入元素的前面

.after()
// 将参数插入元素的后面

.insertAfter(selector)
// 将选定元素插入到满足selector要求的元素内部的前面

.insertBefore(selector)
// 将选定元素插入到满足selector要求的元素内部的后面
```

#### DOM 插入并包裹现有内容

```javascript
.unwrap()
// 将选定元素的父级元素删除，保留自身和兄弟元素在原来的位置

.wrap(html)
// 在选定元素的外层包上一个html元素

.wrapAll()
// 在选定集合的外层包上一个html元素

.wrapInner()
// 在选定元素里的内容外包一层结构
```

### DOM 移除

```javascript
.detach([selector])
// 从选定元素中去掉所有满足selector要求的元素

.empty()
// 从选定元素中移除所有节点

.remove([selector])
// 移除选定元素及其所有节点

.wrapInner()
// 在选定元素里的内容外包一层结构。
```

### DOM 替换

```javascript
.replaceAll([selector])
// 选定元素替换所有满足selector要求的元素

.replaceWith(content)
// 用提供的内容替换选定元素并且返回被删除元素的集合
```

### 通用属性操作

```javascript
.attr(attributeName, [value])
// 获取或元素的属性值
// 同时为多个属性赋值：
    // .attr({attrName: value, [attrName: value]})

.removeAttr(attributeName)
// 移除元素的属性

.prop(propertyName, [value])
// 获取或设置元素的样式属性值

.removeProp(propertyName)
// 移除元素的样式属性

.html([htmlString])
// 获取或指定元素的html内容
```

### DOM 元素方法

```javascript
.get([index])
// 通过jQuery对象获取一个DOM对象

.index(selector)
// 从选定元素中搜索满足selector要求的元素的索引值，元素索引从0开始

.toArry()
// 将选定元素转换为数组
```

## 回调对象

## 数据操作

```javascript
.data(element, key, [value])
// 在元素上存储数据
// 从元素上读取数据

.hasData(element)
// 确定元素上是否有存储数据

.removeData(element, [key])
// 从元素上删除所有或单条数据
```

## 延迟对象

## 特效

### 基本特效

```javascript
.hide()
// 隐藏元素

.show()
// 显示元素
```

### 渐变

```javascript
.fadeIn()
// 淡入

.fadeOut()
// 淡出

.fadeTo()
// 调整透明度

.fadeToggle()
// 淡入淡出
```

### 滑动

```javascript
.slideDown()
// 滑入

.slideUp()
// 滑出

.slideToggle()
// 滑入滑出
```

### 自定义

```javascript
.animate()
// 根据一组 CSS 属性，执行自定义动画

.queue()
// 显示或操作元素上已经执行的函数列队

.dequeue()
// 执行匹配元素队列的下一个函数

$.fx.interval
// 该动画的频率(以毫秒为单位)

.delay()
// 设置一个延时来推迟执行队列中后续的项

.clearQueue()
// 从列队中移除所有未执行的项
// 类似于.stop(true)，但是.stop()只适用于动画

.stop()
// 停止元素当前正在运行的动画

.finish()
// 停止当前正在运行的动画，删除所有排队的动画，并完成所有的动画

$.fx.off
// 全局的禁用所有动画
```

## 事件

### 浏览器事件

```javascript
.error([eventData], handler(eventObject))
// Javascript发生错误
// eventData 事件信息， handler 事件触发时执行的函数

.resize([eventData], handler(eventObject))
// 窗口大小改变
// eventData 事件信息， handler 事件触发时执行的函数

.scroll([eventData], handler(eventObject))
// 滚动条滚动
// eventData 事件信息， handler 事件触发时执行的函数
```

### 文档加载

```javascript
.load([eventData], handler(eventObject))
// 加载完成

.ready([eventData], handler(eventObject))
// DOM结构加载完成

.unload([eventData], handler(eventObject))
// 卸载页面

$.holdReady(bool)
// 暂停或恢复.ready()事件的执行
// true 暂停, false 恢复
```

### 绑定事件处理器

```javascript
.bind(eventType, [eventData], handler(eventObject))
// 绑定事件
// eventType 事件列表， eventData 事件信息， handler(eventObject) 事件触发时执行的函数

.unbind([eventType], [handler(eventObject)])
// 解绑事件

.on(events, [selector], [data], handler(eventObject))
// 绑定一个或多个事件
// events 事件列表， selector 选择器， data 数据， handler(eventObject) 事件触发时执行的函数

.off(events, [selector], handler(eventObject))
// // 解除满足selector的元素绑定的一个或多个事件

.delegate(selector, eventType, eventData, handler(eventObject))
// 为满足selector的元素绑定一个或多个事件
// selector 选择器， eventType 事件列表，  eventData 事件信息， handler(eventObject) 事件触发时执行的函数

.undelegate(selector, eventType, handler(eventObject))
// 解除满足selector的元素绑定的一个或多个事件

.one(events, [selector], [data], handler(eventObject))
// 绑定一次性事件
// events 事件列表， selector 选择器， data 数据， handler(eventObject) 事件触发时执行的函数

.trigger(eventType)
// 触发事件

.triggerHandler(eventType)
// 触发事件

.triggerHandler()与 .trigger()
.triggerHandler()方法并不会触发事件的默认行为(如：表单提交)
.triggerHandler()仅影响第一个匹配到的元素 .trigger()会影响所有与 jQuery 对象相匹配的元素
使用 .triggerHandler()创建的事件，并不会在 DOM 树中向上冒泡。如果事件没有被目标元素直接处理，那么它就不会进行任何处理
普通的方法返回 jQuery 对象 .triggerHandler()返回最后一个处理的事件的返回值，如果没有触发任何事件，会返回 undefined
```

### 事件对象

```javascript
event.currentTarget
// 在事件冒泡过程中的当前DOM元素

event.data
// 当当前正在执行的处理程序绑定时，一个可选的数据对象传递给一个事件方法

event.delegateTarget
// 绑定了当前正在调用jQuery 事件处理器的元素

event.isDefaultPrevented()
// 根据事件对象中是否调用过 event.preventDefault() 方法,来返回一个布尔值

event.isImmediatePropagationStopped()
// 根据事件对象中是否调用过 event.stopImmediatePropagation() 方法,来返回一个布尔值

event.isPropagationStopped()
// 根据事件对象中是否调用过 event.stopPropagation() 方法,来返回一个布尔值

event.metaKey
// 表示事件触发时哪个Meta键被按下

event.namespace
// 当事件被触发时此属性包含指定的命名空间

event.pageX
// 鼠标相对于文档的左边缘的位置

event.pageY
// 鼠标相对于文档的顶部边缘的位置

event.preventDefault()
// 如果调用这个方法，默认事件行为将不再触发

event.relatedTarget
// 在事件中涉及的其它任何DOM元素

event.result
// 事件被触发的一个事件处理程序的最后返回值，除非值是 undefined

event.stopImmediatePropagation()
// 阻止剩余的事件处理函数执行并且防止事件冒泡到DOM树上

event.stopPropagation()
// 防止事件冒泡到DOM树上，也就是不触发的任何前辈元素上的事件处理函数

event.target
// 触发事件的DOM元素

event.timeStamp
// 这个属性返回事件触发时距离1970年1月1日的毫秒数

event.type
// 描述事件的性质

event.which
针对键盘和鼠标事件，这个属性能确定你到底按的是哪个键
```

### 表单事件

```javascript
.focus([handler(eventObject)])
// 绑定或触发"获得焦点"事件

.blur([handler(eventObject)])
// 绑定或触发"失去焦点"事件

.focusin([handler(eventObject)])
// 绑定或触发"获得焦点"事件，支持"事件冒泡"

.focusout([handler(eventObject)])
// 绑绑定或触发"失去焦点"事件，支持"事件冒泡"

.change([handler(eventObject)])
// 绑定或触发"改变"事件

.select([handler(eventObject)])
// 绑定或触发"选中"事件

.submit([handler(eventObject)])
// 绑定或触发"提交"事件

.val()
// 获取表单元素的值

$.param(obj)
// 将obj序列化为一个适用于URL地址查询或Ajax请求的字符串

.serialize()
// 将用作提交的表单元素的值编译成字符串

.serializeArray()
// 将用作提交的表单元素的值编译成拥有name和value对象组成的数组
```

### 键盘事件

```javascript
.keypress([handler(eventObject)])
// 绑定或触发键盘"按键"事件

.keydown([handler(eventObject)])
// 绑定或触发键盘"按下"事件

.keyup([handler(eventObject)])
// 绑定或触发键盘"松开"事件
```

### 鼠标事件

```javascript
.click([handler(eventObject)])
// 绑定或触发鼠标"单击"事件

.dblclick([handler(eventObject)])
// 绑定或触发鼠标"双击"事件

.hover(handlerIn(eventObject), handlerOut(eventObject))
// 绑定或触发鼠标"hover"事件
// handlerIn(eventObject)鼠标进入，handlerOut(eventObject)鼠标离开

.mousedown([handler(eventObject)])
// 绑定或触发鼠标"按下"事件

.mouseup([handler(eventObject)])
// 绑定或触发鼠标"松开"事件

.mouseenter([handler(eventObject)])
// 绑定或触发鼠标"进入"事件

.mouseleave([handler(eventObject)])
// 绑定或触发鼠标"离开"事件

.mouseover([handler(eventObject)])
// 绑定或触发鼠标"进入"事件，支持"事件冒泡"

.mouseout([handler(eventObject)])
// 绑定或触发鼠标"离开"事件，支持"事件冒泡"

.mousemove([handler(eventObject)])
// 绑定或触发鼠标"移动"事件
```

## 工具类

```javascript
$.each( collection, callback(indexInArray, valueOfElement))
// 遍历对象或数组
// collection 遍历的对象或数组

$.merge(first, second)
// 合并两个数组内容到第一个数组

$.extend( target, [object1], [objectN])
// 将两个或更多对象的内容合并到第一个对象

$.fn.extend(object)
// 将一个对象合并到jQuery的原型，以扩展jQuery实例方法

$.globalEval(code)
// 在全局上下文下执行一些JavaScript代码

$.grep(array, function(elementOfArray, indexInArray), [invert])
// 查找满足过滤函数的数组元素
// array 用于查询元素的数组
// function(elementOfArray, indexInArray) 该函数来处理每项元素的比对
    // 第一个参数是正在被检查的数组的元素，第二个参数是该元素的索引值，该函数返回一个布尔值
// invert 布尔值
    // 如果为false，函数返回一个由"callback"中返回true的所有元素组成的数组
    // 如果为true，函数返回一个"callback"中返回false的所有元素组成的数组

$.inArray(value, array[fromIndex])
// 在数组中查找指定值并返回它的索引(如果没有找到，则返回-1)
// value 要查找的值，array 目标数组，数组索引值，表示从哪里在开始查找(默认是0)

$.isArray(object)
// 确定object是否是一个数组

$.isEmptyObject(object)
// 检查object是否为空

$.isFunction(object)
// 确定object是否为一个Javascript函数

$.isNumeric(value)
// 确定value是否为一个数字

$.isPlainObject(object)
// 测试对象是否是纯粹的对象(通过 "{}" 或者 "new Object" 创建的)

$.isWindow(object)
// 确定object是否为一个window对象

$.makeArray(object)
// 转换object对象为JavaScript数组

$.now()
// 返回一个数字，表示当前时间

$.parseHTML()
// 将字符串解析到一个DOM节点的数组中。

$.parseJSON(json)
// 接受一个标准格式的 JSON 字符串，并返回解析后的 JavaScript 对象

$.parseXML()
// 解析一个字符串到一个XML文档。

.trim()
// 去掉字符串起始和结尾的空格

$.type(object)
// 确定object的类型

$.unique(array)
// 删除数组中重复元素
```

## Ajax

### 底层结构

```javascript
$.ajax( url, [settings])
// 执行异步的HTTP(Ajax)的请求
// url：包含发送请求的URL字符串
// settings：个以"{键:值}"组成的AJAX 请求设置,可以使用$.ajaxSetup()设置任何默认参数
    // accepts：内容类型发送请求头
        用于通知服务器该请求需要接收何种类型的返回结果
        推荐在$.ajaxSetup()方法中设置
    // crossDomain：同域请求为false， 跨域请求为true(默认:false)
    // username：于响应HTTP访问认证请求的用户名
    // password：用于响应HTTP访问认证请求的密码

    // url：发送请求的地址(默认: 当前页面地址)
    // type：请求方式("POST" 或 "GET")，(默认: "GET")
        其它 HTTP 请求方法，如 PUT 和 DELETE 也可以使用，但仅部分浏览器支持
    // data：发送到服务器的数据。将自动转换为请求字符串格式
    // dataType：预期服务器返回的数据类型(xml, json, script, or html)

    // beforeSend：请求发送前的回调函数
    // success：请求成功后的回调函数
    // error：请求失败时调用此函数
    // complete：请求完成后回调函数
    // timeout：设置请求超时时间(毫秒)
    // statusCode：响应状态码，当返回响应时将触发相应的方法
        例如，如果响应状态是404，将触发以下警报：
        // $.ajax({
        //   statusCode: {
        //     404: function() {
        //       alert("page not found");
        //     }
        //   }
        // });

    // xhr：回调创建XMLHttpRequest对象
    // xhrFields："文件名-文件值"组成的映射
    // headers：一个额外的"{键:值}"对映射到请求一起发送
        此设置会在beforeSend 函数调用之前被设置，请求头中的设置值，会被beforeSend 函数内的设置覆盖 
    // global：是否触发全局AJAX事件处理程序(默认:true)
    // contentType：发送信息至服务器时内容编码类型(默认:"application/x-www-form-urlencoded; charset=UTF-8")
    // contents：以"{字符串/正则表达式}"配对的对象，根据给定的内容类型，解析请求的返回结果
    // context：这个对象用于设置Ajax相关回调函数的上下文
    // converters：数据类型到数据类型转换器的对象
        (默认:{"* text": window.String, "text html": true, "text json": jQuery.parseJSON, "text xml": jQuery.parseXML})
    // dataFilter：函数被用来处理XMLHttpRequest的原始响应数据
    // async：是否异步请求(默认:true)

    // cache：是否缓存此页面(默认:true)
    // ifModified：允许当前环境被认定为"本地"
        推荐在$.ajaxSetup()方法中设置
    // jsonp：在一个jsonp请求中重写回调函数的名字
    // jsonpCallback：为jsonp请求指定一个回调函数名
    // mimeType：一个mime类型用来覆盖XHR的 MIME类型
    // processData：是否对发送的信息进行转换(默认:true)
    // scriptCharset：当"script"使用"script"传输时,在请求中使用在script标签上设置charset 属性
    // traditional：如果你想要用传统的方式来序列化数据，那么就设置为true
```

### 全局 Ajax 事件处理器

```javascript
.ajaxComplete()
// 请求完成后回调函数

.ajaxError()
// 请求失败时调用此函数

.ajaxSend()
// 请求发送前的回调函数

.ajaxStart()
// 请求刚开始时执行的函数

.ajaxStop()
// 请求完成后回调函数

.ajaxSuccess()
// 请求成功后的回调函数
```

### 快捷方法

```javascript
$.get(url, [data], [success(data, textStatus, jqXHR)], [dataType])
// 使用HTTP GET请求从服务器加载数据
    // url：包含发送请求的URL字符串
    // data：发送给服务器的字符串或Key/value键值对
    // success(data, textStatus, jqXHR)：当请求成功后执行的回调函数
    // dataType：从服务器返回的预期的数据类型，默认：智能猜测(xml, json, script, 或 html)
// 相当于：
// $.ajax({
//   url: url,
//   data: data,
//   success: success,
//   dataType: dataType
// });

$.post(url, [data], [success(data, textStatus, jqXHR)], [dataType])
// 使用HTTP POST请求从服务器加载数据
// 相当于：
// $.ajax({
//   type: "POST",
//   url: url,
//   data: data,
//   success: success,
//   dataType: dataType
// });

$.getJSON(url, [data], [success(data, textStatus, jqXHR)])
// 使用HTTP GET请求从服务器加载JSON编码的数据
// 相当于：
// $.ajax({
//   dataType: "json",
//   url: url,
//   data: data,
//   success: success
// });

$.getScript(url, [success(script, textStatus, jqXHR)])
// 使用HTTP GET请求从服务器加载并执行 JavaScript 文件
// 相当于：
// $.ajax({
//   url: url,
//   dataType: "script",
//   success: success
// });

.load(url, [data], [complete(responseText, textStatus, jqXHR)])
// 从服务器加载入数据将返回的HTML代码插入选定的元素中
```

<!-- links -->
[jQuery]: http://www.jquery.com
[jQuery(en-us)]: http://api.jquery.com
[jQuery(zh-cn)]: http://www.jquery123.com
<!-- images -->
[Logo]: /_posts/note/.markdown/2017-N02_jQuery/images/01.png "jQuery"
<!-- files -->
