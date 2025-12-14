"use client";

import Link from "next/link";
import { useTranslation } from "../i18n/LocaleProvider";

export default function Showcase() {
  const { t, messages } = useTranslation();
  const charts = messages.showcase?.charts ?? [];

  return (
    <section className="w-full max-w-6xl mx-auto py-12" id="showcase">
      <h2 className="text-2xl font-semibold mb-6">{t("showcase.heading")}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {charts.map((c: { id: string; href: string; title: string }) => (
          <Link key={c.id} href={c.href} className="block p-4 border rounded-lg bg-white/60 dark:bg-black/10 hover:shadow-md transition-shadow">
            <h4 className="font-medium mb-3">{c.title}</h4>
            <div
              className="w-full h-48 rounded-md bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center"
              data-chart-placeholder={c.id}
            >
              <span className="text-neutral-500">{c.title} {t("showcase.placeholder_suffix")}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
