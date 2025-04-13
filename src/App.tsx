import { Route, Routes } from "react-router-dom";
import Store from "./pages/Store/Store";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import Product from "./pages/Product/Product";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/product/:id" element={<Product/>} />
      </Routes>
    </Layout>
  );
}

export default App;
