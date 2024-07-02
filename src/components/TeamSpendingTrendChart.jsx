import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const data = {
  labels: ['P3', 'S3', 'M8', 'IS', 'DW', 'N3', 'BS'],
  datasets: [
    {
      label: 'Spending',
      data: [30000, 50000, 40000, 45000, 35000, 30000, 25000],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
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

const TeamSpendingTrendChart = () => (
  <Bar data={data} options={options} />
);

export default TeamSpendingTrendChart;
