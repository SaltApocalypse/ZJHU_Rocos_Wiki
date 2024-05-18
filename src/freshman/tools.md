---
title: 利用工具加速开发
description: 这里提供了一些关于“好用的工具”的想法！
---

::: warning
还在更新中，比较乱……
:::

## Git

> 参考资料
>
>[廖雪峰的git教程](https://www.liaoxuefeng.com/wiki/896043488029600)

Git 是一个分布式版本控制系统，在**版本控制、分支与合并、多人合作**等方面起重要作用。利用 Git 参与 Rocos 的开发有助于提高效率。

::: note
如果你只是来查询常用 git 命令的，[这边走](#常用命令)。
:::

### 安装 Git

::: details 点击展开查看
- Linux (Debian): `sudo apt install git-all`。
- Windows:
    1. 在[官方下载地址](https://git-scm.com/download/)下载 Git 安装包。
    2. 用管理员权限打开安装包，一直默认往下即可。

>[!tip]
>安装完毕后，在终端中使用 `git version` 检查是否安装完毕（安装好了就会出现版本）。
:::

### 配置 Git

::: details 点击展开查看
>[!warning]
>首先确保你要有一个 Github 账号，如果没有，[点这里注册 Github 账号](https://github.com/signup/)。


- 如果你刚装 git，你需要配置一下用户名和邮箱。
```shell
git config --global user.name "你的用户名"
git config --global user.email "你的邮箱"
```

- （可选）配置 SSH 来方便使用
    1. 如果没有，先生成一下 SSH 密钥，用你的邮箱替换示例邮箱，
    ``` shell
    ssh-keygen -t ed25519 -C "你的邮箱"
    ```
    随后按四下回车，在默认地方生成密钥，Linux 在 `~/.ssh/` 文件夹，Windows 在 `C:\\Users\\username\\.ssh\\` 文件夹。
    ![生成 SSH 密钥](https://cdn.jsdelivr.net/gh/saltapocalypse/CDN/ZJHU_Rocos_Wiki/src.freshman.tools.ssh-keygen.png)
    
    2. 找到公钥，在 `.ssh` 文件夹下，叫做 `id_rsa.pub`，复制这段内容。
    3. 打开[ `Github > 右上角个人设置 > 左侧 Access/SSH and GPG keys > 右上角 生成SSH Key` ](https://github.com/settings/ssh/new)，填入标题和公钥（上一步复制的那些），保存。
    ![添加 SSH 公钥到 Github](https://cdn.jsdelivr.net/gh/saltapocalypse/CDN/ZJHU_Rocos_Wiki/src.freshman.tools.Add_SSH_key.png)
:::

### 常用命令

::: tip
使用 `git help` 获取更多详细的帮助。
:::

#### 克隆

- `git clone` 将远程仓库复制到本地。

``` shell
# 定义
git clone [<options>] [--] <repo> [<dir>]

# 常用
git clone <仓库地址> [<目标地址（你想把这个库放在哪里）>]

# 举例：我需要克隆 Robocup-ssl-China/rocos 到我的用户目录的 Rocos 文件夹中。
git clone git@github.com:Robocup-ssl-China/rocos.git ~/user/Rocos # 如果你已经在 user 文件夹，可以省略这里的第二个参数
```

::: tip
在命令行中，`方括号 []` 表示可选参数，`尖括号 <>` 表示必需参数。
:::

#### 拉取

- `git pull` 将远程仓库拉取到本地。

``` shell
# 定义
git pull [<options>] [<repository> [<refspec>…​]]

# 常用
git pull             # 拉取（相当于直接更新）
git pull [<仓库地址>] # 要从特定的仓库拉取

# 举例：其他同学更新了仓库，你需要先拉取最新版再继续写
git pull
```

####

### 案例参考

- 我需要部署 Rocos
``` shell
# clone 自官方仓库
git clone https://github.com/Robocup-ssl-China/rocos

# 或 clone 自本校的仓库
git clone https://github.com/Umbrella167/Rocos
```

- 我进行了更新，需要上传
``` shell
git pull                                            # 上传前先更新到最新版本
git add .                                           # 添加所有更新
git commit -m "What have you done in this commit?"  # 提交信息可以写这次提交更新了什么，不建议乱写！
git push                                            # 推送
# 如果有冲突还要解决冲突并合并
```

- Rocos 的上游修改了，我需要拉取上游更新

- 我需要切换新分支来测试我的功能

- 我的新功能写好了，我需要合并到主分支

## VSCode

开源的轻量级代码编辑器。

>选一个趁手的敲代码的工具还是蛮重要的。

### 解决冲突并合并

当产生冲突的时候，Code 的冲突解决会很好用，直观方便（如下图所示，左侧是当前分支，右侧是输入分支，中间是合并后的预览；可以通过标记的冲突处上面的选项快速决定需要保留哪部分内容）。
![Code Conflicts Solver](https://cdn.jsdelivr.net/gh/saltapocalypse/CDN/ZJHU_Rocos_Wiki/src.freshman.tools.Code_solve_conflicts.png)