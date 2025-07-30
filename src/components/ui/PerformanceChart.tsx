"use client";

import React from 'react';

interface PerformanceMetric {
  label: string;
  value: number;
}

interface PerformanceChartProps {
  data: PerformanceMetric[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function PerformanceChart({ 
  data, 
  title = "Client Retention", 
  subtitle = "Performance metrics overview",
  className = "" 
}: PerformanceChartProps) {
  const maxValue = Math.max(...data.map(item => item.value));

  return (
    <div className={`w-full ${className}`}>
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600 text-sm md:text-base">{subtitle}</p>
      </div>
      
      <div className="flex items-end justify-between gap-2 md:gap-4 lg:gap-6 h-64 md:h-80">
        {data.map((metric, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            {/* Percentage value above bar */}
            <div className="text-sm md:text-base font-semibold text-gray-900 mb-2">
              {metric.value}%
            </div>
            
            {/* Bar container */}
            <div className="w-full flex justify-center">
              <div className="relative w-full max-w-16 md:max-w-20">
                {/* Bar */}
                <div 
                  className="w-full bg-gray-200 rounded-t-sm transition-all duration-300 hover:bg-gray-300"
                  style={{ 
                    height: `${(metric.value / maxValue) * 100}%`,
                    minHeight: '20px'
                  }}
                />
                
                {/* Green underline */}
                <div className="w-full h-0.5 bg-green-600 mt-1" />
              </div>
            </div>
            
            {/* Label below bar */}
            <div className="text-xs md:text-sm text-gray-700 text-center mt-2 leading-tight">
              {metric.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 