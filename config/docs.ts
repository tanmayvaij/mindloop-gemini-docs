import { MainNav, SidebarNavItem } from "@/types/nav";

interface DocsConfig {
  mainNav: MainNav[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Examples",
      href: "/docs/examples",
    },
    {
      title: "GitHub",
      href: "https://github.com/tanmayvaij/mindloop-gemini",
      external: true,
    },
    {
      title: "Twitter",
      href: "https://twitter.com/tanmayvaij",
      external: true,
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [],
        },
        {
          title: "Quick Start",
          href: "/docs/quickstart",
          items: [],
        },
      ],
    },
    {
      title: "Documentation",
      items: [
        {
          title: "Architecture",
          href: "/docs/architecture",
          items: [],
        },
        {
          title: "API Reference",
          href: "/docs/api",
          items: [],
        },
        {
          title: "Examples",
          href: "/docs/examples",
          items: [],
        },
      ],
    },
  ],
};
