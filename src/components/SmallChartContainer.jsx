import React from "react";
import ChartCard from "./cards/ChartCard";
import CustomBarChart1 from "./graphs/CustomBarChart1";
import CustomBarChart2 from "./graphs/CustomBarChart2";
import CustomLineChart1 from "./graphs/CustomLineChart1";
import CustomAreaChart1 from "./graphs/CustomAreaChart1";
import AppointmentCard from "./cards/AppointmentCard";
import "./SmallChartContainer.css";

const SmallChartContainer = () => {
    return (
        <div className="small-chart-container">
            <ChartCard
                title="Activity"
                option="Week"
                chart={<CustomBarChart1 />}
                flag={true}
            />
            <ChartCard
                title="Heart Rate"
                option="Day"
                chart={<CustomLineChart1 />}
                flag={true}
            />
            <ChartCard
                title="Blood Pressure"
                option="Week"
                chart={<CustomBarChart2 />}
                flag={true}
            />
            <ChartCard
                title="Body Temperature"
                option="Week"
                chart={<CustomAreaChart1 />}
                flag={true}
            />
            <AppointmentCard />
        </div>
    );
};

export default SmallChartContainer;
