import React, { useState, useEffect } from 'react';
import { LotusMotif } from '../decorative/LotusMotif';
import { PeacockMotif } from '../decorative/PeacockMotif';
import { OrnamentalDivider } from '../decorative/OrnamentalDivider';
import {
  getHeadcount,
  incrementRsvp,
  decrementRsvp,
  getLocalRsvpStatus,
  setLocalRsvpStatus
} from '../../services/counterService';

/**
 * RsvpSection — 1-Click Sacred Attendance RSVP & Live Headcount
 *
 * Integrated with CounterAPI V2 (marriage-headcount)
 * Supports:
 * - Single-click RSVP confirmation
 * - Warm, welcoming celebration acknowledgment
 * - Live synchronized headcount badge
 * - Local device persistence
 * - Palace aesthetic (lotus motifs, gold dual-rings, emerald foil)
 */
export function RsvpSection() {
  const [status, setStatus] = useState(() => getLocalRsvpStatus());
  const [headcount, setHeadcount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showSparkles, setShowSparkles] = useState(false);

  // Fetch initial headcount on mount
  useEffect(() => {
    let isMounted = true;
    getHeadcount().then((res) => {
      if (isMounted && res.success) {
        setHeadcount(res.count);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  // Handle single-click "Joyfully Attending"
  const handleAttending = async () => {
    if (loading || status === 'attending') return;
    setLoading(true);
    setShowSparkles(true);

    // Optimistic UI update
    setStatus('attending');
    setHeadcount((prev) => prev + 1);

    const result = await incrementRsvp();
    if (result.success && result.count) {
      setHeadcount(result.count);
    }
    setLoading(false);

    // Reset sparkle animation after 3.5s
    setTimeout(() => {
      setShowSparkles(false);
    }, 3500);
  };

  // Handle "Celebrating in Spirit" (Decline)
  const handleDecline = () => {
    if (status === 'attending') {
      decrementRsvp();
      setHeadcount((prev) => Math.max(0, prev - 1));
    }
    setLocalRsvpStatus('declined');
    setStatus('declined');
  };

  // Reset / Change RSVP response
  const handleReset = async () => {
    if (loading) return;
    setLoading(true);
    if (status === 'attending') {
      await decrementRsvp();
      setHeadcount((prev) => Math.max(0, prev - 1));
    }
    setLocalRsvpStatus(null);
    setStatus(null);
    setLoading(false);
  };

  return (
    <section
      id="rsvp"
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 md:px-8 bg-ivory paper-grain overflow-hidden text-center"
      aria-label="RSVP and Headcount Confirmation"
    >
      {/* ── Background Atmosphere ─────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[550px] bg-gradient-to-b from-gold-champagne/18 via-transparent to-emerald-deep/8 rounded-full blur-3xl" />
        <div className="absolute inset-0 jali-watermark opacity-[0.16]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">

        {/* ── SECTION HEADER ─────────────────────────────────── */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center justify-center gap-3 mb-2">
            <div className="h-[0.5px] w-8 sm:w-14 bg-gradient-to-r from-transparent to-gold" />
            <span className="font-caps text-[10px] sm:text-xs tracking-monumental text-gold-deep uppercase font-semibold">
              Sacred Attendance
            </span>
            <div className="h-[0.5px] w-8 sm:w-14 bg-gradient-to-l from-transparent to-gold" />
          </div>

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-palace-green font-semibold tracking-wide">
            Are You Attending Our Wedding?
          </h2>

          <p className="font-serif text-sm sm:text-base text-palace-green/85 mt-2 max-w-md mx-auto leading-relaxed">
            If you are joining us for the celebrations on <strong className="font-semibold text-palace-green">24th &amp; 25th October 2026</strong>, please click the button below to let us know — it only takes a second!
          </p>

          <div className="mt-3 flex justify-center">
            <OrnamentalDivider motif="lotus" lineStyle="dual" className="max-w-xs" />
          </div>
        </div>

        {/* ── MAIN INTERACTIVE RSVP CARD ─────────────────────── */}
        <div className="w-full max-w-xl border border-gold/45 rounded-3xl p-1 bg-gradient-to-b from-gold/25 via-gold/10 to-gold/20 shadow-palace-elevation transition-all duration-500">
          <div className="relative border border-gold/25 rounded-2xl px-5 sm:px-8 py-8 sm:py-10 bg-ivory-light/95 overflow-hidden">

            {/* Inner Jali Subtle Pattern */}
            <div className="absolute inset-0 jali-dense opacity-[0.035] pointer-events-none" />

            {/* Corner Decorative Lotus Accents */}
            <div className="absolute top-2 left-2 opacity-40">
              <LotusMotif variant="corner" size="sm" className="w-6 h-6" />
            </div>
            <div className="absolute top-2 right-2 opacity-40 -scale-x-100">
              <LotusMotif variant="corner" size="sm" className="w-6 h-6" />
            </div>
            <div className="absolute bottom-2 left-2 opacity-40 -scale-y-100">
              <LotusMotif variant="corner" size="sm" className="w-6 h-6" />
            </div>
            <div className="absolute bottom-2 right-2 opacity-40 scale-x-[-1] scale-y-[-1]">
              <LotusMotif variant="corner" size="sm" className="w-6 h-6" />
            </div>

            {/* ══════════════════════════════════════════════════════
                STATE 1: NOT YET RSVP'D (Action Prompt)
               ══════════════════════════════════════════════════════ */}
            {!status && (
              <div className="space-y-6">
                <div className="flex justify-center">
                  <LotusMotif variant="crest" size="lg" className="w-16 h-16 opacity-95 animate-float-subtle" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-display text-xl sm:text-2xl text-palace-green font-normal">
                    Kindly RSVP With A Single Click
                  </h3>
                  <p className="font-serif text-xs sm:text-sm text-palace-green/75 max-w-sm mx-auto">
                    Please let us know if you will be joining our wedding festivities on <span className="font-semibold text-palace-green">24th &amp; 25th October 2026</span>.
                  </p>
                </div>

                {/* Big Royal 1-Click RSVP Button */}
                <div className="pt-2 flex flex-col items-center gap-3">
                  <button
                    onClick={handleAttending}
                    disabled={loading}
                    className="
                      group relative w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-4.5 rounded-2xl
                      bg-gradient-to-r from-emerald-deep via-palace-green to-emerald-deep
                      border-2 border-gold/70 shadow-gold-glow
                      hover:shadow-[0_0_30px_rgba(198,166,107,0.45)]
                      hover:scale-[1.02] active:scale-[0.98]
                      transition-all duration-300 overflow-hidden cursor-pointer
                    "
                    aria-label="Confirm attendance for Vinay and Kishma wedding"
                  >
                    {/* Golden Light Sweep Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-champagne/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                    <div className="relative z-10 flex items-center justify-center gap-3">
                      <span className="text-gold text-xl">✦</span>
                      <span className="font-caps text-base sm:text-lg tracking-royal font-bold text-gold-champagne uppercase drop-shadow-sm">
                        {loading ? 'Registering...' : 'Yes, Count Me In!'}
                      </span>
                      <span className="text-gold text-xl">✦</span>
                    </div>
                  </button>

                  {/* Alternative Decline Option */}
                  <button
                    onClick={handleDecline}
                    className="mt-2 text-[11px] sm:text-xs font-serif italic text-palace-green/60 hover:text-palace-green underline decoration-gold/40 hover:decoration-gold transition-colors duration-200 cursor-pointer"
                  >
                    Will celebrate in spirit from afar (Cannot Attend)
                  </button>
                </div>

                {/* Live Headcount Badge */}
                <div className="pt-4 border-t border-gold/20 flex items-center justify-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-caps text-[10px] sm:text-[11px] tracking-monumental text-gold-deep uppercase font-semibold">
                    {headcount > 0 ? (
                      <>✦ {headcount} {headcount === 1 ? 'Loved One Confirmed' : 'Loved Ones Confirmed'} ✦</>
                    ) : (
                      <>✦ Live Headcount Tracking ✦</>
                    )}
                  </span>
                </div>
              </div>
            )}

            {/* ══════════════════════════════════════════════════════
                STATE 2: CONFIRMED ATTENDANCE (Warm Welcome Response)
               ══════════════════════════════════════════════════════ */}
            {status === 'attending' && (
              <div className="space-y-6 animate-fadeIn">

                {/* Golden Sparkle Celebration Banner */}
                <div className="relative">
                  <div className="flex justify-center">
                    <LotusMotif variant="bloom" size="lg" className="w-20 h-20 sm:w-24 sm:h-24 opacity-95" />
                  </div>
                  {showSparkles && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-28 h-28 rounded-full bg-gold/20 animate-ping opacity-75" />
                    </div>
                  )}
                </div>

                {/* Confirmed Pill */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-600/40 bg-emerald-deep/10 text-emerald-deep">
                  <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-emerald-600">
                    <path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-caps text-[10px] sm:text-xs tracking-monumental font-bold uppercase text-emerald-deep">
                    Blessing Registered with Joy
                  </span>
                </div>

                {/* Heartfelt Welcoming Message */}
                <div className="space-y-3">
                  <h3 className="font-display text-2xl sm:text-3xl text-gold-foil font-semibold tracking-wide">
                    Thank You For Your Gracious Blessings!
                  </h3>

                  <p className="font-script text-xl sm:text-2xl text-palace-green leading-relaxed font-medium">
                    "Your presence will make our wedding day truly memorable and filled with love."
                  </p>

                  <p className="font-serif text-xs sm:text-sm text-palace-green/80 max-w-md mx-auto leading-relaxed pt-1">
                    We eagerly await welcoming you with open hearts to celebrate our union in Bengaluru on <span className="font-semibold text-palace-green">24th &amp; 25th October 2026</span>.
                  </p>
                </div>

                {/* Couple Signature Sign-Off */}
                <div className="pt-2">
                  <p className="font-display text-lg sm:text-xl text-gold-deep font-medium">
                    Vinay <span className="text-palace-green font-script text-xl">&amp;</span> Kishma
                  </p>
                  <p className="font-caps text-[9px] tracking-monumental text-gold-deep uppercase font-semibold mt-0.5">
                    Together with Both Families
                  </p>
                </div>

                {/* Synchronized Headcount & Reset Link */}
                <div className="pt-4 border-t border-gold/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2 text-palace-green/75 font-serif">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>
                      {headcount > 1 ? (
                        <>You and <strong className="font-semibold text-palace-green">{headcount - 1}</strong> other {headcount - 1 === 1 ? 'guest' : 'guests'} have RSVP'd</>
                      ) : (
                        <>You have confirmed your sacred presence</>
                      )}
                    </span>
                  </div>

                  <button
                    onClick={handleReset}
                    disabled={loading}
                    className="text-[11px] font-caps tracking-wider uppercase text-gold-deep hover:text-palace-green underline decoration-gold/40 hover:decoration-gold transition-colors duration-200 cursor-pointer"
                  >
                    Change RSVP
                  </button>
                </div>

              </div>
            )}

            {/* ══════════════════════════════════════════════════════
                STATE 3: DECLINED (Warm Sentiments)
               ══════════════════════════════════════════════════════ */}
            {status === 'declined' && (
              <div className="space-y-5 animate-fadeIn">
                <LotusMotif variant="crest" size="md" className="mx-auto opacity-70" />

                <div className="space-y-2">
                  <h3 className="font-display text-xl sm:text-2xl text-palace-green font-normal">
                    Thank You For Your Love From Afar
                  </h3>
                  <p className="font-serif italic text-xs sm:text-sm text-palace-green/75 max-w-md mx-auto leading-relaxed">
                    "Though distance may keep us apart, your prayers and warm blessings will be felt in our hearts throughout our special day."
                  </p>
                </div>

                <div className="pt-3 border-t border-gold/20 flex justify-center">
                  <button
                    onClick={handleReset}
                    className="px-4 py-2 rounded-full border border-gold/50 bg-ivory text-palace-green text-xs font-caps tracking-wider uppercase hover:bg-gold/10 transition-all duration-300 cursor-pointer"
                  >
                    Change to "Attending"
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Flanking Peacocks at Bottom */}
        <div className="flex justify-center opacity-40 mt-8">
          <PeacockMotif variant="flanking-peacocks" className="max-w-[200px] sm:max-w-[240px]" />
        </div>

      </div>
    </section>
  );
}

export default RsvpSection;
