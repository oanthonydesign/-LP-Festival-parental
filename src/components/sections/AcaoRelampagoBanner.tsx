"use client";

import { useState } from "react";
import { useIsAcaoDia } from "@/hooks/useIsAcaoDia";

export default function AcaoRelampagoBanner() {
  const isAcaoDia = useIsAcaoDia();
  const [dismissed, setDismissed] = useState(false);

  if (!isAcaoDia || dismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] bg-[#2260a1] border-t-2 border-[#191919] shadow-[0_-4px_0px_0px_#191919]">
      <div className="max-w-[1280px] mx-auto px-4 py-3 sm:py-4 flex flex-col sm:flex-row items-center gap-3 sm:gap-6">

        {/* Texto */}
        <div className="flex items-center gap-3 flex-1 w-full justify-center sm:justify-start">
          <div className="flex flex-col gap-0.5 text-center sm:text-left">
            <span className="font-sugar-peachy text-[20px] sm:text-[24px] tracking-[-0.5px] leading-none text-white">
              Somente hoje
            </span>
            <p className="font-dm-sans text-[13px] sm:text-[14px] text-white/80 leading-tight">
              Compre 1 Passaporte Educador e leve outro profissional para viver o Festival com você.
            </p>
          </div>
        </div>

        {/* CTA + Fechar */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <a
            href="#ingressos"
            className="flex-1 sm:flex-none bg-[#f7a73c] border-2 border-[#191919] rounded-[40px] shadow-[3px_3px_0px_0px_#191919] px-5 py-[10px] flex items-center justify-center gap-2 hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#191919] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#191919] transition-all whitespace-nowrap"
          >
            <span className="font-dm-sans font-bold text-[13px] uppercase text-[#191919] tracking-wider">
              Garantir Passaporte
            </span>
          </a>

          <button
            onClick={() => setDismissed(true)}
            aria-label="Fechar"
            className="shrink-0 text-white/50 hover:text-white transition-colors p-1.5"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
}
