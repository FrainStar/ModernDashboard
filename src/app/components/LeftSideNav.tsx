'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
    FiSettings,
    FiLogOut,
    FiHome,
    FiBox,
    FiHeart,
    FiInbox,
    FiShoppingCart,
    FiPackage,
    FiDollarSign,
    FiCalendar,
    FiCheckSquare,
    FiMail,
    FiFileText,
    FiLayers,
    FiUsers,
    FiGrid
} from 'react-icons/fi';

interface LeftSideNavProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LeftSideNav({ isOpen, onClose }: LeftSideNavProps) {
    const pathname = usePathname();

    // Закрытие меню при клике вне его области
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (isOpen && !target.closest('.left-side-nav') && !target.closest('.menu-toggle')) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen, onClose]);

    // Основные пункты меню
    const mainItems = [
        { path: '/dashboard', label: 'Dashboard', icon: <FiHome className="h-5 w-5" /> },
        { path: '/products', label: 'Products', icon: <FiBox className="h-5 w-5" /> },
        { path: '/favorites', label: 'Favorites', icon: <FiHeart className="h-5 w-5" /> },
        { path: '/inbox', label: 'Inbox', icon: <FiInbox className="h-5 w-5" /> },
        { path: '/orders', label: 'Order Lists', icon: <FiShoppingCart className="h-5 w-5" /> },
        { path: '/stock', label: 'Product Stock', icon: <FiPackage className="h-5 w-5" /> },
    ];

    // Дополнительные страницы (добавлены дополнительные пункты для демонстрации прокрутки)
    const pagesItems = [
        { path: '/pricing', label: 'Pricing', icon: <FiDollarSign className="h-5 w-5" /> },
        { path: '/calendar', label: 'Calendar', icon: <FiCalendar className="h-5 w-5" /> },
        { path: '/todo', label: 'To-Do', icon: <FiCheckSquare className="h-5 w-5" /> },
        { path: '/contact', label: 'Contact', icon: <FiMail className="h-5 w-5" /> },
        { path: '/invoice', label: 'Invoice', icon: <FiFileText className="h-5 w-5" /> },
        { path: '/ui-elements', label: 'UI Elements', icon: <FiLayers className="h-5 w-5" /> },
        { path: '/team', label: 'Team', icon: <FiUsers className="h-5 w-5" /> },
        { path: '/table', label: 'Table', icon: <FiGrid className="h-5 w-5" /> },
        { path: '/analytics', label: 'Analytics', icon: <FiGrid className="h-5 w-5" /> },
        { path: '/reports', label: 'Reports', icon: <FiGrid className="h-5 w-5" /> },
        { path: '/settings', label: 'Settings', icon: <FiGrid className="h-5 w-5" /> },
        { path: '/help', label: 'Help Center', icon: <FiGrid className="h-5 w-5" /> },
    ];

    // Проверка активного пути
    const isActive = (path: string) => {
        if (path === '/dashboard') return pathname === '/' || pathname === '/dashboard';
        return pathname === path;
    };

    return (
        <aside
            className={`left-side-nav fixed left-0 top-0 z-40 h-full w-64 transform bg-white shadow-xl transition-all duration-300 ease-in-out ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
            <div className="flex h-full flex-col">
                {/* Шапка с логотипом */}
                <div className="p-6">
                    <div className="relative h-10 w-32 cursor-pointer" onClick={onClose}>
                        <Image
                            src="/Logo.png"
                            alt="DashStack Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Прокручиваемая область меню */}
                <div className="flex-1 overflow-y-auto">
                    {/* Основные пункты меню */}
                    <nav className="mb-6 px-6">
                        <ul className="space-y-1">
                            {mainItems.map((item) => {
                                const active = isActive(item.path);
                                return (
                                    <li key={item.path}>
                                        <Link
                                            href={item.path}
                                            className={`group relative flex items-center rounded-full px-4 py-3 text-gray-700 transition-colors duration-200 ${
                                                active
                                                    ? 'text-blue-600 hover:bg-gray-200'
                                                    : 'hover:bg-blue-50 hover:text-blue-600'
                                            }`}
                                            onClick={onClose}
                                        >
                                            {active && (
                                                <span className="absolute inset-0 rounded-full bg-blue-100 group-hover:bg-gray-200" />
                                            )}
                                            <span className="relative z-10 mr-3">
                        {React.cloneElement(item.icon, {
                            className: `h-5 w-5 ${active ? 'text-blue-600' : 'text-gray-500'} group-hover:text-blue-600`
                        })}
                      </span>
                                            <span className="relative z-10">{item.label}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* Разделитель */}
                    <div className="mb-4 h-px bg-gray-200 mx-6"></div>

                    {/* Секция PAGES */}
                    <div className="mb-6 px-6">
                        <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                            Pages
                        </h2>
                        <ul className="space-y-1">
                            {pagesItems.map((item) => {
                                const active = isActive(item.path);
                                return (
                                    <li key={item.path}>
                                        <Link
                                            href={item.path}
                                            className={`group relative flex items-center rounded-full px-4 py-3 text-gray-700 transition-colors duration-200 ${
                                                active
                                                    ? 'text-blue-600 hover:bg-gray-200'
                                                    : 'hover:bg-blue-50 hover:text-blue-600'
                                            }`}
                                            onClick={onClose}
                                        >
                                            {active && (
                                                <span className="absolute inset-0 rounded-full bg-blue-100 group-hover:bg-gray-200" />
                                            )}
                                            <span className="relative z-10 mr-3">
                        {React.cloneElement(item.icon, {
                            className: `h-5 w-5 ${active ? 'text-blue-600' : 'text-gray-500'} group-hover:text-blue-600`
                        })}
                      </span>
                                            <span className="relative z-10">{item.label}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                {/* Нижняя часть меню (фиксированная) */}
                <div className="border-t p-6">
                    <Link
                        href="/settings"
                        className={`group relative flex items-center rounded-full px-4 py-3 text-gray-700 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600`}
                        onClick={onClose}
                    >
            <span className="relative z-10 mr-3">
              <FiSettings className="h-5 w-5 text-gray-500 group-hover:text-blue-600" />
            </span>
                        <span className="relative z-10">Settings</span>
                    </Link>
                    <Link
                        href="/logout"
                        className={`group relative flex items-center rounded-full px-4 py-3 text-gray-700 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600`}
                        onClick={onClose}
                    >
            <span className="relative z-10 mr-3">
              <FiLogOut className="h-5 w-5 text-gray-500 group-hover:text-blue-600" />
            </span>
                        <span className="relative z-10">Logout</span>
                    </Link>
                </div>
            </div>
        </aside>
    );
}