import React from "react";
import "../styles/analysis.css";
import { Player } from "@lottiefiles/react-lottie-player";
import SectionTabs from "./tab.jsx";

export default function Analysis() {
  return (
    <>
      <div className="mainPic">
        <Player
          autoplay
          loop
          src={require("./my_assets/AnimationNav.json")}
          style={{ height: "30%", width: "50%" }}
        ></Player>
      </div>
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
        <SectionTabs />
      </div>
    </>
  );
}
