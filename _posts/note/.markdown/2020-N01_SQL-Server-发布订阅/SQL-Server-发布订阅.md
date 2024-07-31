
# SQL Server 发布订阅

```txt
发布/分发服务器名称:    LAPTOP-SA6OCEF6
发布/分发服务器账户:    Andy

发布数据库:             PublicationDB
订阅数据库:             SubscriptionDB

发布服务器登录名:       PublicationUser
订阅服务器登录名:       SubscriptionUser

发布名称:               Publication
```

## 发布服务器

### 前期准备

1. 使用 **服务器名称** 登录

    ![发布服务器 使用服务器名登录][]

2. 新建登录名

    ![发布服务器 新建登录名][]

    ![发布服务器 新建登录名 常规][]

    ![发布服务器 新建登录名 用户映射][]

3. 开放 1433 端口

    ![发布服务器 开放 1433 端口][]

4. 添加订阅服务器的解析记录

    ![发布服务器 添加订阅服务器的解析记录][]

### 新建发布

1. 新建发布

    ![发布服务器 新建发布][]

2. 分发服务器

    ![发布服务器 新建发布 分发服务器][]

3. 启动 SQL Server 代理

    ![发布服务器 新建发布 启动 SQL Server 代理][]

4. 快照文件夹

    ![发布服务器 新建发布 快照文件夹][]

5. 发布数据库

    ![发布服务器 新建发布 发布数据库][]

6. 发布类型

    ![发布服务器 新建发布 发布类型][]

7. 发布对象

    ![发布服务器 新建发布 发布对象][]

8. 项目问题

    ![发布服务器 新建发布 项目问题][]

9. 筛选表行

    ![发布服务器 新建发布 筛选表行][]

10. 快照代理

    ![发布服务器 新建发布 快照代理][]

11. 代理安全性

    ![发布服务器 新建发布 代理安全性][]

12. 快照代理安全性

    ![发布服务器 新建发布 快照代理安全性][]

13. 向导操作

    ![发布服务器 新建发布 向导操作][]

14. 完成向导

    ![发布服务器 新建发布 完成向导][]

15. 创建发布

    ![发布服务器 新建发布 创建发布][]

## 订阅服务器

### 前期准备

1. 使用 **服务器名称** 登录

    ![订阅服务器 使用服务器名登录][]

2. 新建订阅数据库

    ![订阅服务器 新建订阅数据库][]

3. 新建登录名

    ![订阅服务器 新建登录名][]

    ![订阅服务器 新建登录名 常规][]

    ![订阅服务器 新建登录名 用户映射][]

4. 开放 1433 端口

    ![订阅服务器 开放 1433 端口][]

5. 添加发布服务器的解析记录

    ![订阅服务器 添加发布服务器的解析记录][]

### 新建订阅

1. 新建订阅

    ![订阅服务器 新建订阅][]

2. 查找发布服务器

    ![订阅服务器 新建订阅 查找发布服务器][]

3. 连接到服务器

    ![订阅服务器 新建订阅 查找发布服务器 连接到服务器][]

4. 选择数据库和发布

    ![订阅服务器 新建订阅 选择数据库和发布][]

5. 分发代理位置

    ![订阅服务器 新建订阅 分发代理位置][]

6. 订阅服务器和订阅数据库

    ![订阅服务器 新建订阅 订阅服务器和订阅数据库][]

7. 代理安全性

    ![订阅服务器 新建订阅 分发代理安全性][]

8. 分发代理安全性

    ![订阅服务器 新建订阅 分发代理安全性设置][]

9. 同步计划

    ![订阅服务器 新建订阅 同步计划][]

10. 初始化订阅

    ![订阅服务器 新建订阅 初始化订阅][]

11. 向导操作

    ![订阅服务器 新建订阅 向导操作][]

12. 完成向导

    ![订阅服务器 新建订阅 完成向导][]

13. 创建订阅

    ![订阅服务器 新建订阅 创建订阅][]

<!-- links -->
[links]: https://domain.org
<!-- images -->
[发布服务器 使用服务器名登录]: /_posts/note/.markdown/2020-N01_SQL-Server-发布订阅/images/01.png "发布服务器 使用服务器名登录"
[发布服务器 新建登录名]: /_posts/note/.markdown/2020-N01_SQL-Server-发布订阅/images/02.png "发布服务器 新建登录名"
[发布服务器 新建登录名 常规]: /_posts/note/.markdown/2020-N01_SQL-Server-发布订阅/images/03.png "发布服务器 新建登录名 常规"
[发布服务器 新建登录名 用户映射]: /_posts/note/.markdown/2020-N01_SQL-Server-发布订阅/images/04.png "发布服务器 新建登录名 用户映射"
[发布服务器 开放 1433 端口]: /_posts/note/.markdown/2020-N01_SQL-Server-发布订阅/images/05.png "发布服务器 开放 1433 端口"
[发布服务器 添加订阅服务器的解析记录]: /_posts/note/.markdown/2020-N01_SQL-Server-发布订阅/images/06.png "发布服务器 添加订阅服务器的解析记录"
[发布服务器 新建发布]: /_posts/note/.markdown/2020-N01_SQL-Server-发布订阅/images/07.png "发布服务器 新建发布"
[发布服务器 新建发布 分发服务器]: /_posts/note/.markdown/2020-N01_SQL-Server-发布订阅/images/08.png "发布服务器 新建发布 分发服务器"
[发布服务器 新建发布 启动 SQL Server 代理]: /_posts/note/.markdown/2020-N01_SQL-Server-发布订阅/images/09.png "发布服务器 新建发布 启动 SQL Server 代理"
[发布服务器 新建发布 快照文件夹]: /_posts/note/.markdown/2020-N01_SQL-Server-发布订阅/images/10.png "发布服务器 新建发布 快照文件夹"
[发布服务器 新建发布 发布数据库]: /_posts/note/.markdown/2020-N01_SQL-Server-发布订阅/images/11.png "发布服务器 新建发布 发布数据库"
[发布服务器 新建发布 发布类型]: /_posts/note/.markdown/2020-N01_SQL-Server-发布订阅/images/12.png "发布服务器 新建发布 发布类型"
[发布服务器 新建发布 发布对象]: /_posts/note/.markdown/2020-N01_SQL-Server-发布订阅/images/13.png "发布服务器 新建发布 发布对象"
[发布服务器 新建发布 项目问题]: /_posts/note/.markdown/2020-N01_SQL-Server-发布订阅/images/14.png "发布服务器 新建发布 项目问题"
[发布服务器 新建发布 筛选表行]: /_posts/note/.markdown/2020-N01_SQL-Server-发布订阅/images/15.png "发布服务器 新建发布 筛选表行"
[发布服务器 新建发布 快照代理]: /_posts/note/.markdown/2020-N01_SQL-Server-发布订阅/images/16.png "发布服务器 新建发布 快照代理"
[发布服务器 新建发布 代理安全性]: /_posts/note/.markdown/2020-N01_SQL-Server-发布订阅/images/17.png "发布服务器 新建发布 代理安全性"
[发布服务器 新建发布 快照代理安全性]: /_posts/note/.markdown/2020-N01_SQL-Server-发布订阅/images/18.png "发布服务器 新建发布 快照代理安全性"
[发布服务器 新建发布 向导操作]: /_posts/note/.markdown/2020-N01_SQL-Server-发布订阅/images/19.png "发布服务器 新建发布 向导操作"
[发布服务器 新建发布 完成向导]: /_posts/note/.markdown/2020-N01_SQL-Server-发布订阅/images/20.png "发布服务器 新建发布 完成向导"
[发布服务器 新建发布 创建发布]: /_posts/note/.markdown/2020-N01_SQL-Server-发布订阅/images/21.png "发布服务器 新建发布 创建发布"
[订阅服务器 使用服务器名登录]: /_posts/note/.markdown/2020-N01_SQL-Server-发布订阅/images/22.png "订阅服务器 使用服务器名登录"
[订阅服务器 新建订阅数据库]: /_posts/note/.markdown/2020-N01_SQL-Server-发布订阅/images/23.png "订阅服务器 新建订阅数据库"
[订阅服务器 新建登录名]: /_posts/note/.markdown/2020-N01_SQL-Server-发布订阅/images/24.png "订阅服务器 新建登录名"
[订阅服务器 新建登录名 常规]: /_posts/note/.markdown/2020-N01_SQL-Server-发布订阅/images/25.png "订阅服务器 新建登录名 常规"
[订阅服务器 新建登录名 用户映射]: /_posts/note/.markdown/2020-N01_SQL-Server-发布订阅/images/26.png "订阅服务器 新建登录名 用户映射"
[订阅服务器 开放 1433 端口]: /_posts/note/.markdown/2020-N01_SQL-Server-发布订阅/images/27.png "订阅服务器 开放 1433 端口"
[订阅服务器 添加发布服务器的解析记录]: /_posts/note/.markdown/2020-N01_SQL-Server-发布订阅/images/28.png "订阅服务器 添加发布服务器的解析记录"
[订阅服务器 新建订阅]: /_posts/note/.markdown/2020-N01_SQL-Server-发布订阅/images/29.png "订阅服务器 新建订阅"
[订阅服务器 新建订阅 查找发布服务器]: /_posts/note/.markdown/2020-N01_SQL-Server-发布订阅/images/30.png "订阅服务器 新建订阅 查找发布服务器"
[订阅服务器 新建订阅 查找发布服务器 连接到服务器]: /_posts/note/.markdown/2020-N01_SQL-Server-发布订阅/images/31.png "订阅服务器 新建订阅 查找发布服务器 连接到服务器"
[订阅服务器 新建订阅 选择数据库和发布]: /_posts/note/.markdown/2020-N01_SQL-Server-发布订阅/images/32.png "订阅服务器 新建订阅 选择数据库和发布"
[订阅服务器 新建订阅 分发代理位置]: /_posts/note/.markdown/2020-N01_SQL-Server-发布订阅/images/33.png "订阅服务器 新建订阅 分发代理位置"
[订阅服务器 新建订阅 订阅服务器和订阅数据库]: /_posts/note/.markdown/2020-N01_SQL-Server-发布订阅/images/34.png "订阅服务器 新建订阅 订阅服务器和订阅数据库"
[订阅服务器 新建订阅 分发代理安全性]: /_posts/note/.markdown/2020-N01_SQL-Server-发布订阅/images/35.png "订阅服务器 新建订阅 分发代理安全性"
[订阅服务器 新建订阅 分发代理安全性设置]: /_posts/note/.markdown/2020-N01_SQL-Server-发布订阅/images/36.png "订阅服务器 新建订阅 分发代理安全性设置"
[订阅服务器 新建订阅 同步计划]: /_posts/note/.markdown/2020-N01_SQL-Server-发布订阅/images/37.png "订阅服务器 新建订阅 同步计划"
[订阅服务器 新建订阅 初始化订阅]: /_posts/note/.markdown/2020-N01_SQL-Server-发布订阅/images/38.png "订阅服务器 新建订阅 初始化订阅"
[订阅服务器 新建订阅 向导操作]: /_posts/note/.markdown/2020-N01_SQL-Server-发布订阅/images/39.png "订阅服务器 新建订阅 向导操作"
[订阅服务器 新建订阅 完成向导]: /_posts/note/.markdown/2020-N01_SQL-Server-发布订阅/images/40.png "订阅服务器 新建订阅 完成向导"
[订阅服务器 新建订阅 创建订阅]: /_posts/note/.markdown/2020-N01_SQL-Server-发布订阅/images/41.png "订阅服务器 新建订阅 创建订阅"
<!-- files -->
