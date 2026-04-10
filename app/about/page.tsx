import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import AboutHero from '@/components/about/AboutHero';
import StorySection from '@/components/about/StorySection';
import VisionSection from '@/components/about/VisionSection';
import ValuesSection from '@/components/about/ValuesSection';
import TeamDisclaimerSection from '@/components/about/TeamDisclaimerSection';
import { ArrowRight, BookOpen } from 'lucide-react';

export const metadata = {
  title: 'Protocol Vision | MILLIONBONE ($MBONE)',
  description: 'The architectural foundation of the $MBONE ecosystem. Explore our decentralized commerce roadmap and community governance pillars.',
};

export default function About() {
  return (
    <PageTransition>
      <div className="relative bg-white">
        <Navbar />
        
        <main className="relative overflow-hidden">
          {/* 01. The Executive Brief */}
          <AboutHero />
          
          {/* 02. The Strategic Roadmap */}
          <div className="bg-[#F8F9FA]/50 border-y border-gray-100">
            <StorySection />
          </div>

          {/* 03. The North Star Vision */}
          <VisionSection />

          {/* 04. The Technical Pillars */}
          <ValuesSection />

          {/* 05. The Decentralization Manifesto */}
          <TeamDisclaimerSection />

          {/* FINAL CTA: The Conversion Point */}
          <section className="py-32 bg-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <div className="inline-flex items-center space-x-2 bg-brand-accent/10 px-4 py-2 rounded-full mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
                </span>
                <span className="text-brand-accent font-black text-[10px] uppercase tracking-widest">Next Phase: Integration</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black text-brand-primary tracking-tighter mb-10 leading-[0.9]">
                DONE READING? <span className="text-brand-accent">START BUILDING.</span>
              </h2>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="w-full sm:w-auto bg-brand-primary text-white px-10 py-5 rounded-[2rem] font-black text-xl shadow-2xl shadow-brand-primary/20 hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                  <span>GET $MBONE</span>
                  <ArrowRight size={20} />
                </button>
                <button className="w-full sm:w-auto bg-white text-brand-primary border-2 border-brand-primary/10 px-10 py-5 rounded-[2rem] font-black text-xl hover:border-brand-primary transition-all flex items-center justify-center gap-3">
                  <BookOpen size={20} />
                  <span>WHITEPAPER</span>
                </button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
}