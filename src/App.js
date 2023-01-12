import { useEffect, useState } from "react";
import "./App.css";
// import Product from './components/Product/Product';
import ProductList from "./components/ProductList/ProductList";
import AddProduct from "./components/AddProduct/AddProduct";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch("http://localhost:4000/products/");
      const responseData = await response.json();
      setProducts(responseData);
    };
    sendRequest();
  }, []);

  // function getRandomInt(max) {
  //   return Math.floor(Math.random() * max);
  // }

  const addProduct = async (title) => {
    // ?????
    // const copyState = [...products];
    // setProducts(
    //   copyState.push({
    //     id: getRandomInt(10000),
    //     title: title,
    //   })
    // );

    // const id = getRandomInt(10000);
    // const newProduct = { id, ...title };
    const response = await fetch("http://localhost:4000/products/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(title),
    });
    const responseData = await response.json();
    setProducts([...products, responseData]);
  };

  const deleteProduct = async (id) => {
    await fetch(`http://localhost:4000/products/${id}`, {
      method: "DELETE",
    });
    const copyState = [...products];
    setProducts(copyState.filter((product) => product.id !== id));
  };

  return (
    <div className="container">
      <AddProduct onAdd={addProduct} />
      <ProductList products={products} onDelete={deleteProduct} />
    </div>
  );
};

export default App;
