import { Lock } from "lucide-react";

export default function MacWindow({ children, title = "your-product.com", showControls = false, headerContent = null }:any) {
  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
      {/* Mac Title Bar */}
      <div className="bg-gray-800 h-10 flex items-center px-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="flex items-center text-white text-sm">
            <Lock size={12} className="mr-1" />
            <span>{title}</span>
          </div>
        </div>
        {headerContent && (
          <div className="flex items-center">
            {headerContent}
          </div>
        )}
      </div>
      
      {/* Window Content */}
      <div className="bg-white">
        {children}
      </div>
    </div>
  );
}
