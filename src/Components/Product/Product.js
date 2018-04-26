import React from "react";
import classes from "./Product.scss";

const product = (props) => {
    let productElement = null;

    if (props.product) {
        productElement = (
            <div className={classes.Detail}>
                <h4 className={classes.Title}>DETALLE</h4>
                <div className={"row"}>
                    <h3 className={"col-md-12 "+ classes.Subtitle}>{props.product.name}</h3>

                    <div className={"col-md-8 "+classes.Price}>
                        <p><span className={"btn-primary "}>{"$"+props.product.price}</span></p>
                        <p>{props.product.description}</p>
                    </div>
                    <div className={"col-md-4 row"}>
                        <div className={"col-md-12"}>
                        <span className={classes.Amount+ " btn-primary"}>{props.product.amount}</span>
                        </div>
                        <button type="button" className={"btn btn-danger col-md-6 "+classes.ButtonA} onClick={() => props.amountChanged(false)}>-
                        </button>
                        <button type="button" className={"btn btn-success col-md-6 "+classes.ButtonA} onClick={() => props.amountChanged(true)}>+
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={"col-md-5"}>
            {productElement}
        </div>
    );
};

export default product;