import React from 'react';
import { Globe2, Anchor, Star, ArrowRight, Shield, Compass } from 'lucide-react';

interface WorldwideSectionProps {
  onOpenAdvisor: () => void;
  onOpenVideo: (videoId: string) => void;
}

export const WorldwideSection: React.FC<WorldwideSectionProps> = ({
  onOpenAdvisor,
  onOpenVideo,
}) => {
  return (
    <section id="worldwide" className="py-24 bg-[#0D141F] relative border-t border-[#C8A97E]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C8A97E] mb-2">
            International Expansion &amp; Hospitality
          </p>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#F4EFE6] tracking-tight">
            Evaco Worldwide
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#94A3B8] font-light leading-relaxed">
            "In the pursuit of global expansion in view of creating unique experiences within the luxury market."
          </p>
        </div>

        {/* Feature Spotlight: Secret Šolta Croatia */}
        <div className="bg-[#121A26] border border-[#C8A97E]/30 rounded-3xl overflow-hidden shadow-2xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 p-8 sm:p-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A97E]/15 border border-[#C8A97E]/30 text-[#C8A97E] text-xs font-semibold tracking-widest uppercase mb-4">
                <Anchor className="w-3.5 h-3.5" />
                <span>Adriatic Riviera • Croatia</span>
              </div>
              <h3 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F4EFE6] mb-4">
                Secret Šolta Island Resort
              </h3>
              <p className="text-sm text-[#BAC5D1] leading-relaxed mb-6">
                Secret Šolta represents the bold union between Evaco Group's international expertise in architectural development and authentic Mediterranean hospitality. Nestled in a secluded bay on the pristine island of Šolta near Split, this coastal haven features private yacht moorings, contemporary stone villas, panoramic Adriatic sea terraces, and an integrated wellness retreat.
              </p>
              
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/10 text-xs mb-6">
                <div>
                  <span className="text-[#C8A97E] font-bold block text-base font-cinzel">Split Archipelago</span>
                  <span className="text-[#8A99AD]">Direct boat access from Split</span>
                </div>
                <div>
                  <span className="text-[#C8A97E] font-bold block text-base font-cinzel">European Asset</span>
                  <span className="text-[#8A99AD]">EU Title &amp; Euro Denominated</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={onOpenAdvisor}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#C8A97E] to-[#9E7D4A] text-[#0B111A] font-semibold text-xs tracking-wider uppercase hover:opacity-90 transition-opacity"
                >
                  <span>Inquire on Secret Šolta</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative h-80 sm:h-96 lg:h-full min-h-[380px] overflow-hidden">
              <img
                src="/assets/evaco/croatia-for-web2.jpg"
                alt="Secret Solta Croatia Resort"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#121A26] via-transparent to-transparent opacity-80" />
            </div>
          </div>
        </div>

        {/* Secret Hotel Management Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#121A26] border border-white/5 p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#C8A97E] mb-3">
                <Star className="w-5 h-5 fill-[#C8A97E]" />
                <span className="text-xs font-semibold tracking-widest uppercase">Resort Operator</span>
              </div>
              <h4 className="font-cinzel text-2xl font-bold text-[#F4EFE6] mb-3">
                Secret Hotel Management
              </h4>
              <p className="text-xs sm:text-sm text-[#8E9CAE] leading-relaxed mb-6">
                An international luxury resort management company focusing on creating high-performing resorts through unique hospitality experiences and outstanding customer care. The management team has a proven track record at the highest echelon of the hotel industry, maximizing property yields for owners while delivering in-villa butlers, private chefs, and customized wellness journeys.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#C8A97E] font-medium">
              <Shield className="w-4 h-4" />
              <span>Full turnkey asset stewardship &amp; guest management</span>
            </div>
          </div>

          <div className="bg-[#121A26] border border-white/5 p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-[#C8A97E] mb-3">
                <Globe2 className="w-5 h-5" />
                <span className="text-xs font-semibold tracking-widest uppercase">Global Footprint</span>
              </div>
              <h4 className="font-cinzel text-2xl font-bold text-[#F4EFE6] mb-3">
                Cross-Border Synergies
              </h4>
              <p className="text-xs sm:text-sm text-[#8E9CAE] leading-relaxed mb-6">
                From Mauritius to the Mediterranean, Evaco Worldwide bridges international private investors with secure trophy real estate, offering dual-continent lifestyle privileges, seasonal resort exchanges, and premier capital preservation.
              </p>
            </div>
            <img
              src="/assets/evaco/worldwide.jpg"
              alt="Evaco Worldwide"
              className="absolute inset-0 w-full h-full object-cover opacity-15"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
