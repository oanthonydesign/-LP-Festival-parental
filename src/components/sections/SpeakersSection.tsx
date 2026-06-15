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
    category: Exclude<SpeakerCategory, "todos"> | "ambos";
};

export const allSpeakers: Speaker[] = [
    {
        id: 1,
        name: "Dr. Gordon Neufeld",
        description: "Psicólogo do desenvolvimento, referência mundial em apego e fundador do Neufeld Institute",
        image: "/images/gordonn.webp",
        instagram: "https://www.instagram.com/neufeldinstitute/",
        website: "https://www.neufeldinstitute.org/link",
        bgColor: "#79c3ab",
        category: "profissionais",
    },
    {
        id: 2,
        name: "Daniel Becker",
        description: "Um dos pediatras mais respeitados do país",
        image: "/images/danielb.webp",
        instagram: "https://www.instagram.com/pediatriaintegralbr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        linkedin: "https://www.linkedin.com/in/daniel-becker-672590a/",
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
        name: "Isa Minatel",
        description: "Psicopedagoga referência em desenvolvimento infantil",
        image: "/images/isam.webp",
        instagram: "https://www.instagram.com/isa.minatel?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        linkedin: "https://www.linkedin.com/in/isa-minatel-85852732/",
        bgColor: "#79c3ab",
        category: "pais-cuidadores",
    },
    {
        id: 5,
        name: "Vanessa Cavalieri",
        description: "Juíza titular da Vara da Infância e Juventude do Rio de Janeiro",
        image: "/images/vanessac.webp",
        instagram: "https://www.instagram.com/protocoloeutevejo/",
        linkedin: "https://www.linkedin.com/in/vanessa-cavalieri-099b98146/",
        bgColor: "#74acde",
        category: "profissionais",
    },
    {
        id: 6,
        name: "Murilo Gun",
        description: "Referência em pensamento inovador e criatividade",
        image: "/images/murilog.webp",
        instagram: "https://www.instagram.com/murilogun/?hl=pt-br",
        linkedin: "https://www.linkedin.com/in/murilogun/?originalSubdomain=br",
        bgColor: "#f7a73c",
        category: "pais-cuidadores",
    },
    {
        id: 7,
        name: "Priscila Xavier",
        description: "Pediatra e neurocientista, especialista em trauma infantil",
        image: "/images/priscilax.webp",
        instagram: "https://www.instagram.com/drapriscilaxavierpediatra/",
        website: "https://linktr.ee/drapriscilaxavierpediatra",
        bgColor: "#79c3ab",
        category: "profissionais",
    },
    {
        id: 8,
        name: "Maya Eigenmann",
        description: "Pedagoga, escritora e educadora parental especialista em Educação Positiva",
        image: "/images/mayae.webp",
        instagram: "https://www.instagram.com/maya_eigenmann/",
        linkedin: "https://www.linkedin.com/in/mayaeigenmann/",
        bgColor: "#74acde",
        category: "pais-cuidadores",
    },
    {
        id: 9,
        name: "Cecília Lauriano",
        description: "Mestre em Psicologia clínica especialista no trabalho com trauma",
        image: "/images/cecilial.webp",
        instagram: "https://www.instagram.com/cecilia.laurianooficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        linkedin: "https://www.linkedin.com/in/cecilialauriano/",
        bgColor: "#f7a73c",
        category: "profissionais",
    },
    {
        id: 10,
        name: "Elisama Santos",
        description: "Psicanalista, especialista em comunicação não violenta e escritora",
        image: "/images/elisamas.webp",
        instagram: "https://www.instagram.com/elisamasantosc/",
        linkedin: "https://www.linkedin.com/in/elisama-santos/",
        bgColor: "#79c3ab",
        category: "pais-cuidadores",
    },
    {
        id: 11,
        name: "Roberta e Taís Bento",
        description: "Educadoras, especialistas em neurociência e fundadoras do SOS Educação",
        image: "/images/robertataisbento.webp",
        instagram: "https://www.instagram.com/soseducacao/",
        website: "https://www.soseducacao.com.br",
        bgColor: "#74acde",
        category: "pais-cuidadores",
    },
    {
        id: 12,
        name: "Nanda Perim",
        description: "Psicóloga referência em desenvolvimento infantil",
        image: "/images/nandap.webp",
        instagram: "https://www.instagram.com/psimamaa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        linkedin: "https://www.linkedin.com/in/nanda-perim-b64692214/",
        bgColor: "#f7a73c",
        category: "pais-cuidadores",
    },
    {
        id: 13,
        name: "Jacqueline Vilela",
        description: "Psicanalista e formadora em Educação Parental",
        image: "/images/jacquelinev.webp",
        instagram: "https://www.instagram.com/jacqvilela?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        linkedin: "https://www.linkedin.com/in/jacquelinevilela/",
        bgColor: "#79c3ab",
        category: "ambos",
    },
    {
        id: 14,
        name: "Marcos Piangers",
        description: "Um dos palestrantes mais influentes do Brasil",
        image: "/images/marcosp.webp",
        instagram: "https://www.instagram.com/piangers?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        linkedin: "https://www.linkedin.com/in/piangers/",
        bgColor: "#74acde",
        category: "pais-cuidadores",
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
        name: "Dra. Elaine Pádua",
        description: "Nutricionista mestre em Ciências e especialista em saúde materno-infantil",
        image: "/images/elainep.webp",
        instagram: "https://www.instagram.com/draelainepadua/",
        website: "https://linktr.ee/draelainepadua_",
        bgColor: "#79c3ab",
        category: "pais-cuidadores",
    },
    {
        id: 17,
        name: "Aline Cestarolli",
        description: "Psicóloga especialista em educação encorajadora",
        image: "/images/alinec.webp",
        instagram: "https://www.instagram.com/alinecestaroli?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        linkedin: "http://www.linkedin.com/in/alinecestaroli",
        bgColor: "#74acde",
        category: "profissionais",
    },
    {
        id: 18,
        name: "Bebel Soares",
        description: "Psicanalista, escritora e colunista do jornal Estado de Minas",
        image: "/images/bebels.webp",
        instagram: "https://www.instagram.com/padecendo/",
        linkedin: "https://www.linkedin.com/groups/16964048/",
        bgColor: "#f7a73c",
        category: "pais-cuidadores",
    },
    {
        id: 19,
        name: "Iara Mastine",
        description: "Neuropsicóloga infantil, referência em livroterapia",
        image: "/images/iaram.webp",
        instagram: "https://www.instagram.com/iaramastine?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        linkedin: "https://www.linkedin.com/in/iara-mastine-5aab5863/",
        bgColor: "#79c3ab",
        category: "ambos",
    },
    {
        id: 20,
        name: "Cris Rayes",
        description: "Psicóloga especialista em orientação familiar",
        image: "/images/crisr.webp",
        instagram: "https://www.instagram.com/crisrayes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        linkedin: "https://www.linkedin.com/in/crisrayes/",
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
        name: "Dr. Wimer Bottura",
        description: "Psiquiatra especialista em relações familiares",
        image: "/images/drwimerb.webp",
        instagram: "https://www.instagram.com/wimerbotturajuniorpsiquiatra/",
        linkedin: "https://www.linkedin.com/in/dr-wimer-bottura-junior/",
        bgColor: "#79c3ab",
        category: "ambos",
    },
    {
        id: 23,
        name: "Ivana Moreira",
        description: "Jornalista e idealizadora do Festival Parental",
        image: "/images/ivanam.webp",
        instagram: "https://www.instagram.com/euivanamoreira?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        linkedin: "https://www.linkedin.com/in/ivana-moreira-679489ba/",
        bgColor: "#74acde",
        category: "ambos",
    },
    {
        id: 24,
        name: "Patrícia Noleto",
        description: "Psicóloga, Supervisora Clínica e Educadora Parental",
        image: "/images/patrician.webp",
        instagram: "https://www.instagram.com/patnoleto/",
        linkedin: "https://www.linkedin.com/in/patricianoleto/",
        bgColor: "#f7a73c",
        category: "profissionais",
    },
    {
        id: 25,
        name: "Elisa Altafim",
        description: "Psicóloga e pós-doutora em Saúde Mental",
        image: "/images/elisaa.webp",
        instagram: "https://www.instagram.com/elisaaltafim/",
        linkedin: "https://www.linkedin.com/in/elisa-rachel-pisani-altafim-62631b65/?isSelfProfile=false",
        bgColor: "#79c3ab",
        category: "profissionais",
    },
    {
        id: 26,
        name: "Pedro de Oliveira",
        description: "Apresentador de TV, palestrante e criador do Canal S.E.R. Pai",
        image: "/images/pedroo.webp",
        instagram: "https://www.instagram.com/ocanalserpai/",
        website: "https://www.youtube.com/@canalserpai",
        bgColor: "#74acde",
        category: "pais-cuidadores",
    },
    {
        id: 27,
        name: "Rosely Maria",
        description: "Diretora de comunicação do Instituto Vidas Raras",
        image: "/images/roselym.webp",
        instagram: "https://www.instagram.com/roselymariafgc/",
        website: "https://vidasraras.org.br/sitewp/",
        bgColor: "#f7a73c",
        category: "pais-cuidadores",
    },
    {
        id: 28,
        name: "Magda Figueiredo",
        description: "Atriz, Mãe, Executiva e Educadora Especialista em Letramento Racial",
        image: "/images/magdaf.webp",
        instagram: "https://www.instagram.com/negramagda_/",
        website: "https://linktr.ee/negramagda_",
        bgColor: "#79c3ab",
        category: "profissionais",
    },
];

// ─── Helpers ────────────────────────────────────────────────────────────────

function UilCalendar() {
    return (
        <div className="shrink-0 size-[20px]" data-name="uil:calendar">
            <img src="/images/icons/calendario_cor.svg" alt="Calendario" className="w-full h-full object-contain" loading="lazy" />
        </div>
    );
}

function SocialIcons({ type }: { type: "linkedin" | "instagram" | "website" }) {
    if (type === "website") {
        return (
            <div className="relative shrink-0 size-[14px] flex items-center justify-center">
                <Globe className="w-full h-full text-current transition-colors" strokeWidth={2} />
            </div>
        );
    }
    return (
        <div className="relative shrink-0 size-[14px] flex items-center justify-center" data-name="Social Icons">
            {type === "linkedin" && (
                <>
                    <img src="/images/icons/linkedin_linha_preta.svg" alt="LinkedIn" className="w-full h-full object-contain absolute inset-0 transition-opacity duration-200 group-hover:opacity-0" loading="lazy" />
                    <img src="/images/icons/linkedin_preenchido_branco.svg" alt="LinkedIn" className="w-full h-full object-contain absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100" loading="lazy" />
                </>
            )}
            {type === "instagram" && (
                <>
                    <img src="/images/icons/instagram_linha_preta.svg" alt="Instagram" className="w-full h-full object-contain absolute inset-0 transition-opacity duration-200 group-hover:opacity-0" loading="lazy" />
                    <img src="/images/icons/instagram_preenchido_branco.svg" alt="Instagram" className="w-full h-full object-contain absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100" loading="lazy" />
                </>
            )}
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
            className="flex items-center justify-center relative rounded-full shrink-0 size-[26px] hover:bg-[#191919] hover:text-white transition-all text-[#191919] group"
        >
            <div aria-hidden="true" className="absolute border-[#191919] border-[1.5px] border-solid inset-0 pointer-events-none rounded-full" />
            <SocialIcons type={type} />
        </a>
    );
}

// ─── Speaker Card ────────────────────────────────────────────────────────────

const COLOR_PALETTE = ["#79c3ab", "#74acde", "#f7a73c"];

export function SpeakerCard({ speaker, bgColorOverride }: { speaker: Speaker; bgColorOverride?: string }) {
    const bgColor = bgColorOverride ?? speaker.bgColor;
    return (
        <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" style={{ backgroundColor: bgColor }}>
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

    const professionalOrder = [1, 3, 5, 7, 9, 13, 15, 17, 19, 20, 21, 22, 23, 24, 25, 28];
    const parentsOrder = [2, 4, 6, 8, 10, 11, 12, 13, 14, 16, 18, 19, 22, 23, 26, 27];

    const filteredSpeakers = (() => {
        if (activeFilter === "todos") return allSpeakers;

        const filtered = allSpeakers.filter((s) => s.category === activeFilter || s.category === "ambos");

        if (activeFilter === "profissionais") {
            return [...filtered].sort((a, b) => {
                const indexA = professionalOrder.indexOf(a.id);
                const indexB = professionalOrder.indexOf(b.id);

                if (indexA !== -1 && indexB !== -1) return indexA - indexB;
                if (indexA !== -1) return -1;
                if (indexB !== -1) return 1;
                return 0;
            });
        }

        if (activeFilter === "pais-cuidadores") {
            return [...filtered].sort((a, b) => {
                const indexA = parentsOrder.indexOf(a.id);
                const indexB = parentsOrder.indexOf(b.id);

                if (indexA !== -1 && indexB !== -1) return indexA - indexB;
                if (indexA !== -1) return -1;
                if (indexB !== -1) return 1;
                return 0;
            });
        }

        return filtered;
    })();

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
                    <div className="inline-flex items-center justify-center gap-[8px] px-4 py-3 md:px-[32px] md:py-[16px] rounded-[40px] border-2 border-[#505050] shadow-[4px_4px_0px_0px_#505050] bg-transparent max-w-[92vw] md:max-w-none">
                        <div className="hidden md:flex items-center justify-center relative shrink-0">
                            <UilCalendar />
                        </div>
                        <span className="font-dm-sans font-bold text-[#505050] text-[12px] md:text-[14px] uppercase tracking-[0.14px] whitespace-normal md:whitespace-nowrap leading-none mt-[2px]">
                            19 a 22 de novembro · São Paulo/SP
                        </span>
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
                    {visibleSpeakers.map((speaker, index) => (
                        <SpeakerCard
                            key={speaker.id}
                            speaker={speaker}
                            bgColorOverride={activeFilter !== "todos" ? COLOR_PALETTE[index % 3] : undefined}
                        />
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
