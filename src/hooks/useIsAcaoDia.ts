"use client";

import { useState, useEffect } from "react";

// Janela da ação relâmpago (BRT, UTC-3)
export const ACAO_START = new Date("2026-08-29T23:59:00-03:00");
export const ACAO_END = new Date("2026-08-31T23:30:00-03:00");

export function useIsAcaoDia(): boolean {
  const [isAcaoDia, setIsAcaoDia] = useState(false);

  useEffect(() => {
    const check = () => {
      const now = new Date();
      setIsAcaoDia(now >= ACAO_START && now <= ACAO_END);
    };

    check();
    const interval = setInterval(check, 1000);
    return () => clearInterval(interval);
  }, []);

  return isAcaoDia;
}
