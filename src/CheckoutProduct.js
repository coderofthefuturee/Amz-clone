import React from 'react'
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';

function CheckoutProduct() {
    const [{basket}, dispatch] =usesAtateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }
    return (
        <div>
            <div className="checkoutProduct">
            <img src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg" 
            alt="product-image"
            className='checkoutProduct__image'/>
            <div className="checkoutProduct__info">
                <p>slippers</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>$30</strong>
                </p>
                <div className="checkoutProduct__rating">
                    <p>⭐⭐⭐⭐</p>
                </div>
            </div>
            <button onCLick={removeFromBasket}>Remove</button>
        </div>
        </div>
    )
}

export default CheckoutProduct