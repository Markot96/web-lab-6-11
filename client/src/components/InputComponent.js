import React from "react";
import "../styles/InputComponent.css";
import { Field, ErrorMessage } from "formik";

const InputComponent = ({ title, name, type, component }) => {
    return (
        <div className="InputContainerWrapper">
            <div className="InputContainer">
                {title}:
                <Field id={name} name={name} type={type} component={component} />
                <div className="ErrorStyled">
                <ErrorMessage name={name} />
            </div>

            </div>
            
        </div>
    );
};

export default InputComponent;