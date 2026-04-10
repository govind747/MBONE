'use client';

import { motion } from 'framer-motion';
import { Bone, ShieldCheck, Globe, Target } from 'lucide-react';

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-24 bg-[#F5FBE6] overflow-hidden">
      
      {/* Background Architectural Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-brand-accent/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-brand-primary/5 blur-[120px]" />
        
        {/* Holographic Border Text - VISION */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
          <div className="relative">
            {/* Ghost Text Background */}
            <div className="opacity-[0.02] text-[30rem] font-black leading-none">
              VISION
            </div>
            
            {/* Animated Border Letters - Letter by Letter Transition */}
            <div className="absolute inset-0 flex">
              {'VISION'.split('').map((letter, index) => (
                <span
                  key={index}
                  className="text-[30rem] font-black leading-none animate-border-flow"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    WebkitTextStroke: '2px currentColor',
                    paintOrder: 'stroke fill',
                    display: 'inline-block',
                  }}
                >
                  {letter}
                </span>
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT: Heading & Context (Span 7) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center space-x-2 bg-brand-primary/10 px-4 py-2 rounded-xl mb-8 border border-brand-primary/10"
            >
              <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
              <span className="text-brand-primary font-black text-xs uppercase tracking-[0.3em]">Institutional Protocol</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-black text-brand-primary mb-8 tracking-tighter leading-[0.9]"
            >
              ARCHITECTING <br/>
              <span className="text-brand-accent">THE FUTURE.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-brand-secondary/70 mb-10 max-w-2xl leading-relaxed font-medium"
            >
              MillionBone is the world's first community-driven commerce protocol designed to bridge 
              the gap between high-liquidity digital assets and global retail checkout systems.
            </motion.p>
          </div>

          {/* RIGHT: High-End Feature Cards (Span 5) */}
          <div className="lg:col-span-5 grid gap-6">
             <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-white/80 backdrop-blur-xl border border-white p-8 rounded-[2.5rem] shadow-2xl shadow-brand-primary/5 group hover:-translate-y-2 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-brand-accent/10 rounded-2xl text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors">
                    <Target className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-black text-brand-primary uppercase italic">Our Mission</h2>
                </div>
                <p className="text-brand-secondary/80 font-medium leading-relaxed">
                  To democratize global eCommerce by providing a borderless, deflationary payment layer 
                  that rewards the holder and empowers the consumer.
                </p>
              </motion.div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/40 border border-white/50 p-6 rounded-[2rem] backdrop-blur-md">
                  <Globe className="w-5 h-5 text-brand-primary mb-3" />
                  <div className="text-2xl font-black text-brand-primary tracking-tighter">GLOBAL</div>
                  <div className="text-xs font-bold text-brand-secondary/40 uppercase">Expansion</div>
                </div>
                <div className="bg-white/40 border border-white/50 p-6 rounded-[2rem] backdrop-blur-md">
                  <ShieldCheck className="w-5 h-5 text-brand-accent mb-3" />
                  <div className="text-2xl font-black text-brand-primary tracking-tighter">VERIFIED</div>
                  <div className="text-xs font-bold text-brand-secondary/40 uppercase">Ecosystem</div>
                </div>
              </div>
          </div>

        </div>
      </div>
    </section>
  );
}