import React, { useState } from 'react';
import mapImg from '../assets/map.png';

const places = [
  {
    id: 'swimming-pool',
    title: 'Swimming Pool',
    description: 'Swimming pool - Gymnasium - Laundry',
    icon: 'ri-swimming-line',
    color: 'bg-blue-500',
    style: { top: '20%', left: '30%' },
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    hours: '6:00 AM - 9:00 PM',
    events: [
      { title: 'Morning Swim', time: 'Today, 7:00-8:00 AM', location: 'Main Pool' }
    ],
    staff: [
      { name: 'John Smith', role: 'Lifeguard', available: true }
    ],
    crowd: 40
  },
  {
    id: 'fore',
    title: 'FORE',
    description: 'Engine & Bridge Simulator & Liquid Cargo Simulator',
    icon: 'ri-ship-2-line',
    color: 'bg-blue-700',
    style: { top: '22%', left: '40%' },
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    hours: '8:00 AM - 6:00 PM',
    events: [],
    staff: [
      { name: 'Alice Brown', role: 'Simulator Operator', available: false }
    ],
    crowd: 20
  },
  { id: 'storm', title: 'STORM', description: 'Cafe / Restaurant / Bakery', icon: 'ri-restaurant-line', color: 'bg-green-500', style: { top: '25%', left: '50%' } },
  { id: 'mizzen', title: 'MIZZEN', description: 'Hostel', icon: 'ri-home-line', color: 'bg-purple-500', style: { top: '28%', left: '60%' } },
  { id: 'hanger', title: 'HANGER', description: 'Aviation Workshop - Automobile Workshops', icon: 'ri-tools-line', color: 'bg-red-500', style: { top: '32%', left: '70%' } },
  { id: 'main', title: 'MAIN', description: 'Reception - Finance - Auditorium', icon: 'ri-building-line', color: 'bg-blue-400', style: { top: '35%', left: '35%' } },
  { id: 'gaff', title: 'GAFF', description: 'Library - Generator Room - Electrical Workshop - Control Lab - High Voltage Lab - Elector - Pneumatic - Hydraulic Lab - Examination Center', icon: 'ri-book-open-line', color: 'bg-blue-600', style: { top: '38%', left: '45%' } },
  { id: 'hullock', title: 'HULLOCK', description: 'Welding Workshop - Machine Shop – Engine Fitting Shop - Fitting Shop - Seaman Center - Drawing / Chart Room', icon: 'ri-tools-line', color: 'bg-red-700', style: { top: '41%', left: '55%' } },
  { id: 'top', title: 'Top', description: 'Office of Faculty of Marine Engineering - Faculty of Maritime Science Department of Safety & Survival Training - Printing Room', icon: 'ri-building-2-line', color: 'bg-blue-800', style: { top: '44%', left: '65%' } },
  { id: 'sky', title: 'Sky', description: 'Class Rooms', icon: 'ri-building-line', color: 'bg-blue-300', style: { top: '47%', left: '75%' } },
  { id: 'spencer', title: 'Spencer', description: 'Class Room', icon: 'ri-building-line', color: 'bg-blue-200', style: { top: '50%', left: '25%' } },
  { id: 'dalian', title: 'Dalian', description: 'IT labs - Marine Electronics & Radio Communication LAB', icon: 'ri-computer-line', color: 'bg-purple-700', style: { top: '53%', left: '35%' } },
  { id: 'wulfruna', title: 'Wulfruna', description: 'Faculty of Management & Social Science, Faculty of Engineering & Technology, Civil Engineering Lab, Mechanical - Thermodynamic and Fluid Lab, Basic Electronic Lab, Engineering Simulation Lab, Communication Engineering Lab, Micro Electronic Lab, CINEC/ Orange Research Center, CINEC / MAS Research Hub', icon: 'ri-building-2-line', color: 'bg-blue-900', style: { top: '56%', left: '45%' } },
  { id: 'main-stores', title: 'Main Stores', description: 'Main Stores', icon: 'ri-store-2-line', color: 'bg-green-400', style: { top: '59%', left: '55%' } },
  { id: 'yoga-hut', title: 'Yoga Hut', description: 'Yoga - Hut', icon: 'ri-heart-pulse-line', color: 'bg-green-700', style: { top: '62%', left: '65%' } },
  { id: 'student-common', title: 'Student Common Faculty', description: 'Student Common Faculty', icon: 'ri-group-line', color: 'bg-blue-500', style: { top: '65%', left: '75%' } },
  { id: 'changing-rooms', title: 'Changing Rooms & Store Rooms', description: 'Changing Rooms & Store Rooms', icon: 'ri-door-lock-line', color: 'bg-gray-500', style: { top: '68%', left: '30%' } },
  { id: 'fire-training', title: 'Fire Prevention & Fire Fighting Training Simulator', description: 'Fire Prevention & Fire Fighting Training Simulator', icon: 'ri-fire-line', color: 'bg-red-600', style: { top: '71%', left: '40%' } },
  { id: 'ship-in-campus', title: 'Ship-in-campus', description: 'Ship-in-campus', icon: 'ri-ship-line', color: 'bg-blue-700', style: { top: '74%', left: '50%' } },
];

export default function MapSection() {
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState('');
  const [zoom, setZoom] = useState(1);

  const filtered = search
    ? places.filter(p => p.title.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase()))
    : places;

  return (
    <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden shadow-2xl bg-white">
      {/* Zoom Controls */}
      <div className="absolute top-4 right-4 z-30 flex flex-col gap-2">
        <button onClick={() => setZoom(z => Math.min(z + 0.2, 2))} className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
          <i className="ri-add-line text-2xl"></i>
        </button>
        <button onClick={() => setZoom(z => Math.max(z - 0.2, 0.5))} className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
          <i className="ri-subtract-line text-2xl"></i>
        </button>
      </div>
      {/* Search Bar */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-30 w-full max-w-md px-2">
        <input
          type="text"
          className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary bg-white shadow-md"
          placeholder="Search for a place, building, or office..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      {/* Map Image and Markers (Zoomable) */}
      <div
        className="absolute inset-0"
        style={{
          transform: `scale(${zoom})`,
          transformOrigin: 'center center',
          transition: 'transform 0.3s'
        }}
      >
        <img
          src={mapImg}
          alt="Campus Map"
          className="w-full h-full object-cover select-none"
          draggable={false}
        />
        {/* Markers */}
        {filtered.map(place => (
          <div
            key={place.id}
            className={`absolute w-12 h-12 ${place.color} bg-opacity-30 rounded-full flex items-center justify-center cursor-pointer z-20 animate-pulse`}
            style={place.style}
            onClick={() => setSelected(place)}
          >
            <div className={`w-8 h-8 ${place.color} rounded-full flex items-center justify-center text-white`}>
              <i className={place.icon}></i>
            </div>
          </div>
        ))}
      </div>
      {/* Details Popup (centered modal) */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative animate-fade-in">
            <button onClick={() => setSelected(null)} className="absolute top-4 right-4 text-gray-400 hover:text-primary bg-white rounded-full p-2 shadow">
              <i className="ri-close-line text-2xl"></i>
            </button>
            {/* Place Image */}
            {selected.image && (
              <img src={selected.image} alt={selected.title} className="w-full h-48 object-cover rounded-xl mb-4" />
            )}
            <h2 className="text-2xl font-bold mb-2">{selected.title}</h2>
            <p className="text-gray-700 mb-4">{selected.description}</p>
            {/* Opening Hours */}
            <div className="flex items-center mb-2">
              <i className="ri-time-line text-primary mr-2"></i>
              <span className="font-medium text-gray-700">Opening Hours:</span>
              <span className="ml-2 text-gray-600">{selected.hours}</span>
            </div>
            {/* Crowd Availability */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-gray-700 flex items-center">
                  <i className="ri-group-line text-primary mr-2"></i>
                  Crowd
                </span>
                <span className="text-sm text-gray-500">{selected.crowd}% occupied</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: `${selected.crowd || 0}%` }}></div>
              </div>
            </div>
            {/* Events */}
            {selected.events && selected.events.length > 0 && (
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <i className="ri-calendar-event-line text-primary mr-2"></i>
                  Current Events
                </h3>
                <ul className="space-y-2">
                  {selected.events.map(ev => (
                    <li key={ev.title} className="p-3 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-gray-800">{ev.title}</div>
                      <div className="text-xs text-gray-500">{ev.time}</div>
                      <div className="text-xs text-gray-600">{ev.location}</div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* Staff */}
            {selected.staff && selected.staff.length > 0 && (
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <i className="ri-user-3-line text-primary mr-2"></i>
                  Staff Availability
                </h3>
                <ul className="space-y-1">
                  {selected.staff.map(st => (
                    <li key={st.name} className="flex items-center">
                      <span className="font-semibold text-gray-800">{st.name}</span>
                      <span className="ml-2 text-xs text-gray-500">{st.role}</span>
                      <span className={`ml-2 w-2 h-2 rounded-full ${st.available ? 'bg-green-500' : 'bg-red-500'}`}></span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* Action Buttons */}
            <div className="mt-6 flex gap-4">
              <button className="flex-1 px-4 py-2 bg-primary text-white rounded-lg shadow hover:bg-primary-700 transition-all flex items-center justify-center font-semibold">
                <i className="ri-route-line mr-2"></i> Add to Directions
              </button>
              <button className="flex-1 px-4 py-2 bg-gray-100 text-primary border border-primary rounded-lg shadow hover:bg-primary hover:text-white transition-all flex items-center justify-center font-semibold">
                <i className="ri-share-line mr-2"></i> Share
              </button>
              <button className="flex-1 px-4 py-2 bg-gray-100 text-primary border border-primary rounded-lg shadow hover:bg-primary hover:text-white transition-all flex items-center justify-center font-semibold">
                <i className="ri-map-2-line mr-2"></i> Directions
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 