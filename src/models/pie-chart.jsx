import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexPieChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [props.data.Positive, props.data.Negative, props.data.Neutral],
      options: {
        chart: {
          width: 380,
          type: "pie",
        },
        labels: ["Postive", "Negative", "Neutral"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="pie"
            width={380}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default ApexPieChart;
