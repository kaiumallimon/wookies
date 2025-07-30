"use client";

import PerformanceChart from '../ui/PerformanceChart';

export default function PerformanceChartExample() {
  const chartData = [
    { label: "Client Retention", value: 90 },
    { label: "Budget Growth", value: 56 },
    { label: "ROI", value: 82 },
    { label: "Service Demand", value: 79 },
    { label: "Agency Growth", value: 65 }
  ];

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <PerformanceChart 
          data={chartData}
          title="Client Retention"
          subtitle="Key performance indicators"
          className="bg-white rounded-lg shadow-lg p-6 md:p-8"
        />
      </div>
    </div>
  );
} 