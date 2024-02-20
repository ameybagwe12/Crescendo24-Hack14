import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function SectionTabs() {
  const [value, setValue] = React.useState(0); // Change the initial value to 0 or 1

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="disabled tabs example"
    >
      <Tab
        label="Sentiment Analysis"
        sx={{ color: "white", fontWeight: "bold" }} // Set the tab color to white
      />
      <Tab
        label="More Information"
        sx={{ color: "white", fontWeight: "bold" }} // Set the tab color to white
      />
    </Tabs>
  );
}
