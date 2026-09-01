"use client";

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, CalendarDays, MapPin, Clock } from 'lucide-react';

type Audience = 'profissional' | 'parental' | 'ambos';

type Highlight = {
    title: string;
    description: string;
    day: string;
    time: string;
    stage: string;
    speakers: { name: string; image?: string }[];
    audience: Audience;
    eyebrow?: string;
    credit?: string;
};

// Fotos provisórias: reaproveitadas da seção de palestrantes
const highlights: Highlight[] = [
    {
        title: 'Relações: a “tecnologia” mais poderosa para transformar uma vida',
        description: 'O que a ciência do apego nos ensina sobre construir relações fortes em tempos de tantas distrações?',
        day: 'Dia 1 (19/11)',
        time: '14h00',
        stage: 'Palco 1',
        speakers: [{ name: 'Dr. Gordon Neufeld', image: '/images/gordonneufeld1.webp' }, { name: 'Telma Abrahão', image: '/images/telmaa.webp' }],
        audience: 'profissional',
        eyebrow: 'Palestrante Internacional',
        credit: 'com Dr. Gordon Neufeld e Telma Abrahão (online, ao vivo)',
    },
    {
        title: 'Depois das telas: quem está educando nossas crianças?',
        description: 'Uma análise de como as novas tecnologias estão mudando a forma como crianças crescem, aprendem e constroem vínculos.',
        day: 'Dia 1 (19/11)',
        time: '11h00',
        stage: 'Palco 1',
        speakers: [{ name: 'Vanessa Cavalieri', image: '/images/vanessac.webp' }],
        audience: 'profissional',
    },
    {
        title: 'A epidemia silenciosa da ansiedade infantil e juvenil',
        description: 'Saiba como orientar pais sobre a necessidade de encaminhamento para psicólogos, médicos ou psiquiatras.',
        day: 'Dia 1 (19/11)',
        time: '11h00',
        stage: 'Palco 2',
        speakers: [{ name: 'Wimer Bottura Júnior', image: '/images/drwimerb.webp' }],
        audience: 'profissional',
    },
    {
        title: 'Toda família precisa se sentir parte',
        description: 'Como conversar com os filhos sobre diversidade e construir ambientes inclusivos?',
        day: 'Dia 3 (21/11)',
        time: '14h00',
        stage: 'Palco 2',
        speakers: [{ name: 'Dani Arrais', image: '/images/daniar.webp' }],
        audience: 'ambos',
    },
    {
        title: 'O legado invisível: o que realmente deixamos para nossos filhos',
        description: 'Uma reflexão sobre tempo, prioridades, presença e as marcas que construímos nas relações cotidianas.',
        day: 'Dia 4 (22/11)',
        time: '11h00',
        stage: 'Palco 4',
        speakers: [{ name: 'Marcos Piangers', image: '/images/marcosp.webp' }],
        audience: 'ambos',
    },
    {
        title: 'As conversas que protegem',
        description: 'Em pauta: Corpo, intimidade, consentimento, pornografia, relacionamentos e segurança digital.',
        day: 'Dia 4 (22/11)',
        time: '15h00',
        stage: 'Palco 1',
        speakers: [{ name: 'Lua Barros', image: '/images/luabar.webp' }, { name: 'Delegada Lisandréa Colabuono', image: '/images/delegada.webp' }],
        audience: 'ambos',
    },
    {
        title: 'Pato Fu e Giramundo',
        description: 'Um espetáculo premiado que transforma brinquedos em instrumentos e devolve adultos à própria infância. Para encerrar com leveza nosso fim de semana de reflexões profundas.',
        day: 'Dia 4 (22/11)',
        time: '16h30',
        stage: 'Palco 4',
        speakers: [{ name: 'Pato Fu e Grupo Giramundo', image: '/images/patofu1.webp' }],
        audience: 'ambos',
        eyebrow: 'Show de encerramento',
        credit: 'Pato Fu e Grupo Giramundo',
    },
];

// Mesma sequencia de cores dos cards da Section5
const cardColors = ['#2daa96', '#79c3ab', '#74acde', '#f7a73c'];

const passportTag = {
    profissional: { label: 'Passaporte Profissional', bg: '#3399CC', ink: '#fff6ef' },
    parental: { label: 'Passaporte Parental', bg: '#ED9F8C', ink: '#191919' },
};

const audienceTags: Record<Audience, (keyof typeof passportTag)[]> = {
    profissional: ['profissional'],
    parental: ['parental'],
    ambos: ['profissional', 'parental'],
};

function HighlightCard({ item, index }: { item: Highlight; index: number }) {
    const bg = cardColors[index % cardColors.length];
    const withPhotos = item.speakers.filter((s) => s.image);

    return (
        <article
            className="flex flex-col shrink-0 snap-center w-[85vw] sm:w-[420px] lg:w-[540px] bg-[color:var(--card-bg)] border-[3px] border-[#191919] rounded-[40px] p-8 lg:p-10 shadow-[8px_12px_0px_0px_#191919] relative isolate"
            style={{ '--card-bg': bg, color: '#191919' } as React.CSSProperties}
        >
            <div className="absolute inset-0 overflow-hidden rounded-[38px] pointer-events-none">
                <div className="absolute -top-12 -right-12 size-44 bg-white/25 rounded-full blur-2xl" />
                <div className="absolute -bottom-16 -left-10 size-40 bg-white/15 rounded-full blur-2xl" />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
                {audienceTags[item.audience].map((key) => (
                    <span
                        key={key}
                        className="font-dm-sans font-bold border-2 border-[#191919] px-4 py-2 rounded-full text-[12px] lg:text-[13px] uppercase tracking-wider shadow-[2px_2px_0px_0px_#191919]"
                        style={{ backgroundColor: passportTag[key].bg, color: passportTag[key].ink }}
                    >
                        {passportTag[key].label}
                    </span>
                ))}
            </div>

            <span className="font-dm-sans font-bold text-[14px] lg:text-[16px] uppercase tracking-[1px] text-[#191919]/60">
                {item.eyebrow ?? `Painel ${String(index + 1).padStart(2, '0')}`}
            </span>

            <h3 className="font-sugar-peachy text-[34px] lg:text-[46px] leading-[0.85] tracking-[-1px] mt-3">
                {item.title}
            </h3>

            <p className="font-dm-sans text-[16px] lg:text-[18px] leading-[1.35] font-medium opacity-90 mt-4">
                {item.description}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-dm-sans font-bold text-[14px] lg:text-[15px] mt-6 pt-5 border-t-2 border-[#191919]/20">
                <span className="flex items-center gap-2"><CalendarDays size={16} />{item.day}</span>
                <span className="flex items-center gap-2"><Clock size={16} />{item.time}</span>
                <span className="flex items-center gap-2"><MapPin size={16} />{item.stage}</span>
            </div>

            {/* Palestrantes */}
            <div className="flex items-center gap-4 mt-auto pt-6">
                {withPhotos.length > 0 && (
                    <div className="flex -space-x-4 shrink-0">
                        {withPhotos.map((s) => (
                            <img
                                key={s.name}
                                src={s.image}
                                alt={s.name}
                                loading="lazy"
                                className="size-[56px] lg:size-[64px] rounded-full object-cover border-[3px] border-[#191919] bg-[#fff6ef]"
                            />
                        ))}
                    </div>
                )}
                <p className="font-dm-sans font-bold text-[16px] lg:text-[20px] leading-tight">
                    {item.credit ?? `com ${item.speakers.map((s) => s.name).join(' e ')}`}
                </p>
            </div>
        </article>
    );
}

export default function SectionSpecialGuests() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (dir: 1 | -1) => {
        const el = scrollRef.current;
        if (!el) return;
        const card = el.firstElementChild as HTMLElement | null;
        const step = card ? card.offsetWidth + 24 : el.clientWidth;
        el.scrollBy({ left: dir * step, behavior: 'smooth' });
    };

    return (
        <section className="bg-[#fff6ef] w-full flex flex-col items-center pb-[80px] lg:pb-[120px] pt-[72px] relative overflow-hidden isolate z-20 scroll-mt-24" id="convidados-especiais">
            <style dangerouslySetInnerHTML={{
                __html: `.hide-scrollbar::-webkit-scrollbar { display: none; }`
            }} />

            <div className="layout-container flex flex-col items-center relative px-4 md:px-0 w-full max-w-[1240px]">

                {/* Header */}
                <div className="flex flex-col lg:flex-row gap-[24px] lg:gap-8 items-center lg:items-end lg:justify-between text-center lg:text-left relative z-10 w-full">
                    <h2 className="font-sugar-peachy text-[#ef7d25] text-[56px] lg:text-[72px] tracking-[-1.55px] lg:tracking-[-2px] leading-[0.8]">
                        Destaques da Programação
                    </h2>

                    <div className="hidden lg:flex gap-3 shrink-0 pb-2">
                        <button
                            onClick={() => scroll(-1)}
                            aria-label="Destaque anterior"
                            className="bg-[#f7a73c] border-2 border-[#191919] p-4 rounded-full shadow-[4px_4px_0px_0px_#191919] hover:-translate-y-[1px] hover:shadow-[5px_5px_0px_0px_#191919] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#191919] transition-all cursor-pointer"
                        >
                            <ChevronLeft size={24} className="text-[#191919]" />
                        </button>
                        <button
                            onClick={() => scroll(1)}
                            aria-label="Próximo destaque"
                            className="bg-[#f7a73c] border-2 border-[#191919] p-4 rounded-full shadow-[4px_4px_0px_0px_#191919] hover:-translate-y-[1px] hover:shadow-[5px_5px_0px_0px_#191919] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#191919] transition-all cursor-pointer"
                        >
                            <ChevronRight size={24} className="text-[#191919]" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Carrossel — full-bleed no desktop, alinhado ao grid na primeira coluna */}
            <div
                ref={scrollRef}
                className="flex flex-row items-stretch gap-6 overflow-x-auto snap-x snap-mandatory relative z-10 w-full mt-[48px] px-4 lg:px-[max(24px,calc((100vw-1240px)/2))] py-4 -my-4 hide-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {highlights.map((item, i) => (
                    <HighlightCard key={item.title} item={item} index={i} />
                ))}
            </div>
        </section>
    );
}
