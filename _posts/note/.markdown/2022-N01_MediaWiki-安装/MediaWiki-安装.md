
# MediaWiki 安装

> ![Logo][]

## 学习文档

[MediaWiki 官网][]  

[在 Windows 上运行 MediaWiki][]  

[MediaWiki 手册][]

## 安装 Apache HTTP 服务器

1. 从 [Apache 官网][] 下载 Apache HTTP 服务器 **Files for Microsoft Windows**

    建议选择 Apache Haus 或 Apache Lounge

2. 解压到安装目录

    这里是：**D:\Program Files\Apache\Apache-2.4.53-Lounge**

3. 打开位于安装目录下的 \conf\httpd.conf 文件
4. 修改 **Define SRVROOT** 为安装目录的绝对路径

    ```conf
    Define SRVROOT "D:\Program Files\Apache\Apache-2.4.53-Lounge"
    ```

5. 修改 Listen 为其它端口

    ```conf
    Listen 8001
    ```

6. 在安装目录下的 \bin 文件夹中以管理身份打开命令提示符窗口

    输入 `httpd -t` 测试配置文件

    如果有报错：按照提示修改  
    如果无报错：输入 `httpd` 启动 Apache HTTP 服务器

    Apache HTTP 服务器正常后，可以在浏览器里输入 `http://localhost:8001` 进行访问

7. 将 Apache 安装为服务

    安装：在刚才的命令提示符窗口输入 `httpd -k install`  
    启动：在刚才的命令提示符窗口输入 `httpd -k start`

## 安装 PHP

1. 从 [PHP 官网][] 下载 **PHP For Windows**

    建议选择 Thread Safe

2. 解压到安装目录

    这里是：**D:\Program Files\PHP\PHP-8.1.5-ts**

3. 为安装目录下的 php.ini-production 文件建立副本

    将副本重命名为 **php.ini**

4. 打开 Apache HTTP 服务器安装目录下的 \conf\httpd.conf 文件

    添加如下配置：

    ```txt
    # before PHP 8.0.0 the name of the module was php7_module
    LoadModule php_module "D:\Program Files\PHP\PHP-8.1.5-ts\php8apache2_4.dll"
    <FilesMatch \.php$>
        SetHandler application/x-httpd-php
    </FilesMatch>
    # configure the path to php.ini
    PHPIniDir "D:\Program Files\PHP\PHP-8.1.5-ts"
    ```

5. 使用 `httpd -k restart` 命令行重启 Apache HTTP 服务器

## 安装 MySQL

1. 从 [MySQL 官网][] 下载 MySQL Community Server
2. 完成安装

    牢记 **root** 用户密码

## 安装 Git

1. 从 [Git 官网][] 下载 Git for Windows
2. 完成安装

## 安装 MediaWiki

1. 从 [MediaWiki 官网][] 下载 MediaWiki
2. 解压到 Apache HTTP 服务器安装目录下的 \htdocs\wiki 文件夹

    这里是：**D:\Program Files\Apache\Apache-2.4.53-Lounge\htdocs\wiki**

3. 在浏览器里输入 `http://localhost:8001/wiki/index.php` 进行访问

    如果提示：**Installing some PHP extensions is required**  
    可打开位于 PHP 安装目录下的 **php.ini** 文件  
    修改 **extension_dir** 为 PHP 安装目录下 \ext 文件夹的绝对路径

    ```ini
    D:\Program Files\PHP\PHP-8.1.5-ts\ext
    ```

4. 根据页面的提示在 **php.ini** 文件中启用相关扩展

    启用 **intl** 插件时，除了修改 **php.ini** 文件外，还需要处理 **icu\*.dll** 文件的引用问题。可以使用以下任意一种方法：

    * 打开 Apache HTTP 服务器安装目录下的 \conf\httpd.conf 文件，添加如下配置：

        ```conf
        # load icu*.dll for intl extension
        LoadFile "D:\Program Files\PHP\PHP-8.1.5-ts\icudt70.dll"
        LoadFile "D:\Program Files\PHP\PHP-8.1.5-ts\icuin70.dll"
        LoadFile "D:\Program Files\PHP\PHP-8.1.5-ts\icuio70.dll"
        LoadFile "D:\Program Files\PHP\PHP-8.1.5-ts\icuuc70.dll"
        ```

    * 复制 PHP 安装目录下的 **icu\*.dll** 文件到 Apache HTTP 服务器安装目录下的 \bin 文件夹
    * 将 PHP 安装目录添加到 **系统环境变量** 后重启服务器

    扩展启用之后重启 Apache HTTP 服务器

5. 重新在浏览器里访问 `http://localhost:8001/wiki/index.php`

    这时浏览器会自动跳转到安装环境检查页面，这里还需要再启用一些插件：

    1. php_apcu  
    2. php_mysqli  
    3. php_gd  
    4. GNU diff3

        启用 GNU diff3 需要安装 [DiffUtils for Windows][] 和 [File for Windows][]  
        有时即使安装了相关应用，在安装 MediaWiki 的过程中依然会遇到 **找不到 Diffutils** 的情况。这时可以先行跳过，待安装完成之后再配置 Diffutils 插件

    扩展启用之后重启 Apache HTTP 服务器

6. 以修复上传漏洞

    打开 Apache HTTP 服务器安装目录下的 \conf\httpd.conf 文件，添加如下配置：  

    ```conf
    # Upload security
    <Directory "htdocs/wiki/images">
      # Ignore .htaccess files
      AllowOverride None
      # Serve HTML as plaintext, don't execute SHTML
      AddType text/plain .html .htm .shtml .phtml
      # Don't run arbitrary PHP code.
      php_admin_flag engine off
      # If you've other scripting languages, disable them too.
    </Directory>
    ```

    保存之后重启 Apache HTTP 服务器

7. 完成安装
8. 启用 **openssl** 插件

    打开位于 PHP 安装目录下的 **php.ini** 文件  
    启用 **openssl** 插件，否则在登录时将提示 **BadMethodCallException**

9. 配置 Diffutils 插件

    打开位于 MediaWiki 安装目录下的 LocalSettings.php 文件  

    修改 **$wgDiff3** 为 Diffutils\bin\diff3.exe 的解压路径

    ```php
    $wgDiff3 = "D:/Program Files/Apache/Apache-2.4.53-Lounge/htdocs/wiki/extensions/Diffutils/bin/diff3.exe";
    ```

    并添加 **$wgMimeDetectorCommand** 配置，为 **file.exe** 的解压路径

    ```php
    # Use external mime detector
    $wgMimeDetectorCommand = "D:/Program Files/Apache/Apache-2.4.53-Lounge/htdocs/wiki/extensions/File/bin/file.exe -bi";
    ```

10. 配置 **短链接**

    缩短前的 URL 格式为：`http://localhost:8001/wiki/index.php/Page_title`  
    缩短后的 URL 格式为：`http://localhost:8001/wiki/Page_title`  
    详细信息可查阅 [Manual:Short_URL][]

    打开 Apache HTTP 服务器安装目录下的 \conf\httpd.conf 文件  
    启用 `mod_rewrite` 模块，并添加如下配置：  

    ```conf
    # Provides a rule-based rewriting engine to rewrite requested URLs on the fly
    <IfModule rewrite_module>
    # Enable the rewrite engine
    RewriteEngine On

    # Short URL for wiki pages
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule ^/?wiki/((?!\.).(:+.*)*)+$ %{DOCUMENT_ROOT}/wiki/index.php [NC,L]

    # Redirect / to Main Page
    RewriteRule ^/*$ %{DOCUMENT_ROOT}/wiki/index.php [NC,L]
    </IfModule>
    ```

    打开位于 MediaWiki 安装目录下的 LocalSettings.php 文件添加如下配置：  

    ```php
    ## The base URL path.
    $wgScriptPath = "/wiki";
    ## The base URL used to create article links.
    $wgArticlePath = "/wiki/$1";
    ```

    保存之后重启 Apache HTTP 服务器

<!-- links -->
[MediaWiki 官网]: https://www.mediawiki.org
[在 Windows 上运行 MediaWiki]: https://www.mediawiki.org/wiki/Manual:Running_MediaWiki_on_Windows
[MediaWiki 手册]: https://www.mediawiki.org/wiki/Manual:Contents
[Apache 官网]: https://httpd.apache.org
[PHP 官网]: https://www.php.net
[MySQL 官网]: https://www.mysql.com
[Git 官网]: https://git-scm.com
[DiffUtils for Windows]: http://gnuwin32.sourceforge.net/packages/diffutils.htm
[File for Windows]: http://gnuwin32.sourceforge.net/packages/file.htm
[Manual:Short_URL]: https://www.mediawiki.org/wiki/Manual:Short_URL
<!-- images -->
[Logo]: /_posts/note/.markdown/2022-N01_MediaWiki-安装/images/01.png "MediaWiki"
<!-- files -->
