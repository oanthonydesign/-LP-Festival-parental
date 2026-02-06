# 📋 Guia de Exportação - Seção de Palestrantes

Este documento contém tudo que você precisa para exportar e implementar a seção de palestrantes na sua IDE.

---

## 1. COMPONENTE PRINCIPAL

### 📁 Arquivo: `src/components/SpeakersSection.tsx`

```tsx
import { useState } from "react";
import svgPaths from "../utils/svg-paths";

// IMPORTANTE: Substitua estas importações pelas suas imagens reais
import imgImage from "../assets/images/speakers/ivana-moreira.png";
import imgMarcosPiangers1 from "../assets/images/speakers/marcos-piangers.png";
import imgIsaMinatel2 from "../assets/images/speakers/isa-minatel.png";
import imgDanielBecker1 from "../assets/images/speakers/daniel-becker.png";
import imgNandaPerim2 from "../assets/images/speakers/nanda-perim.png";
import imgMuriloGun1 from "../assets/images/speakers/murilo-gun.png";
import imgTelmaAbrahao1 from "../assets/images/speakers/telma-abrahao.png";
import imgCeciliaLauriano1 from "../assets/images/speakers/cecilia-lauriano.png";

type Speaker = {
  id: number;
  name: string;
  subtitle: string;
  image: string;
  imagePosition: { left?: string; top?: string; width: string; height: string };
  bgColor: string;
};

const allSpeakers: Speaker[] = [
  {
    id: 1,
    name: "Ivana Moreira",
    subtitle: "Ivana Moreira",
    image: imgImage,
    imagePosition: { left: "calc(50% - 188.5px)", top: "-160px", width: "377px", height: "452px" },
    bgColor: "#79c3ab",
  },
  {
    id: 2,
    name: "Marcos Piangers",
    subtitle: "Ivana Moreira",
    image: imgMarcosPiangers1,
    imagePosition: { left: "0", top: "-81px", width: "289px", height: "432px" },
    bgColor: "#74acde",
  },
  {
    id: 3,
    name: "Isa Minatel",
    subtitle: "Ivana Moreira",
    image: imgIsaMinatel2,
    imagePosition: { left: "-84px", top: "-7px", width: "373px", height: "464px" },
    bgColor: "#f7a73c",
  },
  {
    id: 4,
    name: "Daniel Becker",
    subtitle: "Ivana Moreira",
    image: imgDanielBecker1,
    imagePosition: { left: "-242px", top: "-50px", width: "616px", height: "360px" },
    bgColor: "#79c3ab",
  },
  {
    id: 5,
    name: "Nanda Perim",
    subtitle: "Ivana Moreira",
    image: imgNandaPerim2,
    imagePosition: { left: "-1px", top: "0", width: "290px", height: "362px" },
    bgColor: "#74acde",
  },
  {
    id: 6,
    name: "Murilo Gun",
    subtitle: "Ivana Moreira",
    image: imgMuriloGun1,
    imagePosition: { left: "0", top: "-25px", width: "289px", height: "434px" },
    bgColor: "#f7a73c",
  },
  {
    id: 7,
    name: "Telma Abrahão",
    subtitle: "Ivana Moreira",
    image: imgTelmaAbrahao1,
    imagePosition: { left: "-84px", top: "-7px", width: "373px", height: "464px" },
    bgColor: "#79c3ab",
  },
  {
    id: 8,
    name: "Cecília Lauriano",
    subtitle: "Ivana Moreira",
    image: imgCeciliaLauriano1,
    imagePosition: { left: "0", top: "-81px", width: "289px", height: "432px" },
    bgColor: "#74acde",
  },
  // Palestrantes adicionais (usando imagens repetidas para demonstração)
  {
    id: 9,
    name: "João Silva",
    subtitle: "Ivana Moreira",
    image: imgImage,
    imagePosition: { left: "calc(50% - 188.5px)", top: "-160px", width: "377px", height: "452px" },
    bgColor: "#f7a73c",
  },
  {
    id: 10,
    name: "Maria Santos",
    subtitle: "Ivana Moreira",
    image: imgMarcosPiangers1,
    imagePosition: { left: "0", top: "-81px", width: "289px", height: "432px" },
    bgColor: "#79c3ab",
  },
  {
    id: 11,
    name: "Pedro Costa",
    subtitle: "Ivana Moreira",
    image: imgIsaMinatel2,
    imagePosition: { left: "-84px", top: "-7px", width: "373px", height: "464px" },
    bgColor: "#74acde",
  },
  {
    id: 12,
    name: "Ana Lima",
    subtitle: "Ivana Moreira",
    image: imgDanielBecker1,
    imagePosition: { left: "-242px", top: "-50px", width: "616px", height: "360px" },
    bgColor: "#f7a73c",
  },
];

function UilCalendar() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="uil:calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="uil:calendar">
          <path d={svgPaths.p3f159180} fill="var(--fill-0, #505050)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SocialIcons({ type }: { type: "linkedin" | "instagram" | "twitter" }) {
  return (
    <div className="relative shrink-0 size-[8.842px]" data-name="Social Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.84211 8.84211">
        {type === "linkedin" && (
          <g clipPath="url(#clip0_1_487)" id="Social Icons">
            <path d={svgPaths.p26754780} fill="var(--fill-0, #191919)" id="Vector" />
          </g>
        )}
        {type === "instagram" && (
          <g clipPath="url(#clip0_1_482)" id="Social Icons">
            <path d={svgPaths.p31d46470} fill="var(--fill-0, #191919)" id="Vector" />
            <path d={svgPaths.p1f5a5880} fill="var(--fill-0, #191919)" id="Vector_2" />
            <path d={svgPaths.p363e11f0} fill="var(--fill-0, #191919)" id="Vector_3" />
          </g>
        )}
        {type === "twitter" && (
          <g clipPath="url(#clip0_1_479)" id="Social Icons">
            <path d={svgPaths.p2c1af780} fill="var(--fill-0, #191919)" id="Vector" />
          </g>
        )}
        <defs>
          <clipPath id={`clip0_1_${type === "linkedin" ? "487" : type === "instagram" ? "482" : "479"}`}>
            <rect fill="white" height="8.84211" width="8.84211" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SocialIconButton({ type }: { type: "linkedin" | "instagram" | "twitter" }) {
  return (
    <div className="content-stretch flex items-center p-[7.579px] relative rounded-[630.947px] shrink-0 size-[24px]">
      <div aria-hidden="true" className="absolute border-[#191919] border-[0.632px] border-solid inset-0 pointer-events-none rounded-[630.947px]" />
      <SocialIcons type={type} />
    </div>
  );
}

function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" style={{ backgroundColor: speaker.bgColor }}>
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center pb-[12px] pt-[8px] px-[8px] relative w-full">
          {/* Image Container */}
          <div className="h-[261px] relative rounded-[24px] shrink-0 w-full">
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute" style={{ ...speaker.imagePosition }}>
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={speaker.image} />
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-2 border-[#191919] border-solid inset-0 pointer-events-none rounded-[24px]" />
          </div>

          {/* Text + Social */}
          <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full">
            {/* Text */}
            <div className="content-stretch flex flex-col gap-[4px] items-center leading-[0] relative shrink-0 text-[#191919] text-center whitespace-nowrap">
              <div className="flex flex-col font-['Sugar_Peachy:Bold',sans-serif] justify-center not-italic relative shrink-0 text-[32px]">
                <p className="leading-none">{speaker.name}</p>
              </div>
              <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[22px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                <p className="leading-[1.1]">{speaker.subtitle}</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0">
              <SocialIconButton type="linkedin" />
              <SocialIconButton type="instagram" />
              <SocialIconButton type="twitter" />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#191919] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

export default function SpeakersSection() {
  const [visibleCount, setVisibleCount] = useState(8);

  const visibleSpeakers = allSpeakers.slice(0, visibleCount);
  const hasMore = visibleCount < allSpeakers.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, allSpeakers.length));
  };

  // Organizar palestrantes em linhas de 4
  const rows: Speaker[][] = [];
  for (let i = 0; i < visibleSpeakers.length; i += 4) {
    rows.push(visibleSpeakers.slice(i, i + 4));
  }

  return (
    <div className="bg-[#fff6ef] content-stretch flex flex-col items-start pb-[118px] pt-[72px] px-[320px] relative size-full">
      <div className="content-stretch flex flex-col gap-[64px] items-center relative shrink-0 w-full">
        {/* Header */}
        <div className="content-stretch flex flex-col gap-[28px] items-center relative shrink-0 w-full">
          {/* Event Badge */}
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[32px] py-[16px] relative rounded-[40px] shrink-0">
            <div aria-hidden="true" className="absolute border-2 border-[#505050] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[4px_4px_0px_0px_#505050]" />
            <UilCalendar />
            <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505050] text-[14px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
              <p className="leading-[normal]">19 a 22 de novembro · Transamérica Expo, São Paulo/SP</p>
            </div>
          </div>

          {/* Title & Description */}
          <div className="content-stretch flex flex-col gap-[24px] items-center leading-[0] relative shrink-0 text-center w-full">
            {/* Title */}
            <div className="content-stretch flex flex-col font-['Sugar_Peachy:Regular',sans-serif] gap-[6px] items-start not-italic relative shrink-0 w-full">
              <div className="flex flex-col justify-center relative shrink-0 text-[#ef7d25] text-[84px] w-full">
                <p className="leading-[0.8] whitespace-pre-wrap">+40 Palestrantes convidados.</p>
              </div>
              <div className="flex flex-col justify-center relative shrink-0 text-[#4c4d4f] text-[46px] w-full">
                <p className="leading-[0.9] whitespace-pre-wrap">Um só propósito: Educar com consciência e estratégia.</p>
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#4c4d4f] text-[24px] w-[1120px]" style={{ fontVariationSettings: "'opsz' 14" }}>
              <p className="leading-[1.1] whitespace-pre-wrap">Um evento como o Brasil nunca viu, para profissionais e famílias que estão transformando o jeito de educar. Experiências, feiras, shows e conversas reais sobre a forma como criamos nossos filhos hoje.</p>
            </div>
          </div>
        </div>

        {/* Speakers Grid */}
        <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-[1280px]">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
              {row.map((speaker) => (
                <SpeakerCard key={speaker.id} speaker={speaker} />
              ))}
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[236px]">
            <button
              onClick={handleLoadMore}
              className="bg-[rgba(25,25,25,0.05)] relative rounded-[40px] shrink-0 w-full cursor-pointer hover:bg-[rgba(25,25,25,0.1)] transition-colors"
            >
              <div aria-hidden="true" className="absolute border-2 border-[#191919] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[4px_4px_0px_0px_#191919]" />
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center px-[32px] py-[16px] relative w-full">
                  <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#191919] text-[14.1px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[24px]">Ver mais palestrantes</p>
                  </div>
                </div>
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
```

---

## 2. ARQUIVO DE SVG PATHS

### 📁 Arquivo: `src/utils/svg-paths.ts`

```typescript
export default {
  p1f5a5880: "M4.42105 2.15008C3.16727 2.15008 2.15008 3.16727 2.15008 4.42105C2.15008 5.67484 3.16727 6.69202 4.42105 6.69202C5.67484 6.69202 6.69202 5.67484 6.69202 4.42105C6.69202 3.16727 5.67484 2.15008 4.42105 2.15008ZM4.42105 5.89416C3.60765 5.89416 2.94794 5.23446 2.94794 4.42105C2.94794 3.60765 3.60765 2.94794 4.42105 2.94794C5.23446 2.94794 5.89416 3.60765 5.89416 4.42105C5.89416 5.23446 5.23446 5.89416 4.42105 5.89416Z",
  
  p26754780: "M8.18939 -5.54135e-07H0.652719C0.479607 -5.54135e-07 0.313585 0.068768 0.191177 0.191177C0.068768 0.313585 -5.54135e-07 0.479607 -5.54135e-07 0.652719V8.18939C-5.54135e-07 8.3625 0.068768 8.52852 0.191177 8.65093C0.313585 8.77334 0.479607 8.84211 0.652719 8.84211H8.18939C8.3625 8.84211 8.52852 8.77334 8.65093 8.65093C8.77334 8.52852 8.84211 8.3625 8.84211 8.18939V0.652719C8.84211 0.479607 8.77334 0.313585 8.65093 0.191177C8.52852 0.068768 8.3625 -5.54135e-07 8.18939 -5.54135e-07ZM2.63544 7.53237H1.30605V3.30965H2.63544V7.53237ZM1.96982 2.72447C1.81903 2.72362 1.67186 2.67812 1.5469 2.59372C1.42194 2.50931 1.32478 2.38977 1.26769 2.2502C1.2106 2.11063 1.19613 1.95727 1.22612 1.80948C1.2561 1.6617 1.32919 1.5261 1.43616 1.41981C1.54313 1.31353 1.67919 1.24131 1.82717 1.21227C1.97515 1.18324 2.12841 1.19869 2.26761 1.25668C2.40682 1.31466 2.52572 1.41259 2.60933 1.53809C2.69293 1.66359 2.73749 1.81104 2.73737 1.96184C2.73879 2.0628 2.71987 2.16301 2.68174 2.25651C2.64361 2.35 2.58705 2.43486 2.51542 2.50602C2.4438 2.57719 2.35858 2.63321 2.26484 2.67074C2.1711 2.70827 2.07077 2.72654 1.96982 2.72447ZM7.53544 7.53605H6.20667V5.22912C6.20667 4.54877 5.91746 4.33877 5.54412 4.33877C5.14991 4.33877 4.76307 4.63596 4.76307 5.24632V7.53605H3.43368V3.31272H4.71211V3.89789H4.7293C4.85763 3.63816 5.30711 3.19421 5.99298 3.19421C6.73474 3.19421 7.53605 3.63447 7.53605 4.92395L7.53544 7.53605Z",
  
  p2c1af780: "M6.75179 0.70144H7.99465L5.27937 3.80483L8.47368 8.02785H5.97256L4.01359 5.46661L1.77209 8.02785H0.528475L3.43274 4.70842L0.368421 0.70144H2.93304L4.70378 3.04251L6.75179 0.70144ZM6.31559 7.28394H7.00427L2.55883 1.40628H1.8198L6.31559 7.28394Z",
  
  p31d46470: "M4.42105 0.796135C5.6023 0.796135 5.74219 0.801316 6.20674 0.822039C6.63849 0.841036 6.87163 0.913569 7.02706 0.974013C7.23257 1.05345 7.38109 1.15016 7.53479 1.30387C7.69021 1.45929 7.7852 1.60609 7.86464 1.8116C7.92508 1.96702 7.99762 2.20189 8.01661 2.63191C8.03734 3.09819 8.04252 3.23808 8.04252 4.4176C8.04252 5.59885 8.03734 5.73873 8.01661 6.20329C7.99762 6.63503 7.92508 6.86818 7.86464 7.0236C7.7852 7.22911 7.68849 7.37763 7.53479 7.53133C7.37936 7.68676 7.23257 7.78174 7.02706 7.86119C6.87163 7.92163 6.63676 7.99416 6.20674 8.01316C5.74046 8.03388 5.60058 8.03906 4.42105 8.03906C3.2398 8.03906 3.09992 8.03388 2.63536 8.01316C2.20362 7.99416 1.97048 7.92163 1.81505 7.86119C1.60954 7.78174 1.46102 7.68503 1.30732 7.53133C1.15189 7.37591 1.05691 7.22911 0.977467 7.0236C0.917023 6.86818 0.84449 6.63331 0.825494 6.20329C0.80477 5.73701 0.799589 5.59712 0.799589 4.4176C0.799589 3.23635 0.80477 3.09646 0.825494 2.63191C0.84449 2.20016 0.917023 1.96702 0.977467 1.8116C1.05691 1.60609 1.15362 1.45757 1.30732 1.30387C1.46275 1.14844 1.60954 1.05345 1.81505 0.974013C1.97048 0.913569 2.20535 0.841036 2.63536 0.822039C3.09992 0.801316 3.2398 0.796135 4.42105 0.796135ZM4.42105 0C3.22081 0 3.07056 0.00518092 2.5991 0.0259046C2.12936 0.0466283 1.80641 0.122615 1.52664 0.231414C1.23479 0.345395 0.987829 0.495641 0.742599 0.742599C0.495642 0.987829 0.345395 1.23479 0.231414 1.52492C0.122615 1.80641 0.0466283 2.12763 0.0259046 2.59737C0.00518092 3.07056 0 3.22081 0 4.42105C0 5.6213 0.00518092 5.77155 0.0259046 6.24301C0.0466283 6.71275 0.122615 7.03569 0.231414 7.31546C0.345395 7.60732 0.495642 7.85428 0.742599 8.09951C0.987829 8.34474 1.23479 8.49671 1.52492 8.60896C1.80641 8.71776 2.12763 8.79375 2.59737 8.81447C3.06883 8.8352 3.21908 8.84038 4.41933 8.84038C5.61957 8.84038 5.76982 8.8352 6.24128 8.81447C6.71102 8.79375 7.03396 8.71776 7.31373 8.60896C7.60387 8.49671 7.85082 8.34474 8.09605 8.09951C8.34128 7.85428 8.49326 7.60732 8.60551 7.31719C8.71431 7.03569 8.7903 6.71447 8.81102 6.24474C8.83174 5.77327 8.83693 5.62303 8.83693 4.42278C8.83693 3.22253 8.83174 3.07229 8.81102 2.60082C8.7903 2.13109 8.71431 1.80814 8.60551 1.52837C8.49671 1.23479 8.34647 0.987829 8.09951 0.742599C7.85428 0.497368 7.60732 0.345395 7.31719 0.233141C7.03569 0.124342 6.71447 0.0483553 6.24474 0.0276316C5.77155 0.00518092 5.6213 0 4.42105 0Z",
  
  p363e11f0: "M7.31201 2.06029C7.31201 2.35387 7.07368 2.59047 6.78183 2.59047C6.48824 2.59047 6.25165 2.35215 6.25165 2.06029C6.25165 1.7667 6.48997 1.5301 6.78183 1.5301C7.07368 1.5301 7.31201 1.76843 7.31201 2.06029Z",
  
  p3f159180: "M14.25 3H12.75V2.25C12.75 2.05109 12.671 1.86032 12.5303 1.71967C12.3897 1.57902 12.1989 1.5 12 1.5C11.8011 1.5 11.6103 1.57902 11.4697 1.71967C11.329 1.86032 11.25 2.05109 11.25 2.25V3H6.75V2.25C6.75 2.05109 6.67098 1.86032 6.53033 1.71967C6.38968 1.57902 6.19891 1.5 6 1.5C5.80109 1.5 5.61032 1.57902 5.46967 1.71967C5.32902 1.86032 5.25 2.05109 5.25 2.25V3H3.75C3.15326 3 2.58097 3.23705 2.15901 3.65901C1.73705 4.08097 1.5 4.65326 1.5 5.25V14.25C1.5 14.8467 1.73705 15.419 2.15901 15.841C2.58097 16.2629 3.15326 16.5 3.75 16.5H14.25C14.8467 16.5 15.419 16.2629 15.841 15.841C16.2629 15.419 16.5 14.8467 16.5 14.25V5.25C16.5 4.65326 16.2629 4.08097 15.841 3.65901C15.419 3.23705 14.8467 3 14.25 3ZM15 14.25C15 14.4489 14.921 14.6397 14.7803 14.7803C14.6397 14.921 14.4489 15 14.25 15H3.75C3.55109 15 3.36032 14.921 3.21967 14.7803C3.07902 14.6397 3 14.4489 3 14.25V9H15V14.25ZM15 7.5H3V5.25C3 5.05109 3.07902 4.86032 3.21967 4.71967C3.36032 4.57902 3.55109 4.5 3.75 4.5H5.25V5.25C5.25 5.44891 5.32902 5.63968 5.46967 5.78033C5.61032 5.92098 5.80109 6 6 6C6.19891 6 6.38968 5.92098 6.53033 5.78033C6.67098 5.63968 6.75 5.44891 6.75 5.25V4.5H11.25V5.25C11.25 5.44891 11.329 5.63968 11.4697 5.78033C11.6103 5.92098 11.8011 6 12 6C12.1989 6 12.3897 5.92098 12.5303 5.78033C12.671 5.63968 12.75 5.44891 12.75 5.25V4.5H14.25C14.4489 4.5 14.6397 4.57902 14.7803 4.71967C14.921 4.86032 15 5.05109 15 5.25V7.5Z",
};
```

**Descrição dos SVG paths:**
- `p3f159180` - Ícone de calendário (usado no badge do evento)
- `p26754780` - Ícone do LinkedIn
- `p31d46470`, `p1f5a5880`, `p363e11f0` - Ícones do Instagram (3 partes)
- `p2c1af780` - Ícone do Twitter/X

---

## 3. FONTES DO GOOGLE FONTS

### 📁 No arquivo HTML principal (`index.html` ou `public/index.html`)

Adicione dentro da tag `<head>`:

```html
<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet">
```

### Para a fonte Sugar Peachy

**⚠️ IMPORTANTE:** A fonte "Sugar Peachy" não está disponível no Google Fonts. Você tem duas opções:

**Opção 1 - Usar uma fonte similar:**
```html
<link href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap" rel="stylesheet">
```

Depois substitua no CSS:
```css
font-family: 'Lilita One', cursive;
```

**Opção 2 - Usar fonte customizada:**
1. Baixe a fonte Sugar Peachy
2. Coloque os arquivos na pasta `src/assets/fonts/`
3. Adicione no seu CSS global:

```css
@font-face {
  font-family: 'Sugar Peachy';
  src: url('./assets/fonts/SugarPeachy-Regular.woff2') format('woff2'),
       url('./assets/fonts/SugarPeachy-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Sugar Peachy';
  src: url('./assets/fonts/SugarPeachy-Bold.woff2') format('woff2'),
       url('./assets/fonts/SugarPeachy-Bold.woff') format('woff');
  font-weight: bold;
  font-style: normal;
}
```

---

## 4. PALETA DE CORES

### Cores de fundo dos cards:
```css
--speaker-green: #79c3ab;   /* Cards verde-água */
--speaker-blue: #74acde;    /* Cards azul */
--speaker-orange: #f7a73c;  /* Cards laranja */
```

### Cores de fundo da seção:
```css
--bg-cream: #fff6ef;        /* Fundo bege/creme da seção */
```

### Cores de texto:
```css
--text-primary: #191919;    /* Texto principal (preto) */
--text-orange: #ef7d25;     /* Título laranja */
--text-gray: #4c4d4f;       /* Subtítulo e descrição */
--text-dark-gray: #505050;  /* Texto do badge de evento */
```

### Cores de borda:
```css
--border-dark: #191919;     /* Bordas dos cards e botões */
--border-gray: #505050;     /* Borda do badge de evento */
```

### Cores de transparência:
```css
--bg-transparent: rgba(25,25,25,0.05);  /* Fundo do botão normal */
--bg-transparent-hover: rgba(25,25,25,0.1);  /* Fundo do botão hover */
```

---

## 5. INSTRUÇÕES PARA IDE

### Estrutura de pastas recomendada:

```
src/
├── assets/
│   ├── fonts/              (opcional - se usar Sugar Peachy)
│   └── images/
│       └── speakers/
│           ├── ivana-moreira.png
│           ├── marcos-piangers.png
│           ├── isa-minatel.png
│           ├── daniel-becker.png
│           ├── nanda-perim.png
│           ├── murilo-gun.png
│           ├── telma-abrahao.png
│           └── cecilia-lauriano.png
├── components/
│   └── SpeakersSection.tsx
├── utils/
│   └── svg-paths.ts
└── App.tsx
```

### Passo a passo de instalação:

#### 1. Crie o arquivo de SVG paths
```bash
# Crie a pasta utils se não existir
mkdir -p src/utils

# Crie o arquivo svg-paths.ts
# Cole o conteúdo da seção 2
```

#### 2. Adicione as imagens dos palestrantes
```bash
# Crie a estrutura de pastas
mkdir -p src/assets/images/speakers

# Coloque as 8 imagens dos palestrantes nesta pasta
# Renomeie-as conforme os nomes usados no código
```

#### 3. Crie o componente principal
```bash
# Crie a pasta components se não existir
mkdir -p src/components

# Crie o arquivo SpeakersSection.tsx
# Cole o conteúdo da seção 1
```

#### 4. Configure as fontes
```html
<!-- No seu index.html, dentro do <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet">
```

#### 5. Importe no seu App.tsx
```tsx
import SpeakersSection from './components/SpeakersSection';

function App() {
  return (
    <div className="App">
      <SpeakersSection />
    </div>
  );
}

export default App;
```

#### 6. Configure o Tailwind CSS (se ainda não estiver configurado)

**tailwind.config.js:**
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'],
        'sugar-peachy': ['Sugar Peachy', 'cursive'], // ou 'Lilita One' se usar alternativa
      },
    },
  },
  plugins: [],
}
```

**src/index.css:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 6. CHECKLIST DE IMPLEMENTAÇÃO

### ✅ Configuração Inicial
- [ ] Instalar Tailwind CSS (se ainda não tiver)
- [ ] Configurar React (se ainda não tiver)
- [ ] Adicionar fontes do Google Fonts no HTML

### ✅ Arquivos
- [ ] Criar `src/utils/svg-paths.ts` com os paths SVG
- [ ] Criar `src/components/SpeakersSection.tsx` com o componente
- [ ] Criar pasta `src/assets/images/speakers/`

### ✅ Imagens
- [ ] Adicionar imagem de Ivana Moreira (ivana-moreira.png)
- [ ] Adicionar imagem de Marcos Piangers (marcos-piangers.png)
- [ ] Adicionar imagem de Isa Minatel (isa-minatel.png)
- [ ] Adicionar imagem de Daniel Becker (daniel-becker.png)
- [ ] Adicionar imagem de Nanda Perim (nanda-perim.png)
- [ ] Adicionar imagem de Murilo Gun (murilo-gun.png)
- [ ] Adicionar imagem de Telma Abrahão (telma-abrahao.png)
- [ ] Adicionar imagem de Cecília Lauriano (cecilia-lauriano.png)

### ✅ Ajustes no Código
- [ ] Atualizar imports das imagens com os caminhos corretos
- [ ] Verificar se o caminho do svg-paths está correto
- [ ] Testar se todas as imagens estão carregando

### ✅ Personalização (Opcional)
- [ ] Alterar nomes dos palestrantes conforme necessário
- [ ] Alterar subtítulos dos palestrantes
- [ ] Ajustar texto do evento (data, local)
- [ ] Ajustar títulos e descrições
- [ ] Adicionar mais palestrantes ao array se necessário
- [ ] Ajustar cores de fundo dos cards

### ✅ Testes
- [ ] Testar carregamento inicial (8 palestrantes)
- [ ] Testar botão "Ver mais palestrantes"
- [ ] Testar layout responsivo
- [ ] Verificar se as fontes estão sendo aplicadas corretamente
- [ ] Verificar se as cores estão corretas
- [ ] Testar hover do botão

---

## 7. NOTAS IMPORTANTES

### 🎨 Responsividade
O componente foi otimizado para desktop (1280px de largura). Para torná-lo responsivo, você pode:

```css
/* Adicione media queries personalizadas */
@media (max-width: 1280px) {
  /* Ajustar padding lateral */
  .speakers-section {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media (max-width: 768px) {
  /* Grid de 2 colunas em tablets */
  .speakers-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  /* Grid de 1 coluna em mobile */
  .speakers-grid {
    grid-template-columns: 1fr;
  }
}
```

### 🖼️ Formato das Imagens
- Recomendado: PNG ou WebP com fundo transparente
- Resolução mínima: 400x500px por imagem
- Peso: Otimize para web (< 200KB por imagem)

### 🔧 Possíveis Ajustes
Se as imagens não estiverem se posicionando corretamente nos cards:
1. Ajuste os valores em `imagePosition` para cada palestrante
2. Os valores `left`, `top`, `width`, `height` controlam o posicionamento

### 📦 Dependências Necessárias
```json
{
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "devDependencies": {
    "tailwindcss": "^3.0.0",
    "autoprefixer": "^10.0.0",
    "postcss": "^8.0.0"
  }
}
```

---

## 🚀 Comandos Rápidos

```bash
# Instalar dependências (se necessário)
npm install tailwindcss autoprefixer postcss

# Inicializar Tailwind
npx tailwindcss init -p

# Rodar o projeto
npm start
```

---

## 💡 Dicas de Customização

### Alterar número de palestrantes por linha:
No componente, procure por:
```tsx
for (let i = 0; i < visibleSpeakers.length; i += 4) {
  // Altere o 4 para 3 (3 por linha) ou 5 (5 por linha)
}
```

### Alterar quantidade inicial de palestrantes:
```tsx
const [visibleCount, setVisibleCount] = useState(8); // Altere para 4, 6, 12, etc.
```

### Alterar quantidade de palestrantes carregados por vez:
```tsx
const handleLoadMore = () => {
  setVisibleCount((prev) => Math.min(prev + 4, allSpeakers.length));
  // Altere o +4 para +2, +6, etc.
};
```

---

## 📞 Suporte

Se tiver problemas:
1. Verifique se todas as imagens estão nos caminhos corretos
2. Verifique se o Tailwind está configurado corretamente
3. Verifique o console do navegador para erros
4. Certifique-se de que as fontes estão carregando

---

**Última atualização:** 03/02/2026
**Versão:** 1.0.0
