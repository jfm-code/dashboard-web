"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineChartData {
  labels: string[];
  data: number[];
}

const LineChart = () => {
  const [chartData, setChartData] = useState<LineChartData | null>(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/line-chart-data/')
      .then(response => setChartData(response.data))
      .catch(error => console.error('Error fetching line chart data', error));
  }, []);

  const data = {
    labels: chartData?.labels,
    datasets: [{
      label: 'Line Chart Data',
      data: chartData?.data,
      borderColor: 'rgba(75,192,192,1)',
      fill: false,
    }],
  };

  return chartData ? <Line data={data} /> : <div>Loading...</div>;
};

export default LineChart;
