import Header from '@/components/sections/Header';
import Rodape from '@/components/sections/Rodape';
import Copyright from '@/components/sections/Copyright';
import WhatsAppButton from '@/components/sections/WhatsAppButton';

export default function PoliticaDeReembolso() {
    return (
        <>
            <main className="min-h-screen relative overflow-x-clip bg-[#fff6ef]">
                <Header />
                
                <section className="pt-32 pb-20 px-6 sm:px-10 lg:px-20 max-w-4xl mx-auto font-dm-sans text-[#2f2b31]">
                    <h1 className="text-4xl md:text-5xl font-normal mb-4 font-sugar-peachy text-[#f05a28] tracking-wide">
                        POLÍTICA DE REEMBOLSO
                    </h1>
                    <p className="text-lg md:text-xl font-medium mb-10 text-[#4a464c]">
                        Leia atentamente antes de concluir a compra
                    </p>

                    <div className="space-y-6 text-base md:text-lg leading-relaxed">
                        <p>
                            O pagamento da inscrição dá direito à participação presencial ao Festival Parental 2026, nos dias e horários estipulados, conforme o ticket escolhido (Passaporte Educador ou Passaporte Parental).
                        </p>

                        <p>
                            Hospedagem, refeições e passagens aéreas ficam a cargo do participante.
                        </p>

                        <p>
                            A organização do Festival Parental 2026 informa que a solicitação de cancelamento de inscrição poderá ser realizada nas seguintes condições:
                        </p>

                        <ul className="list-decimal pl-6 space-y-4 my-6">
                            <li className="pl-2">
                                O cancelamento pode ser realizado em até 7 dias, a contar da data da compra, desde que o evento não tenha sido realizado.
                            </li>
                            <li className="pl-2">
                                Se a compra for efetuada na semana do evento, o cancelamento não será possível, ainda que esteja dentro do prazo acima citado.
                            </li>
                        </ul>

                        <p className="font-medium">
                            Não é possível o cancelamento de inscrições na data do evento ou após sua realização. Essa política é necessária porque não há tempo hábil de outras opções em um período tão curto.
                        </p>

                        <div className="bg-[#fdebe6] p-6 rounded-2xl my-8 border border-[#f05a28]/20">
                            <p className="mb-0">
                                Caso seu pedido esteja dentro das condições (prazos) descritas neste termo e condições, você deverá nos encaminhar um e-mail para <a href="mailto:contato@festivalparental.com.br" className="text-[#f05a28] font-bold hover:underline transition-all">contato@festivalparental.com.br</a> informando o nome completo, valor e data da compra.
                            </p>
                        </div>

                        <p>
                            Assim que recebermos o pedido, iniciaremos o processo de reembolso. O crédito do seu reembolso poderá variar dependendo do método de pagamento utilizado.
                        </p>

                        <p className="font-bold">
                            Em qualquer caso, ressaltamos que não atenderemos às solicitações de cancelamento de inscrições efetuadas fora do prazo de garantia acima citado.
                        </p>

                        <p>
                            Neste caso, avalie as opções:
                        </p>

                        <ul className="list-decimal pl-6 space-y-4 mt-4">
                            <li className="pl-2">
                                <span className="font-bold">Transferir sua inscrição para um conhecido.</span> A organização do Festival Parental 2026 só precisa do nome completo, e-mail e CPF da nova pessoa para efetuar a transferência do ingresso.
                            </li>
                            <li className="pl-2">
                                <span className="font-bold">Usar a inscrição na próxima edição do Festival,</span> sendo obrigatória a utilização no ano subsequente (e condicionada à realização do evento, sem possibilidade de reembolso caso não se realize).
                            </li>
                        </ul>

                        <div className="mt-16 flex justify-start">
                            <a href="/" className="inline-flex items-center justify-center bg-[#f7a73c] border-2 border-[#191919] text-[#191919] font-dm-sans font-bold uppercase text-sm md:text-base px-8 py-4 rounded-full shadow-[4px_4px_0px_0px_#191919] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#191919] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#191919] transition-all">
                                Voltar para a página inicial
                            </a>
                        </div>
                    </div>
                </section>

                <Rodape />
                <Copyright />
            </main>
            <WhatsAppButton />
        </>
    );
}
