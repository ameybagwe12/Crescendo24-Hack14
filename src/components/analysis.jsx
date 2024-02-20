import React from "react";
import "../styles/analysis.css";
import SectionTabs from "./tab.jsx";
import IntroDivider from "./Table1.jsx";
export default function Analysis({ data }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <hr style={{ color: "white", paddingRight: 700, paddingLeft: 700 }} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SectionTabs data={data} />
      </div>
      <hr style={{ color: "white", paddingRight: 700, paddingLeft: 700 }} />
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
          />
          <IntroDivider
            name={"Neutral Feedback"}
            img={"https://i.imgur.com/53O26t9.png"}
            bg={"rgb(255, 255, 224)"}
          />
          <IntroDivider
            name={"Negative Feedback"}
            img={"https://i.imgur.com/YxGAW71.png"}
            bg={"rgb( 255,221,221)"}
          />
        </div>
      </div>
    </>
  );
}
