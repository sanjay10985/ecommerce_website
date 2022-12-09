import { Routes, Route } from "react-router-dom";
import { Home } from "./components/home";
import { ProductDetail } from "./components/product";
import ProductState from "./context/ProductState";
import { Navbar } from "./components/navbar";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <ProductState>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </ProductState>
  );
}

export default App;
