import React from 'react'
import { Button } from '@/components/ui/button'
import {
  Database,
  CheckCircle,
  Users,
  TrendingUp,
  BarChart3,
  PieChart,
  Zap,
} from 'lucide-react'

const DatasetFeatures = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Fine-Tune AI Charts with{' '}
            <span className="text-byteloom-blue">Custom Datasets</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select only the tables you need from your large databases, then build
            focused datasets that drive precise, AI-powered chart generation.
          </p>
        </div>

        {/* Dataset Builder & Description */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Schema Explorer */}
          <div className="order-2 lg:order-1">
             <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-800">Dataset Builder</h4>
                  <Button className="bg-pink-500 text-white text-xs px-3 py-1 rounded">
                    Generate Dataset
                  </Button>
                </div>
                <div className="space-y-4">
                  {/* res_company */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h5 className="font-medium text-blue-800 mb-2">res_company</h5>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        <span className="text-gray-700">name</span>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-gray-700">active</span>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-gray-700">sequence</span>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        <span className="text-blue-600 font-medium">parent_id</span>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        <span className="text-blue-600 font-medium">parent_path</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-px h-6 bg-gray-300" />
                  </div>
                  {/* res_partner */}
                  <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                    <h5 className="font-medium text-pink-800 mb-2">res_partner</h5>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-gray-700">link</span>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        <span className="text-pink-600 font-medium">parent_id</span>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-gray-700">ref</span>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-gray-700">lang</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-px h-6 bg-gray-300" />
                  </div>
                  {/* res_users */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h5 className="font-medium text-green-800 mb-2">res_users</h5>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        <span className="text-green-600 font-medium">partner_id</span>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-gray-700">login</span>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-gray-700">signature</span>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-gray-700">active</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Feature Description */}
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Custom Dataset Builder
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              By hand-picking only the tables you need, create targeted datasets
              that feed our AI’s chart engine—no more waiting on massive exports.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Database className="w-6 h-6 text-byteloom-blue mt-1 mr-3" />
                <div>
                  <h4 className="font-semibold text-gray-800">Select Your Tables</h4>
                  <p className="text-gray-600">
                    Choose specific tables & columns from your large data sources.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-byteloom-blue mt-1 mr-3" />
                <div>
                  <h4 className="font-semibold text-gray-800">Refine & Filter</h4>
                  <p className="text-gray-600">
                    Apply filters to narrow your dataset before chart generation.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Zap className="w-6 h-6 text-byteloom-blue mt-1 mr-3" />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Generate AI-Powered Charts
                  </h4>
                  <p className="text-gray-600">
                    Instantly create charts based only on your curated dataset.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* AI Chart Previews */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Preview Description */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              AI Chart Previews
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              See real-time previews of the AI-generated charts from your
              selected tables. Drag, resize, and configure each visualization.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <BarChart3 className="w-6 h-6 text-byteloom-blue mt-1 mr-3" />
                <div>
                  <h4 className="font-semibold text-gray-800">Drag & Resize</h4>
                  <p className="text-gray-600">
                    Customize layout and size of each chart in your canvas.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <TrendingUp className="w-6 h-6 text-byteloom-blue mt-1 mr-3" />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Apply Aggregations
                  </h4>
                  <p className="text-gray-600">
                    Use SUM, AVG, COUNT and filters directly on your charts.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Users className="w-6 h-6 text-byteloom-blue mt-1 mr-3" />
                <div>
                  <h4 className="font-semibold text-gray-800">Share & Export</h4>
                  <p className="text-gray-600">
                    Collaborate with your team or export for reporting.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right: Dashboard Preview */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
              <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                <BarChart3
                  size={32}
                  className="text-blue-600 mx-auto mb-2"
                />
                <div className="text-sm font-medium text-gray-800">
                  Sales by Year
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                <PieChart
                  size={32}
                  className="text-green-600 mx-auto mb-2"
                />
                <div className="text-sm font-medium text-gray-800">
                  Partner Distribution
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                <TrendingUp
                  size={32}
                  className="text-purple-600 mx-auto mb-2"
                />
                <div className="text-sm font-medium text-gray-800">
                  Order Price vs Unit
                </div>
              </div>
            </div>

            {/* User Churn Rate */}
            <div className="bg-white rounded-lg p-4 border border-gray-200 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  LLM usage model
                </span>
                <span className="text-green-600 text-sm font-bold">30.5%</span>
              </div>
              <div className="text-xs text-gray-500 mb-2">
                Embedded Analytics with ByteLoom
              </div>
              <div className="w-full bg-gray-200 h-1 rounded">
                <div className="w-1/4 bg-green-500 h-1 rounded" />
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  )
}

export default DatasetFeatures
