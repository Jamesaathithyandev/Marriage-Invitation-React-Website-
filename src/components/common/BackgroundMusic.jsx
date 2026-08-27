import React, { useEffect, useRef, useState } from 'react';

/**
 * BackgroundMusic.jsx
 * Plays Mast Magan across ALL stages: loading screen, intro video, and main invitation.
 * Starts on first user interaction (click/tap anywhere) to satisfy browser autoplay policy.
 * Intro video stays muted; this audio track plays throughout.
 */
export function BackgroundMusic({ src = '/assets/bg-music.mp3', volume = 0.22 }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const fadeVolumeTo = (audio, target, durationMs) => {
    const steps = 60;
    const interval = durationMs / steps;
    const startVol = audio.volume;
    const delta = (target - startVol) / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      audio.volume = Math.min(Math.max(audio.volume + delta, 0), 1);
      if (step >= steps) clearInterval(timer);
    }, interval);
  };

  // Create audio on mount
  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = 0;
    audioRef.current = audio;

    // Try immediate autoplay (works if browser allows it)
    audio.play()
      .then(() => {
        fadeVolumeTo(audio, volume, 2000);
        setPlaying(true);
        setStarted(true);
        showPill();
      })
      .catch(() => {
        // Autoplay blocked — wait for first user interaction
        const startOnInteraction = () => {
          if (started) return;
          audio.play()
            .then(() => {
              fadeVolumeTo(audio, volume, 1500);
              setPlaying(true);
              setStarted(true);
              showPill();
            })
            .catch(() => {});
          document.removeEventListener('click', startOnInteraction);
          document.removeEventListener('keydown', startOnInteraction);
          document.removeEventListener('touchstart', startOnInteraction);
        };
        document.addEventListener('click', startOnInteraction);
        document.addEventListener('keydown', startOnInteraction);
        document.addEventListener('touchstart', startOnInteraction);
        // Show pill anyway so user can manually start
        setTimeout(showPill, 2000);
      });

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const showPill = () => {
    setVisible(true);
    setTimeout(() => setFadeIn(true), 50);
  };

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      fadeVolumeTo(audio, 0, 600);
      setTimeout(() => audio.pause(), 620);
      setPlaying(false);
    } else {
      audio.play()
        .then(() => {
          fadeVolumeTo(audio, volume, 1000);
          setPlaying(true);
          setStarted(true);
        })
        .catch(() => {});
    }
  };

  if (!visible) return null;

  const pillClass = [
    'fixed bottom-5 left-1/2 -translate-x-1/2 z-[200] transition-all duration-700',
    fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
  ].join(' ');

  return (
    <div className={pillClass}>
      <button
        onClick={toggle}
        className="group flex items-center gap-2 px-4 py-2 rounded-full border border-gold/55 bg-palace-dark/85 backdrop-blur-md shadow-[0_0_18px_rgba(198,166,107,0.3)] hover:shadow-[0_0_28px_rgba(198,166,107,0.6)] hover:border-gold/90 transition-all duration-300 cursor-pointer active:scale-95 select-none"
        aria-label={playing ? 'Pause background music' : 'Play background music'}
      >
        {/* Equalizer bars */}
        <div className="flex items-end gap-[3px] h-4 w-5 flex-shrink-0">
          {[0.15, 0, 0.3].map((delay, i) => (
            <div
              key={i}
              style={{
                width: '3px',
                borderRadius: '9999px',
                backgroundColor: playing ? '#C6A66B' : 'rgba(198,166,107,0.35)',
                height: playing ? '14px' : '4px',
                transition: 'height 0.3s ease',
                animation: playing
                  ? 'musicBarAnim 0.8s ease-in-out ' + delay + 's infinite alternate'
                  : 'none',
              }}
            />
          ))}
        </div>

        <span className="font-caps text-[9px] sm:text-[10px] tracking-wider text-gold-champagne/80 group-hover:text-gold-champagne uppercase leading-none whitespace-nowrap">
          {playing ? 'Mast Magan' : 'Play Music'}
        </span>

        <span className="text-gold/65 group-hover:text-gold leading-none flex-shrink-0">
          {playing ? (
            <svg viewBox="0 0 12 12" fill="currentColor" className="w-3 h-3">
              <rect x="1" y="1" width="3.5" height="10" rx="1" />
              <rect x="7.5" y="1" width="3.5" height="10" rx="1" />
            </svg>
          ) : (
            <svg viewBox="0 0 12 12" fill="currentColor" className="w-3 h-3">
              <path d="M2 1.5 L11 6 L2 10.5 Z" />
            </svg>
          )}
        </span>
      </button>

      {/* CSS keyframe via style tag */}
      <style>{`
        @keyframes musicBarAnim {
          from { height: 4px; }
          to   { height: 14px; }
        }
      `}</style>
    </div>
  );
}

export default BackgroundMusic;
