import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const PolarAreaChart = () => {
  const chartRef = useRef();
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: 'polarArea',
      data: {
        labels: ['The Revenant', '12 Years a Slave', 'Fences', 'Captain Fantastic', 'La La Land'],
        datasets: [
          {
            label: 'Most Watched Movies',
            data: [9, 7, 6, 4, 3], // Replace with the actual frequency or popularity data
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(100, 62, 225, 0.5)',
              'rgba(200, 26, 186, 0.5)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(100, 140, 205, 1)',
              'rgba(250, 163, 200, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          r: {
            angleLines: {
              display: true,
            },
            suggestedMin: 0,
            suggestedMax: 10, // Adjust the max value based on your data
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className='mt-5'>
      <canvas ref={chartRef} width="400" height="50" />
    </div>
  );
};

export default PolarAreaChart;