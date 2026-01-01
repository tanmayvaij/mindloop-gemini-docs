"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { NavItem, NavItemWithChildren } from "@/types/nav";

import { docsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

interface DocsPagerProps {
  page: {
    slug: string;
  };
}

export function DocsPager({ page }: DocsPagerProps) {
  const pager = getPagerForDoc(page);

  if (!pager) {
    return null;
  }

  return (
    <div className="flex flex-row items-center justify-between">
      {pager?.prev?.href && (
        <Link
          href={pager.prev.href}
          className={cn(buttonVariants({ variant: "outline" }), "mr-auto")}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          {pager.prev.title}
        </Link>
      )}
      {pager?.next?.href && (
        <Link
          href={pager.next.href}
          className={cn(buttonVariants({ variant: "outline" }), "ml-auto")}
        >
          {pager.next.title}
          <ChevronRight className="ml-2 h-4 w-4" />
        </Link>
      )}
    </div>
  );
}

export function getPagerForDoc(doc: { slug: string }) {
  const flattenedLinks = [null, ...flatten(docsConfig.sidebarNav), null];
  const activeIndex = flattenedLinks.findIndex(
    (link) => doc.slug === link?.href
  );
  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null;
  const next =
    activeIndex !== flattenedLinks.length - 1
      ? flattenedLinks[activeIndex + 1]
      : null;
  return {
    prev,
    next,
  };
}

export function flatten(links: NavItemWithChildren[]): NavItem[] {
  return links.reduce<NavItem[]>((flat, link) => {
    return flat.concat(link.items?.length ? flatten(link.items) : link);
  }, []);
}
