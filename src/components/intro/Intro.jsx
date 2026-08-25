import React, { useState, useEffect } from 'react';
import { LotusMotif } from '../decorative/LotusMotif';
import { PeacockMotif } from '../decorative/PeacockMotif';

/**
 * Intro.jsx: Fullscreen Cinematic Royal Indian Palace Opening Experience
 * 
 * Video-Ready:
 * When `/assets/wedding-intro.mp4` is placed in public/assets, set videoSrc to `/assets/wedding-intro.mp4`.
 * Until then, it renders a high-end cinematic visual placeholder without broken elements.
 */
export function Intro({
  onComplete,
  videoSrc = null, // Set to '/assets/wedding-intro.mp4' when video is added
  autoAdvanceSeconds = null, // Optional auto-advance timer if video isn't present
}) {
  const [videoAvailable, setVideoAvailable] = useState(Boolean(videoSrc));
  const [isFadingOut, setIsFadingOut] = useState(false);

  // Handle skip or completion: notify parent immediately to trigger curtain closing
  const handleProceed = () => {
    if (onComplete) onComplete();
  };

  // Optional auto-timer if requested
  useEffect(() => {
    if (autoAdvanceSeconds && !videoAvailable) {
      const timer = setTimeout(() => {
        handleProceed();
      }, autoAdvanceSeconds * 1000);
      return () => clearTimeout(timer);
    }
  }, [autoAdvanceSeconds, videoAvailable]);

  return (
    <div
      className={`fixed inset-0 z-50 w-full h-[100dvh] bg-palace-dark overflow-hidden flex flex-col justify-between items-center transition-opacity duration-700 select-none ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      role="region"
      aria-label="Wedding Invitation Cinematic Intro"
    >
      {/* ========================================================================= */}
      {/* LAYER 0 & 1: Deep Emerald Palace Background & Radial Atmosphere */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 bg-gradient-to-b from-palace-deep via-emerald-night to-palace-dark z-0" />

      {/* Ambient Moving Palace Light Ray / Atmospheric Glow */}
      <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden">
        {/* Top Center Golden Arch Glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[500px] bg-gradient-to-b from-gold-champagne/15 via-gold/5 to-transparent rounded-full blur-3xl animate-pulse duration-[8000ms]" />
        
        {/* Subtle Peacock Teal Atmospheric Mist */}
        <div className="absolute bottom-0 left-0 w-[350px] sm:w-[550px] h-[400px] bg-peacock-teal/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-[350px] sm:w-[500px] h-[400px] bg-emerald-deep/15 rounded-full blur-3xl" />

        {/* Diagonal Soft Palace Light Sheen (Cinematic moving beam) */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent opacity-60 mix-blend-overlay animate-float-subtle" />
      </div>

      {/* Repeating Subtle Royal Jali Screen Pattern */}
      <div className="absolute inset-0 jali-watermark opacity-[0.22] pointer-events-none z-[2]" />

      {/* ========================================================================= */}
      {/* LAYER 2: Video Layer OR Cinematic Ambient Placeholder */}
      {/* ========================================================================= */}
      {videoAvailable && videoSrc ? (
        <div className="absolute inset-0 z-[5] flex items-center justify-center overflow-hidden">
          <video
            src={videoSrc}
            autoPlay
            playsInline
            muted
            onEnded={handleProceed}
            onError={() => setVideoAvailable(false)}
            className="w-full h-full object-cover opacity-80 mix-blend-screen"
          />
          {/* Subtle dark overlay for typography contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-palace-deep/90 via-palace-dark/40 to-palace-deep/80" />
        </div>
      ) : (
        /* Video-Ready Elegant Visual Placeholder (No broken video elements) */
        <div className="absolute inset-0 z-[3] pointer-events-none flex items-center justify-center overflow-hidden">
          {/* Faint Architectural Background Watermark */}
          <div className="w-[120%] h-[120%] max-w-4xl opacity-[0.07] flex items-center justify-center">
            <svg viewBox="0 0 500 500" fill="none" className="w-full h-full text-gold">
              <circle cx="250" cy="250" r="230" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="250" cy="250" r="180" stroke="currentColor" strokeWidth="0.8" />
              <path d="M250 20 L250 480 M20 250 L480 250" stroke="currentColor" strokeWidth="0.5" />
              <path d="M87 87 L413 413 M87 413 L413 87" stroke="currentColor" strokeWidth="0.5" />
            </svg>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* LAYER 3: Outer Palace Architectural Frame & Stationery Tramlines */}
      {/* ========================================================================= */}
      <div className="absolute inset-2 sm:inset-5 md:inset-8 border border-gold/30 rounded-xl pointer-events-none z-10 flex flex-col justify-between">
        {/* Inner Dual Gold Hairline Margin */}
        <div className="absolute inset-1 sm:inset-2 border border-gold/15 rounded-lg" />

        {/* Four Corner Lotus Floral Brackets */}
        <div className="absolute top-2 left-2 text-gold/60">
          <LotusMotif variant="corner" size="sm" />
        </div>
        <div className="absolute top-2 right-2 text-gold/60 -scale-x-100">
          <LotusMotif variant="corner" size="sm" />
        </div>
        <div className="absolute bottom-2 left-2 text-gold/60 -scale-y-100">
          <LotusMotif variant="corner" size="sm" />
        </div>
        <div className="absolute bottom-2 right-2 text-gold/60 -scale-x-100 -scale-y-100">
          <LotusMotif variant="corner" size="sm" />
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TOP HEADER: Sacred Invocation & Auspicious Blessing */}
      {/* ========================================================================= */}
      <header className="relative z-20 pt-6 sm:pt-10 px-4 text-center w-full max-w-lg mx-auto">
        <div className="inline-flex flex-col items-center">
          {/* Auspicious Sanskrit Header */}
          <p className="font-serif text-[11px] sm:text-xs tracking-royal uppercase text-gold font-medium">
            ॥ श्री गणेशाय नमः ॥
          </p>
          <div className="flex items-center gap-2 mt-1">
            <div className="h-[0.5px] w-6 sm:w-10 bg-gold/40" />
            <span className="font-caps text-[8px] sm:text-[9px] tracking-monumental text-ivory/70 uppercase">
              Shree Ganeshaya Namaha
            </span>
            <div className="h-[0.5px] w-6 sm:w-10 bg-gold/40" />
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* CENTERPIECE: Palace Arch, Pillars, Royal Names & Typography */}
      {/* ========================================================================= */}
      <main className="relative z-20 w-full max-w-2xl px-4 sm:px-6 my-auto flex flex-col items-center justify-center">
        {/* Flanking Architectural Subtle Pillars (visible on tablet/desktop) */}
        <div className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center opacity-35 text-gold pointer-events-none">
          <div className="w-5 h-2 border-t border-x border-gold" />
          <div className="w-2.5 h-64 border-x border-gold/40 bg-gold/5" />
          <div className="w-5 h-2 border-b border-x border-gold" />
        </div>
        <div className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center opacity-35 text-gold pointer-events-none">
          <div className="w-5 h-2 border-t border-x border-gold" />
          <div className="w-2.5 h-64 border-x border-gold/40 bg-gold/5" />
          <div className="w-5 h-2 border-b border-x border-gold" />
        </div>

        {/* Central Polylobe Palace Arch SVG Silhouette */}
        <div className="relative w-full max-w-lg mx-auto flex flex-col items-center">
          {/* Arch Crown Pinnacle Finial & Lotus Crest */}
          <div className="relative -mb-3 sm:-mb-4 z-30 flex flex-col items-center drop-shadow-[0_4px_12px_rgba(198,166,107,0.35)]">
            <LotusMotif variant="crest" size="lg" className="drop-shadow-[0_4px_16px_rgba(198,166,107,0.6)]" />
          </div>

          {/* Palace Arch Top Outline */}
          <div className="w-full max-w-sm sm:max-w-md px-2">
            <svg
              viewBox="0 0 320 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto text-gold"
            >
              {/* Outer Cusped Arch */}
              <path
                d="M10 75 C10 35 45 35 70 25 C95 15 125 28 145 12 C152 6 156 2 160 0 C164 2 168 6 175 12 C195 28 225 15 250 25 C275 35 310 35 310 75"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              {/* Inner Parallel Arch Line */}
              <path
                d="M20 75 C20 42 50 42 74 32 C96 24 124 34 144 20 C151 15 155 9 160 6 C165 9 169 15 176 20 C196 34 224 24 246 32 C270 42 300 42 300 75"
                stroke="currentColor"
                strokeWidth="1.1"
                strokeDasharray="2 2"
                opacity="0.7"
              />
              {/* Peak Accent Beads */}
              <circle cx="160" cy="6" r="2.5" fill="#DFC48E" />
              <circle cx="145" cy="20" r="1.5" fill="#C6A66B" />
              <circle cx="175" cy="20" r="1.5" fill="#C6A66B" />
              <circle cx="74" cy="32" r="1.5" fill="#C6A66B" />
              <circle cx="246" cy="32" r="1.5" fill="#C6A66B" />
            </svg>
          </div>

          {/* Architectural Content Card with Glassmorphic Emerald Texture */}
          <div className="w-full bg-gradient-to-b from-emerald-deep/60 via-palace-green/40 to-emerald-night/70 backdrop-blur-sm border border-gold/30 rounded-2xl p-5 sm:p-8 text-center shadow-2xl relative">
            {/* Subtle Inner Gold Hairline */}
            <div className="absolute inset-2 border border-gold/15 rounded-xl pointer-events-none" />

            {/* Top Label: WEDDING INVITATION */}
            <div className="mb-3 sm:mb-4">
              <span className="font-caps text-[10px] sm:text-xs tracking-monumental text-gold-light uppercase font-semibold block">
                Wedding Invitation
              </span>
              <div className="flex items-center justify-center gap-2 mt-1.5">
                <div className="h-[0.5px] w-8 bg-gradient-to-r from-transparent to-gold/60" />
                <div className="w-1.5 h-1.5 rotate-45 bg-gold border border-gold-deep" />
                <div className="h-[0.5px] w-8 bg-gradient-to-l from-transparent to-gold/60" />
              </div>
            </div>

            {/* Couple's Names - The Primary Visual Focus */}
            <div className="py-2 sm:py-3 space-y-1">
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-wide text-gold-foil drop-shadow-md">
                Vinay
              </h1>

              {/* Connecting Ampersand with Subtle Lotus / Peacock Feather Plume */}
              <div className="flex items-center justify-center my-1 sm:my-2">
                <div className="h-[1px] w-10 sm:w-16 bg-gradient-to-r from-transparent to-gold/60" />
                <span className="font-script text-3xl sm:text-4xl text-lotus-blush mx-3 italic leading-none drop-shadow-sm">
                  &
                </span>
                <div className="h-[1px] w-10 sm:w-16 bg-gradient-to-l from-transparent to-gold/60" />
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-wide text-gold-foil drop-shadow-md">
                Kishma
              </h1>
            </div>

            {/* Understated Peacock Feather Filigree Motif */}
            <div className="my-3 flex justify-center opacity-85">
              <PeacockMotif variant="feather-crown" size="md" className="w-16 h-10 text-gold drop-shadow-md" />
            </div>

            {/* Date Presentation */}
            <div className="mt-2 inline-block px-5 py-1.5 rounded-full border border-gold/40 bg-palace-deep/40 backdrop-blur-sm">
              <p className="font-caps text-xs sm:text-sm font-semibold tracking-royal text-gold-bright uppercase">
                25 October 2026
              </p>
            </div>

            {/* Subtitle / Blessing Quote */}
            <div className="mt-4 pt-3 border-t border-gold/20">
              <p className="font-script text-xl sm:text-2xl text-lotus-blush/90 leading-tight">
                "With Immense Love and Gratitude"
              </p>
              <p className="font-serif italic text-[11px] sm:text-xs text-ivory/70 mt-1 max-w-xs mx-auto">
                Request the honour of your esteemed presence to grace this sacred union.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* ========================================================================= */}
      {/* BOTTOM CONTROLS: Luxury Stationery "Skip Intro" Button */}
      {/* ========================================================================= */}
      <footer className="relative z-30 pb-6 sm:pb-8 px-4 w-full flex flex-col items-center">
        <button
          onClick={handleProceed}
          className="group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 rounded-full border border-gold/40 bg-palace-deep/50 hover:bg-gold/15 backdrop-blur-md text-gold-bright hover:text-ivory transition-all duration-300 shadow-lg hover:shadow-gold-glow hover:border-gold active:scale-95 min-h-[44px]"
          aria-label="Skip Introduction and Enter Invitation"
        >
          {/* Subtle Button Hairline Glow */}
          <span className="font-caps text-[11px] sm:text-xs tracking-royal uppercase font-semibold">
            Skip Intro
          </span>
          <svg
            viewBox="0 0 20 20"
            fill="none"
            className="w-3.5 h-3.5 text-gold group-hover:translate-x-1 transition-transform duration-300"
          >
            <path d="M4 10 H14 M10 6 L14 10 L10 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Understated Visual Subtitle */}
        <span className="text-[10px] font-caps tracking-monumental text-gold/40 uppercase mt-2.5">
          Palace Experience • Tap to Enter
        </span>
      </footer>
    </div>
  );
}

export default Intro;
