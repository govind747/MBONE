'use client';

import { motion } from 'framer-motion';
import { Shield, TriangleAlert as AlertTriangle, Heart, Users, Lock, CheckCircle } from 'lucide-react';

export default function CommunityNoteSection() {
  const safetyNotes = [
    {
      icon: Shield,
      title: 'Official Channels Only',
      description: 'Only trust communications from our verified official social media accounts and email for any update.',
      color: 'text-brand-accent'
    },
    {
      icon: AlertTriangle,
      title: 'Beware of Scams',
      description: 'We will never ask for private keys, seeds, or passwords. Report suspicious activity immediately.',
      color: 'text-orange-400'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'All major decisions are made transparently with community input and voting.',
      color: 'text-brand-accent'
    },
    {
      icon: Heart,
      title: 'Respectful Environment',
      description: 'We maintain a welcoming, respectful environment for all community members.',
      color: 'text-pink-400'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-secondary relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(45deg,#ffffff08_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      {/* Animated gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] font-black tracking-[0.3em] mb-6">
            <Lock className="w-3 h-3" />
            SECURITY PROTOCOL
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-brand-primary mb-4">
            COMMUNITY <span className="text-brand-accent">SAFETY</span>
          </h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto mb-6" />
          <p className="text-xl text-brand-primary/70 max-w-2xl mx-auto">
            Your safety and security are our top priorities. Please read these important guidelines.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {safetyNotes.map((note, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-brand-accent/40 transition-all hover:scale-[1.02]"
            >
              <div className="flex items-start space-x-4 bg-white rounded-xl p-4 mb-4 border border-brand-primary group-hover:bg-white group-hover:border-brand-accent transition-all">
                <div className="bg-brand-accent/20 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-accent/30 transition-all">
                  <note.icon className={`h-6 w-6 ${note.color} group-hover:scale-110 transition-transform`} />
                </div>
                <div>
                  <h3 className="text-brand-primary font-bold text-lg mb-2">
                    {note.title}
                  </h3>
                  <p className="text-brand-accent/80 leading-relaxed group-hover:text-brand-accent transition-colors">
                    {note.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-brand-primary hover:border-brand-accent/30 transition-all"
        >
          <AlertTriangle className="h-12 w-12 text-brand-accent mx-auto mb-4 animate-pulse" />
          <h3 className="text-2xl font-bold text-brand-primary mb-4">
            Important Disclaimer
          </h3>
          <p className="text-brand-accent leading-relaxed max-w-3xl mx-auto mb-6">
            MILLIONBONE is a community-driven project and cryptocurrency investment carries inherent risks. 
            Please do your own research, never invest more than you can afford to lose, and be aware that 
            cryptocurrency markets are highly volatile.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 hover:border-brand-accent/30 transition-all">
              <div className="text-brand-primary font-bold mb-1">Not Financial Advice</div>
              <div className="text-brand-accent text-sm">DYOR Always</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 hover:border-brand-accent/30 transition-all">
              <div className="text-brand-primary font-bold mb-1">High Risk Investment</div>
              <div className="text-brand-accent text-sm">Can Lose Value</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 hover:border-brand-accent/30 transition-all">
              <div className="text-brand-primary font-bold mb-1">Community Project</div>
              <div className="text-brand-accent text-sm">Decentralized</div>
            </div>
          </div>

          {/* Verification Badge */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-white/40">
            <CheckCircle className="w-3 h-3 text-brand-accent" />
            <span className='text-brand-primary'>Audited Smart Contract • Liquidity Locked • Team KYC Verified</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}