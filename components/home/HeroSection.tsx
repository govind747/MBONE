'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, ShieldCheck, Zap } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center bg-[#F5FBE6] relative overflow-hidden pt-20">
      
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-accent/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-primary/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* LEFT: Content (Span 7) */}
          <div className="lg:col-span-7 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 bg-brand-primary/10 border border-brand-primary/20 px-4 py-2 rounded-full mb-6"
            >
              <Zap className="w-4 h-4 text-brand-primary" />
              <span className="text-brand-primary font-bold text-sm uppercase tracking-widest">The Future of eCommerce</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl font-black text-brand-primary mb-6 leading-[0.9] tracking-tighter"
            >
              MILLION <span className="text-brand-accent">BONE</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-brand-secondary/80 mb-10 max-w-2xl leading-relaxed"
            >
              Beyond the meme. $MBONE is the native fuel for the next generation of 
              high-speed commerce. Shop, stake, and scale with the bone of the pack.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-5 items-start"
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="bg-brand-primary text-white px-10 py-5 rounded-2xl text-xl font-bold flex items-center space-x-3 shadow-2xl shadow-brand-primary/30"
              >
                <span>ENTER THE SHOP</span>
                <ShoppingBag className="h-6 w-6" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="glass-morphism border-2 border-brand-primary/20 text-brand-primary px-10 py-5 rounded-2xl text-xl font-bold hover:bg-white transition-all shadow-xl"
              >
                BUY $MBONE
              </motion.button>
            </motion.div>

            {/* Contract Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="mt-12 p-4 glass-morphism rounded-2xl inline-flex flex-col sm:flex-row items-center gap-4 border border-white"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-accent bg-gray-200" />
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-brand-accent flex items-center justify-center text-[10px] text-white font-bold">+20k</div>
              </div>
              <div className="h-10 w-[1px] bg-brand-primary/10 hidden sm:block"></div>
              <div>
                <p className="text-xs uppercase font-bold text-brand-secondary/50">Verified Contract</p>
                <code className="text-sm font-mono text-brand-primary font-bold">0x742d...A7C6c0B3</code>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: High-End Visual (Span 5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Animated Ring */}
            <div className="absolute inset-0 border-[40px] border-brand-accent/5 rounded-full animate-pulse" />
            
            <div className="relative z-10 hover-lift">
              <Image
                src="/image/hero-bone.png"
                alt="MillionBone Hero"
                width={600}
                height={600}
                className="object-contain drop-shadow-[0_35px_35px_rgba(33,94,97,0.3)]"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}