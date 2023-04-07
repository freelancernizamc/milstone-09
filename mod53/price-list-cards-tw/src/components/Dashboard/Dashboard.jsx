import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {
    const students = [
        {
            id: 1,
            name: 'John',
            math: 80,
            physics: 75,
            chemistry: 85
        },
        {
            id: 2,
            name: 'Jane',
            math: 90,
            physics: 85,
            chemistry: 80
        },
        {
            id: 3,
            name: 'Bob',
            math: 70,
            physics: 80,
            chemistry: 75
        },
        {
            id: 4,
            name: 'Alice',
            math: 95,
            physics: 90,
            chemistry: 85
        },
        {
            id: 5,
            name: 'Mark',
            math: 85,
            physics: 75,
            chemistry: 80
        },
        {
            id: 6,
            name: 'Kate',
            math: 80,
            physics: 90,
            chemistry: 85
        },
        {
            id: 7,
            name: 'Tom',
            math: 75,
            physics: 80,
            chemistry: 70
        },
        {
            id: 8,
            name: 'Sara',
            math: 95,
            physics: 80,
            chemistry: 95
        },
        {
            id: 9,
            name: 'Kat',
            math: 95,
            physics: 70,
            chemistry: 95
        },
        {
            id: 10,
            name: 'Mim',
            math: 95,
            physics: 75,
            chemistry: 95
        }
    ];




    return (
        <div>
            <LineChart
                width={1000}
                height={300}
                data={students}
            >
                <Line dataKey="physics"></Line>
                <Line stroke="#8884d8" dataKey="math"></Line>
                <XAxis dataKey="name" />
                <YAxis></YAxis>
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Dashboard;