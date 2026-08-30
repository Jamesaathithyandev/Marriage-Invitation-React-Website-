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
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gold bg-ivory flex items-center justify-center shadow-gold-glow transition-transform duration-300 hover:scale-110 ${
                        isMain ? 'ring-4 ring-gold/30 bg-ivory-light' : ''
                      }`}
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
                      className={`relative border rounded-b-2xl rounded-t-lg p-0.5 shadow-palace-elevation transition-all duration-300 hover:-translate-y-1 ${
                        isMain
                          ? 'border-gold bg-gradient-to-b from-gold/30 via-gold/10 to-gold/20 shadow-gold-glow'
                          : 'border-gold/40 bg-gradient-to-b from-gold/15 via-transparent to-gold/5'
                      }`}
                    >
                      {/* Ornamental Card Header — complete arch crown with gold beads */}
                      <div className="w-full bg-ivory-light/95 rounded-t-md px-5 sm:px-6 pt-3 pb-1 flex flex-col items-center gap-1.5">
                        <svg viewBox="0 0 200 50" fill="none" className="w-40 sm:w-52 h-auto" aria-hidden="true">
                          {/* Left base line */}
                          <line x1="0" y1="48" x2="60" y2="48" stroke="#C6A66B" strokeWidth="0.8" strokeOpacity="0.55"/>
                          {/* Right base line */}
                          <line x1="140" y1="48" x2="200" y2="48" stroke="#C6A66B" strokeWidth="0.8" strokeOpacity="0.55"/>

                          {/* Complete arch — rises from base, comes back down */}
                          <path d="M55 48 C55 28 72 12 100 8 C128 12 145 28 145 48"
                            stroke="#C6A66B" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
                          {/* Inner dashed arch */}
                          <path d="M64 48 C64 32 78 18 100 14 C122 18 136 32 136 48"
                            stroke="#C6A66B" strokeWidth="0.6" strokeDasharray="3 2" fill="none" opacity="0.55"/>

                          {/* Keystone */}
                          <circle cx="100" cy="8" r="5.5" fill="#C6A66B" fillOpacity="0.2" stroke="#C6A66B" strokeWidth="0.8"/>
                          <circle cx="100" cy="8" r="3" fill="#DFC48E" stroke="#C6A66B" strokeWidth="0.6"/>
                          <circle cx="100" cy="8" r="1.2" fill="#C6A66B"/>

                          {/* Bead accents on arch */}
                          {[[72,12],[128,12],[58,34],[142,34]].map(([cx,cy],i)=>(
                            <circle key={i} cx={cx} cy={cy} r="2" fill="#C6A66B"/>
                          ))}

                          {/* Side lotus buds */}
                          {[[20,45],[180,45]].map(([cx,cy],i)=>(
                            <g key={i}>
                              <path d={`M${cx} ${cy} C${cx-3} ${cy-6} ${cx-2} ${cy-11} ${cx} ${cy-14} C${cx+2} ${cy-11} ${cx+3} ${cy-6} ${cx} ${cy} Z`}
                                fill="#DFC48E" stroke="#C6A66B" strokeWidth="0.7"/>
                              <path d={`M${cx} ${cy} C${cx-6} ${cy-4} ${cx-5} ${cy-10} ${cx-1} ${cy-12} C${cx-2} ${cy-7} ${cx-1} ${cy-3} ${cx} ${cy} Z`}
                                fill="#DCA8AB" fillOpacity="0.85"/>
                              <path d={`M${cx} ${cy} C${cx+6} ${cy-4} ${cx+5} ${cy-10} ${cx+1} ${cy-12} C${cx+2} ${cy-7} ${cx+1} ${cy-3} ${cx} ${cy} Z`}
                                fill="#DCA8AB" fillOpacity="0.85"/>
                              <circle cx={cx} cy={cy-14} r="1.5" fill="#C6A66B"/>
                            </g>
                          ))}

                          {/* Hanging drop from keystone */}
                          <line x1="100" y1="13.5" x2="100" y2="22" stroke="#C6A66B" strokeWidth="0.7" strokeOpacity="0.6"/>
                          <circle cx="100" cy="23" r="2" fill="#C6A66B" fillOpacity="0.6"/>
                        </svg>
                      </div>

                      {/* Card Content Container */}
                      <div className="relative border-t-0 border border-gold/15 rounded-b-xl px-5 sm:px-7 pb-6 pt-1 bg-ivory-light/95 overflow-hidden">

                        {/* Subtle Jali Background in Card */}
                        <div className="absolute inset-0 jali-dense opacity-[0.04] pointer-events-none" />

                        {/* Inner Double Hairline Inset */}
                        <div className="absolute inset-2 sm:inset-3 border border-gold/15 rounded-lg pointer-events-none" />

                        {/* Main Event Highlight Badge */}
                        {isMain && (
                          <div className="mb-2">
                            <span className="inline-block px-3 py-0.5 rounded-full border border-gold/60 bg-emerald-deep/90 text-gold-light text-[9px] font-caps tracking-monumental uppercase font-semibold">
                              ★ Main Auspicious Ceremony ★
                            </span>
                          </div>
                        )}

                        {/* Day & Date Line */}
                        <div className="space-y-0.5 mb-1.5">
                          <span className="font-caps text-[9px] sm:text-[10px] tracking-monumental text-gold-deep uppercase font-semibold block">
                            {event.day}
                          </span>
                          <p className="font-serif font-semibold text-xs sm:text-sm text-palace-green">
                            {event.date}
                          </p>
                        </div>

                        {/* Event Title */}
                        <h3 className="font-caps text-xl sm:text-2xl md:text-3xl text-gold-foil font-semibold tracking-wider leading-tight my-1.5">
                          {event.title}
                        </h3>

                        {/* Time Pill Badge */}
                        <div className="my-2.5 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-gold/50 bg-ivory-dark/60 text-palace-green text-xs font-serif font-medium">
                          <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 text-gold-deep" aria-hidden="true">
                            <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2" />
                            <path d="M8 4.5 V8 L10.5 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                          </svg>
                          <span className="tracking-wide">{event.time}</span>
                        </div>

                        {/* Event Description */}
                        <p className="font-serif italic text-xs sm:text-sm text-palace-green/75 leading-relaxed mt-2">
                          "{event.description}"
                        </p>

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
