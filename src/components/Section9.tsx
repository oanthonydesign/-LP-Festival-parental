"use client";

import svgPaths from "@/components/svg/svgPathsSection9";
import imgStoryImage from "../assets/images/festival-bg-9.png";
import imgCep1721 from "../assets/images/festival-audience-9.png";

function Warning() {
    return (
        <div className="relative shrink-0 size-[18px]" data-name="Warning">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                <g id="Warning">
                    <path clipRule="evenodd" d={svgPaths.p110c6e80} fill="var(--fill-0, #FFF6EF)" fillRule="evenodd" id="Shape" />
                    <g id="Shape_2">
                        <path d={svgPaths.p244df4f0} fill="var(--fill-0, #FFF6EF)" />
                        <path d={svgPaths.p3d6ac800} fill="var(--fill-0, #FFF6EF)" />
                    </g>
                </g>
            </svg>
        </div>
    );
}

function Hat() {
    return (
        <div className="bg-[#e12d3b] content-stretch flex gap-[6px] items-center justify-center px-[32px] py-[16px] relative rounded-[40px] shrink-0" data-name="HAT">
            <div aria-hidden="true" className="absolute border-2 border-[#191919] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[4px_4px_0px_0px_#191919]" />
            <Warning />
            <div className="flex flex-col font-dm-sans font-normal justify-center leading-[0] relative shrink-0 text-[#fff6ef] text-[14px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                <p className="leading-[normal]">importante</p>
            </div>
        </div>
    );
}

function Heading() {
    return (
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
            <div className="flex flex-col font-sugar-peachy justify-center leading-[0] not-italic relative shrink-0 text-[#e12d3b] text-[58px] w-full">
                <p className="leading-[0.8] whitespace-pre-wrap">O Festival é feito para adultos.</p>
            </div>
        </div>
    );
}

function Container1() {
    return (
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
            <Heading />
        </div>
    );
}

function Title() {
    return (
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Title">
            <Container1 />
        </div>
    );
}

function Text() {
    return (
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="text">
            <Title />
            <div className="flex flex-col font-dm-sans font-normal justify-center leading-[0] relative shrink-0 text-[#fff6ef] text-[24px] w-full max-w-[724px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                <p className="leading-[1.2] whitespace-pre-wrap">A programação tem como foco temas sensíveis e ambientes que não são adequados para crianças. Agora é sua vez de cuidar de você, para depois cuidar melhor de quem depende de você</p>
            </div>
        </div>
    );
}

function Group() {
    return (
        <div className="absolute inset-[16.67%_8.33%_0.77%_8.33%]" data-name="Group">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14.8605">
                <g id="Group">
                    <g id="Vector" />
                    <path clipRule="evenodd" d={svgPaths.p60d3f00} fill="var(--fill-0, #FFF6EF)" fillRule="evenodd" id="Vector_2" />
                </g>
            </svg>
        </div>
    );
}

function MingcuteTicketLine() {
    return (
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="mingcute:ticket-line">
            <Group />
        </div>
    );
}

function Container3() {
    return (
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
            <div className="flex flex-col font-dm-sans font-bold justify-center leading-[0] relative shrink-0 text-[#fff6ef] text-[14.1px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                <p className="leading-[24px]">Garanta seu INGRESSO agora</p>
            </div>
        </div>
    );
}

function ComprarIngresso() {
    return (
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Comprar Ingresso">
            <Container3 />
        </div>
    );
}

function LinkVariant() {
    return (
        <a href="#ingressos" className="bg-[#2260a1] relative rounded-[40px] shrink-0 w-full cursor-pointer block" data-name="Link - Variant 1">
            <div aria-hidden="true" className="absolute border-2 border-[#191919] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[4px_4px_0px_0px_#191919]" />
            <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[6px] items-center justify-center px-[40px] py-[16px] relative w-full">
                    <MingcuteTicketLine />
                    <ComprarIngresso />
                </div>
            </div>
        </a>
    );
}

function Container2() {
    return (
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full max-w-[332px]" data-name="Container">
            <LinkVariant />
        </div>
    );
}

function Content() {
    return (
        <div className="content-stretch flex flex-col gap-[46px] items-start justify-center relative shrink-0" data-name="Content">
            <Hat />
            <Text />
            <Container2 />
        </div>
    );
}

function StoryImage() {
    return (
        <div className="h-[329.371px] relative rounded-[25.095px] w-full max-w-[492.489px]" data-name="Story Image">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[25.095px]">
                <img alt="" className="absolute h-[144.37%] left-[-0.22%] max-w-none top-0 w-[100.44%]" src={typeof imgStoryImage === 'object' ? (imgStoryImage as any).src : imgStoryImage} />
            </div>
            <div className="overflow-clip relative rounded-[inherit] size-full">
                <div className="absolute flex h-[392.186px] items-center justify-center left-[-45.34px] top-[-47.48px] w-[585.457px]">
                    <div className="flex-none rotate-[-0.21deg]">
                        <div className="h-[390px] relative w-[584px]" data-name="CEP-172 1">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={typeof imgCep1721 === 'object' ? (imgCep1721 as any).src : imgCep1721} />
                        </div>
                    </div>
                </div>
            </div>
            <div aria-hidden="true" className="absolute border-[#191919] border-[2.091px] border-solid inset-0 pointer-events-none rounded-[25.095px] shadow-[4.182px_4.182px_0px_0px_#191919]" />
        </div>
    );
}

function ContainerMain() {
    return (
        <div className="content-stretch flex flex-col md:flex-row gap-[30px] items-center relative shrink-0 w-full max-w-[1280px] z-[2]" data-name="Container">
            <Content />
            <div className="flex h-[369.722px] items-center justify-center relative shrink-0 w-full max-w-[518.506px]">
                <div className="flex-none rotate-[-4.84deg]">
                    <StoryImage />
                </div>
            </div>
        </div>
    );
}

function Group1() {
    return (
        <div className="absolute h-[1050.706px] right-[-100px] top-[-186.21px] w-[809.051px] z-[1] pointer-events-none overflow-hidden">
            <div className="absolute inset-[-0.47%_-3.71%_-2.86%_-3.71%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 869.148 1085.69">
                    <g id="Group 18">
                        <path d={svgPaths.p2b7f140} id="Vector 11" stroke="var(--stroke-0, #EF7D25)" strokeWidth="60.0984" />
                        <path d={svgPaths.p2dbf5ec8} id="Vector 8" stroke="var(--stroke-0, #79C3AB)" strokeWidth="60.0984" />
                        <path d={svgPaths.p2c6e4880} id="Vector 12" stroke="var(--stroke-0, #2260A1)" strokeWidth="60.0984" />
                    </g>
                </svg>
            </div>
        </div>
    );
}

export default function Section9() {
    return (
        <div className="bg-[#f7a73c] relative w-full overflow-hidden" data-name="Section - 9">
            <div className="layout-container content-stretch flex flex-col isolate items-center justify-center pb-[96px] pt-[68px] px-[30px] relative w-full">
                <ContainerMain />
                <Group1 />
            </div>
            <div aria-hidden="true" className="absolute border-[#191919] border-b-4 border-solid border-t-4 inset-0 pointer-events-none" />
        </div>
    );
}
