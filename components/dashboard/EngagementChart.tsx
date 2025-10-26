import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { name: "Mon", val: 400 },
  { name: "Tue", val: 650 },
  { name: "Wed", val: 800 },
  { name: "Thu", val: 700 },
  { name: "Fri", val: 1200 },
  { name: "Sat", val: 1500 },
  { name: "Sun", val: 900 },
];

export default function EngagementChart() {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-300 h-full overflow-hidden">
      <h2 className="font-semibold mb-4 text-lg">Engagement Over Time</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="val" fill="#2563eb" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
