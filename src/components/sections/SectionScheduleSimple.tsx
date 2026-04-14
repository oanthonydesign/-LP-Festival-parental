"use client";

import React from 'react';
import { Info } from 'lucide-react';
import svgCommon from '@/components/svg/svgPaths';


const scheduleData = [
    {
        id: 0,
        date: '19 Novembro',
        dayLabel: 'Dia 1',
        type: 'professional',
        time: 'Das 9h às 18h',
        description: 'Exclusivo para profissionais e equivale ao 7º Congresso Internacional de Educação Parental',
    },
    {
        id: 1,
        date: '20 Novembro',
        dayLabel: 'Dia 2',
        type: 'professional',
        time: 'Das 9h às 18h',
        description: 'Exclusivo para profissionais e equivale ao 7º Congresso Internacional de Educação Parental',
    },
    {
        id: 2,
        date: '21 Novembro',
        dayLabel: 'Dia 3',
        type: 'parent',
        time: 'Das 9h às 18h',
        description: 'Aberto também para pais e cuidadores',
    },
    {
        id: 3,
        date: '22 Novembro',
        dayLabel: 'Dia 4',
        type: 'parent',
        time: 'Das 9h às 18h',
        description: 'Aberto também para pais e cuidadores',
    }
];

function StaticDayCard({ day }: { day: typeof scheduleData[0] }) {
    const isProfessional = day.type === 'professional';
    const themeColor = isProfessional ? '#3399CC' : '#ED9F8C';
    const textColor = isProfessional ? 'text-[#fff6ef]' : 'text-[#191919]';
    const borderColor = isProfessional ? 'border-white/20' : 'border-[#191919]/20';
    const subtextColor = isProfessional ? 'text-white/90' : 'text-[#191919]/90';
    const badgeBg = isProfessional ? 'bg-white' : 'bg-[#191919]';
    const badgeText = isProfessional ? 'text-[#191919]' : 'text-white';

    return (
        <div
            className={`
                relative w-full p-6 md:p-8 rounded-[24px] md:rounded-[32px] border-2 border-[#191919] text-left shadow-[4px_4px_0px_0px_#191919]
            `}
            style={{
                backgroundColor: themeColor,
            }}
        >
            {/* Badge Superior */}
            <div className={`
                absolute -top-4 right-4 px-3 py-1 md:px-4 md:py-2 text-[12px] md:text-[14px] font-dm-sans font-bold uppercase tracking-wider rounded-full border-2 border-[#191919] ${badgeBg} ${badgeText} shadow-[2px_2px_0px_0px_#191919]
            `}>
                {isProfessional ? 'Profissionais' : 'Pais/Mães'}
            </div>

            <div className="flex flex-col h-full justify-start mt-2 md:mt-4 gap-2">
                <span className={`text-sm md:text-base font-dm-sans font-bold uppercase tracking-widest ${subtextColor}`}>
                    {day.dayLabel}
                </span>
                <div className={`flex flex-col xl:flex-row xl:items-baseline gap-1 md:gap-3 font-sugar-peachy leading-none ${textColor}`}>
                    <span className="text-[42px] md:text-[52px]">
                        {day.date.split(' ')[0]}
                    </span>
                    <span className="text-[24px] md:text-[28px]">
                        {day.date.split(' ')[1]}
                    </span>
                </div>

                <div className={`flex flex-col gap-3 mt-4 border-t-2 ${borderColor} pt-4`}>
                    <div className="flex items-center gap-2">
                        <span className={`font-dm-sans font-bold ${textColor} text-sm ${isProfessional ? 'bg-white/20' : 'bg-[#191919]/10'} px-3 py-1 rounded-full border ${isProfessional ? 'border-white/30' : 'border-[#191919]/20'} truncate`}>
                            {day.time}
                        </span>
                    </div>
                    <p className={`font-dm-sans ${isProfessional ? 'text-white/95' : 'text-[#191919]/95'} text-sm md:text-base leading-snug`}>
                        {day.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function SectionScheduleSimple() {
    return (
        <section className="bg-[#fff6ef] w-full flex flex-col items-center py-[40px] md:py-[80px] px-4 lg:px-0" id="programacao">
            <div className="w-full max-w-[1280px] flex flex-col gap-12">

                {/* Header Section */}
                <div className="text-center flex flex-col items-center gap-6">
                    <div className="flex flex-col items-center gap-2">
                        <h2 className="font-sugar-peachy text-[#ef7d25] text-[36px] lg:text-[72px] leading-none text-center">
                            Programação Festival Parental 2026
                        </h2>
                        <p className="font-dm-sans text-[#4c4d4f] text-[18px] lg:text-[24px] max-w-3xl text-center leading-tight">
                            Um encontro presencial para refletir sobre a parentalidade com profundidade.
                            Duas jornadas intensas divididas por público.
                        </p>
                    </div>
                </div>

                {/* Cards Layout Grouped by Phases */}
                <div className="flex flex-col gap-16 md:gap-24">

                    {/* Phase 1: Professionals */}
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3 border-l-0 md:border-l-8 border-[#3399CC] md:pl-8 py-2">
                            <h3 className="font-sugar-peachy text-[#3399CC] text-[32px] md:text-[52px] leading-tight tracking-tight">
                                Dias 1 e 2: A Base Profissional
                            </h3>
                            <p className="font-dm-sans text-[#4c4d4f] text-[18px] lg:text-[24px] opacity-90 leading-tight">
                                Da teoria à prática com consistência.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            <StaticDayCard day={scheduleData[0]} />
                            <StaticDayCard day={scheduleData[1]} />
                        </div>
                    </div>

                    {/* Phase 2: Parents */}
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3 border-l-0 md:border-l-8 border-[#ED9F8C] md:pl-8 py-2">
                            <h3 className="font-sugar-peachy text-[#ED9F8C] text-[32px] md:text-[52px] leading-tight tracking-tight">
                                Dias 3 e 4: A Vivência Parental
                            </h3>
                            <p className="font-dm-sans text-[#4c4d4f] text-[18px] lg:text-[24px] opacity-90 leading-tight">
                                Do improviso à clareza prática nas relações.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            <StaticDayCard day={scheduleData[2]} />
                            <StaticDayCard day={scheduleData[3]} />
                        </div>
                    </div>

                </div>

                <div className="flex flex-col items-center gap-8 mt-8">
                    <p className="font-dm-sans text-[#4c4d4f] text-[18px] md:text-[24px] opacity-70 italic text-center">
                        Programação completa em breve
                    </p>

                    <a
                        href="#ingressos"
                        className="group relative"
                    >
                        <div className="bg-[#f7a73c] border-2 border-[#191919] flex items-center justify-center gap-[10px] px-[32px] md:px-[64px] py-[16px] rounded-[40px] shadow-[4px_4px_0px_0px_#191919] group-hover:translate-y-[1px] group-hover:shadow-[2px_2px_0px_0px_#191919] transition-all w-full md:w-auto">
                            <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 text-[#191919]">
                                <path d={svgCommon.p60d3f00} fill="currentColor" />
                            </svg>
                            <span className="font-dm-sans font-bold text-[#191919] text-[14px] md:text-[16px] uppercase tracking-[1px] whitespace-nowrap">
                                Quero garantir meu lugar
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
