import WhatsAppButton from '@/components/sections/WhatsAppButton';
import Rodape from '@/components/sections/Rodape';
import Copyright from '@/components/sections/Copyright';

function BackgroundCurves() {
    return (
        <div className="absolute top-[300px] lg:top-[-25px] left-0 w-full z-0 pointer-events-none select-none opacity-100 overflow-hidden lg:overflow-visible">
            <img
                src="/images/grafismo_wave.svg"
                alt="Grafismo de ondas"
                className="w-full h-auto min-w-0 max-w-none lg:min-w-[1440px]"
                loading="lazy"
            />
        </div>
    );
}

export default function ObrigadoPelaCompra() {
    return (
        <>
            <main className="min-h-screen relative overflow-x-clip bg-[#fff6ef] flex flex-col justify-between">
                {/* Topo Simplificado apenas com Logo */}
                <div className="absolute top-0 left-0 right-0 h-[88px] flex items-center justify-center z-50">
                    <div className="relative w-[160px] md:w-[220px] h-[40px] md:h-[48px]">
                        <img
                            src="/images/logo_nav.svg"
                            alt="Festival Parental"
                            className="w-full h-full object-contain object-center"
                        />
                    </div>
                </div>

                <BackgroundCurves />

                <section className="flex-grow flex items-center justify-center pt-32 pb-20 px-4 md:px-6 relative z-10">
                    <div className="layout-container flex flex-col items-center w-full mt-4 md:mt-10">

                        {/* Box Padrão com Design System */}
                        <div className="bg-[#fff6ef] relative rounded-[32px] w-full max-w-[800px]">
                            {/* Borda e Sombra idênticas à Landing Page */}
                            <div aria-hidden="true" className="absolute border-2 border-[#191919] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[8px_8px_0px_0px_#191919] z-0" />

                            <div className="flex flex-col items-center w-full px-6 py-12 md:p-16 relative z-10">
                                {/* Loading Spinner ANIMATED */}
                                <div className="relative flex justify-center items-center w-24 h-24 mb-6">
                                    <div className="absolute w-full h-full border-4 border-[#191919]/5 rounded-full"></div>
                                    <div className="absolute w-full h-full border-4 border-[#f7a73c] rounded-full border-t-transparent animate-spin"></div>
                                    <svg className="w-8 h-8 text-[#f7a73c] animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>

                                {/* Título Principal */}
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-8 text-center font-sugar-peachy text-[#ef7d25] tracking-wide leading-[0.9]">
                                    Gerando ingressos
                                </h1>

                                {/* Textos de status */}
                                <div className="flex flex-col gap-6 items-center text-center font-dm-sans text-[#4c4d4f] text-[16px] md:text-[20px] w-full max-w-[800px]">
                                    <p className="font-medium text-[#191919] max-w-[600px] leading-tight">
                                        Seu pedido foi realizado com sucesso e estamos validando seu pagamento.
                                    </p>

                                    <div className="w-full text-center">
                                        <p className="leading-relaxed text-[18px] md:text-[22px] text-[#4c4d4f]">
                                            Após o pagamento aprovado, iremos gerar seus ingressos <br className="hidden md:block" /> e enviá-los para o seu <strong className="text-[#191919] font-bold">e-mail</strong>.
                                        </p>
                                    </div>

                                    <p className="text-[15px] opacity-80 italic max-w-[600px]">
                                        Caso não encontre o e-mail, verifique sua caixa de spam ou lixo eletrônico.
                                    </p>
                                </div>

                                {/* Divisor */}
                                <div className="w-full max-w-[400px] h-[1px] bg-gradient-to-r from-transparent via-[#191919]/10 to-transparent my-10"></div>

                                {/* Seção de Dúvidas / Links Rápidos */}
                                <div className="w-full flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-center text-center font-dm-sans">
                                    <div className="flex flex-col items-center">
                                        <span className="text-[#4c4d4f] text-[15px] mb-2">Ficou com alguma dúvida sobre o evento?</span>
                                        <a href="https://wa.me/5511915983957" target="_blank" rel="noopener noreferrer" className="text-[#ef7d25] font-bold text-[16px] hover:underline transition-all flex items-center gap-2">
                                            Entre em contato com a produção
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </a>
                                    </div>

                                    <div className="hidden md:block w-[1px] h-12 bg-[#191919]/10"></div>

                                    <div className="flex flex-col items-center md:items-start text-sm text-[#4c4d4f] gap-1">
                                        <a href="https://ajuda.eduzz.com" className="hover:text-[#ef7d25] transition-colors underline decoration-transparent hover:decoration-[#ef7d25]">Central de Ajuda</a>
                                        <a href="https://ajuda.eduzz.com/hc/pt-br/articles/4408673514651-Como-localizar-meu-ingresso-de-eventos-presenciais-Blinket-" className="hover:text-[#ef7d25] transition-colors underline decoration-transparent hover:decoration-[#ef7d25]">Como localizar meu ingresso?</a>
                                        <a href="https://ajuda.eduzz.com/hc/pt-br/articles/4403015079835-Como-transferir-meu-ingresso-para-alguém-Blinket" className="hover:text-[#ef7d25] transition-colors underline decoration-transparent hover:decoration-[#ef7d25]">Como transferir meu ingresso?</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="w-full border-t border-[#191919]/10">
                    <Rodape />
                    <Copyright />
                </div>
            </main>
            <WhatsAppButton />
        </>
    );
}
