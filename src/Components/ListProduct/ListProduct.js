import React from "react";
import ListItem from "./ListItem/ListItem";
import clases from "./ListProduct.scss";


const ListProduct = (props) => {
    const listProduct = props.products
        .filter((product) =>{
               return product.name.toLowerCase().includes(props.filterValue.toLowerCase());
        })
        .map((product, index) => {
            return <ListItem
                product={product}
                productDeleted={() => props.productDeleted(index)}
                productSelected={() => props.productSelected(index)}
            />;
    });

    return (
        <div className={"col-md-7 "+ clases.Title}>
            <h4>LISTADO DE PRODUCTOS</h4>
            <input
                placeholder={"Filtrar"}
                value={props.filterValue}
                onChange={props.filterChanged}
                className={"col-md-12"}
            />
            <table className={"table table-striped"} >
                <thead>
                <tr>
                    <th scope={"col"}>Nombre</th>
                    <th scope={"col"}>Descripcion</th>
                    <th scope={"col"}>Precio</th>
                    <th scope={"col"}>Cant.</th>
                    <th scope={"col"}>Borrar</th>
                </tr>
                </thead>
                <tbody>
                {listProduct}
                </tbody>

            </table>

        </div>

    )
};

export default ListProduct;