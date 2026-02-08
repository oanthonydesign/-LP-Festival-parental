"use client";

import svgPaths from "@/components/svg/svg-hwvyp88bcy";

function Text() {
    return (
        <div className="content-stretch flex flex-col gap-[24px] items-center leading-[0] relative shrink-0 text-center w-full" data-name="text">
            <div className="flex flex-col font-sugar-peachy justify-center not-italic relative shrink-0 text-[#2260a1] text-[clamp(40px,8vw,84px)] w-full max-w-[1102px]">
                <p className="leading-[0.8] whitespace-pre-wrap">Um evento sobre parentalidade como o Brasil nunca viu.</p>
            </div>
            <div className="flex flex-col font-dm-sans font-normal justify-center relative shrink-0 text-[#4c4d4f] text-[clamp(18px,4vw,24px)] w-full max-w-[1148px]" style={{ fontVariationSettings: "'opsz' 14" }}>
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
        <div className="bg-[#2daa96] relative rounded-[8px] shrink-0 size-[40px] flex items-center justify-center p-2" data-name="Frame">
            <div aria-hidden="true" className="absolute border border-[#191919] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[2px_2px_0px_0px_#191919]" />
            <img src="/images/icon_01.svg" alt="Icon" className="w-full h-full object-contain relative z-10" loading="lazy" />
        </div>
    );
}

function Heading3() {
    return (
        <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Heading 3">
            <div className="flex flex-col font-dm-sans font-normal justify-center leading-[0] relative shrink-0 text-[#191919] text-[24px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                <p className="leading-none whitespace-pre-wrap">+50 palestrantes convidados</p>
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
            <div className="flex flex-col font-dm-sans font-normal justify-center leading-[0] relative shrink-0 text-[#191919] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
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
        <div className="bg-[#2daa96] content-stretch flex flex-col gap-[46px] items-start p-[20px] relative rounded-[12px] shrink-0 w-full" data-name="1">
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
        <div className="bg-[#79c3ab] relative rounded-[8px] shrink-0 size-[40px] flex items-center justify-center p-2" data-name="Frame">
            <div aria-hidden="true" className="absolute border border-[#191919] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[2px_2px_0px_0px_#191919]" />
            <img src="/images/icon_02.svg" alt="Icon" className="w-full h-full object-contain relative z-10" loading="lazy" />
        </div>
    );
}

function Heading4() {
    return (
        <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Heading 3">
            <div className="flex flex-col font-dm-sans font-normal justify-center leading-[0] relative shrink-0 text-[#191919] text-[24px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
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
            <div className="flex flex-col font-dm-sans font-normal justify-center leading-[0] relative shrink-0 text-[#191919] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
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
        <div className="bg-[#79c3ab] content-stretch flex flex-col gap-[46px] items-start p-[20px] relative rounded-[12px] shrink-0 w-full" data-name="2">
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
        <div className="bg-[#74acde] relative rounded-[8px] shrink-0 size-[40px] flex items-center justify-center p-2" data-name="Frame">
            <div aria-hidden="true" className="absolute border border-[#191919] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[2px_2px_0px_0px_#191919]" />
            <img src="/images/icon_03.svg" alt="Icon" className="w-full h-full object-contain relative z-10" loading="lazy" />
        </div>
    );
}

function Heading5() {
    return (
        <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Heading 3">
            <div className="flex flex-col font-dm-sans font-normal justify-center leading-[0] relative shrink-0 text-[#191919] text-[24px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
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
            <div className="flex flex-col font-dm-sans font-normal justify-center leading-[0] relative shrink-0 text-[#191919] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
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
        <div className="bg-[#74acde] content-stretch flex flex-col gap-[46px] items-start p-[20px] relative rounded-[12px] shrink-0 w-full" data-name="3">
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
        <div className="bg-[#f7a73c] relative rounded-[8px] shrink-0 size-[40px] flex items-center justify-center p-2" data-name="Frame">
            <div aria-hidden="true" className="absolute border border-[#191919] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[2px_2px_0px_0px_#191919]" />
            <img src="/images/icon_04.svg" alt="Icon" className="w-full h-full object-contain relative z-10" loading="lazy" />
        </div>
    );
}

function Heading7() {
    return (
        <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Heading 3">
            <div className="flex flex-col font-dm-sans font-normal justify-center leading-[0] relative shrink-0 text-[#191919] text-[24px] w-[210px]" style={{ fontVariationSettings: "'opsz' 14" }}>
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
            <div className="flex flex-col font-dm-sans font-normal justify-center leading-[0] relative shrink-0 text-[#191919] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
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
        <div className="bg-[#f7a73c] content-stretch flex flex-col gap-[46px] items-start p-[20px] relative rounded-[12px] shrink-0 w-full" data-name="4">
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
        <div className="bg-[#f7a73c] relative rounded-[8px] shrink-0 size-[40px] flex items-center justify-center p-2" data-name="Frame">
            <div aria-hidden="true" className="absolute border border-[#191919] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[2px_2px_0px_0px_#191919]" />
            <img src="/images/icon_05.svg" alt="Icon" className="w-full h-full object-contain relative z-10" loading="lazy" />
        </div>
    );
}

function Heading9() {
    return (
        <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Heading 3">
            <div className="flex flex-col font-dm-sans font-normal justify-center leading-[0] relative shrink-0 text-[#191919] text-[24px] w-[210px]" style={{ fontVariationSettings: "'opsz' 14" }}>
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
            <div className="flex flex-col font-dm-sans font-normal justify-center leading-[0] relative shrink-0 text-[#191919] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
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
        <div className="bg-[#f7a73c] content-stretch flex flex-col gap-[46px] items-start p-[20px] relative rounded-[12px] shrink-0 w-full" data-name="5">
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
        <div className="bg-[#74acde] relative rounded-[8px] shrink-0 size-[40px] flex items-center justify-center p-2" data-name="Frame">
            <div aria-hidden="true" className="absolute border border-[#191919] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[2px_2px_0px_0px_#191919]" />
            <img src="/images/icon_06.svg" alt="Icon" className="w-full h-full object-contain relative z-10" loading="lazy" />
        </div>
    );
}

function Heading11() {
    return (
        <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Heading 3">
            <div className="flex flex-col font-dm-sans font-normal justify-center leading-[0] relative shrink-0 text-[#191919] text-[24px] w-[233px]" style={{ fontVariationSettings: "'opsz' 14" }}>
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
            <div className="flex flex-col font-dm-sans font-normal justify-center leading-[0] relative shrink-0 text-[#191919] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
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
        <div className="bg-[#74acde] content-stretch flex flex-col gap-[46px] items-start p-[20px] relative rounded-[12px] shrink-0 w-full" data-name="6">
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
        <div className="bg-[#79c3ab] relative rounded-[8px] shrink-0 size-[40px] flex items-center justify-center p-2" data-name="Frame">
            <div aria-hidden="true" className="absolute border border-[#191919] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[2px_2px_0px_0px_#191919]" />
            <img src="/images/icon_07.svg" alt="Icon" className="w-full h-full object-contain relative z-10" loading="lazy" />
        </div>
    );
}

function Heading13() {
    return (
        <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Heading 3">
            <div className="flex flex-col font-dm-sans font-normal justify-center leading-[0] relative shrink-0 text-[#191919] text-[24px] w-[236px]" style={{ fontVariationSettings: "'opsz' 14" }}>
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
            <div className="flex flex-col font-dm-sans font-normal justify-center leading-[0] relative shrink-0 text-[#191919] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
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
        <div className="bg-[#79c3ab] content-stretch flex flex-col gap-[46px] items-start p-[20px] relative rounded-[12px] shrink-0 w-full" data-name="7">
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
        <div className="bg-[#2daa96] relative rounded-[8px] shrink-0 size-[40px] flex items-center justify-center p-2" data-name="Frame">
            <div aria-hidden="true" className="absolute border border-[#191919] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[2px_2px_0px_0px_#191919]" />
            <img src="/images/icon_08.svg" alt="Icon" className="w-full h-full object-contain relative z-10" loading="lazy" />
        </div>
    );
}

function Heading15() {
    return (
        <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Heading 3">
            <div className="flex flex-col font-dm-sans font-normal justify-center leading-[0] relative shrink-0 text-[#191919] text-[24px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
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
            <div className="flex flex-col font-dm-sans font-normal justify-center leading-[0] relative shrink-0 text-[#191919] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
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
        <div className="bg-[#2daa96] content-stretch flex flex-col gap-[46px] items-start p-[20px] relative rounded-[12px] shrink-0 w-full" data-name="8">
            <div aria-hidden="true" className="absolute border-3 border-[#191919] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[4px_4px_0px_0px_#191919]" />
            <Frame7 />
            <Text15 />
        </div>
    );
}

function Cards() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] relative shrink-0 w-full max-w-[1280px]" data-name="Cards">
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
        <div className="flex flex-col gap-[86px] items-center relative shrink-0 w-full max-w-[1280px] z-[2]" data-name="Content">
            <TextsTrilhas />
            <Cards />
        </div>
    );
}

function Grafismo() {
    return (
        <div
            className="absolute top-[200px] left-1/4 ml-[-1200px] w-[2662px] h-[682px] z-[1] pointer-events-none select-none overflow-visible"
            data-name="grafismo_nuvem"
        >
            <svg
                className="block w-full h-full"
                fill="none"
                viewBox="0 0 2662.21 682.422"
                preserveAspectRatio="xMidYMid meet"
            >
                <g id="grafismo">
                    <path d={svgPaths.p264f9600} id="Vector 4" stroke="#EF7D25" strokeWidth="50" />
                    <path d={svgPaths.p3b487900} id="Vector 5" stroke="#2260A1" strokeWidth="50" />
                    <path d={svgPaths.p2edb8900} id="Vector 6" stroke="#79C3AB" strokeWidth="30" />
                    <g id="Group 19">
                        <path d={svgPaths.p2b18dff0} fill="#74ACDE" id="Vector" stroke="#191919" strokeWidth="6" />
                    </g>
                </g>
            </svg>
        </div>
    );
}

export default function Section5() {
    return (
        <section className="bg-[#fff6ef] w-full overflow-hidden flex flex-col items-center pb-[120px] pt-[80px] relative isolate" data-name="Section - 5" id="atracoes">
            <div className="layout-container relative flex flex-col items-center">
                <Content />
            </div>
            <Grafismo />
        </section>
    );
}
