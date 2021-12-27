import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  let dataPoints = [
    { label: "Oca", value: 0 },
    { label: "Şub", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Haz", value: 0 },
    { label: "Tem", value: 0 },
    { label: "Ağu", value: 0 },
    { label: "Eyl", value: 0 },
    { label: "Eki", value: 0 },
    { label: "Kas", value: 0 },
    { label: "Ara", value: 0 },
  ];

  props.expenses.forEach((expense) => {
    dataPoints[expense.date.getMonth()].value += expense.amount;
  });

  return <Chart dataPoints={dataPoints} />;
};

export default ExpensesChart;
