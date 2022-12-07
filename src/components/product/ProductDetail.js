import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import ProductContext from "../../context/ProductContext";

const ProductDetail = (props) => {
  const context = useContext(ProductContext);
  const { products } = context;
  const params = useParams();
  const [product, setProduct] = useState([]);
  console.log(params);
  useEffect(() => {
    const id = params.id;
    products.map((product) => {
      if (product.id === id) {
        return setProduct(product);
      }
    });
  }, [params.id]);
  return (
    <div>
      this is ProductDetail
      <h1>{product.title}</h1>
      <h3>{product.price}</h3>
    </div>
  );
};

export default ProductDetail;
