"use client";

import React from 'react';

export default function SectionSpecialGuests() {
    return (
        <section className="bg-[#fff6ef] w-full flex flex-col items-center pb-[72px] pt-[72px] relative isolate z-20" id="convidados-especiais">
            <div className="layout-container flex flex-col gap-[64px] items-center relative px-4 md:px-0 w-full max-w-[1240px]">

                {/* Header Section */}
                <div className="flex flex-col gap-[24px] items-center text-center relative w-full">
                    <h2 className="font-sugar-peachy text-[#ef7d25] text-[56px] lg:text-[100px] leading-[0.8] mb-4 drop-shadow-sm">
                        Destaques de Programação
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="flex flex-col lg:flex-row justify-between w-full relative z-10 gap-[40px] lg:gap-0">

                    {/* Card Gordon */}
                    <div className="flex flex-col w-full lg:w-[62%] bg-[#79c3ab] border-[3px] border-[#191919] rounded-[40px] p-8 lg:p-12 shadow-[8px_12px_0px_0px_#191919] relative group">
                        {/* Decorative background shape */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl pointer-events-none"></div>

                        <div className="flex flex-col gap-6 mb-12 relative z-10">
                            <div className="flex flex-col items-start gap-4">
                                <span className="font-dm-sans font-bold text-[#191919] text-sm lg:text-base uppercase tracking-wider bg-white px-5 py-2.5 rounded-full border-2 border-[#191919] shadow-[2px_2px_0px_0px_#191919]">
                                    Palestrante Internacional
                                </span>
                                <div className="flex flex-wrap items-center gap-4">
                                    <span className="font-dm-sans font-bold text-white bg-[#191919] px-4 py-2.5 rounded-full text-sm lg:text-base">
                                        Dia 19, às 14h30
                                    </span>
                                    <span className="font-dm-sans font-bold text-white bg-[#ef7d25] px-4 py-2.5 rounded-full text-sm lg:text-base border-2 border-[#191919]">
                                        Online
                                    </span>
                                </div>
                            </div>

                            <h3 className="font-sugar-peachy text-[48px] lg:text-[72px] leading-[0.85] text-[#191919] mt-4">
                                Gordon Neufeld
                            </h3>

                            <p className="font-dm-sans font-bold text-[20px] text-[#191919] pt-2">
                                Autor do livro "Pais Ocupados filhos distantes"
                            </p>

                            <p className="font-dm-sans text-[20px] lg:text-[22px] text-[#191919] leading-[1.3] font-medium opacity-95">
                                O autor que revolucionou a compreensão do apego e mostrou por que os pais precisam importar mais do que os colegas. Em um mundo que empurra nossas crianças para longe da família cada vez mais cedo, o psicólogo canadense nos lembra de algo simples — e poderoso: <span className="bg-[#191919] text-white px-2 py-0.5 leading-relaxed box-decoration-clone rounded-sm">a relação vem antes da educação.</span>
                            </p>
                        </div>

                        {/* Images Container - Polaroid Style - Gordon */}
                        <div className="mt-auto flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
                            {/* Polaroid 1 - Gordon */}
                            <div className="relative z-10 w-full sm:w-1/2 max-w-[280px] aspect-[3/4] bg-white p-3 pb-12 border-2 border-[#191919] rounded-xl shadow-[6px_6px_0px_0px_#191919] rotate-[-4deg] transition-all duration-300 hover:rotate-[-1deg] hover:scale-105 hover:z-20">
                                <div className="w-full h-full border-2 border-[#191919] rounded-lg overflow-hidden bg-[#fff6ef] relative">
                                    <img
                                        src="/images/gordonneufeld1.webp"
                                        alt="Dr. Gordon Neufeld"
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.currentTarget.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100%25" height="100%25" viewBox="0 0 400 500"%3E%3Crect fill="%23fff6ef" width="400" height="500"/%3E%3Ctext fill="%23191919" font-family="sans-serif" font-size="20" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3EGordon Neufeld%3C/text%3E%3C/svg%3E';
                                        }}
                                    />
                                </div>
                                <div className="absolute bottom-3 left-0 w-full text-center font-sugar-peachy text-[22px] text-[#191919]">
                                    Dr. Gordon
                                </div>
                            </div>

                            {/* Polaroid 2 - Livro - Hidden on mobile */}
                            <div className="relative hidden sm:block w-full sm:w-1/2 max-w-[280px] aspect-[3/4] bg-white p-3 pb-12 border-2 border-[#191919] rounded-xl shadow-[6px_6px_0px_0px_#191919] rotate-[6deg] transition-all duration-300 hover:rotate-[2deg] hover:scale-105 hover:z-20 sm:-ml-12 mt-8 sm:mt-0">
                                <div className="w-full h-full border-2 border-[#191919] rounded-lg overflow-hidden bg-[#fff6ef] relative">
                                    <img
                                        src="/images/livro-gordon.webp"
                                        alt="Livro Pais Ocupados Filhos Distantes"
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.currentTarget.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100%25" height="100%25" viewBox="0 0 400 500"%3E%3Crect fill="%23fff6ef" width="400" height="500"/%3E%3Ctext fill="%23191919" font-family="sans-serif" font-size="20" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3ECapa do Livro%3C/text%3E%3C/svg%3E';
                                        }}
                                    />
                                </div>
                                <div className="absolute bottom-3 left-0 w-full text-center font-sugar-peachy text-[22px] text-[#191919] px-2 leading-tight">
                                    O Livro
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card Pato Fu */}
                    <div className="flex flex-col w-full lg:w-[34%] bg-[#74acde] border-[3px] border-[#191919] rounded-[40px] p-8 lg:p-12 shadow-[8px_12px_0px_0px_#191919] relative group">
                        {/* Decorative background shape */}
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/20 rounded-full blur-2xl pointer-events-none"></div>

                        <div className="flex flex-col gap-6 mb-12 relative z-10">
                            <div className="flex flex-wrap items-center gap-4">
                                <span className="font-dm-sans font-bold text-[#191919] text-sm lg:text-base uppercase tracking-wider bg-white px-5 py-2.5 rounded-full border-2 border-[#191919] shadow-[2px_2px_0px_0px_#191919]">
                                    Show de encerramento
                                </span>
                                <span className="font-dm-sans font-bold text-white bg-[#191919] px-4 py-2.5 rounded-full text-sm lg:text-base">
                                    Dia 22, às 17h00
                                </span>
                            </div>

                            <h3 className="font-sugar-peachy text-[48px] lg:text-[72px] leading-[0.85] text-[#191919] mt-4">
                                Pato Fu e Giramundo
                            </h3>

                            <p className="font-dm-sans font-bold text-[20px] text-[#191919] pt-2">
                                O show que faz adultos lembrarem quem já foram.
                            </p>

                            <p className="font-dm-sans text-[20px] lg:text-[22px] text-[#191919] leading-[1.3] font-medium opacity-95">
                                Um espetáculo premiado que transforma brinquedos em instrumentos e devolve adultos à própria infância. No palco, Pato Fu se une ao Grupo Giramundo para encerrar com leveza nosso fim de semana de reflexões entre pais e filhos.
                            </p>
                        </div>

                        {/* Images Container - Polaroid Style - Pato Fu */}
                        <div className="mt-auto flex justify-center relative z-10">
                            {/* Polaroid 3 - Pato Fu & Giramundo */}
                            <div className="relative w-full max-w-[420px] aspect-video bg-white p-3 pb-12 border-2 border-[#191919] rounded-xl shadow-[6px_6px_0px_0px_#191919] rotate-[2deg] transition-all duration-300 hover:rotate-0 hover:scale-105 hover:z-20">
                                <div className="w-full h-full border-2 border-[#191919] rounded-lg overflow-hidden bg-[#fff6ef] relative">
                                    <img
                                        src="/images/patofu1.webp"
                                        alt="Pato Fu e Grupo Giramundo"
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.currentTarget.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100%25" height="100%25" viewBox="0 0 800 450"%3E%3Crect fill="%23fff6ef" width="800" height="450"/%3E%3Ctext fill="%23191919" font-family="sans-serif" font-size="28" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3EShow Pato Fu + Giramundo%3C/text%3E%3C/svg%3E';
                                        }}
                                    />
                                </div>
                                <div className="absolute bottom-3 left-0 w-full text-center font-sugar-peachy text-[24px] text-[#191919]">
                                    Imperdível 🎶
                                </div>
                                {/* Pin visual element */}
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-red-500 rounded-full border-2 border-[#191919] shadow-[2px_2px_0px_0px_#191919] z-30">
                                    <div className="absolute top-1 left-1 w-2 h-2 bg-white/50 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
