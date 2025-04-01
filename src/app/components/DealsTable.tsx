// components/DealsTable.tsx
'use client';

import { observer } from 'mobx-react-lite';
import { dashboardStore } from '../stores/DashboardStore';

export const DealsTable = observer(() => (
    <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
            <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
            {dashboardStore.filteredDeals.map((deal) => (
                <tr key={deal.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{deal.productName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{deal.location}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{deal.date} - {deal.time}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${deal.amount.toFixed(3)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            deal.status === 'Delivered'
                                ? 'bg-green-100 text-green-800'
                                : deal.status === 'Pending'
                                    ? 'bg-yellow-100 text-yellow-800'
                                    : deal.status === 'Shipped'
                                        ? 'bg-blue-100 text-blue-800'
                                        : 'bg-red-100 text-red-800'
                        }`}>
                            {deal.status}
                        </span>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
));