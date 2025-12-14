"use client";

import { type MouseEvent } from "react";

interface LanguageDropdownProps {
  locale: string;
  setLocale: (l: "en" | "tr") => void;
}

export default function LanguageDropdown({ locale, setLocale }: LanguageDropdownProps) {
  function handleSelect(e: MouseEvent, newLocale: "en" | "tr") {
    e.preventDefault();
    setLocale(newLocale);
  }

  return (
    <div className="inline-flex items-center text-sm">
      <button
        onClick={(e) => handleSelect(e, "tr")}
        aria-pressed={locale === "tr"}
        aria-label="Türkçe"
        className={`px-1 ${locale === "tr" ? "font-medium" : "font-normal"} hover:opacity-90`}
        style={{ color: "var(--foreground)" }}
      >
        TR
      </button>

      <span className="px-2 select-none" style={{ color: "var(--foreground)" }}>|</span>

      <button
        onClick={(e) => handleSelect(e, "en")}
        aria-pressed={locale === "en"}
        aria-label="English"
        className={`px-1 ${locale === "en" ? "font-medium" : "font-normal"} hover:opacity-90`}
        style={{ color: "var(--foreground)" }}
      >
        EN
      </button>
    </div>
  );
}
