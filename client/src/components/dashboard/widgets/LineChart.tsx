import { Line, LineChart as RechartsLineChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { mockChartData } from "@/lib/mock-data";

export default function LineChart() {
  return (
    <div className="h-[300px] w-full p-4">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart data={mockChartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#3B82F6"
            strokeWidth={2}
            dot={false}
          />
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
}
