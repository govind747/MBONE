'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Twitter, MessageCircle, Users, Instagram, Bone, ShieldCheck, Zap } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'X / Twitter' },
    { icon: MessageCircle, href: '#', label: 'Telegram' },
    { icon: Users, href: '#', label: 'Discord' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const protocolLinks = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT' },
    { href: '/tokenomics', label: 'TOKENOMICS' },
    { href: '/contact', label: 'CONTACT' },
    { href: '/whitepaper', label: 'WHITEPAPER' },
  ];

  return (
    <footer className="bg-[#05070A] text-white pt-24 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Brand & Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Logo & Protocol Info */}
          <div className="md:col-span-5">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-brand-accent p-2 rounded-xl">
                <Bone className="h-6 w-6 text-brand-primary" fill="currentColor" />
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase italic">
                MILLION<span className="text-brand-accent">BONE</span>
              </span>
            </div>
            <p className="text-white/40 text-lg font-medium leading-relaxed mb-8 max-w-sm">
              The premier hyper-deflationary protocol for the next generation of decentralized commerce. Engineered for the Pack.
            </p>
            <div className="inline-flex items-center gap-4 px-4 py-2 bg-white/5 border border-white/10 rounded-xl">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-black tracking-[0.2em] text-white/60">MAINNET ACTIVE // v2.0</span>
            </div>
          </div>

          {/* Protocol Links */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-black text-brand-accent tracking-[0.3em] uppercase mb-8">Navigation</h3>
            <div className="space-y-4">
              {protocolLinks.map((link) => (
                <Link 
                  key={link.label}
                  href={link.href} 
                  className="block text-white/50 hover:text-white font-bold text-sm tracking-widest transition-all hover:translate-x-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Community Uplinks */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-black text-brand-accent tracking-[0.3em] uppercase mb-8">Community Uplinks</h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-accent/50 hover:bg-white/10 transition-all group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-5 w-5 text-white/30 group-hover:text-brand-accent transition-colors" />
                  <span className="text-[10px] font-black tracking-widest text-white/60 group-hover:text-white uppercase">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Cinematic Banner Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full h-[40vh] md:h-[60vh] rounded-[3rem] overflow-hidden border border-white/10"
        > 
          <Image
            src="/image/footerbnr.png"
            alt="MILLIONBONE Protocol"
            fill
            className="object-cover transition-transform duration-1000 hover:scale-105"
          />
          {/* High-Contrast Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070A] via-transparent to-[#05070A]/20" />
          
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center w-full">
            <div className="text-white/20 font-black text-[10px] tracking-[1em] uppercase mb-4">
              Authorized Ecosystem 2026
            </div>
            <div className="flex justify-center gap-2">
              <div className="w-12 h-1 bg-brand-accent" />
              <div className="w-4 h-1 bg-white/20" />
              <div className="w-4 h-1 bg-white/20" />
            </div>
          </div>
        </motion.div>

        {/* Legal & Compliance */}
        <div className="py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <div className="text-[10px] font-black text-white/20 tracking-widest uppercase">
              © 2026 MILLIONBONE CORE
            </div>
            <div className="h-4 w-px bg-white/10" />
            <a href="mailto:liaison@millionbone.com" className="text-[10px] font-black text-white/40 hover:text-brand-accent tracking-widest uppercase transition-colors">
              LIAISON@MILLIONBONE.COM
            </a>
          </div>

          <div className="flex items-center gap-4">
            <ShieldCheck className="w-4 h-4 text-brand-accent" />
            <span className="text-[10px] font-mono text-white/30 tracking-widest uppercase">
              DYOR: Not Financial Advice. Engage with Risk Awareness.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}