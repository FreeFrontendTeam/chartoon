interface ChartPlaceholderProps {
  chartId: string;
  title: string;
  height?: string;
}

export default function ChartPlaceholder({ 
  chartId, 
  title, 
  height = "h-80" 
}: ChartPlaceholderProps) {
  return (
    <div
      className={`w-full ${height} rounded-md bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center`}
      data-chart-detail={chartId}
    >
      <span className="text-neutral-500">{title} will render here</span>
    </div>
  );
}
