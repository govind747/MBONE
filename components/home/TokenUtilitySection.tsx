'use client';

import { motion } from 'framer-motion';
import { Coins, Gift, Vote, Zap, ShieldCheck, ShoppingCart } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface UtilityCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay: number;
  className?: string;
}

const UtilityCard = ({ title, description, icon: Icon, delay, className = "" }: UtilityCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className={`group relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/50 p-8 backdrop-blur-xl shadow-sm transition-all hover:shadow-2xl hover:bg-white ${className}`}
  >
    {/* Subtle Gradient Glow on Hover */}
    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-accent/10 blur-3xl transition-all group-hover:bg-brand-accent/20 border border-brand-accent pt-20" />
    
    <div className="relative z-10 border border-brand-accent rounded-[2rem] p-8 h-full flex flex-col">
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
        <Icon size={28} />
      </div>
      
      <h3 className="mb-3 text-2xl font-black text-brand-primary tracking-tight">
        {title}
      </h3>
      
      <p className="text-lg leading-relaxed text-brand-secondary/70 font-medium">
        {description}
      </p>
    </div>

    {/* Decorative Bottom Line */}
    <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand-accent transition-all duration-500 group-hover:w-full" />
  </motion.div>
);

export default function TokenUtilitySection() {
  return (
    <section className="relative py-32 bg-[#F5FBE6]/30 overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-10 left-0 right-0 text-center opacity-[0.03] select-none pointer-events-none">
        <h2 className="text-[15rem] font-black leading-none uppercase">Utility</h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-20 grid grid-cols-1 md:grid-cols-2 items-end gap-8">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-accent font-black tracking-[0.3em] uppercase text-sm mb-4 block"
            >
              The $MBONE Ecosystem
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-black text-brand-primary tracking-tighter leading-none">
              REAL VALUE. <br />
              <span className="text-brand-secondary/30">NOT JUST HYPE.</span>
            </h2>
          </div>
          <p className="text-xl text-brand-secondary font-medium md:max-w-md pb-2 border-l-4 border-brand-accent pl-6">
            We are bridging the gap between meme culture and global commerce with a token built for 100% utility.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 border-t border-white/90 pt-10">
          
          {/* Main Utility: eCommerce (Large Card) */}
          <UtilityCard 
            className="md:col-span-4"
            title="Next-Gen eCommerce"
            description="Use $MBONE for instant checkouts on our partner stores. Enjoy up to 15% discount on all purchases made with our native token."
            icon={ShoppingCart}
            delay={0.1}
          />

          {/* Staking */}
          <UtilityCard 
            className="md:col-span-2"
            title="Yield Staking"
            description="Compound your holdings with automated daily rewards."
            icon={Coins}
            delay={0.2}
          />

          {/* Governance */}
          <UtilityCard 
            className="md:col-span-2"
            title="DAO Governance"
            description="Your voice matters. Vote on the next product line."
            icon={Vote}
            delay={0.3}
          />

          {/* Burn Mechanism (Medium-Large Card) */}
          <UtilityCard 
            className="md:col-span-4"
            title="Deflationary Burn"
            description="2% of every commercial transaction is permanently removed from supply, creating constant upward pressure on scarcity."
            icon={Zap}
            delay={0.4}
          />

        </div>
      </div>
    </section>
  );
}