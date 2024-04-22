import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "接口文档",
      icon: "f7:doc-fill",
      prefix: "apidocs/",
      link: "apidocs/",
      children: "structure",
    },
  ],
});
