"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Marquee02() {
    const marqueeRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!marqueeRef.current || !contentRef.current) return;

        const marqueeContent = contentRef.current;

        // Anima o marquee da esquerda para direita baseado no scroll
        // Começa deslocado para a esquerda e move para a direita
        const anim = gsap.fromTo(marqueeContent,
            { x: () => -(marqueeContent.scrollWidth / 4) },
            {
                x: 0,
                ease: 'none',
                scrollTrigger: {
                    trigger: marqueeRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1,
                }
            }
        );

        return () => {
            anim.kill();
        };
    }, []);

    const MarqueeItem = ({ text }: { text: string }) => (
        <div className="flex items-center gap-4 lg:gap-8 shrink-0">
            <div className="flex flex-col font-sugar-peachy font-black justify-center leading-[0] not-italic relative shrink-0 text-[#fff6ef] text-[36px] md:text-[80px] lg:text-[100px] whitespace-nowrap">
                <p className="leading-none uppercase">{text}</p>
            </div>
            <div className="relative shrink-0 size-[16px] md:size-[20px] lg:size-[24px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" fill="#fff6ef" r="12" />
                </svg>
            </div>
        </div>
    );

    const text = "FESTIVAL PARENTAL 2026";
    const repetition = 10; // Repetir o texto para garantir cobertura
    const items = Array(repetition).fill(text);

    return (
        <div
            ref={marqueeRef}
            className="bg-[#1a1a1a] relative w-full overflow-hidden border-b-[5px] border-[#191919]"
            data-name="marquee_02"
        >
            <div
                ref={contentRef}
                className="flex gap-4 lg:gap-8 items-center py-[10px] w-max whitespace-nowrap"
            >
                {items.map((t, idx) => (
                    <MarqueeItem key={idx} text={t} />
                ))}
            </div>
        </div>
    );
}
