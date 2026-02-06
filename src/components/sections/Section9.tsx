"use client";

import svgPaths from "@/components/svg/svgPathsSection9";
import imgStoryImage from "../../assets/images/festival-audience-9.png"; // Usando a imagem correta do público

function WarningIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d={svgPaths.p110c6e80} fill="#FFF6EF" />
            <path d={svgPaths.p244df4f0} fill="#FFF6EF" />
            <path d={svgPaths.p3d6ac800} fill="#FFF6EF" />
        </svg>
    );
}

function TicketIcon() {
    return (
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d={svgPaths.p60d3f00} fill="currentColor" />
        </svg>
    );
}

export default function Section9() {
    return (
        <section
            className="bg-[#f7a73c] relative w-full overflow-hidden border-t-4 border-b-4 border-[#191919] py-[80px] md:py-[100px]"
            id="importante"
            data-name="Section - 9"
        >
            {/* Grafismo de Fundo (Arcos) */}
            <div className="absolute right-[-150px] md:right-[-50px] top-[-150px] md:top-[-100px] w-[600px] md:w-[850px] h-[800px] md:h-[1100px] z-[1] pointer-events-none select-none">
                <svg
                    className="w-full h-full opacity-100"
                    viewBox="0 0 869 1085"
                    fill="none"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <path d={svgPaths.p2b7f140} stroke="#EF7D25" strokeWidth="60" strokeLinecap="round" />
                    <path d={svgPaths.p2dbf5ec8} stroke="#79C3AB" strokeWidth="60" strokeLinecap="round" />
                    <path d={svgPaths.p2c6e4880} stroke="#2260A1" strokeWidth="60" strokeLinecap="round" />
                </svg>
            </div>

            <div className="layout-container relative z-[10] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 px-6">
                {/* Coluna de Texto */}
                <div className="flex flex-col items-start gap-8 max-w-[720px] w-full">
                    {/* Hat / Badge */}
                    <div className="bg-[#e12d3b] border-2 border-[#191919] border-solid rounded-[40px] shadow-[4px_4px_0px_0px_#191919] px-8 py-4 flex items-center gap-3">
                        <WarningIcon />
                        <span className="font-dm-sans font-bold text-[14px] uppercase text-[#fff6ef] tracking-wider">
                            importante
                        </span>
                    </div>

                    {/* Títulos e Descrição */}
                    <div className="flex flex-col gap-6">
                        <h2 className="font-sugar-peachy text-[48px] md:text-[64px] text-[#e12d3b] leading-[0.8]">
                            O Festival é feito para adultos.
                        </h2>
                        <p className="font-dm-sans text-[20px] md:text-[24px] text-[#fff6ef] leading-tight">
                            A programação tem como foco temas sensíveis e ambientes que não são adequados para crianças. Agora é sua vez de cuidar de você, para depois cuidar melhor de quem depende de você.
                        </p>
                    </div>

                    {/* Botão CTA */}
                    <a
                        href="#ingressos"
                        className="bg-[#2260a1] border-2 border-[#191919] border-solid rounded-[40px] shadow-[4px_4px_0px_0px_#191919] px-10 py-5 flex items-center justify-center gap-3 hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#191919] transition-all group active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#191919] w-full md:w-auto"
                    >
                        <div className="text-[#fff6ef]">
                            <TicketIcon />
                        </div>
                        <span className="font-dm-sans font-bold text-[14px] uppercase text-[#fff6ef] tracking-widest">
                            Garanta seu INGRESSO agora
                        </span>
                    </a>
                </div>

                {/* Coluna da Imagem */}
                <div className="relative w-full max-w-[500px] shrink-0">
                    <div className="rotate-[-5deg]">
                        <div className="relative border-2 border-[#191919] border-solid rounded-[24px] shadow-[6px_6px_0px_0px_#191919] overflow-hidden aspect-[4/3]">
                            <img
                                src={imgStoryImage.src || imgStoryImage}
                                alt="Público do Festival"
                                className="w-full h-full object-cover scale-110"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
