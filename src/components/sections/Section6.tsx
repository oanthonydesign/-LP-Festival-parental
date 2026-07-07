"use client";

import { useState, useEffect, useRef } from "react";
import svgPaths from "@/components/svg/svgPaths";
import { useCountdown } from "@/hooks/useCountdown";
import { useIsAcaoDia } from "@/hooks/useIsAcaoDia";
import { Gift, Files, BookOpen, Video } from "lucide-react";

// Flags de controle para fácil ativação/desativação
const SHOW_PROMO_RIBBON = false;
const SHOW_PRICE_STATUS_BADGE = false;
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
  isSoldOut?: boolean;
  badgeText?: string;
}

const PASSAPORTES: PassportData[] = [
  {
    id: "embaixador",
    name: "Passaporte Embaixador",
    lote: "ESGOTADO",
    priceInstallment: "",
    priceFull: "",
    priceOriginal: "",
    benefits: [
      "Acesso aos 4 dias do Festival Parental 2026 (2 dias de conteúdo para profissionais – 7º Congresso Internacional de Educação Parental + 2 dias de conteúdo aberto também para pais e cuidadores)",
      "Sacola com brindes",
      "Acesso às sessões de autógrafos com palestrantes",
      "Acesso à feira de produtos e serviços para a parentalidade",
      "Acesso à gravação completa do Festival por 90 dias",
      "Credenciamento para Embaixadores",
      "Acesso ao Coquetel Exclusivo para Embaixadores no dia 20.11.26",
      "Botton de Identificação de Embaixadores",
      "Cupom personalizado de desconto para seguidores e convidados",
      "Acesso à seletiva de palestras e workshops para pais e cuidadores",
      "Certificado de participação"
    ],
    target: "PRESENÇA E PROTAGONISMO",
    buttonText: "ESGOTADO",
    href: "#",
    isSoldOut: true,
    bgColor: "bg-[#3399CC]/40",
    borderColor: "border-[#191919]",
    textColor: "text-[#191919]/60",
    priceColor: "text-[#191919]/60",
    accentColor: "text-[#191919]/60",
    benefitBg: "bg-transparent",
    benefitBorder: "border-[#191919]/20",
    benefitTextColor: "text-[#191919]/70"
  },
  {
    id: "educador",
    name: "Passaporte Profissional",
    lote: "Lote 5",
    priceInstallment: "R$ 164,70",
    priceFull: "ou R$ 1.647,00 à vista",
    priceOriginal: "R$ 2.197,00",
    benefits: [
      "4 dias para aprofundar conhecimento, prática e visão sobre a parentalidade contemporânea. Trilha Técnica (dias 1–2, exclusiva para profissionais) + Trilha Parental (dias 3–4, aberta também para pais e cuidadores)",
      "+50 palestrantes, referências em saúde, educação e comportamento",
      "Acesso à rede que está definindo a educação parental no Brasil",
      "Autógrafos com palestrantes, feira de produtos e serviços e sacola de brindes",
      "Gravação do Festival 2026 — 90 dias de acesso",
      "Certificado de participação"
    ],
    target: "Para profissionais da parentalidade",
    buttonText: "QUERO O PASSAPORTE PROFISSIONAL",
    href: "https://chk.eduzz.com/39VEQVEDWR",
    bgColor: "bg-[#3399CC]",
    borderColor: "border-[#191919]",
    textColor: "text-white",
    priceColor: "text-[#191919]",
    accentColor: "text-[#191919]",
    benefitBg: "bg-transparent",
    benefitBorder: "border-[#191919]/20",
    benefitTextColor: "text-white",
    badgeText: "Bônus|de Julho"
  },
  {
    id: "parental",
    name: "Passaporte Parental",
    lote: "Lote 5",
    priceInstallment: "R$ 49,70",
    priceFull: "ou R$ 497,00 à vista",
    priceOriginal: "R$ 1.497,00",
    benefits: [
      "Dois dias de palestras, espetáculos e vivências (21–22/11) — para sair da sobrecarga e ganhar clareza, presença e direção na relação com seus filhos.",
      "Autógrafos com palestrantes, feira de produtos e serviços e sacola de brindes",
      "O mesmo Festival, a mesma energia — com conteúdo e formato pensado para famílias."
    ],
    target: "Para pais e cuidadores",
    buttonText: "Quero o passaporte parental",
    href: "https://chk.eduzz.com/39VEAVA5WR",
    doubleOptions: {
      priceInstallment: "R$ 74,70",
      priceFull: "ou R$ 747,00 à vista",
      priceOriginal: "R$ 1.947,00",
      benefits: [
        "Viva os dois dias dessa experiência (21 e 22/11) com quem partilha a mesma jornada e com melhor custo por participante.",
        "Autógrafos com palestrantes, feira de produtos e serviços e sacola de brindes",
        "O mesmo Festival, a mesma energia — com conteúdo e formato pensado para famílias."
      ],
      href: "https://chk.eduzz.com/G92ERDR4WE",
      buttonText: "Quero 2 passaportes parental"
    },
    bgColor: "bg-[#ED9F8C]",
    borderColor: "border-[#191919]",
    textColor: "text-[#191919]",
    priceColor: "text-[#191919]",
    accentColor: "text-[#191919]",
    benefitBg: "bg-transparent",
    benefitBorder: "border-[#191919]/20",
    benefitTextColor: "text-[#191919]",
    badgeText: "Bônus|de Julho"
  }
];

function StarIcon({ color = "#2DAA96" }: { color?: string }) {
  return (
    <div className="relative shrink-0 size-[20px] mt-0.5">
      <img src="/images/icons/credibilidade_cor.svg" alt="Check" className="w-full h-full object-contain" loading="lazy" />
    </div>
  );
}

function TicketIcon({ isWhite, size = 24 }: { isWhite?: boolean, size?: number }) {
  return (
    <div className="shrink-0" style={{ width: size, height: size }}>
      <img
        src={isWhite ? "/images/icons/ingresso_linha_branca.svg" : "/images/icons/ingresso_linha_preta.svg"}
        alt="Ticket"
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </div>
  );
}

function Ribbon() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[inherit] pointer-events-none z-[100]">
      <div className="bg-[#ff4b4b] border-y-2 border-[#191919] border-solid -rotate-[20deg] py-0.5 w-[180px] absolute top-[3px] md:top-[0px] left-[-30px] md:left-[-25px] shadow-[0px_2px_10px_rgba(0,0,0,0.1)] flex items-center justify-center">
        <span className="font-sugar-peachy text-[14px] md:text-[16px] text-white uppercase tracking-tight block text-center -translate-x-4 md:-translate-x-5">
          ÚLTIMOS DIAS!
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
          <span className="font-bold text-[#2260a1]">Lote 5</span> termina em
        </p>
        <p className="font-sugar-peachy text-[28px] md:text-[34px] tracking-[-1px] md:tracking-[-1.25px] leading-[0.9] text-[#191919] mt-1 tabular-nums">
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
  const isAcaoDia = useIsAcaoDia();
  const effectiveBadgeText = (data.id === 'educador' && isAcaoDia) ? "LEVE 2|pelo valor|de 1" : data.badgeText;

  const hasDoubleOption = !!data.doubleOptions;

  const currentPriceInstallment = isDouble && hasDoubleOption ? data.doubleOptions!.priceInstallment : data.priceInstallment;
  const currentPriceFull = isDouble && hasDoubleOption ? data.doubleOptions!.priceFull : data.priceFull;
  const currentPriceOriginal = isDouble && hasDoubleOption ? data.doubleOptions!.priceOriginal : data.priceOriginal;
  const currentBenefits = isDouble && hasDoubleOption ? data.doubleOptions!.benefits : data.benefits;
  const currentHref = isAcaoDia && data.id === 'educador'
    ? "https://chk.eduzz.com/Z0B1O2B39A"
    : (isDouble && hasDoubleOption ? data.doubleOptions!.href : data.href);
  const currentButtonText = isDouble && hasDoubleOption ? data.doubleOptions!.buttonText : data.buttonText;

  if (data.isSoldOut) {
    return (
      <div id={data.id} className={`flex flex-col w-full lg:max-w-[420px] ${data.textColor} relative group grayscale opacity-80`}>
        {/* Header with Title and Lote */}
        <div className={`${data.bgColor} border-2 ${data.borderColor} border-solid rounded-[32px] shadow-[3px_3px_0px_0px_#191919] p-[12px] w-full z-10 relative overflow-hidden`}>
          <div className={`border-2 ${data.borderColor} border-solid rounded-[16px] flex items-center justify-between px-2 py-[12px] gap-3 relative z-20`}>
            <div className="bg-[#505050] border-2 border-[#191919] border-solid rounded-[6px] shadow-[3px_3px_0px_0px_#191919] px-[12px] py-[4px] shrink-0">
              <span className="font-sugar-peachy text-[14px] tracking-[-0.5px] text-white leading-none">{data.lote}</span>
            </div>
            <h3 className="font-sugar-peachy text-[22px] sm:text-[24px] lg:text-[28px] tracking-[-1px] leading-[0.8] text-left flex-1 whitespace-nowrap">
              {data.name}
            </h3>
          </div>
        </div>

        {/* Main Content Area */}
        <div className={`flex flex-col ${data.bgColor} border-2 ${data.borderColor} border-solid rounded-[24px] md:rounded-[32px] shadow-[3px_3px_0px_0px_#191919] p-[20px] md:p-[24px] w-full -mt-[2px] pt-8 md:pt-10 gap-6 z-20 relative flex-1`}>
          <div className="bg-transparent border-[1px] border-[#191919]/20 rounded-[40px] px-1 sm:px-3 py-2.5 md:py-3 flex items-center justify-center gap-1.5 sm:gap-2 w-full -mt-1 md:-mt-2 overflow-hidden">
            <span className="font-dm-sans font-bold text-[11px] sm:text-[11px] md:text-[12px] lg:text-[13px] uppercase text-[#191919] tracking-wider text-center whitespace-nowrap">
              {data.target}
            </span>
          </div>

          {/* Benefits List */}
          <div className="flex flex-col gap-4 w-full">
            {data.benefits.map((benefit, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <StarIcon color="#505050" />
                <p className={`font-dm-sans text-[16px] leading-tight ${data.benefitTextColor}`}>
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          {/* Sold Out Badge */}
          <div className="text-center flex flex-col items-center py-4">
            <div className="font-sugar-peachy text-[40px] md:text-[54px] tracking-[-1.5px] text-[#191919] leading-none uppercase">
              ESGOTADO
            </div>
          </div>

          <div className="mt-auto flex flex-col items-center gap-3 w-full">
            <div
              className={`bg-[#505050] border-2 border-[#191919] border-solid rounded-[40px] shadow-[4px_4px_0px_0px_#191919] px-[24px] py-[16px] flex items-center justify-center gap-2 w-full cursor-not-allowed`}
            >
              <span className="font-dm-sans font-bold text-[14px] uppercase text-white tracking-wider text-center">
                {data.buttonText}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id={data.id} className={`flex flex-col w-full lg:max-w-[420px] ${data.textColor} relative group`}>
      {isAcaoDia && data.id === 'educador' ? (
        <div className="absolute -top-[60px] -right-4 z-50 [animation:var(--animate-vibrate-alarm)]">
          <img
            src="/images/somente-hoje.svg"
            alt="Somente hoje"
            className="w-[110px] h-[110px] md:w-[120px] md:h-[120px]"
            loading="eager"
          />
        </div>
      ) : data.badgeText ? (
        <div className="absolute -top-10 -right-2 md:-right-4 bg-[#f7a73c] border-2 border-[#191919] rounded-full w-[75px] h-[75px] md:w-[90px] md:h-[90px] flex items-center justify-center rotate-12 shadow-[4px_4px_0px_0px_#191919] z-50 animate-bounce-slow">
          <span className="font-sugar-peachy text-[#191919] text-center leading-[0.9] flex flex-col items-center justify-center mt-1">
            {data.badgeText.split('|').map((line, i) => (
              <span
                key={i}
                className={`block uppercase whitespace-nowrap ${i === 0 ? "text-[22px] md:text-[28px] tracking-[-1px] leading-[0.8] mb-0.5" :
                    "text-[12px] md:text-[16px] tracking-[-0.5px] leading-[0.8]"
                  }`}
              >
                {line}
              </span>
            ))}
          </span>
        </div>
      ) : null}
      {/* Header with Title and Lote */}
      <div className={`${data.bgColor} border-2 ${data.borderColor} border-solid rounded-[32px] p-[12px] w-full z-10 relative overflow-hidden ${isAcaoDia && data.id === 'educador' ? 'shadow-[3px_3px_0px_0px_#191919,0_0_32px_rgba(247,167,60,0.75),0_0_64px_rgba(247,167,60,0.4)]' : 'shadow-[3px_3px_0px_0px_#191919]'}`}>
        {SHOW_PROMO_RIBBON && <Ribbon />}
        <div className={`border-2 ${data.borderColor} border-solid rounded-[16px] flex items-center justify-between px-[12px] py-[12px] gap-4 relative z-20`}>
          <div className="bg-[#f7a73c] border-2 border-[#191919] border-solid rounded-[6px] shadow-[3px_3px_0px_0px_#191919] px-[12px] py-[4px] shrink-0">
            <span className="font-sugar-peachy text-[18px] tracking-[-0.5px] text-black leading-none">{data.lote}</span>
          </div>
          <h3 className={`font-sugar-peachy tracking-[-1px] leading-[0.8] text-left flex-1 ${data.id === 'educador' ? 'text-[25px] md:text-[28px]' : 'text-[28px]'}`}>
            {data.name}
          </h3>
        </div>
      </div>

      {/* Main Content Area */}
      <div className={`flex flex-col ${data.bgColor} border-2 ${data.borderColor} border-solid rounded-[24px] md:rounded-[32px] p-[20px] md:p-[24px] w-full -mt-[2px] pt-8 md:pt-10 gap-6 z-20 relative ${isAcaoDia && data.id === 'educador' ? 'shadow-[3px_3px_0px_0px_#191919,0_0_32px_rgba(247,167,60,0.75),0_0_64px_rgba(247,167,60,0.4)]' : 'shadow-[3px_3px_0px_0px_#191919]'}`}>

        {/* Passaporte Tags */}
        {data.id === 'educador' && (
          <div className="bg-[#fff6ef] rounded-[40px] px-1 sm:px-3 py-2.5 md:py-3 flex items-center justify-center gap-1.5 sm:gap-2 w-full -mt-1 md:-mt-2 overflow-hidden">
            <img src="/images/icons/estrela_cor.svg" alt="Estrela" className="shrink-0 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" loading="lazy" />
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
          <div className="flex w-full border-2 border-[#191919] rounded-[40px] bg-white/10 p-1 relative">
            <button
              onClick={() => setIsDouble(false)}
              className={`flex-1 py-3 text-center font-dm-sans font-bold text-[14px] uppercase tracking-wider rounded-[32px] transition-all duration-300 ${!isDouble ? 'bg-[#f7a73c] text-[#191919] shadow-[2px_2px_0px_0px_#191919] border-2 border-[#191919]' : 'text-current opacity-70 border-2 border-transparent hover:opacity-100'}`}
            >
              1 pessoa
            </button>
            <button
              onClick={() => setIsDouble(true)}
              className={`relative flex-1 py-3 text-center font-dm-sans font-bold text-[14px] uppercase tracking-wider rounded-[32px] transition-all duration-300 ${isDouble ? 'bg-[#f7a73c] text-[#191919] shadow-[2px_2px_0px_0px_#191919] border-2 border-[#191919]' : 'text-current opacity-70 border-2 border-transparent hover:opacity-100 hover:bg-black/5'}`}
            >
              {isDouble && (
                <span className="absolute -top-5 -right-2 bg-[#2260a1] text-white text-[12px] md:text-[14px] font-sugar-peachy tracking-normal px-3 py-1 rounded-[8px] border-2 border-[#191919] rotate-6 shadow-[3px_3px_0px_0px_#191919] z-30 whitespace-nowrap pointer-events-none transition-all duration-300 group-hover:rotate-[8deg] group-hover:scale-105">
                  Melhor Valor!
                </span>
              )}
              2 pessoas
            </button>
          </div>
        )}

        {/* Benefits List */}
        <div className="flex flex-col gap-4 w-full">
          {/* Bullet especial da ação relâmpago — visível apenas no dia 31/05 */}
          {isAcaoDia && data.id === 'educador' && (
            <div className="flex gap-3 items-start">
              <StarIcon />
              <p className={`font-dm-sans text-[16px] leading-tight ${data.benefitTextColor}`}>
                <span className="font-bold">SÓ HOJE (31/5):</span> adquira o Passaporte Profissional e ganhe mais um ingresso para levar outro profissional com você.
              </p>
            </div>
          )}
          {currentBenefits.map((benefit, idx) => (
            <div key={idx} className="flex gap-3 items-start">
              <StarIcon />
              <p className={`font-dm-sans text-[16px] leading-tight ${data.benefitTextColor}`}>
                {benefit}
              </p>
            </div>
          ))}
        </div>

        {/* July Bonus Card */}
        {(data.id === 'educador' || data.id === 'parental') && (
          <div className="bg-white border-2 border-[#191919] rounded-[24px] p-5 flex flex-col gap-4 shadow-[3px_3px_0px_0px_#191919] w-full text-left">
            {/* Header: gift icon and title */}
            <div className="flex items-center gap-3 text-[#191919]">
              <Gift className="w-5 h-5 text-[#ef7d25] shrink-0" />
              <span className="font-dm-sans font-bold text-[15px] sm:text-[16px]">
                Comprando em julho, você leva:
              </span>
            </div>

            {/* Item 1: Biblioteca Parental (Only for Profissional) */}
            {data.id === 'educador' && (
              <div className="flex gap-2.5 items-start text-[#191919]">
                <Video className="w-5 h-5 text-[#2260a1] shrink-0 mt-0.5" />
                <p className="font-dm-sans text-[14px] leading-relaxed">
                  <span className="font-semibold">Biblioteca Parental:</span> todas as palestras das 6 edições do Congresso, gravadas em vídeo. +180h · +100 especialistas · 1 ano de acesso. Siegel, Nelsen, Porges e outras referências mundiais.
                </p>
              </div>
            )}

            {/* Item 2: Livro */}
            <div className="flex gap-2.5 items-start text-[#191919]">
              <BookOpen className="w-5 h-5 text-[#ef7d25] shrink-0 mt-0.5" />
              <p className="font-dm-sans text-[14px] leading-relaxed">
                <span className="font-semibold">Novo livro de Gordon Neufeld</span> – “Aproxime-se dos seus filhos” – para as primeiras 200 compras.
              </p>
            </div>
          </div>
        )}

        {SHOW_COUNTDOWN_BADGE && (
          <div className="flex flex-col items-center gap-2 w-full">
            <CountdownBadge />
            <p className={`font-dm-sans text-[13px] text-center ${data.id === 'educador' ? 'text-white/70' : 'text-[#191919]/60'}`}>
              Segunda-feira, 22/06 às 23:59 — após essa data, o preço muda.
            </p>
          </div>
        )}

        {/* Price Section */}
        {data.id === 'educador' || data.id === 'parental' ? (
          <div className="w-full flex flex-col items-center gap-2">
            {/* Dashed separator */}
            <div className={`border-t-2 border-dashed ${data.id === 'educador' ? 'border-[#fff6ef]/40' : 'border-[#191919]/20'} w-full my-1`} />

            <div className="text-center flex flex-col items-center gap-1.5 w-full">
              <p className={`font-dm-sans text-[15px] md:text-[16px] font-medium ${data.id === 'educador' ? 'text-white/95' : 'text-[#191919]/90'}`}>
                Garantindo agora, no Lote 5:
              </p>

              <div className={`font-sugar-peachy text-[40px] md:text-[54px] leading-none tracking-tight flex items-center justify-center gap-2 ${data.id === 'educador' ? 'text-white' : 'text-[#191919]'}`}>
                <span>12x de</span>
                <span>{currentPriceInstallment}</span>
              </div>

              <div className="flex items-center justify-center gap-2 flex-wrap">
                <span className={`font-dm-sans text-[18px] md:text-[20px] ${data.id === 'educador' ? 'text-white/95' : 'text-[#191919]/90'}`}>
                  ou {currentPriceFull.replace("ou ", "").replace(",00", "")}
                </span>
                <span className="bg-[#c2f2c5] border-2 border-[#191919] rounded-[8px] px-2 py-0.5 font-dm-sans font-bold text-[13px] text-[#191919] shadow-[1px_1px_0px_0px_#191919] whitespace-nowrap">
                  economize R$ {data.id === 'educador' ? 329 : (isDouble ? 445 : 99)}
                </span>
              </div>

              {data.id === 'educador' && (
                <p className="font-dm-sans text-[13px] md:text-[14px] text-white/85 mt-1">
                  menos de R$ 412 por dia · sobe para <span className="text-[#fbce32] font-bold">R$ 2.197</span> em nov.
                </p>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center flex flex-col items-center">
            <div className="font-sugar-peachy text-[20px] md:text-[24px] tracking-[-0.6px] md:tracking-[-0.9px] text-current opacity-70 mb-2">
              De <span className="line-through">{currentPriceOriginal}</span> por
            </div>
            <div className="font-sugar-peachy leading-[0.8] flex flex-col md:flex-row items-center gap-1 md:gap-3">
              <span className={`text-[28px] md:text-[40px] tracking-[-1px] md:tracking-[-1.3px] ${data.accentColor}`}>12x de</span>
              <span className={`${data.priceColor} text-[46px] md:text-[64px] tracking-[-1.4px] md:tracking-[-1.7px]`}>{currentPriceInstallment}</span>
            </div>
            <p className="font-dm-sans text-[24px] mt-2 opacity-80">{currentPriceFull}</p>
          </div>
        )}



        {/* {SHOW_PRICE_STATUS_BADGE && data.id === 'educador' && (
          <div className="flex justify-center -mt-4 -mb-4">
            <PriceStatusBadge price='2.197' />
          </div>
        )} */}


        <div className="mt-auto flex flex-col items-center gap-3 w-full">

          {/* Action Button */}
          <a
            href={currentHref}
            className={`bg-[#f7a73c] border-2 border-[#191919] border-solid rounded-[40px] shadow-[4px_4px_0px_0px_#191919] ${data.id === 'educador' ? 'px-[6px] lg:px-[10px]' : 'px-[16px]'} py-[16px] flex items-center justify-center gap-2 hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#191919] transition-all active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#191919] group w-full`}
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
    <section className="bg-[#fff6ef] pt-[56px] lg:pt-[80px] pb-[40px] lg:pb-[64px] px-4 lg:px-12 flex flex-col items-center relative overflow-hidden scroll-mt-24" id="ingressos">
      <div className="max-w-[1280px] w-full flex flex-col items-center gap-[64px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-7 text-center">
          <div className="flex items-center text-[#ef7d25]">
            <span className="font-dm-sans font-bold text-[16px] uppercase tracking-wider">escolha seu ingresso</span>
          </div>

          <div className="flex flex-col gap-6 max-w-[800px]">
            <h2 className="font-sugar-peachy text-[46px] lg:text-[72px] tracking-[-1.4px] lg:tracking-[-2px] text-[#2260a1] leading-[0.8]">
              Como você quer participar do Festival Parental?
            </h2>
            <p className="font-dm-sans text-[18px] lg:text-[24px] text-[#4c4d4f] leading-tight">
              Dois caminhos diferentes. Um mesmo ponto de virada.
            </p>
          </div>
        </div>

        {/* Passport Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-[20px] w-full items-start justify-center">
          {PASSAPORTES.map((passport) => (
            <PassportCard key={passport.id} data={passport} />
          ))}
        </div>
      </div>
    </section>
  );
}