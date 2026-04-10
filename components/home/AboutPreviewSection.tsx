'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heart, ShieldCheck, Rocket, ArrowRight, Globe, Layers } from 'lucide-react';

export default function AboutPreviewSection() {
  const features = [
    {
      icon: <Users className="w-6 h-6 text-brand-primary" />,
      title: 'Decentralized Governance',
      description: 'The $MBONE protocol is governed entirely by the community through on-chain voting.',
      color: 'bg-blue-50'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-green-600" />,
      title: 'Security-First Architecture',
      description: 'Audited smart contracts with multi-sig treasury protection for long-term stability.',
      color: 'bg-green-50'
    },
    {
      icon: <Layers className="w-6 h-6 text-brand-accent" />,
      title: 'eCommerce Integration',
      description: 'A native SDK built for seamless merchant adoption and instant global payments.',
      color: 'bg-orange-50'
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Subtle Background Branding */}
      <div className="absolute top-20 -left-20 pointer-events-none opacity-[0.03] select-none">
        <h2 className="text-[25rem] font-black leading-none">MBONE</h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* LEFT: The "Vision" Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-black tracking-[0.2em] uppercase mb-6">
              Establishment & Vision
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-brand-primary mb-8 tracking-tighter leading-[0.95]">
              THE NEW <br />
              <span className="text-brand-accent">STANDARD</span> <br />
              OF COMMERCE.
            </h2>
            
            <p className="text-xl text-brand-secondary/80 mb-10 leading-relaxed font-medium max-w-lg">
              MillionBone is bridging the gap between digital assets and real-world utility. 
              We are not just a coin; we are the underlying infrastructure for a global, 
              borderless shopping ecosystem.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-brand-primary text-white px-10 py-5 rounded-2xl text-lg font-black flex items-center space-x-3 shadow-2xl shadow-brand-primary/20"
                >
                  <span>Our Whitepaper</span>
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </Link>
              
              <div className="flex items-center space-x-4 px-6 py-4 border-l-2 border-gray-100">
                <div className="flex -space-x-3">
                   {[1,2,3].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200" />)}
                </div>
                <div className="text-sm font-bold text-brand-secondary/60">
                  Join 250k+ <br/> Pack Members
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: The "Technical" Side */}
          <div className="relative">
            {/* Background decorative square */}
            <div className="absolute -inset-4 bg-brand-accent/5 rounded-[3rem] -rotate-3 scale-105 pointer-events-none" />
            
            <div className="relative space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white/80 backdrop-blur-md rounded-[2rem] p-8 border border-gray-100 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="flex items-center space-x-6 border-l-4 border-brand-primary pl-6">
                    <div className={`p-4 rounded-2xl transition-colors ${feature.color} group-hover:bg-brand-accent group-hover:text-white`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-brand-primary font-black text-xl mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-brand-secondary/70 font-medium leading-snug">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Add these to your lucide-react imports
import { Users } from 'lucide-react';