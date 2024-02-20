import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexBarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: this.props.data.words, // Use words from props for x-axis
          title: {
            text: "Words",
          },
        },
        yaxis: {
          title: {
            text: "Frequency",
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "Frequency: " + val;
            },
          },
        },
      },
      series: [
        {
          name: "Frequency",
          data: this.props.data.freq, // Use frequencies from props for y-axis
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            height={350}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default ApexBarChart;
