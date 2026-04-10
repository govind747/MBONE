'use client';

import { motion } from 'framer-motion';
import { Users, ShieldCheck, Zap, Globe, Scale } from 'lucide-react';

export default function TeamDisclaimerSection() {
  return (
    <section className="py-32 bg-[#233D4D] relative overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#FFFFFF 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main Manifesto Card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-20 overflow-hidden">
            
            {/* Corner Accent */}
            <div className="absolute top-0 right-0 p-8">
              <Scale className="w-12 h-12 text-brand-accent/20" />
            </div>

            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-none">
                THE POWER OF <span className="text-brand-accent">TRUE AUTONOMY.</span>
              </h2>

              <p className="text-xl md:text-2xl text-white/60 font-medium mb-12 leading-relaxed">
                $MBONE operates without centralized leadership. By removing the "Team" variable, 
                we eliminate the single point of failure, ensuring a protocol governed 
                entirely by its participants.
              </p>

              {/* Technical Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full border-t border-white/80 pt-10">
                {[
                  { label: "Ownership", value: "DECENTRALIZED", sub: "100% Community", icon: <Globe className="w-4 h-4"/> },
                  { label: "Team Allocation", value: "0.00%", sub: "Zero Founders Tax", icon: <Zap className="w-4 h-4"/> },
                  { label: "Governance", value: "ON-CHAIN", sub: "DAO Enabled", icon: <Users className="w-4 h-4"/> }
                ].map((stat, i) => (
                  <div key={i} className="bg-white/5 border border-brand-accent p-8 rounded-[2rem] hover:bg-white/10 transition-colors">
                    <div className="flex items-center justify-center gap-2 text-brand-accent mb-3">
                      {stat.icon}
                      <span className="text-[10px] font-black uppercase tracking-[0.2em]">{stat.label}</span>
                    </div>
                    <div className="text-2xl font-black text-white mb-1 font-mono">{stat.value}</div>
                    <div className="text-xs font-bold text-white/30 uppercase tracking-widest">{stat.sub}</div>
                  </div>
                ))}
              </div>

              {/* Verification Footer */}
              <div className="mt-16 flex flex-col md:flex-row items-center gap-8 pt-10 border-t border-white/5 w-full justify-center">
                <div className="flex items-center gap-3 text-white/40">
                  <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
                  <span className="text-sm font-bold tracking-widest uppercase text-brand-accent">Verified Contract</span>
                </div>
                <div className="flex items-center gap-3 text-white/40">
                  <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
                  <span className="text-sm font-bold tracking-widest uppercase text-brand-accent">Liquidity Locked</span>
                </div>
                <div className="flex items-center gap-3 text-white/40">
                  <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
                  <span className="text-sm font-bold tracking-widest uppercase text-brand-accent">No Mint Function</span>
                </div>
              </div>
            </div>

            {/* Background "MBONE" decorative text */}
            <div className="absolute -bottom-10 -right-10 text-white/[0.04] text-[15rem] font-black select-none pointer-events-none">
              DAO
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}