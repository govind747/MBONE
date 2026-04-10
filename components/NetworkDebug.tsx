// components/NetworkDebug.tsx
'use client';

import { useState, useEffect } from 'react';
import { getCurrentNetwork } from '@/utils/blockchain';

export default function NetworkDebug() {
  const [network, setNetwork] = useState<{ chainId: number; name: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkNetwork = async () => {
      try {
        const net = await getCurrentNetwork();
        setNetwork(net);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      }
    };
    
    checkNetwork();
    
    // Listen for network changes
    if (window.ethereum) {
      window.ethereum.on('chainChanged', () => {
        window.location.reload();
      });
    }
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-black text-white p-3 rounded-lg text-xs font-mono">
      <div className="font-bold mb-1">Network Debug</div>
      {network ? (
        <>
          <div>Network: {network.name}</div>
          <div>Chain ID: {network.chainId}</div>
          <div>Expected: 11155111 (Sepolia)</div>
          {network.chainId !== 11155111 && (
            <div className="text-red-400 mt-1">⚠️ Wrong network! Please switch to Sepolia</div>
          )}
          {network.chainId === 11155111 && (
            <div className="text-green-400 mt-1">✅ Correct network</div>
          )}
        </>
      ) : error ? (
        <div className="text-red-400">Error: {error}</div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}