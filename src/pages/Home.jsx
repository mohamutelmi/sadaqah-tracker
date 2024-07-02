import React from 'react';
import TeamSpendingTrendChart from '../components/TeamSpendingTrendChart';
import DayToDayExpensesChart from '../components/DayToDayExpensesChart';

const Home = () => {
  return (
    <div className="h-full flex flex-col space-y-6 overflow-hidden">
      <div className="flex-grow grid grid-cols-2 gap-4">
        <div className="bg-gray-700 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-white">Pending Zadaqah Tasks</h2>
          <ul className="mt-2 space-y-2">
            <li className="flex justify-between">
              <span className="text-gray-400">Pending Zadaqah</span>
              <span className="text-white">5</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-400">New Zadaqah Registered</span>
              <span className="text-white">1</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-400">Unreported Zadaqah</span>
              <span className="text-white">4</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-400">Upcoming Zadaqah</span>
              <span className="text-white">0</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-400">Unreported Advances Zadaqah</span>
              <span className="text-white">€0.00</span>
            </li>
          </ul>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-white">Recent Zadaqah</h2>
          <ul className="mt-2 space-y-2">
            <li className="flex justify-between">
              <span className="text-gray-400">Masjid Zadaqah</span>
              <span className="text-white">Abdirashid</span>
              <span className="text-green-400">Somalia</span>
              <span className="text-white">$150.00</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-400">Food Zadaqah</span>
              <span className="text-white">Abdi</span>
              <span className="text-red-400">Somalia</span>
              <span className="text-white">€75.50</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-400">Umrah Zadaqah</span>
              <span className="text-white">Ali</span>
              <span className="text-purple-400">Somalia</span>
              <span className="text-white">€450.25</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-400">Orphan Zadaqah</span>
              <span className="text-white">Mowliid</span>
              <span className="text-green-400">Somalia</span>
              <span className="text-white">€120.00</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-400">Land</span>
              <span className="text-white"> Daaúud</span>
              <span className="text-blue-400">Somalia</span>
              <span className="text-white">€275.75</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-700 p-4 rounded-lg flex-grow">
        <h2 className="text-xl font-semibold text-white">Monthly Report</h2>
        <div className="mt-4 grid grid-cols-2 gap-4 h-full">
          <div className="h-full">
            <h3 className="text-lg font-semibold text-white">Team Spending Trend</h3>
            <div className="bg-gray-800 p-4 rounded mt-2 h-full">
              <TeamSpendingTrendChart />
            </div>
          </div>
          <div className="h-full">
            <h3 className="text-lg font-semibold text-white">Day-to-Day Zadaqah</h3>
            <div className="bg-gray-800 p-4 rounded mt-2 h-full">
              <DayToDayExpensesChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
