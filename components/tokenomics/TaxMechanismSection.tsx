'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, 
  Repeat, 
  TrendingUp, 
  Warehouse, 
  Percent,
  DollarSign,
  RefreshCw,
  Shield, Flame, Gift, ShieldCheck, BarChart3, Target } from 'lucide-react';

export default function TaxMechanismSection() {
  const taxBreakdown = [
    {
    type: 'SHOP & EARN',
    label: 'UMBDT Rewards',
    icon: ShoppingBag,
    total: '1:1 USD',
    description: 'Users earn 1 UMBDT token for every $1 spent. Each UMBDT = $1 value for future purchases.',
    breakdown: [
      { 
        label: 'Next Purchase Redemption', 
        percentage: '100%', 
        icon: Repeat, 
        color: 'text-green-500',
        detail: '1 UMBDT = $1 off next purchase'
      },
      { 
        label: 'Swap to MBON', 
        percentage: 'Optional', 
        icon: RefreshCw, 
        color: 'text-brand-accent',
        detail: 'Exchange UMBDT for MBON tokens'
      },
      { 
        label: 'Staking APY', 
        percentage: '5%', 
        icon: TrendingUp, 
        color: 'text-yellow-500',
        detail: 'Stake UMBDT for 5% annual yield'
      }
    ],
    theme: 'from-green-500/10 to-transparent',
    borderColor: 'border-green-500/20'
  },
  {
    type: 'PLATFORM REVENUE',
    label: 'Seller & Platform Fees',
    icon: DollarSign,
    total: 'Multiple Streams',
    description: 'Revenue generated from sellers and platform services to sustain ecosystem growth.',
    breakdown: [
      { 
        label: 'Product Listing Fee', 
        percentage: '$500/product', 
        icon: Warehouse, 
        color: 'text-purple-500',
        detail: 'One-time listing fee per product'
      },
      { 
        label: 'Sell Platform Fee', 
        percentage: '7%', 
        icon: Percent, 
        color: 'text-blue-400',
        detail: '7% fee on MRP for each sale'
      },
      { 
        label: 'Warehouse Storage', 
        percentage: '4%/month', 
        icon: Warehouse, 
        color: 'text-orange-500',
        detail: '4% of product MRP × quantity per month'
      }
    ],
    theme: 'from-blue-500/10 to-transparent',
    borderColor: 'border-blue-500/20'
  },
  {
    type: 'UTILITY & INCENTIVES',
    label: 'Token Utilities',
    icon: Shield,
    total: 'Multi-Utility',
    description: 'UMBDT and MBON tokens power the entire eCommerce ecosystem with real value.',
    breakdown: [
      { 
        label: 'Discount Redemption', 
        percentage: '1 UMBDT = $1', 
        icon: ShoppingBag, 
        color: 'text-emerald-500',
        detail: 'Redeem for instant purchase discounts'
      },
      { 
        label: 'MBON Swap', 
        percentage: 'Variable Rate', 
        icon: RefreshCw, 
        color: 'text-brand-accent',
        detail: 'Swap UMBDT for MBON governance tokens'
      },
      { 
        label: 'Staking Rewards', 
        percentage: '5% APY', 
        icon: TrendingUp, 
        color: 'text-yellow-500',
        detail: 'Passive income on staked UMBDT'
      }
    ],
    theme: 'from-brand-accent/10 to-transparent',
    borderColor: 'border-brand-accent/20'
  }
  ];

  return (
    <section className="py-32 bg-[#F5FBE6] relative overflow-hidden text-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-accent text-[10px] font-black tracking-[0.4em] mb-6"
          >
            <ShieldCheck className="w-3 h-3" />
            VETTED PROTOCOL MECHANICS
          </motion.div>
          <h2 className="text-5xl md:text-8xl font-black text-brand-primary tracking-tighter leading-none mb-8">
            VALUE <span className="text-brand-accent italic">CAPTURE.</span>
          </h2>
          <p className="text-xl text-brand-primary max-w-2xl mx-auto font-medium">
            A mathematically balanced fee structure designed to fuel ecosystem innovation while rewarding the pack.
          </p>
        </div>

        {/* Dual Tax Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {taxBreakdown.map((tax, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative bg-gradient-to-b ${tax.theme} border ${tax.borderColor} rounded-[3rem] p-10 md:p-16 group hover:bg-white/[0.03] transition-all duration-500`}
            >
              <div className="flex justify-between items-start mb-12">
                <div>
                  <div className="text-xs font-black text-brand-accent tracking-[0.2em] mb-2 uppercase">{tax.label}</div>
                  <h3 className="text-3xl font-black text-brand-primary tracking-tighter italic">{tax.type}</h3>
                </div>
                <div className="text-5xl md:text-5xl font-black tracking-tighter font-mono text-white/70 group-hover:text-brand-accent transition-colors">
                  {tax.total}
                </div>
              </div>

              <p className="text-lg text-brand-primary mb-12 font-medium leading-relaxed">
                {tax.description}
              </p>

              <div className="space-y-4">
                {tax.breakdown.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-white/5 border border-white/5 rounded-2xl p-6 flex items-center justify-between group/item hover:border-white/20 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-white/5 ${item.color}`}>
                        <item.icon size={20} />
                      </div>
                      <span className="font-bold text-brand-primary uppercase text-xs tracking-widest">
                        {item.label}
                      </span>
                    </div>
                    <span className="font-mono text-1xl font-black text-brand-accent group-hover/item:text-brand-accent transition-colors">
                      {item.percentage}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* The "Why" Intelligence Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-white border border-brand-primary/10 rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-xl"
        >
          {/* Subtle Radar Animation Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 leading-none text-brand-primary">
                THE <span className="text-brand-accent">DIAMOND</span> <br /> SPREAD.
              </h3>
              <p className="text-lg text-brand-primary leading-relaxed font-medium mb-8">
                Our model utilizes a strategic 2% spread between acquisition and liquidation. This creates a protocol buffer that essentially pays holders to maintain their position, while funding the aggressive global marketing required for a $1B ecosystem.
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-[10px] font-black text-brand-primary tracking-widest uppercase">
                  <BarChart3 size={14} /> Deflationary Logic
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black text-brand-primary tracking-widest uppercase">
                  <Target size={14} /> Growth Fuel
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: Flame, label: 'BURN', val: 'SCARCITY' },
                { icon: Gift, label: 'YIELD', val: 'PASSIVE' },
                { icon: Target, label: 'MARKETING', val: 'SCALE' }
              ].map((pill, i) => (
                <div key={i} className="bg-brand-primary/5 border border-brand-primary/10 p-6 rounded-2xl text-center hover:bg-brand-primary/10 transition-all">
                  <pill.icon className="mx-auto mb-3 text-brand-accent" size={24} />
                  <div className="text-[10px] font-black text-brand-primary uppercase tracking-widest mb-1">{pill.label}</div>
                  <div className="text-xs font-black text-brand-primary">{pill.val}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}