import React from "react";
import List from "../List/List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";

const Cart = (props) => {
    // destrutureing
    const { cart } = props || {};
    let totalCost = 0;
    cart.forEach((ProductPrice) => {
        const { price } = ProductPrice;
        totalCost = totalCost + parseFloat(price);
    });
    // Choose again button reload function
    const reloadNow = () => {
        window.location.reload();
    };
    // jsx
    return (
        <div className="count-card">
            <h3>Details of Cart</h3>
            <h5>Total Products added: {cart.length}</h5>
            {cart.map((list) => (
                <List key={list.id} list={list}></List>
            ))}
            <h4>Total cost: ${totalCost}</h4>

            {/* Choose Again */}
            <button onClick={reloadNow} className="choose-btn">
                <FontAwesomeIcon icon={faCheckCircle} /> Choose Again
            </button>
        </div>
    );
};

export default Cart;
