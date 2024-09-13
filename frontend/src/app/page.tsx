import React from 'react';
import Head from 'next/head';
import LineChart from './components/line_chart';
import BarChart from './components/bar_chart';
import CandlestickChart from './components/candlestick_chart';
import PieChart from './components/pie_chart';

const HomePage = () => {
  return (
    <html lang="en">
      <Head>
        <title>Jessica's Custom Dashboard</title>
        <meta name="description" content="A simple dashboard created by Jessica using Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <main>
          <h1 className='flex justify-center text-3xl pt-8 text-teal-700 font-semibold'>Welcome to Jessica's Custom Dashboard</h1>

          {/* Charts */}
          <div className='container mx-auto my-8 w-1/2 text-center flex flex-col gap-y-10'>
            <div>
              <h2 className='rounded-md p-1.5 my-3 mx-2 text-lg text-white font-semibold bg-teal-600'>Line Chart</h2>
              <LineChart />
            </div>
            <div>
              <h2 className='rounded-md p-1.5 my-3 mx-2 text-lg text-white font-semibold bg-teal-600'>Bar Chart</h2>
              <BarChart />
            </div>
            <div>
              <h2 className='rounded-md p-1.5 my-3 mx-2 text-lg text-white font-semibold bg-teal-600'>Candlestick Chart</h2>
              <CandlestickChart />
            </div>
            <div className='w-2/3 mx-auto'>
              <h2 className='rounded-md p-1.5 my-3 mx-2 text-lg text-white font-semibold bg-teal-600'>Pie Chart</h2>
              <PieChart />
            </div>
        </div>
        </main>
        <footer>
          <p className='flex justify-center p-5 bg-teal-600 text-white'>© 2024 Jessica's Custom Dashboard</p>
        </footer>
      </body>
    </html>
  );
};

export default HomePage;
