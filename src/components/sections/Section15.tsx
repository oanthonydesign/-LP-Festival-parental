// components/sections/Section15Interactive.tsx
// Seção 15: Perguntas Frequentes (FAQ) com Acordeão Interativo

'use client';

import { useState } from 'react';
import svgPaths from "@/components/svg/svg-94ngdjnt4";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-sugar-peachy justify-center leading-[0.8] not-italic relative shrink-0 text-[#f7a73c] text-[84px] w-full whitespace-pre-wrap">
        <p className="mb-0">Perguntas</p>
        <p>Frequentes</p>
      </div>
    </div>
  );
}

function Frequent() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[468.23px]" data-name="Frequent">
      <Heading />
    </div>
  );
}

function TextAndLine() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and Line">
      <Frequent />
    </div>
  );
}

function StoryImage() {
  return (
    <div className="h-[286px] relative rounded-[24px] shrink-0 w-[544px]" data-name="Story Image">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute h-[858px] left-[-14px] top-[-241.15px] w-[572px]" data-name="CEP-252 1">
          {/* IMPORTANTE: Substituir por imagem Next.js */}
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="/images/festival/cep-252.png" loading="lazy" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-3 border-[#191919] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[72px] items-start relative shrink-0 w-[544.47px]" data-name="Section Title">
      <TextAndLine />
      <StoryImage />
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
        <div className={`content-stretch flex flex-col ${isOpen ? 'gap-[64px]' : ''} items-start p-[24px] relative w-full`}>
          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Question">
            <div className="flex flex-col font-sugar-peachy justify-center leading-[0] not-italic relative self-stretch shrink-0 text-[#191919] text-[32px] w-[632.72px]">
              <p className="leading-none whitespace-pre-wrap">{question}</p>
            </div>
            <div className="bg-[#fff6ef] relative rounded-[9999px] self-stretch shrink-0 w-[32px]" data-name="SVG">
              <div aria-hidden="true" className={`absolute ${isOpen ? 'border' : 'border-2'} border-[#191919] border-solid inset-0 pointer-events-none rounded-[9999px]`} />
              {isOpen ? <Minus /> : <Plus />}
            </div>
          </div>
          {isOpen && (
            <div className="flex flex-col font-dm-sans font-medium justify-center leading-[0] relative shrink-0 text-[#191919] text-[16px] tracking-[-0.4px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
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
      question: "What is Lorem Ipsum?",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
    },
    {
      question: "What is Lorem Ipsum?",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
    },
    {
      question: "What is Lorem Ipsum?",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
    },
    {
      question: "What is Lorem Ipsum?",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
    },
    {
      question: "What is Lorem Ipsum?",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
    }
  ];

  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[650.72px]" data-name="Container">
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
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[1280px]" data-name="Container">
      <SectionTitle />
      <Container1 />
    </div>
  );
}

export default function Section15Interactive() {
  return (
    <div className="bg-[#fff6ef] content-stretch flex flex-col items-center justify-center pb-[128px] pt-[86px] px-[30px] relative size-full" data-name="Section - 15">
      <Container />
    </div>
  );
}
