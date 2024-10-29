import type { Context as GlobalContext } from "global";

export interface Context extends GlobalContext {
  components: Array<{
    linkHref: string;
    renderHref: string;
    title: string;
  }>;
  currentPageTitle: string;
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
  userWelcomeMessage: string;
}
