import React from 'react';
import { LotusMotif } from './LotusMotif';

/**
 * OrnamentalDivider: Fine Gold Lines with Royal Motifs
 */
export function OrnamentalDivider({
  motif = 'diamond', // 'diamond' | 'lotus' | 'bead' | 'peacock-eye'
  className = '',
  lineStyle = 'dual', // 'single' | 'dual' | 'fade'
}) {
  return (
    <div className={`flex items-center justify-center gap-3 w-full my-4 ${className}`}>
      {/* Left Line */}
      <div className="flex-1 flex flex-col gap-[2px]">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gold/40 to-gold" />
        {lineStyle === 'dual' && (
          <div className="h-[0.5px] w-full bg-gradient-to-r from-transparent via-gold/20 to-gold/60" />
        )}
      </div>

      {/* Center Motif */}
      <div className="flex-shrink-0 flex items-center justify-center text-gold px-1">
        {motif === 'lotus' && (
          <LotusMotif variant="petal" size="sm" className="w-5 h-5 text-gold" />
        )}
        {motif === 'diamond' && (
          <div className="flex items-center gap-1">
            <span className="w-1 h-1 rotate-45 bg-gold/50 inline-block" />
            <span className="w-2 h-2 rotate-45 bg-gold border border-gold-deep inline-block" />
            <span className="w-1 h-1 rotate-45 bg-gold/50 inline-block" />
          </div>
        )}
        {motif === 'peacock-eye' && (
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-peacock-teal/30 border border-gold flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-deep" />
            </div>
          </div>
        )}
        {motif === 'bead' && (
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
          </div>
        )}
      </div>

      {/* Right Line */}
      <div className="flex-1 flex flex-col gap-[2px]">
        <div className="h-[1px] w-full bg-gradient-to-l from-transparent via-gold/40 to-gold" />
        {lineStyle === 'dual' && (
          <div className="h-[0.5px] w-full bg-gradient-to-l from-transparent via-gold/20 to-gold/60" />
        )}
      </div>
    </div>
  );
}

export default OrnamentalDivider;
