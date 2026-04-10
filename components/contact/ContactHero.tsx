'use client';

import { motion } from 'framer-motion';
import { Mail, MessageSquare, Globe, Zap, ShieldCheck } from 'lucide-react';

export default function ContactHero() {
  return (
    <section className="relative pt-32 pb-24 bg-[#F5FBE6] overflow-hidden">
      {/* Background Architectural Mesh */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#233D4D12_1px,transparent_1px),linear-gradient(to_bottom,#233D4D12_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Cinematic Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] font-black tracking-[0.4em] mb-8"
          >
            <Globe className="w-3 h-3" />
            GLOBAL PROTOCOL LIAISON
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] mb-8 text-brand-primary"
          >
            ESTABLISH <span className="text-brand-accent bg-clip-text bg-gradient-to-r from-brand-accent to-orange-500">CONTACT.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-brand-primary/60 text-lg md:text-2xl max-w-2xl mx-auto font-medium leading-relaxed italic"
          >
            Connecting the Pack across every timezone. Reach out to our specialized departments for institutional or community support.
          </motion.p>
        </div>

        {/* Access Point Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          
          {/* Support/General Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="group relative bg-white border border-brand-primary/10 rounded-[2.5rem] p-10 hover:shadow-2xl hover:border-brand-accent/30 transition-all duration-500"
          >
            <div className="flex justify-between items-start mb-12">
              <div className="p-4 bg-brand-accent/10 rounded-2xl text-brand-accent group-hover:scale-110 transition-transform">
                <MessageSquare size={28} />
              </div>
              <div className="flex items-center gap-2 text-[10px] font-black text-brand-accent tracking-widest">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                SYSTEM ACTIVE
              </div>
            </div>
            
            <h2 className="text-2xl font-black text-brand-primary mb-4 tracking-tight">COMMUNITY & SUPPORT</h2>
            <p className="text-brand-primary/60 text-sm leading-relaxed mb-8 font-medium">
              General inquiries, technical assistance, and community onboarding. Our liaisons are available 24/7.
            </p>
            
            <a 
              href="mailto:support@millionbone.com" 
              className="inline-flex items-center gap-3 text-brand-accent font-black text-sm tracking-widest hover:gap-5 transition-all group"
            >
              SUPPORT@MILLIONBONE.COM 
              <Zap size={14} className="group-hover:rotate-12 transition-transform" />
            </a>
          </motion.div>

          {/* Partnerships/Dev Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="group relative bg-white border border-brand-primary/10 rounded-[2.5rem] p-10 hover:shadow-2xl hover:border-brand-accent/30 transition-all duration-500"
          >
            <div className="flex justify-between items-start mb-12">
              <div className="p-4 bg-brand-primary/5 rounded-2xl text-brand-primary/40 group-hover:text-brand-accent group-hover:bg-brand-accent/10 transition-all duration-300">
                <ShieldCheck size={28} />
              </div>
              <div className="text-[10px] font-black text-brand-primary/30 tracking-widest">
                PRIORITY ACCESS
              </div>
            </div>
            
            <h2 className="text-2xl font-black text-brand-primary mb-4 tracking-tight">STRATEGIC LIAISON</h2>
            <p className="text-brand-primary/60 text-sm leading-relaxed mb-8 font-medium">
              Venture inquiries, institutional partnerships, and ecosystem developer grants.
            </p>
            
            <a 
              href="mailto:partners@millionbone.com" 
              className="inline-flex items-center gap-3 text-brand-accent font-black text-sm tracking-widest hover:gap-5 transition-all group"
            >
              PARTNERS@MILLIONBONE.COM 
              <Zap size={14} className="group-hover:rotate-12 transition-transform" />
            </a>
          </motion.div>

        </div>

        {/* Additional Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          <div className="bg-white border border-brand-primary/10 rounded-full px-6 py-3 hover:border-brand-accent/30 transition-all">
            <span className="text-brand-primary/60 text-xs font-mono">📱 Telegram: @millionbone_official</span>
          </div>
          <div className="bg-white border border-brand-primary/10 rounded-full px-6 py-3 hover:border-brand-accent/30 transition-all">
            <span className="text-brand-primary/60 text-xs font-mono">🐦 Twitter: @millionbone</span>
          </div>
          <div className="bg-white border border-brand-primary/10 rounded-full px-6 py-3 hover:border-brand-accent/30 transition-all">
            <span className="text-brand-primary/60 text-xs font-mono">💬 Discord: discord.gg/millionbone</span>
          </div>
        </motion.div>

        {/* Decorative Protocol ID */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 flex justify-center"
        >
          <div className="text-[10px] font-mono text-brand-primary/30 tracking-[0.5em] uppercase">
            Protocol ID: MB-COMM-L7
          </div>
        </motion.div>
      </div>
    </section>
  );
}