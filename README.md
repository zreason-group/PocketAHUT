# 口袋安小工文档

<p align="center">
  <img src="docs/public/logo.jpg" width="96" alt="口袋安小工 Logo" />
</p>

<p align="center">
  <strong>安工大校园生活一站式服务平台官方文档</strong>
</p>

<p align="center">
  课表、成绩、考试安排、空教室、电费、食堂、校园新闻……你需要的校园服务，都在口袋里。
</p>

<p align="center">
  <a href="https://github.com/zreason-group/PocketAHUT">项目仓库</a>
  ·
  <a href="https://github.com/zreason-group/PocketAHUT/releases/">下载安装</a>
  ·
  <a href="./guide/index.md">快速开始</a>
  ·
  <a href="./features/index.md">功能总览</a>
</p>

---

## 项目简介

口袋安小工是面向安徽工业大学学生的校园生活服务平台，旨在整合分散、繁复、体验不一致的校园系统能力，让常用信息查询和校园服务集中在一个入口中完成。

本文档站点用于介绍口袋安小工的下载安装、账号绑定、功能模块、常见问题和使用注意事项。

## 平台支持

| 平台       | 当前状态 | 获取方式                                                                                          |
| ---------- | -------- | ------------------------------------------------------------------------------------------------- |
| Android    | 推荐使用 | 通过 [GitHub Releases](https://github.com/zreason-group/PocketAHUT/releases/) 下载 APK 安装包     |
| 微信小程序 | 可用     | 微信内搜索「口袋安小工」                                                                          |
| iOS        | 开发中   | 后续通过 [GitHub Releases](https://github.com/zreason-group/PocketAHUT/releases/) 分发 IPA 安装包 |
| 网页端     | 开发中   | 暂未开放正式版本                                                                                  |

> 我们预计将会逐步停止小程序的开发和维护，请新用户优先选择 Android 客户端。

## 核心功能

### 教务学习

- [课表管理](./features/schedule.md)：一键导入教务课表，快速查看每日课程安排。
- [成绩查询](./features/grades.md)：同步成绩信息，辅助查看学习进展。
- [考试安排](./features/exam.md)：集中查看期末考、补考等考试安排。
- [培养方案](./features/training-plan.md)：查看培养方案与课程修读要求。
- [教材查询](./features/textbooks.md)：查询课程教材相关信息。

### 校园生活

- [宿舍签到](./features/dorm.md)：整合宿舍相关服务能力。
- [电费查询](./features/electricity.md)：查询宿舍用电与电费余额。
- [空教室查询](./features/classroom.md)：按教学楼和时间段查找可用教室。
- [洗衣机查询](./features/laundry.md)：查看洗衣机空闲状态，减少来回等待。
- [食堂菜品与打分](./features/canteen.md)：查看食堂菜品、窗口评分与干饭参考。
- [校园新闻](./features/news.md)：获取校园新闻与公告动态。

### 实用工具与规划功能

- [体测计算器](./features/fitness-test.md)：快速计算体测分数和等级。
- [校园卡](./features/card.md)：校园卡相关能力规划中。
- [图书馆](./features/library.md)：图书馆相关能力规划中。
- [校园导览](./features/map.md)：校园地图与导览能力规划中。
- [消息通知](./features/notifications.md)：消息通知能力规划中。

## 可绑定的学校系统

口袋安小工目前可绑定并整合以下学校侧系统能力：

| 系统     | 主要能力                             |
| -------- | ------------------------------------ |
| 教务系统 | 课表、成绩、考试、培养方案等教务信息 |
| 宿舍系统 | 宿舍用电、电费余额等生活服务信息     |
| 智慧校园 | 通知公告等校园服务能力               |

账号定义、初始密码规则和绑定注意事项请查看 [账号与绑定](./guide/account.md)。

## 文档开发

本文档基于 [VitePress](https://vitepress.dev/) 和 [vitepress-theme-teek](https://github.com/Kele-Bingtang/vitepress-theme-teek) 构建。

### 环境准备

建议使用 pnpm 安装依赖：

```bash
pnpm install
```

### 本地开发

```bash
pnpm dev
```

### 构建文档

```bash
pnpm build
```

### 本地预览构建产物

```bash
pnpm preview
```

## 目录结构

```text
docs/
├── index.md              # 文档站首页
├── guide/                # 使用指南
│   ├── index.md          # 快速开始
│   ├── install.md        # 下载安装
│   └── account.md        # 账号与绑定
├── features/             # 功能模块说明
├── faq.md                # 常见问题
└── .vitepress/           # VitePress 配置
```

## 相关链接

- [口袋安小工 GitHub 仓库](https://github.com/zreason-group/PocketAHUT)
- [GitHub Releases 下载页](https://github.com/zreason-group/PocketAHUT/releases/)
- [快速开始](./guide/index.md)
- [下载安装](./guide/install.md)
- [常见问题](./faq.md)
