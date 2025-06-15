import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', hydration: 60, fatigue: 40 },
  { name: 'Tue', hydration: 55, fatigue: 45 },
  { name: 'Wed', hydration: 50, fatigue: 50 },
  { name: 'Thu', hydration: 65, fatigue: 35 },
  { name: 'Fri', hydration: 70, fatigue: 30 },
];

export default function ChartPanel() {
  return (
    <div className="p-4 bg-white shadow rounded-xl">
      <h3 className="text-md text-gray-700 mb-2">Weekly Hydration vs Fatigue</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="hydration" stroke="#3b82f6" strokeWidth={2} />
          <Line type="monotone" dataKey="fatigue" stroke="#8b5cf6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
