// import React from "react";
// import ReactApexChart from "react-apexcharts";
// import { useTheme } from "next-themes";

// const EnvironmentalHeatmap = () => {
//   const { theme } = useTheme();

//   const getOptions = (theme) => {
//     return {
//       chart: {
//         type: "heatmap",
//         // height: 350,
//         foreColor: theme === "dark" ? "#fff" : "#333",
//         toolbar: {
//           show: false,
//         },
//       },
//       tooltip: {
//         theme: theme === "dark" ? "dark" : "light",
//         x: {
//           show: false,
//         },
//         y: {
//           formatter: (val) => `${val}`,
//           title: {
//             formatter: (seriesName) => `${seriesName}:`,
//           },
//         },
//         marker: {
//           show: false,
//         },
//         style: {
//           fontSize: "12px",
//           fontFamily: undefined,
//         },
//       },
//       dataLabels: {
//         enabled: false,
//       },
//       colors: "#FF4560",
//       title: {
//         text: "Regional Air Quality - Pollutant Levels",
//         align: "center",
//       },
//       xaxis: {
//         type: "category",
//         categories: ["North", "South", "East", "West", "Central"],
//       },
//       yaxis: {
//         title: {
//           text: "Pollutants",
//         },
//       },

//       plotOptions: {
//         heatmap: {
//           shadeIntensity: 0.5,
//           radius: 0,
//           useFillColorAsStroke: true,
//           colorScale: {
//             ranges: [
//               {
//                 from: 0,
//                 to: 25,
//                 name: "low",
//                 // color: theme === "dark" ? "#556270" : "#00A100", // Color changes based on theme

//                 color: "#00A100",
//               },
//               {
//                 from: 26,
//                 to: 75,
//                 name: "moderate",
//                 color: "#128FD9",
//               },
//               {
//                 from: 76,
//                 to: 150,
//                 name: "high",
//                 color: "#FFB200",
//               },
//               {
//                 from: 151,
//                 to: 300,
//                 name: "very high",
//                 color: "#FF0000",
//               },
//             ],
//           },
//         },
//       },
//     };
//   };

//   const options = getOptions(theme);

//   const series = [
//     {
//       name: "PM2.5",
//       data: [70, 90, 50, 80, 120],
//     },
//     {
//       name: "PM10",
//       data: [60, 80, 40, 70, 110],
//     },
//     {
//       name: "NO2",
//       data: [30, 40, 20, 60, 90],
//     },
//     {
//       name: "SO2",
//       data: [40, 60, 50, 80, 100],
//     },
//     {
//       name: "Ozone",
//       data: [90, 100, 80, 120, 160],
//     },
//   ];

//   return (
//     <ReactApexChart
//       options={options}
//       series={series}
//       type='heatmap'
//       height={550}
//     />
//   );
// };

// export default EnvironmentalHeatmap;

import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { useTheme } from "next-themes";

const EnvironmentalHeatmap = () => {
  const { theme } = useTheme();
  const [series, setSeries] = useState([
    { name: "PM2.5", data: [70, 90, 50, 80, 120] },
    { name: "PM10", data: [60, 80, 40, 70, 110] },
    { name: "NO2", data: [30, 40, 20, 60, 90] },
    { name: "SO2", data: [40, 60, 50, 80, 100] },
    { name: "Ozone", data: [90, 100, 80, 120, 160] },
  ]);

  const getOptions = (theme) => {
    return {
      chart: {
        type: "heatmap",
        foreColor: theme === "dark" ? "#fff" : "#333",
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        theme: theme === "dark" ? "dark" : "light",
        x: { show: false },
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
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: "#FF4560",
      title: {
        text: "Regional Air Quality - Pollutant Levels",
        align: "center",
      },
      xaxis: {
        type: "category",
        categories: ["North", "South", "East", "West", "Central"],
      },
      yaxis: {
        title: {
          text: "Pollutants",
        },
      },
      plotOptions: {
        heatmap: {
          shadeIntensity: 0.5,
          radius: 0,
          useFillColorAsStroke: true,
          colorScale: {
            ranges: [
              { from: 0, to: 25, name: "low", color: "#00A100" },
              { from: 26, to: 75, name: "moderate", color: "#128FD9" },
              { from: 76, to: 150, name: "high", color: "#FFB200" },
              { from: 151, to: 300, name: "very high", color: "#FF0000" },
            ],
          },
        },
      },
    };
  };

  const options = getOptions(theme);

  useEffect(() => {
    const interval = setInterval(() => {
      const newSeries = series.map((item) => ({
        ...item,
        data: item.data.map(
          (value) => Math.floor(Math.random() * (300 - 20 + 1)) + 20
        ),
      }));
      setSeries(newSeries);
    }, 5000);

    return () => clearInterval(interval);
  }, [series]);

  return (
    <ReactApexChart
      options={options}
      series={series}
      type='heatmap'
      height={550}
    />
  );
};

export default EnvironmentalHeatmap;
