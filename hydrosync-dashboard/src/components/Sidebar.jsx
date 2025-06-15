import React from 'react';
import { Home, BarChart2, AlertTriangle, ClipboardList, Settings } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white border-r p-4 shadow-md">
      <h1 className="text-2xl font-bold text-blue-600 mb-8">HydroSync</h1>
      <nav className="space-y-4">
        <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-600"><Home size={20} /> Home</a>
        <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-600"><BarChart2 size={20} /> Trends</a>
        <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-600"><AlertTriangle size={20} /> Alerts</a>
        <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-600"><ClipboardList size={20} /> Logs</a>
        <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-600"><Settings size={20} /> Settings</a>
      </nav>
    </div>
  );
}
