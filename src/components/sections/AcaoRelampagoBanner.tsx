"use client";

import { useEffect, useState } from "react";
import { useCountdown } from "@/hooks/useCountdown";

// Fim do dia 20/07/2026 às 23:59:59 BRT (UTC-3)
const ACAO_END = new Date("2026-07-20T23:59:59-03:00");

export default function AcaoRelampagoBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const countdown = useCountdown(ACAO_END);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
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
  const totalHours = countdown.days * 24 + countdown.hours;
  const countdownText = countdown.expired
    ? "00:00:00"
    : `${pad(totalHours)}:${pad(countdown.minutes)}:${pad(countdown.seconds)}`;

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-[60] pointer-events-none transition-all duration-500 ease-in-out ${
        isVisible && !isFooterVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <a
        href="#ingressos"
        className="block w-full bg-[#2260a1] border-t-2 border-[#191919] shadow-[0_-4px_0px_0px_#191919] pointer-events-auto hover:bg-[#1a4f88] transition-colors duration-200 cursor-pointer"
      >
        <div className="max-w-[1280px] mx-auto px-4 py-2.5 sm:py-3 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">

          {/* Texto Principal */}
          <p className="font-dm-sans font-bold text-[13px] sm:text-[15px] md:text-[17px] uppercase tracking-tight text-white leading-tight text-center sm:text-left">
            DIA DO AMIGO · 2 Passaportes Profissionais pelo preço de 1
          </p>

          {/* Lado Direito: Só até hoje + Contador + Botão Garantir */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <p className="font-dm-sans font-bold text-[12px] sm:text-[14px] md:text-[15px] uppercase tracking-tight text-white/95 whitespace-nowrap">
              só até hoje —{" "}
              <span className="inline-block font-black tabular-nums text-[#f7a73c]">
                {countdownText}
              </span>
            </p>
            <div className="bg-[#f7a73c] text-[#191919] font-sugar-peachy text-[14px] sm:text-[17px] px-3.5 sm:px-5 py-1 sm:py-1.5 rounded-full border-2 border-[#191919] shadow-[2px_2px_0px_0px_#191919] shrink-0 uppercase tracking-tight whitespace-nowrap">
              Garantir
            </div>
          </div>

        </div>
      </a>
    </div>
  );
}

