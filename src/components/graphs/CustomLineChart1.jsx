import React, { PureComponent } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

const data = [
    {
        name: "9AM",
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "10AM",
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "11AM",
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "12AM",
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "1PM",
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: "2PM",
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: "3PM",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

export default class Example extends PureComponent {
    static jsfiddleUrl = "https://jsfiddle.net/alidingling/exh283uh/";

    render() {
        return (
            <LineChart width={200} height={80} data={data}>
                <Line
                    type="monotone"
                    dataKey="uv"
                    stroke="#f82c81"
                    strokeWidth={2}
                />
                <XAxis dataKey="name" />
                {/* <YAxis /> */}
                <Tooltip />
            </LineChart>
        );
    }
}
