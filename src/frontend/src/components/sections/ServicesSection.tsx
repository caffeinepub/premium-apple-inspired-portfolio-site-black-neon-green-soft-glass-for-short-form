import { SectionShell } from '../layout/SectionShell';
import { GlassCard } from '../common/GlassCard';
import { Video, Zap, Sparkles, Image, Share2 } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: Video,
      title: 'Short-Form Video Editing',
      description: 'Engaging vertical videos optimized for Instagram Reels, TikTok, and YouTube Shorts.'
    },
    {
      icon: Zap,
      title: 'Reels Editing',
      description: 'Fast-paced, attention-grabbing reels that stop the scroll and drive engagement.'
    },
    {
      icon: Sparkles,
      title: 'Motion Graphics',
      description: 'Dynamic animations and visual effects that bring your content to life.'
    },
    {
      icon: Image,
      title: 'Thumbnail Design',
      description: 'Eye-catching thumbnails that maximize click-through rates and views.'
    },
    {
      icon: Share2,
      title: 'Social Media Content Editing',
      description: 'Complete content packages tailored for maximum social media impact.'
    }
  ];

  return (
    <SectionShell id="services">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="neon-text">Services</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Professional video editing and design services to elevate your brand.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <GlassCard
              key={index}
              neonHover
              className="text-center group cursor-pointer"
            >
              <div className="mb-4 inline-flex p-4 rounded-2xl glass-surface group-hover:bg-neon/10 transition-colors">
                <Icon className="w-8 h-8 group-hover:text-neon transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-neon transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </GlassCard>
          );
        })}
      </div>
    </SectionShell>
  );
}
