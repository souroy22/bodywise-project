import React from "react";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  return (
    <div className="products-container">
      <Product />
      <Product />
      <Product />
    </div>
  );
};

export default Products;
