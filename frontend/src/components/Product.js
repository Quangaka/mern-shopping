import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = ({ imgURL, name, des, price, id}) => {
  return (
    <Link to={`/product/${id}`} className="info__button">
        <div className="product">
            <img src={imgURL}
            alt={name} />

            <div className="product__info">
                <p className="info__name">{name}</p>
                <p className="info__des">
                    {des.substring(0, 100)}...
                </p>
                <p className="info__price">${price}</p>
            </div>
        </div>
    </Link>
  )
}

export default Product