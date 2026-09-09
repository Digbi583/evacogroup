import React from 'react';
import { 
  Play, 
  Sparkles, 
  ArrowRight, 
  Shield, 
  Award, 
  Landmark, 
  CheckCircle2, 
  ChevronRight,
  TrendingUp,
  MapPin
} from 'lucide-react';
import { EVACO_STATS } from '../data/evacoData';

interface HeroSectionProps {
  onOpenAdvisor: () => void;
  onOpenVideo: (videoId: string) => void;
  onExplorePortfolio: () => void;
  onOpenMatcher: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenAdvisor,
  onOpenVideo,
  onExplorePortfolio,
  onOpenMatcher,
}) => {
  return (
    <section 
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Image Layer with Cinematic Gradient Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/evaco/marina.jpg"
          alt="Cap Marina Luxury Estate by Evaco Group"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-[pulse_10s_ease-in-out_infinite] opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B111A] via-[#0B111A]/80 to-[#0B111A]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#C8A97E]/10 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Trust Badge Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-6 text-[11px] tracking-wider uppercase font-semibold text-[#C8A97E]">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#16202D]/90 border border-[#C8A97E]/30 shadow-sm backdrop-blur-sm">
            <Landmark className="w-3.5 h-3.5 text-[#C8A97E]" />
            <span>Stock Exchange of Mauritius Listed</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#16202D]/90 border border-[#C8A97E]/30 shadow-sm backdrop-blur-sm">
            <Award className="w-3.5 h-3.5 text-[#C8A97E]" />
            <span>AIPP Accredited Developer</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#16202D]/90 border border-[#C8A97E]/30 shadow-sm backdrop-blur-sm text-[#F1EFEA]">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>24+ Years of Pioneering Luxury</span>
          </div>
        </div>

        {/* Primary High-Ticket Editorial Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <p className="text-xs sm:text-sm font-medium tracking-[0.3em] uppercase text-[#C8A97E] mb-3">
            Mauritius • Mediterranean • Worldwide
          </p>
          <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F8F6F0] leading-[1.1] mb-6">
            Forward-Thinking <br className="hidden sm:block" />
            <span className="gold-gradient-text font-normal italic font-cormorant text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
              Property Developer
            </span>
            <br />&amp; Luxury Holding
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-[#BAC5D1] font-light leading-relaxed">
            Pioneering visionary freehold residences, five-star hospitality, and comprehensive corporate stewardship in Mauritius and worldwide. Led by Chairman &amp; CEO Arnaud Mayer with over 700 dedicated professionals.
          </p>
        </div>

        {/* Action Callouts */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 max-w-xl mx-auto">
          {/* Explore Residences */}
          <button
            id="hero-explore-portfolio-btn"
            onClick={onExplorePortfolio}
            className="luxury-btn-primary group cursor-pointer w-full sm:w-auto px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase"
          >
            <span>Explore Portfolio</span>
            <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1.5" />
          </button>

          {/* Watch Corporate Film Modal */}
          <button
            id="hero-watch-film-btn"
            onClick={() => onOpenVideo('VnSYCtFp8DI')}
            className="luxury-btn-secondary group cursor-pointer w-full sm:w-auto px-7 py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-wide"
          >
            <Play className="w-4 h-4 mr-1 text-[#C8A97E] fill-[#C8A97E] transition-all duration-300 group-hover:scale-115 group-hover:drop-shadow-[0_0_8px_rgba(200,169,126,0.8)]" />
            <span>Watch Corporate Film</span>
          </button>

          {/* AI Advisor Prompt */}
          <button
            id="hero-ai-advisor-btn"
            onClick={onOpenAdvisor}
            className="luxury-btn-ai group cursor-pointer w-full sm:w-auto px-7 py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-wide"
          >
            <Sparkles className="w-4 h-4 mr-1 text-[#C8A97E] transition-all duration-300 group-hover:scale-120 group-hover:rotate-12 group-hover:text-[#F3E7D3]" />
            <span>AI Wealth Concierge</span>
          </button>
        </div>

        {/* CNN Feature Banner */}
        <div className="max-w-3xl mx-auto mb-14">
          <div className="bg-[#121A26]/80 border border-[#C8A97E]/25 hover:border-[#C8A97E]/50 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-md shadow-xl transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-3 text-left">
              <div className="px-3 py-1 bg-red-600/90 text-white font-black text-xs tracking-tighter rounded shadow-sm">
                CNN
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-[#F1EFEA]">
                  Marketplace Africa: "Evaco, A Forward-Thinking Property Developer"
                </h4>
                <p className="text-[11px] text-[#94A3B8]">
                  CNN International profiles Evaco Group's sustainable innovations &amp; economic impact.
                </p>
              </div>
            </div>
            <button
              id="hero-watch-cnn-btn"
              onClick={() => onOpenVideo('yVlbx58YfhI')}
              className="luxury-btn-secondary group cursor-pointer whitespace-nowrap text-xs font-semibold py-2 px-4 rounded-xl"
            >
              <Play className="w-3.5 h-3.5 mr-1 text-[#C8A97E] fill-[#C8A97E] transition-transform duration-300 group-hover:scale-110" />
              <span>Watch CNN Report (04:12)</span>
            </button>
          </div>
        </div>

        {/* Verified Group Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 border-t border-[#C8A97E]/20 pt-10">
          {EVACO_STATS.map((stat, idx) => (
            <div 
              key={idx} 
              id={`stat-card-${idx}`}
              className="bg-[#101721]/60 border border-white/5 rounded-xl p-3.5 text-center hover:border-[#C8A97E]/30 transition-all group"
            >
              <div className="font-cinzel text-xl sm:text-2xl font-bold text-[#F3E7D3] group-hover:text-[#C8A97E] transition-colors">
                {stat.value}
              </div>
              <div className="text-[11px] font-semibold text-[#BAC5D1] tracking-wider uppercase mt-1">
                {stat.label}
              </div>
              <div className="text-[10px] text-[#6B7C90] mt-0.5 leading-tight">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
