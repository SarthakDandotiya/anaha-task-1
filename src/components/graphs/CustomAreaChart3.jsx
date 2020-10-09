import React, { PureComponent } from "react";
import { AreaChart, Area, XAxis, Tooltip } from "recharts";

const data = [
    {
        name: "Mon",
        uv: 100,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "Tue",
        uv: 300,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "Wed",
        uv: 100,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "Thu",
        uv: 210,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "Fri",
        uv: 190,
        pv: 4800,
        amt: 2181,
    },
    {
        name: "Sat",
        uv: 390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: "Sun",
        uv: 490,
        pv: 4300,
        amt: 2100,
    },
];

export default class Example extends PureComponent {
    render() {
        return (
            <AreaChart width={300} height={100} data={data}>
                <defs>
                    <linearGradient id="colorUv3" x1="0" y1="0" x2="0" y2="1">
                        <stop
                            offset="5%"
                            stopColor="#42d674"
                            stopOpacity={0.8}
                        />
                        <stop
                            offset="95%"
                            stopColor="#42d674"
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
                    stroke={null}
                    fillOpacity={1}
                    fill="url(#colorUv3)"
                />
            </AreaChart>
        );
    }
}
