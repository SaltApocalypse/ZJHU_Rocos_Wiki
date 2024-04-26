---
title: 调试引擎 (debugEngine)
description: debugEngine，向图形界面输出消息的接口类。
author: umbrella
---

<!-- more -->

>[!warning]
>面向维护人员：本页仍存在不完善之处，已用`TODO`标记。
>   - 几个地方的 cpp 没加进去 - SaltA 240426

>[!tip]
>为了让我们在编写代码过程中有更直观的感受，鼓励大家多多使用调试引擎。

## 提示

- debugEngine，向图形界面输出消息的接口类。

- cpp 层的调试引擎定义在`Rocos/Core/src/Utils/GDebugEngine.h`（实现部分在同名`.cpp`文件）。

- lua 层的调试引擎定义在`Rocos/Core/src/LuaModule/gdebugengine.pkg`。

## debugEngine 向界面输出消息

### 字符串

- 在指定位置输出一行文本。

::: code-tabs#shell
@tab lua
```lua
-- @param point       : 打印文本所在坐标首位置（左侧对齐）
-- @param msg         : 输出文本
-- @param debug_color : 是否使用自定义调试色彩（默认启用）
-- @param RGB         : （可选）色彩
-- @param size        : （可选）字体大小
debugEngine:gui_debug_msg(point, msg, debug_color = 1, RGB = 0, size = 120)

-- 一般简单点只需要输入前两项即可
debugEngine:gui_debug_msg(point, msg)
```

<!-- TODO: -->
@tab cpp
```cpp
```
:::

>[!note]
>`debug_color`参数根据定义[^1]应该是 *是否使用自定义调试色彩（默认启用）* 的选项，在后面的方法就不再赘述。

### 叉点 `x`

- 在指定坐标点画`x`。

::: code-tabs#shell
@tab lua
```lua
-- @param point       : 指定坐标点
debugEngine:gui_debug_x(point)
```

<!-- TODO: -->
@tab cpp
```cpp
```
:::

### 线段

- 画一条线段

::: code-tabs#shell
@tab lua
```lua
-- @param point1       : 线段的起点
-- @param point2       : 线段的终点
debugEngine:gui_debug_line(point1, point2)
```

<!-- TODO: -->
@tab cpp
```cpp
```
:::

### 弧

- 画一个弧

::: code-tabs#shell
@tab lua
```lua
-- @param point       : 圆心
-- @param r           : 半径
-- @param start_angle : 开始角度
-- @param span_angle  : 结束角度
debugEngine:gui_debug_arc(point, r, start_angle, span_angle)
```

<!-- TODO: -->
@tab cpp
```cpp
```
:::

### 三角形

- 画一个三角形

::: code-tabs#shell
@tab lua
```lua
-- @param point1 : 坐标点 1
-- @param point2 : 坐标点 2
-- @param point3 : 坐标点 3
debugEngine:gui_debug_triangle(point1, point2, point3)
```

<!-- TODO: -->
@tab cpp
```cpp
```
:::

[^1]: 参考自`Rocos/Core/src/Utils/GDebugEngine.cpp:35`。
