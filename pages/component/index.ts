export interface Context {
  component: {
    data?: string;
    draftHref: string;
    isDraft: boolean;
    isEditable: string;
    manageHref: string;
    publishHref: string;
    renderHref: string;
    script?: string;
    template: string;
    title: string;
  };
}
