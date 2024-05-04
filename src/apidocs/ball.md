---
title: 球 (ball)
description: 球 (ball) 相关接口。
author: umbrella
---

<!-- ## 写在前面 -->

## 平面相关

### 坐标

- 坐标 (CGeoPoint, double)

获取球的坐标、x 坐标以及 y 坐标。

::: code-tabs#shell
@tab lua
```lua
-- 获取球的坐标
local ballPos = ball.pos()

-- 获取球的X坐标
local ballPosX = ball.posX()
local ballPosX = ball.pos():x()

-- 获取球的Y坐标
local ballPosY = ball.posY()
local ballPosY = ball.pos():y()
```

@tab cpp
```cpp
// 获取球的坐标
pVision->ball().Pos();

// 获取球的X坐标
pVision->ball().Pos().x();

// 获取球的Y坐标
pVision->ball().Pos().y();
```
:::

- 真实坐标 (CGeoPoint)

真实坐标与上一节坐标的区别在于真实坐标是获取的图像原始信息，未经过滤波处理，可能会存在抖动的情况但是当球视野丢失时，使用真实坐标，我们可以得到球消失前一帧的位置。

::: code-tabs#shell
@tab lua
```lua
local ballRawPos = ball.rawPos()
```

@tab cpp
```cpp
// 获取球的真实坐标
pVision->ball().RawPos();
```
:::

### 速度

- 速度 (CVector)

获取球的速度、x 方向的速度或 y 方向的速度。

::: code-tabs#shell
@tab lua
```lua
-- 获取球的速度
local ballVel = ball.vel()

-- 获取球的X速度
local ballVelX = ball.velX()
local ballVelX = ball.vel():x()

-- 获取球的Y速度
local ballVelY = ball.velY()
local ballVelY = ball.vel():y()
```

@tab cpp
```cpp
// 获取球的速度
CVector ballVel = pVision->ball().Vel();

// 获取球的X速度
double ballVelX = pVision->ball().Vel().x();

// 获取球的Y速度
double ballVelY = pVision->ball().Vel().y();
```
:::

- 速度大小 (double)

速度的模，单位是 $mm/s$。

:::code-tabs#shell
@tab lua
```lua
local ballVelMod = ball.velMod()
```

@tab cpp
```cpp
double ballVelMod = pVision->ball().Vel().mod();
```
:::

- 速度方向 (double)

范围为 $[0, PI]$。

:::code-tabs#shell
@tab lua
```lua
local ballVelDir = ball.velDir()
```

@tab cpp
```cpp
double ballVelDir = pVision->ball().Vel().dir();
```
:::

## 属性相关

### 存在性

- 球是否存在 (bool)

返回球是否存在。

::: code-tabs#shell
@tab lua
```lua
ball.vaild()
```

@tab cpp
```cpp
bool pVision->ball().Valid()
```
:::