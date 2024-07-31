
# TypeScript

> ![Logo][]

## 学习文档

[TypeScript(en-us)][]  

[TypeScript(zh-cn)][]

## 数据类型

```typescript
boolean
number
string
// 类型转换(类型断言)
<number>"1024"
"1024" as number
```

## 声明变量

```typescript
var
let
const
```

## 访问修饰符

```typescript
public(default)
private
protected   
readonly
```

## 方法(函数)

```typescript
// 定义方法 Part Ⅰ
function Sum(a: number, b: number = 1): number {
  // 当可选参数 b 不存在时会使用默认值
  return a + b;
}

// 定义方法 Part Ⅱ
let Sub: (a: number, b?: number) => number = function (a, b = 1): number {
  return a - b;
}
// or
// let Sub: (a: number, b?: number) => number;
// 
// Sub = function (a, b = 1) {
//     return a - b;
// }

// 剩余参数
function People(a: string, ...b: string[]): string {
  return `a : ${a}     \rb : ${b}     \rb.length : ${b.length}`;
}
// 方法重载
function Avg(a: string): string;
function Avg(a: number): number;
function Avg(a: number, b: number): number;

function Avg(x, y?): any {
  // 定义重载方法时，不能包含方法的实现
  // 方法重载的实现需要自己完成
  if (typeof x === "number") {
    if (y === null) {
      return x;
    }
    else {
      return (x + y) / 2;
    }
  }
  else {
    return "Error, can't get Avg from string";
  }
};
```

## 类

```typescript
// 定义类
class Car {
  Name: string;
  // 静态属性，不用实例化类即可使用：Car.Weight;
  static Weight: number;

  // 空构造方法
  constructor() { };
}

// 继承类(扩展类)
class Bus extends Car {
  constructor() {
    // 继承父类构造方法
    super();
  }
}

// 抽象类
abstract class Transportation {
  private _TrafficeName: string;
  // 实现TrafficeName的存取器
  get TrafficeName(): string {
    return this._TrafficeName;
  }
  set TrafficeName(trafficeName: string) {
    this._TrafficeName = trafficeName;
  }

  // 抽象方法
  abstract Ticket(): number;
}
```

## 接口

```typescript
// 定义接口
interface IInterface {
  Name: string;
  // 可选属性(接口被继承后可以选择性实现可选属性)
  Address?: string;
}

// 实现接口
class ToImplements implements IInterface {
  Name: string;
  Age: number;
}

// 接口继承接口(扩展接口)
interface ToExtends extends IInterface {
  Sex: string;
}

// 接口继承类
interface ToExtendsClass extends ToImplements {
  // 接口会继承类的成员但不包括其实现
  // 接口同样会继承到类的private和protected成员
  // 当接口继承了拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现
}
```

## 泛型
  
```typescript
// 类似Type函数的函数叫做泛型
// 注意区分泛型函数和参数返回值都是any的函数
function MyType<T>(theType: T): T {
  return theType;
}
// 使用泛型
let output_a = MyType<string>("string");
let output_b = MyType("string");

// 虽然使用any类型后这个函数已经能接收任何类型的theType参数，但是却丢失了一些信息
// 传入的类型与返回的类型应该是相同的
// 如果我们传入一个数字，任何类型的值都有可能被返回 
function AnyType(theType: any): any {
  return theType;
}

// 泛型变量
// 泛型接口
// 泛型类
// 泛型约束
```

## 枚举

```typescript
// 定义枚举
enum Color {
  Blue,
  Black,
  Red = 6,
  Yellow,
  Green
}

// 使用枚举
// 返回常数枚举表达式
Color.Blue          // 0
Color["Yellow"]     // 7
// 返回枚举成员
Color[6]            // "Red"
```

## 类型推论

## 类型兼容性

## 高级类型

## Symbols

## 迭代器和生成器

```typescript
// for..of和for..in均可迭代一个列表
// for..of迭代对象的值，for..in迭代对象的键
// for..of
let someArry = [1, "string", false];
for (let item of someArry) {
  console.log(item);  // 1, "string", false
}
// for..in
for (let item in someArry) {
  console.log(item);  // 0, 1, 2,
}
```

## 模块(外部模块)

```typescript
// 模块在其自身的作用域里执行；模块里的元素在模块外部是不可见的
// 要是模块在外部可见必须使用 import和export 导入导出 
// 导出
// // // // // ModuleA.ts // // // // // 
// 导出模块A
// declare module "ModuleA" {
//    interface ClassA_1 {
//        _Name: string;
//        Sum(a: number, b: number): number;
//    }
//    // 使用原名导出
//    // export interface ClassA_1 {
//    //    _Name: string;
//    //    Sum(a: number, b: number): number;
//    // }
//    // export { ClassA_1 };
//    // 重命名导出
//    export { ClassA_1 as classA_1 };
// }

// // // // // ModuleB.ts // // // // // 
// 导出模块B
// declare module "ModuleB" {
//    interface ClassB_1 {
//    }
//    export { ClassB_1 as classB_1 };
// }
// declare module "ModuleB" {
//    interface ClassB_2 {
//    }
//    export { ClassB_2 as classB_2 };
// }
// // 导出模块A
// declare module "ModuleA" {
//    interface ClassA_2 {
//    }
//    export { ClassA_2 as classA_2 };
// }

// // // // // AllModule.ts // // // // // 
// 导出所有模块
// declare module "AllModule"
// {
//    export * from "ModuleA";
//    export * from "ModuleB";
// }

// 导入
// 导入模块A
import { classA_1, classA_2 } from "ModuleA";
class Class_A_1 implements classA_1 {
  _Name: string;
  Sum(a: number, b: number): number {
    return a + b;
  }
}
class Class_A_2 implements classA_2 {
}
// 导入模块B
import { classB_1, classB_2 } from "ModuleB";
class Class_B_1 implements classB_1 {
}
class Class_B_2 implements classB_2 {
}
// 导入所有模块
import {classA_1 as A1, classA_2 as A2, classB_1 as B1, classB_2 as B2 } from "AllModule";
// 生成模块代码
// 简单示例
// 可选的模块加载和其它高级加载场景
// 使用其它的JavaScript库
```

## 命名空间(内部模块)

```typescript
// 定义命名空间
namespace Animal {
  export class AnimalInfo {
    Name: string;
    Voice: string;
    LegNumber: number;
  }

  export interface Behavior {
    Sounds(Info: AnimalInfo);
  }

  export class GetLegNumber {
    _TheAnimal: AnimalInfo;
    get TheAnimal(): AnimalInfo {
      return this._TheAnimal;
    }

    set TheAnimal(newAnimalInfo: AnimalInfo) {
      this._TheAnimal = newAnimalInfo;
    }

    constructor(Info: AnimalInfo) {
      this.TheAnimal = Info;
    };

    ReturnLegNumber(): number {
      return this.TheAnimal.LegNumber;
    }
  }
}
// 分离到多文件
// 使用其它的JavaScript库

// 使用命名空间
let info: Animal.AnimalInfo = new Animal.AnimalInfo();
info.Name = "Duck";
info.Voice = "Ga..Ga..";
info.LegNumber = 2;
class DuckBehavil implements Animal.Behavior {
  Sounds(Info: Animal.AnimalInfo) {
    console.log(Info.Voice);
  }
}
let duckBehvail: DuckBehavil = new DuckBehavil();
duckBehvail.Sounds(info);

// 使用 import 关键字为常用对象创建别名
import AInfo = Animal.AnimalInfo;
let aInfo: AInfo = new AInfo();
aInfo.Name = "Sheep";
aInfo.Voice = "Mian..Mian..";
aInfo.LegNumber = 4;
// 使用外部文件同命名空间中定义的对象
// 不知为何，同一个文件中存在导入模块操作时，无法访问到外部文件中的命名空间
// "// / <reference path="xxx.ts" />"语句无法解析
// 无法控制外部模块加载的时机，总是存在"调用时尚未定义"的情况
// console.log(new Animal.ReadMe().me(aInfo));
```

## 命名空间和模块

## 模块解析

## 声明合并

## JSX

## 装饰器

## Mixins

## 三斜线指令

## DefinitelyTyped

要在 TypeScript 中使用一些常用的 JavaScript 库，必须下载相应 JavaScript 库的 [DefinitelyTyped][] 版本(.d.ts)，并使用三斜线指令引入

```typescript
/// <reference path="../Scripts/typings/jquery/jquery.d.ts" />
```

<!-- links -->
[TypeScript(en-us)]: http://www.typescriptlang.org
[TypeScript(zh-cn)]: https://www.tslang.cn
[DefinitelyTyped]: https://www.nuget.org/profiles/DefinitelyTyped "DefinitelyTyped"
<!-- images -->
[Logo]: /_posts/note/.markdown/2017-N04_TypeScript/images/01.png "TypeScript"
<!-- files -->
