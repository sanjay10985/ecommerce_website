import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import ProductContext from "../../context/ProductContext";
import "./ProductDetails.css";

const ProductDetail = () => {
  const context = useContext(ProductContext);
  const { products, addToCart } = context;

  const [product, setProduct] = useState([]);

  const params = useParams();

  useEffect(() => {
    const id = params.id;
    products.map((product) => {
      if (product.id === id) {
        return setProduct(product);
      }

      return window.scrollTo(0, 0);
    });
    // eslint-disable-next-line
  }, [params.id]);

  return (
    <div className="product_details__section">
      <div className="product_details__div">
        <div className="product_detail__img">
          <img src={product.imgUrl} alt="product-thumbnail" />
        </div>
        <div className="product_discription__div">
          <h2 className="product__title">{product.title}</h2>
          <div className="product_price__div">
            <h3 className="prodcut__price">{product.price}$</h3>
            <p className="product__mrp">{product.mrp}$</p>
          </div>
          <div className="addtocart_div">
            <button
              onClick={() => {
                addToCart(product.id);
              }}
              className="addtocart__button"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
