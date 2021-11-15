import React from "react";
import Banner from "../banner/Banner";

import Products from "../products/Products";
import SpecialCollection from "../special collection/SpecialCollection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <SpecialCollection></SpecialCollection>
    </div>
  );
};

export default Home;
