"use client";

import React from 'react';

// Import real images
const imgProfissionais = "/images/img_profissionais.webp";
const imgPais = "/images/img_pais.webp";

function CloseBarMac({ label, dates, accent, accentText }: { label?: string; dates?: string; accent?: string; accentText?: string }) {
    return (
        <div className="bg-[#fff6ee] border-2 border-[#191919] border-solid min-h-[56px] py-2.5 overflow-clip relative rounded-tl-[24px] rounded-tr-[24px] shadow-[7px_7px_0px_0px_#191919] shrink-0 w-full flex items-center justify-between gap-3 px-6" data-name="close bar_mac">
            <div className="flex gap-[7px] items-center shrink-0">
                <div className="size-[12px] bg-[#FC3F51] rounded-full" />
                <div className="size-[12px] bg-[#ECA031] rounded-full" />
                <div className="size-[12px] bg-[#1CB638] rounded-full" />
            </div>
            {label && (
                <div className="flex flex-col md:flex-row items-end md:items-center gap-1 md:gap-3 text-right">
                    <span className="font-dm-sans font-bold text-[#191919] text-[16px] md:text-[20px] uppercase tracking-[0.2px] leading-tight">
                        {label}
                    </span>
                    {dates && (
                        <span
                            className={`font-dm-sans font-bold text-[12px] md:text-[14px] uppercase tracking-wide whitespace-nowrap px-2.5 py-0.5 rounded-full border-2 border-[#191919] ${accentText}`}
                            style={{ backgroundColor: accent }}
                        >
                            {dates}
                        </span>
                    )}
                </div>
            )}
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
    label,
    dates,
    logo
}: {
    bgColor: string;
    textColor: string;
    heading: string;
    subtext: string;
    image: string;
    id?: string;
    label?: string;
    dates?: string;
    logo?: string;
}) {
    return (
        <div className="flex flex-col items-start w-full lg:w-1/2 relative group scroll-mt-24 lg:scroll-mt-32" id={id}>
            <CloseBarMac label={label} dates={dates} accent={bgColor} accentText={textColor} />
            <div className={`flex-1 flex flex-col items-center p-6 gap-6 relative rounded-bl-[16px] rounded-br-[16px] shadow-[7px_7px_0px_0px_#191919] shrink-0 w-full border-b-2 border-l-2 border-r-2 border-[#191919] border-solid`} style={{ backgroundColor: bgColor }}>
                <div className={`flex flex-col gap-6 items-center text-center ${textColor}`}>
                    <h3 className="font-dm-sans font-semibold text-[26px] md:text-[36px] leading-tight max-w-[458px]">
                        {heading}
                    </h3>
                    <p className="font-dm-sans font-normal text-[18px] md:text-[22px] leading-[1.2] max-w-[544px]">
                        {subtext}
                    </p>
                </div>

                <div className="relative w-full aspect-[537/325] max-w-[537px] overflow-hidden mt-auto rounded-b-[12px]">
                    <img
                        src={image}
                        alt={heading}
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                    {logo && (
                        <div className="absolute bottom-2 md:bottom-3 left-1/2 -translate-x-1/2 z-10 w-[130px] sm:w-[150px] md:w-[170px] flex justify-center items-center pointer-events-none drop-shadow-md">
                            <img
                                src={logo}
                                alt="Logo Congresso"
                                className="w-full h-auto object-contain"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    )}
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
                        subtext="Quatro dias de repertório para quem enfrenta a complexidade das relações familiares na prática, com base científica, troca qualificada e caminhos para transformar teoria em intervenção real com famílias."
                        image={imgProfissionais}
                        label="Passaporte Profissional"
                        dates="19 a 22/11"
                        logo="/images/logo7ciepbranco1.webp"
                    />
                    <Card
                        id="pais"
                        bgColor="#ED9F8C"
                        textColor="text-[#191919]"
                        heading="Para pais, mães e cuidadores"
                        subtext="Dois dias de conversas acessíveis e profundas, com reflexões e experiências para lidar com os desafios reais da criação de filhos hoje com clareza, sem julgamentos ou fórmulas prontas."
                        image={imgPais}
                        label="Passaporte Parental"
                        dates="21 e 22/11"
                    />
                </div>
            </div>
        </section>
    );
}
