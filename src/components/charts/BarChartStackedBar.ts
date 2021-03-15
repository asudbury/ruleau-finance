const BarChartStackedBar = {
  title: "Quarterly Completed Cases",
  type: "Bar",
  data: {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    series: [[200, 500, 100, 400]],
  },
  options: {
    stackBars: true,
  },
  listener: {
    draw(data: {
      type: string;
      element: { attr: (arg0: { style: string }) => void };
    }) {
      if (data.type === "bar") {
        data.element.attr({
          style: "stroke-width: 30px",
        });
      }
    },
  },
};

export default BarChartStackedBar;
