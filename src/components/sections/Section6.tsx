"use client";

import { useState } from "react";
import svgPaths from "@/components/svg/svgPaths";
import { useCountdown } from "@/hooks/useCountdown";

// Flags de controle para fácil ativação/desativação
const SHOW_PROMO_RIBBON = false;
const SHOW_PRICE_STATUS_BADGE = true;
const SHOW_COUNTDOWN_BADGE = false;

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
    lote: "Lote 2",
    priceInstallment: "R$ 139,70",
    priceFull: "ou R$ 1.397,90 à vista",
    priceOriginal: "R$ 2.197,00",
    benefits: [
      "Acesso presencial aos 4 dias do Festival Parental 2026 (2 dias de conteúdo para profissionais + 2 dias de conteúdo para pais e cuidadores)",
      "Sacola com brindes",
      "Acesso às sessões de autógrafos com palestrantes",
      "Acesso à feira de produtos e serviços para a parentalidade",
      "Acesso ao conteúdo gravado dos dois primeiros dias do Festival"
    ],
    target: "Para profissionais da parentalidade",
    buttonText: "Quero participar como profissional",
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
    lote: "Lote 2",
    priceInstallment: "R$ 49,70",
    priceFull: "ou R$ 497,00 à vista",
    priceOriginal: "R$ 1.497,00",
    benefits: [
      "Acesso presencial individual aos 2 últimos dias do Festival Parental 2026 (dias 21 e 22.11), com conteúdo para pais e cuidadores",
      "Sacola com brindes",
      "Acesso às sessões de autógrafos com palestrantes",
      "Acesso à feira de produtos e serviços para a parentalidade"
    ],
    target: "Para pais e cuidadores",
    buttonText: "Quero participar do Festival",
    href: "https://sun.eduzz.com/39VEAVA5WR",
    doubleOptions: {
      priceInstallment: "R$ 74,70",
      priceFull: "ou R$ 747,00 à vista",
      priceOriginal: "R$ 1.947,00",
      benefits: [
        "Acesso presencial para duas pessoas aos 2 últimos dias do Festival Parental 2026 (dias 21 e 22.11), com conteúdo para pais e cuidadores",
        "Sacola com brindes",
        "Acesso às sessões de autógrafos com palestrantes",
        "Acesso à feira de produtos e serviços para a parentalidade"
      ],
      href: "https://sun.eduzz.com/G92ERDR4WE",
      buttonText: "Quero 2 passaportes com desconto"
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

function Ribbon() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[inherit] pointer-events-none z-[100]">
      <div className="bg-[#f7a73c] border-y-2 border-[#191919] border-solid -rotate-[25deg] py-0.5 w-[180px] absolute top-[10px] left-[-45px] shadow-[0px_2px_10px_rgba(0,0,0,0.1)] flex items-center justify-center">
        <span className="font-sugar-peachy text-[12px] md:text-[13px] text-black uppercase tracking-tight block text-center">
          ÚLTIMOS DIAS
        </span>
      </div>
    </div>
  );
}

function CountdownBadge() {
  const countdown = useCountdown();
  const pad = (n: number) => String(n).padStart(2, "0");

  const countdownText = countdown.expired
    ? "00d 00h 00m"
    : `${pad(countdown.days)}d ${pad(countdown.hours)}h ${pad(countdown.minutes)}m`;

  return (
    <div className="bg-linear-to-b from-[#FFCF6B] to-[#F4B63E] border-2 border-[#191919] border-solid rounded-[16px] p-4 shadow-[3px_3px_0px_0px_#191919] flex items-center justify-center gap-4 mb-5 w-full max-w-[320px] self-center">
      <div className="shrink-0 scale-125">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 2H19M5 22H19M5 2C5 2 5 9 12 12M19 2C19 2 19 9 12 12M5 22C5 22 5 15 12 12M19 22C19 22 19 15 12 12" stroke="#191919" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 12L8 17H16L12 12Z" fill="#191919" />
        </svg>
      </div>
      <div className="flex flex-col items-start">
        <p className="font-dm-sans text-[16px] md:text-[18px] leading-tight text-[#191919]">
          <span className="font-bold text-[#2260a1]">Lote 1</span> termina em
        </p>
        <p className="font-sugar-peachy text-[28px] md:text-[34px] leading-[0.9] text-[#191919] mt-1 tabular-nums">
          {countdownText}
        </p>
      </div>
    </div>
  );
}

// function PriceStatusBadge({ price }: { price: string }) {
//   return (
//     <div className="bg-[#fbce32] border-2 border-[#191919] border-solid rounded-[40px] px-4 py-1.5 flex items-center justify-center shadow-[2px_2px_0px_0px_#191919]">
//       <span className="font-sugar-peachy text-[24px] text-[#191919]">
//         Após essa data: R$1.497
//       </span>
//     </div>
//   );
// }

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
    <div id={data.id} className={`flex flex-col w-full max-w-[420px] ${data.textColor} h-full relative group`}>
      {/* Header with Title and Lote */}
      <div className={`${data.bgColor} border-2 ${data.borderColor} border-solid rounded-[32px] shadow-[3px_3px_0px_0px_#191919] p-[16px] w-full z-10 relative overflow-hidden`}>
        {SHOW_PROMO_RIBBON && <Ribbon />}
        <div className={`border-2 ${data.borderColor} border-solid rounded-[16px] flex items-center justify-between px-[12px] py-[12px] gap-3 relative z-20`}>
          <div className="bg-[#f7a73c] border-2 border-[#191919] border-solid rounded-[6px] shadow-[3px_3px_0px_0px_#191919] px-[12px] py-[4px] shrink-0">
            <span className="font-sugar-peachy text-[18px] text-black leading-none">{data.lote}</span>
          </div>
          <h3 className="font-sugar-peachy text-[28px] leading-[0.8] text-center flex-1">
            {data.name}
          </h3>
        </div>
      </div>

      {/* Main Content Area */}
      <div className={`flex-1 flex flex-col ${data.bgColor} border-2 ${data.borderColor} border-solid rounded-[24px] md:rounded-[32px] shadow-[3px_3px_0px_0px_#191919] p-[20px] md:p-[24px] w-full -mt-[2px] pt-8 md:pt-10 gap-6 z-20 relative`}>

        {/* Passaporte Tags */}
        {data.id === 'educador' && (
          <div className="bg-[#fff6ef] rounded-[40px] px-1 sm:px-3 py-2.5 md:py-3 flex items-center justify-center gap-1.5 sm:gap-2 w-full -mt-1 md:-mt-2 overflow-hidden">
            <svg className="shrink-0 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#f7a73c" />
            </svg>
            <span className="font-dm-sans font-bold text-[11px] sm:text-[11px] md:text-[12px] lg:text-[12px] uppercase text-[#191919] tracking-wider text-left whitespace-nowrap">
              EXPERIÊNCIA COMPLETA PARA PROFISSIONAIS
            </span>
          </div>
        )}

        {data.id === 'parental' && (
          <div className="bg-transparent border-[1px] border-[#fff6ef] rounded-[40px] px-1 sm:px-3 py-2.5 md:py-3 flex items-center justify-center gap-1.5 sm:gap-2 w-full -mt-1 md:-mt-2 overflow-hidden">
            <span className="font-dm-sans font-bold text-[11px] sm:text-[11px] md:text-[12px] lg:text-[13px] uppercase text-[#191919] tracking-wider text-center whitespace-nowrap">
              PARA PAIS, MÃES E CUIDADORES
            </span>
          </div>
        )}

        {hasDoubleOption && (
          <div className="flex w-full border-2 border-[#191919] rounded-[40px] overflow-hidden bg-white/10 p-1">
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

        {/* Benefits List */}
        <div className={`border-2 ${data.benefitBorder} border-solid rounded-[24px] p-[16px] flex flex-col gap-4 ${data.benefitBg}`}>
          {currentBenefits.map((benefit, idx) => (
            <div key={idx} className="flex gap-3 items-center">
              <StarIcon />
              <p className={`font-dm-sans text-[16px] leading-tight ${data.benefitTextColor}`}>
                {benefit}
              </p>
            </div>
          ))}
        </div>
        {SHOW_COUNTDOWN_BADGE && (
          <div className="flex justify-center">
            <CountdownBadge />
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



        {/* {SHOW_PRICE_STATUS_BADGE && data.id === 'educador' && (
          <div className="flex justify-center -mt-4 -mb-4">
            <PriceStatusBadge price='2.197' />
          </div>
        )} */}


        {/* Action Area */}
        <div className="mt-auto flex flex-col items-center gap-3 w-full">
          {data.id === 'parental' && isDouble && (
            <p className="font-dm-sans font-medium text-[13px] md:text-[14px] text-center text-current opacity-80">
              Melhor custo por participante
            </p>
          )}

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
            <span className="font-dm-sans font-bold text-[14px] uppercase tracking-wider">escolha seu ingresso</span>
          </div>

          <div className="flex flex-col gap-6 max-w-[1000px]">
            <h2 className="font-sugar-peachy text-[46px] md:text-[72px] text-[#2260a1] leading-[0.8]">
              Agora é escolher como você quer participar do Festival Parental
            </h2>
            <p className="font-dm-sans text-[18px] lg:text-[24px] text-[#4c4d4f] leading-tight">
              Dois caminhos diferentes, pensados para públicos distintos. Escolha o passaporte que melhor se conecta com o seu momento.
            </p>
          </div>
        </div>

        {/* Passport Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[20px] w-full max-w-[860px] items-stretch justify-center">
          {PASSAPORTES.map((passport) => (
            <PassportCard key={passport.id} data={passport} />
          ))}
        </div>
      </div>
    </section>
  );
}