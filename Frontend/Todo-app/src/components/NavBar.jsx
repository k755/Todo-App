import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  Button, 
  Box,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';


import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MyTodoApp
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              aria-controls="mobile-menu"
              aria-haspopup="true"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="mobile-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              MenuListProps={{
                'aria-labelledby': 'mobile-menu-button',
              }}
              // New recommended props:
              slotProps={{
                root: {
                  'aria-labelledby': 'mobile-menu-button',
                }
              }}
            >
              <MenuItem component={Link} to="/GetTodo" onClick={handleMenuClose}>
                Home
              </MenuItem>
              <MenuItem component={Link} to="/AddTodo" onClick={handleMenuClose}>
                AddTodo
              </MenuItem>
              <MenuItem component={Link} to="/CompletedTodo" onClick={handleMenuClose}>
                Completed
              </MenuItem>
              <MenuItem component={Link} to="/ActiveTodo" onClick={handleMenuClose}>
                Active
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit" component={Link} to="/GetTodo">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/AddTodo">
              AddTodo
            </Button>
            <Button color="inherit" component={Link} to="/CompletedTodo">
              Completed
            </Button>
            <Button color="inherit" component={Link} to="/ActiveTodo">
              Active
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;