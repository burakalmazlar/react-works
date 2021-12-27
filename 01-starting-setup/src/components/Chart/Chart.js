import React from "react";

import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const maxValue = props.dataPoints
    .map((dp) => dp.value)
    .reduce((a, b) => a + b);

  return (
    <div className="chart">
      {props.dataPoints.map((dp) => (
        <ChartBar
          key={dp.label}
          label={dp.label}
          value={dp.value}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
};

export default Chart;
