import React from "react";
import '../styles/Success.css'
import { Result } from "antd";
import { Link } from "react-router-dom";
import { resetItems } from "../utils/Action.js";

function Success() {

    return (
        <div className="CartContainer">
            <Result
                status="success"
                title="Your resume has been sent to chosen companies"
                subTitle="Thank you for your time. Stay with us."
                extra={[
                    <div className="ButtonSuccessWrapper">
                        <div className="ButtonSuccess" onClick={resetItems}>
                            <Link to="/catalog" >Go Back</Link>
                        </div>
                    </div>

                ]}

            />

        </div>
    );
};

export default Success;