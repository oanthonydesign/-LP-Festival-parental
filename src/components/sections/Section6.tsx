"use client";

import { useState } from "react";
import svgPaths from "@/components/svg/svgPaths";

interface Benefit {
  text: string;
}

interface PassportData {
  id: string;
  name: string;
  lote: string;
  priceInstallment: string;
  priceFull: string;
  priceOriginal: string;
  benefits: string[];
  target: string;
  buttonText: string;
  href: string;

  // Double ticket options (optional)
  doubleOptions?: {
    priceInstallment: string;
    priceFull: string;
    priceOriginal: string;
    benefits: string[];
    href: string;
    buttonText: string;
  };

  bgColor: string;
  borderColor: string;
  textColor: string;
  priceColor: string;
  accentColor: string;
  benefitBg: string;
  benefitBorder: string;
  benefitTextColor: string;
}

const PASSAPORTES: PassportData[] = [
  {
    id: "educador",
    name: "Passaporte Educador",
    lote: "Lote 1",
    priceInstallment: "R$ 129,70",
    priceFull: "ou R$ 1.297,90 à vista",
    priceOriginal: "R$ 2.197,00",
    benefits: [
      "Acesso presencial aos 4 dias do Festival Parental 2026 (2 dias de trilha de conteúdo específico para profissionais da parentalidade + 2 dias de trilha de conteúdo aberto para pais e cuidadores)",
      "Sacola com brindes",
      "Acesso às sessões de autógrafos com palestrantes",
      "Acesso à feira de produtos e serviços para a parentalidade",
      "Acesso ao conteúdo gravado dos dois primeiros dias do Festival (trilhas de conteúdo exclusivas para profissionais, nos dias 19 e 20.11) por 90 dias após o evento"
    ],
    target: "Para profissionais da parentalidade",
    buttonText: "Quero meu ingresso de educador",
    href: "https://sun.eduzz.com/39VEQVEDWR",
    bgColor: "bg-[#3399CC]",
    borderColor: "border-[#191919]",
    textColor: "text-[#fff6ef]",
    priceColor: "text-[#fff6ef]",
    accentColor: "text-[#fff6ef]",
    benefitBg: "bg-transparent",
    benefitBorder: "border-[#fff6ef]/40",
    benefitTextColor: "text-[#fff6ef]"
  },
  {
    id: "parental",
    name: "Passaporte Parental",
    lote: "Lote 1",
    priceInstallment: "R$ 49,70",
    priceFull: "ou R$ 497,00 à vista",
    priceOriginal: "R$ 1.497,00",
    benefits: [
      "Acesso presencial individual aos 2 últimos dias do Festival Parental 2026 (dias 21 e 22.11), com trilhas de conteúdo abertas também para pais e cuidadores",
      "Sacola com brindes",
      "Acesso às sessões de autógrafos com palestrantes",
      "Acesso à feira de produtos e serviços para a parentalidade"
    ],
    target: "Para pais e cuidadores",
    buttonText: "Quero meu ingresso parental",
    href: "https://sun.eduzz.com/7WXQ74XY9A",
    doubleOptions: {
      priceInstallment: "R$ 74,70",
      priceFull: "ou R$ 747,00 à vista",
      priceOriginal: "R$ 1.947,00",
      benefits: [
        "Acesso presencial para duas pessoas aos 2 últimos dias do Festival Parental 2026 (dias 21 e 22.11), com trilhas de conteúdo abertas também para pais e cuidadores",
        "Sacola com brindes",
        "Acesso às sessões de autógrafos com palestrantes",
        "Acesso à feira de produtos e serviços para a parentalidade"
      ],
      href: "https://sun.eduzz.com/801ER3JRW7",
      buttonText: "Quero meu ingresso duplo"
    },
    bgColor: "bg-[#ED9F8C]",
    borderColor: "border-[#191919]",
    textColor: "text-[#191919]",
    priceColor: "text-[#191919]",
    accentColor: "text-[#191919]",
    benefitBg: "bg-transparent",
    benefitBorder: "border-[#191919]/20",
    benefitTextColor: "text-[#191919]"
  }
];

function StarIcon({ color = "#2DAA96" }: { color?: string }) {
  return (
    <div className="relative shrink-0 size-[20px] mt-0.5">
      <svg className="block size-full overflow-visible" fill="none" viewBox="0 0 20 20">
        <g style={{ filter: 'drop-shadow(0.48px 0.64px 0px #191919)' }}>
          <path d={svgPaths.p2ced7a00} fill={color} />
          <path d={svgPaths.p3c37a600} stroke="#191919" strokeWidth="0.5" />
          <path d={svgPaths.p27bba100} fill="#191919" />
        </g>
      </svg>
    </div>
  );
}

function TicketIcon() {
  return (
    <div className="shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" viewBox="0 0 15 12">
        <path d={svgPaths.p60d3f00} fill="currentColor" />
      </svg>
    </div>
  );
}

function PassportCard({ data }: { data: PassportData }) {
  const [isDouble, setIsDouble] = useState(false);

  const hasDoubleOption = !!data.doubleOptions;

  const currentPriceInstallment = isDouble && hasDoubleOption ? data.doubleOptions!.priceInstallment : data.priceInstallment;
  const currentPriceFull = isDouble && hasDoubleOption ? data.doubleOptions!.priceFull : data.priceFull;
  const currentPriceOriginal = isDouble && hasDoubleOption ? data.doubleOptions!.priceOriginal : data.priceOriginal;
  const currentBenefits = isDouble && hasDoubleOption ? data.doubleOptions!.benefits : data.benefits;
  const currentHref = isDouble && hasDoubleOption ? data.doubleOptions!.href : data.href;
  const currentButtonText = isDouble && hasDoubleOption ? data.doubleOptions!.buttonText : data.buttonText;

  return (
    <div id={data.id} className={`flex flex-col items-center w-full max-w-[420px] ${data.textColor}`}>
      {/* Header with Title and Lote */}
      <div className={`${data.bgColor} border-2 ${data.borderColor} border-solid rounded-[32px] shadow-[3px_3px_0px_0px_#191919] p-[16px] w-full z-10 relative`}>
        <div className={`border-2 ${data.borderColor} border-solid rounded-[16px] flex items-center justify-between px-[12px] py-[12px] gap-3`}>
          <div className="bg-[#f7a73c] border-2 border-[#191919] border-solid rounded-[6px] shadow-[3px_3px_0px_0px_#191919] px-[12px] py-[4px] shrink-0">
            <span className="font-sugar-peachy text-[18px] text-black leading-none">{data.lote}</span>
          </div>
          <h3 className="font-sugar-peachy text-[28px] leading-[0.8] text-center flex-1">
            {data.name}
          </h3>
        </div>
      </div>

      {/* Main Content Area */}
      <div className={`${data.bgColor} border-2 ${data.borderColor} border-solid rounded-[32px] shadow-[3px_3px_0px_0px_#191919] p-[24px] w-full -mt-[2px] pt-8 flex flex-col gap-6 z-20 relative`}>
        {hasDoubleOption && (
          <div className="flex w-full mt-2 border-2 border-[#191919] rounded-[40px] overflow-hidden bg-white/10 p-1">
            <button
              onClick={() => setIsDouble(false)}
              className={`flex-1 py-3 text-center font-dm-sans font-bold text-[14px] uppercase tracking-wider rounded-[32px] transition-all duration-300 ${!isDouble ? 'bg-[#f7a73c] text-[#191919] shadow-[2px_2px_0px_0px_#191919] border-2 border-[#191919]' : 'text-current opacity-70 border-2 border-transparent hover:opacity-100'}`}
            >
              Único
            </button>
            <button
              onClick={() => setIsDouble(true)}
              className={`flex-1 py-3 text-center font-dm-sans font-bold text-[14px] uppercase tracking-wider rounded-[32px] transition-all duration-300 ${isDouble ? 'bg-[#f7a73c] text-[#191919] shadow-[2px_2px_0px_0px_#191919] border-2 border-[#191919]' : 'text-current opacity-70 border-2 border-transparent hover:opacity-100'}`}
            >
              Duplo
            </button>
          </div>
        )}

        {/* Price Section */}
        <div className="text-center flex flex-col items-center">
          <div className="font-sugar-peachy text-[20px] md:text-[24px] text-current opacity-70 mb-2">
            De <span className="line-through">{currentPriceOriginal}</span> por
          </div>
          <div className="font-sugar-peachy leading-[0.8] flex flex-col md:flex-row items-center gap-1 md:gap-3">
            <span className={`text-[28px] md:text-[40px] ${data.accentColor}`}>12x de</span>
            <span className={`${data.priceColor} text-[46px] md:text-[64px]`}>{currentPriceInstallment}</span>
          </div>
          <p className="font-dm-sans text-[24px] mt-2 opacity-80">{currentPriceFull}</p>
        </div>

        {/* Target Audience */}
        <p className={`font-sugar-peachy text-[22px] md:text-[24px] text-center leading-[1.1] ${data.id === 'educador' ? 'w-full px-0' : 'px-4'}`}>
          {data.target}
        </p>

        {/* Benefits List */}
        <div className={`border-2 ${data.benefitBorder} border-solid rounded-[24px] p-[16px] flex flex-col gap-4 ${data.benefitBg}`}>
          {currentBenefits.map((benefit, idx) => (
            <div key={idx} className="flex gap-3 items-center">
              <StarIcon />
              <p className={`font-dm-sans text-[14px] leading-tight ${data.benefitTextColor}`}>
                {benefit}
              </p>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <a
          href={currentHref}
          className={`bg-[#f7a73c] border-2 border-[#191919] border-solid rounded-[40px] shadow-[4px_4px_0px_0px_#191919] ${data.id === 'educador' ? 'px-[6px] md:px-[24px]' : 'px-[24px]'} py-[16px] flex items-center justify-center gap-2 hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#191919] transition-all active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#191919] group w-full md:w-auto`}
        >
          <div className="text-[#191919] hidden md:block">
            <TicketIcon />
          </div>
          <span className="font-dm-sans font-bold text-[14px] uppercase text-[#191919] tracking-wider text-center">
            {currentButtonText}
          </span>
        </a>
      </div>
    </div>
  );
}

export default function Section6() {
  return (
    <section className="bg-[#fff6ef] pt-[56px] md:pt-[80px] pb-[32px] md:pb-[20px] px-4 md:px-12 flex flex-col items-center relative overflow-hidden" id="ingressos">
      <div className="max-w-[1280px] w-full flex flex-col items-center gap-[64px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-7 text-center">
          <div className="border-2 border-[#505050] border-solid rounded-[40px] shadow-[4px_4px_0px_0px_#505050] px-4 md:px-[32px] py-[16px] flex items-center gap-2 text-[#505050] bg-transparent">
            <TicketIcon />
            <span className="font-dm-sans text-[14px] uppercase tracking-wider">escolha seu ingresso</span>
          </div>

          <div className="flex flex-col gap-6 max-w-[1120px]">
            <h2 className="font-sugar-peachy text-[46px] md:text-[72px] text-[#2260a1] leading-[0.8]">
              Um festival, duas jornadas intensas
            </h2>
            <p className="font-dm-sans text-[18px] md:text-[32px] text-[#4c4d4f] leading-tight">
              Um encontro presencial para refletir sobre a parentalidade com profundidade, responsabilidade e troca real.
            </p>
          </div>
        </div>

        {/* Passport Grid */}
        <div className="flex flex-col lg:flex-row lg:flex-nowrap justify-center gap-6 lg:gap-[10px] w-full items-center">
          {PASSAPORTES.map((passport) => (
            <PassportCard key={passport.id} data={passport} />
          ))}
        </div>
      </div>
    </section>
  );
}