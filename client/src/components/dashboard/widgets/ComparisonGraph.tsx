import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { value: 0, count: 0 },
  { value: 20, count: 2 },
  { value: 40, count: 4 },
  { value: 60, count: 6 },
  { value: 80, count: 4 },
  { value: 100, count: 2 },
];

interface ComparisonGraphProps {
  percentile: number;
}

export default function ComparisonGraph({ percentile }: ComparisonGraphProps) {
  return (
    <div className="space-y-4 ">
      <p className="text-sm text-black">
        <b>You scored {percentile}% percentile </b>which is lower than the average percentile 72% of all the engineers who took this assessment
      </p>

      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="value" />
            <YAxis />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="count" 
              stroke="#2563EB" 
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      
    
      
    </div>
  );
}