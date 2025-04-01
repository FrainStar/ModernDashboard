'use client'

import { makeAutoObservable } from 'mobx';

class DashboardStore {
    // Карточки с данными (можно сделать и их зависимыми от месяца)
    cardsData = [
        {
            title: 'Total User',
            value: '40,689',
            change: '8.5% Up from yesterday',
            trend: 'up' as const,
        },
        {
            title: 'Total Order',
            value: '10,293',
            change: '1.3% Up from past week',
            trend: 'up' as const,
        },
        {
            title: 'Total Sales',
            value: '$89,000',
            change: '4.3% Down from yesterday',
            trend: 'down' as const,
        },
        {
            title: 'Total Pending',
            value: '2,040',
            change: '1.8% Up from yesterday',
            trend: 'up' as const,
        }
    ];

    // Данные для всех месяцев
    allMonthsData: Record<number, {
        salesData: Array<{name: string, value: number}>,
        dealsData: Array<{
            id: number;
            productName: string;
            location: string;
            date: string;
            time: string;
            piece: number;
            amount: number;
            status: 'Delivered' | 'Pending' | 'Cancelled' | 'Shipped';
        }>
    }> = {};

    selectedMonth = new Date().getMonth() + 1;

    constructor() {
        makeAutoObservable(this);
        this.generateAllMonthsData();
    }

    private generateAllMonthsData() {
        const products = ['Apple Watch', 'MacBook Pro', 'iPhone 15', 'iPad Air', 'AirPods Pro', 'iMac 24"'];
        const statuses = ['Delivered', 'Pending', 'Cancelled', 'Shipped'] as const;
        const baseChartValues = [20, 40, 60, 80, 100, 80, 60, 40, 20, 40, 60, 80];

        // Генерируем данные для каждого месяца
        for (let month = 1; month <= 12; month++) {
            // Генерация данных для графика
            const salesData = ['5k', '10k', '15k', '20k', '25k', '30k', '35k', '40k', '45k', '50k', '55k', '60k']
                .map((name, i) => ({
                    name,
                    value: Math.max(0, Math.min(100, baseChartValues[i] + Math.floor(Math.random() * 10) - 5))
                }));

            // Генерация сделок
            const dealsCount = 5 + Math.floor(Math.random() * 10); // От 5 до 15 сделок в месяц
            const dealsData = Array.from({ length: dealsCount }, (_, i) => {
                const day = Math.floor(1 + Math.random() * 28);
                return {
                    id: month * 1000 + i,
                    productName: products[Math.floor(Math.random() * products.length)],
                    location: `${Math.floor(1000 + Math.random() * 9000)} ${['Main', 'Oak', 'Pine', 'Maple', 'Elm'][Math.floor(Math.random() * 5)]} ${['St', 'Ave', 'Blvd', 'Rd'][Math.floor(Math.random() * 4)]}`,
                    date: `${day}.${month < 10 ? '0' + month : month}.2023`,
                    time: `${Math.floor(8 + Math.random() * 10)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')} ${Math.random() > 0.5 ? 'AM' : 'PM'}`,
                    piece: Math.floor(1 + Math.random() * 500),
                    amount: parseFloat((100 + Math.random() * 5000).toFixed(3)),
                    status: statuses[Math.floor(Math.random() * statuses.length)],
                    month: month
                };
            });

            this.allMonthsData[month] = { salesData, dealsData };
        }
    }

    setSelectedMonth(month: number) {
        this.selectedMonth = month;
    }

    get salesData() {
        return this.allMonthsData[this.selectedMonth]?.salesData || [];
    }

    get filteredDeals() {
        return this.allMonthsData[this.selectedMonth]?.dealsData || [];
    }

    // Для селектора месяцев
    get monthsOptions() {
        return Array.from({ length: 12 }, (_, i) => ({
            value: i + 1,
            label: new Date(0, i).toLocaleString('default', { month: 'long' })
        }));
    }
}

export const dashboardStore = new DashboardStore();