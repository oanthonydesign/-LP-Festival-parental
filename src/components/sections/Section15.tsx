// components/sections/Section15Interactive.tsx
// Seção 15: Perguntas Frequentes (FAQ) com Acordeão Interativo

'use client';

import { useState } from 'react';
import svgPaths from "@/components/svg/svg-94ngdjnt4";

function Heading() {
  return (
    <div className="flex flex-col items-center md:items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-sugar-peachy justify-center leading-[0.8] md:leading-[0.8] not-italic relative shrink-0 text-[#f7a73c] text-[42px] md:text-[72px] w-full whitespace-pre-wrap text-center md:text-left">
        <p className="mb-0">Tudo o que você</p>
        <p>precisa saber</p>
      </div>
    </div>
  );
}

function Frequent() {
  return (
    <div className="flex flex-col items-center md:items-start relative shrink-0 w-full md:w-[600px]" data-name="Frequent">
      <Heading />
    </div>
  );
}

function TextAndLine() {
  return (
    <div className="flex flex-col items-start relative shrink-0 w-full" data-name="Text and Line">
      <Frequent />
    </div>
  );
}



function SectionTitle() {
  return (
    <div className="md:sticky md:top-32 self-center md:self-start flex flex-col gap-10 md:gap-16 w-full md:w-[600px] z-10" data-name="Section Title">
      <TextAndLine />
    </div>
  );
}

function Minus() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-name="Minus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Minus">
          <path d={svgPaths.p3c7a3f00} fill="var(--fill-0, black)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Plus() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-name="Plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Plus">
          <path d={svgPaths.p25ccb380} fill="var(--fill-0, black)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div
      className={`${isOpen ? 'bg-[#f7a73c]' : 'bg-[#fff6ef]'} relative rounded-[36px] shrink-0 w-full cursor-pointer transition-colors`}
      onClick={onToggle}
      data-name={isOpen ? "Desktop Open 1" : "Desktop Close 1"}
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className={`flex flex-col ${isOpen ? 'gap-[64px]' : ''} items-start p-[24px] relative w-full`}>
          <div className="flex items-start justify-between relative shrink-0 w-full gap-4" data-name="Question">
            <div className="flex flex-col font-sugar-peachy justify-center leading-[1.1] not-italic relative self-stretch shrink-0 text-[#191919] text-[24px] md:text-[24px] flex-1">
              <p className="whitespace-pre-wrap">{question}</p>
            </div>
            <div className="bg-[#fff6ef] relative rounded-[9999px] self-center shrink-0 w-[32px] h-[32px]" data-name="SVG">
              <div aria-hidden="true" className={`absolute ${isOpen ? 'border' : 'border-2'} border-[#191919] border-solid inset-0 pointer-events-none rounded-[9999px]`} />
              {isOpen ? <Minus /> : <Plus />}
            </div>
          </div>
          {isOpen && (
            <div className="flex flex-col font-dm-sans font-medium justify-center leading-[1.2] relative shrink-0 text-[#191919] text-[18px] lg:text-[24px] tracking-[-0.4px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
              <p className="leading-[1.1] whitespace-pre-wrap">{answer}</p>
            </div>
          )}
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#191919] border-solid inset-0 pointer-events-none rounded-[36px] shadow-[4px_4px_0px_0px_#191919]" />
    </div>
  );
}

function Container1() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqItems = [
    {
      question: "Para quem é o Festival Parental?",
      answer: "O Festival Parental foi pensado para dois públicos principais:\n\nProfissionais que trabalham com famílias, como psicólogos, educadores, terapeutas, pediatras e consultores parentais.\n\nPais, mães e cuidadores que desejam compreender melhor o desenvolvimento de crianças e adolescentes e fortalecer os vínculos familiares."
    },
    {
      question: "O que é exatamente o Festival Parental?",
      answer: "O Festival Parental é um encontro presencial que reúne especialistas nacionais e internacionais para discutir o desenvolvimento emocional de crianças e adolescentes e os desafios das relações familiares no mundo contemporâneo.\n\nDurante quatro dias, o evento reúne palestras, reflexões e experiências sobre vínculos, educação e convivência familiar, além de uma feira com iniciativas e marcas dedicadas ao universo da infância."
    },
    {
      question: "Qual passaporte dá acesso a cada dia do evento?",
      answer: "O Passaporte Educador dá acesso aos quatro dias do Festival Parental.\n\nO Passaporte Parental dá acesso apenas aos dois últimos dias do evento."
    },
    {
      question: "Qual é a relação entre o Festival Parental e o Congresso Internacional de Educação Parental?",
      answer: "Os dois primeiros dias do evento (19 e 20 de novembro) correspondem à 7ª edição do Congresso Internacional de Educação Parental, voltada principalmente para profissionais da área.\n\nA proposta do Festival amplia essa experiência, criando um ambiente mais imersivo e integrando diferentes formatos de aprendizado e reflexão ao longo dos quatro dias."
    },
    {
      question: "Já acompanho alguns palestrantes nas redes sociais. O evento oferece algo diferente?",
      answer: "Sim.\n\nRedes sociais e livros oferecem acesso à informação. O evento presencial permite algo diferente: tempo de imersão, aprofundamento das ideias e contato direto com especialistas e com outras pessoas que compartilham das mesmas inquietações.\n\nA experiência coletiva e o ambiente de reflexão costumam gerar insights que dificilmente acontecem no consumo rápido de conteúdo online."
    },
    {
      question: "Vou conseguir aplicar o que aprender no meu trabalho com famílias?",
      answer: "Sim.\n\nO conteúdo apresentado pelos especialistas foi pensado para ajudar profissionais a compreender melhor os processos emocionais que moldam o desenvolvimento de crianças e adolescentes.\n\nA proposta é oferecer fundamentos sólidos e reflexões que ampliem o olhar sobre as relações familiares e possam ser incorporadas à prática profissional."
    },
    {
      question: "A programação do evento já está definida?",
      answer: "A programação completa do Festival Parental ainda está em construção. Estamos a alguns meses do evento e novos convidados, palestras e painéis continuam sendo confirmados.\n\nEm breve divulgaremos a programação detalhada com os temas, palestrantes, painéis e horários de cada dia. Nosso objetivo é ampliar continuamente o evento com novos nomes e conteúdos que tornem a experiência ainda mais rica para todos os participantes."
    },
    {
      question: "Posso levar meus filhos?",
      answer: "O evento foi pensado para adultos.\n\nA proposta é de que os participantes possam aproveitar o encontro com atenção e tranquilidade, dedicando esse tempo à reflexão e ao aprendizado."
    },
    {
      question: "Posso levar um acompanhante?",
      answer: "Sim.\n\nCada participante precisa possuir seu próprio ingresso.\n\nPais, mães ou cuidadores que desejarem participar juntos podem adquirir o Passaporte Parental Duplo, que oferece condições especiais."
    },
    {
      question: "O Festival será gravado?",
      answer: "Profissionais que adquirirem o Passaporte Educador terão acesso às gravações dos dois primeiros dias do evento (19 e 20 de novembro), que correspondem ao conteúdo do Congresso Internacional de Educação Parental.\n\nO acesso ficará disponível por 90 dias."
    },
    {
      question: "Haverá certificado de participação?",
      answer: "Sim.\n\nO certificado de participação será concedido exclusivamente aos participantes que adquirirem o Passaporte Educador.\n\nA emissão será eletrônica e as orientações para gerar o certificado serão disponibilizadas na plataforma do evento."
    },
    {
      question: "Há meia-entrada ou desconto para estudantes?",
      answer: "Não há política de meia-entrada ou desconto para estudantes."
    },
    {
      question: "Comprei meu passaporte e não poderei comparecer. O que devo fazer?",
      answer: "As informações sobre prazos e condições de reembolso podem ser consultadas na política oficial disponível na página do evento."
    },
    {
      question: "Onde acontece o Festival Parental?",
      answer: "O evento será realizado no Transamérica Expo Center, em São Paulo.\n\nO local está a aproximadamente:\n12 km do Aeroporto de Congonhas\n42 km do Aeroporto Internacional de Guarulhos\n\nA estação de metrô mais próxima é Santo Amaro, que atende à Linha 5-Lilás do Metrô e à Linha 9-Esmeralda da CPTM, a cerca de 10 a 15 minutos de caminhada."
    }
  ];

  return (
    <div className="flex flex-col gap-[24px] items-start relative shrink-0 w-full md:w-[650.72px]" data-name="Container">
      {faqItems.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
        />
      ))}
    </div>
  );
}

function Container() {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between w-full max-w-[1280px] gap-12" data-name="Container">
      <SectionTitle />
      <Container1 />
    </div>
  );
}

export default function Section15Interactive() {
  return (
    <section className="bg-[#fff6ef] flex flex-col items-center pt-[32px] md:pt-[128px] pb-[80px] md:pb-[128px] px-6 md:px-[30px] relative w-full" data-name="Section - 15" id="faq">
      <Container />
    </section>
  );
}
