import { useState } from 'react';
import { Play } from 'lucide-react';
import { SectionShell } from '../layout/SectionShell';
import { GlassCard } from '../common/GlassCard';
import { PortfolioPreviewDialog } from '../portfolio/PortfolioPreviewDialog';
import { portfolioData, type PortfolioItem } from '../portfolio/portfolioData';
import { hasVideoMedia } from '../portfolio/portfolioMedia';

export function PortfolioSection() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <SectionShell id="portfolio">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          My <span className="neon-text">Portfolio</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A showcase of creative projects that drive engagement and tell compelling stories.
        </p>
        <p className="text-muted-foreground text-sm mt-4 max-w-xl mx-auto">
          Add your videos via embed links (YouTube, Vimeo) or local video files to bring your portfolio to life.
        </p>
      </div>

      {/* Categories */}
      <div className="space-y-20">
        {Object.entries(portfolioData).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 capitalize">
              {category.replace(/([A-Z])/g, ' $1').trim()}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="group relative overflow-hidden rounded-3xl glass-surface hover:scale-105 transition-all duration-300"
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Video Indicator */}
                    {hasVideoMedia(item.media) && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-16 h-16 rounded-full glass-surface flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-8 h-8 text-neon fill-neon" />
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                    <div className="text-center">
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-neon text-sm font-medium">{item.type}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Preview Dialog */}
      {selectedItem && (
        <PortfolioPreviewDialog
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </SectionShell>
  );
}
