/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["@typescript-eslint", "obsidian"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_"
      }
    ],
    // 对齐 Obsidian 市场扫描建议：禁止使用废弃 activeLeaf。
    "no-restricted-syntax": [
      "error",
      {
        selector: "MemberExpression[property.name='activeLeaf']",
        message:
          "workspace.activeLeaf is deprecated. Use workspace.getActiveViewOfType(...) or workspace.getLeaf(...)."
      },
      {
        selector:
          "AssignmentExpression[left.type='MemberExpression'][left.object.type='MemberExpression'][left.object.property.name='style'][left.property.name='cursor']",
        message:
          "Avoid assigning element.style.cursor directly. Prefer CSS classes or setCssProps()."
      },
      {
        selector:
          "AssignmentExpression[left.type='MemberExpression'][left.object.type='MemberExpression'][left.object.property.name='style'][left.property.name='transform']",
        message:
          "Avoid assigning element.style.transform directly. Prefer CSS classes or setCssProps()."
      },
      {
        selector:
          "AssignmentExpression[left.type='MemberExpression'][left.object.type='MemberExpression'][left.object.property.name='style'][left.property.name='display']",
        message:
          "Avoid assigning element.style.display directly. Prefer CSS classes or setCssProps()."
      },
      {
        selector:
          "AssignmentExpression[left.type='MemberExpression'][left.object.type='MemberExpression'][left.object.property.name='style'][left.property.name='left']",
        message:
          "Avoid assigning element.style.left directly. Prefer CSS classes or setCssProps()."
      },
      {
        selector:
          "AssignmentExpression[left.type='MemberExpression'][left.object.type='MemberExpression'][left.object.property.name='style'][left.property.name='top']",
        message:
          "Avoid assigning element.style.top directly. Prefer CSS classes or setCssProps()."
      }
    ],
    // 先保持 obsidian 规则可加载，当前项目不使用 react-obsidian 图结构，默认关闭这 3 条。
    "obsidian/no-circular-dependencies": "off",
    "obsidian/strongly-typed-inject-component": "off",
    "obsidian/unresolved-provider-dependencies": "off"
  },
  ignorePatterns: ["main.js", "node_modules/", "coverage/", "dist/"]
};
