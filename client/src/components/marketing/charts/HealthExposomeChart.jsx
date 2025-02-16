import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { useTheme } from "next-themes";

const HealthExposomeChart = () => {
  const { theme } = useTheme();

  // Initial data setup
  const data = {
    months: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    pollutionLevels: [25, 30, 35, 40, 45, 50, 55, 50, 65, 70, 75, 60],
    asthmaRates: [10, 12, 14, 13, 15, 17, 16, 18, 20, 22, 21, 19],
  };

  const { months, pollutionLevels, asthmaRates } = data;

  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const options = {
    chart: {
      height: 350,
      type: "line",
      foreColor: theme === "dark" ? "#fff" : "#333",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: [0, 4],
    },
    title: {
      text: "Monthly Pollution and Asthma Incidence Rates",
      align: "center",
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
    },
    labels: months,
    tooltip: {
      theme: theme === "dark" ? "dark" : "light",
      x: {
        show: false,
      },
      y: {
        formatter: (val) => `${val}`,
        title: {
          formatter: (seriesName) => `${seriesName}:`,
        },
      },
      marker: {
        show: false,
      },
    },
    xaxis: {
      type: "category",
    },
    yaxis: [
      {
        title: {
          text: "Pollution Level (PM2.5)",
        },
      },
      {
        opposite: true,
        title: {
          text: "Asthma Incidence Rate",
        },
      },
    ],
  };

  const series = [
    {
      name: "Pollution Levels",
      type: "column",
      data: pollutionLevels,
    },
    {
      name: "Asthma Rates",
      type: "line",
      data: asthmaRates,
    },
  ];

  return (
    <div id='chart'>
      <Chart
        key={key}
        options={options}
        series={series}
        type='line'
        height={490}
      />
    </div>
  );
};

export default HealthExposomeChart;
