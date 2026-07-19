import { defineConfig } from "vitepress";
import { teekConfig } from "./teek-config.mts";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: teekConfig, // 注册 Teek 主题配置
  title: "口袋安小工",
  description: "口袋安小工 — 安工大校园生活一站式服务平台",
  lang: "zh-CN",
  base: "/",
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,
  // 屏蔽 .git / node_modules 等目录，避免插件扫描报非 .md 警告
  srcExclude: ["**/.git/**", "**/node_modules/**", "**/.github/**"],

  head: [
    ["link", { rel: "icon", href: "favicon.png" }],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cn-font.claude-code-best.win/packages/dymh/dist/DouyinSansBold/result.css",
      },
    ],
  ],

  themeConfig: {
    logo: "/logo.jpg",

    nav: [
      { text: "首页", link: "/" },
      { text: "使用指南", link: "/guide/" },
      { text: "功能模块", link: "/features/" },
      { text: "常见问题", link: "/faq/" },
      { text: "更新日志", link: "/changelog" },
      { text: "贡献者", link: "/contributors" },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "使用指南",
          items: [
            { text: "快速开始", link: "/guide/" },
            { text: "下载安装", link: "/guide/install" },
            { text: "账号与绑定", link: "/guide/account" },
          ],
        },
      ],
      "/faq/": [
        {
          text: "常见问题",
          items: [
            { text: "全部问题", link: "/faq/" },
            { text: "账号与登录", link: "/faq/account/" },
            { text: "课表", link: "/faq/schedule/" },
            { text: "成绩", link: "/faq/grades/" },
            { text: "宿舍与电费", link: "/faq/dorm/" },
            { text: "校园服务", link: "/faq/campus/" },
            { text: "其他", link: "/faq/other/" },
          ],
        },
      ],
      "/features/": [
        {
          text: "功能概览",
          items: [{ text: "总览", link: "/features/" }],
        },
        {
          text: "教务学习",
          collapsed: false,
          items: [
            { text: "📅 课表管理", link: "/features/schedule" },
            { text: "📊 成绩查询", link: "/features/grades" },
            { text: "📝 考试安排", link: "/features/exam" },
            { text: "📖 培养方案", link: "/features/training-plan" },
            { text: "📕 教材查询", link: "/features/textbooks" },
          ],
        },
        {
          text: "校园生活",
          collapsed: false,
          items: [
            { text: "🏠 宿舍签到", link: "/features/dorm" },
            { text: "⚡ 电费查询", link: "/features/electricity" },
            { text: "🏫 空教室", link: "/features/classroom" },
            { text: "👕 洗衣机", link: "/features/laundry" },
            { text: "🍜 食堂 & 打分", link: "/features/canteen" },
            { text: "📰 校园新闻", link: "/features/news" },
          ],
        },
        {
          text: "实用工具",
          items: [{ text: "🏃 体测计算器", link: "/features/fitness-test" }],
        },
        {
          text: "即将上线",
          collapsed: true,
          items: [
            { text: "💳 校园卡", link: "/features/card" },
            { text: "📚 图书馆", link: "/features/library" },
            { text: "🗺️ 校园导览", link: "/features/map" },
            { text: "🔔 消息通知", link: "/features/notifications" },
          ],
        },
      ],
    },

    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        },
      },
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/zreason-group/PocketAHUT" },
    ],

    editLink: {
      pattern:
        "https://github.com/zreason-group/PocketAHUT/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "short",
      },
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      label: "页面导航",
      level: [2, 3],
    },

    darkModeSwitchLabel: "主题切换",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "回到顶部",
  },
});
