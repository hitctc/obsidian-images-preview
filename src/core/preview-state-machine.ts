import { PreviewState } from "../types";

/**
 * 浮窗状态机，负责约束状态转换。
 */
export class PreviewStateMachine {
  private state: PreviewState = PreviewState.Idle;

  /**
   * 读取当前状态。
   */
  public getState(): PreviewState {
    return this.state;
  }

  /**
   * 尝试打开预览。
   */
  public open(): void {
    this.transition([PreviewState.Idle], PreviewState.Open);
  }

  /**
   * 开始拖拽。
   */
  public startDrag(): void {
    this.transition([PreviewState.Open, PreviewState.Menu], PreviewState.Dragging);
  }

  /**
   * 结束拖拽。
   */
  public endDrag(): void {
    this.transition([PreviewState.Dragging], PreviewState.Open);
  }

  /**
   * 打开菜单。
   */
  public openMenu(): void {
    this.transition([PreviewState.Open], PreviewState.Menu);
  }

  /**
   * 关闭菜单。
   */
  public closeMenu(): void {
    this.transition([PreviewState.Menu], PreviewState.Open);
  }

  /**
   * 关闭浮窗。
   */
  public close(): void {
    this.state = PreviewState.Idle;
  }

  /**
   * 判断是否处于可交互状态。
   */
  public isInteractive(): boolean {
    return this.state !== PreviewState.Idle;
  }

  /**
   * 内部通用转换函数。
   */
  private transition(from: PreviewState[], to: PreviewState): void {
    if (!from.includes(this.state)) {
      throw new Error(`Invalid preview state transition: ${this.state} -> ${to}`);
    }
    this.state = to;
  }
}
