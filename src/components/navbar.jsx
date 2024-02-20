import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import "../styles/navbar.css";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <Typography
            className="text-flicker-in-glow"
            style={{
              marginLeft: 10,
              fontFamily: "Lobster",
              fontWeight: "400",
              fontSize: 50,
              display: "flex",
              justifyContent: "center",
            }}
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                sm: "block",
                color: "orange",
              },
            }}
          >
            Oralizer
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
