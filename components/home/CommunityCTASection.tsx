'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Twitter, MessageCircle, Users, Instagram, ArrowRight, Globe, Zap } from 'lucide-react';

export default function CommunityCTASection() {
  const socialLinks = [
    { icon: <Twitter className="w-6 h-6" />, href: '#', label: 'Twitter/X', count: '25.5K', color: 'hover:text-[#1DA1F2]' },
    { icon: <MessageCircle className="w-6 h-6" />, href: '#', label: 'Telegram', count: '18.2K', color: 'hover:text-[#0088cc]' },
    { icon: <Zap className="w-6 h-6" />, href: '#', label: 'Discord', count: '12.8K', color: 'hover:text-[#5865F2]' },
    { icon: <Instagram className="w-6 h-6" />, href: '#', label: 'Instagram', count: '8.9K', color: 'hover:text-[#E4405F]' },
  ];

  return (
    <section className="py-32 bg-[#233D4D] relative overflow-hidden">
      {/* Dynamic Background: Animated Orbit Rings */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/20 rounded-full animate-[spin_20s_linear_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-brand-accent/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* LEFT: Text Content */}
          <div className="lg:w-1/2 text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-6 text-brand-accent font-black tracking-widest text-sm uppercase">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-accent"></span>
                </span>
                Live Ecosystem
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
                THE PACK IS <br/> <span className="text-brand-accent">WORLDWIDE.</span>
              </h2>
              
              <p className="text-xl text-white/70 mb-10 leading-relaxed font-medium">
                MillionBone is more than a currency—it&apos;s a movement. Join over 65,000+ holders 
                shaping the future of decentralized eCommerce.
              </p>

              <motion.button
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-brand-accent text-white px-10 py-5 rounded-2xl text-xl font-black flex items-center space-x-3 shadow-[0_20px_50px_rgba(254,127,45,0.4)] transition-all"
              >
                <span>JOIN THE ALPHA PACK</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </motion.div>
          </div>

          {/* RIGHT: Social Grid (Glassmorphism Cards) */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                className={`p-8 rounded-[2rem] bg-white/5 border border-white/90 backdrop-blur-md transition-all group ${social.color}`}
              >
                <div className="text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {social.icon}
                </div>
                
                <div className="text-3xl font-black text-white mb-1 tracking-tight">
                  {social.count}
                </div>
                
                <div className="text-white/40 font-bold uppercase text-xs tracking-widest">
                  {social.label}
                </div>
              </motion.a>
            ))}
          </div>

        </div>

        {/* Global Stats Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-24 py-8 border-t border-white/10 flex flex-wrap justify-between items-center gap-8 text-white/50"
        >
          <div className="flex items-center gap-4">
            <Globe className="w-5 h-5 text-brand-accent" />
            <span className="font-bold text-white">Active in 140+ Countries</span>
          </div>
          <div className="flex items-center gap-4">
            <Users className="w-5 h-5 text-brand-accent" />
            <span className="font-bold text-white">65,402 Total Holders</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-[#233D4D] bg-gray-600 border border-brand-accent" />)}
            </div>
            <span className="font-bold text-white">2.4k Online Now</span>
          </div>
        </motion.div>

      </div>    
    </section>
  );
}