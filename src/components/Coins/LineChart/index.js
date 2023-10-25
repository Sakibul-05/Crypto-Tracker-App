import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; 
import { convertNumber } from "../../../functions/convertNumber";
 

function LineChart({ chartData, priceType, multiAxis }) {
    const options = {
        plugins: {
            legend: {
                display: multiAxis ? true : false,
            },
        },
        responsive: true,
        interaction: {
            mode: "index",
            intersect: false,
        },
        scales: {
            y: {
                type: "linear",
                display: true,
                position: "left",
                ticks: {
                    callback: function (value) {
                        if (priceType === "total_volumes") {
                            return convertNumber(value);
                        } else if (priceType === "market_caps") {
                            return "₹" + convertNumber(value);
                        } else {
                            return "₹" + value.toLocaleString('en-IN');
                        }
                    },
                },
            },
            y2: multiAxis && {
                type: "linear",
                display: true,
                position: "right",
                ticks: {
                    callback: function (value) {
                        if (priceType === "total_volumes") {
                            return convertNumber(value);
                        } else if (priceType === "market_caps") {
                            return "₹" + convertNumber(value);
                        } else {
                            return "₹" + value.toLocaleString("en-IN");
                        }
                    },
                },
            },
        },
    };

    return <Line data={chartData} options={options} />;
}

export default LineChart;