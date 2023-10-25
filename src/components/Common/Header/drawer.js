import React, {useEffect, useState} from 'react';
import Drawer from '@mui/material/Drawer';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Switch } from "@mui/material";
import { toast } from "react-toastify";
 

export default function MobileDrawer() {
    const [open, setOpen] = useState(false);
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
    <div className='drawer-wrapper'>
        <IconButton onClick={()=>setOpen(true)}>
            <MenuIcon className='link'/>
        </IconButton>
        <Drawer
        anchor="right"
        open={open}
        onClose={()=>setOpen(false)}
        >
        <div className="drawer-div">
            <Link to="/" className='link drawer-link'>Home</Link>
            <Link to="/compare" className='link drawer-link'>Compare</Link>
            <Link to="/watchlist" className='link drawer-link'>Watchlist</Link>
            <Link to="/dashboard" className='link drawer-link'>Dashboard</Link>
            <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <p className="link">{darkMode ? "Dark Mode" : "Light Mode"}</p>
            <Switch
              checked={darkMode}
              onClick={() => {
                changeMode();
              }}
            />
          </div>
        </div>  
        </Drawer>
    </div>
  );
}