import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "ZJHU Rocos Wiki",
  description: "Unofficial Rocos Wiki for ZJHU.",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
