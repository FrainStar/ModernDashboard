'use client';

import { FiSearch, FiBell, FiUser, FiChevronDown } from 'react-icons/fi';
import {useState} from "react";

interface TopBarProps {
    isScrolled: boolean;
    toggleSidebar: () => void;
    isMenuOpen: boolean;
}

export default function TopBar({ isScrolled, toggleSidebar, isMenuOpen }: TopBarProps) {
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [language, setLanguage] = useState('Русский');

    return (
        <header className={`fixed top-0 left-0 right-0 z-30 bg-white shadow-sm transition-all duration-300 ${
            isScrolled ? 'shadow-md' : ''
        }`}>
            <div className="flex h-16 items-center justify-between px-6">
                {/* Левая часть - кнопка меню и поиск */}
                <div className="flex items-center space-x-6">
                    {/* Кнопка гамбургер/крестик */}
                    <button
                        onClick={toggleSidebar}
                        className="menu-toggle flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100"
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isMenuOpen ? (
                            <div className="text-xl font-bold text-gray-800">×</div>
                        ) : (
                            <div className="flex flex-col space-y-1.5">
                                <span className="h-0.5 w-6 bg-gray-800" />
                                <span className="h-0.5 w-6 bg-gray-800" />
                                <span className="h-0.5 w-6 bg-gray-800" />
                            </div>
                        )}
                    </button>

                    <div className="relative hidden md:block">
                        <FiSearch className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Поиск..."
                            className="h-10 w-100 rounded-full border-0 bg-gray-100 pl-10 pr-4 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* Правая часть - уведомления, язык, профиль */}
                <div className="flex items-center space-x-4">
                    {/* Кнопка уведомлений */}
                    <button className="relative flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100">
                        <FiBell className="h-5 w-5 text-gray-600" />
                        <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
                    </button>

                    {/* Выбор языка */}
                    <div className="relative">
                        <button
                            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                            className="flex h-10 items-center space-x-1 rounded-full px-3 hover:bg-gray-100"
                        >
                            <span className="text-sm font-medium">{language}</span>
                            <FiChevronDown className="h-4 w-4" />
                        </button>

                        {isLanguageOpen && (
                            <div className="absolute right-0 mt-2 w-40 rounded-lg bg-white py-1 shadow-lg">
                                <button
                                    onClick={() => {
                                        setLanguage('Русский');
                                        setIsLanguageOpen(false);
                                    }}
                                    className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                                >
                                    Русский
                                </button>
                                <button
                                    onClick={() => {
                                        setLanguage('English');
                                        setIsLanguageOpen(false);
                                    }}
                                    className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                                >
                                    English
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Профиль пользователя */}
                    <div className="flex items-center space-x-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                            <FiUser className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="hidden md:block">
                            <p className="text-sm font-medium">Иван Иванов</p>
                            <p className="text-xs text-gray-500">Менеджер проектов</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}