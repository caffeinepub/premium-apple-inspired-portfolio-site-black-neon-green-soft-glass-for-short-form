import { SectionShell } from '../layout/SectionShell';
import { NeonButton } from '../common/NeonButton';
import { BackgroundDecor } from '../visual/BackgroundDecor';
import { useScrollToSection } from '../../hooks/useScrollToSection';

export function HeroSection() {
  const { scrollToSection } = useScrollToSection();

  return (
    <SectionShell id="hero" className="relative min-h-screen flex items-center pt-20">
      <BackgroundDecor />
      
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          <span className="block text-3xl md:text-4xl lg:text-5xl mb-4 text-muted-foreground font-normal">i'm Arnav</span>
          <span className="block mb-2">Creative Video Editor</span>
          <span className="block neon-text">& Graphic Designer</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-balance">
          Transforming ideas into viral content that captivates audiences and drives engagement across social media platforms.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <NeonButton
            variant="primary"
            size="lg"
            onClick={() => scrollToSection('portfolio')}
          >
            View Portfolio
          </NeonButton>
          <NeonButton
            variant="secondary"
            size="lg"
            onClick={() => scrollToSection('contact')}
          >
            Contact Me
          </NeonButton>
        </div>
      </div>
    </SectionShell>
  );
}
