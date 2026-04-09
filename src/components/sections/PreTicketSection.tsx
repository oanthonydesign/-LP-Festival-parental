"use client";

import React from 'react';

export default function PreTicketSection() {
    return (
        <section className="bg-[#2260a1] w-full flex flex-col items-center pt-[100px] pb-[100px] px-4 md:px-0 relative overflow-hidden" data-name="Pre-Ticket Transition">
            {/* Background Graphic - Simple Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="layout-container flex flex-col items-center gap-10 relative z-10 w-full max-w-[1000px]">

                {/* Visual Accent */}
                <div className="w-[80px] h-1 bg-white/30 rounded-full" />

                <div className="flex flex-col items-center gap-8 text-center">
                    <h2 className="font-sugar-peachy text-white text-[38px] md:text-[56px] lg:text-[72px] leading-[0.9] tracking-[-1.5px] md:tracking-[-2px] max-w-[1050px]">
                        Não é falta de conteúdo. É dificuldade de transformar tudo isso em compreensão. <span className="text-[#f7a73c]">É exatamente esse ponto que o Festival resolve.</span>
                    </h2>

                    <div className="flex flex-col gap-6 max-w-[900px]">
                        <p className="font-dm-sans text-white text-[18px] md:text-[24px] leading-tight md:leading-snug">
                            Livros e redes sociais ampliam o acesso à informação. Mas acesso não garante clareza, especialmente diante de tantas abordagens diferentes.
                        </p>
                        <p className="font-dm-sans text-white text-[18px] md:text-[24px] leading-tight md:leading-snug">
                            O Festival Parental nasce justamente nesse ponto: um ambiente onde essas referências se encontram, se organizam e fazem sentido na prática.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
