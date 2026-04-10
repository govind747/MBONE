'use client';

import { motion } from 'framer-motion';
import { Users, Droplets, Zap, Lock, ShieldCheck, Globe } from 'lucide-react';

export default function DistributionSection() {
  const distribution = [
    {
      icon: Globe,
      title: 'PUBLIC LIQUIDITY & GENESIS',
      percentage: '85%',
      amount: '850,000,000 $MBONE',
      status: 'UNLOCKED / CIRCULATING',
      description: 'The heartbeat of the protocol. Allocated for fair-market entry and deep liquidity provision across primary DEXs.',
      span: 'md:col-span-2',
      theme: 'bg-brand-accent/5 border-brand-accent/20',
      textColor: 'text-brand-accent'
    },
    {
      icon: Droplets,
      title: 'MARKETING & ADOPTION',
      percentage: '10%',
      amount: '100,000,000 $MBONE',
      status: 'VESTED / 12 MO',
      description: 'Strategic reserves for exchange listings and global merchant partnerships.',
      span: 'md:col-span-1',
      theme: 'bg-white/5 border-white/10',
      textColor: 'text-white'
    },
    {
      icon: Zap,
      title: 'ECOSYSTEM GROWTH',
      percentage: '5%',
      amount: '50,000,000 $MBONE',
      status: 'DAO CONTROLLED',
      description: 'Governance-locked funds for future protocol development and security audits.',
      span: 'md:col-span-1',
      theme: 'bg-white/5 border-white/10',
      textColor: 'text-white'
    }
  ];

  return (
    <section className="py-32 bg-[#F5FBE6] relative overflow-hidden text-white">
      {/* Background Architectural Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-4 h-4 text-brand-accent" />
              <span className="text-brand-accent font-black text-xs uppercase tracking-[0.3em]">Audited Allocation</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-brand-primary tracking-tighter leading-[0.9]">
              PROTOCOL <span className="text-brand-accent uppercase">Economics.</span>
            </h2>
          </motion.div>
          <p className="text-lg text-brand-primary max-w-sm font-medium border-l border-brand-accent pl-6">
            A zero-founder-tax model designed for pure decentralization and long-term market resilience.
          </p>
        </div>

        {/* Bento Grid Distribution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-b border-white py-12">
          {distribution.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${item.span} relative group overflow-hidden bg-gradient-to-br ${item.theme} border rounded-[2.5rem] p-8 md:p-12 transition-all hover:border-brand-accent/40`}
            >
              {/* Dynamic Number Watermark */}
              <div className="absolute -right-4 -top-4 text-[10rem] font-black text-white/[0.7] select-none group-hover:text-brand-accent/[0.03] transition-colors">
                {item.percentage.replace('%', '')}
              </div>

              <div className="relative z-10 border-b border-white/70 mb-8 pb-8">
                <div className="flex justify-between items-start mb-10">
                  <div className="p-4 bg-brand-primary rounded-2xl border border-white/10 group-hover:bg-brand-accent group-hover:text-brand-primary transition-all duration-500">
                    <item.icon size={28} />
                  </div>
                  <div className="text-right">
                    <div className={`text-4xl text-brand-accent md:text-6xl font-black tracking-tighter ${item.textColor}`}>
                      {item.percentage}
                    </div>
                    <div className="text-[10px] font-black tracking-[0.2em] text-brand-primary uppercase mt-1">
                      {item.status}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-black tracking-widest text-brand-primary uppercase">{item.title}</h3>
                  <div className="text-2xl font-mono text-brand-accent tracking-tighter font-bold">
                    {item.amount}
                  </div>
                  <p className="text-brand-primary text-lg leading-relaxed max-w-md font-medium">
                    {item.description}
                  </p>
                </div>

                {/* Grid-Dot Progress Indicator */}
                <div className="mt-10 flex gap-1.5 h-2">
                   {[...Array(20)].map((_, i) => (
                     <motion.div 
                       key={i}
                       initial={{ opacity: 0.1 }}
                       whileInView={{ opacity: i < (parseInt(item.percentage) / 5) ? 1 : 0.1 }}
                       className={`flex-1 rounded-sm ${i < (parseInt(item.percentage) / 5) ? (index === 0 ? 'bg-brand-accent' : 'bg-brand-accent') : 'bg-brand-accent/10'}`}
                     />
                   ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Verification Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 p-8 rounded-[2rem] bg-brand-accent flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-6">
            <div className="p-4 bg-brand-primary rounded-2xl">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-brand-primary font-black text-xl leading-none mb-1">CONTRACTS VERIFIED & LOCKED</h4>
              <p className="text-brand-primary/60 font-bold text-sm uppercase tracking-wider">Zero Mint Function • No Private Sales</p>
            </div>
          </div>
          <button className="bg-brand-primary text-white px-8 py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform">
            View Smart Contract
          </button>
        </motion.div>
      </div>
    </section>
  );
}