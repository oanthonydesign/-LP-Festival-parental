"use client";

import { useEffect, useState } from "react";
import { useIsAcaoDia } from "@/hooks/useIsAcaoDia";
import { useCountdown } from "@/hooks/useCountdown";

// Fim do dia 31/05/2026 às 23:59:59 BRT (UTC-3) = 01/06/2026 02:59:59 UTC
const ACAO_END = new Date("2026-06-01T02:59:59Z");

export default function AcaoRelampagoBanner() {
  const isAcaoDia = useIsAcaoDia();
  const [isVisible, setIsVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const countdown = useCountdown(ACAO_END);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 800);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const footer = document.querySelector('[data-name="Rodape"]');
    if (!footer) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsFooterVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  if (!isAcaoDia) return null;

  const pad = (n: number) => String(n).padStart(2, "0");
  const countdownText = countdown.expired
    ? "00h 00m 00s"
    : `${pad(countdown.hours)}h ${pad(countdown.minutes)}m ${pad(countdown.seconds)}s`;

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-[60] pointer-events-none transition-all duration-500 ease-in-out ${isVisible && !isFooterVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
    >
      <div className="w-full bg-[#2260a1] border-t-2 border-[#191919] shadow-[0_-4px_0px_0px_#191919] pointer-events-auto">
        <div className="max-w-[1280px] mx-auto px-4 py-2.5 sm:py-3 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">

          {/* Texto + Contador */}
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-4 flex-1 text-center sm:text-left">
            <p className="font-dm-sans font-bold text-[15px] sm:text-[18px] uppercase tracking-tight text-white whitespace-nowrap">
              SOMENTE HOJE —{" "}
              <span className="inline-block w-[118px] sm:w-[132px] font-black tabular-nums text-[#f7a73c]">{countdownText}</span>
            </p>
            <span className="hidden sm:block text-[22px] font-light text-white/30">|</span>
            <p className="font-dm-sans font-medium text-[18px] sm:text-[20px] text-white/85 leading-tight">
              COMPRE 1 PASSAPORTE PROFISSIONAL E GANHE OUTRO
            </p>
          </div>

          {/* CTA */}
          <div className="shrink-0 w-full sm:w-auto">
            <a
              href="#ingressos"
              className="w-full sm:w-auto bg-[#f7a73c] border-2 border-[#191919] rounded-[40px] shadow-[3px_3px_0px_0px_#191919] px-5 py-[10px] flex items-center justify-center hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#191919] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#191919] transition-all whitespace-nowrap"
            >
              <span className="font-dm-sans font-bold text-[13px] uppercase text-[#191919] tracking-wider">
                Garantir Passaporte
              </span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
