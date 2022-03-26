// import files
import React, { useEffect, useState } from "react";
import Product from "../Expert/Expert";

import Cart from "../Hire/Hire";
import "./Main.css";


const Main = () => {
    // use state for expart
    const [products, setProducts] = useState([]);

    // use state for cart
    const [cart, setCart] = useState([]);

    // data fetch form local api
    useEffect(() => {
        fetch(`./local_api.JSON`)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    // immute set data
    const handleCart = (carting) => {
        const newCart = [...cart, carting];
        setCart(newCart);
    };
    // use jsx
    return (
        <div className="container">

            {/* Our Products */}
            <div className="product-container">
                {products.map((product) => (
                    <Product
                        product={product}
                        handleCart={handleCart}
                        key={product.id}
                    ></Product>
                ))}
            </div>

            {/* Buy Now */}
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Main;
