"use client";

import React, { useEffect, useState } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";

interface CandlestickData {
  x: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

const CandlestickChart = () => {
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/candlestick-data/')
      .then((response) => {
        const formattedData = response.data.data.map((item: CandlestickData) => [
          new Date(item.x).getTime(), // x-value (timestamp)
          item.open, // open
          item.high, // high
          item.low, // low
          item.close, // close
        ]);
        setChartData(formattedData);
      })
      .catch((error) => console.error("Error fetching candlestick data", error));
  }, []);

  const options = {
    // title: {
    //   text: "Candlestick Chart",
    // },
    series: [
      {
        type: "candlestick",
        name: "Stock Price",
        data: chartData,
      },
    ],
    xAxis: {
      type: "datetime",
    },
    yAxis: {
      title: {
        text: "Price",
      },
    },
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} constructorType={"stockChart"} options={options} />
    </div>
  );
};

export default CandlestickChart;
