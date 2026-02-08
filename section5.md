"use client";

import svgPaths from "@/components/svg/svg-hwvyp88bcy";

interface CardData {
    icon: string;
    title: string;
    description: string;
    bgColor: string;
}

const CARDS_DATA: CardData[] = [
    {
        icon: "/images/icon_01.svg",
        title: "+50 palestrantes convidados",
        description: "Profissionais que são referência em saúde, educação e comportamento",
        bgColor: "#2daa96",
    },
    {
        icon: "/images/icon_02.svg",
        title: "+ 4.000 participantes de todo o Brasil",
        description: "Profissionais que são referência em saúde, educação e comportamento",
        bgColor: "#79c3ab",
    },
    {
        icon: "/images/icon_03.svg",
        title: "Trilhas de conteúdo para públicos distintos",
        description: "Programação exclusiva para profissionais e famílias",
        bgColor: "#74acde",
    },
    {
        icon: "/images/icon_04.svg",
        title: "Vivências e oficinas práticas",
        description: "Momentos de troca e aprendizado com o corpo e com o outro.",
        bgColor: "#f7a73c",
    },
    {
        icon: "/images/icon_05.svg",
        title: "Feira de produtos e serviços",
        description: "Expositores e marcas alinhadas à parentalidade e bem-estar",
        bgColor: "#f7a73c",
    },
    {
        icon: "/images/icon_06.svg",
        title: "Espaços de cuidado e autorregulação",
        description: "Ambientes pensados pra acolher mente e corpo",
        bgColor: "#74acde",
    },
    {
        icon: "/images/icon_07.svg",
        title: "Experiências culturais e artísticas",
        description: "Apresentações que inspiram, conectam e emocionam",
        bgColor: "#79c3ab",
    },
    {
        icon: "/images/icon_08.svg",
        title: "Conecte-se com quem vive a parentalidade",
        description: "Gente que educa, cuida e transforma dentro e fora de casa",
        bgColor: "#2daa96",
    },
];

function SectionHeader() {
    return (
        <div className="content-stretch flex flex-col gap-[24px] items-center text-center w-full mb-[64px]" data-name="text">
            <div className="flex flex-col font-sugar-peachy justify-center not-italic relative shrink-0 text-[#2260a1] text-[clamp(40px,8vw,84px)] w-full max-w-[1102px]">
                <h2 className="leading-[0.8] whitespace-pre-wrap">Um evento sobre parentalidade como o Brasil nunca viu.</h2>
            </div>
            <div className="flex flex-col font-dm-sans font-normal justify-center relative shrink-0 text-[#4c4d4f] text-[clamp(18px,4vw,24px)] w-full max-w-[1148px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                <p className="leading-[1.1] whitespace-pre-wrap">Prepare-se pra viver quatro dias intensos de conexões, conteúdos e experiências. Um ambiente pensado pra integrar conhecimento técnico, prática de vida e afeto. Tudo isso num só lugar.</p>
            </div>
        </div>
    );
}

function Card({ card, index }: { card: CardData; index: number }) {
    return (
        <div
            style={{
                backgroundColor: card.bgColor,
                top: `calc(100px + ${index * 20}px)`
            }}
            className="sticky lg:static group content-stretch flex flex-col gap-[46px] items-start p-[20px] relative rounded-[12px] shrink-0 w-full lg:w-auto h-full min-h-[220px]"
        >
            <div aria-hidden="true" className="absolute border-3 border-[#191919] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[4px_4px_0px_0px_#191919]" />

            {/* Icon Frame */}
            <div className="bg-white/20 relative rounded-[8px] shrink-0 size-[40px] flex items-center justify-center p-2" data-name="Frame">
                <div aria-hidden="true" className="absolute border border-[#191919] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[2px_2px_0px_0px_#191919]" />
                <img src={card.icon} alt="Icon" className="w-full h-full object-contain relative z-10" />
            </div>

            {/* Content */}
            <div className="content-stretch flex flex-col gap-[9px] items-start w-full">
                <h3 className="font-dm-sans font-bold text-[#191919] text-[22px] leading-tight">
                    {card.title}
                </h3>
                <p className="font-dm-sans font-normal text-[#191919] text-[16px] leading-[1.2] opacity-80" style={{ fontVariationSettings: "'opsz' 14" }}>
                    {card.description}
                </p>
            </div>
        </div>
    );
}

function Grafismo() {
    return (
        <div
            className="absolute top-[200px] left-1/2 ml-[-1331px] w-[2662px] h-[682px] z-[0] pointer-events-none select-none overflow-visible"
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
        <section className="bg-[#fff6ef] w-full overflow-hidden flex flex-col items-center pb-[120px] pt-[80px] relative isolate px-4 md:px-12" id="evento" data-name="Section - 5">
            <div className="layout-container relative flex flex-col items-center z-10">
                <SectionHeader />

                {/* Cards Container */}
                <div className="flex flex-col lg:grid lg:grid-cols-4 gap-[24px] lg:gap-[20px] relative shrink-0 w-full max-w-[1280px]">
                    {CARDS_DATA.map((card, index) => (
                        <Card key={index} card={card} index={index} />
                    ))}
                </div>
            </div>

            <Grafismo />
        </section>
    );
}
