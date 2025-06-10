import React from 'react';
export default function Settings() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl transition-colors duration-300 p-4 sm:p-6 md:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 text-center">Settings</h1>
        <div className="space-y-4 sm:space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 sm:p-6 rounded-xl bg-blue-50 shadow-md transition-colors duration-300 gap-3 sm:gap-0">
            <span className="text-sm sm:text-base text-gray-700 font-medium">Enable Notifications</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 sm:p-6 rounded-xl bg-blue-50 shadow-md transition-colors duration-300 gap-3 sm:gap-0">
            <span className="text-sm sm:text-base text-gray-700 font-medium">Show Recent Places</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 sm:p-6 rounded-xl bg-blue-50 shadow-md transition-colors duration-300 gap-3 sm:gap-0">
            <span className="text-sm sm:text-base text-gray-700 font-medium">Accessibility Mode</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
        <div className="mt-6 sm:mt-8 flex justify-center">
          <button className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 bg-primary text-white rounded-lg font-semibold shadow hover:bg-primary-700 transition-colors duration-300 text-sm sm:text-base">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
} 