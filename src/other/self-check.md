---
title: 机器人认识与自检流程
description: 如何检查机器人状态是否正常。
comment: false
author: umbrella
---

<!-- more -->

先对机器人做一个简单介绍，如果你要直接看机器人自检操作，请跳到[这里](#操作---进行机器人自检)。

## 认识 - 车号定义

视觉系统通过颜色来识别场地上的球、机器人信息，其中*橙色*用于识别球。

机器人顶盖有四五个色标：
    - 中间用*蓝色或黄色*来标记队伍；
    - 四周用*荧光绿和荧光粉*来标记车号（如下图所示，图已折叠）。

::: details 点击展开图片
![机器人车号定义](https://cdn.jsdelivr.net/gh/saltapocalypse/CDN/ZJHU_Rocos_Wiki/src.other.self-check.robot4.png)
:::

## 认识 - 机器人结构参考

::: details 点击展开图片
![机器人结构正面结构](https://cdn.jsdelivr.net/gh/saltapocalypse/CDN/ZJHU_Rocos_Wiki/src.other.self-check.robot1.png)

![机器人结构上面结构](https://cdn.jsdelivr.net/gh/saltapocalypse/CDN/ZJHU_Rocos_Wiki/src.other.self-check.robot2.png)

![机器人结构上面结构注释版](https://cdn.jsdelivr.net/gh/saltapocalypse/CDN/ZJHU_Rocos_Wiki/src.other.self-check.robot2_comment.png)
:::

## 认识 - 机器人主板下方按钮

机器人主板下方从左到右有三行按钮，分别为：

::: tip
1. 本文约定：按钮往下为0，往上为1。
2. 我们的机器人（图中）的按钮从左到右都是 1~4 的编号，但是为了方便，约定按照从左到右以二进制高位到地位来。
> 例如，需要调整某个按钮为 3，即把从左到右四个按钮设置为`0011`。
:::

::: details 安装步骤图示
![1. 将电池放入插槽（注意方向）](https://cdn.jsdelivr.net/gh/saltapocalypse/CDN/ZJHU_Rocos_Wiki/src.other.self-check.robot3_1.png)

![2. 插上插头](https://cdn.jsdelivr.net/gh/saltapocalypse/CDN/ZJHU_Rocos_Wiki/src.other.self-check.robot3_2.png)

![3. 安装完毕](https://cdn.jsdelivr.net/gh/saltapocalypse/CDN/ZJHU_Rocos_Wiki/src.other.self-check.robot3_3.png)
:::

### `RF_FREQ`

射频模块，比赛前要调整频道，按照要求来即可。

### `NUM`

**用于设置机器人编号**，编号要和代码部分相符（还要和机器人外壳的色号对齐）。

### `MODE`

机器人模式。

1. 平时全部调整为`MODE = 0`，也就是*比赛模式*。
2. 需要自检的时候调整为`MODE = 3`，也就是*自检模式*。

## 操作 - 进行机器人自检

::: warning 注意安全
在进行硬件的检查、调整的时候，请务必注意人身安全！！！
:::

### 前置准备

把机器人平放在平整的地面，并且确保场地空间足够大。

### 安装电池

电池安装在机器人下方的插槽，连接线朝上（可以扣在机器人中），然后把**黄色插口**接入（有防呆设计，插不进的时候检查一下插口，不要暴力硬插）。

> 开机之后机器人持续“嘀、嘀、嘀”叫说明电量低，需要充电。

### 调整**主板下方按钮**

*射频模块*和*机器人编号*在自检的时候不需要管，你需要把**机器人模式**调整为自检模式（`MODE = 3`）

### 按下电源键开机，开始测试以下环节

1. 开机之后，**白灯亮**表示开始自检。
::: tip
刚开机，用手轻轻转一下轮子，如果发现四个轮子锁死，说明电机正常。
如果在地上乱转，则说明电机可能有问题。
:::
2. 测试嘴口：拿球塞到机器人嘴口，机器人的**嘴口会开始动**（长发的同学注意头发别被卷进去）。
3. 判断红外：拿球塞到机器人嘴口，主板上的**红外指示灯亮**代表正常。
4. 射门开关：机器人右下角有个`SHOOT SWITCH`，检查是否启动（掰到右侧代表启动）。
5. 升压开关：按下之后射门开关边上的红灯会发光。（安装好外壳后，一定要确保一直被按住）
6. 检测完毕。