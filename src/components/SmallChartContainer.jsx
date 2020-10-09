import React from "react";
import SmallChartCard from "./cards/SmallChartCard";
import CustomBarChart1 from "./graphs/CustomBarChart1";
import CustomBarChart2 from "./graphs/CustomBarChart2";
import CustomLineChart1 from "./graphs/CustomLineChart1";
import CustomAreaChart1 from "./graphs/CustomAreaChart1";
import AppointmentCard from "./cards/AppointmentCard";
import "./SmallChartContainer.css";

const SmallChartContainer = () => {
    return (
        <div className="small-chart-container">
            <SmallChartCard
                title="Activity"
                option="Week"
                chart={<CustomBarChart1 />}
            />
            <SmallChartCard
                title="Heart Rate"
                option="Day"
                chart={<CustomLineChart1 />}
            />
            <SmallChartCard
                title="Blood Pressure"
                option="Week"
                chart={<CustomBarChart2 />}
            />
            <SmallChartCard
                title="Body Temperature"
                option="Week"
                chart={<CustomAreaChart1 />}
            />
            <AppointmentCard />
        </div>
    );
};

export default SmallChartContainer;
