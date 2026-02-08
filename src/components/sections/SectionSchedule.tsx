"use client";

import React, { useState } from 'react';
import { Clock, Users, Mic2, Store, Music, Info, Baby } from 'lucide-react';
import svgPaths from "@/components/svg/svgPaths";

function TicketIcon() {
    return (
        <div className="shrink-0 size-[20px]">
            <svg className="block size-full" fill="none" viewBox="0 0 15 12">
                <path d={svgPaths.p60d3f00} fill="currentColor" />
            </svg>
        </div>
    );
}

const scheduleData = [
    {
        id: 0,
        date: '19 Novembro',
        dayLabel: 'Dia 1',
        type: 'professional',
        highlights: [
            { icon: Users, text: 'Trilhas de conteúdo exclusivas para profissionais da parentalidade' },
            { icon: Mic2, text: '2 palcos simultâneos' },
        ],
        schedule: [
            { time: '09h00', title: 'Abertura do Evento', category: 'Início' },
            { time: '—', title: 'Programação de palestras e workshops em breve', category: 'Aguarde', isPlaceholder: true },
            { time: '18h30', title: 'Encerramento das atividades', category: 'Fim' },
        ]
    },
    {
        id: 1,
        date: '20 Novembro',
        dayLabel: 'Dia 2',
        type: 'professional',
        highlights: [
            { icon: Users, text: 'Trilhas de conteúdo exclusivas para profissionais da parentalidade' },
            { icon: Mic2, text: '2 palcos simultâneos' },
        ],
        schedule: [
            { time: '09h00', title: 'Abertura do Evento', category: 'Início' },
            { time: '—', title: 'Programação de palestras e workshops em breve', category: 'Aguarde', isPlaceholder: true },
            { time: '18h30', title: 'Encerramento das atividades', category: 'Fim' },
        ]
    },
    {
        id: 2,
        date: '21 Novembro',
        dayLabel: 'Dia 3',
        type: 'parent',
        highlights: [
            { icon: Baby, text: 'Trilhas de conteúdo abertas para pais e cuidadores' },
            { icon: Mic2, text: '4 palcos simultâneos' },
            { icon: Store, text: 'Feira de produtos e serviços para a parentalidade' },
        ],
        schedule: [
            { time: '09h00', title: 'Abertura do Evento e Feira', category: 'Início' },
            { time: '—', title: 'Programação de palestras e vivências em breve', category: 'Aguarde', isPlaceholder: true },
            { time: '18h00', title: 'Encerramento das atividades', category: 'Fim' },
        ]
    },
    {
        id: 3,
        date: '22 Novembro',
        dayLabel: 'Dia 4',
        type: 'parent',
        highlights: [
            { icon: Baby, text: 'Trilhas de conteúdo abertas para pais e cuidadores' },
            { icon: Mic2, text: '4 palcos simultâneos' },
            { icon: Store, text: 'Feira de produtos e serviços para a parentalidade' },
        ],
        schedule: [
            { time: '09h00', title: 'Abertura do Evento e Feira', category: 'Início' },
            { time: '16h30', title: 'Show "Música de Brinquedo" com Pato Fu e Grupo Giramundo', category: 'Show de Encerramento', isSpecial: true },
            { time: '18h00', title: 'Encerramento do Festival', category: 'Fim' },
        ]
    }
];

// Subcomponente para o conteúdo do dia (Timeline + Highlights + CTA)
function ScheduleDayContent({ day, activeColor }: { day: typeof scheduleData[0], activeColor: string }) {
    return (
        <div className="bg-white rounded-[32px] border-2 border-[#191919] p-6 md:p-12 shadow-[7px_7px_0px_0px_#191919] mt-6 md:mt-0">
            {/* Header of the Day Card */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 pb-8 border-b-2 border-dashed border-[#191919]/20 gap-6">
                <div className="flex flex-col gap-4">
                    <h3 className="font-sugar-peachy text-[32px] md:text-[48px] text-[#191919] leading-none">
                        {day.dayLabel} — <span style={{ color: activeColor }}>{day.date}</span>
                    </h3>

                    {/* Highlights / Features Grid */}
                    <div className="flex flex-wrap gap-3">
                        {day.highlights.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-2 px-4 py-2 rounded-[12px] border-2 border-[#191919] bg-white"
                            >
                                <item.icon size={18} style={{ color: activeColor }} />
                                <span className="font-dm-sans font-bold text-sm text-[#191919]">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Timeline List */}
            <div className="space-y-4">
                {day.schedule.map((event, idx) => {
                    const isSpecial = 'isSpecial' in event ? event.isSpecial : false;
                    const isPlaceholder = 'isPlaceholder' in event ? event.isPlaceholder : false;

                    return (
                        <div
                            key={idx}
                            className={`
                            flex flex-col md:flex-row items-center p-6 rounded-[24px] border-2 transition-all gap-4
                            ${isSpecial
                                    ? 'border-[#191919] bg-[#F7A73C] shadow-[4px_4px_0px_0px_#191919]'
                                    : isPlaceholder
                                        ? 'border-[#191919]/20 bg-[#f9f9f9] border-dashed'
                                        : 'border-[#191919]/10 bg-white hover:border-[#191919] hover:bg-[#fff6ef]/30'
                                }
                        `}
                        >

                            {/* Time */}
                            <div className="w-full md:w-32 flex-shrink-0 text-center md:text-left">
                                <div className="flex items-center justify-center md:justify-start gap-2 text-xl font-dm-sans font-bold text-[#191919]">
                                    {event.time !== '—' && <Clock size={20} className="text-[#4c4d4f]" />}
                                    {event.time}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-grow text-center md:text-left">
                                <h4 className={`text-lg md:text-xl font-dm-sans font-bold leading-tight ${isPlaceholder ? 'text-[#4c4d4f]/60 italic' : 'text-[#191919]'}`}>
                                    {event.title}
                                </h4>

                                {isSpecial && (
                                    <div className="mt-2 inline-flex items-center gap-1 text-sm font-bold font-dm-sans text-[#191919] bg-[#ef7d25]/20 border border-[#ef7d25] px-3 py-1 rounded-full">
                                        <Music size={14} className="text-[#ef7d25]" /> Atração Imperdível
                                    </div>
                                )}
                            </div>

                            {/* Category Label */}
                            <div className="flex-shrink-0">
                                <span className={`
                                px-4 py-1.5 rounded-full text-xs font-bold font-dm-sans uppercase tracking-wide border border-[#191919]
                                ${isSpecial ? 'bg-[#2260a1] text-white' : 'bg-white text-[#191919]'}
                            `}>
                                    {event.category}
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 pt-8 border-t-2 border-[#191919]/10 text-center flex flex-col items-center gap-6">
                <p className="font-dm-sans text-[#4c4d4f] text-lg">Não perca! Garanta seu lugar.</p>

                <a href={day.type === 'professional' ? '#educador' : '#parental'} className="group relative w-full md:w-auto">
                    <div
                        className="text-[#fff6ef] border-2 border-[#191919] flex items-center justify-center gap-[10px] px-[32px] py-[16px] rounded-[40px] shadow-[4px_4px_0px_0px_#191919] group-hover:translate-y-[1px] group-hover:shadow-[2px_2px_0px_0px_#191919] group-active:translate-y-[2px] group-active:shadow-[1px_1px_0px_0px_#191919] transition-all w-full md:w-auto"
                        style={{ backgroundColor: activeColor }}
                    >
                        <div className="hidden md:block">
                            <TicketIcon />
                        </div>
                        <span className="font-dm-sans font-bold text-[#fff6ef] text-[14px] uppercase tracking-[1px] whitespace-nowrap">
                            {day.type === 'professional' ? 'GARANTA SEU INGRESSO EDUCADOR' : 'GARANTA SEU INGRESSO PARENTAL'}
                        </span>
                    </div>
                </a>
            </div>
        </div>
    );
}

function DayButton({ day, isActive, onClick }: { day: typeof scheduleData[0], isActive: boolean, onClick: () => void }) {
    const isProfessional = day.type === 'professional';
    const themeColor = isProfessional ? '#ef7d25' : '#2260a1';

    return (
        <button
            onClick={onClick}
            className={`
                relative w-full p-6 rounded-[24px] border-2 border-[#191919] transition-all duration-300 ease-out text-left group
                ${isActive
                    ? 'translate-y-0 shadow-[4px_4px_0px_0px_#191919]'
                    : 'bg-white hover:-translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#191919]'
                }
            `}
            style={{
                backgroundColor: isActive ? themeColor : '#ffffff',
            }}
        >
            {/* Badge Superior */}
            <div className={`
                absolute -top-4 right-4 px-3 py-1 text-[12px] font-dm-sans font-bold uppercase tracking-wider rounded-full border-2 border-[#191919]
                ${isActive
                    ? 'bg-white text-[#191919]'
                    : (isProfessional ? 'bg-[#fff6ef] text-[#ef7d25]' : 'bg-[#eaf4ff] text-[#2260a1]')
                }
            `}>
                {isProfessional ? 'Profissionais' : 'Pais/Mães'}
            </div>

            <div className="flex flex-col h-full justify-between mt-2 gap-2">
                <span className={`text-sm font-dm-sans font-bold uppercase tracking-widest ${isActive ? 'text-white/90' : 'text-[#4c4d4f]'}`}>
                    {day.dayLabel}
                </span>
                <div className={`flex items-baseline gap-2 font-sugar-peachy leading-none ${isActive ? 'text-white' : 'text-[#191919]'}`}>
                    <span className="text-[42px]">
                        {day.date.split(' ')[0]}
                    </span>
                    <span className="text-[24px]">
                        {day.date.split(' ')[1]}
                    </span>
                </div>
            </div>
        </button>
    );
}

export default function SectionSchedule() {
    const [activeDay, setActiveDay] = useState(0);
    const currentDay = scheduleData[activeDay];

    // Definição de cores baseada no tipo (Professional = Laranja, Parent = Azul)
    const activeColor = currentDay.type === 'professional' ? '#ef7d25' : '#2260a1';

    return (
        <section className="bg-[#fff6ef] w-full flex flex-col items-center py-[80px] px-4 md:px-0" id="programacao">
            <div className="w-full max-w-[1280px] flex flex-col gap-12">

                {/* Header Section */}
                <div className="text-center flex flex-col items-center gap-6">
                    <div className="flex flex-col items-center gap-2">
                        <h2 className="font-sugar-peachy text-[#ef7d25] text-[46px] md:text-[64px] leading-none text-center">
                            Programação Festival Parental 2026
                        </h2>
                        <p className="font-dm-sans text-[#4c4d4f] text-[18px] md:text-[24px] max-w-3xl text-center leading-tight">
                            Um encontro presencial para refletir sobre a parentalidade com profundidade.
                            Duas jornadas intensas divididas por público.
                        </p>
                    </div>

                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#fff6ef] border-2 border-[#191919] rounded-[40px] shadow-[4px_4px_0px_0px_#191919]">
                        <Info size={20} className="text-[#ef7d25]" />
                        <span className="font-dm-sans font-bold text-[#191919] text-sm uppercase tracking-wide">
                            Em breve, programação completa!
                        </span>
                    </div>
                </div>

                {/* DESKTOP LAYOUT (Tabs + Content) */}
                <div className="hidden md:flex flex-col w-full">
                    {/* Navigation Tabs */}
                    <div className="flex flex-row justify-center items-stretch gap-4 w-full mb-8">
                        {scheduleData.map((day, index) => (
                            <div key={index} className="flex-1">
                                <DayButton
                                    day={day}
                                    isActive={activeDay === index}
                                    onClick={() => setActiveDay(index)}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="relative w-full">
                        <ScheduleDayContent day={currentDay} activeColor={activeColor} />
                    </div>
                </div>

                {/* MOBILE LAYOUT (Accordion) */}
                <div className="md:hidden flex flex-col gap-6 w-full">
                    {scheduleData.map((day, index) => {
                        const isActive = activeDay === index;
                        const dayActiveColor = day.type === 'professional' ? '#ef7d25' : '#2260a1';

                        return (
                            <div key={index} className="flex flex-col w-full">
                                <DayButton
                                    day={day}
                                    isActive={isActive}
                                    onClick={() => setActiveDay(index)}
                                />

                                {isActive && (
                                    <div className="animate-in fade-in slide-in-from-top-4 duration-300">
                                        <ScheduleDayContent day={day} activeColor={dayActiveColor} />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
