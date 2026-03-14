# AGENTS.md - obsidian-images-preview 项目协作说明

## 1. 项目定位

- 项目类型：Obsidian 图片预览插件（TypeScript）。
- 目标能力：点击图片后提供浮窗预览、缩放/拖拽、画廊切换、Pin 模式与移动端手势。
- 构建产物：`main.js`（由 `src/main.ts` 通过 esbuild 生成）。
- 约束：以小步、可评审的改动为主，避免无需求的大规模重构。

## 2. 目录与职责（当前）

- `src/main.ts`：插件入口，负责生命周期、命令注册、设置加载。
- `src/controllers/preview-controller.ts`：核心编排层，连接输入、状态机、UI、服务层。
- `src/core/`：纯逻辑核心（`image-transform-engine.ts`、`preview-state-machine.ts`）。
- `src/services/`：服务层（设置、画廊收集、剪贴板）。
- `src/input/input-adapter.ts`：统一鼠标/触摸输入事件到控制器回调。
- `src/ui/overlay-host.ts`：DOM 渲染与销毁，不承载业务决策。
- `src/settings.ts`：默认配置与设置面板渲染。
- `src/i18n.ts`：中英文本地化字典与键定义。
- `src/utils/`：通用工具函数目录（当前未启用专用工具模块，按需新增）。
- `styles.css`：浮窗样式。
- `tests/`：Vitest 单元测试（核心逻辑与服务层）。
- `manifest.json`：Obsidian 插件元数据。

## 3. 开发与验证命令

- 安装依赖：`npm install`
- 开发监听构建：`npm run dev`
- 生产构建：`npm run build`
- 类型检查：`npm run typecheck`
- 单测（交互模式）：`npm run test`
- 单测（一次性）：`npm run test:run`
- ESLint 检查：`npm run lint`
- ESLint 自动修复：`npm run lint:fix`

执行建议（最快相关检查优先）：

- 仅改类型或逻辑时：先跑 `npm run typecheck`，再跑 `npm run test:run`。
- 改动涉及 API 使用或 DOM 样式写法时：补跑 `npm run lint`，提前发现 Obsidian 提审风险。
- 改 `src/`、`styles.css`、`manifest.json` 并准备交付时：补跑 `npm run build`，确保 `main.js` 同步。

## 4. 协作编码约定

- 变更前先明确要改的文件，并给出 3-6 条实现计划。
- 不手改 `main.js` 业务逻辑，源代码改动应落在 `src/`，并通过构建生成产物。
- 保持 TypeScript 严格类型与显式错误处理，不引入隐式 `any` 风险。
- 新增或修改方法时，保留清晰、自然的人类可读注释，重点解释关键决策点。
- 不在代码或日志中写入密钥、Token、私有凭据；若必须使用，改为环境变量注入。
- 非需求明确时，不新增网络调用、埋点、遥测逻辑。

## 5. 变更-测试对照表

- 改 `src/core/image-transform-engine.ts`：同步更新 `tests/image-transform-engine.test.ts`。
- 改 `src/core/preview-state-machine.ts`：同步更新 `tests/preview-state-machine.test.ts`。
- 改 `src/services/gallery-service.ts`：同步更新 `tests/gallery-service.test.ts`。
- 改 `src/services/settings-store.ts` 或 `src/settings.ts`：同步更新 `tests/settings-store.test.ts`。
- 改 `src/i18n.ts`：同步更新 `tests/i18n.test.ts`（语言键与语言切换行为）。
- 改 `src/controllers/preview-controller.ts`：同步更新 `tests/preview-controller.test.ts`（事件注册、图片命中兜底等关键交互逻辑）。
- 改 `src/input/input-adapter.ts`：同步更新 `tests/input-adapter.test.ts`（wheel 缩放归一化与限幅）。
- 改 `src/ui/overlay-host.ts`：同步更新 `tests/overlay-host.test.ts`（画廊挂载状态、文件名与工具栏布局行为）。
- 改 `src/ui/` 其他模块：当前仍以手动验证为主，建议优先补充交互单测或在交付说明写明覆盖盲区。

## 6. 提交前检查清单

- 变更范围与需求一致，无额外重构噪音。
- 受影响测试已更新并通过。
- `npm run typecheck` 通过。
- `npm run lint` 通过（若本次改动涉及 TS/DOM/API 规范）。
- `npm run test:run` 通过。
- 若涉及发布产物，`npm run build` 已执行且产物同步。
- 若涉及设置项、命令、文案、样式或清单元数据，文档已同步更新（含本文件）。

## 7. AGENTS.md 维护机制（必须执行）

出现以下任一变更时，必须在同一任务内更新本文件：

- 目录结构、核心模块职责发生变化（对应更新第 2 节）。
- `package.json` 脚本或工程命令变化（对应更新第 3 节）。
- 测试布局或测试策略变化（对应更新第 5 节）。
- 提交流程/质量门槛变化（对应更新第 6 节）。
- 设置项、命令、i18n 键、`manifest.json` 中影响协作的信息变化（更新相关章节）。

更新要求：

- 只更新受影响段落，保持小 diff。
- 文档内容必须与当前仓库状态一致，禁止模板化空话。
- 在“更新记录”追加一行，说明日期与变更点。

## 8. 更新记录

- 2026-03-13：初始化 `AGENTS.md`，建立项目结构、命令、测试映射与维护机制。
- 2026-03-13：新增 `tests/preview-controller.test.ts`，同步更新控制器测试映射说明。
- 2026-03-13：新增界面语言设置（中/英/跟随系统），补充 `tests/i18n.test.ts` 与 i18n 测试映射。
- 2026-03-13：新增 `tests/input-adapter.test.ts`，补充触控板/滚轮缩放映射测试并更新输入层测试对照。
- 2026-03-13：新增 `tests/overlay-host.test.ts`，补充 UI 宿主画廊挂载状态测试并更新测试映射。
- 2026-03-13：移除旋转能力（按钮、菜单、状态与引擎逻辑），同步更新文档描述与相关测试。
- 2026-03-13：移除翻转/反色/全屏按钮与相关逻辑，删除全屏设置项并同步 i18n 与测试覆盖。
- 2026-03-13：图片文件名改为独立显示在图片下方一行，按钮区仅保留操作按钮。
- 2026-03-13：新增“复制图片名称”按钮（位于图片下方），支持一键复制名称到剪贴板并补充回归测试。
- 2026-03-13：移除“复制图片名称”单独按钮，改为点击图片名称直接复制。
- 2026-03-13：移除重置按钮与重置功能链路（命令、控制器分支、引擎方法与对应文案/测试）。
- 2026-03-13：移除“点击触发修饰键”配置并改为单击直开；为移动/切换修饰键新增方向键提示文案。
- 2026-03-13：为“Pin 模式最大图片数”滑块新增实时数值提示文案，并补充 i18n 键与测试断言。
- 2026-03-13：背景色设置接入 `vanilla-picker`（支持颜色+透明度），替换文本输入并补充颜色工具函数测试。
- 2026-03-13：在“触发范围”设置项下方新增三种模式说明文案（含适用场景），并同步 i18n 与测试断言。
- 2026-03-13：修复背景色选择器弹层被裁切与选色后立即关闭问题（分离预览文案节点、提升 popup 层级、补充设置页回归测试）。
- 2026-03-13：为“键盘移动速度”滑块新增实时速度值说明，并补充 i18n 键与测试断言。
- 2026-03-13：移除图片背景色选择功能（设置项、依赖、样式与专属测试），预览图片背景回退为固定透明。
- 2026-03-14：新增 ESLint 基础配置与 `eslint-plugin-obsidian` 集成，补充 `lint/lint:fix` 命令与提交流程检查项。
