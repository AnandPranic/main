import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "./Header.css";

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navItems = [
    "Home",
    "About Us",
    "Courses",
    "Events",
    "Inquire Now",
    "Services",
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        My App
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/" sx={{ textAlign: "center" }}>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/about"
            sx={{ textAlign: "center" }}
          >
            <ListItemText primary="About Us" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/courses"
            sx={{ textAlign: "center" }}
          >
            <ListItemText primary="Courses" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/events"
            sx={{ textAlign: "center" }}
          >
            <ListItemText primary="Events" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/inquire-now"
            sx={{ textAlign: "center" }}
          >
            <ListItemText primary="Inquire Now" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/services"
            sx={{ textAlign: "center" }}
          >
            <ListItemText primary="Services" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  const logoHeight = isMobile ? "60px" : "100px"; // Set logo height based on screen size

  return (
    <>
      <AppBar position="static" sx={{boxShadow:"none"}}>
        <Toolbar className="toolbar">
          {" "}
          {/* Use className for the toolbar */}
          {isMobile ? (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              className="menu-icon"
            >
              <MenuIcon />
            </IconButton>
          ) : null}
          <Typography variant="h6" component="div" className="logo-container">
            {" "}
            {/* Use className for the logo container */}
            <img
              src={logo}
              alt="Logo"
              className="logo"
              style={{ height: logoHeight }}
            />{" "}
          </Typography>
          {!isMobile ? (
            <Box className="nav-buttons">
              <Button
                color="inherit"
                sx={{ textTransform: "none" }}
                component={Link}
                to="/"
              >
                Home
              </Button>
              <Button
                color="inherit"
                sx={{ textTransform: "none" }}
                component={Link}
                to="/about"
              >
                About Us
              </Button>
              <Button
                color="inherit"
                sx={{ textTransform: "none" }}
                component={Link}
                to="/courses"
              >
                Courses
              </Button>
              <Button
                color="inherit"
                sx={{ textTransform: "none" }}
                component={Link}
                to="/events"
              >
                Events
              </Button>
              <Button
                color="inherit"
                sx={{ textTransform: "none" }}
                component={Link}
                to="/inquire-now"
              >
                Services
              </Button>
              <Button
                color="inherit"
                sx={{ textTransform: "none" }}
                component={Link}
                to="/Services"
              >
                Inquire Now
              </Button>
            </Box>
          ) : null}
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{ width: "70% !important" }}
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        variant="temporary"
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Header;
