// components/sections/Section12.tsx
// Seção 12: Galeria com Carrosséis Animados
// ⚠️ IMPORTANTE: Este componente usa animações CSS e precisa de 'use client'

'use client';

export default function Section12() {
  return (
    <div className="bg-[#fff6ef] content-stretch flex items-center justify-center pb-[72px] pt-[56px] relative size-full" data-name="Section - 12">
      <Container />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Container">
      <Content />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[86px] items-center relative shrink-0" data-name="Content">
      <Frame />
      <Frame2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center leading-[0] relative shrink-0 text-center w-full">
      <div className="flex flex-col font-sugar-peachy justify-center not-italic relative shrink-0 text-[#2260a1] text-[72px] w-[928px]">
        <p className="whitespace-pre-wrap">
          <span className="leading-[0.8]">{`Tem coisa que não dá pra explicar... `}</span>
          <span className="leading-[0.8] text-[#ef7d25]">só dá pra viver.</span>
        </p>
      </div>
      <div className="flex flex-col font-dm-sans font-normal justify-center relative shrink-0 text-[#4c4d4f] text-[24px] w-[928px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[1.1] whitespace-pre-wrap">Na edição 2025, durante três dias, quem acredita na Parentalidade como causa viveu o que nenhum outro evento no Brasil entrega: palcos lotados, feira rolando, encontros inesquecíveis e a certeza de que isso aqui é só o começo!</p>
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
          animation: scroll-right-to-left 30s linear infinite;
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
          animation: scroll-left-to-right 30s linear infinite;
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
    <div className="bg-[#fff6ef] h-[158px] relative rounded-[999px] shrink-0 w-[490px]" data-name="1">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[327px] left-1/2 top-[calc(50%+64.79px)] w-[490px]" data-name="IMG_7151 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="/images/festival/gallery/img-7151.png" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#191919] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[7px_7px_0px_0px_#191919]" />
    </div>
  );
}

function Component1() {
  return (
    <div className="bg-[#fff6ef] h-[158px] relative rounded-[999px] shrink-0 w-[490px]" data-name="2">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute h-[327px] left-0 top-[-117.71px] w-[490px]" data-name="CEP-268 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="/images/festival/gallery/cep-268.png" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#191919] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[7px_7px_0px_0px_#191919]" />
    </div>
  );
}

function Component2() {
  return (
    <div className="bg-[#fff6ef] h-[158px] relative rounded-[999px] shrink-0 w-[490px]" data-name="3">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute h-[327px] left-0 top-[-84.71px] w-[490px]" data-name="CEP-016 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="/images/festival/gallery/cep-016.png" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#191919] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[7px_7px_0px_0px_#191919]" />
    </div>
  );
}

function Component3() {
  return (
    <div className="bg-[#fff6ef] h-[158px] relative rounded-[999px] shrink-0 w-[490px]" data-name="4">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute h-[342px] left-[-12px] top-[-91.71px] w-[514px]" data-name="CEP-338 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="/images/festival/gallery/cep-338.png" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#191919] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[7px_7px_0px_0px_#191919]" />
    </div>
  );
}

// Imagens do Carrossel 2
function Component4() {
  return (
    <div className="bg-[#fff6ef] h-[158px] relative rounded-[999px] shrink-0 w-[490px]" data-name="1">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute h-[355px] left-[-21px] top-[-80.71px] w-[532px]" data-name="CEP-166 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="/images/festival/gallery/cep-166.png" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#191919] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[7px_7px_0px_0px_#191919]" />
    </div>
  );
}

function Component5() {
  return (
    <div className="bg-[#fff6ef] h-[158px] relative rounded-[999px] shrink-0 w-[490px]" data-name="2">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute h-[366px] left-[-30px] top-[-120.71px] w-[550px]" data-name="CEP-294 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="/images/festival/gallery/cep-294.png" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#191919] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[7px_7px_0px_0px_#191919]" />
    </div>
  );
}

function Component6() {
  return (
    <div className="bg-[#fff6ef] h-[158px] relative rounded-[999px] shrink-0 w-[490px]" data-name="3">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute h-[362px] left-[-27px] top-[-67.71px] w-[544px]" data-name="CEP-269 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="/images/festival/gallery/cep-269.png" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#191919] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[7px_7px_0px_0px_#191919]" />
    </div>
  );
}

function Component7() {
  return (
    <div className="bg-[#fff6ef] h-[158px] relative rounded-[999px] shrink-0 w-[490px]" data-name="4">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute h-[335px] left-[-7px] top-[-31.71px] w-[504px]" data-name="CEP-183 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="/images/festival/gallery/cep-183.png" />
        </div>
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
    <div className="bg-[#fff6ef] h-[72px] relative rounded-[40px] shrink-0 w-[510px]" data-name="1">
      <div className="content-stretch flex items-center justify-between overflow-clip px-[32px] py-[16px] relative rounded-[inherit] size-full">
        <Container1 />
        <Container2 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#191919] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[4px_4px_0px_0px_#191919]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-dm-sans font-normal justify-center leading-[0] relative shrink-0 text-[#191919] text-[22px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-none">Galeria 2025</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start justify-center relative shrink-0" data-name="Container">
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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fff6ef] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-none">Ver galeria completa</p>
      </div>
    </div>
  );
}
