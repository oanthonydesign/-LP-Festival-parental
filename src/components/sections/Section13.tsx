"use client";

import React from 'react';

export default function Section13() {
    return (
        <section className="bg-[#2daa96] border-y-[5px] border-[#191919] py-[86px] relative overflow-hidden scroll-mt-24" data-name="Section - 13" id="patrocinador">

            <div className="max-w-[1280px] mx-auto px-6 relative z-[2] flex flex-col items-center text-center gap-[64px]">

                {/* Content */}
                <div className="flex flex-col gap-[24px] max-w-[900px] md:max-w-[900px] mx-auto items-center">
                    <h2 className="font-sugar-peachy text-[#191919] text-[48px] lg:text-[72px] leading-[0.8] w-full">
                        Se a sua marca fala com famílias, ela precisa estar aqui
                    </h2>

                    <div className="font-dm-sans font-normal text-[#191919] text-[18px] lg:text-[22px] leading-[1.4] flex flex-col gap-6 max-w-[800px] mx-auto">
                        <p>
                            O Festival Parental reúne um público altamente engajado em um dos temas mais relevantes da atualidade: <strong>a parentalidade</strong>.
                        </p>

                        <p className="text-[22px] lg:text-[28px] leading-tight font-medium">
                            Não é só visibilidade – <strong>é contexto</strong>.
                        </p>

                        <p className="opacity-90">
                            Um ambiente onde marcas se conectam com famílias, profissionais e especialistas em um nível que dificilmente acontece em outros canais.
                        </p>

                        <p className="text-[24px] lg:text-[34px] leading-tight font-bold">
                            Aqui, sua marca não aparece.<br className="hidden md:block" />
                            Ela participa da conversa.
                        </p>
                    </div>

                    <h3 className="font-sugar-peachy text-[#191919] text-[32px] md:text-[46px] leading-[0.9] mt-2 text-center">
                        Seja parte de um movimento que transforma gerações.
                    </h3>
                </div>

                {/* Buttons Container */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-8 w-full mt-4">
                    {/* Botão Patrocinador */}
                    <a 
                        href="https://wa.me/5511915983957?text=Quero%20patrocinar%20o%20Festival%20Parental%202026" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-[#F7A73C] border-[3px] border-[#191919] rounded-[40px] px-[40px] py-[20px] shadow-[6px_6px_0px_0px_#191919] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_#191919] transition-all active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#191919] inline-flex items-center justify-center w-full sm:w-auto min-w-[280px] group"
                    >
                        <span className="font-dm-sans font-black text-[#191919] text-[16px] uppercase tracking-wider">
                            quero ser patrocinador
                        </span>
                    </a>

                    {/* Botão Expositor */}
                    <a 
                        href="https://wa.me/5511915983957?text=Quero%20ser%20expositor%20no%20Festival%20Parental%202026" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-[#FFF6EF] border-[3px] border-[#191919] rounded-[40px] px-[40px] py-[20px] shadow-[6px_6px_0px_0px_#191919] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_#191919] transition-all active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#191919] inline-flex items-center justify-center w-full sm:w-auto min-w-[280px] group"
                    >
                        <span className="font-dm-sans font-black text-[#191919] text-[16px] uppercase tracking-wider">
                            quero ser expositor
                        </span>
                    </a>
                </div>

            </div>
        </section>
    );
}
