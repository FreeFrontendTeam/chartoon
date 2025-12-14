"use client";

import { useState } from "react";
import CodeBlock from "./CodeBlock";

type Snippets = Record<string, string>;

export default function CodeTabs({ snippets }: { snippets: Snippets }) {
  const keys = Object.keys(snippets);
  const [active, setActive] = useState(keys[0]);

  return (
    <div>
      <div className="flex gap-2 mb-3">
        {keys.map((k) => (
          <button
            key={k}
            onClick={() => setActive(k)}
            className={`px-3 py-1 rounded-full text-sm ${active === k ? "btn-primary" : "btn-outline"}`}
            aria-pressed={active === k}
          >
            {k}
          </button>
        ))}
      </div>
      <CodeBlock code={snippets[active]} language={mapLanguageToCodeLang(active)} />
    </div>
  );
}

function mapLanguageToCodeLang(label: string) {
  if (/react/i.test(label)) return "jsx";
  if (/vue/i.test(label)) return "vue";
  if (/svelte/i.test(label)) return "svelte";
  if (/vanilla|js|javascript/i.test(label)) return "javascript";
  return "javascript";
}
