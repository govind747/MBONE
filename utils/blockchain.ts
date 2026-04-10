// utils/blockchain.ts
import { ethers } from 'ethers';

const MBONE_TOKEN_ABI = [
  {
    name: 'balanceOf',
    type: 'function',
    stateMutability: 'view',
    inputs: [{ name: 'account', type: 'address' }],
    outputs: [{ name: '', type: 'uint256' }],
  },
  {
    name: 'approve',
    type: 'function',
    stateMutability: 'nonpayable',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    outputs: [{ name: '', type: 'bool' }],
  },
  {
    name: 'allowance',
    type: 'function',
    stateMutability: 'view',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
    ],
    outputs: [{ name: '', type: 'uint256' }],
  },
];

const DEFAULT_DECIMALS = 18;
const MBONE_TOKEN_ADDRESS = process.env.NEXT_PUBLIC_MBONE_TOKEN_ADDRESS;

// Sepolia Chain ID is 11155111
const SEPOLIA_CHAIN_ID = 11155111;

// Get current network info
export async function getCurrentNetwork(): Promise<{ chainId: number; name: string }> {
  if (!window.ethereum) return { chainId: 0, name: 'Unknown' };
  
  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const network = await provider.getNetwork();
    const chainId = Number(network.chainId);
    
    // Map chain ID to name
    let name = 'Unknown';
    if (chainId === 1) name = 'Ethereum Mainnet';
    else if (chainId === 11155111) name = 'Sepolia';
    else if (chainId === 5) name = 'Goerli';
    else if (chainId === 56) name = 'BSC Mainnet';
    else if (chainId === 97) name = 'BSC Testnet';
    
    console.log(`Current network: ${name} (Chain ID: ${chainId})`);
    return { chainId, name };
  } catch (error) {
    console.error('Error getting network:', error);
    return { chainId: 0, name: 'Unknown' };
  }
}

// Check if on correct network
export async function isCorrectNetwork(): Promise<boolean> {
  const { chainId } = await getCurrentNetwork();
  return chainId === SEPOLIA_CHAIN_ID;
}

// Get MBONE balance with network check
export async function getMBONEBalance(address: string): Promise<number> {
  if (!address || !window.ethereum) {
    console.log('No address or ethereum provider');
    return 0;
  }
  
  if (!MBONE_TOKEN_ADDRESS || MBONE_TOKEN_ADDRESS === '0xYourContractAddressHere') {
    console.error('Please set NEXT_PUBLIC_MBONE_TOKEN_ADDRESS in .env.local');
    return 0;
  }
  
  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const network = await provider.getNetwork();
    const currentChainId = Number(network.chainId);
    
    console.log(`Connected to Chain ID: ${currentChainId}`);
    console.log(`Expected Chain ID: ${SEPOLIA_CHAIN_ID}`);
    
    // Check if on Sepolia
    if (currentChainId !== SEPOLIA_CHAIN_ID) {
      console.warn(`Wrong network. Current: ${currentChainId}, Expected: ${SEPOLIA_CHAIN_ID} (Sepolia)`);
      window.dispatchEvent(new CustomEvent('networkMismatch', { 
        detail: { required: 'Sepolia', current: currentChainId } 
      }));
      return 0;
    }
    
    // Check if contract exists
    const code = await provider.getCode(MBONE_TOKEN_ADDRESS);
    if (code === '0x') {
      console.error(`No contract found at ${MBONE_TOKEN_ADDRESS} on Sepolia`);
      return 0;
    }
    
    const contract = new ethers.Contract(MBONE_TOKEN_ADDRESS, MBONE_TOKEN_ABI, provider);
    const balanceWei = await contract.balanceOf(address);
    const balanceFormatted = parseFloat(ethers.formatUnits(balanceWei, DEFAULT_DECIMALS));
    
    console.log(`✅ Balance for ${address}: ${balanceFormatted} MBONE`);
    return balanceFormatted;
  } catch (error) {
    console.error('Error fetching MBONE balance:', error);
    return 0;
  }
}

export async function getTokenInfo() {
  return {
    name: 'MBONE Token',
    symbol: 'MBONE',
    decimals: DEFAULT_DECIMALS,
    address: MBONE_TOKEN_ADDRESS,
  };
}

// utils/blockchain.ts

// Add these functions at the bottom of your existing blockchain.ts file

// UMBDT Rewards Functions
export async function getUMBDTRewards(address: string): Promise<number> {
  if (!address || !window.ethereum) {
    console.log('No address or ethereum provider');
    return 0;
  }
  
  try {
    // Since you don't have a UMBDT contract yet, return 0
    // This will show "No Rewards Available" in the panel
    console.log('Checking UMBDT rewards for:', address);
    
    // You can also check if there's any MBONE balance to show as rewards
    // For now, return 0 until you deploy UMBDT contract
    return 0;
  } catch (error) {
    console.error('Error fetching UMBDT rewards:', error);
    return 0;
  }
}

export async function claimUMBDTRewards(address: string): Promise<boolean> {
  if (!address || !window.ethereum) {
    console.log('No address or ethereum provider');
    return false;
  }
  
  try {
    // Placeholder for claim functionality
    console.log('Claim rewards requested for:', address);
    
    // Show a message that this feature is coming soon
    alert('UMBDT rewards claiming will be available soon!');
    
    // Return false for now
    return false;
  } catch (error) {
    console.error('Error claiming rewards:', error);
    return false;
  }
}

export async function stakeUMBDT(address: string, amount: number): Promise<boolean> {
  if (!address || !window.ethereum) {
    console.log('No address or ethereum provider');
    return false;
  }
  
  try {
    // Placeholder for stake functionality
    console.log(`Staking ${amount} UMBDT requested for:`, address);
    
    // Show a message that this feature is coming soon
    alert(`Staking ${amount} UMBDT will be available soon!`);
    
    // Return false for now
    return false;
  } catch (error) {
    console.error('Error staking UMBDT:', error);
    return false;
  }
}

// Optional: Add a function to check if rewards are available
export async function checkRewardsAvailable(address: string): Promise<boolean> {
  if (!address) return false;
  
  try {
    // Return false until you deploy the UMBDT contract
    return false;
  } catch (error) {
    console.error('Error checking rewards:', error);
    return false;
  }
}

// Optional: Add a function to get staking info
export async function getStakingInfo(address: string): Promise<{
  stakedAmount: number;
  pendingRewards: number;
}> {
  if (!address) {
    return { stakedAmount: 0, pendingRewards: 0 };
  }
  
  try {
    // Return zeros until you deploy the staking contract
    return { stakedAmount: 0, pendingRewards: 0 };
  } catch (error) {
    console.error('Error fetching staking info:', error);
    return { stakedAmount: 0, pendingRewards: 0 };
  }
}