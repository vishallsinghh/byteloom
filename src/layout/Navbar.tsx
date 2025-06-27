import React from 'react'
import Link from 'next/link'
import { Database } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Navbar = () => {
  return (
     <nav className="bg-gray-900 text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href='/' className="text-2xl font-bold text-white flex items-center">
                  <Database className="mr-2 text-byteloom-blue" size={24} />
                  ByteLoom
                </a>
              </div>
              
            </div>
            <div className="hidden md:block ml-10">
                <div className="flex w-full justify-center items-center space-x-4">
                  <a href="#product" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">Product</a>
                  <a href="#solutions" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">Solutions</a>
                  <a href="/about-us" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">About Us</a>
                  <a href="/contact-us" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact Us</a>
                </div>
              </div>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Log in</Link>
              <Link href="/signup">
                <Button className="bg-yellow-400 text-gray-900 hover:bg-yellow-300">Start for free</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar
