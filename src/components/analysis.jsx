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
      
    </>
  );
}
