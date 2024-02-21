import React, { useState } from "react";
import ApexBarChart from "../models/bar-chart";
import axios from "axios";
import ApexPieChart from "../models/pie-chart";

export default function SentimentAnalysis({ data }) {
  console.log("====================================");
  console.log("SENTIMENT ANALYSIS ", data);
  console.log("====================================");
  const [pieData, setPieData] = useState(null);

  const getPieData = async () => {
    axios
      .get("http://192.168.80.118:8000/sentiment")
      .then((response) => {
        setPieData(response.data);
        console.log("====================================");
        console.log("My Pie Data", response.data);
        console.log("====================================");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <>
      {data && getPieData() && (
        <>
          <div style={{ backgroundColor: "white", padding: 20 }}>
            <ApexBarChart data={data} />
          </div>
          <br />
        </>
      )}
      <div style={{ backgroundColor: "white", padding: 20 }}>
        <ApexPieChart pieData={pieData} />
      </div>
    </>
  );
}
