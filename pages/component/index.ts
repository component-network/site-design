export interface Context {
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
  faviconHref: string;
  isUserSignedIn: boolean;
  signInHref: string;
  signOutHref: string;
  userStatusMessage?: string;
}
