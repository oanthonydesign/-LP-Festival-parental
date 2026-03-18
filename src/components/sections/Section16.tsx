'use client';

import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  type: 'image' | 'video';
  src: string;
  poster?: string; // Para vídeos
}

// Dados de exemplo (Mock). O usuário pode trocar as URLs pelos caminhos reais dos prints/vídeos.
const testimonials: Testimonial[] = [
  { type: 'image', src: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=687&auto=format&fit=crop' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=687&auto=format&fit=crop' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=687&auto=format&fit=crop' },
];

function Heading() {
  return (
    <div className="flex flex-col items-center md:items-start relative shrink-0 w-full md:w-auto mb-8 md:mb-12" data-name="Heading">
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

  const scrollLeft = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0]?.getBoundingClientRect().width || 0;
      const gap = 24; // Espaçamento
      scrollRef.current.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0]?.getBoundingClientRect().width || 0;
      const gap = 24; // Espaçamento
      scrollRef.current.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#fff6ee] flex flex-col items-center pt-[32px] md:pt-[32px] pb-[80px] md:pb-[32px] px-4 md:px-[30px] relative w-full overflow-hidden" id="depoimentos">
      <div className="w-full max-w-[1280px] flex flex-col gap-6 relative">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between w-full">
          <Heading />

          {/* Botões de Navegação (Desktop) */}
          <div className="hidden md:flex gap-4 mb-12">
            <button
              onClick={scrollLeft}
              className="bg-[#fff6ef] border-2 border-[#191919] p-3 rounded-full shadow-[4px_4px_0px_0px_#191919] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#191919] transition-all cursor-pointer"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={24} className="text-[#191919]" />
            </button>
            <button
              onClick={scrollRight}
              className="bg-[#f7a73c] border-2 border-[#191919] p-3 rounded-full shadow-[4px_4px_0px_0px_#191919] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#191919] transition-all cursor-pointer"
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={24} className="text-[#191919]" />
            </button>
          </div>
        </div>

        {/* Carrossel */}
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory w-full pb-6 px-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-none snap-start 
                         w-[calc((100%-16px)/1.2)] 
                         md:w-[calc((100%-96px)/4.333)] 
                         aspect-[9/16] bg-white border-2 border-[#191919] rounded-[24px] shadow-[6px_6px_0px_0px_#191919] overflow-hidden group mb-2"
            >
              {testimonial.type === 'image' ? (
                <div className="relative w-full h-full bg-[#f1f1f1]">
                  <img
                    src={testimonial.src}
                    alt={`Depoimento ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="relative w-full h-full bg-black">
                  <video
                    src={testimonial.src}
                    poster={testimonial.poster}
                    controls
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Botões de Navegação (Mobile) */}
        <div className="flex md:hidden justify-center gap-6 mt-2">
          <button
            onClick={scrollLeft}
            className="bg-[#fff6ef] border-2 border-[#191919] p-3 rounded-full shadow-[4px_4px_0px_0px_#191919] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#191919] transition-all"
          >
            <ChevronLeft size={24} className="text-[#191919]" />
          </button>
          <button
            onClick={scrollRight}
            className="bg-[#f7a73c] border-2 border-[#191919] p-3 rounded-full shadow-[4px_4px_0px_0px_#191919] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#191919] transition-all"
          >
            <ChevronRight size={24} className="text-[#191919]" />
          </button>
        </div>
      </div>
    </section>
  );
}
