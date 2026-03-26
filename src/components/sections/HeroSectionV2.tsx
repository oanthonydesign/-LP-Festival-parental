"use client";

import svgPaths from "@/components/svg/svgPaths";
import svgPathsSpeakers from "@/components/svg/svg-paths";
import { Globe } from "lucide-react";

type Speaker = {
    id: number;
    name: string;
    description: string;
    image: string;
    instagram: string;
    linkedin?: string;
    website?: string;
    bgColor: string;
};

const allSpeakers: Speaker[] = [
    {
        id: 1,
        name: "Nanda Perim",
        description: "Psicóloga referência em desenvolvimento infantil",
        image: "/images/nandap.webp",
        instagram: "https://www.instagram.com/psimamaa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        linkedin: "https://www.linkedin.com/in/nanda-perim-b64692214/",
        bgColor: "#79c3ab",
    },
    {
        id: 2,
        name: "Isa Minatel",
        description: "Psicopedagoga referência em desenvolvimento infantil",
        image: "/images/isam.webp",
        instagram: "https://www.instagram.com/isa.minatel?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        linkedin: "https://www.linkedin.com/in/isa-minatel-85852732/",
        bgColor: "#74acde",
    },
    {
        id: 3,
        name: "Telma Abrahão",
        description: "Biomédica especialista em desenvolvimento humano",
        image: "/images/telmaa.webp",
        instagram: "https://www.instagram.com/telma.abrahao?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        linkedin: "https://www.linkedin.com/in/telmaabrahao/",
        bgColor: "#f7a73c",
    },
    {
        id: 4,
        name: "Marcos Piangers",
        description: "Um dos palestrantes mais influentes do Brasil",
        image: "/images/marcosp.webp",
        instagram: "https://www.instagram.com/piangers?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        linkedin: "https://www.linkedin.com/in/piangers/",
        bgColor: "#79c3ab",
    },
    {
        id: 5,
        name: "Daniel Becker",
        description: "Um dos pediatras mais respeitados do país",
        image: "/images/danielb.webp",
        instagram: "https://www.instagram.com/pediatriaintegralbr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        linkedin: "https://www.linkedin.com/in/daniel-becker-672590a/",
        bgColor: "#74acde",
    },
    {
        id: 6,
        name: "Murilo Gun",
        description: "Referência em pensamento inovador e criatividade",
        image: "/images/murilog.webp",
        instagram: "https://www.instagram.com/murilogun/?hl=pt-br",
        linkedin: "https://www.linkedin.com/in/murilogun/?originalSubdomain=br",
        bgColor: "#f7a73c",
    },
    {
        id: 7,
        name: "Dr. Wimer Bottura",
        description: "Psiquiatra especialista em relações familiares",
        image: "/images/drwimerb.webp",
        instagram: "https://www.instagram.com/wimerbotturajuniorpsiquiatra/",
        linkedin: "https://www.linkedin.com/in/dr-wimer-bottura-junior/",
        bgColor: "#79c3ab",
    },
    {
        id: 8,
        name: "Cecília Lauriano",
        description: "Mestre em Psicologia clínica especialista no trabalho com trauma",
        image: "/images/cecilial.webp",
        instagram: "https://www.instagram.com/cecilia.laurianooficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        linkedin: "https://www.linkedin.com/in/cecilialauriano/",
        bgColor: "#74acde",
    },
    {
        id: 9,
        name: "Iara Mastine",
        description: "Neuropsicóloga infantil, referência em livroterapia",
        image: "/images/iaram.webp",
        instagram: "https://www.instagram.com/iaramastine?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        linkedin: "https://www.linkedin.com/in/iara-mastine-5aab5863/",
        bgColor: "#f7a73c",
    },
    {
        id: 10,
        name: "Jacqueline Vilela",
        description: "Psicanalista e formadora em Educação Parental",
        image: "/images/jacquelinev.webp",
        instagram: "https://www.instagram.com/jacqvilela?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        linkedin: "https://www.linkedin.com/in/jacquelinevilela/",
        bgColor: "#79c3ab",
    },
    {
        id: 11,
        name: "Aline Cestarolli",
        description: "Psicóloga especialista em educação encorajadora",
        image: "/images/alinec.webp",
        instagram: "https://www.instagram.com/alinecestaroli?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        linkedin: "http://www.linkedin.com/in/alinecestaroli",
        bgColor: "#74acde",
    },
    {
        id: 12,
        name: "Cris Rayes",
        description: "Psicóloga especialista em orientação familiar",
        image: "/images/crisr.webp",
        instagram: "https://www.instagram.com/crisrayes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        linkedin: "https://www.linkedin.com/in/crisrayes/",
        bgColor: "#f7a73c",
    },
    {
        id: 13,
        name: "Bete P. Rodrigues",
        description: "Educadora e trainer em Disciplina Positiva",
        image: "/images/beter.webp",
        instagram: "https://www.instagram.com/disciplinapositivabrasil?igsh=NTQ4c2RreTVyZTBz",
        linkedin: "https://www.linkedin.com/in/beteprodrigues?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        bgColor: "#79c3ab",
    },
    {
        id: 14,
        name: "Ivana Moreira",
        description: "Jornalista e idealizadora do Festival Parental",
        image: "/images/ivanam.webp",
        instagram: "https://www.instagram.com/euivanamoreira?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        linkedin: "https://www.linkedin.com/in/ivana-moreira-679489ba/",
        bgColor: "#74acde",
    },
    {
        id: 15,
        name: "Dra. Elaine Pádua",
        description: "Nutricionista mestre em Ciências e especialista em saúde materno-infantil",
        image: "/images/elainep.webp",
        instagram: "https://www.instagram.com/draelainepadua/",
        website: "https://linktr.ee/draelainepadua_",
        bgColor: "#f7a73c",
    },
];

function SocialIcons({ type }: { type: "linkedin" | "instagram" | "website" }) {
    if (type === "website") {
        return <Globe className="w-full h-full text-current" strokeWidth={2} />
    }
    return (
        <div className="relative shrink-0 size-[8.842px]" data-name="Social Icons">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.84211 8.84211">
                {type === "linkedin" && (
                    <g clipPath="url(#clip0_1_487)" id="Social Icons">
                        <path d={svgPathsSpeakers.p26754780} fill="currentColor" id="Vector" />
                    </g>
                )}
                {type === "instagram" && (
                    <g clipPath="url(#clip0_1_482)" id="Social Icons">
                        <path d={svgPathsSpeakers.p31d46470} fill="currentColor" id="Vector" />
                        <path d={svgPathsSpeakers.p1f5a5880} fill="currentColor" id="Vector_2" />
                        <path d={svgPathsSpeakers.p363e11f0} fill="currentColor" id="Vector_3" />
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

function HeroSpeakerCard({ speaker }: { speaker: Speaker }) {
    return (
        <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[24px]" style={{ backgroundColor: speaker.bgColor }}>
            <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col gap-[8px] items-center pb-[12px] pt-[8px] px-[8px] relative w-full h-full">
                    <div className="h-[180px] sm:h-[160px] lg:h-[200px] relative rounded-[24px] shrink-0 w-full overflow-hidden">
                        <img
                            alt={speaker.name}
                            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                            src={speaker.image}
                            loading="lazy"
                        />
                        <div aria-hidden="true" className="absolute border-2 border-[#191919] border-solid inset-0 pointer-events-none rounded-[24px]" />
                    </div>

                    <div className="content-stretch flex flex-col gap-[12px] items-center justify-between relative w-full h-full grow pb-2">
                        <div className="content-stretch flex flex-col gap-[4px] items-center leading-[0] relative shrink-0 text-[#191919] text-center whitespace-normal break-words px-2">
                            <div className="flex flex-col font-sugar-peachy font-bold justify-center not-italic relative shrink-0 text-[20px] lg:text-[24px]">
                                <p className="leading-none">{speaker.name}</p>
                            </div>
                            <div className="flex flex-col font-dm-sans font-normal justify-center relative shrink-0 text-[14px] lg:text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[1.1] text-center">{speaker.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div aria-hidden="true" className="absolute border-2 border-[#191919] border-solid inset-0 pointer-events-none rounded-[24px]" />
        </div>
    );
}

export default function HeroSectionV2() {
    return (
        <section className="bg-[#fff6ee] relative w-full h-auto lg:h-[1085px] overflow-hidden pb-32 lg:pb-0" id="hero" data-name="Section - 1 V2">
            {/* --- Background Graphics --- */}

            <div className="hidden lg:flex absolute lg:top-[-150px] lg:w-[1800px] lg:h-[1800px] items-center justify-center pointer-events-none z-0"
                style={{ left: '56vw' }}>
                <div className="relative w-full h-full lg:w-[1600px] lg:h-[1600px]">
                    <img
                        src="/images/grafismo_onda2.svg"
                        alt=""
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>

            <div className="hidden lg:block absolute lg:top-[-108px] lg:w-[1105px] lg:h-[1133px] pointer-events-none z-0"
                style={{ right: '75vw' }}>
                <img
                    src="/images/grafismo_onda1.svg"
                    alt=""
                    className="w-full h-full object-contain"
                />
            </div>

            {/* --- Main Content (Centered) --- */}
            <div className="relative lg:absolute lg:top-[120px] pt-[90px] lg:pt-0 left-0 lg:left-1/2 -translate-x-0 lg:-translate-x-1/2 w-full max-w-[1280px] flex flex-col items-center gap-[28px] md:gap-[46px] z-20 px-4 md:px-6 lg:px-0">

                <div className="flex flex-col items-center gap-[28px] w-full">
                    <div className="inline-flex items-center gap-[6px] px-4 py-3 md:px-[32px] md:py-[16px] rounded-[40px] border-2 border-[#505050] shadow-[4px_4px_0px_0px_#505050] bg-transparent max-w-[92vw] md:max-w-none text-center">
                        <div className="hidden md:block w-[18px] h-[18px] relative shrink-0">
                            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#505050" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16 2V6" stroke="#505050" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8 2V6" stroke="#505050" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3 10H21" stroke="#505050" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <span className="font-dm-sans font-bold text-[#505050] text-[12px] md:text-[14px] uppercase tracking-[0.14px] whitespace-normal md:whitespace-nowrap leading-tight">
                            19 a 22 de novembro · São Paulo/SP
                        </span>
                    </div>

                    <h1 className="font-sugar-peachy font-bold text-[#ef7d25] text-[32px] sm:text-[52px] md:text-[72px] lg:text-[88px] text-center leading-[0.9] md:leading-[0.9] tracking-[-1px] md:tracking-[-3px] relative px-4 md:px-0 w-full [-webkit-text-stroke:4px_#fff] md:[-webkit-text-stroke:8px_#fff] [paint-order:stroke_fill] [filter:drop-shadow(1px_1px_0_#191919)_drop-shadow(-1px_-1px_0_#191919)_drop-shadow(1px_-1px_0_#191919)_drop-shadow(-1px_1px_0_#191919)] md:[filter:drop-shadow(2px_2px_0_#191919)_drop-shadow(-2px_-2px_0_#191919)_drop-shadow(2px_-2px_0_#191919)_drop-shadow(-2px_2px_0_#191919)]">
                        <span className="block mt-1">
                            <span className="text-[#2260a1]">Mais de 50 especialistas</span>
                        </span>
                        <span className="block">reunidos para discutir os</span>
                        <span className="block">desafios da parentalidade</span>
                    </h1>

                    <div className="font-dm-sans text-[#4c4d4f] text-[16px] sm:text-[18px] md:text-[24px] text-center leading-[1.2] md:leading-[1.1] flex flex-col gap-3 md:gap-4 max-w-full md:max-w-[1150px] px-2 md:px-0">
                        <p>
                            Um encontro presencial de quatro dias que reúne profissionais, especialistas e famílias para aprofundar o desenvolvimento emocional de crianças e as relações que moldam quem elas se tornam.
                        </p>
                        <p>
                            Evolução do Congresso Internacional de Educação Parental.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-[16px] w-full max-w-[400px] md:max-w-none">
                    <a href="#profissional" className="group relative w-full md:w-[332px]">
                        <div className="bg-[#f7a73c] border-2 border-[#191919] flex items-center justify-center gap-[10px] px-[20px] md:px-[30px] py-[16px] rounded-[40px] shadow-[4px_4px_0px_0px_#191919] group-hover:translate-y-[1px] group-hover:shadow-[2px_2px_0px_0px_#191919] transition-all w-full">
                            <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 text-[#191919]">
                                <path d={svgPaths.p60d3f00} fill="currentColor" />
                            </svg>
                            <span className="font-dm-sans font-bold text-[#191919] text-[13px] md:text-[14px] uppercase tracking-[0.8px] md:tracking-[1px] whitespace-nowrap">
                                Sou profissional da área
                            </span>
                        </div>
                    </a>

                    <a href="#pais" className="group relative w-full md:w-[332px]">
                        <div className="bg-[#2260a1] border-2 border-[#191919] flex items-center justify-center gap-[10px] px-[20px] md:px-[30px] py-[16px] rounded-[40px] shadow-[4px_4px_0px_0px_#191919] group-hover:translate-y-[1px] group-hover:shadow-[2px_2px_0px_0px_#191919] transition-all w-full">
                            <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 text-[#fff6ee]">
                                <path d={svgPaths.p60d3f00} fill="currentColor" />
                            </svg>
                            <span className="font-dm-sans font-bold text-[#fff6ee] text-[13px] md:text-[14px] uppercase tracking-[0.8px] md:tracking-[1px] whitespace-nowrap">
                                Sou pai, mãe ou cuidador(a)
                            </span>
                        </div>
                    </a>
                </div>

            </div>

            {/* --- Lateral Carousel Container --- */}
            <div className="relative mt-12 lg:mt-0 w-full lg:absolute lg:top-[700px] z-30 overflow-hidden flex flex-col pt-0 pb-0 lg:py-4">
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @keyframes scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(calc(-50% - 10px)); }
                    }
                    .animate-scroll {
                        animation: scroll 40s linear infinite;
                    }
                    `
                }} />



                <div className="flex w-max animate-scroll gap-[16px] px-2 relative z-10 items-stretch h-full min-h-[300px] md:min-h-[320px]">
                    {[...allSpeakers, ...allSpeakers].map((speaker, index) => (
                        <div key={`${speaker.id}-${index}`} className="w-[60vw] sm:w-[280px] lg:w-[280px] shrink-0 self-stretch flex items-stretch py-2">
                            <HeroSpeakerCard speaker={speaker} />
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}
