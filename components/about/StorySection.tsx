'use client';

import { motion } from 'framer-motion';
import { Calendar, Users, Rocket, Trophy, CheckCircle2, CircleDot } from 'lucide-react';

export default function StorySection() {
  const timeline = [
    {
      icon: Calendar,
      title: 'Protocol Inception',
      date: 'Q1 2024',
      status: 'Completed',
      description: 'Conceptualization of the $MBONE architecture. Focus on deflationary mechanics and eCommerce smart contract integration.'
    },
    {
      icon: Users,
      title: 'Ecosystem Formation',
      date: 'Q2 2024',
      status: 'Completed',
      description: 'Global community outreach. Reached 25k+ active holders and established core DAO governance structures.'
    },
    {
      icon: Rocket,
      title: 'Mainnet Deployment',
      date: 'Q3 2024',
      status: 'Active',
      description: 'Official token launch with Tier-1 liquidity pool locks. Integration of the auto-burn protocol for commercial transactions.'
    },
    {
      icon: Trophy,
      title: 'Institutional Scaling',
      date: '2025 & Beyond',
      status: 'Upcoming',
      description: 'Expansion into global retail partnerships. Launch of the MillionBone SDK for instant merchant settlement.'
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-primary/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-sm font-black text-brand-accent uppercase tracking-[0.4em] mb-4">
              Our Evolution
            </h2>
            <h3 className="text-5xl md:text-7xl font-black text-brand-primary leading-[0.9] tracking-tighter">
              A LEGACY <br />
              <span className="text-brand-accent">IN THE MAKING.</span>
            </h3>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xl text-brand-secondary/60 font-medium max-w-sm border-l-2 border-brand-accent pl-6"
          >
            Tracing the path from a visionary concept to a multi-billion dollar commerce utility.
          </motion.p>
        </div>

        <div className="relative">
          {/* Main Vertical Line */}
          <div className="absolute left-4 md:left-12 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-accent via-brand-primary/20 to-transparent" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-12 md:pl-24"
              >
                {/* Timeline Indicator */}
                <div className="absolute left-[10px] md:left-[42px] top-8 -translate-x-1/2 z-20">
                  {item.status === 'Completed' ? (
                    <div className="bg-brand-primary p-1 rounded-full shadow-[0_0_15px_rgba(33,94,97,0.4)]">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                  ) : (
                    <div className="bg-white p-1 rounded-full border-2 border-brand-accent animate-pulse">
                      <CircleDot className="w-5 h-5 text-brand-accent" />
                    </div>
                  )}
                </div>

                <div className="group bg-[#F8F9FA] rounded-[2.5rem] p-8 md:p-12 border border-brand-primary hover:border-brand-accent transition-all duration-500 hover:shadow-2xl hover:bg-white relative overflow-hidden">
                  {/* Subtle Card Glow */}
                  <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl group-hover:bg-brand-accent/5 transition-colors" />

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                    <div className="flex items-center gap-6">
                      <div className="hidden md:flex w-16 h-16 rounded-2xl bg-white shadow-sm items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-accent transition-all duration-300">
                        <item.icon size={32} />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-brand-accent font-black text-xs uppercase tracking-widest">{item.date}</span>
                          <span className={`text-[10px] px-2 py-0.5 rounded-md font-bold uppercase ${
                            item.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-brand-accent/10 text-brand-accent'
                          }`}>
                            {item.status}
                          </span>
                        </div>
                        <h4 className="text-3xl font-black text-brand-primary tracking-tight">{item.title}</h4>
                      </div>
                    </div>

                    <p className="md:max-w-md text-lg text-brand-secondary/70 font-medium leading-relaxed border-l-4 border-brand-accent pl-6">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}