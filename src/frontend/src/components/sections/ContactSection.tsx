import { SectionShell } from '../layout/SectionShell';
import { GlassCard } from '../common/GlassCard';
import { NeonButton } from '../common/NeonButton';
import { useContactForm } from '../contact/useContactForm';
import { SiInstagram, SiYoutube } from 'react-icons/si';
import { CheckCircle2 } from 'lucide-react';

export function ContactSection() {
  const { formData, errors, isSubmitting, isSuccess, handleChange, handleSubmit } = useContactForm();

  return (
    <SectionShell id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Work <span className="neon-text">Together</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to create something amazing? Get in touch and let's bring your vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <GlassCard>
            {isSuccess ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-16 h-16 text-neon mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl glass-surface border border-border focus:border-neon focus:outline-none focus:ring-2 focus:ring-neon/20 transition-all"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl glass-surface border border-border focus:border-neon focus:outline-none focus:ring-2 focus:ring-neon/20 transition-all"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl glass-surface border border-border focus:border-neon focus:outline-none focus:ring-2 focus:ring-neon/20 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                <NeonButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  loading={isSubmitting}
                  className="w-full"
                >
                  Send Message
                </NeonButton>
              </form>
            )}
          </GlassCard>

          {/* Social Links & Info */}
          <div className="space-y-6">
            <GlassCard>
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <p className="text-muted-foreground mb-6">
                Follow my work and stay updated with the latest projects on social media.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl glass-surface hover:border-neon hover:text-neon transition-all"
                >
                  <SiInstagram className="w-5 h-5" />
                  <span className="font-medium">Instagram</span>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl glass-surface hover:border-neon hover:text-neon transition-all"
                >
                  <SiYoutube className="w-5 h-5" />
                  <span className="font-medium">YouTube</span>
                </a>
              </div>
            </GlassCard>

            <GlassCard>
              <h3 className="text-xl font-bold mb-4">Quick Response</h3>
              <p className="text-muted-foreground">
                I typically respond to all inquiries within 24 hours. For urgent projects, feel free to reach out via social media for a faster response.
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
