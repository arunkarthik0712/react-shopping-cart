// App.jsx
import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Banner from "./components/Banner.jsx";
import "./App.css";

// Main application component
const App = () => {
  // State to manage items in the cart
  const [cart, setCart] = useState([]);

  // Function to add an item to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Function to remove an item from the cart
  const removeFromCart = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  };

  // Function to check if an item is in the cart
  const isInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <div>
      <Header cartCount={cart.length} />
      <Banner />
      <ProductList
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        isInCart={isInCart}
      />
      <Footer />
    </div>
  );
};

export default App;
