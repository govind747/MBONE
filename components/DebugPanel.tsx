'use client';

import { useState } from 'react';
import { getMBONEBalance, getTokenInfo } from '@/utils/blockchain';

export default function DebugPanel() {
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState<number | null>(null);
  const [tokenInfo, setTokenInfo] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const testBalance = async () => {
    setLoading(true);
    try {
      const info = await getTokenInfo();
      setTokenInfo(info);
      
      if (address) {
        const bal = await getMBONEBalance(address);
        setBalance(bal);
      }
    } catch (error) {
      console.error('Debug error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-black/90 text-white p-4 rounded-lg text-xs max-w-md">
      <h3 className="font-bold mb-2">Debug Panel</h3>
      <input
        type="text"
        placeholder="Wallet Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="w-full p-1 mb-2 text-black rounded"
      />
      <button
        onClick={testBalance}
        disabled={loading}
        className="bg-blue-500 px-2 py-1 rounded mb-2"
      >
        {loading ? 'Testing...' : 'Test Balance'}
      </button>
      {tokenInfo && (
        <div>
          <p>Token: {tokenInfo.name} ({tokenInfo.symbol})</p>
          <p>Decimals: {tokenInfo.decimals}</p>
        </div>
      )}
      {balance !== null && (
        <p>Balance: {balance} MBONE</p>
      )}
    </div>
  );
}