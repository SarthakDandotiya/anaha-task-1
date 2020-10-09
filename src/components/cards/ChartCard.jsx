import React from "react";
import "./ChartCard.css";

import downIconBlue from "../../images/down-arrow-blue.svg";

const ChartCard = ({ title, option, chart, flag }) => {
    return (
        <div className="small-chart-card">
            <div className="small-chart-card-info">
                <p>{title}</p>
                <span>
                    <p>{option}</p>
                    {flag && <img src={downIconBlue} alt="Options" />}
                </span>
            </div>
            <div className="small-chart-card-graph">{chart}</div>
        </div>
    );
};

export default ChartCard;
