import { MainNav, SidebarNavItem } from "@/types/nav"

interface DocsConfig {
  mainNav: MainNav[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Components",
      href: "/docs/components",
    },
    {
      title: "GitHub",
      href: "https://github.com/tanmayvaij/mindloop-core",
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
          title: "Architecture",
          href: "/docs/architecture",
          items: [],
        },
      ],
    },
    {
      title: "Core Concepts",
      items: [
        {
          title: "Base Agent",
          href: "/docs/base-agent",
          items: [],
        },
        {
          title: "Tools",
          href: "/docs/tools",
          items: [],
        },
        {
          title: "Memory",
          href: "/docs/memory",
          items: [],
        },
      ],
    },
  ],
}
