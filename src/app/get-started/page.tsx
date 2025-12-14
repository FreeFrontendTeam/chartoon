"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "../../i18n/LocaleProvider";
import { ChartId, FULL_CHART_ID } from "../../lib/constants";
import { getChartSnippets } from "../../lib/snippets";
import SideNavigation from "../../components/get-started/SideNavigation";
import GetStartedIntro from "../../components/get-started/GetStartedIntro";
import ChartDetailView from "../../components/get-started/ChartDetailView";

export default function GetStartedPage() {
  const { t, messages } = useTranslation();
  const charts = (messages.showcase?.charts ?? []) as Array<{ id: string; title: string }>;
  const [selected, setSelected] = useState<ChartId>("get-started");
  useEffect(() => {
    function parseSelectedChart(): ChartId | null {
      try {
        const params = new URLSearchParams(window.location.search);
        const chart = params.get("chart") ?? (window.location.hash ? window.location.hash.replace("#", "") : null);
        if (chart && (FULL_CHART_ID as readonly string[]).includes(chart)) return chart as ChartId;
      } catch {}
      return null;
    }

    const pre = parseSelectedChart();
    if (pre) setSelected(pre);
  }, []);

  const navItems = [
    { id: "get-started", label: t("getStarted.title") },
    ...charts.map((c) => ({ id: c.id, label: c.title })),
  ];

  const content =
    selected === "get-started" ? (
      <GetStartedIntro />
    ) : (
      (() => {
        const chartTitle = charts.find((c) => c.id === selected)?.title ?? selected;
        const snippets = getChartSnippets(selected);
        return <ChartDetailView chartId={selected} chartTitle={chartTitle} snippets={snippets} />;
      })()
    );

  return (
    <div className="min-h-screen font-sans text-foreground">
      <main className="px-6 max-w-6xl mx-auto py-12">
        <div className="flex flex-col lg:flex-row gap-6">
          <SideNavigation items={navItems} selected={selected} onSelect={(id) => setSelected(id as ChartId)} />
          <div className="flex-1 p-4">{content}</div>
        </div>
      </main>
    </div>
  );
}
