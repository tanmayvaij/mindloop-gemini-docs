import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function IndexPage() {
  return (
    <section className="container mx-auto max-w-7xl grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          MindLoop Gemini <br className="hidden sm:inline" />
          The lightweight, modular agent framework.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Adaptable to any LLM. Zero external dependencies (except zod). Built
          for structured outputs, memory, and tools.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href="/docs"
          target="_blank"
          rel="noreferrer"
          className={cn(buttonVariants())}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          GitHub
        </Link>
      </div>
    </section>
  );
}
