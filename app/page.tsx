import { HeroLiveDashboard } from '@/components/sections/home/HeroLiveDashboard';
import { IndustryStrip } from '@/components/sections/home/IndustryStrip';
import { WhyAstanaPos } from '@/components/sections/home/WhyAstanaPos';
import { FeatureDeepDiveTeaser } from '@/components/sections/home/FeatureDeepDiveTeaser';
import { ProofStrip } from '@/components/sections/home/ProofStrip';
import { FinalCTA } from '@/components/sections/home/FinalCTA';

export default function HomePage() {
  return (
    <main>
      <HeroLiveDashboard />
      <IndustryStrip />
      <WhyAstanaPos />
      <FeatureDeepDiveTeaser />
      <ProofStrip />
      <FinalCTA />
    </main>
  );
}
