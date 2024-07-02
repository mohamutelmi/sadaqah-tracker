import React, { useState, useEffect, useRef } from 'react';
import { FaSun, FaMoon, FaCog } from 'react-icons/fa';

const Settings = () => {
  const [isThemeSelectorVisible, setThemeSelectorVisible] = useState(false);
  const [theme, setTheme] = useState('dark');
  const themeSelectorRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (themeSelectorRef.current && !themeSelectorRef.current.contains(event.target)) {
        setThemeSelectorVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [themeSelectorRef]);

  useEffect(() => {
    document.documentElement.classList.toggle('light-theme', theme === 'light');
    document.documentElement.classList.toggle('dark-theme', theme === 'dark');
  }, [theme]);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div className="relative" ref={themeSelectorRef}>
      <button
        className="bg-gray-800 text-white py-2 px-4 rounded flex items-center"
        onClick={() => setThemeSelectorVisible(!isThemeSelectorVisible)}
      >
        <FaCog />
      </button>
      {isThemeSelectorVisible && (
        <div className="absolute left-full top-0 mt-2 ml-2 w-48 bg-gray-800 rounded-lg shadow-lg p-4">
          <button
            className="flex items-center justify-between w-full py-2 px-4 rounded hover:bg-gray-700"
            onClick={() => toggleTheme('light')}
          >
            <FaSun className="text-yellow-500" />
            <span className="ml-2 text-white">Light Theme</span>
          </button>
          <button
            className="flex items-center justify-between w-full py-2 px-4 rounded hover:bg-gray-700"
            onClick={() => toggleTheme('dark')}
          >
            <FaMoon className="text-blue-500" />
            <span className="ml-2 text-white">Dark Theme</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Settings;
