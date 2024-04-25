import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "部署教程",
      icon: "solar:box-bold",
      prefix: "other/",
      link: "other/setup",
    },
    {
      text: "接口文档",
      icon: "f7:doc-fill",
      prefix: "apidocs/",
      link: "apidocs/",
      children: "structure",
    },
    {
      text: "面向维护人员",
      icon: "mdi:tools",
      prefix: "developer/",
      link: "developer/",
      children: "structure",
    }
  ],
});
