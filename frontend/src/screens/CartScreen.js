import React, { useEffect } from 'react';
import './CartScreen.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

//Components
import CartItem from '../components/CartItem';
//Actions
import { addToCart, removeFromCart } from '../redux/actions/cartActions';

const CartScreen = () => {

  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
    
  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  }

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  }

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  }

  const getCartSubTotal =() => {
    return cartItems.reduce((price, item) => price + (Number(item.qty) * Number(item.price)), 0)
  }

  return (
      <div className="cartscreen">
        <div className="cartscreen__left">
          <h2>Shopping Cart</h2>
          {(cartItems.length) === 0 ? (
            <div>
              Your cart is empty! 
              <Link className='link' to={'/'}>
                Coutinue Shopping
              </Link>
            </div>
          ) : cartItems.map((item) => (
            <CartItem key={item.product} qtyChangeHandler={qtyChangeHandler} item={item} removeFromCart={removeFromCartHandler}/>
          ))}
        </div>

        <div className="cartscreen__right">
          <div className='cartscreen__info'>
            <p>Subtotal ({getCartCount()}) items</p>
            <p>${getCartSubTotal().toFixed(2)}</p>
          </div>

          <div>
            <button>Proceed To Check-out</button>
          </div>
        </div>
      </div>
  );
};

export default CartScreen