
# 精通 ASP.NET MVC5

> ![Logo][]

# 第 1 章 ASP.NET MVC 背景

## ASP.NET 历史

介绍 ASP.NET 的发展历史，和 ASP.NET Web Form 存在的问题

## 当今的 Web 开发

介绍新的 Web 标准和表现式状态传输 (Representational State Transfer， **REST** )、介绍敏捷开发和测试驱动开发 (Test-Driven Development， **TDD** )、介绍 Ruby on Rails 和 Node.js

## ASP.NET MVC 的关键优点

介绍 MVC 的体系结构和 MVC 与 Web Form 相比对 HTML 和 HTTP 的支持所做的变革、介绍 MVC 的可扩展性、可测试性和路由系统、介绍 MVC 与 ASP.NET 平台的关系和对现代 API 的支持

## 本书的预备知识

熟悉 Web 开发和 C#

## 本书结构

第一部分：ASP.NET MVC5 导论 第二部分：ASP.NET MVC 细节

## 新版本的特点

## 获取示例代码

## 本书所需的软件

Visual Studio

## 诚信

# 第 2 章 第一个 MVC 应用程序

## 准备 Visual Studio

## 创建新的 ASP.NET MVC 项目

介绍如何使用 Visual Studio 创建一个 ASP.NET MVC 项目、如何添加控制器和如何理解默认路由

## 渲染 Web 页面

介绍如何创建视图、MVC 如何渲染视图并从控制器向页面传递简单输出

## 创建一个简单的数据录入程序

介绍数据模型、强类型视图、模型绑定、模型验证和 Bootstrap

# 第 3 章 MVC 模式

## MVC 简史

## 理解 MVC 模式

介绍 MVC 域模型、MVC 的 ASP.NET 实现 比较 MVC 模式、智能 UI 模式和三层架构模式 MVC 的变种：MVP (Model-View-Presenter)、MVVM (Model-View-ViewModel)

## 建立松耦合组件

在理想情况下，每个组件都不了解其他组件，而只是通过抽象接口来处理应用程序的其他区域。这称为 "松耦合 (Loose Coupling)" 松耦合的好处是不言自明的。  
介绍依赖项注入 (Dependency Injection，DI)、介绍依赖项注入容器 "Ninject"、介绍自动测试

# 第 4 章 基本语言特性

## 准备示例项目

## 使用自动实现的属性

## 使用对象和集合初始化器

## 使用扩展方法

扩展方法 (Extension Method) 是指给那些不是你拥有的、不能直接修改的类添加方法的一种方便方法，对接口运用扩展方法后，所有实现该接口的的类都可以调用该扩展方法、介绍过滤扩展方法和 **yield** 关键字

```csharp
/// <summary>返回指定商品类型组成列表的扩展方法
/// 
/// </summary>
/// <param name="productEnum"></param>
/// <param name="categoryParam"></param>
/// <returns></returns>
public static IEnumerable<Product> FilterByCategory(this IEnumerable<Product> productEnum, string categoryParam)
{
    foreach(Product prod in productEnum)
    {
        if(prod.Category == categoryParam)
        {
            yield return prod;
        }
    }
}
```

## 使用 lambda 表达式

使用委托

```csharp
// 定义包含委托的扩展方法
/// <summary>使用委托返回满足某个条件的商品组成列表的扩展方法
/// 
/// </summary>
/// <param name="productEnum"></param>
/// <param name="selectorParam"></param>
/// <returns></returns>
public static IEnumerable<Product> Filter(this IEnumerable<Product> productEnum, Func<Product, bool> selectorParam)
{
    foreach (Product prod in productEnum)
    {
        if (selectorParam(prod))
        {
            yield return prod;
        }
    }
}

// 使用包含委托的扩展方法
IEnumerable<Product> products = new ShoppingCart
{
    Prodects = new List<Product>
    {
        new Product {Name = "Kayak", Price = 275M},
        new Product {Name = "Lifejacket", Price = 48.95M},
        new Product {Name = "Soccer ball", Price = 19.50M},
        new Product {Name = "Corner flag", Price = 34.95M}
    }
};
// 用方法实现委托
// Func<Product, bool> categoryFilter = delegate (Product prod)
// {
//    return prod.Category == "Kayak";
// };
// products.Filter(categoryFilter);

// 用lambda实现方法
// Func<Product, bool> categoryFilter = prod => prod.Category == "Kayak";
// products.Filter(categoryFilter);

// 进一步精简lambda
// products.Filter(prod => prod.Category == "Kayak");

// 进一步扩展lambda
products.Filter(prod => prod.Category == "Kayak" || prod.Price < 40);
```

## 使用自动类型接口

介绍 **var**

## 使用匿名类型

介绍 **var**

## 执行语言集成查询 (LINQ)

介绍 LINQ 的优点、介绍 LINQ 的 "查询语法" 和 "点符号语法"、介绍常用的 LINQ 扩展方法和 "延迟的 LINQ 查询"

一些有用的 LINQ 扩展方法

| 扩展方法                      | 描述                                                         | 延迟 |
| :---------------------------- | :----------------------------------------------------------- | :--- |
| All                           | 如果数据源中的所有条目都与谓词匹配则返回 true                | 否   |
| Any                           | 如果数据源中至少有一个条目与谓词匹配则返回 true              | 否   |
| Contains                      | 如果数据源含有指定的条目或值，则返回 true                    | 否   |
| Count                         | 返回数据源中的条目                                           | 否   |
| First                         | 返回数据源中的第一个条目                                     | 否   |
| FirstOrDefault                | 返回数据源中的第一个条目，或无条目时返回默认值               | 否   |
| Last                          | 返回数据源中的最后一个条目                                   | 否   |
| LastOrDefult                  | 返回数据源中的最后一个条目，或无条目时返回默认值             | 否   |
| Max、Min                      | 返回由 Lamdba 表达式表示的最大值或最小值                     | 否   |
| OrderBy、OrderByDescending    | 基于 Lamdba 表达式返回的值对源数据进行排序                   | 是   |
| Reverse                       | 反转数据源中数据项的位置                                     | 是   |
| Select                        | 设计一个查询结果                                             | 是   |
| SelectMany                    | 把每个数据项投射到一个条目序列之中，然后把所有这些结果序列连接成一个序列 | 是   |
| Single                        | 返回数据源的第一个条目，或者有多个匹配时抛出一个异常         | 否   |
| SingleOrDefalt                | 返回数据源的第一个条目，或者无条目时，返回默认值； 有多个匹配条目时，抛出一个异常 | 否   |
| Skip、SkipWhile               | 跳过指定数目的元素，或者当谓词匹配时跳过                     | 是   |
| Sum                           | 对谓词选定的值求和                                           | 否   |
| Take、TakeWhile               | 从数据源开始处选则指定数目的元素，或当谓词匹配时选择条目     | 是   |
| ToArray、ToDictionary、ToList | 把数据源转换成数组、字典和列表                               | 否   |
| Where                         | 过滤掉源数据中与谓词不匹配的条目                             | 是   |

对于含有 "延迟" 方法的直到对结果进行枚举后，才会执行该查询；相比之下，使用任何非延迟的扩展方法，都会使 LINQ 查询立即执行

## 使用 Async 方法

介绍 async 方法、介绍 async 和 await 关键字

```csharp
public async static Task<long?> GetPageLength()
{
    HttpClient client = new HttpClient();
    var httpMessage = await client.GetAsync("http://apress.com");
    // 在等待 HTTP 请求完成期间，可以在这里执行其他任务
    return httpMessage.Content.Headers.ContentLength;
}
```

# 第 5 章 使用 Razor

## 准备示例项目

再次介绍模型、视图、控制器

## 使用模型对象

再次介绍在视图中使用模型

## 使用布局

介绍布局页 `*Layout.cshtml` 的定义和使用、介绍起始页 `*ViewStart.cshtml` 的定义和使用

## 使用 Razor 表达式

介绍使用 Razor 表达式插入数据、为标签设置属性、处理条件语句、枚举数组和集合、引入命名空间

# 第 6 章 MVC 基本工具

## 准备示例项目

## 使用 Ninject

使用接口解耦 将 Ninject 添加到 VisualStudio 项目

```csharp
Install-Package Ninject.MVC5 -ProjectName EssentialTools
```

Ninject 初步

```csharp
using EssentialTools.Models;
using Ninject;

namespace EssentialTools.Controllers
{
    public class HomeController : Controller
    {
        private Product[] products = {
            new Product {Name = "Kayak", Category = "Watersports", Price = 275M},
            new Product {Name = "Lifejacket", Category = "Watersports", Price = 48.95M},
            new Product {Name = "Soccer ball", Category = "Soccer", Price = 19.50M},
            new Product {Name = "Corner flag", Category = "Soccer", Price = 34.95M}
        };

        public ActionResult Index()
        {
            // 创建一个Ninject标准内核
            IKernel ninjectKernel = new StandardKernel();
            // 配置Ninject内核，让它使用指定的类实现指定的接口
            ninjectKernel.Bind<IValueCalculator>().To<LinqValueCalculator>();
            // 从Ninject获得指定接口的实例
            IValueCalculator calc = ninjectKernel.Get<IValueCalculator>();

            ShoppingCart cart = new ShoppingCart(calc) { Products = products };
            decimal totalValue = cart.CalculateProductTotal();

            return View(totalValue);
        }
    }
}
```

建立 MVC 的依赖项注入

创建依赖项解析器：

1. 自定义一个类继承 **IDependencyResolver (属于 System.Web.Mvc 命名空间)** 接口
2. 实现 **GetService** 和 **GetServices** 方法

```csharp
/// <summary>创建依赖项解析器
/// 
/// </summary>
public class NinjectDependencyResolver : IDependencyResolver
{
    private IKernel kernel;
    public NinjectDependencyResolver (IKernel kernelParam)
    {
        this.kernel = kernelParam;
        AddBindings();
    }
    public object GetService(Type serviceType)
    {
        return kernel.TryGet(serviceType);
    }
    public IEnumerable<object> GetServices(Type serviceType)
    {
        return kernel.GetAll(serviceType);
    }
    private void AddBindings()
    {
        // 映射接口和实现
        // kernel.Bind<IValueCalculator>().To<LinqValueCalculator>();
    }
}
```

注册依赖项解析器：

1. 找到 App_Start 文件夹下的 **NinjectWebCommon.cs** 文件
2. 在 **RegisterServices** 方法中注册自己创建的依赖解析器

```csharp
/// <summary>
/// Load your modules or register your services here!
/// </summary>
/// <param name="kernel">The kernel.</param>
private static void RegisterServices(IKernel kernel)
{
    // 注册依赖项解析器
    System.Web.Mvc.DependencyResolver.SetResolver(new EssentialTools.Infrastructure.NinjectDependencyResolver(kernel));
}
```

重构代码：

将需要注入的实例替换为接口，并改造构造器，以通过构造器注入

```csharp
public class HomeController : Controller
{
    private IValueCalculator calc;
    private Product[] products = {
        new Product {Name = "Kayak", Category = "Watersports", Price = 275M},
        new Product {Name = "Lifejacket", Category = "Watersports", Price = 48.95M},
        new Product {Name = "Soccer ball", Category = "Soccer", Price = 19.50M},
        new Product {Name = "Corner flag", Category = "Soccer", Price = 34.95M}
    };

    /// <summary>构造器注入
    /// 
    /// </summary>
    /// <param name="calcParam"></param>
    public HomeController(IValueCalculator calcParam, IValueCalculator calc2)
    {
        this.calc = calcParam;
    }
    public ActionResult Index()
    {
        ShoppingCart cart = new ShoppingCart(calc) { Products = products };
        decimal totalValue = cart.CalculateProductTotal();

        return View(totalValue);
    }
}
```

创建依赖项链：

如果依赖项依赖于其它的依赖项，则构成依赖项链。Ninject 会自动解析这些依赖项，创建相应的实例 指定属性和构造器参数值

使用条件绑定：

```csharp
private void AddBindings()
{
    // 使用条件绑定(当为LinqValueCalculator注入IDiscountHelper时，使用FlexibleDiscountHelper实现IDiscountHelper)
    kernel.Bind<IDiscountHelper>().To<FlexibleDiscountHelper>().WhenInjectedInto<LinqValueCalculator>();
}
```

设置对象作用域：

```csharp
private void AddBindings()
{           
    // 指定Ninject创建对象的作用域
    kernel.Bind<IValueCalculator>().To<LinqValueCalculator>().InRequestScope();
}
```

## Visual Studio 的单元测试

介绍 VisualStudio 单元测试项目、介绍 "准备 / 动作 / 断言 (A/A/A)" 模式、介绍 "红绿重构" 工作流

```csharp
[TestClass]
public class UnitTest1
{
    private IDiscountHelper getTestObject()
    {
        return new MinimumDiscountHelper();
    }

    [TestMethod]
    public void Discount_Above_100()
    {
        // 准备
        IDiscountHelper target = getTestObject();
        decimal total = 200;

        // 动作
        var discountedTotal = target.ApplyDiscount(total);

        // 断言
        Assert.AreEqual(total * 0.9M, discountedTotal);
    }

    [TestMethod]
    public void Discount_Between_10_And_100()
    {
        // arrange
        IDiscountHelper target = getTestObject();// act
        decimal TenDollarDiscount = target.ApplyDiscount(10);
        decimal HundredDollarDiscount = target.ApplyDiscount(100);
        decimal FiftyDollarDiscount = target.ApplyDiscount(50);
        // assert
        Assert.AreEqual(5, TenDollarDiscount, "$10 discount is wrong");
        Assert.AreEqual(95, HundredDollarDiscount, "$100 discount is wrong");
        Assert.AreEqual(45, FiftyDollarDiscount, "$50 discount is wrong");
    }

    [TestMethod]
    [ExpectedException(typeof(ArgumentOutOfRangeException))]
    public void Discount_Negative_Total()
    {
        // arrange
        IDiscountHelper target = getTestObject();
        // act
        target.ApplyDiscount(-1);
    }
}
```

## 使用 Moq 库

将 Moq 添加到 Visual Studio 测试项目

```csharp
Install-Package Moq -ProjectName EssentialTools.Test
```

使用 Moq 创建模仿对象替代依赖项

```csharp
[TestClass]
public class UnitTest2
{
    private Product[] products = {
    new Product {Name = "Kayak", Category = "Watersports", Price = 275M},
    new Product {Name = "Lifejacket", Category = "Watersports", Price = 48.95M},
    new Product {Name = "Soccer ball", Category = "Soccer", Price = 19.50M},
    new Product {Name = "Corner flag", Category = "Soccer", Price = 34.95M}
    };

    [TestMethod]
    public void Sum_Products_Correctly()
    {
        // 准备

        // 创建模仿对象
        Mock<IDiscountHelper> mock = new Mock<IDiscountHelper>();

        // 用Setup选择方法，用It指定参数条件，用Returns指定返回结果
        mock.Setup(m => m.ApplyDiscount(It.IsAny<decimal>())).Returns<decimal>(total => total);

        // 用.Object使用模仿对象
        var target = new LinqValueCalculator(mock.Object);

        // 动作
        var result = target.ValueProducts(products);

        // 断言
        // Assert.AreEqual(goalTotal, products);

        Assert.AreEqual(products.Sum(m => m.Price), result);
    }
}
```

创建更复杂的模仿对象

```csharp
[TestClass]
public class UnitTest2
{
    private Product[] createProduct(decimal value)
    {
        return new[] { new Product { Price = value } };
    }

    [TestMethod]
    [ExpectedException(typeof(System.ArgumentOutOfRangeException))]
    public void Pass_Through_Variable_Discounts()
    {
        // 准备
        Mock<IDiscountHelper> mock = new Mock<IDiscountHelper>();

        // 调用Setup方法的顺序会影响模仿对象的行为
        mock.Setup(m => m.ApplyDiscount(It.IsAny<decimal>())).Returns<decimal>(param => param);
        mock.Setup(m => m.ApplyDiscount(It.Is<decimal>(v => v > 100M))).Returns<decimal>(param => (param * 0.9M));
        // mock.Setup(m => m.ApplyDiscount(It.Is<decimal>(v => (v <= 100M && v >= 10M)))).Returns<decimal>(param => param - 5M);
        mock.Setup(m => m.ApplyDiscount(It.IsInRange(10M, 100M, Range.Inclusive))).Returns<decimal>(parapm => (parapm - 5M));
        mock.Setup(m => m.ApplyDiscount(It.Is<decimal>(v => (v < 10 && v >= 0)))).Returns<decimal>(param => param);
        mock.Setup(m => m.ApplyDiscount(It.Is<decimal>(v => v < 0))).Throws<System.ArgumentOutOfRangeException>();

        var target = new LinqValueCalculator(mock.Object);

        // 动作
        decimal[] result = {
        target.ValueProducts(createProduct(110M)),
        target.ValueProducts(createProduct(100M)),
        target.ValueProducts(createProduct(50M)),
        target.ValueProducts(createProduct(10M)),
        target.ValueProducts(createProduct(5M)),
        // target.ValueProducts(createProduct(0M))
        };

        // 断言
        Assert.AreEqual(99M, result[0], "$110 Fial");
        Assert.AreEqual(95M, result[1], "$100 Fial");
        Assert.AreEqual(45M, result[2], "$50 Fial");
        Assert.AreEqual(5M, result[3], "$10 Fial");
        Assert.AreEqual(5M, result[4], "$5 Fial");
        target.ValueProducts(createProduct(-1M));
    }
}
```

# 第 7 章 SportsStore：一个真正的应用程序

## 开始

创建所需解决方案和项目、为项目安装所需工具包、添加项目之间的引用、设置 MVC 的 DI 容器

| 项目名称              | Visual Studio 项目模板                                    | 目的                                                         |
| :-------------------- | :-------------------------------------------------------- | ------------------------------------------------------------ |
| SportsStore.Domain    | 类库                                                      | 存放实体与逻辑，通过一个以 Entity Framework 创建的存储库来建立持久化 |
| SportsStore.WebUI     | ASP.NET MVC Web 应用程序 (选择 "空模板"，选中 "MVC" 选项) | 存放控制器与视图，充当 SportsStore 应用程序的 UI             |
| SportsStore.UnitTests | 测试项目                                                  | 存放用于上述两个项目的单元测试                               |

## 从域模型开始

介绍域模型、抽象存储库、如何使用 Moq 模拟存储库

模型含有持久化逻辑，这种逻辑用于从持久化数据存储库中存储和接收数据。引入抽象存储库可以使数据模型实体与存储接收逻辑之间保持一定程度的分离 IProductsRepository 接口使用了一个 IQueryable 接口，可以让调用程序获取一个 Product 对象序列，而不必说明从哪儿或如何获取和接收数据 一个类可以依靠 IProductRepository 这一接口获取 Product 对象，而不必知道对象从哪儿来，也不必知道该接口的实现类如何递交这些对象，这就是存储库模式

## 显示产品列表

介绍控制器、布局页、视图起始文件、默认路由

## 准备数据库

介绍 **SQL Server LocalDB** 和 **Entity Framework** LocalDB 是特意为开发者而设计的一个免管理的 SQL Server 核心功能 Entity Framework (实体框架，EF) 是 Microsoft.NET 的 ORM (对象关系映射) 框架 ORM 框架让开发人员可以用规则的 C# 对象来表示关系数据库的表、列和行

使用 LocalDB 从 "视图" 菜单中打开 "服务器资源管理器" 窗口，单击 "连接到数据库"，此时会看到 "选择数据源" 对话框 在该对话框中选中 "Microsoft SQL Server" 选项，然后单击 "继续" 按钮 下一步将看到 "添加连接" 对话框，将服务器名设置为 "(LocalDB)\MSSQLLocalDB" 这是一个特殊的名称，表示使用 LocalDB 选中 "Windows 身份验证"，并填写数据库名 单击 "确认" 按钮后，Visual Studio 会弹出一个将要创建新数据库的对话框 创建数据库之后可以在 "服务器资源管理器" 下的 "数据连接" 下找到创建的数据库 之后可以在 Visual Studio 中使用 "表设计器" 和 "数据库脚本" 创建相关数据库表并向表中添加数据

创建 Entity Framework 上下文 Entity Framew 最新版本包含了一个很好的特性，叫做 "Code-First (代码先行)"。其思想是先定义模型中的类，再通过这些类生成数据库 将 Entity Framework 添加到项目

```csharp
Install-Package EntityFramework -projectname SportsStore.Domain
Install-Package EntityFramework -projectname SportsStore.WebUI
```

为了利用 Code-First 特性，需要创建一个派生于 **System.Data.Entity.DbContext** 的类，这个类会为数据库中的每个表自动地定义一个属性 该属性的名称为数据库表名，而 DbSet 结果的类型参数为模型类型，由 Entity Framework 用于表示数据表的各个数据行

此外还要告诉 Entity Framew 如何连接到数据库，其做法是在 SportsStore.UI 项目的 Web.config 文件中添加一条数据库连接字符串 该连接字符串的名称与这个上下文类的名称相同

```xml
<configuration>
  <connectionStrings>
    <add name="EFDbContext" connectionString="Data Source=(LocalDB)\MSSQLLocalDB; Initial Catalog=SportsStore; Integrated Security=True" providerName="System.Data.SqlClient" />
  </connectionStrings>
</configuration>
```

创建 Product 存储库 存储库类实现抽象存储库，并使用 Entity Framework 上下文实例，接收数据库的数据

## 添加分页

介绍使用 HTML 辅助器方法向视图输出分页 HTML 元素

将 HTML 辅助器方法的命名空间添加到 View/Web.config 文件 为了在视图上使用 HTML 辅助器方法必须添加对 HTML 辅助器方法命名空间的引用 对于 Razor 视图可以在视图上添加 @using 语句，或者在 View 文件夹下的 Web.config 文件中添加一条配置条目

## 设置内容样式

元素样式问题： 引入外部样式时，为了防止混乱。可以根据元素在应用程序中的角色，给它们赋一些自定义的 class 然后使用 jQuery 或 LESS 一类的库，实现外部样式与自定义样式的映射

创建分部视图，分部视图是嵌入到另一个视图中的一个内容片段，而不是一个模板 分部视图是一种自包含的文件，且可以跨视图重用，这有助于减少重复，尤其是需要在应用程序的几个地方渲染同样的数据时

# 第 8 章 SportsStore：导航

## 添加导航控件

MVC 用 ASP.NET 的路由系统处理来自于客户端的输入请求，但也用它生成输出 URL `Url.Action` 方法是生成输出链接做方便的办法

ASP.NET MVC 框架有一种叫做 **子动作** 的概念，它特别适合用于创建诸如可重用导航控件的情况。子动作依赖叫做 **HTML.Action** 的 HTML 辅助器方法，它让你能够在当前视图中包含一个任意动作方法的输出。

**ActionLink** 辅助器方法使用之前配置的路由信息生成了一个 HTML 的锚点元素 (超链接元素) **RouteLink** 方法为每个分类创建了链接。该辅助器方法与 ActionLink 类型，但在根据路由配置生成 URL 时，可以有针对性地提供一组 "值 / 名称" 对

## 创建购物车

购物车是业务域的一部分，因此，在域模型中创建一个表现购物车的实体是有意义的

# 第 9 章 SportsStore：完成购物车

## 使用模型绑定

MVC 框架使用了一个叫做 **模型绑定 (Model Binding)** 的系统，以便通过 HTTP 请求来创建一些 C# 对象，目的是将它们作为参数值传递给动作方法。这是 MVC 处理表单的方式。

通过实现 `System.Web.Mvc.IModelBinder` 接口，可以创建一个自定义模型绑定器

## 完成购物车功能

## 递交订单

# 第 10 章 SportsStore：移动版

## 移动 Web 开发的背景

可以遵循的移动 Web 策略有四种：

* 什么也不做 (或尽量少做)
* 使用响应式设计
* 创建移动专用的内容
* 创建一个专用的应用程序

## 使用响应式设计

桌面先行与移动先行 响应式设计作为支持移动客户端的一种方式也有一些问题。 第一个问题是，为了能够在不同场合下进行显示，最终可能会产生很多重复内容。 第二个问题是，响应式设计可能会很麻烦，而且需要无尽的测试才能准确无误。

## 创建移动专用的内容

使用服务器评估客户端浏览器能力，并将不同的 HTML 发送给不同种类的客户端。如果希望将桌面用程序以完全不同的面貌呈现于平板电脑上，这种办法无疑能工作得很好。

MVC 框架提供一种叫做 **显示模式 (DisplayMode)** 的特性，它能够让你创建不同的视图，让这些视图根据形成请求的客户端进行投递 为创建移动专用内容要做的全部工作只是创建具有`.Mobile.cshtml` 后缀的视图和布局 这种独立视图的方式还可以引用专用于一组客户端的不同控制器，这种方式可以用于为不同类型的客户端创建完全不同的特性和功能

# 第 11 章 SportsStore：管理

## 添加分类管理

可以通过调用 **HTML.EditorForModel** 辅助器方法要求 MVC 框架根据模型类创建编辑界面 可以通过为 **模型元数据** 添加注解属性来影响 **HTML.EditorForModel** 的输出 注解属性位于 **System.ComponentModel.DataAnnotations** 和 **System.Web.Mvc** 命名空间下

Session、ViewBag 和 TempData

| 名称     | 说明                                                         |
| :------- | :----------------------------------------------------------- |
| Session  | Session 是消息持久的，直到它被明确删除为止 (可见，Session 会占用服务器资源，而且需要维护) |
| ViewBag  | ViewBag 在控制器与视图之间传递数据，但它保持数据的时间不能比当前 HTTP 请求长 (注意，重定向意味着用户是夸请求的，而 ViewBag 不能用于夸请求情况下控制器与视图之间的数据传递) |
| TempData | TempData 的数据被限制到一个单一用户的会话，用户不会看到互相的 TempData，并且会一直保持到被读取位置。TempData 在 HTTP 请求结束时会被删除 |

服务端验证只有在把数据提交给服务器时，才会用运数据验证。如果希望输入的数据有问题时立即得到反馈，就需要使用客户端验证

```csharp
Install-Package Microsoft.jQuery.Unobtrusive.Validation -version 3.0.0 -projectname SportsStore.WebUI
```

如果出于某种原因而不希望在客户端验证时，则需要使用以下语句：

```csharp
@{
    HtmlHelper.ClientValidationEnabled = false;
    HtmlHelper.UnobtrusiveJavaScriptEnabled = false;
}
```

如果要禁用整个应用程序的客户端验证，可以在 Web.config 文件中设置这些值：

```xml
<configuration>
    <appSettings>
        <add key="ClientValidationEnabled" value="false"/>
        <add key="UnobtrusiveJavaScriptEnabled" value="false"/>
    </appSettings>
</configuration>
```

# 第 12 章 SportsStore：安全性与收尾工作

## 实现管理控制器的安全

**表单验证** 是在 ASP.NET 应用程序中验证用户的一种方法

```xml
<system.web>
<authentication mode="Forms">
  <forms loginUrl="~/Account/Login" timeout="2880" />
</authentication>
</system.web>
```

使用 **authentication** 元素建立认证，并且使用 **model** 属性来指明想要使用表单验证 **loginUrl** 属性告诉 ASP.NET 当用户需要对自己进行认证时，应该将他们定向到哪一个 URL， **timeout** 属性指明了被认证用户一旦登录之后的保持时间，用分钟表示

MVC 框架有一个叫做 **过滤器 (Filter)** 的功能强大的特性。这些过滤器是一些.NET 的注解属性，你可以把它们运用于动作方法或控制器类。当一个改变 MVC 框架行为的请求被处理时，它们可以引入一些附加逻辑。 过滤器有许多不同的种类，而且也可以创建自定义过滤器，和认证有关的过滤器是 **授权过滤器 Authorize**

```csharp
using System.Linq;
using System.Web.Mvc;
using SportsStore.Domain.Abstract;
using SportsStore.Domain.Entities;
namespace SportsStore.WebUI.Controllers
{
    [Authorize]
    public class AdminController : Controller
    {
        private IProductRepository repository;
        public AdminController(IProductRepository repo)
        {
            repository = repo;
        }
        // ...action methods omitted for brevity...
    }
}
```

当不带任何参数运用时，这个 **Authorize** 注解属性便允许所有的认证用户访问该控制器的动作方法。即如果是已认证用户，将被自动授权以使用这些管理特性 也可以将过滤器运用于个别的动作方法或控制器。将一个过滤器运用于一个控制器时就如同把它运用于该控制器中的每一个动作方法一样 如果在没有经过认证时访问运用了 **Authorize** 过滤器的动作方法，将会被重定向到 Web.config 表单认证小节所指定的 URL

使用表单认证特性要求调用 **System.Web.Security.FormsAuthentication** 类的两个静态方法：

* **Authenticate** 方法验证用户提供的凭据
* **SetAuthCookie** 方法对浏览器的响应添加一个 cookie，这样便不需要对用户所做出的每一个请求都进行认证

## 图像上传

介绍如何上传图片，并将图片保存到数据库，以及从数据库中输出图片到页面上

# 第 13 章 部署

介绍基于 Azure 的云端部署

# 第 14 章 MVC 项目综述

## 使用 Visual Studio 的 MVC 项目

Visual Studio 对项目中你想要的内容给出了几种选择。无论选用哪一个模板，生成的项目都有着相似的文件夹结构。MVC 项目中的一些条目有特定的作用，它们被硬编码到 ASP.NET 或 MVC 项目框架中，而其他条目则遵从于一些命名约定。

MVC 项目条目概要

| 文件夹或文件      | 描述                                                         | 注                                                           |
| :---------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| /App_Data         | 此文件夹用于放置私有数据，如 XML 文件，或使用 SQL Server Express、SQLite 的数据库文件，或其他基于文件的存储库 | IIS 将不对此文件夹的内容提供服务                             |
| /App_Start        | 此文件夹包含项目的一些核心配置设置，包括路由和过滤器的定义，以及一些内容包等 |                                                              |
| /Areas            | 区域是把一个大型应用程序划分成较小片段的方法                 |                                                              |
| /bin              | 为 MVC 应用程序编译好的程序集被放在这里，连同任何被引用的包括不在 GAC (全局程序集缓存) 中的引用程序集 | IIS 不对此目录中的内容进行服务。在解决方案资源管理器窗口中看不到这个 bin 目录，除非单击 "显示所有文件" 按钮。由于这些是编译生成的二进制文件，通常不应把它们存储在源控制中 |
| /Content          | 用于放置静态内容，如 CSS 文件和图像等                        | 这是一个约定但不是必须的。你可以把静态内容放在任何适合自己的地方 |
| /Controllers      | 用于放置控制器类                                             | 这是一个约定。可以把控制器类放在任何地方，因为它们都会被编译到同一个程序集中 |
| /Models           | 用于放置视图模型和域模型类，除非是最简单的应用程序，否则都能够获益于在一个专用项目中定义域模型，而把视图模型放在 Model 文件夹中，这是一种软件设计方法学思想，可以使应用程序具有更清晰的结构 | 这是一个约定。可以在项目中的任何地方，或是一个独立的项目中定义域模型 |
| /Scripts          | 本目录意在保存应用程序的 JavaScript 库                       | 这是一个约定。你可以把脚本文件放在任何一个位置，因为它们实质上只是另一种类型的静态内容 |
| /Views            | 本目录保存视图和分部视图，通常按它们关联的控制器命名文件夹进行分组 | /Views/Web.config 文件阻止 IIS 对这些目录的内容进行服务。视图必须通过动作方法进行渲染 |
| /Views/Shared     | 本目录保存布局，以及不专用于个别控制器的视图                 |                                                              |
| /Views/Web.config | 这不是应用程序的配置文件。它含有使视图能够和 ASP.NET 进行工作、防止 IIS 调用视图所需要的配置，还含有默认导入视图的命名空间 |                                                              |
| /Global.asax      | 这是全局 ASP.NET 应用程序类。它的后台代码类 (Global.asax.cs) 用于注册路由配置，也是建立涉及应用程序初始化、停机或出现未处理异常情况时需要运行的代码的地方 | Global.asax 文件在 MVC 应用程序中的作用与其在 Web Form 应用程序中的作用相同 |
| /Web.config       | 这是应用程序的配置文件                                       | Web.config 文件在 MVC 应用程序中的作用与其在 Web Form 应用程序中的作用相同 |

理解 MVC 约定 在一个 MVC 项目中有两种约定：

* 第一种其实只是建议你如何去构造项目。例如，把 JavaScript 文件放在 Scripts 文件夹中。
* 另一种约定源于 **约定优于配置 (Convention Over Configuration)** 原则，这是使 Ruby On Rails 如此流行的主要买点之一。约定优于配置的含义为：你不需要明确的配置控制器与其视图之间的关联，只要遵从某种命名约定，一切都会正常工作。

遵循控制器类约定： 控制器名必须以 "Controller" 结尾，当从项目的其他地方引用一个控制器时，需要指定控制器名的第一部分，MVC 框架会自动地把 "Controller" 附加到该名字的后面，并开始去查找这个控制器类

遵循视图约定： 视图及分部视图放在 /Views/Controllername 文件夹中 (Controllername 不包括 Controller 部分)。在查找一个视图时，MVC 框架会查看以控制器命名的文件夹，然后查看 /Views/Shared 文件夹。这意味着我们可以把由多个控制器使用的视图放在 /Views/Shared 文件夹中，而框架一样会找到它们

遵循布局约定： 对于布局的命名约定是，以下划线字符作为文件名前缀，而且布局文件应放在 /Views/Shared 文件夹中，默认情况下，会通过 /Views/_ViewStart.cshtml 文件将这个布局运用于所有视图。如果不想把默认布局用于视图，可以修改 `_ViewStart.cshtml` 中的设置 (或完全删除这个文件)，以指定视图中的其他布局

## 调试 MVC 应用程序

介绍 Visual Studio 调试器的基本使用、使用 "编辑并继续"、使用 "浏览器链接" 浏览器链接允许你同时在多个浏览器中查看应用程序，并且当发生修改时可以重装它们

# 第 15 章 URL 路由

在引入 MVC 框架之前，ASP.NET 假设在请求的 URL 与服务器硬盘上的文件之间有直接的关系。服务器的工作是接收浏览器的请求，并交付相应文件的输出。 这种方式对 Web Form 工作得很好。在 Web Form 情况下，每个 ASPX 页面既是一个文件，又是一个对请求自包含的响应。 这对于 MVC 应用程序没有什么意义，在 MVC 情况下，请求是由控制器中类的动作方法处理的，而且与硬盘上的文件没有一对一的相互关系。为了处理 MVC 的 URL，ASP.NET 平台使用了路由系统。路由系统有两个功能：

* 考察一个 **输入 URL** (Incoming URL)，并推断出该请求想要的是哪一个控制器和动作
* 生成 **输出 URL** (Outgoing URL)。这些 URL 是在视图渲染的 HTML 中出现的 URL，以便用户单击这些链接时，调用一个特定的动作 (此时，它又变成了输入 URL)

## 创建示例项目

## URL 模式

路由系统用一组路由来实现它的功能，这些路由共同组成了应用程序的 URL 架构 (Schema) 或方案 (Scheme)，这种 URL 架构 (或方案) 是应用程序能够识别并做出响应的一组 URL

路由系统没有任何控制器和动作的专门知识。它只是为片段变量取值，并把这些值沿着请求管道进行传递

默认情况下一个 URL 模式将匹配具有正确片段数的任何 URL

URL 模式的两个关键行为：

* URL 模式是 **保守的 (Conservative)** ，因为只匹配与模式具有相同片段数的 URL
* URL 模式是 **宽松的 (Liberal)** 。如果一个 URL 正好具有正确的片段数，该模式就会用来为片段变量取值，而不管这个值可能是什么

路由系统并不知道关于 MVC 应用程序的任何情况，因此，即使不存在从一个 URL 提取出来的值所对应的控制器或动作，URL 模式也会进行匹配

## 创建并注册一条简单的路由

路由是在 **RouteConfig.cs** 文件中进行定义的，该文件位于项目的 App_Start 文件夹中

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace UrlsAndRoutes
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
                routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new
                {
                    controller = "Home",
                    action = "Index",
                    id = UrlParameter.Optional
                }
            );
        }
    }
}
```

在 RouteConfig.cs 文件中定义的静态方法 **RegisterRoutes** 方法是通过 Global.asax.cs 文件进行调用的，当启动应用程序时，它建立了一些核心的 MVC 特性

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace UrlsAndRoutes
{

    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            RouteConfig.RegisterRoutes(RouteTable.Routes);
        }
    }
}
```

Application_Start 方法是在 MVC 应用程序第一次启动时，通过底层的 ASP.NET 平台进行调用的，这会导致 RouteConfig.RegisterRoutes 方法被调用。该方法的参数是静态 RouteTable.Routes 属性的值。它是 RouteCollection 类的一个实例

创建一条路由

```csharp
...
public static void RegisterRoutes(RouteCollection routes)
{
  Route myRoute = new Route("{controller}/{action}", new MvcRouteHandler());
  routes.Add("MyRoute", myRoute);
}
...
```

路由的命名是可选的，而且有一种辩证的观点认为，这样做会牺牲路由自身形成的一些清晰的关注分离。对路由的命名是相当宽松的

注册路由的一个更方便的办法是，使用在 RouteCollection 类所定义的 MapRoute 方法

```csharp
...
public static void RegisterRoutes(RouteCollection routes)
{
  routes.MapRoute("MyRoute", "{controller}/{action}");
}
...
```

这个办法更紧凑一点，主要是因为不需要创建 MvcRouteHandler 实例。MapRoute 方法专用于 MVC 应用程序。ASP.NET 应用程序可以使用 MapPageRoute 方法，这也是在 RouteCollection 类中定义的

测试输入 URL 测试一个应用程序的路由方案最便利的做法是，能够在一个单一的方法中批处理几个测试，而且借助于某些辅助器方法，这会变的容易很多 为了测试路由，需要模仿 MVC 框架的三个类：HttpRequestBase、HttpContextBase 和 HttpResponseBase。合在一起这些类重建了足以支持路由系统的 MVC 体系结构

## 定义默认值

当请求上述应用程序的默认 URL 时，出现错误的原因是它不匹配已经定义的路由。默认路由被表示成 "~/" 送给路由系统，因此，在这个字符串中，没有与上述简单路由模式所定义的 controller 和 action 变量所匹配的片段 前面曾解释过，URL 模式是保守的，它们只匹配指定片段数的 URL。这是默认行为。改变这种行为的一个办法是使用默认值。当 URL 不包含与一个片段匹配的值时，便使用默认值

```csharp
...
public static void RegisterRoutes(RouteCollection routes)
{
  routes.MapRoute("MyRoute", "{controller}/{action}",
      new { action = "Index" });
}
...
```

可以更进一步，定义根本不包含任何片段变量的 URL

```csharp
...
public static void RegisterRoutes(RouteCollection routes)
{
  routes.MapRoute("MyRoute", "{controller}/{action}",
      new { controller = "Home", action = "Index" });
}
...
```

## 使用静态 URL 片段

并不是一个 URL 模式中的所有片段都需要是可变的，也可以创建具有静态片段的模式 假设希望匹配带有 Public 前缀的 URL：…/Public/Home/Index，可以使用如下模式来实现：

```csharp
...
public static void RegisterRoutes(RouteCollection routes)
{
    routes.MapRoute("MyRoute", "{controller}/{action}", 
        new { controller = "Home", action = "Index" });

    routes.MapRoute("", "Public/{controller}/{action}",
        new { controller = "Home", action = "Index" });
}
...
```

这个新的 URL 模式只匹配含有三个片段的 URL，第一个必须是 Public。其他两个片段可以是任何值，并将被用于 controller 和 action 变量

还可以创建既有静态也有可变元素片段的 URL 模式

```csharp
...
public static void RegisterRoutes(RouteCollection routes)
{
    routes.MapRoute("", "X{controller}/{action}");

    routes.MapRoute("MyRoute", "{controller}/{action}",
        new { controller = "Home", action = "Index" });

    routes.MapRoute("", "Public/{controller}/{action}",
        new { controller = "Home", action = "Index" });
}
...
```

这条路由中的模式匹配任意两片段 URL，而第一个片段以字母 "X" 打头。用于 controller 的值取自第一个片段除 "X" 以外的部分，Action 值取自第二个片段

路由顺序：

* 把这条路由放在所有其他路由之前的原因是：路由 **一般** 是以出现的顺序被运用的。虽然也有办法把路由插入到指定的位置，但通常不使用这种办法，因为让路由以它们被定义的顺序来运用，更容易理解运用于一个应用程序的路由
* 路由系统试图根据最先被定义的路由模式来匹配一个输入 URL，并且只有在不匹配时才会继续对下一条路由进行处理。路由被依次尝试直至找到匹配的一条，或这组路由被尝试完。所以必须首先定义较具体的路由

可以结合静态片段和默认值为特定的路由创建一个别名。如果你已经公开地发布了 URL 方案，并且它与你的用户形成了一种契约，那么，创建这种别名可能是有用的

```csharp
...
public static void RegisterRoutes(RouteCollection routes)
{
    routes.MapRoute("ShopSchema", "Shop/{action}",
        new { controller = "Home" });

    routes.MapRoute("", "X{controller}/{action}");

    routes.MapRoute("MyRoute", "{controller}/{action}",
        new { controller = "Home", action = "Index" });

    routes.MapRoute("", "Public/{controller}/{action}",
        new { controller = "Home", action = "Index" });
}
...
```

添加的这条路由匹配第一个片段是 "Shop" 的任意两片段 URL，action 的值取自第二个 URL 片段。这个 URL 模式不含 controller 的可变片段，因而会使用所提供的默认值 这意味着对 Shop 控制器上一个动作的请求会被转换成对 Home 控制器的请求

更进一步，为不再出现在控制器中的动作方法创建别名

```csharp
...
public static void RegisterRoutes(RouteCollection routes)
{
    routes.MapRoute("ShopSchema2", "Shop/OldAction",
        new { controller = "Home", action = "Index" });

    routes.MapRoute("ShopSchema", "Shop/{action}",
        new { controller = "Home" });

    routes.MapRoute("", "X{controller}/{action}");

    routes.MapRoute("MyRoute", "{controller}/{action}",
        new { controller = "Home", action = "Index" });

    routes.MapRoute("", "Public/{controller}/{action}",
        new { controller = "Home", action = "Index" });
}
...
```

## 定义自定义片段变量

controller 和 action 片段变量对 MVC 框架而言有特殊的含义，显然，它们对应于对请求进行服务的控制器和动作方法。但我们不能被受限于这些内建的片段变量 —— 也可以定义自己的变量

```csharp
...
public static void RegisterRoutes(RouteCollection routes)
{
  routes.MapRoute("MyRoute", "{controller}/{action}/{id}",
        new
        {
            controller = "Home",
            action = "Index",
            id = "DefaultId"
        });
}
...
```

该路由的 URL 模式定义了标准的 controller 和 action 变量，以及一个名为 "id" 的自定义变量

注意： 有些名字是保留的，因而不能用于自定义片段变量名。这些名字是： **controller** 、 **action** 和 **area**

通过使用 **RouteData.Values** 属性，我们能够在一个动作方法中访问任何一个片段变量

```csharp
using System.Web.Mvc;

namespace UrlsAndRoutes.Controllers
{
    public class HomeController : Controller {
        public ActionResult Index()
        {
            ViewBag.Controller = "Home";
            ViewBag.Action = "Index";
            return View("ActionName");
        }

        public ActionResult CustomVariable()
        {
            ViewBag.Controller = "Home";
            ViewBag.Action = "CustomVariable";
            ViewBag.CustomVariable = RouteData.Values["id"];
            return View();
        }
    }
}
```

**RouteData.Values** 属性只是访问自定义路由变量的一种方式。另一种方式要优雅得多：如果以 URL 模式中的变量相匹配的名称来定义动作方法的参数，MVC 框架将把从 URl 获得的值作为参数传递给该动作方法

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace UrlsAndRoutes.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Controller = "Home";
            ViewBag.Action = "Index";
            return View("ActionName");
        }

        public ActionResult CustomVariable(string id)
        {
            ViewBag.Controller = "Home";
            ViewBag.Action = "CustomVariable";
            ViewBag.CustomVariable = id;
            return View();
        }
    }
}
```

虽然这里将 id 参数定义成一个 string，但 MVC 框架会尝试将 URL 的值转换成所定义的任何参数类型。如果将 id 参数声明为 int 或 DateTime，那么从 URL 模式接收到的将是一个被解析成该类型实例的值。这是一个雅致而有用的特性，该特性使我们不需要自己去处理这种转换

注意： MVC 框架采用 **模型绑定** 特性将包含在 URL 中的值转换成.NET 类型，并且能够处理比这个例子复杂得多的情况

定义可选 URL 片段， **可选** URL 片段是指，用户不需要指定，但又未指定默认值的片段 通过将默认值设置为 "UrlParameter.Optional"，便指明一个片段变量是可选的

```csharp
...
public static void RegisterRoutes(RouteCollection routes)
{
  routes.MapRoute("MyRoute", "{controller}/{action}/{id}",
        new
        {
            controller = "Home",
            action = "Index",
            id = UrlParameter.Optional
        });
}
...
```

在控制器中响应无提供值的 id 片段变量

```csharp
using System.Web.Mvc;

namespace UrlsAndRoutes.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Controller = "Home";
            ViewBag.Action = "Index";
            return View("ActionName");
        }

        public ActionResult CustomVariable(string id)
        {
            ViewBag.Controller = "Home";
            ViewBag.Action = "CustomVariable";
            ViewBag.CustomVariable = id ?? "<no value>";
            return View();
        }
    }
}
```

使用可选 URL 片段强制关注分离 有些开发人员十分注重 MVC 模式中的关注分离，它们不喜欢将片段变量的默认值放在应用程序的路由中。如果这是个问题，你可以使用可选参数，以及路由中的可选片段变量，来定义动作方法参数的默认值

```csharp
...
public ActionResult CustomVariable(string id = "DefaultId")
{
    ViewBag.Controller = "Home";
    ViewBag.Action = "CustomVariable";
    ViewBag.CustomVariable = id;
    return View();
}
...
```

一条等价的路由

```csharp
...
routes.MapRoute("MyRoute", "{controller}/{action}/{id}",
    new { controller = "Home", action = "Index", id = "DefaultId" });
...
```

定义可变长路由 改变 URL 模式默认保守性的另一种方式是接收可变数目的 URL 片段。这让你能够以一个单一的路由，对任意长度的 URL 进行路由。通过指定一个叫做 **全匹配 (catchall)** 的片段变量，并以 `*` 作为其前缀，便可以定义对可变片段数的支持

```csharp
...
public static void RegisterRoutes(RouteCollection routes)
{
  routes.MapRoute("MyRoute", "{controller}/{action}/{id}/{*catchall}",
        new { controller = "Home", action = "Index",
            id = UrlParameter.Optional
        });
}
...
```

上述示例扩展了前一示例的路由，添加了一个 catchall 片段变量，我将该片段变量形象地称为 "catchall (全匹配)"。现在，这条路由将匹配任何 URL，无论路由包含多少片段数，也不管这些片段的值是什么。前三个片段分别用于设置 controller、action 和 id 变量的值。如果 URL 含有更多片段，则它们全部被赋给 catchall 变量

注意： 可以像对待自定义变量一样来处理 catchall 变量。唯一的差别是，必须预料到多个片段会被连成一个单一的字符串值，如 "片段 / 片段 / 片段"。注意，不会接收到前导的或后导的 "/" 字符

按命名空间区分控制器优先顺序 在 MVC 框架在查找控制器时如果找到一个或多个名称相同但位于不同命名空间的控制器时，MVC 框架将不知道该怎么做。为了解决这一问题，可以告诉 MVC 框架，在试图解析控制器类的名称时，对某些命名空间给予优先处理

```csharp
...
public static void RegisterRoutes(RouteCollection routes)
{
  routes.MapRoute("MyRoute", "{controller}/{action}/{id}/{*catchall}",
        new
        {
            controller = "Home",
            action = "Index",
            id = UrlParameter.Optional
        }, new[] { "URLsAndRoutes.AdditionalControllers" });
}
...
```

该示例把这些命名空间表示成一个字符串数组，以上代码告诉 MVC 框架，在考查其他空间之前，先考查 URLsAndRoutes.AdditionalControllers 命名空间 如果在这个命名空间中找不到合适的控制器，那么 MVC 框架会回到正常行为，并考查所有可用的命名空间 添加到一条路由的命名空间具有同等的优先级。MVC 框架不会先检查第一命名空间，然后再检查第二、第三等命名空间

```csharp
...
routes.MapRoute("MyRoute", "{controller}/{action}/{id}/{*catchall}",
    new { controller = "Home", action = "Index", id = UrlParameter.Optional },
    new[] { "URLsAndRoutes.AdditionalControllers", "UrlsAndRoutes.Controllers" });
...
```

如果希望对一个命名空间中的某个控制器给予优先，但又要解析另一个命名空间中的所有其他控制器，就需要创建多条路由

```csharp
...
public static void RegisterRoutes(RouteCollection routes)
{
  routes.MapRoute("AddContollerRoute", "Home/{action}/{id}/{*catchall}",
        new
        {
            controller = "Home",
            action = "Index",
            id = UrlParameter.Optional
        },
        new[] { "URLsAndRoutes.AdditionalControllers" });

  routes.MapRoute("MyRoute", "{controller}/{action}/{id}/{*catchall}",
        new
        {
            controller = "Home",
            action = "Index",
            id = UrlParameter.Optional
        },
        new[] { "URLsAndRoutes.Controllers" });
}
...
```

当用户明确地请求第一个片段为 Home 的 URL 时，会运用第一条路由，并且会以 AdditionalControllers 文件夹中的 Home 控制器为目标。所有其他请求，包括未指定第一片段的那些请求，会由 Controllers 文件夹中的控制器去处理 我们也可以告诉 MVC 框架，只考查我们所指定的命名空间。如果找不到一个匹配的控制器，那么框架将不会搜索其他地方

```csharp
...
public static void RegisterRoutes(RouteCollection routes)
{
  Route myRoute = routes.MapRoute("AddContollerRoute",
        "Home/{action}/{id}/{*catchall}",
        new
        {
            controller = "Home",
            action = "Index",
            id = UrlParameter.Optional
        },
        new[] { "URLsAndRoutes.AdditionalControllers" });

  myRoute.DataTokens["UseNamespaceFallback"] = false;
}
...
```

MapRoute 方法会返回一个 Route 对象。在前面的例子中未提及它，因为不需要对所创建的路由做任何调整。为了禁止搜索其他命名空间，我们需要取得这个 Route 对象，并把 DataTokens 属性集中的 UseNamespaceFallback 键值设置为 "false" 该设置将被沿途传递给负责查找控制器的组件，该组件称为 **控制器工厂 (Controller Factory)** 。这个附加的效果是，不能满足 AdditionalControllers 文件夹中 Home 控制器的请求将失败

## 约束路由

URL 模式在如何进行片段匹配方面是保守的，而在如何进行片段内容匹配方面又是宽松的。前面已经介绍了对保守程度进行控制的不同技术 —— 用默认值、可选变量等使路由匹配或多或少的片段数 接下来该是考查宽松机制的时候了，看看如何对 URL 片段内容匹配方面的宽松性进行控制 —— 即如何进行约束对路由进行匹配的 URL

用正则表达式约束路由

```csharp
...
public static void RegisterRoutes(RouteCollection routes)
{
  routes.MapRoute("MyRoute", "{controller}/{action}/{id}/{*catchall}",
        new { controller = "Home", action = "Index", id = UrlParameter.Optional },
        new { controller = "^H.*" },
        new[] { "URLsAndRoutes.Controllers" });
}
...
```

通过把约束作为参数传递给 MapRoute 方法，可以定义约束。同默认值一样，约束被表示成一个匿名类型，该类型的属性对应于想要进行约束的片段变量名。以上示例以正则表达式形成了一个约束，它只匹配 controller 变量值以 "H" 字母打头的 URL

注意： 默认值是在约束被检查之前运用的。因此，如果请求的 URL 是 "/"，会将默认值 "Home" 运用与 controller，然后才会检查约束

将一条路由约束到一组指定的值 可以使用正则表达式来约束路由，以便对于一个 URL 片段，只有指定的一些值才会形成匹配。可以用 **竖线 (|)** 字符来做这件事

```csharp
public static void RegisterRoutes(RouteCollection routes)
{
  routes.MapRoute("MyRoute", "{controller}/{action}/{id}/{*catchall}",
        new { controller = "Home", action = "Index", id = UrlParameter.Optional },
        new { controller = "^H.*", action = "^Index$|^About$" },
        new[] { "URLsAndRoutes.Controllers" });
}
```

这条约束将允许这条路由只匹配 action 片段的值是 "Index" 或 "About" 的 URL。 这条约束合起来就是，施加于 action 变量的约束与施加与 controller 变量的约束相组合。这意味着所示路由将只匹配这样的 URL：controller 变量以 "H" 字母打头，而且 action 变量是 "Index" 或 "About"

使用 HTTP 方法约束路由 可以对路由进行约束，以使它们只匹配以指定 HTTP 方法进行请求的 URL

```csharp
...
public static void RegisterRoutes(RouteCollection routes)
{
  routes.MapRoute("MyRoute", "{controller}/{action}/{id}/{*catchall}",
        new { controller = "Home", action = "Index", id = UrlParameter.Optional },
        new
        {
            controller = "^H.*",
            action = "Index|About",
            httpMethod = new HttpMethodConstraint("GET")
        },
        new[] { "URLsAndRoutes.Controllers" });
}
...
```

指定 HTTP 方法约束的格式有点奇怪。它与为该约束属性所给出的名称无关，只要给它赋予一个 HttpMethodConstraint 类的实例。这里将此约束属性叫做 "httpMethod"，只是为了有助于区分它与前面定义的那些基于值的约束

注意： 借助 HTTP 方法约束路由的能力，与使用诸如 HttpGet 和 HttpPost 等注解属性限制动作方法的能力是无关的。在请求管道中路由约束的处理要早的多，而且它们决定了需要对一个请求进行处理的 controller 和 action 的名称。动作方法的注解属性用来确定由控制器用哪一个特定的动作方法对一个请求进行服务

把希望支持的 HTTP 方法名称以字符串参数传递给 HttpMethodConstraint 类的构造器。，可以很容易地添加对其他方法的支持

```csharp
...
httpMethod = new HttpMethodConstraint("GET", "POST") },
...
```

使用类型和值约束 MVC 框架包含了许多内置的约束，它们可以用来限制路由匹配基于类型和片段变量值的 URL

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using System.Web.Mvc.Routing.Constraints;

namespace UrlsAndRoutes
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.MapRoute("MyRoute", "{controller}/{action}/{id}/{*catchall}",
                new { controller = "Home", action = "Index", id = UrlParameter.Optional },
                new
                {
                    controller = "^H.*",
                    action = "Index|About",
                    httpMethod = new HttpMethodConstraint("GET"),
                    id = new RangeRouteConstraint(10, 20)
                },
                new[] { "URLsAndRoutes.Controllers" });
        }
    }
}
```

在 **System.Web.Mvc.Routing.Constraints** 命名空间的约束类中，检查片段变量是否是不同的 C# 类型值，并执行基本的检查。在这里，使用了 **RangeRouteConstraint** 类，它检查提供给片段变量的值是在两个边界之间的一个有效 int 类型值。

路由属性类

| 名称                                                        | 描述                                                         | 属性约束                     |
| :---------------------------------------------------------- | :----------------------------------------------------------- | :--------------------------- |
| AlphaRouteConstraint()                                      | 匹配字母字符，主要是 (A~Z，a~z)                              | alpha                        |
| BoolRouteConstraint()                                       | 匹配一个可以解析成 bool 类型的值                             | bool                         |
| DateTimeRouteConstraint()                                   | 匹配一个可以解析成 DateTime 类型的值                         | datetime                     |
| DecimalRouteConstraint()                                    | 匹配一个可以解析成 decimal 类型的值                          | decimal                      |
| DoubleRouteConstraint()                                     | 匹配一个可以解析成 double 类型的值                           | double                       |
| FloatRouteConstraint()                                      | 匹配一个可以解析成 float 类型的值                            | float                        |
| IntRouteConstraint()                                        | 匹配一个可以解析成 int 类型的值                              | int                          |
| LengthRouteConstraint(len)、LengthRouteConstraint(min, max) | 匹配一个指定字符个数的值，或匹配字符个数在 min 和 max 之间的值 | length(len) length(min, max) |
| LongRouteConstraint()                                       | 匹配一个可以解析成 long 类型的值                             | long                         |
| MaxRouteConstraint(val)                                     | 匹配一个值小于 val 的 int 值                                 | max(val)                     |
| MaxLengthRouteConstraint(len)                               | 匹配一个长度不超过 len 的字符串                              | maxlength(len)               |
| MinRouteConstraint(val)                                     | 匹配一个值大于 val 的 int 值                                 | min(val)                     |
| MinLengthRouteConstraint(len)                               | 匹配一个长度至少为 len 的字符串                              | minlength(len)               |
| RangeRouteConstraint(min, max)                              | 匹配一个值在 min 和 max 之间的值                             | range(min, max)              |

使用 CompoundRouteConstraint 类 (该类接受一个约束数组作为它构造器的参数)，你可以为一个单一的片段变量组合不同的约束

```csharp
...
public static void RegisterRoutes(RouteCollection routes)
{
  routes.MapRoute("MyRoute", "{controller}/{action}/{id}/{*catchall}",
        new { controller = "Home", action = "Index", id = UrlParameter.Optional },
        new
        {
            controller = "^H.*",
            action = "Index|About",
            httpMethod = new HttpMethodConstraint("GET"),
            id = new CompoundRouteConstraint(new IRouteConstraint[] {
                new AlphaRouteConstraint(),
                new MinLengthRouteConstraint(6)
        })
        },
        new[] { "URLsAndRoutes.Controllers" });
}
...
```

定义自定义约束 如果标准约束不满足你的需求，可以通过实现 **IRouteConstraint** 接口，来定义你自己的自定义约束

```csharp
using System.Web;
using System.Web.Routing;

namespace UrlsAndRoutes.Infrastructure
{
    public class UserAgentConstraint : IRouteConstraint
    {
        private string requiredUserAgent;
        public UserAgentConstraint(string agentParam)
        {
            requiredUserAgent = agentParam;
        }
        public bool Match(HttpContextBase httpContext, Route route, string parameterName,
        RouteValueDictionary values, RouteDirection routeDirection)
        {
            return httpContext.Request.UserAgent != null &&
            httpContext.Request.UserAgent.Contains(requiredUserAgent);
        }
    }
}
```

**IRouteConstraint** 接口定义了 **Math** 方法，它的实现实现可以用来对路由系统指示它的约束是否已得到满足。Math 方法的参数提供对以下对象的访问：客户端请求、待评估路由、约束和参数名、从 URL 提取的片段变量，以及该请求要检查的是输入 URL 还是输出 URL 的细节。对于上述示例，要检查的是客户端请求的 UserAgent 属性的值，看它是否含有一个被传递给构造器的值

```csharp
...
using UrlsAndRoutes.Infrastructure;
namespace UrlsAndRoutes
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.MapRoute("ChromeRoute", "{*catchall}",
                new { controller = "Home", action = "Index" },
                new { customConstraint = new UserAgentConstraint("Chrome") },
                new[] { "UrlsAndRoutes.AdditionalControllers" });

            routes.MapRoute("MyRoute", "{controller}/{action}/{id}/{*catchall}",
                new { controller = "Home", action = "Index", id = UrlParameter.Optional },
                new
                {
                    controller = "^H.*",
                    action = "Index|About",
                    httpMethod = new HttpMethodConstraint("GET"),
                    id = new CompoundRouteConstraint(new IRouteConstraint[] {
                        new AlphaRouteConstraint(),
                        new MinLengthRouteConstraint(6)
                })
                },
                new[] { "URLsAndRoutes.Controllers" });
        }
    }
}
...
```

该示例约束了第一条路由，以使它只匹配来自用户代理字符串含有 Chrome 的浏览器的请求。如果此路由匹配，那么该请求将会被发送给 AdditionalControllers 文件夹中定义的 Home 控制器的 Index 动作方法，而不管所请求的 URL 具有什么样的结构或内容。该路由的 URL 模式中只有一个 catchall 片段变量，这意味着 controller 和 action 片段变量的值总是来自默认值，而不是 URL 本身 第二条路由将匹配其他所有请求，并以 Controllers 文件夹中的控制器为目标。这两条路由的总体效果是，有一种浏览器最终只能访问应用程序的同一位置

## 使用属性路由

到目前为止，本章的所有示例都是基于 **约定的路由** 技术进行定义的。MVC5 增加了对 **属性路由** 这一新技术的支持，在属性路由中，路由是由直接运用于控制器类的 C# 属性定义的，它可以自由地与标准和基于约定的路由相混合

启用和运用属性路由 默认情况下属性路由是禁用的，通过 MapMvcAttributeRoutes 扩展方法可以启用它，该扩展方法由 RouteCollection 对象调用，并且该对象作为参数传递给静态 RegisterRoutes 方法

```csharp
...
public static void RegisterRoutes(RouteCollection routes)
{
  routes.MapMvcAttributeRoutes();

  routes.MapRoute("Default", "{controller}/{action}/{id}",
        new
        {
            controller = "Home",
            action = "Index",
            id = UrlParameter.Optional
        },
        new[] { "UrlsAndRoutes.Controllers" });
}
...
```

调用 MapMvcAttributeRoutes 方法导致路由系统检查应用程序中的控制器类，并寻找配置路由的属性。最重要的属性是 Route

```csharp
using System.Web.Mvc;

namespace UrlsAndRoutes.Controllers
{
    public class CustomerController : Controller
    {
        [Route("Test")]
        public ActionResult Index()
        {
            ViewBag.Controller = "Customer";
            ViewBag.Action = "Index";
            return View("ActionName");
        }
        public ActionResult List()
        {
            ViewBag.Controller = "Customer";
            ViewBag.Action = "List";
            return View("ActionName");
        }
    }
}
```

这是 Route 属性的基本使用，它为动作方法定义了一个静态路由。Route 属性定义了两个特性：

Route 属性支持的参数

| 名称     | 描述                                             |
| :------- | :----------------------------------------------- |
| Name     | 给路由分配名称，用于从一个特定的路由产生输出 URL |
| Template | 定义一个模式，用于匹配以动作方法为目标的 URL     |

当运用 Route 属性时，如果你只提供一个值，那么值被假设成一个用于匹配路由的模式。虽然 Route 属性模式遵循基于约定的路由的结构，但当实现约束路由匹配时仍有一些差异。在本示例中，用 Route 属性指明 Customer 控制器中的 Index 动作方法可以通过 /Test 来访问 当一个动作方法用 Route 属性修饰时，它不需要通过在 RouteConfig.cs 文件中定义的基于约定的路由来访问。对此例来说，意味着 Customer 控制器中的 Index 动作方法不再需要通过 /Customer/Index 来访问

注意： 即使属性路由禁用，Route 属性使基于约定的路由不再以动作方法为目标。注意 RouteConfig.ca 文件中 MapMvcAttributeRoutes 方法的调用，否则你将创建无法访问的动作方法

Route 属性仅影响运用它的方法，这意味着 Customer 控制器中的 Index 动作方法可以通过 /Test 访问，而使用 /Customer/List 必须以 List 方法为目标

可以对同一动作方法多次运用 Route 属性，每个实例将创建一个新的路由

使用片段变量创建路由 虽然通过属性表示，但属性路由支持和基于约定的路由一样的特性。这些特性包括包含创建片段变量的路由

```csharp
using System.Web.Mvc;

namespace UrlsAndRoutes.Controllers
{
    public class CustomerController : Controller
    {
        [Route("Test")]
        public ActionResult Index()
        {
            ViewBag.Controller = "Customer";
            ViewBag.Action = "Index";
            return View("ActionName");
        }
        [Route("Users/Add/{user}/{id}")]
        public string Create(string user, int id)
        {
            return string.Format("User: {0}, ID: {1}", user, id);
        }
        public ActionResult List()
        {
            ViewBag.Controller = "Customer";
            ViewBag.Action = "List";
            return View("ActionName");
        }
    }
}
```

运用路由约束 使用属性定义的路由可以像 RouteConfig.cs 文件中的路由一样被约束，但技术更直接

```csharp
using System.Web.Mvc;

namespace UrlsAndRoutes.Controllers
{
    public class CustomerController : Controller
    {
        [Route("Test")]
        public ActionResult Index()
        {
            ViewBag.Controller = "Customer";
            ViewBag.Action = "Index";
            return View("ActionName");
        }
        [Route("Users/Add/{user}/{id:int}")]
        public string Create(string user, int id)
        {
            return string.Format("Create Method - User: {0}, ID: {1}", user, id);
        }
        [Route("Users/Add/{user}/{password}")]
        public string ChangePass(string user, string password)
        {
            return string.Format("ChangePass Method - User: {0}, Pass: {1}",
            user, password);
        }
        public ActionResult List()
        {
            ViewBag.Controller = "Customer";
            ViewBag.Action = "List";
            return View("ActionName");
        }
    }
}
```

新的动作方法名称为 ChangePass，它有两个 string 类型的参数。但之前已经使用 Route 属性将具有相同 URL 模式的动作和 Create 动作方法关联了起来：一个静态的前缀 /Users/Add，后跟两个片段变量。为了区分这两个动作，我们对 Create 方法中的 Route 属性运用了约束，如下所示：

```csharp
...
[Route("Users/Add/{user}/{id:int}")]
...
```

片段变量名 id 后跟着一个冒号 (:)，然后是 int。这是告诉路由系统，id 片段变量值是一个有效的 int 值的请求，只能以 Create 动作方法为目标。int 约束相当于 IntRouteConstraint 约束类

组合约束 可以将多个约束运用到一个片段，以便进一步限制路由将要匹配的值的范围

```csharp
...
[Route("Users/Add/{user}/{password:alpha:length(6)}")]
public string ChangePass(string user, string password)
{
    return string.Format("ChangePass Method - User: {0}, Pass: {1}",
    user, password);
}
...
```

多个约束使用相同的格式链接在一起形成一个单一的约束：一个冒号之后跟着约束的名称，如果需要可以在括号中给出值。此例中属性创建的路由将只匹配正好有 6 个字母的字符串

注意： 运用约束时要特别小心。Route 属性定义的路由和定义在 RouteConfig.cs 文件中的其他路由以相同的方式工作。如果 URL 不能匹配动作方法，404 这个错误将被发送到浏览器。通常会定义回退路由来匹配 URL 中包含的无关值

使用 Route Prefix 可以使用 RoutePrefix 属性定义一个将被运用到控制器中所有路由的普通前缀，当很多动作方法都使用同样的根 URL 为目标时，这点特别有用

```csharp
using System.Web.Mvc;

namespace UrlsAndRoutes.Controllers
{
    [RoutePrefix("Users")]
    public class CustomerController : Controller
    {
        [Route("~/Test")]
        public ActionResult Index()
        {
            ViewBag.Controller = "Customer";
            ViewBag.Action = "Index";
            return View("ActionName");
        }
        [Route("Add/{user}/{id:int}")]
        public string Create(string user, int id)
        {
            return string.Format("Create Method - User: {0}, ID: {1}", user, id);
        }
        [Route("Add/{user}/{password}")]
        public string ChangePass(string user, string password)
        {
            return string.Format("ChangePass Method - User: {0}, Pass: {1}",
            user, password);
        }
        public ActionResult List()
        {
            ViewBag.Controller = "Customer";
            ViewBag.Action = "List";
            return View("ActionName");
        }
    }
}
```

这里使用 RoutePrefix 属性指明动作方法的路由应该以 Users 为前缀。使用定义的前缀，我们可以更新 Create 和 ChangePass 动作方法的 Route 属性以去除前缀。当路由创建时，MVC 框架会自动组合前缀和 URL 模式

注意： 这里也修改了运用到 Index 动作方法的 Route 属性的 URL 模式

```csharp
...
[Route("~/Test")]
...
```

以~/ 为前缀的 URL 告诉 MVC 框架，我们不想要运用到 Index 方法的 RoutePrefix 属性，这意味着它仍然可以通过 /Test 来访问

## 第 16 章 高级路由特性

## 准备示例项目

简化路由

添加优化包 本章最后将描述 **区域** 特性，这需要在项目中安装一个新的软件包：

```csharp
Install-Package Microsoft.AspNet.Web.Optimization -version 1.1.0 -projectname UrlsAndRoutes
```

该软件包包含优化项目中 JavaScript 和 CSS 文件的功能，本章不直接使用这个特性，但区域特性从属于它

更新单元测试项目 为测试项目添加对 System.Web.Mvc 命名空间的引用，可以通过在单元测试项目中安装 MVC NuGet 包来实现：

```csharp
Install-Package Microsoft.Aspnet.Mvc -version 5.0.0 -projectname UrlsAndRoutes.Tests
```

也需要通过添加 MVC 软件包，以使用一些辅助器方法来生成输出 URL。在最后一章就不需要这样做，因为在 System.Web 和 System.Web.Routing 命名空间中支持处理输入 URL

## 在视图中生成输出 URL

用路由系统生成输出 URL 在一个视图中生成输出 URL 最简单的办法是，在视图中调用 Html.ActionLink 辅助器方法

```csharp
...
<div>
  @Html.ActionLink("This is an outgoing URL", "CustomVariable")
</div>
...
```

传给 ActionLink 方法的参数是，连接文本和该链接的目标动作方法名称 ActionLink 方法生成的 HTML 是基于当前路由配置的。例如，假设该视图是通过对 Home 控制器的请求来渲染的，将会生成这样的 HTML：

```html
<a href="/Home/CustomVariable">This is an outgoing URL</a>
```

这种办法的好处是，它能够自动对路由配置的更改进行响应

```csharp
...
public static void RegisterRoutes(RouteCollection routes)
{
    routes.MapMvcAttributeRoutes();

    routes.MapRoute("NewRoute", "App/Do{action}",
        new { controller = "Home" });

    routes.MapRoute("MyRoute", "{controller}/{action}/{id}",
        new
        {
            controller = "Home",
            action = "Index",
            id = UrlParameter.Optional
        });
}
...
```

此新路由修改了请求 Home 控制器的 URL 方案。如果启动应用程序，将看到此项修改已经在 ActionLink 辅助器方法所生成的 HTML 中得到了反映

```html
<a href="/App/DoCustomVariable">This is an outgoing URL</a>
```

理解出站 URL 的路由配置 由上可见，改变定义 URL 方案的路由，会改变输出 URL 的生成方式 应用程序通常会定义几条路由，路由系统是按照路由被添加的顺序来处理路由的，路由会被添加到传递给 RegisterRoutes 方法的 RouteCollection 对象中。每一条路由都会被检测，以考查它是否是一个匹配，这需要满足以下三个条件：

* URL 模式中定义的每一个片段变量都必须有一个可用的值。为了找到每个片段变量的值，路由系统首先查看已经提供的值 (采用匿名类型的属性)(这是一条路由中通过匿名类型为一些片段变量提供的值)，然后查看当前请求的变量值 (这是请求的 URL 中为片段变量提供的值)，最后查看该路由中定义的默认值
* 在给片段变量提供的值中，应当没有违背这条路由所定义的 **只默认变量 (Default-Only Variables)** 的值。只默认变量是，为其提供了默认值，但未在 URL 模式中出现的变量。例如，以下定义中的 myVar 就是一个默认变量：

```csharp
...
routes.MapRoute("MyRoute", "{controller}/{action}",
    new { myVar = "true" });
...
```

为了匹配这条路由，必须小心不要给 myVar 提供值，或者要确保所提供的值与这个默认值是匹配的

* 所有片段变量的值必须均满足路由约束

要十分清楚地意识到：路由系统不会试图查找最佳匹配的路由。它只找出 **最先** 匹配的路由，然后用这条路由来生成 URL，任何后续的路由都会被忽略。因此，你应该首先定义最具体的路由。重要的是，对出站 URL 的生成情况进行测试。如果视图生成一个无法找到匹配路由的 URL，只会得到一个空的 href 属性的链接：

```html
<a href="">About this application</a>
```

满足这些条件的第一个 Route 对象将产生一个非空的 URL，并终止 URL 生成过程。为各个片段参数所选择的参数值将在其中被替换，并忽略尾部的默认值序列。如果明确地提供了一些参数，但它们与片段参数或默认参数不符，那么该方法将把这些参数以 "键 / 值" 对的查询字符串形式进行追加

以其他控制器为目标 ActionLink 方法的默认版本假设，输出 URL 的目标是引发渲染该视图的同一个控制器中的动作方法。为了创建一个以不同控制器为目标的输出 URL，可以使用一个重载版本，它允许你指定控制器名称

```csharp
...
<div>
    @Html.ActionLink("This targets another controller", "Index", "Admin")
</div>
...
```

注意： 路由系统在生成输出 URL 时，对应用程序的了解并不比处理输入请求时多。这意味着，路由系统不会对动作方法和控制器的值进行检验，因此你必须小心，不要指定不存在的目标

渲染该视图时，将看到生成了以下 HTML：

```html
<a href="/Admin">This targets another controller</a>
```

这一以 Admin 控制器上 Index 动作方法为目标的 URL 的请求被 ActionLink 方法表示成 /Admin。路由系统相当聪明，它知道应用程序中定义的路由会使用默认的 Index 动作方法，允许省略不必要的片段

在决定如何以给定动作方法为目标时，路由系统包含使用 Route 属性已经定义的路由

```csharp
...
<div>
    @Html.ActionLink("This targets another controller", "Index", "Customer")
</div>
...
```

生成的链接如下：

```html
<a href="/Test">This targets another controller</a>
```

这是因为 Customer 控制器中的 Index 动作方法定义了 Route 属性

```csharp
...
[Route("~/Test")]
public ActionResult Index()
{
    ViewBag.Controller = "Customer";
    ViewBag.Action = "Index";
    return View("ActionName");
}
...
```

传递额外的值 可以用一个匿名类型为一些片段变量传递值，在这个匿名类型中以其属性表示片段

```csharp
...
<div>
    @Html.ActionLink("This is an outgoing URL", "CustomVariable", new { id = "Hello" })
</div>
...
```

在这个例子中，为 id 片段变量提供了一个值，如果使用以下路由：

```csharp
...
public static void RegisterRoutes(RouteCollection routes)
{
    routes.MapMvcAttributeRoutes();

    routes.MapRoute("NewRoute", "App/Do{action}",
        new { controller = "Home" });

    routes.MapRoute("MyRoute", "{controller}/{action}/{id}",
        new
        {
            controller = "Home",
            action = "Index",
            id = UrlParameter.Optional
        });
}
...
```

那么在渲染视图时，便会得到以下 HTML：

```csharp
<a href="/App/DoCustomVariable?id=Hello">This is an outgoing URL</a>
```

注意，所提供的值已经被添加为查询字符串的一部分，融入到路由所描述的 URL 模式中。这是因为在该路由中没有与 id 相对于的片段变量

如果修改路由，以使得路由恰好使用了 id 片段

```csharp
...
public static void RegisterRoutes(RouteCollection routes)
{
    routes.MapMvcAttributeRoutes();

    routes.MapRoute("MyRoute", "{controller}/{action}/{id}",
        new
        {
            controller = "Home",
            action = "Index",
            id = UrlParameter.Optional
        });
}
...
```

如果再次启动应用程序，调用 ActionLink 辅助器方法，会产生如下的 HTML 元素：

```html
<a href="/Home/CustomVariable/Hello">This is an outgoing URL</a>
```

这次，赋值给 id 属性的值被作为 URL 片段包括进来了，与应用程序配置中的活动路由保持一致

理解片段变量重用 在对出站 URL 进行路由匹配的方式进行描述时，曾经解释过，在为一条路由 URL 模式中的每个片段变量查找值的过程中，路由系统将考查当前请求的值。这种行为往往让人感到困惑，并可能导致很多调试 假设应用程序只有一条路由，如下所示：

```csharp
...
routes.MapRoute("MyRoute", "{controller}/{action}/{color}/{page}");
...
```

现在，假设一个用户的当前 URL 为 /Catalog/List/Purple/123，并渲染一个如下所示的链接：

```csharp
...
@Html.ActionLink("Click me", "List", "Catalog", new {page=789}, null)
...
```

你可能会期望路由系统不要匹配这条路由，因为这里并未提供 color 片段变量的值，也未给 color 片段定义默认值，但路由系统将会根据已经定义的这条路由进行匹配，生成以下 HTML：

```html
<a href="/Catalog/List/Purple/789">Click me</a>
```

路由系统会渴望根据一条路由形成匹配，它将重用输入 URL 的片段变量值。此时由于假想用户处于这条 URL，color 变量最终的值为 "Purple" 这不是一种可以最终凭借的行为。路由系统将运用这一技术作为其路由常规评估的一部分，即使后续可能有不需要重用当前请求的值就能匹配的路由 (即使后续有更恰当的路由，也不会被用到)。路由系统将只对某些片段变量使用重用值，这些片段变量在 URL 模式中的出现早于提供给 HTML.ActionLink 方法的参数。假设创建一个这样的链接：

```csharp
...
@Html.ActionLink("Click me", "List", "Catalog", new {color="Aqua"}, null)
...
```

这里为 color 提供了一个值，但未对 page 提供任何值。由于在这个 URL 模式中，color 的出现早于 page，因此路由系统不会重用输入 URL 的值，于是这条路由将不匹配 对待这种行为最好的办法是阻止它发生。强烈建议不要依赖于这种行为，并建议为 URL 模式中的所有片段变量都提供值。若是依赖于这种行为，不仅会使代码难于阅读，而且会需要设想用户形成请求的顺序

指定 HTML 标签属性 以上已论述了 ActionLink 辅助器方法生成的 URL，但要记住，该方法生成的是一个完整的 HTML 锚点 `<a>` 元素。通过提供一个匿名类型，可以为元素设置标签属性，该匿名类型的属性与所需要的标签属性相对应

```csharp
...
<div>
    @Html.ActionLink("This is an outgoing URL",
         "Index", "Home", null, new
         {
             id = "myAnchorID",
             @class = "myCSSClass"
         })
</div>
...
```

这里创建了一个新的匿名类型，它具有 id 和 class 属性，并把它作为参数传递给 ActionLink 方法。这里给其余片段变量值传递了 null，表示未提供任何值

注意，以上使用了一个 @字符作为 class 属性的前缀。这是一条 C# 语言特性，它让我们能够用保留关键字作为 class 成员的名字

当对 ActionLink 的调用被渲染时，可以得到以下 HTML：

```csharp
<a class="myCSSClass" href="/" id="myAnchorID">This is an outgoing URL</a>
```

生成链接中的全限定 URL 到目前为止，生成的链接都含有相对 URL，但也可以使用 ActionLink 辅助器方法来生成全限定 URL

```csharp
...
<div>
    @Html.ActionLink("This is an outgoing URL", "Index", "Home",
     "https", "myserver.mydomain.com", " myFragmentName",
     new { id = "MyId" },
     new { id = "myAnchorID", @class = "myCSSClass" })
</div>
...
```

这是带有最多参数的 ActionLink 重载版本 它允许提供协议值 (https)、目标服务器名 (myserver.mydomain.com)、URL 片段 (myFragmentName)，以及之前看到的所有其他选项 当在视图中渲染时，会生成以下 HTML：

```html
<a class="myCSSClass"
   href="https://myserver.mydomain.com/Home/Index/MyId#myFragmentName"
   id="myAnchorID">This is an outgoing URL</a>
```

建议尽可能使用相对 URL。全限定 URL 会对应用程序的基础架构方式产生依赖

生成 URL (而不是链接) Html.ActionLink 辅助器方法生成完整的 HTML 的 `<a>` 元素，这通常是创建视图需要做的事情。然而，有些时候只需要一个 URL，不需要周围的 HTML 元素。在这种情况下，可以用 Url.Action 方法只生成 URL 而不生成 HTML 元素

```csharp
...
<div>
    This is a URL:
    @Url.Action("Index", "Home", new { id = "MyId" })
</div>
...
```

除了只生成 URL 之外，Url.Action 方法的工作方式与 Html.ActionLink 相同。这两种方法的重载版本以及它们所接受的参数都相同

在动作方法中生成输出 URL 大多数情况下会在视图中生成输出 URL，但有时也会在一个动作方法中生成输出 URL。如果只需要生成 URL，可以使用在视图中所采用的同样的辅助器方法

```csharp
...
public ViewResult MyActionMethod()
{
    string myActionUrl = Url.Action("Index", new { id = "MyID" });
    string myRouteUrl = Url.RouteUrl(new
        {
            controller = "Home",
            action = "Index"
        });
    // ... do something with URLs...
    return View();
}
...
```

对于该示例应用程序中的路由，赋给 myActionUrl 变量的将是 "/Home/Index/MyID"，而 myRouteUrl 变量将被设置为 "/"，这与在视图中调用这些辅助器所产生的结果是一致的 一个更普遍的需求是，将客户端浏览器重定向到另一个 URL。这可以借助于返回 RedirectToAction 方法的调用结果来完成

```csharp
...
public RedirectToRouteResult MyActionMethod()
{
    return RedirectToAction("Index");
}
...
```

RedirectToAction 方法的结果是一个 RedirectToRouteResult 对象，它指示 MVC 框架把一条重定向指令发布给 yigeURL，由这个 URL 调用指定的动作 如果想用一个 URL 发送一个重定向，而这个 URL 只是根据对象的属性所生成的，也可以使用 RedirectToRoute 方法，该方法也返回一个 RedirectToRouteResult 对象并于调用 RedirectToAction 方法具有相同的效果

```csharp
...
public RedirectToRouteResult MyActionMethod()
{
    return RedirectToRoute(new { controller = "Home", action = "Index", id = "MyID" });
}
...
```

根据指定路由生成 URL 在上述示例中，采用的是让路由系统去选择用来生成 URL 或链接的路由。接下来演示如何控制这一过程，并选择指定的路由 路由信息如下：

```csharp
...
public static void RegisterRoutes(RouteCollection routes)
{
    routes.MapMvcAttributeRoutes();

    routes.MapRoute("MyRoute", "{controller}/{action}");

    routes.MapRoute("MyOtherRoute", "App/{action}", new { controller = "Home" });
}
...
```

这个配置中有两条路由，MyRoute 和 MyOtherRoute。对路由命名有两个原因：

1. 作为路由目的的一种说明
2. 便于选择特定的路由，用以生成输出 URL

这里已经安排了路由顺序，使最不具体的路由首先出现在路由列表中。这意味着，如果想要生成链接，使用 ActionLink 方法，像这样：

```csharp
...
@Html.ActionLink("Click me", "Index", "Customer")
...
```

那么，输出路由将总是用 MyRoute 来生成，如下所示：

```html
<a href="/Customer/Index">Click me</a>
```

你可以使用 Html.RouteLink 方法来覆盖这种默认的路由匹配行为，这种方法需要指定一条路由，如下所示：

```csharp
...
@Html.RouteLink("Click me", "MyOtherRoute","Index", "Customer")
...
```

其结果是，由此辅助器生成的链接将如下所示：

```html
<a Length="8" href="/App/Index?Length=5">Click me</a>
```

在本例中，路由重载了这里所指定的控制器 Customer，代之以 Home 控制器作为该链接的目标 也可以对用 Route 属性定义的路由命名

```csharp
...
[Route("Add/{user}/{id:int}", Name = "AddRoute")]
public string Create(string user, int id)
{
    return string.Format("Create Method - User: {0}, ID: {1}", user, id);
}
...
```

此例添加设置 Name 属性值。在此例中，给属性创建的路由指定名称为 AddRoute，它允许我通过名称生成路由

反命名路由的情形 依赖路由名来生成输出 URL 的问题是，这样做突破了 MVC 设计模式的中心思想 —— 关注分离。当在一个视图或动作方法中生成一条链接或 URL 时，我们希望关注的是对用户进行定向的控制器和动作，而不是所使用的 URL 格式。把不同路由带到相应的视图或控制器，这其实是在创建希望避免的依赖性。我倾向于避免对路由进行命名 (把路由名参数指定为 null 即可)，对于各条路由想要做什么，用代码注释来提醒自己

## 定制路由系统

创建自定义的 RouteBase 实现 如果不喜欢标准的 Route 对象对 URL 进行匹配的方式，或是希望实现一些不同寻常的事情，还可以通过 RouteBase 派生一个替代类。这让你能够对如何匹配 URL，如何提取参数，以及如何生成输出 URL 进行控制，要通过 RouteBase 派生一个类，需要实现以下两个方法：

* GetRouteData (HttpContextBase httpContext)：这是 **入站 URL 进行匹配** 的工作机制。框架依次对 RouteTable.Routes 的每个条目调用这个方法，直到其中之一返回一个非空值
* GetVirtualPath (RequestContext requestContext, RouteValueDictionary values)：这是 **出站 URL 生成** 的工作机制。框架依次对 RouteTable.Routes 的每个条目调用这个方法，直到其中之一返回一个非空值

为了演示这种自定义行为，这里创建一个 RouteBase 类，用它来处理遗留 URL 请求 假设把一个现行的应用程序迁移到 MVC 框架，但有些用户已经收藏了 MVC 之前的一些 URL，或是已经把这些 URL 硬编码到了脚本之中。我们希望仍然支持这些旧式 URL。当然，也可以用规则的路由系统来处理它

首先创建一个名为 LegacyController 的控制器，用来接收遗留请求

```csharp
using System.Web.Mvc;

namespace UrlsAndRoutes.Controllers
{
    public class LegacyController : Controller
    {
        public ActionResult GetLegacyURL(string legacyURL)
        {
            return View((object)legacyURL);
        }
    }
}
```

这个简单的控制器中 GetLegacyURL 动作方法接收其参数，并把它作为一个视图模型传递给视图 如果要在一个实际的项目中实现这个控制器，应该是用这个方法来接收被请求的文件，但这里只打算在视图中显示这个 URL

注意： 在以上示例中，已经将 GetLegacyURL 动作方法中的 View 参数转换成 object。View 方法的一个重载版本是用 string 来指定要渲染的视图名称，如果不进行这种转换，C# 编译器会认为这里需要的便是这个重载版本。为了避免这种情况发生，这里把它转换成了 object，以使这里调用的是传递视图模型并使用默认视图的那个重载版本。也可以使用另一个重载版本来解决这个一问题，该版本既有视图名称，也有模型参数，但在能够解决问题的情况下，最好不要在动作方法与视图之间形成明确的关联

对输入 URL 进行路由

```csharp
using System;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace UrlsAndRoutes.Infrastructure
{
    public class LegacyRoute : RouteBase
    {
        private string[] urls;

        public LegacyRoute(params string[] targetUrls)
        {
            urls = targetUrls;
        }

        public override RouteData GetRouteData(HttpContextBase httpContext)
        {
            RouteData result = null;
            string requestedURL = httpContext.Request.AppRelativeCurrentExecutionFilePath;
            if (urls.Contains(requestedURL, StringComparer.OrdinalIgnoreCase))
            {
                result = new RouteData(this, new MvcRouteHandler());
                result.Values.Add("controller", "Legacy");
                result.Values.Add("action", "GetLegacyURL");
                result.Values.Add("legacyURL", requestedURL);
            }
            return result;
        }

        public override VirtualPathData GetVirtualPath(RequestContext requestContext, RouteValueDictionary values)
        {
            return null;
        }
    }
}
```

该类的构造器以一个字符串数组为参数，它表示这条路由类将要支持的各个 URL，将在稍后注册路由时指定它们。这里需要说明的是 GetRouteData 方法，它是路由系统所要调用的方法，以考察 LegacyRoute 类是否能够匹配一个输入 URL 如果类不能匹配该请求，那么只要返回 null，路由系统将移动到路由表中的下一条路由，并重复这一过程。如果类 **能够** 匹配这个请求，则需要返回一个 RouteData 类的实例，它含有 controller 和 action 变量的值，以及其它想要传递给动作方法的东西 当创建 RouteData 对象时，想要向其中传递一个处理程序，由它处理已经生成的值。此处打算使用标准的 MvcRouteHandler 类，这是对 controller 和 action 进行赋值的一个类：

```csharp
...
result = new RouteData(this, new MvcRouteHandler());
...
```

绝大多数 MVC 应用程序都需要 MvcRouteHandler 类，因为它把路由系统与 MVC 应用程序的控制器 / 动作模型连接起来了。但也可以实现 MvcRouteHandler 的替换程序

在这个自定义 RouteBase 实现中，选择对传递给构造器的任何 URL 进行路由。当得到一个 URL 时，把用于控制器和动作方法的硬编码值添加到 RouteValues 对象，同时也把所请求的 URL 作为 legacyURL 属性进行传递。注意，该属性的名称与动作方法的参数名是匹配的，以确保这里生成的值会通过该参数被传递给动作方法 最后一步是注册一条新路由，它使用这个 RouteBase 派生类

```csharp
using System.Web.Mvc;
using System.Web.Routing;
using UrlsAndRoutes.Infrastructure;

namespace UrlsAndRoutes
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.MapMvcAttributeRoutes();
            routes.Add(new LegacyRoute(
                "~/articles/Windows_3.1_Overview.html",
                "~/old/.NET_1.0_Class_Library"));

            routes.MapRoute("MyRoute", "{controller}/{action}");
            routes.MapRoute("MyOtherRoute", "App/{action}", new { controller = "Home" });
        }
    }
}
```

这里使用了 LegacyRoute 类的新实例，并在其中传递了让它进行路由的 URL，然后用 Add 方法把这个对象添加到 RouteCollection。现在，当启动应用程序，并请求定义的一个遗留 URL 时，该请求将由 LegacyRoute 类进行路由并被定向到 Legacy 控制器

生成输出 URL 为了支持输出 URL 的生成，需要在 LegacyRoute 类中实现 GetVirtualPath 方法。同样，如果该类不能生成特定的 URL，将返回 null 以通知路由系统。否则，将返回 VirtualPathData 类的一个实例

```csharp
...
public override VirtualPathData GetVirtualPath(RequestContext requestContext, RouteValueDictionary values)
{
  VirtualPathData result = null;
  if (values.ContainsKey("legacyURL") && urls.Contains((string)values["legacyURL"], StringComparer.OrdinalIgnoreCase))
  {
    result = new VirtualPathData(this,
    new UrlHelper(requestContext)
    .Content((string)values["legacyURL"]).Substring(1));
  }
  return result;
}
...
```

虽然一直在使用匿名类型来传递片段变量和有关其他细节，但路由系统已经把这些转换成了 RouteValueDictionary 对象，以便它们能被 RouteBase 的实现处理

利用自定义路由生成输出 URL

```html
...
<div>
    This is a URL:
    @Html.ActionLink("Click me", "GetLegacyURL",
    new { legacyURL = "~/articles/Windows_3.1_Overview.html" })
</div>
...
```

在渲染视图时，如果你请求 /Home/Index 这样的路由，ActionLink 辅助器将生成以下 HTML

```html
<a href="/articles/Windows_3.1_Overview.html">Click me</a>
```

用 legacyURL 属性创建的匿名类型被转换到了含有同名键的 RouteValueDictionary 类之中。在这个例子中，如果有一个名为 "legacyURL" 的键，并且如果它的值是一个传递给构造器的 URL，我们便可以确定，能够为出站 URL 处理该请求。也可以做的更具体一些，进而对 controller 和 action 的值进行检查，但对于一个简单的例子来说，这已经足够了 如果获得了一个匹配，便创建 VirtualPathData 的一个新实例，在其中传递一个对当前对象的引用和出站 URL。这里已经使用了 UrlHelper 类的 Content 方法，以便把应用程序的相对 URL 转换成可以传递给浏览器的 URL。路由系统预先已经将字符 "/" 附加到了这个 URL 上，因此，必须小心地从生成的 URL 上删掉这个前导字符

创建自定义路由处理程序 之前创建的路由已经依赖于这个 MvcRouteHandler 了，因为 MvcRouteHandler 把路由系统连接到了 MVC 框架。即使如此，通过实现 IRouteHandler 接口，路由系统仍然允许我们定义自己的路由处理程序

```csharp
using System.Web;
using System.Web.Routing;

namespace UrlsAndRoutes.Infrastructure
{
    public class CustomRouteHandler : IRouteHandler
    {
        public IHttpHandler GetHttpHandler(RequestContext requestContext)
        {
            return new CustomHttpHandler();
        }
    }
    public class CustomHttpHandler : IHttpHandler
    {
        public bool IsReusable
        {
            get { return false; }
        }
        public void ProcessRequest(HttpContext context)
        {
            context.Response.Write("Hello");
        }
    }
}
```

IRouteHandler 接口的目的是提供一种手段，以生成 IHttpHandler 接口的实现，由它负责对请求进行处理。在这些接口的 MVC 实现中，要负责完成以下功能：查找控制器、调用动作方法、渲染视图，并将结果写入到响应中去。本例中的实现有些简单，它只是把单词 "Hello" 写到客户端 (不是该单词的 HTML 文档，而只是文本)

在定义一条路由时，可以在 RouteConfig.cs 文件中注册这个自定义的处理程序

```csharp
...
public static void RegisterRoutes(RouteCollection routes)
{
    routes.MapMvcAttributeRoutes();

    routes.Add(new Route("SayHello", new CustomRouteHandler()));

    routes.Add(new LegacyRoute(
        "~/articles/Windows_3.1_Overview.html",
        "~/old/.NET_1.0_Class_Library"));

    routes.MapRoute("MyRoute", "{controller}/{action}");
    routes.MapRoute("MyOtherRoute", "App/{action}", new { controller = "Home" });
}
...
```

当请求 /SayHello 这个 URL 时，会用这个处理程序对该请求进行处理 实现自定义路由处理，意味着要负责常规功能的处理，如控制器及动作的解析。自定义路由处理给了开发人员很大的自由，你可以接收 MVC 框架的某些部分而忽略其他部分，甚至实现一个全新的结构模式

## 使用区域

MVC 框架支持将 Web 应用程序组织成一些 **区域 (Area)** ，每个区域代表应用程序的一个功能段，如管理、结算、客户支持等。这对大型项目是很有用的，如果对所有控制器、视图和模型只使用一组文件夹，可能难于管理 每个 MVC 区域有自己的文件夹结构，让你能够保持事物分离。这会使项目元素与应用程序的每个功能区的相关性更加明显，有助于多个开发人员在同一项目上工作而不会引起相互冲突。区域通过路由系统得到了广泛的支持，这就是在论述 URL 和路由之后，要涉及这一特性的原因

创建一个区域 解决方案资源管理器 → MVC 项目 → 添加 → 区域 之后 Visual Studio 将在项目中添加一个 "Areas" 文件夹，其中包含一个名为刚才创建的区域的子文件夹，表示刚刚创建的区域。如果想要创建其他区域，还可以在这里继续创建文件夹 在 /Areas/Admin 文件夹中，可以看到这是一个小型的 MVC 项目，有名为 "Controllers"、"Models" 以及 "Views" 的文件夹。前两个文件夹是空的，但 "Views" 文件夹含有一个 "Shared" 文件夹 (和一个配置视图引擎的 Web.confing 文件) Areas 文件夹中也含有一个名称为 "AdminAreaRegistration.cs" 的文件，它定义了 AdminAreaRegistration 类

```csharp
using System.Web.Mvc;

namespace UrlsAndRoutes.Areas.Admin
{
    public class AdminAreaRegistration : AreaRegistration
    {
        public override string AreaName
        {
            get
            {
                return "Admin";
            }
        }
        public override void RegisterArea(AreaRegistrationContext context)
        {
            context.MapRoute(
            "Admin_default",
            "Admin/{controller}/{action}/{id}",
            new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
```

这个类有趣的部分是 RegisterArea 方法。从中可以看出，该方法去注册了一个 URL 模式为 Admin/{controller}/{action}/{id} 的路由。我们还可以在该方法中定义该区域专用的其他路由

注意： 如果给路由赋名，必须确保这些名称在整个应用程序而不仅仅在区域中是唯一的

我们不需要采取任何操作来确保该注册方法会被调用，Visual Studio 在 Global.asax 文件中添加了一条语句，该语句负责在创建项目时建立区域

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace UrlsAndRoutes
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            RouteConfig.RegisterRoutes(RouteTable.Routes);
        }
    }
}
```

对静态方法 AreaRegistration.RegisterAllAreas 的调用，会导致 MVC 框架对应用程序的所有类进行遍历检查，找出派生于 AreaRegistration 的所有类，并调用这些类上的 RegisterAreas 方法

注意： 不要修改 Application_Start 方法中于路由相关的语句顺序。如果在 AreaRegistration.RegisterAllAreas 之前调用 RegisterRoutes，那么会在区域路由之前定义路由。由于路由是按顺序评估的，这意味着对区域控制器的请求可能会用不正确的路由进行匹配

传递给 RegisterAreas 方法的 AreaRegistrationContext 类暴露了一组 MapRoute 方法，区域可以用这些方法来注册路由，这与主应用程序在 Global.asax 的 RegisterRoutes 方法中注册路由的方式是相同的

注：AreaRegistrationContext 类中的 MapRoute 方法会自动地把你注册的路由限制到包含该区域控制器的命名空间。这意味着，当某区域创建控制器时，必须把它放在其默认的命名空间中，否则路由系统将无法找到它

填充区域 可以像前面的示例那样，在一个区域中创建控制器、视图以及模型等 一个区域的工作方式与在一个 MVC 项目主区中工作是相当类似的

解析不明确的控制器问题 区域可能不像它们所展示的那样是自包含的。如果导航到 /Home/Index 将会发生错误

当一个区域被注册时，所定义的任何路由都被限制到于这个区域相关联的命名空间中。这是能够请求 /Admin/Home/Index 并得到 UrlsAndRuutes.Areas.Admin.Controllers 命名空间中 HomeController 类的原因 然而，在 RouteConfig.cs 的 RegisterRoutes 方法中定义的路由却不受类似的限制。作为提醒，下面列出了示例应用程序此刻的路由配置

```csharp
...
public static void RegisterRoutes(RouteCollection routes)
{
    routes.MapMvcAttributeRoutes();

    routes.Add(new Route("SayHello", new CustomRouteHandler()));

    routes.Add(new LegacyRoute(
    "~/articles/Windows_3.1_Overview.html",
    "~/old/.NET_1.0_Class_Library"));

    routes.MapRoute("MyRoute", "{controller}/{action}");
    routes.MapRoute("MyOtherRoute", "App/{action}", new { controller = "Home" });
}
...
```

名称为 "MyRoute" 的路由把来自浏览器的输入 URL 转换为 Home 控制器上的 Index 动作。这时，我们会收到一个错误消息，因为没有为这条路由设置命名空间约束，因此 MVC 框架会看到两个 HomeController 类。为了解决这一问题，需要在所有可能导致冲突的路由中，将主控制器命名空间列为优先

```csharp
...
public static void RegisterRoutes(RouteCollection routes)
{
    routes.MapMvcAttributeRoutes();

    routes.Add(new Route("SayHello", new CustomRouteHandler()));

    routes.Add(new LegacyRoute(
    "~/articles/Windows_3.1_Overview.html",
    "~/old/.NET_1.0_Class_Library"));

    routes.MapRoute("MyRoute", "{controller}/{action}", null,
        new[] { "UrlsAndRoutes.Controllers" });
    routes.MapRoute("MyOtherRoute", "App/{action}", new { controller = "Home" },
        new[] { "UrlsAndRoutes.Controllers" });
}
...
```

这一修订确保了在请求解析过程中，主项目中的控制器优先。当然，也可以对某个区域中的控制器实行优先

使用属性创建区域 也可以通过对控制器运用 RouteArea 属性创建区域

```csharp
using System.Web.Mvc;

namespace UrlsAndRoutes.Controllers
{
    [RouteArea("Services")]
    [RoutePrefix("Users")]
    public class CustomerController : Controller
    {
        [Route("~/Test")]
        public ActionResult Index()
        {
            ViewBag.Controller = "Customer";
            ViewBag.Action = "Index";
            return View("ActionName");
        }

        [Route("Add/{user}/{id:int}", Name = "AddRoute")]
        public string Create(string user, int id)
        {
            return string.Format("Create Method - User: {0}, ID: {1}", user, id);
        }

        [Route("Add/{user}/{password}")]
        public string ChangePass(string user, string password)
        {
            return string.Format("ChangePass Method - User: {0}, Pass: {1}",
            user, password);
        }

        public ActionResult List()
        {
            ViewBag.Controller = "Customer";
            ViewBag.Action = "List";
            return View("ActionName");
        }
    }
}
```

RouteArea 属性将 Route 属性定义的所有路由都移到了特定的区域。和 RoutePrefix 属性组合的该属性的效果意味着访问 Create 动作方法，会创建如下的 URL

```txt
http://localhost:34855/Services/Users/Add/Adam/100
```

RouteArea 属性不会影响由 Route 属性定义但以~/ 开头的路由。这意味着，我们可以用如下 URL 继续访问 Index 方法

```txt
http://localhost:34855/Test/
```

RouteArea 属性对未定义 Route 属性的动作方法没有影响，这意味着对 List 动作方法的路由是由 RouteConfig.cs 文件确定的而不是基于属性的路由

生成对区域动作的链接 对于用户所处的同一区域中的动作，不需要采取特殊的步骤创建指向这些动作的链接。MVC 框架会检测当前请求所涉及的特定区域，并确保出站 URL 生成将直在该区域定义的路由中查找一个匹配。例如在 Admin 区域的视图中添加对 Html.ActionLink 辅助器的调用

```html
...
@Html.ActionLink("Click me", "About")
...
```

将会生成以下 HTML

```html
<a href="/Admin/Home/About">Click me</a>
```

为了对 **不同** 区域中的动作或根本无区域的动作 (项目主区的动作) 创建一条链接，必须创建一个名为 **area** 的变量，并用它指定区域名

```html
...
@Html.ActionLink("Click me to go to another area", "Index", new { area = "Support" })
...
```

正是由于这一原因，area 被保留作为片段变量名。上述调用所生成的 HTML 如下 (假设创建了一个名为 "Support" 的区域，它有标准的路由定义)

```html
<a href="/Support/Home">Click me to go to another area</a>
```

如果想链接到顶级控制器 (/Controllers 文件夹中的一个控制器) 上的一个动作，那么应该把区域指定为空字符串

```csharp
...
@Html.ActionLink("Click me to go to another area", "Index", new { area = "" })
...
```

## 对磁盘文件进行路由请求

MVC 应用程序的所有请求并不都是针对控制器和动作的。大多数应用程序需要一种方法来服务如图像、静态 HTML 文件、JavaScript 库等内容 路由系统对服务这些内容提供完整的支持 默认情况下在计算应用程序的路由之前，路由系统会检查 URL 是否匹配一个磁盘文件 如果被请求的 URL 和磁盘文件之间匹配，那么磁盘文件将被服务，应用程序中定义的路由不再使用。这个行为是可以逆转的，通过设置 RouteCollection 的 RouteExistingFiles 属性为 True，在检查磁盘文件之前先计算路由

```csharp
...
public static void RegisterRoutes(RouteCollection routes)
{
    routes.RouteExistingFiles = true;

    routes.MapMvcAttributeRoutes();

    routes.Add(new Route("SayHello", new CustomRouteHandler()));
    routes.Add(new LegacyRoute(
    "~/articles/Windows_3.1_Overview.html",
    "~/old/.NET_1.0_Class_Library"));

    routes.MapRoute("MyRoute", "{controller}/{action}", null,
        new[] { "UrlsAndRoutes.Controllers" });
    routes.MapRoute("MyOtherRoute", "App/{action}", new { controller = "Home" },
        new[] { "UrlsAndRoutes.Controllers" });
}
...
```

约定将这条语句放在 RegisterRoutes 方法的顶部，但是在定义了路由之后设置它也同样有效

配置应用程序服务器 Visual Studio 使用 IIS 作为 MVC 应用程序的服务器。不仅要在 RegisterRoutes 方法中将 RouteExistingFiles 属性设置为 true，也要告诉 IIS 在对磁盘文件的请求到达 MVC 路由系统之前，不要对它们进行拦截

首先，启动 IIS。最简单的方法是从 Visual Studio 启动 MVC 应用程序，这将导致 IIS 图标出现在任务栏上。右击图标，从弹出的菜单中选择 "显示所有应用程序"。在 "站点名称" 这列选择对应的 MVC 应用程序，以显示 IIS 配置信息 单击窗口底部的 "配置" 链接，在 Visual Studio 中打开 IIS 的配置文件。找到以下条目，并将 preCondition 属性设置为空字符串

```xml
...
<add name="UrlRoutingModule-4.0" type="System.Web.Routing.UrlRoutingModule" preCondition="" />
...
```

现在重新启动应用程序，导航到 /Content/StaticContent.html 你看不到文件内容，而是的到错误消息。这是因为对 HTML 文件的请求被传递给 MVC 路由系统，匹配 URL 的路由直接请求不存在的 Content 控制器

为磁盘文件定义路由 一旦属性设置为 true，就可以定义匹配 URL 的路由，这些路由与磁盘文件相关

```csharp
...
public static void RegisterRoutes(RouteCollection routes)
{
    routes.RouteExistingFiles = true;

    routes.MapMvcAttributeRoutes();

    routes.MapRoute("DiskFile", "Content/StaticContent.html",
    new
    {
        controller = "Customer",
        action = "List",
    });

    routes.Add(new Route("SayHello", new CustomRouteHandler()));
    routes.Add(new LegacyRoute(
    "~/articles/Windows_3.1_Overview.html",
    "~/old/.NET_1.0_Class_Library"));

    routes.MapRoute("MyRoute", "{controller}/{action}", null,
        new[] { "UrlsAndRoutes.Controllers" });
    routes.MapRoute("MyOtherRoute", "App/{action}", new { controller = "Home" },
        new[] { "UrlsAndRoutes.Controllers" });
}
...
```

这条路由映射对 Content/StaticContent.html 的请求，该 URL 对应 Customer 控制器中的 List 动作。启动应用程序并再次导航到 /Content/StaticContent.html 就可以看到效果

对磁盘文件的路由请求需要仔细考虑，不仅仅是因为 URL 模式将像其他 URL 一样匹配这些 URL。例如，对 /Content/StaticContent.html 的请求将由类似于 {controller}/{action} 的 URL 模式匹配 除非你特别小心，你可以终止一些特别奇怪的结果并降低性能。否则，不到万不得已不要启用这个选项

## 绕过路由系统

设置 RouteExistingFiles 属性，使路由系统更具包容性。请求通常会绕过路由系统，重新定义路由系统定义的路由 与这一特性相对的是使路由系统具有较少的包容性，并阻止 URL 重新计算路由。这点可以通过使用 RouteCollection 类的 IgnoreRoute 方法来实现

```csharp
...
public static void RegisterRoutes(RouteCollection routes)
{
    routes.RouteExistingFiles = true;

    routes.MapMvcAttributeRoutes();

    routes.IgnoreRoute("Content/{filename}.html");

    routes.Add(new Route("SayHello", new CustomRouteHandler()));

    routes.Add(new LegacyRoute(
        "~/articles/Windows_3.1_Overview.html",
        "~/old/.NET_1.0_Class_Library"));

    routes.MapRoute("MyRoute", "{controller}/{action}", null,
        new[] { "UrlsAndRoutes.Controllers" });
    routes.MapRoute("MyOtherRoute", "App/{action}", new { controller = "Home" },
        new[] { "UrlsAndRoutes.Controllers" });
}
...
```

你可以使用像 {filename} 这样的片段变量来匹配一系列的 URL。在这种情况下，URL 模式将匹配任何两片段 URL，第一个片段是 Content，第二个片段具有.html 扩展 IgnoreRoute 方法在 RouteCollection 中创建了一个条目，在 RouteCollection 中路由处理程序是 StopRoutingHandler 类的一个实例，而不是 MvcRouteHandler 类。路由系统被硬编码以识别这个处理程序。如果传递给 IgnoreRoute 方法的 URL 模式匹配，那么后面的路由将不会被计算，就像匹配一个普通的路由一样。因此调用 IgnoreRoute 方法的位置是很明显的 如果启动应用程序，并再次导航到 /Content/StaticContent.html，你将看到 HTML 文件的内容，因为在其他路由可能匹配 URI 之前，StopRoutingHandler 对象已经被处理了

## URL 方案最佳做法

介绍了这一切之后，你可能还会疑惑，在哪里开始设计自己的 URL 方案？你可以只接收 Visual Studio 生成的默认方案，但对你的方案做一些思考是由好处的。良好的路由设计会改善应用程序的可用性、兼容性，以及搜索引擎排名

使 URL 整洁和人性化 以下是生成友好 URL 的一些简单的纲要：

* 设计 URL 来描述它们的内容，而不是应用程序的实现细节。使用 /Articles/AnnualReport，而不是 /Website_v2/CachedContentServer/FromCache/AnnualReport
* 尽可能采用内容标题而不是 ID 号，使用 /Articles/AnnualReport，而不是 /Articles/2392。如果必须使用一个 ID 号 (以区别具有同样标题的条目，或避免通过标题查找一个条目时，需要多余的数据库查询步骤)，那么两者都用 ((/Articles/2392/AnnualReport) 这需要多输入一些字符，但更有意义，并且会改变搜索引擎排名
* 不要对 HTML 页面使用扩展名 (例如，.aspx 或.mvc)，但对特殊文件类型要用扩展名 (如.jpg、.pdf 及.zip)。如果适当地设置了 MIME 类型，Web 浏览器不会在意文件的扩展名，但人们却希望对 PDF 文件用.pdf 扩展名
* 创建一种层次感 (例如， /Products/Menswear/Shirts/Red) 这样访问者可以猜出父目录的 URL
* 不区分大小写 (有些人可能想通过一个打印的页面来输入 URL)。ASP.NET 路由系统默认是不区分大小写的
* 避免使用符号、代码和字符序列。如果要用单词分隔符时，可以使用短横 (如，/my-great-article)。下画线是不友好的，而 URL 编码的空格是奇特的 (/my+great+article) 或令人讨厌的 (/my%20great%20article)
* 不要修改 URL，打破链接等于失去商务。当确实需要修改 URL 时，通过永久重定向 (301) 尽可能长时间地继续支持旧式的 URL 方案
* 具有一致性。在整个应用程序中采用一种 URL 格式。URL 应该简短、易于输入、可剪辑 (人性化编辑)，且持久稳定，而且它们应该形象化网站结构。

GET 和 POST：选用正确的一个 经验规则是，GET 请求应该被用于所有只读信息检索，而 POST 请求应该被用于各种修改应用程序状态的操作。用标准的术语来说，GET 请求用于安全交互 (除检索信息外无其他影响)，而 POST 请求用于不安全交互 (做出决定或修改某些东西)。这些约定是由 W3C 制定的。GET 请求是 **可设定地址** 的 —— 所有请求信息都包含在 URL 中，因此它可以设为书签并链接到这些地址 不要用 GET 请求进行修改状态的操作

# 第 17 章 控制器和动作

到达应用程序的每一个请求都是由控制器处理的。只要不偏离到属于模型和视图职责的领域，控制器可以以它认为合适的方式自由地处理请求。意即不要把事务或数据存储逻辑放到控制器中，也不要生成用户界面 在 ASP.NET MVC 框架中，控制器是含有请求处理逻辑的.NET 类。控制器的作用是封装应用程序逻辑。这意味着控制器要负责处理输入请求、执行模型上的操作，并选择渲染给用户的视图

## 准备示例项目

## 控制器介绍

使用 IController 创建控制器 在 MVC 框架中，控制器类必须实现 System.Web.Mvc 命名空间的 IController 接口

```csharp
public interface IController
{
    void Execute(RequestContext requestContext);
}
```

通过下载 MVC 框架源代码可以获得这个接口的定义，它对指出幕后是如何工作的非常有用

这是一个很简单的接口。唯一的方法 Excute 在请求以控制器类为目标时被调用。MVC 框架通过读取由路由数据生成的 controller 属性值

通过实现 IController，你可以创建控制器类，但这是一个相当低级的接口，因此你必须做大量的工作才能让事情变得有用。IController 接口很好地演示了控制器是如何操作的

```csharp
using System.Web.Mvc;
using System.Web.Routing;

namespace ControllersAndActions.Controllers
{
    public class BasicController : IController
    {
        public void Execute(RequestContext requestContext)
        {
            string controller = (string)requestContext.RouteData.Values["controller"];
            string action = (string)requestContext.RouteData.Values["action"];

            requestContext.HttpContext.Response.Write(
                string.Format("Controller: {0}, Action: {1}", controller, action));
        }
    }
}
```

IController 接口的 Execute 方法被传递给 System.Web.Routing.RequestContext 对象，它提供关于当前请求和匹配路由的信息。RequestContext 类定义了两个属性

RequestContext 类定义的属性

| 名称        | 描述                                        |
| :---------- | :------------------------------------------ |
| HttpContext | 返回一个描述当前请求的 HTTPContextBase 对象 |
| RouteData   | 返回一个描述匹配请求的路由的 RouteData 对象 |

HTTPContextBase 对象对一组描述当前请求的对象提供访问，比如大家都知道的上下文对象，RouteData 对象描述了路由

| 属性         | 说明                          |
| :----------- | :---------------------------- |
| Route        | 返回匹配路由的 RouteBase 实现 |
| RouteHandler | 返回处理路由的 IRouteHandler  |
| Values       | 返回按名称索引的片段值的集合  |

以 Base 结尾的类名 MVC 框架依赖 ASP.NET 平台来处理请求，这是有道理的，因为它是成熟的、功能丰富的，并且与 IIS 应用服务器很好地集成。一个问题是，ASP.NET 平台用来提供关于请求信息的类并不适合单元测试，而单元测试是使用 MVC 框架的一个关键好处 为了保持现有 ASP.NET Web 表单应用程序的通用性，微软公司需要引入可检验性，之所以这样叫是因为它们与后跟单词 Base 的核心 ASP.NET 平台类具有相同的名称。因此，ASP.NET 平台通过 HttpContext 对象提供了关于当前请求的上下文信息和一些关键的应用服务。Base 类的副本是 HttpContextBase，它的实例被传递给 IController 接口定义的 Execute 方法 (你会在下面的例子中看到其他的 Base 类)。原文和 Base 类定义相同的属性和方法，但 Base 类总是抽象的，这意味着它们可以很容易地用于单元测试 有时你会接收到一个原始的 ASP.NET 类实例，例如 HttpContext，但需要创建一个 MVC 友好的 Base 类，例如 HttpContextBase。你可以使用一个 Wrapper 类来实现，它与原始类加上单词 Wrapper 具有相同的名字，例如 HttpContext。包装类都派生于 Base 类，并且拥有接受原始类实例的构造器

```csharp
...
HttpContext myContext = getOriginalObjectFromSomewhere();
HttpContextBase myBase = new HttpContextWrapper(myContext);
...
```

在 System.Web 命名空间中有最原始的 Base 和 Wrapper 类，这样 ASP.NET 才能无缝地支持 MVC 框架以及旧的 Web 表单应用程序

注： 在创建自定义控制器时，问题的一部分是你不能访问像视图这样的特性。这意味着，你必须工作在一个较低级别，这也是我将上下文直接写到客户端的原因。HttpContextBase.Response 属性返回一个 HttpResponseBase 对象，该对象允许你配置和增加将被发送到客户端的响应

如果运行该应用程序，并导航到 /Basic/Index，便可以看到此控制器所生成的输出

实现 IController 接口让你能够创建一个类，MVC 框架会将其视为是一个控制器，并将请求发送给它，而且在如何处理和响应请求上没有任何限制。这是一个很好的示例，因为它向你展示了 MVC 框架的可扩展性，甚至像控制器这样的关键构建块，但用这种方式编写一个复杂的应用程序是相当困难的

创建派生于 Controller 类的控制器类 正如前面的示例所暗示的，MVC 框架是无限可定制和可扩展的。你可以实现这个 IController 接口，以创建所需要的各种请求处理和结果生成。不喜欢动作方法？不关心渲染的视图？那么，可以把事情掌握在自己的手中，并编写更好、更快且更雅致的请求处理方式。甚至可以在微软公司 MVC 框架团队提供的特性之上来进行构建，这可以通过 System.Web.Mvc.Controller 类来派生你的控制器 System.Web.Mvc.Controller 是大多数 MVC 开发人员需要熟悉的，用来对请求处理提供支持的一个类，它是前面章节的所有例子中一直在使用的类。Controller 类提供了以下三个关键特性

* 动作方法 (Action Method)：一个控制器的行为被分解成多个方法 (而不是只有一个单一的 Execute () 方法)。每个动作方法被暴露给不同的 URL，并通过从输入请求提取的参数进行调用。
* 动作结果 (Action Result)：你可以返回一个描述动作结果的对象 (例如，渲染一个视图，或重定向到一个不同的 URL 或动作方法)，然后通过该对象实现你的目的。这种指定结果和执行它们之间的分离简化了单元测试
* 过滤器 (Filter)：你可以把可重用的行为 (例如，认证) 封装成过滤器，然后通过在源代码中放置一个注解属性的办法，把这种行为标注到一个或多个控制器或动作方法上

除非在头脑中有一个非常明确的需求，否则创建控制器最好的办法是通过 Controller 类进行派生，这正是 Visual Studio 响应 "添加" → "控制器" 菜单项，并创建一个新类时，为你所做的事情

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ControllersAndActions.Controllers
{
    public class DerivedController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Hello from the DerivedController Index method";
            return View("MyView");
        }
    }
}
```

Controller 类也连接到 Razor 视图系统。上述示例返回了 View 方法的结果，在其中传递了希望渲染给客户端的视图名

作为 Controller 类的一个派生类，所要做的工作时实现动作方法、获取所需要的各种输入，以对请求进行处理，并生成一个适当的响应

## 接收请求数据

控制器经常需要访问来自于输入请求的数据，如查询字符串值、表单值，以及由路由系统根据输入 URL 解析所得到的参数。访问这些数据有三个主要途径：

* 通过一组 **上下文对象** (Context Object) 进行提取
* 作为 **参数** (Parameters) 被传递给动作方法而形成的数据
* 明确地调用框架的 **模型绑定** (Model Binding) 特性

通过上下文对象获取参数 当控制器是通过 Controller 基类派生而来的时候，便得到了一组 **便利属性** (Convenience Property)，可以用来访问与请求相关的信息。这些便利属性包括 Request、Response、RouteData、HttpContext 以及 Server。每一个属性都包含了请求不同方面的信息。这些属性称为 **便利属性** ，是因为它们每一个都从请求的 ControllerContext 实例 (可以通过 Controller.ControllerContext 属性对其进行访问) 接收了不同类型的数据

常用上下文对象

| 属性                    | 类型                     | 描述                                          |
| :---------------------- | :----------------------- | :-------------------------------------------- |
| Request.QueryString     | NameValueCollection      | 随该请求发送的 GET 变量                       |
| Request.Form            | NameValueCollection      | 随该请求发送的 POST 变量                      |
| Request.Cookies         | HttpCookieCollection     | 由浏览器随该请求发送的 Cookies                |
| Request.HttpMethod      | string                   | 用于该请求的 HTTP 方法 (动词，如 GET 或 POST) |
| Request.Headers         | NameValueCollection      | 随该请求发送的整个 HTTP 头                    |
| Request.Url             | Url                      | 所请求的 URL                                  |
| Request.UserHostAddress | string                   | 形成该请求的用户 IP 地址                      |
| RouteData.Route         | RouteBase                | 为该请求所选择的 RuteTable.Routes 条目        |
| RouteData.Values        | RouteValueCollection     | 当前的路由参数 (从 URL 或默认值提取)          |
| HttpContext.Application | HttpApplicationStateBase | 应用程序状态库                                |
| HttpContext.Cache       | Cahe                     | 应用程序缓存库                                |
| HttpContext.Items       | IDictionary              | 当前请求的状态库                              |
| HttpContext.Session     | HttpSessionStateBase     | 访问者的会话状态库                            |
| User                    | IPrincipal               | 已登录用户的认证信息                          |
| TempData                | TempDataDictionary       | 为当前用户存储的临时数据                      |

这里提到的每一个单独属性 ——Request，HttpContext 等都提供了 **上下文对象** 。这里不打算深入介绍它们，但它们对一些有用的信息和特性提供访问，是值得探究的。在一个动作方法中，可以用这些上下文对象中的任意一个，来获取与请求相关的信息

```csharp
...
public ActionResult RenameProduct()
{
    // Access various properties from context objects
    string userName = User.Identity.Name;
    string serverName = Server.MachineName;
    string clientIP = Request.UserHostAddress;
    DateTime dateStamp = HttpContext.Timestamp;
    AuditRequest(userName, serverName, clientIP, dateStamp, "Renaming product");

    // Retrieve posted data from Request.Form
    string oldProductName = Request.Form["OldName"];
    string newProductName = Request.Form["NewName"];
    bool result = AttemptProductRename(oldProductName, newProductName);

    ViewData["RenameResult"] = result;
    return View("ProductRenamed");
}
...
```

可以用智能感知 (在一个动作方法中输入 "this."，并浏览弹出内容) 和微软开发者网络 (查看 System.Web.Mvc.Controller 及其基类，或 System.Web.Mvc.ControllerContext) 来浏览这些大量可用的请求上下文信息

使用动作方法参数 正如前几章所看到的，动作方法可以采用一些参数。这是一种比通过上下文对象手工提取数据更灵活的接收输入数据的办法，而且这使你的动作方法更易于阅读。例如，假设有一个动作方法

```csharp
...
public ActionResult ShowWeatherForecast()
{
    string city = (string)RouteData.Values["city"];
    DateTime forDate = DateTime.Parse(Request.Form["forDate"]);
    // ... implement weather forecast here ...
    return View();
}
...
```

我们可以把它重写成使用参数的形式

```csharp
...
public ActionResult ShowWeatherForecast(string city, DateTime forDate)
{
    // ... implement weather forecast here ...
    return View();
}
...
```

这不仅更易于阅读，而且也有助于单元测试 —— 我们可以对该动作方法进行测试，而不需要模仿控制器类的便利属性

值得注意的是动作方法不允许有 out 或 ref 参数。这么做没有任何意义，而且 ASP.NET MVC 如果看到这种参数会直接抛出一个异常

通过自动检查上下文对象和属性，MVC 框架会给动作方法参数提供值，这些对象包括 Request.QueryString、Request.Form 和 RouteData.Values。对参数名的处理不区分大小写，因此，例如名称为 "city" 的动作方法参数能够被 Request。Form ["City"] 的属性所填充

1. 理解参数对象实例化 Controller 基类使用叫做 **值提供器 (Value Provider)** 和 **模型绑定器 (Model Binder)** 的 MVC 框架组件来获取动作方法的参数值。值提供器表现一组可用于控制器的数据项。有一组内建的值提供器，它们会抓取 Request.Form、Request.QueryString,、Request.Files 和 RouteData.Values 的数据项。然后这些值将被传递给模型绑定器，模型绑定器会尝试将这些数据映射成动作方法参数的数据类型 默认的模型绑定器能够创建并填充任何.NET 类型的对象，包括集合和项目专用的自定义类型
2. 理解可选参数与强制参数 如果 MVC 框架找不到引用类型参数 (如 string 或 object) 的值，动作方法仍然会被调用，但对该参数会使用一个 null 值。若找不到值类型参数 (如 int 或 double) 的值，则会抛出一个异常，并且不会调用动作方法。以下是考虑这种情况的另一种方式：

   * 值类型参数是强制的。为了使它们成为可选的，可以为其制定一个默认值，或者将该参数的类型改为可空 (nullable) 类型，那么 MVC 框架在无值可用的情况下会传递 null 值
   * 引用类型参数是可选的。为了使它们成为必需的 (以保证传递一个非空值)，可以把一些代码添加到动作方法的顶部，以拒绝 null 值。例如，在该值等于 null 的情况下，抛出一个 ArgumentNullException 异常

3. 指定默认参数值 如果希望处理不含动作方法参数值的请求，但又不想在代码中检查 null 值或抛出异常，可以用 C# 的可选参数特性来代替

```csharp
...
public ActionResult Search(string query = "all", int page = 1)
{
    // ...process request...
    return View();
}
...
```

在定义参数时，通过对参数赋值的办法，可以将参数标记为可选的。MVC 框架会视图通过请求为这些参数获取值，但如果无值可用，那么将用所指定的默认值来替代 对于 string 型参数 query (注意，这是引用类型参数)，这意味着不需要检查 null 值。如果所处理的请求未指定查询字符串，那么该动作方法将以字符串 all 进行调用。对于 int 类型参数 (注意，这是值类型参数)，在没有 page 值时，请求不会导致错误。该方法将以默认值 "1" 进行调用。 可选参数可以用于字面类型，字面类型 (Literal Type) 是不需要 new 关键字定义的类型，包括 string、int 以及 double 等

提示： 如果请求确实包含了一个参数的值，但又不能把它转换成正确的类型，那么框架会传递该参数类型的默认值，并在一个名称为 "ModelState (模型状态)" 的特殊上下文对象中将这个尝试值注册为一个验证错误。除非检查 ModelState 中的验证错误，否则，当用户在表单中输入了不良数据的情况下，可能会得到奇怪的境况：该请求还是被处理了，就好像用户没有输入任何数据，或输入的是这个默认值一样

## 产生输出

控制器在完成了一个请求的处理之后，通常需要生成一个响应。当通过实现 IController 接口创建 "裸机控制器 (Bar-metal Controller)" 时，需要负责处理请求的各个方面，包括生成对客户端的响应。例如，如果想发送一个 HTML 响应，那么必须创建并装配 HTML 数据，并用 Response.Write 方法把它发送到客户端。类似地，如果想将用户浏览器重定向到另一个 URL，则需要调用 Response.Redirect 方法，并直接传递感兴趣的 URL

```csharp
using System.Web.Mvc;
using System.Web.Routing;

namespace ControllersAndActions.Controllers
{
    public class BasicController : IController
    {
        public void Execute(RequestContext requestContext)
        {
            string controller = (string)requestContext.RouteData.Values["controller"];
            string action = (string)requestContext.RouteData.Values["action"];

            if (action.ToLower() == "redirect")
            {
                requestContext.HttpContext.Response.Redirect("/Derived/Index");
            }
            else
            {
                requestContext.HttpContext.Response.Write(
                string.Format("Controller: {0}, Action: {1}",
                controller, action));
            }
        }
    }
}
```

当控制器派生于 Controller 类时，可以使用同样的办法。在 Execute 方法中读取 RequestContext.HttpContext.Response 属性时，返回的是 HttpResponseBase 类，这个类在派生控制器中可以直接通过 Controller.Response 属性进行使用

```csharp
using System.Web.Mvc;

namespace ControllersAndActions.Controllers
{
    public class DerivedController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Hello from the DerivedController Index method";
            return View("MyView");
        }
        public void ProduceOutput()
        {
            if (Server.MachineName == "TINY")
            {
                Response.Redirect("/Basic/Index");
            }
            else
            {
                Response.Write("Controller: Derived, Action: ProduceOutput");
            }
        }
    }
}
```

ProduceOutput 方法使用 Server.MachineName 属性的值来决定发送给客户端的响应 (TINY 是我们其中一个开发服务器的名称)。这种办法是可行的，但它还存在几个问题：

* 控制器类必须包含详细的 HTML 或 URL 结构，这些使得控制器更加难以阅读和维护
* 将响应直接生成为输出的控制器难以进行单元测试。为了确定输出表示的是什么，需要创建 Response 对象的模仿实现，然后才能处理从控制器接收到的输出。例如，这可能意味着要解析 HTML 关键字，这是费时而痛苦的过程
* 这种处理每个响应微小细节的方式是乏味而易错的。有些程序员喜欢对建立原始控制器的过程进行绝对控制，但大多数人很快就失败了

幸运的是，MVC 框架有一个很好的特性可以解决所有这些问题，这个特性叫做 "动作结果"

理解动作结果 MVC 框架通过使用动作结果把 **指明意图** 和 **执行意图** 分离开来，我不直接使用 Response 对象，而是返回一个派生于 ActionResult 类的对象，它描述控制器响应要完成的功能。例如，渲染一个视图，重定向到另一个 URL 或动作方法等。但这是间接发生的，不是直接生成响应 相反，在动作方法被执行之后，创建 MVC 框架处理的 ActionResult 对象以产生结果

提示： 动作结果系统是一种 **命令模式 (Command Pattern)** 。该模式描述你所处的场景，并发送一些对象，这些对象描述了要执行的操作

当 MVC 框架从动作方法收到一个 ActionResult 对象时，它 (指 MVC 框架) 调用由这个对象所定义的 ExecuteResult 方法。然后在该动作结果的实现中处理 Response 对象，生成符合你意图的输出。为了演示工作机制，这里自定义一个 ActionResult 实现 这段文字的描述有点含糊，MVC 框架对动作结果的处理应当是：从动作方法中返回的是一个 ActionResult 对象，当 MVC 框架接收到这个动作结果对象时，会根据该对象的类型调用相应的动作结果处理类 (如 RedirectResult 类)，于是会执行这个类中的 ExecuteResult 方法，这是动作结果的一个实现方法，它负责处理 Response 对象，并生成所期望的输出

```csharp
using System.Web.Mvc;

namespace ControllersAndActions.Infrastructure
{
    public class CustomRedirectResult : ActionResult
    {
        public string Url { get; set; }
        public override void ExecuteResult(ControllerContext context)
        {
            string fullUrl = UrlHelper.GenerateContentUrl(Url, context.HttpContext);
            context.HttpContext.Response.Redirect(fullUrl);
        }
    }
}
```

这个类是以 System.Web.Mvc.RedirectResult 类的工作方式为基础的 ——MVC 框架开源的好处之一是，你可以看到事情背后的工作机制。ControllersAndActions 类要比 MVC 相应的类简单得多 当我创建 RedirectResult 类的实例时，在其中传递了对用户进行重定向的 URL。ExecuteResult 方法 (将在动作方法完成时由 MVC 框架执行) 通过框架提供的 ControllerContext 对象得到查询的 Response 对象，并调用 RedirectParament 或 Redirect 方法

在 Derived 控制器中使用 CustomRedirectResult

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ControllersAndActions.Infrastructure;

namespace ControllersAndActions.Controllers
{
    public class DerivedController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Hello from the DerivedController Index method";
            return View("MyView");
        }
        public ActionResult ProduceOutput()
        {
            if (Server.MachineName == "TINY")
            {
                return new CustomRedirectResult { Url = "/Basic/Index" };
            }
            else
            {
                Response.Write("Controller: Derived, Action: ProduceOutput");
                return null;
            }
        }
    }
}
```

注意，这里不得不修改动作方法的结果，以返回一个 ActionResult。在动作方法执行以后，如果不希望 MVC 框架做任何事情，则返回 null

单元测试：控制器与动作 MVC 框架的许多部分都被设计成便于单元测试，特别是对控制器与动作。这种支持有几个原因：

* 你可以在 Web 服务器之外测试控制器与动作。通过它们的基类 (如 HttpRequestBase) 访问上下文对象，这易于模仿
* 你不需要解析任何 HTML 来测试一个动作方法的结果。你可以检测返回的是 ActionResult 对象，便可以确保接收的是预期结果
* 你不需要模仿客户端请求。MVC 框架的模型绑定系统允许你编写用方法参数接收输入的动作方法。要测试一个动作方法，只需要简单地直接调用该动作方法，并提供参数值即可

现在，你已经看到自定义动作结果是如何工作的，我们可以切换到 MVC 框架提供的动作结果，它具有更多的特性，并且由微软公司经过了完全的测试

在 DerivedController.cs 文件中使用内建的 RedirectResult 对象

```csharp
...
public ActionResult ProduceOutput() {
 return new RedirectResult("/Basic/Index");
}
...
```

为了使动作方法的代码更简单，Controller 类包含了用来生成各种 ActionResults 的一些便利方法。

```csharp
...
public ActionResult ProduceOutput()
{
    return Redirect("/Basic/Index");
}
...
```

在动作结果系统中没有特别复杂的东西，但它有助于实现更简单、更整洁且更一致的代码，这些代码更易于阅读和单元测试 MVC 框架含有许多内建的动作结果类型，所有的这些类型都派生于 ActionResult，其中有不少类型在 Controller 类中有便利的辅助器方法

内建 ActionResult 类型

| 类型                   | 描述                                                         | 辅助器方法                                                   |
| :--------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| ViewResult             | 返回指定的或默认的视图模板                                   | View                                                         |
| PartialViewResult      | 返回指定的或默认的分部视图模板                               | PartialView                                                  |
| RedirectToRouteResult  | 将 HTTP 301 或 HTTP 302 重定向发送给一个动作方法或特定的路由条目，根据路由配置生成一个 URL | RedirectToAction RedirectToActionPermanent RedirectToRoute RedirectToRoutePermanent |
| RedirectResult         | 将 HTTP 301 或 HTTP 302 重定向发送给一个特定的 URL           | Redirect RedirectPermanent                                   |
| ContentResult          | 返回原始的文本数据给浏览器，随意地设置文本类型头部           | Content                                                      |
| FileResult             | 将二进制数据 (例如，磁盘文件或内存字节数组) 直接传送给浏览器 | File                                                         |
| JsonResult             | 将一个.NET 对象序列化成 Json 格式，并发送给响应。这种响应经常使用 Web API 特性生成 | Json                                                         |
| JavaScriptResult       | 发送一个由浏览器执行的 JavaScript 代码片段                   | JavaScript                                                   |
| HttpUnauthorizedResult | 将响应的 HTTP 状态码设置为 401 (意为 "未授权")，这会引发当前的认证机制 (表单认证或 Windows 认证) 要求访问者进行登录 | None                                                         |
| HttpNotFoundResult     | 返回一个 HTTP 的 "404—— 未找到" 错误                         | HttpNotFound                                                 |
| HttpStatusCodeResult   | 返回指定的 HTTP 码                                           | None                                                         |
| EmptyResult            | 什么也不做                                                   | None                                                         |

通过渲染视图返回 HTML 动作方法最常用的一种响应形式是生成 HTML，并将其发送给浏览器。先添加一个名为 Example 的控制器

```csharp
using System.Web.Mvc;

namespace ControllersAndActions.Controllers
{
    public class ExampleController : Controller
    {
        public ViewResult Index()
        {
            return View("Homepage");
        }
    }
}
```

当使用动作结果系统时，可以通过使用 ViewResult 类的实例，来指定你想要 MVC 框架渲染的视图。做这件事最简单的办法是调用控制器的 View 方法，将视图名作为参数传递

注意： 示例中，动作方法的返回值是 ViewResult。如果指定的是更一般的 ActionResult 类型，该方法也能通过编译并正常运行。事实上，有些 MVC 程序员会把每个动作方法的结果都定义成 ActionResult，即使他们知道该动作方法返回的是一个更具体的类型

当 MVC 框架调用 ViewResult 对象的 ExecuteResult 方法时，将开始搜索你已经指定的视图。如果在项目中使用了区域，那么框架将考察以下位置：

* /Areas//Views/ControllerName/.aspx
* /Areas//Views/ControllerName/.ascx
* /Areas//Views/Shared/.aspx
* /Areas//Views/Shared/.ascx
* /Areas//Views/ControllerName/.cshtml
* /Areas//Views/ControllerName/.vbhtml
* /Areas//Views/Shared/.cshtml
* /Areas//Views/Shared/.vbhtml

从上述列表可以看出，即使 MVC 框架使用 Razor，框架也会查找遗留 ASPX 视图引擎创建的视图 (文件扩展名为.aspx 和.ascx)。这样和 MVC 框架的早期版本能保持通用，MVC 框架的早期版本使用来自 ASP.NET Web 表单的渲染特性 框架也查找了 C# 和 VB 的.NET Razor 模板。MVC 框架会依次检查这些文件是否存在，只要它定位到一个匹配，便用这个视图来渲染该动作方法的结果 如果未使用区域，或使用了区域，但在前述列表中没有找到这个文件，那么框架会使用以下的位置继续它的搜索：

* /Views/ControllerName/.aspx
* /Views/ControllerName/.ascx
* /Views/Shared/.aspx
* /Views/Shared/.ascx
* /Views/ControllerName/.cshtml
* /Views/ControllerName/.vbhtml
* /Views/Shared/.cshtml
* /Views/Shared/.vbhtml

同样，只要 MVC 框架检查一个位置，并找到一个文件，搜索便停止，并且会用已经找到的这个视图将响应渲染给客户端

单元测试：渲染一个视图 为了测试动作方法渲染的视图，可以检查它所返回的 ViewResult 对象。这当然不完全是一回事 —— 毕竟，这并不是通过检查最终生成的 HTML 来跟踪这一过程的。但也十分密切，只要你能够充分确信 MVC 框架的视图系统会恰当工作

通过读取 ViewResult 对象的 ViewName 属性，你可以确定被选中的是哪一个视图

```csharp
using System.Web.Mvc;
using ControllersAndActions.Controllers;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace ControllersAndActions.Tests
{
    [TestClass]
    public class ActionTests
    {
        [TestMethod]
        public void ControllerTest()
        {
            // Arrange - create the controller
            ExampleController target = new ExampleController();

            // Act - call the action method
            ViewResult result = target.Index();

            // Assert - check the result
            Assert.AreEqual("Homepage", result.ViewName);
        }
    }
}
```

当对选择默认视图的动作方法进行测试时，稍有不同。如对于下列动作：

```csharp
...
public ViewResult Index()
{
    return View();
}
...
```

在这种情况下，你需要对视图名采用空字符串 ("")

```csharp
...
Assert.AreEqual("", result.ViewName);
...
```

空字符串说明了 ViewResult 对象是如何给 Raozr 视图引擎发信号的，和动作方法相关的默认视图被选择了

MVC 框架搜索视图的目录序列是 "约定优于配置" 这一规则了另一个例子 不需要向框架注册视图文件，只需要把它们放在一组已知的位置中，框架便会找到它们。在调用 View 方法时，通过忽略待渲染视图名称，可以使该约定更进一步

```csharp
using System.Web.Mvc;
using System;

namespace ControllersAndActions.Controllers
{
    public class ExampleController : Controller
    {
        public ViewResult Index()
        {
            return View();
        }
    }
}
```

提示：MVC 框架实际上从 RouteData.Values ["action"] 值取得了动作方法的名称。如果你使用内置路由类，动作方法名和路由值将是相同的，但如果你已经实现了不遵循 MVC 框约定的自定义路由，那么实际情况就并非如此了

View 方法有许多重载版本，它们对应在 ViewResult 对象上设置的不同属性。例如，通过明确地命名一个布局，可以重写一个视图所使用的 (默认) 布局

```csharp
...
public ViewResult Index()
{
    return View("Index", "_AlternateLayoutPage");
}
...
```

通过路径指定视图 命名约定办法方便而简单，但它确实限制了你能够渲染的视图。如果要渲染一个特定的视图，可以通过提供一个明确的路径并绕过搜索阶段来完成

```csharp
using System.Web.Mvc;

namespace ControllersAndActions.Controllers
{
    public class ExampleController : Controller
    {
        public ViewResult Index()
        {
            return View("~/Views/Other/Index.cshtml");
        }
    }
}
```

当你像这样指定一个视图时，必须以 "/" 或 "~/" 开始，并包括文件扩展名 (例如，.cshtml 对应的是含有 C# 代码的 Razor 视图) 如果你觉得需要这样使用这一特性，我建议你花一些时间仔细思考，并自问试图达到什么结果。如果需要渲染属于另一个控制器的视图，那么把用户重定向到那个控制器的一个动作方法也许更好一些

将数据从动作方法传递给视图

1. 提供视图模型对象 你可以将一个对象作为 View 方法的参数发送给视图

   ```csharp
   using System;
   using System.Web.Mvc;
   
   namespace ControllersAndActions.Controllers
   {
       public class ExampleController : Controller
       {
           public ViewResult Index()
           {
               DateTime date = DateTime.Now;
               return View(date);
           }
       }
   }
   ```

   上述示例传递了一个 DateTime 对象作为视图模型，可以用 Razor 的 Model 关键字来访问这个对象

   ```csharp
   @{
       ViewBag.Title = "Index";
   }
   
   <h2>Index</h2>
   
   The day is: @(((DateTime)Model).DayOfWeek)
   ```

   该视图是一个非类型或弱类型视图。该视图不知道关于视图模型对象的任何情况，而把它作为 object 的一个实例来看待。为了得到 DateTime 属性的值，需要把这个对象转换成 DateTime 的一个实例。上述方法虽然可行，   但会产生杂乱的视图。可以通过创建强类型视图加以整理，在强类型视图中包含视图模型对象类型的详细信息

   ```csharp
   @model DateTime
   @{
       ViewBag.Title = "Index";
   }
   
   <h2>Index</h2>
   
   The day is: @Model.DayOfWeek
   ```

   上述示例用 Razor 的 model 关键字指定了视图的模型类型。注意，当指定模型类型时，要使用小写的 "m"；而在读取模型属性时，要使用大写的 "M"，这样不仅便于整洁视图，而且 Visual Studio 对强类型视图支持智能   感知

   单元测试：视图模型对象 你可以通过 ViewResult.ViewData.Model 属性，来访问从动作方法传递给视图的视图模型对象

   ```csharp
   ...
   [TestMethod]
   public void ViewSelectionTest()
   {
       // Arrange - create the controller
       ExampleController target = new ExampleController();
   
       // Act - call the action method
       ViewResult result = target.Index();
   
       // Assert - check the result
       Assert.AreEqual("", result.ViewName);
       Assert.IsInstanceOfType(result.ViewData.Model, typeof(System.DateTime));
   }
   ...
   ```

2. 用 ViewBag 传递数据 视图包，特性允许你在一个动态对象上定义任何属性，并在视图中访问它们。这个动态对象可以通过 Controller.ViewBag 属性进行访问

   ```csharp
   using System;
   using System.Web.Mvc;
   
   namespace ControllersAndActions.Controllers
   {
       public class ExampleController : Controller
       {
           public ViewResult Index()
           {
               ViewBag.Message = "Hello";
               ViewBag.Date = DateTime.Now;
               return View();
           }
       }
   }
   ```

   通过简单赋值的办法定义了名称为 "Message" 和 "Date" 的视图包属性。在此之前，这些属性是不存在的，不需要做任何准备就可以创建它们。要在视图中读取这些数据，只要简单地采用在动作方法中设置的同样的属性即可

   ```csharp
   @{
       ViewBag.Title = "Index";
   }
   
   <h2>Index</h2>
   
   The day is: @ViewBag.Date.DayOfWeek
   <p />
   The message is: @ViewBag.Message
   ```

   ViewBag 在使用一个视图模型对象方面有一个优点，即它便于将多个对象发送给视图。如果只能使用视图模型，那么，为了获得同样的效果，就需要创建一个具有 string 和 DateTime 成员的新类型 当用动态对象进行工作   时，你可以在视图中输入属性和方法调用的任意序列：

   ```csharp
   ...
   The day is: @ViewBag.Date.DayOfWeek.Blah.Blah.Blah
   ...
   ```

   Visual Studio 不能对包括 ViewBag 在内的任何动态对象提供智能感知，而且在视图被渲染之前，不支持诸如 "属性不存在" 之类的错误提示

   单元测试：ViewBag 可以通过 ViewResult.ViewBag 属性来读取 ViewBag 的值

   ```csharp
   ...
   [TestMethod]
   public void ControllerTest()
   {
       // Arrange - create the controller
       ExampleController target = new ExampleController();
   
       // Act - call the action method
       ViewResult result = target.Index();
   
       // Assert - check the result
       Assert.AreEqual("Hello", result.ViewBag.Message);
   }
   ...
   ```

   执行重定向 有一种动作方法的通常结果并不是直接产生输出，而是把用户的浏览器重定向到另一个 URL。大多数情况下，这个 URL 是应用程序中的另一个动作方法，它生成你希望用户看到的输出

   POST/REDIRECT/GET 模式 重定向最频繁的使用是在处理 HTTP POST 请求的动作方法中 当你想修改应用程序的状态时，才会使用 POST 请求。如果在请求处理之后仅返回 HTML，会陷入这样的风险：用户单击浏览器的刷新   按钮，并再次提交该表单，会引发异常和不符合需求的结果 为了避免这种问题，你可以遵循一种叫做 "POST/REDIRECT/GET" 的模式。在这个模式中，先接受一个 POST 请求，对该请求进行处理，然后重定向浏览器，以便浏   览器形成另一个 GET 请求的 URL。GET 请求不会修改应用程序的状态，因此，该请求的任何不经意的再次递交都不会引起任何问题

   在执行重定向时，给浏览器发送的是以下两个 HTTP 代码之一

   * 发送 HTTP 代码 302，这是一个临时重定向。它是最常用的重定向类型，而且当使用 POST/REDIRECT/GET 模式模式时，这就是你要发送的代码
   * 发送 HTTP 代码 301，它表示一个永久重定向。你要小心使用它，因为它指示 HTTP 代码接收器不要再请求原先的 URL，而使用包含在重定向代码中的新 URL。如果没有把握，请使用 302

3. 重定向到字面 URL 对浏览器进行重定向的最基本方式是调用 Redirect 方法，它返回 RedirectResult 类的一个实例

   ```csharp
   using System;
   using System.Web.Mvc;
   
   namespace ControllersAndActions.Controllers
   {
       public class ExampleController : Controller
       {
           public ViewResult Index()
           {
               ViewBag.Message = "Hello";
               ViewBag.Date = DateTime.Now;
               return View();
           }
           public RedirectResult Redirect()
           {
               return Redirect("/Example/Index");
           }
       }
   }
   ```

   我希望重定向的 URL 被表示成一个字符串，并作为参数传递给 Redirect 方法。Redirect 方法发送的是一个临时重定向，可以用 RedirectPermanent 方法发送一个永久重定向

   ```csharp
   ...
   public RedirectResult Redirect()
   {
       return RedirectPermanent("/Example/Index");
   }
   ...
   ```

   提示：也可以使用 Redirect 方法的重载版本，它使用一个布尔型参数指定是否是永久重定向
   单元测试：字面重定向 字面重定向易于测试，可以用 RedirectResult 类的 Url 和 Permanent 属性来读取 URL 和永久重定向或临时重定向

   ```csharp
   ...
   [TestMethod]
   public void ControllerTest()
   {
   // Arrange - create the controller
   ExampleController target = new ExampleController();
   
   // Act - call the action method
   RedirectResult result = target.Redirect();
   
   // Assert - check the result
   Assert.IsTrue(result.Permanent);
   Assert.AreEqual("/Example/Index", result.Url);
   }
   ...
   ```

4. 重定向到路由系统的 URL 如果要把用户重定向到应用程序的一个不同的部分，需要确保你发送的 URL 符合 URL 模式。用字面 URL 进行重定向的问题是，对路由方案的任何修改都将意味着你需要检查代码，并对这些 URL 进行更新。幸运的是，可以使用路由系统，用 RedirectToRoute 方法来生成有效的 URL，该方法会创建 RedirectToRouteResult 的一个实例

   ```csharp
   using System;
   using System.Web.Mvc;
   
   namespace ControllersAndActions.Controllers
   {
   public class ExampleController : Controller
   {
       public ViewResult Index()
       {
           ViewBag.Message = "Hello";
           ViewBag.Date = DateTime.Now;
           return View();
       }
   
       public RedirectToRouteResult Redirect()
       {
           return RedirectToRoute(new
           {
               controller = "Example",
               action = "Index",
               ID = "MyID"
           });
       }
   }
   }
   ```

   RedirectToRoute 方法发布一个临时重定向。对于永久重定向，可以使用 RedirectToRoutePermanent 方法。这两个方法都以一个匿名类型作为参数，然后其属性被传递给路由系统，以生成 URL

   提示：RedirectToRoute 方法返回一个 RedirectToRouteResult 对象，我已经更新了动作方法以返回这种类型

   单元测试：路由重定向

```csharp
...
[TestMethod]
public void ControllerTest()
{
    // Arrange - create the controller
    ExampleController target = new ExampleController();

    // Act - call the action method
    RedirectToRouteResult result = target.Redirect();

    // Assert - check the result
    Assert.IsFalse(result.Permanent);
    Assert.AreEqual("Example", result.RouteValues["controller"]);
    Assert.AreEqual("Index", result.RouteValues["action"]);
    Assert.AreEqual("MyID", result.RouteValues["ID"]);
}
...
```

通过查看 RedirectToRouteResult 对象提供的路由信息，我已经直接测试了结果，这意味着不用解析 URL

1. 重定向到一个动作方法 通过使用 RedirectToAction 方法 (临时重定向) 或 RedirectToActionPermanent 方法 (永久重定向)，你可以更雅致地重定向到一个动作方法。这只是 RedirectToRoute 方法的一个封装程序，让你指定动作方法和控制器的值，而不需要创建一个匿名类型

   ```csharp
   ...
   public RedirectToRouteResult Redirect()
   {
       return RedirectToAction("Index");
   }
   ...
   ```

   如果只指定一个动作方法，那么它假设你指向的是当前控制器的动作方法。如果想重定向到另一个控制器，需要以参数提供其名称

   ```csharp
   ...
   public RedirectToRouteResult Redirect()
   {
       return RedirectToAction("Index", "Basic");
   }
   ...
   ```

   还有一些其他的重载版本，可以用来为 URL 的生成提供额外的值。这些是用一个匿名类型来表示的，这往往会破坏便利方法的目的，但仍然能使代码易于阅读

   提示：为控制器和动作方法提供的值，在被传递给路由系统之前是不会被检验的。你要负责确保所指定的目标是实际存在的

   保留重定向数据 重定导致向浏览器递交一个全新的 HTTP 请求，这意味着你失去了对原先请求细节的访问。如果希望把一个请求的数据传递给下一个请求，可以用临时数据 (Temp Data) 特性 (注意，重定向意味着用户是跨请求的，而 View Bag 是不能用于跨请求情况下控制器与视图之间的数据传递。这是重定向情况下需要使用 Temp Data 的原因) TempData 类似于 Session 数据，只不过 TempData 的值在被读取之后，即被标记为删除，并在该请求被处理完成后删除。这对于希望跨重定向保持短期数据是一种理想的安排

   ```csharp
   ...
   public RedirectToRouteResult RedirectToRoute()
   {
       TempData["Message"] = "Hello";
       TempData["Date"] = DateTime.Now;
       return RedirectToAction("Index");
   }
   ...
   ```

   当这个方法处理请求时，它在 TempData 集合中设置了一些值，然后把用户的浏览器重定向到同一个控制器中的 Index 动作方法。你可以在目标动作方法中读取 TempData 的值，然后把它们传递给视图

   ```csharp
   ...
   public ViewResult Index()
   {
       ViewBag.Message = TempData["Message"];
       ViewBag.Date = TempData["Date"];
       return View();
   }
   ...
   ```

   一个更直接的办法是在视图中读取这些值

   ```csharp
   @{
       ViewBag.Title = "Index";
   }
   
   <h2>Index</h2>
   
   The day is: @(((DateTime)TempData["Date"]).DayOfWeek)
   <p />
   The message is: @TempData["Message"]
   ```

   在视图中读取这些值，意味着不需要在动作方法中使用 ViewBag 特性。然而，你必须把 TempData 结果转换成相应的类型
   利用 Keep 方法，可以得到 TempData 的值，而不把它标记为删除

   ```csharp
   ...
   DateTime time = (DateTime)TempData.Peek("Date");
   ...
   ```

   例用 Keep 方法，可以保留一个将被删除的值

   ```csharp
   ...
   TempData.Keep("Date");
   ...
   ```

   Keep 方法不会永久保护一个值。如果这个值被再次读取，它将被再次标记为删除。如果想存储一些数据项，以使它们在请求被处理后不会被自动删除，请使用 Session 数据 (注意，Session 数据会占用服务器资源，只有在会话过期后才会被删除)

   返回错误及 HTTP 代码 要考察的最后一个内建的 ActionResult 类可以用来给客户端发送指定的错误消息和 HTTP 结果码。大多数应用程序不需要这些特性，因为 MVC 框架会自动生成这些种类的结果。然而，如果需要对发送给客户端的响应有更直接的控制，它们可能是有用的

2. 发送特定的 HTTP 结果码 可以使用 HttpStatusCodeResult 类将一个特定的 HTTP 状态码发送给浏览器。这个类没有对应的控制器辅助方法，因此必须直接对这个类进行实例化

   ```csharp
   using System;
   using System.Web.Mvc;
   
   namespace ControllersAndActions.Controllers
   {
       public class ExampleController : Controller
       {
           public ViewResult Index()
           {
               ViewBag.Message = "Hello";
               ViewBag.Date = DateTime.Now;
               return View();
           }
   
           public RedirectToRouteResult Redirect()
           {
               return RedirectToAction("Index");
           }
   
           public HttpStatusCodeResult StatusCode()
           {
               return new HttpStatusCodeResult(404, "URL cannot be serviced");
           }
       }
   }
   ```

   HttpStatusCodeResult 的构造器参数是数字状态码和一个可选的描述消息，上述示例返回了 404，它表示请求资源不存在

3. 发送 404 结果 可以使用更便利的 HttpNotFoundResult 类来取得和上述示例同样的效果，这个类派生于 HttpStatusCodeResult，而且可以用控制器的便利方法 HttpNotFound 来创建

   ```csharp
   ...
   public HttpStatusCodeResult StatusCode()
   {
       return HttpNotFound();
   }
   ...
   ```

4. 发送 401 结果 另一个特定的 HTTP 状态码的封装程序类是 HttpUnauthorizedResult，它返回 401 代码，用来指示一个未授权请求

   ```csharp
   ...
   public HttpStatusCodeResult StatusCode()
   {
       return new HttpUnauthorizedResult();
   }
   ...
   ```

   在 Controller 类中没有辅助器方法来创建 HttpUnauthorizedResult 实例，因此你必须直接创建，返回这个类实例的效果通常是把用户重定向到认证页面

单元测试：HTTP 状态码 HttpStatusCodeResult 类遵循了在其他结果类型所看到的模式，并可通过一组属性使用它的状态。在这种情况下，StatusCode 属性返回数值型的 HTTP 状态码，而 StatusDescription 属性返回相应描述字符串

```csharp
...
[TestMethod]
public void ControllerTest()
{
    // Arrange - create the controller
    ExampleController target = new ExampleController();

    // Act - call the action method
    HttpStatusCodeResult result = target.StatusCode();

    // Assert - check the result
    Assert.AreEqual(401, result.StatusCode);
}
...
```

# 第 18 章 过滤器

**过滤器 (Filter)** 把附加逻辑注射到 MVC 框架的请求处理。它们提供一种简单而雅致的方式，实现了 **交叉关注** (Cross-Cutting Concerns)。所谓交叉关注，是指可以用于整个应用程序，而又不适合放置在某个局部位置的功能，否则会打破关注分离模式。典型的交叉关注例子是登录、授权以及缓存等

## 准备示例项目

为了演示 **认证过滤器** 这一 MVC 新特性，在 Web.Config 文件中定义静态用户凭证

```xml
...
<system.web>
<compilation debug="true" targetFramework="4.5.1" />
<httpRuntime targetFramework="4.5.1" />
<authentication mode="Forms">
    <forms loginUrl="~/Account/Login" timeout="2880">
    <credentials passwordFormat="Clear">
        <user name="user" password="secret"/>
        <user name="admin" password="secret" />
    </credentials>
    </forms>
</authentication>
</system.web>
...
```

为了简便起见，定义了两个用户 user 和 admin，并给它们分配相同的密码 secret。再此使用 forms 认证，并使用 loginUrl 属性来指定未认证的请求将被重定向到 /Account/Login

```csharp
using System.Web.Mvc;
using System.Web.Security;

namespace Filters.Controllers
{
    public class AccountController : Controller
    {
        public ActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Login(string username, string password, string returnUrl)
        {
            bool result = FormsAuthentication.Authenticate(username, password);
            if (result)
            {
                FormsAuthentication.SetAuthCookie(username, false);
                return Redirect(returnUrl ?? Url.Action("Index", "Admin"));
            }
            else
            {
                ModelState.AddModelError("", "Incorrect username or password");
                return View();
            }
        }
    }
}
```

注意： 你将看到 Visual Studio 的警告，FormsAuthentication.Authenticate 方法已经被弃用。这是微软公司合理化用户安全持续努力的一部分，也是任何 Web 应用程序框架棘手的部分

为了从用户那里收集候选凭证，在 Views/Shared 文件夹下创建一个名为 Login.cshtml 的视图。这里创建了一个共享视图，因为本章稍后将添加第二个认证控制器，而且想重用这个视图

```html
@{
    Layout = null;
}

<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width" />
    <title></title>
</head>
<body>
    @using (Html.BeginForm())
    {
        @Html.ValidationSummary()
        <p><label>Username:</label><input name="username" /></p>
        <p><label>Password:</label><input name="password" type="password" /></p>
        <input type="submit" value="Log in" />
    }
</body>
</html>
```

设置起始 URL 并测试应用程序

## 使用过滤器

如果希望动作方法只能被已认证用户使用，动作方法给我们提供了一个可选办法，可以在每个动作方法中检查请求的授权状态

```csharp
namespace SportsStore.WebUI.Controllers
{
    public class AdminController : Controller
    {
        // ... instance variables and constructor
        public ViewResult Index()
        {
            if (!Request.IsAuthenticated)
            {
                FormsAuthentication.RedirectToLoginPage();
            }
            // ...rest of action method
        }
        public ViewResult Create()
        {
            if (!Request.IsAuthenticated)
            {
                FormsAuthentication.RedirectToLoginPage();
            }
            // ...rest of action method
        }
        public ViewResult Edit(int productId)
        {
            if (!Request.IsAuthenticated)
            {
                FormsAuthentication.RedirectToLoginPage();
            }
            // ...rest of action method
        }
        // ... other action methods
    }
}
```

可以看出，这种方式有许多重复，这是决定使用过滤器来代替的原因

```csharp
namespace SportsStore.WebUI.Controllers
{
    [Authorize]
    public class AdminController : Controller
    {
        // ... instance variables and constructor
        public ViewResult Index()
        {
            // ...rest of action method
        }
        public ViewResult Create()
        {
            // ...rest of action method
        }
        public ViewResult Edit(int productId)
        {
            // ...rest of action method
        }
        // ... other action methods
    }
}
```

过滤器是.NET 的注解属性，它们对请求处理管道添加了额外的步骤

过滤器类型介绍 MVC 框架支持 5 种不同类型的过滤器，每一种类型让你能够在请求处理的不同点上引入逻辑

MVC 框架的过滤器类型

| 过滤器类型 | 接口                  | 默认实现              | 描述                                                         |
| :--------- | :-------------------- | :-------------------- | :----------------------------------------------------------- |
| 认证过滤器 | IAuthenticationFilter | N/A                   | 最先运行，在任何其他过滤器或动作方法之前，但在授权过滤器之后可以再次运行 |
| 授权过滤器 | IAuthorizationFilter  | AuthorizeAttribute    | 在认证过后，其他过滤器或动作方法之前，第二个运行             |
| 动作过滤器 | IActionFilter         | ActionFilterAttribute | 在动作方法之前及之后运行                                     |
| 结果过滤器 | IResultFilter         | ActionFilterAttribute | 在动作结果被执行之前和之后运行                               |
| 异常过滤器 | IExceptionFilter      | HandleErrorAttribute  | 仅在另一个过滤器、动作方法或结果抛出异常时运行               |

在 MVC 框架调用一个动作方法之前，会首先检测该方法的定义，以查看它是否具有过滤器注解属性。如果有，那么它便在请求处理的相应点上调用这些接口所定义的方法。框架包含了一些默认的注解属性类，它们实现了这些过滤器接口

提示，MVC5、介绍了一个新的接口 IOverrideFilter

ActionFilterAttribute 类既实现了 IActionFilter 接口，也实现了 IResultFilter 接口。这是一个抽象类，它要求你必须创建一个实现。AuthorizeAttribute 和 HandleErrorAttribute 类，则包含了一些有用的特性，并且可以不必创建派生类进行使用

将过滤器运用于控制器和动作方法 过滤器可以应用于个别动作方法，也可以运用于整个控制器

```csharp
namespace SportsStore.WebUI.Controllers
{
    public class AdminController : Controller
    {
        // ... instance variables and constructor
        [Authorize]
        public ViewResult Index()
        {
            // ...rest of action method
        }

        [Authorize]
        public ViewResult Create()
        {
            // ...rest of action method
        }
        // ... other action methods
    }
}
```

你可以运用多个过滤器，也可以混搭它们所运用的层级 —— 即将它们运用于整个控制器或个别动作方法

```csharp
[Authorize(Roles = "trader")] // applies to all actions
public class ExampleController : Controller
{
    [ShowMessage] // applies to just this action
    [OutputCache(Duration = 60)] // applies to just this action
    public ActionResult Index()
    {
        // ... action method body
    }
}
```

提示： 如果为控制器定义了一个自定义的基类，那么运用于基类上的任何过滤器都会影响其派生类

## 使用授权过滤器

授权过滤器在认证过滤器之后，其他过滤器和动作方法被调用之前运行。正如其名称的含义一样，这些过滤器执行你的授权策略，以确保动作方法只被已认证用户调用 认证和授权过滤器之间的关系有一点复杂，一旦你理解了授权过滤器的工作机制后就很容易理解了。授权过滤器实现 IAuthorizationFilter 接口

```csharp
namespace System.Web.Mvc
{
    public interface IAuthorizationFilter
    {
        void OnAuthorization(AuthorizationContext filterContext);
    }
}
```

如果你愿意，也可以创建一个实现 IAuthorizationFilter 接口的类，并创建自己的安全逻辑。以下补充阐明，这是一个十分糟糕的主意

警告：编写安全性代码是危险的 当前 MVC 框架提供了特性完备的授权过滤器，它能够衍生实现自定义授权策略。我总是尽可能这样使用它，而且建议你也这么做

一个更安全的方法是，创建一个 AuthorizeAttribute 类的子类，让它照管所有棘手的事情，而且编写自定义的授权代码是很容易的

```csharp
using System.Web;
using System.Web.Mvc;

namespace Filters.Infrastructure
{
    public class CustomAuthAttribute : AuthorizeAttribute
    {
        private bool localAllowed;

        public CustomAuthAttribute(bool allowedParam)
        {
            localAllowed = allowedParam;
        }

        protected override bool AuthorizeCore(HttpContextBase httpContext)
        {
            if (httpContext.Request.IsLocal)
            {
                return localAllowed;
            }
            else
            {
                return true;
            }
        }
    }
}
```

这是一个简单的授权过滤器。它让你能够阻止本地请求的访问 (本地请求是一种浏览器与应用程序服务器在同一台设备上运行而形成的请求) 我用最简单的方法创建了一个授权过滤器，它是 AuthorizeAttribute 类的子类，接着重写了 AuthorizeCore 方法。这确保我能够获益于 AuthorizeAttribute 的内建特性。上述过滤器的构造器中使用了一个布尔值，用以指示是否允许本地请求 该过滤器中类有趣的部分是其 AuthorizeCore 方法实现的，这是 MVC 框架用以检查过滤器是否对请求进行授权访问的形式。传递给该方法的参数是一个 HttpContextBase 对象，通过它可以获得待处理请求的信息。通过利用 AuthorizeAttribute 基类的内建特性，我只需要关注授权逻辑，并在想要对请求进行授权时从 AuthorizeCore 中返回 true，而在不想授权时返回 false

保持授权注解属性简单 以上对 AuthorizeCore 方法传递了一个 HttpContextBase 对象，该对象所提供的是对请求信息进行访问的方法，而不是访问运用该注解属性的控制器和动作方法的信息。开发人员直接实现 IAuthorizationFilter 接口的主要原因，是为了获得对传递给 OnAuthorization 方法的 AuthorizationContext 的访问，通过它可以得到更广泛的信息 —— 包括路由细节，以及当前控制器和动作方法的信息 我不建议使用这种方法 —— 不仅是因为我觉得编写自己的安全代码是危险的。虽然授权是一种交叉关注，但会在你的授权注解属性中建立一些逻辑，这些逻辑会与你的控制器紧密地耦合在一起，这会破坏关注分离，并导致测试的和维护问题。要尽可能保持授权注解属性简单，并关注基于请求的授权 —— 让授权的上下文来自于运用该注解属性的地方

运用自定义授权过滤器 为了使用自定义授权过滤器，只需要在想要保护的动作方法或控制器上简单地运用一个注解属性

```csharp
using System.Web.Mvc;
using Filters.Infrastructure;

namespace Filters.Controllers
{
    public class HomeController : Controller
    {
        [CustomAuth(false)]
        public string Index()
        {
            return "This is the Index action on the Home controller";
        }
    }
}
```

使用内建的授权过滤器 虽然我使用了 AuthorizeAttribute 类作为自定义过滤器的基础，但其 AuthorizeCore 方法有自己的实现，该实现对执行常规授权任务是有用的。当直接使用 AuthorizeAttribute 时，可以用这个类的两个 public 属性来指定授权策略

AuthorizeAttribute 属性

| 名称  | 类型   | 描述                                                         |
| :---- | :----- | :----------------------------------------------------------- |
| Users | string | 一个以逗号分隔的用户名列表，允许这些用户访问该动作方法       |
| Roles | string | 一个以逗号分隔的角色列表，为了访问该动作方法，用户必须至少是这些角色之一 |

```csharp
using System.Web.Mvc;
using Filters.Infrastructure;

namespace Filters.Controllers
{
    public class HomeController : Controller
    {
        [Authorize(Users = "admin")]
        public string Index()
        {
            return "This is the Index action on the Home controller";
        }
    }
}
```

我已经指出授权 admin 用户调用 Index 动作方法，但这里还有一个隐含条件，即该请求已经被认证。如果未指定任何用户或角色，那么任何已被认证的用户都可以使用这个动作方法。对于大多数应用程序，AuthorizeAttribute 提供的授权策略已经足够。但如果希望实现一些特殊的事情，可以像本章前面所描述的那样通过对这个类进行派生，或者用认证过滤器补充配置信息

## 使用认证过滤器

认证过滤器是 MVC5 的新特性，它对应用程序中的控制器和动作方法如何验证用户提供了细粒度的控制 认证过滤器有一个相对复杂的生命周期，它们在其他过滤器之前运行，在其他类型的过滤器被使用之前，让你定义一个将要运用认证的策略。认证过滤器也可以结合授权过滤器对请求提出认证挑战，而该认证挑战又不遵循授权策略。认证过滤器也可以在一个动作方法执行之后，但在 ActionResult 被处理之前运行

理解 IAuthenticationFilter 接口 认证过滤器实现了 IAuthenticationFilter 接口

```csharp
namespace System.Web.Mvc.Filters
{
    public interface IAuthenticationFilter
    {
        void OnAuthentication(AuthenticationContext context);
        void OnAuthenticationChallenge(AuthenticationChallengeContext context);
    }
}
```

无论对认证的请求或动作方法的授权策略的请求失败，MVC 框架都调用 OnAuthenticationChallenge 方法，并给该方法传递一个 OnAuthenticationChallengeContext 对象，该对象派生于 ControllerContext 类

AuthenticationChallengeContext 类定义的属性

| 名称             | 描述                                                         |
| :--------------- | :----------------------------------------------------------- |
| ActionDescriptor | 返回描述动作方法的 ActionDescriptor，这些动作方法上运用了过滤器 |
| Result           | 设置表示认证质疑结果的 ActionResult                          |

最重要的属性是 Result，因为它允许认证过滤器传递一个 ActionResult 给 MVC 框架，我将简要描述 **短路** 这一过程。解释认证过滤器工作机制的最好方式是通过示例。在我看来，认证过滤器最有趣的方面是，它们允许一个单一的控制器定义动作方法，而这些动作方法将以不同的方式进行验证，因此第一步是添加一个新的模拟 Google 登录的控制器

```csharp
using System.Web.Mvc;
using System.Web.Security;

namespace Filters.Controllers
{
    public class GoogleAccountController : Controller
    {
        public ActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Login(string username, string password, string returnUrl)
        {
            if (username.EndsWith("@google.com") && password == "secret")
            {
                FormsAuthentication.SetAuthCookie(username, false);
                return Redirect(returnUrl ?? Url.Action("Index", "Home"));
            }
            else
            {
                ModelState.AddModelError("", "Incorrect username or password");
                return View();
            }
        }
    }
}
```

我不想实现真实的 Google 登录，因为那意味着要深入研究第三方认证，那是他自己的主题。相反，我建立了一个可怕的攻击，只要提供密码 secret，它将认证所有以 @google.com 结尾的用户名 此刻，我的认证控制器没有连接应用程序，而是引入了认证过滤器

```csharp
using System;
using System.Web.Mvc;
using System.Web.Mvc.Filters;
using System.Web.Routing;

namespace Filters.Infrastructure
{
    public class GoogleAuthAttribute : FilterAttribute, IAuthenticationFilter
    {
        public void OnAuthentication(AuthenticationContext context)
        {
            // not implemented
        }

        public void OnAuthenticationChallenge(AuthenticationChallengeContext context)
        {
            if (context.Result == null)
            {
                context.Result = new RedirectToRouteResult(new RouteValueDictionary {
                    { "controller", "GoogleAccount"},
                    { "action", "Login"},
                    { "returnUrl", context.HttpContext.Request.RawUrl}
                });
            }
        }
    }
}
```

OnAuthenticationChallenge 方法的实现检查 AuthenticationChallengeContext 参数的 Result 属性是否已经设置值。当动作方法执行后运行过滤器时，这让我们避免质疑用户 使用 OnAuthenticationChallenge 方法来挑战用户的凭据。认证过滤器可以使用所有的 ActionResult 类型，但创建它们的 Controller 便利方法是不可用的，这就是为什么不得不使用 RouteValueDictionary 对象来指定片段值，以便能生成挑战动作方法路由的原因

实现认证检查 认证过滤器已经准备好对用户伪造的 Google 凭据提出挑战，现在可以接上剩余的行为。在运行其他类型的过滤器之前，控制器将调用 OnAuthentication 方法，以提供机会执行更大范围的认证检查。你不需要实现 OnAuthentication 方法，但我打算这样做是为了检查自己正在处理一个 Google 账号 像 AuthenticationChallengeContext 类一样，OnAuthentication 方法被传递了一个 AuthenticationContext 对象，该对象派生于 ControllerContext 也定义了一些属性

AuthenticationContext 类定义的属性

| 名称             | 描述                                                         |
| :--------------- | :----------------------------------------------------------- |
| ActionDescriptor | 返回一个描述动作方法的 ActionDescriptor，这些动作方法已经运用了过滤器 |
| Principal        | 如果用户已经被认证，返回一个识别当前用户的 IPrincipal 实现   |
| Result           | 设置一个表示认证检查结果的 ActionResult                      |

如果 OnAuthentication 为上下文对象的 Result 属性设置了一个值，那么 MVC 框架将调用 OnAuthenticationChallenge 方法。如果未设置值那么 OnAuthentication 中的一个方法将被执行 使用 OnAuthentication 方法创建一个报告用户凭据错误的结果，它可以被 OnAuthenticationChallenge 方法重载以便对用户凭据提出质疑

```csharp
using System;
using System.Security.Principal;
using System.Web.Mvc;
using System.Web.Mvc.Filters;
using System.Web.Routing;

namespace Filters.Infrastructure
{
    public class GoogleAuthAttribute : FilterAttribute, IAuthenticationFilter
    {
        public void OnAuthentication(AuthenticationContext context)
        {
            IIdentity ident = context.Principal.Identity;
            if (!ident.IsAuthenticated || !ident.Name.EndsWith("@google.com"))
            {
                context.Result = new HttpUnauthorizedResult();
            }
        }
        public void OnAuthenticationChallenge(AuthenticationChallengeContext context)
        {
            if (context.Result == null || context.Result is HttpUnauthorizedResult)
            {
                context.Result = new RedirectToRouteResult(new RouteValueDictionary {
                    { "controller", "GoogleAccount"},
                    {"action", "Login"},
                    {"returnUrl", context.HttpContext.Request.RawUrl}
                    });
            }
        }
    }
}
```

OnAuthentication 方法的实现检查使用以 @google.com 结尾的用户名的请求是否已经被认证。如请求未被认证，或使用不同种类的凭据认证，那么我将把 AuthenticationContext 对象的 Result 属性设置成一个新的 HttpUnauthorizedResult HttpUnauthorizedResult 被设置为传递给 OnAuthenticationChallenge 方法的 AuthenticationChallengeContext 对象的 Result 值

将过滤器运用于控制器

```csharp
using System.Web.Mvc;
using Filters.Infrastructure;

namespace Filters.Controllers
{
    public class HomeController : Controller
    {
        [Authorize(Users = "admin")]
        public string Index()
        {
            return "This is the Index action on the Home controller";
        }

        [GoogleAuth]
        public string List()
        {
            return "This is the List action on the Home controller";
        }
    }
}
```

List 方法用 GoogleAuth 过滤器修饰。结果是，通过内置支持表单认证对 Index 方法的访问是安全的，而通过自定义 Google 认证系统对 List 动作的访问是安全的

组合认证和授权过滤器 你可以在同一个动作方法组合认证和授权过滤器，以缩小安全策略的范围。MVC 框架将调用认证过滤器的 OnAuthentication 方法，如果请求通过了认证那么转去运行授权过滤器。如果请求没有传递给授权过滤器，那么将调用认证过滤器的 OnAuthenticationChallenge 方法，这样就可以对请求凭据的用户提出挑战

```csharp
using System.Web.Mvc;
using Filters.Infrastructure;

namespace Filters.Controllers
{
    public class HomeController : Controller
    {
        [Authorize(Users = "admin")]
        public string Index()
        {
            return "This is the Index action on the Home controller";
        }
        [GoogleAuth]
        [Authorize(Users = "bob@google.com")]
        public string List()
        {
            return "This is the List action on the Home controller";
        }
    }
}
```

Authorize 过滤器限制访问 bob@google.com 账号。如果另一个 Google 账号以该动作方法为目标，那么认证过滤器 OnAuthenticationChallenge 方法将被传递一个 AuthenticationChallengeContext 对象，该对象的 Result 属性被设置成 HttpUnauthorizedResult 类的实例 (这是我为什么在 OnAuthentication 方法中使用相同类的原因)

对使用 AccountController 认证的用户 admin，Home 控制器中的过滤器限制访问 Index 方法，而通过 GoogleAccount 控制器认证的 bob@google.com 用户，限制访问 List 方法

处理最终有疑问的请求 在动作方法执行之后，返回和执行 ActionResult 之前，MVC 框架最后调用 OnAuthenticationChallenge 方法。这给认证过滤器提供了一个机会来响应动作完成的事实，乃至修改结果 (用结果过滤器也有可能) 正是这个原因，我检查 OnAuthenticationChallenge 方法中 AuthenticationChallengeContext 对象的 Result 属性。如果没有检查，最终将再次挑战用户凭据，这是没有任何道理的，因为此刻动作方法已经被执行了 我已经找到了响应这一方法调用的唯一理由，是明确对请求的认证，当重要的动作方法需要临时高层次的凭据时 (获得高层次凭据，你可以随时进入将要被执行的动作)，这是非常有用的

```csharp
using System;
using System.Security.Principal;
using System.Web.Mvc;
using System.Web.Mvc.Filters;
using System.Web.Routing;
using System.Web.Security;

namespace Filters.Infrastructure
{
    public class GoogleAuthAttribute : FilterAttribute, IAuthenticationFilter
    {
        public void OnAuthentication(AuthenticationContext context)
        {
            IIdentity ident = context.Principal.Identity;
            if (!ident.IsAuthenticated || !ident.Name.EndsWith("@google.com"))
            {
                context.Result = new HttpUnauthorizedResult();
            }
        }
        public void OnAuthenticationChallenge(AuthenticationChallengeContext context)
        {
            if (context.Result == null || context.Result is HttpUnauthorizedResult)
            {
                context.Result = new RedirectToRouteResult(new RouteValueDictionary {
                    {"controller", "GoogleAccount"},
                    {"action", "Login"},
                    {"returnUrl", context.HttpContext.Request.RawUrl}
                    });
            }
            else
            {
                FormsAuthentication.SignOut();
            }
        }
    }
}
```

启动应用程序，并请求 Home/List，你可以看到效果。此时将提示你输入证书，如果你能认证为 bob@google.com，那么你可以执行动作方法。但如果你刷新浏览器，第二次以 List 方法为目标，将再次提示你输入证书

## 使用异常过滤器

只有在调用一个动作方法时，如果抛出未处理的异常，异常过滤器才会运行。这种异常来自以下位置：

* 另一种过滤器 (授权、动作或结果过滤器)
* 动作方法本身
* 当动作结果被执行时

创建异常过滤器 异常过滤器必须实现 IExceptionFilter 接口

```csharp
namespace System.Web.Mvc
{
    public interface IExceptionFilter
    {
        void OnException(ExceptionContext filterContext);
    }
}
```

当一个未处理的异常出现时，OnException 方法被调用。该方法参数是一个 ExceptionContext 对象，此对象派生于 ControllerContext，并提供了许多有用的属性，可以用于获取关于请求的信息

有用的 ControllerContext 属性

| 名称           | 类型            | 描述                                                         |
| :------------- | :-------------- | :----------------------------------------------------------- |
| Controller     | ControllerBase  | 返回请求的控制器对象                                         |
| HttpContext    | HttpContextBase | 提供对请求细节的访问，以及对响应的访问                       |
| IsChildAction  | bool            | 若是子动作便返回 true                                        |
| RequestContext | RequestContext  | 提供对 HttpContext 和路由数据的访问，通过其他属性，两者都是可用的 |
| RouteData      | RouteData       | 返回请求的路由数据                                           |

除了从 ControllerContext 类继承的属性外，ExceptionContext 类还定义了一些附加属性，它们在处理异常时非常有用

额外的 ExceptionContext 属性

| 名称             | 类型             | 描述                                                         |
| :--------------- | :--------------- | :----------------------------------------------------------- |
| ActionDescriptor | ActionDescriptor | 提供动作方法的细节                                           |
| Result           | ActionResult     | 用于动作方法的结果：通过将该属性设置为一个非空值，过滤器可以取消这个请求 |
| Exception        | Exception        | 未处理异常                                                   |
| ExceptionHandled | bool             | 如果另一个过滤器已经把这个异常标记为 "已处理"，则返回 true   |

被抛出的异常 (即未处理异常) 可以通过 Exception 属性进行操作。将 ExceptionHandled 属性设置为 "true"，异常过滤器可以报告它已经处理了该异常。但即使这个属性被设置为 "true"，应用于一个动作的所有异常过滤器还是会被调用。因此，良好的习惯做法，是检查另一个过滤器是否已经处理了这个问题，以免恢复另一个过滤器已经解决了的问题

提示： 如果一个动作方法的所有异常过滤器均未将 ExceptionHandled 属性设置为 "true"，MVC 框架将使用默认的 ASP.NET 异常处理器。这会显示恐怖的黄色屏幕

Result 属性由异常过滤器使用，以告诉 MVC 框架要做什么。异常过滤器的两个主要应用是对异常进行日志，并将适当的消息显示给用户。为了演示这些是如何相互配合，创建一个名为 RangeExceptionAttribute.cs 的类文件

```csharp
using System;
using System.Web.Mvc;

namespace Filters.Infrastructure
{
    public class RangeExceptionAttribute : FilterAttribute, IExceptionFilter
    {
        public void OnException(ExceptionContext filterContext)
        {
            if (!filterContext.ExceptionHandled && filterContext.Exception is ArgumentOutOfRangeException)
            {
                filterContext.Result = new RedirectResult("~/Content/RangeErrorPage.html");
                filterContext.ExceptionHandled = true;
            }
        }
    }
}
```

通过将用户浏览器重定向到 Content/RangeErrorPage.html 文件，此异常过滤器对 ArgumentOutOfRangeException 实例进行了处理。 注意，这里通过 FilterAttribute 类派生了 RangeExceptionAttribute 类，此外还实现了 IExceptionFilter 接口。为了让一个.NRT 注解属性被视为是一个 MVC 过滤器，该类必须实现 IMvcFilter 接口。你可以直接实现这一接口，但创建过滤器最简单的方法是通过 FilterAttribute 来派生你自己的类，它实现了所需要的接口，并且提供一些有用的基本特性，如处理过滤器执行的默认处理顺序

运用异常过滤器 在 Content 文件夹中创建一个 RangeErrorPage.html 文件。当异常被处理时，打算将这个我呢见递交给用户

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Range Error</title>
</head>
<body>
    <h2>Sorry</h2>
    <span>One of the arguments was out of the expected range.</span>
</body>
</html>
```

接下来对 Home 控制器添加一个动作方法，它将抛出想要演示的异常

```csharp
using System;
using System.Web.Mvc;
using Filters.Infrastructure;

namespace Filters.Controllers
{
    public class HomeController : Controller
    {
        [Authorize(Users = "admin")]
        public string Index()
        {
            return "This is the Index action on the Home controller";
        }

        [GoogleAuth]
        [Authorize(Users = "bob@google.com")]
        public string List()
        {
            return "This is the List action on the Home controller";
        }

        public string RangeTest(int id)
        {
            if (id > 100)
            {
                return String.Format("The id value is: {0}", id);
            }
            else
            {
                throw new ArgumentOutOfRangeException("id", id, "");
            }
        }
    }
}
```

如果启动应用程序，并导航到 /Home/RangeTest/50 这一 URL，便可以看到默认的异常处理情况

可以将异常过滤器运用于控制器或个别动作

```csharp
...
[RangeException]
public string RangeTest(int id)
{
    if (id > 100)
    {
        return String.Format("The id value is: {0}", id);
    }
    else
    {
        throw new ArgumentOutOfRangeException("id");
    }
}
...
```

重启应用程序，并再次导航到 /Home/RangeTest/50，便可以看到 RangeErrorPage.html 页面

使用视图来响应异常 根据你所处理的异常，显示一个静态内容页面可能是进行异常处理的一件最为简单和安全的事情。然而，这种办法对用户没什么用处。 另一种可选的办法是，使用一个视图来显示问题的细节，并为用户提供一些上下文信息和选项，以便让他们照此理出头绪

```csharp
using System;
using System.Web.Mvc;

namespace Filters.Infrastructure
{
    public class RangeExceptionAttribute : FilterAttribute, IExceptionFilter
    {
        public void OnException(ExceptionContext filterContext)
        {
            if (!filterContext.ExceptionHandled && filterContext.Exception is ArgumentOutOfRangeException)
            {
                int val = (int)(((ArgumentOutOfRangeException)filterContext.Exception).ActualValue);

                filterContext.Result = new ViewResult
                {
                    ViewName = "RangeError",
                    ViewData = new ViewDataDictionary<int>(val)
                };
                filterContext.ExceptionHandled = true;
            }
        }
    }
}
```

这里创建了一个 ViewResult 对象，并设置了 ViewName 和 ViewData 属性的值，已制定视图名称以及要传递给视图的模型对象。这些代码有点凌乱，因为直接使用了 ViewResult 对象，而不是在 Controller 类定义的动作方法中使用 View 方法 为了显示错误的详细内容，在 Views/Shared 文件夹中创建 RangeError.cshtml 文件

```csharp
@model int
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width" />
    <title>Range Error</title>
</head>
<body>
    <h2>Sorry</h2>
    <span>The value @Model was out of the expected range.</span>
    <div>
        @Html.ActionLink("Change value and try again", "Index")
    </div>
</body>
</html>
```

该视图文件使用了标准的 HTML 和 Razor 标签，向用户呈现了一个更为有用的消息。此示例应用程序的功能相当有限，因此并未向用户指出解决这一问题的任何有用信息，但我使用 ActionLink 辅助器方法创建了一个指向另一个动作方法的链接，目的是演示你可以使用一整套视图特性

避免异常错误陷阱 使用视图来显示错误消息的好处，是可以使用布局使错误消息与应用程序的其余部分一致，并生成动态的内容，帮助用户了解发生了什么错误，以及他们可以做什么 其缺点是必须彻底地测试视图，以确保不会产生其他异常

使用内建的异常过滤器 以上向你展示了如何创建异常过滤器，这是因为我认为，理解 MVC 框架幕后发生的情况是件好事。但在实际项目中通常不需要创建自己的过滤器，因为微软公司已经在 MVC 框架中包含了 HandleErrorAttribute，它是内建的 IExceptionFilter 接口实现。通过它，你可以使用其属性来指定一个异常，以及视图和布局名称

HandleErrorAttribute 属性

| 名称          | 类型   | 描述                                                         |
| :------------ | :----- | :----------------------------------------------------------- |
| ExceptionType | Type   | 由过滤器处理的异常类型。它也处理通过给定值继承而来的异常类型，但会忽略所有其他类型。其默认值是 System.Exception，含义为它将默认处理所有标准异常 |
| View          | string | 该过滤器渲染的视图模板名。如果未指定一个值，则采用 more 的 Error 值，因此，默认情况下会渲染 /Views/currentControllerName/Error.cshtml 或 /Views/Shared/Error.cshtml |
| Master        | string | 在渲染这个过滤器的视图时使用的布局名称，如果未指定一个值，该视图使用其默认布局页面 |

当遇到由 ExceptionType 指定类型的未处理异常时，此过滤器将渲染由 View 属性指定的视图 (使用默认布局或由 Master 属性指定的布局)

1. 使用内建异常过滤器要做的准备 只有在 Web.config 文件中启用了自定义错误时，HandleErrorAttribute 过滤器才会生效，这可以通过在 system.web 节点中添加一个 customErrors 属性实现

   ```xml
   ...
   <system.web>
   <compilation debug="true" targetFramework="4.5.1" />
   <httpRuntime targetFramework="4.5.1" />
   <authentication mode="Forms">
       <forms loginUrl="~/Account/Login" timeout="2880">
       <credentials passwordFormat="Clear">
           <user name="user" password="secret"/>
           <user name="admin" password="secret" />
       </credentials>
       </forms>
   </authentication>
   <customErrors mode="On" defaultRedirect="/Content/RangeErrorPage.html"/>
   </system.web>
   ...
   ```

   mode 属性的默认值是 RemoteOnly，意为在开发期间 HandleErrorAttribute 将不会拦截异常，但当将应用程序部署到产品服务器，并从另一台计算机发出请求时，HandleErrorAttribute 便生效。为了看到用户最终将看到的情况，要确保已经将这个自定义错误模式设置为 "on"。defaultRedirect 属性指定了一个默认的内容页面，在其他情况下都无法显示异常消息时，便会使用该页

2. 运用内建的异常过滤器

```csharp
...
[HandleError(ExceptionType = typeof(ArgumentOutOfRangeException),
View = "RangeError")]
public string RangeTest(int id)
{
    if (id > 100)
    {
        return String.Format("The id value is: {0}", id);
    }
    else
    {
        throw new ArgumentOutOfRangeException("id", id, "");
    }
}
...
```

在这个例子中，我重建了前述自定义过滤器一样的情况，即通过将视图显示给用户的方式来处理 ArgumentOutOfRangeException 异常 在渲染视图时，HandleError 过滤器会传递一个 HandleErrorInfo 视图模型对象，这是一个封住了异常细节的封装程序，它提供了可在视图中使用的附加信息

HandleErrorInfo 属性

| 名称           | 类型      | 描述                       |
| :------------- | :-------- | :------------------------- |
| ActionName     | string    | 返回生成异常的动作方法名称 |
| ControllerName | string    | 返回生成异常的控制器名称   |
| Exception      | Exception | 返回此异常                 |

使用这个模型对象来更新 RangeError.cshtml 视图

```csharp
@model HandleErrorInfo
@{
    ViewBag.Title = "Sorry, there was a problem!";
}
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width" />
    <title>Range Error</title>
</head>
<body>
    <h2>Sorry</h2>
    <span>
        The value @(((ArgumentOutOfRangeException)Model.Exception).ActualValue)
        was out of the expected range.
    </span>
    <div>
        @Html.ActionLink("Change value and try again", "Index")
    </div>
</body>
</html>
```

这里必须将 Model.Exception 属性值转换为 ArgumentOutOfRangeException 类型，以便能够读取 ActualValue 属性，因为 HandleErrorInfo 类是一个用来将任何异常传递给视图的通用模型对象

## 使用动作过滤器

动作过滤器是可以被用作任何目的的多用途过滤器。创建这种类型过滤器的内建类是 IActionFilter

```csharp
namespace System.Web.Mvc
{
    public interface IActionFilter
    {
        void OnActionExecuting(ActionExecutingContext filterContext);
        void OnActionExecuted(ActionExecutedContext filterContext);
    }
}
```

该接口定义了两个方法。MVC 框架在调用动作方法之前，会调用 OnActionExecuting 方法。在动作方法被调用之后，则调用 OnActionExecuted 方法

实现 OnActionExecuting 方法 OnActionExecuting 方法在调用动作方法之前被调用。可以利用这个机会来检测请求，并可以在这里取消请求、修改请求，或启动一些跨越动作调用期间的活动。传递给这个动作方法的参数是一个 ActionExecutingContext 对象，它是 ControllerContext 类的子类，并定义了两个附加属性

| 名称             | 类型             | 描述                                                         |
| :--------------- | :--------------- | :----------------------------------------------------------- |
| ActionDescriptor | ActionDescriptor | 提供动作方法的细节                                           |
| Result           | ActionResult     | 动作方法的结果；通过将该属性设置为非空值，过滤器可以取消该请求 |

你可以用过滤器来取消一个请求，这只需要将 Result 参数属性设置成一个动作结果即可。为了对此进行演示，在 Infrastructure 文件夹下创建一个名为 CustomActionAttribute.cs 的自定义动作过滤器

```csharp
using System.Web.Mvc;

namespace Filters.Infrastructure
{
    public class CustomActionAttribute : FilterAttribute, IActionFilter
    {
        public void OnActionExecuting(ActionExecutingContext filterContext)
        {
            if (filterContext.HttpContext.Request.IsLocal)
            {
                filterContext.Result = new HttpNotFoundResult();
            }
        }
        public void OnActionExecuted(ActionExecutedContext filterContext)
        {
            // not yet implemented
        }
    }
}
```

在这个例子中，用 OnActionExecuting 方法检查请求是否来自本地机器，如果是，便对用户返回一个 "404—— 未找到" 的响应

为了创建一个动作过滤器，并不需要全部实现 IActionFilter 接口中定义的两个方法。要小心的是不要抛出 NotImplementedException (未实现异常)，当实现一个接口时，Visual Studio 会将这种异常添加到一个类中 ——MVC 框架对动作过滤器中的两个方法都会调用，如果有异常抛出，便会触发异常过滤器。要是不需要把任何逻辑添加到某一个方法，那么只需让它空着即可

动作过滤器的运用和其他注解属性一样

```csharp
...
[CustomAction]
public string FilterTest()
{
    return "This is the FilterTest action";
}
...
```

通过启动应用程序，并导航到 /Home/FilterTest，可以对此过滤器进行测试

实现 OnActionExecuted 方法 也可以用这种过滤器来执行一些跨越动作方法的任务 (在动作方法前后执行的任务)。作为一个简单的例子，在文件夹 Infrastructure 中创建了一个名称为 ProFileActionAttribute 的新类，并用它来测量执行动作方法所消耗的时间

```csharp
using System.Diagnostics;
using System.Web.Mvc;

namespace Filters.Infrastructure
{
    public class ProfileActionAttribute : FilterAttribute, IActionFilter
    {
        private Stopwatch timer;
        public void OnActionExecuting(ActionExecutingContext filterContext)
        {
            timer = Stopwatch.StartNew();
        }

        public void OnActionExecuted(ActionExecutedContext filterContext)
        {
            timer.Stop();
            if (filterContext.Exception == null)
            {
                filterContext.HttpContext.Response.Write(
                string.Format("<div>Action method elapsed time: {0:F6}</div>",
                timer.Elapsed.TotalSeconds));
            }
        }
    }
}
```

这个例子用 OnActionExecuting 方法启动了一个计时器 (使用 System.Diagnostics 命名空间中的高解析度 Stopwatch 计时器类)。动作方法完成之后，会调用 OnActionExecuted 方法。 将这一注解属性运用于 Home 控制器 (此时已经删除了之前创建的过滤器，以便不会对本地请求进行重定向)

```csharp
...
[ProfileAction]
public string FilterTest()
{
    return "This is the ActionFilterTest action";
}
...
```

启动应用程序，并导航到 /Home/FilterTest，将看到结果

提示：浏览器中所显示的资料信息在动作方法的结果之前。这是因为，动作过滤器是在方法完成之后，但在结果被处理之前执行的

传递给 OnActionExecuted 方法的参数是 ActionExecutedContext 对象。这个类定义了一些附加属性，Exception 属性返回动作方法所抛出的异常情况，而 ExceptionHandled 属性指示另一个过滤器是否已经处理了这个异常

| 名称             | 类型             | 描述                                                         |
| :--------------- | :--------------- | :----------------------------------------------------------- |
| ActionDescriptor | ActionDescriptor | 提供动作方法的细节                                           |
| Canceled         | bool             | 如果该动作已经被另一个过滤器取消，返回 true                  |
| Exception        | Exception        | 返回由另一个过滤器或动作方法抛出的异常                       |
| ExceptionHandled | bool             | 如果异常已经被处理，返回 true                                |
| Result           | ActionResult     | 动作方法的结果；通过把这个属性设置为一个非空值，过滤器可以取消这个请求 |

如果另一个过滤器取消了这个请求 (通过对 Result 属性设置一个值的办法)，从 OnActionExecuting 方法被调用的时刻开始，Canceled 属性便会返回 "true"。这仍然会调用 OnActionExecuted 方法，但只是为了清理和释放已经被占用的资源

## 使用结果过滤器

结果过过滤器是多用途过滤器，它会对动作方法所产生的结果进行操作，结果过滤器实现 IResultFilter 接口

```csharp
namespace System.Web.Mvc
{
    public interface IResultFilter
    {
        void OnResultExecuting(ResultExecutingContext filterContext);
        void OnResultExecuted(ResultExecutedContext filterContext);
    }
}
```

当将结果过滤器运用于一个动作方法时，会在动作方法返回动作结果之时，但在执行该动作结果之前，调用 (结果过滤器的) OnResultExecuting 方法。动作结果被执行之后，会调用 OnResultExecuted 方法 发送给这些方法的参数分别是 ResultExecutingContext 和 ResultExecutedContext 对象，它们十分类似于动作过滤器的对应参数。这两种过滤器定义了同样的属性，也具有同样的效果。为了演示一个简单的结果过滤器，在 Infrastructure 文件夹中创建了一个名称为 ProFileResultAttribute.cs 的新类

```csharp
using System.Diagnostics;
using System.Web.Mvc;

namespace Filters.Infrastructure
{
    public class ProfileResultAttribute : FilterAttribute, IResultFilter
    {
        private Stopwatch timer;
        public void OnResultExecuting(ResultExecutingContext filterContext)
        {
            timer = Stopwatch.StartNew();
        }
        public void OnResultExecuted(ResultExecutedContext filterContext)
        {
            timer.Stop();
            filterContext.HttpContext.Response.Write(
            string.Format("<div>Result elapsed time: {0:F6}</div>",
            timer.Elapsed.TotalSeconds));
        }
    }
}
```

该结果过滤器是对之前创建的动作过滤器的补充，它测量了执行结果所花费的时间。将这一过滤器运用于 Home 控制器

```csharp
...
[ProfileAction]
[ProfileResult]
public string FilterTest()
{
    return "This is the ActionFilterTest action";
}
...
```

启动应用程序，并导航到 /Home/FilterTest 可以看出，两个过滤器都在发送给浏览器的响应中加入了数据 (结果过滤器的输出会显示在动作方法产生的结果之后)

使用内建的动作过滤器和结果过滤器 MVC 框架包含一个内建的类，可以用来创建动作过滤器和结果过滤器。这个类的名称为 ActionFilterAttribute

```csharp
public abstract class ActionFilterAttribute : FilterAttribute, IActionFilter, IResultFilter
{
    public virtual void OnActionExecuting(ActionExecutingContext filterContext)
    {
    }
    public virtual void OnActionExecuted(ActionExecutedContext filterContext)
    {
    }
    public virtual void OnResultExecuting(ResultExecutingContext filterContext)
    {
    }
    public virtual void OnResultExecuted(ResultExecutedContext filterContext)
    {
    }
}
```

使用这个类的唯一好处是不需要重写和实现不打算使用的方法 —— 除此以外，直接实现过滤器接口没有任何好处 为了演示 ActionFilterAttribute 类的使用在 Infrastructure 文件夹下创建一个名称为 ProfileAllAttribute.cs 的文件

```csharp
using System.Diagnostics;
using System.Web.Mvc;

namespace Filters.Infrastructure
{
    public class ProfileAllAttribute : ActionFilterAttribute
    {
        private Stopwatch timer;

        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            timer = Stopwatch.StartNew();
        }

        public override void OnResultExecuted(ResultExecutedContext filterContext)
        {
            timer.Stop();
            filterContext.HttpContext.Response.Write(
            string.Format("<div>Total elapsed time: {0:F6}</div>",
            timer.Elapsed.TotalSeconds));
        }
    }
}
```

ActionFilterAttribute 类实现了 IActionFilter 和 IResultFilter 接口，这意味着即使未重写所有方法，MVC 框架也会把派生类作为两种过滤器的类型来处理 将该过滤器用于 Home 控制器

```csharp
...
[ProfileAction]
[ProfileResult]
[ProfileAll]
public string FilterTest()
{
    return "This is the FilterTest action";
}
...
```

启动应用程序，并导航到 /Home/FilterTest 可以看到效果

## 使用其他过滤器特性

无注解属性的过滤器 使用过滤器的常规办法是运用注解属性。然而还有另一种方式 ——Controller 了也实现了 IAuthenticationFilter、IAuthorizationFilter、IActionFilter、IResultFilter 和 IExceptionFilter 接口。它还对前面所看到的每一个 OnXXX 方法，如 OnAuthorization 和 OnException 等，提供了空白虚拟实现。更新 Home 控制器，以便使用这一特性

```csharp
using System;
using System.Diagnostics;
using System.Web.Mvc;
using Filters.Infrastructure;

namespace Filters.Controllers
{
    public class HomeController : Controller
    {
        private Stopwatch timer;

        [Authorize(Users = "admin")]
        public string Index()
        {
            return "This is the Index action on the Home controller";
        }

        [GoogleAuth]
        [Authorize(Users = "bob@google.com")]
        public string List()
        {
            return "This is the List action on the Home controller";
        }

        [HandleError(ExceptionType = typeof(ArgumentOutOfRangeException), View = "RangeError")]
        public string RangeTest(int id)
        {
            if (id > 100)
            {
                return String.Format("The id value is: {0}", id);
            }
            else
            {
                throw new ArgumentOutOfRangeException("id", id, "");
            }
        }

        public string FilterTest()
        {
            return "This is the FilterTest action";
        }

        protected override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            timer = Stopwatch.StartNew();
        }

        protected override void OnResultExecuted(ResultExecutedContext filterContext)
        {
            timer.Stop();
            filterContext.HttpContext.Response.Write(
            string.Format("<div>Total elapsed time: {0}</div>",
            timer.Elapsed.TotalSeconds));
        }
    }
}
```

这里已经删除了 FilterTest 动作方法上的过滤器，因为已经不需要它们了 ——Home 控制器会将资料信息添加到动作方法的响应中

当你要创建一个基类，以派生项目中的多个控制器时，这项技术是有用的。整个过滤点是，在一个可重用的位置，放置整个应用程序所需要的代码。因此，在一个不作为控制器基类的类中使用这些方法就没有多大意义了

提示：我偏爱于使用注解属性。我喜欢控制器逻辑与过滤器逻辑之间的这种分离

使用全局过滤器 全局过滤器被运用于应用程序的所有动作方法。设置全局过滤器有一定约定，当你使用 MVC 项目模板，但必须使用 "Empty" 模板手动建立时，Visual Studio 将自动创建全局过滤器 在添加到 `App_Start` 文件夹的类中进行应用程序范围的配置，这是之前为什么在 `App_Start/RouteConfig.cs` 文件中定义路由的原因。为了创建等效的过滤器，在 `App_Start` 文件夹中添加一个名为 FilterConfig.cs 的新文件

```csharp
using System.Web;
using System.Web.Mvc;

namespace Filters
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
```

这和 Visual Studio 为 MVC 模板创建的内容相同。FilterConfig 类定义了一个名为 RegisterGlobalFilters 的静态方法，它接收一组全局过滤器，这组全局过滤器被表示为一个 GlobalFilterCollection 对象，这样便能向其中添加新的过滤器 这个文件中有两个约定要注意。第一个是在 Filters 命名空间而不是在 Filters.App_Start 中定义 FilterConfig 类，当 Visual Studio 创建文件时将要使用它。第二个是 HandleError 过滤器，本章前面描述过，通过调用 GlobalFilterCollection 对象的 Add 方法，它总是被定义为全局过滤器

注： 你不需要在全局范围内建立 HandleError 过滤器，但它定义了默认的 MVC 异常处理策略。当一个未处理的异常发生时，它将渲染 /Views/Shared/Error.cshtml 视图。这条异常处理策略在开发期间是默认禁用的。在本章的 "创建异常过滤器" 小节中，已对如何在 Web.config 文件中启用这条异常过滤策略进行了说明

在全局范围内运用 ProfileAll 过滤器，并使用同样的方法调用建立 HandleError 过滤器

```csharp
using System.Web;
using System.Web.Mvc;
using Filters.Infrastructure;

namespace Filters
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
            filters.Add(new ProfileAllAttribute());
        }
    }
}
```

提示： 通过创建过滤器类的实例，我在全局范围内注册了过滤器，这意味着我要引用类名，包括 Attribute 后缀。当将过滤器作为属性运用时，可以省略 Attribute，但直接创建类实例时必须包含这个后缀

下一步是确保，当应用程序启动时，必须调用 Global.asax 文件的 FilterConfig.RegisterGlobalFilters 方法

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Filters
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
        }
    }
}
```

为了演示全局过滤器，这里创建一个名称为 Customer 的新控制器

```csharp
using System.Web.Mvc;

namespace Filters.Controllers
{
    public class CustomerController : Controller
    {
        public string Index()
        {
            return "This is the Customer controller";
        }
    }
}
```

启动应用程序，并导航到 /Customer。即使并未在控制器上直接运用过滤器，全局过滤器还是添加了资料信息

对过滤器执行排序 前面已经解释过了，过滤器是按类型执行的，其顺序是 "认证过滤器 → 授权过滤器 → 动作过滤器 → 结果过滤器"。如果有未处理异常，框架在任一阶段都会执行异常过滤器。然而，在每一种类型中，你可以对过滤器的使用顺序进行控制。在 Infrastructure 文件夹中添加一个名为 SimpleMessageAttribute.cs 的过滤器，以演示对过滤器的执行进行排序

```csharp
using System;
using System.Web.Mvc;

namespace Filters.Infrastructure
{
    [AttributeUsage(AttributeTargets.Method, AllowMultiple = true)]
    public class SimpleMessageAttribute : FilterAttribute, IActionFilter
    {
        public string Message { get; set; }
        public void OnActionExecuting(ActionExecutingContext filterContext)
        {
            filterContext.HttpContext.Response.Write(
            string.Format("<div>[Before Action: {0}]<div>", Message));
        }
        public void OnActionExecuted(ActionExecutedContext filterContext)
        {
            filterContext.HttpContext.Response.Write(
            string.Format("<div>[After Action: {0}]<div>", Message));
        }
    }
}
```

该过滤器会在 OnActionExecuting 和 OnActionExecuted 方法被调用时，将一条信息写到响应，用 Message 属性 (在运用过滤器时会设置这一属性值) 指定了消息内容。可以将该过滤器的多个实例运用于一个动作方法 (注意，在 AttributeUsage 注解属性中，AllowMultiple 属性被设置为 "true")

```csharp
using System.Web.Mvc;
using Filters.Infrastructure;
namespace Filters.Controllers
{
    public class CustomerController : Controller
    {
        [SimpleMessage(Message = "A")]
        [SimpleMessage(Message = "B")]
        public string Index()
        {
            return "This is the Customer controller";
        }
    }
}
```

该示例用不同的消息创建了两个过滤器：一个消息为 A，另一个消息为 B。虽然可以使用两个不同的过滤器，但这种办法让我可以演示通过属性配置全局过滤器。当运行程序并导航到 /Customer 时，可以得到结果： MVC 框架在 A 过滤器之前执行 B 过滤器，但也可以按另一种方式执行。MVC 框架不会保证任何特定的顺序或执行过程。大多数情况下，执行顺序是无关紧要的。但当有必要时，可以使用 Order 属性

```csharp
using Filters.Infrastructure;

namespace Filters.Controllers
{
    public class CustomerController : Controller {
        [SimpleMessage(Message = "A", Order = 1)]
        [SimpleMessage(Message = "B", Order = 2)]
        public string Index()
        {
            return "This is the Customer controller";
        }
    }
}
```

Order 参数取一个 int 值，MVC 框架以升序执行这些过滤器。该示例给 A 过滤器指定了一个最小值，因此框架将首先执行 A 过滤器

注意： OnActionExecuting 方法是按指定顺序执行的，但 OnActionExecuted 方法却以相反顺序执行。在动作方法之前，MVC 框架执行过滤器时会建立一个过滤器堆栈，并在随后释放这个堆栈，这种释放行为是不可改变的

如果不指定 Order 属性的值，那么它被赋为默认的 "-1" 值。其含义为，如果把有 Order 值和没有 Order 值的过滤器混合在一起那些没有值的过滤器将先执行，因为它们的 Order 值最低 如果同类型的多个过滤器 (比如动作过滤器) 具有相同的 Order 值 (比如 "1")，那么 MVC 框架会基于过滤器被运用的位置来决定执行属性。全局过滤器首先被执行，然后是运用于控制器类的过滤器，最后是运用于动作方法的过滤器

提示： 异常过滤器的执行顺序是倒过来的。如果在控制器和动作方法上以同样的 Order 值运用异常过滤器，动作方法上的 (异常) 过滤器首先被执行。带有同样 Order 值的全局异常过滤器最后被执行

重载过滤器 有机会在全局或控制器级运用过滤器，但对特定的动作方法要使用不同的过滤器。为了演示这一观点，更新了 SimpleMessage 过滤器，这样它能运用到整个控制器

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Filters.Infrastructure
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, AllowMultiple = true)]
    public class SimpleMessageAttribute : FilterAttribute, IActionFilter
    {
        public string Message { get; set; }

        public void OnActionExecuting(ActionExecutingContext filterContext)
        {
            filterContext.HttpContext.Response.Write(
            string.Format("<div>[Before Action: {0}]<div>", Message));
        }

        public void OnActionExecuted(ActionExecutedContext filterContext)
        {
            filterContext.HttpContext.Response.Write(
            string.Format("<div>[After Action: {0}]<div>", Message));
        }
    }
}
```

这个修改意味着，过滤器可以运用到单独的动作方法或整个控制器类

```csharp
using System.Web.Mvc;
using Filters.Infrastructure;

namespace Filters.Controllers
{
    [SimpleMessage(Message = "A")]
    public class CustomerController : Controller
    {
        public string Index()
        {
            return "This is the Customer controller";
        }

        [SimpleMessage(Message = "B")]
        public string OtherAction()
        {
            return "This is the Other Action in the Customer controller";
        }
    }
}
```

我对控制器类运用了 SimpleMessage 过滤器，这意味着任何一个动作方法被调用时，消息 A 将被添加到响应。我添加了一个新的 OtherAction 方法，并再次向其运用了 SimpleMessage 过滤器，但这次消息是 B 默认情况下，出现的问题是 OtherAction 方法在控制器和方法级都受到了过滤器应用的影响。启动应用程序并导航到 /Customer/OtherAction，你将看到它是如何工作的 (先执行消息 A 过滤器，后执行消息 B 过滤器) 如果你想要动作方法仅受直接运用在它上面的过滤器影响，那么你可以使用 **过滤器重载** 。过滤器重载会告诉 MVC 框架忽略定义在更高级别 (例如，控制器或全局) 的过滤器。过滤器重载是实现 IOverrideFilter 接口

```csharp
namespace System.Web.Http.Filters
{
    public interface IOverrideFilter : IFilter
    {
        Type FiltersToOverride { get; }
    }
}
```

FiltersToOverride 方法返回将要被重载的过滤器类型。在此示例中，我感兴趣的是动作过滤器，为此我在 Infrastructure 文件夹中创建了 CustomOverrideActionFiltersAttribute.cs 文件。并实现了 FiltersToOverride 方法，这样新的属性重载 IActionFilter 类型

注意： 在 System.Web.Mvc.Filters 命名空间，MVC 框架有一些内建的过滤器重载，如 OverrideAuthenticationAttribute、OverrideActionFiltersAttribute 等。在我写本章时，这些过滤器不工作，这是因为它们派生自 Attribute 而不是 FilterAttribute。我认为这将会在以后的版本中得到解决，但同时你应该创建自定义过滤器重载注解属性

```csharp
using System;
using System.Web.Mvc;
using System.Web.Mvc.Filters;

namespace Filters.Infrastructure
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method,
    Inherited = true, AllowMultiple = false)]
    public class CustomOverrideActionFiltersAttribute : FilterAttribute,
    IOverrideFilter
    {
        public Type FiltersToOverride
        {
            get { return typeof(IActionFilter); }
        }
    }
}
```

将这个过滤器运用到控制器上，以阻止全局和控制器级动作过滤器产生影响

```csharp
using System.Web.Mvc;
using Filters.Infrastructure;

namespace Filters.Controllers
{
    [SimpleMessage(Message = "A")]
    public class CustomerController : Controller
    {
        public string Index()
        {
            return "This is the Customer controller";
        }

        [CustomOverrideActionFilters]
        [SimpleMessage(Message = "B")]
        public string OtherAction()
        {
            return "This is the Other Action in the Customer controller";
        }
    }
}
```

只有直接运用到 OtherAction 方法上的 SimpleMessage 注解属性在运行

# 第 19 章 控制器可扩展性

本章打算演示使用控制器的一些高级特性。首先考查引导动作方法执行过程的请求处理管道，并演示可以对这种过程进行控制的不同方式。组件之间的基本流程控制： Request → Routing → Controller Factory → Controller → Action Invoker → Action Method → Response

本章第一部分关注的是 **控制器工厂 (Controller Factory)** 和 **动作调用器 (Action Invoker)** 。这些组件的名称暗示了它们的作用。控制器工厂负责创建对请求进行服务的控制器实例，动作调用器负责查找并调用控制器类中的动作方法。MVC 框架含有这两个组件的默认实现，我将演示如何配置和控制它们的行为，也将演示如何完全替换这些组件，并使用自定义逻辑

## 准备示例项目

## 创建自定义控制器工厂

同 MVC 框架的大部分情况一样，要理解控制器工厂如何工作，最好的办法是创建一个自定义的实现。但我不建议你在实际项目中采用这种办法，因为通过对内建工厂进行扩展，有更容易的方式创建自定义行为 —— 但这里是演示 MVC 框架如何创建控制器实例的一种很好的方式。控制器工厂是由 IControllerFactory 接口定义的

```csharp
using System.Web.Routing;
using System.Web.SessionState;

namespace System.Web.Mvc
{
    public interface IControllerFactory
    {
        IController CreateController(RequestContext requestContext, string controllerName);

        SessionStateBehavior GetControllerSessionBehavior(RequestContext requestContext, string controllerName);

        void ReleaseController(IController controller);
    }
}
```

在接下的小节中，我将创建一个简单的控制器工厂，并带你完成 IControllerFactory 接口中各个方法的实现。首先在 Infrastructure 文件夹中创建一个名称为 CustomControllerFactory.cs 的自定义控制器工厂

```csharp
using System;
using System.Web.Mvc;
using System.Web.Routing;
using System.Web.SessionState;
using ControllerExtensibility.Controllers;

namespace ControllerExtensibility.Infrastructure
{
    public class CustomControllerFactory : IControllerFactory
    {
        public IController CreateController(RequestContext requestContext, string controllerName)
        {
            Type targetType = null;
            switch (controllerName)
            {
                case "Product":
                    targetType = typeof(ProductController);
                    break;
                case "Customer":
                    targetType = typeof(CustomerController);
                    break;
                default:
                    requestContext.RouteData.Values["controller"] = "Product";
                    targetType = typeof(ProductController);
                    break;
            }
            return targetType == null ? null :
            (IController)DependencyResolver.Current.GetService(targetType);
        }

        public SessionStateBehavior GetControllerSessionBehavior(RequestContext requestContext, string controllerName)
        {
            return SessionStateBehavior.Default;
        }

        public void ReleaseController(IController controller)
        {
            IDisposable disposable = controller as IDisposable;
            if (disposable != null)
            {
                disposable.Dispose();
            }
        }
    }
}
```

这个接口中最重要的方法是 CreateController，当 MVC 框架需要控制器对请求进行服务时，便会调用这个方法。该方法的参数是一个 RequestContext 对象，它让工厂能够检测请求的细节；另一个参数是一个字符串，它包含了从路由的 URL 那里所得到的 controller 值

RequestContext 属性

| 名称        | 类型            | 描述                     |
| :---------- | :-------------- | :----------------------- |
| HttpContext | HttpContextBase | 提供关于 HTTP 请求的信息 |
| RouteData   | RouteData       | 提供与请求匹配的路由信息 |

我不建议这样创建自定义控制器的原因之一是，在 Web 应用程序中查找控制器类并对它们实例化是复杂的 示例项目中只有两个控制器，并且我打算直接对它们进行实例化，意即将类名强行写入控制器工厂 —— 对于实际项目而言，这显然不是一个好主意，但是它可以让我们避开大量的复杂性 CreateController 方法的目的是，创建能够对当前请求进行处理的控制器实例。至于该怎么做，没有任何限制 —— 唯一的规则是，作为该方法的结果，你必须返回一个实现 IController 接口的对象 有一些本书曾经使用过的约定，因为这也是编写默认控制器工厂的方式。作为示例，我在代码中实现了其中的一个约定 —— 意即在接收到一个对控制器的请求时，将 Controller 追加到类的名称之后，以便对 Product 的请求会形成 ProductController 类的实例化 在编写控制器工厂时，你可以自行决定遵循 MVC 框架约定，或者放弃它们而创建适合于自己项目需要的约定。如果只是单纯为了创建自己的约定，我不认为这是明智的做法，但这对于理解 MVC 框架的灵活性是有用的

处理备用控制器 自定义控制器工厂必须返回 IController 接口的一个实现，以其作为 CreateController 方法的返回结果 —— 否则会向用户显示错误。这意味着，当你处理的请求不以项目中的任何一个控制器为目标时，需要有一个备用位置。你可以创建任何你喜欢的策略来处理这种情况。例如，可以定义一个特定的控制器来渲染错误消息，或者像我一样将该请求映射到一个众所周知的总是存在的控制器 在上述项目中，当碰到一个与任何控制器都不匹配的请求时，便以 ProductController 类为目标。在一个实际项目中，这可能不是要做的最好办法，但它表明，控制器工厂对请求进行解析时，有充分的灵活性。然而，你需要了解 MVC 框架中的其它切入点如何操作 默认情况下，MVC 框架会根据路由数据中 controller 的值来选择视图，而不是控制器类的名称 (注意，如果请求是一个不正确的 URL，则路由数据中 controller 的值所指的就可能是一个不存在的控制器)。因此在这个实例中，如果希望备用位置按照控制器名称组织的约定来使用这个视图，就需要改变 controller 路由属性的值

```csharp
...
requestContext.RouteData.Values["controller"] = "Product";
...
```

这一改变将导致 MVC 框架搜索备用控制器相关的视图，而不是用户请求的视图 这里有两个重要的切入点：

1. 控制器工厂不仅要独自负责将请求与控制器进行匹配，而且它还可以对请求进行修改，以改变请求处理管道中后续步骤的行为。这是 MVC 框架强有力的要素和关键特性
2. 尽管在控制器工厂中可以自由选择遵循哪种约定，但你仍然需要了解 MVC 框架其他部分的约定 —— 并且，因为其他组件也可以改用自定义代码，因此遵循尽可能多的约定，以允许组件彼此独立地开发和使用是有意义的

实例化控制器类 如何对控制器类进行实例化并没有特别的规定，但使用依赖性解析器是一个良好的做法。它让你能够在自定义控制器工厂中专注于请求与控制器类之间的映射，而将依赖性注入这样的问题留下来单独进行处理，并用于整个应用程序。从以下代码可以看出如何使用 DependencyResolver 类去创建控制器类实例

```csharp
...
return targetType == null ? null : (IController) DependencyResolver.Current.GetService(targetType);
...
```

静态的 DependencyResolver.Current 属性返回 IDependencyResolver 接口的实现，该接口定义了 GetService 方法，为方法传递的是一个 System.Type 对象，又转而得到了它的一个实例。GetService 方法还有一个强类型的版本，但是因为事先不知道要处理的是什么类型，因此这里只能使用这个返回 Object 的版本，然后将它明确地转换成 IController

注意： 我没有使用依赖性解析器来解决类之间的紧耦合问题。相反我让它创建类型的实例，以便它可以检查控制器类声明，并解决它们的依赖关系。本章没有建立 Ninject，这意味着将使用默认的解析器，并通过寻找无参数的构造函数调用它们来简单地创建实例。然而，通过建立控制器工厂以使用 DependencyResolver 类，我确信可以无缝地利用更先进的依赖解析器，例如往项目中添加的 Ninject

实现其他接口方法 IControllerFactory 接口中的另外两个方法如下：

* GetControllerSessionBehavior 方法由 MVC 框架用来确定是否应该为控制器维护会话数据。本章稍后的 "使用无会话控制器" 小节将会回到这一论题
* 当不再需要 CreateController 方法创建的控制器对象时，会调用 ReleaseController 方法。在上述实现中，我检查了这个类是否实现 IDisposable 接口。如果是，便调用 Dispose 方法，以便释放那些可以被释放的资源

GetControllerSessionBehavior 和 ReleaseController 方法的实现适用于大多数项目，并可以照搬使用 (但你需要阅读本章稍后的 "使用无会话控制器" 小节，以确保你了解其中的可用选项)

注册自定义控制器工厂 通过 ControllerBuilder 类，我们可以告诉 MVC 框架使用这个自定义控制器工厂。在应用程序启动时，必须注册自定义控制器工厂，即在 Global.asax.cs 文件中使用 Application_Start 方法

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using ControllerExtensibility.Infrastructure;

namespace ControllerExtensibility
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            RouteConfig.RegisterRoutes(RouteTable.Routes);

            ControllerBuilder.Current.SetControllerFactory(new CustomControllerFactory());
        }
    }
}
```

一旦注册了控制器工厂，将由它负责处理应用程序接收到的所有请求。启动应用程序，就可以看到上述自定义工厂的效果

## 使用内建的控制器工厂

我向你展示了如何创建自定义控制器工厂，因为它是演示控制器工厂做什么及其工作机制的最有效方式。然而，对于大多数应用程序，内建的控制器工厂类 DefaultControllerFactory，是完全足够的。当它从路由系统接收到一个请求时，该工厂类考察路由数据，找到 controller 属性的值，并试图在这个 Web 应用程序中找到满足以下条件的类：

* 这个类必须是一个 public 类
* 这个类必须是一个具体类 (不是抽象类)
* 这个类必须没有泛型 (Generic) 参数
* 类名必须以 Controller 结尾
* 这个类必须实现 IController 接口

DefaultControllerFactory 类维护着应用程序中这些类的一个列表，因此，一个请求到达时，它并不需要每次都执行一个搜索。如果找到一个合适的类，便用控制器激活器 (Controller ACtivator) 创建一个实例，控制器的工作便完成了。如果没有匹配的控制器，那么便不能对该请求做进一步处理 要注意 DefaultControllerFactory 类是如何遵循 "约定优于配置" 模式的。你不需要在配置文件中注册控制器，因为这个工厂会替你找到它们。你需要做的全部工作只是：创建满足这个工厂查寻条件的类 如果希望创建自定义控制器工厂的行为，可以对默认工厂的设置进行配置或重写它的一些方法。这样便能够建立有用的 "约定优于配置" 行为，而不需要重新创建它 —— 前面曾提到过，这是一个相当复杂而痛苦的工作

命名空间优先排序 之前曾演示过，在创建路由时，如何安排一个或多个命名空间的优先级。这是为了解决控制器的多义性问题，即同名控制器类位于不同命名空间的情况。而处理命名空间列表并对其优先级排序的正是这个 DefaultControllerFactory

提示： Global 优先级会被路由优先级所重写。意即你可以定义一个全局策略，然后在必要时定制个别路由

如果应用程序有横夺路由，全局性地指定命名空间优先级可能会更方便一些，以使这种优先级能够应用于所有路由。以下示例演示在 Global.asax 文件的 `Application_Start` 方法中做这件事 (这是我放置这些语句的地方，但如果你愿意，也可以使用 `App_Start` 文件夹中的 RouteConfig.cs 文件)

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using ControllerExtensibility.Infrastructure;

namespace ControllerExtensibility
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            ControllerBuilder.Current.DefaultNamespaces.Add("MyControllerNamespace");
            ControllerBuilder.Current.DefaultNamespaces.Add("MyProject.*");
        }
    }
}
```

用静态的 ControllerBuilder.Current.DefaultNamespaces.Add 方法来添加应用程序应当给予优先的命名空间。所添加的命名空间顺序，并不暗示搜索顺序或相对优先级 —— 所有由 Add 方法定义的命名空间都一视同仁，而优先级是相对那些没有被 Add 方法指定的命名空间的。这意味着，如果控制器工厂在 Add 方法定义的命名空间中找不到合适的控制器类，那么将搜索整个应用程序

注意： 在以上示例中，第二条 Add 语句中使用了 `*`。这让我们能够指定控制器工厂应该查找 MyProject 命名空间及其包含的任意子命名空间。这看上去像正则表达式语法，但其实不是，你可以使用 ".*" 作为命名空间的结尾，但在 Add 方法中不能使用任何其他正则表达式语法

定制 DefaultControllerFactory 的控制器实例化 定制 DefaultControllerFactory 类如何实例化控制器控制器对象有许多方式。但到目前为止，对于控制器工厂进行定制的通常原因是为了添加对 DI 的支持。有几种不同的办法，最适合的技术取决于你在应用程序的其他地方如何使用 DI

1. 使用依赖性解析器 在依赖性解析器 (Dependency Resolver) 可用时，DefaultControllerFactory 类将用它来创建控制器。DefaultControllerFactory 会调用 IDependencyResolver.GetService 方法，以请求控制器实例，这为解析并注入依赖性提供了机会
2. 使用控制器激活器 也可以通过创建一个控制器激活器的办法，将 DI 引入到控制器中。通过实现 IControllerActivator 接口，可以创建激活器

   ```csharp
   namespace System.Web.Mvc
   {
       using System.Web.Routing;
       public interface IControllerActivator
       {
           IController Create(RequestContext requestContext, Type controllerType);
       }
   }
   ```

   该接口含有一个名称为 Create 的方法，为它传递了一个描述请求的 RequestContext 对象和一个指定对哪个控制器类进行实例化的类型 (Type) 为了演示这个接口的实现，在 Infrastructure 文件夹下创建一个名称为 CustomControllerActivator.cs 的自定义控制器激活器

   ```csharp
   using System;
   using System.Web.Mvc;
   using System.Web.Routing;
   using ControllerExtensibility.Controllers;
   
   namespace ControllerExtensibility.Infrastructure
   {
       public class CustomControllerActivator : IControllerActivator
       {
           public IController Create(RequestContext requestContext, Type controllerType)
           {
               if (controllerType == typeof(ProductController))
               {
                   controllerType = typeof(CustomerController);
               }
               return (IController)DependencyResolver.Current.GetService(controllerType);
           }
       }
   }
   ```

   此 IControllerActivator 实现相当简单 —— 如果请求的是 ProductController 类，将以 CustomerController 类的实例作为其响应。这不是实际项目中要做的事情，但它演示了如何利用 IControllerActivator 接口在控制器工厂和依赖性解析器之间截取请求 为了使用自定义激活器，需要为 DefaultControllerFactory 的构造器传递一个实现类的实例，而且需要在 Global.asax 文件的 Application_Start 方法中注册这一结果

   ```csharp
   using System;
   using System.Collections.Generic;
   using System.Linq;
   using System.Web;
   using System.Web.Mvc;
   using System.Web.Routing;
   using ControllerExtensibility.Infrastructure;
   
   namespace ControllerExtensibility
   {
       public class MvcApplication : System.Web.HttpApplication
       {
           protected void Application_Start()
           {
               AreaRegistration.RegisterAllAreas();
               RouteConfig.RegisterRoutes(RouteTable.Routes);
   
               ControllerBuilder.Current.SetControllerFactory(new DefaultControllerFactory(new CustomControllerActivator()));
           }
       }
   }
   ```

   启动应用程序，并导航到 /Product，便可以看到这一自定义激活器的效果。路由将以 Product 控制器为目标，而 DefaultControllerFactory 会要求激活器对 ProductFactory 类进行实例化 —— 但我创建的激活器截取了这一请求，而创建 CustomerController 类的实例代替

3. 重写 DefaultControllerFactory 方法 你可以重写 DefaultControllerFactory 类中的方法，来定制控制器的创建

   可重写的 DefaultControllerFactory 方法

   | 方法                  | 结果        | 描述                                                         |
   | :-------------------- | :---------- | :----------------------------------------------------------- |
   | CreateController      | IController | IControllerFactory 接口的 CreateController 方法的实现。默认情况下，这个方法调用 GetControllerType 来确定应该实例化哪个类型，然后通过将结果传递给 GetControllerInstance 方法，来获得一个控制器对象 |
   | GetControllerType     | Type        | 将请求映射到控制器类型。这是实现本章前面所列出的大部分条件的地方 |
   | GetControllerInstance | IController | 创建指定类型的一个实例                                       |

## 创建自定义动作调用器

一旦控制器工厂创建了一个 (控制器) 类的实例，框架就需要一种办法来调用这个实例上的一个动作。如果控制器是通过 Controller 类派生而来的，那么将由 **动作调用器 (Action Invoker)** 调用动作

提示： 如果是直通过 IController 接口创建控制器，则你要自己去负责执行动作。动作调用器是包含在 Controller 类中的一部分功能

动作调用器实现 IActionInvoker 接口

```csharp
namespace System.Web.Mvc
{
    public interface IActionInvoker
    {
        bool InvokeAction(ControllerContext controllerContext, string actionName);
    }
}
```

该接口只有一个单一的成员：InvokeAction。其参数是一个 ControllerContext 对象和一个含有待调用动作名称的字符串。其返回值是一个布尔类型 (bool)，反回值 "true" 表示找到并调用了这个动作；"falst" 表示控制器，没有匹配的动作 注意，在上述描述中，我并没有使用 "方法" 这个词。动作与方法之间的关联是严格可选的。虽然这是内建动作调用器所采取的办法，但你可以采取所选择的任何方式随意地处理动作。下面的示例演示了另一种不同办法的 IActionInvoker 接口实现，即在 Infrastructure 文件夹中的 CustomActionInvoker 类文件中定义

```csharp
using System.Web.Mvc;

namespace ControllerExtensibility.Infrastructure
{
    public class CustomActionInvoker : IActionInvoker
    {
        public bool InvokeAction(ControllerContext controllerContext, string actionName)
        {
            if (actionName == "Index")
            {
                controllerContext.HttpContext.
                Response.Write("This is output from the Index action");
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
```

这个动作调用器并不关心控制器类中的方法。事实上，它自己处理动作。如果这是对 Index 动作的请求，那么该调用器直接将一条消息写入到 Response。如果是对其他动作的请求，则返回 false，这会导致一个 "404—— 未找到" 的错误消息显示给用户 与一个控制器相关联的动作调用器是通过 Controller.ActionInvoker 属性获得的。意即，同一个应用程序中的不同控制器可以使用不同的动作调用器。为了对此进行演示，添加一个名为 ActionInvokerController.cs 的新控制器

```csharp
using ControllerExtensibility.Infrastructure;
using System.Web.Mvc;

namespace ControllerExtensibility.Controllers
{
    public class ActionInvokerController : Controller
    {
        public ActionInvokerController()
        {
            this.ActionInvoker = new CustomActionInvoker();
        }
    }
}
```

在这个控制器中没有动作方法，它依靠动作调用器去处理请求。通过启动应用程序，并导航到 /ActionInvoker/Index，可以看到其工作情况。自定义动作调用器为其生成了响应。如果导航到同一控制器中的其他动作，将看到 404 错误页面

我不建议你实现自己的动作调用器。而且，如果这么做，我也不建议你遵循这种办法。为什么？首先，内建的支持有一些非常有用的特性，你马上就可以看到。其次，上面的例子有一些问题：缺乏可扩展性、贫乏的职责分离，而且缺乏对各种视图的支持。但这个例子展示了 MVC 框架如何组合和演示请求处理管道的各个方面。再一次重申，请求处理管道的几乎每个方面都是可定制的或完全可替换的

## 使用内建的动作调用器

内建的动作调用器 ControllerActionInvoker 类，有一些将请求与动作进行匹配的非常完善的技术。而且与之前的实现不同，默认的动作调用器是依靠方法进行操作的，为了具备一个动作的资格，一个方法必须满足以下几个条件：

* 该方法必须是 public 的
* 该方法必须不是 static 的
* 该方法必须不在 System.Web.Mvc.Controller 或它的任何基类中
* 该方法必须没有专用名

前两个条件很简单。第三个条件排除了在 Controller 类或其基类中出现的方法，这意味着不包括 ToString 及 GetHashCode 这样的方法，因为这些是 IController 接口实现的方法。这是有意义的，因为我们不希望把控制器的内部工作暴露给外部世界。最后一个条件意味着排除了构造器、属性以及事件访问器 —— 事实上，不可以采用具有 System.Reflection.MethodBase 的 IsSpecialName 标志的类成员来处理一个动作

注：具有泛型参数的方法 (如 MyMethod) 满足所有条件，但如果试图调用这样的方法来处理一个请求，MVC 框架会抛出一个异常

默认情况下，ControllerActionInvoker 查找一个具有与请求的动作同名的方法。如果找到这样一个方法，便调用它来处理这个请求。但 MVC 框架提供了一些微调这一过程的机会

使用自定义动作名 通常，动作方法的名称确定了它所表示的动作。Index 动作方法对 Index 动作进行服务。但可以用 ActionName 注解属性来重写这一行为

```csharp
using System.Web.Mvc;
using ControllerExtensibility.Models;

namespace ControllerExtensibility.Controllers
{
    public class CustomerController : Controller
    {
        [ActionName("Enumerate")]
        public ViewResult List()
        {
            return View("Result", new Result
            {
                ControllerName = "Customer",
                ActionName = "List"
            });
        }
    }
}
```

在这个示例中注解属性被运用于 List 方法，在其中传递了 Enumerate 参数值。当动作调用器接收到一个对 Enumerate 动作的请求时，它将使用 List 方法进行服务 这一注解属性的运用重写了动作的名称。这意味着直接以 List 方法为目标的 URL 不再工作

以这种方式重写方法名的原因主要有两个：

1. 可以接收一个作为 C# 方法名不合法的动作名 (例如 [ActionName ("User-Registration")])
2. 如果希望有两个不同的 C# 方法接收同一组参数，并且运用同样的动作名 (具有同样参数的方法不能实现重载，只能使用不同的方法名)，但要对不同的 HTTP 请求类型进行响应 (例如，一个为 [HttpGet]，而另一个为 [HttpPost])，那么可以对这些方法用不同的 C# 名来满足编译器的要求，然后用 [ActionName] 将它们映射到同一个动作名

使用动作方法选择 通常的情况是一个控制器含有几个同名的动作。这可能是因为有多个方法，每个方法带有不同的参数；或是因为使用 ActionName 注解属性，使多个方法表示同一个动作 在这些情况下，MVC 框架需要选择一些相应动作以处理一个请求的辅助办法。做这种事情的机制称为 **动作方法选择 (Action Method Selection)** 。它允许对一个动作定义其乐于处理的请求的种类 动作调用器在选择一个动作时，会利用动作方法选择器来消除不明确性。有多个候选方法时，调用器会优先考虑具有选择器的动作 (HttpPost 注解属性就是一种动作方法选择器) 有一些内建的注解属性可以作为不同 HTTP 请求的选择器：HttpPost 用于 POST 请求、HttpGet 用于 GET 请求、HttpPut 用于 PUT 请求等。另一个内建的注解属性是 NonAction，它向动作调用器指示：这是个拒绝被视为动作方法的方法，不应该作为动作方法来使用

```csharp
...
[NonAction]
public ActionResult MyAction()
{
    return View();
}
...
```

NonAction 注解属性确保不会将控制器类的工作暴露成动作。当然，通常应该把这种方法简单地标记为 private，以防止它们作为动作被调用。然而，如果出于某些原因，必须将方法标记为 public 时，则 [NonAction] 是有用的。以 NonAction 方法为目标的 URL 请求会生成 "404—— 未找到" 错误

1. 创建自定义动作方法选择器 动作方法选择器派生于 ActionMethodSelectorAttribute 类

   ```csharp
   using System.Reflection;
   
   namespace System.Web.Mvc
   {
       [AttributeUsage(AttributeTargets.Method, AllowMultiple = false, Inherited = true)]
       public abstract class ActionMethodSelectorAttribute : Attribute
       {
           public abstract bool IsValidForRequest(ControllerContext controllerContext, MethodInfo methodInfo);
       }
   }
   ```

   ActionMethodSelectorAttribute 是一个抽象类，他定义了一个抽象方法 IsValidForRequest。该方法的一个参数是一个 ControllerContext 对象，用来对请求进行检测；另一个参数是一个 MethodInfo 对象，用来获取运用了选择器的方法的信息。如果该方法能够处理请求，便通过 IsValidForRequest 返回 true，否则返回 false。在 Infrastructure 文件夹下创建一个名为 LocalAttribute.cs 的文件

   ```csharp
   using System.Reflection;
   using System.Web.Mvc;
   
   namespace ControllerExtensibility.Infrastructure
   {
       public class LocalAttribute : ActionMethodSelectorAttribute
       {
           public override bool IsValidForRequest(ControllerContext controllerContext, MethodInfo methodInfo)
           {
               return controllerContext.HttpContext.Request.IsLocal;
           }
       }
   }
   ```

   我已经重写了 IsValidForRequest 方法，以便请求源自于本地机器时，返回 "true"，为了对此自定义动作方法选择器进行演示，在项目中创建 Home 控制器

   ```csharp
   using System.Web.Mvc;
   using ControllerExtensibility.Infrastructure;
   using ControllerExtensibility.Models;
   
   namespace ControllerExtensibility.Controllers
   {
       public class HomeController : Controller
       {
           public ActionResult Index()
           {
               return View("Result", new Result
               {
                   ControllerName = "Home",
                   ActionName = "Index"
               });
           }
   
           [ActionName("Index")]
           public ActionResult LocalIndex()
           {
               return View("Result", new Result
               {
                   ControllerName = "Home",
                   ActionName = "LocalIndex"
               });
           }
       }
   }
   ```

   我使用 ActionName 注解属性创建了具有两个 Index 动作方法的情况。此时，当到达的请求为 /Home/Index 时，动作调用器将无法猜出应该使用哪一个方法。因此，会产生一个错误 为了解决这一问题可以对其中的一个歧义方法运用一个方法选择器注解属性

   ```csharp
   ...
   [Local]
   [ActionName("Index")]
   public ActionResult LocalIndex()
   {
       return View("Result", new Result
       {
           ControllerName = "Home",
           ActionName = "LocalIndex"
       });
   }
   ...
   ```

   动作方法的去歧义过程 动作调用器从一个可能的候选方法列表开始进行处理，然后经历以下几个过程： 首先，调用器会根据名称尽可能丢弃掉一些方法。只有与目标动作同名，或与 ActionName 注解属性匹配的方法被保留在这个列表中 其次，调用器丢弃那些选择器注解属性对当前请求返回 false 的动作方法 如果恰好只留下一个带有选择器的动作方法，那么这就是要调用的方法。如果有多个带有选择器的方法，那么便抛出一个异常，因为该动作调用器不能消除可用方法之间的歧义 如果不存在带有选择器的动作方法，那么该调用器便查找不带选择器的那些方法，如果恰好有一个这一的方法，那么这就是要调用的方法。如果有多个不带选择器的方法，便抛出一个异常。因为调用器不能在它们之间做出选择

2. 处理未知动作 如果动作调用器找不到一个要调用的动作方法，便从它的 InvokeAction 方法返回 false。当这种情况发生时，Controller 类会调用它的 HandleUnknownAction 方法。默认情况下，这个方法会将一个 "404—— 未找到" 响应返回给客户端。但是，如果想做一些特殊的事情，可以在控制器类中选择重写这个方法

   ```csharp
   using System.Web.Mvc;
   using ControllerExtensibility.Infrastructure;
   using ControllerExtensibility.Models;
   
   namespace ControllerExtensibility.Controllers
   {
       public class HomeController : Controller
       {
   
           // ...other action methods omitted for brevity...
   
           protected override void HandleUnknownAction(string actionName)
           {
               Response.Write(string.Format("You requested the {0} action", actionName));
           }
       }
   }
   ```

## 用特殊控制器改善性能

MVC 框架提供了两种可以改善 MVC Web 应用程序性能的特殊控制器。同所有性能优化一样，这些控制器都表现出一些折中，或是在易用性方面，或是在降低功能方面

使用无会话控制器 默认情况下控制器支持会话状态，这可以用来跨请求地存取数据值。创建和维护会话是一个棘手的过程，必须对数据进行存储和接收，且必须对会话进行管理，以使它们能适当地终止。会话数据会消耗服务器内存或一些其他存储单元空间，而且多个 Web 服务器之间数据同步的需求，是的服务器场 (Server Farm) 上运行应用程序更加困难 为了简化会话状态，ASP.NET 对一个给定的会话在某一时刻只处理一个查询。如果客户端形成了多个重叠的请求，它们将被排成队列，并由服务器依序处理。其好处是不需要担忧多个请求对同一数据进行修改的情况，缺点是得不到所希望的请求吞吐量 并非所有控制器都需要这种会话状态特性。在这种情况下，能够改善应用程序性能，而又避免了棘手的会话状态维护工作。这可以通过无会话状态控制器来实现。它们与规则控制器一样，但有两个方面不同：在把它们用于处理一个请求时，MVC 框架不会加载或不存储会话的状态；重叠请求可以同时处理

1. 在一个自定义的 IControllerFactory 中管理会话状态 在本章开始曾演示过 IControllerFactory 接口，它含有一个 GetControllerSessionBehavior 方法，该方法会返回 SessionStateBehavior 枚举中的一个值，这个枚举含有 4 个值，用于对控制器的会话状态进行控制

   SessionStateBehavior 枚举的值

   | 值       | 描述                                                         |
   | :------- | :----------------------------------------------------------- |
   | Default  | 使用默认的 ASP.NET 行为，它会根据 HttpContext 来决定会话状态的配置 |
   | Required | 启用完全的读写会话状态                                       |
   | ReadOnly | 启用只读会话状态                                             |
   | Disabled | 完全禁用会话状态                                             |

   通过返回 GetControllerSessionBehavior 方法的 SessionStateBehavior 的值，实现 IControllerFactory 接口的控制器工厂会直接设置控制器会话状态的行为。传递给这个方法的参数是一个 RequestContext 对象和一个含有控制器名称的字符串。你可以返回所允许的任何值，而且对于不同的控制器可以返回不同的值

   ```csharp
   ...
   public SessionStateBehavior GetControllerSessionBehavior(RequestContext
   requestContext, string controllerName)
   {
       switch (controllerName)
       {
           case "Home":
               return SessionStateBehavior.ReadOnly;
           case "Product":
               return SessionStateBehavior.Required;
           default:
               return SessionStateBehavior.Default;
       }
   }
   ...
   ```

2. 用 DefaultControllerFactory 管理会话状态 当使用内建的控制器工厂时，可以将 SessionState 注解属性运用于每个控制器类，以便对控制器的会话状态进行控制 这里创建一个名为 FastController 的新控制器

   ```csharp
   using System.Web.Mvc;
   using System.Web.SessionState;
   using ControllerExtensibility.Models;
   
   namespace ControllerExtensibility.Controllers
   {
       [SessionState(SessionStateBehavior.Disabled)]
       public class FastController : Controller
       {
   
           public ActionResult Index()
           {
               return View("Result", new Result
               {
                   ControllerName = "Fast ",
                   ActionName = "Index"
               });
           }
       }
   }
   ```

   该控制器运用了 SessionState 注解属性，它影响着该控制器中的所有动作。送给这个注解属性的唯一参数时 SessionStateBehavior 枚举中的一个值。这个例子完全禁用了会话状态，如果在控制器中设置一个会话值

```csharp
...
Session["Message"] = "Hello";
...
```

或者在一个视图中视图从会话状态读取一个值

```csharp
...
Message: @Session["Message"]
...
```

都将会抛出一个异常

提示：当会话状态是 Disabled 时，HttpContext.Session 属性会返回 null

使用异步控制器 核心 ASP.NET 平台维护着一个用来处理客户端请求的.NET 线程池。这个线程池叫做 **工作线程池 (Worker Thread Poll)** ，而这些线程叫做 **工作线程 (Worker Thread)** 。当接收到一个请求时，将占用线程池中的一个工作线程，以进行这个请求的处理工作。当请求处理完毕后，该工作线程被返回给线程池，以便用于新请求的处理。对 ASP.NET 应用程序使用线程池有两个关键好处：

1. 通过重用工作线程，避免了每次处理一个请求时，都要创建一个新线程的开销 (创建线程是需要时间的，但若采用现成的线程就不同了)
2. 通过具有固定数目的可用工作线程，避免了超出服务器处理能力的并发请求情况

   在请求可以被短时间处理完毕的情况下，工作线程池工作得最好。这也是大多数 MVC 应用程序的情况。但是，如果有一些依赖于其他服务器且占用较长时间才能完成的动作，那么你可能会遇到所有工作线程都被绑定于等待其他系统完成其工作的情况

   此刻你的服务器有能力做更多的工作 —— 毕竟这只是在等待，只占用了很少的资源。但因为所有线程都被绑定，传入的请求都被排成队列。这将陷入应用程序处理停顿，而服务器大片闲置的奇怪状态

   这一问题的解决方案是使用异步控制器。这会提高应用程序的整体性能，但并不利于执行异步操作 (可提高性能，但实现异步操作难)

   注意： 异步操作只能对占用 I/O 或占用网络带宽，且 **非 CPU 密集型** 的动作有用。异步控制器试图解决的问题应当是，线程池与所处理的请求类型之间搭配不当的状况。线程池意在确保每个请求得到一片服务器资源，但很可能最终停滞于一组无所事事的工作线程上。如果对 CPU 密集型动作使用额外的后台线程，那么会因为涉及太多的并发请求而削弱服务器资源

3. 创建示例

   **创建同步控制器** 创建一个名为 RemoteData 的常规同步控制器

```csharp
using System.Web.Mvc;
using ControllerExtensibility.Models;

namespace ControllerExtensibility.Controllers
{
    public class RemoteDataController : Controller
    {
        public ActionResult Data()
        {
            RemoteService service = new RemoteService();
            string data = service.GetRemoteData();
            return View((object)data);
        }
    }
}
```

该控制器含有一个动作方法 Data，它创建模型类 RemoteService 的一个实例，并调用它上面的 GetRemoteData 方法。这个方法是一个耗时的、低 CPU 活动的例子

```csharp
using System.Threading;

namespace ControllerExtensibility.Models
{
    public class RemoteService
    {
        public string GetRemoteData()
        {
            Thread.Sleep(2000);
            return "Hello from the other side of the world";
        }
    }
}
```

最后为 Data 动作添加一个视图

```csharp
@model string
@{
Layout = null;
}
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width" />
    <title>Data</title>
</head>
<body>
    <div>
        Data: @Model
    </div>
</body>
</html>
```

这里的问题是在执行 Data 动作方法时，处理请求的工作线程空闲了 2s—— 它没有做任何事情，而在等待期间该线程也无法用于处理其他请求

注意： 使用异步控制器释放了工作线程，以便它能处理其他请求。但它无法避免客户端用户 2s 的等待。毕竟，仍然获得和处理的虚假数据。你可以使用客户端技术使这样的请求在浏览器上异步，它让你至少告诉用户获取数据的进展。

**创建异步控制器** 创建异步控制器有两种方式。一种是实现 System.Web.Mvc.Async.IAsyncController 接口，这是与 IController 对等的异步接口。这里不演示这种方法，因为它需要对.NET 并发编程构件做太多的解释

提示： 异步控制器中的所有动作并不都需要被异步。也可以包含同步方法，它们的行为和预期一样

我希望专注于 MVC 框架，这是演示第二种方式的原因：为了在常规控制器中使用新的 await 和 async 关键字 在.NET 框架的早期版本中，创建异步控制器是一个复杂的过程。新的关键字 await 和 async，将该过程简化了很多：创建一个新的 Task 对象，并 await 它的响应

提示： 创建旧的异步动作方法仍然被支持，旧办法的限制之一是，动作方法的名称不能以 Async 或 Completed 结尾

```csharp
using System.Web.Mvc;
using ControllerExtensibility.Models;
using System.Threading.Tasks;

namespace ControllerExtensibility.Controllers
{
    public class RemoteDataController : Controller
    {
        public async Task<ActionResult> Data()
        {
            string data = await Task<string>.Factory.StartNew(() => {
                return new RemoteService().GetRemoteData();
            });

            return View((object)data);
        }
    }
}
```

重构动作方法，以使其返回 Task。运用了 await 和 async 关键字，并创建了 `Task<string>`，由它负责调用 GetRemoteData 方法。

**在控制器中使用异步方法** 你也可以在应用程序的其他地方，通过异步控制器来使用异步方法

```csharp
using System.Threading;
using System.Threading.Tasks;

namespace ControllerExtensibility.Models
{
    public class RemoteService
    {
        public string GetRemoteData()
        {
            Thread.Sleep(2000);
            return "Hello from the other side of the world";
        }
        public async Task<string> GetRemoteDataAsync()
        {
            return await Task<string>.Factory.StartNew(() => {
                Thread.Sleep(2000);
                return "Hello from the other side of the world";
            });
        }
    }
}
```

GetRemoteDataAsync 方法返回的是一个 Task，它与同步方法完成时生成同样的消息 使用 GetRemoteDataAsync 方法

```csharp
using System.Web.Mvc;
using ControllerExtensibility.Models;
using System.Threading.Tasks;

namespace ControllerExtensibility.Controllers
{
    public class RemoteDataController : Controller
    {
        public async Task<ActionResult> Data()
        {
            string data = await Task<string>.Factory.StartNew(() => {
                return new RemoteService().GetRemoteData();
            });

            return View((object)data);
        }
        public async Task<ActionResult> ConsumeAsyncMethod()
        {
            string data = await new RemoteService().GetRemoteDataAsync();
            return View("Data", (object)data);
        }
    }
}
```

可以看出这两种动作方法都遵循了同样的基本模式，区别在于在哪里创建 Task 对象。这两种动作方法的调用结果都是：在等待 GetRemoteData 调用完成期间，不会绑定工作线程 —— 于是线程可用于处理其他请求，这可以极大地改善 MVC 应用程序的性能

# 第 20 章 视图

## 创建自定义视图引擎

视图引擎实现 IViewEngine 接口

```csharp
namespace System.Web.Mvc
{
    public interface IViewEngine
    {
        ViewEngineResult FindPartialView(ControllerContext controllerContext, string partialViewName, bool useCache);

        ViewEngineResult FindView(ControllerContext controllerContext, string viewName, string masterName, bool useCache);

        void ReleaseView(ControllerContext controllerContext, IView view);
    }
}
```

视图引擎的作用是将对视图的请求转换成 ViewEngineResult 对象。这个接口中的前两个方法是 FindPartialView 和 FindView，给它们传递的是描述请求的参数：处理该请求的控制器 (ControllerContext 对象)、视图名及其布局，以及是否允许视图引擎重用其缓存结果。当框架对 ViewResult 进行处理时会调用这两个方法。最后一个方法是 ReleaseView (释放视图)，当视图不再被需要时调用

注：MVC 框架对视图引擎的支持是由 ControllerActionInvoker 类实现的，这是 IActionInvoker 接口的内建实现。如果已经自己实现了动作调用器或控制器工厂，将无法自动地访问视图引擎特性

当请求一个视图时，ViewEngineResult 类使视图引擎能够对 MVC 框架做出响应

```csharp
using System.Collections.Generic;

namespace System.Web.Mvc
{
    public class ViewEngineResult
    {
        public ViewEngineResult(IEnumerable<string> searchedLocations)
        {
            if (searchedLocations == null)
            {
                throw new ArgumentNullException("searchedLocations");
            }
            SearchedLocations = searchedLocations;
        }

        public ViewEngineResult(IView view, IViewEngine viewEngine)
        {
            if (view == null) { throw new ArgumentNullException("view"); }
            if (viewEngine == null) { throw new ArgumentNullException("viewEngine"); }
            View = view;
            ViewEngine = viewEngine;
        }

        public IEnumerable<string> SearchedLocations { get; private set; }
        public IView View { get; private set; }
        public IViewEngine ViewEngine { get; private set; }
    }
}
```

可以通过这两个构造器中的其中之一来表示一个结果。如果视图引擎能够对请求提供视图，那么可以用以下构造器创建一个 ViewEngineResult

```csharp
...
public ViewEngineResult(IView view, IViewEngine viewEngine)
...
```

传递给这个构造器的参数是一个 IView 接口的实现，和一个视图引擎 (以便以后能调用 ReleaseView 方法)。如果视图引擎不对请求提供视图，那么可以使用如下构造器

```csharp
...
public ViewEngineResult(IEnumerable<string> searchedLocations)
...
```

这一版本的参数是查找视图位置的一个枚举。如果找不到视图，该枚举的信息会显示给用户

注：你不是唯一一个感觉这个 ViewEngineResult 类不太好用的人。用不同版本的类构造器来表示输出，这是一种奇怪的做法，而且与 MVC 框架设计的其他部分并不正真吻合

视图引擎系统的最后一个构造块是 IView 接口

```csharp
using System.IO;

namespace System.Web.Mvc
{
    public interface IView
    {
        void Render(ViewContext viewContext, TextWriter writer);
    }
}
```

把一个 IView 实现传递给 ViewEngineResult 对象的构造器，然后它会被视图引擎方法所返回。 MVC 框架会调用 Render 方法。ViewContext 参数给出了客户端请求的信息，以及动作方法的输出。TextWriter 参数用于将输出写到客户端

有用的 ViewContext 属性

| 名称           | 描述                                                         |
| :------------- | :----------------------------------------------------------- |
| Controller     | 返回处理当前请求的 IController 实现                          |
| RequestContext | 返回当前请求的细节                                           |
| RouteData      | 为当前请求返回路由数据                                       |
| TempData       | 返回和请求相关的临时数据                                     |
| View           | 返回将要处理请求的 IView 接口的实现。很明显，如果你正在创建一个自定义视图实现，它将是当前类 |
| ViewBag        | 返回一个表示视图包的 object                                  |
| ViewData       | 返回一个包含模型视图包和元数据的视图模型数据字典             |

这些属性中最有趣的是 ViewData，它返回一个 ViewDataDictionary 对象

有用的 ViewDataDictionary 属性

| 名称          | 描述                                                 |
| :------------ | :--------------------------------------------------- |
| Keys          | 为字典中的数据返回键值集合，它们可用来访问视图包属性 |
| Model         | 为请求返回视图模型对象                               |
| ModelMetadata | 返回一个可以用来反映模型类型的 ModelMetadata 对象    |
| ModelState    | 返回有关模型的状态信息                               |

了解视图引擎如何工作 —— IViewEngine、IView 以及 ViewEngineResult 如何组合在一起，最简单的办法是创建视图引擎

准备示例项目

创建自定义的 IView 在 Infrastructure 文件夹下创建一个名为 DebugDataView.cs 的新类文件

```csharp
using System.IO;
using System.Web.Mvc;

namespace Views.Infrastructure
{
    public class DebugDataView : IView
    {
        public void Render(ViewContext viewContext, TextWriter writer)
        {
            Write(writer, "---Routing Data---");
            foreach (string key in viewContext.RouteData.Values.Keys)
            {
                Write(writer, "Key: {0}, Value: {1}",
                key, viewContext.RouteData.Values[key]);
            }
            Write(writer, "---View Data---");
            foreach (string key in viewContext.ViewData.Keys)
            {
                Write(writer, "Key: {0}, Value: {1}", key,
                viewContext.ViewData[key]);
            }
        }

        private void Write(TextWriter writer, string template, params object[] values)
        {
            writer.Write(string.Format(template, values) + "<p/>");
        }
    }
}
```

这个视图演示了 Rander 方法两个参数的用法：取得 viewContext 的值，并用 TextWriter 向客户端写出响应

提示：视图数据相对于视图包来说是一个不灵活的前驱，除了编写自定义 IView 实现时一般不直接使用它提供了简单的方法访问定义在视图包对象中的特性

创建 IViewEngine 实现 视图引擎的目的是产生一个 ViewEngineResult 对象，它包含一个 IView，或者一个用于搜索适当视图的位置列表 在 Infrastructure 文件夹下创建一个名为 DebugDataViewEngine.cs 的类文件

```csharp
using System.Web.Mvc;

namespace Views.Infrastructure
{
    public class DebugDataViewEngine : IViewEngine
    {
        public ViewEngineResult FindView(ControllerContext controllerContext, string viewName, string masterName, bool useCache)
        {
            if (viewName == "DebugData")
            {
                return new ViewEngineResult(new DebugDataView(), this);
            }
            else
            {
                return new ViewEngineResult(new string[]{ "No view (Debug Data View Engine)" });
            }
        }

        public ViewEngineResult FindPartialView(ControllerContext controllerContext, string partialViewName, bool useCache)
        {
            return new ViewEngineResult(new string[]{ "No view (Debug Data View Engine)" });
        }

        public void ReleaseView(ControllerContext controllerContext, IView view)
        {
            // do nothing
        }
    }
}
```

这里支持一个单一的视图，它名为 "DebugData"，当看到对这个视图的一个请求时，便返回自定义 IView 实现的一个新实例

```csharp
...
return new ViewEngineResult(new DebugDataView(), this);
...
```

如果实现的是更严格的视图引擎，可以利用这个机会搜索模板、考虑布局和所提供的缓存设置。不过，这个简单示例只需要创建一个新的 DebugDataView 类实例。如果接收到的是对一个视图而不是 DebugData 的请求，便返回一个 ViewEngineResult

```csharp
...
return new ViewEngineResult(new string[] { "No view (Debug Data View Engine)" });
...
```

IViewEngine 接口假设，视图引擎有它需要查找视图的地方。在上述示例中不需要查找任何地方，因此只返回一个 Dummy Location，以表明我们不能交付一个视图 上述自定义视图引擎不支持分部视图，因此，可以通过 FindPartialView 方法返回一个结果，以指示无法提供视图。这里并没有实现 ReleaseView 方法，因为在 IView 实例中不存在需要释放的资源

注册自定义视图引擎 视图引擎需要在 Global.asax 的 Application_Start 方法中进行注册

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using Views.Infrastructure;

namespace Views
{

    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            RouteConfig.RegisterRoutes(RouteTable.Routes);

            ViewEngines.Engines.Add(new DebugDataViewEngine());
        }
    }
}
```

静态的 ViewEngine.Engines 集合含有一组在应用程序中安装的视图引擎。MVC 框架支持在一个单一的应用程序中安装多个引擎。当处理一个 ViewResult 时，动作调用器获取这组已安装的视图引擎，并依次调用它们的 FindView 方法 一旦动作调用器接收到一个含有 IView 的 ViewEngineResult 对象，便会停止调用 FindView 方法。如果有两个或多个引擎能够对同视图名进行服务，这意味着在 ViewEngines.Engines 集合中添加引擎的顺序是重要的。如果希望引擎取得优先，可以将它插入在集合开始部分

```csharp
...
ViewEngines.Engines.Insert(0, new DebugDataViewEngine());
...
```

测试视图引擎

如果希望只使用自定义视图引擎，则必须在 Global.asax 文件中注册引擎之前，调用 Clear 方法

```csharp
...
protected void Application_Start()
{
    AreaRegistration.RegisterAllAreas();
    RouteConfig.RegisterRoutes(RouteTable.Routes);

    ViewEngines.Engines.Clear();
    ViewEngines.Engines.Add(new DebugDataViewEngine());
}
...
```

## 使用 Razor 引擎

视图引擎的复杂性来自于视图模板系统，这包括代码片段、支持布局，以及为优化性能而对模板进行的编译等。在上述自定义视图引擎中，没有做这些方面的任何事情，而且也不需要做这些，因为 Razor 引擎会为我们处理这些方方面面。在 Razor 中，几乎所有 MVC 应用程序所需要的功能都是可用的。只有十分稀少的项目需要创建自定义视图

准备示例项目

理解 Razor 视图渲染 Razor 视图引擎会编译应用程序中的视图，以改善性能。视图会被转换成 C# 类，然后被编译，这是在视图中能够如此方便地包含 C# 代码片段的原因 在应用程序启动之前，MVC 应用程序中的视图不会被编译，因此，要查看 Razor 创建的类，需要启动应用程序，并导航到 Home/Index 动作。发送给 MVC 应用程序的最初请求，会触发所有视图的编译过程 出于方便，会将视图文件生成的类写成磁盘上的 C# 代码文件，然后进行编译，这意味着你能够看到表示某一个视图的 C# 语句，你通常能在以下文件夹中找到这些被生成的文件：

```csharp
c:\Users\<yourLoginName>\AppData\Local\Temp\Temporary
```

查找为特定视图生成的这种代码文件需要一点盲目性。有许多通常为隐藏的文件夹，而且这些.cs 文件名与它们所包含的类名不对应

```csharp
namespace ASP
{
    using System;
    using System.Collections.Generic;
    using System.IO;
    using System.Linq;
    using System.Net;
    using System.Web;
    using System.Web.Helpers;
    using System.Web.Security;
    using System.Web.UI;
    using System.Web.WebPages;
    using System.Web.Mvc;
    using System.Web.Mvc.Ajax;
    using System.Web.Mvc.Html;
    using System.Web.Optimization;
    using System.Web.Routing;
    public class _Page_Views_Home_Index_cshtml : System.Web.Mvc.WebViewPage<string[]>
    {
        public _Page_Views_Home_Index_cshtml()
        {
        }

        public override void Execute()
        {
            ViewBag.Title = "Index";
            WriteLiteral("\r\n\r\nThis is a list of fruit names:\r\n\r\n");
            foreach (string name in Model)
            {
                WriteLiteral(" <span><b>");
                Write(name);
                WriteLiteral("</b></span>\r\n");
            }
        }
    }
}
```

首先要注意到这个类派生于 `WebViewPage<T>`，这里的 T 是模型类型 —— 在这个例子中是 `WebViewPage<string[]>`。这是如何处理强类型视图的。也要注意所生成的类名 `_Page_Views_Home_Index_cshtml`。可以看出，视图文件的路径已经被编码到类名之中。这是 Razor 将视图请求映射成编译类实例的方式 可以从 Execute 方法中看出视图中的语句和元素是如何处理的：以 @符号作为前缀的代码片段被直接表示成了 C# 语句。HTML 元素以 WriteLiteral 方法进行处理，该方法将参数的内容写成这些元素所给出的结果，这与 Write 方法相反，WriteLiteral 方法用于 C# 变量，并对字符串值进行编码，以使他们能够安全地用于 HTML 页面 Write 和 WriteLiteral 两个方法都是将内容写到一个 TextWriter 对象，这是传递给 Iview.Render 方法的同一个对象，编译 Razore 视图的目的是生成静态和动态内容，并通过 TextWriter 方法将内容发送给客户端

配置视图搜索位置 在查找视图时，Razor 视图引擎遵循 MVC 框架早期版本建立起来的约定 Razor 实际上不会在磁盘上查找视图文件，因为它们还没有被编译成 C# 类 通过创建一个 RazorViewEngine 子类，可以改变 Razor 搜索的视图文件。这个类是 IViewEngine 的 Razor 实现

Razor 视图引擎搜索属性

| 属性                                                         | 描述                                         | 默认值                                                       |
| :----------------------------------------------------------- | :------------------------------------------- | :----------------------------------------------------------- |
| ViewLocationFormats、MasterLocationFormats、PartialViewLocationFormats | 查找视图、分部视图，以及布局的位置           | ~/Views/{1}/{0}.cshtml ~/Views/{1}/{0}.vbhtml ~/Views/Shared/{0}.cshtml ~/Views/Shared/{0}.vbhtml |
| AreaViewLocationFormats、AreaMasterLocationFormats、AreaPartialViewLocationFormats | 为一个区域查找视图、分布视图，以及布局的位置 | ~/Areas/{2}/Views/{1}/{0}.cshtml ~/Areas/{2}/Views/{1}/{0}.vbhtml ~/Areas/{2}/Views/Shared/{0}.cshtml ~/Areas/{2}/Views/Shared/{0}.vbhtml |

这些属性是在 Razor 之前引入的，这是每组三个属性具有相同值的原因。每个属性都是一个字符串数组，它们是用合成字符串格式化符号来表示的。以下是与占位符对应的参数值

* {0} 表示视图名
* {1} 表示控制器名
* {2} 表示区域名

为了改变搜索位置，需要创建一个派生于 RazorViewEngine 的类 在 Infrastructure 文件夹中添加一个名为 CustomLocationViewEngine 的视图引擎

```csharp
using System.Web.Mvc;

namespace WorkingWithRazor.Infrastructure
{
    public class CustomLocationViewEngine : RazorViewEngine
    {
        public CustomLocationViewEngine()
        {
            ViewLocationFormats = new string[] { "~/Views/{1}/{0}.cshtml", "~/Views/Common/{0}.cshtml" };
        }
    }
}
```

这里已经对 ViewLocationFormats 设置了一个新值。新数组只包含用于.cshtml 文件的条目。此外，已经将共享视图的位置修改为 Views/Common，而不是 Views/Shared。在 Global.asax 的 Application_Start 方法中，用 ViewEngines.Engines 集合注册这个派生的视图引擎

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using WorkingWithRazor.Infrastructure;

namespace WorkingWithRazor
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            RouteConfig.RegisterRoutes(RouteTable.Routes);

            ViewEngines.Engines.Clear();
            ViewEngines.Engines.Add(new CustomLocationViewEngine());
        }
    }
}
```

为了避免标准视图与这个实例之间的竞争，调用了 Clear 方法，以删除可能已经被注册的其他引擎

## 对 Razor 视图添加动态内容

视图的全部目的是让开发人员将域模型部分的内容渲染成用户界面。为了实现这一目的，需要对视图添加动态内容。 **动态内容** 是在运行时生成的，并且可以随每个请求而不同 这与 **静态内容** ，比如 HTML，恰好相反。在编写应用程序时，静态内容就已经生成了，而且对于每次请求都相同

对视图添加动态内容

| 技术            | 何时使用                                                     |
| :-------------- | :----------------------------------------------------------- |
| 内联代码        | 用于小型的、自包含视图逻辑的片段，如 if 和 foreach 语句。这是在视图中创建动态内容的基本手段，也是一些其他办法的基础 |
| HTML 辅助器方法 | 用于生成一个独立的 HTML 元素或小片元素集合，典型地是基于视图模型或视图数据的值 |
| 分段            | 用于创建内容分段，这种分段用于插入到布局的特定位置           |
| 分部视图        | 用于在视图之间共享的自片段标记。分部视图也可以含有内联代码、HTML 辅助器方法，以及引用其他分部视图。分部视图不调用动作方法，因此它们不能用来执行事物逻辑 |
| 子动作          | 用于创建可重用的 UI 控件，或需要含有事物逻辑的小部件。当使用子动作时，它调用一个动作方法，返回一个视图，并把结果注入到响应流中 |

使用分段 Razor 引擎支持 **分段 (Section)** 的概念，这让你能够提供一个布局中的内容区域。Razor 分段能够灵活地控制将视图的哪一个部分插入到布局之中，以及把它们插入到哪儿

```csharp
@model string[]

@{
    ViewBag.Title = "Index";
    Layout = "~/Views/Shared/_Layout.cshtml";
}

@section Header {
    <div class="view">
        @foreach (string str in new[] { "Home", "List", "Edit" })
        {
            @Html.ActionLink(str, str, null, new { style = "margin: 5px" })
        }
    </div>
}

<div class="view">
    This is a list of fruit names:
    @foreach (string name in Model)
    {
        <span><b>@name</b></span>
    }
</div>

@section Footer {
    <div class="view">
        This is the footer
    </div>
}
```

这里用 Razor 的 @section 标签后面跟一个分段名称的办法定义了分段。在上面的例子中创建了名为 "Header" 和 "Footer" 的分段。分段的内容可以混用 HTML 标记和 Razor 标签。你可以在布局 (/Views/Shared/_Layout.cshtml) 中使用 @RenderSection 辅助器方法来指定分段要插入的位置

```csharp
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <style type="text/css">
        div.layout {
            background-color: lightgray;
        }

        div.view {
            border: thin solid black;
            margin: 10px 0;
        }
    </style>
    <title>@ViewBag.Title</title>
</head>
<body>

    @RenderSection("Header")

    <div class="layout">
        This is part of the layout
    </div>

    @RenderBody()

    <div class="layout">
        This is part of the layout
    </div>

    @RenderSection("Footer")

    <div class="layout">
        This is part of the layout
    </div>
</body>
</html>
```

在 Razor 对布局进行解析时，RenderSection 辅助器方法会显示视图中指定名称的分段内容。视图中未包含在分段中的内容，会插入在布局中使用 RenderBody 辅助器方法的地方

注意： 一个视图只能定义在布局中被引用的分段。如果试图在视图中定义布局中无对应 @RenderSection 辅助器调用的分段，MVC 框架会抛出异常

一般情况下，不要把分段与视图的其余部分混杂在一起。其约定是，在视图的开始或结尾部分定义分段，以便更容易看到哪些内容区域被处理成分段，以及哪些将要由 RenderBody 辅助器方法来捕捉。我比较喜欢把视图定义成一个个独立的分段，并包括一个 Body 分段

```csharp
@model string[]

@{
    ViewBag.Title = "Index";
    Layout = "~/Views/Shared/_Layout.cshtml";
}

@section Header {
    <div class="view">
        @foreach (string str in new[] { "Home", "List", "Edit" })
        {
            @Html.ActionLink(str, str, null, new { style = "margin: 5px" })
        }
    </div>
}

@section Body {
    <div class="view">
        This is a list of fruit names:
        @foreach (string name in Model)
        {
            <span><b>@name</b></span>
        }
    </div>
}

@section Footer {
    <div class="view">
        This is the footer
    </div>
}
```

这种办法有利于建立更清晰的视图，并减少了 RenderBody 捕捉无关内容的情况 为了使用这种方法，我们得用 RenderSection ("Body") 替换对 RenderBody 辅助器的调用

```csharp
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <style type="text/css">
        div.layout {
            background-color: lightgray;
        }

        div.view {
            border: thin solid black;
            margin: 10px 0;
        }
    </style>
    <title>@ViewBag.Title</title>
</head>
<body>

    @RenderSection("Header")

    <div class="layout">
        This is part of the layout
    </div>

    @RenderSection("Body")

    <div class="layout">
        This is part of the layout
    </div>

    @RenderSection("Footer")

    <div class="layout">
        This is part of the layout
    </div>
</body>
</html>
```

1. 对分段进行测试 你可以检查一个视图是否已经定义了布局中的一个特定片段。如果一个视图不需要或不希望提供特定内容，那么，对一个分段提供默认内容是一种有用的方式

   ```csharp
   ...
   @if (IsSectionDefined("Footer"))
   {
       @RenderSection("Footer")
   }
   else
   {
       <h4>This is the default footer</h4>
   }
   ...
   ```

   IsSectionDefined 辅助器以需要检查的分段名为参数，如果渲染的视图定义了这个分段则返回 true

2. 渲染可选分段 默认情况下，视图必须含有布局中调用 ReaderSection 的所有分段。如果缺少分段，MVC 框架会向用户报一个异常 可以使用 IsSectionDefined 方法，来避免 RenderSection 调用视图中未定义的分段。但更优雅的方式是使用可选分段，即给 RenderSection 方法传递一个附加的 false 值

   ```csharp
   ...
   @RenderSection("scripts", false)
   ...
   ```

   这样如果视图中定义了它，其内容将会被插入到结果中，否则和不会抛出异常

   使用分部视图 通常需要在应用程序中多个不同的地方，使用同样的 Razor 标签和 HTML 标记片段。采取的办法不是重复这些标记，而是采用 **分部视图 (PartialView)** 。分部视图是含有标签和标记片段的独立视图文件，并且可以被包含在其他视图之中。

   **创建分部视图** 右击 /Viwes/Shared 文件夹 → Add (添加) → View (视图)，设置视图名并选中 "Create as a partial view (创建分部视图)" 复选框

   ```csharp
   <div>
       This is the message from the partial view.
       @Html.ActionLink("This is a link to the Index action", "Index")
   </div>
   ```

   分部视图仅包含一个 HTML 片段，而不是一个完整的 HTML 文档。在分部视图中可以混用 HTML 标记和 Razor 标签。可以在另一个视图中调用 Html.Partial 这一辅助器方法来使用一个分部视图

   ```csharp
   @{
       ViewBag.Title = "List";
       Layout = null;
   }
   
   <h3>This is the /Views/Common/List.cshtml View</h3>
   
   @Html.Partial("MyPartial")
   ```

   这里并未指定分部视图文件的扩展名。当要渲染的视图中调用 Html.Partial 方法时，视图引擎会在常规位置处查找分部视图

   提示：Razor 视图引擎对分部视图的查找方式，与规则视图相同。这意味着，你可以创建控制器专用的特殊版本的分部视图，它会覆盖 Shared 文件夹中同名的分部视图。

   **使用强类型分部视图** 你可以创建强类型分部视图，然后在渲染这个分部视图时传递要使用的视图模型对象

   ```csharp
   @model IEnumerable<string>
   
   <div>
       This is the message from the partial view.
       <ul>
           @foreach (string str in Model)
           {
               <li>@str</li>
           }
       </ul>
   </div>
   ```

   这里使用了 @foreach 标签，以便将视图模型对象的内容显示成 HTML 列表项 使用强类型分部视图，与前一个例子的差别在于，需要给 Partial 辅助器方法传递一个额外的参数，它定义了视图的模型对象

   ```csharp
   @{
       ViewBag.Title = "List";
       Layout = null;
   }
   
   <h3>This is the /Views/Common/List.cshtml View</h3>
   
   @Html.Partial("MyStronglyTypedPartial", new[] { "Apple", "Orange", "Pear" })
   ```

使用子动作 **子动作 (Child Action)** 是通过视图调用的动作方法，当你希望将某种控制器逻辑应用于应用程序的多个地方时，子动作可以让你避免重复的控制器逻辑。子动作与动作之间的关系，如同分部视图与视图一样。无论何时，当希望显示一些数据驱动的 "小部件"，这些小部件要出现在多个页面上，而且含有与主动作无关的数据时，你可能就会希望使用子动作。在 SportsStore 例子中便使用了这种技术，以便在每个页面包含一个数据驱动的导航菜单

1. 创建子动作 任何动作都可以作为一个子动作

   ```csharp
   using System;
   using System.Web.Mvc;
   
   namespace WorkingWithRazor.Controllers
   {
       public class HomeController : Controller
       {
           public ActionResult Index()
           {
               string[] names = { "Apple", "Orange", "Pear" };
               return View(names);
           }
   
           public ActionResult List()
           {
               return View();
           }
   
           [ChildActionOnly]
           public ActionResult Time()
           {
               return PartialView(DateTime.Now);
           }
       }
   }
   ```

   这里的子动作方法为 Time，通过调用 PartialView 方法，将渲染一个分部视图。ChildActionOnly 注解属性可以确保此动作方法只能在视图中作为子动作进行调用。一个动作方法并不一定要使用这一注解属性才能作为子动作，但这一注解属性可以防止该动作方法作为用户请求的结果被调用 这个例子中子动作返回一个典型地分部视图，但这不是必须的

   ```csharp
   @model DateTime
   
   <p>The time is: @Model.ToShortTimeString()</p>
   ```

2. 渲染子动作 可以用 HTML.Action 辅助器来调用子动作。通过此辅助器，执行了动作方法，处理了 ViewResult，于是其输出被注入到发送给客户端的响应

   ```csharp
   @{
       ViewBag.Title = "List";
       Layout = null;
   }
   
   <h3>This is the /Views/Common/List.cshtml View</h3>
   
   @Html.Partial("MyStronglyTypedPartial", new[] { "Apple", "Orange", "Pear" })
   
   @Html.Action("Time")
   ```

   在这个例子中调用 Action 辅助器时，提供了单一的参数，以指定要调用的动作方法名称。这回导致 MVC 框架在处理当前请求的控制器中查找一个动作方法。为了调用其它控制器中的动作方法，需要提供控制器名称

   ```csharp
   ...
   @Html.Action("Time", "MyController")
   ...
   ```

   通过提供一个匿名类型对象，其属性对应于子动作方法的参数名，可以将参数传递给动作方法。例如，如果子动作方法如下：

   ```csharp
   ...
   [ChildActionOnly]
   public ActionResult Time(DateTime time)
   {
       return PartialView(time);
   }
   ...
   ```

   那么，可以在一个视图中按如下方式调用它：

   ```csharp
   ...
   @Html.Action("Time", new { time = DateTime.Now })
   ...
   ```

# 第 21 章 辅助器方法

辅助器方法的作用是对代码块和标记进行打包，以便能够在整个 MVC 框架应用程序中重用

## 准备示例项目

## 创建自定义辅助器方法

创建内联的辅助器方法 最简单的一种辅助器方法是 **内联辅助器 (Inline Helper)** ，它是在视图中进行定义的。我们可以使用 @helper 标签创建一个内联辅助器

```csharp
@model string

@{
    Layout = null;
}

@helper ListArrayItems(string[] items)
    {
        foreach (string str in items)
        {
            <b>@str </b>
        }
}
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width" />
    <title>Index</title>
</head>
<body>
    <div>
        Here are the fruits: @ListArrayItems(ViewBag.Fruits)
    </div>
    <div>
        Here are the cities: @ListArrayItems(ViewBag.Cities)
    </div>
    <div>
        Here is the message:
        <p>@Model</p>
    </div>
</body>
</html>
```

类似于规则的 C# 方法，内联辅助器具有名称和参数。虽然内联辅助器看上去像是一个方法，但它没有返回值。辅助器体的内容被处理，并被放到对客户端的响应之中

提示： 在使用内联辅助器时，不需要将 ViewBag 的动态属性转换成字符串数组。这种辅助器方法的一个良好特性是，它能在运行时巧妙地评估类型

内联辅助器的体遵循 Razor 视图其余部分的同样语法 这种办法的好处是，如果希望改变数组内容的显示方式，只需要在一处进行修改

创建外部辅助器方法 内联辅助器是方便的，但它们只能在声明它们的视图中使用，而且如果内联辅助器太复杂可能会占据视图，而使视图难以阅读 一个可选的办法是创建外部的 HTML 辅助器方法，它被表示成 C# 的扩展方法 在 Infrastructure 文件夹中添加一个名为 CustomHelpers.cs 的类文件

```csharp
using System.Web.Mvc;

namespace HelperMethods.Infrastructure
{
    public static class CustomHelpers
    {
        public static MvcHtmlString ListArrayItems(this HtmlHelper html, string[] list)
        {
            TagBuilder tag = new TagBuilder("ul");

            foreach (string str in list)
            {
                TagBuilder itemTag = new TagBuilder("li");
                itemTag.SetInnerText(str);
                tag.InnerHtml += itemTag.ToString();
            }

            return new MvcHtmlString(tag.ToString());
        }
    }
}
```

这里创建的辅助器方法实现了前述示例中内联辅助器同样的功能。它以字符串数组为参数，并生成了一个 HTML 的 ul 元素，为数组中的每一个 string 构成了一个 li 元素 HtmlHelper 能够在创建内容时对有用的信息进行访问

HtmlHelper 类定义的有用属性

| 属性            | 描述                                                         |
| :-------------- | :----------------------------------------------------------- |
| RouteCollection | 返回应用程序定义的路由集合                                   |
| ViewBag         | 返回视图数据包，这些数据是从动作方法传递给调用辅助器方法的视图的 |
| ViewContext     | 返回 ViewContext 对象，该对象能够对请求的细节以及请求的处理方式进行访问 |

当你希望创建的内容与正在处理的请求有关时，ViewContext 属性是最有用的

ViewContext 类定义的有用属性

| 属性          | 描述                                              |
| :------------ | :------------------------------------------------ |
| Controller    | 返回处理当前请求的控制器                          |
| HttpContext   | 返回描述当前请求的 HttpContext 对象               |
| IsChildAction | 如果调用辅助器的视图由一个子动作渲染，则返回 true |
| RouteData     | 返回请求的路由数据                                |
| View          | 返回调用辅助器方法的 IView 实现的实例             |

在一个辅助器方法中，创建 HTML 最容易的方式是使用 TagBuilder 类，它能够建立 HTML 字符串，而不需要处理各种转义及特殊字符。TagBuilder 类属于 System.Web.WebPages.Mvc 程序集，但使用了一个叫做 **类型转发** 的特性，使它看上去好像属于 System.Web.Mvc 程序集。这两个程序集都由 Visual Studio 加到了 MVC 的项目，因此，你可以很方便地使用 TagBuilder 类。不过，它并未出现在微软开发者网络 (MSDN) 的 API 文档中 上述示例创建了一个性的 TagBuilder 实例，在其中传递了希望构造的 HTML 元素名称，以作为其构造器参数。注意，不需要使用尖括号 ("<" 和 ">")

```csharp
...
TagBuilder tag = new TagBuilder("ul");
...
```

TagBuilder 类的一些成员

| 成员                                 | 描述                                                         |
| :----------------------------------- | :----------------------------------------------------------- |
| InnerHtml                            | 这是一个以 HTML 字符串来设置元素内容的属性。赋给这个属性的值将不进行编码 |
| SetInnerText(string)                 | 设置 HTML 元素的文本内容。string 参数将被编码，以使它安全显示 |
| AddCssClass(string)                  | 对 HTML 元素添加一个 CSS 的 class                            |
| MergeAttribute(string, string, bool) | 对 HTML 元素添加一个标签属性。第一个参数是标签属性名称，第二个是它的值。bool 参数指定是否替换已经存在的同名标签属性 |

HTML 辅助器方法的返回值是一个 MvcHtmlString 对象，其内容被直接写入客户端响应。对于上述示例辅助器，对新的 MvcHtmlString 对象构造器传递的是 TagBuilder.ToString 方法的结果

```csharp
...
return new MvcHtmlString(tag.ToString());
...
```

该语句生成了 HTML 片段

使用自定义的外部辅助器方法 使用自定义的外部辅助器方法，与使用内联辅助器方法略有不同

```csharp
@model string
@using HelperMethods.Infrastructure

@{
    Layout = null;
}

<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width" />
    <title>Index</title>
</head>
<body>
    <div>
        Here are the fruits: @Html.ListArrayItems((string[])ViewBag.Fruits)
    </div>
    <div>
        Here are the cities: @Html.ListArrayItems((string[])ViewBag.Cities)
    </div>
    <div>
        Here is the message:
        <p>@Model</p>
    </div>
</body>
</html>
```

这里需要确保引用了辅助器扩展方法所在的命名空间，这是使用 @using 标签实现的，但如果你正在开发大量的自定义辅助器，可能会希望将命名空间添加到 /Views/Web.config 文件，以使它们在视图中总是可用的 这里使用 `@Html.<helper>` 引用了辅助器，该表达式中的 HTML 是视图基类定义的一个属性，它返回 HtmlHelper 对象 传递给辅助器方法的数据，需要将 ViewBag 对象的动态属性转换成外部辅助器所定义的类型

了解使用辅助器方法的时机 只使用辅助器方法以减少视图中的重复量，并且只用于最简单的内容。对于更复杂的标记和内容使用分部视图。而在需要执行模型数据的操作时使用子动作

管理辅助器方法中的字符串编码 MVC 框架通过对数据进行自动编码，以便能够将数据安全地添加到 Web 页面

动作方法的返回值中包含一个 HTML 元素

```csharp
using System.Web.Mvc;

namespace HelperMethods.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Fruits = new string[] { "Apple", "Orange", "Pear" };
            ViewBag.Cities = new string[] { "New York", "London", "Paris" };

            string message = "This is an HTML element: <input>";

            return View((object)message);
        }
    }
}
```

但当 Razor 渲染该值时，将产生以下 HTML

```csharp
...
<div>
    Here is the message:
    <p>This is an HTML element: &lt;input&gt;</p>
</div>
...
```

这是一种基本的安全性保护，它可以防止数据值被浏览器解释成为有效的标记。但是，辅助器方法却需要能够生成 HTML。因此，视图引擎对它们给予了更高的信任等级，这可能需要一些特别的注意

1. 演示问题
2. 对辅助器方法的内容进行编码 有两种不同的方式可以解决这种问题，选择哪种方式应根据辅助器方法产生的内容的性质而定。最简单的方法是将辅助器方法的类型改为 sring。这回警告视图引擎，所生成的内容是不安全的，在将其添加到视图之前应该先进行编码

```csharp
using System.Web.Mvc;
using System;

namespace HelperMethods.Infrastructure
{
    public static class CustomHelpers
    {
        public static MvcHtmlString ListArrayItems(this HtmlHelper html, string[] list)
        {
            TagBuilder tag = new TagBuilder("ul");
            foreach (string str in list)
            {
                TagBuilder itemTag = new TagBuilder("li");
                itemTag.SetInnerText(str);
                tag.InnerHtml += itemTag.ToString();
            }
            return new MvcHtmlString(tag.ToString());
        }

        public static string DisplayMessage(this HtmlHelper html, string msg)
        {
            return String.Format("This is the message: <p>{0}</p>", msg);
        }
    }
}
```

这一技术会使 Razor 对辅助器返回的所有内容进行编码，在你打算生成 HTML 元素时，这可能会有问题，但另一方面这又是非常方便的

利用这种方法可以解决 input 元素的问题，但对 p 元素也做了编码，这不是我们所需要的。在这些情况下，我们需要更具选择性，并且只对数值进行编码

```csharp
...
public static MvcHtmlString DisplayMessage(this HtmlHelper html, string msg)
{
    string encodedMessage = html.Encode(msg);
    string result = String.Format("This is the message: <p>{0}</p>", encodedMessage);

    return new MvcHtmlString(result);
}
...
```

HtmlHelper 类定义了一个名为 Encode 的方法，它可以解决这一问题而对字符串值进行编码，以使它能够安全地包含到视图之中。这种技术的问题是，你需要记得去做它。值得提醒的是，在以上方法中，一开始就明确地对所有数据值进行了编码，我建议你也采取类似的办法

## 使用内建的 Form 辅助器方法

创建 Form 元素

在 Models 文件夹中创建一个名称为 Product.cs 的文件

```csharp
using System;

namespace HelperMethods.Models
{
    public class Person
    {
        public int PersonId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime BirthDate { get; set; }
        public Address HomeAddress { get; set; }
        public bool IsApproved { get; set; }
        public Role Role { get; set; }
    }

    public class Address
    {
        public string Line1 { get; set; }
        public string Line2 { get; set; }
        public string City { get; set; }
        public string PostalCode { get; set; }
        public string Country { get; set; }
    }

    public enum Role
    {
        Admin,
        User,
        Guest
    }
}
```

在 Home 控制器中添加新的动作方法

```csharp
using System.Web.Mvc;
using HelperMethods.Models;

namespace HelperMethods.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Fruits = new string[] { "Apple", "Orange", "Pear" };
            ViewBag.Cities = new string[] { "New York", "London", "Paris" };
            string message = "This is an HTML element: <input>";
            return View((object)message);
        }

        public ActionResult CreatePerson()
        {
            return View(new Person());
        }

        [HttpPost]
        public ActionResult CreatePerson(Person person)
        {
            return View(person);
        }
    }
}
```

这是处理 HTML 表单的两种标准法方法，依靠模型绑定，MVC 框架将通过表单数据创建一个 Person 对象，并将其传递给带有 HttpPost 注解属性的动作方法

在 /Views/Home 文件夹中创建一个名为 CreatePerson.cshtml 的视图文件

```csharp
@model HelperMethods.Models.Person

@{
    ViewBag.Title = "CreatePerson";
    Layout = "/Views/Shared/_Layout.cshtml";
}

<h2>CreatePerson</h2>

<form action="/Home/CreatePerson" method="post">
    <div class="dataElem">
        <label>PersonId</label>
        <input name="personId" value="@Model.PersonId" />
    </div>
    <div class="dataElem">
        <label>First Name</label>
        <input name="FirstName" value="@Model.FirstName" />
    </div>
    <div class="dataElem">
        <label>Last Name</label>
        <input name="lastName" value="@Model.LastName" />
    </div>
    <input type="submit" value="Submit" />
</form>
```

该视图含有一个非常标准的手工创建的表单，其中用模型对象对 input 元素的 value 标签属性设置了值

注意： 这里已经设置了所有 input 元素中 name 标签属性的值，以便与 input 元素显示的模型属性相对应。在处理 post 请求时，MVC 框架默认的模型绑定器会使用 name 属性，用 input 元素包含的值构造模型类型的属性值。如果省略了 name 属性，表单将不能正确工作

注意： 用辅助器方法生成 form、input 等 HTML 元素并不是必须的。如果喜欢，你也可以手工编写静态的 HTML 标签，并用视图数据或视图模型对象对它们进行填充。使用辅助器方法可以很轻松地确保 HTML 与应用程序同步，如果改变了路由配置，将自动地反映到表单中。使用辅助器方法是为了方便，而不是因为它们创建了必需的或特殊的 HTML，如果它们不适合你的开发风格，完全可以不必使用它们

创建表单元素 两个最有用 (且最常用) 的辅助器是 Html.BeginForm 和 Html.EndForm。这些辅助器创建 HTML 的 form 标签，并且会根据应用程序的路由机制，为这个 form 生成一个有效的 action 标签属性 Html.BeginForm 方法有 13 个不同的版本，让你能够越来越具体地说明要生成的 form 元素。EndForm 辅助器只有一个定义，它只是给视图添加 `</form>`，以关闭标签

```csharp
@model HelperMethods.Models.Person

@{
    ViewBag.Title = "CreatePerson";
    Layout = "/Views/Shared/_Layout.cshtml";
}

<h2>CreatePerson</h2>

@{Html.BeginForm();}
<div class="dataElem">
    <label>PersonId</label>
    <input name="personId" value="@Model.PersonId" />
</div>
<div class="dataElem">
    <label>First Name</label>
    <input name="FirstName" value="@Model.FirstName" />
</div>
<div class="dataElem">
    <label>Last Name</label>
    <input name="lastName" value="@Model.LastName" />
</div>
<input type="submit" value="Submit" />
@{Html.EndForm();}
```

注意，必须将辅助器方法的调用处理成一条 C# 语句。这是因为辅助器方法将其标签写到输出的方式。这个结果相当丑陋，但没关系，因为辅助器方法很少这样使用。一种更为常用的做法是，将 BeginForm 辅助器方法的调用封装在一个 using 表达式中。在 using 语句的最后，.NET 运行时会在 BeginForm 方法返回的对象上调用 Dispose 方法，这会为你调用 EndForm 方法

```csharp
@model HelperMethods.Models.Person

@{
    ViewBag.Title = "CreatePerson";
    Layout = "/Views/Shared/_Layout.cshtml";
}

<h2>CreatePerson</h2>

@using (Html.BeginForm())
{
    <div class="dataElem">
        <label>PersonId</label>
        <input name="personId" value="@Model.PersonId" />
    </div>
    <div class="dataElem">
        <label>First Name</label>
        <input name="FirstName" value="@Model.FirstName" />
    </div>
    <div class="dataElem">
        <label>Last Name</label>
        <input name="lastName" value="@Model.LastName" />
    </div>
    <input type="submit" value="Submit" />
}
```

这种方法称为自关闭表单

BeginForm 辅助器方法的一些重载

| 重载                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| BeginForm()                                                  | 创建一个表单，回递给源动作方法                               |
| BeginForm(action, controller)                                | 创建一个表单，回递给以字符串形式指定的动作方法和控制器       |
| BeginForm(action, controller, method)                        | 上一个方法的重载版本，但可以使用 System.Web.Mvc.FormMethod 枚举一个值，来指定 form 元素中 method 标签属性的值 |
| BeginForm(action, controller, method, attributes)            | 上一个方法的重载版本，但能够为 form 元素的标签属性指定一个对象，该对象的属性作为标签属性的名称 |
| BeginForm(action, controller, routeValues, method, attributes) | 上一个方法的重载，但能够为应用程序路由配置中的路由片段变量指定一个值，这个值作为一个对象，该对象的属性对应于路由变量 |

```csharp
@model HelperMethods.Models.Person

@{
    ViewBag.Title = "CreatePerson";
    Layout = "/Views/Shared/_Layout.cshtml";
}

<h2>CreatePerson</h2>

@using (Html.BeginForm("CreatePerson", "Home",
 new { id = "MyIdValue" }, FormMethod.Post,
 new { @class = "personClass", data_formType = "person" }))
{
    <div class="dataElem">
        <label>PersonId</label>
        <input name="personId" value="@Model.PersonId" />
    </div>
    <div class="dataElem">
        <label>First Name</label>
        <input name="FirstName" value="@Model.FirstName" />
    </div>
    <div class="dataElem">
        <label>Last Name</label>
        <input name="lastName" value="@Model.LastName" />
    </div>
    <input type="submit" value="Submit" />
}
```

以下是调用 BeginForm 所产生的 HTML form 标签

```csharp
...
<form action="/Home/CreatePerson/MyIdValue" class="personClass" data-formType="person" method="post">
...
```

在代码中不能指定带连字符的动态对象，因此我使用了下划线，该下划线然后会被自动地映射成连字符，巧妙地避开了 C# 和 HTML 语法之间的不搭配

指定表单使用的路由 当使用 BeginForm 方法时，MVC 框架会在能够用来生成指定动作和控制器目标的 URL 的路由配置中找出第一条。从本质上说，这是让 MVC 框架去判断进行路由选择。如果希望确保使用一条特定的路由，那么可以使用 BeginRouteForm 方法

在 /App_Start/RouteConfig.cs 文件中加入一条新的路由

```csharp
...
routes.MapRoute(
    name: "FormRoute",
    url: "app/forms/{controller}/{action}"
);
...
```

如果在这一条路由配置下调用 BeginForm 方法，最终得到的 form 中，action 标签属性包含的 URL 是通过默认路由创建的。可以通过 BeginRouteForm 方法，来指定应当使用新路由

```csharp
@model HelperMethods.Models.Person

@{
    ViewBag.Title = "CreatePerson";
    Layout = "/Views/Shared/_Layout.cshtml";
}

<h2>CreatePerson</h2>

@using (Html.BeginRouteForm("FormRoute", new { }, FormMethod.Post,
 new { @class = "personClass", data_formType = "person" }))
{
    <div class="dataElem">
        <label>PersonId</label>
        <input name="personId" value="@Model.PersonId" />
    </div>
    <div class="dataElem">
        <label>First Name</label>
        <input name="FirstName" value="@Model.FirstName" />
    </div>
    <div class="dataElem">
        <label>Last Name</label>
        <input name="lastName" value="@Model.LastName" />
    </div>
    <input type="submit" value="Submit" />
}
```

这将产生下列 form 标签

```csharp
...
<form action="/app/forms/Home/CreatePerson" class="personClass" data-formType="person" method="post">
...
```

提示： BeginRouteForm 方法有一系列重载，就像 BeginForm 方法那样

使用输入辅助器 仅有 HTML 的 form 是没用的，除非还创建了一些 input 元素。下表列出了一些基本的辅助器方法，所有这些辅助器方法的第一个参数都用于设置 input 元素的 id 和 name 标签属性值，第二个参数用于设置 value 标签属性

基本的 Input HTML 辅助器

| HTML 元素    | 示例                                             |
| :----------- | :----------------------------------------------- |
| Check box    | Html.CheckBox ("myCheckbox", false)              |
| Hidden field | Html.Hidden ("myHidden", "val")                  |
| Radio button | Html.RadioButton ("myRadiobutton", "val", true)  |
| Password     | Html.Password ("myPassword", "val")              |
| Text area    | Html.TextArea ("myTextarea", "val", 5, 20, null) |
| Text box     | Html.TextBox ("myTextbox", "val")                |

上述每个辅助器都是重载的，这里只列出了最简单的版本，但你可以提供一个额外的 object 参数，以指定 HTML 属性

注意： CheckBox 辅助器渲染了两个 input 元素。它渲染了一个 checkbox 和随后的一个同名的隐藏 input 元素。这是因为浏览器在 checkbox 未做出选择时，不会递交 checkbox 的值。有了这个隐藏控件，可以确保 MVC 框架在作出选择后，从这个隐藏字段获得一个值

使用基本的 input 元素辅助器方法

```csharp
@model HelperMethods.Models.Person

@{
    ViewBag.Title = "CreatePerson";
    Layout = "/Views/Shared/_Layout.cshtml";
}

<h2>CreatePerson</h2>

@using (Html.BeginRouteForm("FormRoute", new { }, FormMethod.Post,
 new { @class = "personClass", data_formType = "person" }))
{
    <div class="dataElem">
        <label>PersonId</label>
        @Html.TextBox("personId", @Model.PersonId)
    </div>
    <div class="dataElem">
        <label>First Name</label>
        @Html.TextBox("firstName", @Model.FirstName)
    </div>
    <div class="dataElem">
        <label>Last Name</label>
        @Html.TextBox("lastName", @Model.LastName)
    </div>
    <input type="submit" value="Submit" />
}
```

该视图产生的 HTML input 元素与前述 form 元素很相似，但可以看到出现了一些 data 形式的标签属性，这些是 MVC 框架添加的提示，用以支持表单验证

```csharp
...
<form action="/app/forms/Home/CreatePerson" class="personClass" data-formType="person"
      method="post">
    <div class="dataElem">
        <label>PersonId</label>
        <input data-val="true" data-val-number="The field PersonId must be a number."
               data-val-required="The PersonId field is required." id="personId"
               name="personId" type="text" value="0" />
    </div>
    <div class="dataElem">
        <label>First Name</label>
        <input id="firstName" name="firstName" type="text" value="" />
    </div>
    <div class="dataElem">
        <label>Last Name</label>
        <input id="lastName" name="lastName" type="text" value="" />
    </div>
    <input type="submit" value="Submit" />
</form>
...
```

1. 根据模型属性创建 input 元素 之前使用的辅助器方法很好，但仍然必须确保传递的第一个参数值与第二个参数的模型值相对应。如果不一致 MVC 框架将不能通过表单数据重构模型对象。对于之前列出的每一个辅助器方法还有另一种重载版本，它只接受一个单一的字符串参数

   ```csharp
   @model HelperMethods.Models.Person
   
   @{
       ViewBag.Title = "CreatePerson";
       Layout = "/Views/Shared/_Layout.cshtml";
   }
   
   <h2>CreatePerson</h2>
   
   @using (Html.BeginRouteForm("FormRoute", new { }, FormMethod.Post,
   new { @class = "personClass", data_formType = "person" }))
   {
       <div class="dataElem">
           <label>PersonId</label>
           @Html.TextBox("PersonId")
       </div>
       <div class="dataElem">
           <label>First Name</label>
           @Html.TextBox("firstName")
       </div>
       <div class="dataElem">
           <label>Last Name</label>
           @Html.TextBox("lastName")
       </div>
       <input type="submit" value="Submit" />
   }
   ```

   这将使用这个 string 参数搜索视图数据 ViewBag 和视图模型，以找到一个能用于 input 元素的相应数据项。因此如果调用 @Html.TextBox ("DataValue")，MVC 框架会尝试找出于这个键 DataValue 相关联的某个数据项。这将检查以下几个位置：

   * ViewBag.DataValue
   * @Model.DataValue

     找到的第一个值将用于设置生成 HTML 的 value 标签属性，最后对 @Model.DataValue 的检查，只有该视图的视图模型中含有名称为 DataValue 的属性或字段时，才会起作用 如果指定的是一个如 DataValue.First.Name 这样的字符串，这种搜索就会变得更复杂。MVC 框架会尝试这个点分隔元素的不同排列，如下所示：

   * ViewBag.DataValue.First.Name
   * ViewBag.DataValue["First"].Name
   * ViewBag.DataValue["First.Name"]
   * ViewBag.DataValue["First"]["Name"]

   这会检查上述各种变换，同样，找到的第一个值就会被应用，搜索随之终止。这一技术显然有一个性能问题，但要记住的是视图包中通常只有几个数据项，因此搜遍这些数据项一般不需要太多时间

2. 使用强类型的 input 辅助器 对于之前列出的每一个辅助器方法都有一个对应的强类型辅助器。这些辅助器只能用于强类型视图

   强类型 Input HTML 辅助器

   | HTML 元素    | 示例                                           |
   | :----------- | :--------------------------------------------- |
   | Check box    | Html.CheckBoxFor (x => x.IsApproved)           |
   | Hidden field | Html.HiddenFor (x => x.FirstName)              |
   | Radio button | Html.RadioButtonFor (x => x.IsApproved, "val") |
   | Password     | Html.PasswordFor (x => x.Password)             |
   | Text area    | Html.TextAreaFor (x => x.Bio, 5, 20, new {})   |
   | Text box     | Html.TextBoxFor (x => x.FirstName)             |

   这些强类型 input 辅助器以 lambda 表达式进行工作。传递给表达式的值是视图模型对象，以及可以选择的字段或属性，它们将被用于设置 value 标签属性

   ```csharp
   @model HelperMethods.Models.Person
   
   @{
       ViewBag.Title = "CreatePerson";
       Layout = "/Views/Shared/_Layout.cshtml";
   }
   
   <h2>CreatePerson</h2>
   
   @using (Html.BeginRouteForm("FormRoute", new { }, FormMethod.Post,
   new { @class = "personClass", data_formType = "person" }))
   {
       <div class="dataElem">
           <label>PersonId</label>
           @Html.TextBoxFor(m => m.PersonId)
       </div>
       <div class="dataElem">
           <label>First Name</label>
           @Html.TextBoxFor(m => m.FirstName)
       </div>
       <div class="dataElem">
           <label>Last Name</label>
           @Html.TextBoxFor(m => m.LastName)
       </div>
       <input type="submit" value="Submit" />
   }
   ```

   通过这些辅助器生成的 HTML 没有什么不同，但我们通常会在项目中使用强类型的辅助器方法，因为它们减少了由于输错属性名称而引起错误的机会

   创建 select 元素 下面列出了可以用来创建 select 元素的辅助器方法。可以用于从一个下拉列表选择一个单项，或表现一个允许多选的多项 select 元素。和其他表单元素一样，这些辅助器也有弱类型和强类型版本

   渲染 Select 元素的 HTML 辅助器

   | HTML 元素       | 示例                                                         |
   | :-------------- | :----------------------------------------------------------- |
   | Drop-down list  | Html.DropDownList("myList", new SelectList(new [] {"A", "B"}), "Choose") |
   | Drop-down list  | Html.DropDownListFor (x => x.Gender, new SelectList (new [] {"M", "F"})) |
   | Multiple-select | Html.ListBox ("myList", new MultiSelectList (new [] {"A", "B"})) |
   | Multiple-select | Html.ListBoxFor (x => x.Vals, new MultiSelectList (new [] {"A", "B"})) |

   Select 辅助器以 SelectList 或 MultiSelectList 为参数。这些类的差异在于 MultiSelectList 有构造器选项，在最初渲染页面时，让你指定被选择的多个初值 这两个类都基于 IEnumerable 对象序列进行操作。在   上表中，创建了想要显示的列表项内联数组，但是 SelectList 和 MultiSelectList 有一个很好的特性，它们能够为这个列表项提取对象的值，包括模型对象的值

   ```csharp
   @model HelperMethods.Models.Person
   
   @{
       ViewBag.Title = "CreatePerson";
       Layout = "/Views/Shared/_Layout.cshtml";
   }
   
   <h2>CreatePerson</h2>
   
   @using (Html.BeginRouteForm("FormRoute", new { }, FormMethod.Post,
   new { @class = "personClass", data_formType = "person" }))
   {
       <div class="dataElem">
           <label>PersonId</label>
           @Html.TextBoxFor(m => m.PersonId)
       </div>
       <div class="dataElem">
           <label>First Name</label>
           @Html.TextBoxFor(m => m.FirstName)
       </div>
       <div class="dataElem">
           <label>Role</label>
           @Html.DropDownListFor(m => m.Role, new SelectList(Enum.GetNames(typeof(HelperMethods.Models.Role))))
       </div>
       <input type="submit" value="Submit" />
   }
   ```

   这里定义了 Role 属性，它是来自同一个类文件中所定义的 Role 的枚举值。因为 SelectList 和 MultiSelectList 对象是在 IEnumerable 对象上进行操作的，所以我需要使用 Enum.GetNames 方法，以便能够用    Role 的枚举作为 select 元素的源

   最终生成了如下 HTML

   ```csharp
   ...
   <div class="dataElem">
       <label>Role</label>
       <select data-val="true" data-val-required="The Role field is required."
               id="Role" name="Role">
           <option selected="selected">Admin</option>
           <option>User</option>
           <option>Guest</option>
       </select>
   </div>
   ...
   ```

# 第 22 章 模板辅助器方法

前一章介绍了 HTML 辅助器，如 Html.CheckBoxFor 和 Html.TextBoxFor 等，它们生成了特定类型的 HTML 元素，这意味着我必须进一步决定该使用哪种类型的元素去表现模型属性，并且在属性的类型发生变化时要手动更新视图 利用 **模板辅助器方法 (Templated Helper Method)** ，我们可以指定想要显示的属性，而让 MVC 框架去判断应该使用什么样的 HTML 元素

## 准备示例项目

创建 Person.cs 模型类

```csharp
using System;

namespace HelperMethods.Models
{
    public class Person
    {
        public int PersonId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime BirthDate { get; set; }
        public Address HomeAddress { get; set; }
        public bool IsApproved { get; set; }
        public Role Role { get; set; }
    }

    public class Address
    {
        public string Line1 { get; set; }
        public string Line2 { get; set; }
        public string City { get; set; }
        public string PostalCode { get; set; }
        public string Country { get; set; }
    }

    public enum Role
    {
        Admin,
        User,
        Guest
    }
}
```

创建 HomeController.cs 控制器

```csharp
using System.Web.Mvc;
using HelperMethods.Models;

namespace HelperMethods.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Fruits = new string[] { "Apple", "Orange", "Pear" };
            ViewBag.Cities = new string[] { "New York", "London", "Paris" };
            string message = "This is an HTML element: <input>";
            return View((object)message);
        }

        public ActionResult CreatePerson()
        {
            return View(new Person());
        }

        [HttpPost]
        public ActionResult CreatePerson(Person person)
        {
            return View(person);
        }
    }
}
```

创建 CreatePerson.cshtml 视图

```csharp
@model HelperMethods.Models.Person

@{
    ViewBag.Title = "CreatePerson";
    Layout = "/Views/Shared/_Layout.cshtml";
    Html.EnableClientValidation(false);
}

<h2>CreatePerson</h2>

@using (Html.BeginRouteForm("FormRoute", new { }, FormMethod.Post,
 new { @class = "personClass", data_formType = "person" }))
{
    <div class="dataElem">
        <label>PersonId</label>
        @Html.TextBoxFor(m => m.PersonId)
    </div>
    <div class="dataElem">
        <label>First Name</label>
        @Html.TextBoxFor(m => m.FirstName)
    </div>
    <div class="dataElem">
        <label>Last Name</label>
        @Html.TextBoxFor(m => m.LastName)
    </div>
    <div class="dataElem">
        <label>Role</label>
        @Html.DropDownListFor(m => m.Role,
              new SelectList(Enum.GetNames(typeof(HelperMethods.Models.Role))))
    </div>
    <input type="submit" value="Submit" />
}
```

默认情况下，辅助器方法会在生成的 HTML 元素上添加 data 属性以支持表单验证。但这里不希望有这些标签属性，因此使用了 Html.EnableClientValidation 方法禁用了当前视图中的客户端验证

## 使用模板辅助器方法

这里打算首先考察的模板辅助器方法是 Html.Editor 和 Html.EditorFor。Editor 方法以一个字符串为参数，用以指定编辑器元素所需要的属性。辅助器遵循前一章所描述的搜索过程，以便在视图包和模型对象中定位一个相关联的属性。EditorFor 方法是强类型的，它能够使用 lambda 表达式指定编辑器元素所要编辑的模型属性

```csharp
@model HelperMethods.Models.Person

@{
    ViewBag.Title = "CreatePerson";
    Layout = "/Views/Shared/_Layout.cshtml";
    Html.EnableClientValidation(false);
}

<h2>CreatePerson</h2>

@using (Html.BeginRouteForm("FormRoute", new { }, FormMethod.Post,
 new { @class = "personClass", data_formType = "person" }))
{
    <div class="dataElem">
        <label>PersonId</label>
        @Html.Editor("PersonId")
    </div>
    <div class="dataElem">
        <label>First Name</label>
        @Html.Editor("FirstName")
    </div>
    <div class="dataElem">
        <label>Last Name</label>
        @Html.EditorFor(m => m.LastName)
    </div>
    <div class="dataElem">
        <label>Role</label>
        @Html.EditorFor(m => m.Role)
    </div>
    <div class="dataElem">
        <label>Birth Date</label>
        @Html.EditorFor(m => m.BirthDate)
    </div>
    <input type="submit" value="Submit" />
}
```

Editor 和 EditorFor 方法创建的 HTML 元素是相同的。唯一的差别在于指定属性的方式 HTML5 规范对 input 元素所编辑的常规的数据类型定义了一些不同的 input 元素类型，如数字和日期。这种 Editor 和 EditorFor 方法对我打算编辑的属性类型，采用了这些新的 input 元素类型中的一种

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>CreatePerson</title>
    <style type="text/css">
        label {
            display: inline-block;
            width: 100px;
        }

        .dataElem {
            margin: 5px;
        }
    </style>
</head>
<body>

    <h2>CreatePerson</h2>
    <form action="/app/forms/Home/CreatePerson" class="personClass"
          data-formType="person" method="post">
        <div class="dataElem">
            <label>PersonId</label>
            <input class="text-box single-line" id="PersonId" name="PersonId"
                   type="number" value="0" />
        </div>
        <div class="dataElem">
            <label>First Name</label>
            <input class="text-box single-line" id="FirstName" name="FirstName"
                   type="text" value="" />
        </div>
        <div class="dataElem">
            <label>Last Name</label>
            <input class="text-box single-line" id="LastName" name="LastName"
                   type="text" value="" />
        </div>
        <div class="dataElem">
            <label>Role</label>
            <input class="text-box single-line" id="Role" name="Role"
                   type="text" value="Admin" />
        </div>
        <div class="dataElem">
            <label>Birth Date</label>
            <input class="text-box single-line" id="BirthDate" name="BirthDate"
                   type="datetime" value="01/01/0001 00:00:00" />
        </div>
        <input type="submit" value="Submit" />
    </form>
</body>
</html>
```

type 标签属性指定了浏览器应当显示的 input 元素种类。辅助器方法为 PersonId 和 BirthDate 属性分别指定了 number 和 datetime 表单类型，并为其他属性指定了默认的 text 类型

提示： 大多数 web UI 工具包包含可以用于替换依赖于 HTML5 的 input 元素类型的数据选择器

由上可见，通过使用模板辅助器方法已经能够对内容定制表单元素，虽然这不是一个特别有用的方式，部分原因是因为还不是所有浏览器都能显示 HTML5 的 input 元素类型，还有部分原因是有些属性，诸如 Role，此刻并未以一种有帮助性的方式进行显示。这里将演示如何为 MVC 框架提供附加信息，以便改善辅助器方法所生成的 HTML。但在详细说明之前，这里打算先展示一些其他可用的模板辅助器

MVC 的 HTML 模板辅助器

| 辅助器     | 示例                              | 描述                                                         |
| :--------- | :-------------------------------- | :----------------------------------------------------------- |
| Display    | Html.Display("FirstName")         | 渲染指定模型属性的只读视图，会根据该属性的类型以及元数据选用一个 HTML 元素 |
| DisplayFor | Html.DisplayFor(x => x.FirstName) | 上一辅助器的强类型版本                                       |
| Editor     | Html.Editor("FirstName")          | 渲染指定模型属性的一个编辑器，会根据该属性的类型以及元数据选用一个 HTML 元素 |
| EditorFor  | Html.EditorFor(x => x.FirstName)  | 上一辅助器的强类型版本                                       |
| Label      | Html.Label("FirstName")           | 渲染指定模型属性的 HTML`<label>` 元素                        |
| LabelFor   | Html.LabelFor(x => x.FirstName)   | 上一辅助器的强类型版本                                       |

生成标签和显示元素 修改 HttpPost 版本的 CreatePerson 方法

```csharp
...
[HttpPost]
public ActionResult CreatePerson(Person person)
{
    return View("DisplayPerson", person);
}
...
```

添加 DisplayPerson.cshtml 视图文件

```csharp
@model HelperMethods.Models.Person

@{
    ViewBag.Title = "DisplayPerson";
    Layout = "/Views/Shared/_Layout.cshtml";
}

<h2>DisplayPerson</h2>

<div class="dataElem">
    @Html.Label("PersonId")
    @Html.Display("PersonId")
</div>
<div class="dataElem">
    @Html.Label("FirstName")
    @Html.Display("FirstName")
</div>
<div class="dataElem">
    @Html.LabelFor(m => m.LastName)
    @Html.DisplayFor(m => m.LastName)
</div>
<div class="dataElem">
    @Html.LabelFor(m => m.Role)
    @Html.DisplayFor(m => m.Role)
</div>
<div class="dataElem">
    @Html.LabelFor(m => m.BirthDate)
    @Html.DisplayFor(m => m.BirthDate)
</div>
```

Label 和 LabelFor 辅助器使用属性名作为标签的内容 Display 和 DisplayFor 方法默认情况下未生成 HTML 元素。它们只是发布了它们所操作的属性值

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>DisplayPerson</title>
    <style type="text/css">
        label {
            display: inline-block;
            width: 100px;
        }

        .dataElem {
            margin: 5px;
        }
    </style>
</head>
<body>

    <h2>DisplayPerson</h2>
    <div class="dataElem">
        <label for="PersonId">PersonId</label>
        100
    </div>
    <div class="dataElem">
        <label for="FirstName">FirstName</label>
        Adam
    </div>
    <div class="dataElem">
        <label for="LastName">LastName</label>
        Freeman
    </div>
    <div class="dataElem">
        <label for="Role">Role</label>
        Admin
    </div>
    <div class="dataElem">
        <label for="BirthDate">BirthDate</label>
        01/01/0001 00:00:00
    </div>
</body>
</html>
```

虽然这些辅助器方法此刻看来并不特别有用，但我们很快便会向你展示如何改变它们的行为，以产生你更希望显示给用户的输出

使用整体模型模板辅助器 以上使用的模板辅助器生成的都是单个属性的输出，但 MVC 框架还定义了一些对整个对象进行操作的辅助器，这一过程称为 **支架 (Scaffolding)** 。一些可用的支架辅助器如下

MVC 的支架模板辅助器

| 辅助器          | 示例                   | 描述                                            |
| :-------------- | :--------------------- | :---------------------------------------------- |
| DisplayForModel | Html.DisplayForModel() | 渲染整个模型对象的只读视图                      |
| EditorForModel  | Html.EditorForModel()  | 渲染整个模型对象的编辑器元素                    |
| LabelForModel   | Html.LabelForModel()   | 渲染对整个模型对象进行引用的 HTML`<label>` 元素 |

使用 LabelForModel 和 EditorForModel 辅助器简化 CreatePerson.cshtml

```csharp
@model HelperMethods.Models.Person

@{
    ViewBag.Title = "CreatePerson";
    Layout = "/Views/Shared/_Layout.cshtml";
    Html.EnableClientValidation(false);
}

<h2>CreatePerson: @Html.LabelForModel()</h2>

@using (Html.BeginRouteForm("FormRoute", new { }, FormMethod.Post,
 new { @class = "personClass", data_formType = "person" }))
{

    @Html.EditorForModel()

    <input type="submit" value="Submit" />
}
```

这种辅助器做了一些事情，但还不完全正确 支架辅助器生成的 HTML 定义了 CSS 样式名

## 使用模型元数据

正如你所看到的，模板辅助器对应用程序及其模型数据类型并没有特别的感知，因而通常会获得非我所需的 HTML 可以采用模型元数据 (Metadata) 为这些辅助器提供指导，告诉它们如何处理模型类型，使模型辅助器得到改善。元数据是用 C# 注解属性来表示的，通过注解属性及其参数值给视图辅助器提供一系列指令。将元数据运用于模型类后辅助器方法在生成 HTML 元素时，会参考这些元数据

用元数据控制编辑及可见性 大多数模型类至少都有一个这样的属性，它们通常与底层存储机制有关 —— 关系型数据库的主键就是这样。可以使用 HiddenInput 注解属性，它会使辅助器渲染一个隐藏的 input 字段

```csharp
using System;
using System.Web.Mvc;

namespace HelperMethods.Models
{
    public class Person
    {
        [HiddenInput]
        public int PersonId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime BirthDate { get; set; }
        public Address HomeAddress { get; set; }
        public bool IsApproved { get; set; }
        public Role Role { get; set; }
    }

    // ...other types omitted for brevity...
}
```

当运用这个注解属性时 Html.EditorFor 和 Html.EditorForModel 辅助器会渲染被修饰属性的只读视图。为 PersonId 属性生成的 HTML 如下：

```html
...
<div class="editor-field">
    0
    <input id="PersonId" name="PersonId" type="hidden" value="0" />
</div>
...
```

该属性的值被渲染成文字，但辅助器也为该属性包含了一个隐藏的 input 元素。这对 HTML 表单是有作用的，它确保当表单提交时该属性会有一个值被提交。如果想完全隐藏一个属性，可以将这个 HiddenInput 注解属性中的 DisplayValue 属性设置为 "false"

```csharp
...
public class Person
{
    [HiddenInput(DisplayValue = false)]
    public int PersonId { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public DateTime BirthDate { get; set; }
    public Address HomeAddress { get; set; }
    public bool IsApproved { get; set; }
    public Role Role { get; set; }
}
...
```

当将 Html.EditorForModel 辅助器运用于 Person 对象时，仍会创建一个隐藏的 input 字段，以便 PersonId 属性的值可以被包含到任何要递交的表单中去，但标签和值将不会被显示出来 如果要渲染个别属性的 HTML，通过运用 HTML.EditorFor 辅助器，仍然可以为 PersonId 属性创建隐藏的 input

```csharp
...
@Html.EditorFor(m => m.PersonId)
...
```

这还是会检测 HiddenInput 注解属性，如果 DisplayValue 是 true 将会生成以下 HTML

```html
...
<input id="PersonId" name="PersonId" type="hidden" value="1" />
...
```

为了将一个属性从生成的 HTML 中排除掉，可以使用 ScaffoldColumn 注解属性

```csharp
...
[ScaffoldColumn(false)]
public int PersonId { get; set; }
...
```

支架辅助器看到 ScaffoldColumn 注解属性以这种方式被应用时会完全跳过该属性，不会创建隐藏的 input 元素，而且该属性的细节也不会被包含在生成的 HTML 中。所生成的 HTML 的外观与使用 HiddenInput 注解属性的情况相同，但在表单递交期间没有该属性的值被返回。这对模型绑定是有影响的。ScaffoldColumn 注解属性对单属性辅助器，如 EditorFor，不起作用。如果在视图中调用 @HTML.EditorFor (m => m.PersonId)，即使有 ScaffoldColumn 注解属性存在，也会生成 PersonId 属性的编辑器视图

使用用于标签的元数据 默认情况下 Label、LabelFor、LabelForModel，以及 EditorForModel 辅助器会以属性名称作为它们生成的标签元素的内容。如果像下面这样渲染一个标签：

```csharp
...
@Html.LabelFor(m => m.BirthDate)
...
```

生成的 HTML 元素将如下所示

```html
...
<label for="BirthDate">BirthDate</label>
...
```

当然，我给出的属性名通常不是希望显示给用户的名称。为此，可以运用 System.ComponentModel.DataAnnotations 命名空间中的 DisplayName 注解属性，在其中传递适当的值作为 Name 属性的值

```csharp
using System;
using System.Web.Mvc;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;

namespace HelperMethods.Models
{
    [DisplayName("New Person")]
    public class Person
    {
        [HiddenInput(DisplayValue = false)]
        public int PersonId { get; set; }
        [Display(Name = "First")]
        public string FirstName { get; set; }
        [Display(Name = "Last")]
        public string LastName { get; set; }
        [Display(Name = "Birth Date")]
        public DateTime BirthDate { get; set; }
        public Address HomeAddress { get; set; }
        [Display(Name = "Approved")]
        public bool IsApproved { get; set; }
        public Role Role { get; set; }
    }

    // ...other types omitted for brevity...
}
```

当标签辅助器对 BirthDate 属性渲染标签元素时，将会检测这个 Display 注解属性，并用 Name 参数的值作为其内部文本

```html
...
<label for="BirthDate">Birth Date</label>
...
```

这些辅助器也能识别 DisplayName 注解属性，这个注解属性能够运用于类。这让我能够使用 Html.LabelForModel 辅助器。(DisplayName 注解属性也能运用于模型属性，但我倾向于将这个注解属性只用于模型类。除了习惯以外，没有任何理由)

使用用于数据值的元数据 也可以用元数据为如何显示模型属性提供一些指导。例如，可以用这种元数据来处理 BirthDate 属性。该属性通常会带有时间，但我只希望显示一个不带时间的日期。此时可以使用 DataType 注解属性来控制数据值的显示方式

```csharp
...
[DisplayName("New Person")]
public class Person
{
    [HiddenInput(DisplayValue = false)]
    public int PersonId { get; set; }
    [Display(Name = "First")]
    public string FirstName { get; set; }
    [Display(Name = "Last")]
    public string LastName { get; set; }
    [Display(Name = "Birth Date")]
    [DataType(DataType.Date)]
    public DateTime BirthDate { get; set; }
    public Address HomeAddress { get; set; }
    [Display(Name = "Approved")]
    public bool IsApproved { get; set; }
    public Role Role { get; set; }
}
...
```

DataType 注解属性以 DataType 枚举中的一个值为参数

DataType 枚举的值

| 值            | 描述                                                         |
| :------------ | :----------------------------------------------------------- |
| DateTime      | 显示日期和时间                                               |
| Date          | 显示 DateTime 的日期部分                                     |
| Time          | 显示 DateTime 的时间部分                                     |
| Text          | 显示单行文本                                                 |
| PhoneNumber   | 显示电话号码                                                 |
| MultilineText | 将值渲染在一个文本区域中                                     |
| Password      | 显示数据，使其字符在视图中以掩码显示                         |
| Url           | 将数据显示为一个 URL (用 HTML 的 a 元素)                     |
| EmailAddress  | 将数据显示为一个 e-mail 地址 (使用带有 mailto 的 href 的 a 元素) |

这些值的效果依赖于它们所关联的属性类型，以及所使用的辅助器。例如，MultilineText 值会让编辑器辅助器创建一个 HTML 的 textarea 元素，但显示辅助器对这个值是忽略的。同样，Url 值只对显示辅助器起作用 ，它渲染一个 HTML 的 a 元素以创建一个链接

用元数据选择显示模板 正如它们的名称所预示的那样，模板辅助器都是使用显示模板来生成 HTML 的。它们所使用的模板基于所处理的属性类型，以及所使用的辅助器种类。为了渲染一个属性的 HTML，可以使用 UIHint 注解属性来指定希望使用的模板

```csharp
...
[DisplayName("New Person")]
public class Person
{
    [HiddenInput(DisplayValue = false)]
    public int PersonId { get; set; }
    [Display(Name = "First")]
    [UIHint("MultilineText")]
    public string FirstName { get; set; }
    [Display(Name = "Last")]
    public string LastName { get; set; }
    [Display(Name = "Birth Date")]
    [DataType(DataType.Date)]
    public DateTime BirthDate { get; set; }
    public Address HomeAddress { get; set; }
    [Display(Name = "Approved")]
    public bool IsApproved { get; set; }
    public Role Role { get; set; }
}
...
```

这里指定了 MultilineText 模板，当与编辑器辅助器 (如 EditorFor 或 EditorForModel) 一起使用时，会为 FirstName 属性渲染一个 HTML 的 textarea 元素。MVC 框架包含了一组内建的模板

| 值            | 效果 (编辑器辅助器)                                          | 效果 (显示辅助器)                                            |
| :------------ | :----------------------------------------------------------- | :----------------------------------------------------------- |
| Boolean       | 渲染一个 bool 值的复选框。对于 nullable 的 bool? 值，创建一个带有 True、False 和 NotSet 选项的 select 元素 | 与编辑器辅助器相同，但附加了 disabled 标签属性，以渲染只读 HTML 控件 |
| Collection    | 为 IEnumerable 序列中的每一个元素渲染一个相应的模板，该序列中的各个项不必是同一种类型 | 与编辑器辅助器相同                                           |
| Decimal       | 渲染单行文本框的 input 元素，并对数值格式化，显示两位小数    | 渲染格式化成两位小数的数据值                                 |
| DateTime      | 渲染一个 input 元素，其 type 标签属性为 datetime，并且包含完整的日期和时间 | 渲染 DateTime 变量的完整值                                   |
| Date          | 渲染一个 input 元素，其 type 标签的属性为 date，只包含日期成分 | 渲染 DateTime 变量的日期成分                                 |
| EmailAddress  | 将值渲染在单行文本框的 input 元素中                          | 用 HTML 的 a 元素渲染一个链接，且 href 标签属性格式化成一个 mailto 的 URL |
| HiddenInput   | 创建隐藏的 input 元素                                        | 渲染该数据值，并创建一个隐藏的 input 元素                    |
| Html          | 将值渲染在单行文本框的 input 元素中                          | 用 HTML 的 a 元素渲染一个链接                                |
| MultilineText | 渲染一个含有该数据值的 HTML 的 textarea 元素                 | 渲染数据值                                                   |
| Number        | 渲染一个 input 元素，其 type 标签属性被设置为 number         | 渲染数据值                                                   |
| Object        |                                                              |                                                              |
| Password      | 将值渲染在单行文本框的 input 元素中，使字符不显示但可以编辑  | 渲染数据值 —— 是明文                                         |
| String        | 将值渲染在单行文本框的 input 元素中                          | 渲染数据值                                                   |
| Text          | 等同于 String 模板                                           | 等同于 String 模板                                           |
| Tel           | 渲染一个 input 元素，其 type 标签属性被设置为 tel            | 渲染数据值                                                   |
| Time          | 渲染一个 input 元素，其 type 标签属性被设置为 time，只包含时间成分 | 渲染 DateTime 变量的时间成分                                 |
| Url           | 将值渲染在单行文本框的 input 元素中                          | 用 HTMl 的 a 元素渲染一个链接。HTML 内文本和 href 标签属性都设置为该数据值 |

注意： 在使用 UIHint 注解属性时必须小心。如果将 UIHint 运用于一个属性，但选择了一个不能对该属性的类型进行操作的模板，那么会收到一个异常。例如，把一个 Boolen 模板运用于一个 string 属性

Object 模板是一个特殊的情况 —— 它是由支架辅助器用来为一个视图模型对象生成 HTML 的模板。这个模板会检查对象的每一个属性，并为相应的属性类型选择最合适的模板。Object 模板会把诸如 UIHint 以及 DataType 之类的元数据考虑进来

将元数据运用于伙伴类 **伙伴类 (Buddy Class)** 有些资料也称为助手类，但我们还是感觉 "伙伴类" 或 "伴随类" 更确切一些 并不总是有可能把元数据运用于一个实体模型类。通常的情况是，模型类是自动生成的，就像用诸如实体框架之类的 ORM 工具那样。对这种自动生成的类所做的任何修改，比如运用一些注解属性，那么，在工具下一次对类进行更新或重新生成时，这些修改都将会丢失。 这一问题的解决方案是，确保把这些模型类定义成 **分部类 (Partial Class)** ，并创建第二个分部类以包含这些元数据。许多自动生成类的工具默认情况下都是创建分部类，也包括实体框架

```csharp
using System;
using System.ComponentModel.DataAnnotations;

namespace HelperMethods.Models
{
    [MetadataType(typeof(PersonMetaData))]
    public partial class Person
    {
        public int PersonId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime BirthDate { get; set; }
        public Address HomeAddress { get; set; }
        public bool IsApproved { get; set; }
        public Role Role { get; set; }
    }
    // ...other types omitted from listing for brevity...
}
```

现在 Person 类可以被自动生成。它没有元数据，而且这个类被定义成了 partial

这里通过 MetadataType 注解属性告诉 MVC 框架有关伙伴类的情况，该注解属性以伙伴类作为其参数类型。伙伴类必须定义在相同的命名空间中，而且必须是 partial 类。这里在 Models/Metadata 文件夹下添加一个新类文件，名称为 PersonMetaData

```csharp
using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;

namespace HelperMethods.Models
{
    [DisplayName("New Person")]
    public partial class PersonMetaData
    {
        [HiddenInput(DisplayValue = false)]
        public int PersonId { get; set; }

        [Display(Name = "First")]
        public string FirstName { get; set; }

        [Display(Name = "Last")]
        public string LastName { get; set; }

        [Display(Name = "Birth Date")]
        [DataType(DataType.Date)]
        public DateTime BirthDate { get; set; }

        [Display(Name = "Approved")]
        public bool IsApproved { get; set; }
    }
}
```

伙伴类只需要包含希望运用元数据的属性，不必重复模型类的所有属性

注意： 伙伴类必须与模型类在同一个命名空间中

使用复合类型属性 模板的制作过程依赖于前面介绍过的 Object 模板。该制模过程会检测模型的每一个属性，并为每一个属性选择一个模板来渲染其 HTML，以表现该属性和其数据值 你可能已经注意到，在使用 EditorForModel 辅助器是，并未渲染 Person 类中的 HomeAddress 属性。发生这种情况是因为 Object 模板只能对 **简单类型** 进行操作，即那些能够用 System.ComponentModel.TypeDescriptor 类中的 GetConverter 方法通过一个字符串值进行解析的那些类型 (这种类型叫做 "Primitive Type"，即元类型或简单类型)。这包括固有的 C# 类型，如 int、bool 以及 double 等，还包括许多普通的框架类型，如 Guid 和 DateTime 等 这种策略的结果是支架辅助器是非递归的。给定一个要处理的对象，支架模板辅助器方法将只生成简单属性类型的 HTML，而忽略本身是复合类型的任何属性 虽然这可能不太方便，但这是一个有意义的策略，因为 MVC 框架并不知道模型对象会如何创建。如果 Object 模板是递归的，那么就很可能不能触发 ORM 的惰性加载特性 (Lazy-Loading，也叫延时加载)，该特性让我能够从底层数据库读取并渲染每一个对象。因此，如果要渲染一个复合属性的 HTML，必须通过单独调用模板辅助器方法，明确地处理符合属性

```csharp
@model HelperMethods.Models.Person

@{
    ViewBag.Title = "CreatePerson";
    Layout = "/Views/Shared/_Layout.cshtml";
    Html.EnableClientValidation(false);
}

<h2>CreatePerson: @Html.LabelForModel()</h2>

@using (Html.BeginRouteForm("FormRoute", new { }, FormMethod.Post,
 new { @class = "personClass", data_formType = "person" }))
{
    <div class="column">
        @Html.EditorForModel()
    </div>
    <div class="column">
        @Html.EditorFor(m => m.HomeAddress)
    </div>
    <input type="submit" value="Submit" />
}
```

为了显示 HomeAddress 属性，这里调用了强类型的 EditorFor 辅助器方法

提示： HomeAddress 属性被作了类型化，以返回一个 Address 对象。而且，我可以对 Address 类运用各种元数据，就像在 Person 类上做的那样。当在 HomeAddress 属性上使用 EditorFor 辅助器时，会明确地调用 Object 模板，于是所有元数据约定都得到遵从

## 定制模板视图辅助器系统

前面的章节已经演示了如何运用元数据来形成模板辅助器渲染数据的方式。但对于 MVC 框架，还有一些高级选项能够让我完全定制模板辅助器

创建自定义编辑器模板 定制模板辅助器最容易的办法是创建一个自定义的模板。这让我们能够为模型属性确切地渲染想要的 HTML 为了演示这一特性的工作原理，我打算对 Person 类的 Role 属性创建一个自定义模板。该属性是一个通过 Role 枚举来选择一个值的类型，默认情况下渲染是有问题的，因为模板辅助器只是创建了一个常规的 input 元素，用户可以输入任何值，而不仅仅是枚举中所定义的那些值 MVC 框架会在 /Views/Shared/EditorTemplates 文件夹中查找自定义的编辑器模板，在其中创建一个新的强类型分部视图，名称为 Role.cshtml

```csharp
@model HelperMethods.Models.Role

@Html.DropDownListFor(m => m, new SelectList(Enum.GetNames(Model.GetType()), Model.ToString()))
```

该视图的模型类型是 Role 枚举，并且使用 Html.DropDownListFor 辅助器方法为枚举值创建了一个带 option 的 select 元素。这里为 SelectList 构造器传递了一个额外的参数，用以指定视图模型对象中已被选中的值。DropDownListFor 方法以及 SelectList 对象是对 string 值进行操作的，因此需要确保对枚举值和视图模型值进行转换 当使用任一模板辅助器方法为 Role 类型生成编辑器时，都将会使用这个 /Views/Shared/EditorTemplates/Role.cshtml 文件，这能够确保以一致和可用的数据类型表现形式将数据显示给用户

Role.cshtml 模板之所以能够工作，是因为 MVC 框架在使用内建模板之前会对一个给定的 C# 类型查找自定义模板。事实上 MVC 框架查找适宜模板遵循了一个十分特殊的顺序

1. 传递给辅助器的模板 —— 例如，Html.EditorFor (m => m.SomeProperty, "MyTemplate") 将导致使用 MyTemplate
2. 由元数据注解属性指定的任意模板，如 UIHint
3. 与元数据指定的任意数据类型相关联的模板，如 DataType 注解属性
4. 与待处理数据类型的.NET 类名对应的任意模板
5. 如果被处理的数据类型是一个简单类型，那么便采用内建的 String 模板
6. 对应于数据类型基类的任意模板
7. 如果数据类型实现了 IEnumerable，那么将使用内建的 Collection 模板
8. 如果上述全部失败，将使用 Object 模板，服从于支架非递归原则

在模板搜索的每一个阶段，MVC 框架都会查找名称为 `EditorTemplates/<name>` 的编辑器辅助器方法，或名称为 `DisplayTemplates/<name>` 的显示辅助器方法。对于前面的 Role 模板，满足上述搜索过程的第 4 步，因为我创建的是一个名称为 Role.cshtml 的模板 (与 Role 名对应)，并把它放在了 /Views/Shared/EditorTemplates 文件夹中 自定义模板的查找方式与常规视图的搜索模式相同，这意味着我们可以创建一个控制器专用的自定义模板，并把它放在 `~/Views/<controller>/EditorTemplates` 文件夹中，以覆盖在 `~/Views/Shared/EditorTemplates` 文件夹中找到的模板

创建泛型模板 我并不只局限于创建类型专用的模板。例如，还可以创建一个工作于所有枚举的模板，然后用 UIHint 注解属性来选用这个模板。如果考察上述说明中模板的搜索顺序，就可以看出用 UIHint 注解属性指定的模板优先于类型专用模板

在 /Views/Shared/EditorTemplates 文件夹中创建了一个新的视图文件，名称为 Enum.cshtml

```csharp
@model Enum

@Html.DropDownListFor(m => m, Enum.GetValues(Model.GetType())
 .Cast<Enum>()
 .Select(m =>
 {
     string enumVal = Enum.GetName(Model.GetType(), m);
     return new SelectListItem()
     {
         Selected = (Model.ToString() == enumVal),
         Text = enumVal,
         Value = enumVal
     };
 }))
```

该模板的视图类型是 Enum，它可以用于任何枚举。出于适用性，这里使用了一些 LINQ 以便 select 和 option 元素生成所需要的字符串。(尽管对于一个泛型模板来说这不是必需的：我只喜欢 LINQ) 然后便可以运用 UIHint 注解属性，这里将它运用到元数据伙伴类

```csharp
using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;

namespace HelperMethods.Models
{
    [DisplayName("New Person")]
    public partial class PersonMetaData
    {
        [HiddenInput(DisplayValue = false)]
        public int PersonId { get; set; }

        [Display(Name = "First")]
        public string FirstName { get; set; }

        [Display(Name = "Last")]
        public string LastName { get; set; }

        [Display(Name = "Birth Date")]
        [DataType(DataType.Date)]
        public DateTime BirthDate { get; set; }

        [Display(Name = "Approved")]
        public bool IsApproved { get; set; }

        [UIHint("Enum")]
        public Role Role { get; set; }
    }
}
```

泛型模板给出了一种更通用的解决方案，可以运用于整个应用程序，以确保所有 Enum 属性都用一个 select 元素来显示。我更喜欢创建模型类型专用的自定义模板，但有一个可以广泛运用的模板总是很方便

替换内建模板 如果创建一个与内建模板同名的自定义模板，MVC 框架将优先于内建模板来使用这个自定义版本。添加名为 Boolean.cshtml 的文件到 /Views/Shared/EditorTemplates。该视图会替换内建的 Boolean 模板，用于渲染 bool 和 bool? 的值

```csharp
@model bool?

@if (ViewData.ModelMetadata.IsNullableValueType && Model == null)
{
    @:(True) (False) <b>(Not Set)</b>
}
else if (Model.Value)
{
    @:<b>(True)</b> (False) (Not Set)
}
else
{
    @:(True) <b>(False)</b> (Not Set)
}
```

# 第 23 章 URL 和 Ajax 辅助器方法

## 准备示例项目

安装 NuGet 包

```csharp
Install-Package jQuery –version 1.10.2
Install-Package Microsoft.jQuery.Unobtrusive.Ajax –version 3.0.0
```

## 创建基本的链接和 URL

渲染 URLs 的 HTML 辅助器

| 描述                      | 示例                                                         |
| :------------------------ | :----------------------------------------------------------- |
| 相对于应用程序的 URL      | Url.Content ("~/Content/Site.css")                           |
| 链接到指定的动作 / 控制器 | Html.ActionLink ("My Link", "Index", "Home")                 |
| 动作 URL                  | Url.Action ("GetPeople", "People")                           |
| 使用路由数据的 URL        | Url.RouteUrl (new {controller = "People", action="GetPeople"}) |
| 使用路由数据的链接        | Html.RouteLink ("My Link", new {controller = "People", action="GetPeople"}) |
| 链接到指定的路由          | Html.RouteLink ("My Link", "FormRoute", new {controller = "People", action="GetPeople"}) |

## 使用 MVC 的渐进式 Ajax

创建同步表单

```csharp
@using HelperMethods.Models
@model IEnumerable<Person>
@{
    ViewBag.Title = "GetPeople";
    Layout = "/Views/Shared/_Layout.cshtml";
}
<h2>Get People</h2>

<table>
    <thead><tr><th>First</th><th>Last</th><th>Role</th></tr></thead>
    <tbody>
        @foreach (Person p in Model)
        {
            <tr>
                <td>@p.FirstName</td>
                <td>@p.LastName</td>
                <td>@p.Role</td>
            </tr>
        }
    </tbody>
</table>

@using (Html.BeginForm())
{
    <div>
        @Html.DropDownList("selectedRole", new SelectList(
              new[] { "All" }.Concat(Enum.GetNames(typeof(Role)))))
        <button type="submit">Submit</button>
    </div>
}
```

这里使用了 Html.DropDownList 辅助器创建了一个简单的表单。表单中含有对 Html.DropDownList 辅助器的调用，我用它创建了一个 select 元素，其中的 option 元素使用 Role 枚举所定义的各个值，再加上一个 All 值 当表单被递交时会重载整个页面。这意味着整个 Web 页面的内容得重新生成，并从服务器进行下载。而且，在此过程发生期间用户不能执行应用程序的其他任务。直到新的页面生成、加载并由浏览器显示出来。同步表单可能会让用户感到沮丧，并可能形成昂贵的服务器带宽和处理能力

为渐进式 Ajax 准备项目 渐进式 Ajax 特性在应用程序的两个地方建立起来。首先，在 Web.config 文件中 configuration/appSettings 元素含有一个用于 UnobtrusiveJavaScriptEnabled 属性的条目，必须将其 value 设置为 true (该属性在 Visual Studio 创建项目时，默认被设置为 true)

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <appSettings>
    <add key="webpages:Version" value="3.0.0.0" />
    <add key="webpages:Enabled" value="false" />
    <add key="ClientValidationEnabled" value="true" />
    <add key="UnobtrusiveJavaScriptEnabled" value="true" />
  </appSettings>
  <system.web>
    <compilation debug="true" targetFramework="4.5.1" />
    <httpRuntime targetFramework="4.5.1" />
  </system.web>
</configuration>
```

除了检查 Web.config 配置外，还需要添加对实现渐进式 Ajax 功能的 jQuery JavaScript 库的引用，该库来自我在本章一开始添加的 NuGet 包中。你可以在单个视图中引用该库，但更常用的办法是在一个布局文件中进行引用，以便在所有使用该布局的视图中生效。我在 /Views/Shared/_Layout.cshtml 文件中添加了两个对 JavaScript 库的引用

```csharp
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>@ViewBag.Title</title>
    <style type="text/css">
        /*...*/
    </style>
    <script src="~/Scripts/jquery-1.10.2.js"></script>
    <script src="~/Scripts/jquery.unobtrusive-ajax.js"></script>
</head>
<body>
    @RenderBody()
</body>
</html>
```

NuGet 包将以 script 元素进行引用的文件添加到项目的 Scripts 文件夹中。jquery-1.10.2.js 文件包含了核心 jQuery 库，而 jquery.unobtrusive-ajax.js 文件包含了 Ajax 功能 (依赖于 jQuery 库)

## 创建渐进式 Ajax 表单

准备控制器 我的目标是，当用户在示例应用程序中单击 Submit 按钮时，只有 HTML table 元素中的数据被替换。这意味着要做的第一件事是重构控制器中对应的动作方法，以便通过一个子动作仅获取想要的数据

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using HelperMethods.Models;

namespace HelperMethods.Controllers
{
    public class PeopleController : Controller
    {
        private Person[] personData = {
            new Person {FirstName = "Adam", LastName = "Freeman", Role = Role.Admin},
            new Person {FirstName = "Jacqui", LastName = "Griffyth", Role = Role.User},
            new Person {FirstName = "John", LastName = "Smith", Role = Role.User},
            new Person {FirstName = "Anne", LastName = "Jones", Role = Role.Guest}
        };

        public ActionResult Index()
        {
            return View();
        }

        public PartialViewResult GetPeopleData(string selectedRole = "All")
        {
            IEnumerable<Person> data = personData;
            if (selectedRole != "All")
            {
                Role selected = (Role)Enum.Parse(typeof(Role), selectedRole);
                data = personData.Where(p => p.Role == selected);
            }
            return PartialView(data);
        }

        public ActionResult GetPeople(string selectedRole = "All")
        {
            return View((object)selectedRole);
        }
    }
}
```

这里添加了一个 GetPeopleData 动作，用于选择需要显示的 Person 对象，并将其传递给 PartialView 方法，以便生成所需要的表格。因为这一数据选择是在 GetPeopleData 动作方法中进行处理的，使我能够大幅度地简化 GetPeople 动作方法，并完全删除 HttpPost 版本。GetPeople 动作方法的目的是要将所选的角色作为 string 传递给视图 为新的 GetPeopleData 动作方法创建了一个新的分部视图文件 /Views/People/GetPeopleData.cshtml，该视图负责生成填充表格的 tr 元素

```csharp
@using HelperMethods.Models
@model IEnumerable<Person>

@foreach (Person p in Model)
{
    <tr>
        <td>@p.FirstName</td>
        <td>@p.LastName</td>
        <td>@p.Role</td>
    </tr>
}
```

还需要对 /Views/People/GetPeople.cshtml 视图进行更新

```csharp
@using HelperMethods.Models
@model string
@{
    ViewBag.Title = "GetPeople";
    Layout = "/Views/Shared/_Layout.cshtml";
}

<h2>Get People</h2>
<table>
    <thead><tr><th>First</th><th>Last</th><th>Role</th></tr></thead>
    <tbody>
        @Html.Action("GetPeopleData", new { selectedRole = Model })
    </tbody>
</table>
@using (Html.BeginForm())
{
    <div>
        @Html.DropDownList("selectedRole", new SelectList(
         new[] { "All" }.Concat(Enum.GetNames(typeof(Role)))))
        <button type="submit">Submit</button>
    </div>
}
```

这里已经将视图模型类型改成了 string，将它传递给 Html.Action 辅助器方法以调用 GetPeopleData 子动作。以此渲染分部视图并生成表格行

创建 Ajax 表单 经过这些修改之后应用程序中仍是一个同步表单，但已经在控制器中将功能分离开来。这使得我能够通过 GetPeopleData 动作只请求表格的行。这一新的动作方法将是我 Ajax 请求的目标。接下来的步骤是更新 GetPeople.cshtml 视图，以便能够通过 Ajax 对递交的表单进行处理

```csharp
@using HelperMethods.Models
@model string
@{
    ViewBag.Title = "GetPeople";
    Layout = "/Views/Shared/_Layout.cshtml";
    AjaxOptions ajaxOpts = new AjaxOptions
    {
        UpdateTargetId = "tableBody"
    };
}

<h2>Get People</h2>
<table>
    <thead><tr><th>First</th><th>Last</th><th>Role</th></tr></thead>
    <tbody id="tableBody">
        @Html.Action("GetPeopleData", new { selectedRole = Model })
    </tbody>
</table>
@using (Ajax.BeginForm("GetPeopleData", ajaxOpts))
{
    <div>
        @Html.DropDownList("selectedRole", new SelectList(
         new[] { "All" }.Concat(Enum.GetNames(typeof(Role)))))
        <button type="submit">Submit</button>
    </div>
}
```

MVC 框架支持 Ajax 表单的核心在于 Ajax.BeginForm 辅助器方法，它可以接受一个 AjaxOptions 对象作为其参数。我喜欢在视图的开始处，以 Razor 代码块的形式创建 AjaxOptions 对象，但如果你愿意也可以在调用 Ajax.BeginForm 方法时内联地创建它们 System.Web.Mvc.Ajax 命名空间中的 AjaxOptions 类定义了一组属性，能够用来配置如何形成发送给服务器的异步请求，以及对取回的数据做哪些处理

AjaxOptions 属性

| 属性                   | 描述                                                         |
| :--------------------- | :----------------------------------------------------------- |
| Confirm                | 在形成 Ajax 请求之前，设置显示给用户的确认窗口中的消息       |
| HttpMethod             | 设置用来形成请求的 HTTP 方法 —— 必须是 GET 或 Post           |
| InsertionMode          | 指定从服务器接收的内容以何种方式插入到 HTML。三种选择被表示成 InsertionMode 枚举中的值：InsertAfter、InsertBefore 和 Replace (默认值) |
| LoadingElementId       | 指定 HTML 元素的 ID，这是执行 Ajax 请求期间要显示的 HTML 元素 |
| LoadingElementDuration | 指定动画的持续时间，用于显露由 LoadingElementId 指定的元素   |
| UpdateTargetId         | 设置 HTML 元素的 ID，从服务器接收的内容将被插入到该元素中    |
| Url                    | 设置所请求的服务器端 URL                                     |

提示： AjaxOptions 类还定义了一些属性，能够指定请求生命周期不同阶段的回调

理解渐进式 Ajax 工作原理 在调用 Ajax.BeginForm 辅助器方法时，我用 AjaxOptions 对象指定的选项被转换成用于 form 元素的标签属性

```html
...
<form action="/People/GetPeopleData" data-ajax="true" data-ajax-mode="replace"
 data-ajax-update="#tableBody" id="form0" method="post">
...
```

当浏览器加载 GetPeople.cshtml 视图渲染的 HTML 页面时 jquery.unobtrusive-ajax.js 库中的 JavaScrip 会扫描这些 HTML 元素，通过考察 data-ajax 标签属性为 true 的元素，能够识别出这是一个 Ajax 表单 其他以 data-ajax 开头的标签属性含有我们用 AjaxOptions 类指定的值。这些配置选项被用于配置 jQuery，jQuery 具有对 Ajax 请求进行管理的内建支持

提示： 并不是必须使用 MVC 框架的渐进式 Ajax 支持。还有许多其他可选的办法，包括直接使用 jQuery。这就是说，要选取一种技术并坚持下去。我建议，不要在同一个视图中将 MVC 框架的渐进式 Ajax 支持与其他技术混在一起使用，因为可能会有一些不适宜的交互影响。例如，可能会复制或丢弃 Ajax 请求

## 设置 Ajax 选项

可以对 Ajax 请求的行为进行精细的调节，办法是对传递给 Ajax.BeginFrom 辅助器方法的 AjaxOptions 对象的属性设置相应的值

确保优雅降级 在前面的示例中建立启用 Ajax 的表单时，我们在其中传递了希望异步调用的动作方法名称。它生成一个含有 HTML 片段的分部视图 这种办法的一个问题是，如果用户禁用了 JavaScript 它就不能很好地工作。这种情况下，当用户递交表单时浏览器会放弃当前的 HTML 页面，并用目标动作方法返回的片段代替它 (于是失去了页面的主体部分，特别是布局效果，只剩下了返回的数据) 解决这一问题最简单的办法是使用 AjaxOptions.Url 属性，以便指定异步请求的目标 URL 作为 Ajax.BeginFrom 方法的参数，而不是以动作名称作为参数

```csharp
@using HelperMethods.Models
@model string
@{
    ViewBag.Title = "GetPeople";
    Layout = "/Views/Shared/_Layout.cshtml";
    AjaxOptions ajaxOpts = new AjaxOptions
    {
        UpdateTargetId = "tableBody",
        Url = Url.Action("GetPeopleData")
    };

}

<h2>Get People</h2>
<table>
    <thead><tr><th>First</th><th>Last</th><th>Role</th></tr></thead>
    <tbody id="tableBody">
        @Html.Action("GetPeopleData", new { selectedRole = Model })
    </tbody>
</table>
@using (Ajax.BeginForm(ajaxOpts))
{
    <div>
        @Html.DropDownList("selectedRole", new SelectList(
              new[] { "All" }.Concat(Enum.GetNames(typeof(Role)))))
        <button type="submit">Submit</button>
    </div>
}
```

这里用 Url.Action 辅助器方法创建了将会使用 GetPeopleData 动作的 URL，而且使用的 Ajax.BeginForm 只有一个唯一的参数 AjaxOptions。其效果是，如果未启用 JavaScript，则创建一个回递给原始动作方法的 form 元素

```csharp
...
<form action="/People/GetPeople" data-ajax="true" data-ajax-mode="replace"
      data-ajax-update="#tableBody" data-ajax-url="/People/GetPeopleData" id="form0" method="post">
...
```

如果启用了 JavaScript，则渐进式 Ajax 库会以 data-ajax-url 标签属性作为目标 URL，该属性引用了我们的子动作。如果禁用了 JavaScript，则浏览器会使用常规表单的递交技术，其目标 URL 取自 action 属性

在 Ajax 请求期间给用户提供反馈 使用 Ajax 的一个缺点是用户观察不到正在发生的事情，因为发送给服务器的请求是在后台形成的。通过使用 AjaxOptions.LoadingElementId 和 AjaxOptions.LoadingElementDuration 属性，我可以通知用户，此刻正在执行一个请求

```csharp
@using HelperMethods.Models
@model string
@{
    ViewBag.Title = "GetPeople";
    Layout = "/Views/Shared/_Layout.cshtml";
    AjaxOptions ajaxOpts = new AjaxOptions
    {
        UpdateTargetId = "tableBody",
        Url = Url.Action("GetPeopleData"),
        LoadingElementId = "loading",
        LoadingElementDuration = 1000
    };
}

<h2>Get People</h2>
<div id="loading" class="load" style="display:none">
    <p>Loading Data...</p>
</div>
<table>
    <thead><tr><th>First</th><th>Last</th><th>Role</th></tr></thead>
    <tbody id="tableBody">
        @Html.Action("GetPeopleData", new { selectedRole = Model })
    </tbody>
</table>
@using (Ajax.BeginForm(ajaxOpts))
{
    <div>
        @Html.DropDownList("selectedRole", new SelectList(
              new[] { "All" }.Concat(Enum.GetNames(typeof(Role)))))
        <button type="submit">Submit</button>
    </div>
}
```

这里的 AjaxOptions.LoadingElementId 属性指定了一个隐藏的 HTML 元素的 id 标签属性值，该元素将在 Ajax 请求被执行时显示给用户。AjaxOptions.LoadingElementDuration 属性指定了动画持续的时间 (ms)，这是向用户显露 loading 元素的时间

请求之前对用户进行提示 AjaxOptions.Confirm 属性可以用来指定一条消息，用来在每个异步请求之前对用户进行提示。用户可以选择继续或取消该请求

```csharp
...
@{
    ViewBag.Title = "GetPeople";
    Layout = "/Views/Shared/_Layout.cshtml";
    AjaxOptions ajaxOpts = new AjaxOptions
    {
        UpdateTargetId = "tableBody",
        Url = Url.Action("GetPeopleData"),
        LoadingElementId = "loading",
        LoadingElementDuration = 1000,
        Confirm = "Do you wish to request new data?"
    };
}
...
```

通过这一补充，用户每次递交表单时都会得到提示。由于每次请求都会进行提示，所以应当保守使用这一特性，以免惹恼用户

## 创建 Ajax 链接

除了表单之外，渐进式 Ajax 也可以用于创建异步执行的 a 元素

```csharp
@using HelperMethods.Models
@model string
@{
    ViewBag.Title = "GetPeople";
    Layout = "/Views/Shared/_Layout.cshtml";
    AjaxOptions ajaxOpts = new AjaxOptions
    {
        UpdateTargetId = "tableBody",
        Url = Url.Action("GetPeopleData"),
        LoadingElementId = "loading",
        LoadingElementDuration = 1000,
        Confirm = "Do you wish to request new data?"
    };
}

<h2>Get People</h2>
<div id="loading" class="load" style="display:none">
    <p>Loading Data...</p>
</div>
<table>
    <thead><tr><th>First</th><th>Last</th><th>Role</th></tr></thead>
    <tbody id="tableBody">
        @Html.Action("GetPeopleData", new { selectedRole = Model })
    </tbody>
</table>
@using (Ajax.BeginForm(ajaxOpts))
{
    <div>
        @Html.DropDownList("selectedRole", new SelectList(
              new[] { "All" }.Concat(Enum.GetNames(typeof(Role)))))
        <button type="submit">Submit</button>
    </div>
}

<div>
    @foreach (string role in Enum.GetNames(typeof(Role)))
    {
        <div class="ajaxLink">
            @Ajax.ActionLink(role, "GetPeopleData",
              new { selectedRole = role },
              new AjaxOptions { UpdateTargetId = "tableBody" })
        </div>
    }
</div>
```

此例使用 foreach 循环，为 Role 枚举中定义的每一个值调用了 Ajax.ActionLink 辅助器，这创建了一组启用 Ajax 的 a 元素。与前面使用表单时看到的情况一样，这里所产生的 a 元素具有相同类型的 data 标签属性

```csharp
...
<a data-ajax="true" data-ajax-mode="replace" data-ajax-update="#tableBody"
 href="/People/GetPeopleData?selectedRole=Guest">Guest</a>
...
```

确保为链接优雅降级 启用 Ajax 的链接与启用 Ajax 的表单具有同样的问题。当浏览器没有 JavaScript 支持时，单击这些链接只会显示 GetPeopleData 动作方法生成的 HTML 片段 为了解决这一问题可以使用 AjaxOptions.Url 属性来指定 Ajax 请求的 URL

```csharp
...
<div>
    @foreach (string role in Enum.GetNames(typeof(Role)))
    {
        <div class="ajaxLink">
            @Ajax.ActionLink(role, "GetPeople",
             new { selectedRole = role },
             new AjaxOptions
             {
                 UpdateTargetId = "tableBody",
                 Url = Url.Action("GetPeopleData", new { selectedRole = role })
             })
        </div>
    }
</div>
...
```

这是我为所需的每个链接创建一个新 AjaxOptions 对象的原因，而不是像创建 form 元素那样，在 Razor 代码块中只创建一个对象。独立的 AjaxOptions 让我能够为每个链接的 Url 属性指定一个不同的值，并为非 JavaScript 浏览器提供优雅降级支持

## 使用 Ajax 回调

类定义了一组属性，能够在 Ajax 请求生命周期中的各个点上调用 JavaScript 函数

AjaxOptions 回调属性

| 属性       | jQuery 事件 | 描述                                     |
| :--------- | :---------- | :--------------------------------------- |
| OnBegin    | beforeSend  | 在发送请求之前调用                       |
| OnFailure  | error       | 请求失败时调用                           |
| OnSuccess  | success     | 请求成功时调用                           |
| OnComplete | complete    | 请求已完成时调用，不管请求是成功还是失败 |

每一个 AjaxOptions 回调属性都与 jQuery 所支持的一个 Ajax 事件相关联

```csharp
@using HelperMethods.Models
@model string
@{
    ViewBag.Title = "GetPeople";
    Layout = "/Views/Shared/_Layout.cshtml";
    AjaxOptions ajaxOpts = new AjaxOptions
    {
        UpdateTargetId = "tableBody",
        Url = Url.Action("GetPeopleData"),
        LoadingElementId = "loading",
        LoadingElementDuration = 1000,
        Confirm = "Do you wish to request new data?"
    };
}

<script type="text/javascript">
    function OnBegin() {
        alert("This is the OnBegin Callback");
    }
    function OnSuccess(data) {
        alert("This is the OnSuccessCallback: " + data);
    }
    function OnFailure(request, error) {
        alert("This is the OnFailure Callback:" + error);
    }
    function OnComplete(request, status) {
        alert("This is the OnComplete Callback: " + status);
    }
</script>

<h2>Get People</h2>
<div id="loading" class="load" style="display:none">
    <p>Loading Data...</p>
</div>
<table>
    <thead><tr><th>First</th><th>Last</th><th>Role</th></tr></thead>
    <tbody id="tableBody">
        @Html.Action("GetPeopleData", new { selectedRole = Model })
    </tbody>
</table>
@using (Ajax.BeginForm(ajaxOpts))
{
    <div>
        @Html.DropDownList("selectedRole", new SelectList(
              new[] { "All" }.Concat(Enum.GetNames(typeof(Role)))))
        <button type="submit">Submit</button>
    </div>
}

<div>
    @foreach (string role in Enum.GetNames(typeof(Role)))
    {
        <div class="ajaxLink">
            @Ajax.ActionLink(role, "GetPeople",
                  new { selectedRole = role },
                  new AjaxOptions
                  {
                      UpdateTargetId = "tableBody",
                      Url = Url.Action("GetPeopleData", new { selectedRole = role }),
                      OnBegin = "OnBegin",
                      OnFailure = "OnFailure",
                      OnSuccess = "OnSuccess",
                      OnComplete = "OnComplete"
                  })
        </div>
    }
</div>
```

## 使用 JSON

到目前为止的所有示例中，服务器都是渲染 HTML 片段并把它们发送给浏览器。这是一种完全可接受的技术，但有点冗长，而且它限制了浏览器端用这些数据可做的事情 解决这两个问题的方法是使用 JSON 格式，这是一种语言无关的数据表示方式

对控制器添加 JSON 支持 在 MVC 框架中创建生成 JSON 数据的动作方法十分简单

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using HelperMethods.Models;

namespace HelperMethods.Controllers
{
    public class PeopleController : Controller
    {
        private Person[] personData = {
            new Person {FirstName = "Adam", LastName = "Freeman", Role = Role.Admin},
            new Person {FirstName = "Jacqui", LastName = "Griffyth", Role = Role.User},
            new Person {FirstName = "John", LastName = "Smith", Role = Role.User},
            new Person {FirstName = "Anne", LastName = "Jones", Role = Role.Guest}
        };

        public ActionResult Index()
        {
            return View();
        }

        private IEnumerable<Person> GetData(string selectedRole)
        {
            IEnumerable<Person> data = personData;
            if (selectedRole != "All")
            {
                Role selected = (Role)Enum.Parse(typeof(Role), selectedRole);
                data = personData.Where(p => p.Role == selected);
            }
            return data;
        }

        public JsonResult GetPeopleDataJson(string selectedRole = "All")
        {
            IEnumerable<Person> data = GetData(selectedRole);
            return Json(data, JsonRequestBehavior.AllowGet);
        }

        public PartialViewResult GetPeopleData(string selectedRole = "All")
        {
            return PartialView(GetData(selectedRole));
        }

        public ActionResult GetPeople(string selectedRole = "All")
        {
            return View((object)selectedRole);
        }
    }
}
```

因为我打算以两种不同的格式 (HTML 和 JSON) 表示同样的数据，故对控制器进行了重构，以便有一个公共 (且私有) 的 GetData 方法负责执行过滤 我添加了一个新的动作方法其名称为 GetPeopleDataJson，它返回一个 JsonResult 对象。这是一个特殊类型的 ActionResult，它告诉视图引擎我希望向客户端返回 JSON 数据而不是 HTML 通过在动作方法中调用 Json 方法，在其中传递希望转换成 JSON 格式的数据，便可以创建一个 JsonResult

```csharp
...
return Json(data, JsonRequestBehavior.AllowGet);
...
```

这个例子中，也传递了 JsonRequestBehavior 枚举中的 AllowGet 值。默认情况下，只在响应 POST 请求时才会发送 JSON 数据，通过将该值作为参数传递给 Json 方法，是在告诉 MVC 框架也响应 GET 请求

注意： 如果返回的数据是非私有的，才应该使用 JsonRequestBehavior.AllowGet。由于许多 Web 浏览器中的安全性问题，第三方网站有可能截取响应 GET 请求所返回的 JSON 数据，这是 JsonResult 默认不响应 GET 请求的原因。在大多数场合中，能够使用 POST 请求接收 JSON 数据，来替代这种 GET 方式，这样便可以避免这种问题

在浏览器中处理 JSON 为了处理从 MVC 框架的应用程序服务器接收到的 JSON 数据，可以用 AjaxOptions 类中的 OnSuccess 回调属性，以指定一个 JavaScript 函数

```csharp
@using HelperMethods.Models
@model string
@{
    ViewBag.Title = "GetPeople";
    Layout = "/Views/Shared/_Layout.cshtml";
    AjaxOptions ajaxOpts = new AjaxOptions
    {
        UpdateTargetId = "tableBody",
        Url = Url.Action("GetPeopleData"),
        LoadingElementId = "loading",
        LoadingElementDuration = 1000,
        Confirm = "Do you wish to request new data?"
    };
}

<script type="text/javascript">
    function processData(data) {
        var target = $("#tableBody");
        target.empty();
        for (var i = 0; i < data.length; i++) {
            var person = data[i];
            target.append("<tr><td>" + person.FirstName + "</td><td>"
                + person.LastName + "</td><td>" + person.Role + "</td></tr>");
        }
    }
</script>

<h2>Get People</h2>
<div id="loading" class="load" style="display:none">
    <p>Loading Data...</p>
</div>
<table>
    <thead><tr><th>First</th><th>Last</th><th>Role</th></tr></thead>
    <tbody id="tableBody">
        @Html.Action("GetPeopleData", new { selectedRole = Model })
    </tbody>
</table>
@using (Ajax.BeginForm(ajaxOpts))
{
    <div>
        @Html.DropDownList("selectedRole", new SelectList(
                   new[] { "All" }.Concat(Enum.GetNames(typeof(Role)))))
        <button type="submit">Submit</button>
    </div>
}

<div>
    @foreach (string role in Enum.GetNames(typeof(Role)))
    {
        <div class="ajaxLink">
            @Ajax.ActionLink(role, "GetPeople",
                       new { selectedRole = role },
                       new AjaxOptions
                       {
                           Url = Url.Action("GetPeopleData", new { selectedRole = role }),
                           OnSuccess = "processData"
                       })
        </div>
    }
</div>
```

我定义了一个新的函数名称为 processData，其中包含了一些基本的 jQuery 代码，用于处理 JSON 对象，并用它们创建了填充 table 所需的 tr 和 td 元素 请注意，在我为链接创建的 AjaxOptions 对象中，已经删除了 UpdateTargetId 属性。如果忘记做这件事，渐进式 Ajax 特性会尝试将其取自服务器的 JSON 数据作为 HTML 来处理 通过启动应用程序，导航到 /People/GetPeople，单击其中一个链接，便可以看到切换成 JSON 后的结果。我并没有得到完全正确的结果，特别是表格的 Role 列

准备编码数据 当调用 GetPeopleDataJson 动作方法中的 Json 方法时，我是由 MVC 框架去判断如何对 JSON 格式的 People 对象进行编码的。MVC 框架对应用程序中的模型类型并没有特别的洞察，因此它会尽力猜测该怎么做。下面是 MVC 框架以 JSON 格式表示的一个 Person 对象

```json
...
{"PersonId":0,"FirstName":"Adam","LastName":"Freeman",
 "BirthDate":"\/Date(62135596800000)\/","HomeAddress":null,"IsApproved":false,"Role":0}
...
```

这看起来有点乱，但这种结果实际上相当聪明 —— 但它却不完全是我所需要的。首先，Person 类定义的全部属性都被表示成了 JSON，但在 People 控制器中并未对其中一些属性赋值。在某些情况下，使用的是某个类型的默认值，而对其他一些则使用了 null。有些值已被转换成易于由 JavaScript 解释的形式，而其他一些则未作处理 MVC 框架做了很好的尝试，但最终只是向浏览器发送了一些后来无法使用的属性，而且 Role 的值也没有以一种有用的方式来表示。这是依靠默认的 JSON 编码时所形成的一种典型情况，因而，通常需要对希望发送给客户端的数据做一些准备

```csharp
...
public JsonResult GetPeopleDataJson(string selectedRole = "All")
{
    var data = GetData(selectedRole).Select(p => new {
        FirstName = p.FirstName,
        LastName = p.LastName,
        Role = Enum.GetName(typeof(Role), p.Role)
    });
    return Json(data, JsonRequestBehavior.AllowGet);
}
...
```

这里使用了 LINQ，创建了一个新的对象序列，他只包含 Person 对象的 FirstName 和 LastName 属性，并伴有 Role 值的字符串表示。这种修改的结果是，得到的 JSON 数据只含有我们想要的属性

```json
...
{"FirstName":"Adam","LastName":"Freeman","Role":"Admin"}
...
```

在动作方法中检测 Ajax 请求 目前 People 控制器含有两个动作方法，使我可以支持对 HTML 和 JSON 数据的请求。这是建立控制器常用的办法，因为我喜欢有很多短而简单的动作。但你不必以这种方式工作。MVC 框架提供一个简单的检测 Ajax 请求的方法，这意味着你可以创建一个单一的动作方法，它可以处理多种数据格式

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using HelperMethods.Models;

namespace HelperMethods.Controllers
{
    public class PeopleController : Controller
    {
        private Person[] personData = {
            new Person {FirstName = "Adam", LastName = "Freeman", Role = Role.Admin},
            new Person {FirstName = "Jacqui", LastName = "Griffyth", Role = Role.User},
            new Person {FirstName = "John", LastName = "Smith", Role = Role.User},
            new Person {FirstName = "Anne", LastName = "Jones", Role = Role.Guest}
        };

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetPeopleData(string selectedRole = "All")
        {
            IEnumerable<Person> data = personData;
            if (selectedRole != "All")
            {
                Role selected = (Role)Enum.Parse(typeof(Role), selectedRole);
                data = personData.Where(p => p.Role == selected);
            }

            if (Request.IsAjaxRequest())
            {
                var formattedData = data.Select(p => new
                {
                    FirstName = p.FirstName,
                    LastName = p.LastName,
                    Role = Enum.GetName(typeof(Role), p.Role)
                });
                return Json(formattedData, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return PartialView(data);
            }
        }

        public ActionResult GetPeople(string selectedRole = "All")
        {
            return View((object)selectedRole);
        }
    }
}
```

我使用了 Request.IsAjaxRequest 方法对 Ajax 请求进行检测，并且在其结果为 true 的情况下交付 JSON 格式的数据。在使用这种办法之前你应该意识到两个限制：

* 如果浏览器在其请求已包含了 X-Requested-With 报头，并将其设置为 XMLHttpRequest，则 IsAjaxRequest 方法会返回 true。因此你应该考虑到，你的用户可能会形成需要 JSON 数据的请求，但并未设置这一报头
* 它假设所有的请求都需要 JSON 数据，因此，根据客户端寻求的数据格式形成请求，并按请求形成的方式分别对应用程序进行服务，这样可能会更好些

我还需要对 GetPerson.cshtml 视图做两处修改，以支持这种单一的动作方法

```csharp
@using HelperMethods.Models
@model string
@{
    ViewBag.Title = "GetPeople";
    Layout = "/Views/Shared/_Layout.cshtml";
    AjaxOptions ajaxOpts = new AjaxOptions
    {
        Url = Url.Action("GetPeopleData"),
        LoadingElementId = "loading",
        LoadingElementDuration = 1000,
        OnSuccess = "processData"
    };
}

<script type="text/javascript">
    function processData(data) {
        var target = $("#tableBody");
        target.empty();
        for (var i = 0; i < data.length; i++) {
            var person = data[i];
            target.append("<tr><td>" + person.FirstName + "</td><td>"
                + person.LastName + "</td><td>" + person.Role
                + "</td></tr>");
        }
    }
</script>

<h2>Get People</h2>
<div id="loading" class="load" style="display:none">
    <p>Loading Data...</p>
</div>
<table>
    <thead><tr><th>First</th><th>Last</th><th>Role</th></tr></thead>
    <tbody id="tableBody">
        @Html.Action("GetPeopleData", new { selectedRole = Model })
    </tbody>
</table>
@using (Ajax.BeginForm(ajaxOpts))
{
    <div>
        @Html.DropDownList("selectedRole", new SelectList(
              new[] { "All" }.Concat(Enum.GetNames(typeof(Role)))))
        <button type="submit">Submit</button>
    </div>
}

<div>
    @foreach (string role in Enum.GetNames(typeof(Role)))
    {
        <div class="ajaxLink">
            @Ajax.ActionLink(role, "GetPeople",
              new { selectedRole = role },
              new AjaxOptions
              {
                  Url = Url.Action("GetPeopleData", new { selectedRole = role }),
                  OnSuccess = "processData"
              })
        </div>
    }
</div>
```

第一个修改之处是 AjaxOptions 对象，这是用于 Ajax 的 form 的。由于已不能通过 Ajax 请求来接收 HTML 片段，故需要使用为 Ajax 链接所创建的同一个函数 processData，来处理 JSON 服务器响应。第二个修改时用于 AjaxOptions 的 URL 属性的值，以 GetPeopleData 替代已经不存在的 GetPeopleDataJson 动作方法

# 第 24 章 模型绑定

**模型绑定 (Model Binding)** 是指用浏览器以 HTTP 请求方式发送的数据来创建.NET 对象的过程， **数据的流向是从客户端到动作方法**

## 准备示例项目

## 理解模型绑定

当应用程序接收到请求，并由路由引擎进行处理时，模型绑定过程便开始了 默认的动作调用器 ControllerActionInvoker 要依靠 **模型绑定器** 来生成调用动作所需要的数据对象。模型绑定器由 IModelBinder 接口所定义

```csharp
namespace System.Web.Mvc
{
    public interface IModelBinder
    {
        object BindModel(ControllerContext controllerContext,
        ModelBindingContext bindingContext);
    }
}
```

在一个 MVC 应用程序中，可以有多个模型绑定器，而每个绑定器可以负责绑定一个或多个模型类型。当动作调用器需要调用一个动作方法时，它会考查该方法所定义的参数，并查找各个参数类型所依赖的模型绑定器 例如，动作调用器检查一个方法时，发现它具有一个 int 型的参数。于是会查找负责 int 值绑定的绑定器，并调用它的 BindModel 方法 模型绑定器负责提供能用于调用动作方法的参数值，这通常意味着要对请求数据的某些元素进行转换，但是 MVC 框架对如何获取这些数据并无任何限制

* 检测目标对象 (要创建的对象，通常是动作方法的参数) 的名称和类型
* 通过对象名称查找数据源 (请求)，并找到可用数据 (通常是字符串)
* 根据对象类型将找到的数据值转换成目标类型
* 通过对象名称、对象类型、和经过处理的数据来构造目标对象
* 将构造好的对象送给动作调用器，并由动作调用器将对象注入到目标动作方法中去

在实际开发过程中，一般不需要自己去实现这些步骤 —— 这些工作都是由模型绑定器完成的。但对绑定器的上述模型绑定过程的清醒认识，对理解本章内容是很有用的

## 使用默认模型绑定器

虽然应用程序可以定义自定义的模型绑定器，但大多数都是依靠内建的模型绑定器类 DefaultModelBinder。当动作调用器找不到绑定某个类型的自定义绑定器时，这个默认的模型绑定器便是由动作调用器所使用的一个绑定器。默认情况下，这个模型绑定器会搜索四个位置，以获取与被绑定的参数名匹配的数据

DefaultModelBinder 类查找参数数据的顺序

| 源                  | 描述                                    |
| :------------------ | :-------------------------------------- |
| Request.Form        | 由用户在 HTML 的 form 元素中提供的值    |
| RouteData.Values    | 用应用程序路由获得的值                  |
| Request.QueryString | 包含在请求 URL 中的查询字符串部分的数据 |
| Request.Files       | 请求中上传的文件                        |

这些位置被依序搜索，例如，动作调用器检查一个方法时，发现它具有一个名为 id 的 int 型参数，DefaultModelBinder 会为 id 参数查找以下位置：

1. Request.Form["id"]
2. RouteData.Values["id"]
3. Request.QueryString["id"]
4. Request.Files["id"]

只要找到一个值搜索便停止

提示： 在依靠默认模型绑定器的情况下，重要的是动作方法参数与寻找的数据属性相匹配

绑定简单类型 当处理简单类型参数时，DefaultModelBinder 会尝试使用 System.ComponentModel.TypeDescriptor 类，将已经从请求数据获得的字符串值转换成参数类型。如果无法转换这个值，那么 DefaultModelBinder 便不能绑定该模型

文化敏感解析 DefaultModelBinder 类对来自不同地域的请求数据，会采用特定的文化设置来执行类型转换。从 URL 获得的值会采用非文化敏感解析进行转换。但是，从表单数据获得的值则会考虑文化因素进行转换。 这种情况引起的最普遍的问题与 DateTime 值有关

绑定复杂类型 当动作方法的参数是复合类型时 (即不能用 TypeDescriptor 类进行转换的属性)，DefaultModelBinder 类将用反射来获取 public 属性集，然后依次逐一进行绑定。为了演示其工作机制，我在 Home 控制器中添加了两个新的动作方法

```csharp
using System.Linq;
using System.Web.Mvc;
using MvcModels.Models;

namespace MvcModels.Controllers
{
    public class HomeController : Controller
    {
        private Person[] personData = {
            new Person {PersonId = 1, FirstName = "Adam", LastName = "Freeman", Role = Role.Admin},
            new Person {PersonId = 2, FirstName = "Jacqui", LastName = "Griffyth", Role = Role.User},
            new Person {PersonId = 3, FirstName = "John", LastName = "Smith", Role = Role.User},
            new Person {PersonId = 4, FirstName = "Anne", LastName = "Jones", Role = Role.Guest}
        };

        public ActionResult Index(int? id = 1)
        {
            Person dataItem = personData.Where(p => p.PersonId == id).First();
            return View(dataItem);
        }

        public ActionResult CreatePerson()
        {
            return View(new Person());
        }

        [HttpPost]
        public ActionResult CreatePerson(Person model)
        {
            return View("Index", model);
        }
    }
}
```

不带参数的 CreatePerson 重载版本创建了一个新的 Person 对象，并将其传递给 View 方法 其渲染 /Views/Home/CreatePerson.cshtml 视图

```csharp
@model MvcModels.Models.Person
@{
    ViewBag.Title = "CreatePerson";
    Layout = "~/Views/Shared/_Layout.cshtml";
}

<h2>Create Person</h2>
@using (Html.BeginForm())
{
    <div>@Html.LabelFor(m => m.PersonId)@Html.EditorFor(m => m.PersonId)</div>
    <div>@Html.LabelFor(m => m.FirstName)@Html.EditorFor(m => m.FirstName)</div>
    <div>@Html.LabelFor(m => m.LastName)@Html.EditorFor(m => m.LastName)</div>
    <div>@Html.LabelFor(m => m.Role)@Html.EditorFor(m => m.Role)</div>
    <button type="submit">Submit</button>
}
```

该视图会将编辑器的数据回递给 HttpPost 注解属性修饰的 CreatePerson 动作方法 该动作方法会使用 /Views/Home/Index.cshtml 视图来显示表单所包含的数据 在表单回递给 CreatePerson 方法时，形成了一种不同的模型绑定情况。默认的模型绑定器发现，动作方法需要一个 Person 对象，于是会依次处理每个属性。对于每个简单类型的属性，绑定器会试图从请求中找到一个值 如果一个属性需要另一个复合类型，那么该过程会针对新类型重复执行。获取该类型的 public 属性集，而绑定器也会试图找出所有这些属性的值。不同的是这些属性名是嵌套的。例如，Person 类的 HomeAddress 属性是 Address 类型

```csharp
...
public class Address
{
    public string Line1 { get; set; }
    public string Line2 { get; set; }
    public string City { get; set; }
    public string PostalCode { get; set; }
    public string Country { get; set; }
}
...
```

在为 Line1 属性查找值时，模型绑定器查找的是 HomeAddress.Line1 的值

1. 创建易于绑定的 HTML 这种前缀的使用意味着在设计视图时必须把它们考虑进来，辅助器方法以使之成为一件容易的事

   ```csharp
   @model MvcModels.Models.Person
   @{
       ViewBag.Title = "CreatePerson";
       Layout = "~/Views/Shared/_Layout.cshtml";
   }
   
   <h2>Create Person</h2>
   @using (Html.BeginForm())
   {
       <div>@Html.LabelFor(m => m.PersonId)@Html.EditorFor(m => m.PersonId)</div>
       <div>@Html.LabelFor(m => m.FirstName)@Html.EditorFor(m => m.FirstName)</div>
       <div>@Html.LabelFor(m => m.LastName)@Html.EditorFor(m => m.LastName)</div>
       <div>@Html.LabelFor(m => m.Role)@Html.EditorFor(m => m.Role)</div>
       <div>
           @Html.LabelFor(m => m.HomeAddress.City)
           @Html.EditorFor(m => m.HomeAddress.City)
       </div>
       <div>
           @Html.LabelFor(m => m.HomeAddress.Country)
           @Html.EditorFor(m => m.HomeAddress.Country)
       </div>
       <button type="submit">Submit</button>
   }
   ```

   这里已使用了强类型的 EditorFor 辅助器方法，并根据 HomeAddress 属性指定了希望编辑的属性。辅助器会自动地设置 input 元素的 name 标签属性，以便与默认模型绑定器所使用的格式相匹配

   ```csharp
   ...
   <input class="text-box single-line" id="HomeAddress_Country" name="HomeAddress.Country"
       type="text" value="" />
   ...
   ```

   这种简洁特性的结果是，我不必采取任何特别的手段便可以确保模型绑定器能够为 HomeAddress 属性创建 Address 对象

2. 指定自定义前缀 偶尔也有些时候，你生成的 HTML 与一种类型的对象有关，但你希望将其绑定到另一个对象。这意味着视图包含的前缀与模型绑定器期望的结构不对应于是对你的数据不能作适当的处理。为了演示这种情况，我在 Models 文件夹中创建了一个名为 AddressSummary.cs 的新文件

   ```csharp
   namespace MvcModels.Models
   {
       public class AddressSummary
       {
           public string City { get; set; }
           public string Country { get; set; }
       }
   }
   ```

   在 Home 控制器中添加一个方法，以使用 AddressSummary 类

   ```csharp
   using System.Linq;
   using System.Web.Mvc;
   using MvcModels.Models;
   
   namespace MvcModels.Controllers
   {
       public class HomeController : Controller
       {
           // ...other methods and statements omitted for brevity...
           public ActionResult DisplaySummary(AddressSummary summary)
           {
               return View(summary);
           }
       }
   }
   ```

   创建 DisplaySummary 动作方法对应的视图

   ```csharp
   @model MvcModels.Models.AddressSummary
   @{
       ViewBag.Title = "DisplaySummary";
       Layout = "~/Views/Shared/_Layout.cshtml";
   }
   
   <h2>Address Summary</h2>
   <div><label>City:</label>@Html.DisplayFor(m => m.City)</div>
   <div><label>Country:</label>@Html.DisplayFor(m => m.Country)</div>
   ```

   这个视图显示了 AddressSummary 类定义的两个属性的值。为了演示绑定到不同模型类型时的前缀问题，我修改了 /Views/Home/CreatePerson.cshtml 文件中对 BeginForm 辅助器方法的调用，以便将表单回递给    DisplaySummary 动作方法

   ```csharp
   @model MvcModels.Models.Person
   @{
       ViewBag.Title = "CreatePerson";
       Layout = "~/Views/Shared/_Layout.cshtml";
   }
   
   <h2>Create Person</h2>
   @using (Html.BeginForm("DisplaySummary", "Home"))
   {
       <div>@Html.LabelFor(m => m.PersonId)@Html.EditorFor(m => m.PersonId)</div>
       <div>@Html.LabelFor(m => m.FirstName)@Html.EditorFor(m => m.FirstName)</div>
       <div>@Html.LabelFor(m => m.LastName)@Html.EditorFor(m => m.LastName)</div>
       <div>@Html.LabelFor(m => m.Role)@Html.EditorFor(m => m.Role)</div>
       <div>
           @Html.LabelFor(m => m.HomeAddress.City)
           @Html.EditorFor(m => m.HomeAddress.City)
       </div>
       <div>
           @Html.LabelFor(m => m.HomeAddress.Country)
           @Html.EditorFor(m => m.HomeAddress.Country)
       </div>
       <button type="submit">Submit</button>
   }
   ```

   如果运行应用程序就会发现，表单递交后，为 City 和 Country 属性输入的值并未显示在 DisplaySummary 视图生成的 HTML 中。问题在于表单中的 name 属性具有 HomeAddress 前缀，这不是模型绑定器在试图绑定    AddressSummary 类型时要查找的前缀。我可以对此加以修复，只需对动作方法的参数运用 Bind 注解属性即可，目的是用它来告诉绑定器应该查找哪一个前缀

   ```csharp
   ...
   public ActionResult DisplaySummary([Bind(Prefix = "HomeAddress")]AddressSummary summary)
   {
       return View(summary);
   }
   ...
   ```

   这种语法有点讨厌，但很有效果。在装配 AddressSummary 对象的属性时，模型绑定器会查找请求中的 HomeAddress.City 和 HomeAddress.Country 的数据值。在此例中，我显示了 Person 对象各属性的编辑器，但在   表单数据被递交时，用模型绑定器创建的却是 AddressSummary 类的实例

3. 有选择地绑定属性 假设 AddressSummary 类的 Country 属性特别敏感，因而不希望用户能够指定它的值。能做的第一件事便是防止用户看到该属性，甚至可以使用之前介绍的模型元数据注解属性，阻止该属性出现在发送给浏览器的 HTML 中，或者简单地不在视图中添加该属性的编辑器 然而，恶意用户可以在递交表单数据时，简单地编辑发送给服务器的表单数据，然后选择对他们有用的 Country 属性的值。我真正想做的是告诉模型绑定器不要绑定请求中的 Country 属性值，这可以通过在动作方法参数上使用 Bind 注解属性来实现

   ```csharp
   ...
   public ActionResult DisplaySummary(
   [Bind(Prefix = "HomeAddress", Exclude = "Country")]AddressSummary summary)
   {
       return View(summary);
   }
   ...
   ```

   Bind 注解属性的 Exclude 属性让你能够将一些属性排除在模型绑定过程之外 (另一种办法是使用 Include 属性指定只应该在模型中绑定的那些属性) 当 Bind 注解属性被运用于一个动作方法参数时，它只会影响动作方法   所绑定的类的实例；其他动作方法仍然会尝试绑定该参数类型所定义的所有属性。如果希望形成更广泛的影响，则可以将 Bind 注解属性运用于模型类本身

   ```csharp
   using System.Web.Mvc;
   
   namespace MvcModels.Models
   {
       [Bind(Include = "City")]
       public class AddressSummary
       {
           public string City { get; set; }
           public string Country { get; set; }
       }
   }
   ```

   提示： 当 Bind 注解属性运用于模型类，同时也运用于动作方法参数时，只有这两处注解属性都未排除的模型属性，才会被包含在绑定过程中。这意味着，运用于模型类的策略不会被运用于动作方法参数的策略所覆盖

绑定到数组和集合 默认模型绑定器对于将请求数据绑定到数组和集合有很好的支持

1. 绑定成数组 为了对此进行演示，我在 Home 控制器中添加了一个名为 Names 的新方法

   ```csharp
   using System.Linq;
   using System.Web.Mvc;
   using MvcModels.Models;
   
   namespace MvcModels.Controllers
   {
       public class HomeController : Controller
       {
   
           // ...other methods and statements omitted for brevity...
           public ActionResult Names(string[] names)
           {
               names = names ?? new string[0];
               return View(names);
           }
       }
   }
   ```

   模型绑定器会查找任何名称为 names 的数据项，并创建一个包含这些值的数组

   我创建了一个用来显示数组绑定的视图文件 /Views/Home/Names.cshtml

   ```csharp
      @model string[]
      @{
          ViewBag.Title = "Names";
          Layout = "~/Views/Shared/_Layout.cshtml";
      }
   
      <h2>Names</h2>
      @if (Model.Length == 0)
      {
          using (Html.BeginForm())
          {
              for (int i = 0; i < 3; i++)
              {
                  <div><label>@(i + 1):</label>@Html.TextBox("names")</div>
              }
              <button type="submit">Submit</button>
          }
      }
      else
      {
          foreach (string str in Model)
          {
              <p>@str</p>
          }
          @Html.ActionLink("Back", "Names");
      }
   ```

   该视图根据视图模型的数据项数显示了不同的内容。如果没有数据项，则显示一个表单，其中含有 3 个相同的 input 元素

   ```html
   ...
   <form action="/Home/Names" method="post">
       <div><label>1:</label><input id="names" name="names" type="text" value="" /></div>
       <div><label>2:</label><input id="names" name="names" type="text" value="" /></div>
       <div><label>3:</label><input id="names" name="names" type="text" value="" /></div>
       <button type="submit">Submit</button>
   </form>
   ...
   ```

    递交该表单时，默认的模型绑定器明白动作方法需要一个字符串数组，于是会查找与参数具有同样名称的数据项

2. 绑定到集合 能够绑定的不仅仅是数组，还可以使用.NET 的集合类，将 Names 动作方法的参数类型改成强类型的列表

   ```csharp
   using System.Linq;
   using System.Web.Mvc;
   using MvcModels.Models;

   namespace MvcModels.Controllers
   {
       public class HomeController : Controller
       {

           // ...other methods and statements omitted for brevity...
           public ActionResult Names(IList<string> names)
           {
               names = names ?? new List<string>();
               return View(names);
           }
       }
   }
   ```

   这里使用了 IList 接口。我甚至不需要指定一个具体的实现类 修改 Names.cshtml 视图文件，以使用新的模型类型

   ```csharp
   @model IList<string>
   @{
       ViewBag.Title = "Names";
       Layout = "~/Views/Shared/_Layout.cshtml";
   }
   
   <h2>Names</h2>
   @if (Model.Count == 0)
   {
       using (Html.BeginForm())
       {
           for (int i = 0; i < 3; i++)
           {
               <div><label>@(i + 1):</label>@Html.TextBox("names")</div>
           }
           <button type="submit">Submit</button>
       }
   }
   else
   {
       foreach (string str in Model)
       {
           <p>@str</p>
       }
       @Html.ActionLink("Back", "Names");
   }
   ```

   Names 动作的功能并未改变，但现在可以使用集合类，而不是数组

3. 绑定到自定义模型类型集合 我可以将一些单个的数据属性绑定成一个自定义类型的数组，如上述 AddressSummary 模型类。我向控制器添加了一个新的动作方法，名称为 Address，它具有一个强类型的集合参数，该参数的类型依赖于自定义的模型类型 AddressSummary

   ```csharp
   using System.Collections.Generic;
   using System.Linq;
   using System.Web.Mvc;
   using MvcModels.Models;
   
   namespace MvcModels.Controllers
   {
       public class HomeController : Controller
       {
           // ...other methods and statements omitted for brevity...
           public ActionResult Address(IList<AddressSummary> addresses)
           {
               addresses = addresses ?? new List<AddressSummary>();
               return View(addresses);
           }
       }
   }
   ```

   为该动作方法创建视图 /Views/Home/Address.cshtml

   ```csharp
   @using MvcModels.Models
   @model IList<AddressSummary>
   @{
       ViewBag.Title = "Address";
       Layout = "~/Views/Shared/_Layout.cshtml";
   }
   
   <h2>Addresses</h2>
   @if (Model.Count() == 0)
   {
       using (Html.BeginForm())
       {
           for (int i = 0; i < 3; i++)
           {
               <fieldset>
                   <legend>Address @(i + 1)</legend>
                   <div><label>City:</label>@Html.Editor("[" + i + "].City")</div>
                   <div><label>Country:</label>@Html.Editor("[" + i + "].Country")</div>
               </fieldset>
           }
           <button type="submit">Submit</button>
       }
   }
   else
   {
       foreach (AddressSummary str in Model)
       {
           <p>@str.City, @str.Country</p>
       }
       @Html.ActionLink("Back", "Address");
   }
   ```

   如果模型中无数据项，该视图会渲染一个 form 元素，该元素由两个 input 元素所组成，它们的 name 标签属性以数组索引号为前缀

   ```html
   ...
   <fieldset>
       <legend>Address 1</legend>
       <div>
           <label>City:</label>
           <input class="text-box single-line" name="[0].City" type="text" value="" />
       </div>
       <div>
           <label>Country:</label>
           <input class="text-box single-line" name="[0].Country" type="text" value="" />
       </div>
   </fieldset>
   <fieldset>
       <legend>Address 2</legend>
       <div>
           <label>City:</label>
           <input class="text-box single-line" name="[1].City" type="text" value="" />
       </div>
       <div>
           <label>Country:</label>
           <input class="text-box single-line" name="[1].Country" type="text" value="" />
       </div>
   </fieldset>
   ...
   ```

   当该表单被递交时，默认模型绑定器知道它需要创建的是一个 AddressSummary 对象集合，并利用 name 标签属性中的数组索引前缀获取对象的属性值。以 [0] 为前缀的那些属性表示第一个 AddressSummary 对象，以[1] 为前缀的那些属性表示第二个 AddressSummary 对象，依此类推

   还需要从 AddressSummary 模型类中删除 Bind 注解属性，否则模型绑定器会忽略 Country 属性

   ```csharp
   using System.Web.Mvc;
   
   namespace MvcModels.Models
   {
       // This attribute has been commented out
       // [Bind(Include="City")]
       public class AddressSummary
       {
           public string City { get; set; }
           public string Country { get; set; }
       }
   }
   ```

## 手工调用模型绑定

当动作方法定义了参数时，模型绑定过程是自动执行的，但只要我愿意，也可以直接控制这一过程。这使我能够更明确地控制如何实例化模型对象、从何处获取数据，以及如何处理数据解析错误等。以下演示了如何将 Hoem 控制器的 Address 动作方法修改成手工调用绑定过程

```csharp
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using MvcModels.Models;

namespace MvcModels.Controllers
{
    public class HomeController : Controller
    {
        // ...other methods and statements omitted for brevity...
        public ActionResult Address()
        {
            IList<AddressSummary> addresses = new List<AddressSummary>();
            UpdateModel(addresses);
            return View(addresses);
        }
    }
}
```

UpdateModel 方法以上一条语句定义的模型对象为参数，并试图用标准的绑定过程来获取其 public 属性的值 当手工调用绑定过程时，可以将绑定过程限制到一个单一的数据源。默认情况下绑定器会查找四个地方：表单数据、路由数据、查询字符串、以及上传文件

```csharp
...
public ActionResult Address()
{
    IList<AddressSummary> addresses = new List<AddressSummary>();
    UpdateModel(addresses, new FormValueProvider(ControllerContext));
    return View(addresses);
}
...
```

UpdateModel 方法的这一版本以 IValueProvider 接口的一个实现为参数，该实现也成为绑定过程的唯一数据源。四个默认数据位置中的每一个都由一个 IValueProvider 实现表示

内建的 IValueProvider 的实现

| 源                  | IValueProvider 实现             |
| :------------------ | :------------------------------ |
| Request.Form        | FormValueProvider               |
| RouteData.Values    | RouteDataValueProvider          |
| Request.QueryString | QueryStringValueProvider        |
| Request.Files       | HttpFileCollectionValueProvider |

以上列出的每一个类都以 ControllerContext 为构造器参数，这是 Controller 类定义的一个属性。限制数据源最常用的方式是只查找表单值。我可以用一个更雅致的绑定技巧，而不必创建 FormValueProvider 的实例

```csharp
...
public ActionResult Address(FormCollection formData)
{
    IList<AddressSummary> addresses = new List<AddressSummary>();
    UpdateModel(addresses, formData);
    return View(addresses);
}
...
```

FormCollection 类也实现了 IValueProvider 接口，而且如果把动作方法定义成以这个类型为参数，那么模型绑定器将为我提供一个能够直接传递给 UpdateModel 方法的对象

提示： UpdateModel 方法的其他重载版本可以指定一个搜索前缀，并指定绑定过程中应当包含哪些模型属性

处理绑定错误 当明确地调用模型绑定时，我需要负责 处理绑定错误。模型绑定器通过抛出 InvalidOperationException 异常来表示绑定错误。错误的细节通过 ModelState 特性进行检查。在使用 UpdateModel 方法时，必须做好捕捉该异常的准备，并用 ModelState 将错误消息表示给用户

```csharp
...
public ActionResult Address(FormCollection formData)
{
    IList<AddressSummary> addresses = new List<AddressSummary>();
    try
    {
        UpdateModel(addresses, formData);
    }
    catch (InvalidOperationException ex)
    {
        // provide feedback to user
    }
    return View(addresses);
}
...
```

另一个可选的办法是使用 TryUpdateModel 方法。如果模型绑定成功，它会返回 true；否则返回 false

```csharp
...
public ActionResult Address(FormCollection formData)
{
    IList<AddressSummary> addresses = new List<AddressSummary>();
    if (TryUpdateModel(addresses, formData))
    {
        // proceed as normal
    }
    else
    {
        // provide feedback to user
    }
    return View(addresses);
}
...
```

提示： 当自动调用模型绑定时，绑定错误不会发出异常信号。因此，必须通过 ModelState.IsValid 属性来检查结果

## 定制模型绑定系统

创建自定义值提供器 通过定义一个自定义的值提供器，可以将自己的数据源添加到模型绑定过程。 **值提供器 (Value Provider)** 需要实现 IValueProvider 接口

```csharp
namespace System.Web.Mvc
{
    public interface IValueProvider
    {
        bool ContainsPrefix(string prefix);
        ValueProviderResult GetValue(string key);
    }
}
```

ContainsPrefix 方法由模型绑定器调用，以确定这个值提供器是否可以解析给定前缀的数据。GetValue 方法返回给定数据键的值，或者在值提供器无法得到合适的数据时返回 null 在 Infrastructure 文件夹下创建一个名为 CountryValueProvider.cs 的新文件，将用它提供 Country 属性的值

```csharp
using System.Globalization;
using System.Web.Mvc;

namespace MvcModels.Infrastructure
{
    public class CountryValueProvider : IValueProvider
    {
        public bool ContainsPrefix(string prefix)
        {
            return prefix.ToLower().IndexOf("country") > -1;
        }
        public ValueProviderResult GetValue(string key)
        {
            if (ContainsPrefix(key))
            {
                return new ValueProviderResult("USA", "USA",
                CultureInfo.InvariantCulture);
            }
            else
            {
                return null;
            }
        }
    }
}
```

该值提供器只对请求 Country 属性的值进行响应，而且总是返回值 USA，其对其他请求返回 null，表示无法提供数据 我必须将数据值作为一个 ValueProviderResult 类来返回。这个类有三个构造器参数：第一个参数是与请求键关联的数据项；第二个参数是作为 HTML 页面一部分的该数据的安全显示形式；最后一个参数是与该值相关的文化信息 为了在应用程序中对这个值提供器进行注册，我需要创建一个工厂类，以便在 MVC 框架需要时为这个值提供器创建实例。这个工厂类必须派生于抽象类 ValueProviderFactory。在 Infrastructure 文件夹下创建一个名为 CustomValueProviderFactory.cs 的新类文件

```csharp
using System.Web.Mvc;

namespace MvcModels.Infrastructure
{
    public class CustomValueProviderFactory : ValueProviderFactory
    {
        public override IValueProvider GetValueProvider(ControllerContext
        controllerContext)
        {
            return new CountryValueProvider();
        }
    }
}
```

当模型绑定器要为绑定过程获取值时，会调用这个 GetValueProvider 方法。上述实现简单地创建并返回了 CountryValueProvider 类的一个实例，但你可以使用 ControllerContext 参数提供的数据，以便创建不同的值提供器，对不同种类的请求进行响应

我需要在应用程序中注册这个工厂类，可以在 Global.asax 的 Applica_Start 方法中做这件事

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using MvcModels.Infrastructure;

namespace MvcModels
{

    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            ValueProviderFactories.Factories.Insert(0, new CustomValueProviderFactory());
        }
    }
}
```

通过将一个实例添加到静态的 ValueProviderFactories.Factories 集合，可以注册这个工厂类。正如之前所解释的那样，模型绑定器会依次考察这些值提供器，如果希望这一值提供器在其他值提供器之前被考察，可以指定值提供器的索引 如果希望这一值提供器在其他值提供器不能提供数据值时作为一个备选，那么可以用 Add 方法把工厂追加到集合的末尾

```csharp
...
ValueProviderFactories.Factories.Add(new CustomValueProviderFactory());
...
```

在能够对值提供器进行测试之前，需要修改 Addrss 动作方法，以使模型绑定器不只是为模型属性值考察表单数据。需要删除对值源的限制，去除对 TryUpdateModel 方法的调用

```csharp
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using MvcModels.Models;

namespace MvcModels.Controllers
{
    public class HomeController : Controller
    {
        // ...other methods and statements omitted for brevity...
        public ActionResult Address()
        {
            IList<AddressSummary> addresses = new List<AddressSummary>();
            UpdateModel(addresses);
            return View(addresses);
        }
    }
}
```

创建自定义模型绑定器 通过创建一个特定类型的自定义模型绑定器，我可以覆盖默认绑定器的行为。自定义模型绑定器实现 IModelBinder 接口。为了演示如何创建自定义模型绑定器，在 Infrastructure 文件夹下创建一个名为 AddressSummaryBinder.cs 的类文件

```csharp
using MvcModels.Models;
using System.Web.Mvc;

namespace MvcModels.Infrastructure
{
    public class AddressSummaryBinder : IModelBinder
    {
        public object BindModel(ControllerContext controllerContext, ModelBindingContext bindingContext)
        {
            AddressSummary model = (AddressSummary)bindingContext.Model ?? new AddressSummary();
            model.City = GetValue(bindingContext, "City");
            model.Country = GetValue(bindingContext, "Country");
            return model;
        }

        private string GetValue(ModelBindingContext context, string name)
        {
            name = (context.ModelName == "" ? "" : context.ModelName + ".") + name;
            ValueProviderResult result = context.ValueProvider.GetValue(name);
            if (result == null || result.AttemptedValue == "")
            {
                return "<Not Specified>";
            }
            else
            {
                return (string)result.AttemptedValue;
            }
        }
    }
}
```

当 MVC 框架需要一个模型绑定器所支持的模型类型时，将调用 BindModel 方法。这里的 AddressSummaryBinder 类仅用于创建 AddressSummary 类的实例 (你可以创建支持多个类型的自定义绑定器，但我更喜欢一个绑定器只用于一种类型)

提示： 在这个模型绑定器中，我并未执行任何输入验证，我假设用户对所有 Person 属性提供了有效值

BindModel 方法的参数是一个 ControllerContext 对象和一个 ModelBindingContext 对象，可以用它们来获取当前请求的细节和当前寻找的模型对象的细节，并能访问 MVC 应用程序中其他模型绑定工具

ModelBindingContext 类所定义的最有用的属性

| 属性          | 描述                                                        |
| :------------ | :---------------------------------------------------------- |
| Model         | 如果手工调用了绑定，可返回传递给 UpdateModel 方法的模型对象 |
| ModelName     | 返回被绑定模型的名称                                        |
| ModelType     | 返回被创建模型的类型                                        |
| ValueProvider | 返回能用于从请求中获取数据值的 IValueProvider 实现          |

我的自定义模型绑定器很简单。在调用 BindModel 方法时，检查是否已经设置了 ModelBindingContext 对象的 Model 属性，如果已设置，则该模型便是将要为之生成数据值的对象，若未设置，则创建 AddressSummary 类的一个新实例。通过调用 GetValue 方法获取 City 和 Country 属性的值，然后返回已经填充过的 AddressSummary 对象 在 GetValue 方法中，我使用了通过 ModelBindingContext.ValueProvider 属性获得的 IValueProvider 实现，以获取模型对象属性的值 ModelName 属性能够告诉我，对正在寻找的属性名称，是否需要加一个前缀。你应该还记得，我的动作方法是在试图创建一个 AddressSummary 对象的集合，这意味着，各个 input 元素将具有附带了 [0] 和 [1] 等前缀的那么属性值。我在请求中寻找的值将是 [0].City、[0].Country 等。最后，当无法为一个属性找到值，或该属性为空字符串时，便提供一个默认值 (这是用户未在表单的 input 元素中输入值时，发送给服务器的内容)

注册自定义模型绑定器 该模型绑定器需要注册，以便 MVC 应用程序知道它能支持的类型。可以在 Global.asax 的 Application_Start 方法中完成

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using MvcModels.Infrastructure;
using MvcModels.Models;

namespace MvcModels
{

    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            // This statement has been commented out
            // ValueProviderFactories.Factories.Insert(0,
            // new CustomValueProviderFactory());
            ModelBinders.Binders.Add(typeof(AddressSummary), new AddressSummaryBinder());
        }
    }
}
```

这里用 ModelBinders.Binders.Add 方法注册了我的绑定器，在其中传递了该绑定器所支持的类型，以及绑定器类的一个实例。注意，我已经删除了自定义值提供器的注册语句

用注解属性注册模型绑定器 你也可以通过在模型类上用 ModelBinder 注解属性进行修饰，来注册自定义模型绑定器

```csharp
using System.Web.Mvc;
using MvcModels.Infrastructure;

namespace MvcModels.Models
{
    [ModelBinder(typeof(AddressSummaryBinder))]
    public class AddressSummary
    {
        public string City { get; set; }
        public string Country { get; set; }
    }
}
```

# 第 25 章 模型验证

上一章展示了 MVC 框架如何通过模型绑定过程来创建 HTTP 请求的模型对象。整个上一章是建立在用户提供的数据是合法的这一基础之上的。但实际情况是，用户通常会输入一些不能验证和使用的数据，这便产生了本章的论题 —— 模型验证 **模型验证 (Model Validation)** 是确保应用程序所接收的数据适合于绑定到模型，并且在不合适时给用户提供有用的信息，以帮助他们修正其问题的过程 第一部分：检查接收的数据，保持域模型的完整性。第二部分：帮助用户修正问题

## 准备示例项目

## 明确地验证模型

验证一个模型最直接的方式，是在动作方法中做这种事

```csharp
using System;
using System.Web.Mvc;
using ModelValidation.Models;

namespace ModelValidation.Controllers
{
    public class HomeController : Controller
    {
        public ViewResult MakeBooking()
        {
            return View(new Appointment { Date = DateTime.Now });
        }

        [HttpPost]
        public ViewResult MakeBooking(Appointment appt)
        {
            if (string.IsNullOrEmpty(appt.ClientName))
            {
                ModelState.AddModelError("ClientName", "Please enter your name");
            }

            if (ModelState.IsValidField("Date") && DateTime.Now > appt.Date)
            {
                ModelState.AddModelError("Date", "Please enter a date in the future");
            }

            if (!appt.TermsAccepted)
            {
                ModelState.AddModelError("TermsAccepted", "You must accept the terms");
            }

            if (ModelState.IsValid)
            {
                // statements to store new Appointment in a
                // repository would go here in a real project
                return View("Completed", appt);
            }
            else
            {
                return View();
            }
        }
    }
}
```

这里检查了模型绑定器赋给参数对象的各个属性的值，并且用 ModelState 属性注册了所发现的错误，ModelState 属性是控制器从它的基类继承而来的。作为一个例子，考虑如何检查 ClientName 属性

```csharp
...
if (string.IsNullOrEmpty(appt.ClientName))
{
    ModelState.AddModelError("ClientName", "Please enter your name");
}
...
```

我希望用户为此属性提供一个值，因此，用静态的 string.IsNullOrEmpty 方法对该属性进行了检查。如果未接收到一个值，则使用 ModelState.AddModelError 方法指定有问题的属性名，和一条应该显示给用户的消息。以帮助他们改正这一错误 我可以通过使用 ModelState.IsValidField 属性来检查模型绑定器是否能够对一个属性赋值。对于 Data 属性就是这么做的，以确保模型绑定器能够解析用户所递交的值。如果无法从请求数据中解析到一个值，执行额外检查或者报告其他错误消息是没有意义的 在验证了模型对象的所有属性之后，我读取了 ModelState.IsValid 属性，以考察是否有错误发生。如果检查期间调用 Model.State.AddModelError 方法，或在创建 Appointment 对象时模型绑定器遇到了问题，该方法会返回 true

```csharp
if (ModelState.IsValid)
{
    // statements to store new Appointment in a
    // repository would go here in a real project
    return View("Completed", appt);
}
else
{
    return View();
}
```

如果 IsValid 属性没有报告任何问题，我便知道已经有了一个有效的 Appointment 对象，并且可以渲染 Completed.cshtml 视图。如果 IsValue 属性返回 false，那么我便知道有问题发生，采取的处理方式是调用 View 方法渲染默认视图

显示验证错误给用户 通过调用 View 方法来处理验证错误看上去可能有点奇怪，但是在 MakeBooking.cshtml 视图中用来生成 input 元素的模板视图辅助器，会检查视图模型的验证错误 如果相关属性有错误报告，那么辅助器会给对应的 input 元素添加一个 CSS 的 class 标签属性，其值为 input-validation-error

设置复选框样式 设置复选框样式比较难，我的解决方案是用一个自定义的模板~/Views/Shared/EditorTemplates/Boolean.cshtml 替换布尔编辑器模板，将复选框封装在一个更容易设置样式的元素中

```csharp
@model bool?

@if (ViewData.ModelMetadata.IsNullableValueType)
{
    @Html.DropDownListFor(m => m, new SelectList(new[] { "Not Set", "True", "False" }, Model))
}
else
{
    ModelState state = ViewData.ModelState[ViewData.ModelMetadata.PropertyName];
    bool value = Model ?? false;
    if (state != null && state.Errors.Count > 0)
    {
        <span class="input-validation-error" style="padding: 0; margin: 1px">
            @Html.CheckBox("", value)
        </span>
    }
    else
    {
        @Html.CheckBox("", value)
    }
}
```

## 显示验证消息

模板辅助器方法运用于 input 元素的 CSS 样式指出了一个字段有问题，但它们不会告诉用户这个问题是什么。Html.ValidationSummary 辅助器方法给用户显示验证错误的摘要，如果没有错误那么该辅助器方法不会生成任何 HTML

```csharp
@model ModelValidation.Models.Appointment

@{
    ViewBag.Title = "Make A Booking";
}
<h4>Book an Appointment</h4>
@using (Html.BeginForm())
{
    @Html.ValidationSummary()
    <p>Your name: @Html.EditorFor(m => m.ClientName)</p>
    <p>Appointment Date: @Html.EditorFor(m => m.Date)</p>
    <p>@Html.EditorFor(m => m.TermsAccepted) I accept the terms & conditions</p>
    <input type="submit" value="Make Booking" />
}
```

注： 本章为 Data 属性所显示的值采用的是美国的日期格式："月 / 日 / 年"。如果你处于不同的地域，则可以输入当地有效的日期格式 (比如 "日 / 月 / 年"，这是欧洲广为使用的格式)，或者在 Web.config 文件中 system.web 节中添加 `<globalization culture="en-US" uiCulture="en-US"/>`，以强制 MVC 应用程序使用美国的日期格式

这种验证摘要显示了在 MakeBooking 动作方法中用 ModelState 注册的错误消息。以下是该辅助器方法生成的 HTML

```html
...
<div class="validation-summary-errors" data-valmsg-summary="true">
    <ul>
        <li>Please enter your name</li>
        <li>Please enter a date in the future</li>
        <li>You must accept the terms</li>
    </ul>
</div>
...
```

这些错误被表示成 div 元素中的一个列表，对该元素运用了 validation-summary-errors 样式类 ValidationSummary 方法还有一些重载版本，ValidationSummary 辅助器的一些重载方法允许开发人员指定只显示模型级错误。前面用 ModelState 注册的错误都是属性级错误，意即：为一个属性所提供的值有问题，修改这个值可以解决这一问题

有用的 ValidationSummary 辅助器重载方法

| 重载方法                             | 描述                                                         |
| :----------------------------------- | :----------------------------------------------------------- |
| Html.ValidationSummary()             | 生成所有验证错误的摘要                                       |
| Html.ValidationSummary(bool)         | 如果 bool 参数为 true 那么只显示模型级错误。如果为 false 便显示所有错误 |
| Html.ValidationSummary(string)       | 在所有验证错误摘要之前显示一条消息                           |
| Html.ValidationSummary(bool, string) | 在验证错误前显示一条消息。如果 bool 参数为 true，则只显示模型级错误 |

相比之下，当存在由于两个或多个属性值之间的相互作用而引发的错误时，可以使用模型级错误。作为一个例子，我假设姓名为 "Joe" 的客户不能形成星期一的预约

```csharp
...
if (ModelState.IsValidField("ClientName") && ModelState.IsValidField("Date") 
    && appt.ClientName == "Joe" && appt.Date.DayOfWeek == DayOfWeek.Monday)
{
    ModelState.AddModelError("", "Joe cannot book appointments on Mondays");
}
...
```

在查看 Joe 是否视图预约星期一之前，用 ModelState.IsValidField 方法确认已经有了合法的 ClientName 和 Data 值。这意味着，除非前面在属性上的检查已经成功，否则不会生成模型级错误给 ModelState.AddModelError 方法的第一个参数传递一个空字符串，便可以注册一条模型级错误

显示属性级验证消息 希望把验证摘要限制到模型级错误的原因时，属性级错误可以显示在相应的字段的旁边。如果这么做，那么便不希望在摘要中重复这些属性级消息了

```csharp
@model ModelValidation.Models.Appointment
@{
    ViewBag.Title = "Make A Booking";
}

<h4>Book an Appointment</h4>
@using (Html.BeginForm())
{
    @Html.ValidationSummary(true)
    <p>@Html.ValidationMessageFor(m => m.ClientName)</p>
    <p>Your name: @Html.EditorFor(m => m.ClientName)</p>
    <p>@Html.ValidationMessageFor(m => m.Date)</p>
    <p>Appointment Date: @Html.EditorFor(m => m.Date)</p>
    <p>@Html.ValidationMessageFor(m => m.TermsAccepted)</p>
    <p>@Html.EditorFor(m => m.TermsAccepted) I accept the terms & conditions</p>
    <input type="submit" value="Make Booking" />
}
```

Html.ValidationMessageFor 辅助器为单个模型属性显示错误消息。如果运用的属性有验证错误，辅助器会插入 HTML 到响应中

```csharp
...
<p>
    <span class="field-validation-error" data-valmsg-for="ClientName"
          data-valmsg-replace="true">
        Please enter your name
    </span>
</p>
...
```

## 使用其他验证技术

在动作方法中执行模型验证只是 MVC 框架中可用的验证技术之一

在模型绑定器内实施验证 默认模型绑定器会将验证作为绑定过程的一部分。如果清除 Data 表单的值并递交表单将发生错误，对 Data 字段显示的错误是由模型绑定器添加的，因为它无法通过表单所递交的空字段创建 DateTime 对象。模型绑定器会为模型对象中的每一个属性执行一些基本的验证。如果未提供一个值，或提供的值不能被解析成相应的模型属性类型，会显示不同的错误消息 内建的默认模型绑定器类 DefaultModelBinder 提供了一些可以重写的有用的方法，以便对一个绑定器添加验证

DefaultModelBinder 类中可以对模型绑定过程添加验证的方法

| 方法           | 描述                                             | 默认实现                                                     |
| :------------- | :----------------------------------------------- | :----------------------------------------------------------- |
| OmModelUpdated | 在绑定器试图对模型对象中的所有属性进行赋值时调用 | 运用由模型元数据定义的验证规则，并用 ModelState 注册错误     |
| SetProperty    | 在绑定器对一个特定属性运用一个值时调用           | 如果该属性不能保存 null 值，并且没有可以运用的值，那么将用 ModelState 注册一条 `The <name> field is required` 的错误消息。如果有一个值，但不能进行解析，那么将注册 `The value <value> is not valid for <name>` |

可以重写以上方法，以便在创建自定义模型绑定器时，将自己的验证逻辑推入到绑定过程之中。但这不是我所喜欢的技术，因为感觉像是在 MVC 模式中放错了验证逻辑的位置 —— 虽然有太多的 MVC 应用程序是这样做的，这只是个人喜好而已。我喜欢使用在模型类运用元数据的方式来处理验证

用模型元数据指定验证规则 MVC 框架也支持使用模型元数据来表达验证规则。使用模型元数据的优点是，在整个应用程序中运用绑定过程的任何地方，都会强制执行验证规则，而不只是存在于个别动作方法中。内建的默认模型绑定器类 DefaultModelBinder，会对注解属性进行检测并强制执行

```csharp
using System;
using System.ComponentModel.DataAnnotations;

namespace ModelValidation.Models
{
    public class Appointment
    {
        [Required]
        public string ClientName { get; set; }

        [DataType(DataType.Date)]
        [Required(ErrorMessage = "Please enter a date")]
        public DateTime Date { get; set; }

        [Range(typeof(bool), "true", "true", ErrorMessage = "You must accept the terms")]
        public bool TermsAccepted { get; set; }
    }
}
```

在上述示例中，运用了两个验证注解属性 ——Required 和 Range。Required 注解属性指明如果用户未递交一个属性的值，便是一个验证错误。Range 注解属性指明可接受值的一个子集

内建的验证注解属性

| 属性              | 示例                           | 描述                                                         |
| :---------------- | :----------------------------- | :----------------------------------------------------------- |
| Compare           | [Compare("MyOtherProperty")]   | 两个属性必须有同样的值。当你要求用户对一个属性提供两次同样的值是，这个属性是有用的 |
| Range             | [Range(10, 20)]                | 一个数字值 (或实现 IComparable 接口的任何属性类型)，必须不超出指定的最小值和最大值。为了指定只有一端的边界，可以用一个 MinValue 或 MaxValue 常数，如 [Range (int.MinValue, 50)] |
| RegularExpression | [RegularExpression("pattern")] | 一个字符串值，必须匹配指定的正则表达式模式。注意，该模式必须完全匹配用户所提供的值，而不只是其中一个子串，它默认是大小写敏感的，但你可以通过运用 (?!) 修饰符，使大小写不敏感，如 [RegularExpression ("(?i) mypattern")] |
| Required          | [Required]                     | 必须是一个非空值，或一个不是只含空格的字符串。如果你希望空格作为可以接受值，可以用 [Required (AllowEmptyStrings = true)] |
| StringLength      | [StringLength(10)]             | 一个字符串值，必须不超过指定的最大长度。也可以指定一个最小长度 [StringLength (10, MinimumLength=2)] |

所有这些注解属性都可以个 ErrorMessage 属性设置一个值，以指定一个自定义的错误消息

```csharp
...
[Required(ErrorMessage="Please enter a date")]
...
```

如果不提供自定义错误消息，那么将采用默认消息。内建的验证注解属性很基本，而且只能做属性级验证。即使这样，仍然需要使用一些技巧。作为一个例子，考虑运用于 TermsAccepted 属性的验证注解属性：

```csharp
...
[Range(typeof(bool), "true", "true", ErrorMessage="You must accept the terms")]
...
```

我希望确保用户选中了复选框，以接受条款。此时不能使用 Required 注解属性，因为用于 bool 值的模板辅助器会生成一个隐藏的 HTML 元素，以确保即使复选框未选中时也会获得一个值。为了解决这个问题，可以利用 Range 注解属性的一个特性，它让我提供一个 Type，并以字符串值，指定上下限。通过把上下限均设置为 true，可以为使用复选框的 bool 属性的编辑器视图创建一个等效的 Required 注解属性

提示： DataType 注解属性不能用于验证用户输入，只能对使用模板辅助器进行渲染的值提供提示。因此，不要指望 DataType (DataType.EmailAddress) 这样的注解属性来强制一个特定的格式

1. 创建自定义的属性验证注解属性 前面使用 Range 注解属性创建了 Required 注解属性的行为，这种技巧有点笨拙。幸运的是，我并不受这种内建属性的限制。通过从 ValidationAttribute 类进行派生，并实现自定义的验证逻辑，也可以创建自己的验证注解属性。在 Infrastructure 文件夹中创建一个名为 MustBeTrueAttribute.cs 的类文件

   ```csharp
   using System.ComponentModel.DataAnnotations;
   
   namespace ModelValidation.Infrastructure
   {
       public class MustBeTrueAttribute : ValidationAttribute
       {
           public override bool IsValid(object value)
           {
               return value is bool && (bool)value;
           }
       }
   }
   ```

   这个类文件定义了一个新的注解属性，名称为 MustBeTrueAttribute，并重写了基类的 IsValid 方法。这是绑定器将要调用的方法，以便对运用了该注解属性的模型属性进行验证，在其中提供了用户已经提供的值作为参数 在这个例子中验证逻辑很简单，如果这是一个具有 true 值的 bool 型，那么这个值就是有效的。通过在 IsValid 方法中返回 true，便可以指示一个值是有效的。接下来可以用自定义注解属性 MustBeTrue 替换 Range 注解属性

   ```csharp
   using System;
   using System.ComponentModel.DataAnnotations;
   using ModelValidation.Infrastructure;
   
   namespace ModelValidation.Models
   {
       public class Appointment
       {
           [Required]
           public string ClientName { get; set; }
   
           [DataType(DataType.Date)]
           [Required(ErrorMessage = "Please enter a date")]
           public DateTime Date { get; set; }
   
           [MustBeTrue(ErrorMessage = "You must accept the terms")]
           public bool TermsAccepted { get; set; }
       }
   }
   ```

   这要比滥用 Range 注解属性更灵活且更易理解

2. 通过内建的验证注解属性进行派生 在前面的示例中我从零开始建立了一个验证注解属性，但其实也可以通过内建的验证注解属性来派生类，这为我提供了扩展内建验证注解属性行为的能力。在 Infrastructure 文件夹中添加一个名为 FutureDateAttribute.cs 的新文件

   ```csharp
   using System;
   using System.ComponentModel.DataAnnotations;
   
   namespace ModelValidation.Infrastructure
   {
       public class FutureDateAttribute : RequiredAttribute
       {
           public override bool IsValid(object value)
           {
               return base.IsValid(value) && ((DateTime)value) > DateTime.Now;
           }
       }
   }
   ```

   这里通过 RequiredAttribute 类派生了这个新的 FutureDateAttribute 类，并重写了 IsValid 方法，以验证一个将来的日期。因为已经调用了 IsValid 方法的实现，因此该注解属性将执行 RequiredAttribute 注解属性所包含的所有基本验证步骤

   ```csharp
   using System;
   using System.ComponentModel.DataAnnotations;
   using ModelValidation.Infrastructure;
   using System.Web.Mvc;
   
   namespace ModelValidation.Models
   {
       public class Appointment
       {
           [Required]
           public string ClientName { get; set; }
   
           [DataType(DataType.Date)]
           [FutureDate(ErrorMessage = "Please enter a date in the future")]
           public DateTime Date { get; set; }
   
           [MustBeTrue(ErrorMessage = "You must accept the terms")]
           public bool TermsAccepted { get; set; }
       }
   }
   ```

3. 创建模型验证注解属性 到目前为止，我所创建的自定义验证注解属性都是运用于个别模型属性的，这意味着它们只能引发属性级验证错误。我也可以使用注解属性来验证整个模型，它们将引发模型级验证错误 在 Infrastructure 文件夹中添加一个名为 NoJoeOnMondaysAttribute.cs 的新文件

   ```csharp
   using System;
   using System.ComponentModel.DataAnnotations;
   using ModelValidation.Models;

   namespace ModelValidation.Infrastructure
   {
       public class NoJoeOnMondaysAttribute : ValidationAttribute
       {
           public NoJoeOnMondaysAttribute()
           {
               ErrorMessage = "Joe cannot book appointments on Mondays";
           }

           public override bool IsValid(object value)
           {
               Appointment app = value as Appointment;
               if (app == null || string.IsNullOrEmpty(app.ClientName) ||
               app.Date == null)
               {
                   // I don't have a model of the right type to validate, or I don't have
                   // the values for the ClientName and Date properties I require
                   return true;
               }
               else
               {
                   return !(app.ClientName == "Joe" &&
                   app.Date.DayOfWeek == DayOfWeek.Monday);
               }
           }
       }
   }
   ```

   与单个属性的情况相比，在模型类上运用验证注解属性时模型绑定器传递给 IsValid 方法的 object 参数将是模型对象 —— 本例中是 Appointment。该验证注解属性会进行检查，以确保已经有了一个 Appointment 对象。如果有则也就有了可以使用 ClientName 和 Data 属性的值。如果有了所需要的数据，我就可以确保 Joe 不能视图预约星期一

   ```csharp
   using System;
   using System.ComponentModel.DataAnnotations;
   using ModelValidation.Infrastructure;
   
   namespace ModelValidation.Models
   {
       [NoJoeOnMondays]
       public class Appointment
       {
           [Required]
           public string ClientName { get; set; }
   
           [DataType(DataType.Date)]
           [FutureDate(ErrorMessage = "Please enter a date in the future")]
           public DateTime Date { get; set; }
   
           [MustBeTrue(ErrorMessage = "You must accept the terms")]
           public bool TermsAccepted { get; set; }
       }
   }
   ```

   此刻，我在动作方法中两个同一种类的验证，而且都使用验证注解属性，这意味着对同一验证问题，用户会看到两个类似的验证信息。为了解决这一问题我已经从 Home 控制器的 MakeBooking 动作方法中删除了明确的验证检查，其效果是让验证注解属性全权负责执行自定义验证检查

   ```csharp
   using System;
   using System.Web.Mvc;
   using ModelValidation.Models;

   namespace ModelValidation.Controllers
   {
       public class HomeController : Controller
       {
           public ViewResult MakeBooking()
           {
               return View(new Appointment { Date = DateTime.Now });
           }

           [HttpPost]
           public ViewResult MakeBooking(Appointment appt)
           {
               if (ModelState.IsValid)
               {
                   // statements to store new Appointment in a
                   // repository would go here in a real project
                   return View("Completed", appt);
               }
               else
               {
                   return View();
               }
           }
       }
   }
   ```

   要注意的重要一点是：当检测到属性级问题时，模型级验证注解属性不会生效 这里的问题在于，由于第一个面板中未向用户标记错误，这表示系统含蓄地接受了输入的值

定义自验证模型 另一种验证技术是创建 **自验证模型 (Self-Validating Models)** ，即验证逻辑是模型类的一部分。一个自验证模型实现了 IValidatableObject 接口

```csharp
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using ModelValidation.Infrastructure;

namespace ModelValidation.Models
{
    public class Appointment : IValidatableObject
    {
        public string ClientName { get; set; }

        [DataType(DataType.Date)]
        public DateTime Date { get; set; }

        public bool TermsAccepted { get; set; }

        public IEnumerable<ValidationResult> Validate(ValidationContext
            validationContext)
        {
            List<ValidationResult> errors = new List<ValidationResult>();

            if (string.IsNullOrEmpty(ClientName))
            {
                errors.Add(new ValidationResult("Please enter your name"));
            }

            if (DateTime.Now > Date)
            {
                errors.Add(new ValidationResult("Please enter a date in the future"));
            }

            if (errors.Count == 0 && ClientName == "Joe"
                && Date.DayOfWeek == DayOfWeek.Monday)
            {
                errors.Add(
                new ValidationResult("Joe cannot book appointments on Mondays"));
            }

            if (!TermsAccepted)
            {
                errors.Add(new ValidationResult("You must accept the terms"));
            }

            return errors;
        }
    }
}
```

IValidatableObject 接口定义了一个方法 Validate。该方法以 ValidationContext 为参数，不过这个类型不是 MVC 专用的，并且用的也不多。Validate 方法的结果是 ValidationResult 对象的一个枚举，其中每一个都表示一个验证错误 如果模型类实现了 IValidatableObject 接口，那么在模型绑定器对每个模型属性赋值后，便会调用该 Validate 方法。这种办法的好处是，它结合了将验证逻辑放入动作方法的灵活性，但又具有任何时候都会运用模型绑定过程创建模型类型实例的一致性 这种方法的另一个好处是，可以在一个地方将模型级和属性级验证结合在一起，这意味着所有错误都显示在一起。有些开发人员不喜欢将验证逻辑放在模型类中，但我认为这十分适合于 MVC 的设计模式 —— 当然，我喜欢这种灵活性与一致性

## 执行客户端验证

在 Web 应用程序中，用户会希望得到即时的验证反馈 —— 对服务器不做任何递交。这称为 **客户端验证 (Client-Side Validation)** ，这通常是用 JavaScript 实现的 MVC 框架支持渐进式客户端验证 (Unobtrusive Client-Side Validation)，术语 **渐进式** 意指在生成的 HTML 元素上添加验证标签属性来表示验证规则。这些标签属性由包含在 MVC 框架中的 JavaScript 库进行解释，框架又转而对 jQuery 验证库进行配置，由验证库完成实际的验证工作

提示： 客户端验证致力于验证个别属性。事实上，运用 MVC 框架的内建支持很难建立模型级的客户端验证。最终，大多数 MVC 应用程序对属性级问题使用客户端验证，而对整个模型则依靠服务器端验证

启用客户端验证 客户端验证是由 Web.config 文件中的两个设置来控制的

```csharp
...
<appSettings>
  <add key="ClientValidationEnabled" value="true" />
  <add key="UnobtrusiveJavaScriptEnabled" value="true" />
</appSettings>
...
```

为了使客户端验证生效，这两个设置必须为 true。当你创建 MVC 项目时，Visual Studio 会创建这些条目并把它们设置为 true

提示：也可以设置基于个别视图的客户端验证，只需要在视图的一个 Razor 代码块中设置 HtmlHelper. ClientValidationEnabled 和 HtmlHelper.UnobtrusiveJavaScriptEnabled

添加 NuGet 包 确保 MVC 框架会生成验证所需要的注解属性只是安装过程的一部分。还需要添加处理那些注解属性的 JavaScript 包，以检查用户在表单中输入的数据

```csharp
Install-Package jQuery –version 1.10.2
Install-Package jQuery.Validation –version 1.11.1
Install-Package Microsoft.jQuery.Unobtrusive.Validation –version 3.0.0
```

这些包将文件添加到 Scripts 文件夹，然后需要用 script 元素将它们添加到布局中

```csharp
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>@ViewBag.Title</title>
    <style type="text/css">
        .field-validation-error {
            color: #f00;
        }

        .validation-summary-errors {
            color: #f00;
            font-weight: bold;
        }

        .input-validation-error {
            border: 2px solid #f00;
            background-color: #fee;
        }

        input[type="checkbox"].input-validation-error {
            outline: 2px solid #f00;
        }
    </style>
    <script src="~/Scripts/jquery-1.10.2.js"></script>
    <script src="~/Scripts/jquery.validate.js"></script>
    <script src="~/Scripts/jquery.validate.unobtrusive.js"></script>
</head>
<body>
    @RenderBody()
</body>
</html>
```

使用客户端验证 一旦已经启用了客户端验证，并确保在布局中引用了 JavaScript 库，就可以执行客户端验证了。最简单的方式是运用前面服务器端验证所使用的元数据注解属性，如 Required、Range 和 StringLength 等。(实现 IValidatableObject 接口的自定义模型验证，对客户端验证无效)

```csharp
using System;
using System.ComponentModel.DataAnnotations;

namespace ModelValidation.Models
{
    public class Appointment
    {
        [Required]
        [StringLength(10, MinimumLength = 3)]
        public string ClientName { get; set; }

        [DataType(DataType.Date)]
        public DateTime Date { get; set; }

        public bool TermsAccepted { get; set; }
    }
}
```

执行客户端验证的 JavaScript 代码会阻止递交表单，直到不再出现验证错误为止

理解客户端验证机制 使用 MVC 框架客户端验证特性的好处之一是，不必编写任何 JavaScript 而是用 HTML 标签属性来表示验证规则。以下是禁用客户端验证时，用 Html.EditorFor 辅助器渲染的 ClientName 属性：

```html
...
<input class="text-box single-line" id="ClientName" name="ClientName" type="text"
       value="" />
...
```

下面是启用客户端验证时，对相同属性进行渲染：

```html
...
<input class="text-box single-line" data-val="true"
       data-val-length="The field ClientName must be a string with a minimum length of 3 and
 a maximum length of 10." data-val-length-max="10" data-val-length-min="3"
       data-val-required="The ClientName field is required." id="ClientName"
       name="ClientName" type="text" value="" />
...
```

MVC 的客户端验证支持不会生成任何 JavaScript 脚本或 JSON 数据来指导验证过程，这与 MVC 框架的其他部分十分相似，验证依靠约定。被添加的第一个标签属性是 data-val，jQuery 验证库通过检查这个标签属性，会识别出这是一个需要验证的字段。 各个验证规则是以一个 `data-val-<name>` 标签属性的形式来指定的，这里的 name 是所运用的规则。与这个标签属性关联的值是与规则关联的错误消息。有些规则需要额外的标签属性。验证规则的解释由 jQuery 验证库提供，MVC 客户端验证特性就建立在这个库之上

避免与浏览器验证发生冲突 目前部分 HTML5 浏览器支持基于 input 元素的注解属性的简单客户端验证 如果你的表单元素不是由模型生成的你可能会遇到问题。当你传递其他地方生成的内容时这种情况经常会发生。结果是，jQuery 验证和浏览器验证都会对表单进行操作，而这只会使用户产生迷惑。为避免这个问题，你可以向 form 元素添加 novalidate 注解属性 MVC 客户端验证的一个很好的特性是，运用于客户端和服务器端的指定验证规则的属性是相同的。这意味着，从不支持 JavaScript 的浏览器而来的数据会得到同样的验证，而不需要任何额外的努力

MVC 客户端验证与 jQuery 验证 MVC 客户端验证是建立在 jQuery 验证库之上的，而且，如果你喜欢可以直接使用验证库，并忽略 MVC 特性。验证库十分灵活且特性丰富，如果只是为了理解如何定制 MVC 特性，以便充分利用可用的验证选项，对验证库进行考察是很有价值的

## 执行远程验证

**远程验证 (Remote Validation)** 这是一项客户端验证技术，但会调用服务器上的一个动作方法来执行验证 一个常见的远程验证的例子是，当要求用户名必须唯一时检查这个用户名在应用程序中是否有效。用户递交数据并执行客户端验证。作为这个过程的一部分，会形成一个发送到服务器的 Ajax 请求，以验证被请求的这个用户名。如果该用户名已存在便显示一个验证错误 这看起来很像常规的服务器端验证，但这种方法有一些好处，首先，只有某几个属性会被远程验证，客户端验证的好处仍然运用于用户已经输入的其他数据值。其次，期间的请求相对较轻，且侧重于验证，而不是处理整个模型对象 第三个差别是远程验证是在后台执行的，用户不必单击提交按钮，然后等待渲染并返回一个新的视图。 远程验证是一种折中。它在客户端与服务器端验证之间进行权衡 使用远程验证的第一步是创建一个能够验证某个模型属性的动作方法

```csharp
using System;
using System.Web.Mvc;
using ModelValidation.Models;

namespace ModelValidation.Controllers
{
    public class HomeController : Controller
    {
        public ViewResult MakeBooking()
        {
            return View(new Appointment { Date = DateTime.Now });
        }

        [HttpPost]
        public ViewResult MakeBooking(Appointment appt)
        {
            if (ModelState.IsValid)
            {
                // statements to store new Appointment in a
                // repository would go here in a real project
                return View("Completed", appt);
            }
            else
            {
                return View();
            }
        }

        public JsonResult ValidateDate(string Date)
        {
            DateTime parsedDate;
            if (!DateTime.TryParse(Date, out parsedDate))
            {
                return Json("Please enter a valid date (mm/dd/yyyy)",
                JsonRequestBehavior.AllowGet);
            }
            else if (DateTime.Now > parsedDate)
            {
                return Json("Please enter a date in the future",
                JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json(true, JsonRequestBehavior.AllowGet);
            }
        }
    }
}
```

支持远程验证的动作方法必须返回 JsonResult 类型，它告诉 MVC 框架，我们正在使用 JSON 数据

提示：我可以利用模型绑定，以使送给该动作方法的参数是一个 DateTime 对象，但这样做将意味着如果用户输入一个无意义的值，如 apple，验证方法将不会被调用。这是因为模型绑定器不能为 apple 创建 DateTime 对象，并且会在尝试创建时抛出一个异常。远程验证特性没有表示这种异常的方式，因此它会被静静地终止。这将导致不会高亮该数据字段的不良效果，而造成用户认为输入数据合法的印象。作为一种既定的规则，远程验证最好的办法是在动作方法中接收一个 string 参数，并执行各种类型的转换、解析，或明确的模型绑定 我用 Json 方法表示了验证结果，它创建了一个 JSON 格式的结果，这种结果能够被客户端远程验证脚本所解析和处理。如果处理的值满足需求，便把 true 作为参数传递给这个 Json 方法，如果这个值不合适，便把用户应当看到的验证错误消息作为参数进行传递 必须把 JsonRequestBehavior.AllowGet 值作为参数进行传递。这是因为 MVC 框架默认不允许产生 JSON 格式的 GET 请求 为了使用这一远程验证方法，我们在模型类中对希望验证的属性运用了 Remote 注解属性

```csharp
using System;
using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;

namespace ModelValidation.Models
{
    public class Appointment
    {
        [Required]
        [StringLength(10, MinimumLength = 3)]
        public string ClientName { get; set; }

        [DataType(DataType.Date)]
        [Remote("ValidateDate", "Home")]
        public DateTime Date { get; set; }

        public bool TermsAccepted { get; set; }
    }
}
```

该注解属性的参数是应该用来生成 URL 的动作和控制器的名称，JavaScript 验证库将调用该 URL 来执行验证 —— 在这一示例中是 Home 控制器的 ValidateDate 动作。实际使用的 URL 将根据应用程序的路由配置来创建

注意：当用户第一次递交表单时，会调用验证动作方法。之后用户每次编辑数据时，这个方法都会被再次调用。其实，每次击键都会导致对服务器的一次呼叫。对某些应用程序这可能是相当数量的请求，当应用程序需要一定的服务器容量和带宽时，必须对此加以考虑。此外，你也许会选择对高开销的属性不使用远程验证

# 第 26 章 捆绑包

**捆绑包 (Bundles)** 是 MVC 框架为组织和优化 CSS 以及 JavaScript 文件而提供的一个特性，视图和布局会触发浏览器向服务器请求捆绑包

## 准备示例应用程序

添加 NuGet 包 本章介绍的捆绑包特性使得管理脚本和样式文件变得很容易。为此目的，我将安装一些广泛应用于客户端开发的 NuGet 包。

```csharp
Install-Package jQuery –version 1.10.2
Install-Package jQuery.Validation –version 1.11.1
Install-Package Microsoft.jQuery.Unobtrusive.Validation –version 3.0.0
Install-Package Bootstrap -version 3.0.0
Install-Package Microsoft.jQuery.Unobtrusive.Ajax –version 3.0.0
```

## 脚本及样式表加载的资料分析

在考虑一个项目中的优化时，你首先需要做一些分析。任何人都希望得到高效而优化的应用程序，但我的经验是，人们争相优化的是没有太大影响的问题，而且在这么做的过程中，形成了一些后面会引起问题的设计决策 对于本章将要考察的问题，我们打算使用 Internet Explorer 的 "开发人员工具" 来执行一些分析 我想要重点关注正常执行的应用程序中的 HTTP 请求，这意味着要禁用 Visual Studio 浏览器链接功能，该功能通过向发送给浏览器的 HTML 中添加脚本代码来工作，并会导致额外的 HTTP 请求 加载应用程序导航到 / Home/MakeBooking，然后打开开发人员工具。切换到 NetWork 选项卡，并启动捕捉浏览器的 HTTP 请求。在选项卡中清空或禁用浏览器缓存，它将确保浏览器请求布局中引用的所有脚本和样式文件。重新载入页面将看到所有网络请求

开发人员工具让你能够对应用程序所形成的网络请求进行分析 (所有主流浏览器都提供类似的开发工具，也有一些其他工具。我比较喜欢的是 Fiddler) 因此，我们可以比较本章要做的优化，这将使用刚才得到的数据作为比较的基准。以下是其中的关键数据：

* 浏览器对 /Home/MakeBooking 形成了 7 个请求
* 2 个请求用于 CSS 文件
* 4 个请求用于 JavaScript 文件
* 浏览器发送给服务器的有 2 278 字节
* 服务器发送给浏览器的有 477 733 字节

这是该应用程序最坏情况下的资料，因为在重新加载视图之前我已经清理了浏览器的缓存。但我知道，在实际使用中，浏览器会通过以前请求的缓冲对此有所改善 如果未清理缓存而重新加载 / Home/MakeBooking，那么会得到以下结果：

* 浏览器对 /Home/MakeBooking 形成了 7 个请求
* 2 个请求用于 CSS 文件
* 4 个请求用于 JavaScript 文件
* 浏览器发送给服务器的有 2 086 字节
* 服务器发送给浏览器的有 5 214 字节

这是最好情况下的场景，其中所有用于 CSS 和 JavaScript 文件的请求，都能够得到已缓存文件的服务

注： 在一个实际的项目中，我们可能会在此刻停下来，看看是否有需要解决的问题，或者看看应用程序的当前状态是否可以接受。473KB 对一个简单的 Web 界面而言，似乎是一个不小的带宽，但背后的情形是各个方面的。我们可能是在开发一个企业应用程序，其带宽便宜而丰富，任何形式的优化都可能由开发人员的费用所抵消，他们可能在从事一些更重要的项目。同样，我们也可能在编写运行于 Internet 上的应用程序，它拥有各个国家以低速连接的高价值客户，在这种情况下，值得花一些时间去优化应用程序的各个方面，我的观点是，你不应该机械地假设需要将每一种优化都强行挤入应用程序之中。通常你有更值得去做的事情 (情况总是这样，要是你打算悄悄优化应用程序而不告诉任何人，最终都会被抓住，偷偷优化是一种有害的想法)

## 使用脚本和样式捆绑包

我们的目标是将 JavaScript 和 CSS 文件转换成捆绑包，这让我们能够将它们作为一个单一的单元进行处理

添加 NuGet 包捆绑包特性需要一个 NuGet 包

```csharp
Install-Package Microsoft.AspNet.Web.Optimization -version 1.1.1
```

定义 NuGet 包 通常约定在名为 BundleConfig.cs 的文件中定义捆绑包，该文件位于 App_Start 文件夹中

```csharp
using System.Web.Optimization;

namespace ClientFeatures
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/Content/*.css"));

            bundles.Add(new ScriptBundle("~/bundles/clientfeaturesscripts")
                .Include("~/Scripts/jquery-{version}.js",
                    "~/Scripts/jquery.validate.js",
                    "~/Scripts/jquery.validate.unobtrusive.js",
                    "~/Scripts/jquery.unobtrusive-ajax.js"));
        }
    }
}
```

提示： 我已经更改了文件中定义类的命名空间。约定是，在 App_Start 文件夹的文件中所定义的类在应用程序的顶层命名空间，对本项目来说是 ClientFeatures

其中的静态方法 RegisterBundles 会在 MVC 应用程序第一次启动时，通过 Global.asax 中的 Application_Start 方法进行调用。RegisterBundles 方法以一个 BundleCollection 对象未参数，我通过使用 BundleCollection 对象的 Add 方法，注册了新的文件捆绑包

提示： 用于创建捆绑包的这些类，属于 System.Web.Optimization 命名空间。如果希望了解该命名空间中更多类的情况，可以直接访问 [system.web.optimization][]

我们可以分别创建用于脚本文件和样式表的捆绑包，重要的是将这些文件类型分开来，因为 MVC 框架对这些文件的优化是不同的。样式由 StyleBundle 类表示，而脚本则由 ScriptBundle 类表示 在创建一个新的捆绑包时，实际上就是创建 StyleBundle 或 ScriptBundle 类的一个实例，它们都有一个构造器参数，即引用捆绑包的路径。该路径的作用是作为浏览器请求捆绑包内容的一个 URL，因此，重要的是要为这些路径使用一个与应用程序所支持的路径无冲突的 URL 方案。此项工作最安全的方式是以~/bundles 或~/Content 作为你的起始路径 一旦已经创建了 StyleBundle 或 ScriptBundle 对象，便可以使用 Include 方法添加捆绑包所包含样式表或脚本文件的细节。有一些很好的特性可用于灵活地构造捆绑包 这里首先用~/Content/css 路径创建了 StyleBundle。我们希望这个捆绑包包含应用程序的所有 CSS 文件，因此，将传递给 Include 方法的参数设置为`~/Content/*.css`。`*` 是一个通配符。这是一种很好的办法，它可以确保将一个目录中的文件自动地纳入到一个捆绑包中，而文件的顺序并不重要。在浏览器中，CSS 文件的加载顺序并不是重要的

提示： 在浏览器中加载引导 CSS 文件的顺序是不重要的，因此使用一个通配符就好了。但如果你依赖 CSS 样式优先级规则，那么需要单独列出文件以确保特定的顺序，正如我对 JavaScript 文件所做的那样

BundleConfig.cs 文件中的另一个捆绑包是 ScriptBundle，我将其路径设置为~/bundles/clientfeaturesscripts。我对该捆绑包运用了 Include 方法，以指定单个 JavaScript 文件，用逗号分隔。我们可以用另一种通配符，但 JavaScript 文件的处理顺序通常是重要的，所以我列出了各个文件。注意，我是如何指定 jQuery 库文件的：

```csharp
...
~/Scripts/jquery-{version}.js
...
```

文件名中的 {version} 部分相当灵活，因为它与指定文件的任一版本相匹配，它会使用应用程序的配置选择该文件的常规或最小化版本 使用 {version} 的好处是，你可以将所使用的库更新为新版本，而不必重新定义你的捆绑包。其缺点是 {version} 标志无法区分同一个文件夹中同一个库的不同版本。因此，如果我在 Scripts 文件夹中添加了另一版本的 jQuery 库文件，那么，最终两个版本都会交付给客户端。这会削弱我们的优化目标，因此必须确保 Scripts 文件夹中的库只有一个版本

注意： jQuery 团队对他们的版本编号做了一些不寻常的事，并维护着两个不同的开发分支。对 jQuery1.9 而言，jQuery1.x 和 2.x 分支具有相同的 API，但 jQuery2.x 版本不支持旧版的 Microsoft 浏览器。你应该在项目中使用 1.x 版，除非你确信你的用户不会坚持使用 IE6、7、或 8 版本

因为我使用空模板创建了示例项目，，所以需要在 Global.asax 文件中添加一条语句，以调用 BundleConfig 类的 RegisterBundles 方法

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using System.Web.Optimization;

namespace ClientFeatures
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }
    }
}
```

运用捆绑包 在能够运用捆绑包之前，我要做的第一件事是确保视图中要运用的包含相关捆绑包类的命名空间是可用的。为此，我在 Views/web.config 文件中添加了 epages/namespaces 元素的入口

```xml
...
<pages pageBaseType="System.Web.Mvc.WebViewPage">
  <namespaces>
    <add namespace="System.Web.Mvc" />
    <add namespace="System.Web.Mvc.Ajax" />
    <add namespace="System.Web.Mvc.Html" />
    <add namespace="System.Web.Routing" />
    <add namespace="System.Web.Optimization"/>
    <add namespace="ClientFeatures" />
  </namespaces>
</pages>
...
```

如果你正在使用更复杂的 Visual Studio 项目模板，便不需要做这个。但如果使用空模板，Visual Studio 不会自动进行设置 下一步骤是将捆绑包运用到布局

```csharp
@{
    Layout = null;
}
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width" />
    <title>@ViewBag.Title</title>
    <style>
        .field-validation-error {
            color: #f00;
        }

        .validation-summary-errors {
            color: #f00;
            font-weight: bold;
        }

        .input-validation-error {
            border: 2px solid #f00;
            background-color: #fee;
        }

        input[type="checkbox"].input-validation-error {
            outline: 2px solid #f00;
        }

        div.hidden {
            display: none;
        }

        div.visible {
            display: block;
        }
    </style>
    @Styles.Render("~/Content/css")
    @Scripts.Render("~/bundles/clientfeaturesscripts")
    @RenderSection("Scripts", false)
</head>
<body>
    @RenderSection("Body")
</body>
</html>
```

捆绑包是使用 Styles.Render 和 Scripts.Render 辅助器方法来添加的

提示： 注意我在布局中留下了 Scripts 小节，以便视图定义其内联代码。你可以自由地混合和匹配捆绑包与规则的 link 和 script 元素，但是需要考虑移动内联代码和样式到外部文件，以便最大化 MVC 框架能够执行的优化

以下是由 Styles.Render ("~/Content/css") 辅助器方法所产生的输出

```html
...
<link href="/Content/bootstrap-theme.css" rel="stylesheet" />
<link href="/Content/bootstrap.css" rel="stylesheet" />
...
```

而下面是由 Scripts.Render ("~/bundles/clientfeaturesscripts") 辅助器方法所产生的输出

```html
...
<script src="/Scripts/jquery-1.10.2.js"></script>
<script src="/Scripts/jquery.unobtrusive-ajax.js"></script>
<script src="/Scripts/jquery.validate.js"></script>
<script src="/Scripts/jquery.validate.unobtrusive.js"></script>
...
```

优化 JavaScript 和 CSS 文件 组织 CSS 文件和 JavaScript 文件到相关的组是有用的方法，以确保你不会忘记要包含的文件，以及你的布局包含项目中需要的任何版本的文件。但捆绑包的真正神奇之处在于它们可以用来优化向浏览器分发的 CSS 和 JavaScript 的内容 这样做的关键在于项目的 Web.config 文件中的 compilation 元素的 debug 属性 打开 Web.config 文件中并将 compilation 元素的 debug 属性设置为 false

```xml
...
<system.web>
  <compilation debug="false" targetFramework="4.5.1" />
  <httpRuntime targetFramework="4.5.1" />
</system.web>
...
```

当 debug 属性设置为 true 时，发送到浏览器的各个文件都包含 link 和 script 元素。当 debug 属性设置为 false 时，文件的最小化版本被选择并连接到一起，以便一起将它们分发到客户端

注： 最小化处理是删除 CSS 或 JavaScript 文件中的空白，以及缩短 JavaScript 文件中的变量名和函数名，以使得需要更少的带宽来传递文件。大多数的库都提供调试版本和文件的最小化版本两种格式，这是包含 Scripts 文件夹的原因，例如 jquery-validate.js 和 jquery-validate.min.js 文件。文件名中的额外部分.min，表示这是一个最小化文件。文件之间的选择是自动的，而且在大多数情况下，最小化是简单而成功的过程。而一些高级库 (比如 AngularJS) 需要一个特殊的最小化过程，请小心使用

再次使用开发人员工具对应用程序所形成的网络请求进行分析

* 浏览器对 /Home/MakeBooking 形成了 3 个请求
* 1 个请求用于 CSS 文件
* 1 个请求用于 JavaScript 文件
* 浏览器发送给服务器的有 1 018 字节
* 服务器发送给浏览器的有 236 578 字节

结果不坏。仅是让 ASP.NET 和 MVC 框架优化 CSS 和 JavaScript 文件就使发送给浏览器的数据量削减了大约 50%。如果你查看应用程序渲染的 HTML 就可以看出它是如何工作的 以下是由 Styles.Render 所产生的输出

```html
...
<link href="/Content/css?v=PrAOvG9OQ_V435deTDX5p8RzKE4Gs8_LEeYxl29skhc1"
      rel="stylesheet" />
...
```

而下面是由 Scripts.Render 所产生的输出

```html
...
<script src="/bundles/clientfeaturesscripts?v=Buhg68FkCPk3xjXtPsE87M94MTb7DCZx3zKAYD0xRIA1"></script>
...
```

这些 URL 以一个单一的数据块的形式请求了一个捆绑包的内容。MVC 框架对 CSS 数据采用了与对 JavaScript 文件不同的最小化方式，这是我将样式表与脚本放在不同捆绑包中的主要原因 所运用的优化效果是明显的。浏览器的请求数少了许多 (这减少了发送给客户端的数据量)，并且返回时发送的数据也较少 对请求的优化通常就到此为止了。我们还可以更进一步，例如将内联脚本移到分离的文件中以便最小化。但我不喜欢过度优化，除非有具体要解决的问题。每次优化都会使应用程序更难以调试和维护

# 第 27 章 Web API 与单页应用程序

Web API 是一个添加到 ASP.NET 平台的相对较新的特性，让你能够快速而方便地创建服务，以便为 HTTP 客户端提供 API Web API 特性建立在与 MVC 框架应用程序同样的基础上，但不是 MVC 框架的一部分。微软从 System.Web.Mvc 命名空间提取了一些关键的类和特性，并将它们复制到了 System.Web.Http 命名空间。其思想是，Web API 是核心 ASP.NET 平台的一部分，因而可以将其用于其他类型的 Web 应用程序，或者作为独立的 Web 服务引擎。你可以将 Web API 与前几章所看到的 MVC 框架特性相结合，从而创建一种单页应用程序

## 理解单页应用程序

**单页应用程序 (Single-Page Applications，SPAs)** 指一种 Web 应用程序，其呈现的最初内容由 HTML 和 JavaScript 所组成，而它的后继操作是使用 REST 化的 Web 服务执行的，这种服务对 Ajax 请求进行响应，并通过 JSON 提供数据 这与本书大部分章节所建立的应用程序不同，在那些应用程序中用户执行的操作所产生的结果是，对 HTTP 请求以同步响应的方式生成新的 HTML 文档，我们可以将其称为 **往返式应用程序 (Round-Trip Applications，RTAs)** SPA 的优点是所需要的带宽较少，而且用户可以得到更为流畅的体验。缺点是这种流畅的体验难以实现，而且 SPA 所需的 JavaScript 代码较为复杂，需要进行小心的设计和测试 大多数应用程序会混合和搭配 SPA 和 RTA 技术，其中的主要功能区由 SPA 实现，而各功能区之间的导航，则使用标准的 HTTP 请求创建型的 HTML 文档进行管理

## 准备示例项目

添加 NuGet 包

```csharp
Install-Package jquery –version 1.10.2
Install-Package bootstrap –version 3.0.0
Install-Package knockoutjs –version 3.0.0
```

Knockout 是微软公司为单页应用程序而采纳的一个库

## 使用 Web API

Web API 特性是在 MVC 框架应用程序基础上添加一种特殊的控制器，这种控制器叫做 API 控制器 (API Controller)，它有两个明显的特征：

1. 动作方法返回的是模型对象而不是 ActionResult 对象
2. 动作方法是根据请求所使用的 HTTP 方法来选择的

API 控制器的动作方法所返回的模型对象被编码成 JSON，并发送给客户端。API 控制器的设计目的是提供 Web 的数据服务，因此，它们不支持视图、布局，也不支持用来在示例应用程序中生成 HTML 的任何其他特性

提示： API 控制器无法通过视图生成 HTML，这正是单页应用程序需要将标准的 MVC 框架技术与 Web API 相结合的原因。MVC 框架执行的一些步骤是向用户投递 HTML 内容 (包括认证、授权，以及选择并渲染视图等)。一旦给浏览器提供了 HTML，由其中包含的 JavaScript 生成的 Ajax 请求，便可以由 Web API 控制器来处理了 从这里可以看出，Web API 的职责其实很简单，就是在服务器端对客户端发送过来的请求 (通常是 Ajax 请求) 进行响应，并为该请求准备数据，然后将数据回递给客户端。说的更简单一点，就是为客户端提供 Web 服务 另一方面，为了实现这种 Web 服务，客户端需要做两件事：

1. 第一件事是 "要求服务"。客户端要向服务器发送要求服务的请求，这通常是 Ajax 请求。因此，客户端通常需要使用 JavaScript 代码形成这种请求 (通常会使用 jQuery 库或渐进式 Ajax 库)
2. 第二件事是 "处理服务"。客户端要对 Web API 回发过来的数据进行处理，这通常又需要用 JavaScript 代码对这些数据 (通常为 JSON 格式的数据) 进行解析，并将这些数据显示出来。这两件事都是在客户端发生的

正如之前介绍的，你可以在常规控制器中创建返回 JSON 的动作方法以支持 Ajax，但这种 API 控制器提供了另一种办法，可以将应用程序中数据相关的动作方法与视图相关的动作方法分离开来，而且使得创建通用目的的 Web API 快速而简单

创建 Web API 控制器

```csharp
using System.Collections.Generic;
using System.Web.Http;
using WebServices.Models;

namespace WebServices.Controllers
{
    public class WebController : ApiController
    {
        private ReservationRespository repo = ReservationRespository.Current;

        public IEnumerable<Reservation> GetAllReservations()
        {
            return repo.GetAll();
        }

        public Reservation GetReservation(int id)
        {
            return repo.Get(id);
        }

        public Reservation PostReservation(Reservation item)
        {
            return repo.Add(item);
        }

        public bool PutReservation(Reservation item)
        {
            return repo.Update(item);
        }

        public void DeleteReservation(int id)
        {
            repo.Remove(id);
        }
    }
}
```

测试 API 控制器 启动应用程序，一旦浏览器加载了根 URL，则需要导航到 /api/web，所看到的结果依赖于你所使用的浏览器

使用 Internet Explorer

```json
[
    {
        "ReservationId": 1,
        "ClientName": "Adam",
        "Location": "Board Room"
    },
    {
        "ReservationId": 2,
        "ClientName": "Jacqui",
        "Location": "Lecture Hall"
    },
    {
        "ReservationId": 3,
        "ClientName": "Russell",
        "Location": "Meeting Room 1"
    }
]
```

使用 Chrome

```xml
<ArrayOfReservation>
    <Reservation>
        <ClientName>Adam</ClientName>
        <Location>Board Room</Location>
        <ReservationId>1</ReservationId>
    </Reservation>
    <Reservation>
        <ClientName>Jacqui</ClientName>
        <Location>Lecture Hall</Location>
        <ReservationId>2</ReservationId>
    </Reservation>
    <Reservation>
        <ClientName>Russell</ClientName>
        <Location>Meeting Room 1</Location>
        <ReservationId>3</ReservationId>
    </Reservation>
</ArrayOfReservation>
```

这里有两件有趣的事需要注意

1. 对于 /api/web 的请求，已经产生了全部模型对象及其属性的列表，由此可以推断它调用的 Reservation 控制器中的 GetAllReservations 动作方法
2. 不同的浏览器接收到了不同的数据格式，之所以会使用不同的数据格式，是因为 Web API 会使用包含在请求中的 HTTP 的 Accept 报头，以便推断出客户端更喜欢使用哪种数据类型

Internet Explorer 得到 JSON，是因为它发送了以下 Accept 报头：

```csharp
...
Accept: text/html, application/xhtml+xml, */*
...
```

浏览器指定了它最喜欢的是 text/html 格式的内容，其次是 application/xhtml+xml。上述 Accept 报头的最后部分是 `*/*` ，这意味着如果前两个不可用浏览器可以接受任何数据类型 Web API 支持 JSON 和 XML，但对 JSON 会给予优先，这也是它针对 IE 的 Accept 报头中的 `*/*` 部分所使用的响应

以下是 Chrome 所发送的 Accept 报头：

```csharp
...
Accept:text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
...
```

Chrome 指定它更喜欢优先于 `*/*` 通配符而接受 application/xml 数据。Web API 控制器遵从了这种优先，因而交付了 XML 数据 这里体积此事，是因为 Web API 的一个常见问题是，它会获得非期望的数据格式。究其原因是 Accept 报头对非期望的格式给予了优先，或者 Accept 报头根本不在请求中出现

## 理解 API 控制器的工作机制

导航到 /api/web/3 这一 URL，你会对 API 控制器的工作情况有更多了解。这会看到以下 JSON

```json
{
    "ReservationId": 3,
    "ClientName": "Russell",
    "Location": "Meeting Room 1"
}
```

这一次，Web API 返回了具体的 Reservation 对象，其 ReservationsId 的值对应于请求 URL 的最后一个片段。这种 URL 格式以及 URL 的用法应该会让你回忆起 MVC 框架的路由工作机制 API 控制器有其自己的路由配置，它与应用程序的其余部分是完全分开的。通过考察 /App_Start/WebApiConfig.cs 文件，可以看到 Visual Studio 为新项目所创建的默认配置

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace WebServices
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {

            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
```

WebApiConfig.cs 文件包含了用于 API 控制器的路由，但使用了与 RouteConfig.cs 文件中所定义的常规 MVC 路由不同的类。Web API 是作为一个独立的 ASP.NET 特性而实现的，而且可以将它用于 MVC 框架之外。 Visual Studio 也在 Global.asax 类的 Application_Start 方法中添加了一个调用，以便将 Web API 路由添加到应用程序

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using System.Web.Security;
using System.Web.SessionState;
using System.Web.Http;

namespace WebServices
{
    public class Global : HttpApplication
    {
        void Application_Start(object sender, EventArgs e)
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
        }
    }
}
```

其结果是，应用程序有两套路由，分别用于 MVC 框架控制器和 Web API 控制器

理解 API 控制器的动作选择 默认的 Web API 路由有一个静态的 api 片段，还有 controller 和 id 两个片段变量，后者是可选的。这种路由与规则 MVC 路由的关键差别在于，它没有 action 片段变量，而这正是形成 API 控制器行为之所在 当一个与 Web API 路由匹配的请求到达应用程序时，动作是通过形成该请求的 HTTP 方法来决定的。在使用浏览器请求 /api/reservation 来测试 API 控制器是，浏览器指定的是 GET 方法 API 控制器的基类 ApiController 类，通过路由会知道它需要以哪一个控制器为目标，并使用 HTTP 方法查找合适的动作方法 在对 API 控制器的动作方法进行命名时，其约定是以它所支持的 HTTP 方法为前缀，并且含有对它所操作模型类型的某种参考。但这只是一种约定，因为 Web API 可以匹配任何动作方法，只要其名称包含了用以形成该请求的 HTTP 方法 对于本示例而言，这意味着 GET 请求会在 GetAllReservations 和 GetReservation 之间进行选择，但是也可以匹配诸如 DoGetReservation 或 ThisIsTheGetAction 之类的方法名 为了在两个动作方法之间做出决定，控制器会考察其参数，于是会选择 GetAllReservations 方法。当请求 /api/reservation/3 这一 URL 时，它为可选的 id 片段变量提供了值，这会使 GetReservation 更为匹配 上述动作 Web API 控制器中的其他动作方法也进行了目标定位，使用的是其他 HTTP 方法：POST、DELETE 以及 PUT。这是 "表现式状态传输 (Representation State Transfer，REST)" 风格的 Web API 的基础，更经常地称为 REST 化服务，在这种服务中，某个操作是通过 URL 和请求该 URL 的 HTTP 方法相结合的方式来指定的

注： REST 是一种 API 风格，而不是一个定义完善的规范，到底什么是 Web 服务的 REST 化是有争议的

将 HTTP 方法映射到动作方法 以上曾解释过，ApiController 基类会根据使用的 HTTP 方法得出目标动作方法。这是一种很好的办法，但确实意味着，你最终会有一些不自然的方法名称，它们与你可能在其他地方使用的约定不一致。例如 PutReservation 方法也许叫做 UpdateReservation 会更自然一些，UpdateReservation 不仅使该方法的目的更为明显，而且它或许能够更为直接地映射出控制器中的动作与存储库中的方法之间的关系

提示： 你也许会尝试根据 ApiController 来派生你的存储库类，并将这些方法直接暴露成 Web API。我并不赞同这种做法，并且强烈建议你创建一个独立的控制器，哪怕是在创建如同此示例一样简单的项目。在有些情况下，你希望通过 API 提供的方法与存储库的功能是有偏差的，因而拥有独立的 API 控制器会更易于管理

System.Web.Http 命名空间包含了一组注解属性，可以用来指定一个动作所使用的 HTTP 方法

```csharp
using System.Collections.Generic;
using System.Web.Http;
using WebServices.Models;

namespace WebServices.Controllers
{
    public class WebController : ApiController
    {
        private ReservationRespository repo = ReservationRespository.Current;

        public IEnumerable<Reservation> GetAllReservations()
        {
            return repo.GetAll();
        }

        public Reservation GetReservation(int id)
        {
            return repo.Get(id);
        }

        [HttpPost]
        public Reservation CreateReservation(Reservation item)
        {
            return repo.Add(item);
        }

        [HttpPut]
        public bool UpdateReservation(Reservation item)
        {
            return repo.Update(item);
        }

        public void DeleteReservation(int id)
        {
            repo.Remove(id);
        }
    }
}
```

可以看出，MVC 框架的特性与 Web API 是重复的。以上示例中使用的 HttpPost 和 HttpPut 注解属性与 MVC 框架的同名注解属性具有完全相同的目的，但它们是在 System.Web.Http 命名空间而不是在 System.Web.MVC 中定义的。除了这种重复外，这些注解属性的工作方式也相同，于是我们最终拥有了更为有用的方法名

## 将 Knockout 用于单页应用程序

创建上述 Web API 这种 Web 服务的目的是重新构造示例应用程序，以便使用 Ajax 请求来执行应用程序的数据操作，将 Ajax 请求的 JSON 结果用于更新浏览器中的 HTML。应用程序的总体功能是相同的，但对于客户端和服务端之间的每一个交互，无须生成完整的 HTML 转换成单页应用程序后，将更多的责任放到了浏览器端，因为需要在客户端保持应用程序的状态。我们需要一个能够对之进行更新的数据模型，需要一系列能够对数据库执行转换的逻辑操作，还需要一组 UI 元素，以便用户能够触发这些操作。简言之，我们需要在浏览器中重建一个小型版的 MVC 模式 被微软采纳用于单页应用程序的库是 Knockout，它创建了 JavaScript 实现的 MVC 模式

注： Knockout 要比这里所演示的功能强大得多。我喜欢编写 Knockout。但对于更复杂的应用程序，我更喜欢 AngularJS。它有一个陡峭的学习曲线，但这种付出是值得的

在布局中添加 JavaScript 库

```csharp
@{
    Layout = null;
}

<!DOCTYPE html>

<html>
<head>
    <meta name="viewport" content="width=device-width" />
    <title>@ViewBag.Title</title>
    <link href="~/Content/bootstrap.css" rel="stylesheet" />
    <link href="~/Content/bootstrap.min.css" rel="stylesheet" />
    <script src="~/Scripts/jquery-1.10.2.js"></script>
    <script src="~/Scripts/knockout-3.0.0.js"></script>
    @RenderSection("Scripts")
</head>
<body>
    @RenderSection("Body")
</body>
</html>
```

实现 Summary 要做的第一个重要修改是用一些内联的 Knockout 和 jQuery 替换 Summary 分部视图。你不一定要在一个单一的视图中使用 Knockout，这里只是希望保持该分部视图完整，以使你能够看出标准的 MVC 框架工作方式与 SPA 技术之间的差别

/Home/Index.cshtml

```csharp
@using WebServices.Models
@{
    ViewBag.Title = "Reservations";
    Layout = "~/Views/Shared/_Layout.cshtml";
}

@section Scripts {
    <script>
        var model = {
            reservations: ko.observableArray()
        };
        function sendAjaxRequest(httpMethod, callback, url) {
            $.ajax("/api/web" + (url ? "/" + url : ""), {
                type: httpMethod, success: callback
            });
        }
        function getAllItems() {
            sendAjaxRequest("GET", function (data) {
                model.reservations.removeAll();
                for (var i = 0; i < data.length; i++) {
                    model.reservations.push(data[i]);
                }
            });
        }
        function removeItem(item) {
            sendAjaxRequest("DELETE", function () {
                getAllItems();
            }, item.ReservationId);
        }
        $(document).ready(function () {
            getAllItems();
            ko.applyBindings(model);
        });
    </script>
}

@section Body {
    <div id="summary" class="section panel panel-primary">
        <div class="panel-heading">Reservation Summary</div>
        <div class="panel-body">
            <table class="table table-striped table-condensed">
                <thead>
                    <tr><th>ID</th><th>Name</th><th>Location</th><th></th></tr>
                </thead>
                <tbody data-bind="foreach: model.reservations">
                    <tr>
                        <td data-bind="text: ReservationId"></td>
                        <td data-bind="text: ClientName"></td>
                        <td data-bind="text: Location"></td>
                        <td>
                            <button class="btn btn-xs btn-primary"
                                    data-bind="click: removeItem">
                                Remove
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div id="editor" class="section panel panel-primary">
        @Html.Partial("Editor", new Reservation())
    </div>
}
```

注意： 以上示例中已经删除了 @model 表达式。于是将不会使用视图模型对象来生成该视图的内容，这里已经不需要视图模型，但控制器仍然会获取存储库的 Reservation 对象，并将它们传递给视图，稍后会对此加以修正

1. 定义 Ajax 函数 jQuery 对形成 Ajax 请求有很好的支持。为此，我定义了一个名称为 sendAjaxRequest 的函数，将它用于定位 Web API 控制器中的目标方法

   ```javascript
   ...
   function sendAjaxRequest(httpMethod, callback, url) {
       $.ajax("/api/web" + (url ? "/" + url : ""), {
           type: httpMethod, success: callback
       });
   }
   ...
   ```

   其中的 $.ajax 函数提供了对 jQueryAjax 功能的访问。其参数是你希望请求的 URL 和一个含有配置参数的对象。上述 sendAjaxRequest 函数是这一 jQuery 功能的封装程序，其参数是用于该请求的 HTTP 方法   Ajax 请求成功后要调用的回调函数和一个可选的 URL 后缀。以这个函数为基础，我定义了一些函数，用于获取所有可用数据，以及删除预约等

   ```javascript
   ...
   function getAllItems() {
       sendAjaxRequest("GET", function (data) {
           model.reservations.removeAll();
           for (var i = 0; i < data.length; i++) {
               model.reservations.push(data[i]);
           }
       });
   }
   function removeItem(item) {
       sendAjaxRequest("DELETE", function () {
           getAllItems();
       }, item.ReservationId);
   }
   ...
   ```

   getAllItems 函数以控制器的 GetAllReservations 动作方法为目标，并从服务器接收所有预约。removeItem 函数以 DeleteReservation 动作方法为目标，并在执行删除后调用 getAllItems 函数以刷新数据

2. 定义模型 Ajax 函数的基础是模型，我是这样对它进行定义的：

   ```javascript
   ...
   var model = {
       reservations: ko.observableArray()
   };
   ...
   ```

   Knockout 是通过创建 **可观察对象 (Observable Object)** 进行工作的，因此，Knockout 可以检测到该数组发生的任何变化。从以下代码可以看到如何在 Ajax 函数中使用该模型：

   ```javascript
   function getAllItems() {
       sendAjaxRequest("GET", function (data) {
           model.reservations.removeAll();
           for (var i = 0; i < data.length; i++) {
               model.reservations.push(data[i]);
           }
       });
   }
   ```

   这里说明了如何将从服务器得到的数据送入模型。首先调用 removeAll 方法，以删除可观察数组中的已有数据，然后遍历从服务器得到的结果，以 push 方法对该数组填充新数据

3. 定义绑定 Knockout 通过 **数据绑定 (Data Binding)** 将数据模型中的变化运用于 HTML 元素。以下是 Index 视图中最重要的绑定：

   ```javascript
   ...
   <tbody data-bind="foreach: model.reservations">
       <tr>
           <td data-bind="text: ReservationId"></td>
           <td data-bind="text: ClientName"></td>
           <td data-bind="text: Location"></td>
           <td>
               <button class="btn btn-xs btn-primary" data-bind="click: removeItem">
                   Remove
               </button>
           </td>
       </tr>
   </tbody>
   ...
   ```

   Knockout 绑定用 data-bind 标签属性表示，而且有大量可用的绑定，该视图中使用了其中三个。data-bind 标签属性的基本格式是：

   ```csharp
   data-bind="type: expression"
   ```

   上述示例中三个绑定的 "type" 分别是 foreach、text、和 click，我之所以挑选这三种绑定，是因为它们代表 Knockout 绑定所能使用的不同方式 前两个绑定 foreach 和 text，通过数据模型生成 HTML 及其   容。当 foreach 绑定被运用于一个元素时，Knockout 为 "expression" 中的每一个对象生成子元素，这就如同在分部视图中使用 Razor 的 @foreach 一样 text 绑定将表达式的值作为文本，插入到它所运用的   素。这意味着，当像下面这样使用绑定时：

   ```html
   ...
   <td data-bind="text: ClientName"></td>
   ...
   ```

   Knockout 将插入 foreach 绑定所当前处理的对象的 ClientName 属性的值，这与之前所使用的 Razor 表达式 @Model.ClientName 的效果相同 click 指示符有所不同：它会在所运用元素上为 click 事件建立   个事件处理程序。当然你不一定使用 Knockout 来建立事件，但这种 click 绑定是与其他绑定集成在一起的，而且在运用该绑定时，foreach 绑定所处理的数据对象会被传递给你所指定的事件触发时要调用的函数。   是 removeItem 函数能够定义一个参数，以接收一个 Reservation 对象的原因

4. 处理绑定 Knockout 绑定并不是自动执行的，这是我在 script 元素中包含以下代码的原因:

   ```javascript
   ...
   $(document).ready(function () {
       getAllItems();
       ko.applyBindings(model);
   });
   ...
   ```

   一旦页面加载完毕，便调用 getAllItems 函数加载从服务器过来的数据，然后调用 ko.applyBindings 函数，使用数据模型处理那些 data-bind 标签属性。调用的结果是，将数据对象连接到 HTML 元素，生成了   需要的内容并建立事件处理程序

5. 测试 Summary 中的绑定 这已经基本上用对等的 Knockout 绑定替换了所有的 Razor 表达式。它们之间有 3 个重要的差别

   * 模型数据已经不再包含在发送给浏览器的 HTML 中。相反，一旦 HTML 已经得到了处理，浏览器便会形成一个发送给 Web API 控制器的 Ajax 请求，并得到一个表示成 JSON 的列表
   * 数据是在视图被渲染时，由浏览器而不是服务器进行处理的
   * 数据绑定是 **实时的** ，数据模型中的变化会反映在 foreach 和 text 绑定所生成的内容中

   改善 Delete 特性 现在你已经看到，运用 Knockout 已经改变了客户端的性质，我打算立刻回过头来，去掉在为应用程序定义 Ajax 方法时所采用的一个简化方法。removeItem 方法写的很糟

   ```javascript
   ...
   function removeItem(item) {
       sendAjaxRequest("DELETE", function () {
           getAllItems();  // 问题所在
       }, item.ReservationId);
   }
   ...
   ```

   该函数形成了两个 Ajax 请求，第一个执行删除，第二个请求存储库的内容，以便更新数据模型。现在，我已经演示过，客户端维护它自己的模型，而且实时绑定会在 HTML 中反映模型的变化，因此可以对该函数加以   进

   ```javascript
   ...
   function removeItem(item) {
       sendAjaxRequest("DELETE", function () {
           for (var i = 0; i < model.reservations().length; i++) {
               if (model.reservations()[i].ReservationId == item.ReservationId) {
                   model.reservations.remove(model.reservations()[i]);
                   break;
               }
           }
       }, item.ReservationId);
   }
   ...
   ```

   当发送给服务器的请求成功时，我从模型中删除了响应的数据对象，这意味着已不再需要第二个 Ajax 请求

   让自己习惯于 Knockout 语法 在使用 Knockout 可观察数组时，有一些怪异的语法。在以上示例中可以看到其中的两种。为了从数组中获取一个条目，需要将 model.reservation 作为一个函数来看待，如下所示：

   ```javascript
   ...
   model.reservations()[i].ReservationId
   ...
   ```

   另外，在删除数组中的条目时，使用了一个非标准的 JavaScript 函数

   ```javascript
   ...
   model.reservations.remove(model.reservations()[i]);
   ...
   ```

   Knockout 试图保持标准的 JavaScript 语法，但有时需要有一些折中的办法，以便跟踪数据对象的变化
   实现 Create 特性 下一个步骤是使用 Knockout 替换 Editor 分部视图。同样，可以对 Editor 分部视图进行更新，以便包含 Knockout 功能，但我选择了将所有的事情都纳入 Index.cshtml 文件

   ```csharp
   @using WebServices.Models
   @{
       ViewBag.Title = "Reservations";
       Layout = "~/Views/Shared/_Layout.cshtml";
   }   
   @section Scripts {
       <script>
           var model = {
               reservations: ko.observableArray(),
               editor: {
                   name: ko.observable(""),
                   location: ko.observable("")
               }
           };
           function sendAjaxRequest(httpMethod, callback, url, reqData) {
               $.ajax("/api/web" + (url ? "/" + url : ""), {
                   type: httpMethod,
                   success: callback,
                   data: reqData
               });
           }
           // ...other functions omitted for brevity...
           function handleEditorClick() {
               sendAjaxRequest("POST", function (newItem) {
                   model.reservations.push(newItem);
               }, null, {
                       ClientName: model.editor.name,
                       Location: model.editor.location
                   });
           }
           $(document).ready(function () {
               getAllItems();
               ko.applyBindings(model);
           });
       </script>
   }   
   @section Body {
       <div id="summary" class="section panel panel-primary">
           <!-- elements omitted for brevity -->
       </div>
       <div id="editor" class="section panel panel-primary">
           <div class="panel-heading">
               Create Reservation
           </div>
           <div class="panel-body">
               <div class="form-group">
                   <label>Client Name</label>
                   <input class="form-control" data-bind="value: model.editor.name" />
               </div>
               <div class="form-group">
                   <label>Location</label>
                   <input class="form-control" data-bind="value: model.editor.location" />
               </div>
               <button class="btn btn-primary"
                       data-bind="click: handleEditorClick">
                   Save
               </button>
           </div>
       </div>
   }
   ```

为了创建编辑器，我以一种不同的方式使用了 Knockout

1. 扩展模型 为了在存储库中创建一个新的 Reservation，需要从用户哪里收集两个信息片段：客户名称 (对应于 CinentName 属性) 和地点 (对应于 Location 属性)

   ```javascript
   ...
   var model = {
       reservations: ko.observableArray(),
       editor: {
           name: ko.observable(""),
           location: ko.observable("")
       }
   };
   ...
   ```

   ko.observable 函数可以创建一个可观察值。对这些值的修改会反映在使用 name 和 location 属性的任何绑定中

2. 实现 input 下一个步骤是创建 input 元素，用户将通过这些元素为新的模型属性提供值。这里使用了 Knockout 的 value 绑定，它会设置元素上的 value 属性

   ```javascript
   ...
   <input class="form-control" data-bind="value: model.editor.name" />
   ...
   ```

   value 绑定会将用户在 input 元素中输入的值用于设置模型的属性

   提示： 注意，这里已经不再需要 form 元素，我将使用一个 Ajax 请求将这些数据值发送给服务器，以便对一个按钮的单击事件进行响应，它们都不需要依靠浏览器对表单的标准支持

3. 创建事件处理程序

   我使用了 click 绑定，以便对显示在 input 元素下方的 button 元素的 click 事件进行处理

   ```javascript
   ...
   <button class="btn btn-primary" data-bind="click: handleEditorClick">Save</button>
   ...
   ```

   handleEditorClick 函数的定义如下：

   ```javascript
   ...
   function handleEditorClick() {
       sendAjaxRequest("POST", function (newItem) {
           model.reservations.push(newItem);
       }, null, {
               ClientName: model.editor.name,
               Location: model.editor.location
           });
   }
   ...
   ```

   该事件处理器函数调用了 sendAjaxRequest 函数，其中的回调函数将服务器回发过来的新建数据对象添加到模型。在 sendAjaxRequest 函数中，发送了一个含有新模型属性的对象，之前已经对该对象进行了扩展，以使它随同 Ajax 请求一起发送给服务器，这使用了 jQuery Ajax 的 data 选项属性

4. 测试 Create 特性

## 完成应用程序

简化 Home 控制器 Home 控制器仍然是用动作方法来操作存储库，以便接收和管理 Reservation 对象，尽管客户端所显示的数据全部都是通过 Ajax 向 Web API 控制器发送请求而实现的。这里更新了 Index 方法以使它不再传递视图模型对象

```csharp
using System.Web.Mvc;
using WebServices.Models;

namespace WebServices.Controllers
{
    public class HomeController : Controller
    {
        public ViewResult Index()
        {
            return View();
        }
    }
}
```

管理内容的可见性 最后要做的一项修改是管理 HTML 文档中元素的可见性，以使得只有 summary 或 deitor 是可见的

```csharp
@using WebServices.Models
@{
    ViewBag.Title = "Reservations";
    Layout = "~/Views/Shared/_Layout.cshtml";
}

@section Scripts {
    <script>
        var model = {
            reservations: ko.observableArray(),
            editor: {
                name: ko.observable(""),
                location: ko.observable("")
            },
            displaySummary: ko.observable(true)
        };
        function sendAjaxRequest(httpMethod, callback, url, reqData) {
            $.ajax("/api/web" + (url ? "/" + url : ""), {
                type: httpMethod,
                success: callback,
                data: reqData
            });
        }
        function getAllItems() {
            sendAjaxRequest("GET", function (data) {
                model.reservations.removeAll();
                for (var i = 0; i < data.length; i++) {
                    model.reservations.push(data[i]);
                }
            });
        }
        function removeItem(item) {
            sendAjaxRequest("DELETE", function () {
                for (var i = 0; i < model.reservations().length; i++) {
                    if (model.reservations()[i].ReservationId == item.ReservationId) {
                        model.reservations.remove(model.reservations()[i]);
                        break;
                    }
                }
            }, item.ReservationId);
        }
        function handleCreateClick() {
            model.displaySummary(false);
        }
        function handleEditorClick() {
            sendAjaxRequest("POST", function (newItem) {
                model.reservations.push(newItem);
                model.displaySummary(true);
            }, null, {
                    ClientName: model.editor.name,
                    Location: model.editor.location
                });
        }
        $(document).ready(function () {
            getAllItems();
            ko.applyBindings(model);
        });
    </script>
}

@section Body {
    <div id="summary" class="section panel panel-primary"
         data-bind="if: model.displaySummary">
        <div class="panel-heading">Reservation Summary</div>
        <div class="panel-body">
            <table class="table table-striped table-condensed">
                <thead>
                    <tr><th>ID</th><th>Name</th><th>Location</th><th></th></tr>
                </thead>
                <tbody data-bind="foreach: model.reservations">
                    <tr>
                        <td data-bind="text: ReservationId"></td>
                        <td data-bind="text: ClientName"></td>
                        <td data-bind="text: Location"></td>
                        <td>
                            <button class="btn btn-xs btn-primary"
                                    data-bind="click: removeItem">
                                Remove
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button class="btn btn-primary"
                    data-bind="click: handleCreateClick">
                Create
            </button>
        </div>
    </div>
    <div id="editor" class="section panel panel-primary"
         data-bind="ifnot: model.displaySummary">
        <div class="panel-heading">
            Create Reservation
        </div>
        <div class="panel-body">
            <div class="form-group">
                <label>Client Name</label>
                <input class="form-control" data-bind="value: model.editor.name" />
            </div>
            <div class="form-group">
                <label>Location</label>
                <input class="form-control" data-bind="value: model.editor.location" />
            </div>
            <button class="btn btn-primary"
                    data-bind="click: handleEditorClick">
                Save
            </button>
        </div>
    </div>
}
```

我给模型添加了一个属性 (displaySummary)，用以指定是否应该显示 summary。对该属性使用了 if 和 ifnot 绑定，它会根据其中的表达式，对 DOM 进行添加和删除元素的操作。如果 displaySummary 属性为 true 便显示数据摘要，若为 false 则显示编辑器。最后所做的修改是添加一个 Create 按钮，以便调用一个函数 (handleCreateClick) 用以修改 displaySummary 属性。另外，还补充了处理新条目的回调函数，将 displaySummary 属性再改回来

<!-- links -->
[system.web.optimization]: http://msdn.microsoft.com/en-us/library/system.web.optimization.aspx
<!-- images -->
[Logo]: /_posts/note/.markdown/2017-N05_精通-ASP.NET-MVC5/images/01.jpg "精通 ASP.NET MVC5"
<!-- files -->
