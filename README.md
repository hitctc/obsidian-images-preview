# Images Preview (Obsidian Plugin)

一个面向 Obsidian 的图片浮窗预览插件：点击笔记中的图片即可打开预览窗口，支持缩放、拖拽、切图与 Pin 多图并行查看。

## 功能总览

### 1. 两种预览模式

- **普通模式（Normal）**：同一时间仅保留一个预览窗口，带遮罩，适合专注查看。
- **Pin 模式（Pin）**：可同时保留多个浮窗，适合对比多张图。
- Pin 模式支持上限控制：
  - `Pin mode max images`：最多保留 `1~6` 张。
  - `Replace oldest image when full`：达到上限后自动替换最早打开的预览。

### 2. 图片浏览与画廊

- 支持在同一上下文中收集图片并切换上一张/下一张。
- 可显示底部缩略图画廊（可在设置中关闭）。
- 当 DOM 收集不到图片时，自动回退到当前 Markdown 文本解析（支持 Markdown 图片、WikiLink 图片、HTML `img`）。

### 3. 交互能力（桌面 + 移动端）

- 鼠标左键拖拽移动图片。
- 滚轮缩放（已做触控板/滚轮归一化）。
- 双击在 `fit` 与 `1:1` 之间切换。
- 右键（或移动端长按）打开快捷菜单。
- 点击图片下方名称可复制图片名称。
- 点击遮罩可关闭当前普通模式预览。

### 4. 工具栏能力

工具栏内置以下动作：

- 缩小 `-`
- 放大 `+`
- 原始比例 `1:1`
- 自适应 `Fit`
- 复制图片 `Copy`
- 上一张 `◀`
- 下一张 `▶`
- 关闭 `Close`

### 5. 键盘能力

- `Esc`：关闭当前激活预览。
- 方向键 + **切换修饰键**：上一张 / 下一张。
- 方向键 + **移动修饰键**：按速度参数移动图片。

## 命令面板（Command Palette）

插件注册了以下命令：

| 命令 ID | 默认名称（中文） | 说明 |
| --- | --- | --- |
| `open-preview-at-active-image` | 在当前图片打开预览 | 在当前活动视图中打开预览 |
| `toggle-preview-mode` | 切换预览模式 | 普通模式 / Pin 模式切换 |
| `close-active-preview` | 关闭当前预览 | 关闭当前激活预览 |
| `next-image` | 下一张图片 | 切换到下一张 |
| `prev-image` | 上一张图片 | 切换到上一张 |

## 设置项说明

| 分类 | 设置项 | 说明 |
| --- | --- | --- |
| 基础 | `Interface language` | 界面语言：跟随系统 / 中文 / 英文 |
| 基础 | `Preview mode` | 默认预览模式：Normal / Pin |
| 触发 | `Trigger scope` | 触发范围：仅 Markdown / Markdown+常见面板 / 全局图片 |
| 触发 | `Enable linked images` | 是否支持点击链接包裹的图片触发 |
| Pin | `Pin mode max images` | Pin 模式最多保留图片数（1~6） |
| Pin | `Replace oldest image when full` | 达到上限后是否替换最旧预览 |
| 视觉 | `Enable gallery navbar` | 是否显示底部缩略图画廊 |
| 键盘 | `Keyboard move speed` | 方向键移动速度 |
| 键盘 | `Move image modifier` | 移动图片时所需修饰键 |
| 键盘 | `Switch image modifier` | 切图时所需修饰键 |
| 移动端 | `Enable mobile gestures` | 是否启用移动端手势交互 |

## 安装

### 方式 A：手动安装（本地仓库/未上架场景）

1. 在你的 Vault 下创建插件目录：

```bash
mkdir -p <your-vault>/.obsidian/plugins/images-preview
```

2. 将以下文件放入该目录：

- `manifest.json`
- `main.js`
- `styles.css`

3. 打开 Obsidian：

- `设置 -> 第三方插件 -> 已安装插件`
- 启用 **Images Preview**

### 方式 B：开发联调安装

1. 克隆仓库到插件目录（或软链接到插件目录）。
2. 安装依赖并启动开发构建：

```bash
npm install
npm run dev
```

3. 在 Obsidian 中重载插件。

## 快速上手

1. 打开任意包含图片的笔记。
2. 单击图片打开预览。
3. 用滚轮缩放、拖拽移动、双击切换 fit/1:1。
4. 用工具栏或键盘切换上一张/下一张。
5. 需要多图对比时，切换到 Pin 模式。

## 开发与验证

```bash
# 开发监听构建
npm run dev

# 生产构建
npm run build

# 类型检查
npm run typecheck

# 单元测试（一次性）
npm run test:run

# 单元测试（交互模式）
npm run test
```

## 项目结构

```text
src/
  main.ts                          # 插件入口
  controllers/preview-controller.ts # 预览编排层
  core/                            # 纯逻辑（变换引擎、状态机）
  input/input-adapter.ts           # 鼠标/触摸输入适配
  services/                        # 画廊收集、设置存储、剪贴板
  ui/overlay-host.ts               # 预览 DOM 渲染/销毁
  settings.ts                      # 设置页
  i18n.ts                          # 中英文本地化
styles.css                         # UI 样式
tests/                             # Vitest 单元测试
```

## 兼容性

- Obsidian `>= 1.8.7`
- 桌面端与移动端均可用（`manifest.json` 中 `isDesktopOnly: false`）

## 常见问题（FAQ）

### Q1：为什么某些图片点了没反应？

优先检查：

- 当前视图是否在你设置的 `Trigger scope` 范围内。
- 图片是否被链接包裹且 `Enable linked images` 已关闭。

### Q2：方向键为什么不能切图或移动？

切图/移动依赖你设置的修饰键组合。请在设置中确认：

- `Switch image modifier`
- `Move image modifier`

## License

MIT
