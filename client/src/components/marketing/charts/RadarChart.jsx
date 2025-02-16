import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const RadarChart = ({ theme }) => {
  const [chartOptions, setChartOptions] = useState({
    chart: {
      height: 350,
      type: "radar",
      foreColor: theme === "dark" ? "#fff" : "#333",
    },
    title: {
      text: "Exposome Data Visualization",
    },
    xaxis: {
      categories: [
        "Air Quality",
        "Water Quality",
        "Radiation",
        "Pesticides",
        "Noise Pollution",
      ],
    },
    yaxis: {
      tickAmount: 5,
      labels: {
        formatter: (val) => `${val}`, // No percentage formatting needed
      },
    },
    tooltip: {
      y: {
        formatter: (val) => `${val}`, // Simple value display
      },
    },
    markers: {
      size: 4,
      colors: ["#fff"],
      strokeColor: "#FF4560",
      strokeWidth: 2,
    },
  });

  const [chartSeries, setChartSeries] = useState([
    {
      name: "Region A",
      data: [75, 60, 55, 70, 50], // Real data for Region A
    },
    {
      name: "Region B",
      data: [45, 80, 65, 60, 85], // Real data for Region B
    },
  ]);

  return (
    <div id='chart'>
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type='radar'
        height={650}
      />
    </div>
  );
};

export default RadarChart;
