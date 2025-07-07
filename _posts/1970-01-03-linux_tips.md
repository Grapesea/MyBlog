---
title: Linux备忘录
date: 1970-01-03
layout: post
categories: [tools]
mermaid: true 
mathjax: true
---

>我安装的是VMWare Workstation，配置Ubuntu 22.04 LTS.

## Firefox浏览器连接Github

Firefox令人讨厌的安全限制导致github都登陆不了。

于是我先下载了一下Watt Toolkit，运行之后终端里使用指令：

* ```bash
  $ nslookup github.com
  ```

返回的一段中有：

* ```bash
  Name:   github.com
  Address: 127.0.0.1
  ```

这是非常错误的，因为github被设置到了回环地址上，所以访问不了。

使用：

* ```bash
  $ sudo nano /etc/hosts
  ```

删除文件中所有关于github网址的字段，然后`ctrl+X`退出。

再回到命令行验证nslookup就会发现连接成功。

打开Firefox浏览器，能连接到github。

