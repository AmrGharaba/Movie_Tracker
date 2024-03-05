// MovieChartComponent.jsx
import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const BarChart = () => {
  const chartRef = useRef();
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Dune', 'Madame Web', '12 Years A Slave', 'Avengers: Endgame', 'Maleficent'],
        datasets: [
          {
            label: 'Most likes',
            data: [9.0, 8.1, 7.2, 6.5, 5.3],
            backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 
            'rgba(100, 60, 186, 0.5)', 'rgba(25, 201, 80, 0.5)', 'rgba(211, 26, 44, 0.5)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)',
            'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 10,
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
      <canvas ref={chartRef} width="400" height="200" />
    </div>
  );
};

export default BarChart;