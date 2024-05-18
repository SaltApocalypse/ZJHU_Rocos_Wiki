---
title: 部署文档
description: 部署文档。
author: Salt Apocalypse
---

## 写在前面

本站点由 Vue 驱动的静态网站生成器 [`VuePress`](https://vuepress.vuejs.org/zh/) 构建。

使用主题 [`VuePress Theme Hope`](https://theme-hope.vuejs.press/zh/)。

## 前置条件

### vuepress-theme-hope

- [x] 环境：LTS 版本 的 [`Node.js`（18、20）](https://nodejs.org/en/download)。
- [x] 包管理器: `npm >= 8`、`yarn >= 2` 或 `pnpm >= 7`。

### ZJHU-Rocos-Wiki

- [x] 配置好的 `Git`。

## 安装依赖并部署项目

::: note 约定
我们在本文中约定用 `~` 代表项目的根目录。 
:::

0. （可选）将[项目仓库](https://github.com/SaltApocalypse/ZJHU_Rocos_Wiki) `fork` 到自己的账户。
1. 将项目仓库克隆到本地。
2. 在终端中打开项目的根目录（此时你的终端位于 `~`）
3. 使用 `npm install` 或 `pnpm install` 安装依赖。
4. 此时可以用 `npm run docs:dev` 或 `pnpm docs:dev` [^1]启动开发服务器来预览。

## 部署到 Github Page 以及注意事项

- 如有需要，请在 `~\src\.vuepress\config.ts` 和 `~\src\.vuepress\theme.ts` 中修改站点信息。
- 如有需要，请修改 `~\CNAME` 文件并在项目仓库更改自定义域名。

- 推送更新后**会使用 GitHub 工作流自动部署文档**，如有需要，请检查 `~\.github\workflows\deploy-docs.yml` 文件。

## 参考资料

- [VuePress-Theme-Heop 指南](https://theme-hope.vuejs.press/zh/guide/)

[^1]: 常用项目命令请参考 `~\package.json` 中的 `scripts`。