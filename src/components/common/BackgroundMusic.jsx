import React, { useEffect, useRef, useState } from 'react';

/**
 * BackgroundMusic.jsx
 * Autoplays Mast Magan the moment the site loads.
 *
 * Browser autoplay trick:
 *   1. Create audio with muted = true
 *   2. Call play() — browsers allow muted autoplay
 *   3. Immediately set muted = false — unmuting a playing track IS allowed
 *   4. Fade volume in smoothly
 *
 * Fallback: if even muted autoplay is blocked, listen for first interaction.
 */
export function BackgroundMusic({ src = '/assets/bg-music.mp3', volume = 0.22 }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const fadeVolumeTo = (audio, target, durationMs) => {
    const steps = 80;
    const interval = durationMs / steps;
    const delta = (target - audio.volume) / steps;
    let step = 0;
    const id = setInterval(() => {
      step++;
      audio.volume = Math.min(Math.max(audio.volume + delta, 0), 1);
      if (step >= steps) clearInterval(id);
    }, interval);
  };

  const showPill = () => {
    setVisible(true);
    setTimeout(() => setFadeIn(true), 60);
  };

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = 0;
    audio.muted = true; // start muted so browser allows play()
    audioRef.current = audio;

    const startAudio = async () => {
      try {
        await audio.play();        // succeeds: muted autoplay is always allowed
        audio.muted = false;       // unmute while already playing — browsers permit this
        fadeVolumeTo(audio, volume, 2200);
        setPlaying(true);
        showPill();
      } catch {
        // Last resort: wait for any user interaction
        const onInteract = () => {
          audio.muted = false;
          audio.play()
            .then(() => {
              fadeVolumeTo(audio, volume, 1500);
              setPlaying(true);
            })
            .catch(() => {});
          cleanup();
        };
        const cleanup = () => {
          document.removeEventListener('click', onInteract);
          document.removeEventListener('touchstart', onInteract);
          document.removeEventListener('keydown', onInteract);
        };
        document.addEventListener('click', onInteract, { once: true });
        document.addEventListener('touchstart', onInteract, { once: true });
        document.addEventListener('keydown', onInteract, { once: true });
        showPill();
      }
    };

    startAudio();

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      fadeVolumeTo(audio, 0, 500);
      setTimeout(() => { audio.pause(); }, 520);
      setPlaying(false);
    } else {
      audio.muted = false;
      audio.play()
        .then(() => {
          fadeVolumeTo(audio, volume, 800);
          setPlaying(true);
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
        className="group flex items-center gap-2 px-4 py-2 rounded-full border border-gold/55 bg-palace-dark/85 backdrop-blur-md shadow-[0_0_18px_rgba(198,166,107,0.3)] hover:shadow-[0_0_28px_rgba(198,166,107,0.65)] hover:border-gold/90 transition-all duration-300 cursor-pointer active:scale-95 select-none"
        aria-label={playing ? 'Pause music' : 'Play music'}
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
                  ? `musicBarAnim 0.75s ease-in-out ${delay}s infinite alternate`
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
