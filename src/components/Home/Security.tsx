import { Card, } from "../ui/card";
import { Button } from "../ui/button";
import {
  Lock,
  ShieldCheck,
  CheckCircle,

  Users,

} from "lucide-react";

const Security = () => {
  return (
    <>
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Enhanced Security & <span className="text-byteloom-blue">Data Protection</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We respect your data rights and ensure the highest level of security. 
              Your personal data is highly secured while providing powerful analytics insights.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center border-2 border-gray-100 hover:border-byteloom-blue transition-all duration-300 bg-white shadow-lg">
              <ShieldCheck className="w-16 h-16 text-byteloom-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Data Privacy Compliance</h3>
              <p className="text-gray-600">
                Full GDPR, CCPA, and SOC 2 compliance ensuring your data rights are protected at all times.
              </p>
            </Card>
            
            <Card className="p-8 text-center border-2 border-gray-100 hover:border-byteloom-blue transition-all duration-300 bg-white shadow-lg">
              <Lock className="w-16 h-16 text-byteloom-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">End-to-End Encryption</h3>
              <p className="text-gray-600">
                All data is encrypted in transit and at rest using AES-256 encryption with zero-knowledge architecture.
              </p>
            </Card>
            
            <Card className="p-8 text-center border-2 border-gray-100 hover:border-byteloom-blue transition-all duration-300 bg-white shadow-lg">
              <Users className="w-16 h-16 text-byteloom-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Role-Based Access</h3>
              <p className="text-gray-600">
                Granular permission controls ensure only authorized users can access specific data sets and insights.
              </p>
            </Card>
          </div>
          
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Your Data Never Leaves Your Control
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    No personal data storage or retention policies
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    Real-time processing with immediate data purging
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    Transparent audit logs for all data access
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    Industry-leading security certifications
                  </li>
                </ul>
                <div className="mt-6">
                  <p className="text-sm text-gray-500 italic">
                    "We don't violate your personal data rights - we respect and protect them with enterprise-grade security measures."
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-byteloom-blue to-blue-600 rounded-full shadow-lg mb-4">
                  <ShieldCheck className="w-16 h-16 text-white" />
                </div>
                <p className="text-sm text-gray-600 font-medium">
                  Trusted by 100+ companies worldwide
                </p>
                <div className="mt-4 flex justify-center space-x-4 text-xs text-gray-500">
                  <span className="bg-gray-100 px-2 py-1 rounded">SOC 2</span>
                  <span className="bg-gray-100 px-2 py-1 rounded">GDPR</span>
                  <span className="bg-gray-100 px-2 py-1 rounded">ISO 27001</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Product?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of companies already using ByteLoom to deliver powerful analytics to their users.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-byteloom-blue text-white px-8 py-4 text-lg font-semibold hover:bg-byteloom-blue-dark transition-all transform hover:scale-105">
              Start Free Trial
            </Button>
            {/* <Button variant="outline" className="border-2 border-byteloom-blue text-byteloom-blue px-8 py-4 text-lg font-semibold hover:bg-byteloom-blue hover:text-white transition-all">
              Schedule Demo
            </Button> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Security
