import React, { PureComponent } from "react";
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

const data = [
    {
        name: "Mon",
        uv: 2000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "Tue",
        uv: 3200,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "Wed",
        uv: 1000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "Thu",
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "Fri",
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: "Sat",
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: "Sun",
        uv: 1490,
        pv: 4300,
        amt: 2100,
    },
];

export default class Example extends PureComponent {
    render() {
        return (
            <BarChart width={200} height={80} data={data} barSize={10}>
                <Bar dataKey="uv" fill="#f88f2c" />
                <XAxis dataKey="name" />
                {/* <YAxis /> */}
                <Tooltip />
            </BarChart>
        );
    }
}
