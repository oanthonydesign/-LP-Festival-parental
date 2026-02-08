"use client";

import React from 'react';

export default function Copyright() {
    return (
        <div className="bg-[#1a1a1a] w-full" data-name="Copyright Bar">
            <div className="max-w-[1280px] mx-auto py-[28px] px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex flex-wrap gap-[18px] items-center justify-center md:justify-start font-dm-sans text-[#fff6ef] text-[13px] font-normal">
                    <p>© 2026 Todos os direitos reservados</p>
                    <a href="#" className="hover:underline">Política de privacidade</a>
                    <a href="#" className="hover:underline">Termos de uso</a>
                </div>

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
    );
}
