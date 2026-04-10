'use client';

import { useState, useEffect } from 'react';
import { fetchMerkleProof, verifyUserRewards } from '@/utils/merkle';
import { useAccount } from 'wagmi'; // If using wagmi for wallet connection

interface MerkleFetcherProps {
  address?: string;
  onRewardsFetched?: (rewards: any) => void;
}

export default function MerkleFetcher({ address, onRewardsFetched }: MerkleFetcherProps) {
  const [loading, setLoading] = useState(false);
  const [rewards, setRewards] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const { address: connectedAddress } = useAccount(); // If using wagmi

  const userAddress = address || connectedAddress;

  const fetchRewards = async () => {
    if (!userAddress) {
      setError('No wallet connected');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const userRewards = await verifyUserRewards(userAddress);
      if (userRewards) {
        setRewards(userRewards);
        onRewardsFetched?.(userRewards);
      } else {
        setError('No rewards found for this address');
      }
    } catch (err) {
      console.error('Failed to fetch rewards:', err);
      setError('Failed to fetch rewards. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">UMBDT Rewards</h3>
        <button
          onClick={fetchRewards}
          disabled={loading || !userAddress}
          className="px-4 py-2 bg-brand-accent text-white rounded-lg disabled:opacity-50"
        >
          {loading ? 'Fetching...' : 'Check Rewards'}
        </button>
      </div>

      {error && (
        <div className="text-red-500 text-sm mb-2">{error}</div>
      )}

      {rewards && (
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>UMBDT Balance:</span>
            <span className="font-bold">{rewards.rewards.umbdtBalance} UMBDT</span>
          </div>
          <div className="flex justify-between">
            <span>Can Redeem:</span>
            <span className={rewards.rewards.canRedeem ? 'text-green-500' : 'text-red-500'}>
              {rewards.rewards.canRedeem ? 'Yes' : 'No'}
            </span>
          </div>
          <button className="w-full mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg">
            Redeem UMBDT
          </button>
        </div>
      )}

      {!userAddress && (
        <p className="text-gray-500 text-sm">Connect wallet to check your UMBDT rewards</p>
      )}
    </div>
  );
}