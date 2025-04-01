'use client';

import { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import TopBar from '@/app/components/TopBar';
import LeftSideNav from '@/app/components/LeftSideNav';
import { Dashboard } from '@/app/components/Dashboard';

const HomePage = observer(() => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative min-h-screen">
            {/* TopBar с затемнением */}
            <div className={`relative z-40 ${isMenuOpen ? 'opacity-70' : ''}`}>
                <TopBar
                    isScrolled={isScrolled}
                    toggleSidebar={() => setIsMenuOpen(!isMenuOpen)}
                    isMenuOpen={isMenuOpen}
                />
            </div>

            {/* Левое меню */}
            <LeftSideNav
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            />

            {/* Затемнение фона */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/30 transition-opacity duration-300"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}

            {/* Основной контент с Dashboard */}
            <main className={`pt-16 transition-all ${isMenuOpen ? 'blur-sm' : ''}`}>
                <Dashboard />
            </main>
        </div>
    );
});

export default HomePage;
