import React, { useState } from 'react';
import { Play, Film, Clock, Eye, Sparkles } from 'lucide-react';
import { VIDEOS } from '../data/evacoData';

interface MediaShowcaseProps {
  onOpenVideo: (videoId: string) => void;
}

export const MediaShowcase: React.FC<MediaShowcaseProps> = ({ onOpenVideo }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Corporate', 'Property', 'Leisure', 'Services', 'Media'];

  const filteredVideos = VIDEOS.filter((v) => {
    if (activeCategory === 'All') return true;
    return v.category === activeCategory;
  });

  return (
    <section id="media" className="py-24 bg-[#0B111A] relative border-t border-[#C8A97E]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C8A97E] mb-2">
            The Complete Visual Archive
          </p>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#F4EFE6] tracking-tight">
            Cinema &amp; Video Showcase
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#94A3B8] font-light leading-relaxed">
            All original video productions, television broadcasts on CNN Marketplace Africa, architectural fly-throughs, and culinary experiences from Evaco Group.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`video-cat-${cat.toLowerCase()}`}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer hover:-translate-y-0.5 ${
                activeCategory === cat
                  ? 'bg-[#C8A97E] text-[#0B111A] shadow-lg shadow-[#C8A97E]/30 font-bold'
                  : 'bg-[#151E2B] text-[#94A3B8] hover:bg-[#1E2B3D] hover:text-[#F3E7D3] border border-white/5 hover:border-[#C8A97E]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              id={`video-card-${video.id}`}
              onClick={() => onOpenVideo(video.youtubeId)}
              className="bg-[#121A26] border border-[#C8A97E]/20 hover:border-[#C8A97E]/60 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-[#C8A97E]/10 group"
            >
              {/* Video Thumbnail using high quality YouTube thumbnail fallback */}
              <div className="relative h-52 overflow-hidden bg-black">
                <img
                  src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121A26] via-transparent to-black/30" />

                {/* Big Center Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-13 h-13 rounded-full bg-[#C8A97E]/90 group-hover:bg-[#C8A97E] text-[#0B111A] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1 text-[10px] font-bold text-white bg-black/80 px-2 py-0.5 rounded backdrop-blur-sm">
                  <Clock className="w-3 h-3" />
                  <span>{video.duration}</span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 text-[10px] font-bold tracking-widest uppercase bg-[#C8A97E] text-[#0B111A] px-2.5 py-0.5 rounded shadow">
                  {video.category}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-5">
                <h3 className="font-cinzel text-base font-bold text-[#F4EFE6] group-hover:text-[#C8A97E] transition-colors line-clamp-2 mb-2">
                  {video.title}
                </h3>
                <p className="text-xs text-[#8E9CAE] leading-relaxed line-clamp-2 mb-4">
                  {video.description}
                </p>
                <div className="flex items-center justify-between text-xs text-[#C8A97E] font-medium pt-3 border-t border-white/5">
                  <span className="flex items-center gap-1">
                    <Film className="w-3.5 h-3.5" />
                    <span>Official Evaco Channel</span>
                  </span>
                  <span className="text-[11px] group-hover:underline">Watch in HD &rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
