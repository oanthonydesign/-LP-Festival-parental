# 📦 Guia de Exportação - Section 5

Este documento contém tudo que você precisa para implementar a Section 5 na sua IDE.

---

## 1. 🧩 COMPONENTE PRINCIPAL

Crie o arquivo `Section5.tsx` no seu projeto:

```tsx
import svgPaths from "./svg-hwvyp88bcy";

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center leading-[0] relative shrink-0 text-center w-full" data-name="text">
      <div className="flex flex-col font-['Sugar_Peachy:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#2260a1] text-[84px] w-[1102px]">
        <p className="leading-[0.8] whitespace-pre-wrap">Um evento sobre parentalidade como o Brasil nunca viu.</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#4c4d4f] text-[24px] w-[1148px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[1.1] whitespace-pre-wrap">Prepare-se pra viver quatro dias intensos de conexões, conteúdos e experiências. Um ambiente pensado pra integrar conhecimento técnico, prática de vida e afeto.Tudo isso num só lugar.</p>
      </div>
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

function Group() {
  return (
    <div className="absolute bottom-[29.74%] left-1/4 right-1/4 top-[30.77%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9998 15.7941">
        <g id="Group 13">
          <path d={svgPaths.p2e5eec00} fill="var(--fill-0, #191919)" id="Vector" />
          <path d={svgPaths.p3ee56d80} fill="var(--fill-0, #191919)" id="Vector_2" />
          <path d={svgPaths.p11c28a00} fill="var(--fill-0, #191919)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#2daa96] relative rounded-[8px] shrink-0 size-[40px]" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#191919] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[2px_2px_0px_0px_#191919]" />
      <Group />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191919] text-[24px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-none whitespace-pre-wrap">+40 palestrantes convidados</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
      <Heading3 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.605px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191919] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[1.1] whitespace-pre-wrap">Profissionais que são referência em saúde, educação e comportamento</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <Container />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[9.195px] items-center justify-center relative shrink-0 w-full" data-name="Text">
      <Heading />
      <Text2 />
    </div>
  );
}

function Component() {
  return (
    <div className="bg-[#2daa96] content-stretch flex flex-col gap-[46px] items-start p-[20px] relative rounded-[12px] shrink-0 w-[305px]" data-name="1">
      <div aria-hidden="true" className="absolute border-3 border-[#191919] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[4px_4px_0px_0px_#191919]" />
      <Frame />
      <Text1 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute bottom-[29.74%] left-1/4 right-1/4 top-[30.77%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9998 15.7941">
        <g id="Group 13">
          <path d={svgPaths.p2e5eec00} fill="var(--fill-0, #191919)" id="Vector" />
          <path d={svgPaths.p3ee56d80} fill="var(--fill-0, #191919)" id="Vector_2" />
          <path d={svgPaths.p11c28a00} fill="var(--fill-0, #191919)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#79c3ab] relative rounded-[8px] shrink-0 size-[40px]" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#191919] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[2px_2px_0px_0px_#191919]" />
      <Group1 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191919] text-[24px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-none whitespace-pre-wrap">+ 4.000 participantes de todo o Brasil</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
      <Heading4 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.605px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191919] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[1.1] whitespace-pre-wrap">Profissionais que são referência em saúde, educação e comportamento</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <Container1 />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col gap-[9.195px] items-center justify-center relative shrink-0 w-full" data-name="Text">
      <Heading1 />
      <Text4 />
    </div>
  );
}

function Component1() {
  return (
    <div className="bg-[#79c3ab] content-stretch flex flex-col gap-[46px] items-start p-[20px] relative rounded-[12px] shrink-0 w-[305px]" data-name="2">
      <div aria-hidden="true" className="absolute border-3 border-[#191919] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[4px_4px_0px_0px_#191919]" />
      <Frame1 />
      <Text3 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute bottom-[29.74%] left-1/4 right-1/4 top-[30.77%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9998 15.7941">
        <g id="Group 13">
          <path d={svgPaths.p2e5eec00} fill="var(--fill-0, #191919)" id="Vector" />
          <path d={svgPaths.p3ee56d80} fill="var(--fill-0, #191919)" id="Vector_2" />
          <path d={svgPaths.p11c28a00} fill="var(--fill-0, #191919)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#74acde] relative rounded-[8px] shrink-0 size-[40px]" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#191919] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[2px_2px_0px_0px_#191919]" />
      <Group2 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191919] text-[24px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-none whitespace-pre-wrap">Trilhas de conteúdo para públicos distintos</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
      <Heading5 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.605px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191919] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[1.1] whitespace-pre-wrap">Programação exclusiva para profissionais e famílias</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <Container2 />
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-col gap-[9.195px] items-center justify-center relative shrink-0 w-full" data-name="Text">
      <Heading2 />
      <Text6 />
    </div>
  );
}

function Component2() {
  return (
    <div className="bg-[#74acde] content-stretch flex flex-col gap-[46px] items-start p-[20px] relative rounded-[12px] shrink-0 w-[305px]" data-name="3">
      <div aria-hidden="true" className="absolute border-3 border-[#191919] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[4px_4px_0px_0px_#191919]" />
      <Frame2 />
      <Text5 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute bottom-[29.74%] left-1/4 right-1/4 top-[30.77%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9998 15.7941">
        <g id="Group 13">
          <path d={svgPaths.p2e5eec00} fill="var(--fill-0, #191919)" id="Vector" />
          <path d={svgPaths.p3ee56d80} fill="var(--fill-0, #191919)" id="Vector_2" />
          <path d={svgPaths.p11c28a00} fill="var(--fill-0, #191919)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#f7a73c] relative rounded-[8px] shrink-0 size-[40px]" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#191919] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[2px_2px_0px_0px_#191919]" />
      <Group3 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191919] text-[24px] w-[210px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-none whitespace-pre-wrap">Vivências e oficinas práticas</p>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
      <Heading7 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.605px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191919] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[1.1] whitespace-pre-wrap">Momentos de troca e aprendizado com o corpo e com o outro.</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <Container3 />
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-col gap-[9.195px] items-center justify-center relative shrink-0 w-full" data-name="Text">
      <Heading6 />
      <Text8 />
    </div>
  );
}

function Component3() {
  return (
    <div className="bg-[#f7a73c] content-stretch flex flex-col gap-[46px] items-start p-[20px] relative rounded-[12px] shrink-0 w-[305px]" data-name="4">
      <div aria-hidden="true" className="absolute border-3 border-[#191919] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[4px_4px_0px_0px_#191919]" />
      <Frame3 />
      <Text7 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute bottom-[29.74%] left-1/4 right-1/4 top-[30.77%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9998 15.7941">
        <g id="Group 13">
          <path d={svgPaths.p2e5eec00} fill="var(--fill-0, #191919)" id="Vector" />
          <path d={svgPaths.p3ee56d80} fill="var(--fill-0, #191919)" id="Vector_2" />
          <path d={svgPaths.p11c28a00} fill="var(--fill-0, #191919)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#f7a73c] relative rounded-[8px] shrink-0 size-[40px]" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#191919] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[2px_2px_0px_0px_#191919]" />
      <Group4 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191919] text-[24px] w-[210px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-none whitespace-pre-wrap">Feira de produtos e serviços</p>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
      <Heading9 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.605px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191919] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[1.1] whitespace-pre-wrap">Expositores e marcas alinhadas à parentalidade e bem-estar</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <Container4 />
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex flex-col gap-[9.195px] items-center justify-center relative shrink-0 w-full" data-name="Text">
      <Heading8 />
      <Text10 />
    </div>
  );
}

function Component4() {
  return (
    <div className="bg-[#f7a73c] content-stretch flex flex-col gap-[46px] items-start p-[20px] relative rounded-[12px] shrink-0 w-[305px]" data-name="5">
      <div aria-hidden="true" className="absolute border-3 border-[#191919] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[4px_4px_0px_0px_#191919]" />
      <Frame4 />
      <Text9 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute bottom-[29.74%] left-1/4 right-1/4 top-[30.77%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9998 15.7941">
        <g id="Group 13">
          <path d={svgPaths.p2e5eec00} fill="var(--fill-0, #191919)" id="Vector" />
          <path d={svgPaths.p3ee56d80} fill="var(--fill-0, #191919)" id="Vector_2" />
          <path d={svgPaths.p11c28a00} fill="var(--fill-0, #191919)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#74acde] relative rounded-[8px] shrink-0 size-[40px]" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#191919] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[2px_2px_0px_0px_#191919]" />
      <Group5 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191919] text-[24px] w-[233px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-none whitespace-pre-wrap">Espaços de cuidado e autorregulação</p>
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
      <Heading11 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.605px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191919] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[1.1] whitespace-pre-wrap">Ambientes pensados pra acolher mente e corpo</p>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <Container5 />
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex flex-col gap-[9.195px] items-center justify-center relative shrink-0 w-full" data-name="Text">
      <Heading10 />
      <Text12 />
    </div>
  );
}

function Component5() {
  return (
    <div className="bg-[#74acde] content-stretch flex flex-col gap-[46px] items-start p-[20px] relative rounded-[12px] shrink-0 w-[305px]" data-name="6">
      <div aria-hidden="true" className="absolute border-3 border-[#191919] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[4px_4px_0px_0px_#191919]" />
      <Frame5 />
      <Text11 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute bottom-[29.74%] left-1/4 right-1/4 top-[30.77%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9998 15.7941">
        <g id="Group 13">
          <path d={svgPaths.p2e5eec00} fill="var(--fill-0, #191919)" id="Vector" />
          <path d={svgPaths.p3ee56d80} fill="var(--fill-0, #191919)" id="Vector_2" />
          <path d={svgPaths.p11c28a00} fill="var(--fill-0, #191919)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#79c3ab] relative rounded-[8px] shrink-0 size-[40px]" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#191919] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[2px_2px_0px_0px_#191919]" />
      <Group6 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191919] text-[24px] w-[236px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-none whitespace-pre-wrap">Experiências culturais e artísticas</p>
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
      <Heading13 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.605px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191919] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[1.1] whitespace-pre-wrap">Apresentações que inspiram, conectam e emocionam</p>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <Container6 />
    </div>
  );
}

function Text13() {
  return (
    <div className="content-stretch flex flex-col gap-[9.195px] items-center justify-center relative shrink-0 w-full" data-name="Text">
      <Heading12 />
      <Text14 />
    </div>
  );
}

function Component6() {
  return (
    <div className="bg-[#79c3ab] content-stretch flex flex-col gap-[46px] items-start p-[20px] relative rounded-[12px] shrink-0 w-[305px]" data-name="7">
      <div aria-hidden="true" className="absolute border-3 border-[#191919] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[4px_4px_0px_0px_#191919]" />
      <Frame6 />
      <Text13 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute bottom-[29.74%] left-1/4 right-1/4 top-[30.77%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9998 15.7941">
        <g id="Group 13">
          <path d={svgPaths.p2e5eec00} fill="var(--fill-0, #191919)" id="Vector" />
          <path d={svgPaths.p3ee56d80} fill="var(--fill-0, #191919)" id="Vector_2" />
          <path d={svgPaths.p11c28a00} fill="var(--fill-0, #191919)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#2daa96] relative rounded-[8px] shrink-0 size-[40px]" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#191919] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[2px_2px_0px_0px_#191919]" />
      <Group7 />
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191919] text-[24px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-none whitespace-pre-wrap">Conecte-se com quem vive a parentalidade</p>
      </div>
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
      <Heading15 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.605px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191919] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[1.1] whitespace-pre-wrap">Gente que educa, cuida e transforma dentro e fora de casa</p>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <Container7 />
    </div>
  );
}

function Text15() {
  return (
    <div className="content-stretch flex flex-col gap-[9.195px] items-center justify-center relative shrink-0 w-full" data-name="Text">
      <Heading14 />
      <Text16 />
    </div>
  );
}

function Component7() {
  return (
    <div className="bg-[#2daa96] content-stretch flex flex-col gap-[46px] items-start p-[20px] relative rounded-[12px] shrink-0 w-[305px]" data-name="8">
      <div aria-hidden="true" className="absolute border-3 border-[#191919] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[4px_4px_0px_0px_#191919]" />
      <Frame7 />
      <Text15 />
    </div>
  );
}

function Cards() {
  return (
    <div className="content-start flex flex-wrap gap-[20px] items-start relative shrink-0 w-full" data-name="Cards">
      <Component />
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
      <Component6 />
      <Component7 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[86px] items-center relative shrink-0 w-[1280px] z-[2]" data-name="Content">
      <TextsTrilhas />
      <Cards />
    </div>
  );
}

function Grafismo() {
  return (
    <div className="absolute h-[642.418px] left-[-553px] top-[202.68px] w-[2638px] z-[1]" data-name="grafismo">
      <div className="absolute inset-[-3.89%_-0.23%_-2.33%_-0.69%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2662.21 682.422">
          <g id="grafismo">
            <path d={svgPaths.p264f9600} id="Vector 4" stroke="var(--stroke-0, #EF7D25)" strokeWidth="50" />
            <path d={svgPaths.p3b487900} id="Vector 5" stroke="var(--stroke-0, #2260A1)" strokeWidth="50" />
            <path d={svgPaths.p2edb8900} id="Vector 6" stroke="var(--stroke-0, #79C3AB)" strokeWidth="30" />
            <g id="Group 19">
              <path d={svgPaths.p2b18dff0} fill="var(--fill-0, #74ACDE)" id="Vector" stroke="var(--stroke-0, #191919)" strokeWidth="6" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function Section5() {
  return (
    <div className="bg-[#fff6ef] content-stretch flex flex-col gap-[10px] isolate items-start pb-[86px] pt-[46px] px-[320px] relative size-full" data-name="Section - 5">
      <Content />
      <Grafismo />
    </div>
  );
}
```

---

## 2. 📁 ARQUIVOS SVG

### Arquivo: `svg-hwvyp88bcy.ts`

Crie este arquivo no mesmo diretório do componente:

```typescript
export default {
  p11c28a00: "M9.86619 6.73029C9.86619 6.73029 12.0998 4.04853 13.4434 5.42423C15.9385 7.97922 9.86619 12.1402 9.86619 12.1402C9.86619 12.1402 3.81527 7.96672 6.30956 5.42423C7.66115 4.04585 9.86619 6.73029 9.86619 6.73029Z",
  p264f9600: "M18.2145 510.322C599.215 -107.678 889.715 432.322 691.215 584.822C434.129 782.331 170.715 112.822 507.215 31.8225C772.434 -32.0194 1092.98 371.206 1349.71 458.322C1934.71 656.822 2158.71 186.822 2606.21 373.322",
  p2b18dff0: "M2389.06 405.219C2387.54 405.335 2385.99 405.394 2384.43 405.394C2351.17 405.394 2324.21 378.401 2324.21 345.111C2324.21 311.821 2351.17 284.827 2384.43 284.827C2385.99 284.827 2387.54 284.885 2389.06 285.002C2384.2 276.305 2381.43 266.279 2381.43 255.605C2381.43 222.315 2408.39 195.322 2441.65 195.322C2462.52 195.322 2480.91 205.953 2491.71 222.099C2502.52 205.953 2520.91 195.322 2541.78 195.322C2575.04 195.322 2602 222.315 2602 255.605C2602 266.279 2599.23 276.305 2594.36 285.002C2595.89 284.885 2597.44 284.827 2599 284.827C2632.26 284.827 2659.21 311.821 2659.21 345.111C2659.21 378.401 2632.26 405.394 2599 405.394C2597.44 405.394 2595.89 405.334 2594.36 405.218C2599.23 413.915 2602 423.942 2602 434.616C2602 467.906 2575.04 494.899 2541.78 494.899C2520.91 494.899 2502.52 484.269 2491.71 468.123C2480.91 484.269 2462.52 494.899 2441.65 494.899C2408.39 494.899 2381.43 467.906 2381.43 434.616C2381.43 423.942 2384.2 413.916 2389.06 405.219Z",
  p2e5eec00: "M9.81947 15.7863C5.837 14.0044 -1.55928 9.1122 0.292245 3.954C1.58046 0.701787 4.94605 0.837482 7.50908 2.481C8.45895 3.08716 9.32847 3.84955 9.9266 4.80388C9.9507 4.84316 9.9382 4.89494 9.89892 4.91905C9.86856 4.93779 9.83018 4.93422 9.8034 4.9128C9.37667 4.57981 8.93031 4.29146 8.46966 4.03614C6.99398 3.22554 4.55146 2.28013 2.98115 3.14251C2.275 3.53888 1.85809 4.37894 1.71972 5.16455C1.38762 7.44904 3.56232 9.8737 5.063 11.4137C6.56814 12.9295 8.23665 14.29 9.91052 15.6381C9.94802 15.6684 9.95427 15.7238 9.92392 15.7613C9.89803 15.7934 9.85518 15.8023 9.81947 15.7863Z",
  p2edb8900: "M50.2145 556.641C631.215 -61.3588 921.715 478.641 723.215 631.141C466.129 828.65 202.715 159.141 539.215 78.1413C804.434 14.2995 1124.98 417.525 1381.71 504.641C1966.71 703.141 2190.71 233.14 2638.21 419.64",
  p3b487900: "M36.2145 532.322C617.215 -85.6776 907.715 454.322 709.215 606.822C452.129 804.331 188.715 134.822 525.215 53.8225C790.434 -10.0194 1110.98 393.206 1367.71 480.322C1952.71 678.822 2176.71 208.822 2624.21 395.322",
  p3ee56d80: "M9.78995 4.80476C11.313 1.98373 15.0222 -1.68182 18.2754 0.849068C19.4975 1.82929 20.0938 3.00591 19.9876 4.58782C19.7716 7.08122 17.9361 9.27377 16.2489 10.9744C14.3473 12.8384 12.1923 14.4177 9.91672 15.7809C9.87565 15.805 9.82299 15.7916 9.79799 15.7505C9.77746 15.7157 9.7837 15.672 9.81138 15.6452C10.6425 14.8149 11.4861 14.0133 12.3048 13.1929C13.909 11.5779 15.4999 9.91653 16.7827 8.03466C17.5915 6.80001 18.461 5.29754 18.237 3.80401C18.1575 3.36478 17.9763 2.97912 17.7254 2.60418C16.3105 0.626779 14.2179 1.51326 12.544 2.67292C11.6227 3.31568 10.7559 4.08432 9.93814 4.91278C9.86851 4.98955 9.73728 4.89849 9.78906 4.80476H9.78995Z",
}
```

---

## 3. 🔤 FONTES DO GOOGLE FONTS

### Links de Importação

Adicione estas linhas no `<head>` do seu HTML ou no topo do seu CSS:

```html
<!-- Sugar Peachy -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Sugar+Peachy&display=swap" rel="stylesheet">

<!-- DM Sans -->
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet">
```

### Ou via @import no CSS:

```css
@import url('https://fonts.googleapis.com/css2?family=Sugar+Peachy&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');
```

### Fontes Utilizadas:

1. **Sugar Peachy** - Usado no título principal
2. **DM Sans** - Usado em todo o resto do texto (descrições, cards)

---

## 4. 🎨 CORES

### Paleta Completa

| Nome | Hex Code | Uso |
|------|----------|-----|
| **Background Principal** | `#fff6ef` | Fundo da seção |
| **Título Azul** | `#2260a1` | Título principal "Um evento sobre..." |
| **Texto Cinza** | `#4c4d4f` | Descrição secundária |
| **Preto** | `#191919` | Bordas, ícones, textos dos cards |
| **Verde Escuro** | `#2daa96` | Cards 1 e 8 |
| **Verde Claro** | `#79c3ab` | Cards 2 e 7, linha gráfica |
| **Azul Claro** | `#74acde` | Cards 3 e 6, nuvem gráfica |
| **Laranja** | `#f7a73c` | Cards 4 e 5 |
| **Azul Gráfico** | `#2260A1` | Linha curva no grafismo |
| **Laranja Gráfico** | `#EF7D25` | Linha curva no grafismo |

---

## 5. 📋 INSTRUÇÕES PARA IDE

### Estrutura de Pastas Sugerida:

```
src/
├── components/
│   └── Section5.tsx          ← Cole o código do componente aqui
├── assets/
│   └── svg-hwvyp88bcy.ts     ← Cole o código dos SVGs aqui
└── App.tsx                    ← Importe o componente aqui
```

### Passo a Passo:

#### 1. Instale o Tailwind CSS (se ainda não tiver)

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

#### 2. Configure o Tailwind

No arquivo `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '3': '3px',
      }
    },
  },
  plugins: [],
}
```

#### 3. Adicione o CSS do Tailwind

No arquivo `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### 4. Adicione as Fontes

No arquivo `index.html`, dentro do `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Sugar+Peachy&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet">
```

#### 5. Crie os Arquivos

**Arquivo: `src/assets/svg-hwvyp88bcy.ts`**
- Cole o código completo da seção **2. ARQUIVOS SVG**

**Arquivo: `src/components/Section5.tsx`**
- Cole o código completo da seção **1. COMPONENTE PRINCIPAL**
- **IMPORTANTE:** Ajuste o caminho de importação do SVG na primeira linha:
  ```tsx
  import svgPaths from "../assets/svg-hwvyp88bcy";
  ```

#### 6. Importe no App.tsx

```tsx
import Section5 from './components/Section5'

function App() {
  return (
    <div className="min-h-screen">
      <Section5 />
    </div>
  )
}

export default App
```

#### 7. Execute o Projeto

```bash
npm run dev
```

---

## 6. ✅ CHECKLIST

### Instalação:
- [ ] Tailwind CSS instalado e configurado
- [ ] Configuração `tailwind.config.js` atualizada com `borderWidth: { '3': '3px' }`
- [ ] CSS do Tailwind importado no `index.css`

### Fontes:
- [ ] Link do Google Fonts para **Sugar Peachy** adicionado no `<head>`
- [ ] Link do Google Fonts para **DM Sans** adicionado no `<head>`

### Arquivos:
- [ ] Arquivo `svg-hwvyp88bcy.ts` criado na pasta `assets/`
- [ ] Arquivo `Section5.tsx` criado na pasta `components/`
- [ ] Caminho de importação do SVG ajustado corretamente
- [ ] Componente importado no `App.tsx`

### Verificação Visual:
- [ ] Título grande azul com fonte Sugar Peachy aparecendo
- [ ] 8 cards coloridos visíveis
- [ ] Ícones (corações) visíveis dentro dos cards
- [ ] Bordas pretas nos cards
- [ ] Sombras nos cards
- [ ] Grafismo (linhas curvas) ao fundo
- [ ] Layout responsivo funcionando

### Troubleshooting:
- [ ] Se as fontes não aparecerem, verifique o DevTools → Network
- [ ] Se os SVGs não aparecerem, verifique o caminho de importação
- [ ] Se o Tailwind não funcionar, verifique se o `content` no config está correto
- [ ] Se houver erro de importação, verifique a extensão `.ts` do arquivo SVG

---

## 🎉 Pronto!

Você agora tem tudo que precisa para implementar a Section 5 na sua IDE. Se encontrar algum problema, verifique:

1. Os caminhos de importação estão corretos?
2. As fontes estão carregando no DevTools?
3. O Tailwind está compilando corretamente?

**Dica:** Use o DevTools do navegador (F12) para debugar problemas de CSS ou fontes que não carregam.
