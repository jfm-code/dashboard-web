"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartData {
  labels: string[];
  data: number[];
}

const PieChart = () => {
  const [chartData, setChartData] = useState<PieChartData | null>(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/pie-chart-data/')
      .then(response => setChartData(response.data))
      .catch(error => console.error('Error fetching pie chart data', error));
  }, []);

  if (!chartData) return <div>Loading...</div>;

  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: 'Pie Chart Data',
        data: chartData.data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} />;
};

export default PieChart;
