'use client';

import Link from 'next/link';
// import { Globe } from '@/components/ui/globe';
import Globe  from '@/components/AboutUs/globe'
import { Card } from '@/components/ui/card';
import { motion } from "framer-motion";
import React from 'react';
import Navbar from '@/layout/Navbar';
import Footer from '@/layout/Footer';
import HeroDashboardWindow from '@/components/Home/HeroDashWindow';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
    <Navbar />
      {/* Hero Section */}
      <section className="relative overflow-hidden py-4 px-4">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle, #e2e8f0 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                {/* <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full mb-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <span className="text-blue-700 font-medium text-sm">Powered by ByteLoom.ai</span>
                </div> */}
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  AI Dashboards, <br></br> BI Analytics by {" "}
                  <span className="bg-gradient-to-r from-sky-600 via-violet-600 to-blue-600 bg-clip-text text-transparent">
                    Byteloom

                  </span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  ByteLoom.ai revolutionizes business intelligence by seamlessly connecting your databases
                  to advanced AI models, creating intelligent dashboards that provide actionable insights
                  from your data automatically.
                </p>
                <motion.button
                              whileHover={{ scale: 1.05 }}
                              className="bg-gray-900 text-white px-8 rounded-lg py-4 text-lg font-semibold hover:bg-gray-800 transition-all shadow-lg"
                            >
                              Start Free Trial
                            </motion.button>
              </div>

              {/* <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <span className="text-blue-700 font-medium">AI-Powered Analytics</span>
                </div>
                <div className="flex items-center space-x-2 bg-violet-50 px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
                  <span className="text-violet-700 font-medium">Smart Visualizations</span>
                </div>
                <div className="flex items-center space-x-2 bg-emerald-50 px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-emerald-700 font-medium">Real-time Dashboards</span>
                </div>
              </div> */}
            </div>

            {/* Globe Visualization */}
            <div className="flex justify-center lg:justify-end">
              <Globe  />
            </div>
          </div>
        </div>
      </section>

      {/* About ByteLoom.ai Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-slate-900">About ByteLoom.ai</h2>
                <p className="text-xl text-slate-600 leading-relaxed">
                  ByteLoom.ai is a cutting-edge AI-powered business intelligence platform developed by TechFinna,
                  a team with extensive expertise in creating powerful Power BI dashboards for numerous clients across
                  various industries.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  With years of experience in business intelligence and data visualization, we recognized the need
                  for a more intelligent, automated approach to dashboard creation. ByteLoom.ai represents the
                  evolution of traditional BI tools, integrating advanced AI capabilities to automatically
                  analyze data patterns and generate meaningful insights.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-slate-900">Our Expertise</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                    <span className="text-slate-600">Power BI Specialists</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-violet-500 rounded-full mt-2" />
                    <span className="text-slate-600">AI/ML Integration</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2" />
                    <span className="text-slate-600">Database Architecture</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2" />
                    <span className="text-slate-600">Data Visualization</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">TechFinna Legacy</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Enterprise Clients Served</span>
                    <span className="font-bold text-blue-600">200+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Power BI Dashboards Created</span>
                    <span className="font-bold text-violet-600">1,500+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Data Sources Integrated</span>
                    <span className="font-bold text-emerald-600">50+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Years of Experience</span>
                    <span className="font-bold text-orange-600">8+</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-violet-50 rounded-2xl p-6">
                <h4 className="font-semibold text-slate-900 mb-3">Why We Built ByteLoom.ai</h4>
                <p className="text-slate-600">
                  After creating hundreds of custom dashboards, we realized businesses needed a smarter,
                  faster way to get insights from their data. ByteLoom.ai automates the entire process,
                  from data connection to insight generation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-slate-900">Our Mission</h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            To democratize business intelligence by combining the power of AI with our proven expertise
            in data visualization. We make advanced analytics accessible to every business, enabling
            data-driven decisions without requiring technical expertise.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-violet-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Lightning Fast</h3>
              <p className="text-slate-600">
                Process and analyze massive datasets in seconds with our optimized AI algorithms.
              </p>
            </div>
            <div className="group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-violet-500 to-emerald-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Intelligent</h3>
              <p className="text-slate-600">
                Our LLM models understand your data context and generate meaningful insights automatically.
              </p>
            </div>
            <div className="group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Secure</h3>
              <p className="text-slate-600">
                Enterprise-grade security ensures your sensitive business data remains protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Powerful Platform Features</h2>
            <p className="text-xl text-slate-600">Everything you need to transform your data into actionable insights</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Database Integration</h3>
                    <p className="text-slate-600">Seamlessly connect to Odoo, PostgreSQL, and other popular databases. Import your existing data with just a few clicks.</p>
                  </div>
                </div>
              </Card>
              <Card className="border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">AI-Generated Charts</h3>
                    <p className="text-slate-600">Our advanced LLM models analyze your data patterns and automatically generate relevant charts, KPIs, and visualizations.</p>
                  </div>
                </div>
              </Card>
              <Card className="border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Dashboard Sharing</h3>
                    <p className="text-slate-600">Create beautiful dashboards and share them with your team or stakeholders with customizable permissions and access controls.</p>
                  </div>
                </div>
              </Card>
            </div>
            {/* Realistic Dashboard Mockup - 1st Dashboard*/}
            {/* <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 relative overflow-hidden shadow-2xl">
                <div className="bg-slate-800/50 rounded-xl p-4 mb-4 border border-slate-700">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-white font-semibold text-sm">Sales Analytics Dashboard</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-xs">Live Data</span>
                    </div>
                  </div>
                  <div className="h-16 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-lg relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-full h-full flex items-end space-x-1 px-2">
                      {[
                        '60%', '80%', '45%', '90%', '75%', '55%', '85%',
                      ].map((h, i) => (
                        <div key={i} className={`w-2 rounded-t ${i % 2 === 0 ? 'bg-blue-400' : 'bg-violet-400'}`} style={{ height: h }} />
                      ))}
                    </div>
                    <div className="absolute top-2 right-2 text-xs text-white/80">$2.4M</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
                    <div className="text-slate-400 text-xs mb-1">Total Revenue</div>
                    <div className="text-emerald-400 text-lg font-bold">$847K</div>
                    <div className="text-emerald-400 text-xs">↑ 12.5%</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
                    <div className="text-slate-400 text-xs mb-1">Active Users</div>
                    <div className="text-blue-400 text-lg font-bold">12.4K</div>
                    <div className="text-blue-400 text-xs">↑ 8.2%</div>
                  </div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
                  <div className="text-slate-400 text-xs mb-3">Performance by Region</div>
                  <div className="space-y-2">
                    {[
                      { name: 'North America', pct: '45%', color: 'violet-400' },
                      { name: 'Europe', pct: '32%', color: 'blue-400' },
                      { name: 'Asia Pacific', pct: '23%', color: 'emerald-400' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full bg-${item.color}`}></div>
                          <span className="text-white text-xs">{item.name}</span>
                        </div>
                        <span className={`text-${item.color} text-xs`}>{item.pct}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full px-3 py-1">
                  <span className="text-white text-xs font-medium">AI Generated</span>
                </div>
                <div className="absolute top-6 right-6 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                <div className="absolute top-16 right-8 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-10 right-12 w-1 h-1 bg-green-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
              </div>
            </div> */}
            <HeroDashboardWindow />
          </div>
        </div>
      </section>

      {/* How ByteLoom.ai Works */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-slate-900">How ByteLoom.ai Transforms Your Data Workflow</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From database connection to intelligent insights in minutes, not months.
              Experience the evolution of business intelligence.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: '1. Connect Your Data',
                desc: 'Seamlessly integrate with Odoo, PostgreSQL, MySQL, and 50+ other data sources. Our intelligent connectors automatically map your database schema and relationships.',
                iconPath: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4',
                gradient: 'from-blue-500 to-blue-600',
              },
              {
                title: '2. AI Analyzes Patterns',
                desc: 'Our advanced LLM models automatically discover data relationships, identify trends, and generate meaningful KPIs based on your business context and industry best practices.',
                iconPath: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
                gradient: 'from-violet-500 to-violet-600',
              },
              {
                title: '3. Generate Smart Dashboards',
                desc: 'Instantly create beautiful, interactive dashboards with intelligent visualizations. Share with your team, customize as needed, and enjoy real-time insights.',
                iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z',
                gradient: 'from-emerald-500 to-emerald-600',
              },
            ].map((step, i) => (
              <div key={i} className="text-center space-y-6">
                <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center`}>
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={step.iconPath} />
                  </svg>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                  <p className="text-slate-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 bg-gradient-to-br from-blue-50 to-violet-50 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">The Future of Business Intelligence</h3>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto mb-8">
              ByteLoom.ai represents years of expertise distilled into an intelligent platform.
              We've taken everything we learned from creating custom Power BI solutions and
              automated it with cutting-edge AI technology, making enterprise-level analytics
              accessible to businesses of all sizes.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600">
              {['No Technical Expertise Required','Enterprise-Grade Security','Real-Time Data Processing'].map((item, idx) => (
                <span key={idx} className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${
                    idx === 0 ? 'bg-blue-500' : idx === 1 ? 'bg-violet-500' : 'bg-emerald-500'
                  }`} />
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      {/* <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-slate-900">Built by Data Enthusiasts</h2>
            <p className="text-xl text-slate-600">
              The TechFinna team combines years of Power BI expertise with cutting-edge AI research
              to create the most intuitive analytics platform for modern businesses.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '50M+', label: 'Data Points Processed', color: 'blue-600' },
              { value: '200+', label: 'Enterprise Clients', color: 'violet-600' },
              { value: '99.9%', label: 'Uptime Guarantee', color: 'emerald-600' },
              { value: '24/7', label: 'Expert Support', color: 'orange-600' },
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-2">
                <div className={`text-3xl font-bold text-${stat.color}`}>{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <Footer />
    </div>
  );
}
