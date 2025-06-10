import React from 'react';

function PlaceItem({ icon, title, subtitle, color = 'blue' }) {
  const colorClasses = {
    blue: 'text-blue-500',
    green: 'text-green-500',
    purple: 'text-purple-500',
    red: 'text-red-500',
    amber: 'text-amber-500'
  };

  return (
    <div className="flex items-center p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
      <div className={`w-8 h-8 flex items-center justify-center ${colorClasses[color]} mr-3`}>
        <i className={icon}></i>
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-medium text-gray-800">{title}</h3>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
}

export default PlaceItem; 