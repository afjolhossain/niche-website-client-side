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
import { NavLink } from "react-router-dom";
import banner1 from "../../../banner/banner-3.jpg";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { user, registerUser, isLoading, authError } = useAuth();

  const hendleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    console.log(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Loged in successfully");
      return;
    }

    registerUser(loginData.email, loginData.password, loginData.name);
    e.preventDefault();
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Register
          </Typography>
          {!isLoading && (
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="outlined-basic"
                name="name"
                type="name"
                onBlur={hendleOnBlur}
                label="Your Name"
                variant="outlined"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="outlined-basic"
                name="email"
                type="email"
                onBlur={hendleOnBlur}
                label="Your Email"
                variant="outlined"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="outlined-basic"
                label="Your Password"
                type="password"
                name="password"
                onBlur={hendleOnBlur}
                variant="outlined"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="outlined-basic"
                label="Re-Password"
                type="password"
                name="password2"
                onBlur={hendleOnBlur}
                variant="outlined"
              />
              <Button
                sx={{ width: "75%", m: 1 }}
                type="submit"
                variant="contained"
              >
                Register
              </Button>
              <NavLink style={{ textDecoration: "none" }} to="/login">
                <Button variant="text">
                  Already Register ? Please Please Login
                </Button>
              </NavLink>
            </form>
          )}
          {isLoading && <CircularProgress />}
          {authError && <Alert severity="error">{authError}</Alert>}
          {user?.email && (
            <Alert severity="success">User Created Successfully !</Alert>
          )}
        </Grid>
        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
          <img sx={{ width: "width:100%" }} src={banner1} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
