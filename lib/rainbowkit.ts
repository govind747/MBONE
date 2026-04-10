'use client';

import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, polygon, arbitrum } from 'viem/chains';

export const config = getDefaultConfig({
  appName: 'MILLIONBONE',
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || 'demo-project-id',
  chains: [mainnet, polygon, arbitrum],
  ssr: true,
}); 