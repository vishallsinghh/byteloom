// src/components/MacDashboardWindow.tsx
"use client";

import React, { FC } from "react";
import dynamic from "next/dynamic";
import type { ApexOptions } from "apexcharts";

// load the React wrapper without SSR
const ApexCharts = dynamic(
  () => import("react-apexcharts"),
  { ssr: false }
);

// --- chart configurations ---

const charts: {
  id: string;
  title: string;
  type: "line" | "bar" | "donut";
  categories?: string[];
  series: ApexOptions["series"];
  options: ApexOptions;
}[] = [
  {
    id: "revenue",
    title: "Revenue Trends",
    type: "line",
    categories: ["Jan", "Mar", "May", "Jul"],
    series: [
      { name: "Pro", data: [5, 9, 7, 11] },
      { name: "Starter", data: [3, 6, 4, 8] },
    ],
    options: {
      chart: { id: "revenue", animations: { enabled: true,  speed: 1200 }, toolbar: { show: false } },
      stroke: { curve: "smooth", width: 2 },
      xaxis: { categories: ["Jan", "Mar", "May", "Jul"] },
      colors: ["#0284C7", "#9333EA"],
      dataLabels: { enabled: false },
      legend: { position: "bottom" },
      grid: { padding: { left: 8, right: 8 } },
      tooltip: { theme: "light" },
    },
  },
  {
    id: "leads",
    title: "Leads by Region",
    type: "bar",
    categories: ["NA", "Europe", "MEA", "APAC", "LatAm"],
    series: [
      { name: "Pro", data: [1000, 600, 800, 200, 300] },
      { name: "Starter", data: [900, 700, 500, 600, 400] },
    ],
    options: {
      chart: { id: "leads", type: "bar", animations: { enabled: true,  speed: 1200 }, toolbar: { show: false } },
      plotOptions: { bar: { columnWidth: "45%", borderRadius: 4 } },
      xaxis: { categories: ["NA", "Europe", "MEA", "APAC", "LatAm"] },
      colors: ["#0284C7", "#9333EA"],
      dataLabels: { enabled: false },
      legend: { position: "bottom" },
      grid: { padding: { left: 8, right: 8 } },
      tooltip: { theme: "light" },
    },
  },
  {
    id: "funnel",
    title: "Sales Funnel",
    type: "donut",
    series: [1000, 600, 200, 50],
    options: {
      chart: { id: "funnel", type: "donut", animations: { enabled: true, speed: 1200 }, toolbar: { show: false } },
      colors: ["#0284C7", "#9333EA", "#FACC15", "#DC2626"],
      labels: ["Qualified", "Demo", "Negotiation", "Contract Signed"],
      legend: { position: "bottom" },
      plotOptions: { 
        pie: { 
          donut: { labels: { show: false } }, 
          expandOnClick: false 
        } 
      },
      dataLabels: { enabled: false },
      tooltip: { theme: "light" },
    },
  },
];

const MacDashboardWindow: FC = () => (
  <div className="flex items-start justify-center p-4">
    <div className="w-full max-w-6xl rounded-lg shadow-lg border border-gray-200">
      {/* Mac Header */}
      <div className="flex items-center justify-between bg-gray-900 px-4 py-2 rounded-t-lg">
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full" />
          <span className="w-3 h-3 bg-yellow-500 rounded-full" />
          <span className="w-3 h-3 bg-green-500 rounded-full" />
          <span className="ml-2 font-mono text-sm text-white">byteloom.ai</span>
        </div>
        <div className="flex items-center space-x-2">
          <button className="text-gray-400 text-sm hover:text-gray-300">EN ▼</button>
          <button className="px-2 py-1 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50">
            Present
          </button>
          <button className="px-2 py-1 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50">
            Share
          </button>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
  {charts.map((cfg, idx) => (
    <div
      key={cfg.id}
      className={[
        // your normal card styles
        "bg-white p-4 rounded shadow flex flex-col",

        // but on the 3rd chart...
        idx === 2 && 
          // span both columns, cap its width and center it
          "col-span-2 w-full max-w-md mx-auto"
      ]
        // filter out the falsy entry
        .filter(Boolean)
        .join(" ")
      }
    >
      <h3 className="text-sm font-medium mb-2">{cfg.title}</h3>
      <div className="flex-1 min-h-[12rem]">
        <ApexCharts
          series={cfg.series!}
          options={cfg.options}
          type={cfg.type}
          height="100%"
        />
      </div>
    </div>
  ))}
</div>

    </div>
  </div>
);

export default MacDashboardWindow;
