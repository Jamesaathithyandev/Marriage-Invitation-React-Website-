import React, { useEffect, useRef, useState } from 'react';

export function BackgroundMusic({ src = '/assets/bg-music.mp3', volume = 0.22 }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const fadeVolumeTo = (audio, target, durationMs) => {
    const steps = 60;
    const interval = durationMs / steps;
    const delta = (target - audio.volume) / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      audio.volume = Math.min(Math.max(audio.volume + delta, 0), 1);
      if (step >= steps) clearInterval(timer);
    }, interval);
  };

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = 0;
    audioRef.current = audio;

    const tryPlay = async () => {
      try {
        await audio.play();
        fadeVolumeTo(audio, volume, 2500);
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
      setTimeout(() => {
        setVisible(true);
        setTimeout(() => setFadeIn(true), 50);
      }, 1200);
    };

    tryPlay();
    return () => { audio.pause(); audio.src = ''; };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      fadeVolumeTo(audio, 0, 600);
      setTimeout(() => audio.pause(), 620);
      setPlaying(false);
    } else {
      audio.play().then(() => {
        fadeVolumeTo(audio, volume, 1000);
        setPlaying(true);
      }).catch(() => {});
    }
  };

  if (!visible) return null;

  const pillClass = [
    'fixed bottom-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-700',
    fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
  ].join(' ');

  return (
    <div className={pillClass}>
      <button
        onClick={toggle}
        className="group flex items-center gap-2 px-4 py-2 rounded-full border border-gold/50 bg-palace-dark/80 backdrop-blur-md shadow-[0_0_18px_rgba(198,166,107,0.25)] hover:shadow-[0_0_28px_rgba(198,166,107,0.55)] hover:border-gold/80 transition-all duration-300 cursor-pointer active:scale-95 select-none"
        aria-label={playing ? 'Pause background music' : 'Play background music'}
      >
        <div className="flex items-end gap-[3px] h-4 w-5 flex-shrink-0">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: '3px',
                height: playing ? undefined : '4px',
                borderRadius: '9999px',
                backgroundColor: playing ? '#C6A66B' : 'rgba(198,166,107,0.4)',
                animation: playing ? ('music-bar 0.8s ease-in-out infinite ' + (i * 0.15) + 's') : 'none',
              }}
            />
          ))}
        </div>

        <span className="font-caps text-[9px] sm:text-[10px] tracking-wider text-gold-champagne uppercase leading-none">
          {playing ? 'Mast Magan' : 'Play Music'}
        </span>

        <span className="text-gold/70 group-hover:text-gold leading-none flex-shrink-0">
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
    </div>
  );
}

export default BackgroundMusic;
