import React from "react";
import "./Summary.css";

const Summary = () => {
    return (
        <div className="summary">
            <ul>
                <li>Priya Mehta 32Y 4M</li>
                <li>ID: P0987</li>
                <li>
                    With <span>G</span>3 <span>P</span>0 <span>L</span>1{" "}
                    <span>A</span>1
                </li>
                <li>8 Weeks Pregnant</li>
                <li>LMP: 20/01/2020</li>
                <li>EDD: 29/10/2020</li>
            </ul>
        </div>
    );
};

export default Summary;
