"use client";

import React from 'react';

export default function Section13() {
    return (
        <section className="bg-[#2daa96] border-y-[5px] border-[#191919] py-[86px] relative overflow-hidden" data-name="Section - 13" id="patrocinador">
            {/* Background Graphic */}
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[600px] md:w-[850px] h-auto z-[1] opacity-100 pointer-events-none">
                <img
                    src="/images/grafismo_simbolo.svg"
                    alt=""
                    className="w-full h-auto"
                />
            </div>

            <div className="max-w-[1280px] mx-auto px-6 relative z-[2] flex flex-col items-center text-center gap-[64px]">

                {/* Content */}
                <div className="flex flex-col gap-[24px] max-w-[1020px] md:max-w-[1280px] mx-auto items-center">
                    <h2 className="font-sugar-peachy text-[#191919] text-[48px] md:text-[84px] leading-[0.8] w-full">
                        Conecte sua marca ao maior festival de parentalidade da América Latina
                    </h2>

                    <p className="font-dm-sans font-normal text-[#191919] text-[18px] md:text-[24px] leading-[1.2] md:max-w-[1020px]">
                        Ao patrocinar o Festival Parental, sua marca se posiciona ao lado de quem está construindo o futuro da educação e do cuidado no Brasil. Mais do que visibilidade, é presença estratégica ao lado de milhares de profissionais, famílias, especialistas e marcas comprometidas com transformação social, bem-estar e impacto positivo.
                    </p>

                    <h3 className="font-sugar-peachy text-[#191919] text-[32px] md:text-[46px] leading-[0.9] mt-2 md:whitespace-nowrap">
                        Seja parte de um movimento que transforma gerações.
                    </h3>
                </div>

                {/* Button */}
                <a href="https://wa.me/5511915983957?text=Quero%20patrocinar%20o%20Festival%20Parental%202026" target="_blank" rel="noopener noreferrer" className="bg-[#79c3ab] border-[2px] border-[#191919] rounded-[40px] px-[32px] py-[16px] shadow-[4px_4px_0px_0px_#191919] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#191919] transition-all active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#191919] inline-flex items-center justify-center">
                    <span className="font-dm-sans font-bold text-[#191919] text-[14px] uppercase tracking-wide">
                        quero ser patrocinador
                    </span>
                </a>

            </div>
        </section>
    );
}
