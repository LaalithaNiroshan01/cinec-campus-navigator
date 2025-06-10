import React from 'react';
export default function Profile() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl transition-colors duration-300 p-4 sm:p-6 md:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 text-center">Profile</h1>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-blue-100 flex items-center justify-center text-4xl sm:text-5xl text-blue-700 shadow-lg">
            <i className="ri-user-3-line"></i>
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Jane Student</h2>
            <p className="text-sm sm:text-base text-gray-500">CINEC ID: 20231234</p>
          </div>
        </div>
        <div className="space-y-3 sm:space-y-4">
          <div className="p-4 sm:p-6 rounded-xl bg-blue-50 shadow-md transition-colors duration-300 flex items-center gap-3">
            <i className="ri-mail-line text-xl sm:text-2xl text-blue-700"></i>
            <span className="text-sm sm:text-base text-gray-700">jane.student@cinec.edu</span>
          </div>
          <div className="p-4 sm:p-6 rounded-xl bg-blue-50 shadow-md transition-colors duration-300 flex items-center gap-3">
            <i className="ri-phone-line text-xl sm:text-2xl text-blue-700"></i>
            <span className="text-sm sm:text-base text-gray-700">+94 77 123 4567</span>
          </div>
          <div className="p-4 sm:p-6 rounded-xl bg-blue-50 shadow-md transition-colors duration-300 flex items-center gap-3">
            <i className="ri-graduation-cap-line text-xl sm:text-2xl text-blue-700"></i>
            <span className="text-sm sm:text-base text-gray-700">Faculty of Engineering</span>
          </div>
        </div>
      </div>
    </div>
  );
} 