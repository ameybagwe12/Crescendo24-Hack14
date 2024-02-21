import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexPieChart extends React.Component {
  constructor(props) {
    super(props);

    const total = props.Positive + props.Negative + props.Neutral;
    const positivePercentage = (props.Positive * 100) / total;
    const negativePercentage = (props.Negative * 100) / total;
    const neutralPercentage = (props.Neutral * 100) / total;

    this.state = {
      series: [positivePercentage, negativePercentage, neutralPercentage],
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
