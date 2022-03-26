import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./product.css";

const Expert = (props) => {
    // destructuring
    const { name, image, price, catagory, size, delivery } = props.expert || {};

    // adding jsx
    return (

        <div className="card">
            <div className="card-img">
                <img src={image} alt="" />
            </div>
            <div className="card-info">
                <h3>{name}</h3>
                <p>
                    <small>Size: {size}</small>
                </p>
                <p>
                    <small>(Delivery Time: {delivery})</small>
                </p>
                <h5>
                    Catagory: <i>{catagory}</i>{" "}
                </h5>
                <h4>Prcie: ${price}</h4>
            </div>
            {/* button for add to cart */}
            <div>
                <button
                    onClick={() => props.handleCart(props.expert)}
                    className="card-btn"
                >
                    <FontAwesomeIcon className="cart_icon" icon={faShoppingCart} /> Add To Cart
                </button>
            </div>
        </div>
    );
};

export default Expert;
