'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Mail, Copy, Check, Zap, ShieldCheck, Globe } from 'lucide-react';

export default function EmailContactCard() {
  const [copied, setCopied] = useState(false);
  const email = 'LIAISON@MILLIONBONE.COM';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email.toLowerCase());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      setCopied(false);
    }
  };

  return (
    <section className="py-32 bg-[#05070A] relative overflow-hidden">
      {/* Background Decorative Signal */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-brand-accent text-[10px] font-black tracking-[0.3em] mb-6 uppercase">
            <ShieldCheck className="w-3 h-3" />
            Verified Gateway
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-none">
            DIRECT <span className="text-brand-accent">ENCRYPTED</span> ACCESS.
          </h2>
          <p className="text-lg text-white/40 max-w-xl mx-auto font-medium">
            Secure communication channels for institutional partnerships, developer grants, and protocol support.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative bg-white/[0.02] border border-white/7 rounded-[3rem] p-8 md:p-16 backdrop-blur-3xl overflow-hidden group hover:border-brand-accent/30 transition-all duration-700"
        >
          {/* Top Status Bar */}
          <div className="flex justify-between items-center mb-12 pb-8 border-b border-white/5">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
              <span className="text-[10px] font-black tracking-widest text-white uppercase">Uptime: 99.9%</span>
            </div>
            <div className="text-[10px] font-black tracking-widest text-white uppercase flex items-center gap-2">
              <Globe className="w-3 h-3 text-brand-accent" /> Global Liaison
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex p-6 rounded-[2rem] bg-brand-accent/10 text-brand-accent mb-8 group-hover:scale-110 transition-transform duration-500">
              <Mail className='text-white' size={40} />
            </div>

            <div className="mb-12">
              <h3 className="text-xs font-black text-brand-accent tracking-[0.3em] uppercase mb-4">Official Primary Endpoint</h3>
              <div className="relative inline-block px-8 py-6 bg-black/40 rounded-2xl border border-white/5 group-hover:border-brand-accent/20 transition-all">
                <span className="text-2xl md:text-4xl font-mono font-black text-white tracking-tighter">
                  {email}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href={`mailto:${email.toLowerCase()}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto bg-brand-accent text-white px-10 py-5 rounded-2xl font-black text-sm tracking-widest flex items-center justify-center gap-3 shadow-2xl shadow-brand-accent/20 transition-all"
              >
                <Zap size={18} fill="currentColor" />
                INITIATE PROTOCOL
              </motion.a>

              <motion.button
                onClick={copyToClipboard}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-black text-sm tracking-widest flex items-center justify-center gap-3 hover:bg-white/10 transition-all"
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.div
                      key="check"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      className="flex items-center gap-2 text-brand-accent"
                    >
                      <Check size={18} />
                      COPIED TO CLIPBOARD
                    </motion.div>
                  ) : (
                    <motion.div
                      key="copy"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Copy size={18} />
                      COPY ENDPOINT
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>

            {/* Availability Matrix */}
            <div className="mt-16 pt-8 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="text-left space-y-1">
                <div className="text-[10px] font-black text-brand-accent uppercase tracking-widest">Typical Response Latency</div>
                <div className="text-sm font-bold text-white/70">&lt; 24 Hours (Global Pack Standards)</div>
              </div>
              <div className="text-right space-y-1">
                <div className="text-[10px] font-black text-brand-accent uppercase tracking-widest">Active Liaison Windows</div>
                <div className="text-sm font-bold text-white/70">MON—SUN // 09:00—21:00 EST</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}