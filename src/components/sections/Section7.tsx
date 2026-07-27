"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import svgPaths from "@/components/svg/svg-jj8ggrv19k";
import { ChevronLeft, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const images = [
    "/images/car_01.webp",
    "/images/car_02.webp",
    "/images/car_03.webp",
    "/images/car_04.webp",
    "/images/car_05.webp",
];

function Group() {
    return (
        <div className="hidden lg:block absolute inset-x-[-20%] bottom-[-5%] lg:top-[calc(40%-120px)] pointer-events-none lg:opacity-100">
            <div className="absolute inset-[-4.04%_-1.25%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2082.51 802.847">
                    <g id="Group 20">
                        <path d={svgPaths.p11ca86c0} id="Vector" stroke="#2260A1" strokeMiterlimit="10" strokeWidth="60" />
                        <path d={svgPaths.p3e263100} id="Vector_2" stroke="#EF7D25" strokeMiterlimit="10" strokeWidth="60" />
                        <path d={svgPaths.p33700700} id="Vector_3" stroke="#928FC8" strokeMiterlimit="10" strokeWidth="60" />
                    </g>
                </svg>
            </div>
        </div>
    );
}

function VideoPlayer() {
    const [isStarted, setIsStarted] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlayVideo = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
            setIsStarted(true);
        }
    };

    return (
        <div
            className="border-3 border-[#191919] border-solid h-auto lg:h-[480px] overflow-hidden relative rounded-[20px] shadow-[5px_6px_0px_0px_#191919] w-full max-w-[800px] cursor-pointer group my-2"
            onClick={!isStarted ? handlePlayVideo : undefined}
        >
            <video
                ref={videoRef}
                className="w-full h-auto lg:h-full object-cover"
                src="https://vismo.com.br/wp-content/uploads/2026/02/after_movie.webm#t=10"
                controls={isStarted}
                preload="auto"
                playsInline
            />

            {!isStarted && (
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-colors group-hover:bg-black/30">
                    <div className="w-20 h-20 bg-[#ef7d25] rounded-full border-4 border-[#191919] shadow-[4px_4px_0px_0px_#191919] flex items-center justify-center transition-transform group-hover:scale-110 active:scale-95">
                        <svg
                            width="32"
                            height="36"
                            viewBox="0 0 32 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="ml-1"
                        >
                            <path d="M30 14.5359C32.6667 16.0755 32.6667 19.9245 30 21.4641L6 35.3205C3.33333 36.8601 0 34.9356 0 31.8564V4.14359C0 1.06439 3.33333 -0.860114 6 0.679487L30 14.5359Z" fill="#191919" />
                        </svg>
                    </div>
                </div>
            )}
        </div>
    );
}

function PhotoStackCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const [startX, setStartX] = useState<number | null>(null);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

    const resetTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(next, 5000);
    };

    useEffect(() => {
        resetTimer();
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, []);

    const handleStart = (clientX: number) => {
        setStartX(clientX);
    };

    const handleEnd = (clientX: number) => {
        if (startX === null) return;
        const diff = startX - clientX;
        const threshold = 50;

        if (Math.abs(diff) > threshold) {
            if (diff > 0) next();
            else prev();
            resetTimer();
        }
        setStartX(null);
    };

    // Rotações fixas para as 3 camadas visíveis
    const rotations = [-2.5, 1.8, -1.2, 2.2, -0.8];

    return (
        <div
            className="relative w-full max-w-[600px] aspect-[4/3] md:aspect-[16/10] mt-6 mb-12 group cursor-grab active:cursor-grabbing select-none"
            ref={containerRef}
            onMouseDown={(e) => handleStart(e.clientX)}
            onMouseUp={(e) => handleEnd(e.clientX)}
            onTouchStart={(e) => handleStart(e.touches[0].clientX)}
            onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
        >
            {/* Imagens de fundo para efeito de pilha */}
            {[2, 1].map((offset) => {
                const idx = (currentIndex + offset) % images.length;
                return (
                    <div
                        key={`bg-${offset}`}
                        className="absolute inset-0 transition-all duration-700 ease-in-out origin-center pointer-events-none"
                        style={{
                            transform: `rotate(${rotations[(idx) % rotations.length] * (offset === 2 ? 1.5 : 1)}deg) translate(${(offset === 2 ? 8 : 4)}px, ${(offset === 2 ? 8 : 4)}px)`,
                            zIndex: 10 - offset,
                            opacity: 0.7 - (offset * 0.2)
                        }}
                    >
                        <div className="bg-white border-2 border-[#191919] rounded-[24px] shadow-[4px_4px_0px_0px_#191919] overflow-hidden size-full">
                            <img src={images[idx]} alt="" className="w-full h-full object-cover grayscale-[0.3]" />
                        </div>
                    </div>
                );
            })}

            {/* Imagem Ativa no Topo */}
            <div
                className="absolute inset-0 z-20 transition-all duration-500 ease-out"
                style={{ transform: `rotate(${rotations[currentIndex % rotations.length]}deg)` }}
            >
                <div className="bg-white border-2 border-[#191919] rounded-[24px] shadow-[6px_6px_0px_0px_#191919] overflow-hidden size-full group-hover:scale-[1.02] transition-transform duration-300">
                    <img
                        src={images[currentIndex]}
                        alt="Festival Parental"
                        className="w-full h-full object-cover transition-opacity duration-300 pointer-events-none"
                    />
                </div>
            </div>

            {/* Controles */}
            <div className="absolute inset-x-[-20px] md:inset-x-[-60px] top-1/2 -translate-y-1/2 flex justify-between z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <button
                    onClick={(e) => { e.stopPropagation(); prev(); resetTimer(); }}
                    className="p-3 bg-[#fff6ee] border-2 border-[#191919] rounded-full shadow-[3px_3px_0px_0px_#191919] hover:bg-[#F4B63E] active:translate-y-[2px] active:shadow-none transition-all pointer-events-auto"
                >
                    <ChevronLeft className="size-6" />
                </button>
                <button
                    onClick={(e) => { e.stopPropagation(); next(); resetTimer(); }}
                    className="p-3 bg-[#fff6ee] border-2 border-[#191919] rounded-full shadow-[3px_3px_0px_0px_#191919] hover:bg-[#F4B63E] active:translate-y-[2px] active:shadow-none transition-all pointer-events-auto"
                >
                    <ChevronRight className="size-6" />
                </button>
            </div>

            {/* Indicadores / Dots */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => { setCurrentIndex(i); resetTimer(); }}
                        className={`size-3 rounded-full border-2 border-[#191919] transition-all ${i === currentIndex ? "bg-[#2260A1] w-6" : "bg-white"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}

function Content() {
    return (
        <div className="flex flex-col gap-[32px] md:gap-[48px] items-center relative z-10 text-[#191919] text-center w-full px-6" data-name="Content">
            {/* Logo do 7º Congresso */}
            <div className="flex justify-center items-center w-full -mb-2 md:-mb-4">
                <img
                    src="/images/logo7ciepsite1.webp"
                    alt="7º Congresso Internacional de Educação Parental"
                    className="h-12 md:h-16 lg:h-20 w-auto object-contain"
                    loading="lazy"
                />
            </div>

            <div className="flex flex-col font-sugar-peachy justify-center relative max-w-[900px] w-full">
                <h2 className="text-[36px] lg:text-[68px] leading-[0.85] whitespace-pre-wrap">
                    Há sete edições, reunindo as vozes que ajudam a aprofundar a parentalidade no Brasil.
                </h2>
            </div>

            <div className="flex flex-col font-dm-sans font-medium relative max-w-[800px] w-full text-[18px] lg:text-[22px]">
                <p className="leading-[1.2] whitespace-pre-wrap">
                    Evolução do Congresso Internacional de Educação Parental, o Festival reúne quatro dias de encontros, palestras e experiências que conectam ciência, prática e vida real para aprofundar as conversas sobre infância, desenvolvimento humano e relações familiares.
                </p>
            </div>

            {/* Vídeo After Movie (adicionado antes do carrossel de fotos) */}
            <VideoPlayer />

            <PhotoStackCarousel />

            <div className="flex flex-col font-sugar-peachy justify-center relative text-[24px] lg:text-[32px] w-full max-w-[842px] mt-4">
                <p className="leading-[0.9] text-[#2260A1]">
                    Profissionais e famílias, lado a lado, aprofundando as conversas que a infância e o mundo atual exigem.
                </p>
            </div>
        </div>
    );
}

function Container() {
    return (
        <div className="relative flex flex-col items-center justify-center w-full pt-[100px] pb-12" data-name="Container">
            <Content />
        </div>
    );
}

function CloseBarMac() {
    return (
        <div className="bg-[#fff6ee] border-b-2 border-[#191919] border-solid h-[56px] absolute left-0 top-0 w-full rounded-tl-[24px] rounded-tr-[24px]" data-name="close bar_mac">
            <div className="absolute left-[24px] md:left-[28px] size-[12px] top-[19px]">
                <div className="bg-[#FC3F51] border border-[#191919] rounded-full size-full shadow-[1px_1px_0px_0px_#191919]" />
            </div>
            <div className="absolute left-[41px] md:left-[45px] size-[12px] top-[19px]">
                <div className="bg-[#ECA031] border border-[#191919] rounded-full size-full shadow-[1px_1px_0px_0px_#191919]" />
            </div>
            <div className="absolute left-[58px] md:left-[62px] size-[12px] top-[19px]">
                <div className="bg-[#1CB638] border border-[#191919] rounded-full size-full shadow-[1px_1px_0px_0px_#191919]" />
            </div>
        </div>
    );
}

function EventCard() {
    return (
        <div className="bg-[#F4B63E] min-h-auto relative rounded-[24px] w-full flex flex-col pb-8" data-name="Event Card">
            <div className="absolute inset-0 rounded-[24px] overflow-hidden pointer-events-none">
                <Group />
            </div>
            <div className="relative size-full z-10">
                <Container />
                <CloseBarMac />
            </div>
            {/* Border and Shadow layer */}
            <div aria-hidden="true" className="absolute border-2 border-[#191919] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[8px_8px_0px_0px_#191919] z-20" />
        </div>
    );
}

export default function Section7() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const content = sectionRef.current?.querySelector('[data-name="Content"]');
        if (!content) return;

        gsap.fromTo(content,
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    toggleActions: "play none none none"
                }
            }
        );
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-[#fff6ee] w-full flex flex-col items-center pt-[32px] md:pt-[60px] pb-[120px] relative isolate"
            data-name="Section - 7"
        >
            <div className="max-w-[1200px] w-full px-4 md:px-6 relative flex flex-col items-center">
                <EventCard />
            </div>
        </section>
    );
}
