import * as React from 'react';
import {AppBar, Box, Toolbar, Typography, Button, IconButton,
  Menu, MenuItem, ListItemText} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import Link from '@mui/material/Link';

export default function Navbar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <AppBar position="static"> */}
      <AppBar position="fixed">
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
                {/* <ListItemIcon>
                  <Icon className="navbar-item" />
                </ListItemIcon> */}
                Home
              </MenuItem>
            </Link>
            <Link href="/hub">
              <MenuItem onClick={handleClose}>
                Hub
              </MenuItem>
            </Link>

          </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {props.page}
            {/* displays the page name */}
          </Typography>
          <Button color="inherit" href="/login">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}