"use client";

import { useTranslation } from "../i18n/LocaleProvider";

export default function Features() {
  const { t, messages } = useTranslation();
  const features = messages.features?.items ?? [];

  return (
    <section className="w-full max-w-6xl mx-auto py-12" id="features">
      <h2 className="text-2xl font-semibold mb-6">{t("features.heading")}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {features.map((f: { title: string; desc: string }) => (
          <div key={f.title} className="p-6 border rounded-lg">
            <h3 className="font-medium text-lg">{f.title}</h3>
            <p className="mt-2 text-sm text-neutral-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
