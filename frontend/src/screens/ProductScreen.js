import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom'
import './ProductScreen.css';

//Actions
import { getProductDetails } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';

const ProductScreen = () => {

  let navigate = useNavigate();

  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector(state => state.getProductDetails);

  const { loading, error, product } = productDetails;

  let idProduct = useParams().id;

  useEffect(() => {
    if(product && idProduct !== product._id) {
      dispatch(getProductDetails(idProduct));
    }
  }, [dispatch, product, idProduct]);
  
  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    navigate('/cart');
  }

  return (
      <div className="productscreen">
        {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : (
          <>
            <div className="productscreen__left">
              <div className="left__image">
                <img src={product.imageUrl}
                alt={product.name}/>
              </div>

              <div className="left__info">
                <p className="left__name">{product.name}</p>
                <p>Price: ${product.price}</p>
                <p>Description: {product.description}</p>

              </div>
            </div>

            <div className="productscreen__right">
              <div className="right__info">
                <p>
                  Price: 
                  <span>${product.price}</span>
                </p>
                <p>
                  Status:{" "}
                  <span>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </span>
                </p>
                <p>
                  Qty:
                  <select value={qty} onChange={(e) => setQty(e.target.value)}>
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </p>
                <p>
                  <button type="button" onClick={addToCartHandler}>Add To Cart</button>
                </p>
              </div>
            </div>
          </>)
        }
      </div>
  )
};

export default ProductScreen;
