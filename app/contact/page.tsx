import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import ContactHero from '@/components/contact/ContactHero';
import EmailContactCard from '@/components/contact/EmailContactCard';
import SocialMediaCards from '@/components/contact/SocialMediaCards';
import CommunityNoteSection from '@/components/contact/CommunityNoteSection';

export const metadata = {
  title: 'Protocol Liaison | MILLIONBONE ($MBONE)',
  description: 'Establish contact with the MILLIONBONE global headquarters. Specialized departments for institutional partnerships, developer support, and community relays.',
};

export default function Contact() {
  return (
    <PageTransition>
      {/* Global Background Wrapper to ensure seamless dark-mode transitions */}
      <div className="bg-[#F5FBE6] selection:bg-brand-accent selection:text-white">
        <Navbar />
        
        <main className="relative">
          {/* 01. The Global Entry Point */}
          <ContactHero />

          {/* 02. Secure Communication Card */}
          <div className="relative z-20 -mt-20">
             <EmailContactCard />
          </div>

          {/* 03. High-Velocity Social Relays */}
          <SocialMediaCards />

          {/* 04. Risk Mitigation & Compliance */}
          <CommunityNoteSection />

          {/* FINAL CTA: THE CALL TO ACTION */}
          <section className="py-24 bg-gradient-to-b from-transparent to-brand-accent/5 border-t border-white/5">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <div className="text-brand-accent font-black text-[10px] tracking-[0.5em] uppercase mb-4">
                Transmission Complete
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-brand-primary tracking-tighter mb-8">
                READY TO JOIN <span className="italic text-brand-accent">THE PACK?</span>
              </h2>
              <div className="flex justify-center gap-4">
                <div className="h-1 w-12 bg-brand-accent rounded-full" />
                <div className="h-1 w-4 bg-white/20 rounded-full" />
                <div className="h-1 w-4 bg-white/20 rounded-full" />
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
}