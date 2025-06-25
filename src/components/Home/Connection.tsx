// src/components/DataFlowSection.tsx
"use client";

import React from "react";
import { Server, ArrowRight } from "lucide-react";
import MacDashboardWindow from "@/components/Home/HeroDashWindow";

const DataFlowSection: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center space-x-6 overflow-x-auto justify-center">
        
        {/* Only Odoo & PostgreSQL (with logos) + hint at more */}
        <div className="bg-gray-50 p-8 rounded-2xl flex-shrink-0">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-center p-4 space-x-2">
              <img
                src="/logos/odoo_logo.png"
                alt="Odoo"
                className="h-12"
              />
            </div>
            <div className="flex items-center justify-center p-4 space-x-2">
              <img
                src="/logos/postgres.png"
                alt="PostgreSQL"
                className="h-15"
              />
            </div>
            <span className="text-sm text-center text-gray-500">
              …and many more
            </span>
          </div>
        </div>

        {/* Arrow → API */}
        <ArrowRight className="w-8 h-8 text-gray-400 flex-shrink-0" />

        {/* API node */}
        <div className="flex flex-col items-center flex-shrink-0">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
            <Server className="w-8 h-8 text-byteloom-blue" />
          </div>
          <span className="mt-2 text-sm font-medium text-gray-800">
            API
          </span>
        </div>

        {/* Arrow → Mac dashboard */}
        <ArrowRight className="w-8 h-8 text-gray-400 flex-shrink-0" />

        {/* Mac window with smaller charts */}
        <div className="max-w-lg flex-shrink-0">
          <MacDashboardWindow />
        </div>
      </div>
    </div>
  </section>
);

export default DataFlowSection;
