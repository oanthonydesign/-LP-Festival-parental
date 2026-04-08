"use client";

import React from 'react';

export default function PreTicketSection() {
    return (
        <section className="bg-[#fff6ef] w-full flex flex-col items-center pt-[80px] pb-[40px] px-4 md:px-0 relative overflow-hidden" data-name="Pre-Ticket Transition">
            {/* Background Graphic - Simple Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2260a1]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="layout-container flex flex-col items-center gap-10 relative z-10 w-full max-w-[1000px]">

                {/* Visual Accent */}
                <div className="w-[80px] h-1 bg-[#ef7d25] rounded-full opacity-50" />

                <div className="flex flex-col items-center gap-8 text-center">
                    <h2 className="font-sugar-peachy text-[#2260a1] text-[38px] md:text-[56px] lg:text-[72px] leading-[0.9] tracking-[-1.5px] md:tracking-[-2px] max-w-[900px]">
                        Você pode continuar consumindo conteúdo. <span className="text-[#ef7d25]">Ou atravessar uma experiência que organiza tudo.</span>
                    </h2>

                    <div className="flex flex-col gap-6 max-w-[800px]">
                        <p className="font-dm-sans text-[#4c4d4f] text-[18px] md:text-[24px] leading-tight md:leading-snug">
                            Livros e redes sociais oferecem acesso à informação, mas raramente oferecem tempo e contexto para que esse conhecimento se transforme em clareza.
                        </p>
                        <p className="font-dm-sans text-[#191919] text-[18px] md:text-[24px] font-bold leading-tight md:leading-snug">
                            O Festival Parental é um convite a esse deslocamento: sair da lógica de acumular referências e entrar num ambiente onde o entendimento ganha forma.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
