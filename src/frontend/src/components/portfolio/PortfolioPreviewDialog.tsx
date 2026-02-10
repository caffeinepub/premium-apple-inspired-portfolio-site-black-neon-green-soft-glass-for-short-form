import { useEffect } from 'react';
import { X } from 'lucide-react';
import { type PortfolioItem } from './portfolioData';
import { hasVideoMedia, normalizeEmbedUrl } from './portfolioMedia';

interface PortfolioPreviewDialogProps {
  item: PortfolioItem;
  onClose: () => void;
}

export function PortfolioPreviewDialog({ item, onClose }: PortfolioPreviewDialogProps) {
  const showVideo = hasVideoMedia(item.media);
  const videoSource = item.media?.video;

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div
        className="relative w-full max-w-4xl glass-surface rounded-3xl p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl glass-surface hover:bg-accent transition-all z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="space-y-6">
          <div className="aspect-video overflow-hidden rounded-2xl bg-muted">
            {showVideo && videoSource ? (
              videoSource.sourceType === 'embed' ? (
                <iframe
                  src={normalizeEmbedUrl(videoSource.url)}
                  title={item.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  src={videoSource.url}
                  controls
                  className="w-full h-full"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              )
            ) : (
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          <div>
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-2xl md:text-3xl font-bold">{item.title}</h3>
              <span className="px-3 py-1 rounded-full glass-surface text-neon text-sm font-medium">
                {item.type}
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
