import React from 'react';
export default function Help() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl transition-colors duration-300 p-4 sm:p-6 md:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 text-center">Help & Support</h1>
        <div className="space-y-4 sm:space-y-6">
          <div className="p-4 sm:p-6 rounded-xl bg-blue-50 shadow-md transition-colors duration-300">
            <h2 className="text-lg sm:text-xl font-semibold text-blue-700 mb-2 sm:mb-3">How to use the Campus Navigator?</h2>
            <p className="text-sm sm:text-base text-gray-700">Use the search bar to find buildings, plan routes, and explore campus facilities. Click on map markers for details.</p>
          </div>
          <div className="p-4 sm:p-6 rounded-xl bg-blue-50 shadow-md transition-colors duration-300">
            <h2 className="text-lg sm:text-xl font-semibold text-blue-700 mb-2 sm:mb-3">Need more help?</h2>
            <p className="text-sm sm:text-base text-gray-700">
              Contact the IT Helpdesk at{' '}
              <a href="mailto:help@cinec.edu" className="text-primary hover:text-primary-700 underline transition-colors duration-300">
                help@cinec.edu
              </a>
              {' '}or call{' '}
              <a href="tel:+94111234567" className="text-primary hover:text-primary-700 underline transition-colors duration-300">
                +94 11 123 4567
              </a>
            </p>
          </div>
          <div className="p-4 sm:p-6 rounded-xl bg-blue-50 shadow-md transition-colors duration-300">
            <h2 className="text-lg sm:text-xl font-semibold text-blue-700 mb-2 sm:mb-3">Quick Tips</h2>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
              <li>Use the search bar to find any location on campus</li>
              <li>Click on buildings to see more information</li>
              <li>Use the role filter to see relevant information for your role</li>
              <li>Enable notifications to stay updated with campus alerts</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 