import { defineTeekConfig } from "vitepress-theme-teek/config";

/**
 * Teek 主题配置 — PocketAHUT 文档站
 *
 * 风格：文档风首页（VitePress 原生 hero + features）
 * 开启：Loading / 主题增强面板 / 新版代码块 / 回到顶部 / 侧边栏折叠 / 面包屑 / 深浅切换动画
 * 文章增强：底部版权声明
 */
export const teekConfig = defineTeekConfig({
  // ── 内置插件 ──
  vitePlugins: {
    // 屏蔽 .git / .github / node_modules，避免插件扫描报非 .md 警告
    sidebarOption: {
      ignoreList: [/\.git/, /\.github/, /node_modules/],
    },
    fileContentLoaderIgnore: ["**/.git/**", "**/.github/**", "**/node_modules/**"],
  },

  // ── 首页 ──
  teekHome: false, // 关闭博客风，保留 VitePress 文档首页

  // 不启用 Banner
  banner: { enabled: false },

  // ── 全局 ──
  loading: true, // 页面 Loading 动画

  // 深浅模式切换动画
  viewTransition: { enabled: true },

  // 回到顶部
  backTop: { enabled: true },

  // 侧边栏折叠按钮
  sidebarTrigger: true,

  // 面包屑导航
  breadcrumb: { enabled: true },

  // 关闭"滚动到评论区"按钮（你没用评论）
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

  /**
   * 文章底部版权声明
   * 自动拼接：原文链接 + 出处 + 转载声明
   */
  articleBottomTip: (frontmatter) => {
    if (typeof window === "undefined") return;
    const { origin, pathname, search } = window.location;
    const url = `${origin}${frontmatter.permalink ?? pathname}${search}`;

    return {
      type: "tip",
      text: `
<p style="margin:0 0 4px;"><strong>📄 本文地址：</strong><a href="${decodeURIComponent(url)}">${decodeURIComponent(url)}</a></p>
<p style="margin:0;">© PocketAHUT · 安工大校园生活一站式服务平台，转载请注明出处。</p>
      `,
    };
  },
});
