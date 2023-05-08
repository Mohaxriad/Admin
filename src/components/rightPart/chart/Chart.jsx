import { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';

const Graph3 = () => {
  const [chart, setChart] = useState(null);

  useEffect(() => {
    const ctx = document.getElementById('graph3').getContext('2d');

    const data = {
      labels: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin'],
      datasets: [
        {
          label: 'Nombre de visites',
          data: [500, 1000, 1500, 2000, 2500, 3000],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
        {
          label: 'Nombre de recherches',
          data: [100, 200, 300, 400, 500, 600],
          backgroundColor: 'rgba(255, 159, 64, 0.2)',
          borderColor: 'rgba(255, 159, 64, 1)',
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

    const chart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options,
    });

    setChart(chart);

    return () => chart.destroy();
  }, []);

  return <canvas id="graph3"></canvas>;
};

export default Graph3;