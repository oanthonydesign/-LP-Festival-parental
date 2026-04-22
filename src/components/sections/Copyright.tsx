"use client";

import React from 'react';

export default function Copyright() {
    return (
        <div className="bg-[#1a1a1a] w-full" data-name="Copyright Bar">
            <div className="max-w-[1280px] mx-auto py-[28px] px-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
                {/* Esquerda: CNPJs e Direitos */}
                <div className="flex flex-col gap-[4px] items-center md:items-start font-dm-sans text-[#fff6ef] text-[13px] font-normal text-center md:text-left leading-snug">
                    <div className="flex flex-col gap-[2px]">
                        <span className="font-bold opacity-80">Realização e produção:</span>
                        <span>PARENTAL EDUCACAO E IMPACTO LTDA • CNPJ 65.318.249/0001-95</span>
                        <span>EF EDITORES CONTEUDO LTDA • CNPJ 31.041.359/0001-30</span>
                    </div>
                </div>

                {/* Direita: Vismo */}
                <div className="flex justify-center md:justify-end">
                    <a
                        href="https://vismo.com.br/?utm_source=festival-parental&utm_medium=copyright_credit&utm_campaign=lp-2026"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 group cursor-pointer"
                    >
                        <p className="font-dm-sans text-[#fff6ef] text-[14px] font-extralight opacity-80 group-hover:opacity-100 transition-opacity">
                            Desenvolvido por:
                        </p>
                        <div className="h-[20px] w-auto transition-transform group-hover:scale-105">
                            <img
                                src="/images/vismo.svg"
                                alt="Vismo Logo"
                                className="h-full w-auto object-contain"
                                loading="lazy"
                            />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
