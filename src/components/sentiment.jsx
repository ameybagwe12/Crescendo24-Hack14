import React, { useState } from "react";
import ApexBarChart from "../models/bar-chart";
import axios from "axios";
import ApexPieChart from "../models/pie-chart";
import Button from "@mui/material/Button";
import IntroDivider from "./Table1.jsx";

export default function SentimentAnalysis({ data }) {
  console.log("====================================");
  console.log("SENTIMENT ANALYSIS ", data);
  console.log("====================================");
  const [pieData, setPieData] = useState(null);
  const [bingData, setBingData] = useState("");

 
  const getBingData = async () => {
    axios
      .get("http://192.168.80.118:8000/bing")
      .then((response) => {
        setBingData(response.data);
        console.log("====================================");
        console.log("My Bing Data", response.data);
        console.log("====================================");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

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
      {data && (
        <>
          <div style={{ backgroundColor: "white", padding: 20 }}>
            <ApexBarChart data={data} />
          </div>
          <br />
        </>
      )}
      <Button
        style={{ marginTop: 15 }}
        onClick={getPieData}
        variant="contained"
      >
        Pie Chart
      </Button>
      {pieData && (
        <div style={{ backgroundColor: "white", padding: 20, marginTop: 10 }}>
          <ApexPieChart pieData={pieData} />
        </div>
      )}
      <Button
        style={{ marginTop: 15 }}
        onClick={getBingData}
        variant="contained"

      >
      Summarize</Button>

      <div style={{ textAlign: "center", color: "white" }}>
      <h2>SUMMARY</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "30px",
        }}
      >
        <IntroDivider
          name={"Positive"}
          img={"https://i.imgur.com/OKM8toO.png"}
          bg={"rgb(208, 240, 192)"}
          pnnData={bingData.Positive}
        />
        <IntroDivider
          name={"Neutral Feedback"}
          img={"https://i.imgur.com/53O26t9.png"}
          bg={"rgb(255, 255, 224)"}
          pnnData={bingData.Neutral}

        />
        <IntroDivider
          name={"Negative Feedback"}
          img={"https://i.imgur.com/YxGAW71.png"}
          bg={"rgb( 255,221,221)"}
          pnnData={bingData.Negative}

        />
      </div>
    </div>

    </>
  );
}
