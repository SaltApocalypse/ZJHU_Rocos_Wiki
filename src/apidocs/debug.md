---
title: 调试引擎 (debugEngine)
description: 调试引擎 (debugEngine) 相关接口。
author: umbrella
---

<!-- more -->

## 提示

- 为了让我们在编写代码过程中有更直观的感受，鼓励大家多多使用调试引擎
- 可以查阅 gdebugengine.pkg 更直观调用

## debugEngine
::: code-tabs#shell

@tab lua

```lua
-- debug_color
--  WHITE   = 0
--  RED     = 1
--  ORANGE  = 2
--  YELLOW  = 3
--  GREEN   = 4
--  CYAN    = 5
--  BLUE    = 6
--  PURPLE  = 7
--  GRAY    = 9
--  BLACK   = 10

-- 打印字符串
--  point (打印坐标) msg(输出文本) debug_color(颜色) size(字体大小，默认120)
debugEngine:gui_debug_msg(point,msg,debug_color = 1,RGB = 0,size = 120)
-- 直接不输入后面的参数就是使用默认参数，如下
debugEngine:gui_debug_msg(point,msg)

-- 在一个坐标点画X
-- point(坐标点) debug_color(颜色)
debugEngine:gui_debug_x(point,debug_color)

-- 画一条线段
--  point1(起点坐标) point2(终点坐标) debug_color(颜色)
debugEngine:gui_debug_line(point1,point2,debug_color)

-- 画一个弧
--  point (圆心) r(半径) start_angle(开始角度) span_angle(结束角度) debug_color(颜色)
debugEngine:gui_debug_arc(point,r,start_angle,span_angle,debug_color)

-- 画一个三角形
--  point1 (定点1) point2(定点2) point3(定点3) debug_color(颜色)
debugEngine:gui_debug_triangle(point1,point2,point3,debug_color)
```

@tab cpp

```cpp

```