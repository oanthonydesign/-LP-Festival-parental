"use client";

import { useState, useEffect } from "react";

// Data-alvo: 17/08/2026 às 23:59:59 horário de Brasília (UTC-3)
export const TARGET_DATE = new Date("2026-08-17T23:59:59-03:00");

export function useCountdown(targetDate: Date = TARGET_DATE) {
    const calcRemaining = () => Math.max(0, targetDate.getTime() - Date.now());
    const [remaining, setRemaining] = useState(calcRemaining);

    useEffect(() => {
        const id = setInterval(() => setRemaining(calcRemaining()), 1000);
        return () => clearInterval(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const seconds = Math.floor((remaining / 1000) % 60);
    const minutes = Math.floor((remaining / 1000 / 60) % 60);
    const hours = Math.floor((remaining / 1000 / 60 / 60) % 24);
    const days = Math.floor(remaining / 1000 / 60 / 60 / 24);

    return { days, hours, minutes, seconds, expired: remaining <= 0 };
}
