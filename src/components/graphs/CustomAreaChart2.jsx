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
        name: "week 1",
        uv: 3000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "week 2",
        uv: 2000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "week 3",
        uv: 3000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "week 4",
        uv: 2000,
        pv: 3908,
        amt: 2000,
    },
];

export default class Example extends PureComponent {
    render() {
        return (
            <AreaChart
                width={800}
                height={350}
                data={data}
                margin={{
                    top: 40,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <defs>
                    <linearGradient id="colorUv2" x1="0" y1="0" x2="0" y2="1">
                        <stop
                            offset="5%"
                            stopColor="#8884d8"
                            stopOpacity={0.2}
                        />
                        <stop
                            offset="95%"
                            stopColor="#8884d8"
                            stopOpacity={0}
                        />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                    type="monotone"
                    dataKey="uv"
                    stroke="#8884d8"
                    fillOpacity={1}
                    fill="url(#colorUv2)"
                />
            </AreaChart>
        );
    }
}
