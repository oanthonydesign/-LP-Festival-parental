"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Marquee01() {
    const wrapperRef = useRef<HTMLElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!wrapperRef.current || !contentRef.current) return;

        const marqueeContent = contentRef.current;

        // Anima o marquee da direita para esquerda baseado no scroll
        const anim = gsap.to(marqueeContent, {
            x: () => -(marqueeContent.scrollWidth / 40),
            ease: 'none',
            scrollTrigger: {
                trigger: wrapperRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
                invalidateOnRefresh: true,
            }
        });

        return () => {
            anim.kill();
        };
    }, []);

    const MarqueeItem = ({ text }: { text: string }) => (
        <div className="flex items-center gap-[48px] shrink-0">
            <div className="flex flex-col font-sugar-peachy font-black justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[60px] md:text-[80px] lg:text-[100px] whitespace-nowrap">
                <p className="leading-none uppercase">{text}</p>
            </div>
            <div className="relative shrink-0 size-[16px] md:size-[20px] lg:size-[24px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" fill="#1A1A1A" r="12" />
                </svg>
            </div>
        </div>
    );

    const items = [
        "4 DIAS",
        "+50 PALESTRANTES",
        "4 PALCOS",
    ];

    // Duplicar o conteúdo várias vezes para garantir que cubra a tela e permita o loop infinito visual
    const combinedItems = [...items, ...items, ...items, ...items];

    return (
        <section
            ref={wrapperRef}
            className="w-full overflow-hidden py-12 -my-8 relative"
            data-name="marquee_01_wrapper"
        >
            <div
                ref={marqueeRef}
                className="bg-[#f7a73c] relative w-full overflow-hidden border-y-[5px] border-[#191919] z-10"
                style={{ transform: 'rotate(-1deg) scale(1.2)' }}
                data-name="marquee_01"
            >
                <div
                    ref={contentRef}
                    className="flex gap-[48px] items-center py-[10px] w-max whitespace-nowrap"
                >
                    {combinedItems.map((text, idx) => (
                        <MarqueeItem key={idx} text={text} />
                    ))}
                    {/* Duplicata para o loop */}
                    {combinedItems.map((text, idx) => (
                        <MarqueeItem key={`dup-${idx}`} text={text} />
                    ))}
                </div>
            </div>
        </section>
    );
}
