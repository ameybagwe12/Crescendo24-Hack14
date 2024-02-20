import React from "react";
import ApexBarChart from "../models/bar-chart";

export default function SentimentAnalysis({ data }) {
  console.log("====================================");
  console.log("SENTIMENT ANALYSIS ", data);
  console.log("====================================");
  return (
    <>
      {data && (
        <div style={{ backgroundColor: "white", padding: 20 }}>
          <ApexBarChart data={data} />
        </div>
      )}
    </>
  );
}
