import React from 'react';
import Link from 'next/link';
import LineChart from '../app/components/line_chart';

const HomePage = () => {
  return (
    <div>
      <header>
          <nav>
            <a href="/">Home</a>
          </nav>
      </header>
      <h1>Welcome to My Custom Dashboard</h1>
      <p>This is the landing page of the application.</p>
      <LineChart />
    </div>
  );
};

export default HomePage;
