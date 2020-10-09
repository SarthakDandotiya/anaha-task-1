import React, { PureComponent } from "react";
import { PieChart, Pie } from "recharts";

const data02 = [{ name: "A1", value: 100 }];

export default class Example extends PureComponent {
    render() {
        return (
            <PieChart width={120} height={100}>
                <Pie
                    data={data02}
                    dataKey="value"
                    cx={53}
                    cy={50}
                    innerRadius={30}
                    outerRadius={40}
                    fill="#dbdbdb"
                />
                <Pie
                    data={data02}
                    dataKey="value"
                    cx={53}
                    cy={50}
                    innerRadius={30}
                    outerRadius={40}
                    startAngle={-40}
                    endAngle={100}
                    fill="#8884d8"
                    // label
                />
            </PieChart>
        );
    }
}
