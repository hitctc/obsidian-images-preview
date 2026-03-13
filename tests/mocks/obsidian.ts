export class Plugin {
  app: any;
  addSettingTab(): void {}
  addCommand(): void {}
  registerDomEvent(): void {}
  registerEvent(): void {}
  async loadData(): Promise<any> {
    return {};
  }
  async saveData(): Promise<void> {}
}

export class App {}

export class MarkdownView {
  file: any;
}

export class PluginSettingTab {
  app: any;
  plugin: any;
  containerEl: HTMLElement;

  constructor(app: any, plugin: any) {
    this.app = app;
    this.plugin = plugin;
    this.containerEl = document.createElement("div");
  }
}

export class Setting {
  settingEl: HTMLElement;

  constructor(_container: HTMLElement) {
    this.settingEl = document.createElement("div");
  }

  setName(): this {
    return this;
  }

  setDesc(): this {
    return this;
  }

  setHeading(): this {
    return this;
  }

  addDropdown(builder: (dropdown: any) => void): this {
    builder({
      addOption: () => undefined,
      setValue: () => ({ onChange: () => undefined })
    });
    return this;
  }

  addToggle(builder: (toggle: any) => void): this {
    builder({
      setValue: () => ({ onChange: () => undefined })
    });
    return this;
  }

  addSlider(builder: (slider: any) => void): this {
    builder({
      setLimits: () => ({
        setValue: () => ({
          setDynamicTooltip: () => ({ onChange: () => undefined })
        })
      })
    });
    return this;
  }

  addText(builder: (text: any) => void): this {
    builder({
      setValue: () => ({ onChange: () => undefined })
    });
    return this;
  }
}

export class Menu {
  addItem(builder: (item: any) => void): void {
    builder({
      setTitle: () => ({ onClick: () => undefined })
    });
  }

  addSeparator(): void {}

  showAtPosition(): void {}
}

export class Notice {
  constructor(_message: string) {}
}
