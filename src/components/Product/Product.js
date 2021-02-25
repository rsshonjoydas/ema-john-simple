import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
  console.log(props.product.name);
  const {img, name, seller, price, stock} = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt=""/>
      </div>
      <div className="product-info">
        <h4 className="product-name">{name}</h4>
        <p><small>by: {seller}</small></p>
        <p>${price}</p>
        <p><small>Only {stock} left in stock</small></p>
        <button className="main-button"> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
      </div>
    </div>
  );
};

export default Product;