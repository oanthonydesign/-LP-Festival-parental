"use client";

import svgPaths from "@/components/svg/svg-j1aige7z56";
import imgGreenCard from "../../assets/images/green-card-image.png";
import imgBlueCard from "../../assets/images/blue-card-image.png";
import { imgChatGptImage26DeJanDe20261948541, imgChatGptImage26DeJanDe20262002121 } from "@/components/svg/svg-ph0rc";

function Frame() {
    return (
        <div className="content-stretch flex flex-col gap-[24px] items-center leading-[0] relative shrink-0 text-center w-full">
            <div className="flex flex-col font-sugar-peachy justify-center not-italic relative shrink-0 text-[#2260a1] text-[clamp(32px,6vw,68px)] w-full max-w-[1122px]">
                <p className="leading-[0.8] whitespace-pre-wrap">Esse evento é pra você que já entendeu a importância da parentalidade.</p>
            </div>
            <div className="flex flex-col font-dm-sans font-normal justify-center relative shrink-0 text-[#4c4d4f] text-[clamp(18px,4vw,24px)] w-full max-w-[928px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                <p className="leading-[1.1] whitespace-pre-wrap">Agora é hora de se conectar com quem leva isso a sério.</p>
            </div>
        </div>
    );
}

function CloseBarMac() {
    return (
        <div className="bg-[#fff6ee] h-[56px] relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="close bar_mac">
            <div className="overflow-clip relative rounded-[inherit] size-full">
                <div className="absolute left-[30px] size-[12px] top-[21.8px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                        <circle cx="6" cy="6" fill="var(--fill-0, #FC3F51)" r="6" />
                    </svg>
                </div>
                <div className="absolute left-[47px] size-[12px] top-[21.8px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                        <circle cx="6" cy="6" fill="var(--fill-0, #ECA031)" r="6" />
                    </svg>
                </div>
                <div className="absolute left-[64px] size-[12px] top-[21.8px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                        <circle cx="6" cy="6" fill="var(--fill-0, #1CB638)" r="6" />
                    </svg>
                </div>
            </div>
            <div aria-hidden="true" className="absolute border-2 border-[#191919] border-solid inset-0 pointer-events-none rounded-tl-[24px] rounded-tr-[24px] shadow-[7px_7px_0px_0px_#191919]" />
        </div>
    );
}

function Warning() {
    return (
        <div className="relative shrink-0 size-[18px]" data-name="Warning">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                <g id="Warning">
                    <path clipRule="evenodd" d={svgPaths.p110c6e80} fill="var(--fill-0, #191919)" fillRule="evenodd" id="Shape" />
                    <g id="Shape_2">
                        <path d={svgPaths.p244df4f0} fill="var(--fill-0, #191919)" />
                        <path d={svgPaths.p3d6ac800} fill="var(--fill-0, #191919)" />
                    </g>
                </g>
            </svg>
        </div>
    );
}

function Hat({ color, text }: { color: string; text: string }) {
    return (
        <div className={`bg-[${color}] content-stretch flex gap-[6px] items-center justify-center px-[32px] py-[16px] relative rounded-[40px] shrink-0`} style={{ backgroundColor: color }} data-name="HAT">
            <div aria-hidden="true" className="absolute border-2 border-[#191919] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[4px_4px_0px_0px_#191919]" />
            <Warning />
            <div className="flex flex-col font-dm-sans font-normal justify-center leading-[0] relative shrink-0 text-[#191919] text-[14px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                <p className="leading-[normal]">{text}</p>
            </div>
        </div>
    );
}

function Card({
    bgColor,
    badgeColor,
    badgeText,
    headingText,
    image,
    maskImage
}: {
    bgColor: string;
    badgeColor: string;
    badgeText: string;
    headingText: string;
    image: string;
    maskImage: string;
}) {
    return (
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
            <CloseBarMac />
            <div className={`relative h-[575px] rounded-bl-[16px] rounded-br-[16px] shrink-0 w-full`} style={{ backgroundColor: bgColor }} data-name="Container">
                <div aria-hidden="true" className="absolute border-[#191919] border-b-2 border-l-2 border-r-2 border-solid inset-0 pointer-events-none rounded-bl-[16px] rounded-br-[16px] shadow-[7px_7px_0px_0px_#191919]" />
                <div className="flex flex-col items-center size-full">
                    <div className="content-stretch flex flex-col gap-[46px] items-center p-[32px] relative size-full">
                        <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0">
                            <Hat color={badgeColor} text={badgeText} />
                            <div className="flex flex-col font-dm-sans font-semibold justify-center leading-tight relative shrink-0 text-[#191919] text-[clamp(24px,4vw,32px)] text-center w-full max-w-[458px]">
                                <p className="whitespace-pre-wrap">{headingText}</p>
                            </div>
                        </div>
                        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
                            <div
                                className="col-1 h-[400px] mask-alpha mask-intersect mask-no-clip mask-no-repeat relative row-1 w-full max-w-[500px]"
                                style={{
                                    maskImage: `url('${maskImage}')`,
                                    maskSize: 'contain',
                                    maskPosition: 'center',
                                    WebkitMaskImage: `url('${maskImage}')`,
                                    WebkitMaskSize: 'contain',
                                    WebkitMaskPosition: 'center'
                                }}
                            >
                                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={typeof image === 'object' ? (image as any).src : image} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Section8() {
    return (
        <section className="bg-[#fff6ef] w-full overflow-hidden flex flex-col items-center pb-[76px] pt-[106px] relative isolate" data-name="Section - 8">
            <div className="layout-container content-stretch flex flex-col gap-[64px] items-center justify-center relative w-full">
                <Frame />
                <div className="content-stretch flex flex-col md:flex-row gap-[32px] md:gap-[64px] items-start relative shrink-0 w-full max-w-[1280px]" data-name="para quem é">
                    <Card
                        bgColor="#2daa96"
                        badgeColor="#79c3ab"
                        badgeText="Para PROFISSIONAIS"
                        headingText="Que trabalham com famílias e lideram mudanças reais"
                        image={imgGreenCard}
                        maskImage={imgChatGptImage26DeJanDe20261948541}
                    />
                    <Card
                        bgColor="#2260a1"
                        badgeColor="#74acde"
                        badgeText="Para famílias"
                        headingText="Pais, mães, cuidadores conscientes e famílias que buscam repertório e apoio"
                        image={imgBlueCard}
                        maskImage={imgChatGptImage26DeJanDe20262002121}
                    />
                </div>
            </div>
        </section>
    );
}
