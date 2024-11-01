export interface Context {
  components: Array<{
    linkHref: string;
    renderHref: string;
    title: string;
  }>;
  currentPageTitle: string;
  faviconHref: string;
  logoSrc: string;
  nextPage?: {
    description: string;
    href: string;
  };
  previousPage?: {
    description: string;
    href: string;
  };
  search?: string;
  signInHref: string;
  signOutHref: string;
  userIsSignedIn: boolean;
  userStatusMessage?: string;
  userWelcomeMessage: string;
}
