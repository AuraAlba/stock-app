import React from "react";
import clases from "./ListItem.scss";

const ListItem = (props) =>{
    return(
        <tr>
            <td onClick={props.productSelected}
                className={clases.Name}
            >
                {props.product.name}
            </td>
            <td className={clases.Description}>
                {props.product.description}
            </td>
            <td>
                {"$" + props.product.price}
            </td>
            <td>
                {props.product.amount}
            </td>
            <td>
                <button type="button" className={"btn btn-danger"} onClick={props.productDeleted}>X</button>
            </td>
        </tr>
    )

};

export default ListItem;