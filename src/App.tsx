import { Navigate, Route, Routes } from "react-router-dom";
import Store from "./pages/Store/Store";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import { useShoppingCartContext } from "./context/ShoppingCartContext";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Login from "./pages/Login/Login";


function App() {
  const {isLogin} = useShoppingCartContext()

  return (
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/login" element={isLogin ? <Navigate to='/cart'/> : <Login/>} />

          <Route element ={<PrivateRoute/>}>
          <Route path="/cart" element={<Cart />} />
          </Route>

        </Routes>
      </Layout>
  );
}

export default App;
