---
title: 编辑文档
description: 本文重点讲述编辑文档的约定。
author: Salt Apocalypse
---

::: warning
还在更新中，比较乱……
:::

## 写在前面

本文重点讲述“我们”编辑这个 Wiki 时的约定，不过嘛……仅供参考。

## 项目结构

`~` 代表根，然后后面注释简单介绍了对应文件干什么用，有些文件之后就不详细解释了。

```shell
ZJHU_ROCOS_WIKI             # 项目根目录
├─.github
│  └─workflows
│     └─deploy-docs.yml     # github action 工作流
├─node_modules              # node 模块
│  └─...
├─src                       # 内容源，除了 .vuepress 都是文章的分类
│  ├─.vuepress              # vuepress 设置，具体内容不解释，可以自己瞅瞅或者去看 vuepress文档
│  │  └─...
│  ├─apidocs                # 这里以及下面这几个都是现有的文档分类（你看左边有 新手指南/Rocos接口文档/…… 这些分类）
│  ├─developer              # 文件夹里面的 .md 文件就是具体的文章，下面也可以继续塞文件夹做细分
│  ├─...                    # 每个分类里的 README.md 如果没有被创建则会默认生成，这里的 README 可以拿来写分类简介
│  └─README.md              # ~/src/README.md 默认作为站点的主页，内容比较特殊
├─.gitignore                # 如果你有文件不需要被 git 传上去（比如自己本地的 .vscode 文件夹），把这些文件写进这个文件里，注意自带的那些不要修改
├─CNAME                     # CNAME 记录，填入站点的域名
├─package.json              # Node.js 项目的核心配置文件，一般不用改，真的要改的话前几行信息看着改
├─pnpm-lock.yaml            # pnpm 包管理器生成的锁定文件，一般不用管。
└─tsconfig.json             # TypeScript 编译器的配置文件，一般不用管。
```