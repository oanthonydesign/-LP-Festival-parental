"use client";

import { useState, useEffect } from "react";

export function useIsAcaoDia(): boolean {
  const [isAcaoDia, setIsAcaoDia] = useState(false);

  useEffect(() => {
    const brt = new Date(
      new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo" })
    );
    setIsAcaoDia(
      brt.getFullYear() === 2026 &&
      brt.getMonth() === 4 && // 0-indexed: 4 = maio
      brt.getDate() === 30
    );
  }, []);

  return isAcaoDia;
}
