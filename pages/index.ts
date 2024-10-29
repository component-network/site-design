export interface Context {
  components: Array<{
    linkHref: string;
    renderHref: string;
    title: string;
  }>;
  currentPageTitle: string;
  nextPage?: {
    description: string;
    href: string;
  };
  previousPage?: {
    description: string;
    href: string;
  };
  search?: string;
  userWelcomeMessage: string;
}
