import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

const data = [
  { year: '2018', level: 1, skill: 'Basic Java (School)' },
  { year: '2020', level: 2, skill: 'C++ & Problem Solving (PUC)' },
  { year: '2022', level: 3, skill: 'CSE @ DSATM' },
  { year: '2023', level: 4, skill: 'MERN Stack, Backend, Databases' },
  { year: '2024', level: 5, skill: 'IoT, Cloud, AI/ML, Research' },
  { year: '2025', level: 6, skill: 'LangChain, RAG, System Design, Advanced Projects' },
];

const LearningTimelineChart = () => {
  return (
    <div className="w-full h-[320px] bg-gray-50 rounded-xl p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="year" />
          <YAxis
            tick={false}
            domain={[0, 7]}
          />
          <Tooltip
            contentStyle={{ backgroundColor: '#111', color: '#fff', borderRadius: '8px' }}
            labelStyle={{ color: '#9ca3af' }}
            formatter={(_, __, item) => item.payload.skill}
          />
          <Line
            type="monotone"
            dataKey="level"
            stroke="#2563eb"
            strokeWidth={3}
            dot={{ r: 6 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LearningTimelineChart;
