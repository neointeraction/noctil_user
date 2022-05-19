export const chartOptions = {
  responsive: false,
  //   aspectRatio: 4,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: "bottom",
      align: "start",
      labels: {
        padding: 20,
        usePointStyle: true,
        font: {
          family: "Red Hat Display",
          size: 12,
          weight: "400",
        },
      },
      title: {
        padding: 20,
      },
    },
    tooltip: {
      bodyFont: {
        family: "Red Hat Display",
        size: 12,
        weight: "400",
      },
    },
  },
};
