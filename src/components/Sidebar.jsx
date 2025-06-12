import React, { useState } from 'react';
import PlaceItem from './PlaceItem';

function Sidebar() {
  const [activeTab, setActiveTab] = useState('route');
  const [currentLocation, setCurrentLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [routeType, setRouteType] = useState('fastest');
  const [showSavedRoutes, setShowSavedRoutes] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [weather, setWeather] = useState({ condition: 'Rain', temp: 26 }); // Simulated weather
  const [accessibility, setAccessibility] = useState({ elevator: false, ramp: false, quiet: false });
  const timetable = [
    { time: '10:00', title: 'Math 101', location: 'Sky', building: 'Sky', start: '10:00', end: '11:00' },
    { time: '12:00', title: 'Physics Lab', location: 'Dalian', building: 'Dalian', start: '12:00', end: '13:30' },
  ];
  const now = new Date();
  const nextClass = timetable.find(cls => {
    const [h, m] = cls.start.split(':');
    const classTime = new Date();
    classTime.setHours(Number(h), Number(m), 0, 0);
    return classTime > now;
  });

  const recentPlaces = [
    {
      icon: 'ri-book-open-line',
      title: 'Library',
      subtitle: 'Main Campus Library',
      color: 'blue'
    },
    {
      icon: 'ri-restaurant-line',
      title: 'Student Cafeteria',
      subtitle: 'Food Court',
      color: 'green'
    },
    {
      icon: 'ri-computer-line',
      title: 'Computer Lab B',
      subtitle: 'IT Department',
      color: 'purple'
    }
  ];

  const favoritePlaces = [
    {
      icon: 'ri-book-open-line',
      title: 'Library',
      subtitle: 'Main Campus Library',
      color: 'blue'
    },
    {
      icon: 'ri-restaurant-line',
      title: 'Student Cafeteria',
      subtitle: 'Food Court',
      color: 'green'
    }
  ];

  const savedRoutes = [
    {
      title: 'Library to Cafeteria',
      time: '5 min walk',
      distance: '0.3 km'
    },
    {
      title: 'Engineering to Computer Lab',
      time: '8 min walk',
      distance: '0.5 km'
    }
  ];

  const handleRouteSubmit = (e) => {
    e.preventDefault();
    // Handle route submission
    console.log('Route submitted:', { currentLocation, destination, routeType });
  };

  // Responsive drawer for mobile
  const sidebarContent = (
    <div className="h-full bg-white/60 backdrop-blur-lg border-r border-gray-200 flex flex-col rounded-r-2xl shadow-2xl transition-all duration-300 p-2 md:p-4 space-y-4 md:space-y-6 w-full max-w-xs md:max-w-none">
      {/* New quick info cards */}
      <div className="flex flex-col gap-4 md:gap-6">
        {/* Weather & Smart Route */}
        <div className="flex items-center justify-between bg-blue-50 rounded-xl px-4 py-2 shadow-sm">
          <div className="flex items-center gap-2">
            <i className={`ri-${weather.condition === 'Rain' ? 'rainy' : 'sun'}-line text-xl text-primary`}></i>
            <span className="font-semibold text-blue-700">{weather.temp}°C, {weather.condition}</span>
          </div>
          {weather.condition === 'Rain' && (
            <button
              className="px-3 py-1 bg-primary text-white rounded-lg text-xs font-semibold shadow hover:bg-primary-700 transition-all"
              onClick={() => setRouteType('smart')}
            >
              <i className="ri-flashlight-line mr-1"></i> Smart Route
            </button>
          )}
        </div>
        {/* My Next Class */}
        {nextClass && (
          <div className="bg-white rounded-xl shadow p-4 flex flex-col gap-2 border border-blue-100">
            <div className="flex items-center gap-2 mb-1">
              <i className="ri-graduation-cap-line text-primary text-lg"></i>
              <span className="font-semibold text-gray-800">My Next Class</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-blue-700">{nextClass.title}</span>
              <span className="text-xs text-gray-500">({nextClass.start} - {nextClass.end})</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <i className="ri-map-pin-line text-primary"></i> {nextClass.location}
            </div>
            <button
              className="mt-2 px-3 py-1 bg-primary text-white rounded-lg text-xs font-semibold shadow hover:bg-primary-700 transition-all"
              onClick={() => {
                setCurrentLocation('');
                setDestination(nextClass.location);
                setRouteType('fastest');
              }}
            >
              <i className="ri-timer-line mr-1"></i> Fastest Route
            </button>
          </div>
        )}
        {/* Accessibility Options */}
        <div className="bg-white rounded-xl shadow p-4 flex flex-col gap-2 border border-blue-100">
          <div className="flex items-center gap-2 mb-1">
            <i className="ri-wheelchair-line text-primary text-lg"></i>
            <span className="font-semibold text-gray-800">Accessibility Options</span>
          </div>
          <div className="flex gap-2 flex-wrap">
            <label className="flex items-center gap-1 text-xs font-medium text-gray-700">
              <input type="checkbox" checked={accessibility.elevator} onChange={e => setAccessibility(a => ({ ...a, elevator: e.target.checked }))} className="accent-primary" /> Elevator
            </label>
            <label className="flex items-center gap-1 text-xs font-medium text-gray-700">
              <input type="checkbox" checked={accessibility.ramp} onChange={e => setAccessibility(a => ({ ...a, ramp: e.target.checked }))} className="accent-primary" /> Ramp
            </label>
            <label className="flex items-center gap-1 text-xs font-medium text-gray-700">
              <input type="checkbox" checked={accessibility.quiet} onChange={e => setAccessibility(a => ({ ...a, quiet: e.target.checked }))} className="accent-primary" /> Quiet Zone
            </label>
          </div>
        </div>
      </div>
      {/* Tabs */}
      <div className="flex border-b border-gray-200 bg-white/80 rounded-t-2xl">
        {['route', 'places', 'saved'].map(tab => (
          <button
            key={tab}
            className={`flex-1 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 ${
              activeTab === tab
                ? 'text-primary border-b-2 border-primary bg-primary/10'
                : 'text-gray-500 hover:text-primary hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab(tab)}
            aria-label={tab.charAt(0).toUpperCase() + tab.slice(1)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto space-y-6">
        {activeTab === 'route' && (
          <div className="space-y-6">
            <form onSubmit={handleRouteSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Current Location
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={currentLocation}
                    onChange={(e) => setCurrentLocation(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-gray-50 shadow-sm"
                    placeholder="Enter your location"
                  />
                  <button
                    type="button"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary"
                  >
                    <i className="ri-map-pin-line"></i>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Destination
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-gray-50 shadow-sm"
                    placeholder="Where do you want to go?"
                  />
                  <button
                    type="button"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary"
                  >
                    <i className="ri-search-line"></i>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Route Options
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    className={`px-3 py-2 text-sm font-semibold rounded-lg shadow-sm transition-colors duration-200 ${
                      routeType === 'fastest'
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-primary/10'
                    }`}
                    onClick={() => setRouteType('fastest')}
                  >
                    <i className="ri-timer-line mr-1"></i>
                    Fastest
                  </button>
                  <button
                    type="button"
                    className={`px-3 py-2 text-sm font-semibold rounded-lg shadow-sm transition-colors duration-200 ${
                      routeType === 'accessible'
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-primary/10'
                    }`}
                    onClick={() => setRouteType('accessible')}
                  >
                    <i className="ri-wheelchair-line mr-1"></i>
                    Accessible
                  </button>
                  <button
                    type="button"
                    className={`px-3 py-2 text-sm font-semibold rounded-lg shadow-sm transition-colors duration-200 ${
                      routeType === 'indoor'
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-primary/10'
                    }`}
                    onClick={() => setRouteType('indoor')}
                  >
                    <i className="ri-building-line mr-1"></i>
                    Indoor
                  </button>
                </div>

                <div className="flex gap-4 my-4">
                  <button
                    type="submit"
                    className="flex-1 py-2 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-600 transition-colors"
                  >
                    <i className="ri-route-line mr-2"></i>
                    Get Directions
                  </button>
                  <button
                    type="button"
                    className="w-10 h-10 bg-gray-100 text-primary border border-primary font-semibold rounded-lg shadow-md hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
                    title="Save Route"
                  >
                    <i className="ri-bookmark-line text-xl"></i>
                  </button>
                </div>
              </div>
            </form>

            <div className="pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-700">Recent Places</h3>
                <button
                  className="text-sm text-primary hover:text-primary-600"
                  onClick={() => setShowSavedRoutes(!showSavedRoutes)}
                >
                  {showSavedRoutes ? 'Hide' : 'Show All'}
                </button>
              </div>
              <div className="space-y-2">
                {recentPlaces.map((place, index) => (
                  <PlaceItem key={index} {...place} />
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'places' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Favorites</h3>
              <div className="space-y-2">
                {favoritePlaces.map((place, index) => (
                  <PlaceItem key={index} {...place} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">All Places</h3>
              <div className="space-y-2">
                {recentPlaces.map((place, index) => (
                  <PlaceItem key={index} {...place} />
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'saved' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Saved Routes</h3>
              <div className="space-y-3">
                {savedRoutes.map((route, index) => (
                  <div
                    key={index}
                    className="p-3 bg-gray-50 rounded-lg hover:bg-primary/10 cursor-pointer transition-colors shadow-sm"
                  >
                    <h4 className="text-sm font-semibold text-gray-800">{route.title}</h4>
                    <div className="flex items-center mt-1 text-xs text-gray-500">
                      <span className="flex items-center">
                        <i className="ri-time-line mr-1"></i>
                        {route.time}
                      </span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center">
                        <i className="ri-route-line mr-1"></i>
                        {route.distance}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Saved Places</h3>
              <div className="space-y-2">
                {favoritePlaces.map((place, index) => (
                  <PlaceItem key={index} {...place} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // Responsive: show drawer on mobile
  return (
    <>
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          className="p-2 bg-primary text-white rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
          onClick={() => setDrawerOpen(true)}
          aria-label="Open sidebar"
        >
          <i className="ri-menu-line text-xl"></i>
        </button>
      </div>
      <div className={`fixed inset-0 z-40 bg-black bg-opacity-30 transition-opacity duration-300 ${drawerOpen ? 'block' : 'hidden'}`} onClick={() => setDrawerOpen(false)}></div>
      <aside className={`fixed top-0 left-0 h-full w-80 max-w-full z-50 bg-transparent md:static md:w-1/3 md:block transition-transform duration-300 ${drawerOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        {sidebarContent}
        <button
          className="md:hidden absolute top-4 right-4 p-2 bg-gray-100 rounded-full shadow focus:outline-none"
          onClick={() => setDrawerOpen(false)}
          aria-label="Close sidebar"
        >
          <i className="ri-close-line text-xl"></i>
        </button>
      </aside>
    </>
  );
}

export default Sidebar; 