"use client";

import { useState, useEffect, useRef } from "react";
import svgPaths from "@/components/svg/svgPaths";
import { useCountdown } from "@/hooks/useCountdown";
import { useIsAcaoDia } from "@/hooks/useIsAcaoDia";

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
    name: "Passaporte Educador",
    lote: "Lote 4",
    priceInstallment: "R$ 159,70",
    priceFull: "ou R$ 1.597,00 à vista",
    priceOriginal: "R$ 2.197,00",
    benefits: [
      "Quatro dias para consolidar o repertório técnico e a segurança prática que a atuação com famílias exige hoje (2 dias de conteúdo para profissionais – 7º Congresso Internacional de Educação Parental + 2 dias de conteúdo aberto também para pais e cuidadores)",
      "Acesso exclusivo à rede que está definindo o futuro da educação parental no Brasil",
      "Sacola com brindes",
      "Acesso às sessões de autógrafos com palestrantes",
      "Acesso à feira de produtos e serviços para a parentalidade",
      "Acesso à gravação completa do Festival por 90 dias",
      "Certificado de participação"
    ],
    target: "Para profissionais da parentalidade",
    buttonText: "QUERO O PASSAPORTE EDUCADOR",
    href: "https://chk.eduzz.com/39VEQVEDWR",
    bgColor: "bg-[#3399CC]",
    borderColor: "border-[#191919]",
    textColor: "text-[#191919]",
    priceColor: "text-[#191919]",
    accentColor: "text-[#191919]",
    benefitBg: "bg-transparent",
    benefitBorder: "border-[#191919]/20",
    benefitTextColor: "text-[#191919]",
    badgeText: "2|eventos|em 1 só"
  },
  {
    id: "parental",
    name: "Passaporte Parental",
    lote: "Lote 4",
    priceInstallment: "R$ 49,70",
    priceFull: "ou R$ 497,00 à vista",
    priceOriginal: "R$ 1.497,00",
    benefits: [
      "Dois dias (21 e 22/11) para sair da sobrecarga de informação e ter mais clareza, presença e direção na relação com os seus filhos. Parentalidade não se constrói sozinho.",
      "Sacola com brindes",
      "Acesso às sessões de autógrafos com palestrantes",
      "Acesso à feira de produtos e serviços para a parentalidade"
    ],
    target: "Para pais e cuidadores",
    buttonText: "Quero o passaporte parental",
    href: "https://chk.eduzz.com/39VEAVA5WR",
    doubleOptions: {
      priceInstallment: "R$ 74,70",
      priceFull: "ou R$ 747,00 à vista",
      priceOriginal: "R$ 1.947,00",
      benefits: [
        "Viva os dois dias dessa experiência (21 e 22/11) com quem partilha a mesma jornada e com melhor custo por participante",
        "Sacola com brindes",
        "Acesso às sessões de autógrafos com palestrantes",
        "Acesso à feira de produtos e serviços para a parentalidade"
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
    benefitTextColor: "text-[#191919]"
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
      <div className="bg-[#ff4b4b] border-y-2 border-[#191919] border-solid -rotate-[20deg] py-0.5 w-[180px] absolute top-[3px] md:top-[2px] left-[-48px] md:left-[-35px] shadow-[0px_2px_10px_rgba(0,0,0,0.1)] flex items-center justify-center">
        <span className="font-sugar-peachy text-[14px] md:text-[16px] text-white uppercase tracking-tight block text-center">
          ÚLTIMO DIA!
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
          <span className="font-bold text-[#2260a1]">Lote 4</span> termina em
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

function EducadorProgressBar() {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const end = 55;
          const duration = 1200; // 1.2 segundos
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progressFraction = Math.min(elapsedTime / duration, 1);

            // Efeito de desaceleração (easeOutCubic)
            const easeProgress = 1 - Math.pow(1 - progressFraction, 3);
            const currentProgress = Math.round(easeProgress * end);

            setProgress(currentProgress);

            if (progressFraction < 1) {
              requestAnimationFrame(animate);
            }
          };

          setTimeout(() => {
            requestAnimationFrame(animate);
          }, 300); // Pequeno delay de 300ms após aparecer na tela

          if (containerRef.current) {
            observer.unobserve(containerRef.current);
          }
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-[#191919] border-2 border-[#191919] rounded-[24px] p-4 flex flex-col gap-3 shadow-[3px_3px_0px_0px_#191919] text-white my-1"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Indicador pulsante / mini-spinner laranja */}
          <div className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f7a73c] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#f7a73c]"></span>
          </div>
          <span className="font-dm-sans font-bold text-[13px] tracking-wider text-[#f7a73c] uppercase">
            PASSAPORTES VENDIDOS
          </span>
        </div>
        <span className="font-sugar-peachy text-[36px] tracking-tight leading-none text-white flex items-baseline">
          {progress}<span className="text-white/40 text-[24px] ml-0.5">%</span>
        </span>
      </div>

      {/* Track da Barra */}
      <div className="relative w-full h-[16px] bg-[#333333] rounded-full overflow-visible border border-black/40">
        {/* Progresso com Gradiente Laranja */}
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#d97706] via-[#f7a73c] to-[#fde047] rounded-full transition-all duration-[100ms] ease-out"
          style={{ width: `${progress}%` }}
        >
          {/* Glow interno e reflexo 3D do progresso */}
          <div className="absolute inset-x-0 top-0.5 h-[4px] bg-white/20 rounded-full"></div>
        </div>

        {/* Botão/Indicador com Glow no final da barra (55%) */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none transition-all duration-[100ms] ease-out"
          style={{ left: `${progress}%`, opacity: progress > 0 ? 1 : 0 }}
        >
          {/* Halo laranja claro externo */}
          <div className="absolute size-[24px] rounded-full border border-[#f7a73c]/80 bg-[#f7a73c]/20 animate-pulse"></div>
          {/* Círculo do glow principal */}
          <div className="absolute size-[16px] rounded-full bg-[#f7a73c]/40 blur-[4px]"></div>
          {/* Bolinha branca brilhante */}
          <div className="absolute size-[12px] rounded-full bg-white shadow-[0_0_8px_#fff,0_0_16px_#f7a73c]"></div>

          {/* Partículas de brilho no final do preenchimento laranja */}
          <div className="absolute -left-[14px] top-[-5px] size-[3px] rounded-full bg-[#ffbe6b]/90 blur-[0.5px]"></div>
          <div className="absolute -left-[8px] bottom-[-6px] size-[2px] rounded-full bg-[#fde047]/80"></div>
          <div className="absolute -left-[18px] top-[4px] size-[2px] rounded-full bg-[#f7a73c]/70"></div>
          <div className="absolute -left-[11px] top-[-1px] size-[4px] rounded-full bg-white/90 blur-[0.5px]"></div>
        </div>
      </div>
    </div>
  );
}

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
          <div className={`border-2 ${data.benefitBorder} border-solid rounded-[24px] p-[16px] flex flex-col gap-4 ${data.benefitBg}`}>
            {data.benefits.map((benefit, idx) => (
              <div key={idx} className="flex gap-3 items-center">
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
        <div className="absolute -top-12 -right-4 bg-[#f7a73c] border-2 border-[#191919] rounded-full w-[85px] h-[85px] md:w-[95px] md:h-[95px] flex items-center justify-center rotate-12 shadow-[4px_4px_0px_0px_#191919] z-50 animate-bounce-slow">
          <span className="font-sugar-peachy text-[#191919] text-center leading-[0.9]">
            {data.badgeText.split('|').map((line, i) => (
              <span
                key={i}
                className={`block uppercase whitespace-nowrap ${
                  i === 0 ? "text-[42px] md:text-[52px] tracking-[-1px] -mb-2" : "text-[14px] md:text-[18px] tracking-[-0.5px]"
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
          <h3 className="font-sugar-peachy text-[28px] tracking-[-1px] leading-[0.8] text-left flex-1">
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
        <div className={`border-2 ${data.benefitBorder} border-solid rounded-[24px] p-[16px] flex flex-col gap-4 ${data.benefitBg}`}>
          {/* Bullet especial da ação relâmpago — visível apenas no dia 31/05 */}
          {isAcaoDia && data.id === 'educador' && (
            <div className="flex gap-3 items-center">
              <StarIcon />
              <p className={`font-dm-sans text-[16px] leading-tight ${data.benefitTextColor}`}>
                <span className="font-bold">SÓ HOJE (31/5):</span> adquira o Passaporte Educador e ganhe mais um ingresso para levar outro profissional com você.
              </p>
            </div>
          )}
          {currentBenefits.map((benefit, idx) => (
            <div key={idx} className="flex gap-3 items-center">
              <StarIcon />
              <p className={`font-dm-sans text-[16px] leading-tight ${data.benefitTextColor}`}>
                {benefit}
              </p>
            </div>
          ))}
        </div>

        {/* PROGRESS BAR FOR EDUCADOR */}
        {data.id === 'educador' && <EducadorProgressBar />}

        {SHOW_COUNTDOWN_BADGE && (
          <div className="flex flex-col items-center gap-2 w-full">
            <CountdownBadge />
            <p className="font-dm-sans text-[13px] text-[#191919]/60 text-center">
              Domingo, 17/05 às 23:59 — após essa data, o preço muda.
            </p>
          </div>
        )}

        {/* Price Section */}
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



        {/* {SHOW_PRICE_STATUS_BADGE && data.id === 'educador' && (
          <div className="flex justify-center -mt-4 -mb-4">
            <PriceStatusBadge price='2.197' />
          </div>
        )} */}


        <div className="mt-auto flex flex-col items-center gap-3 w-full">

          {/* Action Button */}
          <a
            href={currentHref}
            className={`bg-[#f7a73c] border-2 border-[#191919] border-solid rounded-[40px] shadow-[4px_4px_0px_0px_#191919] ${data.id === 'educador' ? 'px-[6px] lg:px-[24px]' : 'px-[24px]'} py-[16px] flex items-center justify-center gap-2 hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#191919] transition-all active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#191919] group w-full lg:w-auto`}
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
          <div className="border-2 border-[#505050] border-solid rounded-[40px] shadow-[4px_4px_0px_0px_#505050] px-4 lg:px-[32px] py-[16px] flex items-center gap-2 text-[#505050] bg-transparent">
            <TicketIcon size={20} />
            <span className="font-dm-sans font-bold text-[14px] uppercase tracking-wider">escolha seu ingresso</span>
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