// src/components/Hero.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import HeroDashboardWindow from "./HeroDashWindow";

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-cream to-cream-dark py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Text + Button */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <a
              href="https://techfinna.com"
              className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full mb-4"
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-blue-700 font-medium text-sm">
                Powered by Techneith.com
              </span>
            </a>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Transform Your{" "}
              <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-emerald-600 bg-clip-text text-transparent">
                Data Into BI Dashboards
              </span>{" "}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Upscale your data analytics with AI-powered dashboards in seconds. 
            </p>
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-blue-700 font-medium">
                  AI-Powered Analytics
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-violet-50 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
                <span className="text-violet-700 font-medium">
                  Smart Visualizations
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-emerald-50 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-emerald-700 font-medium">
                  Real-time Dashboards
                </span>
              </div>
            </div>
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 text-white px-8 rounded-lg py-4 text-lg font-semibold hover:bg-gray-800 transition-all shadow-lg"
            >
              Start Free Trial
            </motion.button> */}
          </motion.div>

          {/* Right Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <HeroDashboardWindow />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
