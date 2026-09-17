# Development Guide

本文件面向项目维护者，记录本地开发、无软链接部署与多设备协作流程。

## 1. 前置条件

- Node.js 20+
- npm
- 一个可访问的 Obsidian Vault（包含 `.obsidian` 目录）

## 2. 安装依赖

```bash
npm install
```

## 3. 常规开发命令

```bash
# 开发监听构建（仅输出到当前仓库 main.js）
npm run dev

# 生产构建
npm run build

# 类型检查
npm run typecheck

# 单测（一次性）
npm run test:run

# 单测（交互模式）
npm run test
```

## 4. 无软链接部署到 Vault（推荐）

1. 在项目根目录创建本地 `.env`（该文件已被 Git 忽略），填写 Vault 根目录，即包含 `.obsidian` 的目录：

```dotenv
OBSIDIAN_VAULT_DIR="<your-vault>"
```

也可以通过环境变量临时覆盖 `.env` 中的路径：

```bash
export OBSIDIAN_VAULT_DIR="<your-vault>"
```

2. 执行一次构建并同步：

```bash
npm run build:vault
```

3. 日常开发使用实时同步：

```bash
npm run dev:vault
```

说明：

- `build:vault` 和 `dev:vault` 会自动读取项目根目录 `.env`，不依赖当前终端是否加载 shell 配置。
- 环境变量 `OBSIDIAN_VAULT_DIR` 的优先级高于 `.env`，适合临时切换 Vault。
- 同步目标目录固定为 `<vault>/.obsidian/plugins/<manifest.id>`。
- 若目标目录是软链接，构建脚本会自动替换为真实目录，避免跨设备路径失效。
- 会同步 `main.js`、`manifest.json`、`styles.css`。

## 5. 多设备协作建议

- 每台设备分别维护本机未提交的 `.env`，不要把本机绝对路径写入仓库。
- 也可以在每台设备上设置自己的 `OBSIDIAN_VAULT_DIR` 环境变量。
- 拉取最新代码后先执行 `npm run build:vault`，再在 Obsidian 里重载插件。
- 不要把本机绝对路径写入仓库文档或脚本默认值。

## 6. 故障排查

- Obsidian 启动报 `ENOENT`：
  - 检查 `.obsidian/community-plugins.json` 是否启用了正确插件 id：`images-preview`。
  - 检查 `.obsidian/plugins/images-preview` 是否存在且包含 `manifest.json` 与 `main.js`。
- 修改代码后 Obsidian 未生效：
  - 确认 `npm run dev:vault` 正在运行。
  - 在 Obsidian 中执行“重载插件”或重启 Obsidian。
