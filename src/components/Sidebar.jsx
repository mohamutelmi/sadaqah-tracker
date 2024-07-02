import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaMoneyBillWave, FaSuitcase, FaCheckCircle, FaLifeRing, FaCog } from 'react-icons/fa';
import Settings from '../pages/Settings'; // Import the Settings component

const Sidebar = () => {
  const activeClass = 'bg-gray-700 text-green-400';
  const defaultClass = 'text-white';

  return (
    <div className="h-screen bg-gray-800 w-64 space-y-6 py-7 px-2">
      <div className="text-2xl font-extrabold text-white">
        <NavLink to="/">Zadaqah-Tracker</NavLink>
      </div>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => 
            `flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 ${isActive ? activeClass : defaultClass}`
          }
        >
          <FaHome className="mr-3" />
          Home
        </NavLink>
        <NavLink
          to="/expenses"
          className={({ isActive }) => 
            `flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 ${isActive ? activeClass : defaultClass}`
          }
        >
          <FaMoneyBillWave className="mr-3" />
          Donated
        </NavLink>
        <NavLink
          to="/trips"
          className={({ isActive }) => 
            `flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 ${isActive ? activeClass : defaultClass}`
          }
        >
          <FaSuitcase className="mr-3" />
          Give Sadaqah
        </NavLink>
        <NavLink
          to="/approvals"
          className={({ isActive }) => 
            `flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 ${isActive ? activeClass : defaultClass}`
          }
        >
          <FaCheckCircle className="mr-3" />
          Managers
        </NavLink>
        <div className="relative">
          <NavLink
           
          >
            <Settings /> {/* Embed Settings component */}
          </NavLink>
        </div>
        <NavLink
          to="/support"
          className={({ isActive }) => 
            `flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 ${isActive ? activeClass : defaultClass}`
          }
        >
          <FaLifeRing className="mr-3" />
          Support
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
