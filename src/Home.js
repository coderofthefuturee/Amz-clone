import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div>
            <div className="home">
                <div className="home__container">
                    <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="img" className="home__image" />
                    <div className="home__row">
                        <Product 
                        id="32487"
                        title="Slipper" 
                        price={11.96} 
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg" />
                        <Product />
                    </div>
                    <div className="home__row">
                        <Product />
                        <Product />
                        <Product />
                    </div>
                    <div className="home__row">
                        <Product />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;