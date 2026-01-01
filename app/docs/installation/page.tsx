import { DocsPager } from "@/components/pager";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";

export default function InstallationPage() {
  return (
    <div className="space-y-6">
      <PageHeader>
        <PageHeaderHeading>Installation</PageHeaderHeading>
        <PageHeaderDescription>
          How to install and configure MindLoop Gemini.
        </PageHeaderDescription>
      </PageHeader>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Prerequisites
        </h2>
        <p className="leading-7 not-first:mt-6">
          MindLoop Gemini requires Node.js 18 or later.
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Install Dependency
        </h2>
        <div className="rounded-md bg-muted p-4">
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            npm install mindloop-gemini
          </code>
        </div>
        <p className="leading-7 not-first:mt-6">or</p>
        <div className="rounded-md bg-muted p-4">
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            yarn add mindloop-gemini
          </code>
        </div>
      </div>

      <DocsPager page={{ slug: "/docs/installation" }} />
    </div>
  );
}
