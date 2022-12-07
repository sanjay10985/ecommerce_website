import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/home";
import { ProductDetail } from "./components/product";
import ProductState from "./context/ProductState";

function App() {
  return (
    <ProductState>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </ProductState>
  );
}

export default App;
