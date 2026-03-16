import esbuild from "esbuild";
import process from "node:process";
import path from "node:path";
import { promises as fs } from "node:fs";
import builtins from "builtin-modules";

const production = process.argv[2] === "production";
const vaultDir = process.env.OBSIDIAN_VAULT_DIR?.trim() ?? "";
const artifactFiles = ["main.js", "manifest.json", "styles.css"];

/**
 * 读取并校验 manifest，保证部署目录始终和插件 id 一致。
 */
async function readPluginId() {
  const manifestPath = path.resolve("manifest.json");
  const content = await fs.readFile(manifestPath, "utf8");
  const manifest = JSON.parse(content);
  const pluginId = typeof manifest.id === "string" ? manifest.id.trim() : "";

  if (!pluginId) {
    throw new Error("manifest.json 缺少有效的 id 字段，无法同步到 Vault。");
  }

  return pluginId;
}

/**
 * 将产物写入 Vault 插件目录，并自动替换掉同名软链接目录。
 */
async function syncArtifactsToVault() {
  if (!vaultDir) {
    return;
  }

  const pluginId = await readPluginId();
  const pluginDir = path.join(vaultDir, ".obsidian", "plugins", pluginId);
  const currentStat = await fs.lstat(pluginDir).catch(() => null);

  // 目标目录是软链接时先移除，避免继续依赖单机路径。
  if (currentStat?.isSymbolicLink()) {
    await fs.rm(pluginDir, { recursive: true, force: true });
  }

  await fs.mkdir(pluginDir, { recursive: true });

  for (const fileName of artifactFiles) {
    const sourcePath = path.resolve(fileName);
    const targetPath = path.join(pluginDir, fileName);

    try {
      await fs.access(sourcePath);
    } catch (error) {
      if (fileName === "styles.css") {
        continue;
      }
      throw new Error(`未找到必需产物 ${fileName}，请先完成构建。`);
    }

    // 使用临时文件 + 原子替换，避免 Obsidian 读取到半写入文件。
    const tempPath = `${targetPath}.tmp-${Date.now()}`;
    await fs.copyFile(sourcePath, tempPath);
    await fs.rename(tempPath, targetPath);
  }

  console.log(`[vault-sync] 已同步到 ${pluginDir}`);
}

/**
 * 在每次构建结束后执行同步，确保 watch 模式改动可以即时生效。
 */
const vaultSyncPlugin = {
  name: "vault-sync-plugin",
  setup(build) {
    build.onEnd(async (result) => {
      if (!vaultDir || result.errors.length > 0) {
        return;
      }

      try {
        await syncArtifactsToVault();
      } catch (error) {
        process.exitCode = 1;
        console.error(`[vault-sync] 同步失败: ${error instanceof Error ? error.message : String(error)}`);
      }
    });
  }
};

const context = await esbuild.context({
  entryPoints: ["src/main.ts"],
  bundle: true,
  external: [
    "obsidian",
    "electron",
    "@codemirror/autocomplete",
    "@codemirror/collab",
    "@codemirror/commands",
    "@codemirror/language",
    "@codemirror/lint",
    "@codemirror/search",
    "@codemirror/state",
    "@codemirror/view",
    "@lezer/common",
    "@lezer/highlight",
    "@lezer/lr",
    ...builtins
  ],
  format: "cjs",
  target: "es2021",
  logLevel: "info",
  sourcemap: production ? false : "inline",
  treeShaking: true,
  outfile: "main.js",
  plugins: [vaultSyncPlugin]
});

if (production) {
  await context.rebuild();
  await context.dispose();
} else {
  await context.watch();
}
