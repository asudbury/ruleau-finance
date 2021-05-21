const LineChartWithArea = {
  title: " Cases processed per day",
  type: "Line",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    series: [[5, 9, 7, 8, 5, 6, 5, 4]],
  },
  options: {
    showArea: true,
  },
};

export default LineChartWithArea;
