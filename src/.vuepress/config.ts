import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  lang: "zh-CN",
  title: "ZBlog",
  description: "",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
