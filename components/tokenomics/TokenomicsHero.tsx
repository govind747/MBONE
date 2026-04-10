'use client';

import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Database, Zap } from 'lucide-react';

export default function TokenomicsHero() {
  const quickStats = [
    { label: 'MAXIMUM SUPPLY', value: '1,000,000,000', sub: '$MBONE GENESIS', icon: Database },
    { label: 'CURRENT CIRCULATION', value: '950,402,118', sub: '95.04% ACTIVE', icon: Activity },
    { label: 'PROTOCOL BURN', value: '49,597,882', sub: 'PERMANENTLY REMOVED', icon: Zap }
  ];

  return (
    <section className="relative pt-32 pb-24 bg-[#F5FBE6] overflow-hidden">
      {/* Dynamic Background Elements */}
     <div className="absolute inset-0 pointer-events-none">
      {/* Gradient Orbs */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-brand-accent/5 blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-brand-primary/5 blur-[120px]" />
      
      {/* Holographic Border Text - Letter by Letter Transition */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
        <div className="relative">
          {/* Ghost Text (background) */}
          <div className="opacity-[0.02] text-[30rem] font-black leading-none">
            TOKENOMICS
          </div>
          
          {/* Animated Border Text */}
          <div className="absolute inset-0 flex">
            {'TOKENOMICS'.split('').map((letter, index) => (
              <div
                key={index}
                className="text-[30rem] font-black leading-none animate-border-flow"
                style={{
                  animationDelay: `${index * 0.15}s`,
                  WebkitTextStroke: '2px currentColor',
                  paintOrder: 'stroke fill',
                }}
              >
                {letter}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <style jsx>{`
      @keyframes borderFlow {
        0%, 100% {
          color: rgba(255, 255, 255, 0.1);
          text-shadow: 0 0 0px rgba(212, 255, 61, 0);
        }
        25% {
          color: rgba(255, 255, 255, 0.8);
          text-shadow: 0 0 20px rgba(212, 255, 61, 0.5);
        }
        50% {
          color: rgba(212, 255, 61, 0.9);
          text-shadow: 0 0 30px rgba(212, 255, 61, 0.8);
        }
        75% {
          color: rgba(255, 255, 255, 0.8);
          text-shadow: 0 0 20px rgba(212, 255, 61, 0.5);
        }
      }
      
      .animate-border-flow {
        animation: borderFlow 3s ease-in-out infinite;
      }
    `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-primary text-[10px] font-black tracking-[0.4em] mb-8"
          >
            <ShieldCheck className="w-3 h-3" />
            VETTED SMART CONTRACT v2.0
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black text-brand-primary leading-[0.8] tracking-tighter mb-8"
          >
            PROTOCOL
            <span className="text-brand-accent bg-clip-text bg-gradient-to-r from-brand-accent to-orange-500">ECONOMICS.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-brand-primary/60 text-lg md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed italic"
          >
            A self-sustaining, hyper-deflationary framework engineered for the next generation of decentralized commerce.
          </motion.p>
        </div>

        {/* Financial Terminal Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {quickStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + (index * 0.1) }}
              className="group relative bg-white border border-gray-200 rounded-[2.5rem] p-8 hover:shadow-2xl hover:border-brand-accent/50 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="p-3 bg-brand-accent/10 rounded-xl text-brand-accent">
                  <stat.icon size={20} />
                </div>
                <div className="text-[12px] font-black text-brand-primary/30 tracking-widest uppercase">
                  Verified Data
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-[12px] font-black text-brand-accent/80 tracking-[0.2em] uppercase">
                  {stat.label}
                </div>
                <div className="text-3xl md:text-4xl font-black text-brand-primary font-mono tracking-tighter group-hover:text-brand-accent transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-brand-primary/40 uppercase tracking-widest pt-4 border-t border-gray-200 mt-4 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  {stat.sub}
                </div>
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Zap size={14} className="text-brand-accent" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-20 flex flex-col items-center gap-4 text-brand-primary/20"
        >
          <div className="w-px h-12 bg-gradient-to-b from-brand-accent to-transparent" />
          <span className="text-[15px] font-black tracking-[0.5em] uppercase">Architecture Details</span>
        </motion.div>
      </div>
    </section>
  );
}