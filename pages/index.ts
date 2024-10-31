export interface Context {
  components: Array<{
    linkHref: string;
    renderHref: string;
    title: string;
  }>;
  currentPageTitle: string;
  faviconHref: string;
  isUserSignedIn: boolean;
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
  userStatusMessage?: string;
  userWelcomeMessage: string;
}
