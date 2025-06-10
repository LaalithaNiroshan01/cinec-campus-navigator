import React from 'react';
import Sidebar from './Sidebar';
import MapSection from './MapSection';

function MainContent() {
  return (
    <main className="flex flex-1 overflow-hidden">
      <Sidebar />
      <MapSection />
    </main>
  );
}

export default MainContent; 