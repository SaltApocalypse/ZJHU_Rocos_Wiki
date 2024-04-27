import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "新手指南",
    icon: "mdi:hand-wave",
    prefix: "freshman/",
    link: "freshman/",
  },
  {
    text: "接口文档",
    icon: "f7:doc-fill",
    link: "apidocs/",
  },
  {
    text: "官方文档",
    icon: "entypo-social:github",
    link: "https://rocos.readthedocs.io/zh-cn/latest/"
  }
]);
