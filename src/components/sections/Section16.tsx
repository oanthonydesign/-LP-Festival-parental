'use client';

import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  image: string;
  name: string;
  role?: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    image: '/images/testimonial/andré.webp',
    name: 'Andre Henrique Lott',
    role: 'Pai e Médico Pediatra',
    text: 'Sou pediatra há 20 anos e a educação parental entrou na minha vida quando percebi a importância de quebrar padrões e evitar a perpetuação de traumas. Desde então, minha prática clínica mudou completamente e hoje não consigo mais desvincular a pediatria desse olhar.\n\nO festival é o evento que mais aguardo no ano pela qualidade do conhecimento e das trocas. Ser embaixador pelo terceiro ano reforça meu orgulho em fazer parte de um movimento que pode transformar o futuro das nossas crianças.'
  },
  {
    image: '/images/testimonial/susana.webp',
    name: 'Susana Martins',
    role: 'Educadora Parental e Embaixadora',
    text: '2025 foi o ano em que realizei o sonho de estar presente no Congresso Internacional de Educação Parental, depois de acompanhar tudo à distância e desejar viver essa experiência de perto.\n\nEstar entre educadoras parentais é mergulhar numa atmosfera de troca, conexão e afeto. Foram dias intensos e emocionantes, que deixaram saudade e a certeza de que quero voltar e reviver tudo novamente.'
  },
  {
    image: '/images/testimonial/rosana.webp',
    name: 'Rosana Poiani',
    role: 'Psicóloga, Educadora e Embaixadora',
    text: 'Estudar educação parental transformou não só minha atuação como psicóloga e educadora, mas também quem eu sou. Foi um processo profundo que me mostrou que educar não é sobre controle, e sim sobre consciência, vínculo e responsabilidade emocional.\n\nSer embaixadora é representar um movimento que convida adultos a olharem para si e construírem relações mais saudáveis. A educação parental transforma pessoas, e pessoas transformadas mudam o mundo.'
  },
  {
    image: '/images/testimonial/andré.webp',
    name: 'Andre Henrique Lott',
    role: 'Pai e Médico Pediatra',
    text: 'Sou pediatra há 20 anos e a educação parental entrou na minha vida quando percebi a importância de quebrar padrões e evitar a perpetuação de traumas. Desde então, minha prática clínica mudou completamente e hoje não consigo mais desvincular a pediatria desse olhar.\n\nO festival é o evento que mais aguardo no ano pela qualidade do conhecimento e das trocas. Ser embaixador pelo terceiro ano reforça meu orgulho em fazer parte de um movimento que pode transformar o futuro das nossas crianças.'
  },
  {
    image: '/images/testimonial/susana.webp',
    name: 'Susana Martins',
    role: 'Educadora Parental e Embaixadora',
    text: '2025 foi o ano em que realizei o sonho de estar presente no Congresso Internacional de Educação Parental, depois de acompanhar tudo à distância e desejar viver essa experiência de perto.\n\nEstar entre educadoras parentais é mergulhar numa atmosfera de troca, conexão e afeto. Foram dias intensos e emocionantes, que deixaram saudade e a certeza de que quero voltar e reviver tudo novamente.'
  },
  {
    image: '/images/testimonial/rosana.webp',
    name: 'Rosana Poiani',
    role: 'Psicóloga, Educadora e Embaixadora',
    text: 'Estudar educação parental transformou não só minha atuação como psicóloga e educadora, mas também quem eu sou. Foi um processo profundo que me mostrou que educar não é sobre controle, e sim sobre consciência, vínculo e responsabilidade emocional.\n\nSer embaixadora é representar um movimento que convida adultos a olharem para si e construírem relações mais saudáveis. A educação parental transforma pessoas, e pessoas transformadas mudam o mundo.'
  }
];

function Heading() {
  return (
    <div className="flex flex-col items-center md:items-start relative shrink-0 w-full lg:w-auto" data-name="Heading">
      <div className="flex flex-col font-sugar-peachy justify-center leading-[0.9] md:leading-[0.8] not-italic relative shrink-0 text-[#ef7d25] text-[42px] md:text-[72px] w-full whitespace-pre-wrap text-center md:text-left">
        <p className="mb-0">Quem já viveu</p>
        <p>essa experiência</p>
      </div>
      <p className="font-dm-sans font-medium text-[#4c4d4f] text-[16px] md:text-[20px] text-center md:text-left leading-snug mt-4 max-w-[600px]">
        O que pais, mães e profissionais dizem sobre o impacto do Festival Parental no dia a dia com os filhos.
      </p>
    </div>
  );
}

export default function Section16() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (scrollRef.current && scrollRef.current.firstElementChild) {
      const cardWidth = scrollRef.current.firstElementChild.clientWidth;
      const gap = window.innerWidth >= 1024 ? 32 : 24; // lg:gap-8 (32px), gap-6 (24px)
      scrollRef.current.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (scrollRef.current && scrollRef.current.firstElementChild) {
      const cardWidth = scrollRef.current.firstElementChild.clientWidth;
      const gap = window.innerWidth >= 1024 ? 32 : 24;
      scrollRef.current.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#fff6ee] flex flex-col items-center pt-[32px] pb-[32px] md:pb-[64px] px-4 md:px-[30px] relative w-full" id="depoimentos">
      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
      <div className="w-full max-w-[1280px] flex flex-col gap-8 md:gap-12 relative">

        {/* Topo: Título + Botões de Navegação (Desktop apenas) */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between w-full gap-6">
          <Heading />

          {/* Botões de Navegação - Desktop */}
          <div className="hidden lg:flex gap-4">
            <button
              onClick={handlePrev}
              className="bg-[#fff6ef] border-2 border-[#191919] p-3 rounded-full shadow-[4px_4px_0px_0px_#191919] hover:-translate-y-[1px] hover:shadow-[5px_5px_0px_0px_#191919] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#191919] transition-all cursor-pointer"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={24} className="text-[#191919]" />
            </button>
            <button
              onClick={handleNext}
              className="bg-[#f7a73c] border-2 border-[#191919] p-3 rounded-full shadow-[4px_4px_0px_0px_#191919] hover:-translate-y-[1px] hover:shadow-[5px_5px_0px_0px_#191919] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#191919] transition-all cursor-pointer"
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={24} className="text-[#191919]" />
            </button>
          </div>
        </div>

        {/* ============================== */}
        {/* CARROSSEL NATIVO UNIFICADO */}
        {/* ============================== */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 lg:gap-8 w-[calc(100%+32px)] -mx-4 px-4 relative py-4 -my-4 hide-scrollbar items-stretch"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="bg-white border-2 border-[#191919] rounded-[24px] shadow-[6px_6px_0px_0px_#191919] p-6 flex flex-col items-start text-left gap-4 hover:-translate-y-[4px] transition-all duration-300 h-auto shrink-0 snap-center lg:snap-start
                w-[85vw] sm:w-[400px] lg:w-[calc(33.333%-21.33px)]"
            >
              <p className="font-dm-sans text-[#191919] text-sm lg:text-base leading-relaxed whitespace-pre-line flex-grow">
                {testimonial.text}
              </p>

              <div className="flex items-center gap-4 mt-auto pt-2">
                <div className="w-16 h-16 rounded-full border-2 border-[#191919] overflow-hidden shadow-[4px_4px_0px_0px_#191919] bg-[#f1f1f1] shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-sugar-peachy text-[#ef7d25] text-2xl leading-none">
                    {testimonial.name}
                  </h3>
                  {testimonial.role && (
                    <span className="font-dm-sans font-medium text-[#4c4d4f] text-sm mt-1">
                      {testimonial.role}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botões de Navegação - Mobile (Abaixo do carrossel) */}
        <div className="flex lg:hidden justify-center gap-4 w-full mt-2 relative z-10 px-2">
          <button
            onClick={handlePrev}
            className="bg-[#fff6ef] border-2 border-[#191919] p-3 rounded-full shadow-[4px_4px_0px_0px_#191919] hover:-translate-y-[1px] hover:shadow-[5px_5px_0px_0px_#191919] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#191919] transition-all cursor-pointer"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft size={24} className="text-[#191919]" />
          </button>
          <button
            onClick={handleNext}
            className="bg-[#f7a73c] border-2 border-[#191919] p-3 rounded-full shadow-[4px_4px_0px_0px_#191919] hover:-translate-y-[1px] hover:shadow-[5px_5px_0px_0px_#191919] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#191919] transition-all cursor-pointer"
            aria-label="Próximo depoimento"
          >
            <ChevronRight size={24} className="text-[#191919]" />
          </button>
        </div>

      </div>
    </section>
  );
}
