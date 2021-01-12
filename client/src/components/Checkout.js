import React from "react";
import '../styles/Checkout.css';
import InputComponent from './InputComponent'
import { Formik } from "formik";
import { OrderSchema } from "../data/ValidationSchema";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { resetItems } from "../utils/Action.js";

function Checkout() {
    let history = useHistory();
    const select = useSelector((state) => state);
    const dispatch = useDispatch();
    return (

        <>
            <div className="CheckoutWrapper">

                <div className="CartContainer">

                    <Formik
                        initialValues={{
                            firstName: "",
                            lastName: "",
                            email: "",
                            phoneNumber: "",
                            fewWords: "",
                        }}
                        validationSchema={OrderSchema}
                        onSubmit={(values) => {
                            history.push("/success");
                            dispatch(resetItems);
                        }}
                    >
                        {({ handleSubmit }) => (
                            <div className="FormStyled" onSubmit={handleSubmit}>
                                <div className="InputContainerCheckout">

                                    <InputComponent title="First Name" name="firstName" type="text" />
                                    <InputComponent title="Last Name" name="lastName" type="text" />
                                    <InputComponent title="Email" name="email" type="email" />
                                    <InputComponent
                                        title="Phone Number"
                                        name="phoneNumber"
                                        type="text"
                                    />
                                    <InputComponent title="Few words about you" name="fewWords" component="textarea" />


                                </div>
                                <div className="ButtonWrapper">
                                    <div className="ContinueBtn" >
                                        <Link type="submit" to="/success">Continue</Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    );
}

export default Checkout;