"use client";

import { useState, useRef, useEffect } from "react";

function BackgroundCurves() {
    return (
        <div className="absolute top-[700px] lg:top-[60px] left-0 w-full z-[1] pointer-events-none select-none opacity-100 overflow-hidden lg:overflow-visible">
            <img
                src="/images/grafismo_wave.svg"
                alt="Grafismo de ondas"
                className="w-full h-auto min-w-0 max-w-none lg:min-w-[1440px]"
                loading="lazy"
            />
        </div>
    );
}

export default function Section2() {
    const [isStarted, setIsStarted] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlayVideo = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0; // Inicia do começo ao clicar
            videoRef.current.play();
            setIsStarted(true);
        }
    };

    return (
        <section className="bg-[#fff6ef] w-full flex flex-col items-center px-4 md:px-0 pb-[56px] pt-[56px] relative isolate overflow-hidden" id="festival" data-name="Section - 2">
            <BackgroundCurves />

            <div className="layout-container flex flex-col gap-[48px] items-center relative z-10 w-full">
                <div className="flex flex-col items-center gap-10 w-full max-w-full text-center">
                    {/* Header Group */}
                    <div className="flex flex-col gap-6 items-center w-full max-w-[1200px]">
                        <div className="flex flex-col font-sugar-peachy justify-center relative text-[#ef7d25] text-[36px] md:text-[46px] leading-[0.9]">
                            <p className="whitespace-pre-wrap break-words">Nunca se falou tanto sobre parentalidade.</p>
                            <p className="whitespace-pre-wrap break-words">E nunca foi tão difícil se sentir seguro nela.</p>
                        </div>
                    </div>

                    {/* Text Group */}
                    <div className="flex flex-col items-center w-full max-w-[900px]">
                        <div className="flex flex-col gap-6 font-dm-sans justify-center leading-tight relative text-[#4c4d4f] text-[18px] lg:text-[24px]">
                            <p>
                                Pais e cuidadores convivem com excesso de informação, pressão e dúvida.
                            </p>
                            <p>
                                Profissionais atuam em um campo em constante transformação, buscando traduzir teoria em prática no trabalho com famílias.
                            </p>
                            <p>
                                O Festival Parental nasce desse cenário: um encontro presencial que reúne ciência, prática e experiência real para aprofundar a parentalidade com mais clareza, menos ruído e mais conexão.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Video Container */}
                <div
                    className="border-3 border-[#191919] border-solid h-auto lg:h-[598px] overflow-hidden relative rounded-[20px] shadow-[5px_6px_0px_0px_#191919] w-full max-w-[1064px] cursor-pointer group"
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
            </div>
        </section>
    );
}
