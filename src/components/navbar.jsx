import * as React from "react";
import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import axios from "axios"; // Import Axios
import "../styles/navbar.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: 500,
  height: 50,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  height: "100%", // Increase the height

  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "45ch",
      },
    },
  },
}));

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("YOUR_API_ENDPOINT", { searchTerm });
      console.log(response.data);
      // Handle the response as needed
    } catch (error) {
      console.error(error);
      // Handle errors
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <img
            src={require("./my_assets/analysis_pic.jpg")}
            width={"5%"}
            alt="mainPic"
          />
          <Typography
            className="text-flicker-in-glow"
            style={{
              marginLeft: 10,
              fontFamily: "Lobster",
              fontWeight: "400",
              fontSize: 50,
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
          <Search>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onClick={handleSubmit}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
