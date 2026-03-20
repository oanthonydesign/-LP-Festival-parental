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
    text: 'Sou pediatra há 20 anos. A educação parental apareceu na minha vida quando minha filha tinha 3 anos e percebi a necessidade de estudar para quebrar padrões e evitar a perpetuação de traumas geracionais.\n\nA minha prática clínica mudou após eu embarcar no mundo da parentalidade. Utilizo este conhecimento em todas as minhas consultas e acredito que não tem mais como desvencilhar a pediatria da educação parental. É preciso deixar a maternidade mais leve.\n\nO festival de educação parental é o meu evento mais aguardado do ano pela quantidade de conhecimento e trocas que ali ocorrem. Ser embaixador pelo 3º ano me enche de orgulho por saber que faço parte de um movimento que pode mudar o futuro das nossas crianças.'
  },
  {
    image: '/images/testimonial/susana.webp',
    name: 'Susana Martins',
    role: 'Educadora Parental e Embaixadora',
    text: '2025 foi o ano em que cumpri o sonho de estar presente no 6º Congresso Internacional de Educação Parental e foi uma experiência simplesmente maravilhosa.\n\nEm 2024 assisti ao congresso online e fui vibrando com tudo o que acontecia no presencial. Tinha amigas lá, partilhando comigo a energia e a alegria, e senti um enorme desejo de estar presente no ano seguinte. Comecei a criar condições para que isso acontecesse e, quando percebi, já estava vivendo essa experiência.\n\nEstar no meio de educadoras parentais é mergulhar numa bolha de amor. Foram dias de troca, conexão e presença. Chorei ao me despedir, mas já tenho meu bilhete de embaixadora. Deixo o convite para que se juntem a nós e sintam essa energia.'
  },
  {
    image: '/images/testimonial/rosana.webp',
    name: 'Rosana Poiani',
    role: 'Psicóloga, Educadora e Embaixadora',
    text: 'Ao longo desses anos, estudar educação parental ampliou meu olhar como psicóloga e educadora, mas, principalmente, me transformou como pessoa. Foi um processo profundo de autoconhecimento que me ensinou que educar não é sobre controle, e sim sobre consciência, vínculo e responsabilidade emocional.\n\nVivemos em uma sociedade cada vez mais reativa e distante do diálogo. A educação parental surge como um caminho possível para resgatar o respeito, a empatia e a humanidade dentro das famílias.\n\nSer embaixadora deste congresso é motivo de imenso orgulho. Representar um movimento que convida adultos a olharem primeiro para si é reafirmar meu compromisso com relações mais saudáveis. A educação parental muda pessoas – e pessoas transformadas mudam o mundo.'
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
  const [startIndex, setStartIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Navegação Mobile (Scroll Nativo)
  const handleMobileNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const handleMobilePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  // Navegação Desktop (State + Animação)
  const changeDesktopPage = (newIndexUpdater: (prev: number) => number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setStartIndex(newIndexUpdater);
      setIsAnimating(false);
    }, 250); // Tempo do fade-out antes de trocar os dados
  };

  const handleDesktopNext = () => {
    changeDesktopPage((prev) => (prev + 1) % testimonials.length);
  };

  const handleDesktopPrev = () => {
    changeDesktopPage((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Rotaciona o array de depoimentos com base no startIndex para Desktop
  const visibleTestimonials = [
    testimonials[startIndex % testimonials.length],
    testimonials[(startIndex + 1) % testimonials.length],
    testimonials[(startIndex + 2) % testimonials.length],
  ];

  return (
    <section className="bg-[#fff6ee] flex flex-col items-center pt-[32px] pb-[32px] md:pb-[64px] px-4 md:px-[30px] relative w-full overflow-hidden" id="depoimentos">
      <style dangerouslySetInnerHTML={{__html: `
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
              onClick={handleDesktopPrev}
              className="bg-[#fff6ef] border-2 border-[#191919] p-3 rounded-full shadow-[4px_4px_0px_0px_#191919] hover:translate-y-[1.5px] hover:shadow-[1.5px_1.5px_0px_0px_#191919] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#191919] transition-all cursor-pointer"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={24} className="text-[#191919]" />
            </button>
            <button
              onClick={handleDesktopNext}
              className="bg-[#f7a73c] border-2 border-[#191919] p-3 rounded-full shadow-[4px_4px_0px_0px_#191919] hover:translate-y-[1.5px] hover:shadow-[1.5px_1.5px_0px_0px_#191919] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#191919] transition-all cursor-pointer"
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={24} className="text-[#191919]" />
            </button>
          </div>
        </div>

        {/* ======================= */}
        {/* LAYOUT DESKTOP ORIGINAL */}
        {/* ======================= */}
        <div className={`hidden lg:grid grid-cols-3 gap-8 w-full relative transition-opacity duration-300 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          {visibleTestimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white border-2 border-[#191919] rounded-[24px] shadow-[6px_6px_0px_0px_#191919] p-6 flex flex-col items-start text-left gap-4 hover:translate-y-[-4px] transition-all duration-300 h-full"
            >
              <p className="font-dm-sans text-[#191919] text-base leading-relaxed whitespace-pre-line flex-grow">
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

        {/* ======================= */}
        {/* LAYOUT MOBILE CARROSSEL */}
        {/* ======================= */}
        <div 
          ref={scrollRef}
          className="flex lg:hidden overflow-x-auto snap-x snap-mandatory gap-6 w-[calc(100%+32px)] -mx-4 px-4 relative pb-4 hide-scrollbar items-stretch"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white border-2 border-[#191919] rounded-[24px] shadow-[6px_6px_0px_0px_#191919] p-6 flex flex-col items-start text-left gap-4 transition-all duration-300 h-auto shrink-0 snap-center w-[85vw] sm:w-[400px]"
            >
              <p className="font-dm-sans text-[#191919] text-sm sm:text-base leading-relaxed whitespace-pre-line flex-grow">
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
            onClick={handleMobilePrev}
            className="bg-[#fff6ef] border-2 border-[#191919] p-3 rounded-full shadow-[4px_4px_0px_0px_#191919] hover:translate-y-[1.5px] hover:shadow-[1.5px_1.5px_0px_0px_#191919] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#191919] transition-all cursor-pointer"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft size={24} className="text-[#191919]" />
          </button>
          <button
            onClick={handleMobileNext}
            className="bg-[#f7a73c] border-2 border-[#191919] p-3 rounded-full shadow-[4px_4px_0px_0px_#191919] hover:translate-y-[1.5px] hover:shadow-[1.5px_1.5px_0px_0px_#191919] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#191919] transition-all cursor-pointer"
            aria-label="Próximo depoimento"
          >
            <ChevronRight size={24} className="text-[#191919]" />
          </button>
        </div>

      </div>
    </section>
  );
}
