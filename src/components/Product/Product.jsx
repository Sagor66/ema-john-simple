import React from "react";
import "./Product.css";

const Product = (props) => {
  const { img, name, seller, price, quantity, ratings } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p>Price: ${price}</p>
        <p>MAnufacturer: {seller}</p>
        <p>Ratings: {ratings} stars</p>
      </div>
      <button className="btn-cart">Add to Cart</button>
    </div>
  );
};

export default Product;
