import React from "react";
import { object } from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import ChartistGraph from "react-chartist";
import Typography from "@material-ui/core/Typography";
import "./chartist.css";

function Chart(props) {
  const { chart } = props;
  return (
    <Card>
      <CardContent>
        <ChartistGraph
          className="ct-chart ct-major-sixth"
          type={chart.type}
          data={chart.data}
          options={chart.options}
          listener={chart.listener}
        />
        <Typography
          color="textSecondary"
          align="center"
          variant="body2"
          gutterBottom
        >
          {chart.title}
        </Typography>
      </CardContent>
    </Card>
  );
}

Chart.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  chart: object.isRequired,
};

export default Chart;
