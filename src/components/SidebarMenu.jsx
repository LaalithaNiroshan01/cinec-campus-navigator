import React from "react";

function SidebarMenu() {
  return (
    <aside className="w-full md:w-1/3 lg:w-1/4 bg-blue-50 border-r border-blue-200 flex flex-col min-h-0">
      <div className="p-4 border-b border-blue-200">
        <input
          type="text"
          className="form-control rounded-full px-4 py-2 text-sm border-blue-200 focus:ring-2 focus:ring-blue-400"
          placeholder="Search buildings, classrooms, offices..."
        />
      </div>
      <div className="flex-1 overflow-auto p-4">
        {/* Filters and quick links */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-blue-800 mb-2">Quick Access</h2>
          <ul className="space-y-2">
            <li><button className="w-full text-left px-3 py-2 rounded bg-white hover:bg-blue-100">Personalized Routes</button></li>
            <li><button className="w-full text-left px-3 py-2 rounded bg-white hover:bg-blue-100">Crowd Data</button></li>
            <li><button className="w-full text-left px-3 py-2 rounded bg-white hover:bg-blue-100">Share Location</button></li>
            <li><button className="w-full text-left px-3 py-2 rounded bg-white hover:bg-blue-100">Route Recommendation</button></li>
          </ul>
        </div>
        {/* Placeholder for more sidebar content */}
      </div>
    </aside>
  );
}

export default SidebarMenu; 