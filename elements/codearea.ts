import type * as monaco from "monaco-editor";

export interface Context {
  id: string;
  language: string;
  name: string;
  readonly: boolean;
  value: string;
}

export default class {
  constructor({ id, language, name, readonly, value }: Context) {
    this.domElement = document.getElementById(id)!;

    const globalMonaco = globalThis.monaco as typeof monaco;
    this.editor = globalMonaco.editor.create(
      this.domElement,
      {
        value,
        language,
        readOnly: readonly,
        theme: "hc-light",
        fontFamily: "'Fira Code', monospace",
        tabSize: 2,
        ...this.getResponsiveOptions(),
      },
      {
        openerService: {
          open(resource: string) {
            location.href = `/user/${resource}`;
          },
        },
      }
    );

    if (!readonly) {
      const hiddenField = document.createElement("input");
      hiddenField.type = "hidden";
      hiddenField.name = name;
      hiddenField.value = value;
      this.domElement.appendChild(hiddenField);

      this.editor.onDidChangeModelContent(this.dispatchChange.bind(this));
    }

    addEventListener("resize", this.handleResize.bind(this));
    new ResizeObserver(this.handleResize.bind(this)).observe(this.domElement);
  }

  private readonly domElement: HTMLElement;
  private readonly editor: monaco.editor.IStandaloneCodeEditor;

  private dispatchChange(): void {
    const editorValue = this.editor.getValue();
    const hiddenField = this.domElement.querySelector("input")!;

    hiddenField.value = editorValue;

    this.domElement.dispatchEvent(
      new CustomEvent("change", {
        detail: editorValue,
      })
    );
  }

  private getResponsiveOptions() {
    const largeScreen = matchMedia("(min-width: 768px)").matches;

    return {
      lineNumbers: largeScreen ? "on" : "off",
      scrollbar: {
        vertical: largeScreen ? "auto" : "hidden",
        horizontal: largeScreen ? "auto" : "hidden",
      },
      minimap: {
        enabled: largeScreen,
      },
    } as const;
  }

  private handleResize(): void {
    this.editor.layout({ width: 0, height: 0 });

    requestAnimationFrame(() => {
      const domElementRect = this.domElement.getBoundingClientRect();

      this.editor.layout({
        width: domElementRect.width - 2,
        height: domElementRect.height - 2,
      });

      this.editor.updateOptions(this.getResponsiveOptions());
    });
  }
}
