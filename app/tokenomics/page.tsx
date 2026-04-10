import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import TokenomicsHero from '@/components/tokenomics/TokenomicsHero';
import DistributionSection from '@/components/tokenomics/DistributionSection';
import TaxMechanismSection from '@/components/tokenomics/TaxMechanismSection';
import BurnAndRewardsSection from '@/components/tokenomics/BurnAndRewardsSection';
import CommunityNoteSection from '@/components/contact/CommunityNoteSection'; // Reusing for consistency

export const metadata = {
  title: 'Protocol Economics | MILLIONBONE ($MBONE)',
  description: 'The mathematical framework of the $MBONE ecosystem. Audited distribution and hyper-deflationary mechanics.',
};

export default function TokenomicsPage() {
  return (
    <PageTransition>
      {/* Consistent Dark Wrapper used in About Us */}
      <div className="bg-[#F5FBE6] selection:bg-brand-accent selection:text-white">
        <Navbar />
        
        <main className="relative">
          {/* 1. HERO: The "Genesis" Data (Matches About Hero Style) */}
          <TokenomicsHero />

          {/* 2. DISTRIBUTION: The "Ownership Ledger" (Matches "The Pack" Grid Style) */}
          <div className="relative z-20 -mt-16">
            <DistributionSection />
          </div>

          {/* 3. TAX MECHANISM: The "Value Capture" (Matches "Core Values" Card Style) */}
          <TaxMechanismSection />

          {/* 4. BURN PROTOCOLS: "Scarcity Engineering" (Matches "Security" Section) */}
          <BurnAndRewardsSection />

          {/* 5. SAFETY & DISCLAIMERS: Reusing the same component for 1:1 look */}
          <CommunityNoteSection />

          {/* FINAL CTA: THE BUY BUTTON (Matches About Us Footer) */}
          <section className="py-32 bg-gradient-to-t from-brand-accent/10 to-transparent border-t border-white/5">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <div className="text-brand-accent font-black text-[10px] tracking-[0.5em] uppercase mb-6">
                Economic Finality
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-brand-primary tracking-tighter mb-10">
                READY TO SECURE <span className="italic text-brand-accent">THE ASSET?</span>
              </h2>
              <button className="bg-brand-accent text-brand-primary px-12 py-5 rounded-2xl font-black text-sm tracking-[0.2em] hover:scale-105 transition-all shadow-2xl shadow-brand-accent/20">
                ACQUIRE $MBONE
              </button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
}