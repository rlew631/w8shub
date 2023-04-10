import * as React from 'react';
import {useRef, useState, useEffect} from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {AppBar, Toolbar, Typography, Button, IconButton,
  Menu, MenuItem, ListItemText} from '@mui/material';
  import ListItemIcon from '@mui/material/ListItemIcon';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';

import Link from '@mui/material/Link';

function DropdownIcons(props){
  return(
    <Image src={props.src} width='20' height='20' style={{marginRight:"0.4em"}}/>
  )
}

export default function Navbar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  // padding above page content behind navbar
  const [navbarHeight, setNavbarHeight] = useState(0);
  const navbarRef = useRef(null)
  useEffect(() => {
    setNavbarHeight(navbarRef.current.offsetHeight);
  },[]);

  const handleThemeChange = (currentTheme) => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    props.onThemeChange(newTheme);
  };

  return (
    <div>
      <AppBar position="fixed" ref={navbarRef}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <Link href="/">
              <MenuItem onClick={handleClose}>
                <DropdownIcons src='/home-icon.svg'/>
                Home
              </MenuItem>
            </Link>
            <Link href="/hub">
              <MenuItem onClick={handleClose}>
                <Image src='/hub-icon.svg' width='20' height='20' style={{marginRight:"0.4em"}}/>
                Hub
              </MenuItem>
            </Link>

          </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {props.page}{/* displays the page name */}
          </Typography>

          {props.theme === 'light' ? <>Dark Mode</> : <>Light Mode</>}
          <IconButton
            sx={{ ml: 1 }}
            onClick={() => handleThemeChange(props.page)}
            color="inherit">
            {props.theme === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>

          {/* <Button color="inherit" href="/login">Login</Button> */}

        </Toolbar>
      </AppBar>
      <div className="navbar_spacing" style={{marginTop: navbarHeight}}/>
    </div>
  );
}