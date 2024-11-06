export interface Context {
  component: {
    draftHref: string;
    isDraft: boolean;
    isEditable: boolean;
    manageHref: string;
    publishHref: string;
    renderHref: string;
    scriptHref: string;
    settingsHref: string;
    template: string;
    title: string;
  };
  faviconHref: string;
  signInHref: string;
  signOutHref: string;
  userIsSignedIn: boolean;
  userStatusMessage?: string;
}

export default class {
  constructor({ component }: Context) {
    this.draftHref = component.draftHref;

    document
      .getElementById("component-template-codearea")!
      .addEventListener("change", this.handleTemplateChange.bind(this));
  }

  private readonly draftHref: string;
  private timeout?: ReturnType<typeof setTimeout>;

  private handleTemplateChange(event: Event) {
    if (!(event instanceof CustomEvent)) {
      return;
    }

    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      const request = new XMLHttpRequest();
      const componentPreviewIframe = document.getElementById(
        "component-preview-iframe"
      ) as HTMLIFrameElement;

      request.addEventListener("load", () => {
        componentPreviewIframe.src += "";
      });
      request.open("POST", `${this.draftHref}?async=true`);
      request.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded"
      );
      request.send(`template=${encodeURIComponent(event.detail)}`);
    }, 500);
  }
}
