import React from 'react';
import { Line } from 'react-chartjs-2';
function LineChart({ chartData }) {
  console.log('chartData', chartData);
  return (
    <div className='chart-container'>
      <Line
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}
export default LineChart;
