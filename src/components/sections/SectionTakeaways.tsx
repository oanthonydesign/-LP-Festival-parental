"use client";

import { useState } from "react";

const GROUPS = [
  {
    id: "profissionais",
    label: "Para profissionais",
    pillColor: "bg-[#3399CC]",
    cardColor: "bg-[#C2E6F5]",
    toggleColor: "bg-[#3399CC] text-white border-white/20",
    items: [
      {
        title: "Mais clareza para atuar",
        description:
          "Você sai com o repertório renovado para lidar com os desafios emocionais, relacionais e humanos que atravessam hoje o trabalho com famílias.",
      },
      {
        title: "Conexões que continuam depois do Festival",
        description:
          "Parcerias construídas a partir de interesses, desafios e visões de mundo em comum.",
      },
      {
        title: "O sentimento de fazer parte de uma área em transformação",
        description:
          "A sensação de pertencer a um campo que amadurece rapidamente e exige novas formas de compreender infância, vínculos e relações humanas.",
      },
      {
        title: "Mais clareza sobre o seu papel",
        description:
          "Uma compreensão mais clara sobre como sustentar sua prática profissional de forma consistente, humana e relevante no mundo atual.",
      },
    ],
  },
  {
    id: "pais",
    label: "Para pais e cuidadores",
    pillColor: "bg-[#ED9F8C]",
    cardColor: "bg-[#F8CEC4]",
    toggleColor: "bg-[#ED9F8C] text-[#191919] border-[#ED9F8C]",
    items: [
      {
        title: "Confiança nas suas decisões",
        description:
          "Menos culpa e menos sensação de estar sempre errando. Mais clareza para lidar com conflitos, limites e relações de forma possível na vida real.",
      },
      {
        title: "Mudanças que começam na rotina",
        description:
          "Pequenas mudanças de olhar, presença e postura que transformam a rotina, os conflitos e a forma como sua família atravessa os desafios do dia a dia.",
      },
      {
        title: "Uma nova perspectiva sobre educar",
        description:
          "A percepção de que educar também passa pela forma como você olha para si, para suas relações e para a infância.",
      },
      {
        title: "A certeza de que não está sozinho",
        description:
          "O alívio de perceber que outras famílias vivem dúvidas parecidas e que criar filhos no mundo de hoje pode ser menos solitário do que parece.",
      },
    ],
  },
] as const;

const PILL_CLASS = "rounded-full px-8 py-4 border-2 border-[#191919] shadow-[4px_4px_0px_0px_#191919] flex items-center justify-center";
const PILL_TEXT = "font-sugar-peachy text-[26px] md:text-[32px] tracking-[-0.5px] leading-[1] text-[#191919] text-center";
const CARD_TEXT_TITLE = "font-dm-sans font-bold text-[24px] leading-[1.2] text-[#191919]";
const CARD_TEXT_DESC = "font-dm-sans text-[16px] leading-[1.2] text-[#191919] opacity-75 mt-1";

export default function SectionTakeaways() {
  const [prof, pais] = GROUPS;
  const [active, setActive] = useState<"profissionais" | "pais">("profissionais");
  const activeGroup = GROUPS.find(g => g.id === active) || prof;

  return (
    <section className="bg-[#2260a1] w-full flex flex-col items-center pt-[40px] pb-[60px] px-4 lg:px-12 overflow-hidden">
      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
      <div className="max-w-[1280px] w-full flex flex-col items-center gap-12">

        {/* Header */}
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="border-2 border-[#191919] border-solid rounded-[40px] shadow-[4px_4px_0px_0px_#191919] px-4 lg:px-[32px] py-[16px] flex items-center gap-2 text-[#191919] bg-[#fff6ef]">
            <span className="font-dm-sans font-bold text-[14px] uppercase tracking-wider">O que você vai levar</span>
          </div>
          <h2 className="font-sugar-peachy text-[38px] md:text-[56px] lg:text-[64px] leading-[0.85] tracking-[-1.5px] text-white max-w-[680px]">
            Resultados que ficam depois do Festival
          </h2>
        </div>

        {/* Toggle (Mobile Only) */}
        <div className="flex border border-white/20 rounded-full p-1.5 gap-1.5 bg-[#17487c]/50 backdrop-blur-md self-center shadow-inner relative z-20 lg:hidden">
          {GROUPS.map((g) => (
            <button
              key={g.id}
              onClick={() => setActive(g.id as any)}
              className={`px-8 py-3.5 rounded-full font-dm-sans font-bold text-[13px] md:text-[14px] uppercase tracking-wider transition-all duration-300 border ${active === g.id
                ? `${g.toggleColor} shadow-md scale-100`
                : "bg-transparent text-white/50 border-transparent hover:text-white/80 hover:bg-white/5 scale-95"
                }`}
            >
              {g.label}
            </button>
          ))}
        </div>

        {/* MOBILE: Carrossel nativo */}
        <div
          className="flex overflow-x-auto snap-x snap-mandatory lg:hidden gap-4 w-[calc(100%+32px)] -mx-4 px-4 py-4 -my-4 hide-scrollbar items-stretch"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          key={active}
        >
          {activeGroup.items.map((item, idx) => (
            <div
              key={idx}
              className={`${activeGroup.cardColor} shrink-0 snap-center w-[85vw] h-auto rounded-2xl px-6 py-4 border-2 border-[#191919] shadow-[4px_4px_0px_0px_#191919] flex flex-col gap-1 hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#191919] transition-all duration-300`}
            >
              <h4 className={CARD_TEXT_TITLE}>{item.title}</h4>
              <p className={CARD_TEXT_DESC}>{item.description}</p>
            </div>
          ))}
        </div>

        {/*
          DESKTOP: grid flat com 2 colunas — pills e cards intercalados por linha.
          O CSS grid iguala a altura de todos os itens da mesma linha automaticamente.
          - Azul (prof): começa à direita (idx par = justify-end, ímpar = justify-start)
          - Salmão (pais): começa à esquerda (idx par = justify-start, ímpar = justify-end)
        */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-x-32 lg:gap-y-3 items-stretch w-full">

          {/* Linha de pills — prof à direita, pais à esquerda (mesma direção do 1º card) */}
          <div className="flex justify-end">
            <div className={`${prof.pillColor} ${PILL_CLASS} w-[85%]`}>
              <h3 className={PILL_TEXT}>{prof.label}</h3>
            </div>
          </div>
          <div className="flex justify-start">
            <div className={`${pais.pillColor} ${PILL_CLASS} w-[85%]`}>
              <h3 className={PILL_TEXT}>{pais.label}</h3>
            </div>
          </div>

          {/* Linhas de cards — flatMap garante que cada par fique na mesma linha do grid */}
          {([0, 1, 2, 3] as const).flatMap((idx) => [
            <div
              key={`prof-${idx}`}
              className={`flex ${idx % 2 === 0 ? "justify-end" : "justify-start"} ${idx === 0 ? "mt-6" : ""}`}
            >
              <div className={`${prof.cardColor} rounded-2xl px-6 py-4 w-[85%] flex flex-col border-2 border-[#191919] shadow-[4px_4px_0px_0px_#191919]`}>
                <h4 className={CARD_TEXT_TITLE}>{prof.items[idx].title}</h4>
                <p className={CARD_TEXT_DESC}>{prof.items[idx].description}</p>
              </div>
            </div>,
            <div
              key={`pais-${idx}`}
              className={`flex ${idx % 2 === 0 ? "justify-start" : "justify-end"} ${idx === 0 ? "mt-6" : ""}`}
            >
              <div className={`${pais.cardColor} rounded-2xl px-6 py-4 w-[85%] flex flex-col border-2 border-[#191919] shadow-[4px_4px_0px_0px_#191919]`}>
                <h4 className={CARD_TEXT_TITLE}>{pais.items[idx].title}</h4>
                <p className={CARD_TEXT_DESC}>{pais.items[idx].description}</p>
              </div>
            </div>,
          ])}
        </div>

      </div>
    </section>
  );
}
