// components/RewardsPanel.tsx
'use client';

import { useState, useEffect } from 'react';
import { Coins, TrendingUp, RefreshCw, Gift, Wallet } from 'lucide-react';
import { getUMBDTRewards, claimUMBDTRewards, stakeUMBDT } from '@/utils/blockchain';

interface RewardsPanelProps {
  userAddress: string | null;
}

export default function RewardsPanel({ userAddress }: RewardsPanelProps) {
  const [umbdtBalance, setUmbdtBalance] = useState(0);
  const [stakedAmount, setStakedAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [stakeAmount, setStakeAmount] = useState('');

  useEffect(() => {
    if (userAddress) {
      fetchRewards();
    }
  }, [userAddress]);

  const fetchRewards = async () => {
    if (!userAddress) return;
    setIsLoading(true);
    try {
      const balance = await getUMBDTRewards(userAddress);
      setUmbdtBalance(balance);
    } catch (error) {
      console.error('Error fetching rewards:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClaimRewards = async () => {
    if (!userAddress) return;
    setIsLoading(true);
    try {
      const success = await claimUMBDTRewards(userAddress);
      if (success) {
        await fetchRewards();
        alert('Rewards claimed successfully!');
      }
    } catch (error) {
      console.error('Error claiming rewards:', error);
      alert('Failed to claim rewards');
    } finally {
      setIsLoading(false);
    }
  };

  const handleStake = async () => {
    if (!userAddress || !stakeAmount) return;
    setIsLoading(true);
    try {
      const success = await stakeUMBDT(userAddress, parseFloat(stakeAmount));
      if (success) {
        setStakedAmount(stakedAmount + parseFloat(stakeAmount));
        setUmbdtBalance(umbdtBalance - parseFloat(stakeAmount));
        setStakeAmount('');
        alert('Staked successfully! 5% APY rewards activated');
      }
    } catch (error) {
      console.error('Error staking:', error);
      alert('Failed to stake');
    } finally {
      setIsLoading(false);
    }
  };

  if (!userAddress) {
    return (
      <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-200">
        <div className="text-center">
          <Wallet className="w-12 h-12 mx-auto text-gray-400 mb-3" />
          <p className="text-gray-500">Connect wallet to view rewards</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-200">
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
        <Gift className="w-5 h-5 text-brand-accent" />
        Your UMBDT Rewards
      </h3>

      {/* Balance Display */}
      <div className="bg-gradient-to-r from-brand-primary/5 to-brand-accent/5 rounded-lg p-4 mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600">Available UMBDT</span>
          <span className="text-2xl font-bold text-brand-primary">
            {isLoading ? '...' : umbdtBalance.toFixed(2)}
          </span>
        </div>
        <p className="text-xs text-gray-500">1 UMBDT = $1 discount on next purchase</p>
      </div>

      {/* Staking Section */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp className="w-4 h-4 text-green-500" />
          <span className="font-semibold">Staking (5% APY)</span>
        </div>
        <div className="flex gap-2">
          <input
            type="number"
            value={stakeAmount}
            onChange={(e) => setStakeAmount(e.target.value)}
            placeholder="Amount to stake"
            className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent"
          />
          <button
            onClick={handleStake}
            disabled={isLoading || !stakeAmount}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50"
          >
            Stake
          </button>
        </div>
        {stakedAmount > 0 && (
          <p className="text-xs text-gray-500 mt-1">Staked: {stakedAmount} UMBDT</p>
        )}
      </div>

      {/* Action Buttons */}
      <div className="space-y-2">
        <button
          onClick={handleClaimRewards}
          disabled={isLoading || umbdtBalance === 0}
          className="w-full py-2 bg-brand-accent text-white rounded-lg font-semibold hover:bg-opacity-90 disabled:opacity-50"
        >
          Claim Rewards
        </button>
        
        <button
          onClick={() => window.location.href = '/shop'}
          className="w-full py-2 border-2 border-brand-accent text-brand-accent rounded-lg font-semibold hover:bg-brand-accent hover:text-white transition-colors"
        >
          Redeem for Discount
        </button>
      </div>

      {/* Info Text */}
      <p className="text-xs text-gray-400 text-center mt-4">
        Earn 1 UMBDT per $1 spent. Stake for 5% APY returns
      </p>
    </div>
  );
}