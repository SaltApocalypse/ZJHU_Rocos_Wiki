import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "新手指南",
      icon: "mdi:hand-wave",
      prefix: "freshman/",
      link: "freshman/",
      children: ["setup", "tools"],
    },
    {
      text: "Rocos接口文档",
      icon: "f7:doc-fill",
      prefix: "apidocs/",
      link: "apidocs/",
      children: ["debug", "datatype", "player", "ball"],
    },
    {
      text: "其他内容",
      icon: "material-symbols:other-admission",
      prefix: "other/",
      link: "other/",
      children: ["self-check"],
    },
    {
      text: "面向维护人员",
      icon: "mdi:tools",
      prefix: "developer/",
      link: "developer/",
      children: ["setup", "edit"],
    }
  ],
});
