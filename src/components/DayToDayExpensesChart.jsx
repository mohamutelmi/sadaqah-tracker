import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const data = {
  labels: ['Accommodation', 'Comms', 'Services', 'Food', 'Fuel'],
  datasets: [
    {
      label: 'Sadaqah',
      data: [20000, 15000, 30000, 25000, 10000],
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const DayToDayExpensesChart = () => (
  <Bar data={data} options={options} />
);

export default DayToDayExpensesChart;
