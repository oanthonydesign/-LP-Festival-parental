"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronRight, Users, Baby, Mic2, Star, Music, CalendarDays } from 'lucide-react';
import svgPaths from "@/components/svg/svgPaths";

function TicketIcon() {
    return (
        <div className="shrink-0 size-[20px]">
            <img src="/images/icons/ingresso_linha_branca.svg" alt="Ticket" className="w-full h-full object-contain" loading="lazy" />
        </div>
    );
}

import { scheduleFullData, DayData, Stage, ScheduleEvent } from "@/data/scheduleData";


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

    if (event.type === 'info') {
        return (
            <div className="flex items-center gap-4 px-5 py-3.5 rounded-[12px] bg-[#191919]/5 border border-[#191919]/10 text-[#4c4d4f]">
                <span className="w-16 text-base font-dm-sans font-bold flex-shrink-0 tabular-nums">{event.time}</span>
                <p className="text-xs md:text-sm font-dm-sans italic text-[#4c4d4f]/80 leading-tight flex-1">
                    {event.title}
                </p>
            </div>
        );
    }

    if (event.type === 'placeholder') {
        return (
            <div className="flex items-center gap-5 px-5 py-3.5 rounded-[12px] border border-dashed border-[#191919]/15">
                <span className="w-16 text-base font-dm-sans font-bold text-[#4c4d4f] flex-shrink-0 tabular-nums">{event.time}</span>
                <div className="flex items-center gap-2.5">
                    <span className="text-base font-dm-sans italic text-[#4c4d4f]/40">Em breve</span>
                </div>
            </div>
        );
    }

    if (event.type === 'special') {
        return (
            <div className="flex items-start gap-5 px-5 py-5 rounded-[14px] border-2 border-[#191919] shadow-[3px_3px_0px_0px_#191919]" style={{ backgroundColor: '#F7A73C' }}>
                <span className="w-16 text-base font-dm-sans font-bold text-[#191919] flex-shrink-0 tabular-nums pt-0.5">{event.time}</span>
                <div className="flex-1 min-w-0 flex flex-col gap-1">
                    <p className="text-base md:text-lg font-dm-sans font-bold text-[#191919] leading-tight">{event.title}</p>
                    {event.speakers && (
                        <p className="text-sm font-dm-sans font-semibold text-[#191919]/80">{event.speakers}</p>
                    )}
                    {event.description && (
                        <p className="text-xs md:text-sm font-dm-sans text-[#191919]/80 leading-relaxed mt-1">{event.description}</p>
                    )}
                </div>
            </div>
        );
    }

    if (event.type === 'system') {
        return (
            <div className="flex items-center gap-5 px-5 py-3.5 rounded-[12px] border border-[#191919]/10 bg-white/50">
                <span className="w-16 text-base font-dm-sans font-bold text-[#4c4d4f] flex-shrink-0 tabular-nums">{event.time}</span>
                <span className="text-base font-dm-sans font-bold text-[#191919] leading-tight">{event.title}</span>
            </div>
        );
    }

    return (
        <div
            className="flex flex-col md:flex-row items-start gap-3 md:gap-5 px-5 py-4.5 rounded-[16px] bg-white transition-all hover:shadow-[3px_3px_0px_0px_#191919]"
            style={{ border: '2px solid #191919', borderLeft: `6px solid ${themeColor}` }}
        >
            <span className="w-16 text-base font-dm-sans font-bold text-[#191919] flex-shrink-0 tabular-nums pt-0.5">
                {event.time}
            </span>
            <div className="flex-1 min-w-0 flex flex-col gap-1.5">
                <div className="flex items-start justify-between gap-3">
                    <h4 className="text-base md:text-lg font-dm-sans font-bold text-[#191919] leading-snug">
                        {event.title}
                    </h4>
                    <Star size={16} className="flex-shrink-0 mt-0.5" style={{ color: themeColor }} fill={themeColor} />
                </div>

                {event.speakers && (
                    <div className="flex items-center gap-2 text-sm font-dm-sans font-semibold text-[#ef7d25] pt-0.5">
                        <Mic2 size={15} className="flex-shrink-0 text-[#ef7d25]" />
                        <span>{event.speakers}</span>
                    </div>
                )}

                {event.description && (
                    <p className="text-xs md:text-sm font-dm-sans text-[#4c4d4f] leading-relaxed pt-1.5 border-t border-[#191919]/10 mt-1">
                        {event.description}
                    </p>
                )}
            </div>
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
                            <img src="/images/icons/calendario_cor.svg" alt="Calendário" className="w-[24px] h-[24px] shrink-0" loading="lazy" />
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
                        className="flex gap-2 px-5 md:px-8 pt-4 pb-2 flex-shrink-0"
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

                    {/* Logo 7° Congresso (Apenas Dia 1 e Dia 2) */}
                    {(activeDayId === 0 || activeDayId === 1) && (
                        <div className="flex justify-center items-center px-4 py-4 flex-shrink-0">
                            <img
                                src="/images/logo7ciephazul1.webp"
                                alt="7º Congresso Internacional de Educação Parental"
                                className="h-8 md:h-10 max-w-[160px] md:max-w-[200px] w-auto object-contain"
                                loading="lazy"
                            />
                        </div>
                    )}

                    {/* Stage tabs */}
                    <div
                        className="flex flex-wrap justify-center gap-2 px-4 md:px-8 pt-2 pb-5 flex-shrink-0"
                    >
                        {currentDay.stages.map((stage) => {
                            const isActive = activeStageId === stage.id;
                            return (
                                <button
                                    key={stage.id}
                                    onClick={() => setActiveStageId(stage.id)}
                                    className="flex-shrink-0 px-4 py-2 rounded-full text-[13px] md:text-[14px] font-dm-sans font-bold border-2 border-[#191919] transition-all whitespace-nowrap"
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
                        <div className="space-y-3">
                            {currentStage.events.map((event, idx) => (
                                <EventRow key={idx} event={event} themeColor={currentDay.themeColor} />
                            ))}
                        </div>
                        <p className="text-sm font-dm-sans italic text-[#4c4d4f]/70 text-center mt-6">
                            *Programação sujeita a alterações sem aviso prévio
                        </p>
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
            className="w-full text-left bg-white rounded-[24px] border-2 border-[#191919] p-6 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#191919] transition-all duration-200 shadow-[4px_4px_0px_0px_#191919] group relative cursor-pointer"
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
                    <p className="text-[11px] font-dm-sans font-bold text-[#191919] uppercase tracking-widest mb-0.5">
                        {day.dayLabel} · {day.weekday}
                    </p>
                    <h3 className="font-sugar-peachy leading-none">
                        <span className="text-[42px]" style={{ color: day.themeColor }}>{day.date.split(' ')[0]}</span>{' '}
                        <span className="text-[26px] text-[#191919]">{day.date.split(' ')[1]}</span>
                    </h3>
                </div>

                {/* Logo 7° Congresso para dias profissionais (Dia 19 e 20) */}
                {isProfessional && (
                    <div className="flex items-center pt-1 pb-1">
                        <img
                            src="/images/logo7ciephazul1.webp"
                            alt="7º Congresso Internacional de Educação Parental"
                            className="h-8 md:h-11 w-auto max-w-[150px] md:max-w-[180px] object-contain"
                            loading="lazy"
                        />
                    </div>
                )}

                {/* Stage info */}
                <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                        <img src="/images/icons/mic_cor.png" alt="Palcos" className="w-[14px] h-[14px]" loading="lazy" />
                        <span className="text-xs font-dm-sans font-bold text-[#4c4d4f]">{palcoCount} palcos simultâneos + Arena Ciranda</span>
                    </div>
                    <div className="flex items-center gap-2">
                        {isProfessional
                            ? <img src="/images/icons/profissionais_cor.svg" alt="Profissionais" className="w-[14px] h-[14px]" loading="lazy" />
                            : <img src="/images/icons/pais_cor.svg" alt="Pais" className="w-[14px] h-[14px]" loading="lazy" />
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
                                <img src="/images/icons/calendario_linha_branca.svg" alt="Calendário" className="w-[24px] h-[24px] shrink-0" loading="lazy" />
                                <span className="font-dm-sans font-bold text-[14px] uppercase tracking-[1px] whitespace-nowrap">
                                    Ver Programação Completa
                                </span>
                                <ChevronRight size={18} />
                            </div>
                        </button>
                        <p className="text-sm font-dm-sans italic text-[#4c4d4f]/70 text-center mt-2">
                            *Programação sujeita a alterações sem aviso prévio
                        </p>
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
