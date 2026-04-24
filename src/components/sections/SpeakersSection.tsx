"use client";

import { useState } from "react";
import svgPaths from "@/components/svg/svg-paths";
import { Globe } from "lucide-react";

export type SpeakerCategory = "profissionais" | "pais-cuidadores" | "todos";

export type Speaker = {
    id: number;
    name: string;
    description: string;
    image: string;
    instagram?: string;
    linkedin?: string;
    website?: string;
    bgColor: string;
    category: Exclude<SpeakerCategory, "todos">;
};

export const allSpeakers: Speaker[] = [
    {
        id: 1,
        name: "Nanda Perim",
        description: "Psicóloga referência em desenvolvimento infantil",
        image: "/images/nandap.webp",
        instagram: "https://www.instagram.com/psimamaa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        linkedin: "https://www.linkedin.com/in/nanda-perim-b64692214/",
        bgColor: "#79c3ab",
        category: "pais-cuidadores",
    },
    {
        id: 2,
        name: "Isa Minatel",
        description: "Psicopedagoga referência em desenvolvimento infantil",
        image: "/images/isam.webp",
        instagram: "https://www.instagram.com/isa.minatel?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        linkedin: "https://www.linkedin.com/in/isa-minatel-85852732/",
        bgColor: "#74acde",
        category: "pais-cuidadores",
    },
    {
        id: 3,
        name: "Telma Abrahão",
        description: "Biomédica especialista em desenvolvimento humano",
        image: "/images/telmaa.webp",
        instagram: "https://www.instagram.com/telma.abrahao?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        linkedin: "https://www.linkedin.com/in/telmaabrahao/",
        bgColor: "#f7a73c",
        category: "profissionais",
    },
    {
        id: 4,
        name: "Marcos Piangers",
        description: "Um dos palestrantes mais influentes do Brasil",
        image: "/images/marcosp.webp",
        instagram: "https://www.instagram.com/piangers?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        linkedin: "https://www.linkedin.com/in/piangers/",
        bgColor: "#79c3ab",
        category: "pais-cuidadores",
    },
    {
        id: 5,
        name: "Daniel Becker",
        description: "Um dos pediatras mais respeitados do país",
        image: "/images/danielb.webp",
        instagram: "https://www.instagram.com/pediatriaintegralbr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        linkedin: "https://www.linkedin.com/in/daniel-becker-672590a/",
        bgColor: "#74acde",
        category: "pais-cuidadores",
    },
    {
        id: 6,
        name: "Maya Eigenmann",
        description: "Pedagoga, escritora e educadora parental especialista em Educação Positiva",
        image: "/images/mayae.webp",
        instagram: "https://www.instagram.com/maya_eigenmann/",
        linkedin: "https://www.linkedin.com/in/mayaeigenmann/",
        bgColor: "#f7a73c",
        category: "pais-cuidadores",
    },
    {
        id: 7,
        name: "Elisama Santos",
        description: "Psicanalista, especialista em comunicação não violenta e escritora",
        image: "/images/elisamas.webp",
        instagram: "https://www.instagram.com/elisamasantosc/",
        linkedin: "https://www.linkedin.com/in/elisama-santos/",
        bgColor: "#79c3ab",
        category: "pais-cuidadores",
    },
    {
        id: 8,
        name: "Murilo Gun",
        description: "Referência em pensamento inovador e criatividade",
        image: "/images/murilog.webp",
        instagram: "https://www.instagram.com/murilogun/?hl=pt-br",
        linkedin: "https://www.linkedin.com/in/murilogun/?originalSubdomain=br",
        bgColor: "#74acde",
        category: "pais-cuidadores",
    },
    {
        id: 9,
        name: "Dr. Wimer Bottura",
        description: "Psiquiatra especialista em relações familiares",
        image: "/images/drwimerb.webp",
        instagram: "https://www.instagram.com/wimerbotturajuniorpsiquiatra/",
        linkedin: "https://www.linkedin.com/in/dr-wimer-bottura-junior/",
        bgColor: "#f7a73c",
        category: "profissionais",
    },
    {
        id: 10,
        name: "Cecília Lauriano",
        description: "Mestre em Psicologia clínica especialista no trabalho com trauma",
        image: "/images/cecilial.webp",
        instagram: "https://www.instagram.com/cecilia.laurianooficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        linkedin: "https://www.linkedin.com/in/cecilialauriano/",
        bgColor: "#79c3ab",
        category: "profissionais",
    },
    {
        id: 11,
        name: "Iara Mastine",
        description: "Neuropsicóloga infantil, referência em livroterapia",
        image: "/images/iaram.webp",
        instagram: "https://www.instagram.com/iaramastine?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        linkedin: "https://www.linkedin.com/in/iara-mastine-5aab5863/",
        bgColor: "#74acde",
        category: "profissionais",
    },
    {
        id: 12,
        name: "Jacqueline Vilela",
        description: "Psicanalista e formadora em Educação Parental",
        image: "/images/jacquelinev.webp",
        instagram: "https://www.instagram.com/jacqvilela?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        linkedin: "https://www.linkedin.com/in/jacquelinevilela/",
        bgColor: "#f7a73c",
        category: "profissionais",
    },
    {
        id: 13,
        name: "Aline Cestarolli",
        description: "Psicóloga especialista em educação encorajadora",
        image: "/images/alinec.webp",
        instagram: "https://www.instagram.com/alinecestaroli?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        linkedin: "http://www.linkedin.com/in/alinecestaroli",
        bgColor: "#79c3ab",
        category: "profissionais",
    },
    {
        id: 14,
        name: "Cris Rayes",
        description: "Psicóloga especialista em orientação familiar",
        image: "/images/crisr.webp",
        instagram: "https://www.instagram.com/crisrayes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        linkedin: "https://www.linkedin.com/in/crisrayes/",
        bgColor: "#74acde",
        category: "profissionais",
    },
    {
        id: 15,
        name: "Bete P. Rodrigues",
        description: "Educadora e trainer em Disciplina Positiva",
        image: "/images/beter.webp",
        instagram: "https://www.instagram.com/disciplinapositivabrasil?igsh=NTQ4c2RreTVyZTBz",
        linkedin: "https://www.linkedin.com/in/beteprodrigues?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        bgColor: "#f7a73c",
        category: "profissionais",
    },
    {
        id: 16,
        name: "Ivana Moreira",
        description: "Jornalista e idealizadora do Festival Parental",
        image: "/images/ivanam.webp",
        instagram: "https://www.instagram.com/euivanamoreira?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        linkedin: "https://www.linkedin.com/in/ivana-moreira-679489ba/",
        bgColor: "#79c3ab",
        category: "profissionais",
    },
    {
        id: 17,
        name: "Dra. Elaine Pádua",
        description: "Nutricionista mestre em Ciências e especialista em saúde materno-infantil",
        image: "/images/elainep.webp",
        instagram: "https://www.instagram.com/draelainepadua/",
        website: "https://linktr.ee/draelainepadua_",
        bgColor: "#74acde",
        category: "pais-cuidadores",
    },
    {
        id: 18,
        name: "Dr. Gordon Neufeld",
        description: "Psicólogo canadense, autor best-seller e fundador do Neufeld Institute",
        image: "/images/gordonn.webp",
        instagram: "https://www.instagram.com/neufeldinstitute/",
        website: "https://www.neufeldinstitute.org/link",
        bgColor: "#f7a73c",
        category: "profissionais",
    },
    {
        id: 19,
        name: "Vanessa Cavalieri",
        description: "Juíza titular da Vara da Infância e Juventude do Rio de Janeiro",
        image: "/images/vanessac.webp",
        instagram: "https://www.instagram.com/protocoloeutevejo/",
        linkedin: "https://www.linkedin.com/in/vanessa-cavalieri-099b98146/",
        bgColor: "#79c3ab",
        category: "profissionais",
    },
    {
        id: 20,
        name: "Priscila Xavier",
        description: "Pediatra e neurocientista, especialista em trauma infantil",
        image: "/images/priscilax.webp",
        instagram: "https://www.instagram.com/drapriscilaxavierpediatra/",
        website: "https://linktr.ee/drapriscilaxavierpediatra",
        bgColor: "#74acde",
        category: "profissionais",
    },
    {
        id: 21,
        name: "Luciana Loureiro",
        description: "Educadora, escritora em aprendizagem no mundo digital",
        image: "/images/lucianal.webp",
        instagram: "https://www.instagram.com/lucianarloureiro/",
        website: "https://lucianaloureiro.keepo.bio",
        bgColor: "#f7a73c",
        category: "profissionais",
    },
    {
        id: 22,
        name: "Bebel Soares",
        description: "Psicanalista, escritora e colunista do jornal Estado de Minas",
        image: "/images/bebels.webp",
        instagram: "https://www.instagram.com/padecendo/",
        linkedin: "https://www.linkedin.com/groups/16964048/",
        bgColor: "#79c3ab",
        category: "pais-cuidadores",
    },
    {
        id: 23,
        name: "Roberta e Taís Bento",
        description: "Educadoras, especialistas em neurociência e fundadoras do SOS Educação",
        image: "/images/robertataisbento.webp",
        instagram: "https://www.instagram.com/soseducacao/",
        website: "https://www.soseducacao.com.br",
        bgColor: "#74acde",
        category: "profissionais",
    },
];

// ─── Helpers ────────────────────────────────────────────────────────────────

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

function SocialIcons({ type }: { type: "linkedin" | "instagram" | "website" }) {
    if (type === "website") {
        return <Globe className="w-full h-full text-current" strokeWidth={2} />;
    }
    return (
        <div className="relative shrink-0 size-[8.842px]" data-name="Social Icons">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.84211 8.84211">
                {type === "linkedin" && (
                    <g clipPath="url(#clip0_1_487)" id="Social Icons">
                        <path d={svgPaths.p26754780} fill="currentColor" id="Vector" />
                    </g>
                )}
                {type === "instagram" && (
                    <g clipPath="url(#clip0_1_482)" id="Social Icons">
                        <path d={svgPaths.p31d46470} fill="currentColor" id="Vector" />
                        <path d={svgPaths.p1f5a5880} fill="currentColor" id="Vector_2" />
                        <path d={svgPaths.p363e11f0} fill="currentColor" id="Vector_3" />
                    </g>
                )}
                <defs>
                    <clipPath id={`clip0_1_${type === "linkedin" ? "487" : "482"}`}>
                        <rect fill="white" height="8.84211" width="8.84211" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}

function SocialIconButton({ type, href }: { type: "linkedin" | "instagram" | "website"; href?: string }) {
    if (!href) return null;
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="content-stretch flex items-center p-[7.579px] relative rounded-[630.947px] shrink-0 size-[24px] hover:bg-[#191919] hover:text-white transition-all text-[#191919]"
        >
            <div aria-hidden="true" className="absolute border-[#191919] border-[0.632px] border-solid inset-0 pointer-events-none rounded-[630.947px]" />
            <SocialIcons type={type} />
        </a>
    );
}

// ─── Speaker Card ────────────────────────────────────────────────────────────

export function SpeakerCard({ speaker }: { speaker: Speaker }) {
    return (
        <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" style={{ backgroundColor: speaker.bgColor }}>
            <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col gap-[12px] items-center pb-[12px] pt-[8px] px-[8px] relative w-full">
                    {/* Image Container */}
                    <div className="h-[261px] relative rounded-[24px] shrink-0 w-full overflow-hidden">
                        <img
                            alt={speaker.name}
                            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                            src={speaker.image}
                            loading="lazy"
                        />
                        <div aria-hidden="true" className="absolute border-2 border-[#191919] border-solid inset-0 pointer-events-none rounded-[24px]" />
                    </div>

                    {/* Text + Social */}
                    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full">
                        {/* Text */}
                        <div className="content-stretch flex flex-col gap-[4px] items-center leading-[0] relative shrink-0 text-[#191919] text-center whitespace-normal break-words px-2">
                            <div className="flex flex-col font-sugar-peachy font-bold justify-center not-italic relative shrink-0 text-[32px] tracking-[-1.2px]">
                                <p className="leading-none">{speaker.name}</p>
                            </div>
                            <div className="flex flex-col font-dm-sans font-normal justify-center relative shrink-0 text-[18px] lg:text-[20px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[1.1]">{speaker.description}</p>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0">
                            {speaker.linkedin && <SocialIconButton type="linkedin" href={speaker.linkedin} />}
                            {speaker.website && <SocialIconButton type="website" href={speaker.website} />}
                            {speaker.instagram && <SocialIconButton type="instagram" href={speaker.instagram} />}
                        </div>
                    </div>
                </div>
            </div>
            <div aria-hidden="true" className="absolute border-2 border-[#191919] border-solid inset-0 pointer-events-none rounded-[24px]" />
        </div>
    );
}

// ─── Filter Toggle ───────────────────────────────────────────────────────────

const FILTER_TABS: { label: string; value: SpeakerCategory }[] = [
    { label: "Todos", value: "todos" },
    { label: "Para profissionais", value: "profissionais" },
    { label: "Para pais e cuidadores", value: "pais-cuidadores" },
];

function FilterToggle({
    active,
    onChange,
}: {
    active: SpeakerCategory;
    onChange: (v: SpeakerCategory) => void;
}) {
    return (
        <div
            role="tablist"
            aria-label="Filtrar palestrantes"
            className="flex w-full max-w-[640px] border-2 border-[#191919] rounded-[40px] bg-white/10 p-1 relative"
        >
            {FILTER_TABS.map((tab) => {
                const isActive = active === tab.value;
                const isTodos = tab.value === "todos";
                return (
                    <button
                        key={tab.value}
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => onChange(tab.value)}
                        className={[
                            isTodos ? "shrink-0 px-5 lg:flex-1 lg:px-0 py-3" : "flex-1 py-3",
                            "text-center font-dm-sans font-bold text-[13px] uppercase tracking-wider leading-[1.1] rounded-[32px] transition-all duration-300 cursor-pointer",
                            isActive
                                ? "bg-[#f7a73c] text-[#191919] shadow-[2px_2px_0px_0px_#191919] border-2 border-[#191919]"
                                : "text-[#191919] opacity-70 border-2 border-transparent hover:opacity-100 hover:bg-black/5",
                        ].join(" ")}
                    >
                        {tab.label}
                    </button>
                );
            })}
        </div>
    );
}

// ─── Main Section ────────────────────────────────────────────────────────────

export default function SpeakersSection() {
    const [activeFilter, setActiveFilter] = useState<SpeakerCategory>("todos");
    const [visibleCount, setVisibleCount] = useState(8);

    const filteredSpeakers =
        activeFilter === "todos"
            ? allSpeakers
            : allSpeakers.filter((s) => s.category === activeFilter);

    const visibleSpeakers = filteredSpeakers.slice(0, visibleCount);
    const hasMore = visibleCount < filteredSpeakers.length;

    const handleFilterChange = (filter: SpeakerCategory) => {
        setActiveFilter(filter);
        setVisibleCount(8);
    };

    const handleLoadMore = () => {
        setVisibleCount((prev) => Math.min(prev + 4, filteredSpeakers.length));
    };

    return (
        <section className="bg-[#fff6ef] w-full flex flex-col items-center pb-[32px] md:pb-[72px] pt-[32px] md:pt-[48px] relative isolate scroll-mt-24" id="palestrantes">
            <div className="layout-container flex flex-col gap-[64px] items-center relative px-16 md:px-0">
                {/* Header */}
                <div className="content-stretch flex flex-col gap-[28px] items-center relative shrink-0 w-full">
                    {/* Event Badge */}
                    <div className="content-stretch flex gap-[6px] items-center justify-center px-4 sm:px-[32px] py-[16px] relative rounded-[40px] shrink-0 self-center w-full max-w-full lg:w-auto">
                        <div aria-hidden="true" className="absolute border-2 border-[#505050] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[4px_4px_0px_0px_#505050]" />
                        <div className="hidden lg:block">
                            <UilCalendar />
                        </div>
                        <div className="flex flex-col font-dm-sans font-bold justify-center leading-normal relative shrink-0 text-[#505050] text-[14px] uppercase whitespace-normal break-words text-center flex-1" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="">19 a 22 de novembro · São Paulo/SP</p>
                        </div>
                    </div>

                    {/* Title & Description */}
                    <div className="content-stretch flex flex-col gap-[24px] items-center leading-[0] relative shrink-0 text-center w-full">
                        {/* Title */}
                        <div className="content-stretch flex flex-col font-sugar-peachy gap-[6px] items-center not-italic relative shrink-0 w-full">
                            <div className="flex flex-col justify-center relative shrink-0 text-[#ef7d25] text-[46px] lg:text-[72px] tracking-[-1.4px] lg:tracking-[-2px] w-full">
                                <p className="leading-[0.8] whitespace-pre-wrap">+50 Palestrantes convidados</p>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="flex flex-col font-dm-sans font-normal justify-center relative shrink-0 text-[#4c4d4f] text-[18px] lg:text-[24px] max-w-[1030px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[1.1] whitespace-pre-wrap">Reunimos especialistas que atuam diariamente com os desafios reais da parentalidade na clínica, na escola, na pesquisa e na escuta de famílias.</p>
                        </div>
                        <div className="flex flex-col font-dm-sans font-normal justify-center relative shrink-0 text-[#4c4d4f] text-[18px] lg:text-[24px] max-w-[1030px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[1.1] whitespace-pre-wrap">O Festival Parental preserva o rigor construído ao longo de seis edições do Congresso Internacional de Educação Parental e amplia esse diálogo para além do campo profissional.</p>
                        </div>
                    </div>
                </div>

                {/* Filter Toggle */}
                <FilterToggle active={activeFilter} onChange={handleFilterChange} />

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
