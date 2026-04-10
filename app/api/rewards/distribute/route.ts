import { NextResponse } from 'next/server';
import { ethers } from 'ethers';

// Mock database for user rewards
const userRewards = new Map();

export async function POST(request: Request) {
  try {
    const { address, umbdtAmount, mbonBonus, orderId } = await request.json();
    
    // Validate inputs
    if (!address || !umbdtAmount || !orderId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Check if rewards already distributed for this order
    const existingRewards = userRewards.get(`${address}_${orderId}`);
    if (existingRewards) {
      return NextResponse.json(
        { error: 'Rewards already distributed for this order' },
        { status: 400 }
      );
    }
    
    // Store rewards in database
    const rewardData = {
      address,
      umbdtAmount,
      mbonBonus,
      orderId,
      timestamp: Date.now(),
      claimed: false,
      staked: false,
    };
    
    userRewards.set(`${address}_${orderId}`, rewardData);
    
    // Update user's total rewards
    const userTotal = userRewards.get(address) || { umbdt: 0, mbon: 0 };
    userRewards.set(address, {
      umbdt: userTotal.umbdt + umbdtAmount,
      mbon: userTotal.mbon + mbonBonus,
    });
    
    // In production: Mint tokens to user's wallet
    // await mintTokens(address, umbdtAmount, mbonBonus);
    
    return NextResponse.json({
      success: true,
      message: `Distributed ${umbdtAmount} UMBDT and ${mbonBonus} MBON to ${address}`,
      rewards: rewardData,
    });
  } catch (error) {
    console.error('Error distributing rewards:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Get user rewards
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const address = searchParams.get('address');
  
  if (!address) {
    return NextResponse.json({ error: 'Address required' }, { status: 400 });
  }
  
  const userTotal = userRewards.get(address) || { umbdt: 0, mbon: 0 };
  
  return NextResponse.json({
    address,
    umbdtBalance: userTotal.umbdt,
    mbonBalance: userTotal.mbon,
    rewards: Array.from(userRewards.entries())
      .filter(([key]) => key.startsWith(address))
      .map(([_, value]) => value),
  });
}