"use client";

import { useState, useEffect, useRef } from "react";
import svgPaths from "@/components/svg/svgPaths";
import { useIsAcaoDia, ACAO_CHECKOUT } from "@/hooks/useIsAcaoDia";
import { waGrupoUrl } from "@/utils/whatsapp";
import { trackClarity } from "@/utils/clarity";
import { Gift, Files, BookOpen, Video } from "lucide-react";

const SHOW_PRICE_STATUS_BADGE = false;

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
      "Tudo do Passaporte Profissional",
      "Coquetel exclusivo, credenciamento e cupom"
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
    lote: "Lote 7",
    priceInstallment: "R$ 174,70",
    priceFull: "ou R$ 1.747,00 à vista",
    priceOriginal: "R$ 2.197",
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
    // badgeText: "Bônus|de Julho"
  },
  {
    id: "parental",
    name: "Passaporte Parental",
    lote: "Lote 7",
    priceInstallment: "R$ 24,70",
    priceFull: "ou R$ 247,00 à vista",
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
      priceInstallment: "R$ 44,70",
      priceFull: "ou R$ 447,00 à vista",
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
    // badgeText: "Bônus|de Julho"
  }
];

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-[20px] h-[20px] shrink-0" aria-hidden="true">
      <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.502 1.14 6.744 3.072 9.378L1.062 31.16l5.964-1.97A15.914 15.914 0 0016.004 32C24.826 32 32 24.824 32 16.004 32 7.176 24.826 0 16.004 0zm9.318 22.59c-.39 1.102-1.936 2.016-3.178 2.282-.852.18-1.964.324-5.708-1.226-4.792-1.984-7.872-6.848-8.114-7.166-.23-.318-1.948-2.596-1.948-4.95 0-2.356 1.234-3.514 1.672-3.992.39-.426 1.026-.638 1.636-.638.198 0 .374.01.534.018.478.02.718.048 1.034.8.392.936 1.348 3.292 1.466 3.532.12.24.24.558.08.876-.148.326-.278.47-.518.744-.24.274-.468.484-.708.778-.218.258-.464.534-.198 1.012.266.47 1.184 1.952 2.542 3.162 1.746 1.556 3.218 2.038 3.674 2.264.358.18.784.148 1.06-.148.352-.376.786-.998 1.228-1.612.314-.438.712-.494 1.104-.328.398.16 2.524 1.19 2.958 1.408.434.218.724.326.832.506.106.18.106 1.044-.284 2.148z" />
    </svg>
  );
}

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

// function PriceStatusBadge({ price }: { price: string }) {
//   return (
//     <div className="bg-[#fbce32] border-2 border-[#191919] border-solid rounded-[40px] px-4 py-1.5 flex items-center justify-center shadow-[2px_2px_0px_0px_#191919]">
//       <span className="font-sugar-peachy text-[24px] text-[#191919]">
//         Após essa data: R$1.497
//       </span>
//     </div>
//   );
// }



const EDUCADOR_SOLD_PERCENT = 87;

function EducadorProgressBar() {
  // HTML estático já sai com o valor final: se o JS falhar (in-app browsers), nunca aparece 0%.
  const [progress, setProgress] = useState(EDUCADOR_SOLD_PERCENT);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    // Só zera para animar se o navegador suporta e o contador ainda está fora da tela
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    setProgress(0);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const end = EDUCADOR_SOLD_PERCENT;
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

    observer.observe(el);

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

// Passaporte Embaixador (esgotado), mobile/tablet: faixa compacta acima do Profissional — no desktop segue o card na 1ª coluna
function EmbaixadorSoldOutStrip() {
  return (
    <div className="lg:hidden w-full -mb-5 bg-[#e5e5e5] border-2 border-[#191919] rounded-[20px] shadow-[3px_3px_0px_0px_#191919] px-4 py-3 flex items-center gap-3 text-[#191919]">
      <span className="bg-[#191919] text-white font-sugar-peachy text-[15px] md:text-[16px] tracking-[-0.3px] leading-none px-2.5 py-1.5 rounded-[6px] rotate-[-4deg] shrink-0">
        ESGOTADO
      </span>
      <p className="font-dm-sans text-[13px] leading-tight text-left">
        <span className="font-bold">Passaporte Embaixador</span>
        <span className="text-[#505050]"> — Tudo do Profissional + coquetel exclusivo, credenciamento e cupom</span>
      </p>
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
    ? ACAO_CHECKOUT
    : (isDouble && hasDoubleOption ? data.doubleOptions!.href : data.href);
  const currentButtonText = isDouble && hasDoubleOption ? data.doubleOptions!.buttonText : data.buttonText;

  const formatPriceValue = (val: string) => {
    if (!val) return "";
    let clean = val.replace(/^ou\s+/i, "").replace(/\s+à\s+vista$/i, "").trim();
    if (clean.includes(".00")) {
      clean = clean.replace(".00", ",00");
    }
    return clean;
  };

  const getNumericAmount = (val: string) => {
    if (!val) return 0;
    const clean = formatPriceValue(val).replace("R$", "").trim();
    if (!clean) return 0;

    if (clean.includes(".") && clean.includes(",")) {
      const normalized = clean.replace(/\./g, "").replace(",", ".");
      return parseFloat(normalized) || 0;
    }
    if (clean.includes(",")) {
      const normalized = clean.replace(",", ".");
      return parseFloat(normalized) || 0;
    }
    if (clean.includes(".")) {
      const parts = clean.split(".");
      if (parts[parts.length - 1].length === 2) {
        return parseFloat(clean) || 0;
      } else {
        return parseFloat(clean.replace(/\./g, "")) || 0;
      }
    }
    return parseFloat(clean) || 0;
  };

  const formattedFullPrice = formatPriceValue(currentPriceFull);
  const numericFullPrice = getNumericAmount(currentPriceFull);
  const numericInstallment = getNumericAmount(currentPriceInstallment);
  const numericInstallmentTotal = numericInstallment * 12;

  // Cálculo de economia: total parcelado menos o valor à vista.
  const calculatedSavings = Math.round((numericInstallmentTotal - numericFullPrice) * 100) / 100;
  const currentSavings = calculatedSavings > 0
    ? calculatedSavings.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    : null;

  // Preço por dia (para o educador/4 dias)
  const currentPricePerDay = (numericFullPrice / 4).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  if (data.isSoldOut) {
    return (
      <div id={data.id} className={`hidden lg:flex flex-col w-full lg:max-w-[420px] ${data.textColor} relative group grayscale opacity-80`}>
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
    <div id={data.id} className={`flex flex-col w-full lg:max-w-[420px] md:row-start-2 lg:row-start-auto ${data.textColor} relative group`}>
      {isAcaoDia && data.id === 'educador' ? (
        <div className="absolute -top-[55px] -right-6 md:-right-8 z-50 [animation:var(--animate-vibrate-alarm)]">
          <img
            src="/images/somente-hoje.svg"
            alt="Somente hoje"
            className="w-[104px] h-[104px] md:w-[114px] md:h-[114px]"
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
      <div className={`${data.bgColor} border-2 ${data.borderColor} border-solid rounded-[32px] p-[12px] w-full z-10 relative overflow-hidden shadow-[3px_3px_0px_0px_#191919]`}>
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
      <div className={`flex flex-col ${data.bgColor} border-2 ${data.borderColor} border-solid rounded-[24px] md:rounded-[32px] p-[20px] md:p-[24px] w-full -mt-[2px] pt-8 md:pt-10 gap-6 z-20 relative shadow-[3px_3px_0px_0px_#191919]`}>

        {/* Passaporte Tags */}
        {data.id === 'educador' && (
          <>
            <div className="bg-[#fff6ef] rounded-[40px] px-1 sm:px-3 py-2.5 md:py-3 flex items-center justify-center gap-1.5 sm:gap-2 w-full -mt-1 md:-mt-2 overflow-hidden">
              <img src="/images/icons/estrela_cor.svg" alt="Estrela" className="shrink-0 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" loading="lazy" />
              <span className="font-dm-sans font-bold text-[11px] sm:text-[11px] md:text-[12px] lg:text-[12px] uppercase text-[#191919] tracking-wider text-left whitespace-nowrap">
                EXPERIÊNCIA COMPLETA PARA PROFISSIONAIS
              </span>
            </div>

            <p className="font-dm-sans text-[15px] md:text-[16px] leading-snug text-white text-center -mt-2">
              <span className="font-bold">Gordon Neufeld, Vanessa Cavalieri, Priscila Xavier</span> e mais de 50 palestrantes em conversas sobre vínculo, desenvolvimento infantil, trauma e os desafios reais de quem trabalha com famílias.
            </p>

            <div className="flex justify-center items-center w-full py-1">
              <img
                src="/images/logo7ciephbranco1.webp"
                alt="Congresso Internacional de Educação Parental"
                className="w-full max-w-[180px] sm:max-w-[220px] h-auto object-contain"
                loading="lazy"
              />
            </div>
          </>
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
          {currentBenefits.map((benefit, idx) => (
            <div key={idx} className="flex gap-3 items-start">
              <StarIcon />
              <p className={`font-dm-sans text-[16px] leading-tight ${data.benefitTextColor}`}>
                {benefit}
              </p>
            </div>
          ))}
        </div>

        {/* Card de Bônus da Ação Relâmpago */}
        {isAcaoDia && data.id === 'educador' && (
          <div className="bg-white border-2 border-[#191919] rounded-[24px] p-4 md:p-5 flex flex-col gap-2 shadow-[3px_3px_0px_0px_#191919] w-full text-left">
            <div className="flex items-center gap-2 text-[#191919]">
              <span className="text-xl">🎁</span>
              <span className="font-dm-sans font-bold text-[15px] sm:text-[16px] text-[#191919] uppercase tracking-tight">
                SÓ HOJE
              </span>
            </div>
            <p className="font-dm-sans text-[14px] sm:text-[15px] leading-relaxed text-[#191919]">
              Ao adquirir um Passaporte Profissional, o segundo é por nossa conta. Dois acessos completos aos 4 dias, com certificados e acessos à gravação.
            </p>
          </div>
        )}

        {/* July Bonus Card */}
        {/* {(data.id === 'educador' || data.id === 'parental') && (
          <div className="bg-white border-2 border-[#191919] rounded-[24px] p-5 flex flex-col gap-4 shadow-[3px_3px_0px_0px_#191919] w-full text-left">
            <div className="flex items-center gap-3 text-[#191919]">
              <Gift className="w-5 h-5 text-[#ef7d25] shrink-0" />
              <span className="font-dm-sans font-bold text-[15px] sm:text-[16px]">
                Comprando em julho, você leva:
              </span>
            </div>

            {data.id === 'educador' && (
              <div className="flex gap-2.5 items-start text-[#191919]">
                <Video className="w-5 h-5 text-[#2260a1] shrink-0 mt-0.5" />
                <p className="font-dm-sans text-[14px] leading-relaxed">
                  <span className="font-semibold">Biblioteca Parental:</span> todas as palestras das 6 edições do Congresso, gravadas em vídeo. +180h · +100 especialistas · 1 ano de acesso. Siegel, Nelsen, Porges e outras referências mundiais.
                </p>
              </div>
            )}

            <div className="flex gap-2.5 items-start text-[#191919]">
              <BookOpen className="w-5 h-5 text-[#ef7d25] shrink-0 mt-0.5" />
              <p className="font-dm-sans text-[14px] leading-relaxed">
                <span className="font-semibold">Novo livro de Gordon Neufeld</span> – “Aproxime-se dos seus filhos” – para as primeiras 200 compras.
              </p>
            </div>
          </div>
        )} */}

        {/* PROGRESS BAR FOR EDUCADOR */}
        {data.id === 'educador' && <EducadorProgressBar />}

        {/* Price Section */}
        {data.id === 'educador' || data.id === 'parental' ? (
          <div className="w-full flex flex-col items-center gap-2">
            {/* Dashed separator */}
            <div className={`border-t-2 border-dashed ${data.id === 'educador' ? 'border-[#fff6ef]/40' : 'border-[#191919]/20'} w-full my-1`} />

            <div className="text-center flex flex-col items-center gap-1.5 w-full">
              <p className={`font-dm-sans text-[15px] md:text-[16px] font-medium ${data.id === 'educador' ? 'text-white/95' : 'text-[#191919]/90'}`}>
                Garantindo agora, no {data.lote}:
              </p>

              <div className={`font-sugar-peachy text-[40px] md:text-[54px] leading-none tracking-tight flex items-center justify-center gap-2 ${data.id === 'educador' ? 'text-white' : 'text-[#191919]'}`}>
                <span>12x de</span>
                <span>{currentPriceInstallment}</span>
              </div>

              <div className="flex items-center justify-center gap-1.5 flex-wrap">
                <span className={`font-dm-sans text-[18px] md:text-[20px] inline-flex items-center gap-1 ${data.id === 'educador' ? 'text-white/95' : 'text-[#191919]/90'}`}>
                  <span>ou</span>
                  <span className="price-value font-bold" data-amount={numericFullPrice > 0 ? numericFullPrice.toFixed(2) : ""} itemProp="price">
                    {formattedFullPrice}
                  </span>
                  <span>à vista</span>
                </span>
                {currentSavings !== null && (
                  <span className="bg-[#c2f2c5] border-2 border-[#191919] rounded-[8px] px-2 py-0.5 font-dm-sans font-bold text-[13px] text-[#191919] shadow-[1px_1px_0px_0px_#191919] whitespace-nowrap">
                    economize R$ {currentSavings}
                  </span>
                )}
              </div>

              {data.id === 'educador' && (
                <p className="font-dm-sans text-[13px] md:text-[14px] text-white/85 mt-1">
                  R$ {currentPricePerDay} por dia de Festival
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
            <p className="font-dm-sans text-[24px] mt-2 opacity-80 flex items-center justify-center gap-1">
              <span>ou</span>
              <span className="price-value font-bold" data-amount={numericFullPrice > 0 ? numericFullPrice.toFixed(2) : ""} itemProp="price">
                {formattedFullPrice}
              </span>
              <span>à vista</span>
            </p>
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
            onClick={() => trackClarity(data.id === 'educador' ? 'clique_checkout_profissional' : 'clique_checkout_parental')}
            className={`bg-[#f7a73c] border-2 border-[#191919] border-solid rounded-[40px] shadow-[4px_4px_0px_0px_#191919] ${data.id === 'educador' ? 'px-[6px] lg:px-[10px]' : 'px-[16px]'} py-[16px] flex items-center justify-center gap-2 hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#191919] transition-all active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#191919] group w-full`}
          >
            <div className="text-[#191919] hidden md:block">
              <TicketIcon />
            </div>
            <span className="font-dm-sans font-bold text-[14px] uppercase text-[#191919] tracking-wider text-center">
              {currentButtonText}
            </span>
          </a>

          {/* Compra em grupo — secundário, via WhatsApp */}
          {data.id === 'educador' && (
            <a
              href={waGrupoUrl('card')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClarity('clique_grupos_card')}
              className="border-2 border-[#191919] rounded-[40px] px-[16px] py-[12px] flex items-center justify-center gap-2 w-full text-[#191919] hover:bg-white/15 transition-colors"
            >
              <WhatsAppIcon />
              <span className="font-dm-sans font-bold text-[13px] uppercase tracking-wider text-center">
                Compra em grupo (3+)
              </span>
            </a>
          )}
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
          <EmbaixadorSoldOutStrip />
          {PASSAPORTES.map((passport) => (
            <PassportCard key={passport.id} data={passport} />
          ))}
        </div>
      </div>
    </section>
  );
}
