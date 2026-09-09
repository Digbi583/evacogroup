import React from 'react';
import { Star, Quote, MapPin } from 'lucide-react';
import { CELEBRITIES } from '../data/evacoData';

export const CelebritiesSection: React.FC = () => {
  return (
    <section id="celebrities" className="py-24 bg-[#0E1520] relative border-t border-[#C8A97E]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C8A97E] mb-2">
            Discreet Luxury &amp; Distinguished Guests
          </p>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#F4EFE6] tracking-tight">
            Celebrity Encounters
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#94A3B8] font-light leading-relaxed">
            "From award-winning actors and reputed musicians to famous film producers, numerous world-famous stars are seduced by the attributes of our brand."
          </p>
        </div>

        {/* Celebrities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CELEBRITIES.map((celeb, idx) => (
            <div
              key={idx}
              id={`celebrity-card-${idx}`}
              className="bg-[#121A26] border border-[#C8A97E]/20 hover:border-[#C8A97E]/50 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl group"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={celeb.image}
                  alt={celeb.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121A26] via-transparent to-transparent" />
                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 text-[#C8A97E] backdrop-blur-sm">
                  <Star className="w-4 h-4 fill-[#C8A97E]" />
                </div>
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-[11px] text-[#E2E8F0] font-medium bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-sm">
                  <MapPin className="w-3 h-3 text-[#C8A97E]" />
                  <span>{celeb.locationVisited}</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-cinzel text-lg font-bold text-[#F4EFE6] mb-1 group-hover:text-[#C8A97E] transition-colors">
                    {celeb.name}
                  </h3>
                  <p className="text-xs font-medium text-[#C8A97E] mb-3">
                    {celeb.role}
                  </p>
                  <div className="relative pl-5 border-l-2 border-[#C8A97E]/40 my-3">
                    <Quote className="w-3.5 h-3.5 text-[#C8A97E]/60 absolute -top-1 -left-2 fill-current opacity-30" />
                    <p className="text-xs text-[#8E9CAE] leading-relaxed italic">
                      "{celeb.experience}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
