import { useEffect } from 'react';
import HeroSlider from '../components/sections/HeroSlider';
import MiniAbout from '../components/sections/MiniAbout';
import EventsSection from '../components/sections/EventsSection';
import HomeGallery from '../components/sections/HomeGallery';
import { PartnersMarquee, Testimonials } from '../components/sections/CommunityImpact';
import { ActionSplit, WhatsAppCTA } from '../components/sections/GetInvolved';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full bg-ivory">
      
      {/* 1. The Hook */}
      <HeroSlider />
      
      {/* 2. Validation (Logos immediately build trust below the fold) */}
      <PartnersMarquee />

      {/* 3. Who We Are & The Core Stats */}
      <MiniAbout />

      {/* 4. What We Do */}
      <EventsSection />

      {/* 5. Human Proof */}
      <Testimonials />

      {/* 6. Visual Proof */}
      <HomeGallery />

      {/* 7. The Ultimate Ask: Give Time or Money */}
      <ActionSplit />

      {/* 8. The Micro-Commitment (Easy alternative if they aren't ready to donate) */}
      <WhatsAppCTA />

    </div>
  );
}