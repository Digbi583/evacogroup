import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  Bed, 
  Maximize2, 
  Play, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Download, 
  Mail, 
  Phone,
  Coins
} from 'lucide-react';
import { Project } from '../types';
import { CURRENCY_RATES } from '../data/evacoData';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  currentCurrency: string;
  onOpenVideo: (videoId: string) => void;
  onOpenAdvisor: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
  currentCurrency,
  onOpenVideo,
  onOpenAdvisor,
}) => {
  if (!isOpen || !project) return null;

  const [activeImage, setActiveImage] = useState<string>(project.gallery[0] || project.thumbnail);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    timeframe: 'within_3_months',
  });

  const rateObj = CURRENCY_RATES[currentCurrency] || CURRENCY_RATES.USD;
  const convertedPrice = Math.round(project.startingPriceUSD * rateObj.rateToUSD);

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className="bg-[#0D141F] border border-[#C8A97E]/40 rounded-3xl w-full max-w-5xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#C8A97E]/20 bg-[#121A26] flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <div>
              <span className="text-[10px] font-semibold tracking-widest uppercase text-[#C8A97E]">
                {project.cluster.toUpperCase()} CLUSTER • {project.status}
              </span>
              <h2 className="font-cinzel text-lg sm:text-2xl font-bold text-[#F4EFE6]">
                {project.name}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#94A3B8] hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 luxury-scrollbar bg-[#0B111A]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Gallery & Video */}
            <div className="lg:col-span-7 space-y-4">
              {/* Main Feature Image */}
              <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-black">
                <img
                  src={activeImage}
                  alt={project.name}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                
                {project.videoId && (
                  <button
                    onClick={() => onOpenVideo(project.videoId!)}
                    className="luxury-btn-secondary group cursor-pointer absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold backdrop-blur-md"
                  >
                    <Play className="w-3.5 h-3.5 fill-current text-[#C8A97E] transition-transform duration-300 group-hover:scale-110" />
                    <span>Watch Architectural Film</span>
                  </button>
                )}

                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/70 text-xs text-white backdrop-blur-md">
                  <MapPin className="w-3.5 h-3.5 text-[#C8A97E]" />
                  <span>{project.location}</span>
                </div>
              </div>

              {/* Gallery Thumbnails */}
              <div className="flex items-center gap-3 overflow-x-auto pb-2 luxury-scrollbar">
                {project.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`relative w-24 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                      activeImage === img ? 'border-[#C8A97E] scale-95' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              {/* Architectural Overview */}
              <div className="pt-4 border-t border-white/10">
                <h3 className="text-xs font-semibold tracking-widest uppercase text-[#C8A97E] mb-2">
                  Architectural Concept &amp; Masterplan
                </h3>
                <p className="text-xs sm:text-sm text-[#BAC5D1] leading-relaxed mb-4">
                  {project.overview}
                </p>
                <div className="bg-[#121A26] border border-white/5 rounded-xl p-4 text-xs text-[#8E9CAE]">
                  <span className="font-semibold text-[#F1EFEA] block mb-1">Architectural Style:</span>
                  {project.architecturalStyle}
                </div>
              </div>
            </div>

            {/* Right Column: Specs, Perks & Inquiry Form */}
            <div className="lg:col-span-5 space-y-6">
              {/* Financial Box */}
              <div className="bg-[#121A26] border border-[#C8A97E]/40 rounded-2xl p-5 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-[#94A3B8]">
                    Starting Acquisition Price
                  </span>
                  <span className="text-[10px] text-[#C8A97E] font-medium">
                    Currency: {currentCurrency}
                  </span>
                </div>
                <div className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F3E7D3] mb-3">
                  {rateObj.symbol} {convertedPrice.toLocaleString()}
                </div>

                {project.residencyEligible && (
                  <div className="flex items-start gap-2 text-xs text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 rounded-lg p-2.5 mb-4">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>
                      Grants Permanent Mauritian Residency for buyer, spouse, and dependent children under PDS/IRS framework.
                    </span>
                  </div>
                )}

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-3 py-3 border-t border-white/10 text-xs">
                  <div>
                    <span className="text-[#64748B] block text-[10px] uppercase">Bedrooms</span>
                    <span className="font-semibold text-[#E2E8F0]">{project.bedrooms}</span>
                  </div>
                  <div>
                    <span className="text-[#64748B] block text-[10px] uppercase">Surface Area</span>
                    <span className="font-semibold text-[#E2E8F0]">{project.surfaceArea}</span>
                  </div>
                </div>
              </div>

              {/* Key Features Bullet Points */}
              <div className="bg-[#121A26] border border-white/5 rounded-2xl p-5">
                <h4 className="text-xs font-semibold tracking-widest uppercase text-[#C8A97E] mb-3">
                  Signature Highlights
                </h4>
                <ul className="space-y-2 text-xs text-[#CBD5E1]">
                  {project.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C8A97E] mt-1.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Private Client Acquisition Request Form */}
              <div className="bg-gradient-to-b from-[#141E2C] to-[#101722] border border-[#C8A97E]/30 rounded-2xl p-5 shadow-xl">
                <h4 className="font-cinzel text-base font-bold text-[#F4EFE6] mb-1">
                  Request Private Dossier &amp; Plans
                </h4>
                <p className="text-[11px] text-[#94A3B8] mb-4">
                  Receive full floorplans, unit availability matrix, and projected rental schedules directly from Evaco Group.
                </p>

                {inquirySubmitted ? (
                  <div className="text-center py-6 bg-emerald-950/30 border border-emerald-500/30 rounded-xl p-4">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                    <h5 className="font-semibold text-xs text-white uppercase tracking-wider mb-1">
                      Dossier Request Received
                    </h5>
                    <p className="text-xs text-[#94A3B8]">
                      Our Private Wealth Advisor will contact you within 24 hours with complete architectural documents.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitInquiry} className="space-y-3">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#0B111A] border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C8A97E]"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#0B111A] border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C8A97E]"
                      />
                      <input
                        type="tel"
                        placeholder="Phone / WhatsApp"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#0B111A] border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C8A97E]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="luxury-btn-primary group cursor-pointer w-full py-3 rounded-xl text-xs font-bold tracking-wider uppercase shadow-lg shadow-[#C8A97E]/25"
                    >
                      <span>Receive Confidential Dossier</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
