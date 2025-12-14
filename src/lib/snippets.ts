/**
 * Chart code snippets for all chart types
 * Centralized source of truth for example code
 */

import type { ChartId } from "./constants";

export const CHART_SNIPPETS: Record<ChartId, Record<string, string>> = {
  "get-started": {},
  bar: {
    "Vanilla JS": `// Create a bar chart with Chartoon (vanilla JS)
const el = document.querySelector('[data-chart-detail="bar"]');
const data = [ { label: 'A', value: 30 }, { label: 'B', value: 55 } ];

const chart = new Chartoon.BarChart(el, {
  data,
  width: 700,
  height: 320,
  colors: ['#1976d2']
});

chart.render();`,

    React: `// React example (functional component)
import { useEffect, useRef } from 'react';

export default function BarExample({ data }) {
  const ref = useRef();
  useEffect(() => {
    const chart = new Chartoon.BarChart(ref.current, { data, width: 700, height: 320, colors: ['#1976d2'] });
    chart.render();
    return () => chart.destroy && chart.destroy();
  }, [data]);
  return <div ref={ref} />;
}`,

    Vue: `<!-- Vue 3 component -->
<template>
  <div ref="el"></div>
</template>
<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue';
const el = ref(null);
onMounted(() => {
  const chart = new Chartoon.BarChart(el.value, { data: [{ label: 'A', value: 30 }, { label: 'B', value: 55 }], width:700, height:320 });
  chart.render();
  onBeforeUnmount(() => chart.destroy && chart.destroy());
});
</script>`,

    Svelte: `<!-- Svelte component -->
<script>
  import { onMount, onDestroy } from 'svelte';
  let el;
  onMount(() => {
    const chart = new Chartoon.BarChart(el, { data:[{ label:'A', value:30 }, { label:'B', value:55 }], width:700, height:320 });
    chart.render();
    onDestroy(() => chart.destroy && chart.destroy());
  });
</script>
<div bind:this={el}></div>`,
  },

  line: {
    "Vanilla JS": `// Create a line chart with Chartoon (vanilla JS)
const el = document.querySelector('[data-chart-detail="line"]');
const data = [ { x: 0, y: 4 }, { x: 1, y: 7 }, { x: 2, y: 3 } ];

const chart = new Chartoon.LineChart(el, { data, width: 720, height: 320, stroke: '#1976d2' });
chart.render();`,

    React: `import { useEffect, useRef } from 'react';
export default function LineExample({ data }) {
  const ref = useRef();
  useEffect(() => {
    const chart = new Chartoon.LineChart(ref.current, { data, width:720, height:320, stroke:'#1976d2' });
    chart.render();
    return () => chart.destroy && chart.destroy();
  }, [data]);
  return <div ref={ref} />;
}`,

    Vue: `<!-- Vue 3 component -->
<template>
  <div ref="el"></div>
</template>
<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue';
const el = ref(null);
onMounted(() => {
  const chart = new Chartoon.LineChart(el.value, { data:[{x:0,y:4},{x:1,y:7},{x:2,y:3}], width:720, height:320 });
  chart.render();
  onBeforeUnmount(() => chart.destroy && chart.destroy());
});
</script>`,

    Svelte: `<!-- Svelte component -->
<script>
  import { onMount, onDestroy } from 'svelte';
  let el;
  onMount(() => {
    const chart = new Chartoon.LineChart(el, { data:[{x:0,y:4},{x:1,y:7},{x:2,y:3}], width:720, height:320 });
    chart.render();
    onDestroy(() => chart.destroy && chart.destroy());
  });
</script>
<div bind:this={el}></div>`,
  },

  pie: {
    "Vanilla JS": `// Create a pie chart with Chartoon (vanilla JS)
const el = document.querySelector('[data-chart-detail="pie"]');
const data = [ { label: 'Cats', value: 40 }, { label: 'Dogs', value: 60 } ];

const chart = new Chartoon.PieChart(el, { data, size: 320, colors: ['#1976d2', '#60a5fa'] });
chart.render();`,

    React: `import { useEffect, useRef } from 'react';
export default function PieExample({ data }) {
  const ref = useRef();
  useEffect(() => {
    const chart = new Chartoon.PieChart(ref.current, { data, size:320, colors:['#1976d2','#60a5fa'] });
    chart.render();
    return () => chart.destroy && chart.destroy();
  }, [data]);
  return <div ref={ref} />;
}`,

    Vue: `<!-- Vue 3 component -->
<template>
  <div ref="el"></div>
</template>
<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue';
const el = ref(null);
onMounted(() => {
  const chart = new Chartoon.PieChart(el.value, { data:[{label:'Cats',value:40},{label:'Dogs',value:60}], size:320 });
  chart.render();
  onBeforeUnmount(() => chart.destroy && chart.destroy());
});
</script>`,

    Svelte: `<!-- Svelte component -->
<script>
  import { onMount, onDestroy } from 'svelte';
  let el;
  onMount(() => {
    const chart = new Chartoon.PieChart(el, { data:[{label:'Cats',value:40},{label:'Dogs',value:60}], size:320 });
    chart.render();
    onDestroy(() => chart.destroy && chart.destroy());
  });
</script>
<div bind:this={el}></div>`,
  },

  world: {
    "Vanilla JS": `// Create a world map chart with Chartoon (vanilla JS)
const el = document.querySelector('[data-chart-detail="world"]');
const data = [ /* geo + values */ ];

const chart = new Chartoon.WorldChart(el, { data, width:900, height:480, projection:'naturalEarth1' });
chart.render();`,

    React: `import { useEffect, useRef } from 'react';
export default function WorldExample({ data }) {
  const ref = useRef();
  useEffect(() => {
    const chart = new Chartoon.WorldChart(ref.current, { data, width:900, height:480 });
    chart.render();
    return () => chart.destroy && chart.destroy();
  }, [data]);
  return <div ref={ref} />;
}`,

    Vue: `<!-- Vue 3 component -->
<template>
  <div ref="el"></div>
</template>
<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue';
const el = ref(null);
onMounted(() => {
  const chart = new Chartoon.WorldChart(el.value, { data:[], width:900, height:480 });
  chart.render();
  onBeforeUnmount(() => chart.destroy && chart.destroy());
});
</script>`,

    Svelte: `<!-- Svelte component -->
<script>
  import { onMount, onDestroy } from 'svelte';
  let el;
  onMount(() => {
    const chart = new Chartoon.WorldChart(el, { data:[], width:900, height:480 });
    chart.render();
    onDestroy(() => chart.destroy && chart.destroy());
  });
</script>
<div bind:this={el}></div>`,
  },
};

/**
 * Get snippets for a specific chart type
 */
export function getChartSnippets(chartId: ChartId): Record<string, string> {
  return CHART_SNIPPETS[chartId] ?? {};
}
