"use client";

import { useState } from "react";

type Group = "profissionais" | "pais";

const GROUPS = {
  profissionais: {
    label: "Para profissionais",
    toggleColor: "bg-[#2260a1] text-white border-[#2260a1]",
    accentColor: "#2260a1",
    items: [
      {
        title: "As autoridades que definem o mercado",
        description:
          "O palco que fundou a educação parental no Brasil agora está ampliado com as referências nacionais e internacionais que você já segue, reunidas em um só lugar.",
      },
      {
        title: "A ciência traduzida para a prática",
        description:
          "Neurociência, desenvolvimento humano e clínica sem enrolação para garantir o que há de mais atualizado para quem atua na linha de frente com famílias.",
      },
      {
        title: "O epicentro do networking qualificado",
        description:
          "Um espaço onde psicólogos, educadores e terapeutas saem do isolamento profissional para construir juntos os próximos passos da área.",
      },
      {
        title: "Onde as parcerias de negócio acontecem",
        description:
          "O ambiente que deu origem à Abraep e onde continuam surgindo as redes, sociedades e projetos que movimentam o setor o ano todo.",
      },
    ],
  },
  pais: {
    label: "Para pais e cuidadores",
    toggleColor: "bg-[#ED9F8C] text-[#191919] border-[#ED9F8C]",
    accentColor: "#ED9F8C",
    items: [
      {
        title: "Respostas para o mundo real",
        description:
          "Abordagens sobre birras, limites, telas e exaustão sem julgamentos e sem as fórmulas mágicas que não funcionam na rotina da sua casa.",
      },
      {
        title: "Filtro contra o excesso de informação",
        description:
          "Uma curadoria do que realmente importa para o desenvolvimento do seu filho, validada por quem estuda e vive a parentalidade todos os dias.",
      },
      {
        title: "Conteúdo que vira ação",
        description:
          "Palestras e oficinas desenhadas para você entender o \"como fazer\" e não sair apenas com mais teorias acumuladas na cabeça.",
      },
      {
        title: "Respiro e cultura",
        description:
          "Momentos de leveza entre uma conversa e outra com teatro, humor, música e experiências feitas para você relaxar e se reconectar.",
      },
    ],
  },
} as const;

const pad = (n: number) => String(n).padStart(2, "0");

export default function SectionForWho() {
  const [active, setActive] = useState<Group>("profissionais");
  const group = GROUPS[active];

  return (
    <section className="bg-[#fff6ef] w-full flex flex-col items-center pt-[64px] pb-[64px] px-4 overflow-hidden">
      <div className="max-w-[1280px] w-full flex flex-col items-center gap-12">

        {/* Header */}
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="border-2 border-[#505050] border-solid rounded-[40px] shadow-[4px_4px_0px_0px_#505050] px-[24px] py-[12px] flex items-center gap-2 text-[#505050] bg-transparent">
            <span className="font-dm-sans font-bold text-[13px] uppercase tracking-wider">O que você vai viver</span>
          </div>
          <h2 className="font-sugar-peachy text-[38px] md:text-[56px] lg:text-[64px] leading-[0.85] tracking-[-1.5px] text-[#2260a1] max-w-[680px]">
            Uma experiência feita para quem você é
          </h2>
        </div>

        {/* Toggle */}
        <div className="flex border-2 border-[#191919] rounded-[40px] p-1 gap-1">
          {(["profissionais", "pais"] as Group[]).map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`px-6 py-3 rounded-[32px] font-dm-sans font-bold text-[12px] md:text-[13px] uppercase tracking-wider transition-all duration-300 border-2 ${active === key
                  ? `${GROUPS[key].toggleColor} shadow-[2px_2px_0px_0px_#191919]`
                  : "bg-transparent text-[#4c4d4f] border-transparent opacity-70 hover:opacity-100"
                }`}
            >
              {GROUPS[key].label}
            </button>
          ))}
        </div>

        {/* Items Grid */}
        <div
          key={active}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 animate-section-fade-in"
        >
          {group.items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-3 p-6 md:p-8 border-2 border-[#191919] border-solid rounded-[24px] shadow-[4px_4px_0px_0px_#191919] bg-white relative overflow-hidden"
            >
              <span
                className="font-sugar-peachy text-[80px] md:text-[96px] leading-none tracking-[-2px] select-none pointer-events-none absolute top-1 right-4 opacity-[0.07]"
                style={{ color: group.accentColor }}
              >
                {pad(idx + 1)}
              </span>
              <h3 className="font-dm-sans font-bold text-[17px] md:text-[18px] text-[#191919] leading-tight pr-14">
                {item.title}
              </h3>
              <p className="font-dm-sans text-[14px] md:text-[15px] text-[#4c4d4f] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
