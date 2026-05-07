"use client";

import React from 'react';

export default function PreTicketSection() {
    return (
        <section className="bg-[#2260a1] w-full flex flex-col items-center pt-[100px] pb-[40px] px-4 md:px-0 relative overflow-hidden" data-name="Pre-Ticket Transition">
            <div className="layout-container flex flex-col items-center gap-10 relative z-10 w-full max-w-[1000px]">

                {/* Visual Accent */}
                <div className="w-[80px] h-1 bg-white/30 rounded-full" />

                <div className="flex flex-col items-center gap-8 text-center">
                    <h2 className="font-sugar-peachy text-white text-[32px] md:text-[32px] lg:text-[46px] leading-[0.9] tracking-[-1.5px] md:tracking-[-2px] max-w-[1000px]">
                        Nunca houve tanta informação disponível sobre infância, educação e desenvolvimento emocional. <span className="text-[#f7a73c]">E talvez nunca tenha sido tão difícil decidir em quem confiar,</span> o que aplicar e como sustentar tudo isso na vida real.
                    </h2>
                    <p className="font-sugar-peachy text-white text-[32px] md:text-[32px] lg:text-[46px] leading-[0.9] tracking-[-1.5px] md:tracking-[-2px] max-w-[1000px]">
                        Foi dessa necessidade que nasceu o Festival Parental.
                    </p>

                    <div className="flex flex-col gap-6 max-w-[1000px]">
                        <p className="font-dm-sans text-white text-[18px] md:text-[24px] leading-tight md:leading-snug">
                            Uma evolução natural do Congresso Internacional de Educação Parental, que há seis edições reúne algumas das principais referências do país para discutir vínculo, desenvolvimento humano e relações familiares com profundidade, rigor e prática.
                        </p>
                        <p className="font-dm-sans text-white text-[18px] md:text-[24px] leading-tight md:leading-snug">
                            O Festival amplia esse encontro. Um espaço onde diferentes perspectivas deixam de competir por atenção e passam a construir compreensão, clareza e caminhos mais conscientes para quem vive e trabalha com famílias.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
