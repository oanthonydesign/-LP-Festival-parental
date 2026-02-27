// components/sections/Section14.tsx
// Seção 14: Patrocinadores, Marcas Apoiadoras e Escolas Apoiadoras

import svgPaths from "@/components/svg/svg-gsa6nirpqt";
import { imgGroup, imgGroup1, imgGroup2 } from "@/components/svg/svg-dk7ot";

export default function Section14() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Section - 14">
      <BrandSection />
      <BrandSection1 />
      <BrandSection2 />
    </div>
  );
}

// ==========================================
// SEÇÃO 1: PATROCINADORES (Verde #79c3ab)
// ==========================================

function BrandSection() {
  return (
    <div className="bg-[#79c3ab] relative shrink-0 w-full" data-name="Brand Section">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[30px] py-[64px] relative w-full">
          <Container />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#191919] border-b-5 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-[1280px]" data-name="Container">
      <TagText />
      <BrandLogo />
    </div>
  );
}

function TagText() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[458px]" data-name="Tag Text">
      <ThanksToStayWithUs />
    </div>
  );
}

function ThanksToStayWithUs() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Thanks to stay with us">
      <Heading />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-sugar-peachy font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[46px] lg:text-[72px] whitespace-nowrap">
        <p className="leading-none">Patrocinadores</p>
      </div>
    </div>
  );
}

function BrandLogo() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip relative shrink-0 w-[564px]" data-name="Brand Logo">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full">
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0">
      <Container4 />
      <Container5 />
    </div>
  );
}

// Logo 1 (com máscara)
function Container1() {
  return (
    <div className="aspect-[170/39.65999984741211] content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Container">
      <DesktopFE5IpYx5DqOfTKygpNvg1NjduksSvg />
    </div>
  );
}

function DesktopFE5IpYx5DqOfTKygpNvg1NjduksSvg() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Desktop → fE5IpYx5DQOfTKygpNVG1Njduks.svg">
      <FE5IpYx5DqOfTKygpNvg1NjduksSvgFill />
    </div>
  );
}

function FE5IpYx5DqOfTKygpNvg1NjduksSvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[39.66px] items-center justify-center overflow-clip py-[4.172px] relative shrink-0 w-[170px]" data-name="fE5IpYx5DQOfTKygpNVG1Njduks.svg fill">
      <FE5IpYx5DqOfTKygpNvg1NjduksSvg />
    </div>
  );
}

function FE5IpYx5DqOfTKygpNvg1NjduksSvg() {
  return (
    <div className="h-[31.316px] overflow-clip relative shrink-0 w-[170px]" data-name="fE5IpYx5DQOfTKygpNVG1Njduks.svg">
      <div className="absolute inset-[0.5%_0.18%_11.61%_21.97%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 132.339 27.5221">
          <path d={svgPaths.p22fb9800} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <ClipPathGroup />
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[1.76%_81.93%_3%_0.53%]" data-name="Clip path group">
      <Group />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[1.76%_81.93%_3%_0.53%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[29.825px_29.825px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.8246 29.8246">
        <g id="Group">
          <path d={svgPaths.p157a9000} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

// Logo 2
function Container2() {
  return (
    <div className="content-stretch flex flex-col h-[36px] items-start justify-center relative shrink-0 w-[150px]" data-name="Container">
      <DesktopAkuNjyg5JEu1DRhMvkIoTenjbASvg />
    </div>
  );
}

function DesktopAkuNjyg5JEu1DRhMvkIoTenjbASvg() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative w-full" data-name="Desktop → akuNJYG5jEU1dRhMvkIoTenjbA.svg">
      <AkuNjyg5JEu1DRhMvkIoTenjbASvgFill />
    </div>
  );
}

function AkuNjyg5JEu1DRhMvkIoTenjbASvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[36px] items-center justify-center overflow-clip py-[2.511px] relative shrink-0 w-[150px]" data-name="akuNJYG5jEU1dRhMvkIoTenjbA.svg fill">
      <AkuNjyg5JEu1DRhMvkIoTenjbASvg />
    </div>
  );
}

function AkuNjyg5JEu1DRhMvkIoTenjbASvg() {
  return (
    <div className="h-[30.978px] relative shrink-0 w-[150px]" data-name="akuNJYG5jEU1dRhMvkIoTenjbA.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150 30.9783">
        <g id="akuNJYG5jEU1dRhMvkIoTenjbA.svg">
          <path d={svgPaths.p32576200} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

// Logo 3 (com máscara imgGroup1)
function Container3() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <DesktopJfsby3CSvAlAkLyUBexf98VDKvUSvg />
    </div>
  );
}

function DesktopJfsby3CSvAlAkLyUBexf98VDKvUSvg() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative w-full" data-name="Desktop → jfsby3cSVAlAkLyUBexf98vDKvU.svg">
      <Jfsby3CSvAlAkLyUBexf98VDKvUSvgFill />
    </div>
  );
}

function Jfsby3CSvAlAkLyUBexf98VDKvUSvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center overflow-clip py-[9.707px] relative shrink-0 w-[180px]" data-name="jfsby3cSVAlAkLyUBexf98vDKvU.svg fill">
      <Jfsby3CSvAlAkLyUBexf98VDKvUSvg />
    </div>
  );
}

function Jfsby3CSvAlAkLyUBexf98VDKvUSvg() {
  return (
    <div className="h-[36.585px] overflow-clip relative shrink-0 w-[180px]" data-name="jfsby3cSVAlAkLyUBexf98vDKvU.svg">
      <div className="absolute inset-[16.59%_0.62%_2.77%_21.27%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140.596 29.5024">
          <path d={svgPaths.p24924d90} fill="var(--fill-0, #001524)" id="Vector" />
        </svg>
      </div>
      <ClipPathGroup1 />
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-[3.92%_82.8%_12.08%_0.13%]" data-name="Clip path group">
      <Group1 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[3.92%_82.78%_11.96%_0.13%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0.001px] mask-size-[30.732px_30.732px]" data-name="Group" style={{ maskImage: `url('${imgGroup1}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.7668 30.7771">
        <g id="Group">
          <path d={svgPaths.p2afe3d00} fill="var(--fill-0, #001524)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

// Logo 4
function Container4() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-start justify-center relative shrink-0 w-[167px]" data-name="Container">
      <DesktopOppPaL7OWyXznQ5DZvl80Mr0USvg />
    </div>
  );
}

function DesktopOppPaL7OWyXznQ5DZvl80Mr0USvg() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative w-full" data-name="Desktop → oppPaL7oWYXznQ5DZvl80Mr0U.svg">
      <OppPaL7OWyXznQ5DZvl80Mr0USvgFill />
    </div>
  );
}

function OppPaL7OWyXznQ5DZvl80Mr0USvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-center justify-center overflow-clip px-[13.444px] relative shrink-0 w-[167px]" data-name="oppPaL7oWYXznQ5DZvl80Mr0U.svg fill">
      <OppPaL7OWyXznQ5DZvl80Mr0USvg />
    </div>
  );
}

function OppPaL7OWyXznQ5DZvl80Mr0USvg() {
  return (
    <div className="h-[39px] relative shrink-0 w-[140.111px]" data-name="oppPaL7oWYXznQ5DZvl80Mr0U.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140.111 39">
        <g id="oppPaL7oWYXznQ5DZvl80Mr0U.svg">
          <path d={svgPaths.p14dd8800} fill="var(--fill-0, #1B1C33)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

// Logo 5 (com máscara imgGroup2)
function Container5() {
  return (
    <div className="content-stretch flex flex-col h-[55px] items-start justify-center relative shrink-0 w-[178px]" data-name="Container">
      <DesktopD0D4OnY0IEbo6B0IhsyEh3Q6MSvg />
    </div>
  );
}

function DesktopD0D4OnY0IEbo6B0IhsyEh3Q6MSvg() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative w-full" data-name="Desktop → d0d4onY0iEbo6B0IhsyEH3q6M.svg">
      <D0D4OnY0IEbo6B0IhsyEh3Q6MSvgFill />
    </div>
  );
}

function D0D4OnY0IEbo6B0IhsyEh3Q6MSvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[55px] items-center justify-center overflow-clip py-[9.156px] relative shrink-0 w-[178px]" data-name="d0d4onY0iEbo6B0IhsyEH3q6M.svg fill">
      <D0D4OnY0IEbo6B0IhsyEh3Q6MSvg />
    </div>
  );
}

function D0D4OnY0IEbo6B0IhsyEh3Q6MSvg() {
  return (
    <div className="h-[36.687px] overflow-clip relative shrink-0 w-[178px]" data-name="d0d4onY0iEbo6B0IhsyEH3q6M.svg">
      <div className="absolute inset-[12.67%_0.46%_22.44%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 177.179 23.8058">
          <path d={svgPaths.p3aca91f0} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <ClipPathGroup2 />
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div className="absolute contents inset-[2.6%_42.87%_1.11%_37.28%]" data-name="Clip path group">
      <Group2 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[2.6%_42.87%_1.11%_37.28%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[35.328px_35.328px]" data-name="Group" style={{ maskImage: `url('${imgGroup2}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.3282 35.3282">
        <g id="Group">
          <path d={svgPaths.p7f9e00} fill="var(--fill-0, #020203)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

// ==========================================
// SEÇÃO 2: MARCAS APOIADORAS (Azul #74acde)
// ==========================================

function BrandSection1() {
  return (
    <div className="bg-[#74acde] relative shrink-0 w-full" data-name="Brand Section">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[30px] py-[64px] relative w-full">
          <Container6 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#191919] border-b-5 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-[1280px]" data-name="Container">
      <TagText1 />
      <BrandLogo1 />
    </div>
  );
}

function TagText1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[458px]" data-name="Tag Text">
      <ThanksToStayWithUs1 />
    </div>
  );
}

function ThanksToStayWithUs1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Thanks to stay with us">
      <Heading1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-sugar-peachy font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[46px] whitespace-nowrap">
        <p className="leading-none">Marcas apoiadoras</p>
      </div>
    </div>
  );
}

function BrandLogo1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip relative shrink-0 w-[564px]" data-name="Brand Logo">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full">
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0">
      <Container4 />
      <Container5 />
    </div>
  );
}

// ==========================================
// SEÇÃO 3: ESCOLAS APOIADORAS (Amarelo #f7a73c)
// ==========================================

function BrandSection2() {
  return (
    <div className="bg-[#f7a73c] relative shrink-0 w-full" data-name="Brand Section">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[30px] py-[64px] relative w-full">
          <Container12 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#191919] border-b-5 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-[1280px]" data-name="Container">
      <TagText2 />
      <BrandLogo2 />
    </div>
  );
}

function TagText2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tag Text">
      <ThanksToStayWithUs2 />
    </div>
  );
}

function ThanksToStayWithUs2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Thanks to stay with us">
      <Heading2 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0" data-name="Heading 5">
      <div className="flex flex-col font-sugar-peachy font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[46px] w-[384px]">
        <p className="leading-none whitespace-pre-wrap">Escolas apoiadoras</p>
      </div>
    </div>
  );
}

function BrandLogo2() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip relative shrink-0 w-[564px]" data-name="Brand Logo">
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full">
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0">
      <Container4 />
      <Container5 />
    </div>
  );
}
