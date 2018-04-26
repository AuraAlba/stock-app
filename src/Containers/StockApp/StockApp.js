import React from "react";
import ListProduct from "../../Components/ListProduct/ListProduct";
import AddProduct from "../../Components/AddProduct/AddProduct";
import Product from "../../Components/Product/Product";

class StockApp extends React.Component {
    state = {
        "listProducts": [
            {
                "productId": "1",
                "name": "Leche",
                "description": "Parrafo muy largo con la descripción del producto",
                "amount": 100,
                "price": 2500
            },
            {
                "productId": "2",
                "name": "Huevos",
                "description": "Parrafo muy largo con la descripción del producto",
                "amount": 150,
                "price": 200
            },
            {
                "productId": "3",
                "name": "Pan",
                "description": "Parrafo muy largo con la descripción del producto",
                "amount": 150,
                "price": 200
            },
            {
                "productId": "4",
                "name": "Carne",
                "description": "Parrafo muy largo con la descripción del producto",
                "amount": 50,
                "price": 200
            },
            {
                "productId": "5",
                "name": "Pollo",
                "description": "Parrafo muy largo con la descripción del producto",
                "amount": 50,
                "price": 200
            },
            {
                "productId": "6",
                "name": "Chocolate",
                "description": "Parrafo muy largo con la descripción del producto",
                "amount": 50,
                "price": 200
            }
        ],
        "filterValue": "",
        "productSelected": null,
        "indexProductSelected": null
    };

    onFilterValueChange(event) {
        this.setState({
            "filterValue": event.target.value
        })
    }

    onProductAdded(newProduct) {
        const listProducts = [...this.state.listProducts];

        listProducts.push(newProduct);

        this.setState({
            "listProducts": listProducts
        })
    }

    onProductDeleted(index) {
        const listProducts = [...this.state.listProducts];

        listProducts.splice(index, 1);

        this.setState({
            "listProducts": listProducts
        });

        if (index === this.state.indexProductSelected) {
            this.setState({
                "productSelected": null,
                "indexProductSelected": null
            })
        }
    }

    onProductSelected(index) {
        const productSelected = {...this.state.listProducts[index]};

        this.setState({
            "productSelected": productSelected,
            "indexProductSelected": index
        })
    }

    onAmountChanged(isAdding) {
        const productList = [...this.state.listProducts];
        const product = {...productList[this.state.indexProductSelected]};
        const productUpdated = {
            ...product,
            "amount": isAdding ? (product.amount + 1) : (product.amount - 1)
        };

        productList[this.state.indexProductSelected] = productUpdated;

        this.setState({
            "listProducts": productList,
            "productSelected": {...productList[this.state.indexProductSelected]}
        });
        console.log(isAdding);
    }

    onSaveData() {
        const dataString = JSON.stringify(this.state);

        localStorage.setItem('dataStockApp', dataString);
    }

    componentDidMount() {
        const dataString = localStorage.getItem('dataStockApp');

        if (dataString) {
            try {
                const dataJson = JSON.parse(dataString);

                this.setState(dataJson);
            } catch (e) {
                console.log(e);
            }
        }

    }

    render() {
        return (
            <div>
                <h2>INVENTARIO APP</h2>
                <div className={"container"}>
                    <div className={"form-group row"}>
                        <AddProduct
                            productAdded={(newProduct) => this.onProductAdded(newProduct)}
                        />
                    </div>
                    <div className={"row form-group"}>
                        <ListProduct
                            products={this.state.listProducts}
                            filterValue={this.state.filterValue}
                            filterChanged={(event) => this.onFilterValueChange(event)}
                            productDeleted={(index) => this.onProductDeleted(index)}
                            productSelected={(index) => this.onProductSelected(index)}
                        />
                        <Product
                            product={this.state.productSelected}
                            amountChanged={(isAdding) => this.onAmountChanged(isAdding)}
                        />
                        <button className="btn btn-primary" onClick={() => this.onSaveData()}>Guardar</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default StockApp;