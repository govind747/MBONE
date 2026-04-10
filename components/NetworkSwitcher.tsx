// components/NetworkSwitcher.tsx
'use client';

import { useState } from 'react';
import { AlertTriangle } from 'lucide-react';

const SEPOLIA_CHAIN_ID = '0xaa36a7'; // 11155111 in hex

export default function NetworkSwitcher() {
  const [isSwitching, setIsSwitching] = useState(false);

  const switchToSepolia = async () => {
    if (!window.ethereum) {
      alert('Please install MetaMask!');
      return;
    }

    setIsSwitching(true);
    try {
      // Try to switch to Sepolia
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: SEPOLIA_CHAIN_ID }],
      });
    } catch (error: any) {
      // If Sepolia isn't added to MetaMask, add it
      if (error.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: SEPOLIA_CHAIN_ID,
                chainName: 'Sepolia',
                nativeCurrency: {
                  name: 'SepoliaETH',
                  symbol: 'ETH',
                  decimals: 18,
                },
                rpcUrls: ['https://rpc.sepolia.org'],
                blockExplorerUrls: ['https://sepolia.etherscan.io'],
              },
            ],
          });
        } catch (addError) {
          console.error('Failed to add Sepolia network:', addError);
          alert('Failed to add Sepolia network. Please add it manually in MetaMask.');
        }
      } else {
        console.error('Failed to switch network:', error);
        alert('Failed to switch to Sepolia. Please switch manually in MetaMask.');
      }
    } finally {
      setIsSwitching(false);
    }
  };

  return (
    <button
      onClick={switchToSepolia}
      disabled={isSwitching}
      className="flex items-center gap-2 px-3 py-1.5 bg-yellow-500 text-white rounded-lg text-sm hover:bg-yellow-600 transition-colors"
    >
      <AlertTriangle className="w-4 h-4" />
      {isSwitching ? 'Switching...' : 'Switch to Sepolia'}
    </button>
  );
}