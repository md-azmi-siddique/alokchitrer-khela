import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Cart = (props) => {
    
    const cartProduct = props.cartProduct
    // console.log(cartProduct)

    const total = cartProduct.reduce((total, product) => total + product.price,0)
  
    let shippingPrice = 12;
    total > 100 ? shippingPrice = 100: shippingPrice = 0;
    return (
        <div>
            <h4>Order Summary: {cartProduct.length}</h4> 
            <h4>Shipping: {shippingPrice}</h4>
            <h4>Price: {total + shippingPrice}</h4>
            <Link to='/review'>
            <button className="button"><FontAwesomeIcon icon={faCartShopping} /> Review</button>
            </Link>

        </div>
    );
};

export default Cart;   