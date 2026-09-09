import React from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Printer, 
  Globe2, 
  ShieldCheck, 
  Landmark, 
  Sparkles,
  ArrowUp
} from 'lucide-react';

interface ContactFooterProps {
  onOpenAdvisor: () => void;
  onNavigate: (sectionId: string) => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({
  onOpenAdvisor,
  onNavigate,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#070B11] border-t border-[#C8A97E]/30 text-[#BAC5D1] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Credentials */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/evaco/256x256.jpg"
                alt="Evaco Group Logo"
                className="w-12 h-12 rounded-full border border-[#C8A97E]/40 object-cover"
              />
              <div>
                <span className="font-cinzel text-xl font-bold tracking-[0.2em] text-[#F4EFE6] block">
                  EVACO GROUP
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#C8A97E]">
                  PROPERTY • SERVICES • WORLDWIDE • LEISURE
                </span>
              </div>
            </div>
            <p className="text-xs text-[#8E9CAE] leading-relaxed max-w-sm">
              Pioneering high-ticket luxury residences, masterplanned communities, five-star hospitality, and comprehensive corporate stewardship in Mauritius and worldwide since 2001.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded bg-[#16202D] text-[#C8A97E] border border-[#C8A97E]/20">
                SEM Listed Notes
              </span>
              <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded bg-[#16202D] text-[#C8A97E] border border-[#C8A97E]/20">
                AIPP Member
              </span>
              <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded bg-[#16202D] text-[#C8A97E] border border-[#C8A97E]/20">
                700+ Professionals
              </span>
            </div>
          </div>

          {/* Column 2: Clusters & Portals */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-xs font-bold tracking-[0.2em] uppercase text-[#F4EFE6]">
              Core Clusters
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('clusters')} className="hover:text-[#C8A97E] transition-colors">
                  Evaco Property
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('clusters')} className="hover:text-[#C8A97E] transition-colors">
                  Evaco Services &amp; Stantons
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('worldwide')} className="hover:text-[#C8A97E] transition-colors">
                  Evaco Worldwide (Šolta)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('leisure')} className="hover:text-[#C8A97E] transition-colors">
                  Evaco Leisure (La Plage)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('media')} className="hover:text-[#C8A97E] transition-colors">
                  Video &amp; Film Archive
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Flagship Projects */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-xs font-bold tracking-[0.2em] uppercase text-[#F4EFE6]">
              Flagship Residences
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('portfolio')} className="hover:text-[#C8A97E] transition-colors">
                  Cap Marina Water Village
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('portfolio')} className="hover:text-[#C8A97E] transition-colors">
                  Secret Private Villa Resort
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('portfolio')} className="hover:text-[#C8A97E] transition-colors">
                  Nautica Solar Villas
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('portfolio')} className="hover:text-[#C8A97E] transition-colors">
                  Clos du Littoral (CDL I &amp; II)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('portfolio')} className="hover:text-[#C8A97E] transition-colors">
                  Domaine des Alizées Spa
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Headquarters Contact */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-xs font-bold tracking-[0.2em] uppercase text-[#F4EFE6]">
              Headquarters
            </h4>
            <div className="space-y-2.5 text-xs text-[#94A3B8]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C8A97E] flex-shrink-0 mt-0.5" />
                <span>Rivière Citron, 20101 Arsenal, Mauritius</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C8A97E] flex-shrink-0" />
                <span>(+230) 269 1800</span>
              </div>
              <div className="flex items-center gap-2">
                <Printer className="w-4 h-4 text-[#C8A97E] flex-shrink-0" />
                <span>(+230) 269 1801</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#C8A97E] flex-shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-1">
                  <a href="mailto:marketing@evacogroup.com" className="hover:text-[#C8A97E] transition-colors">
                    marketing@evacogroup.com <span className="text-[10px] text-[#64748B]">(Group &amp; Media)</span>
                  </a>
                  <a href="mailto:sales@evacogroup.com" className="hover:text-[#C8A97E] transition-colors">
                    sales@evacogroup.com <span className="text-[10px] text-[#64748B]">(Property Sales)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <div>
            &copy; {new Date().getFullYear()} Evaco Group Ltd. All rights reserved. Registered in Mauritius.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={onOpenAdvisor}
              className="text-[#C8A97E] hover:underline flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI Private Client Advisor</span>
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
