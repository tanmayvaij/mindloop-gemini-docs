import { DocsPager } from "@/components/pager";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";

export default function ComponentsPage() {
  return (
    <div className="space-y-6">
      <PageHeader>
        <PageHeaderHeading>Components</PageHeaderHeading>
        <PageHeaderDescription>
          Pre-built components provided by shadcn/ui.
        </PageHeaderDescription>
      </PageHeader>

      <div className="space-y-4">
        <p className="leading-7 not-first:mt-6">
          This documentation site uses components from{" "}
          <a
            href="https://ui.shadcn.com"
            className="font-medium underline underline-offset-4"
          >
            shadcn/ui
          </a>
          .
        </p>
      </div>

      <DocsPager page={{ slug: "/docs/components" }} />
    </div>
  );
}
