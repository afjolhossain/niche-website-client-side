import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import React from "react";
import { Container } from "react-bootstrap";
import img1 from "../../../banner/special collection.jpg";
import img2 from "../../../banner/special collectyion 2.jpg";
import Button from "@mui/material/Button";

const SpecialCollection = () => {
  return (
    <Container>
      <Typography sx={{ mt: 10 }} variant="h4">
        SPECIAL COLLECTIONS
      </Typography>
      ;
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{ minWidth: 275 }}>
            <CardMedia
              component="img"
              height="500px"
              width="100%"
              image={img1}
              alt="green iguana"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                TITANIUM COLLECTION MADE IN JAPAN
              </Typography>
              <Typography variant="body2">
                Three icons, reborn in a new ultra-light form.
              </Typography>
              <Button
                variant="h4"
                sx={{ bgcolor: "text.primary", color: "white", mt: 2 }}
              >
                SEE THE COLLECTION
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ minWidth: 275 }}>
            <CardMedia
              component="img"
              height="500px"
              width="100%"
              image={img2}
              alt="green iguana"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                CLUBMASTER METAL
              </Typography>

              <Typography variant="body2">
                Our big classic has gone metal. And it’s already a must-have.
              </Typography>
              <Button
                variant="h4"
                sx={{ bgcolor: "text.primary", color: "white", mt: 2 }}
              >
                SEE THE COLLECTION
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SpecialCollection;
