import React from "react";
import Navbar from "../Components/Navbar";
import ProductCard from "../Components/ProductCard";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="product-container">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8].map((p) => {
          return <ProductCard />;
        })}
      </div>
    </div>
  );
};

export default Home;
