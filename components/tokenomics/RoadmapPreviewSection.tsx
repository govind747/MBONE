'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ShieldCheck, Zap, Target, ArrowRight, Activity, Cpu } from 'lucide-react';

export default function RoadmapPreviewSection() {
  const phases = [
    {
      phase: 'PHASE 01',
      title: 'PROTOCOL GENESIS',
      status: 'completed',
      icon: ShieldCheck,
      description: 'The architectural launch and liquidity hardening period.',
      items: [
        'Smart Contract Finalization',
        'Tier-1 Liquidity Lock',
        'Genesis Burn Event',
        'Global Seed Community'
      ]
    },
    {
      phase: 'PHASE 02',
      title: 'ECOSYSTEM VELOCITY',
      status: 'active',
      icon: Activity,
      description: 'Scaling the utility layer and institutional bridge-building.',
      items: [
        'CEX Liquidity Expansion',
        'Merchant SDK Beta',
        'Reflective Yield V2',
        'On-Chain Governance'
      ]
    },
    {
      phase: 'PHASE 03',
      title: 'GLOBAL DOMINANCE',
      status: 'upcoming',
      icon: Cpu,
      description: 'Full-scale retail integration and cross-chain utility.',
      items: [
        'Omni-Chain Protocol',
        'Mobile Payment Gateway',
        'Partner API Marketplace',
        'Legacy Fiat Bridge'
      ]
    }
  ];

  return (
    <section className="py-32 bg-[#F5FBE6] relative overflow-hidden text-white">
      {/* Background Neon Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-brand-accent text-[10px] font-black tracking-[0.3em] mb-6">
              <Zap className="w-3 h-3 fill-current" />
              FUTURE-PROOFED ROADMAP
            </div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.8] mb-6 text-brand-primary">
              THE <span className="text-brand-accent">TRAJECTORY.</span>
            </h2>
            <p className="text-lg text-brand-primary font-medium max-w-md">
              A non-linear growth strategy focused on long-term protocol utility and holder appreciation.
            </p>
          </motion.div>
        </div>

        {/* Roadmap Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative group bg-brand-secondary border border-white/10 rounded-[2.5rem] p-10 transition-all duration-500 hover:bg-brand-primary ${
                phase.status === 'active' ? 'border-brand-accent/50 shadow-[0_0_40px_rgba(255,145,77,0.1)]' : ''
              }`}
            >
              {/* Top Row: Icon and Status */}
              <div className="flex justify-between items-start mb-12">
                <div className={`p-4 rounded-2xl ${
                  phase.status === 'active' ? 'bg-brand-accent text-brand-primary' : 'bg-white/5 text-white'
                }`}>
                  <phase.icon size={28} />
                </div>
                <div className={`text-[10px] font-black px-3 py-1 rounded-md tracking-widest uppercase ${
                  phase.status === 'active' ? 'bg-brand-accent/20 text-brand-accent animate-pulse' : 'bg-white/10 text-white/30'
                }`}>
                  {phase.status}
                </div>
              </div>

              {/* Content */}
              <div className="mb-8">
                <span className="text-brand-accent font-mono text-sm font-bold tracking-widest mb-2 block">
                  {phase.phase}
                </span>
                <h3 className="text-3xl font-black tracking-tighter text-white mb-4 italic">
                  {phase.title}
                </h3>
                <p className="text-white/50 text-sm font-medium leading-relaxed">
                  {phase.description}
                </p>
              </div>

              {/* Checklist */}
              <div className="space-y-4 pt-8 border-t border-white/10">
                {phase.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      phase.status === 'completed' ? 'bg-brand-accent' : 'bg-white/20'
                    }`} />
                    <span className={`text-sm font-bold ${
                      phase.status === 'completed' ? 'text-white/80 line-through decoration-brand-accent/50' : 'text-white/60'
                    }`}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Progress Indicator for Active Phase */}
              {phase.status === 'active' && (
                <div className="mt-10">
                  <div className="flex justify-between text-[10px] font-black text-brand-accent mb-2 tracking-widest">
                    <span>DEPLOYMENT PROGRESS</span>
                    <span>75%</span>
                  </div>
                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '75%' }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-brand-accent"
                    />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Full Roadmap Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex flex-col items-center"
        >
          <Link href="/roadmap">
            <button className="group bg-brand-primary border-2 border-white/70 hover:border-brand-accent px-12 py-5 rounded-2xl flex items-center gap-4 transition-all duration-300">
              <span className="font-black text-white text-lg tracking-widest group-hover:text-brand-accent transition-colors">
                EXPLORE FULL PROTOCOL TIMELINE
              </span>
              <ArrowRight className="text-white group-hover:text-brand-accent group-hover:translate-x-2 transition-all" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}