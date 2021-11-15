import React from "react";
import Grid from "@mui/material/Grid";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import PurchaseModal from "../../../pages/home/home/purchase/PurchaseModal";
import Button from "@mui/material/Button";

const ExploreProduct = ({ exploreProduct }) => {
  const { img, name, description, price } = exploreProduct;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Grid item xs={12} sm={8} md={4} sx={{ mt: 6 }}>
        <Card sx={{ minWidth: 180 }}>
          <CardMedia
            component="img"
            sx={{ width: "100%", height: "180px", ml: 3, mt: 4 }}
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <Typography sx={{ color: "black" }} variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2">{description}</Typography>
            <Typography variant="body2">Price:{price}</Typography>

            <Button onClick={handleOpen} sx={{ mt: 5 }} variant="contained">
              BUY NOW
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <PurchaseModal
        exploreProduct={exploreProduct}
        open={open}
        handleClose={handleClose}
      ></PurchaseModal>
    </>
  );
};

export default ExploreProduct;
