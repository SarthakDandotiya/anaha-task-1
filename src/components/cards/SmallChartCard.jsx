import React from "react";
import "./SmallChartCard.css";

import downIconBlue from "../../images/down-arrow-blue.svg";

const SmallChartCard = ({ title, option, chart }) => {
    return (
        <div className="small-chart-card">
            <div className="small-chart-card-info">
                <p>{title}</p>
                <span>
                    <p>{option}</p>
                    <img src={downIconBlue} alt="Options" />
                </span>
            </div>
            <div className="small-chart-card-graph">{chart}</div>
        </div>
    );
};

export default SmallChartCard;
