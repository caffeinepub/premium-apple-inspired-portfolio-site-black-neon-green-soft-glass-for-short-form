import { SectionShell } from '../layout/SectionShell';
import { GlassCard } from '../common/GlassCard';

export function AboutSection() {
  const tools = [
    { name: 'Premiere Pro', icon: '🎬' },
    { name: 'After Effects', icon: '✨' },
    { name: 'Photoshop', icon: '🎨' },
    { name: 'Illustrator', icon: '🖌️' }
  ];

  return (
    <SectionShell id="about">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="order-2 md:order-1">
          <GlassCard hover className="overflow-hidden aspect-square">
            <img
              src="/assets/group 1.png"
              alt="Arnav - Video Editor and Graphic Designer"
              className="w-full h-full object-cover rounded-2xl"
            />
          </GlassCard>
        </div>

        {/* Content */}
        <div className="order-1 md:order-2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="neon-text">Me</span>
          </h2>
          
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a passionate video editor and graphic designer specializing in short-form content that stops the scroll. With years of experience crafting viral reels, engaging TikToks, and eye-catching YouTube Shorts, I understand what makes content resonate with audiences.
            </p>
            <p>
              My approach combines creative storytelling with data-driven insights to deliver content that not only looks stunning but also drives real results. From concept to final cut, I bring your vision to life with precision and style.
            </p>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Tools & Expertise</h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool) => (
                <GlassCard key={tool.name} className="text-center">
                  <div className="text-3xl mb-2">{tool.icon}</div>
                  <div className="font-medium">{tool.name}</div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
