import {
  Container,
  Grid,
  TextField,
  Typography,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";

import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import banner1 from "../../../banner/banner-3.jpg";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const hendleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="outlined-basic"
              name="email"
              onBlur={hendleOnChange}
              label="Your Email"
              variant="outlined"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="outlined-basic"
              label="Your Password"
              type="password"
              name="password"
              onBlur={hendleOnChange}
              variant="outlined"
            />
            <Button
              sx={{ width: "75%", m: 1 }}
              type="submit"
              variant="contained"
            >
              Login
            </Button>
            <NavLink style={{ textDecoration: "none" }} to="/register">
              <Button variant="text">new User? Please Register</Button>
            </NavLink>
            {isLoading && <CircularProgress />}
            {authError && <Alert severity="error">{authError}</Alert>}
            {user?.email && (
              <Alert severity="success">User Created Successfully !</Alert>
            )}
          </form>
        </Grid>
        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
          <img sx={{ width: "width:100%" }} src={banner1} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
