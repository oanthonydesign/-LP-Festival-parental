const GROUPS = [
  {
    id: "profissionais",
    label: "Para profissionais",
    bgColor: "bg-[#3399CC]",
    textColor: "text-[#191919]",
    dividerColor: "border-[#191919]",
    descColor: "text-white",
    items: [
      {
        title: "Segurança técnica para atuar",
        description:
          "Você sai com o repertório renovado para atender famílias com consistência, autoridade e embasamento científico de ponta.",
      },
      {
        title: "Projetos e parcerias no radar",
        description:
          "Oportunidade de criar conexões que não ficam no superficial e geram indicações, sociedades e novos negócios para a sua carreira.",
      },
      {
        title: "Identidade profissional fortalecida",
        description:
          "O sentimento de pertencer ao movimento que está profissionalizando a educação parental no país e elevando o nível do mercado.",
      },
      {
        title: "Clareza estratégica",
        description:
          "Uma visão nítida do seu papel profissional e de como escalar seu impacto no campo do desenvolvimento humano.",
      },
    ],
  },
  {
    id: "pais",
    label: "Para pais e cuidadores",
    bgColor: "bg-[#ED9F8C]",
    textColor: "text-[#191919]",
    dividerColor: "border-[#191919]",
    descColor: "text-white",
    items: [
      {
        title: "Confiança nas suas decisões",
        description:
          "Menos dúvida sobre o que fazer no próximo conflito e o alívio de se livrar daquela culpa que paralisa a educação.",
      },
      {
        title: "Ferramentas de aplicação imediata",
        description:
          "Mudanças práticas de postura que transformam a rotina da casa e a qualidade da relação com seus filhos logo no primeiro dia.",
      },
      {
        title: "Uma nova perspectiva sobre educar",
        description:
          "A compreensão de que a educação começa no seu olhar para a criança e, principalmente, no seu olhar para si mesmo.",
      },
      {
        title: "A certeza de que não está sozinho",
        description:
          "O acolhimento de perceber que suas dúvidas são compartilhadas e que existe um caminho seguro e possível para a sua família.",
      },
    ],
  },
] as const;

export default function SectionTakeaways() {
  return (
    <section className="bg-[#2260a1] w-full flex flex-col items-center pt-[40px] pb-[100px] px-4 lg:px-12 overflow-hidden">
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

        {/* Two Panels */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
          {GROUPS.map((group) => (
            <div
              key={group.id}
              className={`${group.bgColor} border-2 border-[#191919] border-solid rounded-[32px] shadow-[4px_4px_0px_0px_#191919] overflow-hidden`}
            >
              {/* Panel Header */}
              <div className={`px-7 pt-7 pb-5 border-b-2 border-[#191919]`}>
                <h3 className={`font-sugar-peachy text-[28px] md:text-[34px] tracking-[-1px] leading-[0.85] ${group.textColor}`}>
                  {group.label}
                </h3>
              </div>

              {/* Items */}
              <div className="flex flex-col">
                {group.items.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col gap-2 px-7 py-5 ${idx < group.items.length - 1 ? `border-b border-solid ${group.dividerColor}` : ""}`}
                  >
                    <h4 className={`font-dm-sans font-bold text-[15px] md:text-[21px] leading-tight ${group.textColor}`}>
                      {item.title}
                    </h4>
                    <p className={`font-dm-sans text-[13px] md:text-[16px] leading-relaxed ${group.descColor}`}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
