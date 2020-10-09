import React from "react";
import ChartCard from "./cards/ChartCard";
import CustomAreaChart2 from "./graphs/CustomAreaChart2";
import CustomAreaChart3 from "./graphs/CustomAreaChart3";
import CustomPieChart from "./graphs/CustomPieChart";
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
                <div className="main-analytics-right-bottom">
                    <div
                        style={{
                            position: "relative",
                        }}
                    >
                        <p
                            style={{
                                position: "absolute",
                                top: "62px",
                                left: "52px",
                            }}
                        >
                            230
                            <br />
                            Kcal
                        </p>
                        <ChartCard
                            title="Calories Burnt"
                            chart={<CustomPieChart />}
                            flag={false}
                        />
                    </div>
                    <ChartCard
                        title="Sleep Pattern"
                        // option="Week"
                        style={{
                            marginLeft: "16px",
                        }}
                        chart={<CustomAreaChart3 />}
                        flag={false}
                    />
                </div>
            </div>
        </div>
    );
};

export default MainAnalytics;
