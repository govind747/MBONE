import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import AboutPreviewSection from '@/components/home/AboutPreviewSection';
import TokenUtilitySection from '@/components/home/TokenUtilitySection';
import CommunityCTASection from '@/components/home/CommunityCTASection';

export default function Home() {
  return (
    <PageTransition>
      <div className="relative overflow-x-hidden selection:bg-brand-accent selection:text-white">
        <Navbar />
        
        {/* Dynamic Gradient Blobs (Global background interest) */}
        <div className="fixed inset-0 pointer-events-none -z-10">
          <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[120px]" />
        </div>

        <main className="relative z-10">
          <HeroSection />
          
          {/* Subtle Divider: Separates Hero from Data */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          
          <StatsSection />
          
          <AboutPreviewSection />
          
          {/* Highlight Section: Utility is the core of your $1Bn valuation */}
          <div className="bg-white/50 backdrop-blur-3xl">
            <TokenUtilitySection />
          </div>
          
          <CommunityCTASection />
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
}