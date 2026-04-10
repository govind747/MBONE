'use client';

import { motion } from 'framer-motion';
import { Heart, ShieldCheck, Users, Zap, Globe, Fingerprint } from 'lucide-react';

export default function ValuesSection() {
  const values = [
    {
      icon: Fingerprint,
      number: '01',
      title: 'Decentralized Identity',
      description: 'The $MBONE protocol belongs to the network. No central authority, no single point of failure, only pure autonomy.'
    },
    {
      icon: ShieldCheck,
      number: '02',
      title: 'Radical Transparency',
      description: 'Every transaction is a public record. Our smart contracts are open-source and audited by world-class security firms.'
    },
    {
      icon: Globe,
      number: '03',
      title: 'Global Inclusivity',
      description: 'We are building a borderless pack. Regardless of geography or capital, every holder has an equal seat at the table.'
    },
    {
      icon: Zap,
      number: '04',
      title: 'Hyper-Innovation',
      description: 'Stagnation is the enemy. We continuously deploy next-gen commerce features to ensure $MBONE remains the pack leader.'
    }
  ];

  return (
    <section className="py-32 bg-white relative">
      {/* Decorative Line Background */}
      <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-gray-100 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Modern Asymmetric Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-sm font-black text-brand-accent uppercase tracking-[0.4em] mb-4">
              Our Core DNA
            </h2>
            <h3 className="text-5xl md:text-7xl font-black text-brand-primary leading-[0.9] tracking-tighter">
              PRINCIPLES <br />
              <span className="text-brand-secondary/30 text-4xl md:text-6xl text-brand-accent">THAT DRIVE US.</span>
            </h3>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xl text-brand-secondary/60 font-medium max-w-sm border-l-2 border-brand-accent pl-6"
          >
            A protocol is only as strong as the values it is built upon. We are engineered for longevity.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* The "Pillar" Card */}
              <div className="h-full bg-[#F8F9FA] rounded-[2.5rem] p-10 border border-brand-primary hover:border-brand-accent hover:bg-white transition-all duration-500 overflow-hidden">
                
                {/* Floating Number Accent */}
                <div className="absolute top-8 right-10 text-4xl font-black text-brand-primary/5 group-hover:text-brand-accent transition-colors">
                  {value.number}
                </div>

                <div className="relative z-10">
                  <div className="mb-8 inline-flex p-4 bg-white rounded-2xl shadow-sm text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-accent transition-all duration-300">
                    <value.icon className="h-7 w-7" />
                  </div>
                  
                  <h4 className="text-2xl font-black text-brand-primary mb-4 tracking-tight leading-tight group-hover:text-brand-accent transition-colors">
                    {value.title}
                  </h4>
                  
                  <p className="text-brand-secondary/70 font-medium leading-relaxed group-hover:text-brand-secondary transition-colors">
                    {value.description}
                  </p>
                </div>

                {/* Bottom interactive dash */}
                <div className="mt-8 h-1 w-8 bg-brand-primary/10 rounded-full group-hover:w-full group-hover:bg-brand-accent transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}