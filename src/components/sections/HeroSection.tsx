"use client";

import svgPaths from "@/components/svg/svgPaths";

export default function HeroSection() {
    return (
        <section className="bg-[#fff6ee] relative w-full h-auto lg:h-[1150px] overflow-hidden pb-0" id="hero" data-name="Section - 1">
            {/* --- Background Graphics --- */}

            {/* Grafismo Onda 2 - Mobile Bottom Right / Desktop Top Right */}
            <div className="hidden lg:flex absolute lg:top-[-150px] lg:w-[1800px] lg:h-[1800px] items-center justify-center pointer-events-none z-0"
                style={{ left: '56vw' }}>
                <div className="relative w-full h-full lg:w-[1600px] lg:h-[1600px]">
                    <img
                        src="/images/grafismo_onda2.svg"
                        alt=""
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>

            {/* Grafismo Onda 1 - Mobile Bottom Left / Desktop Top Left */}
            <div className="hidden lg:block absolute lg:top-[-108px] lg:w-[1105px] lg:h-[1133px] pointer-events-none z-0"
                style={{ right: '75vw' }}>
                <img
                    src="/images/grafismo_onda1.svg"
                    alt=""
                    className="w-full h-full object-contain"
                />
            </div>

            {/* --- Main Content (Centered) --- */}
            <div className="relative lg:absolute lg:top-[132px] pt-[90px] lg:pt-0 left-0 lg:left-1/2 -translate-x-0 lg:-translate-x-1/2 w-full max-w-[1280px] flex flex-col items-center gap-[28px] md:gap-[46px] z-20 px-4 md:px-6 lg:px-0">

                {/* Text Block */}
                <div className="flex flex-col items-center gap-[28px] w-full">
                    {/* Date/Location Tag */}
                    <div className="inline-flex items-center gap-[6px] px-4 py-3 md:px-[32px] md:py-[16px] rounded-[40px] border-2 border-[#505050] shadow-[4px_4px_0px_0px_#505050] bg-transparent max-w-[92vw] md:max-w-none text-center">
                        <div className="hidden md:block w-[18px] h-[18px] relative shrink-0">
                            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#505050" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16 2V6" stroke="#505050" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8 2V6" stroke="#505050" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3 10H21" stroke="#505050" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <span className="font-dm-sans text-[#505050] text-[12px] md:text-[14px] uppercase tracking-[0.14px] whitespace-normal md:whitespace-nowrap leading-tight">
                            19 a 22 de novembro · São Paulo/SP
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="font-sugar-peachy font-bold text-[#ef7d25] text-[40px] sm:text-[52px] md:text-[72px] lg:text-[88px] text-center leading-[0.95] md:leading-[0.9] tracking-[-1.5px] md:tracking-[-3px] relative px-2 md:px-0 w-full [-webkit-text-stroke:4px_#fff] md:[-webkit-text-stroke:8px_#fff] [paint-order:stroke_fill] [filter:drop-shadow(1px_1px_0_#191919)_drop-shadow(-1px_-1px_0_#191919)_drop-shadow(1px_-1px_0_#191919)_drop-shadow(-1px_1px_0_#191919)] md:[filter:drop-shadow(2px_2px_0_#191919)_drop-shadow(-2px_-2px_0_#191919)_drop-shadow(2px_-2px_0_#191919)_drop-shadow(-2px_2px_0_#191919)]">
                        <span className="block">Criar filhos nunca foi simples.</span>
                        <span className="block mt-2">
                            Agora, é <span className="text-[#2260a1]">oficialmente complexo</span>
                        </span>
                    </h1>

                    {/* Subtext */}
                    <div className="font-dm-sans text-[#4c4d4f] text-[16px] sm:text-[18px] md:text-[24px] text-center leading-[1.2] md:leading-[1.1] flex flex-col gap-3 md:gap-4 max-w-full md:max-w-[1124px] px-2 md:px-0">
                        <p>
                            O Festival Parental é a evolução do Congresso Internacional de Educação Parental, que há seis edições reúne profissionais para discutir ciência, prática e ética na parentalidade.
                        </p>
                        <p>
                            Agora, essa conversa se amplia e convida também pais, mães e cuidadores que querem refletir sobre a parentalidade com mais profundidade, menos culpa e mais consciência.
                        </p>
                    </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-[16px] w-full max-w-[400px] md:max-w-none">
                    {/* Botão Profissional */}
                    <a href="#profissional" className="group relative w-full md:w-[332px]">
                        <div className="bg-[#f7a73c] border-2 border-[#191919] flex items-center justify-center gap-[10px] px-[20px] md:px-[30px] py-[16px] rounded-[40px] shadow-[4px_4px_0px_0px_#191919] group-hover:translate-y-[1px] group-hover:shadow-[2px_2px_0px_0px_#191919] transition-all w-full">
                            <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 text-[#191919]">
                                <path d={svgPaths.p60d3f00} fill="currentColor" />
                            </svg>
                            <span className="font-dm-sans font-bold text-[#191919] text-[13px] md:text-[14px] uppercase tracking-[0.8px] md:tracking-[1px] whitespace-nowrap">
                                Sou profissional da área
                            </span>
                        </div>
                    </a>

                    {/* Botão Pais */}
                    <a href="#pais" className="group relative w-full md:w-[332px]">
                        <div className="bg-[#2260a1] border-2 border-[#191919] flex items-center justify-center gap-[10px] px-[20px] md:px-[30px] py-[16px] rounded-[40px] shadow-[4px_4px_0px_0px_#191919] group-hover:translate-y-[1px] group-hover:shadow-[2px_2px_0px_0px_#191919] transition-all w-full">
                            <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 text-[#fff6ee]">
                                <path d={svgPaths.p60d3f00} fill="currentColor" />
                            </svg>
                            <span className="font-dm-sans font-bold text-[#fff6ee] text-[13px] md:text-[14px] uppercase tracking-[0.8px] md:tracking-[1px] whitespace-nowrap">
                                Sou pai, mãe ou cuidador(a)
                            </span>
                        </div>
                    </a>
                </div>

            </div>

            {/* --- Speakers & Graphics Container --- */}
            {/* Mobile: Relative Layout (Flow) */}
            {/* Desktop: Absolute Layout (Pixel Perfect from Figma) */}
            <div className="relative mt-8 lg:mt-0 w-full max-w-[500px] mx-auto lg:mx-0 lg:max-w-none lg:w-[1336px] lg:h-[501px] lg:absolute lg:top-[629px] lg:left-1/2 lg:-translate-x-1/2 pointer-events-none z-10 px-4 lg:px-0">

                {/* Mobile wave graphic behind speakers */}
                <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2 w-[calc(100%+80px)] h-auto block lg:hidden z-0 opacity-100">
                    <img src="/images/grafismo_wave_mb.svg" alt="" className="w-full h-auto" />
                </div>

                {/* Mobile Single Image */}
                <img
                    src="/images/palestrantes_mobile2.webp"
                    alt="Palestrantes Festival Parental"
                    className="block lg:hidden w-full h-auto object-contain relative z-10"
                />

                {/* Desktop Individual Speakers (Hidden on Mobile) */}

                {/* Maya (Back Left - behind Daniel & Isa) */}
                <div className="hidden lg:block absolute lg:top-0 lg:left-[110px] lg:w-[297px] lg:h-[399px] transition-all z-[4]">
                    <img src="/images/maya.webp" alt="Maya" className="w-full h-full object-contain" />
                </div>

                {/* Daniel Becker (Front Left) */}
                <div className="hidden lg:block absolute lg:top-[152px] lg:left-[9px] lg:w-[371px] lg:h-[349px] transition-all z-[30]">
                    <img src="/images/daniel becker.webp" alt="Daniel Becker" className="w-full h-full object-contain" />
                </div>

                {/* Isa Minatel (Middle Left) */}
                <div className="hidden lg:block absolute lg:top-[114px] lg:left-[241px] lg:w-[246px] lg:h-[385px] transition-all z-[40]">
                    <img src="/images/Isa Minatel.webp" alt="Isa Minatel" className="w-full h-full object-contain" />
                </div>

                {/* Nanda Perim (Center Left) */}
                <div className="hidden lg:block absolute lg:top-[60px] lg:left-[402px] lg:w-[346px] lg:h-[441px] transition-all z-[50]">
                    <img src="/images/Nanda Perim.webp" alt="Nanda Perim" className="w-full h-full object-contain" />
                </div>

                {/* Marcos Piangers (Center Right) */}
                <div className="hidden lg:block absolute lg:top-[59px] lg:left-[597px] lg:w-[367px] lg:h-[442px] transition-all z-[60]">
                    <img src="/images/marcos piangers.webp" alt="Marcos Piangers" className="w-full h-full object-contain" />
                </div>

                {/* Telma Abrahão (Middle Right) */}
                <div className="hidden lg:block absolute lg:top-[109px] lg:left-[841px] lg:w-[279px] lg:h-[391px] transition-all z-[35]">
                    <img src="/images/Telma Abrahao.webp" alt="Telma Abrahão" className="w-full h-full object-contain" />
                </div>

                {/* Elisama (Back Right - behind Murilo) */}
                <div className="hidden lg:block absolute lg:top-[20px] lg:left-[970px] lg:w-[274px] lg:h-[349px] transition-all z-[5]">
                    <img src="/images/elisama.webp" alt="Elisama" className="w-full h-full object-contain" />
                </div>

                {/* Murilo Gun (Far Right) */}
                <div className="hidden lg:block absolute lg:top-[141px] lg:left-[933px] lg:w-[403px] lg:h-[360px] transition-all z-[10]">
                    <img src="/images/murilo gun.webp" alt="Murilo Gun" className="w-full h-full object-contain" />
                </div>

                {/* Grafismo 1 (Small Circle) */}
                <div className="hidden lg:block absolute lg:top-[170px] lg:left-[840px] w-[105px] h-[105px] z-[70]">
                    <img src="/images/grafismo_1.svg" alt="" className="w-full h-full" />
                </div>

                {/* Grafismo 2 (Shape) */}
                <div className="hidden lg:block absolute lg:top-[330px] lg:left-[230px] w-[60px] h-[60px] z-[71]">
                    <img src="/images/grafismo_2.svg" alt="" className="w-full h-full" />
                </div>
            </div>

        </section>
    );
}
