import { Routes, Route } from "react-router-dom";
import { Home } from "./components/home";
import { ProductDetail } from "./components/product";
import ProductState from "./context/ProductState";
import { Navbar } from "./components/navbar";
import Cart from "./components/cart/Cart";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

function App() {
  return (
    <ProductState>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </ProductState>
  );
}

export default App;
