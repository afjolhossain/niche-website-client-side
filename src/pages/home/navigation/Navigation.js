import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Menu as MenuIcon } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, color: "black" }}
          >
            Genius Sunglass Collection
          </Typography>
          <NavLink to="/home">
            <Button sx={{ color: "white" }} color="inherit">
              Home
            </Button>
          </NavLink>
          <NavLink to="/explore">
            <Button sx={{ color: "white" }} color="inherit">
              Explore
            </Button>
          </NavLink>
          {user?.email ? (
            <Box>
              <NavLink to="/deshboard">
                <Button sx={{ color: "white" }} color="inherit">
                  Deshboard
                </Button>
              </NavLink>
              <Button onClick={logOut} sx={{ color: "white" }} color="inherit">
                Logout
              </Button>
            </Box>
          ) : (
            <NavLink to="/login">
              <Button sx={{ color: "white" }} color="inherit">
                Login
              </Button>
            </NavLink>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
