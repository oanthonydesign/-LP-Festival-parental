"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronRight, Users, Baby, Mic2, Star, Music, CalendarDays } from 'lucide-react';
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

type EventType = 'named' | 'placeholder' | 'interval' | 'system' | 'special';

type ScheduleEvent = {
    time: string;
    title: string;
    type: EventType;
};

type Stage = {
    id: string;
    label: string;
    events: ScheduleEvent[];
};

type DayData = {
    id: number;
    date: string;
    dayLabel: string;
    weekday: string;
    access: 'professional' | 'all';
    accessLabel: string;
    themeColor: string;
    credenciamento: { time: string; note?: string }[];
    overviewHighlights: string[];
    stages: Stage[];
};

const scheduleFullData: DayData[] = [
    {
        id: 0,
        date: '19 Novembro',
        dayLabel: 'Dia 1',
        weekday: 'quinta-feira',
        access: 'professional',
        accessLabel: 'Exclusivo para profissionais',
        themeColor: '#3399CC',
        credenciamento: [
            { time: '07h00', note: 'exclusivo para embaixadores' },
            { time: '08h00' },
        ],
        overviewHighlights: ['Telma Abrahão', 'Gordon Neufeld', 'Lançamento de livros'],
        stages: [
            {
                id: 'palco1',
                label: 'Palco 1',
                events: [
                    { time: '09h00', title: 'Abertura 7° Congresso Internacional de Educação Parental com convidado especial', type: 'named' },
                    { time: '09h45', title: 'Em breve', type: 'placeholder' },
                    { time: '10h30', title: 'Intervalo', type: 'interval' },
                    { time: '11h00', title: 'Em breve', type: 'placeholder' },
                    { time: '12h30', title: 'Almoço', type: 'interval' },
                    { time: '14h00', title: 'Telma Abrahão', type: 'named' },
                    { time: '15h00', title: 'Gordon Neufeld', type: 'named' },
                    { time: '16h00', title: 'Intervalo', type: 'interval' },
                    { time: '16h30', title: 'Em breve', type: 'placeholder' },
                    { time: '18h00', title: 'Encerramento', type: 'system' },
                    { time: '18h00', title: 'Lançamento de livros — Espaço Literare Books', type: 'special' },
                ],
            },
            {
                id: 'palco2',
                label: 'Palco 2',
                events: [
                    { time: '09h45', title: 'Em breve', type: 'placeholder' },
                    { time: '10h30', title: 'Intervalo', type: 'interval' },
                    { time: '11h00', title: 'Em breve', type: 'placeholder' },
                    { time: '12h30', title: 'Almoço', type: 'interval' },
                    { time: '14h00', title: 'Em breve', type: 'placeholder' },
                    { time: '15h00', title: 'Em breve', type: 'placeholder' },
                    { time: '16h00', title: 'Intervalo', type: 'interval' },
                    { time: '16h30', title: 'Em breve', type: 'placeholder' },
                    { time: '18h00', title: 'Encerramento', type: 'system' },
                ],
            },
            {
                id: 'palco3',
                label: 'Palco 3',
                events: [
                    { time: '09h45', title: 'Em breve', type: 'placeholder' },
                    { time: '10h30', title: 'Intervalo', type: 'interval' },
                    { time: '11h00', title: 'Em breve', type: 'placeholder' },
                    { time: '12h30', title: 'Almoço', type: 'interval' },
                    { time: '14h00', title: 'Em breve', type: 'placeholder' },
                    { time: '15h00', title: 'Em breve', type: 'placeholder' },
                    { time: '16h00', title: 'Intervalo', type: 'interval' },
                    { time: '16h30', title: 'Em breve', type: 'placeholder' },
                    { time: '18h00', title: 'Encerramento', type: 'system' },
                ],
            },
            {
                id: 'arena',
                label: 'Arena Ciranda Cultural',
                events: [
                    { time: '10h30', title: 'Roda 1', type: 'named' },
                    { time: '12h30', title: 'Roda 2', type: 'named' },
                    { time: '16h00', title: 'Roda 3', type: 'named' },
                ],
            },
        ],
    },
    {
        id: 1,
        date: '20 Novembro',
        dayLabel: 'Dia 2',
        weekday: 'sexta-feira',
        access: 'professional',
        accessLabel: 'Exclusivo para profissionais',
        themeColor: '#3399CC',
        credenciamento: [
            { time: '08h00' },
        ],
        overviewHighlights: ['Encerramento 7° Congresso', 'Coquetel exclusivo embaixadores'],
        stages: [
            {
                id: 'palco1',
                label: 'Palco 1',
                events: [
                    { time: '09h00', title: 'Em breve', type: 'placeholder' },
                    { time: '10h30', title: 'Intervalo', type: 'interval' },
                    { time: '11h00', title: 'Em breve + Ivana / pré-venda', type: 'named' },
                    { time: '12h30', title: 'Almoço', type: 'interval' },
                    { time: '14h00', title: 'Em breve', type: 'placeholder' },
                    { time: '15h00', title: 'Em breve', type: 'placeholder' },
                    { time: '16h00', title: 'Intervalo', type: 'interval' },
                    { time: '16h30', title: 'Em breve', type: 'placeholder' },
                    { time: '18h00', title: 'Encerramento 7° Congresso Internacional de Educação Parental com convidado especial', type: 'system' },
                    { time: '18h00', title: 'Coquetel exclusivo para embaixadores', type: 'special' },
                ],
            },
            {
                id: 'palco2',
                label: 'Palco 2',
                events: [
                    { time: '09h00', title: 'Em breve', type: 'placeholder' },
                    { time: '10h30', title: 'Intervalo', type: 'interval' },
                    { time: '11h00', title: 'Em breve', type: 'placeholder' },
                    { time: '12h30', title: 'Almoço', type: 'interval' },
                    { time: '14h00', title: 'Em breve', type: 'placeholder' },
                    { time: '15h00', title: 'Em breve', type: 'placeholder' },
                    { time: '16h00', title: 'Intervalo', type: 'interval' },
                    { time: '18h00', title: 'Coquetel exclusivo para embaixadores', type: 'special' },
                ],
            },
            {
                id: 'palco3',
                label: 'Palco 3',
                events: [
                    { time: '09h00', title: 'Em breve', type: 'placeholder' },
                    { time: '10h30', title: 'Intervalo', type: 'interval' },
                    { time: '11h00', title: 'Em breve', type: 'placeholder' },
                    { time: '12h30', title: 'Almoço', type: 'interval' },
                    { time: '14h00', title: 'Em breve', type: 'placeholder' },
                    { time: '15h00', title: 'Em breve', type: 'placeholder' },
                    { time: '16h00', title: 'Intervalo', type: 'interval' },
                    { time: '18h00', title: 'Coquetel exclusivo para embaixadores', type: 'special' },
                ],
            },
            {
                id: 'arena',
                label: 'Arena Ciranda Cultural',
                events: [
                    { time: '10h30', title: 'Roda 4', type: 'named' },
                    { time: '12h30', title: 'Roda 5', type: 'named' },
                    { time: '16h00', title: 'Roda 6', type: 'named' },
                ],
            },
        ],
    },
    {
        id: 2,
        date: '21 Novembro',
        dayLabel: 'Dia 3',
        weekday: 'sábado',
        access: 'all',
        accessLabel: 'Aberto também para pais e cuidadores',
        themeColor: '#ED9F8C',
        credenciamento: [
            { time: '07h30' },
        ],
        overviewHighlights: ['Maya Eigenmann', 'Daniel Becker e Flávia Reis', 'Murilo Gun', 'Elisama Santos'],
        stages: [
            {
                id: 'palco1',
                label: 'Palco 1',
                events: [
                    { time: '09h00', title: 'Em breve', type: 'placeholder' },
                    { time: '10h30', title: 'Intervalo', type: 'interval' },
                    { time: '11h00', title: 'Em breve', type: 'placeholder' },
                    { time: '12h30', title: 'Almoço', type: 'interval' },
                    { time: '14h00', title: 'Em breve', type: 'placeholder' },
                    { time: '15h00', title: 'Em breve', type: 'placeholder' },
                    { time: '16h00', title: 'Intervalo', type: 'interval' },
                    { time: '16h30', title: 'Em breve', type: 'placeholder' },
                    { time: '18h00', title: 'Encerramento', type: 'system' },
                ],
            },
            {
                id: 'palco2',
                label: 'Palco 2',
                events: [
                    { time: '09h00', title: 'Em breve', type: 'placeholder' },
                    { time: '10h30', title: 'Intervalo', type: 'interval' },
                    { time: '11h00', title: 'Em breve', type: 'placeholder' },
                    { time: '12h30', title: 'Almoço', type: 'interval' },
                    { time: '14h00', title: 'Em breve', type: 'placeholder' },
                    { time: '15h00', title: 'Em breve', type: 'placeholder' },
                    { time: '16h00', title: 'Intervalo', type: 'interval' },
                    { time: '16h30', title: 'Em breve', type: 'placeholder' },
                    { time: '18h00', title: 'Encerramento', type: 'system' },
                ],
            },
            {
                id: 'palco3',
                label: 'Palco 3',
                events: [
                    { time: '09h00', title: 'Em breve', type: 'placeholder' },
                    { time: '10h30', title: 'Intervalo', type: 'interval' },
                    { time: '11h00', title: 'Em breve', type: 'placeholder' },
                    { time: '12h30', title: 'Almoço', type: 'interval' },
                    { time: '14h00', title: 'Em breve', type: 'placeholder' },
                    { time: '15h00', title: 'Em breve', type: 'placeholder' },
                    { time: '16h00', title: 'Intervalo', type: 'interval' },
                    { time: '16h30', title: 'Em breve', type: 'placeholder' },
                    { time: '18h00', title: 'Encerramento', type: 'system' },
                ],
            },
            {
                id: 'palco4',
                label: 'Palco 4',
                events: [
                    { time: '09h00', title: 'Maya Eigenmann', type: 'named' },
                    { time: '10h30', title: 'Intervalo', type: 'interval' },
                    { time: '11h00', title: 'Daniel Becker e Flávia Reis — Nossos filhos no século XXI', type: 'named' },
                    { time: '12h30', title: 'Almoço', type: 'interval' },
                    { time: '14h30', title: 'Murilo Gun', type: 'named' },
                    { time: '16h00', title: 'Intervalo', type: 'interval' },
                    { time: '16h30', title: 'Elisama Santos', type: 'named' },
                    { time: '18h00', title: 'Encerramento', type: 'system' },
                ],
            },
            {
                id: 'arena',
                label: 'Arena Ciranda Cultural',
                events: [
                    { time: '10h30', title: 'Roda 7', type: 'named' },
                    { time: '12h30', title: 'Roda 8', type: 'named' },
                    { time: '16h00', title: 'Roda 9', type: 'named' },
                ],
            },
        ],
    },
    {
        id: 3,
        date: '22 Novembro',
        dayLabel: 'Dia 4',
        weekday: 'domingo',
        access: 'all',
        accessLabel: 'Aberto também para pais e cuidadores',
        themeColor: '#ED9F8C',
        credenciamento: [
            { time: '07h30' },
        ],
        overviewHighlights: ['Nanda Perim', 'Isa Minatel — Mamma Ria', 'Marcos Piangers', 'Pato Fu e Giramundo'],
        stages: [
            {
                id: 'palco1',
                label: 'Palco 1',
                events: [
                    { time: '09h00', title: 'Em breve', type: 'placeholder' },
                    { time: '10h30', title: 'Intervalo', type: 'interval' },
                    { time: '11h00', title: 'Em breve', type: 'placeholder' },
                    { time: '12h30', title: 'Almoço', type: 'interval' },
                    { time: '14h00', title: 'Em breve', type: 'placeholder' },
                    { time: '15h00', title: 'Em breve', type: 'placeholder' },
                    { time: '16h00', title: 'Intervalo', type: 'interval' },
                ],
            },
            {
                id: 'palco2',
                label: 'Palco 2',
                events: [
                    { time: '09h00', title: 'Em breve', type: 'placeholder' },
                    { time: '10h30', title: 'Intervalo', type: 'interval' },
                    { time: '11h00', title: 'Em breve', type: 'placeholder' },
                    { time: '12h30', title: 'Almoço', type: 'interval' },
                    { time: '14h00', title: 'Em breve', type: 'placeholder' },
                    { time: '15h00', title: 'Em breve', type: 'placeholder' },
                    { time: '16h00', title: 'Intervalo', type: 'interval' },
                ],
            },
            {
                id: 'palco3',
                label: 'Palco 3',
                events: [
                    { time: '09h00', title: 'Em breve', type: 'placeholder' },
                    { time: '10h30', title: 'Intervalo', type: 'interval' },
                    { time: '11h00', title: 'Em breve', type: 'placeholder' },
                    { time: '12h30', title: 'Almoço', type: 'interval' },
                    { time: '14h00', title: 'Em breve', type: 'placeholder' },
                    { time: '15h00', title: 'Em breve', type: 'placeholder' },
                    { time: '16h00', title: 'Intervalo', type: 'interval' },
                ],
            },
            {
                id: 'palco4',
                label: 'Palco 4',
                events: [
                    { time: '09h00', title: 'Nanda Perim', type: 'named' },
                    { time: '10h30', title: 'Intervalo', type: 'interval' },
                    { time: '11h00', title: 'Isa Minatel — Mamma Ria', type: 'named' },
                    { time: '12h30', title: 'Almoço', type: 'interval' },
                    { time: '14h30', title: 'Marcos Piangers', type: 'named' },
                    { time: '16h00', title: 'Intervalo', type: 'interval' },
                    { time: '16h30', title: 'Pato Fu e Grupo Giramundo — Música de Brinquedo 2', type: 'special' },
                    { time: '18h00', title: 'Encerramento', type: 'system' },
                ],
            },
            {
                id: 'arena',
                label: 'Arena Ciranda Cultural',
                events: [
                    { time: '10h30', title: 'Roda 10', type: 'named' },
                    { time: '12h30', title: 'Roda 11', type: 'named' },
                    { time: '16h00', title: 'Roda 12', type: 'named' },
                ],
            },
        ],
    },
];

function EventRow({ event, themeColor }: { event: ScheduleEvent; themeColor: string }) {
    if (event.type === 'interval') {
        return (
            <div className="flex items-center gap-4 px-4 py-2">
                <span className="w-14 text-sm font-dm-sans font-bold text-[#4c4d4f]/40 flex-shrink-0 tabular-nums">{event.time}</span>
                <div className="flex-1 flex items-center gap-3">
                    <div className="flex-1 border-t border-dashed border-[#191919]/15" />
                    <span className="text-sm font-dm-sans text-[#4c4d4f]/40 whitespace-nowrap">{event.title}</span>
                    <div className="flex-1 border-t border-dashed border-[#191919]/15" />
                </div>
            </div>
        );
    }

    if (event.type === 'placeholder') {
        return (
            <div className="flex items-center gap-5 px-5 py-3.5 rounded-[12px] border border-dashed border-[#191919]/15">
                <span className="w-16 text-base font-dm-sans font-bold text-[#4c4d4f] flex-shrink-0 tabular-nums">{event.time}</span>
                <div className="flex items-center gap-2.5">
                    <span className="text-base font-dm-sans italic text-[#4c4d4f]/40">Em breve</span>
                    <span className="hidden sm:inline text-[11px] font-dm-sans uppercase tracking-wider text-[#4c4d4f]/30 border border-[#191919]/10 px-2.5 py-0.5 rounded-full">A confirmar</span>
                </div>
            </div>
        );
    }

    if (event.type === 'special') {
        return (
            <div className="flex items-start gap-5 px-5 py-5 rounded-[14px] border-2 border-[#191919] shadow-[3px_3px_0px_0px_#191919]" style={{ backgroundColor: '#F7A73C' }}>
                <span className="w-16 text-base font-dm-sans font-bold text-[#191919] flex-shrink-0 tabular-nums pt-0.5">{event.time}</span>
                <div className="flex-1 min-w-0">
                    <p className="text-base md:text-lg font-dm-sans font-bold text-[#191919] leading-tight">{event.title}</p>
                </div>
            </div>
        );
    }

    if (event.type === 'system') {
        return (
            <div className="flex items-center gap-5 px-5 py-3.5 rounded-[12px] border border-[#191919]/10">
                <span className="w-16 text-base font-dm-sans font-bold text-[#4c4d4f] flex-shrink-0 tabular-nums">{event.time}</span>
                <span className="text-base font-dm-sans text-[#191919] leading-tight">{event.title}</span>
            </div>
        );
    }

    return (
        <div
            className="flex items-start gap-5 px-5 py-4 rounded-[12px]"
            style={{ border: '1px solid rgba(25,25,25,0.12)', borderLeft: `3px solid ${themeColor}` }}
        >
            <span className="w-16 text-base font-dm-sans font-bold text-[#4c4d4f] flex-shrink-0 tabular-nums pt-0.5">{event.time}</span>
            <p className="flex-1 min-w-0 text-base md:text-lg font-dm-sans font-bold text-[#191919] leading-tight">{event.title}</p>
            <Star size={15} className="flex-shrink-0 mt-1" style={{ color: themeColor }} fill={themeColor} />
        </div>
    );
}

function ScheduleModal({ isOpen, onClose, initialDay }: { isOpen: boolean; onClose: () => void; initialDay: number }) {
    const [activeDayId, setActiveDayId] = useState(initialDay);
    const [activeStageId, setActiveStageId] = useState(scheduleFullData[initialDay].stages[0].id);

    useEffect(() => {
        if (isOpen) {
            setActiveDayId(initialDay);
            setActiveStageId(scheduleFullData[initialDay].stages[0].id);
        }
    }, [isOpen, initialDay]);

    useEffect(() => {
        if (!isOpen) return;
        const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', handler);
        return () => document.removeEventListener('keydown', handler);
    }, [isOpen, onClose]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    if (!isOpen) return null;

    const currentDay = scheduleFullData[activeDayId];
    const currentStage = currentDay.stages.find(s => s.id === activeStageId) ?? currentDay.stages[0];

    const handleDayChange = (dayId: number) => {
        setActiveDayId(dayId);
        setActiveStageId(scheduleFullData[dayId].stages[0].id);
    };

    return (
        <>
            <div
                className="fixed inset-0 bg-black/60 z-[100] backdrop-blur-sm"
                onClick={onClose}
                aria-hidden="true"
            />

            <div className="fixed inset-0 z-[101] flex items-end md:items-center justify-center pointer-events-none">
                <div
                    className="pointer-events-auto bg-[#fff6ef] w-full md:max-w-[920px] h-[92dvh] md:h-[88vh] rounded-t-[32px] md:rounded-[32px] flex flex-col overflow-hidden border-2 border-[#191919] md:shadow-[8px_8px_0px_0px_#191919]"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Programação completa"
                >
                    {/* Modal header */}
                    <div
                        className="flex items-center justify-between px-5 md:px-8 py-4 md:py-5 border-b-2 border-[#191919]/10 flex-shrink-0"
                        style={{ backgroundColor: currentDay.themeColor + '15' }}
                    >
                        <div className="flex items-center gap-3">
                            <CalendarDays size={20} style={{ color: currentDay.themeColor }} />
                            <h2 className="font-sugar-peachy text-[22px] md:text-[28px] text-[#191919] leading-none">
                                Confira a programação completa dos 4 dias do Festival
                            </h2>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-full hover:bg-[#191919]/10 transition-colors flex-shrink-0"
                            aria-label="Fechar programação"
                        >
                            <X size={22} className="text-[#191919]" />
                        </button>
                    </div>

                    {/* Day tabs */}
                    <div
                        className="flex gap-2 px-5 md:px-8 pt-4 pb-4 flex-shrink-0"
                    >
                        {scheduleFullData.map((day) => {
                            const isActive = activeDayId === day.id;
                            return (
                                <button
                                    key={day.id}
                                    onClick={() => handleDayChange(day.id)}
                                    className="flex-1 flex flex-col items-center justify-center py-3 px-2 rounded-[12px] border-2 border-[#191919] transition-all"
                                    style={{
                                        backgroundColor: isActive ? day.themeColor : '#ffffff',
                                        color: isActive ? '#ffffff' : '#191919',
                                        boxShadow: isActive ? '2px 2px 0px 0px #191919' : 'none',
                                    }}
                                >
                                    <span className="font-dm-sans font-bold text-[13px] md:text-[14px] leading-tight">
                                        {day.dayLabel}
                                    </span>
                                    <span className={`font-dm-sans text-[11px] md:text-[12px] leading-tight ${isActive ? 'text-white/80' : 'text-[#4c4d4f]'
                                        }`}>
                                        {day.date.split(' ')[0]}/{day.date.split(' ')[1].slice(0, 3).toLowerCase()}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Stage tabs */}
                    <div
                        className="flex flex-wrap justify-center gap-2 px-4 md:px-8 pt-5 pb-5 flex-shrink-0"
                    >
                        {currentDay.stages.map((stage) => {
                            const isActive = activeStageId === stage.id;
                            return (
                                <button
                                    key={stage.id}
                                    onClick={() => setActiveStageId(stage.id)}
                                    className="flex-shrink-0 px-5 py-2.5 rounded-full text-[15px] font-dm-sans font-bold border-2 border-[#191919] transition-all whitespace-nowrap"
                                    style={{
                                        backgroundColor: isActive ? currentDay.themeColor : '#ffffff',
                                        color: isActive ? '#ffffff' : '#191919',
                                        boxShadow: isActive ? '2px 2px 0px 0px #191919' : 'none',
                                    }}
                                >
                                    {stage.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* Timeline */}
                    <div className="flex-1 overflow-y-auto px-5 md:px-8 pb-10">
                        <div className="space-y-2.5">
                            {currentStage.events.map((event, idx) => (
                                <EventRow key={idx} event={event} themeColor={currentDay.themeColor} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function DayOverviewCard({ day, onClick }: { day: DayData; onClick: () => void }) {
    const isProfessional = day.access === 'professional';
    const palcoCount = day.stages.filter(s => s.id !== 'arena').length;

    return (
        <button
            onClick={onClick}
            className="w-full text-left bg-white rounded-[24px] border-2 border-[#191919] p-6 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#191919] transition-all duration-200 shadow-[4px_4px_0px_0px_#191919] group relative"
        >
            {/* Access badge */}
            <div
                className="absolute -top-3.5 right-4 px-3 py-1 text-[11px] font-dm-sans font-bold uppercase tracking-wider rounded-full border-2 border-[#191919]"
                style={{ backgroundColor: day.themeColor, color: '#ffffff' }}
            >
                {isProfessional ? 'Profissionais' : 'Pais/Mães'}
            </div>

            <div className="mt-2 flex flex-col gap-4">
                {/* Date */}
                <div>
                    <p className="text-[11px] font-dm-sans font-bold text-[#4c4d4f] uppercase tracking-widest mb-0.5">
                        {day.dayLabel} · {day.weekday}
                    </p>
                    <h3 className="font-sugar-peachy leading-none text-[#191919]">
                        <span className="text-[42px]">{day.date.split(' ')[0]}</span>{' '}
                        <span className="text-[26px]" style={{ color: day.themeColor }}>{day.date.split(' ')[1]}</span>
                    </h3>
                </div>

                {/* Stage info */}
                <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                        <Mic2 size={13} style={{ color: day.themeColor }} />
                        <span className="text-xs font-dm-sans font-bold text-[#4c4d4f]">{palcoCount} palcos simultâneos + Arena Ciranda</span>
                    </div>
                    <div className="flex items-center gap-2">
                        {isProfessional
                            ? <Users size={13} style={{ color: day.themeColor }} />
                            : <Baby size={13} style={{ color: day.themeColor }} />
                        }
                        <span className="text-xs font-dm-sans text-[#4c4d4f]">{day.accessLabel}</span>
                    </div>
                </div>



                {/* CTA */}
                <div
                    className="flex items-center gap-1.5 text-sm font-dm-sans font-bold group-hover:gap-3 transition-all mt-1"
                    style={{ color: day.themeColor }}
                >
                    Ver programação do dia
                    <ChevronRight size={15} />
                </div>
            </div>
        </button>
    );
}

export default function SectionSchedule() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [initialModalDay, setInitialModalDay] = useState(0);

    const openModal = useCallback((dayId: number) => {
        setInitialModalDay(dayId);
        setIsModalOpen(true);
    }, []);

    const closeModal = useCallback(() => setIsModalOpen(false), []);

    return (
        <>
            <section
                className="bg-[#fff6ef] w-full flex flex-col items-center py-[80px] px-4 md:px-8 scroll-mt-24"
                id="programacao"
            >
                <div className="w-full max-w-[1280px] flex flex-col gap-12">

                    {/* Header */}
                    <div className="text-center flex flex-col items-center gap-5">
                        <div className="flex flex-col items-center gap-3">
                            <h2 className="font-sugar-peachy text-[#ef7d25] text-[46px] lg:text-[72px] leading-none text-center">
                                Programação Festival Parental 2026
                            </h2>
                            <p className="font-dm-sans text-[#4c4d4f] text-[18px] lg:text-[22px] max-w-3xl text-center leading-snug">
                                Quatro dias de conteúdo profundo sobre parentalidade. Múltiplos palcos, trilhas exclusivas e experiências para todos os públicos.
                            </p>
                        </div>
                    </div>

                    {/* Day cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                        {scheduleFullData.map((day) => (
                            <DayOverviewCard
                                key={day.id}
                                day={day}
                                onClick={() => openModal(day.id)}
                            />
                        ))}
                    </div>

                    {/* Main CTA */}
                    <div className="flex flex-col items-center gap-4">
                        <p className="font-dm-sans text-[#4c4d4f] text-[16px] md:text-[18px] text-center">
                            Confira a programação completa com todos os palcos, horários e atrações.
                        </p>
                        <button
                            onClick={() => openModal(0)}
                            className="group relative"
                        >
                            <div className="bg-[#ef7d25] text-white border-2 border-[#191919] flex items-center justify-center gap-3 px-8 py-4 rounded-[40px] shadow-[4px_4px_0px_0px_#191919] group-hover:translate-y-[1px] group-hover:shadow-[2px_2px_0px_0px_#191919] group-active:translate-y-[2px] group-active:shadow-none transition-all">
                                <TicketIcon />
                                <span className="font-dm-sans font-bold text-[14px] uppercase tracking-[1px] whitespace-nowrap">
                                    Ver Programação Completa
                                </span>
                                <ChevronRight size={18} />
                            </div>
                        </button>
                    </div>

                </div>
            </section>

            <ScheduleModal
                isOpen={isModalOpen}
                onClose={closeModal}
                initialDay={initialModalDay}
            />
        </>
    );
}
