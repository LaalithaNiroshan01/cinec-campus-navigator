import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Help from './pages/Help';

function App() {
  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 flex overflow-hidden">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </main>
      <footer className="w-full bg-white/90 border-t border-blue-100 shadow-inner flex items-center justify-between px-6 py-2 text-sm font-semibold text-gray-700 animate-fade-in">
        <div className="flex items-center gap-2">
          <span role="img" aria-label="weather">☀️</span> 26°C, Sunny
        </div>
        <div>10:30 AM, Saturday</div>
        <div className="text-amber-600 font-bold">Campus Alert: Maintenance in Engineering Building (3rd floor) until 2 PM</div>
      </footer>
    </div>
  );
}

export default App;
