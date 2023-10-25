import React, {useState} from 'react';
import Drawer from '@mui/material/Drawer';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
 

export default function MobileDrawer() {
    const [open, setOpen] = useState(false);
 

  return (
    <div>
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
        </div>  
        </Drawer>
    </div>
  );
}