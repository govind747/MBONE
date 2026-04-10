import { ethers } from 'ethers';

interface PurchaseData {
  userId: string;
  address: string;
  orderId: string;
  totalAmount: number; // in USD
  products: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
  }>;
}

interface RewardCalculation {
  umbdtAmount: number;
  mbonBonus: number;
  stakingEligible: boolean;
}

// Calculate rewards based on purchase
export function calculateRewards(purchase: PurchaseData): RewardCalculation {
  // 1 UMBDT per $1 spent
  const umbdtAmount = purchase.totalAmount;
  
  // Bonus MBON tokens (10% of UMBDT amount as bonus)
  const mbonBonus = umbdtAmount * 0.1;
  
  // Check if eligible for staking (purchases over $100)
  const stakingEligible = purchase.totalAmount >= 100;
  
  return {
    umbdtAmount,
    mbonBonus,
    stakingEligible,
  };
}

// API endpoint to distribute rewards
export async function distributeRewards(purchase: PurchaseData): Promise<boolean> {
  try {
    const rewards = calculateRewards(purchase);
    
    // Call your backend API to mint/distribute tokens
    const response = await fetch('/api/rewards/distribute', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        address: purchase.address,
        umbdtAmount: rewards.umbdtAmount,
        mbonBonus: rewards.mbonBonus,
        orderId: purchase.orderId,
      }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to distribute rewards');
    }
    
    // Emit event for real-time balance update
    window.dispatchEvent(new CustomEvent('rewardsDistributed', {
      detail: {
        address: purchase.address,
        umbdtAmount: rewards.umbdtAmount,
        mbonAmount: rewards.mbonBonus,
      },
    }));
    
    return true;
  } catch (error) {
    console.error('Error distributing rewards:', error);
    return false;
  }
}

// Redeem UMBDT for discount
export async function redeemUMBDT(
  address: string,
  umbdtAmount: number,
  orderAmount: number
): Promise<{ success: boolean; discountAmount: number; newBalance: number }> {
  try {
    const response = await fetch('/api/rewards/redeem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        address,
        umbdtAmount,
        orderAmount,
      }),
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Redemption failed');
    }
    
    return {
      success: true,
      discountAmount: data.discountAmount,
      newBalance: data.newBalance,
    };
  } catch (error) {
    console.error('Error redeeming UMBDT:', error);
    return { success: false, discountAmount: 0, newBalance: 0 };
  }
}

// Stake UMBDT for 5% APY
export async function stakeUMBDT(address: string, amount: number): Promise<boolean> {
  try {
    const response = await fetch('/api/rewards/stake', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        address,
        amount,
      }),
    });
    
    if (!response.ok) {
      throw new Error('Staking failed');
    }
    
    return true;
  } catch (error) {
    console.error('Error staking UMBDT:', error);
    return false;
  }
}