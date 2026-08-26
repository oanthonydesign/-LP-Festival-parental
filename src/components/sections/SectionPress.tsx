// components/sections/SectionPress.tsx
// Seção: Assessoria de Imprensa (acima da seção de patrocinadores)

export default function SectionPress() {
    return (
        <section className="bg-[#79C3AB] border-y-[5px] border-[#191919] py-[64px] lg:py-[86px] relative scroll-mt-24" data-name="Section - Imprensa" id="imprensa">
            <div className="max-w-[1280px] mx-auto px-6 flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8 text-center lg:text-left">
                <h2 className="font-sugar-peachy text-[#191919] text-[46px] lg:text-[72px] leading-[0.8]">
                    Informações à Imprensa
                </h2>

                <div className="font-dm-sans text-[#191919] flex flex-col gap-2 items-center lg:items-start">
                    <p className="font-bold text-[22px] lg:text-[26px]">Wilson Dell&apos;Isola</p>
                    <a
                        href="mailto:wilsondellisola@festivalparental.com.br"
                        className="text-[16px] lg:text-[20px] underline underline-offset-4 hover:opacity-70 transition-opacity break-all"
                    >
                        wilsondellisola@festivalparental.com.br
                    </a>
                </div>
            </div>
        </section>
    );
}
