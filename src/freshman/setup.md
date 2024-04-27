---
title: Rocos安装教程
description: Rocos安装教程
author: TnTeQAQ
---

## 写在前面

> [!important]
> 命令能复制就别手打。

你也可以直接参考官网的方法：
[准备开发环境 — Rocos 文档](https://rocos.readthedocs.io/zh-cn/latest/posts/1_rocos_basic/0.html)
[编译&运行 — Rocos 文档](https://rocos.readthedocs.io/zh-cn/latest/posts/1_rocos_basic/1_0.html)

## 准备工作

1. 你需要准备一个 **22.04** 版本的**Ubuntu系统**。（虚拟机、双系统，甚至是 WSL，看你喜好）s

>如果你不知道自己的 Ubuntu 版本，请使用下面这个命令：
>```shell
>lsb_release -a
>```
>
> >[!tip]
> >Ubuntu 命令行内粘贴是`ctrl + shift + v`，或者可以直接在命令行右键粘贴。

2. （可选）更换一个国内的更新软件源。

::: details 更换镜像源的简单步骤（以清华源为例）

1. 使用管理员权限打开`source.list`

```shell
sudo gedit /etc/apt/sources.list
```

2. 直接复制[这里](https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/)的文本内容粘到里面，保存文件。

3. 更新软件源。

```shell
sudo apt update
```
:::

3. 安装 Rocos 所需要的依赖

```shell
sudo apt update
sudo apt install git cmake build-essential libgl1-mesa-dev libode-dev qtbase5-dev qtdeclarative5-dev libqt5serialport5-dev libtolua++5.1-dev libeigen3-dev protobuf-compiler libprotobuf-dev qml-module-qtquick* qml-module-qtgamepad libfmt-dev
```

>[!tip]
>如果显示`Do you want to continue? [Y/n]`，输入`Y`然后回车就行。

>[!note]
>有时候安装完依赖并没有 qt 的软件可以打开，但是可以只用命令行来编译运行。

## 部署 Rocos

1. 当你完成准备工作后，找个地方拉取 Rocos 的仓库。（比如`/home/你的用户名/`）

[仓库地址](https://github.com/Robocup-ssl-China/rocos.git) ，使用下面的命令拉取。

```shell
git clone https://github.com/Robocup-ssl-China/rocos.git
```

>[!note]
>命令可能会停在`Cloning into 'rocos'...`
>这基本上是因为网络的原因（不能很好地与 Github.com 建立稳定连接），请尝试换一个网络、使用代理或者其他方式。

## 编译

1. 进入 Rocos 项目根目录。
```shell
cd rocos
```

2. 创建并进入`build`文件夹。
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
>如果你更习惯使用命令行，使用[`alias`](https://www.runoob.com/linux/linux-comm-alias.html)命令简化一些操作（例如第二行的编译命令）会方便很多。

## 运行

1. 进入`ZBin`目录。
```shell
cd ../ZBin/
```

2. 运行Client。
```shell
./Client # 如果你在用GUI界面，可以双击打开
```

## 继续编译运行

如果更改了 cpp 层面的代码则需要对代码进行重新编译。

具体步骤和[编译](#编译)是一样的，但是可以跳过`mkdir -p build`的命令。

## 可能遇到的问题

（待补充…）