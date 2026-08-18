import React from 'react';
import { LotusMotif } from '../decorative/LotusMotif';
import { PeacockMotif } from '../decorative/PeacockMotif';

/**
 * ClosingSection — Grand Final Emotional Curtain Call
 *
 * A peaceful, emotional, luxurious closing:
 * - Grand palace arch with lotus petals, foliage, peacock details, and gold linework
 * - "Your presence and blessings would mean the world to us."
 * - VINAY & KISHMA in gold foil
 * - Flanking full peacocks
 * - Lotus garden flourish at the base
 */
export function ClosingSection() {
  return (
    <section
      id="closing"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 md:px-8 bg-ivory paper-grain overflow-hidden text-center"
      aria-label="Closing Message"
    >
      {/* ── Warm Atmospheric Glow ───────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[1000px] h-[600px] bg-gradient-to-b from-gold-champagne/18 via-ivory/0 to-lotus-blush/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-deep/6 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-deep/6 rounded-full blur-3xl" />
        <div className="absolute inset-0 jali-watermark opacity-[0.18]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">

        {/* ── GRAND PALACE ARCH SVG (Closing Centrepiece) ─── */}
        <div className="w-full max-w-xl mx-auto mb-4 sm:mb-6">
          <svg viewBox="0 0 480 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" aria-hidden="true">

            {/* ── Outer foliage garland framing the arch ── */}
            {/* Left garland branch */}
            <path d="M20 180 C40 160 55 130 60 95 C70 100 75 115 65 135 C80 125 85 110 80 90 C90 95 95 112 88 135 C100 122 105 105 98 85" stroke="#174C3C" strokeWidth="1" fill="none" opacity="0.5"/>
            <path d="M20 180 C30 165 35 150 32 130" stroke="#174C3C" strokeWidth="0.8" fill="none" opacity="0.4"/>
            {/* Left leaves */}
            {[[60,95],[80,90],[98,85],[65,135],[88,135]].map(([cx,cy],i) => (
              <ellipse key={i} cx={cx} cy={cy} rx="8" ry="5" transform={`rotate(${-30 + i*15} ${cx} ${cy})`} fill="#174C3C" fillOpacity="0.3"/>
            ))}
            {/* Right garland branch (mirrored) */}
            <path d="M460 180 C440 160 425 130 420 95 C410 100 405 115 415 135 C400 125 395 110 400 90 C390 95 385 112 392 135 C380 122 375 105 382 85" stroke="#174C3C" strokeWidth="1" fill="none" opacity="0.5"/>
            <path d="M460 180 C450 165 445 150 448 130" stroke="#174C3C" strokeWidth="0.8" fill="none" opacity="0.4"/>
            {[[420,95],[400,90],[382,85],[415,135],[392,135]].map(([cx,cy],i) => (
              <ellipse key={i} cx={cx} cy={cy} rx="8" ry="5" transform={`rotate(${30 - i*15} ${cx} ${cy})`} fill="#174C3C" fillOpacity="0.3"/>
            ))}

            {/* ── Gold lotus buds along arch sides ────── */}
            {/* Left side small lotuses */}
            {[[48,150],[62,118],[82,92]].map(([cx,cy],i) => (
              <g key={i}>
                <path d={`M${cx} ${cy+8} C${cx-4} ${cy+4} ${cx-3} ${cy} ${cx} ${cy-4} C${cx+3} ${cy} ${cx+4} ${cy+4} ${cx} ${cy+8} Z`} fill="#D99A9D" fillOpacity="0.7"/>
                <path d={`M${cx} ${cy+8} C${cx-8} ${cy+5} ${cx-6} ${cy} ${cx-2} ${cy-2} C${cx-2} ${cy+2} ${cx-1} ${cy+6} ${cx} ${cy+8} Z`} fill="#D99A9D" fillOpacity="0.5"/>
                <path d={`M${cx} ${cy+8} C${cx+8} ${cy+5} ${cx+6} ${cy} ${cx+2} ${cy-2} C${cx+2} ${cy+2} ${cx+1} ${cy+6} ${cx} ${cy+8} Z`} fill="#D99A9D" fillOpacity="0.5"/>
                <circle cx={cx} cy={cy-4} r="1.5" fill="#C6A66B"/>
              </g>
            ))}
            {/* Right side small lotuses (mirrored) */}
            {[[432,150],[418,118],[398,92]].map(([cx,cy],i) => (
              <g key={i}>
                <path d={`M${cx} ${cy+8} C${cx-4} ${cy+4} ${cx-3} ${cy} ${cx} ${cy-4} C${cx+3} ${cy} ${cx+4} ${cy+4} ${cx} ${cy+8} Z`} fill="#D99A9D" fillOpacity="0.7"/>
                <path d={`M${cx} ${cy+8} C${cx-8} ${cy+5} ${cx-6} ${cy} ${cx-2} ${cy-2} C${cx-2} ${cy+2} ${cx-1} ${cy+6} ${cx} ${cy+8} Z`} fill="#D99A9D" fillOpacity="0.5"/>
                <path d={`M${cx} ${cy+8} C${cx+8} ${cy+5} ${cx+6} ${cy} ${cx+2} ${cy-2} C${cx+2} ${cy+2} ${cx+1} ${cy+6} ${cx} ${cy+8} Z`} fill="#D99A9D" fillOpacity="0.5"/>
                <circle cx={cx} cy={cy-4} r="1.5" fill="#C6A66B"/>
              </g>
            ))}

            {/* ── Grand Central Palace Arch ────────────── */}
            {/* Outer arch body */}
            <path
              d="M80 195 C80 110 120 88 160 62 C185 45 210 36 240 26
                 C270 36 295 45 320 62
                 C360 88 400 110 400 195"
              stroke="#C6A66B" strokeWidth="2" strokeLinecap="round" fill="none"
            />
            {/* Inner parallel arch */}
            <path
              d="M95 195 C95 118 130 98 168 74 C190 60 214 50 240 40
                 C266 50 290 60 312 74
                 C350 98 385 118 385 195"
              stroke="#C6A66B" strokeWidth="1" strokeDasharray="4 3" fill="none" opacity="0.6"
            />
            {/* Second inner arch hairline */}
            <path
              d="M108 195 C108 125 140 107 176 84 C196 72 218 63 240 54
                 C262 63 284 72 304 84
                 C340 107 372 125 372 195"
              stroke="#C6A66B" strokeWidth="0.5" fill="none" opacity="0.35"
            />

            {/* Keystone apex ornament */}
            <circle cx="240" cy="26" r="7" fill="#C6A66B"/>
            <circle cx="240" cy="26" r="4" fill="#F3E4C8"/>
            <circle cx="240" cy="26" r="1.5" fill="#C6A66B"/>
            {/* Radiating lines from keystone */}
            {[[-20,-10],[-10,-18],[10,-18],[20,-10]].map(([dx,dy],i) => (
              <line key={i} x1="240" y1="26" x2={240+dx} y2={26+dy} stroke="#C6A66B" strokeWidth="0.5" opacity="0.5"/>
            ))}

            {/* Bead accents along arch curve */}
            {[
              [160,62],[320,62],[130,98],[350,98],[95,140],[385,140]
            ].map(([cx,cy],i) => (
              <circle key={i} cx={cx} cy={cy} r="2.5" fill="#C6A66B"/>
            ))}

            {/* ── Peacock feather fan inside arch (large) ── */}
            {/* Central peacock eye decoration behind the names area */}
            <g opacity="0.2">
              {[
                {dx:-80,dy:-30,rot:-38},
                {dx:-40,dy:-65,rot:-18},
                {dx:0,dy:-75,rot:0},
                {dx:40,dy:-65,rot:18},
                {dx:80,dy:-30,rot:38},
              ].map(({dx,dy,rot},i) => {
                const x = 240 + dx; const y = 160 + dy;
                return (
                  <g key={i} transform={`rotate(${rot} ${x} ${y})`}>
                    <line x1="240" y1="160" x2={x} y2={y} stroke="#C6A66B" strokeWidth="0.7"/>
                    <ellipse cx={x} cy={y} rx="10" ry="14" fill="#176B70"/>
                    <ellipse cx={x} cy={y+2} rx="5.5" ry="8" fill="#315A78"/>
                    <circle cx={x} cy={y} r="2.5" fill="#DFC48E"/>
                  </g>
                );
              })}
            </g>

            {/* ── Arch Spandrel Fillings (foliage & gold) ── */}
            {/* Left spandrel lotus bud cluster */}
            <g opacity="0.4">
              <path d="M95 165 C115 145 130 135 145 140 C130 145 115 155 95 165 Z" fill="#174C3C"/>
              <path d="M95 165 C108 140 120 130 135 132 C122 140 110 152 95 165 Z" fill="#174C3C" fillOpacity="0.6"/>
            </g>
            {/* Right spandrel */}
            <g opacity="0.4">
              <path d="M385 165 C365 145 350 135 335 140 C350 145 365 155 385 165 Z" fill="#174C3C"/>
              <path d="M385 165 C372 140 360 130 345 132 C358 140 370 152 385 165 Z" fill="#174C3C" fillOpacity="0.6"/>
            </g>

            {/* ── Pillar pairs ─────────────────────────── */}
            {/* Left pillar */}
            <rect x="78" y="155" width="16" height="40" rx="2" fill="#C6A66B" fillOpacity="0.12" stroke="#C6A66B" strokeWidth="0.7" strokeOpacity="0.5"/>
            <rect x="74" y="190" width="24" height="8" rx="1" fill="#C6A66B" fillOpacity="0.35"/>
            {/* Right pillar */}
            <rect x="386" y="155" width="16" height="40" rx="2" fill="#C6A66B" fillOpacity="0.12" stroke="#C6A66B" strokeWidth="0.7" strokeOpacity="0.5"/>
            <rect x="382" y="190" width="24" height="8" rx="1" fill="#C6A66B" fillOpacity="0.35"/>

            {/* ── Ground lotus garden band ──────────────── */}
            {/* Horizontal bead chain base */}
            {Array.from({length:17}, (_,i) => 60 + i*22).map(x => (
              <circle key={x} cx={x} cy="197" r={x===(60+8*22)?3:1.5} fill="#C6A66B" fillOpacity={x===(60+8*22)?1:0.4}/>
            ))}
            {/* Lotus blooms at the base */}
            {[110,170,240,310,370].map(x => (
              <g key={x} opacity="0.6">
                <path d={`M${x} 197 C${x-3} 191 ${x-2} 185 ${x} 181 C${x+2} 185 ${x+3} 191 ${x} 197 Z`} fill="#C6A66B"/>
                <path d={`M${x} 197 C${x-7} 193 ${x-5} 186 ${x-2} 183 C${x-3} 188 ${x-2} 193 ${x} 197 Z`} fill="#D99A9D" fillOpacity="0.8"/>
                <path d={`M${x} 197 C${x+7} 193 ${x+5} 186 ${x+2} 183 C${x+3} 188 ${x+2} 193 ${x} 197 Z`} fill="#D99A9D" fillOpacity="0.8"/>
              </g>
            ))}
          </svg>
        </div>

        {/* ── CLOSING MESSAGE ───────────────────────────────── */}
        <div className="space-y-6 sm:space-y-8 max-w-xl">

          {/* Emotional tagline */}
          <p className="font-script text-2xl sm:text-3xl md:text-4xl text-palace-green/95 leading-relaxed drop-shadow-sm">
            "Your presence and blessings would mean the world to us."
          </p>

          {/* Gold ornamental divider */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-[0.5px] flex-1 max-w-[4rem] bg-gradient-to-r from-transparent to-gold" />
            <LotusMotif variant="crest" size="sm" className="opacity-90 w-8 h-8" />
            <div className="h-[0.5px] flex-1 max-w-[4rem] bg-gradient-to-l from-transparent to-gold" />
          </div>

          {/* Couple Names — Final Statement */}
          <div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-wide text-gold-foil drop-shadow-sm leading-none">
              Vinay &amp; Kishma
            </h2>
            <p className="font-caps text-[10px] sm:text-xs tracking-monumental text-gold-deep uppercase mt-3 font-semibold">
              Sunday, 25th October 2026
            </p>
          </div>

          {/* Auspicious Sanskrit Sign-Off */}
          <div className="pt-2">
            <p className="font-serif italic text-sm sm:text-base text-palace-green/70 leading-relaxed">
              "With immense love, joy, and gratitude —"
            </p>
            <p className="font-serif font-semibold text-base sm:text-lg text-palace-green mt-1">
              The Sahani &amp; Xavier Families
            </p>
          </div>

          {/* Bottom lotus flourish */}
          <div className="flex justify-center gap-3 items-end pt-2">
            {/* Left leaf */}
            <svg viewBox="0 0 30 40" fill="none" className="w-6 h-8 sm:w-8 sm:h-10 opacity-55">
              <path d="M15 38 C15 38 3 28 5 14 C8 19 11 27 15 38 Z" fill="#174C3C"/>
              <path d="M15 38 C15 38 1 22 6 8 C9 14 12 25 15 38 Z" fill="#174C3C" fillOpacity="0.5"/>
              <path d="M15 38 C7 30 6 17 9 6" stroke="#C6A66B" strokeWidth="0.5" strokeLinecap="round"/>
            </svg>
            <LotusMotif variant="bloom" size="md" className="opacity-90" />
            <svg viewBox="0 0 30 40" fill="none" className="w-6 h-8 sm:w-8 sm:h-10 opacity-55 -scale-x-100">
              <path d="M15 38 C15 38 3 28 5 14 C8 19 11 27 15 38 Z" fill="#174C3C"/>
              <path d="M15 38 C15 38 1 22 6 8 C9 14 12 25 15 38 Z" fill="#174C3C" fillOpacity="0.5"/>
              <path d="M15 38 C7 30 6 17 9 6" stroke="#C6A66B" strokeWidth="0.5" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Flanking peacock feathers at the very bottom */}
          <div className="flex justify-center opacity-40 pt-2">
            <PeacockMotif variant="flanking-peacocks" className="max-w-[200px] sm:max-w-[250px]" />
          </div>

          {/* Sacred Invocation Sign-Off */}
          <p className="font-serif text-xs sm:text-sm tracking-royal text-gold font-medium">
            ॥ शुभ विवाह ॥
          </p>

        </div>
      </div>
    </section>
  );
}

export default ClosingSection;
