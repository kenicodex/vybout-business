'use client'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { Text } from '@/components/ui/Typography';

const pieData = [
  { name: 'Completed', value: 65 },
  { name: 'In Progress', value: 25 },
  { name: 'Cancelled', value: 10 },
];
const COLORS = ['#2563eb', '#60a5fa', '#dbeafe'];

export default function CreatorCampaigns() {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-300">
      <Text variant="h2" className="font-semibold mb-4 text-xl flex items-center gap-3">
        Creator Campaigns
      </Text>
      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            innerRadius={60}
            label
            paddingAngle={6}
          >
            {pieData.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-5 space-y-3">
        {pieData.map((entry, index) => (
          <div key={index} className="flex items-center gap-3 text-sm">
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            ></div>
            <Text variant="p" className="text-gray-800">
              {entry.name}: <span className="font-semibold">{entry.value}%</span>
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
}
