import React from 'react';

/**
 * Reusable Royal Lotus Motifs
 * Themes: Muted lotus pink (#D99A9D), Antique Gold (#C6A66B), Soft Emerald Foliage (#174C3C)
 */
export function LotusMotif({ variant = 'crest', className = '', size = 'md', color = 'gold' }) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
    custom: '',
  };

  // Primary Crest Motif (Symmetrical blooming royal lotus)
  if (variant === 'crest') {
    return (
      <svg
        viewBox="0 0 120 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeClasses[size]} ${className}`}
      >
        {/* Outer Background Glow / Base Leaves */}
        <path
          d="M60 72 C35 72 20 62 10 48 C28 50 48 60 60 72 Z"
          fill="#174C3C"
          fillOpacity="0.25"
          stroke="#C6A66B"
          strokeWidth="0.75"
        />
        <path
          d="M60 72 C85 72 100 62 110 48 C92 50 72 60 60 72 Z"
          fill="#174C3C"
          fillOpacity="0.25"
          stroke="#C6A66B"
          strokeWidth="0.75"
        />

        {/* Outer Lotus Petals (Lotus Blush) */}
        <path
          d="M60 70 C30 58 16 38 25 22 C32 38 48 56 60 70 Z"
          fill="#D99A9D"
          fillOpacity="0.75"
          stroke="#C6A66B"
          strokeWidth="1"
        />
        <path
          d="M60 70 C90 58 104 38 95 22 C88 38 72 56 60 70 Z"
          fill="#D99A9D"
          fillOpacity="0.75"
          stroke="#C6A66B"
          strokeWidth="1"
        />

        {/* Secondary Petals */}
        <path
          d="M60 68 C40 52 32 32 40 14 C48 30 55 50 60 68 Z"
          fill="#E8B6B9"
          fillOpacity="0.85"
          stroke="#C6A66B"
          strokeWidth="1"
        />
        <path
          d="M60 68 C80 52 88 32 80 14 C72 30 65 50 60 68 Z"
          fill="#E8B6B9"
          fillOpacity="0.85"
          stroke="#C6A66B"
          strokeWidth="1"
        />

        {/* Center Royal Crown Petal */}
        <path
          d="M60 6 C52 22 45 42 60 68 C75 42 68 22 60 6 Z"
          fill="#DFC48E"
          stroke="#C6A66B"
          strokeWidth="1.2"
        />

        {/* Center Stamen & Core Details */}
        <path
          d="M60 14 C57 26 55 38 60 52 C65 38 63 26 60 14 Z"
          fill="#9E7E45"
        />
        <circle cx="60" cy="6" r="2" fill="#C6A66B" stroke="#8B6B34" strokeWidth="0.5" />

        {/* Base Pedestal Beads */}
        <circle cx="60" cy="72" r="2.5" fill="#C6A66B" />
        <circle cx="52" cy="72" r="1.5" fill="#C6A66B" />
        <circle cx="68" cy="72" r="1.5" fill="#C6A66B" />
        <circle cx="44" cy="71" r="1" fill="#C6A66B" />
        <circle cx="76" cy="71" r="1" fill="#C6A66B" />
      </svg>
    );
  }

  // Horizontal Lotus Divider
  if (variant === 'divider') {
    return (
      <div className={`flex items-center justify-center gap-3 w-full my-4 ${className}`}>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold/50 to-gold" />
        <svg viewBox="0 0 80 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-6 flex-shrink-0">
          <path d="M40 3 C36 10 32 18 40 28 C48 18 44 10 40 3 Z" fill="#C6A66B" stroke="#9E7E45" strokeWidth="0.75"/>
          <path d="M40 28 C26 22 18 14 22 8 C26 14 34 22 40 28 Z" fill="#D99A9D" fillOpacity="0.8" stroke="#C6A66B" strokeWidth="0.75"/>
          <path d="M40 28 C54 22 62 14 58 8 C54 14 46 22 40 28 Z" fill="#D99A9D" fillOpacity="0.8" stroke="#C6A66B" strokeWidth="0.75"/>
          <circle cx="40" cy="2" r="1.5" fill="#C6A66B"/>
          <circle cx="10" cy="20" r="1" fill="#C6A66B"/>
          <circle cx="70" cy="20" r="1" fill="#C6A66B"/>
        </svg>
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-gold/50 to-gold" />
      </div>
    );
  }

  // Corner Bracket Lotus
  if (variant === 'corner') {
    return (
      <svg
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeClasses[size]} ${className}`}
      >
        <path d="M0 0 L40 0 C30 0 20 10 20 20 L20 40 L0 40 L0 0 Z" fill="none" stroke="#C6A66B" strokeWidth="0.75" />
        <path d="M4 4 L30 4 C24 4 16 12 16 20 L16 30 L4 30 Z" fill="none" stroke="#C6A66B" strokeWidth="0.5" strokeOpacity="0.6"/>
        <path d="M12 12 C18 6 22 8 20 14 C16 16 14 16 12 12 Z" fill="#D99A9D" fillOpacity="0.7" stroke="#C6A66B" strokeWidth="0.5"/>
        <circle cx="4" cy="4" r="1.5" fill="#C6A66B"/>
      </svg>
    );
  }

  // Full Blooming Lotus with Water Reflection
  if (variant === 'bloom') {
    return (
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeClasses[size]} ${className}`}
        aria-hidden="true"
      >
        {/* Water surface ripples */}
        <ellipse cx="100" cy="170" rx="70" ry="10" stroke="#176B70" strokeWidth="0.6" fill="#176B70" fillOpacity="0.07"/>
        <ellipse cx="100" cy="174" rx="55" ry="7" stroke="#176B70" strokeWidth="0.4" fill="none" opacity="0.4"/>
        <ellipse cx="100" cy="177" rx="35" ry="4" stroke="#176B70" strokeWidth="0.3" fill="none" opacity="0.3"/>

        {/* Water lily pad (emerald green) */}
        <path d="M100 168 C60 168 44 152 50 138 C60 148 80 158 100 160 C120 158 140 148 150 138 C156 152 140 168 100 168 Z"
          fill="#174C3C" fillOpacity="0.4" stroke="#174C3C" strokeWidth="0.6"
        />
        <path d="M100 160 L100 168" stroke="#174C3C" strokeWidth="0.5"/>
        {/* Second lily pad */}
        <path d="M62 162 C48 162 38 152 44 144 C50 150 58 156 65 158 Z"
          fill="#174C3C" fillOpacity="0.3" stroke="#174C3C" strokeWidth="0.5"
        />
        <path d="M138 162 C152 162 162 152 156 144 C150 150 142 156 135 158 Z"
          fill="#174C3C" fillOpacity="0.3" stroke="#174C3C" strokeWidth="0.5"
        />

        {/* Outer petals — row 1 */}
        {[
          [100,55, 70,85], [100,55, 130,85],
          [100,55, 58,105], [100,55, 142,105],
          [100,55, 60,130], [100,55, 140,130],
        ].map(([cx,cy,tx,ty],i) => (
          <path key={i}
            d={`M${cx} ${cy} C${(cx+tx)/2-12} ${(cy+ty)/2-20} ${(cx+tx)/2+12} ${(cy+ty)/2+10} ${tx} ${ty} C${(cx+tx)/2} ${ty-15} ${cx} ${(cy+ty)/2} ${cx} ${cy} Z`}
            fill="#D99A9D" fillOpacity="0.65" stroke="#C6A66B" strokeWidth="0.7"
          />
        ))}
        {/* Outer petals — row 2 (slightly inner) */}
        {[
          [100,65, 76,95], [100,65, 124,95],
          [100,65, 68,118], [100,65, 132,118],
        ].map(([cx,cy,tx,ty],i) => (
          <path key={i+6}
            d={`M${cx} ${cy} C${(cx+tx)/2-8} ${(cy+ty)/2-15} ${(cx+tx)/2+8} ${(cy+ty)/2+8} ${tx} ${ty} C${(cx+tx)/2} ${ty-12} ${cx} ${(cy+ty)/2} ${cx} ${cy} Z`}
            fill="#E8B6B9" fillOpacity="0.8" stroke="#C6A66B" strokeWidth="0.6"
          />
        ))}
        {/* Inner petals */}
        {[
          [100,75, 86,105], [100,75, 114,105],
          [100,75, 82,122], [100,75, 118,122],
          [100,75, 100,128],
        ].map(([cx,cy,tx,ty],i) => (
          <path key={i+12}
            d={`M${cx} ${cy} C${(cx+tx)/2-5} ${(cy+ty)/2-10} ${(cx+tx)/2+5} ${(cy+ty)/2+5} ${tx} ${ty} C${(cx+tx)/2} ${ty-8} ${cx} ${(cy+ty)/2} ${cx} ${cy} Z`}
            fill="#DFC48E" fillOpacity="0.9" stroke="#C6A66B" strokeWidth="0.8"
          />
        ))}
        {/* Centre stamen cluster */}
        {[[100,90],[96,86],[104,86],[98,82],[102,82],[100,78]].map(([cx,cy],i) => (
          <circle key={i} cx={cx} cy={cy} r={i===0?4:i<4?2.5:1.5}
            fill={i===0?"#C6A66B":"#9E7E45"}
          />
        ))}
        {/* Stamen tips */}
        {[[97,76],[100,74],[103,76],[95,80],[105,80]].map(([cx,cy],i) => (
          <circle key={i} cx={cx} cy={cy} r="1" fill="#DFC48E"/>
        ))}

        {/* Stem */}
        <path d="M100 130 C98 145 100 155 100 162" stroke="#174C3C" strokeWidth="1.2" strokeLinecap="round"/>

        {/* Water reflection (mirrored, faint, below) */}
        <g transform="translate(0 340) scale(1 -1)" opacity="0.12">
          <path d="M100 55 C70 85 58 105 60 130 C80 118 120 118 140 130 C142 105 130 85 100 55 Z" fill="#D99A9D"/>
        </g>
      </svg>
    );
  }

  // Horizontal Lotus Border Garland
  if (variant === 'border-garland') {
    return (
      <svg
        viewBox="0 0 600 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        className={`w-full h-auto ${className}`}
        aria-hidden="true"
      >
        {/* Connecting vine / garland line */}
        <path d="M0 35 Q50 20 100 35 Q150 50 200 35 Q250 20 300 35 Q350 50 400 35 Q450 20 500 35 Q550 50 600 35"
          stroke="#174C3C" strokeWidth="0.8" fill="none" opacity="0.5"
        />
        {/* Repeating lotus blooms at each peak */}
        {[100, 300, 500].map(x => (
          <g key={x}>
            <path d={`M${x} 35 C${x-3} 27 ${x-2} 19 ${x} 14 C${x+2} 19 ${x+3} 27 ${x} 35 Z`} fill="#C6A66B" stroke="#9E7E45" strokeWidth="0.5"/>
            <path d={`M${x} 35 C${x-10} 31 ${x-8} 22 ${x-4} 18 C${x-5} 25 ${x-3} 31 ${x} 35 Z`} fill="#D99A9D" fillOpacity="0.85"/>
            <path d={`M${x} 35 C${x+10} 31 ${x+8} 22 ${x+4} 18 C${x+5} 25 ${x+3} 31 ${x} 35 Z`} fill="#D99A9D" fillOpacity="0.85"/>
            <path d={`M${x} 35 C${x-15} 32 ${x-14} 24 ${x-8} 20 C${x-10} 27 ${x-6} 33 ${x} 35 Z`} fill="#E8B6B9" fillOpacity="0.7"/>
            <path d={`M${x} 35 C${x+15} 32 ${x+14} 24 ${x+8} 20 C${x+10} 27 ${x+6} 33 ${x} 35 Z`} fill="#E8B6B9" fillOpacity="0.7"/>
            <circle cx={x} cy={14} r="2" fill="#C6A66B"/>
            {/* Mini leaf pair */}
            <path d={`M${x-16} 32 C${x-22} 28 ${x-24} 22 ${x-18} 20 C${x-18} 25 ${x-16} 29 ${x-16} 32 Z`} fill="#174C3C" fillOpacity="0.5"/>
            <path d={`M${x+16} 32 C${x+22} 28 ${x+24} 22 ${x+18} 20 C${x+18} 25 ${x+16} 29 ${x+16} 32 Z`} fill="#174C3C" fillOpacity="0.5"/>
          </g>
        ))}
        {/* Small bud at troughs */}
        {[0, 200, 400, 600].map(x => (
          <g key={`bud-${x}`}>
            <path d={`M${x} 35 C${x-2} 39 ${x-1} 43 ${x} 46 C${x+1} 43 ${x+2} 39 ${x} 35 Z`} fill="#D99A9D" fillOpacity="0.6"/>
            <circle cx={x} cy={47} r="1.5" fill="#C6A66B" opacity="0.7"/>
          </g>
        ))}
        {/* Leaf pairs along the vine */}
        {[50, 150, 250, 350, 450, 550].map(x => (
          <g key={`leaf-${x}`} opacity="0.45">
            <path d={`M${x} 30 C${x-8} 24 ${x-6} 16 ${x} 14 C${x} 20 ${x} 26 ${x} 30 Z`} fill="#174C3C"/>
            <path d={`M${x} 30 C${x+8} 24 ${x+6} 16 ${x} 14 C${x} 20 ${x} 26 ${x} 30 Z`} fill="#174C3C" fillOpacity="0.7"/>
          </g>
        ))}
      </svg>
    );
  }

  // Minimal Single Petal Icon
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${sizeClasses[size]} ${className}`}>
      <path d="M12 2 C9 7 8 13 12 21 C16 13 15 7 12 2 Z" fill="#C6A66B" stroke="#9E7E45" strokeWidth="0.75"/>
      <path d="M12 21 C6 17 3 12 5 8 C7 12 10 17 12 21 Z" fill="#D99A9D" fillOpacity="0.75" stroke="#C6A66B" strokeWidth="0.5"/>
      <path d="M12 21 C18 17 21 12 19 8 C17 12 14 17 12 21 Z" fill="#D99A9D" fillOpacity="0.75" stroke="#C6A66B" strokeWidth="0.5"/>
    </svg>
  );
}

export default LotusMotif;
