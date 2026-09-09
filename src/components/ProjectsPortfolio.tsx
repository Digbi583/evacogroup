import React, { useState } from 'react';
import { 
  Building, 
  MapPin, 
  Bed, 
  Maximize2, 
  Play, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  SlidersHorizontal 
} from 'lucide-react';
import { PROJECTS, CURRENCY_RATES } from '../data/evacoData';
import { Project } from '../types';

interface ProjectsPortfolioProps {
  currentCurrency: string;
  onSelectProject: (project: Project) => void;
  onOpenVideo: (videoId: string) => void;
  onOpenMatcher: () => void;
}

export const ProjectsPortfolio: React.FC<ProjectsPortfolioProps> = ({
  currentCurrency,
  onSelectProject,
  onOpenVideo,
  onOpenMatcher,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filterOptions = ['All', 'Available', 'Few Units Left', 'Completed', 'Under Development'];

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedFilter === 'All') return true;
    return p.status === selectedFilter;
  });

  const formatPrice = (priceUSD: number) => {
    const rateObj = CURRENCY_RATES[currentCurrency] || CURRENCY_RATES.USD;
    const converted = Math.round(priceUSD * rateObj.rateToUSD);
    return `${rateObj.symbol} ${converted.toLocaleString()}`;
  };

  return (
    <section id="portfolio" className="py-24 bg-[#0B111A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C8A97E] mb-2">
              Signature Residences &amp; Masterplanned Estates
            </p>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#F4EFE6] tracking-tight">
              The Real Estate Portfolio
            </h2>
            <p className="mt-3 text-sm text-[#94A3B8] max-w-xl font-light">
              Freehold luxury villas and prime commercial developments offering permanent Mauritian residency, superior rental yields, and architectural distinction.
            </p>
          </div>

          <button
            id="portfolio-ai-matcher-btn"
            onClick={onOpenMatcher}
            className="luxury-btn-secondary group cursor-pointer self-start md:self-auto flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-[#E6CDA7] hover:text-white"
          >
            <Sparkles className="w-4 h-4 text-[#C8A97E] transition-transform duration-300 group-hover:scale-115 group-hover:rotate-12" />
            <span>Find My Ideal Villa with AI</span>
          </button>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/10">
          <span className="text-xs font-medium text-[#718096] mr-2 flex items-center gap-1">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Filter:
          </span>
          {filterOptions.map((filter) => (
            <button
              key={filter}
              id={`portfolio-filter-${filter.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer hover:-translate-y-0.5 ${
                selectedFilter === filter
                  ? 'bg-[#C8A97E] text-[#0B111A] shadow-md shadow-[#C8A97E]/30 font-bold'
                  : 'bg-[#151E2B] text-[#A0AEC0] hover:bg-[#1E2B3D] hover:text-[#F3E7D3] hover:border-[#C8A97E]/30 border border-transparent'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="bg-[#121A26] border border-[#C8A97E]/20 hover:border-[#C8A97E]/60 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-[#C8A97E]/10 group"
            >
              {/* Card Image Area */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121A26] via-transparent to-black/30" />

                {/* Status Badge */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
                  <span className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md shadow-md ${
                    project.status === 'Available'
                      ? 'bg-emerald-700/90 text-white'
                      : project.status === 'Few Units Left'
                      ? 'bg-amber-600/90 text-white'
                      : 'bg-slate-800/90 text-slate-200'
                  }`}>
                    {project.status}
                  </span>
                  {project.residencyEligible && (
                    <span className="text-[9px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-[#C8A97E] text-[#0B111A] shadow-sm">
                      Permanent Residency Eligible
                    </span>
                  )}
                </div>

                {/* Video Preview Button */}
                {project.videoId && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenVideo(project.videoId!);
                    }}
                    className="absolute top-3 right-3 p-2 rounded-full bg-black/60 hover:bg-[#C8A97E] text-white hover:text-[#0B111A] transition-all backdrop-blur-sm shadow-md"
                    title="Watch Project Video Tour"
                  >
                    <Play className="w-4 h-4 fill-current" />
                  </button>
                )}

                {/* Location indicator */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-[#E2E8F0] font-medium bg-black/60 px-2.5 py-1 rounded-lg backdrop-blur-sm">
                  <MapPin className="w-3.5 h-3.5 text-[#C8A97E]" />
                  <span>{project.location}</span>
                </div>
              </div>

              {/* Card Content Area */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-cinzel text-xl font-bold text-[#F4EFE6] group-hover:text-[#C8A97E] transition-colors mb-1">
                    {project.name}
                  </h3>
                  <p className="text-xs text-[#C8A97E] font-medium mb-3 italic">
                    {project.subtitle}
                  </p>
                  <p className="text-xs text-[#8E9CAE] leading-relaxed line-clamp-3 mb-5">
                    {project.overview}
                  </p>
                </div>

                <div>
                  {/* Property Specs Row */}
                  <div className="grid grid-cols-2 gap-2 py-3 border-y border-white/10 text-xs mb-5">
                    <div className="flex items-center gap-1.5 text-[#A0AEC0]">
                      <Bed className="w-4 h-4 text-[#C8A97E]" />
                      <span>{project.bedrooms}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#A0AEC0]">
                      <Maximize2 className="w-4 h-4 text-[#C8A97E]" />
                      <span>{project.surfaceArea}</span>
                    </div>
                  </div>

                  {/* Price & Action Row */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#718096] block">
                        Starting from
                      </span>
                      <span className="font-cinzel text-lg font-bold text-[#F3E7D3]">
                        {formatPrice(project.startingPriceUSD)}
                      </span>
                    </div>

                    <button
                      id={`view-details-${project.id}`}
                      onClick={() => onSelectProject(project)}
                      className="luxury-btn-secondary group/btn cursor-pointer flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase hover:border-[#C8A97E] hover:text-white"
                    >
                      <span>Examine Dossier</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C8A97E] transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
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
