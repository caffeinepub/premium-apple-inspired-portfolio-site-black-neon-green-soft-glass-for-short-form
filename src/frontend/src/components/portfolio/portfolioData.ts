import { type PortfolioMedia } from './portfolioMedia';

export interface PortfolioItem {
  id: string;
  title: string;
  type: string;
  category: string;
  thumbnail: string;
  description: string;
  media?: PortfolioMedia;
}

export const portfolioData: Record<string, PortfolioItem[]> = {
  shortFormReels: [
    {
      id: 'reel-2',
      title: 'Behind The Scenes',
      type: 'TikTok',
      category: 'shortFormReels',
      thumbnail: '/assets/generated/thumb-placeholder-2.dim_800x450.png',
      description: 'Authentic BTS content showcasing the creative process, building brand connection.'
    },
    {
      id: 'reel-3',
      title: 'Tutorial Series',
      type: 'YouTube Shorts',
      category: 'shortFormReels',
      thumbnail: '/assets/generated/thumb-placeholder-3.dim_800x450.png',
      description: 'Educational content series with dynamic editing and clear value delivery.'
    },
    {
      id: 'reel-4',
      title: 'Creative Short',
      type: 'YouTube Shorts',
      category: 'shortFormReels',
      thumbnail: '/assets/generated/thumb-placeholder-1.dim_800x450.png',
      description: 'Engaging short-form content with dynamic editing and visual effects.',
      media: {
        type: 'video',
        video: {
          sourceType: 'embed',
          url: 'https://www.youtube.com/shorts/MMNPExwV1Cs'
        }
      }
    },
    {
      id: 'reel-5',
      title: 'Instagram Reel',
      type: 'Instagram Reel',
      category: 'shortFormReels',
      thumbnail: '/assets/generated/thumb-placeholder-2.dim_800x450.png',
      description: 'Captivating Instagram reel with smooth transitions and engaging storytelling.',
      media: {
        type: 'video',
        video: {
          sourceType: 'embed',
          url: 'https://www.instagram.com/reel/DT3DXlIj9O4/'
        }
      }
    },
    {
      id: 'reel-6',
      title: 'Trending Short',
      type: 'YouTube Shorts',
      category: 'shortFormReels',
      thumbnail: '/assets/generated/thumb-placeholder-3.dim_800x450.png',
      description: 'Viral-worthy short with attention-grabbing visuals and perfect pacing.',
      media: {
        type: 'video',
        video: {
          sourceType: 'embed',
          url: 'https://www.youtube.com/shorts/oCXmRT8zFyk'
        }
      }
    }
  ],
  videoEditingProjects: [
    {
      id: 'video-1',
      title: 'Brand Story',
      type: 'Commercial',
      category: 'videoEditingProjects',
      thumbnail: '/assets/generated/thumb-placeholder-1.dim_800x450.png',
      description: 'Compelling brand narrative with cinematic editing and emotional storytelling.'
    },
    {
      id: 'video-2',
      title: 'Event Highlight',
      type: 'Event Coverage',
      category: 'videoEditingProjects',
      thumbnail: '/assets/generated/thumb-placeholder-2.dim_800x450.png',
      description: 'Fast-paced event recap capturing the energy and excitement of the occasion.'
    },
    {
      id: 'video-3',
      title: 'Product Demo',
      type: 'Explainer',
      category: 'videoEditingProjects',
      thumbnail: '/assets/generated/thumb-placeholder-3.dim_800x450.png',
      description: 'Clear, engaging product demonstration with motion graphics and annotations.'
    },
    {
      id: 'video-4',
      title: 'Professional Edit',
      type: 'YouTube Shorts',
      category: 'videoEditingProjects',
      thumbnail: '/assets/generated/thumb-placeholder-1.dim_800x450.png',
      description: 'Polished video editing project with professional color grading and sound design.',
      media: {
        type: 'video',
        video: {
          sourceType: 'embed',
          url: 'https://www.youtube.com/shorts/KNgGQ5D6X0o'
        }
      }
    },
    {
      id: 'video-5',
      title: 'Dynamic Montage',
      type: 'YouTube Shorts',
      category: 'videoEditingProjects',
      thumbnail: '/assets/generated/thumb-placeholder-2.dim_800x450.png',
      description: 'High-energy montage with seamless transitions and rhythm-based editing.',
      media: {
        type: 'video',
        video: {
          sourceType: 'embed',
          url: 'https://www.youtube.com/shorts/X72u5Z1izr8'
        }
      }
    },
    {
      id: 'video-6',
      title: 'Cinematic Piece',
      type: 'YouTube Shorts',
      category: 'videoEditingProjects',
      thumbnail: '/assets/generated/thumb-placeholder-3.dim_800x450.png',
      description: 'Cinematic video project with advanced editing techniques and visual storytelling.',
      media: {
        type: 'video',
        video: {
          sourceType: 'embed',
          url: 'https://www.youtube.com/shorts/wg4fOH4edzk'
        }
      }
    }
  ],
  graphicDesign: [
    {
      id: 'design-1',
      title: 'YouTube Thumbnail Pack',
      type: 'Thumbnail Design',
      category: 'graphicDesign',
      thumbnail: '/assets/generated/thumb-placeholder-1.dim_800x450.png',
      description: 'High-converting thumbnail designs that increased CTR by 45%.'
    },
    {
      id: 'design-2',
      title: 'Social Media Graphics',
      type: 'Brand Assets',
      category: 'graphicDesign',
      thumbnail: '/assets/generated/thumb-placeholder-2.dim_800x450.png',
      description: 'Cohesive social media graphics maintaining brand consistency across platforms.'
    },
    {
      id: 'design-3',
      title: 'Motion Graphics Pack',
      type: 'Animated Elements',
      category: 'graphicDesign',
      thumbnail: '/assets/generated/thumb-placeholder-3.dim_800x450.png',
      description: 'Custom animated elements and transitions for enhanced video production.'
    },
    {
      id: 'design-4',
      title: 'Design Showcase',
      type: 'YouTube Shorts',
      category: 'graphicDesign',
      thumbnail: '/assets/generated/thumb-placeholder-1.dim_800x450.png',
      description: 'Creative graphic design showcase with stunning visual presentation and branding.',
      media: {
        type: 'video',
        video: {
          sourceType: 'embed',
          url: 'https://www.youtube.com/shorts/200KCw0Dm88'
        }
      }
    }
  ]
};
