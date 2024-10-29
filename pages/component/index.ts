import type { Context as GlobalContext } from "global";

export interface Context extends GlobalContext {
  component: {
    draftHref: string;
    isDraft: boolean;
    isEditable: string;
    manageHref: string;
    publishHref: string;
    renderHref: string;
    script?: string;
    settings?: string;
    template: string;
    title: string;
  };
}
