import { SiInstagram, SiYoutube } from 'react-icons/si';
import { Heart } from 'lucide-react';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'portfolio-app'
  );

  return (
    <footer className="border-t border-border/50 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-surface hover:text-neon hover:shadow-neon transition-all"
              aria-label="Instagram"
            >
              <SiInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-surface hover:text-neon hover:shadow-neon transition-all"
              aria-label="YouTube"
            >
              <SiYoutube className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright & Attribution */}
          <div className="text-center text-sm text-muted-foreground space-y-2">
            <p>© {currentYear} All rights reserved.</p>
            <p className="flex items-center justify-center gap-2">
              Built with{' '}
              <Heart className="w-4 h-4 text-neon fill-neon" />
              {' '}using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
