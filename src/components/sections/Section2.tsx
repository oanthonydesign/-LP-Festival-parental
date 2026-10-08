"use client";

import { trackClarity } from "@/utils/clarity";

export default function Section2() {
    return (
        <section className="bg-[#fff6ef] w-full flex flex-col items-center px-4 md:px-0 pb-[80px] pt-[56px] relative isolate overflow-visible scroll-mt-24" id="contexto" data-name="Section - 2">
            <div className="layout-container flex flex-col gap-[48px] items-center relative z-10 w-full">
                <div className="flex flex-col items-center gap-10 w-full max-w-full text-center">
                    {/* Header Group */}
                    <div className="flex flex-col gap-6 items-center w-full max-w-[1200px]">
                        <div className="flex flex-col font-sugar-peachy justify-center relative text-[#ef7d25] text-[36px] md:text-[46px] tracking-[-1.3px] md:tracking-[-1.4px] leading-[0.9]">
                            <p className="whitespace-pre-wrap break-words">Nunca se falou tanto sobre parentalidade.</p>
                            <p className="whitespace-pre-wrap break-words">E nunca foi tão difícil se sentir seguro nela.</p>
                        </div>
                    </div>

                    {/* Text Group */}
                    <div className="flex flex-col items-center w-full max-w-[1000px]">
                        <div className="flex flex-col gap-6 font-dm-sans justify-center leading-tight relative text-[#4c4d4f] text-[18px] lg:text-[24px]">
                            <p>
                                Pais e profissionais vivem a mesma realidade: excesso de estímulo, de opinião, de informação – e pouca clareza sobre como tudo isso se conecta na prática.
                            </p>
                            <p>
                                As respostas rápidas não sustentam mais os desafios emocionais e humanos da infância de hoje. E quem trabalha com famílias, ou vive a parentalidade na prática, sente isso todos os dias.
                            </p>

                            <div className="flex flex-col font-sugar-peachy justify-center relative text-[26px] lg:text-[36px] w-full max-w-[900px] mt-4 mx-auto leading-[1] text-[#2260A1]">
                                <p>
                                    A parentalidade não precisa de mais dicas. Precisa de mais clareza. E de mais profundidade.
                                </p>
                            </div>

                            <p>
                                O Festival Parental nasce desse contexto – a evolução do Congresso Internacional de Educação Parental – um encontro presencial para aprofundar as conversas sobre infância, vínculo e desenvolvimento humano no mundo de hoje.
                            </p>

                            {/* Logo do Congresso CIEP */}
                            <div className="flex justify-center items-center w-full max-w-[240px] md:max-w-[290px] mt-2 md:mt-3 mx-auto">
                                <img
                                    src="/images/logo7ciepazul1.webp"
                                    alt="Congresso Internacional de Educação Parental"
                                    className="w-full h-auto object-contain"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <a href="#ingressos" onClick={() => trackClarity("clique_cta_contexto")} className="group relative w-full md:w-[332px]">
                    <div className="bg-[#f7a73c] border-2 border-[#191919] flex items-center justify-center gap-[10px] px-[20px] md:px-[30px] py-[16px] rounded-[40px] shadow-[4px_4px_0px_0px_#191919] group-hover:translate-y-[1px] group-hover:shadow-[2px_2px_0px_0px_#191919] transition-all w-full">
                        <img src="/images/icons/ingresso_linha_preta.svg" alt="Ingresso" className="w-[24px] h-[24px] shrink-0" loading="lazy" />
                        <span className="font-dm-sans font-bold text-[#191919] text-[13px] md:text-[14px] uppercase tracking-[0.8px] md:tracking-[1px] whitespace-nowrap">
                            Garanta seu ingresso
                        </span>
                    </div>
                </a>
            </div>

        </section>
    );
}
