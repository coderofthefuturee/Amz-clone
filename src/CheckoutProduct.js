import React from 'react'
import "./CheckoutProduct.css";

function CheckoutProduct() {
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
            <button>Remove</button>
        </div>
        </div>
    )
}

export default CheckoutProduct