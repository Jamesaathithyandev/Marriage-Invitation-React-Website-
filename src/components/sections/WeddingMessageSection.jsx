import React from 'react';
import { WEDDING_MESSAGES } from '../../data/weddingData';
import { LotusMotif } from '../decorative/LotusMotif';
import { PeacockMotif } from '../decorative/PeacockMotif';
import { RoyalOrnament } from '../decorative/RoyalOrnament';

/**
 * WeddingMessageSection — Generous Whitespace & Royal Letter of Invitation
 *
 * Quotes:
 * 1. "Two Hearts. Two Traditions. One Beautiful Beginning."
 * 2. "With hearts full of joy, we invite you to join us as we tie the knot and celebrate with the dearest people in our hearts."
 */
export function WeddingMessageSection() {
  return (
    <section
      id="message"
      className="relative w-full py-20 sm:py-28 px-5 sm:px-8 bg-ivory paper-grain overflow-hidden text-center flex flex-col items-center justify-center"
      aria-label="Wedding Message and Invitation"
    >
      {/* ── Background Subtle Glow & Jali ───────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[550px] bg-gradient-to-b from-gold-champagne/10 via-ivory/0 to-emerald-deep/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 jali-watermark opacity-[0.14]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">

        {/* Top Auspicious Lotus Crest */}
        <div className="mb-6 opacity-90 drop-shadow-sm">
          <LotusMotif variant="crest" size="md" />
        </div>

        {/* Lead Quote (Script & Serif) */}
        <div className="space-y-3 mb-8">
          <p className="font-caps text-[10px] sm:text-xs tracking-monumental text-gold-deep uppercase font-semibold">
            A Celebratory Union
          </p>
          <h2 className="font-script text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-palace-green leading-tight drop-shadow-sm px-2">
            "{WEDDING_MESSAGES.leadQuote}"
          </h2>
        </div>

        {/* Royal Ornamental Divider */}
        <div className="w-full max-w-md my-4 flex items-center justify-center gap-3">
          <div className="h-[0.5px] flex-1 bg-gradient-to-r from-transparent via-gold/50 to-gold" />
          <div className="flex items-center gap-1.5">
            <div className="w-1 h-1 rotate-45 bg-gold" />
            <PeacockMotif variant="feather-crown" size="sm" className="w-7 h-4 text-gold opacity-80" />
            <div className="w-1 h-1 rotate-45 bg-gold" />
          </div>
          <div className="h-[0.5px] flex-1 bg-gradient-to-l from-transparent via-gold/50 to-gold" />
        </div>

        {/* Invitation Message Body */}
        <div className="max-w-2xl px-4 sm:px-6 my-6">
          <p className="font-serif text-lg sm:text-xl md:text-2xl text-palace-green/85 leading-relaxed sm:leading-loose font-normal">
            "{WEDDING_MESSAGES.invitationText}"
          </p>
        </div>

        {/* Formal Invitation Signoff */}
        <div className="mt-8 space-y-1.5">
          <p className="font-caps text-xs sm:text-sm tracking-royal text-gold-deep font-semibold uppercase">
            Vinay &amp; Kishma
          </p>
          <p className="font-serif italic text-xs sm:text-sm text-palace-green/60">
            Along with the Sahani &amp; Xavier Families
          </p>
        </div>

        {/* Section Divider */}
        <div className="w-full max-w-lg mt-12 pt-4 flex justify-center">
          <RoyalOrnament variant="section-divider" className="opacity-60 text-gold" />
        </div>

      </div>
    </section>
  );
}

export default WeddingMessageSection;
