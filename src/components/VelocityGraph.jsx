import React, { Component } from 'react';
import { 
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import { format, parseISO, subDays } from "date-fns";

const linearData = [];
for (let num = 30; num >= 0; num--) {
  linearData.push({
    date: subDays(new Date(), num).toISOString().substr(0,10),
    value: 1 + Math.random(),
  });
};


class VelocityGraph extends Component {
  state = {  }

  render() { 
    return ( 
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={linearData}>
          <Area datakey="value" />
          <XAxis datakey="date" />
          <YAxis datakey="value" />
          <Tooltip />
        </AreaChart>
        {/* <pre>{JSON.stringify(linearData, null, 2)}</pre> */}
      </ResponsiveContainer>
    );
  }
}
 
export default VelocityGraph;