import React from "react";
import ListItem from "./ListItem/ListItem";

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
        <div>
            <h4>LISTADO DE PRODUCTOS</h4>
            <input placeholder={"Filtrar"} value={props.filterValue} onChange={props.filterChanged} />
            <table>
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Precio</th>
                    <th>Cant.</th>
                    <th>Borrar</th>
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