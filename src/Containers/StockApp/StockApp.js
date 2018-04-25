import React from "react";

class StockApp extends  React.Component{
    state = {
        "listProducts": [{
            "productId": "1",
            "name": "Leche",
            "description": "Parrafo muy largo con la descripción del producto",
            "ammount": 100,
            "price": 2500
        }]
    } ;
    render(){
        return(
            <div>
                Hola Mundo
            </div>
        )
    }
}

export default StockApp;