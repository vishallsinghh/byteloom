"use client";
import React, { useState } from "react";
import {
  ChartLine,
  Database,
  Search,
  Link,
  Settings,
  Trash2,
  Images,
  ArrowRight,
  BarChart3,
  Filter,
  Monitor,
  Edit,
  Palette,
  Type,
  Sliders,
  TrendingUp,
  Save,
  Plus,
  LineChart,
  PieChart,
  Layers,
  Maximize,
  Share2,
  Users,
  HelpCircle,
  Book,
  MessageCircle,
  Headphones,
  Menu,
  Rocket,
} from "lucide-react";
import Navbar from "@/layout/Navbar";
import Footer from "@/layout/Footer";

const UserGuide = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleSmoothScroll = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
  };

  // Table of Contents Component
  const TableOfContents = () => (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 w-64 border border-gray-200 dark:border-gray-700">
        <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
          Table of Contents
        </h3>
        <nav className="space-y-2">
          {[
            { id: "overview", label: "Overview" },
            { id: "create-dataset", label: "1. Create Dataset" },
            { id: "gallery", label: "2. Gallery" },
            { id: "edit-delete", label: "3. Edit/Delete Chart" },
            { id: "edit-chart", label: "4. Edit Chart Screen" },
            { id: "add-chart", label: "5. Add New Chart" },
            { id: "create-dashboard", label: "6. Create Dashboards" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleSmoothScroll(item.id)}
              className={`block text-sm text-left w-full transition-colors ${
                activeSection === item.id
                  ? "text-blue-600 dark:text-blue-400 font-medium"
                  : "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );

  // Generic Step Section
  const StepSection = ({
    id,
    stepNumber,
    title,
    description,
    children,
  }: {
    id: string;
    stepNumber: number;
    title: string;
    description: string;
    children: React.ReactNode;
  }) => (
    <section id={id} className="space-y-6">
      <div className="flex items-center space-x-4">
        <div className="bg-gradient-to-r from-blue-600 via-violet-600 to-emerald-600  w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl">
          {stepNumber}
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          {title}
        </h2>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          {description}
        </p>
        {children}
      </div>
    </section>
  );

  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 smooth-scroll min-h-screen">
        {/* Header */}
        <Navbar />

        {/* <TableOfContents /> */}

        <main className="px-3 text-black dark:text-white mt-4 mb-20 w-full">
          <div className="w-full md:w-[780px] mx-auto space-y-10">
            {/* Hero */}
            <section id="overview" className="text-center py-12">
              <h2 className="text-xl text-gray-500 dark:text-gray-400 font-semibold mb-4">
                How to use Byteloom AI Dashboard Builder?
              </h2>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {" "}
                <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-emerald-600 bg-clip-text text-transparent">
                  User Guide :
                </span>{" "}
                Byteloom AI Dashboard Builder
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Complete user guide for creating datasets, generating AI charts,
                and building powerful dashboards in your Odoo environment
              </p>
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4 flex items-center justify-center">
                  <Rocket className="mr-2" size={24} />
                  What You'll Learn
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-start space-x-3">
                    <Database className="mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold">Dataset Creation</h4>
                      <p className="text-sm opacity-90">
                        Build custom datasets from your Odoo tables
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <ChartLine className="mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold">AI Chart Generation</h4>
                      <p className="text-sm opacity-90">
                        Let our LLM create intelligent visualizations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Edit className="mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold">Chart Customization</h4>
                      <p className="text-sm opacity-90">
                        Fine-tune charts with advanced editing tools
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold">Dashboard Building</h4>
                      <p className="text-sm opacity-90">
                        Assemble powerful, shareable dashboards
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
            <h3 className=" font-bold text-3xl"> Requirements:</h3>
            <ul className="leading-loose text-xl list-disc ml-[30px]">
              <li>
                {" "}
                Odoo Versions Supported: 12, 13, 14, 15, 16, 17 (Enterprise or
                Community)
              </li>
              <li> Google Cloud Account with BigQuery enabled</li>
              <li>
                {" "}
                Necessary permissions in Odoo and Google Cloud (follow along for
                more details)
              </li>
              <li>
                {" "}
                The module depends on these python libraries
                'google-cloud-bigquery', 'pandas','pyarrow'.{" "}
              </li>
              <li>
                {" "}
                If you are on Odoo Sh, add these in your addons repository level
                requirements.txt.
              </li>
              <li>
                {" "}
                If you are on on-premises server, install these manually in your
                Odoo python environment manually and restart the server.
              </li>
            </ul>
          </div>
            </section>

            <hr className="border-gray-200 dark:border-gray-700" />

            {/* Create Dataset */}
            <StepSection
              id="create-dataset"
              stepNumber={1}
              title="Create Dataset"
              description="Start by creating datasets to fine-tune the data fed to the AI for generating charts, KPIs, and dashboards. This foundational step ensures your visualizations are built on the right data structure."
            >
              <div className="grid gap-6">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                    <Search className="text-blue-600 mr-3" size={20} />
                    Search & Select Tables
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Use the search functionality to find and select the Odoo
                    tables you want to include in your dataset.
                  </p>
                  <div className="bg-white dark:bg-gray-600 rounded-lg p-4 border-l-4 border-blue-500">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      <span className="text-yellow-500 mr-2">💡</span>
                      <strong>Tip:</strong> Choose tables that contain related
                      data for better AI-generated insights
                    </p>
                  </div>
                  <div className="my-4">
                    <img
                      className="shadow-xl rounded-lg"
                      src="/user-guide/search.png"
                      alt=""
                      width="700px"
                    />
                  </div>
                </div>

                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                    <Link className="text-blue-600 mr-3" size={20} />
                    Create Relationships
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Establish relationships between your selected tables to
                    ensure proper data connections and meaningful chart
                    generation.
                  </p>
                  <div className="my-4">
                    <img
                      className="shadow-xl rounded-lg"
                      src="/user-guide/createRelationships.png"
                      alt=""
                      width="700px"
                    />
                  </div>
                  {/* <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                      One-to-Many
                    </span>
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                      Many-to-One
                    </span>
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                      Many-to-Many
                    </span>
                  </div> */}
                </div>

                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                    <Settings className="text-blue-600 mr-3" size={20} />
                    Additional Options
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-gray-600 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center">
                        <Database className="mr-2" size={16} />
                        Open Saved Datasets
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Load previously created datasets for modification
                      </p>
                      <div className="my-4 flex justify-center items-center">
                        <img
                          className="shadow-xl rounded-lg mx-auto"
                          src="/user-guide/savedDatasets.jpg"
                          alt=""
                          width="150px"
                        />
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-600 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center">
                        <Trash2 className="mr-2" size={16} />
                        Reset Screen
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Clear relationships and start over
                      </p>
                      <div className="my-4 flex justify-center items-center">
                        <img
                          className="shadow-xl rounded-lg mx-auto"
                          src="/user-guide/resetScreen.jpg"
                          alt=""
                          width="200px"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="button"
                    className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 transform "
                  >
                    {/* <Rocket className="mr-2" size={20} /> */}
                    And then click on "Generate Dataset"
                  </button>
                </div>
              </div>
            </StepSection>

            {/* Gallery */}
            <StepSection
              id="gallery"
              stepNumber={2}
              title="Gallery"
              description="The Gallery is where you can browse and select from your saved datasets to view all AI-generated charts and KPIs. Think of it as your visualization showcase."
            >
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                    <Monitor className="mr-2" size={20} />
                    Navigation Flow
                  </h3>
                  <div className="flex items-center justify-center space-x-4 text-center flex-wrap">
                    <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm">
                      <Images
                        className="text-blue-600 mb-2 mx-auto"
                        size={24}
                      />
                      <p className="text-sm font-semibold">Go to Gallery</p>
                    </div>
                    <ArrowRight className="text-blue-600" size={20} />
                    <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm">
                      <Database
                        className="text-blue-600 mb-2 mx-auto"
                        size={24}
                      />
                      <p className="text-sm font-semibold">Select Dataset</p>
                    </div>
                    <ArrowRight className="text-blue-600" size={20} />
                    <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm">
                      <BarChart3
                        className="text-blue-600 mb-2 mx-auto"
                        size={24}
                      />
                      <p className="text-sm font-semibold">
                        Load AI Charts & KPIs
                      </p>
                    </div>
                  </div>
                  <div className="my-4 flex flex-col gap-2 justify-center items-center">
                    <img
                      className="shadow-xl rounded-lg mx-auto"
                      src="/user-guide/selectDatasets.png"
                      alt=""
                      width="400px"
                    />
                    <img
                      className="shadow-xl rounded-lg mx-auto"
                      src="/user-guide/charts.jpg"
                      alt=""
                      width="600px"
                    />
                  </div>
                </div>

                {/* <div className="grid md:grid-cols-2 gap-6"> */}
                <div className="flex justify-center items-center space-x-6">
                  {/* <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                      <Filter className="text-blue-600 mr-3" size={20} />
                      Dataset Selection
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                      Choose from your available datasets to filter and display
                      relevant visualizations.
                    </p>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• Quick dataset filtering</li>
                      <li>• Preview dataset information</li>
                      <li>• Last modified timestamps</li>
                    </ul>
                  </div> */}

                  <div className="mx-auto bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                      <Rocket className="text-blue-600 mr-3" size={20} />
                      AI-Generated Content
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                      View all charts and KPIs created by our advanced LLM model
                      for the selected dataset.
                    </p>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• Intelligent chart suggestions</li>
                      <li>• Auto-generated KPIs</li>
                      <li>• Data insights and trends</li>
                    </ul>
                  </div>
                </div>
              </div>
            </StepSection>

            {/* Edit/Delete Chart */}
            <StepSection
              id="edit-delete"
              stepNumber={3}
              title="Edit/Delete Chart"
              description="Take control of your AI-generated charts with powerful editing tools. Modify chart properties, update data fields, or remove charts that no longer serve your needs."
            >
              <div className="my-4 flex flex-col gap-2 justify-center items-center">
                <img
                  className="shadow-xl rounded-lg mx-auto"
                  src="/user-guide/editDelete.png"
                  alt=""
                  width="400px"
                />
              </div>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                      <Edit className="text-green-600 mr-3" size={20} />
                      Edit Chart
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                      Customize your AI-generated charts with advanced editing
                      capabilities.
                    </p>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                      <li className="flex items-center">
                        <Palette className="mr-2 text-green-500" size={16} />
                        Change chart types and styles
                      </li>
                      <li className="flex items-center">
                        <Type className="mr-2 text-green-500" size={16} />
                        Modify titles and aggragations functions
                      </li>
                      <li className="flex items-center">
                        <Sliders className="mr-2 text-green-500" size={16} />
                        Adjust x or y axis data fields
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                      <Trash2 className="text-red-600 mr-3" size={20} />
                      Delete Chart
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                      Remove charts that no longer meet your requirements
                      safely.
                    </p>
                    <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-3 border-l-4 border-red-500">
                      <p className="text-sm text-red-700 dark:text-red-300">
                        <strong>Warning:</strong> Deleted charts cannot be
                        recovered. Consider duplicating before major changes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </StepSection>

            {/* Edit Chart Screen */}
            <StepSection
              id="edit-chart"
              stepNumber={4}
              title="Edit Chart Screen"
              description="Access the comprehensive chart editing interface where you can fine-tune every aspect of your visualizations. Modify fields, apply aggregations, and customize the appearance to match your needs."
            >
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                    <Edit className="mr-2" size={20} />
                    Editing Tools
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                      <Sliders className="text-green-600 mb-2" size={20} />
                      <h4 className="font-semibold text-sm">
                        X and Y Axis Modification
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        Change data sources and fields
                      </p>
                    </div>
                    <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                      <TrendingUp className="text-green-600 mb-2" size={20} />
                      <h4 className="font-semibold text-sm">
                        Aggregation Functions
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        Apply sum, count, min, max
                      </p>
                    </div>
                    <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                      <Palette className="text-green-600 mb-2" size={20} />
                      <h4 className="font-semibold text-sm">
                        Visual Customization
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        Map type and title
                      </p>
                    </div>
                  </div>
                </div>
                <div className="my-4 flex flex-col gap-2 justify-center items-center">
                  <img
                    className="shadow-xl rounded-lg mx-auto"
                    src="/user-guide/editChart.png"
                    alt=""
                    width="600px"
                  />
                </div>

                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                    <Save className="text-blue-600 mr-3" size={20} />
                    Save Your Changes
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                    After making your modifications, save the chart to preserve
                    your changes and make it available in your dashboard
                    builder.
                  </p>
                  {/* <div className="flex items-center space-x-4 text-sm">
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">
                      Auto-save enabled
                    </span>
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-3 py-1 rounded-full">
                      Version history
                    </span>
                  </div> */}
                </div>
              </div>
            </StepSection>

            {/* Add New Chart */}
            <StepSection
              id="add-chart"
              stepNumber={5}
              title="Add New Chart"
              description="Create custom charts from scratch using our intuitive chart builder. Choose from various chart types, select your data fields, and apply aggregation functions to build exactly what you need."
            >
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                    <Plus className="mr-2" size={20} />
                    Available Chart Types
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center">
                      <BarChart3
                        className="text-purple-600 mb-2 mx-auto"
                        size={24}
                      />
                      <h4 className="font-semibold text-sm">Bar Chart</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        Compare categories
                      </p>
                    </div>
                    <div className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center">
                      <LineChart
                        className="text-purple-600 mb-2 mx-auto"
                        size={24}
                      />
                      <h4 className="font-semibold text-sm">Line Chart</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        Show trends over time
                      </p>
                    </div>
                    <div className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center">
                      <PieChart
                        className="text-purple-600 mb-2 mx-auto"
                        size={24}
                      />
                      <h4 className="font-semibold text-sm">Pie Chart</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        Display proportions
                      </p>
                    </div>
                    <div className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center">
                      <TrendingUp
                        className="text-purple-600 mb-2 mx-auto"
                        size={24}
                      />
                      <h4 className="font-semibold text-sm">
                        + Many more charts
                      </h4>
                      {/* <p className="text-xs text-gray-600 dark:text-gray-400">
                        Visualize volumes
                      </p> */}
                    </div>
                  </div>
                </div>
                <div className="my-4 flex flex-col gap-2 justify-center items-center">
                  <img
                    className="shadow-xl rounded-lg mx-auto"
                    src="/user-guide/createNewChart.png"
                    alt=""
                    width="600px"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                      <Database className="text-purple-600 mr-3" size={20} />
                      Available Fields
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                      Browse and select from all available fields in your
                      dataset.
                    </p>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• See all options for field selection</li>
                      <li>• Select X and Y axis</li>
                      <li>• Populate real time data</li>
                    </ul>
                  </div>

                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                      <TrendingUp className="text-purple-600 mr-3" size={20} />
                      Aggregation Functions
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                      Apply powerful aggregation functions to your data.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs">
                        SUM
                      </span>
                      <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs">
                        COUNT
                      </span>
                      <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs">
                        AVG
                      </span>
                      <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs">
                        MIN
                      </span>
                      <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs">
                        MAX
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="button"
                    className="bg-gradient-to-r flex mx-auto justify-center items-center from-purple-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg"
                  >
                    <Save className="mr-2" size={20} />
                    Click on this icon to save your chart
                  </button>
                </div>
              </div>
            </StepSection>

            {/* Create Dashboards */}
            <StepSection
              id="create-dashboard"
              stepNumber={6}
              title="Create Dashboards"
              description="Bring everything together by creating comprehensive dashboards using your AI-generated charts and KPIs. Build interactive, shareable dashboards that provide valuable insights at a glance."
            >
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                    <Layers className="mr-2" size={20} />
                    Dashboard Building Process
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                          Select Dataset
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Choose the dataset to fetch charts and KPIs from
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                          Drag & Drop Builder
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Drag KPI cards, charts, and widgets to assemble your
                          layout
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                          Resize & Arrange
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Freely resize and rearrange widgets to create the
                          perfect layout
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                          Save & Share
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Save your dashboard and share it using the generated
                          link
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-4 flex flex-col gap-2 justify-center items-center">
                  <img
                    className="shadow-xl rounded-lg mx-auto"
                    src="/user-guide/selectDashboardDatabase.png"
                    alt=""
                    width="400px"
                  />
                  <img
                    className="shadow-xl rounded-lg mx-auto"
                    src="/user-guide/createDash.png"
                    alt=""
                    width="600px"
                  />
                   <img
                    className="shadow-xl rounded-lg mx-auto"
                    src="/user-guide/charts.jpg"
                    alt=""
                    width="600px"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                      <Maximize className="text-indigo-600 mr-3" size={20} />
                      Flexible Layouts
                    </h3>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• Grid-based positioning</li>
                      <li>• Responsive design</li>
                      <li>• Custom widget sizes</li>
                      <li>• Auto-arrange options</li>
                    </ul>
                  </div>

                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                      <Share2 className="text-indigo-600 mr-3" size={20} />
                      Sharing Options
                    </h3>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• Shareable URLs</li>
                      <li>• Embed codes</li>
                      <li>• Permission controls</li>
                      <li>• Export options</li>
                    </ul>
                  </div>

                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                      <Users className="text-indigo-600 mr-3" size={20} />
                      Collaboration
                    </h3>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• Team access</li>
                      <li>• Comment system</li>
                      <li>• Version control</li>
                      <li>• Real-time updates</li>
                    </ul>
                  </div>
                </div>

                <div className="text-center bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">
                    Ready to Build Your Dashboard?
                  </h3>
                  <p className="text-lg mb-6 opacity-90">
                    Start creating powerful, AI-driven dashboards for your Odoo
                    data today.
                  </p>
                  <button
                    type="button"
                    className="bg-white flex items-center justify-center mx-auto text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <Rocket className="mr-2" size={20} />
                    Get Started Now
                  </button>
                </div>
              </div>
            </StepSection>

            {/* Support */}
            <section
              id="support"
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
                <HelpCircle className="mr-3" size={32} />
                Need Help?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <a className="text-center" href="https://apps.odoo.com/apps/modules/18.0/byteloom_generative_dashboard">
                  <Book className="text-blue-600 mb-3 mx-auto" size={32} />
                  <h3 className="font-semibold text-lg mb-2">Full Module Information</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    View detailed documentation and guides
                  </p>
                </a>
                <div className="text-center">
                  <MessageCircle
                    className="text-green-600 mb-3 mx-auto"
                    size={32}
                  />
                  <h3 className="font-semibold text-lg mb-2">Community</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Join our active user community
                  </p>
                </div>
                <a className="text-center" href="/contact-us">
                  <Headphones
                    className="text-purple-600 mb-3 mx-auto"
                    size={32}
                  />
                  <h3 className="font-semibold text-lg mb-2">Support</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Direct technical support
                  </p>
                </a>
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default UserGuide;
