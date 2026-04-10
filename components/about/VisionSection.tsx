'use client';

import { motion } from 'framer-motion';
import { Eye, Globe, Lightbulb, Target, Compass, Zap } from 'lucide-react';

export default function VisionSection() {
  const visions = [
    {
      icon: Compass,
      title: 'Institutional Sustainability',
      description: 'Moving beyond short-term volatility to build a deflationary ecosystem that scales with global commerce demand.'
    },
    {
      icon: Globe,
      title: 'Borderless Network',
      description: 'Unifying a global pack of 1M+ holders through a frictionless, decentralized payment and governance layer.'
    },
    {
      icon: Zap,
      title: 'Agile Innovation',
      description: 'A protocol engineered to evolve. We integrate the latest DeFi advancements to keep $MBONE at the frontier.'
    },
    {
      icon: Target,
      title: 'Strategic Milestones',
      description: 'A non-linear roadmap focused on high-impact merchant partnerships and cross-chain liquidity expansion.'
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Radial Gradient for "Focus" */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-brand-primary mb-6 tracking-tighter"
          >
            THE NORTH <span className="text-brand-accent">STAR.</span>
          </motion.h2>
          <p className="text-xl text-brand-secondary/60 max-w-2xl mx-auto font-medium">
            We aren&apos;t just building a token; we are architecting the future of community-owned commerce.
          </p>
        </div>

        {/* Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 mb-20">
          {visions.map((vision, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-[#F8F9FA] rounded-[2.5rem] p-10 border-t-4 border-transparent hover:border-brand-accent hover:bg-white transition-all duration-500 shadow-sm hover:shadow-2xl"
            >
              <div className="flex items-start gap-8">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-brand-primary group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                  <vision.icon className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-brand-primary mb-4 tracking-tight group-hover:text-brand-accent transition-colors">
                    {vision.title}
                  </h3>
                  <p className="text-brand-secondary/70 leading-relaxed text-lg font-medium">
                    {vision.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The "Ultimate Goal" Callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Decorative Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-accent rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="relative bg-brand-primary rounded-[3rem] p-12 md:p-20 text-center overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter">
                THE FINAL <span className="text-brand-accent">FRONTIER</span>
              </h3>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto font-medium">
                To establish <span className="text-white font-black underline decoration-brand-accent decoration-4">MILLIONBONE</span> as the global benchmark for decentralized value exchange. We are creating a self-sustaining economic engine where community governance meets institutional-grade utility.
              </p>
              
              <div className="mt-12 flex justify-center gap-4">
                <div className="h-2 w-12 bg-brand-accent rounded-full" />
                <div className="h-2 w-2 bg-white/20 rounded-full" />
                <div className="h-2 w-2 bg-white/20 rounded-full" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}