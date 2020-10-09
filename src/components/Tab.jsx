import React from "react";
import MainAnalytics from "./MainAnalytics";
import SmallChartContainer from "./SmallChartContainer";
import "./Tab.css";

const Tab = () => {
    return (
        <div className="tab">
            <SmallChartContainer />
            <MainAnalytics />
        </div>
    );
};

export default Tab;
