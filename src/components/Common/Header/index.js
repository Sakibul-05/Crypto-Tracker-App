import React, {useEffect, useState} from 'react'
import "./styles.css"
import MobileDrawer from './drawer'
import BasicButton from '../Button'
import { Link, useNavigate } from 'react-router-dom'
import { Switch } from "@mui/material";
import { toast } from "react-toastify";

const Header = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") == "dark" ? true : false
  );
  useEffect(() => {
    if (localStorage.getItem("theme") == "dark") {
      setDark();
    } else {
      setLight();
    }
  }, []);

  const changeMode = () => {
    setDarkMode(!darkMode);
    toast.success("Theme Changed!");
    const mode = localStorage.getItem("theme");
    if (mode == "dark") {
      setLight();
    } else {
      setDark();
    }
  };

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };
  return (
    <div className='navbar'>
       <h1 className='logo' onClick={()=>navigate("/")}>CryptoTracker<span style={{color:"var(--blue)"}}>.</span></h1>
       <div className='links'>
        <Switch
            checked={darkMode}
            onClick={() => {
              changeMode();
            }}
          />
        <Link to="/" className='link'>Home</Link>
        <Link to="/compare" className='link'>Compare</Link>
        <Link to="/watchlist" className='link'>Watchlist</Link>
        <Link to="/dashboard" className='link'>
          <BasicButton variant="contained" text="Dashboard" />
        </Link>
         
       </div>
       <div className="mobile-drawer">
        <MobileDrawer/>
       </div>
    </div>
  )
}

export default Header
