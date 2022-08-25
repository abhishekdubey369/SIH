import "./navbar.css";
import React from "react";
import {Link} from 'react-router-dom';
import SIC from '../assets/sic.png';


import {
  AppBar,
  // Typography,
  Toolbar,
  // Box,
  // Button,
  // Tabs,
  // Tab,
} from "@mui/material";

function Mainnav(){
    return(
        <div className='navbar'>
      <AppBar
      position="fixed"
      sx={{
        background:
          "linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)",
      }}
    >
      <Toolbar>
      <span className="navbar__logo"><img src={SIC} height='90px' width='90px'/></span>
      <ul className="ul">

      <li className="navbar__item">
                <Link className="navbar__link" to='/'>
                  Home 
              </Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to='/auth'>
                  signIn
              </Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to='/auth1'>
                  signUp
              </Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to='/dash'>
                 Dashboard
              </Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to='/about'>
                  About
              </Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to='/links'>
                  Links
              </Link>
            </li>

      </ul>

      </Toolbar>
    </AppBar>

    </div>
    )
}

export default Mainnav;