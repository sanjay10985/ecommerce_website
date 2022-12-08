import ProductContext from "./ProductContext";

const ProductState = (props) => {
  const products = [
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

  return (
    <ProductContext.Provider value={{ products }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
