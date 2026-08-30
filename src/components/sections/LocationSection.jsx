import React from 'react';
import { WEDDING_VENUE } from '../../data/weddingData';
import { LotusMotif } from '../decorative/LotusMotif';
import { RoyalOrnament } from '../decorative/RoyalOrnament';
import { OrnamentalDivider } from '../decorative/OrnamentalDivider';

/**
 * LocationSection — Venue & Map
 *
 * Features:
 * - Palace doorway arch framing the venue details
 * - Satellite map embed in a royal gold-bordered frame (no Maps API)
 * - "Get Directions" triggers the curtain transition, then opens Google Maps
 * - Full address from centralized data
 */
export function LocationSection({ onExternalNavigate }) {

  const handleGetDirections = () => {
    const url = WEDDING_VENUE.googleMapsSearchUrl;
    if (onExternalNavigate) {
      onExternalNavigate(url);
    } else {
      window.open(url, '_blank', 'noopener');
    }
  };

  return (
    <section
      id="venue"
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 md:px-8 bg-ivory paper-grain overflow-hidden"
      aria-label="Wedding Venue and Location"
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-emerald-deep/5 via-transparent to-gold-champagne/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 jali-watermark opacity-[0.15]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">

        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center justify-center gap-3 mb-2">
            <div className="h-[0.5px] w-8 sm:w-14 bg-gradient-to-r from-transparent to-gold" />
            <span className="font-caps text-[10px] sm:text-xs tracking-monumental text-gold-deep uppercase font-semibold">
              Where To Find Us
            </span>
            <div className="h-[0.5px] w-8 sm:w-14 bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-palace-green font-normal tracking-wide">
            The Venue
          </h2>
          <div className="mt-3 flex justify-center">
            <OrnamentalDivider motif="lotus" lineStyle="dual" className="max-w-xs" />
          </div>
        </div>

        {/* ── PALACE VENUE ORNAMENTAL HEADER ─────────────────── */}
        <div className="w-full max-w-lg mb-8">
          <svg viewBox="0 0 360 120" fill="none" className="w-full h-auto" aria-hidden="true">
            <defs>
              <radialGradient id="venueGlow" cx="50%" cy="60%" r="55%">
                <stop offset="0%" stopColor="#C6A66B" stopOpacity="0.08"/>
                <stop offset="100%" stopColor="#C6A66B" stopOpacity="0"/>
              </radialGradient>
            </defs>
            <ellipse cx="180" cy="80" rx="160" ry="60" fill="url(#venueGlow)"/>

            {/* Left pillar */}
            <rect x="18" y="50" width="14" height="68" rx="2" fill="#C6A66B" fillOpacity="0.12" stroke="#C6A66B" strokeWidth="0.8" strokeOpacity="0.6"/>
            <rect x="14" y="44" width="22" height="9" rx="1.5" fill="#C6A66B" fillOpacity="0.35"/>
            <rect x="14" y="116" width="22" height="5" rx="1" fill="#C6A66B" fillOpacity="0.25"/>
            {[22,26,30].map(x => <line key={x} x1={x} y1="55" x2={x} y2="116" stroke="#C6A66B" strokeWidth="0.4" strokeOpacity="0.3"/>)}

            {/* Right pillar */}
            <rect x="328" y="50" width="14" height="68" rx="2" fill="#C6A66B" fillOpacity="0.12" stroke="#C6A66B" strokeWidth="0.8" strokeOpacity="0.6"/>
            <rect x="324" y="44" width="22" height="9" rx="1.5" fill="#C6A66B" fillOpacity="0.35"/>
            <rect x="324" y="116" width="22" height="5" rx="1" fill="#C6A66B" fillOpacity="0.25"/>
            {[330,334,338].map(x => <line key={x} x1={x} y1="55" x2={x} y2="116" stroke="#C6A66B" strokeWidth="0.4" strokeOpacity="0.3"/>)}

            {/* Grand arch — full, closed shape from pillar top to pillar top */}
            <path d="M32 116 L32 56 C32 24 80 6 180 6 C280 6 328 24 328 56 L328 116"
              stroke="#C6A66B" strokeWidth="2" fill="none" strokeLinecap="round"/>
            {/* Inner dashed arch */}
            <path d="M42 116 L42 60 C42 32 86 14 180 14 C274 14 318 32 318 60 L318 116"
              stroke="#C6A66B" strokeWidth="0.8" strokeDasharray="5 3" fill="none" opacity="0.6"/>
            {/* Innermost hairline */}
            <path d="M52 116 L52 65 C52 40 90 22 180 22 C270 22 308 40 308 65 L308 116"
              stroke="#C6A66B" strokeWidth="0.4" fill="none" opacity="0.35"/>

            {/* Keystone at apex */}
            <circle cx="180" cy="6" r="10" fill="#C6A66B" fillOpacity="0.18" stroke="#C6A66B" strokeWidth="0.8"/>
            <circle cx="180" cy="6" r="6" fill="#C6A66B" fillOpacity="0.35" stroke="#C6A66B" strokeWidth="1"/>
            <circle cx="180" cy="6" r="3" fill="#DFC48E"/>
            <circle cx="180" cy="6" r="1.2" fill="#C6A66B"/>
            {Array.from({length:8},(_,i)=>{
              const a=(i*45)*Math.PI/180;
              return <line key={i} x1="180" y1="6" x2={180+Math.sin(a)*16} y2={6-Math.cos(a)*16}
                stroke="#C6A66B" strokeWidth="0.5" strokeOpacity="0.4"/>;
            })}
            {/* Hanging ornament from keystone */}
            <line x1="180" y1="16" x2="180" y2="28" stroke="#C6A66B" strokeWidth="0.8" strokeOpacity="0.6"/>
            <circle cx="180" cy="30" r="3" fill="#C6A66B" stroke="#9E7E45" strokeWidth="0.5"/>
            <circle cx="180" cy="30" r="1.5" fill="#F5E0A0"/>

            {/* Arch bead accents */}
            {[[90,14],[270,14],[52,48],[308,48],[34,78],[326,78]].map(([cx,cy],i)=>(
              <circle key={i} cx={cx} cy={cy} r="2.5" fill="#C6A66B" stroke="#9E7E45" strokeWidth="0.5"/>
            ))}

            {/* Left foliage spandrel */}
            <g opacity="0.45">
              <path d="M36 95 C52 78 68 72 80 76 C66 80 52 88 36 95 Z" fill="#174C3C"/>
              <path d="M36 80 C50 62 65 56 78 60 C65 66 52 76 36 80 Z" fill="#174C3C" fillOpacity="0.65"/>
            </g>
            {/* Right foliage spandrel */}
            <g opacity="0.45">
              <path d="M324 95 C308 78 292 72 280 76 C294 80 308 88 324 95 Z" fill="#174C3C"/>
              <path d="M324 80 C310 62 295 56 282 60 C295 66 308 76 324 80 Z" fill="#174C3C" fillOpacity="0.65"/>
            </g>

            {/* Lotus buds on arch curve */}
            {[[90,14],[270,14]].map(([cx,cy],i)=>(
              <g key={`lb-${i}`}>
                <path d={`M${cx} ${cy+10} C${cx-5} ${cy+6} ${cx-4} ${cy} ${cx} ${cy-5} C${cx+4} ${cy} ${cx+5} ${cy+6} ${cx} ${cy+10} Z`}
                  fill="#D99A9D" fillOpacity="0.8" stroke="#C6A66B" strokeWidth="0.8"/>
                <path d={`M${cx} ${cy+10} C${cx-9} ${cy+7} ${cx-7} ${cy} ${cx-3} ${cy-2} C${cx-3} ${cy+4} ${cx-1} ${cy+8} ${cx} ${cy+10} Z`}
                  fill="#ECC5C8" fillOpacity="0.7"/>
                <path d={`M${cx} ${cy+10} C${cx+9} ${cy+7} ${cx+7} ${cy} ${cx+3} ${cy-2} C${cx+3} ${cy+4} ${cx+1} ${cy+8} ${cx} ${cy+10} Z`}
                  fill="#ECC5C8" fillOpacity="0.7"/>
              </g>
            ))}

            {/* Base ground beads */}
            {Array.from({length:15},(_,i)=>22+i*22).map(x=>(
              <circle key={x} cx={x} cy="118" r={x===22+7*22?2.5:1.2} fill="#C6A66B" fillOpacity={x===22+7*22?1:0.4}/>
            ))}
          </svg>
        </div>

        {/* ── EMBEDDED MAP CARD ─────────────────────────────── */}
        <div className="w-full border border-gold/45 rounded-2xl p-1 bg-gradient-to-b from-gold/20 via-transparent to-gold/10 shadow-palace-elevation overflow-hidden">
          <div className="relative border border-gold/20 rounded-xl overflow-hidden bg-ivory-light/95">

            {/* Map Frame Header */}
            <div className="relative bg-gradient-to-r from-palace-green via-emerald-deep to-palace-dark px-5 py-3.5 flex items-center justify-between">
              <div className="absolute inset-0 jali-watermark opacity-[0.15] pointer-events-none" />
              <div className="relative z-10 flex items-center gap-2.5">
                <LotusMotif variant="crest" size="md" className="w-9 h-9 opacity-95 text-gold" />
                <div>
                  <p className="font-display text-base sm:text-lg font-normal tracking-wide text-gold-champagne leading-tight">
                    {WEDDING_VENUE.name}
                  </p>
                  <p className="font-caps text-[9px] sm:text-[10px] tracking-monumental text-gold/80 uppercase font-semibold">
                    Bannerghatta Road · Bangalore
                  </p>
                </div>
              </div>
              {/* Satellite badge */}
              <div className="relative z-10 px-2.5 py-1 rounded border border-gold/40 bg-gold/10">
                <span className="font-caps text-[9px] sm:text-[10px] tracking-wider text-gold uppercase font-bold">Satellite View</span>
              </div>
            </div>

            {/* Google Maps Satellite Iframe */}
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <iframe
                title="Tranquil Wedding Venue - Bannerghatta Road, Bangalore"
                src="https://maps.google.com/maps?q=Tranquil+Wedding+Venue,+Sakalavara+Road,+Bannerghatta+Road,+Bangalore+560083,+India&t=k&z=17&output=embed&iwloc=near"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              {/* Vignette overlay to blend with our palette */}
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(198,166,107,0.12)]" />
              {/* Corner Bead Accents over map */}
              {['top-2 left-2', 'top-2 right-2', 'bottom-2 left-2', 'bottom-2 right-2'].map((pos, i) => (
                <div key={i} className={`absolute ${pos} w-3 h-3 pointer-events-none`}>
                  <div className="w-2 h-2 rounded-full bg-gold/70 shadow-sm" />
                </div>
              ))}
            </div>

            {/* Address Strip */}
            <div className="px-5 sm:px-7 py-5 border-t border-gold/25 bg-ivory-light/90">
              <div className="flex items-start gap-3.5">
                {/* Palace-pin icon (SVG) */}
                <svg viewBox="0 0 14 20" fill="none" className="w-4 h-6 flex-shrink-0 mt-0.5 text-gold" aria-hidden="true">
                  <path d="M7 0 C3.13 0 0 3.13 0 7 C0 12.25 7 20 7 20 C7 20 14 12.25 14 7 C14 3.13 10.87 0 7 0 Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="0.8"/>
                  <circle cx="7" cy="7" r="2.5" fill="currentColor"/>
                </svg>
                <div>
                  <p className="font-serif font-semibold text-base sm:text-lg text-palace-green leading-tight mb-1.5">
                    {WEDDING_VENUE.name}
                  </p>
                  {WEDDING_VENUE.address.map((line, i) => (
                    <p key={i} className="font-serif text-sm sm:text-base text-palace-green/80 leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── GET DIRECTIONS BUTTON ────────────────────────── */}
        <button
          onClick={handleGetDirections}
          className="
            group relative mt-7 flex items-center justify-center gap-3
            w-full max-w-xs px-7 py-4.5 rounded-xl
            border border-gold/60 bg-gradient-to-b from-ivory to-ivory-dark
            hover:from-emerald-deep hover:to-palace-green
            shadow-gold-subtle hover:shadow-palace-elevation
            text-palace-green hover:text-gold-champagne
            transition-all duration-400
          "
          aria-label="Open Google Maps directions to Tranquil Wedding Venue"
        >
          {/* Navigation Arrow Icon */}
          <svg viewBox="0 0 20 20" fill="none" className="w-4.5 h-4.5 text-gold group-hover:text-gold-champagne flex-shrink-0 transition-colors duration-300" aria-hidden="true">
            <path d="M10 2 L18 10 L10 18 L10 13 C5.58 13 2 14.58 2 18 C2 10 5.58 7 10 7 Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-caps text-sm sm:text-base tracking-royal font-bold uppercase">
            Get Directions
          </span>
          {/* Hover shimmer */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </button>

        {/* Decorative bottom pillar pair */}
        <div className="w-full max-w-xs mt-8 opacity-30">
          <RoyalOrnament variant="border-strip" className="opacity-60 text-gold" />
        </div>

      </div>
    </section>
  );
}

export default LocationSection;
