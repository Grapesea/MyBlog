---
title: 本地预览Jekyll网站的步骤
date: 1970-01-01
layout: post
categories: [tools]
mermaid: true 
mathjax: true
---

> 本文基本由Claude 4.0 Sonnet生成，我在校网环境下+Jego插件的rules-Seattle1线路下成功在PowerShell里运行了bundle install，花了一天驯服环境配置.


要在本地预览Jekyll网站，你需要安装Jekyll和相关依赖。以下是详细步骤：

## 0. 将博客项目clone到本地

选择一个你喜欢的路径，然后用管理员权限打开powershell

```powershell
cd 你选择的路径

git clone https://github.com/your_username/your_blog_repo.git
```

如果不想要以往的git记录，可以使用浅克隆：

```powershell
git clone --depth 1 https://github.com/your_username/your_blog_repo.git
```

## 1. 安装Ruby和Jekyll

### Windows上安装Ruby： 

```powershell
# 下载并安装 RubyInstaller
# 访问 https://rubyinstaller.org/ 下载最新版本
# 安装时选择 "MSYS2 development toolchain"

# 验证安装
ruby -v
gem -v
```

### 安装Jekyll和Bundler：

```powershell
gem install jekyll bundler
```

## 2. 在你的Jekyll项目中操作

```powershell
# 进入你的项目目录
cd 你的项目文件夹名

# 安装项目依赖（如果有Gemfile）
bundle install

# 如果没有Gemfile，创建一个基本的
bundle init
```

## 3. 启动本地服务器

```powershell
# 构建并启动本地服务器
bundle exec jekyll serve

# 或者直接使用
jekyll serve

# 带实时重载+ 指定端口（如果4000端口被占用）
bundle exec jekyll serve --livereload --port 3000
```

如果想要同时为每个仓库指定不同端口：

```powershell
# 第一个仓库（默认端口4000）
cd "第一个仓库路径"
bundle exec jekyll serve

# 第二个仓库（端口4001）
cd "第二个仓库路径"  
bundle exec jekyll serve --port 4001

# 第三个仓库（端口4002）
cd "第三个仓库路径"
bundle exec jekyll serve --port 4002
```

访问地址：

第一个仓库：http://localhost:4000

第二个仓库：http://localhost:4001

第三个仓库：http://localhost:4002

## 4. 访问本地网站

打开浏览器访问：`http://localhost:4000`

## 常见问题解决：

### 如果遇到依赖问题：

```powershell
# 更新bundler
gem update bundler

# 重新安装依赖
bundle install --force

# 清理并重建
bundle exec jekyll clean
bundle exec jekyll build
```

### 如果是GitHub Pages主题：

```powershell
# 在Gemfile中添加
echo 'gem "github-pages", group: :jekyll_plugins' >> Gemfile
bundle install
```

## 编辑和预览流程：

1. **启动服务器**：`bundle exec jekyll serve --livereload`
2. **编辑文件**：修改 `.md`、`.html`、`_config.yml` 等文件
3. **自动刷新**：保存后浏览器会自动刷新显示更改
4. **停止服务器**：在PowerShell中按 `Ctrl+C`

## 主要配置文件：

- `_config.yml`：网站配置
- `Gemfile`：Ruby依赖管理
- `_posts/`：博客文章
- `_layouts/`：页面布局模板
- `_includes/`：可重用的页面组件

现在你可以愉快地编辑Jekyll网站并实时预览效果了！

