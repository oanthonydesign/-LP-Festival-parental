"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import svgPaths from "@/components/svg/svg-jj8ggrv19k";

gsap.registerPlugin(ScrollTrigger);

const imgImg90811 = "/images/banner 01.webp";
const imgCep2921 = "/images/banner 02.webp";
const imgImg54721 = "/images/banner 03.webp";
const imgStoryImage = "/images/banner 04.webp";
const imgImg91501 = "/images/banner 01.webp";

function Group() {
    return (
        <div className="absolute inset-[65%_-20%_-5%_-20%] lg:inset-[30.9%_-20.45%_-13.53%_-38.28%] pointer-events-none">
            <div className="absolute inset-[-4.04%_-1.25%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2082.51 802.847">
                    <g id="Group 20">
                        <path d={svgPaths.p11ca86c0} id="Vector" stroke="#2260A1" strokeMiterlimit="10" strokeWidth="60" />
                        <path d={svgPaths.p3e263100} id="Vector_2" stroke="#EF7D25" strokeMiterlimit="10" strokeWidth="60" />
                        <path d={svgPaths.p33700700} id="Vector_3" stroke="#928FC8" strokeMiterlimit="10" strokeWidth="60" />
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
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg90811} loading="lazy" />
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
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCep2921} loading="lazy" />
            </div>
        </div>
    );
}

function StoryImage2() {
    return (
        <div className="bg-white border-[#191919] border-[2.091px] border-solid h-auto aspect-[492/329] lg:h-[329.371px] overflow-clip relative rounded-[25.095px] shadow-[4.182px_4.182px_0px_0px_#191919] w-full lg:w-[492.489px]" data-name="Story Image">
            <div className="absolute flex h-[401.034px] items-center justify-center left-[-72.73px] top-[-37.27px] w-[586.851px]">
                <div className="flex-none rotate-[-1.82deg]">
                    <div className="h-[383px] relative w-[575px]" data-name="IMG_5472 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg54721} loading="lazy" />
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
                <img alt="" className="absolute h-[144.37%] left-[-0.22%] max-w-none top-0 w-[100.44%]" src={imgStoryImage} loading="lazy" />
            </div>
            <div className="overflow-clip relative rounded-[inherit] size-full">
                <div className="absolute flex h-[354.116px] items-center justify-center left-[-13.14px] top-[-12.82px] w-[518.675px]">
                    <div className="flex-none rotate-[1.49deg]">
                        <div className="h-[341px] relative w-[510px]" data-name="IMG_9150 1">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg91501} loading="lazy" />
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
        <div className="absolute inset-0" data-name="Banners">
            <Group />
            <div data-animate="section7-banner" className="absolute hidden lg:flex h-[338.424px] items-center justify-center left-[-29.89px] top-[594.95px] w-[498.496px]">
                <div className="flex-none rotate-[-1.06deg]">
                    <StoryImage />
                </div>
            </div>
            <div data-animate="section7-banner" className="absolute hidden lg:flex h-[389.794px] items-center justify-center left-[261.07px] top-[468.81px] w-[530.652px] z-30">
                <div className="flex-none rotate-[7.37deg]">
                    <StoryImage1 />
                </div>
            </div>
            <div data-animate="section7-banner" className="absolute flex h-auto lg:h-[344.816px] items-center justify-center left-0 right-0 mx-auto bottom-0 w-full lg:left-[499.63px] lg:right-auto lg:mx-0 lg:bottom-auto lg:top-[667.99px] lg:w-[502.681px] z-20">
                <div className="flex-none rotate-0 lg:rotate-[1.82deg] w-full">
                    <StoryImage2 />
                </div>
            </div>
            <div data-animate="section7-banner" className="absolute hidden lg:flex h-[369.722px] items-center justify-center left-[821.83px] top-[547.89px] w-[518.506px]">
                <div className="flex-none rotate-[-4.84deg]">
                    <StoryImage3 />
                </div>
            </div>
        </div>
    );
}

function Content() {
    return (
        <div className="content-stretch flex flex-col gap-[24px] items-center leading-[0] relative shrink-0 text-[#191919] text-center w-full" data-name="Content">
            <div className="flex flex-col font-sugar-peachy justify-center not-italic relative shrink-0 text-[32px] lg:text-[64px] max-w-[842px] w-full">
                <p className="leading-[0.8] whitespace-pre-wrap">Há 7 edições, responsável por decidir e mudar o futuro da Educação Parental no Brasil</p>
            </div>
            <div className="flex flex-col font-dm-sans font-normal justify-center relative shrink-0 text-[18px] max-w-[842px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                <p className="leading-[1.1] whitespace-pre-wrap">São quatro dias de programação que misturam ciência, prática e experiências reais com o objetivo de transformar a forma como vivemos a parentalidade no Brasil.</p>
            </div>
            <div className="flex flex-col font-sugar-peachy justify-center not-italic relative shrink-0 text-[24px] lg:text-[28px] w-full max-w-[842px]">
                <p className="leading-[0.9] whitespace-pre-wrap">Profissionais e famílias, lado a lado, com um objetivo em comum: transformar a educação de crianças e adolescentes no Brasil.</p>
            </div>
        </div>
    );
}

function Container() {
    return (
        <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[88px] lg:top-[101.8px] w-full px-4" data-name="Container">
            <Content />
        </div>
    );
}

function CloseBarMac() {
    return (
        <div className="bg-[#fff6ee] border-2 border-[#191919] border-solid h-[56px] overflow-clip absolute left-0 top-0 w-full rounded-tl-[24px] rounded-tr-[24px]" data-name="close bar_mac">
            <div className="absolute left-[28px] size-[12px] top-[19.8px]">
                <div className="bg-[#FC3F51] rounded-full size-full" />
            </div>
            <div className="absolute left-[45px] size-[12px] top-[19.8px]">
                <div className="bg-[#ECA031] rounded-full size-full" />
            </div>
            <div className="absolute left-[62px] size-[12px] top-[19.8px]">
                <div className="bg-[#1CB638] rounded-full size-full" />
            </div>
        </div>
    );
}

function EventImage() {
    return (
        <div className="bg-[#F4B63E] h-[780px] lg:h-[899px] relative rounded-[24px] shrink-0 w-full" data-name="Event Image">
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
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const banners = sectionRef.current?.querySelectorAll('[data-animate="section7-banner"]');
        if (!banners || banners.length === 0) return;

        gsap.fromTo(banners,
            {
                y: 400,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%", // Começa quando o topo da seção chega a 80% da tela
                    toggleActions: "play none none none"
                }
            }
        );
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-[#fff6ee] w-full flex flex-col items-center pt-[32px] md:pt-[60px] pb-[120px] relative isolate"
            data-name="Section - 7"
        >
            <div className="layout-container relative flex flex-col items-center overflow-visible">
                <EventImage />
            </div>
        </section>
    );
}
