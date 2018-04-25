import React from 'react';

const input = (props) => {
    const inputClasses = ['form-control'];
    let inputElement = null;

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push("invalid");
    }

    switch (props.elementType) {
        case('input'):
            inputElement = <input
                className={inputClasses.join(' ')}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.changed}
            />;
            break;
        case ('textarea'):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
            />;
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
            />;
    }

    return (
        <div className="">
            <label className="">{props.label}</label>
            {inputElement}
        </div>
    )
};

export default input;