import React from "react";
import "../styles/analysis.css";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Analysis() {
  return (
    <div className="mainPic">
      <Player
        autoplay
        loop
        src={require("./my_assets/AnimationNav.json")}
        style={{ height: "30%", width: "50%" }}
      ></Player>
    </div>
  );
}
