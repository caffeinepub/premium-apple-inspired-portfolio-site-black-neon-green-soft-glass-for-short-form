// Shared portfolio media type definitions and utilities

export type VideoSourceType = 'embed' | 'local';

export interface VideoMedia {
  sourceType: VideoSourceType;
  url: string; // For embed: full embed URL (YouTube, Vimeo, etc.); For local: path to video file
}

export interface PortfolioMedia {
  type: 'image' | 'video';
  video?: VideoMedia;
}

// Type guard to check if an item has video media
export function hasVideoMedia(media?: PortfolioMedia): boolean {
  return media?.type === 'video' && !!media.video;
}

// Helper to convert YouTube/Vimeo/Instagram URLs to embed URLs
export function normalizeEmbedUrl(url: string): string {
  // YouTube Shorts - convert to standard embed
  if (url.includes('youtube.com/shorts/')) {
    const videoId = url.split('youtube.com/shorts/')[1]?.split('?')[0];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  }
  
  // YouTube standard watch URLs
  if (url.includes('youtube.com/watch')) {
    const videoId = new URL(url).searchParams.get('v');
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  }
  
  // YouTube short URLs (youtu.be)
  if (url.includes('youtu.be/')) {
    const videoId = url.split('youtu.be/')[1]?.split('?')[0];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  }
  
  // Instagram Reels
  if (url.includes('instagram.com/reel/')) {
    const reelId = url.split('instagram.com/reel/')[1]?.split('/')[0];
    return reelId ? `https://www.instagram.com/reel/${reelId}/embed` : url;
  }
  
  // Vimeo
  if (url.includes('vimeo.com/') && !url.includes('/video/')) {
    const videoId = url.split('vimeo.com/')[1]?.split('?')[0];
    return videoId ? `https://player.vimeo.com/video/${videoId}` : url;
  }
  
  // Already an embed URL or other format
  return url;
}
