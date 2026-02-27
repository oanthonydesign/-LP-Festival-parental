// components/sections/Section11.tsx
// Seção 11: Agência de Viagem para visitantes de outras cidades

import svgPaths from "@/components/svg/svg-igj2kqgoo8";

function Frame1() {
  return (
    <div className="content-stretch flex flex-col font-sugar-peachy gap-[6px] items-center leading-[0] not-italic relative shrink-0 text-center w-full">
      <div className="flex flex-col justify-center relative shrink-0 text-[#ef7d25] text-[46px] md:text-[84px] w-full">
        <p className="leading-[0.8] whitespace-pre-wrap break-words">Vai vir de outra cidade?</p>
      </div>
      <div className="flex flex-col font-dm-sans justify-center relative shrink-0 text-[#4c4d4f] text-[18px] md:text-[24px] max-w-[600px] w-full mx-auto">
        <p className="leading-tight whitespace-pre-wrap break-words">Conte com a agência oficial do Festival Parental para organizar sua viagem com calma e segurança</p>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="relative shrink-0 size-[61.5px]" data-name="1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61.5 61.5">
        <g id="1">
          <g filter="url(#filter0_d_1_100)" id="Star 5">
            <path d={svgPaths.p2d583b80} fill="var(--fill-0, #F7A73C)" />
            <path d={svgPaths.p1b83a400} stroke="var(--stroke-0, #191919)" strokeWidth="1.476" />
          </g>
          <path d={svgPaths.p141a3680} fill="var(--stroke-0, #191919)" id="Vector 20" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="40.3583" id="filter0_d_1_100" width="39.233" x="11.3795" y="10.9488">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="0.492" dy="2.46" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.0980392 0 0 0 0 0.0980392 0 0 0 0 0.0980392 0 0 0 1 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_100" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_100" mode="normal" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-[8px] items-center justify-center relative shrink-0" data-name="1">
      <Component1 />
      <div className="flex flex-col font-sugar-peachy font-normal justify-center leading-[0] relative shrink-0 text-[#4c4d4f] text-[28px] text-center whitespace-normal break-words">
        <p className="leading-[1.1]">Planeje sua viagem com apoio especializado</p>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="relative shrink-0 size-[61.5px]" data-name="1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61.5 61.5">
        <g id="1">
          <g filter="url(#filter0_d_1_96)" id="Star 5">
            <path d={svgPaths.p2d583b80} fill="var(--fill-0, #74ACDE)" />
            <path d={svgPaths.p1b83a400} stroke="var(--stroke-0, #191919)" strokeWidth="1.476" />
          </g>
          <path d={svgPaths.p1f1e1f00} fill="var(--stroke-0, #191919)" id="Vector 21" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="40.3583" id="filter0_d_1_96" width="39.233" x="11.3795" y="10.9488">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="0.492" dy="2.46" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.0980392 0 0 0 0 0.0980392 0 0 0 0 0.0980392 0 0 0 1 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_96" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_96" mode="normal" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-[8px] items-center justify-center relative shrink-0" data-name="2">
      <Component3 />
      <div className="flex flex-col font-sugar-peachy font-normal justify-center leading-[0] relative shrink-0 text-[#4c4d4f] text-[28px] text-center whitespace-normal break-words">
        <p className="leading-[1.1]">Hospedagem e passagens com a agência parceira do evento.</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-center relative shrink-0">
      <Component />
      <Component2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-center relative shrink-0 w-full">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="content">
      <Frame />
    </div>
  );
}

function IcOutlineWhatsapp() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic:outline-whatsapp">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic:outline-whatsapp">
          <path d={svgPaths.p93fc700} fill="var(--fill-0, #FFF6EF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-dm-sans font-bold justify-center leading-[0] relative shrink-0 text-[#fff6ef] text-[14.1px] uppercase whitespace-normal" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">WhatsApp GalaxTur</p>
      </div>
    </div>
  );
}

function ComprarIngresso() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Comprar Ingresso">
      <Container1 />
    </div>
  );
}

function LinkVariant() {
  return (
    <a
      href="https://wa.me/5531984205695?text=Vou%20no%20Festival%20Parental%202026%20e%20gostaria%20de%20organizar%20minha%20viagem"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#2daa96] border-2 border-[#191919] relative rounded-[40px] shadow-[4px_4px_0px_0px_#191919] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#191919] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#191919] transition-all flex flex-row items-center justify-center size-full cursor-pointer decoration-transparent"
      data-name="Link - Variant 1"
    >
      <div className="content-stretch flex gap-[8px] items-center justify-center px-4 md:px-[40px] py-[16px] relative w-full">
        <IcOutlineWhatsapp />
        <ComprarIngresso />
      </div>
    </a>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full max-w-[332px]" data-name="Container">
      <LinkVariant />
    </div>
  );
}

function Content() {
  return (
    <div className="bg-[#fff6ef] relative rounded-[32px] shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border-2 border-[#191919] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[7px_7px_0px_0px_#191919]" />
      <div className="flex flex-col items-center w-full">
        <div className="content-stretch flex flex-col gap-[48px] md:gap-[64px] items-center p-6 md:p-[64px] relative w-full">
          <Content1 />
          <Container />
        </div>
      </div>
    </div>
  );
}

export default function Section11() {
  return (
    <section className="bg-[#fff6ef] w-full flex flex-col items-center py-[32px] md:py-[80px] px-4 md:px-0" data-name="Section - 11">
      <div className="w-full max-w-[1280px]">
        <Content />
      </div>
    </section>
  );
}
