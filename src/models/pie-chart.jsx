import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexPieChart extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      series: [props.pieData.Positive, props.pieData.Negative, props.pieData.Neutral],
      options: {
        chart: {
          width: 380,
          type: "pie",
        },
        labels: ["Positive", "Negative", "Neutral"],
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
        tooltip: {
          enabled: true,
          formatter: function (val) {
            return val + "%";
          },
        },
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
      </div>
    );
  }
}

export default ApexPieChart;
