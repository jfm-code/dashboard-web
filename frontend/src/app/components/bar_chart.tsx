"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartData {
  labels: string[];
  data: number[];
}

const BarChart = () => {
  const [chartData, setChartData] = useState<BarChartData | null>(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/bar-chart-data/')
      .then(response => setChartData(response.data))
      .catch(error => console.error('Error fetching bar chart data', error));
  }, []);

  const data = {
    labels: chartData?.labels,
    datasets: [{
      label: 'Bar Chart Data',
      data: chartData?.data,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    }],
  };

  return chartData ? <Bar data={data} /> : <div>Loading...</div>;
};

export default BarChart;