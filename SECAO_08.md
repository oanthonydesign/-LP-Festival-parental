  # 📦 Guia de Exportação - Seção de Parentalidade
  
  Este documento contém tudo que você precisa para exportar esta seção para sua IDE.
  
  ---
  
  ## 1️⃣ COMPONENTE PRINCIPAL
  
  ### 📁 Localização: `/components/Section8.tsx`
  
  ```tsx
  import svgPaths from "./svg-j1aige7z56";
  import imgChatGptImage26DeJanDe20261948542 from "../assets/green-card-image.png";
  import imgChatGptImage26DeJanDe20262002122 from "../assets/blue-card-image.png";
  import { imgChatGptImage26DeJanDe20261948541, imgChatGptImage26DeJanDe20262002121 } from "./svg-ph0rc";
  
  function Frame() {
    return (
      <div className="content-stretch flex flex-col gap-[24px] items-center leading-[0] relative shrink-0 text-center w-full">
        <div className="flex flex-col font-['Sugar_Peachy:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#2260a1] text-[68px] w-[1122px]">
          <p className="leading-[0.8] whitespace-pre-wrap">Esse evento é pra você que já entendeu a importância da parentalidade.</p>
        </div>
        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#4c4d4f] text-[24px] w-[928px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[1.1] whitespace-pre-wrap">Agora é hora de se conectar com quem leva isso a sério.</p>
        </div>
      </div>
    );
  }
  
  function Content() {
    return (
      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Content">
        <Frame />
      </div>
    );
  }
  
  function CloseBarMac() {
    return (
      <div className="bg-[#fff6ee] h-[56px] relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="close bar_mac">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute left-[30px] size-[12px] top-[21.8px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <circle cx="6" cy="6" fill="var(--fill-0, #FC3F51)" id="Ellipse 11" r="6" />
            </svg>
          </div>
          <div className="absolute left-[47px] size-[12px] top-[21.8px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <circle cx="6" cy="6" fill="var(--fill-0, #ECA031)" id="Ellipse 12" r="6" />
            </svg>
          </div>
          <div className="absolute left-[64px] size-[12px] top-[21.8px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <circle cx="6" cy="6" fill="var(--fill-0, #1CB638)" id="Ellipse 13" r="6" />
            </svg>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-2 border-[#191919] border-solid inset-0 pointer-events-none rounded-tl-[24px] rounded-tr-[24px] shadow-[7px_7px_0px_0px_#191919]" />
      </div>
    );
  }
  
  function Warning() {
    return (
      <div className="relative shrink-0 size-[18px]" data-name="Warning">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <g id="Warning">
            <path clipRule="evenodd" d={svgPaths.p110c6e80} fill="var(--fill-0, #191919)" fillRule="evenodd" id="Shape" />
            <g id="Shape_2">
              <path d={svgPaths.p244df4f0} fill="var(--fill-0, #191919)" />
              <path d={svgPaths.p3d6ac800} fill="var(--fill-0, #191919)" />
            </g>
          </g>
        </svg>
      </div>
    );
  }
  
  function Hat() {
    return (
      <div className="bg-[#79c3ab] content-stretch flex gap-[6px] items-center justify-center px-[32px] py-[16px] relative rounded-[40px] shrink-0" data-name="HAT">
        <div aria-hidden="true" className="absolute border-2 border-[#191919] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[4px_4px_0px_0px_#191919]" />
        <Warning />
        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191919] text-[14px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">Para PROFISSIONAIS</p>
        </div>
      </div>
    );
  }
  
  function Heading() {
    return (
      <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0" data-name="Heading 1">
        <Hat />
        <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191919] text-[32px] text-center w-[452px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-none whitespace-pre-wrap">Que trabalham com famílias e lideram mudanças reais</p>
        </div>
      </div>
    );
  }
  
  function Group() {
    return (
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
        <div className="col-1 h-[977px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[50.039px_215.699px] mask-size-[537.918px_325.383px] ml-[-50.04px] mt-[-215.7px] relative row-1 w-[651px]" data-name="ChatGPT Image 26 de jan. de 2026, 19_48_54 1" style={{ maskImage: `url('${imgChatGptImage26DeJanDe20261948541}')` }}>
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgChatGptImage26DeJanDe20261948542} />
        </div>
      </div>
    );
  }
  
  function Container1() {
    return (
      <div className="bg-[#2daa96] h-[575px] relative rounded-bl-[16px] rounded-br-[16px] shrink-0 w-full" data-name="Container">
        <div aria-hidden="true" className="absolute border-[#191919] border-b-2 border-l-2 border-r-2 border-solid inset-0 pointer-events-none rounded-bl-[16px] rounded-br-[16px] shadow-[7px_7px_0px_0px_#191919]" />
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[46px] items-center p-[32px] relative size-full">
            <Heading />
            <Group />
          </div>
        </div>
      </div>
    );
  }
  
  function Frame1() {
    return (
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
        <CloseBarMac />
        <Container1 />
      </div>
    );
  }
  
  function CloseBarMac1() {
    return (
      <div className="bg-[#fff6ee] h-[56px] relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="close bar_mac">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute left-[30px] size-[12px] top-[21.8px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <circle cx="6" cy="6" fill="var(--fill-0, #FC3F51)" id="Ellipse 11" r="6" />
            </svg>
          </div>
          <div className="absolute left-[47px] size-[12px] top-[21.8px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <circle cx="6" cy="6" fill="var(--fill-0, #ECA031)" id="Ellipse 12" r="6" />
            </svg>
          </div>
          <div className="absolute left-[64px] size-[12px] top-[21.8px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <circle cx="6" cy="6" fill="var(--fill-0, #1CB638)" id="Ellipse 13" r="6" />
            </svg>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-2 border-[#191919] border-solid inset-0 pointer-events-none rounded-tl-[24px] rounded-tr-[24px] shadow-[7px_7px_0px_0px_#191919]" />
      </div>
    );
  }
  
  function Warning1() {
    return (
      <div className="relative shrink-0 size-[18px]" data-name="Warning">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <g id="Warning">
            <path clipRule="evenodd" d={svgPaths.p110c6e80} fill="var(--fill-0, #191919)" fillRule="evenodd" id="Shape" />
            <g id="Shape_2">
              <path d={svgPaths.p244df4f0} fill="var(--fill-0, #191919)" />
              <path d={svgPaths.p3d6ac800} fill="var(--fill-0, #191919)" />
            </g>
          </g>
        </svg>
      </div>
    );
  }
  
  function Hat1() {
    return (
      <div className="bg-[#74acde] content-stretch flex gap-[6px] items-center justify-center px-[32px] py-[16px] relative rounded-[40px] shrink-0" data-name="HAT">
        <div aria-hidden="true" className="absolute border-2 border-[#191919] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[4px_4px_0px_0px_#191919]" />
        <Warning1 />
        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191919] text-[14px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">Para famílias</p>
        </div>
      </div>
    );
  }
  
  function Heading1() {
    return (
      <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0" data-name="Heading 1">
        <Hat1 />
        <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191919] text-[32px] text-center w-[458px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-none whitespace-pre-wrap">Pais, mães, cuidadores conscientes e famílias que buscam repertório e apoio</p>
        </div>
      </div>
    );
  }
  
  function Group1() {
    return (
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
        <div className="col-1 h-[829px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[68.527px_95.989px] mask-size-[482.332px_294.742px] ml-[-66px] mt-[-93.7px] relative row-1 w-[553px]" data-name="ChatGPT Image 26 de jan. de 2026, 20_02_12 1" style={{ maskImage: `url('${imgChatGptImage26DeJanDe20262002121}')` }}>
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgChatGptImage26DeJanDe20262002122} />
        </div>
      </div>
    );
  }
  
  function Container2() {
    return (
      <div className="bg-[#2260a1] h-[575px] relative rounded-bl-[16px] rounded-br-[16px] shrink-0 w-full" data-name="Container">
        <div aria-hidden="true" className="absolute border-[#191919] border-b-2 border-l-2 border-r-2 border-solid inset-0 pointer-events-none rounded-bl-[16px] rounded-br-[16px] shadow-[7px_7px_0px_0px_#191919]" />
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[46px] items-center p-[32px] relative size-full">
            <Heading1 />
            <Group1 />
          </div>
        </div>
      </div>
    );
  }
  
  function Frame2() {
    return (
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
        <CloseBarMac1 />
        <Container2 />
      </div>
    );
  }
  
  function ParaQuemE() {
    return (
      <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-[1280px]" data-name="para quem é">
        <Frame1 />
        <Frame2 />
      </div>
    );
  }
  
  function Container() {
    return (
      <div className="content-stretch flex flex-col gap-[64px] items-center justify-center relative shrink-0 w-[1280px]" data-name="Container">
        <Content />
        <ParaQuemE />
      </div>
    );
  }
  
  export default function Section() {
    return (
      <div className="bg-[#fff6ef] content-stretch flex items-center justify-center pb-[76px] pt-[106px] relative size-full" data-name="Section - 8">
        <Container />
      </div>
    );
  }
  ```
  
  ---
  
  ## 2️⃣ ARQUIVOS SVG
  
  ### 📁 Arquivo 1: `/components/svg-ph0rc.tsx`
  
  ```tsx
  export const imgChatGptImage26DeJanDe20261948541 = "data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20viewBox%3D%220%200%20537.92%20325.383%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20id%3D%22Vector%2012%20(Stroke)%22%20d%3D%22M317.6%2010.4675C328.202%20-1.70322%20346.45%20-3.50693%20359.229%206.35246C372.008%2016.2118%20374.894%2034.3198%20365.812%2047.6625L337.528%2089.2123L391.583%2040.9629C402.798%2030.9521%20419.635%2030.6062%20431.252%2040.1479C442.869%2049.6897%20445.801%2066.2734%20438.159%2079.2199L405.497%20134.555L431.7%20111.734C442.564%20102.272%20458.567%20101.701%20470.077%20110.366C481.586%20119.03%20485.463%20134.567%20479.375%20147.623L474.751%20157.538L486.135%20149.52C497.624%20141.429%20513.154%20142.233%20523.745%20151.47C534.335%20160.706%20537.245%20175.983%20530.79%20188.465L499.715%20248.562L503.544%20248.071C520.252%20245.933%20535.531%20257.744%20537.669%20274.452C539.808%20291.16%20527.997%20306.439%20511.289%20308.578L449.791%20316.45C438.544%20317.89%20427.427%20312.972%20420.927%20303.681C414.427%20294.39%20413.617%20282.26%20418.825%20272.188L419.354%20271.164L416.297%20273.318C404.998%20281.276%20389.761%20280.642%20379.162%20271.774C371.938%20265.729%20368.1%20256.888%20368.238%20247.905L303.512%20304.282C292.229%20314.11%20275.483%20314.301%20263.978%20304.733C252.473%20295.166%20249.608%20278.666%20257.213%20265.78L286.041%20216.938L192.891%20300.086C181.397%20310.346%20164.056%20310.423%20152.472%20300.266C151.237%20299.183%20150.11%20298.019%20149.09%20296.79L133.303%20314.915C122.992%20326.752%20105.381%20328.83%2092.5988%20319.717C79.8169%20310.604%2076.0395%20293.278%2083.8681%20279.671L99.2549%20252.927C97.8797%20252.357%2096.5301%20251.683%2095.2195%20250.898C82.1179%20243.043%2076.8482%20226.707%2082.8896%20212.676L99.414%20174.299L60.7413%20209.875C50.332%20219.45%2034.7046%20220.613%2022.9927%20212.684C11.2809%20204.755%206.55701%20189.814%2011.5813%20176.593L24.5562%20142.451C16.0178%20140.748%208.26392%20135.423%203.75457%20127.189C-4.33644%20112.415%201.08133%2093.879%2015.8554%2085.7878L63.9031%2059.4739C75.1077%2053.3378%2088.9488%2054.8344%2098.5828%2063.2239C104.449%2068.3323%20107.998%2075.3372%20108.853%2082.731L163.304%2032.6422C173.895%2022.899%20189.857%2021.8857%20201.596%2030.2105C207.613%2034.478%20211.681%2040.6046%20213.451%2047.3429L229.547%2027.1759C239.496%2014.7097%20257.37%2012.014%20270.554%2020.9913C280.097%2027.49%20284.846%2038.517%20283.726%2049.355L317.6%2010.4675Z%22%20fill%3D%22var(--fill-0%2C%20%23EB4949)%22%2F%3E%0A%3C%2Fsvg%3E%0A";
  export const imgChatGptImage26DeJanDe20262002121 = "data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20viewBox%3D%220%200%20482.332%20294.742%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20id%3D%22Vector%2023%22%20d%3D%22M158.578%200.642449C154.706%20-1.00811%20150.218%200.623068%20148.31%204.37415L122.269%2055.5631C120.022%2059.9796%20114.342%2061.3122%20110.365%2058.3557L47.706%2011.7678C43.3016%208.49302%2036.9828%2010.5247%2035.3123%2015.7528L0.383475%20125.067C-1.13381%20129.815%202.01421%20134.78%206.95633%20135.433L66.5742%20143.307C72.4856%20144.088%2075.4959%20150.829%2072.1318%20155.752L7.50875%20250.322C3.61644%20256.018%208.27652%20263.64%2015.1206%20262.772L164.407%20243.836C166.074%20243.625%20167.766%20243.944%20169.242%20244.748L259.188%20293.766C260.672%20294.575%20262.374%20294.893%20264.051%20294.674L475.358%20267.112C481.939%20266.254%20484.673%20258.216%20479.98%20253.523L401.806%20175.346C398.258%20171.797%20398.814%20165.897%20402.963%20163.074L475.406%20113.793C480.03%20110.647%20480.082%20103.849%20475.506%20100.633L338.69%204.47547C336.121%202.67029%20332.734%202.53424%20330.029%204.12759L264.953%2042.4603C262.764%2043.7498%20260.092%2043.9228%20257.755%2042.9264L158.578%200.642449Z%22%20fill%3D%22var(--fill-0%2C%20%23F7A73C)%22%2F%3E%0A%3C%2Fsvg%3E%0A";
  ```
  
  ### 📁 Arquivo 2: `/components/svg-j1aige7z56.ts`
  
  ```ts
  export default {
    p110c6e80: "M14.0868 12.0801L10.3422 4.57768C9.78976 3.47086 8.21043 3.47085 7.65797 4.57768L3.91325 12.0801C3.41547 13.0774 4.14074 14.25 5.25535 14.25H12.7447C13.8593 14.25 14.5846 13.0774 14.0868 12.0801ZM11.6843 3.90781C10.5794 1.69416 7.42077 1.69415 6.31587 3.90779L2.57115 11.4102C1.57558 13.4048 3.02611 15.75 5.25535 15.75H12.7447C14.9739 15.75 16.4245 13.4048 15.4289 11.4102L11.6843 3.90781Z",
    p244df4f0: "M9.75 6C9.75 5.58579 9.41421 5.25 9 5.25C8.58579 5.25 8.25 5.58579 8.25 6V9C8.25 9.41421 8.58579 9.75 9 9.75C9.41421 9.75 9.75 9.41421 9.75 9V6Z",
    p3d6ac800: "M9 11.25C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75C9.41421 12.75 9.75 12.4142 9.75 12C9.75 11.5858 9.41421 11.25 9 11.25Z",
  }
  ```
  
  ---
  
  ## 3️⃣ FONTES DO GOOGLE FONTS
  
  ### 🔗 Links de Importação
  
  Adicione no arquivo HTML (`index.html` ou `_document.tsx`):
  
  ```html
  <!-- Sugar Peachy (título principal) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Sugar+Snow&display=swap" rel="stylesheet">
  
  <!-- DM Sans (textos gerais) -->
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,600&display=swap" rel="stylesheet">
  ```
  
  **⚠️ NOTA IMPORTANTE:** A fonte "Sugar Peachy" não está disponível no Google Fonts. Use "Sugar Snow" como alternativa ou baixe a fonte customizada.
  
  ### 📝 Ou via CSS (@import):
  
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Sugar+Snow&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,600&display=swap');
  ```
  
  ---
  
  ## 4️⃣ PALETA DE CORES
  
  | Nome                      | Código HEX | Uso                                    |
  |---------------------------|------------|----------------------------------------|
  | **Background Principal**  | `#fff6ef`  | Fundo da seção                         |
  | **Azul Título**           | `#2260a1`  | Título principal + Card azul           |
  | **Cinza Texto**           | `#4c4d4f`  | Subtítulo                              |
  | **Verde Card**            | `#2daa96`  | Fundo do card de profissionais         |
  | **Badge Verde**           | `#79c3ab`  | Badge "Para PROFISSIONAIS"             |
  | **Badge Azul**            | `#74acde`  | Badge "Para FAMÍLIAS"                  |
  | **Bege Claro**            | `#fff6ee`  | Barra superior dos cards (Mac)         |
  | **Preto**                 | `#191919`  | Bordas e textos escuros                |
  | **Vermelho Mac**          | `#FC3F51`  | Botão fechar (Mac)                     |
  | **Amarelo Mac**           | `#ECA031`  | Botão minimizar (Mac)                  |
  | **Verde Mac**             | `#1CB638`  | Botão maximizar (Mac)                  |
  
  ---
  
  ## 5️⃣ IMAGENS NECESSÁRIAS
  
  Você precisará baixar ou adicionar estas 2 imagens na pasta `/assets`:
  
  1. **green-card-image.png** - Imagem do card verde (profissionais)
  2. **blue-card-image.png** - Imagem do card azul (famílias)
  
  **🔗 Origem:** Essas imagens vêm do design do Figma. Você precisa exportá-las do Figma ou usar imagens alternativas.
  
  ---
  
  ## 6️⃣ INSTRUÇÕES PARA IDE
  
  ### 📂 Estrutura de Pastas
  
  ```
  seu-projeto/
  ├── src/
  │   ├── components/
  │   │   ├── Section8.tsx          ← Componente principal
  │   │   ├── svg-ph0rc.tsx          ← SVG masks
  │   │   └── svg-j1aige7z56.ts      ← Warning icon paths
  │   ├── assets/
  │   │   ├── green-card-image.png   ← Imagem card verde
  │   │   └── blue-card-image.png    ← Imagem card azul
  │   └── App.tsx
  └── public/
      └── index.html                 ← Adicionar fontes aqui
  ```
  
  ---
  
  ### 🔧 Passo a Passo
  
  #### **PASSO 1:** Criar os arquivos SVG
  
  1. Crie o arquivo `/src/components/svg-ph0rc.tsx`
  2. Cole o código da **Seção 2 - Arquivo 1**
  3. Crie o arquivo `/src/components/svg-j1aige7z56.ts`
  4. Cole o código da **Seção 2 - Arquivo 2**
  
  #### **PASSO 2:** Adicionar as imagens
  
  1. Baixe as imagens do Figma ou use placeholders
  2. Coloque em `/src/assets/`:
     - `green-card-image.png`
     - `blue-card-image.png`
  
  #### **PASSO 3:** Criar o componente principal
  
  1. Crie o arquivo `/src/components/Section8.tsx`
  2. Cole o código da **Seção 1**
  3. ⚠️ **IMPORTANTE:** Ajuste os imports de imagens:
  
  ```tsx
  // De:
  import imgChatGptImage26DeJanDe20261948542 from "figma:asset/...";
  
  // Para:
  import imgChatGptImage26DeJanDe20261948542 from "../assets/green-card-image.png";
  import imgChatGptImage26DeJanDe20262002122 from "../assets/blue-card-image.png";
  ```
  
  #### **PASSO 4:** Adicionar as fontes
  
  1. Abra `/public/index.html`
  2. Adicione os links do Google Fonts dentro do `<head>`
  3. Use os links da **Seção 3**
  
  #### **PASSO 5:** Importar no App.tsx
  
  ```tsx
  import Section8 from './components/Section8';
  
  function App() {
    return (
      <div className="w-full min-h-screen">
        <Section8 />
      </div>
    );
  }
  
  export default App;
  ```
  
  #### **PASSO 6:** Configurar Tailwind CSS (se necessário)
  
  Certifique-se de que seu `tailwind.config.js` inclui:
  
  ```js
  module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'sugar': ['Sugar Snow', 'sans-serif'],
          'dm-sans': ['DM Sans', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  ```
  
  ---
  
  ## 7️⃣ CHECKLIST FINAL
  
  Antes de testar, confirme:
  
  - [ ] ✅ Arquivo `Section8.tsx` criado em `/src/components/`
  - [ ] ✅ Arquivo `svg-ph0rc.tsx` criado em `/src/components/`
  - [ ] ✅ Arquivo `svg-j1aige7z56.ts` criado em `/src/components/`
  - [ ] ✅ Imagens adicionadas em `/src/assets/`
  - [ ] ✅ Imports de imagens ajustados no `Section8.tsx`
  - [ ] ✅ Fontes Google adicionadas no HTML
  - [ ] ✅ Componente importado no `App.tsx`
  - [ ] ✅ Tailwind CSS configurado
  - [ ] ✅ Servidor de desenvolvimento rodando (`npm run dev`)
  
  ---
  
  ## 8️⃣ SOLUÇÃO DE PROBLEMAS
  
  ### ❌ Fontes não aparecem
  
  **Solução:** Verifique se os links do Google Fonts estão no `<head>` do HTML
  
  ### ❌ Imagens não carregam
  
  **Solução:** Confirme que os caminhos dos imports estão corretos:
  ```tsx
  import img from "../assets/nome-da-imagem.png";
  ```
  
  ### ❌ SVGs não aparecem
  
  **Solução:** Certifique-se de que os arquivos `svg-ph0rc.tsx` e `svg-j1aige7z56.ts` estão na mesma pasta do `Section8.tsx`
  
  ### ❌ Classes Tailwind não funcionam
  
  **Solução:** 
  1. Verifique se o Tailwind está instalado
  2. Confirme que o arquivo está listado no `content` do `tailwind.config.js`
  3. Reinicie o servidor de desenvolvimento
  
  ---
  
  ## ✨ PRONTO!
  
  Agora você tem tudo para integrar esta seção no seu projeto. Qualquer dúvida, revise este guia! 🚀
