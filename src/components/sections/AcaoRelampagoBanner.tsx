"use client";

import { useEffect, useState } from "react";
import { useCountdown } from "@/hooks/useCountdown";

// Fim do dia 15/07/2026 às 23:59:59 BRT (UTC-3)
const ACAO_END = new Date("2026-07-15T23:59:59-03:00");

export default function AcaoRelampagoBanner() {
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

  if (countdown.expired) return null;

  const pad = (n: number) => String(n).padStart(2, "0");
  const countdownText = countdown.expired
    ? "00d 00h 00m 00s"
    : `${pad(countdown.days)}d ${pad(countdown.hours)}h ${pad(countdown.minutes)}m ${pad(countdown.seconds)}s`;

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-[60] pointer-events-none transition-all duration-500 ease-in-out ${isVisible && !isFooterVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
    >
      <a
        href="#ingressos"
        className="block w-full bg-[#2260a1] border-t-2 border-[#191919] shadow-[0_-4px_0px_0px_#191919] pointer-events-auto hover:bg-[#1a4f88] transition-colors duration-200 cursor-pointer"
      >
        <div className="max-w-[1280px] mx-auto px-4 py-2.5 sm:py-3 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">

          {/* Texto + Contador */}
          <div className="flex flex-col lg:flex-row items-center gap-1.5 sm:gap-4 flex-1 text-center lg:text-left">
            <p className="font-dm-sans font-bold text-[15px] sm:text-[16px] lg:text-[18px] uppercase tracking-tight text-white whitespace-nowrap">
              BÔNUS DE JULHO · Só até 15/07 —{" "}
              <span className="inline-block min-w-[128px] sm:min-w-[136px] lg:min-w-[150px] font-black tabular-nums text-[#f7a73c] text-center">{countdownText}</span>
            </p>
            <span className="hidden lg:block text-[22px] font-light text-white/30">|</span>
            <p className="font-dm-sans font-medium text-[13px] sm:text-[16px] lg:text-[18px] text-white/85 leading-tight">
              No Passaporte Profissional, leve o novo livro de Gordon Neufeld + todas as edições anteriores do Congresso gravadas.
            </p>
          </div>

        </div>
      </a>
    </div>
  );
}
