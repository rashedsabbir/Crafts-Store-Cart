import React from "react";
import "./List.css";

const List = (props) => {
    // destructure
    const { name, image, price } = props.list;

    // jsx
    return (
        <div className="list-div">
            <div className="list-img">
                <img src={image} alt="" />
            </div>
            <div className="list-info">
                <h4 className="list-name">{name}</h4>
                <h6 className="list-amount">${price}</h6>
            </div>
        </div>
    );
};

export default List;
