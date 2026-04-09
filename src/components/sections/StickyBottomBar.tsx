"use client";

import React from "react";
import { useCountdown, TARGET_DATE } from "@/hooks/useCountdown";

function HourglassIcon() {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
        >
            <path
                d="M5 2H19M5 22H19M5 2C5 2 5 9 12 12M19 2C19 2 19 9 12 12M5 22C5 22 5 15 12 12M19 22C19 22 19 15 12 12"
                stroke="#191919"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12 12L8 17H16L12 12Z"
                fill="#191919"
            />
            <path
                d="M12 12L8 7H16L12 12Z"
                fill="#191919"
                fillOpacity="0.3"
            />
        </svg>
    );
}

export default function StickyBottomBar() {
    const [isVisible, setIsVisible] = React.useState(false);
    const [isFooterVisible, setIsFooterVisible] = React.useState(false);
    const countdown = useCountdown(TARGET_DATE);

    React.useEffect(() => {
        const handleScroll = () => {
            // Threshold de scroll para aparecer (aprox. após as primeiras seções)
            if (window.scrollY > 800) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Observa o Rodapé para esconder a barra quando chegar nele
    React.useEffect(() => {
        const footer = document.querySelector('[data-name="Rodape"]');
        if (!footer) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsFooterVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        observer.observe(footer);
        return () => observer.disconnect();
    }, []);

    const pad = (n: number) => String(n).padStart(2, "0");

    const countdownText = countdown.expired
        ? "00d 00h 00m 00s"
        : `${pad(countdown.days)}d ${pad(countdown.hours)}h ${pad(countdown.minutes)}m ${pad(countdown.seconds)}s`;

    return (
        <div
            className={`fixed bottom-0 inset-x-0 z-[999] pointer-events-none transition-all duration-500 ease-in-out ${isVisible && !isFooterVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                }`}
        >
            <div className="w-full bg-linear-to-b from-[#FFCF6B] to-[#F4B63E] border-t-2 border-b-[6px] border-[#191919] border-solid pointer-events-auto">
                <div className="flex flex-col md:flex-row items-center justify-center py-2 md:py-3 px-6 gap-2 md:gap-4 text-[#191919]">
                    <div className="flex items-center gap-3">
                        <HourglassIcon />
                        <p className="font-dm-sans font-bold text-[14px] md:text-[18px] uppercase tracking-tight whitespace-nowrap">
                            LOTE 2 TERMINA EM{" "}
                            <span className="font-black text-[18px] md:text-[22px] tabular-nums">{countdownText}</span>
                        </p>
                    </div>

                    <span className="hidden md:block text-[24px] font-light text-black/30">|</span>

                    <p className="font-dm-sans font-medium text-[14px] md:text-[18px] text-center md:text-left tracking-tight">
                        Garanta seu ingresso <span className="font-bold">antes da virada para o Lote 3</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
