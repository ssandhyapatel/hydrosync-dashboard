import React from 'react';
import ChartPanel from '../components/ChartPanel';

export default function Dashboard() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Dashboard Overview</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-4 bg-white shadow rounded-xl">
          <h3 className="text-md text-gray-700">Hydration Level</h3>
          <p className="text-2xl text-blue-600 font-bold">Low</p>
        </div>
        <div className="p-4 bg-white shadow rounded-xl">
          <h3 className="text-md text-gray-700">Fatigue Status</h3>
          <p className="text-2xl text-yellow-600 font-bold">Moderate</p>
        </div>
      </div>
      <ChartPanel />
    </div>
  );
}
