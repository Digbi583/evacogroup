import React from 'react';
import { Utensils, Waves, Compass, Play, Sparkles, MapPin } from 'lucide-react';

interface LeisureSectionProps {
  onOpenVideo: (videoId: string) => void;
  onOpenAdvisor: () => void;
}

export const LeisureSection: React.FC<LeisureSectionProps> = ({
  onOpenVideo,
  onOpenAdvisor,
}) => {
  return (
    <section id="leisure" className="py-24 bg-[#0B111A] relative border-t border-[#C8A97E]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C8A97E] mb-2">
            Recreational Splendor &amp; Gastronomy
          </p>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#F4EFE6] tracking-tight">
            Evaco Leisure
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#94A3B8] font-light leading-relaxed">
            "Enhance customers' lifestyles through outstanding recreational experiences: private beach clubs, culinary masterpieces, and authentic Indian Ocean heritage."
          </p>
        </div>

        {/* Big Spotlight 1: La Plage Beach Club */}
        <div className="bg-[#121A26] border border-[#C8A97E]/30 rounded-3xl overflow-hidden shadow-2xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 relative h-80 sm:h-96 lg:h-full min-h-[380px] overflow-hidden order-2 lg:order-1">
              <img
                src="/assets/evaco/laplage.jpg"
                alt="La Plage Beach Club Trou-aux-Biches"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-[#121A26] via-transparent to-transparent opacity-70" />
              <button
                onClick={() => onOpenVideo('4yMVOgSxx0s')}
                className="absolute bottom-6 left-6 flex items-center gap-2 px-4 py-2 rounded-full bg-black/70 hover:bg-[#C8A97E] text-white hover:text-black text-xs font-semibold backdrop-blur-md transition-all"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Watch Beach Club Film (02:15)</span>
              </button>
            </div>

            <div className="lg:col-span-6 p-8 sm:p-12 order-1 lg:order-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-widest uppercase mb-4">
                <Waves className="w-3.5 h-3.5" />
                <span>Trou-aux-Biches • Mauritius</span>
              </div>
              <h3 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F4EFE6] mb-4">
                Evaco Beach Club: "La Plage"
              </h3>
              <p className="text-sm text-[#BAC5D1] leading-relaxed mb-4">
                Welcoming Evaco residents and discerning guests to one of the most idyllic white sand beaches on the planet. La Plage offers direct turquoise lagoon swimming, private teak sun loungers, professional beach massages, a gourmet restaurant open 7/7 for lunch and dinner, an artisanal ice-creamery, and signature tropical mixology.
              </p>
              <p className="text-xs text-[#8E9CAE] italic mb-6">
                "We proudly serve authentic Mauritian cuisine alongside Certified Angus Beef steaks, fresh lobster, artisan pastas, and wood-fired specialities."
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={onOpenAdvisor}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#C8A97E] to-[#9E7D4A] text-[#0B111A] font-semibold text-xs tracking-wider uppercase hover:opacity-90 transition-opacity"
                >
                  Reserve VIP Beach Cabana
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Cards Row: Jaguar Aviation Restaurant, Pirates Museum, Seashell Museum */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Jaguar Aviation Restaurant */}
          <div className="bg-[#121A26] border border-white/5 hover:border-[#C8A97E]/40 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xl group">
            <div className="relative h-56 overflow-hidden">
              <img
                src="/assets/evaco/112.jpg"
                alt="Jaguar Aviation Restaurant"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121A26] via-transparent to-transparent" />
              <button
                onClick={() => onOpenVideo('n9SoFcev4SI')}
                className="absolute top-3 right-3 p-2 rounded-full bg-black/60 hover:bg-[#C8A97E] text-white hover:text-black transition-all"
                title="Watch Jaguar Aviation Video"
              >
                <Play className="w-4 h-4 fill-current" />
              </button>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold tracking-widest uppercase text-[#C8A97E] block mb-1">
                  5-Star Gastronomy &amp; Aviation
                </span>
                <h4 className="font-cinzel text-xl font-bold text-[#F4EFE6] mb-2">
                  Jaguar Aviation Restaurant
                </h4>
                <p className="text-xs text-[#8E9CAE] leading-relaxed mb-4">
                  An iconic 5-star dinner experience in northern Mauritius. The centerpiece: an authentic twin-engine supersonic SEPECAT Jaguar ground-attack fighter jet suspended between the rooftop terrace and cigar lounge.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#C8A97E]">
                <span>Supersonic Jet • Cigar Lounge</span>
              </div>
            </div>
          </div>

          {/* Pirates Museum & Tavern */}
          <div className="bg-[#121A26] border border-white/5 hover:border-[#C8A97E]/40 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xl group">
            <div className="relative h-56 overflow-hidden">
              <img
                src="/assets/evaco/Pirate-Tavern.jpg"
                alt="Pirates Museum & Pirate Tavern"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121A26] via-transparent to-transparent" />
              <button
                onClick={() => onOpenVideo('3vNm3l9eN5c')}
                className="absolute top-3 right-3 p-2 rounded-full bg-black/60 hover:bg-[#C8A97E] text-white hover:text-black transition-all"
                title="Watch Pirates Museum Video"
              >
                <Play className="w-4 h-4 fill-current" />
              </button>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold tracking-widest uppercase text-[#C8A97E] block mb-1">
                  18th-Century Indian Ocean Heritage
                </span>
                <h4 className="font-cinzel text-xl font-bold text-[#F4EFE6] mb-2">
                  Pirates Museum &amp; Tavern
                </h4>
                <p className="text-xs text-[#8E9CAE] leading-relaxed mb-4">
                  Travel back in time to the corsairs era when the French Isle of France was a privateer stronghold. Discover ancient nautical charts, brass astrolabes, pirate weaponry, and spice trade relics.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#C8A97E]">
                <span>Corsair Lore • Historical Artifacts</span>
              </div>
            </div>
          </div>

          {/* Seashell Museum */}
          <div className="bg-[#121A26] border border-white/5 hover:border-[#C8A97E]/40 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xl group">
            <div className="relative h-56 overflow-hidden">
              <img
                src="/assets/evaco/Seashell-Museum.jpg"
                alt="The World Seashell Museum"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121A26] via-transparent to-transparent" />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold tracking-widest uppercase text-[#C8A97E] block mb-1">
                  Marine Biodiversity Exhibition
                </span>
                <h4 className="font-cinzel text-xl font-bold text-[#F4EFE6] mb-2">
                  The Seashell Museum
                </h4>
                <p className="text-xs text-[#8E9CAE] leading-relaxed mb-4">
                  An internationally curated collection of rare seabed wonders from ocean depths worldwide. Explore evolutionary marine structures, iridescent mollusks, and the oceanic tapestry of the Indian Ocean.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#C8A97E]">
                <span>Thousands of Rare Specimens</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
