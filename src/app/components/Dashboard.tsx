'use client';

import { observer } from 'mobx-react-lite';
import { dashboardStore } from '../stores/DashboardStore';
import { DashboardCard } from './DashboardCard';
import { SalesChart } from './SalesChart';
import { DealsTable } from './DealsTable';

export const Dashboard = observer(() => {
    return (
        <div className="p-4 md:p-6">
            {/* Заголовок */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <div className="text-sm text-gray-500">
                    {new Date().toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {dashboardStore.cardsData.map((card, index) => (
                    <DashboardCard
                        key={index}
                        {...card}
                        className="hover:shadow-md transition-shadow"
                    />
                ))}
            </div>

            {/* График продаж */}
            <div className="mb-8 p-4 md:p-6 bg-white rounded-lg shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
                    <h2 className="text-xl font-semibold">Sales Details</h2>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">Month:</span>
                        <select
                            value={dashboardStore.selectedMonth}
                            onChange={(e) => dashboardStore.setSelectedMonth(Number(e.target.value))}
                            className="px-3 py-2 border rounded-lg bg-white"
                        >
                            {dashboardStore.monthsOptions.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <SalesChart />
            </div>

            {/* Таблица сделок */}
            <div className="p-4 md:p-6 bg-white rounded-lg shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
                    <h2 className="text-xl font-semibold">Deals Details</h2>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">Month:</span>
                        <select
                            value={dashboardStore.selectedMonth}
                            onChange={(e) => dashboardStore.setSelectedMonth(Number(e.target.value))}
                            className="px-3 py-2 border rounded-lg bg-white"
                        >
                            {dashboardStore.monthsOptions.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <DealsTable />
            </div>
        </div>
    );
});