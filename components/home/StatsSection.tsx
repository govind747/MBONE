'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Flame, Users, Coins, ShoppingCart } from 'lucide-react';

// Counter Component for that "Live Data" feel
const Counter = ({ value, duration = 2 }: { value: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value.replace(/,/g, ''));
      const totalMiliseconds = duration * 1000;
      const incrementTime = totalMiliseconds / end;

      let timer = setInterval(() => {
        start += Math.ceil(end / 100);
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 30);
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count.toLocaleString()}{value.includes('%') ? '%' : ''}</span>;
};

export default function StatsSection() {
  const stats = [
    {
      title: 'Circulating Supply',
      value: '1,000,000,000',
      subtitle: '$MBONE Fixed Cap',
      icon: <Coins className="w-6 h-6 text-brand-primary" />,
      color: 'border-brand-primary/20'
    },
    {
      title: 'Community Allocation',
      value: '100%',
      subtitle: 'Zero Team Tokens',
      icon: <Users className="w-6 h-6 text-brand-accent" />,
      color: 'border-brand-accent/20'
    },
    {
      title: 'Deflationary Burn',
      value: '2%',
      subtitle: 'Burned per Transaction',
      icon: <Flame className="w-6 h-6 text-red-500" />,
      color: 'border-red-200'
    }
  ];

  return (
    <section className="py-24 bg-[#F8F9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Utility Focus */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h2 className="text-sm font-black text-brand-accent uppercase tracking-[0.3em] mb-4">
              Protocol Metrics
            </h2>
            <h3 className="text-4xl md:text-6xl font-black text-brand-primary leading-tight">
              ENGINEERED FOR <br/> 
              <span className="text-brand-secondary/40">SCALABILITY.</span>
            </h3>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="hidden md:block bg-white p-4 rounded-2xl border border-brand-primary/10 shadow-sm"
          >
            <div className="flex items-center gap-3 text-brand-primary font-bold">
              <ShoppingCart className="w-5 h-5" />
              <span>Accepted at 50+ Partners</span>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group bg-white p-10 rounded-[2.5rem] border-2 ${stat.color} hover:border-brand-accent transition-all duration-500 relative overflow-hidden`}
            >
              {/* Subtle background glow */}
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-brand-primary/5 rounded-full blur-2xl group-hover:bg-brand-accent/10 transition-colors" />

              <div className="relative z-10">
                <div className="mb-8 p-3 bg-gray-50 inline-block rounded-xl group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                
                <h4 className="text-brand-secondary/60 font-bold uppercase tracking-widest text-xs mb-2">
                  {stat.title}
                </h4>

                <div className="text-4xl md:text-5xl font-black text-brand-primary mb-3">
                  <Counter value={stat.value} />
                </div>

                <p className="text-brand-secondary font-medium text-lg">
                  {stat.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Bar Bottom */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 pt-10 border-t border-gray-200 flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all"
        >
          {/* Replace these with real logos like CoinGecko, CoinMarketCap, etc. */}
          <span className="font-black text-2xl italic text-gray-400">CERTIK</span>
          <span className="font-black text-2xl italic text-gray-400">COINGECKO</span>
          <span className="font-black text-2xl italic text-gray-400">BINANCE SMART CHAIN</span>
          <span className="font-black text-2xl italic text-gray-400">PANCAKESWAP</span>
        </motion.div>
      </div>
    </section>
  );
}