import React from "react";
import Chart from "react-apexcharts";
import { useTheme } from "next-themes";

const SpineChart = () => {
  const { theme } = useTheme();

  const series = [
    { name: "North", data: [20, 22, 18, 24, 20] },
    { name: "South", data: [30, 32, 35, 40, 42] },
    { name: "East", data: [25, 20, 22, 26, 28] },
    { name: "West", data: [15, 12, 10, 15, 17] },
  ];

  const chartOptions = {
    chart: {
      height: 350,
      type: "line",
      foreColor: theme === "dark" ? "#fff" : "#333",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
      background: "transparent",
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: "Pollution Levels Over Time",
      align: "center",
      style: {
        color: theme === "dark" ? "#fff" : "#333",
      },
    },
    grid: {
      row: {
        colors:
          theme === "dark"
            ? ["#454545", "transparent"]
            : ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
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
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May"],
      title: {
        text: "Month",
        style: {
          color: theme === "dark" ? "#fff" : "#333",
        },
      },
    },
    yaxis: {
      title: {
        text: "Pollution Level",
        style: {
          color: theme === "dark" ? "#fff" : "#333",
        },
      },
    },
  };

  return (
    <div id='chart'>
      <Chart options={chartOptions} series={series} type='line' height={450} />
    </div>
  );
};

export default SpineChart;
