// components/sections/Section10.tsx
// Seção 10: Transamérica Expo - Informações sobre o local do evento

export default function Section10() {
  return (
    <div className="bg-[#fff6ef] content-stretch flex items-center justify-center pb-[56px] pt-[86px] relative size-full" data-name="Section - 10">
      <Content />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[86px] items-center relative shrink-0 w-[1280px]" data-name="Content">
      <TextsTrilhas />
      <Cards />
    </div>
  );
}

function TextsTrilhas() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Texts Trilhas">
      <Text />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center leading-[0] relative shrink-0 text-center w-full" data-name="text">
      <div className="flex flex-col font-sugar-peachy justify-center not-italic relative shrink-0 text-[#2260a1] text-[76px] w-full">
        <p className="leading-[0.8] whitespace-pre-wrap">Transamérica Expo, São Paulo/SP</p>
      </div>
      <div className="flex flex-col font-dm-sans font-normal justify-center relative shrink-0 text-[#4c4d4f] text-[24px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[1.1] whitespace-pre-wrap">O Festival Parental 2026 acontece no Transamérica Expo, um dos espaços de eventos mais versáteis e renomados do país. Localizado na capital paulista, o centro oferece infraestrutura completa, acessibilidade e conforto para receber milhares de pessoas em uma experiência grandiosa.</p>
      </div>
    </div>
  );
}

function Cards() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Cards">
      <Container />
      <Container1 />
      <Container2 />
    </div>
  );
}

// Card 1: 4 dias de festival
function Container() {
  return (
    <div className="content-stretch flex flex-col h-[484px] items-start justify-center relative shrink-0 w-[413px]" data-name="Container">
      <Variant />
    </div>
  );
}

function Variant() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] w-full" data-name="Variant 1">
      <div className="content-stretch flex flex-col items-start justify-end overflow-clip relative rounded-[inherit] size-full">
        <Image117Bn7IqnVfcTfYln1HkE0Lm5K0WEqPng />
        <div className="absolute inset-[-0.2px_0_0.2px_0] rounded-[16px]" data-name="Border">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
        </div>
        <Texts />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#191919] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[7px_7px_0px_0px_#191919]" />
    </div>
  );
}

function Image117Bn7IqnVfcTfYln1HkE0Lm5K0WEqPng() {
  return (
    <div className="absolute inset-[-0.2px_0_0.2px_0] overflow-clip" data-name="image 117 → BN7iqnVFCTfYln1HkE0Lm5k0wEQ.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-34.11%] max-w-none top-0 w-[168.22%]" src="/images/festival/image-117.png" />
      </div>
      <div className="absolute h-[515px] left-px top-[-30.5px] w-[412px]" data-name="image 119">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="/images/festival/image-119.png" />
      </div>
      <div className="absolute h-[484px] left-[-145px] top-[0.5px] w-[704px]" data-name="image 120">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="/images/festival/image-120.png" />
      </div>
    </div>
  );
}

function Texts() {
  return (
    <div className="backdrop-blur-[2.5px] bg-[rgba(0,0,0,0.56)] relative shrink-0 w-full" data-name="Texts">
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[24px] py-[40px] relative w-full">
        <CreatorTalks />
        <PaineisImersivosSobreCulturaDigitalMarcasDoAmanhaEInovacoesEmPlataformasTecnologia />
      </div>
    </div>
  );
}

function CreatorTalks() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Creator Talks">
      <div className="flex flex-col font-dm-sans font-bold justify-center leading-[0] relative shrink-0 text-[24px] text-white w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-none whitespace-pre-wrap">4 dias de festival</p>
      </div>
    </div>
  );
}

function PaineisImersivosSobreCulturaDigitalMarcasDoAmanhaEInovacoesEmPlataformasTecnologia() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Painéis imersivos sobre Cultura Digital, Marcas do Amanhã e Inovações em Plataformas & Tecnologia.">
      <div className="flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.7)] w-full">
        <p className="leading-[1.1] whitespace-pre-wrap">Serão quatro dias de evento em um palco à altura da transformação que estamos construindo juntos.</p>
      </div>
    </div>
  );
}

// Card 2: Endereço
function Container1() {
  return (
    <div className="content-stretch flex flex-col h-[484px] items-start justify-center relative shrink-0 w-[413px]" data-name="Container">
      <Variant1 />
    </div>
  );
}

function Variant1() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] w-full" data-name="Variant 1">
      <div className="content-stretch flex flex-col items-start justify-end overflow-clip relative rounded-[inherit] size-full">
        <Image117Bn7IqnVfcTfYln1HkE0Lm5K0WEqPng1 />
        <div className="absolute inset-[-0.2px_0_0.2px_0] rounded-[16px]" data-name="Border">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
        </div>
        <Texts1 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#191919] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[7px_7px_0px_0px_#191919]" />
    </div>
  );
}

function Image117Bn7IqnVfcTfYln1HkE0Lm5K0WEqPng1() {
  return (
    <div className="absolute inset-[-0.2px_0_0.2px_0] overflow-clip" data-name="image 117 → BN7iqnVFCTfYln1HkE0Lm5k0wEQ.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-34.11%] max-w-none top-0 w-[168.22%]" src="/images/festival/image-117.png" />
      </div>
      <div className="absolute h-[519px] left-[-0.5px] top-[-33px] w-[415px]" data-name="💡 No mundo dos eventos, inovar é essencial. E no Transamerica Expo Center, isso é o que nos mov 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="/images/festival/transamerica-expo.png" />
      </div>
    </div>
  );
}

function Texts1() {
  return (
    <div className="backdrop-blur-[2.5px] bg-[rgba(0,0,0,0.56)] h-[176px] relative shrink-0 w-full" data-name="Texts">
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[24px] py-[40px] relative size-full">
        <CreatorTalks1 />
        <PaineisImersivosSobreCulturaDigitalMarcasDoAmanhaEInovacoesEmPlataformasTecnologia1 />
      </div>
    </div>
  );
}

function CreatorTalks1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Creator Talks">
      <div className="flex flex-col font-dm-sans font-bold justify-center leading-[0] relative shrink-0 text-[24px] text-white w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-none whitespace-pre-wrap">Endereço</p>
      </div>
    </div>
  );
}

function PaineisImersivosSobreCulturaDigitalMarcasDoAmanhaEInovacoesEmPlataformasTecnologia1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Painéis imersivos sobre Cultura Digital, Marcas do Amanhã e Inovações em Plataformas & Tecnologia.">
      <div className="flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.7)] w-full">
        <p className="leading-[1.1] whitespace-pre-wrap">Av. Dr. Mário Vilas Boas Rodrigues, 387 — Santo Amaro, São Paulo/SP</p>
      </div>
    </div>
  );
}

// Card 3: Data
function Container2() {
  return (
    <div className="content-stretch flex flex-col h-[484px] items-start justify-center relative shrink-0 w-[413px]" data-name="Container">
      <Variant2 />
    </div>
  );
}

function Variant2() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] w-full" data-name="Variant 1">
      <div className="content-stretch flex flex-col items-start justify-end overflow-clip relative rounded-[inherit] size-full">
        <Image117Bn7IqnVfcTfYln1HkE0Lm5K0WEqPng2 />
        <div className="absolute inset-[-0.2px_0_0.2px_0] rounded-[16px]" data-name="Border">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
        </div>
        <Texts2 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#191919] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[7px_7px_0px_0px_#191919]" />
    </div>
  );
}

function Image117Bn7IqnVfcTfYln1HkE0Lm5K0WEqPng2() {
  return (
    <div className="absolute inset-[-0.2px_0_0.2px_0] overflow-clip" data-name="image 117 → BN7iqnVFCTfYln1HkE0Lm5k0wEQ.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-34.11%] max-w-none top-0 w-[168.22%]" src="/images/festival/image-117.png" />
      </div>
      <div className="absolute h-[516px] left-0 top-[-31px] w-[413px]" data-name="image 119">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="/images/festival/image-119.png" />
      </div>
    </div>
  );
}

function Texts2() {
  return (
    <div className="backdrop-blur-[2.5px] bg-[rgba(0,0,0,0.56)] h-[176px] relative shrink-0 w-full" data-name="Texts">
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[24px] py-[40px] relative size-full">
        <CreatorTalks2 />
        <PaineisImersivosSobreCulturaDigitalMarcasDoAmanhaEInovacoesEmPlataformasTecnologia2 />
      </div>
    </div>
  );
}

function CreatorTalks2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Creator Talks">
      <div className="flex flex-col font-dm-sans font-bold justify-center leading-[0] relative shrink-0 text-[24px] text-white w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-none whitespace-pre-wrap">Data</p>
      </div>
    </div>
  );
}

function PaineisImersivosSobreCulturaDigitalMarcasDoAmanhaEInovacoesEmPlataformasTecnologia2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Painéis imersivos sobre Cultura Digital, Marcas do Amanhã e Inovações em Plataformas & Tecnologia.">
      <div className="flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.7)] w-full">
        <p className="leading-[1.1] whitespace-pre-wrap">Do dia 19 a 22 de novembro de 2026, o festival iniciará às [HORÁRIO]</p>
      </div>
    </div>
  );
}
