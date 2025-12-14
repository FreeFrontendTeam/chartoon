"use client";

import { useTranslation } from "../i18n/LocaleProvider";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t mt-12 pt-8 pb-12">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm">{t("footer.copyright", { year })}</div>
        <div className="flex gap-4 text-sm">
          <a href="#github" className="hover:underline">{t("footer.links.github")}</a>
          <a href="#license" className="hover:underline">{t("footer.links.license")}</a>
        </div>
      </div>
    </footer>
  );
}
