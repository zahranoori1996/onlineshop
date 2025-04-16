import { Route, Routes } from "react-router-dom";
import Store from "./pages/Store/Store";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <ShoppingCartProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Layout>
    </ShoppingCartProvider>
  );
}

export default App;
