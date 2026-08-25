import React, { useState, useEffect, useRef } from 'react';
import { LotusMotif } from '../decorative/LotusMotif';
import { PeacockMotif } from '../decorative/PeacockMotif';

/**
 * Intro.jsx: Fullscreen Cinematic Royal Indian Palace Opening Experience
 * Supports video playback with sound toggle, auto-advance, and responsive stationery layout.
 */
export function Intro({
  onComplete,
  videoSrc = '/assets/wedding-intro.mp4',
  autoAdvanceSeconds = null,
}) {
  const [videoAvailable, setVideoAvailable] = useState(Boolean(videoSrc));
  const [isMuted, setIsMuted] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const videoRef = useRef(null);

  const handleProceed = () => {
    if (onComplete) onComplete();
  };

  useEffect(() => {
    if (autoAdvanceSeconds && !videoAvailable) {
      const timer = setTimeout(() => {
        handleProceed();
      }, autoAdvanceSeconds * 1000);
      return () => clearTimeout(timer);
    }
  }, [autoAdvanceSeconds, videoAvailable]);

  // Attempt video play on mount
  useEffect(() => {
    if (videoRef.current && videoAvailable) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback
        console.log('Video autoplay requires interaction or muted state');
      });
    }
  }, [videoAvailable]);

  return (
    <div
      className={`fixed inset-0 z-50 w-full h-[100dvh] bg-palace-dark overflow-y-auto sm:overflow-hidden flex flex-col justify-between items-center py-2 sm:py-3 select-none transition-opacity duration-700 ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      role="region"
      aria-label="Wedding Invitation Cinematic Intro"
    >
      {/* ── CINEMATIC FULLSCREEN VIDEO BACKGROUND ── */}
      {videoAvailable && videoSrc ? (
        <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            playsInline
            muted={isMuted}
            onEnded={handleProceed}
            onError={() => setVideoAvailable(false)}
            className="w-full h-full object-cover opacity-75"
          />
          {/* Palace vignette gradient overlay for typography readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-palace-dark/95 via-palace-dark/50 to-palace-dark/80 pointer-events-none" />
        </div>
      ) : (
        /* Fallback Ambient Background */
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-palace-deep via-emerald-night to-palace-dark z-0" />
          <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[500px] bg-gradient-to-b from-gold-champagne/15 via-gold/5 to-transparent rounded-full blur-3xl animate-pulse duration-[8000ms]" />
            <div className="absolute bottom-0 left-0 w-[350px] sm:w-[550px] h-[400px] bg-peacock-teal/10 rounded-full blur-3xl" />
            <div className="absolute top-1/3 right-0 w-[350px] sm:w-[500px] h-[400px] bg-emerald-deep/15 rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent opacity-60 mix-blend-overlay animate-float-subtle" />
          </div>
        </>
      )}

      {/* Repeating Royal Jali Screen */}
      <div className="absolute inset-0 jali-watermark opacity-[0.16] pointer-events-none z-[2]" />

      {/* Decorative Outer Stationery Margin */}
      <div className="absolute inset-2 sm:inset-4 md:inset-6 border border-gold/30 rounded-xl pointer-events-none z-10 flex flex-col justify-between">
        <div className="absolute inset-1 sm:inset-1.5 border border-gold/15 rounded-lg" />
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

      {/* ── Top Controls: Sound Toggle & Quick Skip Button ── */}
      <div className="absolute top-3 right-3 sm:top-4 sm:right-6 z-50 flex items-center gap-2">
        {videoAvailable && videoSrc && (
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="group inline-flex items-center gap-1.5 px-3 py-1 sm:py-1.5 rounded-full border border-gold/60 bg-emerald-deep/90 hover:bg-gold hover:text-emerald-night text-gold-champagne backdrop-blur-md transition-all duration-300 shadow-md text-[10px] sm:text-xs font-caps tracking-royal font-semibold uppercase cursor-pointer active:scale-95"
            aria-label={isMuted ? "Unmute Video Sound" : "Mute Video Sound"}
          >
            <span>{isMuted ? "🔇 Unmute" : "🔊 Sound On"}</span>
          </button>
        )}
        <button
          onClick={handleProceed}
          className="group inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-gold/70 bg-emerald-deep/90 hover:bg-gold hover:text-emerald-night text-gold-champagne backdrop-blur-md transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.5)] text-[10px] sm:text-xs font-caps tracking-royal font-semibold uppercase cursor-pointer active:scale-95"
          aria-label="Quick Skip Intro"
        >
          <span>Skip Intro</span>
          <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 text-gold group-hover:text-emerald-night group-hover:translate-x-0.5 transition-all">
            <path d="M6 3 L11 8 L6 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* ── TOP HEADER: Sacred Invocation ── */}
      <header className="relative z-20 pt-1 sm:pt-2 px-4 text-center w-full max-w-lg mx-auto flex-shrink-0">
        <div className="inline-flex flex-col items-center">
          <p className="font-serif text-[11px] sm:text-xs tracking-royal uppercase text-gold font-medium">
            ॥ श्री गणेशाय नमः ॥
          </p>
          <div className="flex items-center gap-2 mt-0.5">
            <div className="h-[0.5px] w-6 sm:w-10 bg-gold/40" />
            <span className="font-caps text-[8px] sm:text-[9px] tracking-monumental text-ivory/70 uppercase">
              Shree Ganeshaya Namaha
            </span>
            <div className="h-[0.5px] w-6 sm:w-10 bg-gold/40" />
          </div>
        </div>
      </header>

      {/* ── CENTERPIECE: Palace Arch, Couple Names & Invitation ── */}
      <main className="relative z-20 w-full max-w-lg px-3 sm:px-4 my-auto flex flex-col items-center justify-center flex-1 min-h-0 py-1">
        <div className="relative w-full max-w-md mx-auto flex flex-col items-center">
          
          {/* Arch Crown Pinnacle Finial & Lotus Crest */}
          <div className="relative -mb-2 z-30 flex flex-col items-center drop-shadow-[0_2px_10px_rgba(198,166,107,0.5)]">
            <LotusMotif variant="crest" size="md" className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>

          {/* Palace Arch Top Outline */}
          <div className="w-full max-w-[280px] sm:max-w-[340px] px-1">
            <svg
              viewBox="0 0 320 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto text-gold"
            >
              <path
                d="M10 75 C10 35 45 35 70 25 C95 15 125 28 145 12 C152 6 156 2 160 0 C164 2 168 6 175 12 C195 28 225 15 250 25 C275 35 310 35 310 75"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M20 75 C20 42 50 42 74 32 C96 24 124 34 144 20 C151 15 155 9 160 6 C165 9 169 15 176 20 C196 34 224 24 246 32 C270 42 300 42 300 75"
                stroke="currentColor"
                strokeWidth="1.1"
                strokeDasharray="2 2"
                opacity="0.7"
              />
              <circle cx="160" cy="6" r="2.5" fill="#DFC48E" />
              <circle cx="145" cy="20" r="1.5" fill="#C6A66B" />
              <circle cx="175" cy="20" r="1.5" fill="#C6A66B" />
              <circle cx="74" cy="32" r="1.5" fill="#C6A66B" />
              <circle cx="246" cy="32" r="1.5" fill="#C6A66B" />
            </svg>
          </div>

          {/* Architectural Content Card */}
          <div className="w-full bg-gradient-to-b from-emerald-deep/75 via-palace-green/55 to-emerald-night/85 backdrop-blur-md border border-gold/40 rounded-2xl px-4 py-3 sm:px-6 sm:py-4 text-center shadow-2xl relative">
            <div className="absolute inset-1.5 border border-gold/15 rounded-xl pointer-events-none" />

            {/* Top Label: WEDDING INVITATION */}
            <div className="mb-1 sm:mb-1.5">
              <span className="font-caps text-[9px] sm:text-[10px] tracking-monumental text-gold-light uppercase font-semibold block">
                Wedding Invitation
              </span>
              <div className="flex items-center justify-center gap-1.5 mt-0.5">
                <div className="h-[0.5px] w-6 bg-gradient-to-r from-transparent to-gold/60" />
                <div className="w-1 h-1 rotate-45 bg-gold border border-gold-deep" />
                <div className="h-[0.5px] w-6 bg-gradient-to-l from-transparent to-gold/60" />
              </div>
            </div>

            {/* Couple's Names */}
            <div className="py-0.5 sm:py-1 space-y-0.5">
              <h1 className="font-display text-2xl sm:text-4xl md:text-5xl font-normal tracking-wide text-gold-foil drop-shadow-md leading-tight">
                Vinay
              </h1>

              <div className="flex items-center justify-center my-0.5 sm:my-1">
                <div className="h-[0.5px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-gold/60" />
                <span className="font-script text-xl sm:text-3xl text-lotus-blush mx-2 italic leading-none drop-shadow-sm">
                  &
                </span>
                <div className="h-[0.5px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-gold/60" />
              </div>

              <h1 className="font-display text-2xl sm:text-4xl md:text-5xl font-normal tracking-wide text-gold-foil drop-shadow-md leading-tight">
                Kishma
              </h1>
            </div>

            {/* Peacock Feather Motif */}
            <div className="my-1 sm:my-1.5 flex justify-center opacity-90">
              <PeacockMotif variant="feather-crown" size="sm" className="w-10 h-6 sm:w-12 sm:h-7 text-gold drop-shadow-sm" />
            </div>

            {/* Date Presentation */}
            <div className="mt-1 inline-block px-3.5 py-0.5 sm:py-1 rounded-full border border-gold/40 bg-palace-deep/50 backdrop-blur-sm">
              <p className="font-caps text-[10px] sm:text-xs font-semibold tracking-royal text-gold-bright uppercase">
                25 October 2026
              </p>
            </div>

            {/* Subtitle / Blessing Quote */}
            <div className="mt-2 pt-1.5 border-t border-gold/20">
              <p className="font-script text-base sm:text-lg text-lotus-blush/90 leading-tight">
                "With Immense Love and Gratitude"
              </p>
              <p className="font-serif italic text-[10px] sm:text-[11px] text-ivory/70 mt-0.5 max-w-xs mx-auto">
                Request the honour of your esteemed presence to grace this sacred union.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* ── BOTTOM CONTROLS: "Skip Intro" Button ── */}
      <footer className="relative z-30 pt-1 pb-2 sm:pb-3 px-4 w-full flex flex-col items-center flex-shrink-0">
        <button
          onClick={handleProceed}
          className="group relative inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-2 sm:py-2.5 rounded-full border-2 border-gold bg-gradient-to-r from-emerald-deep via-palace-green to-emerald-night hover:from-gold hover:to-gold-deep text-gold-light hover:text-emerald-night backdrop-blur-md transition-all duration-300 shadow-[0_0_20px_rgba(198,166,107,0.45)] hover:shadow-[0_0_28px_rgba(198,166,107,0.85)] active:scale-95 min-h-[40px] cursor-pointer"
          aria-label="Skip Introduction and Enter Invitation"
        >
          <span className="font-caps text-xs sm:text-sm tracking-royal uppercase font-bold text-gold-champagne group-hover:text-palace-dark">
            Skip Intro • Enter Invitation
          </span>
          <svg
            viewBox="0 0 20 20"
            fill="none"
            className="w-4 h-4 text-gold group-hover:text-palace-dark group-hover:translate-x-1 transition-transform duration-300"
          >
            <path d="M4 10 H14 M10 6 L14 10 L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <span className="text-[8px] sm:text-[9px] font-caps tracking-monumental text-gold/70 uppercase mt-1">
          Palace Experience • Click to Enter
        </span>
      </footer>
    </div>
  );
}

export default Intro;
