// components/SalesChart.tsx
'use client';

import { observer } from 'mobx-react-lite';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { dashboardStore } from '../stores/DashboardStore';

export const SalesChart = observer(() => {
    return (
        <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    data={dashboardStore.salesData}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 30,
                        bottom: 5,
                    }}
                    className="text-sm"
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="name"
                        tick={{ fontSize: '12px' }}
                    />
                    <YAxis
                        tickFormatter={(value) => `${value}%`}
                        tick={{ fontSize: '12px' }}
                        domain={[0, 100]}
                    />
                    <Tooltip
                        formatter={(value) => [`${value}%`, 'Percentage']}
                        labelFormatter={(label) => `Sales: ${label}`}
                        contentStyle={{
                            fontSize: '14px',
                            borderRadius: '8px',
                            padding: '8px 12px',
                        }}
                    />
                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#4f46e5"
                        fill="#4f46e5"
                        fillOpacity={0.2}
                        strokeWidth={2}
                        dot={{ fill: '#4f46e5', r: 4 }}
                        activeDot={{ r: 6 }}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
});