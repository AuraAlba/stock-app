import React from "react";
import Input from '../Input/Input';

class AddProduct extends React.Component{
    state = {
        "name": {
            "value": '',
            "validation": {
                "required": true
            },
            "valid": false,
            "touched": false
        },
        "amount": {
            "value": '',
            "validation": {
                "required": true,
                "isNumeric": true
            },
            "valid": false,
            "touched": false
        },
        "price": {
            "value": '',
            "validation": {
                "required": true,
                "isNumeric": true
            },
            "valid": false,
            "touched": false
        },
        "description": {
            "value": '',
            "validation": {
                "required": false
            },
            "valid": false,
            "touched": false
        },
        "formValid": true
    };

    inputChangeHandler(event, nameField){
        const inputRef = {...this.state[nameField]};
        const isValid = this.checkValidity(event.target.value, this.state[nameField].validation);
        const isFormValid = this.state.name.valid && this.state.amount.valid && this.state.price.valid && this.state.description.valid && isValid;

        this.setState({
            [nameField]: {
                ...inputRef,
                "value": event.target.value,
                "valid": isValid,
                "touched": true
            },
            "formValid": isFormValid
        })
    }

    checkValidity(value, validation) {
        let isValid = true;

        if (validation.required) {
            isValid = isValid && value.trim() !== '';
        }

        if (validation.isNumeric) {
            const pattern = /^\d+$/;

            isValid = isValid && (pattern.test(value));
        }

        return isValid;
    }

    addProduct(event) {
        const newProduct = {
            "name": this.state.name.value,
            "price": this.state.price.value,
            "amount": this.state.amount.value,
            "description": this.state.description.value
        };
        const resetForm = {
            "name": {...this.state["name"], "value": "" },
            "price": {...this.state["price"], "value": ""},
            "amount": {...this.state["amount"], "value": ""},
            "description": {...this.state["description"], "value": ""},
        };

        event.preventDefault();
        this.props.productAdded(newProduct);
        this.setState(resetForm);
    }

    render(){
        return(
            <div>
                <h4>NUEVO PRODUCTO</h4>
                <form>
                    <div>
                        <div>
                            <Input
                                key="name"
                                elementType={'input'}
                                placeholder="Nombre"
                                value={this.state.name.value}
                                invalid={!this.state.name.valid}
                                shouldValidate={this.state.name.validation}
                                touched={this.state.name.touched}
                                changed={(event) => this.inputChangeHandler(event, "name")}
                            />
                        </div>
                        <Input
                            key="price"
                            elementType={'input'}
                            placeholder="Precio"
                            value={this.state.price.value}
                            invalid={!this.state.price.valid}
                            shouldValidate={this.state.price.validation}
                            touched={this.state.price.touched}
                            changed={(event) => this.inputChangeHandler(event, "price")}
                        />

                        <Input
                            key="amount"
                            elementType={'input'}
                            placeholder="Cantidad"
                            value={this.state.amount.value}
                            invalid={!this.state.amount.valid}
                            shouldValidate={this.state.amount.validation}
                            touched={this.state.amount.touched}
                            changed={(event) => this.inputChangeHandler(event, "amount")}
                        />

                        <Input
                            key="description"
                            elementType={'textarea'}
                            placeholder="Descripcion"
                            value={this.state.description.value}
                            invalid={!this.state.description.valid}
                            shouldValidate={this.state.description.validation}
                            touched={this.state.description.touched}
                            changed={(event) => this.inputChangeHandler(event, "description")}
                        />
                        <button
                            disabled={!this.state.formValid}
                            onClick={(event) => this.addProduct(event)}
                        >Agregar</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddProduct;