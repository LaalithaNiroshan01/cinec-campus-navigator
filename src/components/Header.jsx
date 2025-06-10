import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import cinecLogo from '../assets/cinec-logo.png';

function Header({ onSearch, onToggleTheme }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeRole, setActiveRole] = useState('student');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const notifRef = useRef();
  const navigate = useNavigate();

  const notifications = [
    { id: 1, title: 'New Event', message: 'Career Fair at Library tomorrow', time: '2 hours ago', type: 'event' },
    { id: 2, title: 'Route Update', message: 'New accessible route available to Engineering Building', time: '5 hours ago', type: 'route' },
    { id: 3, title: 'Campus Alert', message: 'Maintenance in Computer Lab B until 2 PM', time: '1 day ago', type: 'alert' }
  ];

  const userMenuItems = [
    { icon: 'ri-user-line', label: 'Profile', path: '/profile' },
    { icon: 'ri-settings-3-line', label: 'Settings', path: '/settings' },
    { icon: 'ri-question-line', label: 'Help', path: '/help' },
    { icon: 'ri-logout-box-line', label: 'Logout', path: null }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(searchQuery);
  };

  const handleUserMenuClick = (item) => {
    setShowUserMenu(false);
    if (item.path) navigate(item.path);
    // else handle logout
  };

  return (
    <header className="bg-glass border-b border-blue-100 shadow-lg w-full animate-fade-in sticky top-0 z-40">
      <div className="px-2 md:px-6 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Logo and Title */}
          <div className="flex items-center space-x-2 md:space-x-4 min-w-0 animate-scale-pop">
            <img src={cinecLogo} alt="CINEC Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-lg shadow flex-shrink-0 border border-blue-100" />
            <div className="truncate">
              <h1 className="text-lg md:text-2xl font-extrabold text-gray-800 truncate tracking-tight">CINEC</h1>
              <p className="text-xs md:text-base text-blue-500 font-semibold tracking-wide truncate">Campus Navigator</p>
            </div>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-lg mx-auto md:mx-8 w-full animate-fade-in" role="search">
            <div className="relative">
              <input
                type="text"
                className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary bg-white/80 shadow-md font-medium"
                placeholder="Search for a place, building, or office..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                aria-label="Search"
              />
              <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-primary hover:text-primary-600 transition-all" aria-label="Search">
                <i className="ri-search-line text-xl"></i>
              </button>
            </div>
          </form>

          {/* User Controls */}
          <div className="flex items-center space-x-2 md:space-x-4 relative animate-scale-pop">
            {/* Home Button */}
            <button
              className="w-10 h-10 flex items-center justify-center text-primary hover:text-white hover:bg-primary transition-all rounded-full bg-white/80 shadow border border-blue-100 focus:ring-2 focus:ring-primary"
              onClick={() => navigate('/')}
              aria-label="Home"
            >
              <i className="ri-home-4-line text-xl"></i>
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center text-primary hover:text-white hover:bg-primary transition-all rounded-full bg-white/80 shadow border border-blue-100 focus:ring-2 focus:ring-primary"
              onClick={() => setShowNotifications(!showNotifications)}
              aria-label="Show notifications"
              ref={notifRef}
            >
              <i className="ri-notification-3-line text-xl"></i>
            </button>
            {showNotifications && (
              <div className="absolute right-0 top-12 bg-glass border border-blue-100 rounded-2xl shadow-xl w-80 z-30 animate-slide-up backdrop-blur-md">
                <div className="px-4 py-2 border-b border-blue-100">
                  <h3 className="text-sm font-bold text-blue-700">Notifications</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map(notification => (
                    <div
                      key={notification.id}
                      className="px-4 py-3 hover:bg-primary/10 cursor-pointer transition-all"
                    >
                      <div className="flex items-start">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                          notification.type === 'event' ? 'bg-blue-100 text-blue-600' :
                          notification.type === 'route' ? 'bg-green-100 text-green-600' :
                          'bg-amber-100 text-amber-600'
                        }`}>
                          <i className={`ri-${
                            notification.type === 'event' ? 'calendar-event' :
                            notification.type === 'route' ? 'route' :
                            'notification'
                          }-line`}></i>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-bold text-gray-800">{notification.title}</h4>
                          <p className="text-sm text-gray-600">{notification.message}</p>
                          <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-4 py-2 border-t border-blue-100">
                  <button className="w-full text-sm text-primary hover:text-primary-600 transition-all font-semibold">
                    View All Notifications
                  </button>
                </div>
              </div>
            )}
            <button
              className="w-10 h-10 flex items-center justify-center text-primary hover:text-white hover:bg-primary transition-all rounded-full bg-white/80 shadow border border-blue-100 focus:ring-2 focus:ring-primary"
              onClick={() => setShowUserMenu(!showUserMenu)}
              aria-label="Show user menu"
            >
              <i className="ri-user-3-line text-xl"></i>
            </button>
            {showUserMenu && (
              <div className="absolute right-0 top-12 bg-glass border border-blue-100 rounded-2xl shadow-xl w-48 z-30 animate-slide-up backdrop-blur-md">
                {userMenuItems.map(item => (
                  <button
                    key={item.label}
                    className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-primary/10 transition-all font-semibold"
                    onClick={() => handleUserMenuClick(item)}
                    aria-label={item.label}
                  >
                    <i className={`${item.icon} mr-2`}></i> {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Role Filter */}
        <div className="mt-4 flex items-center space-x-4 animate-fade-in">
          <span className="text-sm text-blue-500 font-semibold">View as:</span>
          <div className="flex space-x-2">
            {['Student', 'Faculty', 'Visitor', 'Staff'].map(role => (
              <button
                key={role}
                onClick={() => setActiveRole(role.toLowerCase())}
                className={`px-3 py-1.5 text-sm font-bold rounded-lg transition-all duration-200 shadow-sm border border-blue-100 ${
                  activeRole === role.toLowerCase()
                    ? 'bg-primary text-white'
                    : 'bg-white/80 text-blue-700 hover:bg-primary/10'
                }`}
                aria-label={`View as ${role}`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header; 