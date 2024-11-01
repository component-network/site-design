export interface Context {
  component: {
    draftHref: string;
    isDraft: boolean;
    isEditable: boolean;
    manageHref: string;
    publishHref: string;
    renderHref: string;
    script?: string;
    settings?: string;
    template: string;
    title: string;
  };
  faviconHref: string;
  signInHref: string;
  signOutHref: string;
  userIsSignedIn: boolean;
  userStatusMessage?: string;
}
