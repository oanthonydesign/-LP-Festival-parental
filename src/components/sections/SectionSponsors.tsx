/* ─────────────────────────────────────────────────────────────────────────────
   SectionSponsors — Patrocinadores & Apoiadores
   ─────────────────────────────────────────────────────────────────────────────
   Proporção ótica por nível:
   Cada logo é renderizada dentro de um box com width × height fixos (em px).
   O object-fit:contain preenche o máximo possível SEM distorcer.
   Logos verticais usam mais altura; horizontais usam mais largura —
   mas todas parecem do mesmo "tamanho visual" dentro do mesmo nível.

     prata      → box 200 × 110 px  (maior destaque)
     bronze     → box 148 × 80  px  (médio)
     apoiadores → box 110 × 60  px  (menor)
───────────────────────────────────────────────────────────────────────────── */

// ─── Dados ───────────────────────────────────────────────────────────────────

const sponsorGroups = [
  {
    level: 'prata' as const,
    label: 'Prata',
    brands: [
      { name: 'Zippy', logo: '/images/zippy.webp' },
      { name: 'Ciranda Cultural', logo: '/images/cirandaazul11x.webp', boxOverride: { w: 170, h: 120 } },
      { name: 'Tauá Resort & Convention Atibaia', logo: '/images/atibaiahorizontal11x.webp', boxOverride: { w: 180, h: 102 } },
    ],
  },
  {
    level: 'bronze' as const,
    label: 'Bronze',
    brands: [
      { name: 'Somos Educação', logo: '/images/somoseducacao.webp' },
      { name: 'Bernoulli', logo: '/images/behorizontal911x.webp' },
      { name: 'Escola Eleva', logo: '/images/logoelevainspiredschool411x.webp' },
      { name: 'Hospital Sabará', logo: '/images/group1661x.webp' },
      { name: 'Literário Books', logo: '/images/logoliterarenova11x.webp' },
      { name: 'BB Calçados', logo: '/images/mododeisolamento1x.webp', boxOverride: { w: 100, h: 55 } },
      { name: 'Cepaco', logo: '/images/logotipo70anosbege11x.webp' },
      { name: 'Amo Vacina', logo: '/images/logoamovacinas111x.webp' },
    ],
  },
] as const;

const supporters = [
  { name: 'Eduzz', logo: '/images/eduzz.webp' },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

type Level = 'prata' | 'bronze' | 'apoiadores';

/** Box ótico: dimensão máxima que a logo pode ocupar dentro do card */
const opticalBox: Record<Level, { w: number; h: number }> = {
  prata: { w: 200, h: 110 },
  bronze: { w: 148, h: 80 },
  apoiadores: { w: 110, h: 60 },
};

/** Grid responsivo por nível:
 *  prata      → 1 col mobile / 3 cols desktop
 *  bronze     → 2 cols mobile / 4 cols desktop (4+3, 2 linhas)
 *  apoiadores → 1 col mobile / flex-wrap desktop
 */
const gridClass: Record<Level, string> = {
  // mobile: grid fixo | desktop: flex-wrap centrado (centraliza linha incompleta)
  prata: 'grid grid-cols-1 gap-4 justify-items-center lg:flex lg:flex-wrap lg:justify-center lg:gap-4',
  bronze: 'grid grid-cols-2 gap-3 justify-items-center lg:flex lg:flex-wrap lg:justify-center lg:gap-4',
  apoiadores: 'flex flex-wrap justify-center gap-3 lg:gap-4',
};

/** Largura do card dentro do grid por nível */
const cardWidth: Record<Level, string> = {
  // desktop: largura = (100% - gaps) / n-colunas
  // prata 3 cols: (100% - 2×16px) / 3
  // bronze 4 cols: (100% - 3×16px) / 4 = calc(25% - 12px)
  prata: 'w-full lg:w-[calc((100%-32px)/3)]',
  bronze: 'w-full lg:w-[calc(25%-12px)]',
  apoiadores: 'w-full sm:w-[180px]',
};

/** Padding e min-height do card por nível */
const cardStyle: Record<Level, string> = {
  prata: 'px-8 py-8 min-h-[190px]',
  bronze: 'px-6 py-6 min-h-[120px]',
  apoiadores: 'px-5 py-5 min-h-[100px]',
};

// ─── Sub-componentes ──────────────────────────────────────────────────────────

/** Linha divisória com label centralizado e traço dos dois lados */
function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 mb-6 md:mb-8">
      <div className="flex-1 h-px bg-[#191919]/20" />
      <span className="shrink-0 font-dm-sans text-xs font-bold uppercase tracking-widest text-[#191919]/50">
        {label}
      </span>
      <div className="flex-1 h-px bg-[#191919]/20" />
    </div>
  );
}

/** Card de logo com proporção ótica */
function LogoCard({
  name,
  logo,
  level,
  extraClass = '',
  boxOverride,
}: {
  name: string;
  logo: string;
  level: Level;
  extraClass?: string;
  boxOverride?: { w: number; h: number };
}) {
  const box = boxOverride ?? opticalBox[level];
  return (
    <div
      role="listitem"
      className={`flex items-center justify-center rounded-2xl border-2 border-[#191919] bg-white shadow-[4px_4px_0_#191919] ${cardStyle[level]} ${extraClass}`}
    >
      <img
        src={logo}
        alt={name}
        loading="lazy"
        style={{ width: box.w, height: box.h, objectFit: 'contain' }}
      />
    </div>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────

export default function SectionSponsors() {
  return (
    <section
      id="patrocinadores"
      className="scroll-mt-20 bg-[#fff6ee] py-16 md:py-24"
      aria-labelledby="sponsors-title"
    >
      <div className="mx-auto max-w-[1280px] px-6">

        {/* Cabeçalho */}
        <div className="mb-12 text-center md:mb-16">
          <span className="inline-block rounded-full border-2 border-[#191919] bg-[#fff6ef] px-6 py-3 font-dm-sans text-xs font-bold uppercase tracking-widest shadow-[4px_4px_0_#191919]">
            Juntos pelo Festival
          </span>
          <h2
            id="sponsors-title"
            className="mt-7 font-sugar-peachy text-[46px] leading-none text-[#191919] md:text-[68px]"
          >
            Nossos patrocinadores
          </h2>
        </div>

        {/* Grupos Prata e Bronze */}
        <div className="space-y-10 md:space-y-12">
          {sponsorGroups.map((group) => (
            <div key={group.level}>
              <div className="mb-6 h-px bg-[#191919]/20 md:mb-8" />

              <div
                className={gridClass[group.level]}
                role="list"
                aria-label={group.label}
              >
                {group.brands.map((brand) => (
                  <LogoCard
                    key={brand.name}
                    name={brand.name}
                    logo={brand.logo}
                    level={group.level}
                    extraClass={cardWidth[group.level]}
                    boxOverride={'boxOverride' in brand ? brand.boxOverride : undefined}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Apoiadores — mesmo padrão de divisória, logo menor */}
        <div className="mt-10 md:mt-12">
          <SectionDivider label="Apoiador" />

          <div
            className={gridClass.apoiadores}
            role="list"
            aria-label="Apoiadores"
          >
            {supporters.map((s) => (
              <LogoCard
                key={s.name}
                name={s.name}
                logo={s.logo}
                level="apoiadores"
                extraClass={cardWidth.apoiadores}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
