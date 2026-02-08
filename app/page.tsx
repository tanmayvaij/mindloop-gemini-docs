"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  Sparkles,
  Wrench,
  Database,
  Shield,
  Blocks,
  Package,
  Github,
  Copy,
  Check,
} from "lucide-react";

const codeExample1 = `import { Agent, InMemory, MindLoopTool } from "mindloop-gemini";
import { Type } from "@google/genai";

const tools: MindLoopTool[] = [
  {
    handler: async ({ city }) => {
      return {
        success: true,
        data: \`It's sunny in \${city}\`,
        error: undefined,
      };
    },
    declaration: {
      name: "getWeather",
      description: "Returns a weather summary for a city",
      parameters: {
        type: Type.OBJECT,
        properties: {
          city: {
            type: Type.STRING,
            description: "The city to get weather for",
          },
        },
        required: ["city"],
      },
    },
  },
];

const agent = new Agent({
  apiKey: process.env.GEMINI_API_KEY!,
  tools,
  memory: new InMemory(),
  model: "gemini-2.5-flash",
  verbose: true,
});

const response = await agent.run("What's the weather in Tokyo?");
console.log(response);`;

const codeExample2 = `import { z } from "zod";

const weatherSchema = z.object({
  temperature: z.number(),
  condition: z.string(),
  humidity: z.number(),
  city: z.string(),
});

const agent = new Agent({
  apiKey: process.env.GEMINI_API_KEY!,
  tools,
  responseJsonSchema: weatherSchema,  // Optional: for structured outputs
  model: "gemini-2.5-flash",           // Optional: defaults to "gemini-2.5-flash"
  memory: new InMemory(),              // Optional: defaults to new InMemory()
  verbose: true,                       // Optional: defaults to false
});

const response = await agent.run("What's the weather in Tokyo?");
// Type: { temperature: number, condition: string, humidity: number, city: string }`;

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute right-4 top-4 rounded-md border border-border bg-background p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
      aria-label="Copy code"
    >
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
    </button>
  );
}

export default function HomePage() {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const id = target.getAttribute("href")?.slice(1);
        if (id) {
          const element = document.getElementById(id);
          element?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-[100] border-b border-border bg-background">
        <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-12 py-8">
          <div className="font-serif text-xl italic text-primary">
            MindLoop Gemini
          </div>
          <ul className="hidden gap-12 md:flex">
            <li>
              <a
                href="#features"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#quickstart"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Quick Start
              </a>
            </li>
            <li>
              <a
                href="#memory"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Memory
              </a>
            </li>
            <li>
              <a
                href="https://github.com/tanmayvaij"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-[1200px] px-12 pb-32 pt-40">
        <h1 className="mb-8 font-serif text-6xl font-normal leading-[1.1] text-primary">
          A lightweight framework for building AI agents with Gemini
        </h1>
        <p className="mb-12 max-w-[600px] text-base leading-[1.8] text-muted-foreground">
          MindLoop Gemini provides type-safe orchestration for Google's Gemini
          models, handling tools, memory, and structured outputs with minimal
          dependencies.
        </p>
        <code className="inline-block border border-border bg-card px-6 py-4 text-sm text-foreground">
          npm install mindloop-gemini
        </code>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-[1200px] px-12 py-24">
        {/* Features */}
        <section id="features" className="mb-32">
          <h2 className="mb-12 font-serif text-[2rem] font-normal text-primary">
            Features
          </h2>
          <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
            <div className="group transition-transform hover:translate-y-[-4px]">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-3 text-sm font-medium">Gemini Native</h3>
              <p className="text-sm leading-[1.7] text-muted-foreground">
                Built specifically for @google/genai with first-class support
                for all Gemini models and features.
              </p>
            </div>
            <div className="group transition-transform hover:translate-y-[-4px]">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <Wrench className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-3 text-sm font-medium">Tool System</h3>
              <p className="text-sm leading-[1.7] text-muted-foreground">
                Define reusable tools using FunctionDeclaration from the GenAI
                SDK.
              </p>
            </div>
            <div className="group transition-transform hover:translate-y-[-4px]">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <Database className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-3 text-sm font-medium">Memory System</h3>
              <p className="text-sm leading-[1.7] text-muted-foreground">
                Simple InMemory or FileMemory conversation storage for
                maintaining context.
              </p>
            </div>
            <div className="group transition-transform hover:translate-y-[-4px]">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-3 text-sm font-medium">Type-Safe</h3>
              <p className="text-sm leading-[1.7] text-muted-foreground">
                Full TypeScript support with Zod schemas for structured outputs.
              </p>
            </div>
            <div className="group transition-transform hover:translate-y-[-4px]">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <Blocks className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-3 text-sm font-medium">Extensible</h3>
              <p className="text-sm leading-[1.7] text-muted-foreground">
                Clean architecture perfect for building your own agent SDKs or
                frameworks.
              </p>
            </div>
            <div className="group transition-transform hover:translate-y-[-4px]">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <Package className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-3 text-sm font-medium">Minimal</h3>
              <p className="text-sm leading-[1.7] text-muted-foreground">
                Lightweight core with only essential dependencies.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section id="quickstart" className="mb-32">
          <h2 className="mb-12 font-serif text-[2rem] font-normal text-primary">
            Quick Start
          </h2>
          <Card className="my-8 border border-border bg-card">
            <CardHeader className="border-b border-border px-6 py-4">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                example.ts
              </div>
            </CardHeader>
            <CardContent className="relative overflow-x-auto p-0">
              <CopyButton text={codeExample1} />
              <SyntaxHighlighter
                language="typescript"
                style={vscDarkPlus}
                customStyle={{
                  margin: 0,
                  padding: "1.5rem",
                  paddingRight: "4rem",
                  background: "transparent",
                  fontSize: "0.875rem",
                  lineHeight: "1.6",
                }}
                showLineNumbers={false}
              >
                {codeExample1}
              </SyntaxHighlighter>
            </CardContent>
          </Card>
        </section>

        {/* Memory Options */}
        <section id="memory" className="mb-32">
          <h2 className="mb-12 font-serif text-[2rem] font-normal text-primary">
            Memory Options
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card className="border border-border bg-card p-8">
              <h3 className="mb-4 text-sm font-medium">InMemory</h3>
              <p className="mb-6 text-sm leading-[1.7] text-muted-foreground">
                Keeps messages in memory during runtime. Perfect for temporary
                conversations and testing. Data is cleared on restart.
              </p>
              <code className="border border-border bg-background px-4 py-3 text-xs text-foreground">
                new InMemory()
              </code>
            </Card>

            <Card className="border border-border bg-card p-8">
              <h3 className="mb-4 text-sm font-medium">FileMemory</h3>
              <p className="mb-6 text-sm leading-[1.7] text-muted-foreground">
                Persists messages to a JSONL file on disk. Maintains
                conversation history across sessions.
              </p>
              <code className="block border border-border bg-background px-4 py-3 text-xs text-foreground">
                new FileMemory({`{ filePath: "chat.jsonl" }`})
              </code>
            </Card>
          </div>
        </section>

        {/* Structured Outputs */}
        <section className="mb-32">
          <h2 className="mb-12 font-serif text-[2rem] font-normal text-primary">
            Structured Outputs
          </h2>
          <Card className="my-8 border border-border bg-card">
            <CardHeader className="border-b border-border px-6 py-4">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                structured-output.ts
              </div>
            </CardHeader>
            <CardContent className="relative overflow-x-auto p-0">
              <CopyButton text={codeExample2} />
              <SyntaxHighlighter
                language="typescript"
                style={vscDarkPlus}
                customStyle={{
                  margin: 0,
                  padding: "1.5rem",
                  paddingRight: "4rem",
                  background: "transparent",
                  fontSize: "0.875rem",
                  lineHeight: "1.6",
                }}
                showLineNumbers={false}
              >
                {codeExample2}
              </SyntaxHighlighter>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Footer */}
      <footer className="mx-auto max-w-[1200px] border-t border-border px-12 py-16">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="text-sm text-muted-foreground">
            MIT License © 2025 Tanmay Vaij
          </div>
          <ul className="flex gap-8">
            <li>
              <a
                href="https://github.com/tanmayvaij/mindloop-gemini"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://mindloop.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Documentation
              </a>
            </li>
            <li>
              <a
                href="https://www.npmjs.com/package/mindloop-gemini"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Package className="h-4 w-4" />
                npm Package
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
