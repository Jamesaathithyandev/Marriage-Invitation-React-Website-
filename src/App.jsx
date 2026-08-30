import React, { useState, useCallback, useRef } from 'react';

import { Intro } from './components/intro/Intro';
import { LoadingScreen } from './components/intro/LoadingScreen';
import { CurtainTransition } from './components/transition/CurtainTransition';
import { HeroSection } from './components/hero/HeroSection';
import { CoupleSection } from './components/sections/CoupleSection';
import { WeddingMessageSection } from './components/sections/WeddingMessageSection';
import { EventsSection } from './components/sections/EventsSection';
import { CountdownSection } from './components/sections/CountdownSection';
import { CalendarSection } from './components/sections/CalendarSection';
import { RsvpSection } from './components/sections/RsvpSection';
import { LocationSection } from './components/sections/LocationSection';
import { ClosingSection } from './components/sections/ClosingSection';
import { RevealOnScroll } from './components/common/RevealOnScroll';
import { JaliBackground } from './components/decorative/JaliBackground';
import { LotusMotif } from './components/decorative/LotusMotif';
import { OrnamentalDivider } from './components/decorative/OrnamentalDivider';
import { BackgroundMusic } from './components/common/BackgroundMusic';

/**
 * App â€” Royal Wedding Invitation State Machine
 *
 * Two curtain layers:
 *
 * 1. INTRO CURTAIN (stage: 'intro' â†’ 'transition' â†’ 'main')
 *    Theatrical drape opening from the cinematic intro into the wedding invitation.
 *
 * 2. NAVIGATION CURTAIN (navCurtainActive)
 *    Royal drape triggered when the user clicks "Get Directions" or "Add to Google Calendar".
 *    - Curtains close â†’ pause (external URL opens in new tab) â†’ curtains reopen.
 *    - Keeps the user's immersion in the palace experience.
 */
export function App() {
  // â”€â”€ Intro State Machine â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const [stage, setStage] = useState('loading'); // 'loading' | 'intro' | 'transition' | 'main'
  const [revealedMain, setRevealedMain] = useState(false);

  const handleStartTransition = useCallback(() => setStage('transition'), []);
  const handleCurtainMidpoint = useCallback(() => setRevealedMain(true), []);
  const handleCurtainComplete = useCallback(() => setStage('main'), []);
  const handleReplayIntro = useCallback(() => {
    setRevealedMain(false);
    setStage('intro');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // â”€â”€ Navigation Curtain State â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  // Loading screen completes -> go to intro
  const handleLoadingComplete = useCallback(() => {
    if (musicRef.current) musicRef.current.start();
    setStage('intro');
  }, []);

  const [navCurtainActive, setNavCurtainActive] = useState(false);
  const musicRef = useRef(null);
  const pendingNavUrl = useRef(null);

  /**
   * Triggered by LocationSection / CalendarSection when user clicks
   * "Get Directions" or "Add to Google Calendar".
   * Closes the velvet drapes, opens the external URL during the pause,
   * then reopens the drapes â€” preserving the cinematic palace atmosphere.
   */
  const handleExternalNavigate = useCallback((url) => {
    if (navCurtainActive) return; // Debounce: prevent double-trigger
    pendingNavUrl.current = url;
    setNavCurtainActive(true);
  }, [navCurtainActive]);

  /**
   * Called when the navigation curtain is fully CLOSED (midpoint).
   * We open the external URL here â€” during the regal pause while drapes are shut.
   */
  const handleNavCurtainMidpoint = useCallback(() => {
    if (pendingNavUrl.current) {
      window.open(pendingNavUrl.current, '_blank', 'noopener,noreferrer');
    }
  }, []);

  /**
   * Called when the navigation curtain has fully REOPENED.
   * Reset state so it can be triggered again later.
   */
  const handleNavCurtainComplete = useCallback(() => {
    setNavCurtainActive(false);
    pendingNavUrl.current = null;
  }, []);

  return (
    <>
      {/* Music plays across ALL stages - loading, intro, main */}
      <BackgroundMusic ref={musicRef} />
      {/* â”€â”€ 1. CINEMATIC INTRO SCREEN â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      {/* 0. LOADING SCREEN */}
      {stage === 'loading' && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}

      {(stage === 'intro' || (stage === 'transition' && !revealedMain)) && (
        <Intro
          onComplete={handleStartTransition}
          videoSrc={'/assets/wedding-intro.mp4'}
        />
      )}

      {/* â”€â”€ 2. INTRO CURTAIN (Close â†’ Hold â†’ Open) â”€â”€â”€ */}
      {stage === 'transition' && (
        <CurtainTransition
          isActive={true}
          onMidpoint={handleCurtainMidpoint}
          onComplete={handleCurtainComplete}
        />
      )}

      {/* â”€â”€ 3. MAIN WEDDING INVITATION EXPERIENCE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      {(stage === 'main' || (stage === 'transition' && revealedMain)) && (
        <JaliBackground opacity="subtle" showPalaceVignette>

          {/* â”€â”€ NAVIGATION CURTAIN (for Get Directions / Calendar) â”€ */}
          {navCurtainActive && (
            <CurtainTransition
              isActive={true}
              navMode={true}
              onMidpoint={handleNavCurtainMidpoint}
              onComplete={handleNavCurtainComplete}
            />
          )}

          {/* ── Sticky Royal Header with RSVP Action ────────── */}
          <header className="w-full border-b border-gold/45 bg-gradient-to-r from-ivory-light/95 via-ivory/95 to-ivory-light/95 backdrop-blur-md sticky top-0 z-40 shadow-[0_4px_20px_rgba(198,166,107,0.12)]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
              {/* Monogram Brand */}
              <div className="flex items-center gap-2.5">
                <LotusMotif variant="crest" size="sm" className="opacity-95" />
                <div>
                  <span className="font-display text-sm sm:text-base font-bold tracking-wider text-emerald-deep block leading-tight">
                    Vinay <span className="text-gold font-normal">&amp;</span> Kishma
                  </span>
                  <span className="font-caps text-[8px] sm:text-[9px] tracking-monumental text-gold-deep uppercase block font-semibold">
                    24 · 25 · 10 · 2026
                  </span>
                </div>
              </div>

              {/* Elegant Navbar RSVP Prompt & CTA */}
              <div className="flex items-center gap-2 sm:gap-3.5">
                <span className="hidden md:inline font-serif italic text-xs text-palace-green/85">
                  Will you be attending the occasion?
                </span>
                <button
                  onClick={() => {
                    const rsvpEl = document.getElementById('rsvp');
                    if (rsvpEl) {
                      rsvpEl.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="
                    group relative inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl
                    bg-gradient-to-r from-emerald-deep via-palace-green to-emerald-deep
                    border border-gold/70 hover:border-gold
                    shadow-gold-glow hover:shadow-[0_0_16px_rgba(198,166,107,0.4)]
                    hover:scale-[1.02] active:scale-[0.98]
                    transition-all duration-300 cursor-pointer overflow-hidden
                  "
                  aria-label="RSVP for Vinay and Kishma wedding"
                >
                  <span className="text-gold text-xs">✦</span>
                  <span className="font-caps text-[10px] sm:text-xs font-bold tracking-royal text-gold-champagne uppercase drop-shadow-sm whitespace-nowrap">
                    Count Me In
                  </span>
                  <span className="text-gold text-xs">✦</span>
                </button>
              </div>
            </div>
          </header>

          {/* â”€â”€ Main Sections Flow â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
          <main className="w-full flex flex-col items-center">

            {/* 1 â€” Hero Invitation Card */}
            <HeroSection />

            {/* 2 â€” The Couple */}
            <RevealOnScroll className="w-full">
              <CoupleSection />
            </RevealOnScroll>

            {/* 3 â€” Wedding Message */}
            <RevealOnScroll className="w-full">
              <WeddingMessageSection />
            </RevealOnScroll>

            {/* 4 â€” Events Timeline */}
            <RevealOnScroll className="w-full">
              <EventsSection />
            </RevealOnScroll>

            {/* 5 â€” Auspicious Countdown */}
            <RevealOnScroll className="w-full">
              <CountdownSection />
            </RevealOnScroll>

            {/* 6 — Venue & Satellite Map */}
            <RevealOnScroll className="w-full">
              <LocationSection onExternalNavigate={handleExternalNavigate} />
            </RevealOnScroll>

            {/* 7 — Add to Calendar */}
            <RevealOnScroll className="w-full">
              <CalendarSection onExternalNavigate={handleExternalNavigate} />
            </RevealOnScroll>

            {/* 8 — Sacred RSVP & Live Headcount */}
            <RevealOnScroll className="w-full">
              <RsvpSection />
            </RevealOnScroll>

            {/* 9 — Grand Closing */}
            <RevealOnScroll className="w-full">
              <ClosingSection />
            </RevealOnScroll>

          </main>

          {/* â”€â”€ Royal Palace Footer â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
          <footer className="w-full border-t border-gold/30 bg-ivory-dark/60 py-12 px-4 text-center">
            <div className="max-w-md mx-auto space-y-4">
              <LotusMotif variant="crest" size="lg" className="mx-auto opacity-90" />
              <div className="space-y-1">
                <h4 className="font-display text-lg sm:text-xl text-palace-green font-normal tracking-wider">
                  Vinay <span className="font-script text-2xl text-gold-deep">&amp;</span> Kishma
                </h4>
                <p className="font-caps text-[9px] sm:text-[10px] tracking-monumental text-gold-deep uppercase font-semibold">
                  Sunday, 25th October 2026 Â· Bengaluru
                </p>
              </div>
              <div className="flex justify-center">
                <OrnamentalDivider motif="lotus" lineStyle="dual" className="max-w-xs opacity-60" />
              </div>
              <p className="font-serif italic text-xs text-palace-green/60 max-w-xs mx-auto">
                "Two Hearts. Two Traditions. One Beautiful Beginning."
              </p>
              <span className="font-caps text-[8px] tracking-monumental text-palace-green/40 uppercase block pt-2">
                With Immense Love and Gratitude
              </span>
            </div>
          </footer>

        </JaliBackground>
      )}
    </>
  );
}

export default App;


