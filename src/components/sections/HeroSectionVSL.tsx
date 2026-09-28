"use client";

import { useEffect } from "react";
import Marquee01 from "@/components/sections/Marquee01";
import Marquee02 from "@/components/sections/Marquee02";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'vturb-smartplayer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { id?: string }, HTMLElement>;
        }
    }
}

export default function HeroSectionVSL() {
    useEffect(() => {
        const scriptId = "vturb-player-script";
        if (!document.getElementById(scriptId)) {
            const s = document.createElement("script");
            s.id = scriptId;
            s.src = "https://scripts.converteai.net/45503b29-1a7d-4696-ac1d-75f7fc87b786/players/6a85a1668df297a6712fb774/v4/player.js";
            s.async = true;
            document.head.appendChild(s);
        }
    }, []);

    return (
        <section
            className="bg-[#fff6ee] relative w-full h-auto overflow-hidden pb-0"
            id="hero"
            data-name="Section - Hero VSL"
        >
            {/* --- Main Content (Centered) --- */}
            <div className="relative pt-[92px] lg:pt-[120px] w-full max-w-[1280px] mx-auto flex flex-col items-center gap-[28px] md:gap-[40px] z-20 px-4 md:px-6 lg:px-0">

                {/* Text Block */}
                <div className="flex flex-col items-center gap-[24px] md:gap-[28px] w-full">
                    {/* Date/Location Tag */}
                    <div className="inline-flex items-center justify-center gap-[8px] px-6 py-3 md:px-[32px] md:py-[16px] rounded-[40px] border-2 border-[#505050] shadow-[4px_4px_0px_0px_#505050] bg-transparent max-w-[92vw] md:max-w-none">
                        <div className="hidden md:flex items-center justify-center relative shrink-0">
                            <img src="/images/icons/calendario_cor.svg" alt="Calendario" className="w-[20px] h-[20px] object-contain" loading="eager" decoding="async" />
                        </div>
                        <span className="font-dm-sans font-bold text-[#505050] text-[12px] md:text-[14px] uppercase tracking-[0.14px] text-center leading-[1.4] md:leading-none mt-[2px] whitespace-normal md:whitespace-nowrap">
                            19 a 22 de novembro · 7ª edição · São Paulo
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="font-sugar-peachy font-bold text-[#ef7d25] text-[36px] sm:text-[52px] md:text-[72px] lg:text-[88px] text-center leading-[0.85] md:leading-[0.9] tracking-[-1.4px] sm:tracking-[-1.5px] md:tracking-[-2px] lg:tracking-[-2.6px] relative px-0 max-w-[1200px] w-full text-balance">
                        <span className="mt-1">
                            As maiores referências <span className="text-[#2260a1]">da educação parental reunidas em um só lugar.</span>
                        </span>
                    </h1>

                    {/* Subtext */}
                    <div className="font-dm-sans text-[#4c4d4f] text-[18px] sm:text-[20px] md:text-[24px] text-center leading-[1.2] md:leading-[1.1] flex flex-col gap-3 md:gap-4 max-w-full md:max-w-[950px] px-2 md:px-0">
                        <p>
                            Quatro dias de aprendizado, conexões e experiências para quem acredita que transformar a infância começa pela transformação dos adultos
                        </p>
                    </div>
                </div>

                {/* --- VSL Video Frame (VTurb SmartPlayer) --- */}
                <div
                    className="w-full max-w-[960px] relative rounded-[20px] md:rounded-[32px] overflow-hidden border-2 md:border-4 border-[#191919] shadow-[6px_6px_0px_0px_#191919] md:shadow-[10px_10px_0px_0px_#191919] bg-black my-2 z-10"
                >
                    <vturb-smartplayer
                        id="vid-6a85a1668df297a6712fb774"
                        style={{ display: "block", margin: "0 auto", width: "100%" }}
                    >
                        <div
                            className="vturb-player-placeholder"
                            style={{ position: "relative", width: "100%", padding: "56.25% 0 0", zIndex: 0, backgroundColor: "black" }}
                        />
                    </vturb-smartplayer>
                </div>

                {/* --- CTAs (Below Video - z-20) --- */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-[16px] w-full max-w-[400px] md:max-w-none z-20">
                    {/* Botão Profissional */}
                    <a href="#contexto" className="group relative w-full md:w-[332px]">
                        <div className="bg-[#f7a73c] border-2 border-[#191919] flex items-center justify-center gap-[10px] px-[20px] md:px-[30px] py-[16px] rounded-[40px] shadow-[4px_4px_0px_0px_#191919] group-hover:translate-y-[1px] group-hover:shadow-[2px_2px_0px_0px_#191919] transition-all w-full">
                            <img src="/images/icons/ingresso_linha_preta.svg" alt="Ingresso" className="w-[24px] h-[24px] shrink-0" loading="eager" decoding="async" />
                            <span className="font-dm-sans font-bold text-[#191919] text-[13px] md:text-[14px] uppercase tracking-[0.8px] md:tracking-[1px] whitespace-nowrap">
                                Sou profissional da área
                            </span>
                        </div>
                    </a>

                    {/* Botão Pais */}
                    <a href="#contexto" className="group relative w-full md:w-[332px]">
                        <div className="bg-[#F6D2C8] border-2 border-[#191919] flex items-center justify-center gap-[10px] px-[20px] md:px-[30px] py-[16px] rounded-[40px] shadow-[4px_4px_0px_0px_#191919] group-hover:translate-y-[1px] group-hover:shadow-[2px_2px_0px_0px_#191919] transition-all w-full">
                            <img src="/images/icons/ingresso_linha_preta.svg" alt="Ingresso" className="w-[24px] h-[24px] shrink-0" loading="eager" decoding="async" />
                            <span className="font-dm-sans font-bold text-[#191919] text-[13px] md:text-[14px] uppercase tracking-[0.8px] md:tracking-[1px] whitespace-nowrap">
                                Sou pai, mãe ou cuidador(a)
                            </span>
                        </div>
                    </a>
                </div>

                {/* --- Speakers & Grafismo + Marquee Static Block (Clean & Fast) --- */}
                <div className="relative -mt-4 sm:-mt-2 md:mt-0 lg:mt-4 w-full flex flex-col items-center justify-center z-30">
                    {/* Grafismo HERO (100% Width da Tela de Ponta a Ponta) */}
                    <div className="absolute top-[50%] md:top-[51%] left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[10px] w-screen min-w-[100vw] pointer-events-none z-0 overflow-hidden flex justify-center">
                        <img
                            src="/images/grafismo_HERO.svg"
                            alt=""
                            className="w-full min-w-[100vw] h-auto object-cover max-w-none"
                            width={1920}
                            height={570}
                            loading="eager"
                            decoding="async"
                        />
                    </div>

                    {/* Single Responsive Picture Element (Eliminates double image download on mobile & desktop) */}
                    <picture className="relative z-10 w-full flex justify-center px-2 lg:px-0">
                        <source media="(min-width: 1024px)" srcSet="/images/palestrantesherodesk.webp" width={1444} height={673} />
                        <img
                            src="/images/palestrantesheromob.webp"
                            alt="Palestrantes Festival Parental"
                            className="w-full max-w-[540px] lg:max-w-[1280px] h-auto object-contain mx-auto"
                            width={415}
                            height={361}
                            fetchPriority="high"
                            loading="eager"
                            decoding="async"
                        />
                    </picture>

                    {/* Marquee 01 & 02 Attached directly to bottom of speakers image */}
                    <div className="-mt-[42px] sm:-mt-[66px] md:-mt-[124px] w-screen min-w-[100vw] relative z-40">
                        <Marquee01 />
                        <Marquee02 />
                    </div>
                </div>

            </div>
        </section>
    );
}
