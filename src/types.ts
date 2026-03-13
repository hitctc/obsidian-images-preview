import type { TFile } from "obsidian";

/**
 * 插件预览模式。
 */
export enum PreviewMode {
  Normal = "normal",
  Pin = "pin"
}

/**
 * 运行时状态机状态。
 */
export enum PreviewState {
  Idle = "idle",
  Open = "open",
  Dragging = "dragging",
  Menu = "menu"
}

/**
 * 图片点击触发范围。
 */
export enum TriggerScope {
  MarkdownOnly = "markdown-only",
  MarkdownAndCommon = "markdown-and-common",
  Global = "global"
}

/**
 * 修饰键配置。
 */
export enum HotkeyModifier {
  None = "none",
  Ctrl = "ctrl",
  Alt = "alt",
  Shift = "shift",
  CtrlAlt = "ctrl-alt",
  CtrlShift = "ctrl-shift",
  ShiftAlt = "shift-alt",
  CtrlShiftAlt = "ctrl-shift-alt"
}

/**
 * 界面语言偏好。
 */
export enum UILanguage {
  Auto = "auto",
  Zh = "zh",
  En = "en"
}

/**
 * 工具栏动作。
 */
export type ToolbarAction =
  | "zoom-in"
  | "zoom-out"
  | "zoom-100"
  | "fit"
  | "copy"
  | "copy-name"
  | "close"
  | "next"
  | "prev";

/**
 * 图片基础信息。
 */
export interface ImageItem {
  src: string;
  alt: string;
  title: string;
  index: number;
  total: number;
  file?: TFile | null;
}

/**
 * 预览时的变换状态。
 */
export interface TransformState {
  naturalWidth: number;
  naturalHeight: number;
  width: number;
  height: number;
  left: number;
  top: number;
  zoomRatio: number;
}

/**
 * 用户交互配置。
 */
export interface InteractionProfile {
  enableMobileGestures: boolean;
  enableDoubleTapZoom: boolean;
  longPressMenuMs: number;
}

/**
 * 画廊颜色配置。
 */
export interface GalleryTheme {
  enabled: boolean;
  backgroundColor: string;
  hoverColor: string;
  activeBorderColor: string;
  highlightActiveBorder: boolean;
}

/**
 * 插件设置。
 */
export interface PluginSettings {
  schemaVersion: number;
  mode: PreviewMode;
  triggerScope: TriggerScope;
  includeLinkedImages: boolean;
  moveHotkey: HotkeyModifier;
  switchHotkey: HotkeyModifier;
  moveSpeed: number;
  pinMaximum: number;
  pinCoverMode: boolean;
  showImageTooltip: boolean;
  uiLanguage: UILanguage;
  imageBorderEnabled: boolean;
  imageBorderWidth: string;
  imageBorderStyle: string;
  imageBorderColor: string;
  gallery: GalleryTheme;
  interaction: InteractionProfile;
}

/**
 * 图片收集结果。
 */
export interface GalleryResult {
  items: ImageItem[];
  activeIndex: number;
}

/**
 * 控制器事件上下文。
 */
export interface PreviewContext {
  doc: Document;
  sourceImage: HTMLImageElement;
  item: ImageItem;
  allItems: ImageItem[];
}

/**
 * 拖拽偏移。
 */
export interface Offset {
  x: number;
  y: number;
}

/**
 * 缩放锚点。
 */
export interface ZoomAnchor {
  x: number;
  y: number;
}

/**
 * 输入层对控制层暴露的回调。
 */
export interface InputCallbacks {
  onFocus: () => void;
  onDragStart: (clientX: number, clientY: number) => void;
  onDragMove: (clientX: number, clientY: number) => void;
  onDragEnd: () => void;
  onWheelZoom: (delta: number, anchorX: number, anchorY: number) => void;
  onPinchZoom: (scale: number, anchorX: number, anchorY: number) => void;
  onDoubleTap: () => void;
  onLongPressMenu: (clientX: number, clientY: number) => void;
}

/**
 * 运行时挂载对象。
 */
export interface MountedPreview {
  id: string;
  shellEl: HTMLDivElement;
  imageEl: HTMLImageElement;
  captionEl: HTMLDivElement;
  toolbarEl: HTMLDivElement;
  item: ImageItem;
  state: TransformState;
}
