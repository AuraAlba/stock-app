import React from "react";

const ListItem = (props) =>{
    return(
        <tr>
            <td onClick={props.productSelected}>
                {props.product.name}
            </td>
            <td>
                {props.product.description}
            </td>
            <td>
                {props.product.price}
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