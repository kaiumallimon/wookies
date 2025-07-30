"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function HomeAboutUs() {
  const chartData = {
    labels: ["Client Retention", "Budget Growth", "ROI", "Service Demand", "Agency Growth"],
    datasets: [
      {
        label: "Performance Metrics (%)",
        data: [90, 56, 82, 79, 65],
        backgroundColor: [
          "grey", // blue
        ],
        borderColor: [
          "transparent",
        ],
        borderWidth: 0,
        borderRadius: 0,
        borderSkipped: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "white",
        bodyColor: "white",
        borderColor: "rgba(255, 255, 255, 0.2)",
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          label: function (context: any) {
            return `${context.parsed.y}%`;
          }
        }
      },
      customTopBorder: {
        id: 'customTopBorder',
        afterDraw: (chart: any) => {
          const ctx = chart.ctx;
          const meta = chart.getDatasetMeta(0);

          meta.data.forEach((bar: any, index: number) => {
            const barData = chart.data.datasets[0].data[index];
            const maxValue = Math.max(...chart.data.datasets[0].data);
            const barHeight = (barData / maxValue) * meta.data[0].height;

            ctx.save();
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(bar.x - bar.width / 2, bar.y - barHeight);
            ctx.lineTo(bar.x + bar.width / 2, bar.y - barHeight);
            ctx.stroke();
            ctx.restore();
          });
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: true,
        },
        border: {
          display: true,
          color: "rgba(255, 255, 255, 0.3)",
          width: 2,
        },
        ticks: {
          color: "white",
          font: {
            size: 10,
            weight: "normal" as const,
          },
          maxRotation: 45,
          minRotation: 0,
        },
      },
      y: {
        display: false,
        beginAtZero: true,
        max: 100,
        grid: {
          display: false,
        },
        ticks: {
          display: true,
        },
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center pt-25 pb-10 md:pt-35 md:pb-15 mx-5">
      <div className="max-w-6xl mx-auto relative w-full">
        
        
        <div className="flex flex-col md:flex md:flex-row md:justify-between pt-8 gap-4">
          <h1 className="text-3xl font-bold text-white">About Us</h1>
          <div className="md:w-[50%] flex flex-col gap-3">
            <p className="text-sm text-white">
              At WOOKIES, we specialize in innovative digital marketing strategies that dive results. Our team is dedicated to helping business grow and success online.
            </p>
            <p className="text-sm text-white/60">
              With tailored solutions and a focus on measurable outcomes, we empower brands to connect with their audience and achieve their goals in the digital landscape.
            </p>
          </div>
        </div>

        <div className="h-60 md:hidden lg:hidden">
          <Bar data={chartData} options={options} className="" />
        </div>
        
        <div className="hidden md:block md:h-80">
          <Bar data={chartData} options={options} className="" />
        </div>
      </div>
    </div>
  );
}
