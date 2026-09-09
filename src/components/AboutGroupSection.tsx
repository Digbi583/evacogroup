import React from 'react';
import { 
  Award, 
  Landmark, 
  Users, 
  Heart, 
  ShieldCheck, 
  Compass, 
  Target, 
  Lightbulb, 
  Flame, 
  CheckCircle2, 
  Building2, 
  Globe2, 
  Scale, 
  Briefcase 
} from 'lucide-react';

export const AboutGroupSection: React.FC = () => {
  const coreValues = [
    {
      icon: <Lightbulb className="w-5 h-5 text-[#C8A97E]" />,
      title: 'Ingenuity',
      desc: 'Pioneering world-first architectural marvels: from private retractable glass roofs to the 2 km navigable freshwater canal of Cap Marina.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#C8A97E]" />,
      title: 'Trust & Governance',
      desc: 'Listed on the Stock Exchange of Mauritius (SEM), upholding strict financial auditing, investor protection, and corporate transparency.'
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-[#C8A97E]" />,
      title: 'Commitment to Excellence',
      desc: 'Turnkey vertical integration: master planning, in-house civil engineering, 5-star hotel management, and lifetime asset stewardship.'
    },
    {
      icon: <Flame className="w-5 h-5 text-[#C8A97E]" />,
      title: 'Passion',
      desc: 'An unrelenting dedication to redefining the tropical lifestyle experience, elevating Mauritius into a prime international luxury benchmark.'
    },
    {
      icon: <Target className="w-5 h-5 text-[#C8A97E]" />,
      title: 'Rigor & Precision',
      desc: 'Rigorous engineering standards through FairStone Construction and bioclimatic environmental preservation across all master developments.'
    }
  ];

  const partners = [
    {
      category: 'Capital Markets & Governance',
      name: 'Stock Exchange of Mauritius',
      role: 'Publicly Listed Multi-Currency Notes Issuer',
      badge: 'SEM Listed'
    },
    {
      category: 'Sovereign Investment Framework',
      name: 'Economic Development Board (EDB)',
      role: 'PDS Approved Luxury Real Estate Schemes',
      badge: 'Govt. Framework'
    },
    {
      category: 'International Real Estate Standard',
      name: 'AIPP London',
      role: 'Association of International Property Professionals Member',
      badge: 'Global Code of Conduct'
    },
    {
      category: 'Fiduciary & Residency Structuring',
      name: 'Stantons Ltd',
      role: 'Licensed Corporate Management & Residency Advisory',
      badge: 'Evaco Fiduciary'
    },
    {
      category: 'Architecture & Master Planning',
      name: 'Evolution Architectes & Linea Studio',
      role: 'Bioclimatic Design, Naval Canal & Smart Living Architecture',
      badge: 'In-House Studio'
    },
    {
      category: 'Civil Engineering & Execution',
      name: 'FairStone & FineLine Contracting',
      role: 'General Construction, Infrastructure & Quality Assurance',
      badge: 'Engineering Division'
    },
    {
      category: 'Estate Management & Stewardship',
      name: 'Syndis Ltd',
      role: '24/7 Security, Co-ownership & Common Area Preservation',
      badge: 'Syndic & Care'
    },
    {
      category: 'Luxury Hospitality & Operations',
      name: 'Secret Hotel Management',
      role: '5-Star Concierge, Rental Yield Operations & VIP Services',
      badge: 'Hospitality Management'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0E1520] relative border-t border-[#C8A97E]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C8A97E] mb-2">
            Pioneering Luxury Since 2001
          </p>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#F4EFE6] tracking-tight">
            The Evaco Story &amp; Leadership
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#94A3B8] font-light leading-relaxed">
            "A vision rooted in architectural daring, financial resilience, and an unwavering commitment to shaping Mauritius into a world-class luxury destination."
          </p>
        </div>

        {/* Chairman Arnaud Mayer Spotlight */}
        <div className="bg-[#121A26] border border-[#C8A97E]/30 rounded-3xl overflow-hidden shadow-2xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 h-80 sm:h-96 lg:h-full relative overflow-hidden min-h-[380px]">
              <img
                src="/assets/evaco/arnothumb.jpg"
                alt="Arnaud Mayer, Chairman & CEO of Evaco Group"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#121A26] via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/10">
                <span className="text-[#C8A97E] font-cinzel text-base font-bold block">
                  Arnaud Mayer
                </span>
                <span className="text-[11px] text-[#A0AEC0] uppercase tracking-wider">
                  Founder, Chairman &amp; Chief Executive Officer
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 p-8 sm:p-12">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C8A97E]/15 border border-[#C8A97E]/30 text-[#C8A97E] text-xs font-semibold tracking-widest uppercase mb-4">
                <Award className="w-3.5 h-3.5" />
                <span>Message from the Executive Chairman</span>
              </div>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F4EFE6] mb-4">
                "We Build Legacies, Not Just Residences"
              </h3>
              <div className="space-y-4 text-xs sm:text-sm text-[#BAC5D1] leading-relaxed">
                <p>
                  "When I founded Evaco Group in 2001, our ambition was clear: to introduce world-class concepts of private luxury villas to Mauritius that had never been seen before. From Les Villas Athéna and Oasis to the groundbreaking 2-kilometer freshwater canal of Cap Marina, our journey has been defined by bold architectural exploration."
                </p>
                <p>
                  "Today, as a conglomerate listed on the Stock Exchange of Mauritius, employing over 700 passionate professionals across Property, Services, Worldwide, and Leisure, we offer international investors the assurance of complete vertical integration: in-house civil engineering, fiduciary structuring through Stantons Ltd, and five-star hospitality."
                </p>
              </div>

              {/* Pillars of Governance */}
              <div className="grid grid-cols-2 gap-4 pt-6 mt-6 border-t border-white/10 text-xs">
                <div className="flex items-center gap-2 text-[#E2E8F0]">
                  <Landmark className="w-4 h-4 text-[#C8A97E]" />
                  <span>Listed on Stock Exchange of Mauritius</span>
                </div>
                <div className="flex items-center gap-2 text-[#E2E8F0]">
                  <ShieldCheck className="w-4 h-4 text-[#C8A97E]" />
                  <span>AIPP Accredited Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Group Vision */}
          <div className="bg-[#121A26] border border-[#C8A97E]/30 hover:border-[#C8A97E]/60 rounded-3xl p-8 sm:p-10 shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-[#C8A97E]/15 border border-[#C8A97E]/30 text-[#C8A97E]">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C8A97E] block">
                  Strategic Horizon
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#F4EFE6]">
                  Our Vision
                </h3>
              </div>
            </div>
            <p className="text-sm text-[#BAC5D1] leading-relaxed mb-4">
              To invent and deliver the real estate, hospitality, and residential concepts of the future—anticipating global lifestyle evolutions through bioclimatic architecture, autonomous smart technology, and seamless Mediterranean and Indian Ocean expansion.
            </p>
            <ul className="space-y-2 text-xs text-[#8E9CAE]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A97E]"></span>
                Bioclimatic residential ecosystems (Cap Marina, Nautica)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A97E]"></span>
                International expansion into prime European havens (Secret Šolta, Croatia)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A97E]"></span>
                Enduring generational wealth preservation for international owners
              </li>
            </ul>
          </div>

          {/* Group Mission */}
          <div className="bg-[#121A26] border border-[#C8A97E]/30 hover:border-[#C8A97E]/60 rounded-3xl p-8 sm:p-10 shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-[#C8A97E]/15 border border-[#C8A97E]/30 text-[#C8A97E]">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C8A97E] block">
                  Corporate Purpose
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#F4EFE6]">
                  Our Mission
                </h3>
              </div>
            </div>
            <p className="text-sm text-[#BAC5D1] leading-relaxed mb-4">
              <span className="italic text-[#F4EFE6] font-medium">
                "In the enhancement of people's lives together with the well-being of their respective communities."
              </span>
            </p>
            <p className="text-xs text-[#8E9CAE] leading-relaxed mb-4">
              Through vertical integration, we deliver uncompromising luxury, full regulatory peace of mind, and responsible ecological stewardship that uplifts the Mauritian community.
            </p>
            <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
              <span className="text-[10px] font-semibold uppercase px-2.5 py-1 rounded bg-[#16202D] text-[#C8A97E] border border-[#C8A97E]/20">
                Turnkey Transparency
              </span>
              <span className="text-[10px] font-semibold uppercase px-2.5 py-1 rounded bg-[#16202D] text-[#C8A97E] border border-[#C8A97E]/20">
                Ecological Protection
              </span>
              <span className="text-[10px] font-semibold uppercase px-2.5 py-1 rounded bg-[#16202D] text-[#C8A97E] border border-[#C8A97E]/20">
                Social Upliftment
              </span>
            </div>
          </div>
        </div>

        {/* Our 5 Core Values */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C8A97E] block mb-2">
              Guiding Principles
            </span>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F4EFE6]">
              Our Core Values
            </h3>
            <p className="text-xs sm:text-sm text-[#8E9CAE] mt-2">
              Five foundational pillars that guide every masterplan, structural calculation, and client relationship since 2001.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {coreValues.map((val, idx) => (
              <div 
                key={idx}
                className="bg-[#121A26] border border-white/5 hover:border-[#C8A97E]/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div>
                  <div className="p-2.5 rounded-xl bg-[#16202D] border border-white/10 w-fit mb-4">
                    {val.icon}
                  </div>
                  <h4 className="font-cinzel text-base font-bold text-[#F4EFE6] mb-2">
                    {val.title}
                  </h4>
                  <p className="text-xs text-[#8E9CAE] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Headquarters & Evaco Foundation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Headquarters */}
          <div className="bg-[#121A26] border border-white/5 rounded-2xl overflow-hidden shadow-xl">
            <div className="h-52 overflow-hidden relative">
              <img
                src="/assets/evaco/office-evaco.jpg"
                alt="Evaco Group Corporate Headquarters"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121A26] via-transparent to-transparent" />
            </div>
            <div className="p-6">
              <span className="text-[10px] font-semibold tracking-widest uppercase text-[#C8A97E] block mb-1">
                Corporate Infrastructure
              </span>
              <h4 className="font-cinzel text-xl font-bold text-[#F4EFE6] mb-2">
                Headquarters at Rivière Citron, Arsenal
              </h4>
              <p className="text-xs text-[#8E9CAE] leading-relaxed">
                Our purpose-built corporate campus in Arsenal accommodates our executive board, engineering labs, architectural design studios (Evolution Architectes &amp; Linea), legal counsel, and investor lounge.
              </p>
            </div>
          </div>

          {/* Foundation & CSR */}
          <div className="bg-[#121A26] border border-white/5 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between">
            <div className="h-52 overflow-hidden relative bg-[#1A2533] flex items-center justify-center p-6">
              <img
                src="/assets/evaco/foundation.png"
                alt="Evaco Foundation"
                className="max-h-32 object-contain"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold tracking-widest uppercase text-[#C8A97E] block mb-1">
                  Social Responsibility &amp; ESG
                </span>
                <h4 className="font-cinzel text-xl font-bold text-[#F4EFE6] mb-2">
                  The Evaco Foundation
                </h4>
                <p className="text-xs text-[#8E9CAE] leading-relaxed mb-4">
                  Committed to uplifting local Mauritian communities through education sponsorships, ecological coastal regeneration, mangrove preservation, and vocational construction apprenticeships.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#C8A97E] font-medium">
                <Heart className="w-4 h-4" />
                <span>Empowering sustainable Mauritian growth</span>
              </div>
            </div>
          </div>
        </div>

        {/* Institutional & Ecosystem Partners Grid */}
        <div className="bg-[#121A26]/80 border border-[#C8A97E]/25 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C8A97E] block mb-2">
              Institutional Strength &amp; Integrated Synergies
            </span>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F4EFE6]">
              Our Ecosystem &amp; Partners
            </h3>
            <p className="text-xs sm:text-sm text-[#8E9CAE] mt-2">
              The prestigious network of financial regulators, in-house architectural studios, licensed fiduciary subsidiaries, and international bodies guaranteeing delivery and capital security.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="p-5 rounded-2xl bg-[#16202D] border border-white/5 hover:border-[#C8A97E]/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[9px] uppercase tracking-wider text-[#A0AEC0]">
                      {partner.category}
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#C8A97E]/15 text-[#C8A97E] border border-[#C8A97E]/30">
                      {partner.badge}
                    </span>
                  </div>
                  <h4 className="font-cinzel text-sm font-bold text-[#F4EFE6] mb-1.5">
                    {partner.name}
                  </h4>
                  <p className="text-xs text-[#8E9CAE] leading-relaxed">
                    {partner.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
