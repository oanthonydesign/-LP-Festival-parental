"use client";

import svgPaths from "@/components/svg/svg-jj8ggrv19k";
const imgImg90811 = "https://placehold.co/600x400/png?text=Festival+1";
const imgCep2921 = "https://placehold.co/600x400/png?text=Festival+2";
const imgImg54721 = "https://placehold.co/600x400/png?text=Festival+3";
const imgStoryImage = "https://placehold.co/600x400/png?text=Festival+4";
const imgImg91501 = "https://placehold.co/600x400/png?text=Festival+5";

function Group() {
    return (
        <div className="absolute inset-[30.9%_-20.45%_-13.53%_-38.28%]">
            <div className="absolute inset-[-4.04%_-1.25%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2082.51 802.847">
                    <g id="Group 20">
                        <path d={svgPaths.p11ca86c0} id="Vector" stroke="#2260A1" strokeMiterlimit="10" strokeWidth="60" />
                        <path d={svgPaths.p3e263100} id="Vector_2" stroke="#F7A73C" strokeMiterlimit="10" strokeWidth="60" />
                        <path d={svgPaths.p33700700} id="Vector_3" stroke="#2DAA96" strokeMiterlimit="10" strokeWidth="60" />
                    </g>
                </svg>
            </div>
        </div>
    );
}

function StoryImage() {
    return (
        <div className="bg-white border-[#191919] border-[2.091px] border-solid h-[329.371px] overflow-clip relative rounded-[25.095px] shadow-[4.182px_4.182px_0px_0px_#191919] w-[492.489px]" data-name="Story Image">
            <div className="absolute flex h-[454.775px] items-center justify-center left-[-96.92px] top-[-64.66px] w-[681.434px]">
                <div className="flex-none rotate-[0.06deg]">
                    <div className="h-[454.064px] relative w-[680.96px]" data-name="IMG_9081 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg90811} />
                    </div>
                </div>
            </div>
        </div>
    );
}

function StoryImage1() {
    return (
        <div className="bg-white border-[#191919] border-[2.091px] border-solid h-[329.371px] overflow-clip relative rounded-[25.095px] shadow-[4.182px_4.182px_0px_0px_#191919] w-[492.489px]" data-name="Story Image">
            <div className="absolute h-[349.103px] left-[-18.07px] top-[-11.82px] w-[523.655px]" data-name="CEP-292 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCep2921} />
            </div>
        </div>
    );
}

function StoryImage2() {
    return (
        <div className="bg-white border-[#191919] border-[2.091px] border-solid h-[329.371px] overflow-clip relative rounded-[25.095px] shadow-[4.182px_4.182px_0px_0px_#191919] w-[492.489px]" data-name="Story Image">
            <div className="absolute flex h-[401.034px] items-center justify-center left-[-72.73px] top-[-37.27px] w-[586.851px]">
                <div className="flex-none rotate-[-1.82deg]">
                    <div className="h-[383px] relative w-[575px]" data-name="IMG_5472 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg54721} />
                    </div>
                </div>
            </div>
        </div>
    );
}

function StoryImage3() {
    return (
        <div className="h-[329.371px] relative rounded-[25.095px] w-[492.489px]" data-name="Story Image">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[25.095px]">
                <img alt="" className="absolute h-[144.37%] left-[-0.22%] max-w-none top-0 w-[100.44%]" src={imgStoryImage} />
            </div>
            <div className="overflow-clip relative rounded-[inherit] size-full">
                <div className="absolute flex h-[354.116px] items-center justify-center left-[-13.14px] top-[-12.82px] w-[518.675px]">
                    <div className="flex-none rotate-[1.49deg]">
                        <div className="h-[341px] relative w-[510px]" data-name="IMG_9150 1">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg91501} />
                        </div>
                    </div>
                </div>
            </div>
            <div aria-hidden="true" className="absolute border-[#191919] border-[2.091px] border-solid inset-0 pointer-events-none rounded-[25.095px] shadow-[4.182px_4.182px_0px_0px_#191919]" />
        </div>
    );
}

function Banners() {
    return (
        <div className="absolute contents left-[-490px] top-[277.8px]" data-name="Banners">
            <Group />
            <div className="absolute flex h-[338.424px] items-center justify-center left-[-29.89px] top-[594.95px] w-[498.496px]">
                <div className="flex-none rotate-[-1.06deg]">
                    <StoryImage />
                </div>
            </div>
            <div className="absolute flex h-[389.794px] items-center justify-center left-[261.07px] top-[468.81px] w-[530.652px]">
                <div className="flex-none rotate-[7.37deg]">
                    <StoryImage1 />
                </div>
            </div>
            <div className="absolute flex h-[344.816px] items-center justify-center left-[499.63px] top-[667.99px] w-[502.681px]">
                <div className="flex-none rotate-[1.82deg]">
                    <StoryImage2 />
                </div>
            </div>
            <div className="absolute flex h-[369.722px] items-center justify-center left-[821.83px] top-[547.89px] w-[518.506px]">
                <div className="flex-none rotate-[-4.84deg]">
                    <StoryImage3 />
                </div>
            </div>
        </div>
    );
}

function Content() {
    return (
        <div className="content-stretch flex flex-col gap-[24px] items-center leading-[0] relative shrink-0 text-[#fff6ee] text-center w-full" data-name="Content">
            <div className="flex flex-col font-sugar-peachy justify-center not-italic relative shrink-0 text-[64px] max-w-[842px] w-full">
                <p className="leading-[0.8] whitespace-pre-wrap">A 7 Edições, responsável por decidir e mudar o futuro da Educação Parental no Brasil.</p>
            </div>
            <div className="flex flex-col font-dm-sans font-normal justify-center relative shrink-0 text-[18px] max-w-[842px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                <p className="leading-[1.1] whitespace-pre-wrap">O Festival Parental reúne profissionais da saúde, educação e comportamento, junto com pais, mães, cuidadores e famílias inteiras. São quatro dias de programação que misturam ciência, prática e experiências reais com o objetivo de transformar a forma como vivemos a parentalidade no Brasil.</p>
            </div>
            <div className="flex flex-col font-sugar-peachy justify-center not-italic relative shrink-0 text-[28px] w-full max-w-[842px]">
                <p className="leading-[0.9] whitespace-pre-wrap">Profissionais e famílias, lado a lado, com um objetivo em comum: transformar a educação de crianças e adolescentes no Brasil.</p>
            </div>
        </div>
    );
}

function Container() {
    return (
        <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[101.8px] w-full px-4" data-name="Container">
            <Content />
        </div>
    );
}

function CloseBarMac() {
    return (
        <div className="absolute h-[56px] left-0 top-0 w-full" data-name="close bar_mac">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 56">
                <g id="close bar_mac">
                    <path d={svgPaths.p3cb57f00} fill="#FFF6EE" />
                    <path d={svgPaths.p3cb57f00} stroke="#191919" strokeWidth="2" />
                    <circle cx="36" cy="27.7998" fill="#FC3F51" id="Ellipse 11" r="6" />
                    <circle cx="53" cy="27.7998" fill="#ECA031" id="Ellipse 12" r="6" />
                    <circle cx="70" cy="27.7998" fill="#1CB638" id="Ellipse 13" r="6" />
                </g>
            </svg>
        </div>
    );
}

function EventImage() {
    return (
        <div className="bg-[#ef7d25] h-[899px] relative rounded-[24px] shrink-0 w-full" data-name="Event Image">
            <div className="overflow-clip relative rounded-[inherit] size-full">
                <Banners />
                <Container />
                <CloseBarMac />
            </div>
            <div aria-hidden="true" className="absolute border-2 border-[#191919] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[7px_7px_0px_0px_#191919]" />
        </div>
    );
}

export default function Section7() {
    return (
        <section className="bg-[#fff6ee] w-full flex flex-col items-center py-[60px] relative isolate" data-name="Section - 7">
            <div className="layout-container relative flex flex-col items-center overflow-visible">
                <EventImage />
            </div>
        </section>
    );
}
