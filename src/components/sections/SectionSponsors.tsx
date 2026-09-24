const sponsorGroups = [
  {
    level: 'prata',
    brands: [
      { name: 'Ciranda Cultural', logo: '/images/cirandaazul11x.webp' },
      { name: 'Taula', logo: '/images/atibaiahorizontal11x.webp' },
    ],
    cardClass: 'w-[78vw] max-w-[340px] lg:w-auto lg:max-w-none lg:min-h-[190px]',
  },
  {
    level: 'bronze',
    brands: [
      { name: 'Bernoulli', logo: '/images/behorizontal911x.webp' },
      { name: 'Escola Eleva', logo: '/images/logoelevainspiredschool411x.webp' },
      { name: 'Hospital Sabará', logo: '/images/group1661x.webp' },
      { name: 'Literário Books', logo: '/images/logoliterarenova11x.webp' },
      { name: 'BB Calçados', logo: '/images/mododeisolamento1x.webp' },
      { name: 'Cepaco', logo: '/images/logotipo70anosbege11x.webp' },
      { name: 'Amo Vacina', logo: '/images/logoamovacinas111x.webp' },
    ],
    cardClass: 'w-[60vw] max-w-[250px] lg:w-[calc((100%-32px)/3)] lg:max-w-none lg:min-h-[134px]',
  },
] as const;

export default function SectionSponsors() {
  return (
    <section id="patrocinadores" className="scroll-mt-20 bg-[#fff6ee] py-16 md:py-24" aria-labelledby="sponsors-title">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mb-12 text-center md:mb-16">
          <span className="inline-block rounded-full border-2 border-[#191919] bg-[#fff6ef] px-6 py-3 font-dm-sans text-xs font-bold uppercase tracking-widest shadow-[4px_4px_0_#191919]">
            Juntos pelo Festival
          </span>
          <h2 id="sponsors-title" className="mt-7 font-sugar-peachy text-[46px] leading-none text-[#191919] md:text-[68px]">
            Nossos patrocinadores
          </h2>
        </div>

        <div className="space-y-10 md:space-y-12">
          {sponsorGroups.map((group) => (
            <div key={group.level} className={group.level === 'bronze' ? 'border-t border-[#191919]/20 pt-10 md:pt-12' : ''}>
              <div className="sponsors-carousel relative left-1/2 w-screen -translate-x-1/2 overflow-hidden py-2 lg:hidden" role="list" aria-label={`Patrocinadores nível ${group.level}`}>
                <div className={`sponsors-marquee-track flex w-max ${group.level === 'bronze' ? 'sponsors-marquee-slow' : ''}`}>
                  {[0, 1].map((copy) => (
                    <div key={copy} className="flex shrink-0 gap-4 pr-4" aria-hidden={copy === 1}>
                      {group.brands.map((brand) => (
                        <div key={brand.name} role="listitem" className={`flex min-h-[150px] shrink-0 items-center justify-center rounded-2xl border-2 border-[#191919] bg-white px-5 py-8 shadow-[4px_4px_0_#191919] ${group.cardClass}`}>
                          <img src={brand.logo} alt={brand.name} loading="eager" className={`max-w-full object-contain ${group.level === 'prata' ? 'max-h-[125px]' : 'max-h-[80px]'}`} />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div className={`hidden gap-4 ${group.level === 'bronze' ? 'lg:flex lg:flex-wrap lg:justify-center' : 'lg:grid lg:grid-cols-2'}`} role="list" aria-label={`Patrocinadores nível ${group.level}`}>
                {group.brands.map((brand) => (
                  <div key={brand.name} role="listitem" className={`flex min-h-[150px] items-center justify-center rounded-2xl border-2 border-[#191919] bg-white px-8 py-8 shadow-[4px_4px_0_#191919] ${group.cardClass}`}>
                    <img src={brand.logo} alt={brand.name} loading="lazy" className={`max-w-full object-contain ${group.level === 'prata' ? 'max-h-[125px]' : 'max-h-[80px]'}`} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-[#191919]/20 pt-12 text-center md:mt-16 md:pt-16">
          <h2 className="font-sugar-peachy text-[38px] leading-none text-[#191919] md:text-[48px]">Apoiadores</h2>
          <div className="mx-auto mt-8 flex min-h-[150px] w-full max-w-[340px] items-center justify-center rounded-2xl border-2 border-[#191919] bg-white px-8 py-7 shadow-[4px_4px_0_#191919]">
            <img src="/images/eduzz.webp" alt="Eduzz" loading="lazy" className="max-h-[90px] max-w-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
