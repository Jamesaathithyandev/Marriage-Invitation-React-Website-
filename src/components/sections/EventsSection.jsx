import React from 'react';
import { WEDDING_EVENTS } from '../../data/weddingData';
import { LotusMotif } from '../decorative/LotusMotif';
import { PeacockMotif } from '../decorative/PeacockMotif';
import { OrnamentalDivider } from '../decorative/OrnamentalDivider';

/**
 * EventsSection — Royal Wedding Timeline & Celebrations
 *
 * Features:
 * - Single JS data source (`WEDDING_EVENTS` in `src/data/weddingData.js`)
 * - Lotus timeline markers along an antique gold vertical spine
 * - Palace-inspired arched frames (avoiding generic rectangular boxes)
 * - Muhurtham Ceremony visually highlighted as the primary sacred union
 */
const EVENT_THEMES = {
  mehendi: {
    border: 'border-[#2D6A4F]/45 hover:border-[#2D6A4F]/70',
    outerBg: 'bg-gradient-to-b from-[#1B4332]/22 via-[#2D6A4F]/12 to-[#84A98C]/10',
    shadow: 'shadow-[0_4px_24px_rgba(45,106,79,0.16)]',
    cornerGlow: 'from-[#2D6A4F]/14 via-[#84A98C]/10 to-transparent',
    markerRing: 'border-[#2D6A4F] text-[#2D6A4F] ring-2 ring-[#2D6A4F]/30 bg-emerald-50/80',
    titleColor: 'text-[#1B4332]',
    dayColor: 'text-[#2D6A4F]',
    timePill: 'border-[#2D6A4F]/40 bg-[#2D6A4F]/8 text-[#1B4332]',
    timeIcon: 'text-[#2D6A4F]',
    tagBg: 'border-[#2D6A4F]/30 bg-[#1B4332]/5 text-[#1B4332]',
  },
  haldi: {
    border: 'border-[#D97706]/45 hover:border-[#D97706]/70',
    outerBg: 'bg-gradient-to-b from-[#D97706]/22 via-[#FACC15]/14 to-[#FEF08A]/10',
    shadow: 'shadow-[0_4px_24px_rgba(217,119,6,0.16)]',
    cornerGlow: 'from-[#FACC15]/18 via-[#D97706]/10 to-transparent',
    markerRing: 'border-[#D97706] text-[#D97706] ring-2 ring-[#D97706]/30 bg-amber-50/80',
    titleColor: 'text-[#92400E]',
    dayColor: 'text-[#D97706]',
    timePill: 'border-[#D97706]/40 bg-[#FEF08A]/35 text-[#92400E]',
    timeIcon: 'text-[#D97706]',
    tagBg: 'border-[#D97706]/30 bg-[#D97706]/5 text-[#92400E]',
  },
  sangeet: {
    border: 'border-[#3730A3]/45 hover:border-[#C026D3]/70',
    outerBg: 'bg-gradient-to-b from-[#0D9488]/22 via-[#3730A3]/18 to-[#C026D3]/12',
    shadow: 'shadow-[0_4px_24px_rgba(55,48,163,0.16)]',
    cornerGlow: 'from-[#0D9488]/14 via-[#C026D3]/10 to-transparent',
    markerRing: 'border-[#3730A3] text-[#3730A3] ring-2 ring-[#3730A3]/30 bg-indigo-50/80',
    titleColor: 'bg-gradient-to-r from-[#0D9488] via-[#3730A3] to-[#C026D3] bg-clip-text text-transparent',
    dayColor: 'text-[#3730A3]',
    timePill: 'border-[#3730A3]/40 bg-[#3730A3]/8 text-[#312E81]',
    timeIcon: 'text-[#0D9488]',
    tagBg: 'border-[#3730A3]/30 bg-[#3730A3]/5 text-[#312E81]',
  },
};

export function EventsSection() {
  return (
    <section
      id="events"
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 md:px-8 bg-ivory paper-grain overflow-hidden"
      aria-label="Wedding Celebrations and Itinerary"
    >
      {/* ── Background Aura & Jali Lattice ───────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[600px] bg-gradient-to-b from-gold-champagne/10 via-transparent to-peacock-teal/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 jali-watermark opacity-[0.16]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">

        {/* ── SECTION HEADER ───────────────────────────────── */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-2">
            <div className="h-[0.5px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-gold" />
            <span className="font-caps text-[10px] sm:text-xs tracking-monumental text-gold-deep uppercase font-semibold">
              Sacred Festivities
            </span>
            <div className="h-[0.5px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-palace-green font-normal tracking-wide">
            Wedding Itinerary
          </h2>
          <p className="font-serif italic text-xs sm:text-sm text-palace-green/70 mt-1 max-w-md mx-auto">
            "Join us across two days of joyous traditions, heartfelt ceremonies, and royal celebrations."
          </p>

          <div className="mt-3 flex justify-center">
            <OrnamentalDivider motif="peacock-eye" lineStyle="dual" className="max-w-xs" />
          </div>
        </div>

        {/* ── TIMELINE CONTAINER ───────────────────────────── */}
        <div className="relative w-full max-w-4xl mx-auto">

          {/* Central Vertical Gold Spine (Desktop: Centre, Mobile: Left) */}
          <div className="absolute top-6 bottom-6 left-6 md:left-1/2 md:-translate-x-1/2 w-[2px] bg-gradient-to-b from-gold/30 via-gold to-gold/30 pointer-events-none" />
          {/* Parallel hairline */}
          <div className="hidden md:block absolute top-6 bottom-6 left-1/2 -translate-x-[5px] w-[0.5px] bg-gold/30 pointer-events-none" />
          <div className="hidden md:block absolute top-6 bottom-6 left-1/2 translate-x-[4px] w-[0.5px] bg-gold/30 pointer-events-none" />

          {/* Event Cards Flow */}
          <div className="space-y-12 sm:space-y-16">
            {WEDDING_EVENTS.map((event, index) => {
              const isEven = index % 2 === 0;
              const isMain = Boolean(event.isMain);
              const theme = EVENT_THEMES[event.id] || {
                border: isMain ? 'border-gold' : 'border-gold/40',
                outerBg: isMain
                  ? 'bg-gradient-to-b from-gold/30 via-gold/10 to-gold/20'
                  : 'bg-gradient-to-b from-gold/15 via-transparent to-gold/5',
                shadow: isMain ? 'shadow-gold-glow' : 'shadow-palace-elevation',
                cornerGlow: 'from-gold/10 to-transparent',
                markerRing: isMain
                  ? 'border-gold ring-4 ring-gold/30 bg-ivory-light text-gold-deep shadow-gold-glow'
                  : 'border-gold bg-ivory text-gold shadow-gold-glow',
                titleColor: 'text-gold-foil',
                dayColor: 'text-gold-deep',
                timePill: 'border-gold/50 bg-ivory-dark/60 text-palace-green',
                timeIcon: 'text-gold-deep',
                tagBg: 'border-gold/30 bg-gold/5 text-gold-deep',
              };

              return (
                <div
                  key={event.id}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* ── 1. TIMELINE LOTUS MARKER ────────────── */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center transition-transform duration-300 hover:scale-110 ${theme.markerRing}`}
                    >
                      <LotusMotif variant="crest" size="md" className="w-7 h-7 sm:w-9 sm:h-9" />
                    </div>
                  </div>

                  {/* ── 2. EVENT CARD (PALACE-ARCH SHAPE) ──── */}
                  <div
                    className={`w-full md:w-[calc(50%-2.5rem)] pl-16 md:pl-0 ${
                      isEven ? 'md:pr-0 md:pl-6 text-left' : 'md:pl-0 md:pr-6 text-left md:text-right'
                    }`}
                  >
                    <div
                      className={`relative border rounded-2xl p-0.5 transition-all duration-300 hover:-translate-y-1 ${theme.border} ${theme.outerBg} ${theme.shadow}`}
                    >
                      {/* Card Content Container */}
                      <div className="relative border border-gold/15 rounded-xl px-5 sm:px-7 py-6 bg-ivory-light/95 overflow-hidden">

                        {/* Corner ambient color wash */}
                        <div className={`absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-br ${theme.cornerGlow} rounded-full blur-2xl pointer-events-none`} />

                        {/* Subtle Jali Background in Card */}
                        <div className="absolute inset-0 jali-dense opacity-[0.04] pointer-events-none" />

                        {/* Inner Double Hairline Inset */}
                        <div className="absolute inset-2 sm:inset-3 border border-gold/15 rounded-lg pointer-events-none" />

                        {/* Main Event Highlight Badge */}
                        {isMain && (
                          <div className="mb-2.5 flex items-center">
                            <span className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 rounded-full border border-gold/60 bg-gradient-to-r from-emerald-deep via-[#32114E] to-emerald-deep text-gold-champagne text-[9.5px] sm:text-xs font-caps tracking-wider sm:tracking-royal uppercase font-bold shadow-sm whitespace-nowrap">
                              <span className="text-gold text-[8px] sm:text-[10px]">★</span>
                              <span>Main Auspicious Ceremony</span>
                              <span className="text-gold text-[8px] sm:text-[10px]">★</span>
                            </span>
                          </div>
                        )}


                        {/* Event Dress Code Tag */}
                        {event.dressCode && (
                          <div className="mb-3">
                            <div className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 rounded-xl sm:rounded-full border shadow-2xs backdrop-blur-xs max-w-full text-center ${theme.tagBg}`}>
                              <span className="font-caps text-[8.5px] sm:text-[10px] tracking-wide sm:tracking-wider font-bold uppercase leading-snug">
                                Dress Code: {event.dressCode}
                              </span>
                              {event.palette && (
                                <div className="flex items-center -space-x-1 flex-shrink-0">
                                  {event.palette.swatches.map((sw, sIdx) => (
                                    <span
                                      key={sIdx}
                                      title={sw.name}
                                      className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border border-white/90 shadow-2xs inline-block"
                                      style={{ backgroundColor: sw.color }}
                                    />
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Day & Date Line */}
                        <div className="space-y-0.5 mb-2">
                          <span className={`font-caps text-xs sm:text-sm tracking-monumental uppercase font-bold block ${theme.dayColor}`}>
                            {event.day}
                          </span>
                          <p className="font-serif font-semibold text-sm sm:text-base text-palace-green">
                            {event.date}
                          </p>
                        </div>

                        {/* Event Title */}
                        <h3 className={`font-caps text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wider leading-tight my-2 ${theme.titleColor}`}>
                          {event.title}
                        </h3>

                        {/* Time Pill Badge */}
                        <div className={`my-2.5 sm:my-3 inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full border text-xs sm:text-sm font-serif font-medium whitespace-nowrap ${theme.timePill}`}>
                          <svg viewBox="0 0 16 16" fill="none" className={`w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 ${theme.timeIcon}`} aria-hidden="true">
                            <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2" />
                            <path d="M8 4.5 V8 L10.5 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                          </svg>
                          <span className="tracking-wide font-medium">{event.time}</span>
                        </div>

                        {/* Event Description */}
                        <p className="font-serif italic text-sm sm:text-base text-palace-green/80 leading-relaxed mt-2">
                          "{event.description}"
                        </p>

                        {/* Suggested Attire Colors */}
                        {event.palette && (
                          <div className="mt-3.5 pt-2.5 border-t border-gold/20 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
                            <span className="font-caps text-[9px] font-bold tracking-wider uppercase text-palace-green/60">
                              Suggested Colors:
                            </span>
                            {event.palette.swatches.map((sw, i) => (
                              <span key={i} className="inline-flex items-center gap-1.5 text-[11px] font-serif text-palace-green/85">
                                <span className="w-2 h-2 rounded-full inline-block border border-black/10 shadow-2xs" style={{ backgroundColor: sw.color }} />
                                <span>{sw.name}</span>
                              </span>
                            ))}
                          </div>
                        )}


                        {/* Bottom Motif Accent */}
                        <div className="mt-3 flex items-center justify-center opacity-60">
                          {isMain ? (
                            <LotusMotif variant="crest" size="md" className="w-10 h-7 opacity-90" />
                          ) : (
                            <PeacockMotif variant="feather-crown" size="md" className="w-10 h-6 opacity-90" />
                          )}
                        </div>

                      </div>
                    </div>
                  </div>

                  {/* Spacer for opposite column (Desktop) */}
                  <div className="hidden md:block w-[calc(50%-2.5rem)]" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

export default EventsSection;
