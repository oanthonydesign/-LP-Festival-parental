"use client";

import { useState, useEffect } from "react";

export function useIsAcaoDia(): boolean {
  const [isAcaoDia, setIsAcaoDia] = useState(false);

  useEffect(() => {
    const checkIsAcao = () => {
      const now = new Date();
      const endOfAcao = new Date("2026-07-20T23:59:59-03:00");
      const brtStr = now.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" });
      const brtDate = new Date(brtStr);

      const isToday =
        brtDate.getFullYear() === 2026 &&
        brtDate.getMonth() === 6 && // 0-indexed: 6 = julho
        brtDate.getDate() === 20;

      setIsAcaoDia(isToday && now <= endOfAcao);
    };

    checkIsAcao();
    const interval = setInterval(checkIsAcao, 1000);
    return () => clearInterval(interval);
  }, []);

  return isAcaoDia;
}

