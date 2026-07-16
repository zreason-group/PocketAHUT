import { defineTeekConfig } from "vitepress-theme-teek/config";

export const teekConfig = defineTeekConfig({
  vitePlugins: {
    // 屏蔽 .git / .github / node_modules，避免插件扫描报非 .md 警告
    sidebarOption: {
      ignoreList: [/\.git/, /\.github/, /node_modules/],
    },
    fileContentLoaderIgnore: [
      "**/.git/**",
      "**/.github/**",
      "**/node_modules/**",
    ],
  },

  teekHome: false, // 关闭博客风，保留 VitePress 文档首页
  vpHome: true, // 启用 VitePress 的主页支持

  // 启用 Banner
  banner: {
    enabled: false, // 是否启用 Banner
  },

  // 页面 Loading 文案
  loading: "安小工加载中...",

  // 深浅模式切换动画
  viewTransition: { enabled: true },

  // 是否启用锚点滚动功能，即阅读文章时，自动将 h1 ~ h6 标题添加到地址栏 # 后面
  anchorScroll: true,

  // 回到顶部
  backTop: { enabled: false },

  // 侧边栏折叠按钮
  sidebarTrigger: true,

  // 面包屑导航
  breadcrumb: { enabled: true },

  // 关闭"滚动到评论区"按钮
  toComment: { enabled: false },

  // ── 代码块 ──
  codeBlock: {
    enabled: true,
    collapseHeight: 700,
  },

  // ── 主题增强面板 ──
  themeEnhance: {
    enabled: true,
    // 侧边聚光灯（鼠标附近高亮，周围变暗）
    spotlight: {
      defaultStyle: "aside",
      defaultValue: true,
    },
  },

  // ── 文章增强 ──
  // 关闭文章底部"最近更新"列表
  articleUpdate: { enabled: false },

  // 不显示作者信息
  articleAnalyze: {
    showAuthor: false,
  },

  // 页脚信息
  footerInfo: {
    topMessage: "基于 VitePress 构建",
    theme: { show: false },
    copyright: {
      show: true,
      createYear: 2026,
      suffix: "PocketAHUT",
    },
  },
});
