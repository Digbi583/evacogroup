import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ClustersSection } from './components/ClustersSection';
import { ProjectsPortfolio } from './components/ProjectsPortfolio';
import { WorldwideSection } from './components/WorldwideSection';
import { LeisureSection } from './components/LeisureSection';
import { CelebritiesSection } from './components/CelebritiesSection';
import { MediaShowcase } from './components/MediaShowcase';
import { AboutGroupSection } from './components/AboutGroupSection';
import { ContactFooter } from './components/ContactFooter';

import { AiAdvisorModal } from './components/AiAdvisorModal';
import { AiVillaMatcherModal } from './components/AiVillaMatcherModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { VideoCinemaModal } from './components/VideoCinemaModal';

import { PROJECTS } from './data/evacoData';
import { Project } from './types';
import { Sparkles, Compass, MessageSquare } from 'lucide-react';

export default function App() {
  const [currentCurrency, setCurrentCurrency] = useState<string>('USD');
  const [isAdvisorOpen, setIsAdvisorOpen] = useState<boolean>(false);
  const [isMatcherOpen, setIsMatcherOpen] = useState<boolean>(false);
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState<string>('hero');

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProjectByName = (name: string) => {
    const found = PROJECTS.find((p) => p.name.toLowerCase().includes(name.toLowerCase()));
    if (found) {
      setSelectedProject(found);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B111A] text-[#F1EFEA] font-sans selection:bg-[#C8A97E] selection:text-[#0B111A]">
      {/* Top Luxury Navigation Header */}
      <Navbar
        currentCurrency={currentCurrency}
        onCurrencyChange={setCurrentCurrency}
        onOpenAdvisor={() => setIsAdvisorOpen(true)}
        onOpenMatcher={() => setIsMatcherOpen(true)}
        onOpenVideo={(videoId) => setSelectedVideoId(videoId)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection
          onOpenAdvisor={() => setIsAdvisorOpen(true)}
          onOpenVideo={(videoId) => setSelectedVideoId(videoId)}
          onExplorePortfolio={() => handleNavigate('portfolio')}
          onOpenMatcher={() => setIsMatcherOpen(true)}
        />

        {/* 2. The 4 Core Pillars: Property, Services, Worldwide, Leisure */}
        <ClustersSection
          onOpenAdvisor={() => setIsAdvisorOpen(true)}
        />

        {/* 3. Real Estate Portfolio: Cap Marina, Secret Villas, Nautica, CDL, etc. */}
        <ProjectsPortfolio
          currentCurrency={currentCurrency}
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenVideo={(videoId) => setSelectedVideoId(videoId)}
          onOpenMatcher={() => setIsMatcherOpen(true)}
        />

        {/* 4. Worldwide: Secret Šolta Croatia & Secret Hotel Management */}
        <WorldwideSection
          onOpenAdvisor={() => setIsAdvisorOpen(true)}
          onOpenVideo={(videoId) => setSelectedVideoId(videoId)}
        />

        {/* 5. Leisure: La Plage Trou-aux-Biches & Jaguar Aviation Restaurant */}
        <LeisureSection
          onOpenVideo={(videoId) => setSelectedVideoId(videoId)}
          onOpenAdvisor={() => setIsAdvisorOpen(true)}
        />

        {/* 6. Celebrities: Jean-Paul Belmondo, Franck Dubosc, etc. */}
        <CelebritiesSection />

        {/* 7. Cinema & Video Media Archive (All 9 Videos) */}
        <MediaShowcase
          onOpenVideo={(videoId) => setSelectedVideoId(videoId)}
        />

        {/* 8. The Group: Arnaud Mayer, SEM Listing, Evaco Foundation */}
        <AboutGroupSection />
      </main>

      {/* Footer */}
      <ContactFooter
        onOpenAdvisor={() => setIsAdvisorOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Floating AI Concierge Trigger (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        <button
          id="floating-ai-advisor-btn"
          onClick={() => setIsAdvisorOpen(true)}
          className="luxury-btn-primary group cursor-pointer flex items-center gap-2.5 px-5 py-3 rounded-full text-xs font-bold tracking-wider uppercase shadow-[0_8px_30px_rgba(200,169,126,0.35)] hover:shadow-[0_12px_35px_rgba(200,169,126,0.55)] border border-white/20"
        >
          <Sparkles className="w-4 h-4 text-[#0B111A] transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110" />
          <span className="hidden sm:inline">Evaco AI Concierge</span>
        </button>
      </div>

      {/* MODALS */}
      {/* 1. AI Wealth & Property Advisor Modal */}
      <AiAdvisorModal
        isOpen={isAdvisorOpen}
        onClose={() => setIsAdvisorOpen(false)}
        onSelectProjectByName={handleSelectProjectByName}
      />

      {/* 2. AI Villa Matcher Modal */}
      <AiVillaMatcherModal
        isOpen={isMatcherOpen}
        onClose={() => setIsMatcherOpen(false)}
        onSelectProjectByName={handleSelectProjectByName}
      />

      {/* 3. Project Detail & Private Dossier Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        currentCurrency={currentCurrency}
        onOpenVideo={(videoId) => setSelectedVideoId(videoId)}
        onOpenAdvisor={() => {
          setSelectedProject(null);
          setIsAdvisorOpen(true);
        }}
      />

      {/* 4. Fullscreen Video Cinema Modal */}
      <VideoCinemaModal
        videoId={selectedVideoId}
        isOpen={Boolean(selectedVideoId)}
        onClose={() => setSelectedVideoId(null)}
        onSelectVideo={(id) => setSelectedVideoId(id)}
      />
    </div>
  );
}
