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

::: important
在命令行中，`方括号 []` 表示可选参数，`尖括号 <>` 表示必需参数。
:::

#### 克隆 clone

- `git clone` 将远程仓库复制到本地。
- 当我们需要从网上整个库下来的时候用这个。

``` shell
# 定义
git clone [<options>] [--] <repo> [<dir>]

# 常用
git clone <仓库地址> [<目标地址（你想把这个库放在哪里）>]

# 举例：我需要克隆 Robocup-ssl-China/rocos 到我的用户目录的 Rocos 文件夹中。
git clone git@github.com:Robocup-ssl-China/rocos.git ~/user/Rocos # 如果你已经在 user 文件夹，可以省略这里的第二个参数
```

#### 拉取 pull

- `git pull` 将远程仓库拉取到本地。
- 当我们需要更新到最新版的时候使用（比如开始工作前要把进度和仓库同步，因为可能其他人有提交）。

``` shell
# 定义
git pull [<options>]

# 常用
git pull             # 拉取（相当于直接更新）
git pull [<仓库地址>] # 要从特定的仓库拉取
```

#### 添加文件到暂存区 add

- `git add` 将文件添加到暂存区。
- 当我们准备上传的时候，需要先把需要上传的文件添加到暂存区，然后提交暂存区（把文件从暂存区传到本地仓库），最后推送（把本地仓库内容传到远程）。

``` shell
# 定义
git add [<files>]

# 常用
git add .   # 把所有更改添加到暂存区
```

#### 提交暂存区 commit

- `git commit` 提交暂存区。
- 常用参数为 `-m [<message>]`，用来添加本次提交的说明（你这次提交做了什么）。
- 如果不添加说明直接提交，git 会让你填写说明，如果此时仍不填写说明，这次提交会失败。

``` shell
# 常用
git commit -m "提交说明"    # 提交，并且给这次提交添加说明
```

#### 推送 push

- `git push` 从将本地的分支版本上传到远程并合并。
- 当文件被提交到本地仓库后，使用这个命令给推送到远程。
- `--force` 参数可以表示这次推送是强制推送（直接覆盖，谨慎使用）。

``` shell
# 常用
git push                    # 一般情况下直接推送就行了
git push <远程主机> <分支>   # 推送到指定主机的指定分支
```

#### 检出/切换分支 checkout/switch

- `git checkout` 命令用于在几个分支之间切换。
- 使用参数 `-b <分支名>` 可以创建分支并切换过去。
- `git switch` 和前者功能类似，“更清晰地切换分支”。
- 使用参数 `-c <分支名>` 可以创建分支并切换过去。
- 在执行上述操作前要确保当前没有修改或者修改已被提交。
- 除了分支名，也可以用**哈希值**来切换到指定的提交版本。

``` shell
# 常用
git checkout <分支名>
git checkout -b <新建的分支名>

git switch <分支名>
git switch -c <新建的分支名>
```

::: tip 为什么要有多个分支？
多分支可以让不同人同时开发不同功能，互不影响。
也可以用作版本隔离，比如开发版本与发布版本分开来。
:::

#### 合并 merge

- `git merge` 命令用于合并不同的分支。
- 要注意是把参数中的分支合并入当前的分支，所以最好先用 `git checkout` 确认当前分支是否正确。

``` shell
# 定义
git merge <branch>  # 将指定分支合并入当前所在分支

# 举例：我需要把开发分支 "dev" 合并入主分支 "main"
git checkout main
git merge dev
# 如果有冲突，需要解决后再次提交
```

### 案例参考

- 我电脑上还没有 Rocos，我要去从仓库下载个
``` shell
# clone 自官方仓库
git clone https://github.com/Robocup-ssl-China/rocos

# 或 clone 自本校的仓库
git clone https://github.com/Umbrella167/Rocos
```

- 我进行了更新，需要上传
``` shell
git pull                                            # 上传前先更新到最新版本，如果有冲突还要解决冲突并合并
git add .                                           # 添加所有更新
git commit -m "What have you done in this commit?"  # 提交信息可以写这次提交更新了什么，不建议乱写！
git push                                            # 推送
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