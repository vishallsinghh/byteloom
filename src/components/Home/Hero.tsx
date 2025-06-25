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
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              AI Dashboards BI Analytics by<br />
              <span className="text-yellow-400">Byteloom</span><br />
                          </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Upscale your data analytics with AI-powered dashboards. Real-time data that's self-serve, secure, and scalable.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 text-white px-8 rounded-lg py-4 text-lg font-semibold hover:bg-gray-800 transition-all shadow-lg"
            >
              Start Free Trial
            </motion.button>
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
