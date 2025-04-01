'use client'

import { enableStaticRendering } from 'mobx-react-lite';

enableStaticRendering(typeof window === 'undefined');

export * from '@/app/stores/DashboardStore';