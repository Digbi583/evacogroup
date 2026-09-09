import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Compass, 
  ArrowRight, 
  Check, 
  Building2, 
  Loader2, 
  DollarSign, 
  Globe, 
  CheckCircle2, 
  RefreshCw 
} from 'lucide-react';
import { Project } from '../types';

interface AiVillaMatcherModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProjectByName: (name: string) => void;
}

export const AiVillaMatcherModal: React.FC<AiVillaMatcherModalProps> = ({
  isOpen,
  onClose,
  onSelectProjectByName,
}) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  // Form State
  const [objective, setObjective] = useState<string>('capital_growth');
  const [budgetUSD, setBudgetUSD] = useState<number>(650000);
  const [bedrooms, setBedrooms] = useState<string>('3-4 Bedrooms');
  const [lifestylePreference, setLifestylePreference] = useState<string>('marina_waterfront');
  const [originCountry, setOriginCountry] = useState<string>('France');

  if (!isOpen) return null;

  const handleSubmit = async () => {
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch('/api/ai/match-villa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          objective,
          budgetUSD,
          bedrooms,
          lifestylePreference,
          originCountry,
        }),
      });

      const data = await res.json();
      setResult(data.analysis || JSON.stringify(data.recommendation, null, 2));
      setStep(4); // Show results view
    } catch (err) {
      console.error('Match error:', err);
      setResult("We recommend Cap Marina - Canal Villa Collection as your primary match, qualifying you for permanent Mauritian residency, 15% flat tax, and direct water canal frontage.");
      setStep(4);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setStep(1);
    setResult(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className="bg-[#0D141F] border border-[#C8A97E]/40 rounded-3xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#C8A97E]/20 bg-[#121A26] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#C8A97E] to-[#E6CDA7] text-[#0B111A] flex items-center justify-center font-bold">
              <Compass className="w-5 h-5 text-[#0B111A]" />
            </div>
            <div>
              <h3 className="font-cinzel text-base sm:text-lg font-bold text-[#F4EFE6]">
                AI Property &amp; Yield Matcher
              </h3>
              <p className="text-xs text-[#94A3B8]">
                Bespoke villa selection, projected ROI &amp; residency roadmap
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#94A3B8] hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 luxury-scrollbar bg-[#0B111A]">
          {step < 4 && (
            <div className="mb-6 flex items-center justify-between text-xs text-[#C8A97E] border-b border-white/5 pb-3">
              <span>Step {step} of 3</span>
              <div className="flex gap-1.5">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`h-1.5 rounded-full transition-all ${
                      step >= s ? 'w-6 bg-[#C8A97E]' : 'w-2 bg-gray-700'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* STEP 1: OBJECTIVE & ORIGIN */}
          {step === 1 && (
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-[#BAC5D1] mb-2">
                  What is your primary investment objective?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { id: 'capital_growth', label: 'High Rental Yield & Capital Growth', desc: 'Managed by Evaco turnkey hotel pool' },
                    { id: 'permanent_residency', label: 'Permanent Mauritian Residency', desc: 'Foreign freehold permit >= $375k USD' },
                    { id: 'lifestyle_vacation', label: 'Lifestyle & Tropical Vacation Home', desc: 'Personal year-round private haven' },
                    { id: 'retirement', label: 'Luxury Retirement Haven', desc: 'Healthcare, wellness & senior concierge' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setObjective(item.id)}
                      className={`p-4 rounded-xl text-left border transition-all ${
                        objective === item.id
                          ? 'border-[#C8A97E] bg-[#C8A97E]/15 text-[#F4EFE6]'
                          : 'border-white/10 bg-[#121A26] text-[#A0AEC0] hover:border-white/20'
                      }`}
                    >
                      <div className="font-semibold text-xs text-[#F1EFEA] mb-1">{item.label}</div>
                      <div className="text-[11px] text-[#8E9CAE]">{item.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-[#BAC5D1] mb-2">
                  Your Country of Tax Residence:
                </label>
                <select
                  value={originCountry}
                  onChange={(e) => setOriginCountry(e.target.value)}
                  className="w-full bg-[#121A26] border border-[#C8A97E]/30 rounded-xl px-4 py-3 text-xs text-[#F1EFEA] focus:outline-none focus:border-[#C8A97E]"
                >
                  <option value="France">France (30%+ bracket / IFI wealth tax)</option>
                  <option value="United Kingdom">United Kingdom (HMRC inheritance &amp; CGT)</option>
                  <option value="South Africa">South Africa (SARS offshore diversification)</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Germany">Germany</option>
                  <option value="United Arab Emirates">United Arab Emirates</option>
                  <option value="United States">United States</option>
                  <option value="International">Other International Territory</option>
                </select>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  className="luxury-btn-primary group cursor-pointer flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase"
                >
                  <span>Next: Budget &amp; Space</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: BUDGET & BEDROOMS */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold tracking-wider uppercase text-[#BAC5D1]">
                    Target Acquisition Budget (USD):
                  </label>
                  <span className="font-cinzel text-base font-bold text-[#C8A97E]">
                    ${budgetUSD.toLocaleString()} USD
                  </span>
                </div>
                <input
                  type="range"
                  min="380000"
                  max="2000000"
                  step="25000"
                  value={budgetUSD}
                  onChange={(e) => setBudgetUSD(Number(e.target.value))}
                  className="w-full accent-[#C8A97E] h-2 bg-[#16202D] rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#64748B] mt-1">
                  <span>$380,000 (Residency threshold)</span>
                  <span>$1,000,000</span>
                  <span>$2,000,000+</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-[#BAC5D1] mb-2">
                  Preferred Bedroom Configuration:
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {['1-2 Suites', '3-4 Bedrooms', '5+ Bedrooms / Estate'].map((b) => (
                    <button
                      key={b}
                      onClick={() => setBedrooms(b)}
                      className={`py-3 px-3 rounded-xl text-center border text-xs font-semibold transition-all duration-200 cursor-pointer hover:-translate-y-0.5 ${
                        bedrooms === b
                          ? 'border-[#C8A97E] bg-[#C8A97E]/20 text-[#F4EFE6] font-bold shadow-md shadow-[#C8A97E]/10'
                          : 'border-white/10 bg-[#121A26] text-[#A0AEC0] hover:border-[#C8A97E]/40 hover:text-white'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-between items-center">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs text-[#94A3B8] hover:text-[#C8A97E] transition-colors cursor-pointer"
                >
                  &larr; Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="luxury-btn-primary group cursor-pointer flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase"
                >
                  <span>Next: Lifestyle Archetype</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: LIFESTYLE & EXECUTION */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-[#BAC5D1] mb-3">
                  Preferred Architectural Archetype &amp; Lifestyle:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { id: 'marina_waterfront', label: 'Cap Marina Water Village', desc: '2km navigable freshwater canal, kayaking from villa, village center' },
                    { id: 'high_tech_private', label: 'Secret Private Villa Resort', desc: 'World-first retractable glass roof, heated pool, sauna & total privacy' },
                    { id: 'bioclimatic_eco', label: 'Nautica Bioclimatic Villas', desc: 'Full solar photovoltaic autonomy, natural ventilation & tropical flora' },
                    { id: 'mediterranean_island', label: 'Secret Šolta - Adriatic Riviera', desc: 'Croatian island retreat, private yacht moorings, European EU asset' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setLifestylePreference(item.id)}
                      className={`p-4 rounded-xl text-left border transition-all duration-200 cursor-pointer hover:-translate-y-0.5 ${
                        lifestylePreference === item.id
                          ? 'border-[#C8A97E] bg-[#C8A97E]/20 text-[#F4EFE6] font-bold shadow-md shadow-[#C8A97E]/10'
                          : 'border-white/10 bg-[#121A26] text-[#A0AEC0] hover:border-[#C8A97E]/40 hover:text-white'
                      }`}
                    >
                      <div className="font-semibold text-xs text-[#F1EFEA] mb-1">{item.label}</div>
                      <div className="text-[11px] text-[#8E9CAE]">{item.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-between items-center">
                <button
                  onClick={() => setStep(2)}
                  className="text-xs text-[#94A3B8] hover:text-[#C8A97E] transition-colors cursor-pointer"
                >
                  &larr; Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="luxury-btn-primary group cursor-pointer flex items-center gap-2 px-7 py-3 rounded-full text-xs font-bold tracking-wider uppercase shadow-lg shadow-[#C8A97E]/30"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Generating Match...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                      <span>Analyze &amp; Match My Villa</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: RESULTS DISPLAY */}
          {step === 4 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#C8A97E]/20">
                <div className="flex items-center gap-2 text-[#C8A97E]">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="font-cinzel text-base font-bold text-[#F4EFE6]">
                    Bespoke Investment Recommendation
                  </span>
                </div>
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1 text-xs text-[#94A3B8] hover:text-[#C8A97E] transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Start Over</span>
                </button>
              </div>

              {/* Formatted Output Area */}
              <div className="bg-[#121A26] border border-[#C8A97E]/30 rounded-2xl p-5 text-xs sm:text-sm text-[#D3D8DE] leading-relaxed whitespace-pre-line shadow-inner">
                {result}
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => {
                    onClose();
                    onSelectProjectByName('Cap Marina');
                  }}
                  className="luxury-btn-primary group cursor-pointer flex-1 py-3.5 rounded-xl text-xs font-semibold tracking-wider uppercase text-center"
                >
                  Explore Cap Marina Dossier
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onSelectProjectByName('Secret Private Villa Resort');
                  }}
                  className="luxury-btn-secondary group cursor-pointer flex-1 py-3.5 rounded-xl text-xs font-semibold tracking-wider uppercase text-center"
                >
                  Explore Secret Villas Dossier
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
