"use client";

import { useState } from "react";
import svgPaths from "@/components/svg/svg-paths";

// IMPORTANTE: Substitua estas importações pelas suas imagens reais
// Placeholders para palestrantes
const imgImage = "https://placehold.co/400x500/79c3ab/white?text=Ivana+Moreira";
const imgMarcosPiangers1 = "https://placehold.co/400x500/74acde/white?text=Marcos+Piangers";
const imgIsaMinatel2 = "https://placehold.co/400x500/f7a73c/white?text=Isa+Minatel";
const imgDanielBecker1 = "https://placehold.co/400x500/79c3ab/white?text=Daniel+Becker";
const imgNandaPerim2 = "https://placehold.co/400x500/74acde/white?text=Nanda+Perim";
const imgMuriloGun1 = "https://placehold.co/400x500/f7a73c/white?text=Murilo+Gun";
const imgTelmaAbrahao1 = "https://placehold.co/400x500/79c3ab/white?text=Telma+Abrahao";
const imgCeciliaLauriano1 = "https://placehold.co/400x500/74acde/white?text=Cecilia+Lauriano";

type Speaker = {
    id: number;
    name: string;
    subtitle: string;
    image: string;
    imagePosition: { left?: string; top?: string; width: string; height: string };
    bgColor: string;
};

const allSpeakers: Speaker[] = [
    {
        id: 1,
        name: "Ivana Moreira",
        subtitle: "Ivana Moreira",
        image: imgImage,
        imagePosition: { left: "calc(50% - 188.5px)", top: "-160px", width: "377px", height: "452px" },
        bgColor: "#79c3ab",
    },
    {
        id: 2,
        name: "Marcos Piangers",
        subtitle: "Ivana Moreira",
        image: imgMarcosPiangers1,
        imagePosition: { left: "0", top: "-81px", width: "289px", height: "432px" },
        bgColor: "#74acde",
    },
    {
        id: 3,
        name: "Isa Minatel",
        subtitle: "Ivana Moreira",
        image: imgIsaMinatel2,
        imagePosition: { left: "-84px", top: "-7px", width: "373px", height: "464px" },
        bgColor: "#f7a73c",
    },
    {
        id: 4,
        name: "Daniel Becker",
        subtitle: "Ivana Moreira",
        image: imgDanielBecker1,
        imagePosition: { left: "-242px", top: "-50px", width: "616px", height: "360px" },
        bgColor: "#79c3ab",
    },
    {
        id: 5,
        name: "Nanda Perim",
        subtitle: "Ivana Moreira",
        image: imgNandaPerim2,
        imagePosition: { left: "-1px", top: "0", width: "290px", height: "362px" },
        bgColor: "#74acde",
    },
    {
        id: 6,
        name: "Murilo Gun",
        subtitle: "Ivana Moreira",
        image: imgMuriloGun1,
        imagePosition: { left: "0", top: "-25px", width: "289px", height: "434px" },
        bgColor: "#f7a73c",
    },
    {
        id: 7,
        name: "Telma Abrahão",
        subtitle: "Ivana Moreira",
        image: imgTelmaAbrahao1,
        imagePosition: { left: "-84px", top: "-7px", width: "373px", height: "464px" },
        bgColor: "#79c3ab",
    },
    {
        id: 8,
        name: "Cecília Lauriano",
        subtitle: "Ivana Moreira",
        image: imgCeciliaLauriano1,
        imagePosition: { left: "0", top: "-81px", width: "289px", height: "432px" },
        bgColor: "#74acde",
    },
    // Palestrantes adicionais (usando imagens repetidas para demonstração)
    {
        id: 9,
        name: "João Silva",
        subtitle: "Ivana Moreira",
        image: imgImage,
        imagePosition: { left: "calc(50% - 188.5px)", top: "-160px", width: "377px", height: "452px" },
        bgColor: "#f7a73c",
    },
    {
        id: 10,
        name: "Maria Santos",
        subtitle: "Ivana Moreira",
        image: imgMarcosPiangers1,
        imagePosition: { left: "0", top: "-81px", width: "289px", height: "432px" },
        bgColor: "#79c3ab",
    },
    {
        id: 11,
        name: "Pedro Costa",
        subtitle: "Ivana Moreira",
        image: imgIsaMinatel2,
        imagePosition: { left: "-84px", top: "-7px", width: "373px", height: "464px" },
        bgColor: "#74acde",
    },
    {
        id: 12,
        name: "Ana Lima",
        subtitle: "Ivana Moreira",
        image: imgDanielBecker1,
        imagePosition: { left: "-242px", top: "-50px", width: "616px", height: "360px" },
        bgColor: "#f7a73c",
    },
];

function UilCalendar() {
    return (
        <div className="relative shrink-0 size-[18px]" data-name="uil:calendar">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                <g id="uil:calendar">
                    <path d={svgPaths.p3f159180} fill="var(--fill-0, #505050)" id="Vector" />
                </g>
            </svg>
        </div>
    );
}

function SocialIcons({ type }: { type: "linkedin" | "instagram" | "twitter" }) {
    return (
        <div className="relative shrink-0 size-[8.842px]" data-name="Social Icons">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.84211 8.84211">
                {type === "linkedin" && (
                    <g clipPath="url(#clip0_1_487)" id="Social Icons">
                        <path d={svgPaths.p26754780} fill="var(--fill-0, #191919)" id="Vector" />
                    </g>
                )}
                {type === "instagram" && (
                    <g clipPath="url(#clip0_1_482)" id="Social Icons">
                        <path d={svgPaths.p31d46470} fill="var(--fill-0, #191919)" id="Vector" />
                        <path d={svgPaths.p1f5a5880} fill="var(--fill-0, #191919)" id="Vector_2" />
                        <path d={svgPaths.p363e11f0} fill="var(--fill-0, #191919)" id="Vector_3" />
                    </g>
                )}
                {type === "twitter" && (
                    <g clipPath="url(#clip0_1_479)" id="Social Icons">
                        <path d={svgPaths.p2c1af780} fill="var(--fill-0, #191919)" id="Vector" />
                    </g>
                )}
                <defs>
                    <clipPath id={`clip0_1_${type === "linkedin" ? "487" : type === "instagram" ? "482" : "479"}`}>
                        <rect fill="white" height="8.84211" width="8.84211" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}

function SocialIconButton({ type }: { type: "linkedin" | "instagram" | "twitter" }) {
    return (
        <div className="content-stretch flex items-center p-[7.579px] relative rounded-[630.947px] shrink-0 size-[24px]">
            <div aria-hidden="true" className="absolute border-[#191919] border-[0.632px] border-solid inset-0 pointer-events-none rounded-[630.947px]" />
            <SocialIcons type={type} />
        </div>
    );
}

function SpeakerCard({ speaker }: { speaker: Speaker }) {
    return (
        <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" style={{ backgroundColor: speaker.bgColor }}>
            <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col gap-[12px] items-center pb-[12px] pt-[8px] px-[8px] relative w-full">
                    {/* Image Container */}
                    <div className="h-[261px] relative rounded-[24px] shrink-0 w-full">
                        <div className="overflow-clip relative rounded-[inherit] size-full">
                            <div className="absolute" style={{ ...speaker.imagePosition }}>
                                <img alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none size-full" src={speaker.image} />
                            </div>
                        </div>
                        <div aria-hidden="true" className="absolute border-2 border-[#191919] border-solid inset-0 pointer-events-none rounded-[24px]" />
                    </div>

                    {/* Text + Social */}
                    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full">
                        {/* Text */}
                        <div className="content-stretch flex flex-col gap-[4px] items-center leading-[0] relative shrink-0 text-[#191919] text-center whitespace-normal break-words px-2">
                            <div className="flex flex-col font-sugar-peachy font-bold justify-center not-italic relative shrink-0 text-[32px]">
                                <p className="leading-none">{speaker.name}</p>
                            </div>
                            <div className="flex flex-col font-dm-sans font-normal justify-center relative shrink-0 text-[22px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[1.1]">{speaker.subtitle}</p>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0">
                            <SocialIconButton type="linkedin" />
                            <SocialIconButton type="instagram" />
                            <SocialIconButton type="twitter" />
                        </div>
                    </div>
                </div>
            </div>
            <div aria-hidden="true" className="absolute border-2 border-[#191919] border-solid inset-0 pointer-events-none rounded-[24px]" />
        </div>
    );
}

export default function SpeakersSection() {
    const [visibleCount, setVisibleCount] = useState(8);

    const visibleSpeakers = allSpeakers.slice(0, visibleCount);
    const hasMore = visibleCount < allSpeakers.length;

    const handleLoadMore = () => {
        setVisibleCount((prev) => Math.min(prev + 4, allSpeakers.length));
    };

    // Organizar palestrantes em linhas de 4
    const rows: Speaker[][] = [];
    for (let i = 0; i < visibleSpeakers.length; i += 4) {
        rows.push(visibleSpeakers.slice(i, i + 4));
    }

    return (
        <section className="bg-[#fff6ef] w-full flex flex-col items-center pb-[72px] pt-[72px] relative isolate" id="palestrantes">
            <div className="layout-container flex flex-col gap-[64px] items-center relative px-4 md:px-0">
                {/* Header */}
                <div className="content-stretch flex flex-col gap-[28px] items-center relative shrink-0 w-full">
                    {/* Event Badge */}
                    <div className="content-stretch flex gap-[6px] items-center justify-center px-4 sm:px-[32px] py-[16px] relative rounded-[40px] shrink-0 self-center w-full max-w-full lg:w-auto">
                        <div aria-hidden="true" className="absolute border-2 border-[#505050] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[4px_4px_0px_0px_#505050]" />
                        <div className="hidden lg:block">
                            <UilCalendar />
                        </div>
                        <div className="flex flex-col font-dm-sans font-normal justify-center leading-normal relative shrink-0 text-[#505050] text-[14px] uppercase whitespace-normal break-words text-center flex-1" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="">19 a 22 de novembro · Transamérica Expo, São Paulo/SP</p>
                        </div>
                    </div>

                    {/* Title & Description */}
                    <div className="content-stretch flex flex-col gap-[24px] items-center leading-[0] relative shrink-0 text-center w-full">
                        {/* Title */}
                        <div className="content-stretch flex flex-col font-sugar-peachy gap-[6px] items-center not-italic relative shrink-0 w-full">
                            <div className="flex flex-col justify-center relative shrink-0 text-[#ef7d25] text-[46px] lg:text-8xl w-full">
                                <p className="leading-[0.8] whitespace-pre-wrap">+50 Palestrantes convidados.</p>
                            </div>
                            <div className="flex flex-col justify-center relative shrink-0 text-[#4c4d4f] text-[24px] lg:text-4xl w-full">
                                <p className="leading-[0.9] whitespace-pre-wrap">Reunimos profissionais que atuam diariamente com os desafios reais da parentalidade na clínica, na escola, na pesquisa e na escuta de famílias.</p>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="flex flex-col font-dm-sans font-normal justify-center relative shrink-0 text-[#4c4d4f] text-[18px] lg:text-[24px] max-w-[1030px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[1.1] whitespace-pre-wrap">O Festival Parental preserva o rigor construído ao longo de seis edições do Congresso Internacional de Educação Parental e amplia esse diálogo para além do campo profissional.</p>
                        </div>
                    </div>
                </div>

                {/* Speakers Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] relative shrink-0 w-full">
                    {visibleSpeakers.map((speaker) => (
                        <SpeakerCard key={speaker.id} speaker={speaker} />
                    ))}
                </div>

                {/* Load More Button */}
                {hasMore && (
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full max-w-[236px] mx-auto">
                        <button
                            onClick={handleLoadMore}
                            className="bg-[rgba(25,25,25,0.05)] border-2 border-[#191919] relative rounded-[40px] shrink-0 w-full cursor-pointer hover:bg-[rgba(25,25,25,0.1)] transition-all hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#191919] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#191919] shadow-[4px_4px_0px_0px_#191919]"
                        >
                            <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center px-[32px] py-[16px] relative w-full">
                                    <div className="flex flex-col font-dm-sans font-bold justify-center leading-[0] relative shrink-0 text-[#191919] text-[14.1px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                                        <p className="leading-[24px]">Ver mais palestrantes</p>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
