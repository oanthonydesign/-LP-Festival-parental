"use client";

import { useState } from "react";

type Group = "profissionais" | "pais";

const GROUPS = {
  profissionais: {
    label: "Para profissionais",
    toggleColor: "bg-[#3399CC] text-white border-white/20",
    accentColor: "#3399CC",
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
    <section className="bg-[#2260a1] w-full flex flex-col items-center pt-[40px] pb-[40px] px-4 overflow-hidden relative" id="para-quem">
      {/* Background Elements to add depth */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-[0.02] rounded-full blur-[80px] pointer-events-none translate-x-[20%] -translate-y-[20%]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#f7a73c] opacity-[0.03] rounded-full blur-[80px] pointer-events-none -translate-x-[20%] translate-y-[20%]" />

      <div className="max-w-[1280px] w-full flex flex-col items-center gap-12 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="border border-[#191919] border-solid rounded-[40px] shadow-[4px_4px_0px_0px_#191919] px-4 lg:px-[32px] py-[16px] flex items-center gap-2 text-[#191919] bg-[#fff6ef] transition-transform hover:translate-y-[-2px]">
            <span className="font-dm-sans font-bold text-[14px] uppercase tracking-wider">O que você vai viver</span>
          </div>
          <h2 className="font-sugar-peachy text-[38px] md:text-[56px] lg:text-[64px] leading-[0.85] tracking-[-1.5px] text-white max-w-[680px]">
            Uma experiência feita para quem você é
          </h2>
        </div>

        {/* Toggle */}
        <div className="flex border border-white/20 rounded-full p-1.5 gap-1.5 bg-[#17487c]/50 backdrop-blur-md self-center shadow-inner relative z-20">
          {(["profissionais", "pais"] as Group[]).map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`px-8 py-3.5 rounded-full font-dm-sans font-bold text-[13px] md:text-[14px] uppercase tracking-wider transition-all duration-300 border ${active === key
                ? `${GROUPS[key].toggleColor} shadow-md scale-100`
                : "bg-transparent text-white/50 border-transparent hover:text-white/80 hover:bg-white/5 scale-95"
                }`}
            >
              {GROUPS[key].label}
            </button>
          ))}
        </div>

        {/* Items Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 relative z-10 w-full animate-section-fade-in" key={active}>
          {group.items.map((item, idx) => (
            <div
              key={idx}
              className="flex p-6 md:p-8 border-2 border-[#191919] border-solid rounded-[24px] shadow-[4px_4px_0px_0px_#191919] bg-white relative overflow-hidden group hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#191919] transition-all duration-300 items-start justify-between gap-4 md:gap-6"
            >
              <div className="flex flex-col gap-2 md:gap-3 flex-1 relative z-10">
                <h3 className="font-dm-sans font-bold text-[18px] md:text-[20px] text-[#191919] leading-tight">
                  {item.title}
                </h3>
                <p className="font-dm-sans text-[15px] md:text-[16px] text-[#4c4d4f] leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="shrink-0 flex justify-end relative z-10 w-[20%] max-w-[80px]">
                <span
                  className="font-sugar-peachy text-[56px] md:text-[80px] leading-[0.7] tracking-[-2px] select-none pointer-events-none opacity-[0.6]"
                  style={{ color: group.accentColor }}
                >
                  {pad(idx + 1)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
