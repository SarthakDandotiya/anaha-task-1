import React, { PureComponent } from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

const data = [
    {
        name: "Mon",
        uv: 1000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "Tue",
        uv: 3300,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "Wed",
        uv: 4000,
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
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

export default class Example extends PureComponent {
    static jsfiddleUrl = "https://jsfiddle.net/alidingling/Lrffmzfc/";

    render() {
        return (
            <AreaChart
                width={200}
                height={80}
                data={data}
                // margin={{
                //     top: 10,
                //     right: 30,
                //     left: 0,
                //     bottom: 0,
                // }}
            >
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop
                            offset="5%"
                            stopColor="#f82c2c"
                            stopOpacity={0.5}
                        />
                        <stop
                            offset="95%"
                            stopColor="#f82c2c"
                            stopOpacity={0}
                        />
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                {/* <YAxis /> */}
                <Tooltip />
                <Area
                    type="monotone"
                    dataKey="uv"
                    stroke="#f82c2c"
                    fillOpacity={1}
                    fill="url(#colorUv)"
                />
            </AreaChart>
        );
    }
}
