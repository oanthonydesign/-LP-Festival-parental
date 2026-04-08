"use client";

import React from 'react';
import { imgChatGptImage26DeJanDe20261948541, imgChatGptImage26DeJanDe20262002121 } from "@/components/svg/svg-ph0rc";

// Import real images
const imgProfissionais = "/images/img_profissionais.webp";
const imgPais = "/images/img_pais.webp";

function CloseBarMac() {
    return (
        <div className="bg-[#fff6ee] border-2 border-[#191919] border-solid h-[56px] overflow-clip relative rounded-tl-[24px] rounded-tr-[24px] shadow-[7px_7px_0px_0px_#191919] shrink-0 w-full" data-name="close bar_mac">
            <div className="absolute left-[28px] size-[12px] top-[19.8px]">
                <div className="bg-[#FC3F51] rounded-full size-full" />
            </div>
            <div className="absolute left-[45px] size-[12px] top-[19.8px]">
                <div className="bg-[#ECA031] rounded-full size-full" />
            </div>
            <div className="absolute left-[62px] size-[12px] top-[19.8px]">
                <div className="bg-[#1CB638] rounded-full size-full" />
            </div>
        </div>
    );
}

function Card({
    bgColor,
    textColor,
    heading,
    subtext,
    image,
    id,
    badgeText
}: {
    bgColor: string;
    textColor: string;
    heading: string;
    subtext: string;
    image: string;
    id?: string;
    badgeText?: string;
}) {
    return (
        <div className="flex flex-col items-start w-full lg:w-1/2 relative group" id={id}>
            {badgeText && (
                <div className="absolute -top-6 -right-4 md:-right-8 bg-[#f7a73c] border-2 border-[#191919] rounded-full w-[100px] h-[100px] md:w-[120px] md:h-[120px] flex items-center justify-center rotate-12 shadow-[4px_4px_0px_0px_#191919] z-30 animate-bounce-slow">
                    <span className="font-sugar-peachy text-[#191919] text-center leading-[0.8]">
                        {badgeText.split(' ').map((word, i) => (
                            <span
                                key={i}
                                className={`block ${i === 0 ? "text-[28px] md:text-[40px] tracking-[-1px] md:tracking-[-1.3px]" : "text-[14px] md:text-[16px] uppercase tracking-wider"}`}
                            >
                                {word}
                            </span>
                        ))}
                    </span>
                </div>
            )}
            <CloseBarMac />
            <div className={`flex-1 flex flex-col items-center p-6 gap-6 relative rounded-bl-[16px] rounded-br-[16px] shadow-[7px_7px_0px_0px_#191919] shrink-0 w-full border-b-2 border-l-2 border-r-2 border-[#191919] border-solid`} style={{ backgroundColor: bgColor }}>
                <div className={`flex flex-col gap-6 items-center text-center ${textColor}`}>
                    <h3 className="font-dm-sans font-semibold text-[26px] md:text-[36px] leading-tight max-w-[458px]">
                        {heading}
                    </h3>
                    <p className="font-dm-sans font-normal text-[18px] md:text-[22px] leading-[1.2] max-w-[544px]">
                        {subtext}
                    </p>
                </div>

                <div className="relative w-full aspect-[537/325] max-w-[537px] overflow-hidden mt-auto">
                    <img
                        src={image}
                        alt={heading}
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
}

export default function Section8() {
    return (
        <section className="bg-[#fff6ef] w-full flex flex-col items-center py-[42px] px-6 scroll-mt-24" id="para-quem" data-name="Section - 8">
            <div className="max-w-[1280px] w-full flex flex-col gap-[64px] items-center">
                {/* Header Text */}
                <div className="flex flex-col gap-6 items-center text-center max-w-[1180px]">
                    <h2 className="font-sugar-peachy text-[#2260a1] text-[46px] lg:text-[72px] tracking-[-1.4px] lg:tracking-[-2px] leading-[0.8]">
                        Para quem é o Festival Parental
                    </h2>
                    <p className="font-dm-sans text-[#4c4d4f] text-[18px] md:text-[24px] max-w-[928px] leading-tight">
                        Dois caminhos diferentes, um mesmo ponto de encontro
                    </p>
                </div>

                {/* Cards Container */}
                <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[64px] w-full items-stretch">
                    <Card
                        id="profissional"
                        bgColor="#3399CC"
                        textColor="text-[#fff6ef]"
                        heading="Para profissionais que trabalham com famílias"
                        subtext="Para profissionais que buscam a excelência técnica que o mercado exige e a segurança para ser referência no atendimento a famílias"
                        image={imgProfissionais}
                        badgeText="+1.500 profissionais"
                    />
                    <Card
                        id="pais"
                        bgColor="#ED9F8C"
                        textColor="text-[#191919]"
                        heading="Para pais, mães e cuidadores"
                        subtext="Para pais e cuidadores que decidiram substituir a culpa e o excesso de informação por clareza prática e segurança na educação dos filhos"
                        image={imgPais}
                    />
                </div>
            </div>
        </section>
    );
}
