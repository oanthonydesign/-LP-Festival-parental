"use client";

import React from 'react';

export default function PreTicketSection() {
    return (
        <section className="bg-[#2260a1] w-full flex flex-col items-center pt-[100px] pb-[40px] px-4 md:px-0 relative overflow-hidden" data-name="Pre-Ticket Transition">
            <div className="layout-container flex flex-col items-center gap-10 relative z-10 w-full max-w-[1000px]">

                {/* Visual Accent */}
                <div className="w-[80px] h-1 bg-white/30 rounded-full" />

                <div className="flex flex-col items-center gap-8 text-center">
                    <h2 className="font-sugar-peachy text-white text-[32px] md:text-[32px] lg:text-[46px] leading-[0.9] max-w-[1000px]">
                        Nunca houve tanta informação disponível sobre infância, educação e desenvolvimento emocional. <span className="text-[#f7a73c]">E talvez nunca tenha sido tão difícil encontrar clareza no meio de tantas vozes, abordagens e respostas rápidas.</span>
                    </h2>
                    <p className="font-dm-sans text-white text-[18px] md:text-[24px] leading-tight md:leading-snug">
                        O Festival Parental nasce desse momento.
                    </p>

                    <div className="flex flex-col gap-6 max-w-[1000px]">
                        <p className="font-dm-sans text-white text-[18px] md:text-[24px] leading-tight md:leading-snug">
                            Um encontro presencial para aprofundar as conversas sobre infância, adolescência e relações humanas que o mundo atual exige, reunindo famílias, profissionais e algumas das vozes mais relevantes do país em torno de uma pergunta comum:
                        </p>
                        <div className="flex flex-col font-sugar-peachy justify-center relative text-[26px] lg:text-[36px] w-full max-w-[900px] mt-4 mx-auto leading-[1] text-white">
                            <p>
                                Como educar, crescer e construir vínculos de forma mais consciente hoje?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
