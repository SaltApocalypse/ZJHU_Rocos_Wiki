---
title: 机器人 (player & enemy)
description: 机器人 (player & enemy) 相关接口。
author: umbrella
---

## 写在前面

- `player.lua`和`enemy.lua`分别为我方机器人和敌方机器人的方法文件，这两个文件大部分相同，下面列举的主要函数主要以 *player* 为例。

- **在 lua 方法中**，参数`role`为*所选角色*（机器人车号或者匹配的名字，**两者均可**）。

- **在 cpp 函数中**，需要调用视觉模块`pVision`来获取信息，其中
    - 任一机器人用`pVision->allPlayer()`表示
    - 我方机器人用`pVision->ourPlayer()`表示
    - 敌方机器人用`pVision->theirPlayer()`表示

    ::: warning
    对于机器人的定义是`const PlayerVisionT& ourPlayer(int num)`，所以实际使用中别忘了填入*机器人编号*参数，为了方便美观，下文中省略。

    例如：要获取我方编号 1 的机器人的位置，应该写：
    ```cpp
    pVision->ourPlayer(1).Pos()
    ```
    :::

    因为这些不同机器人的方法大部分相同[^1]，以下统一使用`ourPlayer()`演示。

- 在文档中不会特意区分不同语言的语法，能看懂即可，如 cpp 中的`int`与 lua 中的`interger`；需要注意时会特别标注。

## 属性相关

### 车号

- 返回机器人的**车号 (int)**

::: code-tabs#shell

@tab lua

```lua
player.num(role)
```

<!-- @tab cpp
 
```cpp
``` -->

:::

### 存在性

- 返回机器人**是否存在 (bool)**

::: code-tabs#shell

@tab lua

```lua
player.vaild(role)
```

@tab cpp

```cpp
pVision->ourPlayer().Valid()
```

:::

### 红外是否触发

- 返回机器人的**红外是否触发 (bool)**

::: code-tabs#shell

@tab lua

```lua
player.infrareOn(role)
```

<!-- @tab cpp

```cpp
``` -->

:::

### 红外触发的帧数

- 返回机器人的**红外触发的帧数 (int)**

::: code-tabs#shell

@tab lua

```lua
player.infraredCount(role)
```

<!-- @tab cpp

```cpp
``` -->

:::

### 是否踢球

- 返回机器人**是否踢球 (bool)**

::: code-tabs#shell

@tab lua

```lua
player.kickBall(role)
```

<!-- @tab cpp

```cpp
``` -->

:::

## 位置相关

### 位置

- 返回机器人的**位置 (CGeoPoint)**

::: code-tabs#shell

@tab lua

```lua
player.pos(role)
```

@tab cpp

```cpp
pVision->ourPlayer().Pos()
```

:::

### 位置 X 值 

- 返回机器人的**位置的 X 坐标 (double)**

::: code-tabs#shell

@tab lua

```lua
player.posX(role)
```

@tab cpp

```cpp
pVision->ourPlayer().X()

pVision->ourPlayer().Pos().x
```

:::

### 位置 Y 值

- 返回机器人的**位置的 Y 坐标 (double)**

::: code-tabs#shell

@tab lua

```lua
player.posY(role)
```

@tab cpp

```cpp
pVision->ourPlayer().Y()

pVision->ourPlayer().Pos().y
```

:::

## 方向相关

### 角度

- 返回机器人**角度信息（弧度制） (double)**

::: code-tabs#shell

@tab lua

```lua
player.dir(role)
```

@tab cpp

```cpp
pVision->ourPlayer().Dir()
```

:::

### 旋转速度

- 返回机器人的**旋转速度 (double)**

::: code-tabs#shell

@tab lua

```lua
player.rotVel(role)
```

@tab cpp

```cpp
pVision->ourPlayer().RotVel()
```

:::

## 速度相关

### 速度

- 返回机器人的**速度 (vector)**

::: code-tabs#shell

@tab lua

```lua
player.vel(role)
```

@tab cpp

```cpp
pVision->ourPlayer().Vel()
```

:::

### 速度方向

- 返回机器人的**速度方向 (double)**

::: code-tabs#shell

@tab lua

```lua
player.velDir(role)
```

@tab cpp

```cpp
pVision->ourPlayer().Vel().dir()
```

:::

### 速度大小

- 返回机器人的**速度大小 (double)**

::: code-tabs#shell

@tab lua

```lua
player.velMod(role)
```

@tab cpp

```cpp
pVision->ourPlayer().Vel().mod()
```

:::

### 真实速度

- 返回机器人的**真实速度 (double)**

::: code-tabs#shell

@tab lua

```lua
player.rawVel(role)
```

@tab cpp

```cpp
pVision->ourPlayer().RawVel()
```

:::

### 真实速度大小

- 返回机器人的**真实速度大小 (double)**

::: code-tabs#shell

@tab lua

```lua
player.rawVelMod(role)
```

@tab cpp

```cpp
pVision->ourPlayer().RawVel().mod()
```

:::

[^1]: 简单解释一下这个“大部分相同”：

    在`allPlayer()`、`ourPlayer()`和`theirPlayer()`都是类`CVisionModule`中的成员函数。

    @startuml
    class CVisionModule {
    public:
        + allPlayer(int num) const : PlayerVisionT
        + ourPlayer(int num) const : PlayerVisionT
        + theirPlayer(int num) const : PlayerVisionT
    }
    note left of CVisionModule : 注：此处只列举了三个解释用的成员函数。
    @enduml

    我们会发现他们的类型都是`PlayerVisionT`，如果再往前找会发现这个类继承自三个父类。

    这里拿`bool Valid()`举例，它其实是`ObjectPoseT`下的一个成员函数，这意味着“结构上差不多的”这三个成员函数可使用的大部分成员函数都是相同的。

    @startuml
    class PlayerVisionT
    class VisionObjectT
    class PlayerTypeT
    class ObjectPoseT{
        + bool Valid();
    }

    PlayerPoseT <|-- PlayerVisionT
    VisionObjectT <|-- PlayerVisionT
    PlayerTypeT <|-- PlayerVisionT
    ObjectPoseT <|-- PlayerPoseT
    @enduml

    所以根据文档中演示的*返回我方球员位置*的代码`pVision->ourPlayer().Pos()`，要获取对方某球员的位置，可以写成`pVision->theirPlayer().Pos()`。

    :::tip
    其实根据上述内容可以推测出一些其他内容。
    比如机器人属性里面的`Vel()`，有一个`Vel().mod()`的函数；那么`rawVel().mod()`也存在（它们俩都表示 *“速度”*，都有 *“大小”* 这一属性）。这点可以自己去查一下定义来确认。

    因此，可以根据代码编辑器的代码补全功能和对相似的变量含义的猜想，来快速调用或是写出一些你所想要的功能，减少翻看帮助文档、浏览定义的次数，编码更顺畅。

    像 VSC 等代码编辑器可以通过`F12`来速览定义。
    :::