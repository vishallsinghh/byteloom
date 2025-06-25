"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MacWindow from "@/components/Home/MacWindow";
import {
  BarChart3,
  PieChart,
  Database,
  Server,
  TrendingUp,
  ArrowRight,
  LineChart,
  Circle,
  Table,
  Check,
} from "lucide-react";

const Features = () => {
  const [activeFeature, setActiveFeature] = useState("integration");
  const features = {
    integration: {
      title: "Free Sign-Up & Data Connection",
      description:
        "Create your account and connect data sources like PostgreSQL or Odoo in just a few clicks.",
      image: "integration",
    },
    design: {
      title: "Build & Fine-Tune Datasets",
      description:
        "Select tables, apply filters, and prepare your data for AI-powered dashboard generation.",
      image: "design",
    },
    ai: {
      title: "View & Customize AI-Generated Charts",
      description:
        "Explore and edit bar, line, pie, scatter, bubble, polar, and radar charts created by our AI engine.",
      image: "ai",
    },
    reports: {
      title: "Assemble Interactive Dashboards",
      description:
        "Combine KPIs and charts into dynamic dashboards and rearrange them however you like.",
      image: "reports",
    },
  };

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Boost your business with
              <br />
              <span className="text-byteloom-blue">powerful analytics</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              {Object.entries(features).map(([key, feature]) => (
                <div
                  key={key}
                  onClick={() => setActiveFeature(key)}
                  className={`border-l-4 pl-6 cursor-pointer transition-all duration-300 ${
                    activeFeature === key
                      ? "border-byteloom-blue opacity-100"
                      : "border-gray-300 opacity-50 hover:opacity-75"
                  }`}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="transition-all duration-500">
              <MacWindow title="byteloom.ai">
                <div className="p-6 bg-gray-50 min-h-[400px]">
                  {activeFeature === "integration" && (
                    <div className="animate-fade-in-up text-center">
                      <h4 className="text-lg font-semibold mb-4 text-gray-800">
                        Sign Up & Connect
                      </h4>
                      <Button className="mb-6 px-6 py-3">
                        Create Your Free Account
                      </Button>
                      <div className="grid grid-cols-2 gap-4">
                        <Card className="p-6 flex flex-col cursor-pointer items-center justify-center">
                          <Database size={48} className="text-blue-600 mb-2" />
                          <span className="text-sm text-gray-700">
                            PostgreSQL
                          </span>
                        </Card>
                        <Card className="p-6 flex flex-col cursor-pointer items-center justify-center">
                          <Server size={48} className="text-green-600 mb-2" />
                          <span className="text-sm text-gray-700">Odoo</span>
                        </Card>
                      </div>
                    </div>
                  )}

                  {activeFeature === "design" && (
                    <div className="animate-fade-in-up text-center space-y-6">
                      <h4 className="text-lg font-semibold text-gray-800">
                        Build & Connect Your Tables
                      </h4>
                      <p className="text-gray-600">
                        Here you can create connections between tables and
                        fine-tune the data you feed to your AI.
                      </p>

                      {/* Relation preview table */}
                      <div className="overflow-x-auto mx-auto max-w-md">
                        <table className="min-w-full text-left text-sm bg-white shadow-sm">
                          <thead className="border-b bg-gray-50">
                            <tr>
                              <th className="px-4 py-2">From Table</th>
                              <th className="px-4 py-2">To Table</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <td className="px-4 py-2">account_account</td>
                              <td className="px-4 py-2">res_currency</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-2">res_currency</td>
                              <td className="px-4 py-2">res_users</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      {/* Flow of cards with arrows */}
                      <div className="flex items-center justify-center space-x-4">
                        <Card className="p-4 border-2 border-dashed border-gray-300">
                          <div className="text-sm font-medium">
                            account_account
                          </div>
                        </Card>

                        <ArrowRight size={24} className="text-gray-400" />

                        <Card className="p-4 border-2 border-dashed border-gray-300">
                          <div className="text-sm font-medium">
                            res_currency
                          </div>
                        </Card>

                        <ArrowRight size={24} className="text-gray-400" />

                        <Card className="p-4 border-2 border-dashed border-gray-300">
                          <div className="text-sm font-medium">res_users</div>
                        </Card>
                      </div>
                    </div>
                  )}

                  {activeFeature === "ai" && (
                    <div className="animate-fade-in-up flex flex-col lg:flex-row items-start gap-8">
                      {/* Chart picker */}
                      <Card className="w-64 p-4 bg-white shadow-lg">
                        <h5 className="text-sm font-semibold mb-4">
                          Add Chart
                        </h5>
                        <div className="space-y-2 text-sm">
                          <button className="flex items-center w-full p-2 hover:bg-gray-100 rounded">
                            <BarChart3 size={16} className="mr-2" /> Bar Chart
                          </button>
                          <button className="flex items-center w-full p-2 hover:bg-gray-100 rounded">
                            <LineChart size={16} className="mr-2" /> Line Chart
                          </button>
                          <button className="flex items-center w-full p-2 hover:bg-gray-100 rounded">
                            <PieChart size={16} className="mr-2" /> Pie Chart
                          </button>
                          <button className="flex items-center w-full p-2 hover:bg-gray-100 rounded">
                            <Circle size={16} className="mr-2" /> Bubble Chart
                          </button>
                        </div>
                      </Card>

                      {/* Workspace */}
                      <div className="flex-1 border-2 border-dashed border-gray-300 p-6 flex flex-col items-center justify-center space-y-4">
                        <BarChart3 size={32} className="text-gray-400" />
                        <h4 className="text-lg font-semibold text-gray-800">
                          Build visuals with your data
                        </h4>
                        <p className="text-sm text-gray-600">
                          Drag, resize, and configure your charts.
                        </p>

                        <div className="flex items-start space-x-6">
                          <Table size={24} className="text-gray-500" />
                          <ul className="space-y-2 text-sm text-left">
                            <li className="flex items-center">
                              <Check
                                size={16}
                                className="text-green-600 mr-2"
                              />{" "}
                              Fields
                            </li>
                            <li className="flex items-center">
                              <Check
                                size={16}
                                className="text-green-600 mr-2"
                              />{" "}
                              Values
                            </li>
                            <li className="flex items-center">
                              <Check
                                size={16}
                                className="text-green-600 mr-2"
                              />{" "}
                              Filters
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeFeature === "reports" && (
                    <div className="animate-fade-in-up space-y-6">
                      <h4 className="text-lg font-semibold text-gray-800">
                        Your AI-Generated Dashboard Preview
                      </h4>

                      {/* KPI Cards */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Card className="p-4 text-center">
                          <div className="text-2xl font-bold">772</div>
                          <div className="text-sm text-gray-500">
                            Avg Order Line Price
                          </div>
                        </Card>
                        <Card className="p-4 text-center">
                          <div className="text-2xl font-bold">26</div>
                          <div className="text-sm text-gray-500">
                            Total Sales Orders
                          </div>
                        </Card>
                        <Card className="p-4 text-center">
                          <div className="text-2xl font-bold">116k</div>
                          <div className="text-sm text-gray-500">
                            Total Revenue
                          </div>
                        </Card>
                        <Card className="p-4 text-center">
                          <div className="text-2xl font-bold">14</div>
                          <div className="text-sm text-gray-500">
                            Unique Products Sold
                          </div>
                        </Card>
                      </div>

                      {/* Chart Previews with lucide-react icons */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Card className="p-4 flex flex-col items-center">
                          <BarChart3 size={48} className="text-blue-600 mb-3" />
                          <span className="font-medium text-gray-800 mb-1">
                            Revenue by Company
                          </span>
                          <span className="text-xs text-gray-500">
                            sum(sale_order)
                          </span>
                        </Card>

                        <Card className="p-4 flex flex-col items-center">
                          <PieChart size={48} className="text-green-600 mb-3" />
                          <span className="font-medium text-gray-800 mb-1">
                            Partners Distribution
                          </span>
                          <span className="text-xs text-gray-500">
                            res_partner_name
                          </span>
                        </Card>

                        <Card className="p-4 flex flex-col items-center">
                          <TrendingUp
                            size={48}
                            className="text-purple-600 mb-3"
                          />
                          <span className="font-medium text-gray-800 mb-1">
                            Order Price vs Unit
                          </span>
                          <span className="text-xs text-gray-500">
                            sale_order_total
                          </span>
                        </Card>
                      </div>
                    </div>
                  )}
                </div>
              </MacWindow>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Instant Dashboard builder that takes your
                <br />
                business to the next level
              </h2>
            </div>
            <div className="lg:mt-8">
              <p className="text-lg text-gray-600 mb-8">
                Impress users with professional, branded reports, save time with
                AI-driven insights, boost user engagement and retention with
                in-product access to data and intelligence.
              </p>
              <Button className="bg-gray-900 text-white px-8 py-4 text-lg font-semibold hover:bg-gray-800 transition-all">
                Start for Free TODAY
              </Button>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit Card 1 - Real-time Dashboard Analytics */}
            <Card className="glass-card overflow-hidden group hover:scale-105 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute top-4 left-4 right-4">
                  <h4 className="text-white font-semibold text-sm">
                    Real-time KPI's Creation
                  </h4>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <Card className="p-3 shadow-lg">
                    <div className="flex items-center justify-between text-sm">
                      <span>Revenue Growth</span>
                      <span className="text-green-600 flex items-center">
                        <TrendingUp size={14} className="mr-1" />
                        +34%
                      </span>
                    </div>
                    <div className="mt-2 h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-green-500 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Live data updates every 30 seconds
                    </div>
                  </Card>
                </div>
              </div>
            </Card>

            {/* Benefit Card 2 - Quick Implementation & Scaling */}
            <Card className="glass-card p-6 group hover:scale-105 transition-all duration-300">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Implement & Scale Quickly
                </h3>
                <p className="text-gray-600 text-sm">
                  Seamlessly integrate with your existing interface—no heavy dev
                  effort required.
                </p>
              </div>
            </Card>

            {/* Benefit Card 3 - Multi-Chart Visualizations */}
            <Card className="glass-card overflow-hidden group hover:scale-105 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 relative p-4">
                <Card className="shadow-lg p-3 h-full">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-sm">Multiple Chart Types</h4>
                    <Badge className="bg-purple-100 text-purple-800">
                      Funnel, Line, Bar, Pie
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span>Active Charts</span>
                      <span className="font-semibold text-purple-600">12</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-8 bg-purple-300 rounded flex items-center justify-center">
                        <BarChart3 size={12} className="text-purple-700" />
                      </div>
                      <div className="h-8 bg-blue-300 rounded flex items-center justify-center">
                        <PieChart size={12} className="text-blue-700" />
                      </div>
                      <div className="h-8 bg-green-300 rounded flex items-center justify-center">
                        <TrendingUp size={12} className="text-green-700" />
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">
                      Interactive & responsive
                    </div>
                  </div>
                </Card>
              </div>
            </Card>

            {/* Benefit Card 4 - Database Integrations */}
            <Card className="glass-card p-6 group hover:scale-105 transition-all duration-300">
              <div className="bg-green-50 rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Database Integrations
                </h4>
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-2xl font-bold text-green-600">Multiple</span>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Database size={14} className="mr-1" />
                    <span>Platforms Supported</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-2">
                  
                  <div className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded text-center">
                    PostgreSQL
                  </div>
                  <div className="bg-purple-100 text-purple-600 text-xs font-medium px-2 py-1 rounded text-center">
                    Odoo
                  </div>
                </div>
                <div className="text-xs text-gray-500">
                  Real-time schema mapping & field pick
                </div>
              </div>
            </Card>

            {/* Benefit Card 5 - Retention & Satisfaction */}
            <Card className="glass-card p-6 group hover:scale-105 transition-all duration-300">
              <div className="bg-pink-50 rounded-xl p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Boost User Retention Immediately
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Embed analytics in your product to keep clients engaged and
                  coming back.
                </p>
              </div>
            </Card>

            {/* Benefit Card 6 - Advanced Aggregation */}
            <Card className="glass-card overflow-hidden group hover:scale-105 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute top-4 left-4 right-4">
                  <h4 className="text-white font-semibold text-sm">
                    Advanced Aggregation
                  </h4>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <Card className="p-3 shadow-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-semibold text-sm">Functions</div>
                      <div className="text-green-600 font-bold">
                        SUM, AVG, COUNT
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-green-100 text-green-700 text-xs font-medium px-1 py-1 rounded text-center">
                        GROUP BY
                      </div>
                      <div className="bg-blue-100 text-blue-700 text-xs font-medium px-1 py-1 rounded text-center">
                        FILTER
                      </div>
                      <div className="bg-orange-100 text-orange-700 text-xs font-medium px-1 py-1 rounded text-center">
                        SORT
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
