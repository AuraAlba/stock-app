import React from "react";

const product = (props) => {
    let productElement = null;

    if (props.product) {
        productElement = (
            <div>
                <h2>Detalle</h2>
                <div>
                    <h3>{props.product.name}</h3>
                    <p>{props.product.description}</p>
                </div>
                <div>
                    <span>{props.product.amount}</span>
                    <button type="button" className="btn btn-danger" onClick={() => props.amountChanged(false)}>-</button>
                    <button type="button" className="btn btn-success" onClick={() => props.amountChanged(true)}>+</button>
                </div>
            </div>
        );
    }

    return (
        <div  className={"col-md-5"}>
            {productElement}
        </div>
    );
};

export default product;