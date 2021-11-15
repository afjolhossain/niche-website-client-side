import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Product from "../product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://young-reef-21634.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Box sx={{ mt: 8 }}>
      <Container>
        <Typography sx={{ mb: 6, color: "black" }} variant="h3">
          Genius Glass Collection
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {products.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Products;
