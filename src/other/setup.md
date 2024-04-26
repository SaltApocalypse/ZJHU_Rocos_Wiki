---
title: Rocos安装教程
description: Rocos安装教程
author: TnTeQAQ
---

<!-- more -->

> [!important]
> 命令能复制就别手打。

官网地址：[Rocos’s Wiki! — Rocos 文档](https://rocos.readthedocs.io/zh-cn/latest/index.html)

## 查看Ubuntu版本

>[!tip]
>Ubuntu命令行内粘贴是`ctrl + shift + v`，或者可以直接在命令行右键粘贴。

```shell
lsb_release -a
```

:warning:这里的版本需要是 **22.04** 才能继续安装，否则需要重装或者更新系统。

## 换源

>[!tip]
>从这步开始可以直接查看官方教程的**编译&运行**部分。

```shell
sudo gedit /etc/apt/sources.list
```

直接复制[这里](https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/)的文本内容粘到里面，保存文件。

## 更新源安装 Rocos 所需要的依赖

```shell
sudo apt update
sudo apt install git cmake build-essential libgl1-mesa-dev libode-dev qtbase5-dev qtdeclarative5-dev libqt5serialport5-dev libtolua++5.1-dev libeigen3-dev protobuf-compiler libprotobuf-dev qml-module-qtquick* qml-module-qtgamepad libfmt-dev
```

>[!tip]
>如果显示`Do you want to continue? [Y/n]`，输入`Y`然后回车就行。

>[!note]
>有时候安装完依赖并没有 qt 的软件可以打开，但是可以只用命令行来编译运行。

## 拉取仓库

>[!warning]
>需要等[第三步](#更新源安装-rocos-所需要的依赖)完全完成才能开始这一步。

>[!tip]
>命令可能会停在`Cloning into 'rocos'...`
>这基本上是因为网络的原因（不能很好地与 Github.com 建立稳定连接），请尝试换一个网络、使用代理或者其他方式。

仓库地址：https://github.com/Robocup-ssl-China/rocos.git

```shell
git clone https://github.com/Robocup-ssl-China/rocos.git
```

## 编译

1. 进入文件夹
```shell
cd rocos
```

2. 创建并进入build文件夹
```shell
mkdir -p build
cd build
```

3. 编译
```shell
cmake ..
cmake --build . --config Release --parallel `nproc`
```

>[!tip]
>如果你更习惯使用命令行，使用[`alias`](https://www.runoob.com/linux/linux-comm-alias.html)命令简化一些操作（例如编译）会方便很多。

## 运行

1. 进入`Client`目录。
```shell
cd ../ZBin/
```

2. 运行Client。
```shell
./Client
```

>[!tip]
>也可以直接双击打开。

## 继续编译运行

如果更改了c++层面的代码则需要对代码进行重新编译。

具体步骤和[编译](#编译)是一样的。

但是可以跳过`mkdir -p build`的命令。
