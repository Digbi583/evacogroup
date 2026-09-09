import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Sparkles, 
  Globe2, 
  PlayCircle, 
  Phone, 
  Menu, 
  X, 
  ChevronDown,
  Coins,
  Compass
} from 'lucide-react';
import { CURRENCY_RATES } from '../data/evacoData';

interface NavbarProps {
  currentCurrency: string;
  onCurrencyChange: (curr: string) => void;
  onOpenAdvisor: () => void;
  onOpenMatcher: () => void;
  onOpenVideo: (videoId: string) => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentCurrency,
  onCurrencyChange,
  onOpenAdvisor,
  onOpenMatcher,
  onOpenVideo,
  activeSection,
  onNavigate,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'clusters', label: 'The 4 Pillars' },
    { id: 'portfolio', label: 'Residences & Portfolio' },
    { id: 'worldwide', label: 'Worldwide & Šolta' },
    { id: 'leisure', label: 'Leisure & Beach Club' },
    { id: 'celebrities', label: 'Celebrity Guests' },
    { id: 'media', label: 'Cinema & Media' },
    { id: 'about', label: 'The Group' },
  ];

  return (
    <header 
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0B111A]/95 backdrop-blur-md border-b border-[#C8A97E]/20 py-3 shadow-2xl shadow-black/60' 
          : 'bg-gradient-to-b from-[#0B111A]/90 via-[#0B111A]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button 
          id="brand-logo-btn"
          onClick={() => onNavigate('hero')}
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          <img 
            src="/assets/evaco/256x256.jpg" 
            alt="Evaco Group Logo" 
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border border-[#C8A97E]/40 group-hover:border-[#C8A97E] transition-all duration-300 shadow-md shadow-black/40"
          />
          <div>
            <span className="block font-cinzel text-lg sm:text-xl font-bold tracking-[0.2em] text-[#F4EFE6] group-hover:text-[#C8A97E] transition-colors">
              EVACO
            </span>
            <span className="block text-[9px] tracking-[0.3em] uppercase text-[#C8A97E]/90 font-medium">
              GROUP • MAURITIUS
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-medium tracking-wider uppercase">
          {navLinks.map((link) => (
            <button
              key={link.id}
              id={`nav-link-${link.id}`}
              onClick={() => onNavigate(link.id)}
              className={`transition-colors duration-200 relative py-1 ${
                activeSection === link.id
                  ? 'text-[#C8A97E] font-semibold'
                  : 'text-[#D3D8DE] hover:text-[#C8A97E]'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C8A97E]" />
              )}
            </button>
          ))}
        </nav>

        {/* Action Controls: Currency, AI Advisor, Call */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Currency Switcher */}
          <div className="relative">
            <button
              id="currency-selector-btn"
              onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#16202D]/80 hover:bg-[#1E2B3D] border border-[#C8A97E]/30 hover:border-[#C8A97E]/60 text-xs font-semibold text-[#E5D5BA] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm cursor-pointer"
              title="Change Display Currency"
            >
              <Coins className="w-3.5 h-3.5 text-[#C8A97E]" />
              <span>{currentCurrency}</span>
              <ChevronDown className="w-3 h-3 text-[#94A3B8]" />
            </button>

            {currencyDropdownOpen && (
              <div 
                className="absolute right-0 mt-2 w-32 bg-[#121A24] border border-[#C8A97E]/30 rounded-lg shadow-xl py-1 z-50 text-xs"
                onMouseLeave={() => setCurrencyDropdownOpen(false)}
              >
                {Object.keys(CURRENCY_RATES).map((curr) => (
                  <button
                    key={curr}
                    id={`currency-opt-${curr}`}
                    onClick={() => {
                      onCurrencyChange(curr);
                      setCurrencyDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 flex items-center justify-between hover:bg-[#C8A97E]/20 transition-colors ${
                      currentCurrency === curr ? 'text-[#C8A97E] font-bold bg-[#C8A97E]/10' : 'text-[#D1D5DB]'
                    }`}
                  >
                    <span>{curr}</span>
                    <span className="text-[#9CA3AF] text-[10px]">{CURRENCY_RATES[curr].symbol}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* AI Wealth & Property Advisor Button */}
          <button
            id="open-ai-advisor-btn"
            onClick={onOpenAdvisor}
            className="group relative overflow-hidden flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#C8A97E]/25 via-[#D8BF95]/30 to-[#9E7D4A]/25 hover:from-[#C8A97E]/40 hover:to-[#B5915A]/45 border border-[#C8A97E]/60 hover:border-[#C8A97E] text-xs font-semibold tracking-wide text-[#F3E7D3] hover:text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_18px_rgba(200,169,126,0.35)] active:translate-y-0 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E6CDA7] group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
            <span>AI Advisor</span>
          </button>

          {/* AI Villa Matcher Button */}
          <button
            id="open-ai-matcher-btn"
            onClick={onOpenMatcher}
            className="group flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#16202D] hover:bg-[#1E2B3D] border border-white/10 hover:border-[#C8A97E]/60 text-xs font-medium text-[#CBD5E1] hover:text-[#F3E7D3] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_14px_rgba(0,0,0,0.4)] active:translate-y-0 cursor-pointer"
          >
            <Compass className="w-3.5 h-3.5 text-[#C8A97E] group-hover:rotate-45 group-hover:text-[#F3E7D3] transition-transform duration-300" />
            <span className="hidden md:inline">Villa Matcher</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            id="mobile-ai-advisor-trigger"
            onClick={onOpenAdvisor}
            className="p-2 rounded-full bg-[#C8A97E]/20 hover:bg-[#C8A97E]/30 text-[#C8A97E] border border-[#C8A97E]/40 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            aria-label="Open AI Advisor"
          >
            <Sparkles className="w-4 h-4" />
          </button>
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#D3D8DE] hover:text-[#C8A97E] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D141F] border-b border-[#C8A97E]/30 px-6 py-5 shadow-2xl">
          <div className="flex flex-col space-y-3 text-sm tracking-wider uppercase font-medium">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`mobile-nav-${link.id}`}
                onClick={() => {
                  onNavigate(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left py-2 border-b border-white/5 ${
                  activeSection === link.id ? 'text-[#C8A97E] font-bold' : 'text-[#D1D5DB]'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <div className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-xs text-[#94A3B8]">Display Currency:</span>
                <div className="flex gap-2">
                  {Object.keys(CURRENCY_RATES).map((c) => (
                    <button
                      key={c}
                      onClick={() => onCurrencyChange(c)}
                      className={`px-2 py-1 text-xs rounded ${
                        currentCurrency === c ? 'bg-[#C8A97E] text-black font-bold' : 'bg-[#1A2533] text-gray-300'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdvisor();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gradient-to-r from-[#C8A97E] to-[#9E7D4A] text-[#0B111A] font-semibold text-xs tracking-wider uppercase"
              >
                <Sparkles className="w-4 h-4" />
                Launch Evaco AI Advisor
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenMatcher();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#16202D] border border-[#C8A97E]/30 text-[#E5D5BA] font-semibold text-xs tracking-wider uppercase"
              >
                <Compass className="w-4 h-4 text-[#C8A97E]" />
                Interactive Villa Matcher
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
