---
title: 球 (ball)
description: 球 (ball) 相关接口。
author: umbrella
---

<!-- more -->

>[!warning]
>该页面仍在建设中，可能会有不完善的地方。

## 属性相关

### 坐标
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
pVision -> ball().pos();

// 获取球的X坐标
pVision -> ball().pos().x();

// 获取球的Y坐标
pVision -> ball().pos().y();
```
### 真实坐标
- 真实坐标与上一节坐标的区别在于真实坐标是获取的图像原始信息，未经过滤波处理，可能会存在抖动的情况但是当球视野丢失时，使用真实坐标，我们可以得到球消失前一帧的位置。

::: code-tabs#shell
@tab lua
```lua
-- 获取球的真实坐标
local ballRawPos = ball.rawPos()
```

@tab cpp
```cpp
// 获取球的真实坐标
pVision -> rawBall().pos();
```
:::

### 速度

::: code-tabs#shell
@tab lua
```lua
-- 获取球的速度
local ballVel = ball.vel()

-- 获取球的X速度
local ballVelX = ball.velX()
local ballVelX = ball.vel():x()

-- 获取球的Y速度
local ballVelY = ball.veY()
local ballVelY = ball.vel():y()

-- 获取球速度的方向 (0 ~ PI)
local ballVelDir = ball.velDir()

-- 获取球速度的大小 (单位 mm/s)
local ballVelDir = ball.velDir()
```

@tab cpp
```cpp
// 获取球的速度
double ballVel =  Vision -> ball().vel();

// 获取球的X速度
double ballVelX = pVision -> ball().vel().x();

// 获取球的Y速度
double ballVelY = pVision -> ball().vel().y();

// 获取球速度的方向 (0 ~ PI)
double ballVelDir = pVision -> ball().vel().dir();

// 获取球速度的大小 (单位 mm/s)
double ballVelMod = pVision -> ball().vel().mod();
```


### 存在性

- 详情：返回球**是否存在 (bool)**

::: code-tabs#shell
@tab lua
```lua
ball.vaild()1
```

@tab cpp
```cpp
```
:::