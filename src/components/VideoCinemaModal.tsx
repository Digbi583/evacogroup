import React from 'react';
import { X, Film, Play, Clock, Sparkles } from 'lucide-react';
import { VIDEOS } from '../data/evacoData';

interface VideoCinemaModalProps {
  videoId: string | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectVideo: (id: string) => void;
}

export const VideoCinemaModal: React.FC<VideoCinemaModalProps> = ({
  videoId,
  isOpen,
  onClose,
  onSelectVideo,
}) => {
  if (!isOpen || !videoId) return null;

  const currentVideo = VIDEOS.find((v) => v.youtubeId === videoId) || {
    id: 'unknown',
    title: 'Evaco Group Feature',
    category: 'Corporate' as const,
    youtubeId: videoId,
    duration: '03:00',
    description: 'Exclusive production by Evaco Group Mauritius.',
  };

  const otherVideos = VIDEOS.filter((v) => v.youtubeId !== videoId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-xl">
      <div className="bg-[#0B111A] border border-[#C8A97E]/30 rounded-3xl w-full max-w-5xl max-h-[95vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Header */}
        <div className="px-6 py-3 border-b border-white/10 bg-[#121A26] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-[#C8A97E] text-[#0B111A] text-[10px] font-bold tracking-widest uppercase">
              {currentVideo.category}
            </span>
            <h3 className="font-cinzel text-sm sm:text-base font-bold text-[#F4EFE6] truncate max-w-lg">
              {currentVideo.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#94A3B8] hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player & Content */}
        <div className="flex-1 overflow-y-auto luxury-scrollbar p-4 sm:p-6 space-y-6">
          {/* Responsive 16:9 Video Embed */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/10">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
              title={currentVideo.title}
              className="absolute inset-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Video Meta Information */}
          <div className="bg-[#121A26] border border-white/5 rounded-2xl p-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <h4 className="font-cinzel text-lg font-bold text-[#F4EFE6]">
                {currentVideo.title}
              </h4>
              <span className="text-xs text-[#C8A97E] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                Duration: {currentVideo.duration}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#BAC5D1] leading-relaxed">
              {currentVideo.description}
            </p>
          </div>

          {/* Up Next / Related Evaco Archive */}
          <div>
            <h5 className="text-xs font-semibold tracking-widest uppercase text-[#94A3B8] mb-3">
              More from the Evaco Video Archive
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {otherVideos.slice(0, 4).map((vid) => (
                <div
                  key={vid.id}
                  onClick={() => onSelectVideo(vid.youtubeId)}
                  className="bg-[#121A26] border border-white/5 hover:border-[#C8A97E]/40 rounded-xl overflow-hidden cursor-pointer group transition-all"
                >
                  <div className="relative h-24 bg-black overflow-hidden">
                    <img
                      src={`https://img.youtube.com/vi/${vid.youtubeId}/mqdefault.jpg`}
                      alt={vid.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-[#C8A97E] text-black flex items-center justify-center">
                        <Play className="w-3 h-3 fill-current ml-0.5" />
                      </div>
                    </div>
                  </div>
                  <div className="p-2.5">
                    <span className="text-[9px] text-[#C8A97E] uppercase font-bold block">
                      {vid.category}
                    </span>
                    <h6 className="text-xs text-white font-medium line-clamp-1">
                      {vid.title}
                    </h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
