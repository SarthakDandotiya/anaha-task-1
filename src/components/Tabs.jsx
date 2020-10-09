import React from "react";
import "./Tabs.css";

const Tabs = () => {
    return (
        <div className="tabs-container">
            <ul>
                <li className="tabs-active">Analytics</li>
                <li>Compliance</li>
            </ul>
        </div>
    );
};

export default Tabs;
