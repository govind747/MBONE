'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Coins, Gift, AlertCircle, Wallet, AlertTriangle } from 'lucide-react';
import Image from 'next/image';
import { getMBONEBalance, getCurrentNetwork } from '@/utils/blockchain';

// WalletConnect component
function WalletConnect({ onConnect }: { onConnect?: (address: string) => void }) {
  const [address, setAddress] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);

  useEffect(() => {
    const checkConnection = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts[0]) {
            setAddress(accounts[0]);
            onConnect?.(accounts[0]);
          }
        } catch (error) {
          console.error('Error checking connection:', error);
        }
      }
    };
    
    checkConnection();

    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        if (accounts[0]) {
          setAddress(accounts[0]);
          onConnect?.(accounts[0]);
        } else {
          setAddress(null);
        }
      });
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', () => {});
      }
    };
  }, [onConnect]);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert('Please install MetaMask!');
      window.open('https://metamask.io/download/', '_blank');
      return;
    }

    setIsConnecting(true);
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAddress(accounts[0]);
      onConnect?.(accounts[0]);
    } catch (error) {
      console.error('Error connecting wallet:', error);
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = () => {
    setAddress(null);
    onConnect?.('');
  };

  if (address) {
    return (
      <div className="flex items-center gap-2">
        <div className="hidden md:block text-sm">
          <span className="text-gray-500">Connected:</span>
          <span className="ml-1 font-mono text-xs">
            {`${address.slice(0, 6)}...${address.slice(-4)}`}
          </span>
        </div>
        <button
          onClick={disconnectWallet}
          className="p-2 hover:bg-red-50 rounded-full transition-colors"
          title="Disconnect"
        >
          <Wallet className="w-5 h-5 text-red-500" />
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={connectWallet}
      disabled={isConnecting}
      className="flex items-center gap-2 px-4 py-2 bg-brand-primary text-white rounded-full font-semibold hover:bg-opacity-90 transition-colors disabled:opacity-50"
    >
      <Wallet className="w-4 h-4" />
      {isConnecting ? 'Connecting...' : 'Connect Wallet'}
    </button>
  );
}

// Network Switcher Component
function NetworkSwitcher() {
  const [isSwitching, setIsSwitching] = useState(false);
  const SEPOLIA_CHAIN_ID = '0xaa36a7'; // 11155111 in hex

  const switchToSepolia = async () => {
    if (!window.ethereum) return;
    
    setIsSwitching(true);
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: SEPOLIA_CHAIN_ID }],
      });
    } catch (error: any) {
      if (error.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
              chainId: SEPOLIA_CHAIN_ID,
              chainName: 'Sepolia',
              nativeCurrency: {
                name: 'SepoliaETH',
                symbol: 'ETH',
                decimals: 18,
              },
              rpcUrls: ['https://rpc.sepolia.org'],
              blockExplorerUrls: ['https://sepolia.etherscan.io'],
            }],
          });
        } catch (addError) {
          console.error('Failed to add Sepolia:', addError);
        }
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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showRewardsModal, setShowRewardsModal] = useState(false);
  const [mboneBalance, setMboneBalance] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userAddress, setUserAddress] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isWrongNetwork, setIsWrongNetwork] = useState(false);
  const [currentChainId, setCurrentChainId] = useState<number | null>(null);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/tokenomics', label: 'Tokenomics' },
    { href: '/contact', label: 'Contact' },
  ];

  const SEPOLIA_CHAIN_ID = 11155111;

  // Check network
  const checkNetwork = useCallback(async () => {
    if (!window.ethereum) return;
    
    try {
      const chainIdHex = await window.ethereum.request({ method: 'eth_chainId' });
      const chainId = parseInt(chainIdHex, 16);
      setCurrentChainId(chainId);
      setIsWrongNetwork(chainId !== SEPOLIA_CHAIN_ID);
      
      console.log(`Network check - Current Chain ID: ${chainId}, Expected: ${SEPOLIA_CHAIN_ID}`);
      console.log(`Is wrong network: ${chainId !== SEPOLIA_CHAIN_ID}`);
    } catch (err) {
      console.error('Error checking network:', err);
    }
  }, []);

  // Fetch MBONE balance
  const fetchBalance = useCallback(async (address: string) => {
    if (isWrongNetwork) {
      console.log('Skipping balance fetch - wrong network');
      setMboneBalance(null);
      return;
    }
    
    setIsLoading(true);
    setError(null);
    try {
      console.log('Fetching balance for address:', address);
      const balance = await getMBONEBalance(address);
      console.log('Balance received:', balance);
      setMboneBalance(balance);
    } catch (err) {
      console.error('Error fetching balance:', err);
      setError('Failed to load balance');
      setMboneBalance(0);
    } finally {
      setIsLoading(false);
    }
  }, [isWrongNetwork]);

  // Listen for network and account changes
  useEffect(() => {
    if (!window.ethereum) return;

    checkNetwork();

    // Listen for chain changes
    window.ethereum.on('chainChanged', () => {
      console.log('Chain changed, reloading...');
      window.location.reload();
    });

    // Listen for accounts changes
    window.ethereum.on('accountsChanged', (accounts: string[]) => {
      console.log('Accounts changed:', accounts);
      if (accounts[0]) {
        setUserAddress(accounts[0]);
      } else {
        setUserAddress(null);
        setMboneBalance(null);
      }
    });

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('chainChanged', () => {});
        window.ethereum.removeListener('accountsChanged', () => {});
      }
    };
  }, [checkNetwork]);

  // Check network whenever user address changes
  useEffect(() => {
    checkNetwork();
  }, [userAddress, checkNetwork]);

  // Fetch balance when address is available and network is correct
  useEffect(() => {
    if (userAddress && !isWrongNetwork) {
      fetchBalance(userAddress);
      
      // Refresh every 5 minutes
      const interval = setInterval(() => fetchBalance(userAddress), 300000);
      return () => clearInterval(interval);
    } else if (userAddress && isWrongNetwork) {
      setMboneBalance(null);
    }
  }, [userAddress, isWrongNetwork, fetchBalance]);

  const handleConnect = (address: string) => {
    console.log('Wallet connected:', address);
    setUserAddress(address || null);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold">MB</span>
            </div>
            <span className="text-xl font-bold text-brand-primary tracking-wide">
              MILLIONBONE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-brand-secondary hover:text-brand-accent transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
            
            <div className="flex items-center space-x-4">
              {/* Network Warning & Switcher */}
              {userAddress && isWrongNetwork && (
                <NetworkSwitcher />
              )}
              
              {/* Network Info (Debug) */}
              {currentChainId && currentChainId !== SEPOLIA_CHAIN_ID && (
                <div className="flex items-center gap-1 px-2 py-1 bg-red-100 rounded-full">
                  <AlertTriangle className="w-3 h-3 text-red-600" />
                  <span className="text-xs text-red-600">
                    Wrong Network: {currentChainId}
                  </span>
                </div>
              )}
              
              {/* MBONE Balance Display */}
              {userAddress ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`flex items-center space-x-2 px-3 py-1.5 rounded-full border ${
                    isWrongNetwork 
                      ? 'bg-gray-100 border-gray-200' 
                      : 'bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 border-brand-primary/20'
                  }`}
                >
                  <Coins className={`w-4 h-4 ${isWrongNetwork ? 'text-gray-400' : 'text-brand-accent'}`} />
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500">MBONE Balance</span>
                    {isWrongNetwork ? (
                      <span className="text-sm font-bold text-gray-400">Wrong Network</span>
                    ) : isLoading ? (
                      <span className="text-sm font-bold text-gray-400">Loading...</span>
                    ) : error ? (
                      <span className="text-sm font-bold text-red-500">Error</span>
                    ) : (
                      <span className="text-sm font-bold text-brand-primary">
                        {mboneBalance !== null && mboneBalance > 0 
                          ? mboneBalance.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 4
                            })
                          : '0'} MBONE
                      </span>
                    )}
                  </div>
                </motion.div>
              ) : (
                <div className="flex items-center space-x-2 px-3 py-1.5 bg-gray-100 rounded-full">
                  <Wallet className="w-4 h-4 text-gray-400" />
                  <span className="text-xs text-gray-500">Not Connected</span>
                </div>
              )}
              
              {/* Pay with MBONE Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://your-second-app.com', '_blank')}
                className="text-gray-700 px-6 py-2 rounded-full font-bold hover:shadow-lg transition-all border border-brand-primary"
              >
                Pay with MBONE →
              </motion.button>
              
              <WalletConnect onConnect={handleConnect} />
              
              {/* Rewards Button */}
              <button
                onClick={() => setShowRewardsModal(!showRewardsModal)}
                className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Gift className="w-5 h-5 text-brand-primary" />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-secondary hover:text-brand-accent"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 text-brand-secondary hover:text-brand-accent font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                
                {userAddress && (
                  <div className="px-3 py-2">
                    <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                      <Coins className="w-4 h-4 text-brand-accent" />
                      <div>
                        <p className="text-xs text-gray-500">MBONE Balance</p>
                        {isWrongNetwork ? (
                          <p className="font-bold text-red-500 text-sm">Wrong Network</p>
                        ) : (
                          <p className="font-bold">
                            {isLoading ? '...' : (mboneBalance !== null ? mboneBalance.toFixed(4) : '0')} MBONE
                          </p>
                        )}
                      </div>
                    </div>
                    {isWrongNetwork && (
                      <div className="mt-2">
                        <NetworkSwitcher />
                      </div>
                    )}
                  </div>
                )}
                
                <div className="pt-2 space-y-2">
                  <button 
                    onClick={() => window.open('https://your-second-app.com', '_blank')}
                    className="w-full bg-gradient-to-r from-brand-accent to-brand-primary text-white px-4 py-2 rounded-full font-bold"
                  >
                    Pay with MBONE →
                  </button>
                  <WalletConnect onConnect={handleConnect} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Rewards Modal */}
      <AnimatePresence>
        {showRewardsModal && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 right-4 w-96 z-50"
          >
            <div className="bg-white rounded-xl shadow-2xl p-6 border border-gray-200">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <Gift className="w-5 h-5 text-brand-accent" />
                  UMBDT Rewards
                </h3>
                <button
                  onClick={() => setShowRewardsModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={20} />
                </button>
              </div>
              
              {!userAddress ? (
                <div className="text-center py-6">
                  <AlertCircle className="w-12 h-12 mx-auto text-gray-400 mb-3" />
                  <p className="text-gray-500">Connect wallet to check rewards</p>
                </div>
              ) : isWrongNetwork ? (
                <div className="text-center py-6">
                  <AlertTriangle className="w-12 h-12 mx-auto text-yellow-500 mb-3" />
                  <p className="font-semibold text-gray-700 mb-1">Wrong Network</p>
                  <p className="text-sm text-gray-500 mb-3">
                    Please switch to Sepolia network to check rewards
                  </p>
                  <NetworkSwitcher />
                </div>
              ) : (
                <div className="text-center py-6">
                  <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-3">
                    <AlertCircle className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="font-semibold text-gray-700 mb-1">No Rewards Available</p>
                  <p className="text-sm text-gray-500">
                    Rewards will appear here when deposited to the smart contract
                  </p>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-xs text-blue-600">
                      💡 UMBDT rewards are distributed via smart contract. 
                      Check back after deposits are made!
                    </p>
                  </div>
                </div>
              )}
              
              <div className="mt-4 pt-3 border-t text-center">
                <p className="text-xs text-gray-400">
                  1 UMBDT = $1 value for purchases on our platform
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}