import React, { useState } from "react";
import "./style/SearchBar.css";
import { styled, alpha } from "@mui/material/styles";
import Analysis from "./analysis";
import axios from "axios";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

export default function SearchBar() {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: 0,
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
      paddingRight: `calc(1em + ${theme.spacing(4)})`,

      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "45ch",
        },
      },
    },
  }));

  const [searchTerm, setSearchTerm] = useState("");
  const [data, getData] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://192.168.80.118:8000", {
        searchTerm,
      });
      console.log(response.data);
      getData(response.data);
      // Handle the response as needed
    } catch (error) {
      console.error(error);
      // Handle errors
    }
  };
  return (
    <>
      <div className="animated-div">
        <div className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div
          style={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center ",
            flexDirection: "column",
          }}
        >
          <Search style={{ borderRadius: "100px" }}>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Search>
          <ColorButton
            style={{ marginTop: 10 }}
            onClick={handleSubmit}
            variant="contained"
          >
            Search
          </ColorButton>
        </div>
      </div>
      <Analysis data={data} />
    </>
  );
}
