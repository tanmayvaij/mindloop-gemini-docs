import { DocsPager } from "@/components/pager";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";

export default function ArchitecturePage() {
  return (
    <div className="space-y-6">
      <PageHeader>
        <PageHeaderHeading>Architecture</PageHeaderHeading>
        <PageHeaderDescription>
          Understanding the core components of MindLoop.
        </PageHeaderDescription>
      </PageHeader>

      <div className="space-y-4">
        <p className="leading-7 not-first:mt-6">
          MindLoop is built around three core concepts: <strong>Agent</strong>,{" "}
          <strong>Tools</strong>, and <strong>Memory</strong>.
        </p>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          Base Agent
        </h3>
        <p className="leading-7 not-first:mt-6">
          The Base Agent orchestrates the interaction between the LLM and the
          tools. It manages the conversation history, invokes tools when
          requested by the model, and returns structured responses.
        </p>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          Tools
        </h3>
        <p className="leading-7 not-first:mt-6">
          Tools are functions that the agent can call. They are defined with a
          strict schema using `zod`, ensuing that the model provides valid
          arguments.
        </p>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          Memory
        </h3>
        <p className="leading-7 not-first:mt-6">
          Memory persists the conversation state. MindLoop supports pluggable
          memory backends (InMemory, File, and potentially others).
        </p>
      </div>

      <DocsPager page={{ slug: "/docs/architecture" }} />
    </div>
  );
}
