---
title: 机器人 (player & enemy)
description: 机器人 (player & enemy) 相关接口。
---

<!-- more -->

## 提示

- `player.lua`和`enemy.lua`分别为我方机器人和敌方机器人的方法文件，这两个文件大部分相同，下面列举的主要函数主要以 *player* 为例。

- **在 lua 方法中**，参数`role`为*所选角色*（机器人车号或者匹配的名字，**两者均可**）。

- **在 cpp 函数中**，需要调用视觉模块`pVision`来获取信息。

- 在文档中不会特意区分不同语言的语法，能看懂即可，如 cpp 中的`int`与 lua 中的`interger`；需要注意时会特别标注。

- TODO: cpp的还没写。

## 属性相关

### 名字

- 详情：返回机器人的**名字 (string)**

::: code-tabs#shell

@tab lua

```lua
player.name(role)
```

@tab cpp

```cpp
```

:::

### 车号

- 详情：返回机器人的**车号 (int)**

::: code-tabs#shell

@tab lua

```lua
player.num(role)
```

@tab cpp

```cpp
```

:::

### 存在性

- 详情：返回机器人**是否存在 (bool)**

::: code-tabs#shell

@tab lua

```lua
player.vaild(role)
```

@tab cpp

```cpp
```

:::

### 红外是否触发

- 详情：返回机器人的**红外是否触发 (bool)**

::: code-tabs#shell

@tab lua

```lua
player.infrareOn(role)
```

@tab cpp

```cpp
```

:::

### 红外触发的帧数

- 详情：返回机器人的**红外触发的帧数 (int)**

::: code-tabs#shell

@tab lua

```lua
player.infraredCount(role)
```

@tab cpp

```cpp
```

:::

### 是否踢球

- 详情：返回机器人**是否踢球 (bool)**

::: code-tabs#shell

@tab lua

```lua
player.kickBall(role)
```

@tab cpp

```cpp
```

:::

## 位置相关

### 位置

- 详情：返回机器人的**位置 (CGeoPoint)**

::: code-tabs#shell

@tab lua

```lua
player.pos(role)
```

@tab cpp

```cpp
```

:::

### 位置 X 值 

- 详情：返回机器人的**位置的 X 坐标 (double)**

::: code-tabs#shell

@tab lua

```lua
player.posX(role)
```

@tab cpp

```cpp
```

:::

### 位置 Y 值

- 详情：返回机器人的**位置的 Y 坐标 (double)**

::: code-tabs#shell

@tab lua

```lua
player.posY(role)
```

@tab cpp

```cpp
```

:::

## 方向相关

### 角度

- 详情：返回机器人**角度信息（弧度制） (double)**

::: code-tabs#shell

@tab lua

```lua
player.dir(role)
```

@tab cpp

```cpp
```

:::

### 旋转速度

- 详情：返回机器人的**旋转速度 (double)**

::: code-tabs#shell

@tab lua

```lua
player.rotVel(role)
```

@tab cpp

```cpp
```

:::

## 速度相关

### 速度

- 详情：返回机器人的**速度 (vector)**

::: code-tabs#shell

@tab lua

```lua
player.vel(role)
```

@tab cpp

```cpp
```

:::

### 速度方向

- 详情：返回机器人的**速度方向 (double)**

::: code-tabs#shell

@tab lua

```lua
player.velDir(role)
```

@tab cpp

```cpp
```

:::

### 速度大小

- 详情：返回机器人的**速度大小 (double)**

::: code-tabs#shell

@tab lua

```lua
player.velMod(role)
```

@tab cpp

```cpp
```

:::

### 真实速度

- 详情：返回机器人的**真实速度 (double)**

::: code-tabs#shell

@tab lua

```lua
player.rawVel(role)
```

@tab cpp

```cpp
```

:::

### 真实速度大小

- 详情：返回机器人的**真实速度大小 (double)**

::: code-tabs#shell

@tab lua

```lua
player.rawVelMod(role)
```

@tab cpp

```cpp
```

:::

<!-- ### 

- 详情：返回机器人的

::: code-tabs#shell

@tab lua

```lua

```

@tab cpp

```cpp
```

::: -->