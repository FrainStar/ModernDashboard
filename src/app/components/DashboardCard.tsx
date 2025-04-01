'use client';

import { observer } from 'mobx-react-lite';

interface DashboardCardProps {
    title: string;
    value: string;
    change: string;
    trend: 'up' | 'down';
    className?: string; // Добавляем необязательное свойство className
}

export const DashboardCard = observer(({ title, value, change, trend, className = '' }: DashboardCardProps) => (
    <div className={`flex-shrink-0 w-full sm:w-64 p-6 bg-white rounded-lg shadow ${className}`}>
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <p className="mt-2 text-2xl font-bold">{value}</p>
        <p className={`mt-2 text-sm ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
            {change}
        </p>
    </div>
));