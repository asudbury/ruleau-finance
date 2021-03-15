import React from "react";
import Chart from "../../components/charts/Chart";
import LineChartWithArea from "../../components/charts/LineChartWithArea";

export default function Overview() {
  return (
    <div>
      <Chart chart={LineChartWithArea}></Chart>
    </div>
  );
}
