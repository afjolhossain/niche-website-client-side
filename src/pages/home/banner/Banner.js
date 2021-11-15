import React from "react";
import Grid from "@mui/material/Grid";
import banner from "../../../banner/banner0.jpg";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

const Banner = () => {
  return (
    <Grid sx={{ bgcolor: "text.primary", mt: 0 }} container spacing={2}>
      <Grid item sx={{ p: "0 auto", mt: 10 }} xs={12} md={6}>
        <Typography sx={{ mt: 5, color: "white" }} variant="h3">
          A BROAD RANGE OF TRENDY EYEWEAR
        </Typography>
        <Typography sx={{ mt: 5, color: "white" }} variant="body1">
          Perfect look with a suitable pair of glasses. Put on eyewear & put on
          positive view mode.
        </Typography>
        <Button sx={{ mt: 5 }} variant="contained">
          BUY NOW
        </Button>
      </Grid>
      <Grid item sx={{ mt: 5, mb: 7 }} xs={12} md={6}>
        <img style={{ width: "400px", height: "450px" }} src={banner} alt="" />
      </Grid>
    </Grid>
  );
};

export default Banner;
