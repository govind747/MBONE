'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wallet, LogOut } from 'lucide-react';

interface WalletConnectProps {
  onConnect?: (address: string) => void;
}

export default function WalletConnect({ onConnect }: WalletConnectProps) {
  const [address, setAddress] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);

  useEffect(() => {
    // Check if already connected
    const checkConnection = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts[0]) {
            setAddress(accounts[0]);
            onConnect?.(accounts[0]);
            window.dispatchEvent(new CustomEvent('walletConnected', { 
              detail: { address: accounts[0] } 
            }));
          }
        } catch (error) {
          console.error('Error checking connection:', error);
        }
      }
    };
    
    checkConnection();

    // Listen for account changes
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        if (accounts[0]) {
          setAddress(accounts[0]);
          onConnect?.(accounts[0]);
          window.dispatchEvent(new CustomEvent('walletConnected', { 
            detail: { address: accounts[0] } 
          }));
        } else {
          setAddress(null);
          window.dispatchEvent(new CustomEvent('walletDisconnected'));
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
      alert('Please install MetaMask or another Web3 wallet!');
      window.open('https://metamask.io/download/', '_blank');
      return;
    }

    setIsConnecting(true);
    try {
      const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts' 
      });
      setAddress(accounts[0]);
      onConnect?.(accounts[0]);
      window.dispatchEvent(new CustomEvent('walletConnected', { 
        detail: { address: accounts[0] } 
      }));
    } catch (error) {
      console.error('Error connecting wallet:', error);
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = () => {
    setAddress(null);
    window.dispatchEvent(new CustomEvent('walletDisconnected'));
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
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={disconnectWallet}
          className="p-2 hover:bg-red-50 rounded-full transition-colors"
          title="Disconnect"
        >
          <LogOut className="w-5 h-5 text-red-500" />
        </motion.button>
      </div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={connectWallet}
      disabled={isConnecting}
      className="flex items-center gap-2 px-4 py-2 bg-brand-primary text-white rounded-full font-semibold hover:bg-opacity-90 transition-colors disabled:opacity-50"
    >
      <Wallet className="w-4 h-4" />
      {isConnecting ? 'Connecting...' : 'Connect Wallet'}
    </motion.button>
  );
}