import { Hero } from '@/components/sections/home/Hero';
import { ModuleMarquee } from '@/components/sections/home/ModuleMarquee';
import { Industries } from '@/components/sections/home/Industries';
import { Pricing } from '@/components/sections/home/Pricing';
import { HardwareCrossSell } from '@/components/sections/home/HardwareCrossSell';
import { Timeline } from '@/components/sections/home/Timeline';
import { Reasons } from '@/components/sections/home/Reasons';
import { Steps } from '@/components/sections/home/Steps';
import { Counters } from '@/components/sections/home/Counters';
import { Testimonials } from '@/components/sections/home/Testimonials';
import { FinalCTA } from '@/components/sections/home/FinalCTA';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ModuleMarquee />
      <Industries />
      <Pricing />
      <HardwareCrossSell />
      <Timeline />
      <Reasons />
      <Steps />
      <Counters />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}
