import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const Product = ({ product }) => {
  const { img, name, discription } = product;
  return (
    <Grid item xs={12} sm={8} md={4} style={{ mt: 3 }}>
      <Card sx={{ minWidth: 275 }}>
        <CardMedia
          component="img"
          style={{ width: "500", margin: "0 auto ", height: "420px" }}
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography sx={{ color: "black" }} variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2">{discription}</Typography>

          <Button sx={{ mt: 5, textDecoration: "none" }} variant="contained">
            BUY NOW
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Product;
