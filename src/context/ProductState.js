import { useState } from "react";
import ProductContext from "./ProductContext";

const ProductState = (props) => {
  const serverProducts = [
    {
      id: "1111",
      title: "this is 1st title",
      price: "37$",
    },
    {
      id: "1112",
      title: "this is 2nd title",
      price: "49$",
    },
  ];

  const [products, setProducts] = useState(serverProducts);
//   console.log(products);

  return (
    <ProductContext.Provider value={{products}}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
