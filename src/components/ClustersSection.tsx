import React, { useState } from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Globe2, 
  Compass, 
  ArrowUpRight, 
  Check, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { CLUSTERS } from '../data/evacoData';
import { ClusterType } from '../types';

interface ClustersSectionProps {
  onSelectClusterProject?: (cluster: ClusterType) => void;
  onOpenAdvisor: () => void;
}

export const ClustersSection: React.FC<ClustersSectionProps> = ({
  onSelectClusterProject,
  onOpenAdvisor,
}) => {
  const [activeClusterId, setActiveClusterId] = useState<ClusterType>('property');

  const activeCluster = CLUSTERS.find((c) => c.id === activeClusterId) || CLUSTERS[0];

  const getClusterIcon = (id: ClusterType) => {
    switch (id) {
      case 'property':
        return <Building2 className="w-5 h-5" />;
      case 'services':
        return <ShieldCheck className="w-5 h-5" />;
      case 'worldwide':
        return <Globe2 className="w-5 h-5" />;
      case 'leisure':
        return <Compass className="w-5 h-5" />;
    }
  };

  return (
    <section id="clusters" className="py-24 bg-[#0E1520] relative border-t border-[#C8A97E]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C8A97E] mb-2">
            The 4 Core Clusters of Evaco
          </p>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#F4EFE6] tracking-tight">
            Integrated Excellence &amp; Ecosystem
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#94A3B8] font-light leading-relaxed">
            From architectural conception and heavy civil engineering to private fiduciary advisory, five-star international hospitality, and premier beach clubs.
          </p>
        </div>

        {/* Cluster Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {CLUSTERS.map((cluster) => {
            const isSelected = cluster.id === activeClusterId;
            return (
              <button
                key={cluster.id}
                id={`cluster-tab-${cluster.id}`}
                onClick={() => setActiveClusterId(cluster.id)}
                className={`flex items-center gap-2.5 px-5 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'luxury-btn-primary shadow-lg shadow-[#C8A97E]/30 scale-105'
                    : 'bg-[#151E2B] text-[#BAC5D1] hover:bg-[#1E2B3D] hover:text-[#F3E7D3] border border-white/5 hover:border-[#C8A97E]/40 hover:-translate-y-0.5 hover:shadow-md'
                }`}
              >
                {getClusterIcon(cluster.id)}
                <span>{cluster.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Cluster Overview Banner */}
        <div className="bg-[#121A26] border border-[#C8A97E]/30 rounded-2xl overflow-hidden mb-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A97E]/15 border border-[#C8A97E]/30 text-[#C8A97E] text-xs font-semibold tracking-widest uppercase mb-4">
                {getClusterIcon(activeCluster.id)}
                <span>Cluster Overview</span>
              </div>
              <h3 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F4EFE6] mb-3">
                {activeCluster.title}
              </h3>
              <p className="text-sm sm:text-base font-serif italic text-[#C8A97E] mb-4">
                "{activeCluster.tagline}"
              </p>
              <p className="text-sm text-[#A0AEC0] leading-relaxed mb-6">
                {activeCluster.description}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  id="cluster-inquire-btn"
                  onClick={onOpenAdvisor}
                  className="luxury-btn-primary group cursor-pointer inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase"
                >
                  <span>Inquire with Cluster Advisor</span>
                  <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 h-72 sm:h-96 lg:h-full relative overflow-hidden min-h-[320px]">
              <img
                src={activeCluster.heroImage}
                alt={activeCluster.title}
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#121A26] via-transparent to-transparent opacity-80" />
            </div>
          </div>
        </div>

        {/* Entities / Divisions Sub-Cards */}
        <div>
          <h4 className="text-xs font-semibold tracking-[0.25em] uppercase text-[#BAC5D1] mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C8A97E]" />
            <span>Divisions &amp; Specialist Companies within {activeCluster.title}</span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activeCluster.entities.map((entity, idx) => (
              <div
                key={idx}
                id={`entity-card-${activeCluster.id}-${idx}`}
                className="bg-[#121A26] border border-white/5 hover:border-[#C8A97E]/40 rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg group"
              >
                <div className="h-44 overflow-hidden relative">
                  <img
                    src={entity.image}
                    alt={entity.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121A26] via-[#121A26]/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
                    {entity.badges?.map((badge, bIdx) => (
                      <span
                        key={bIdx}
                        className="text-[9px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-black/70 text-[#E5D5BA] border border-white/10"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-[#C8A97E] block mb-1">
                      {entity.role}
                    </span>
                    <h5 className="font-cinzel text-base font-bold text-[#F4EFE6] mb-2 group-hover:text-[#C8A97E] transition-colors">
                      {entity.name}
                    </h5>
                    <p className="text-xs text-[#8A99AD] leading-relaxed line-clamp-4">
                      {entity.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
