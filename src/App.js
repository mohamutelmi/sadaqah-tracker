import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Expenses from './pages/Donated';
import Trips from './pages/Trips';
import Approvals from './pages/Managers';
import Settings from './pages/Settings';
import Donate from './pages/Donate';
import Support from './pages/Support';

function App() {
  return (
    <Router>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="flex-grow p-6 bg-gray-900 overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/approvals" element={<Approvals />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
