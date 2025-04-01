'use client'

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { dashboardStore } from '@/app/stores/DashboardStore';
import { Provider } from 'mobx-react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Provider dashboardStore={dashboardStore}>
          {children}
      </Provider>
      </body>
    </html>
  );
}
