declare module '../components/ui/PerformanceChart' {
  export interface PerformanceMetric {
    label: string;
    value: number;
  }

  export interface PerformanceChartProps {
    data: PerformanceMetric[];
    title?: string;
    subtitle?: string;
    className?: string;
  }

  export default function PerformanceChart(props: PerformanceChartProps): JSX.Element;
} 