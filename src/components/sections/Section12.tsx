// components/sections/Section12.tsx
// Seção 12: Galeria com Carrosséis Animados
// ⚠️ IMPORTANTE: Este componente usa animações CSS e precisa de 'use client'

'use client';

export default function Section12() {
  return (
    <div className="bg-[#fff6ef] content-stretch flex items-center justify-center pb-[72px] pt-[56px] px-4 md:px-0 relative size-full" data-name="Section - 12">
      <Container />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full max-w-[1280px]" data-name="Container">
      <Content />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-10 md:gap-[86px] items-center relative shrink-0 w-full" data-name="Content">
      <Frame />
      <Frame2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center leading-[0] relative shrink-0 text-center w-full">
      <div className="flex flex-col font-sugar-peachy justify-center not-italic relative shrink-0 text-[#2260a1] text-[46px] md:text-[72px] w-full max-w-[928px]">
        <p className="whitespace-pre-wrap break-words">
          <span className="leading-[0.8]">{`Tem coisa que não dá pra explicar... `}</span>
          <span className="leading-[0.8] text-[#ef7d25]">só dá pra viver</span>
        </p>
      </div>
      <div className="flex flex-col font-dm-sans font-normal justify-center relative shrink-0 text-[#4c4d4f] text-[18px] md:text-[24px] w-full max-w-[928px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[1.1] whitespace-pre-wrap break-words">Na edição 2025, durante três dias, quem acredita na Parentalidade como causa viveu o que nenhum outro evento no Brasil entrega: palcos lotados, feira rolando, encontros inesquecíveis e a certeza de que isso aqui é só o começo!</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0">
      <Div />
      <Frame1 />
    </div>
  );
}

// Carrossel Duplo
function Div() {
  return (
    <div className="h-[348.781px] relative shrink-0 overflow-hidden" style={{ width: '100vw', maxWidth: '100%' }} data-name="div">
      <Div1 />
      <Div2 />
    </div>
  );
}

// Carrossel 1: Da direita para esquerda
function Div1() {
  return (
    <>
      <style>{`
        @keyframes scroll-right-to-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .carousel-rtl {
          animation: scroll-right-to-left 80s linear infinite;
        }
        .carousel-rtl:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="absolute flex gap-[24px] items-center top-0 carousel-rtl" data-name="div">
        <Component />
        <Component1 />
        <Component2 />
        <Component3 />
        <Component />
        <Component1 />
        <Component2 />
        <Component3 />
        <Component />
        <Component1 />
        <Component2 />
        <Component3 />
        <Component />
        <Component1 />
        <Component2 />
        <Component3 />
      </div>
    </>
  );
}

// Carrossel 2: Da esquerda para direita
function Div2() {
  return (
    <>
      <style>{`
        @keyframes scroll-left-to-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .carousel-ltr {
          animation: scroll-left-to-right 80s linear infinite;
        }
        .carousel-ltr:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="absolute flex gap-[24px] items-center top-[182px] carousel-ltr" data-name="div">
        <Component4 />
        <Component5 />
        <Component6 />
        <Component7 />
        <Component4 />
        <Component5 />
        <Component6 />
        <Component7 />
        <Component4 />
        <Component5 />
        <Component6 />
        <Component7 />
        <Component4 />
        <Component5 />
        <Component6 />
        <Component7 />
      </div>
    </>
  );
}

// Imagens do Carrossel 1
function Component() {
  return (
    <div className="bg-[#fff6ef] h-[158px] relative rounded-[999px] shrink-0 w-[85vw] md:w-[490px]" data-name="1">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <img alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src="/images/carrossel_03.webp" loading="lazy" />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#191919] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[7px_7px_0px_0px_#191919]" />
    </div>
  );
}

function Component1() {
  return (
    <div className="bg-[#fff6ef] h-[158px] relative rounded-[999px] shrink-0 w-[85vw] md:w-[490px]" data-name="2">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <img alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src="/images/carrossel_07.webp" loading="lazy" />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#191919] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[7px_7px_0px_0px_#191919]" />
    </div>
  );
}

function Component2() {
  return (
    <div className="bg-[#fff6ef] h-[158px] relative rounded-[999px] shrink-0 w-[85vw] md:w-[490px]" data-name="3">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <img alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src="/images/carrossel_01.webp" loading="lazy" />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#191919] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[7px_7px_0px_0px_#191919]" />
    </div>
  );
}

function Component3() {
  return (
    <div className="bg-[#fff6ef] h-[158px] relative rounded-[999px] shrink-0 w-[85vw] md:w-[490px]" data-name="4">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <img alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src="/images/carrossel_05.webp" loading="lazy" />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#191919] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[7px_7px_0px_0px_#191919]" />
    </div>
  );
}

// Imagens do Carrossel 2
function Component4() {
  return (
    <div className="bg-[#fff6ef] h-[158px] relative rounded-[999px] shrink-0 w-[85vw] md:w-[490px]" data-name="1">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <img alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src="/images/carrossel_08.webp" loading="lazy" />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#191919] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[7px_7px_0px_0px_#191919]" />
    </div>
  );
}

function Component5() {
  return (
    <div className="bg-[#fff6ef] h-[158px] relative rounded-[999px] shrink-0 w-[85vw] md:w-[490px]" data-name="2">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <img alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src="/images/carrossel_02.webp" loading="lazy" />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#191919] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[7px_7px_0px_0px_#191919]" />
    </div>
  );
}

function Component6() {
  return (
    <div className="bg-[#fff6ef] h-[158px] relative rounded-[999px] shrink-0 w-[85vw] md:w-[490px]" data-name="3">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <img alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src="/images/carrossel_04.webp" loading="lazy" />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#191919] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[7px_7px_0px_0px_#191919]" />
    </div>
  );
}

function Component7() {
  return (
    <div className="bg-[#fff6ef] h-[158px] relative rounded-[999px] shrink-0 w-[85vw] md:w-[490px]" data-name="4">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <img alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src="/images/carrossel_06.webp" loading="lazy" />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#191919] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[7px_7px_0px_0px_#191919]" />
    </div>
  );
}

// Botão Ver Galeria Completa
function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <Component8 />
    </div>
  );
}

function Component8() {
  return (
    <div className="bg-[#fff6ef] h-auto min-h-[72px] md:h-[72px] relative rounded-[40px] shrink-0 w-full max-w-[510px] border-2 border-[#191919] shadow-[4px_4px_0px_0px_#191919] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#191919] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#191919] transition-all cursor-pointer overflow-clip" data-name="1">
      <div className="flex flex-col md:flex-row items-center justify-center md:items-center size-full px-4 md:px-[32px] py-6 md:py-[16px] gap-6 md:gap-[126px]">
        <div className="flex flex-col font-dm-sans font-normal justify-center leading-[0] relative shrink-0 text-[#191919] text-[24px] md:text-[22px] whitespace-normal md:whitespace-nowrap text-center md:text-left" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-tight md:leading-none">Galeria 2025</p>
        </div>
        <div className="bg-[#191919] px-6 md:px-[18px] h-[48px] md:h-[40px] rounded-[270px] flex items-center justify-center shrink-0">
          <span className="text-[#fff6ef] font-dm-sans font-normal text-[14px] md:text-[16px] whitespace-nowrap">
            Ver galeria completa
          </span>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-center md:items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-dm-sans font-normal justify-center leading-[0] relative shrink-0 text-[#191919] text-[22px] whitespace-normal" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-none">Galeria 2025</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-center md:items-start justify-center relative shrink-0" data-name="Container">
      <LinkLightOnlyText />
    </div>
  );
}

function LinkLightOnlyText() {
  return (
    <div className="bg-[#191919] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px px-[18px] relative rounded-[270px]" data-name="Link - Light (Only Text)">
      <Label />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Label">
      <Container3 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-center md:items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fff6ef] text-[16px] whitespace-normal" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-none">Ver galeria completa</p>
      </div>
    </div>
  );
}
