import { useState } from "react";
import ProductContext from "./ProductContext";

const ProductState = (props) => {
  const products = [
    {
      id: "sneaker1",
      title: "this is 1st sneaker",
      imgUrl:
        "https://images.unsplash.com/photo-1615451210353-cbcf249f392a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      price: "37 $",
      mrp: "40 $",
    },
    {
      id: "sneaker2",
      title: "this is 2nd sneaker",
      imgUrl:
        "https://images.unsplash.com/photo-1549298916-acc8271f8b8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80",
      price: "35 $",
      mrp: "39 $",
    },
    {
      id: "sneaker3",
      title: "this is 3rd sneaker",
      imgUrl:
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      price: "35 $",
      mrp: "39 $",
    },
    {
      id: "sneaker4",
      title: "this is 4th sneaker",
      imgUrl:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      price: "35 $",
      mrp: "39 $",
    },
    {
      id: "sneaker5",
      title: "this is 5th sneaker",
      imgUrl:
        "https://images.unsplash.com/photo-1584735175097-719d848f8449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      price: "35 $",
      mrp: "39 $",
    },
    {
      id: "sneaker6",
      title: "this is 6th sneaker",
      imgUrl:
        "https://images.unsplash.com/photo-1622920883841-5bf72e392d8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=994&q=80",
      price: "35 $",
      mrp: "39 $",
    },
    {
      id: "sneaker7",
      title: "this is 7th sneaker",
      imgUrl:
        "https://images.unsplash.com/photo-1584590069631-1c180f90a54c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      price: "35 $",
      mrp: "39 $",
    },
    {
      id: "sneaker8",
      title: "this is 8th sneaker",
      imgUrl:
        "https://images.unsplash.com/photo-1552346154-7841f684d259?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        price: "45 $",
      mrp: "39 $",
    },
  ];

  const[cartProducts, setCartProducts] = useState(products);

  const addToCart = (id) =>{
    const newProducts = products.filter((product) => product.id === id);
    setCartProducts(cartProducts.concat(newProducts));
  }

  return (
    <ProductContext.Provider value={{ products, addToCart, cartProducts }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
