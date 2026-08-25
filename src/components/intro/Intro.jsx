import React, { useState, useEffect, useRef } from 'react';
import { LotusMotif } from '../decorative/LotusMotif';

/**
 * Intro.jsx: Clean video-box intro screen.
 * Shows video in a centered, framed box with a dark palace background.
 * One skip button at the bottom. Sound toggle inside the video box.
 */
export function Intro({
  onComplete,
  videoSrc = '/assets/wedding-intro.mp4',
}) {
  const [isMuted, setIsMuted] = useState(true);
  const [videoAvailable, setVideoAvailable] = useState(Boolean(videoSrc));
  const videoRef = useRef(null);

  const handleProceed = () => {
    if (onComplete) onComplete();
  };

  // Attempt autoplay on mount (muted so browsers allow it)
  useEffect(() => {
    if (videoRef.current && videoAvailable) {
      videoRef.current.play().catch(() => {});
    }
  }, [videoAvailable]);

  // Sync mute state to video element
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <div
      className="fixed inset-0 z-50 w-full h-[100dvh] bg-palace-dark flex flex-col items-center justify-between py-4 sm:py-6 select-none overflow-hidden"
      role="region"
      aria-label="Wedding Video Intro"
    >
      {/* Palace Dark Ambient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-palace-deep via-emerald-night to-palace-dark z-0" />
      <div className="absolute inset-0 jali-watermark opacity-[0.12] pointer-events-none z-[1]" />

      {/* Corner lotus decorations */}
      <div className="absolute inset-2 sm:inset-4 pointer-events-none z-[2]">
        <div className="absolute top-1 left-1 text-gold/40"><LotusMotif variant="corner" size="sm" /></div>
        <div className="absolute top-1 right-1 text-gold/40 -scale-x-100"><LotusMotif variant="corner" size="sm" /></div>
        <div className="absolute bottom-1 left-1 text-gold/40 -scale-y-100"><LotusMotif variant="corner" size="sm" /></div>
        <div className="absolute bottom-1 right-1 text-gold/40 -scale-x-100 -scale-y-100"><LotusMotif variant="corner" size="sm" /></div>
      </div>

      {/* Top: Sacred Invocation */}
      <div className="relative z-10 text-center flex-shrink-0">
        <p className="font-serif text-[10px] sm:text-[11px] tracking-royal uppercase text-gold/80 font-medium">
          {String.fromCodePoint(0x0964) + String.fromCodePoint(0x0964)} {'\u0936\u094D\u0930\u0940 \u0917\u0923\u0947\u0936\u093E\u092F \u0928\u092E\u0903'} {String.fromCodePoint(0x0964) + String.fromCodePoint(0x0964)}
        </p>
      </div>

      {/* CENTER: Video Box */}
      <main className="relative z-10 flex-1 flex items-center justify-center w-full px-4 sm:px-6 my-2 min-h-0">
        <div className="relative w-full max-w-2xl mx-auto">
          {/* Gold ornamental gradient border */}
          <div className="absolute -inset-[3px] rounded-2xl bg-gradient-to-br from-gold/80 via-gold-champagne/50 to-gold/80 z-0" />
          <div className="absolute -inset-[7px] rounded-[20px] border border-gold/30 z-0" />

          {/* Video container */}
          <div className="relative rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(198,166,107,0.4)] z-10 bg-palace-dark">
            {videoAvailable ? (
              <video
                ref={videoRef}
                src={videoSrc}
                autoPlay
                playsInline
                muted={isMuted}
                onEnded={handleProceed}
                onError={() => setVideoAvailable(false)}
                className="w-full h-auto max-h-[55vh] sm:max-h-[62vh] object-contain block"
              />
            ) : (
              <div className="w-full aspect-video flex flex-col items-center justify-center bg-gradient-to-b from-emerald-deep to-palace-dark">
                <p className="font-caps text-gold text-sm tracking-wider">Video unavailable</p>
              </div>
            )}

            {/* Sound toggle inside video (bottom-right) */}
            {videoAvailable && (
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-palace-dark/80 border border-gold/50 text-gold-champagne backdrop-blur-sm text-[10px] sm:text-xs font-caps tracking-wide uppercase hover:bg-gold hover:text-palace-dark transition-all duration-200 cursor-pointer active:scale-95 shadow-lg"
                aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              >
                <span className="text-sm leading-none">{isMuted ? '\uD83D\uDD07' : '\uD83D\uDD0A'}</span>
                <span className="hidden sm:inline">{isMuted ? 'Unmute' : 'Mute'}</span>
              </button>
            )}
          </div>
        </div>
      </main>

      {/* BOTTOM: Single Skip Button */}
      <footer className="relative z-10 flex flex-col items-center gap-1 flex-shrink-0 pb-1 sm:pb-2">
        <button
          onClick={handleProceed}
          className="group inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-2.5 sm:py-3 rounded-full border-2 border-gold bg-gradient-to-r from-emerald-deep via-palace-green to-emerald-night hover:from-gold hover:to-gold-deep text-gold-champagne hover:text-palace-dark backdrop-blur-md transition-all duration-300 shadow-[0_0_24px_rgba(198,166,107,0.4)] hover:shadow-[0_0_36px_rgba(198,166,107,0.9)] active:scale-95 cursor-pointer"
          aria-label="Skip Introduction and Enter Invitation"
        >
          <span className="font-caps text-xs sm:text-sm tracking-royal uppercase font-bold">
            Skip Intro - Enter Invitation
          </span>
          <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300">
            <path d="M4 10 H14 M10 6 L14 10 L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <span className="text-[8px] sm:text-[9px] font-caps tracking-monumental text-gold/50 uppercase">
          Palace Experience - Click to Enter
        </span>
      </footer>
    </div>
  );
}

export default Intro;
