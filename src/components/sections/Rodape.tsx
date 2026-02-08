// components/sections/Rodape.tsx
// Rodapé completo do Festival Parental

import svgPaths from "@/components/svg/svg-3i8b3mcfk6";

export default function Rodape() {
  return (
    <div className="relative size-full" data-name="Rodape">
      <Desktop />
    </div>
  );
}

function Desktop() {
  return (
    <div className="bg-black content-stretch flex items-center justify-center overflow-clip w-full" data-name="Desktop">
      <ContentPadding />
    </div>
  );
}

function ContentPadding() {
  return (
    <div className="bg-[#fff6ef] content-stretch flex flex-col h-auto min-h-[577px] items-center overflow-clip px-4 md:px-[30px] py-[80px] relative shrink-0 w-full" data-name="Content → Padding">
      <Links />
      <div className="absolute inset-[44.71px_0_44.29px_0] pointer-events-none" data-name="HorizontalBorder">
        <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0" />
      </div>
      <Group1 />
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center justify-center relative shrink-0 w-full max-w-[1280px]" data-name="Links">
      <Frame2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col md:flex-row items-start md:items-start justify-between gap-10 md:gap-0 relative shrink-0 w-full">
      <Logo />
      <Container1 />
    </div>
  );
}

// Logo e Tagline
function Logo() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center md:items-start relative shrink-0 w-full md:w-[287px]" data-name="Logo">
      <Group />
      <div className="h-0 relative shrink-0 w-[202px]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 202 1">
            <path d="M0 0.5H202" id="Vector" stroke="var(--stroke-0, #4C4D4F)" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
      <ConectandoCriadoresEMarcasProAgora />
    </div>
  );
}

function Group() {
  return (
    <div className="h-[50.513px] relative shrink-0 w-[160.002px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 50.5134">
        <g id="Group 12">
          <path d={svgPaths.p3650f180} fill="var(--fill-0, #EF7D25)" id="Vector" />
          <path d={svgPaths.p2623f600} fill="var(--fill-0, #EF7D25)" id="Vector_2" />
          <path d={svgPaths.pe414f80} fill="var(--fill-0, #EF7D25)" id="Vector_3" />
          <path d={svgPaths.p39d2b00} fill="var(--fill-0, #EF7D25)" id="Vector_4" />
          <path d={svgPaths.p144bd600} fill="var(--fill-0, #EF7D25)" id="Vector_5" />
          <path d={svgPaths.p1f973c00} fill="var(--fill-0, #EF7D25)" id="Vector_6" />
          <path d={svgPaths.p12d0ab00} fill="var(--fill-0, #EF7D25)" id="Vector_7" />
          <path d={svgPaths.p39dfff00} fill="var(--fill-0, #EF7D25)" id="Vector_8" />
          <path d={svgPaths.pa450ba0} fill="var(--fill-0, #0B6FB5)" id="Vector_9" />
          <path d={svgPaths.p2a05f00} fill="var(--fill-0, #0B6FB5)" id="Vector_10" />
          <path d={svgPaths.p1023e300} fill="var(--fill-0, #0B6FB5)" id="Vector_11" />
          <path d={svgPaths.p9a65300} fill="var(--fill-0, #0B6FB5)" id="Vector_12" />
          <path d={svgPaths.p7f19500} fill="var(--fill-0, #0B6FB5)" id="Vector_13" />
          <path d={svgPaths.p5fc5f00} fill="var(--fill-0, #0B6FB5)" id="Vector_14" />
          <path d={svgPaths.p99ee500} fill="var(--fill-0, #0B6FB5)" id="Vector_15" />
          <path d={svgPaths.p117fce00} fill="var(--fill-0, #0B6FB5)" id="Vector_16" />
          <path d={svgPaths.p13102880} fill="var(--fill-0, #EF7D25)" id="Vector_17" />
          <path d={svgPaths.p27126000} fill="var(--fill-0, #FFF6EF)" id="Vector_18" />
          <path d={svgPaths.p3900c880} fill="var(--fill-0, #FFF6EF)" id="Vector_19" />
          <path d={svgPaths.p148d9600} fill="var(--fill-0, #FFF6EF)" id="Vector_20" />
          <path d={svgPaths.p21fd4cf0} fill="var(--fill-0, #FFF6EF)" id="Vector_21" />
          <g id="Group 13">
            <path d={svgPaths.p24f789f2} fill="var(--fill-0, #0B6FB5)" id="Vector_22" />
            <path d={svgPaths.p32966a80} fill="var(--fill-0, #0B6FB5)" id="Vector_23" />
            <path d={svgPaths.pa176d30} fill="var(--fill-0, #EF7D25)" id="Vector_24" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ConectandoCriadoresEMarcasProAgora() {
  return (
    <div className="content-stretch flex flex-col items-center md:items-start relative shrink-0 w-[202px]" data-name="Conectando criadores e marcas pro agora.">
      <Container />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center md:items-start pb-[0.61px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-dm-sans font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(76,77,79,0.9)] uppercase w-full text-center md:text-left" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[1.1] whitespace-pre-wrap">transformando o jeito de educar os filhos</p>
      </div>
    </div>
  );
}

// Menu de Navegação
function Container1() {
  return (
    <div className="content-stretch flex flex-col md:flex-row md:flex-wrap items-center md:items-start md:justify-end gap-10 md:gap-0 relative shrink-0 w-full md:max-w-[941px]" data-name="Container">
      <Links1 />
      <Frame />
      <Frame3 />
      <Frame1 />
    </div>
  );
}

// Coluna 1: PALESTRANTES, TRILHAS, PROGRAMAÇÃO, DÚVIDAS
function Links1() {
  return (
    <div className="content-stretch flex flex-col items-center md:items-start justify-center relative shrink-0 w-full sm:w-[48%] md:w-[250px]" data-name="Links">
      <Container2 />
      <Container6 />
      <Container8 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <LinkVariant />
    </div>
  );
}

function LinkVariant() {
  return (
    <a href="#palestrantes" className="relative shrink-0 w-full block group" data-name="Link - Variant 1">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-center md:justify-start pr-[8px] py-[8px] relative w-full group-hover:text-[#ef7d25] transition-colors">
          <Palestrantes />
        </div>
      </div>
    </a>
  );
}

function Palestrantes() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Palestrantes">
      <Container3 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-dm-sans font-normal justify-center leading-[0] relative shrink-0 text-[#4c4d4f] text-[13.3px] tracking-[0.14px] whitespace-normal md:whitespace-nowrap text-center md:text-left" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[21px]">PALESTRANTES</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <LinkVariant1 />
    </div>
  );
}

function LinkVariant1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link - Variant 1">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-center md:justify-start pr-[8px] py-[8px] relative w-full">
          <Palestrantes1 />
        </div>
      </div>
    </div>
  );
}

function Palestrantes1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Palestrantes">
      <Container5 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-dm-sans font-normal justify-center leading-[0] relative shrink-0 text-[#4c4d4f] text-[12.9px] tracking-[0.14px] whitespace-normal md:whitespace-nowrap text-center md:text-left" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[21px]">TRILHAS DE CONTEÚDO</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <LinkVariant2 />
    </div>
  );
}

function LinkVariant2() {
  return (
    <a href="#" className="relative shrink-0 w-full block group" data-name="Link - Variant 1">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-center md:justify-start pr-[8px] py-[8px] relative w-full group-hover:text-[#ef7d25] transition-colors">
          <Palestrantes2 />
        </div>
      </div>
    </a>
  );
}

function Palestrantes2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Palestrantes">
      <Container7 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-dm-sans font-normal justify-center leading-[0] relative shrink-0 text-[#4c4d4f] text-[13.3px] tracking-[0.14px] whitespace-normal md:whitespace-nowrap text-center md:text-left" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[21px]">PROGRAMAÇÃO</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <LinkVariant3 />
    </div>
  );
}

function LinkVariant3() {
  return (
    <a href="https://wa.me/5511915983957" target="_blank" rel="noopener noreferrer" className="relative shrink-0 w-full block group" data-name="Link - Variant 1">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-center md:justify-start pr-[8px] py-[8px] relative w-full group-hover:text-[#ef7d25] transition-colors">
          <Palestrantes3 />
        </div>
      </div>
    </a>
  );
}

function Palestrantes3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Palestrantes">
      <Container9 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-dm-sans font-normal justify-center leading-[0] relative shrink-0 text-[#4c4d4f] text-[12.8px] tracking-[0.14px] whitespace-normal md:whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[21px]">TIRE SUAS DÚVIDAS</p>
      </div>
    </div>
  );
}

// Coluna 2: PATROCÍNIO, INGRESSOS, LOCALIZAÇÃO, CONTATO
function Frame() {
  return (
    <div className="content-stretch flex flex-col items-center md:items-start justify-center relative shrink-0 w-full sm:w-[48%] md:w-[250px]">
      <Container10 />
      <Container12 />
      <Container14 />
      <Container16 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[100px]" data-name="Container">
      <LinkVariant4 />
    </div>
  );
}

function LinkVariant4() {
  return (
    <a href="https://wa.me/5511915983957?text=Quero%20patrocinar%20o%20Festival%20Parental%202026" target="_blank" rel="noopener noreferrer" className="relative shrink-0 w-full block group" data-name="Link - Variant 1">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-center md:justify-start pr-[8px] py-[8px] relative w-full group-hover:text-[#ef7d25] transition-colors">
          <Palestrantes4 />
        </div>
      </div>
    </a>
  );
}

function Palestrantes4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Palestrantes">
      <Container11 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-dm-sans font-normal justify-center leading-[0] relative shrink-0 text-[#4c4d4f] text-[12.9px] tracking-[0.14px] whitespace-normal md:whitespace-nowrap text-center md:text-left" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[21px]">PATROCÍNIO</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[100px]" data-name="Container">
      <LinkVariant5 />
    </div>
  );
}

function LinkVariant5() {
  return (
    <a href="#ingressos" className="relative shrink-0 w-full block group" data-name="Link - Variant 1">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-center md:justify-start pr-[8px] py-[8px] relative w-full group-hover:text-[#ef7d25] transition-colors">
          <Palestrantes5 />
        </div>
      </div>
    </a>
  );
}

function Palestrantes5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Palestrantes">
      <Container13 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-dm-sans font-normal justify-center leading-[0] relative shrink-0 text-[#4c4d4f] text-[13.1px] tracking-[0.14px] whitespace-normal md:whitespace-nowrap text-center md:text-left" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[21px]">INGRESSOS</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[100px]" data-name="Container">
      <LinkVariant6 />
    </div>
  );
}

function LinkVariant6() {
  return (
    <a href="#localizacao" className="relative shrink-0 w-full block group" data-name="Link - Variant 1">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-center md:justify-start pr-[8px] py-[8px] relative w-full group-hover:text-[#ef7d25] transition-colors">
          <Palestrantes6 />
        </div>
      </div>
    </a>
  );
}

function Palestrantes6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Palestrantes">
      <Container15 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-dm-sans font-normal justify-center leading-[0] relative shrink-0 text-[#4c4d4f] text-[13.3px] tracking-[0.14px] whitespace-normal md:whitespace-nowrap text-center md:text-left" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[21px]">LOCALIZAÇÃO</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[100px]" data-name="Container">
      <LinkVariant7 />
    </div>
  );
}

function LinkVariant7() {
  return (
    <a href="https://wa.me/5511915983957" target="_blank" rel="noopener noreferrer" className="relative shrink-0 w-full block group" data-name="Link - Variant 1">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-center md:justify-start pr-[8px] py-[8px] relative w-full group-hover:text-[#ef7d25] transition-colors">
          <Palestrantes7 />
        </div>
      </div>
    </a>
  );
}

function Palestrantes7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Palestrantes">
      <Container17 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-dm-sans font-normal justify-center leading-[0] relative shrink-0 text-[#4c4d4f] text-[13.1px] tracking-[0.14px] whitespace-normal md:whitespace-nowrap text-center md:text-left" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[21px]">CONTATO</p>
      </div>
    </div>
  );
}

// Coluna 3: TERMOS, PRIVACIDADE, IMPRENSA
function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-center md:items-start justify-center relative shrink-0 w-full sm:w-[48%] md:w-[250px]">
      <Container18 />
      <Container20 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <LinkVariant8 />
    </div>
  );
}

function LinkVariant8() {
  return (
    <a href="#" className="relative shrink-0 w-full block group" data-name="Link - Variant 1">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-center md:justify-start pr-[8px] py-[8px] relative w-full group-hover:text-[#ef7d25] transition-colors">
          <Palestrantes8 />
        </div>
      </div>
    </a>
  );
}

function Palestrantes8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Palestrantes">
      <Container19 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-dm-sans font-normal justify-center leading-[0] relative shrink-0 text-[#4c4d4f] text-[12.8px] tracking-[0.14px] whitespace-normal md:whitespace-nowrap text-center md:text-left" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[21px]">TERMOS DE USO</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <LinkVariant9 />
    </div>
  );
}

function LinkVariant9() {
  return (
    <a href="#" className="relative shrink-0 w-full block group" data-name="Link - Variant 1">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-center md:justify-start pr-[8px] py-[8px] relative w-full group-hover:text-[#ef7d25] transition-colors">
          <Palestrantes9 />
        </div>
      </div>
    </a>
  );
}

function Palestrantes9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Palestrantes">
      <Container21 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-dm-sans font-normal justify-center leading-[0] relative shrink-0 text-[#4c4d4f] text-[12.8px] tracking-[0.14px] whitespace-normal md:whitespace-nowrap text-center md:text-left" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[21px]">POLÍTICA DE PRIVACIDADE</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <LinkVariant10 />
    </div>
  );
}

function LinkVariant10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link - Variant 1">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-center md:justify-start pr-[8px] py-[8px] relative w-full">
          <Palestrantes10 />
        </div>
      </div>
    </div>
  );
}

function Palestrantes10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Palestrantes">
      <Container23 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-dm-sans font-normal justify-center leading-[0] relative shrink-0 text-[#4c4d4f] text-[13px] tracking-[0.14px] whitespace-normal md:whitespace-nowrap text-center md:text-left" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[21px]">IMPRENSA</p>
      </div>
    </div>
  );
}

// Coluna 4: INSTAGRAM, LINKEDIN
function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-center md:items-start justify-center relative shrink-0 w-full sm:w-[48%] md:w-[100px]">
      <Container24 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[100px]" data-name="Container">
      <LinkVariant11 />
    </div>
  );
}

function LinkVariant11() {
  return (
    <a href="https://www.instagram.com/festivalparental/" target="_blank" rel="noopener noreferrer" className="relative shrink-0 w-full block group" data-name="Link - Variant 1">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-center md:justify-start pr-[8px] py-[8px] relative w-full group-hover:text-[#ef7d25] transition-colors">
          <Palestrantes11 />
        </div>
      </div>
    </a>
  );
}

function Palestrantes11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Palestrantes">
      <Container25 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-dm-sans font-normal justify-center leading-[0] relative shrink-0 text-[#4c4d4f] text-[12.9px] tracking-[0.14px] whitespace-normal md:whitespace-nowrap text-center md:text-left" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[21px]">INSTAGRAM</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[100px]" data-name="Container">
      <LinkVariant12 />
    </div>
  );
}

function LinkVariant12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link - Variant 1">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-center md:justify-start pr-[8px] py-[8px] relative w-full">
          <Palestrantes12 />
        </div>
      </div>
    </div>
  );
}

function Palestrantes12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Palestrantes">
      <Container27 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-dm-sans font-normal justify-center leading-[0] relative shrink-0 text-[#4c4d4f] text-[12.6px] tracking-[0.14px] whitespace-normal md:whitespace-nowrap text-center md:text-left" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[21px]">LINKEDIN</p>
      </div>
    </div>
  );
}

// Botão CTA "Garanta seu ingresso agora"
function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <LinkVariant13 />
    </div>
  );
}

function LinkVariant13() {
  return (
    <a href="#ingressos" className="bg-[#f7a73c] border-2 border-[#191919] relative rounded-[40px] shadow-[4px_4px_0px_0px_#191919] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#191919] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#191919] transition-all shrink-0 w-full cursor-pointer block" data-name="Link - Variant 1">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-4 md:px-[40px] py-[20px] md:py-[44px] relative w-full">
          <ComprarIngresso />
        </div>
      </div>
    </a>
  );
}

function ComprarIngresso() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Comprar Ingresso">
      <Container29 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-center md:items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-dm-sans font-bold justify-center leading-[0] relative shrink-0 text-[#191919] text-[24px] md:text-[32px] uppercase whitespace-normal md:whitespace-nowrap text-center md:text-left" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-tight md:leading-[24px]">Garanta seu INGRESSO agora</p>
      </div>
    </div>
  );
}

// Elementos decorativos no rodapé
function Group1() {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[15%] w-full md:w-[105%] h-auto pointer-events-none">
      <svg className="block w-full h-auto" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1280 126.54">
        <g id="Group 14">
          <path d={svgPaths.p2bed4a80} fill="var(--fill-0, #0B6FB5)" id="Vector" />
          <path d={svgPaths.p26d08bf0} fill="var(--fill-0, #0B6FB5)" id="Vector_2" />
          <path d={svgPaths.p22ef7200} fill="var(--fill-0, #0B6FB5)" id="Vector_3" />
          <path d={svgPaths.p2901cb20} fill="var(--fill-0, #0B6FB5)" id="Vector_4" />
          <path d={svgPaths.p3f31dd80} fill="var(--fill-0, #0B6FB5)" id="Vector_5" />
          <path d={svgPaths.p1826b5c0} fill="var(--fill-0, #0B6FB5)" id="Vector_6" />
          <path d={svgPaths.p30c54132} fill="var(--fill-0, #0B6FB5)" id="Vector_7" />
          <path d={svgPaths.p34990c00} fill="var(--fill-0, #0B6FB5)" id="Vector_8" />
          <path d={svgPaths.p27a2b400} fill="var(--fill-0, #EF7D25)" id="Vector_9" />
          <path d={svgPaths.p3ca9c900} fill="var(--fill-0, #EF7D25)" id="Vector_10" />
          <path d={svgPaths.p195ad880} fill="var(--fill-0, #EF7D25)" id="Vector_11" />
          <path d={svgPaths.p270be972} fill="var(--fill-0, #EF7D25)" id="Vector_12" />
          <path d={svgPaths.p185f3e00} fill="var(--fill-0, #EF7D25)" id="Vector_13" />
          <path d={svgPaths.pc89b80} fill="var(--fill-0, #EF7D25)" id="Vector_14" />
          <path d={svgPaths.p2b9e4300} fill="var(--fill-0, #EF7D25)" id="Vector_15" />
          <path d={svgPaths.p2cb4b380} fill="var(--fill-0, #EF7D25)" id="Vector_16" />
        </g>
      </svg>
    </div>
  );
}
