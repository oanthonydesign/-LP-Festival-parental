"use client";

import { useState, useEffect } from "react";

// Janela da ação relâmpago (BRT, UTC-3)
export const ACAO_START = new Date("2026-09-30T00:00:00-03:00");
export const ACAO_END = new Date("2026-09-30T23:59:59-03:00");
export const ACAO_CHECKOUT = "https://chk.eduzz.com/60E22YQBW3";

// Janela do "passaporte em dobro" (BRT, UTC-3)
export const PROMO_DOBRO_START = new Date("2026-10-27T00:00:00-03:00");
export const PROMO_DOBRO_END = new Date("2026-10-29T23:59:59-03:00");

export function useIsAcaoDia(start: Date = ACAO_START, end: Date = ACAO_END): boolean {
  const [isAcaoDia, setIsAcaoDia] = useState(false);

  useEffect(() => {
    const check = () => {
      const now = new Date();
      setIsAcaoDia(now >= start && now <= end);
    };

    check();
    const interval = setInterval(check, 1000);
    return () => clearInterval(interval);
  }, []);

  return isAcaoDia;
}
