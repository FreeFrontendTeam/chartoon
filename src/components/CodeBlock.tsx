"use client";

import { useState } from "react";
import { useTranslation } from "../i18n/LocaleProvider";

export default function CodeBlock({ code, language = "javascript" }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);
  const { t } = useTranslation();

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  }

  return (
    <div
      className="relative rounded-md border overflow-hidden"
      style={{ background: "var(--code-bg)", color: "var(--code-text)" }}
    >
      <div className="flex items-center justify-between px-3 py-2 border-b" style={{ background: "var(--code-header-bg)", color: "var(--code-header-text)" }}>
        <div className="text-xs">{language}</div>
        <button onClick={copy} className="text-xs px-2 py-1 rounded" style={{ background: "var(--code-btn-bg)", color: "var(--code-btn-text)" }}>
          {copied ? t("code.copied") : t("code.copy")}
        </button>
      </div>
      <pre className="p-4 overflow-auto text-sm leading-6 whitespace-pre-wrap">
        <code>{code}</code>
      </pre>
    </div>
  );
}
