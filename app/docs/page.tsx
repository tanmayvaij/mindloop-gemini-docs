import { DocsPager } from "@/components/pager";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";

export default function IntroductionPage() {
  return (
    <div className="space-y-6">
      <PageHeader>
        <PageHeaderHeading>Introduction</PageHeaderHeading>
        <PageHeaderDescription>
          A lightweight, modular framework for building AI agents with Gemini.
        </PageHeaderDescription>
      </PageHeader>

      <div className="space-y-4 text-lg text-muted-foreground">
        <p>
          <strong>MindLoop Gemini</strong> allows you to build powerful AI
          agents that can use tools, maintain memory, and produce structured
          outputs.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            ⚙️ <strong>BaseAgent</strong> — Easily extend to integrate any LLM
            (Gemini, OpenAI, Claude, etc.)
          </li>
          <li>
            🧩 <strong>Tool System</strong> — Define reusable structured tools
            with type safety via `zod`
          </li>
          <li>
            💾 <strong>Memory System</strong> — Simple in-memory or file-based
            conversation storage
          </li>
          <li>
            🧱 <strong>Extensible Design</strong> — Perfect for building your
            own agent SDKs or frameworks
          </li>
          <li>
            📦 <strong>Zero external dependencies</strong> (only `zod`)
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-4 py-8">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Why MindLoop?
        </h2>
        <p className="leading-7 not-first:mt-6">
          MindLoop abstracts away the complexity of managing LLM conversations
          and tool executions. It provides a standard interface for defining
          tools and memory, making your agent code clean and testable.
        </p>
      </div>

      <DocsPager page={{ slug: "/docs" }} />
    </div>
  );
}
