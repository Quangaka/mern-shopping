import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <Link to={`/product/${1111}`} className="info__button">
        <div className="product">
            <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
            alt="product" />

            <div className="product__info">
                <p className="info__name">Product 1</p>
                <p className="info__des">
                    Can i do anything for you?
                </p>
                <p className="info__price">499.99$</p>
            </div>
        </div>
    </Link>
  )
}

export default Product