import React from "react";
import Product from "../Product/Product";
import "./ProductList.css";

const ProductList = ({ products, onDelete }) => {
  return (
    <div className="products-list">
      {products.map((product) => {
        return (
          <Product key={product.id} product={product} onDelete={onDelete} />
        );
      })}
    </div>
  );
};

export default ProductList;
