import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/home";
import { ProductDetail } from "./components/product";
import ProductState from "./context/ProductState";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <ProductState>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
   
      </Routes>
    </ProductState>
  );
}

export default App;
