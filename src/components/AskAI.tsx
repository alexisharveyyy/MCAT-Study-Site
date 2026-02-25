"use client";

import { useChat } from "@ai-sdk/react";
import { useRef, useEffect, useState } from "react";
import {
  Send,
  Trash2,
  BotMessageSquare,
  User,
  Lightbulb,
  Loader2,
} from "lucide-react";

const EXAMPLE_QUESTIONS = [
  "Explain the difference between competitive and noncompetitive enzyme inhibition.",
  "How does the electron transport chain work in oxidative phosphorylation?",
  "What is the difference between classical and operant conditioning?",
  "Explain Bernoulli's equation and how it applies to blood flow.",
  "Walk me through how to solve a Hardy-Weinberg equilibrium problem.",
  "What are the stages of meiosis and how do they differ from mitosis?",
];

export default function AskAI() {
  const { messages, sendMessage, status, setMessages } = useChat();
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const isLoading = status === "submitted" || status === "streaming";

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;
    const text = input.trim();
    setInput("");
    sendMessage({ text });
  };

  const handleExampleClick = (question: string) => {
    if (isLoading) return;
    setInput("");
    sendMessage({ text: question });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  return (
    <div
      className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col"
      style={{ height: "calc(100vh - 64px)" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4 shrink-0">
        <div>
          <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <BotMessageSquare className="w-6 h-6 text-blue-600" />
            MCAT AI Tutor
          </h1>
          <p className="text-sm text-gray-500 mt-0.5">
            Ask any MCAT-related question and get an instant explanation.
          </p>
        </div>
        {messages.length > 0 && (
          <button
            onClick={clearChat}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-red-600 bg-gray-100 hover:bg-red-50 rounded-lg transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
            Clear
          </button>
        )}
      </div>

      {/* Messages area */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto min-h-0 space-y-4 pb-4"
      >
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-4">
              <Lightbulb className="w-8 h-8 text-blue-500" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900 mb-1">
              What would you like to learn?
            </h2>
            <p className="text-sm text-gray-500 mb-6 max-w-md">
              Ask about any MCAT topic -- biology, chemistry, physics,
              psychology, sociology, or reasoning strategies.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-lg">
              {EXAMPLE_QUESTIONS.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleExampleClick(q)}
                  className="text-left px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-colors leading-snug"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((message) => {
          const textContent = message.parts
            ?.filter((p): p is { type: "text"; text: string } => p.type === "text")
            .map((p) => p.text)
            .join("") || "";

          return (
            <div key={message.id} className="flex gap-3">
              <div className="shrink-0 mt-0.5">
                {message.role === "user" ? (
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="w-4 h-4 text-gray-600" />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <BotMessageSquare className="w-4 h-4 text-blue-600" />
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-gray-500 mb-1">
                  {message.role === "user" ? "You" : "AI Tutor"}
                </p>
                <div
                  className={`rounded-xl px-4 py-3 text-sm leading-relaxed ${
                    message.role === "user"
                      ? "bg-gray-100 text-gray-800"
                      : "bg-white border border-gray-200 text-gray-800"
                  }`}
                >
                  <MessageContent content={textContent} />
                </div>
              </div>
            </div>
          );
        })}

        {isLoading &&
          messages.length > 0 &&
          messages[messages.length - 1]?.role === "user" && (
            <div className="flex gap-3">
              <div className="shrink-0 mt-0.5">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <BotMessageSquare className="w-4 h-4 text-blue-600" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-gray-500 mb-1">
                  AI Tutor
                </p>
                <div className="rounded-xl px-4 py-3 bg-white border border-gray-200">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Thinking...
                  </div>
                </div>
              </div>
            </div>
          )}
      </div>

      {/* Input area */}
      <div className="shrink-0 pt-4 border-t border-gray-200">
        <form onSubmit={handleSubmit} className="relative">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask an MCAT question..."
            rows={1}
            className="w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-3 pr-12 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            style={{ minHeight: "48px", maxHeight: "120px" }}
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = "48px";
              target.style.height =
                Math.min(target.scrollHeight, 120) + "px";
            }}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="absolute right-2 bottom-2 p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
        <p className="text-xs text-gray-400 mt-2 text-center">
          Responses are AI-generated. Always verify with your study materials.
        </p>
      </div>
    </div>
  );
}

function MessageContent({ content }: { content: string }) {
  if (!content) return null;

  return (
    <>
      {content.split("\n").map((line, i) => {
        if (line.startsWith("### ")) {
          return (
            <h3 key={i} className="text-sm font-semibold mt-3 mb-1">
              {renderInline(line.slice(4))}
            </h3>
          );
        }
        if (line.startsWith("## ")) {
          return (
            <h2 key={i} className="text-base font-semibold mt-3 mb-1">
              {renderInline(line.slice(3))}
            </h2>
          );
        }
        if (line.startsWith("# ")) {
          return (
            <h1 key={i} className="text-lg font-semibold mt-3 mb-1">
              {renderInline(line.slice(2))}
            </h1>
          );
        }
        if (/^\d+\.\s/.test(line)) {
          return (
            <div key={i} className="ml-4 mb-0.5">
              {renderInline(line)}
            </div>
          );
        }
        if (line.startsWith("- ") || line.startsWith("* ")) {
          return (
            <div key={i} className="ml-4 mb-0.5 flex gap-1.5">
              <span className="text-gray-400 shrink-0">--</span>
              <span>{renderInline(line.slice(2))}</span>
            </div>
          );
        }
        if (line.trim() === "") {
          return <div key={i} className="h-2" />;
        }
        return (
          <p key={i} className="mb-1">
            {renderInline(line)}
          </p>
        );
      })}
    </>
  );
}

function renderInline(text: string) {
  const parts = text.split(/(\*\*.*?\*\*|`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-gray-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={i}
          className="text-blue-700 bg-blue-50 px-1 py-0.5 rounded text-xs"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return <span key={i}>{part}</span>;
  });
}
