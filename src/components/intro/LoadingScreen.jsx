import React, { useEffect, useState } from 'react';

/**
 * LoadingScreen.jsx
 * Royal palace themed loading screen shown for ~3.5 seconds before the intro video.
 * Features: animated lotus bloom, gold progress bar, animated Sanskrit blessing reveal.
 */
export function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const DURATION_MS = 3500;

  useEffect(() => {
    const startTime = Date.now();
    let raf;

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / DURATION_MS) * 100, 100);
      setProgress(pct);

      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        // Begin fade-out
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 600);
        }, 200);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-palace-dark transition-opacity duration-600 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      role="status"
      aria-label="Loading Wedding Invitation"
    >
      {/* Deep palace ambient */}
      <div className="absolute inset-0 bg-gradient-to-b from-palace-deep via-[#071510] to-palace-dark" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-emerald-deep/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 jali-watermark opacity-[0.08] pointer-events-none" />

      {/* Corner accents */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gold/40 rounded-tl-sm" />
      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold/40 rounded-tr-sm" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gold/40 rounded-bl-sm" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gold/40 rounded-br-sm" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8 px-6 text-center">

        {/* Animated Lotus SVG */}
        <div className="relative flex items-center justify-center">
          {/* Outer rotating ring */}
          <svg
            className="absolute w-32 h-32 sm:w-40 sm:h-40 animate-spin"
            style={{ animationDuration: '12s' }}
            viewBox="0 0 160 160"
            fill="none"
          >
            <circle cx="80" cy="80" r="74" stroke="url(#loadRingGrad)" strokeWidth="1" strokeDasharray="6 8" />
            <defs>
              <linearGradient id="loadRingGrad" x1="0" y1="0" x2="160" y2="160" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#C6A66B" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#DFC48E" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#C6A66B" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>

          {/* Inner slow counter-rotate */}
          <svg
            className="absolute w-24 h-24 sm:w-32 sm:h-32 animate-spin"
            style={{ animationDuration: '20s', animationDirection: 'reverse' }}
            viewBox="0 0 120 120"
            fill="none"
          >
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <circle
                key={i}
                cx={60 + 48 * Math.cos((angle * Math.PI) / 180)}
                cy={60 + 48 * Math.sin((angle * Math.PI) / 180)}
                r={i % 2 === 0 ? 2 : 1.2}
                fill="#C6A66B"
                opacity={i % 2 === 0 ? 0.8 : 0.4}
              />
            ))}
          </svg>

          {/* Lotus center */}
          <svg viewBox="0 0 80 80" fill="none" className="relative w-16 h-16 sm:w-20 sm:h-20 drop-shadow-[0_0_16px_rgba(198,166,107,0.7)]">
            {/* Petals */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <ellipse
                key={i}
                cx={40 + 18 * Math.cos(((angle - 90) * Math.PI) / 180)}
                cy={40 + 18 * Math.sin(((angle - 90) * Math.PI) / 180)}
                rx="7"
                ry="12"
                transform={`rotate(${angle}, ${40 + 18 * Math.cos(((angle - 90) * Math.PI) / 180)}, ${40 + 18 * Math.sin(((angle - 90) * Math.PI) / 180)})`}
                fill={i % 2 === 0 ? '#C6A66B' : '#DFC48E'}
                opacity={i % 2 === 0 ? 0.9 : 0.6}
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.15}s`, animationDuration: '3s' }}
              />
            ))}
            {/* Center */}
            <circle cx="40" cy="40" r="10" fill="#DFC48E" />
            <circle cx="40" cy="40" r="6" fill="#C6A66B" />
            <circle cx="40" cy="40" r="3" fill="#fff9e6" />
          </svg>
        </div>

        {/* Title text */}
        <div className="flex flex-col items-center gap-1.5">
          <p className="font-serif text-[11px] sm:text-xs tracking-[0.3em] text-gold/70 uppercase animate-pulse">
            &#x0964;&#x0964; &#x0936;&#x094D;&#x0930;&#x0940; &#x0917;&#x0923;&#x0947;&#x0936;&#x093E;&#x092F; &#x0928;&#x092E;&#x0903; &#x0964;&#x0964;
          </p>

          <div className="flex items-center gap-3 my-1">
            <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-gold/50" />
            <div className="w-1 h-1 rotate-45 bg-gold/60" />
            <div className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-gold/50" />
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-normal tracking-wide text-gold-foil drop-shadow-[0_0_20px_rgba(198,166,107,0.6)] leading-tight">
            Vinay &amp; Kishma
          </h1>

          <p className="font-caps text-[10px] sm:text-xs tracking-[0.2em] text-gold/60 uppercase mt-1">
            Wedding Invitation &bull; 25 October 2026
          </p>
        </div>

        {/* Gold progress bar */}
        <div className="w-48 sm:w-64 flex flex-col items-center gap-2">
          {/* Bar track */}
          <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-gold/60 via-gold-champagne to-gold shadow-[0_0_8px_rgba(198,166,107,0.8)] transition-none"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Dot progress indicators */}
          <div className="flex items-center gap-2">
            {[0, 25, 50, 75, 100].map((milestone) => (
              <div
                key={milestone}
                className={`rounded-full transition-all duration-500 ${
                  progress >= milestone
                    ? 'w-2 h-2 bg-gold shadow-[0_0_6px_rgba(198,166,107,0.9)]'
                    : 'w-1.5 h-1.5 bg-white/20'
                }`}
              />
            ))}
          </div>

          <p className="font-caps text-[9px] sm:text-[10px] tracking-[0.2em] text-gold/40 uppercase">
            Preparing your invitation...
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
