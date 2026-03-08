import HeroSlider from '../components/sections/HeroSlider'
import EventsSection from '../components/sections/EventsSection'
import MiniAbout from '../components/sections/MiniAbout'
import { StatsStrip, DonateStrip } from '../components/sections/StatsAndDonate'

export default function Home() {
  return (
    <div>
      {/* 1. Hero Slider — full viewport */}
      <HeroSlider />

      {/* 2. Events section */}
      <EventsSection />

      {/* 3. Stats strip */}
      <StatsStrip />

      {/* 4. Mini About with Vision & Mission */}
      <MiniAbout />

      {/* 5. Donate CTA strip */}
      <DonateStrip />
    </div>
  )
}