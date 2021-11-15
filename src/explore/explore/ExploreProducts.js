import { Grid, Typography, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
// import { Container } from "react-bootstrap";
import ExploreProduct from "./exploreProduct/ExploreProduct";
import Box from "@mui/material/Box";

const ExploreProducts = () => {
  const [exploreProducts, setexploreProducts] = useState([]);

  useEffect(() => {
    fetch("https://young-reef-21634.herokuapp.com/exploreglass")
      .then((res) => res.json())
      .then((data) => setexploreProducts(data));
  }, []);
  return (
    <Box sx={{ bgcolor: "text.secondary" }}>
      <Container>
        <Typography sx={{ color: "black", pt: 3 }} variant="h3">
          Glasses Available For You
        </Typography>
        <Grid
          container
          spacing={{ xs: 1, md: 2 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {exploreProducts.map((exploreProduct) => (
            <ExploreProduct
              key={exploreProduct.id}
              exploreProduct={exploreProduct}
            ></ExploreProduct>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ExploreProducts;
