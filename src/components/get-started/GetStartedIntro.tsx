import { useTranslation } from "../../i18n/LocaleProvider";

export default function GetStartedIntro() {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{t("getStarted.title")}</h1>
      <p className="mb-6 text-neutral-600">{t("getStarted.description")}</p>

      <section className="mb-6">
        <h2 className="font-medium mb-2">{t("getStarted.installTitle")}</h2>
        <div className="rounded-md bg-neutral-100 dark:bg-neutral-900 p-4 font-mono text-sm">
          <pre>{t("getStarted.installCommand")}</pre>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="font-medium mb-2">{t("getStarted.usageTitle")}</h2>
        <div className="rounded-md bg-neutral-100 dark:bg-neutral-900 p-4 font-mono text-sm">
          <pre>{t("getStarted.usageCode")}</pre>
        </div>
      </section>

      <p className="text-sm text-neutral-500">{t("getStarted.description")}</p>
    </div>
  );
}
