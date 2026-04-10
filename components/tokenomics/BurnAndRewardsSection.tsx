'use client';

import { motion } from 'framer-motion';
import { Flame, Gift, TrendingUp, Clock, ShieldCheck, Zap } from 'lucide-react';

export default function BurnAndRewardsSection() {
  const mechanisms = [
    {
      icon: Flame,
      title: 'Hyper-Deflationary Protocol',
      label: 'Supply Reduction',
      description: 'A mathematical scarcity model that aggressively reduces the circulating supply with every commercial interaction.',
      features: [
        '1.5% Base Transaction Burn',
        'Black Hole Wallet (Non-Recoverable)',
        'Exponential Scarcity Scaling',
        'Hard-Coded Contract Finality'
      ],
      theme: 'from-orange-100 to-red-50',
      border: 'border-orange-200',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      icon: Gift,
      title: 'Reflective Yield Generation',
      label: 'Passive Accumulation',
      description: 'Native reflection mechanics that distribute a portion of all volume directly to your cold storage, no gas fees required.',
      features: [
        'Real-time Volume Redistribution',
        'Auto-Compounding Algorithm',
        'Anti-Dump Reflection Boost',
        'Zero-Claim Frictionless Rewards'
      ],
      theme: 'from-blue-100 to-indigo-50',
      border: 'border-blue-200',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    }
  ];

  const stats = [
    { icon: Flame, label: 'BURNED SUPPLY', value: '50,402,119', subtitle: 'Permanent Removal' },
    { icon: Gift, label: 'YIELD PAID', value: '$125,480+', subtitle: 'Cumulative Rewards' },
    { icon: TrendingUp, label: 'SCARCITY INDEX', value: '5.24%', subtitle: 'Supply Deficit' },
    { icon: Clock, label: 'UPTIME', value: '100%', subtitle: 'Protocol Stability' }
  ];

  return (
    <section className="py-32 bg-[#F5FBE6] relative overflow-hidden">
      {/* Decorative Cyber Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#233D4D12_1px,transparent_1px),linear-gradient(to_bottom,#233D4D12_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-black tracking-widest mb-6"
          >
            <Zap className="w-3 h-3 animate-pulse" />
            TOKENOMICS v2.0
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none text-brand-primary">
            ENGINEERED <span className="text-brand-accent italic">FOR SCARCITY.</span>
          </h2>
          <p className="text-xl text-brand-primary/60 max-w-2xl mx-auto font-medium">
            $MBONE is built on a non-inflationary framework designed to protect and enhance value through automated protocol-level events.
          </p>
        </div>

        {/* Live Metrics Terminal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-brand-primary/10 p-8 rounded-3xl shadow-lg group hover:border-brand-accent/50 hover:shadow-xl transition-all"
            >
              <stat.icon className="w-5 h-5 text-brand-primary/30 group-hover:text-brand-accent mb-4 transition-colors" />
              <div className="text-3xl font-black tracking-tighter font-mono mb-1 text-brand-accent">
                {stat.value}
              </div>
              <div className="text-[10px] font-black text-brand-primary/40 uppercase tracking-[0.2em] mb-4">
                {stat.label}
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-brand-accent">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                {stat.subtitle}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Deep Dive Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {mechanisms.map((mech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative group bg-gradient-to-br ${mech.theme} border ${mech.border} rounded-[3rem] p-10 md:p-14 overflow-hidden shadow-xl transition-all hover:-translate-y-2 hover:shadow-2xl`}
            >
              {/* Background Icon Watermark */}
              <mech.icon className={`absolute -right-10 -bottom-10 w-64 h-64 opacity-5 rotate-12 group-hover:rotate-0 transition-transform duration-700 ${mech.iconColor}`} />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-4 rounded-2xl ${mech.iconBg} border ${mech.border}`}>
                    <mech.icon size={32} className={mech.iconColor} />
                  </div>
                  <div>
                    <div className="text-xs font-black text-brand-accent uppercase tracking-widest">{mech.label}</div>
                    <h3 className="text-3xl font-black text-brand-primary">{mech.title}</h3>
                  </div>
                </div>

                <p className="text-lg text-brand-primary/60 mb-10 leading-relaxed font-medium">
                  {mech.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {mech.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-3 bg-white/60 p-4 rounded-xl border border-brand-primary/10">
                      <ShieldCheck size={16} className={mech.iconColor} />
                      <span className="text-sm font-bold text-brand-primary/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Protocol Guarantee Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 pt-10 border-t border-brand-primary/10 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="flex items-center gap-6">
            <div className="text-center md:text-left">
              <div className="text-brand-primary font-black text-xl tracking-tighter">100% AUDITED</div>
              <div className="text-brand-primary/40 text-xs font-bold uppercase tracking-widest">Protocol Verified</div>
            </div>
          </div>
          <p className="text-brand-primary/40 text-sm max-w-md text-center md:text-right italic font-medium leading-relaxed">
            &quot;The $MBONE framework is hard-coded to reward longevity. In the age of volatility, scarcity is the only true currency.&quot;
          </p>
        </motion.div>

      </div>
    </section>
  );
}