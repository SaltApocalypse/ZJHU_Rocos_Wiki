---
title: 故障排查
description: 故障排查。
author: Salt Apocalypse
---

## 写在前面

面向该文档维护人员的故障排查经验。

~~其实是自己的备忘录。~~

## 开发中异常

### Error: Cannot find package

- 情景复现

在使用指令`pnpm docs:dev`时发生，一般是某个包依赖丢失。

::: details 可供参考的控制台报错
``` shell
***\ZJHU_Rocos_Wiki>pnpm docs:dev

> zjhu-rocos-wiki@0.2.0 docs:dev ***\ZJHU_Rocos_Wiki
> vuepress-vite dev src

node:internal/modules/esm/resolve:205
  const resolvedOption = FSLegacyMainResolve(packageJsonUrlString, packageConfig.main, baseStringified);
                         ^

Error: Cannot find package '***\ZJHU_Rocos_Wiki\node_modules\.pnpm\@vuepress+cli@2.0.0-rc.9\node_modules\envinfo\package.json' imported from ***\ZJHU_Rocos_Wiki\node_modules\.pnpm\@vuepress+cli@2.0.0-rc.9\node_modules\@vuepress\cli\dist\index.js
    at legacyMainResolve (node:internal/modules/esm/resolve:205:26)
    at packageResolve (node:internal/modules/esm/resolve:831:14)
    at moduleResolve (node:internal/modules/esm/resolve:901:20)
    at defaultResolve (node:internal/modules/esm/resolve:1121:11)
    at ModuleLoader.defaultResolve (node:internal/modules/esm/loader:396:12)
    at ModuleLoader.resolve (node:internal/modules/esm/loader:365:25)
    at ModuleLoader.getModuleJob (node:internal/modules/esm/loader:240:38)
    at ModuleWrap.<anonymous> (node:internal/modules/esm/module_job:85:39)
    at link (node:internal/modules/esm/module_job:84:36) {
  code: 'ERR_MODULE_NOT_FOUND'
}

Node.js v21.1.0
 ELIFECYCLE  Command failed with exit code 1.
```
:::

- 可能问题

VuePress 依赖版本不匹配。


- 解决方案

清理 `node_modules` 文件夹，重新使用 `pnpm install` 安装依赖。