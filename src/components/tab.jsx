import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SentimentAnalysis from "./sentiment.jsx"; // Import your SentimentAnalysis component
import MoreInformation from "./more-info"; // Import your MoreInformation component

export default function SectionTabs({ data }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab
          label="Sentiment Analysis"
          sx={{ color: "white", fontWeight: "bold" }}
        />
        <Tab
          label="More Information"
          sx={{ color: "white", fontWeight: "bold" }}
        />
      </Tabs>
      {value === 0 && <SentimentAnalysis data={data} />}
      {value === 1 && <MoreInformation />}
    </div>
  );
}
