import React from 'react';

/**
 * Reusable Royal Peacock Motifs
 * Themes: Peacock Teal (#176B70), Deep Emerald (#174C3C), Muted Royal Blue (#315A78), Antique Gold (#C6A66B)
 */
export function PeacockMotif({ variant = 'feather-crown', className = '', size = 'md' }) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
    xl: 'w-32 h-32',
    custom: '',
  };

  // Symmetrical Royal Peacock Feather Crown Crest
  if (variant === 'feather-crown') {
    return (
      <svg
        viewBox="0 0 140 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeClasses[size]} ${className}`}
      >
        {/* Center Plume */}
        <path
          d="M70 4 C64 16 60 32 70 58 C80 32 76 16 70 4 Z"
          fill="#176B70"
          stroke="#C6A66B"
          strokeWidth="1"
        />
        {/* Center Plume Eye */}
        <ellipse cx="70" cy="22" rx="4" ry="7" fill="#315A78" stroke="#C6A66B" strokeWidth="0.8"/>
        <circle cx="70" cy="22" r="2" fill="#C6A66B" />

        {/* Left Primary Plume */}
        <path
          d="M70 58 C50 48 38 32 44 14 C52 28 62 44 70 58 Z"
          fill="#174C3C"
          stroke="#C6A66B"
          strokeWidth="0.9"
        />
        <ellipse cx="49" cy="26" rx="3.5" ry="5.5" transform="rotate(-25 49 26)" fill="#176B70" stroke="#C6A66B" strokeWidth="0.6"/>
        <circle cx="49" cy="26" r="1.5" fill="#C6A66B"/>

        {/* Right Primary Plume */}
        <path
          d="M70 58 C90 48 102 32 96 14 C88 28 78 44 70 58 Z"
          fill="#174C3C"
          stroke="#C6A66B"
          strokeWidth="0.9"
        />
        <ellipse cx="91" cy="26" rx="3.5" ry="5.5" transform="rotate(25 91 26)" fill="#176B70" stroke="#C6A66B" strokeWidth="0.6"/>
        <circle cx="91" cy="26" r="1.5" fill="#C6A66B"/>

        {/* Left Secondary Wing Feather */}
        <path
          d="M70 58 C42 56 22 46 16 30 C28 40 48 50 70 58 Z"
          fill="#315A78"
          fillOpacity="0.8"
          stroke="#C6A66B"
          strokeWidth="0.75"
        />
        <circle cx="28" cy="38" r="2" fill="#176B70" stroke="#C6A66B" strokeWidth="0.5"/>

        {/* Right Secondary Wing Feather */}
        <path
          d="M70 58 C98 56 118 46 124 30 C112 40 92 50 70 58 Z"
          fill="#315A78"
          fillOpacity="0.8"
          stroke="#C6A66B"
          strokeWidth="0.75"
        />
        <circle cx="112" cy="38" r="2" fill="#176B70" stroke="#C6A66B" strokeWidth="0.5"/>

        {/* Base Lotus / Kalash Mount */}
        <path d="M60 58 C65 54 75 54 80 58 L78 64 C73 66 67 66 62 64 Z" fill="#C6A66B" />
        <circle cx="70" cy="62" r="1.5" fill="#174C3C"/>
      </svg>
    );
  }

  // Single Peacock Feather Eye Plume
  if (variant === 'single-feather') {
    return (
      <svg
        viewBox="0 0 50 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeClasses[size]} ${className}`}
      >
        <path d="M25 85 Q26 50 25 5" stroke="#C6A66B" strokeWidth="1" strokeLinecap="round"/>
        {/* Feather Quill Rays */}
        <path d="M25 45 C15 35 10 25 15 15 C20 25 24 35 25 45 Z" fill="#174C3C" fillOpacity="0.7" stroke="#C6A66B" strokeWidth="0.5"/>
        <path d="M25 45 C35 35 40 25 35 15 C30 25 26 35 25 45 Z" fill="#174C3C" fillOpacity="0.7" stroke="#C6A66B" strokeWidth="0.5"/>
        {/* Feather Eye Outer Oval */}
        <ellipse cx="25" cy="20" rx="9" ry="12" fill="#176B70" stroke="#C6A66B" strokeWidth="0.8"/>
        {/* Feather Eye Inner Heart/Teardrop */}
        <path d="M25 12 C20 18 20 24 25 28 C30 24 30 18 25 12 Z" fill="#315A78" stroke="#C6A66B" strokeWidth="0.6"/>
        <circle cx="25" cy="21" r="2.5" fill="#DFC48E" />
        <circle cx="25" cy="21" r="1" fill="#174C3C" />
      </svg>
    );
  }

  // Flanking Royal Peacocks Arch Crest
  if (variant === 'flanking-peacocks') {
    return (
      <svg
        viewBox="0 0 200 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full max-w-[240px] h-auto ${className}`}
      >
        {/* Central Floral Kalash */}
        <circle cx="100" cy="24" r="5" fill="#C6A66B" stroke="#9E7E45" strokeWidth="0.75"/>
        <path d="M96 30 C96 26 104 26 104 30 L103 38 L97 38 Z" fill="#C6A66B"/>
        <path d="M100 12 L100 19" stroke="#C6A66B" strokeWidth="1"/>
        <circle cx="100" cy="11" r="1.5" fill="#D99A9D"/>

        {/* Left Regal Peacock Silhouette */}
        <path
          d="M72 42 C64 36 60 28 66 20 C70 14 78 16 82 22 C84 25 88 27 94 28 C88 32 82 38 72 42 Z"
          fill="#176B70"
          stroke="#C6A66B"
          strokeWidth="0.75"
        />
        {/* Left Peacock Plume Tail */}
        <path d="M60 28 C45 28 32 36 20 48 C36 44 50 40 64 38 Z" fill="#174C3C" fillOpacity="0.8" stroke="#C6A66B" strokeWidth="0.6"/>
        <circle cx="70" cy="18" r="1.5" fill="#C6A66B"/>
        <path d="M71 16 L74 12" stroke="#C6A66B" strokeWidth="0.75"/>

        {/* Right Regal Peacock Silhouette */}
        <path
          d="M128 42 C136 36 140 28 134 20 C130 14 122 16 118 22 C116 25 112 27 106 28 C112 32 118 38 128 42 Z"
          fill="#176B70"
          stroke="#C6A66B"
          strokeWidth="0.75"
        />
        {/* Right Peacock Plume Tail */}
        <path d="M140 28 C155 28 168 36 180 48 C164 44 150 40 136 38 Z" fill="#174C3C" fillOpacity="0.8" stroke="#C6A66B" strokeWidth="0.6"/>
        <circle cx="130" cy="18" r="1.5" fill="#C6A66B"/>
        <path d="M129 16 L126 12" stroke="#C6A66B" strokeWidth="0.75"/>

        {/* Base Royal Trim Line */}
        <path d="M10 50 Q100 46 190 50" stroke="#C6A66B" strokeWidth="0.75" strokeDasharray="3 2"/>
      </svg>
    );
  }

  // Elegant Standing Full Peacock (profile, tail spread upward)
  if (variant === 'full-peacock') {
    return (
      <svg
        viewBox="0 0 160 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeClasses[size]} ${className}`}
        aria-hidden="true"
      >
        {/* ── Tail Fan (behind body) ── */}
        {/* Outer fan feathers — radiating from base */}
        {[
          [-60, -20], [-44, -36], [-26, -46], [-8, -50], [8, -50],
          [26, -46], [44, -36], [60, -20]
        ].map(([dx, dy], i) => {
          const x = 80 + dx;
          const cy = 150;
          return (
            <g key={i}>
              <path
                d={`M80 ${cy} Q${x + dx * 0.3} ${cy + dy * 0.5} ${x} ${cy + dy}`}
                stroke="#174C3C"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              {/* Feather eye at tip */}
              <ellipse
                cx={x}
                cy={cy + dy}
                rx="7"
                ry="10"
                transform={`rotate(${-30 + i * 10} ${x} ${cy + dy})`}
                fill="#176B70"
                stroke="#C6A66B"
                strokeWidth="0.6"
              />
              <ellipse
                cx={x}
                cy={cy + dy + 2}
                rx="4"
                ry="5.5"
                transform={`rotate(${-30 + i * 10} ${x} ${cy + dy})`}
                fill="#315A78"
              />
              <circle cx={x} cy={cy + dy + 2} r="2" fill="#DFC48E"/>
              <circle cx={x} cy={cy + dy + 2} r="0.8" fill="#174C3C"/>
            </g>
          );
        })}

        {/* ── Body ── */}
        {/* Neck */}
        <path d="M72 148 C70 140 68 128 70 118 C72 110 76 106 80 104 C84 106 88 110 90 118 C92 128 90 140 88 148 Z"
          fill="#176B70" stroke="#C6A66B" strokeWidth="0.8"
        />
        {/* Chest / Body */}
        <ellipse cx="80" cy="162" rx="18" ry="22"
          fill="#174C3C" stroke="#C6A66B" strokeWidth="0.8"
        />
        {/* Wing highlight */}
        <path d="M64 155 C60 162 62 172 68 178 C70 170 68 162 64 155 Z"
          fill="#176B70" fillOpacity="0.5"
        />
        <path d="M96 155 C100 162 98 172 92 178 C90 170 92 162 96 155 Z"
          fill="#176B70" fillOpacity="0.5"
        />

        {/* ── Head & Crown ── */}
        <circle cx="80" cy="100" r="12" fill="#176B70" stroke="#C6A66B" strokeWidth="0.8"/>
        {/* Crest feathers */}
        {[-10, -4, 0, 4, 10].map((dx, i) => (
          <g key={i}>
            <line x1={80 + dx * 0.5} y1="89" x2={80 + dx} y2={75 - Math.abs(dx) * 0.8}
              stroke="#C6A66B" strokeWidth="0.7" strokeLinecap="round"
            />
            <circle cx={80 + dx} cy={75 - Math.abs(dx) * 0.8} r="1.5" fill="#C6A66B"/>
          </g>
        ))}
        {/* Eye */}
        <circle cx="85" cy="98" r="3" fill="#F3E4C8"/>
        <circle cx="86" cy="98" r="1.5" fill="#174C3C"/>
        <circle cx="86.5" cy="97.5" r="0.5" fill="white"/>
        {/* Beak */}
        <path d="M91 101 L98 104 L91 106 Z" fill="#C6A66B"/>

        {/* ── Legs ── */}
        <line x1="74" y1="183" x2="72" y2="210" stroke="#C6A66B" strokeWidth="1" strokeLinecap="round"/>
        <line x1="86" y1="183" x2="88" y2="210" stroke="#C6A66B" strokeWidth="1" strokeLinecap="round"/>
        {/* Feet */}
        <path d="M72 210 L66 214 M72 210 L72 215 M72 210 L78 213" stroke="#C6A66B" strokeWidth="0.8" strokeLinecap="round"/>
        <path d="M88 210 L94 214 M88 210 L88 215 M88 210 L82 213" stroke="#C6A66B" strokeWidth="0.8" strokeLinecap="round"/>

        {/* Ground shadow */}
        <ellipse cx="80" cy="216" rx="20" ry="3" fill="#174C3C" fillOpacity="0.15"/>
      </svg>
    );
  }

  // Peacock Feather Fan (spread radiating arch — for backgrounds/banners)
  if (variant === 'feather-fan') {
    return (
      <svg
        viewBox="0 0 400 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-auto ${className}`}
        aria-hidden="true"
      >
        {/* 11 radiating feather quills from base centre */}
        {[
          {dx:-180,dy:-30,rot:-50},
          {dx:-140,dy:-80,rot:-38},
          {dx:-90,dy:-120,rot:-25},
          {dx:-40,dy:-145,rot:-12},
          {dx:0,dy:-155,rot:0},
          {dx:40,dy:-145,rot:12},
          {dx:90,dy:-120,rot:25},
          {dx:140,dy:-80,rot:38},
          {dx:180,dy:-30,rot:50},
        ].map(({dx,dy,rot},i) => {
          const x = 200 + dx;
          const y = 195 + dy;
          return (
            <g key={i}>
              {/* Quill shaft */}
              <path
                d={`M200 195 Q${200 + dx * 0.45} ${195 + dy * 0.4} ${x} ${y}`}
                stroke="#C6A66B"
                strokeWidth="0.9"
                strokeLinecap="round"
              />
              {/* Feather barbs left */}
              <path
                d={`M${200 + dx * 0.3} ${195 + dy * 0.28}
                   Q${200 + dx * 0.2} ${195 + dy * 0.18} ${200 + dx * 0.1} ${195 + dy * 0.22}`}
                stroke="#174C3C" strokeWidth="0.5" opacity="0.5"
              />
              {/* Feather barbs right */}
              <path
                d={`M${200 + dx * 0.3} ${195 + dy * 0.28}
                   Q${200 + dx * 0.4} ${195 + dy * 0.18} ${200 + dx * 0.5} ${195 + dy * 0.22}`}
                stroke="#174C3C" strokeWidth="0.5" opacity="0.5"
              />
              {/* Eye at tip */}
              <g transform={`rotate(${rot} ${x} ${y})`}>
                <ellipse cx={x} cy={y} rx="14" ry="18" fill="#176B70" stroke="#C6A66B" strokeWidth="0.8"/>
                <ellipse cx={x} cy={y+2} rx="8" ry="10" fill="#315A78"/>
                <ellipse cx={x} cy={y+1} rx="4" ry="6" fill="#174C3C"/>
                <circle cx={x} cy={y} r="3" fill="#DFC48E"/>
                <circle cx={x} cy={y} r="1.2" fill="#174C3C"/>
              </g>
            </g>
          );
        })}
        {/* Base mount */}
        <path d="M188 196 C192 190 208 190 212 196 L210 200 L190 200 Z" fill="#C6A66B" fillOpacity="0.6"/>
        <circle cx="200" cy="197" r="4" fill="#C6A66B"/>
        <circle cx="200" cy="197" r="2" fill="#DFC48E"/>
      </svg>
    );
  }

  // Default subtle feather ornament
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${sizeClasses[size]} ${className}`}>
      <path d="M20 3 C12 12 10 24 20 37 C30 24 28 12 20 3 Z" fill="#176B70" stroke="#C6A66B" strokeWidth="0.75"/>
      <ellipse cx="20" cy="16" rx="4" ry="6" fill="#315A78" stroke="#C6A66B" strokeWidth="0.5"/>
      <circle cx="20" cy="16" r="1.5" fill="#C6A66B"/>
    </svg>
  );
}

export default PeacockMotif;
