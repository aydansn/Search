import React, { useState } from "react";
import style from "./SearchProducts.module.css";

const SearchProducts = () => {
  console.log("search");
  const products = [
    {
      id: 1,
      name: "apple",
      price: 91,
    },
    {
      id: 2,
      name: "apricote",
      price: 21,
    },
    {
      id: 3,
      name: "ananas",
      price: 27,
    },
    {
      id: 4,
      name: "plame",
      price: 74,
    },
    {
      id: 5,
      name: "poteto",
      price: 87,
    },
    {
      id: 6,
      name: "portagal",
      price: 98,
    },
    {
      id: 7,
      name: "tomato",
      price: 40,
    },
    {
      id: 8,
      name: "strawbery",
      price: 39,
    },
    {
      id: 9,
      name: "lemon",
      price: 95,
    },
    {
      id: 10,
      name: "sweet",
      price: 30,
    },
  ];
  const [myProducts, setMyProducts] = useState(products);
  const handleSearch = (value) => {
    const filterlenmishProduct = products.filter((product) =>
      product.name.toLowerCase().startsWith(value)
    );
    console.log(filterlenmishProduct);
    setMyProducts(filterlenmishProduct);
  };
  return (
    <div
      style={{ background: "linear-gradient(to right, #ffdde1, #ee9ca7); " }}
      className={style.orta}
    >
      <div className={style.int}>
        <input
          className={style.input1}
          onChange={(e) => handleSearch(e.target.value)}
          type="text"
          placeholder="search for products"
        />
      </div>
      {myProducts.map((products, idx) => (
        <div key={idx}>
          <div>{products.name}</div>
          <div>{products.price}</div>
        </div>
      ))}
    </div>
  );
};

export default SearchProducts;
