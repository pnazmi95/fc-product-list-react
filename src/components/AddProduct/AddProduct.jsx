import React, { useState } from "react";
import "./AddProduct.css";

const AddProduct = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const submitFormHandler = (e) => {
    e.preventDefault();

    onAdd({ title });

    setTitle("");
  };
  return (
    <div>
      <form className="add-product-form" onSubmit={submitFormHandler}>
        <div className="add-product-form__input-container">
          <input
            className="add-product-form__input"
            type="text"
            placeholder="Product Title ..."
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <button className="add-product-form__submit-btn" type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
