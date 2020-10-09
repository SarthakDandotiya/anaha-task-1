import React from "react";
import ChartCard from "./cards/ChartCard";
import CustomAreaChart2 from "./graphs/CustomAreaChart2";
import LabResults from "./LabResults";
import "./MainAnalytics.css";

const MainAnalytics = () => {
    return (
        <div className="main-analytics">
            <ChartCard
                title="Health Condition"
                option="Month"
                chart={<CustomAreaChart2 />}
                flag={true}
                className="main-analytics-left"
            />
            <div className="main-analytics-right">
                <ChartCard
                    title="Lab Results"
                    flag={false}
                    chart={<LabResults />}
                />
            </div>
        </div>
    );
};

export default MainAnalytics;
