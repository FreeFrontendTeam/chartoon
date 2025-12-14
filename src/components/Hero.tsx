"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "../i18n/LocaleProvider";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="w-full max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 py-16">
      <div className="flex-1">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">{t("hero.title")}</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl">{t("hero.desc")}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/get-started"
            className="inline-flex items-center px-5 py-3 bg-foreground text-background rounded-full font-medium hover:opacity-95 border border-neutral-200 dark:border-neutral-700"
          >
            {t("hero.cta_start")}
          </Link>
        </div>
      </div>

      <div className="flex-1">
        <div className="relative w-full h-64 sm:h-[340px] rounded-2xl overflow-hidden shadow-md bg-gradient-to-br from-[#f6fbff] to-[#eef7ff] flex items-center justify-center">
          <div className="text-center px-6">
            <Image src="/file.svg" alt="chartoon" width={96} height={96} />
            <p className="mt-4 text-sm text-neutral-600">{t("hero.image_caption")}</p>
            <div
              className="mt-3 mx-auto w-4/5 h-32 bg-white/60 dark:bg-black/20 rounded-md border border-dashed border-neutral-200"
              data-chart-placeholder="hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
