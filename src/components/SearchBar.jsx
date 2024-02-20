import React from 'react';
import "./style/SearchBar.css";
import { styled, alpha } from "@mui/material/styles";
import Analysis from './analysis';
import InputBase from "@mui/material/InputBase";
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
          transition: theme.transitions.create("width"),
          [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
              width: "45ch",
            },
          },
        },
      }));
  return (
    <>    <div className='animated-div'   >
    <div className='box'>
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
    <div style={{ color: "white", display: "flex", justifyContent: "center",alignItems:"center " }}>
  
      <Search style={{borderRadius:"100px"}}>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
     </div>
  </div>
  <Analysis />
  </>

  )
}
