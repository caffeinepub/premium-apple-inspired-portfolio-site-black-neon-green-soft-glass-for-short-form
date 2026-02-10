import { SectionShell } from '../layout/SectionShell';
import { GlassCard } from '../common/GlassCard';
import { Quote } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Absolutely incredible work! The reels created exceeded all expectations and our engagement skyrocketed. Highly professional and creative.",
      author: "Sarah Johnson",
      role: "Content Creator"
    },
    {
      quote: "Working together was seamless. The attention to detail and understanding of what makes content viral is unmatched. Will definitely work together again!",
      author: "Michael Chen",
      role: "Brand Manager"
    },
    {
      quote: "The thumbnails and video edits transformed our channel. We saw a 300% increase in views within the first month. Exceptional quality!",
      author: "Emma Rodriguez",
      role: "YouTube Creator"
    }
  ];

  return (
    <SectionShell id="testimonials" className="bg-accent/5">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Client <span className="neon-text">Testimonials</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          What clients say about working together.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <GlassCard key={index} hover className="flex flex-col">
            <Quote className="w-10 h-10 text-neon mb-4 opacity-50" />
            <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
              "{testimonial.quote}"
            </p>
            <div>
              <div className="font-semibold">{testimonial.author}</div>
              <div className="text-sm text-muted-foreground">{testimonial.role}</div>
            </div>
          </GlassCard>
        ))}
      </div>
    </SectionShell>
  );
}
