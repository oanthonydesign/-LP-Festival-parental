# 📦 EXPORTAÇÃO DA SEÇÃO 9 - FESTIVAL

Documentação completa para implementar esta seção em sua IDE.

---

## 1️⃣ COMPONENTE PRINCIPAL

### 📄 Arquivo: `Section9.tsx`

```tsx
import svgPaths from "./svg-tt49jlq18y";
import imgStoryImage from "figma:asset/239920655d79e2ff35354faa5eea36208e65fa18.png";
import imgCep1721 from "figma:asset/7232522753cd74e6b77c0ef163b3662150974709.png";

function Warning() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Warning">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Warning">
          <path clipRule="evenodd" d={svgPaths.p110c6e80} fill="var(--fill-0, #FFF6EF)" fillRule="evenodd" id="Shape" />
          <g id="Shape_2">
            <path d={svgPaths.p244df4f0} fill="var(--fill-0, #FFF6EF)" />
            <path d={svgPaths.p3d6ac800} fill="var(--fill-0, #FFF6EF)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Hat() {
  return (
    <div className="bg-[#e12d3b] content-stretch flex gap-[6px] items-center justify-center px-[32px] py-[16px] relative rounded-[40px] shrink-0" data-name="HAT">
      <div aria-hidden="true" className="absolute border-2 border-[#191919] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[4px_4px_0px_0px_#191919]" />
      <Warning />
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fff6ef] text-[14px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">importante</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Sugar_Peachy:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e12d3b] text-[58px] w-full">
        <p className="leading-[0.8] whitespace-pre-wrap">O Festival é feito para adultos.</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Title">
      <Container1 />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="text">
      <Title />
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fff6ef] text-[24px] w-[724px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-none whitespace-pre-wrap">A programação tem como foco temas sensíveis e ambientes que não são adequados para crianças. Agora é sua vez de cuidar de você, para depois cuidar melhor de quem depende de você</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[16.67%_8.33%_0.77%_8.33%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14.8605">
        <g id="Group">
          <g id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p60d3f00} fill="var(--fill-0, #FFF6EF)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MingcuteTicketLine() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="mingcute:ticket-line">
      <Group />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#fff6ef] text-[14.1px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Garanta seu INGRESSO agora</p>
      </div>
    </div>
  );
}

function ComprarIngresso() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Comprar Ingresso">
      <Container3 />
    </div>
  );
}

function LinkVariant() {
  return (
    <div className="bg-[#2260a1] relative rounded-[40px] shrink-0 w-full" data-name="Link - Variant 1">
      <div aria-hidden="true" className="absolute border-2 border-[#191919] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[4px_4px_0px_0px_#191919]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[40px] py-[16px] relative w-full">
          <MingcuteTicketLine />
          <ComprarIngresso />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[332px]" data-name="Container">
      <LinkVariant />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[46px] items-start justify-center relative shrink-0" data-name="Content">
      <Hat />
      <Text />
      <Container2 />
    </div>
  );
}

function StoryImage() {
  return (
    <div className="h-[329.371px] relative rounded-[25.095px] w-[492.489px]" data-name="Story Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[25.095px]">
        <img alt="" className="absolute h-[144.37%] left-[-0.22%] max-w-none top-0 w-[100.44%]" src={imgStoryImage} />
      </div>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute flex h-[392.186px] items-center justify-center left-[-45.34px] top-[-47.48px] w-[585.457px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-[-0.21deg]">
            <div className="h-[390px] relative w-[584px]" data-name="CEP-172 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCep1721} />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#191919] border-[2.091px] border-solid inset-0 pointer-events-none rounded-[25.095px] shadow-[4.182px_4.182px_0px_0px_#191919]" />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[30px] items-center relative shrink-0 w-[1280px] z-[2]" data-name="Container">
      <Content />
      <div className="flex h-[369.722px] items-center justify-center relative shrink-0 w-[518.506px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="flex-none rotate-[-4.84deg]">
          <StoryImage />
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute h-[1050.706px] left-[1143px] top-[-186.21px] w-[809.051px] z-[1]">
      <div className="absolute inset-[-0.47%_-3.71%_-2.86%_-3.71%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 869.148 1085.69">
          <g id="Group 18">
            <path d={svgPaths.p2b7f140} id="Vector 11" stroke="var(--stroke-0, #EF7D25)" strokeWidth="60.0984" />
            <path d={svgPaths.p2dbf5ec8} id="Vector 8" stroke="var(--stroke-0, #79C3AB)" strokeWidth="60.0984" />
            <path d={svgPaths.p2c6e4880} id="Vector 12" stroke="var(--stroke-0, #2260A1)" strokeWidth="60.0984" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-[#f7a73c] relative size-full" data-name="Section - 9">
      <div className="content-stretch flex flex-col isolate items-center justify-center pb-[96px] pt-[68px] px-[30px] relative size-full">
        <Container />
        <Group1 />
      </div>
      <div aria-hidden="true" className="absolute border-[#191919] border-b-4 border-solid border-t-4 inset-0 pointer-events-none" />
    </div>
  );
}
```

---

## 2️⃣ ARQUIVOS SVG

### 📄 Arquivo: `svg-tt49jlq18y.ts`

```typescript
export default {
p110c6e80: "M14.0868 12.0801L10.3422 4.57768C9.78976 3.47086 8.21043 3.47085 7.65797 4.57768L3.91325 12.0801C3.41547 13.0774 4.14074 14.25 5.25535 14.25H12.7447C13.8593 14.25 14.5846 13.0774 14.0868 12.0801ZM11.6843 3.90781C10.5794 1.69416 7.42077 1.69415 6.31587 3.90779L2.57115 11.4102C1.57558 13.4048 3.02611 15.75 5.25535 15.75H12.7447C14.9739 15.75 16.4245 13.4048 15.4289 11.4102L11.6843 3.90781Z",
p244df4f0: "M9.75 6C9.75 5.58579 9.41421 5.25 9 5.25C8.58579 5.25 8.25 5.58579 8.25 6V9C8.25 9.41421 8.58579 9.75 9 9.75C9.41421 9.75 9.75 9.41421 9.75 9V6Z",
p2b7f140: "M73.4781 960.561C198.738 1017.47 451.57 1080.49 460.815 877.348C471.065 652.144 -107.148 349.34 60.5998 294.855C203.911 248.308 493.838 640.586 727.627 535.91C977.907 423.849 698.899 39.6023 697.578 4.93017",
p2c6e4880: "M73.4781 999.574C198.738 1056.48 451.57 1119.51 460.815 916.361C471.065 691.157 -107.148 388.354 60.5998 333.869C203.911 287.321 493.838 679.6 727.627 574.923C977.907 462.863 698.899 78.6159 697.578 43.9438",
p2dbf5ec8: "M80.7437 983.676C206.004 1040.58 458.835 1103.61 468.081 900.463C478.33 675.259 -99.8826 372.455 67.8654 317.97C211.177 271.423 501.104 663.701 734.893 559.024C985.173 446.964 706.165 62.7173 704.844 28.0451",
p3d6ac800: "M9 11.25C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75C9.41421 12.75 9.75 12.4142 9.75 12C9.75 11.5858 9.41421 11.25 9 11.25Z",
p60d3f00: "M2.25 1.5C2.05109 1.5 1.86032 1.57902 1.71967 1.71967C1.57902 1.86032 1.5 2.05109 1.5 2.25V9.75C1.5 9.94891 1.57902 10.1397 1.71967 10.2803C1.86032 10.421 2.05109 10.5 2.25 10.5H7.6275C7.78245 10.0608 8.0698 9.68057 8.44995 9.41159C8.83009 9.14261 9.28431 8.99816 9.75 8.99816C10.2157 8.99816 10.6699 9.14261 11.05 9.41159C11.4302 9.68057 11.7175 10.0608 11.8725 10.5H12.75C12.9489 10.5 13.1397 10.421 13.2803 10.2803C13.421 10.1397 13.5 9.94891 13.5 9.75V2.25C13.5 2.05109 13.421 1.86032 13.2803 1.71967C13.1397 1.57902 12.9489 1.5 12.75 1.5H11.8725C11.7175 1.93915 11.4302 2.31942 11.05 2.58841C10.6699 2.85739 10.2157 3.00184 9.75 3.00184C9.28431 3.00184 8.83009 2.85739 8.44995 2.58841C8.0698 2.31942 7.78245 1.93915 7.6275 1.5H2.25ZM0 2.25C0 1.65326 0.237053 1.08097 0.65901 0.65901C1.08097 0.237053 1.65326 0 2.25 0H8.25C8.44891 0 8.63968 0.0790178 8.78033 0.21967C8.92098 0.360322 9 0.551088 9 0.75C9 0.948912 9.07902 1.13968 9.21967 1.28033C9.36032 1.42098 9.55109 1.5 9.75 1.5C9.94891 1.5 10.1397 1.42098 10.2803 1.28033C10.421 1.13968 10.5 0.948912 10.5 0.75C10.5 0.551088 10.579 0.360322 10.7197 0.21967C10.8603 0.0790178 11.0511 0 11.25 0H12.75C13.3467 0 13.919 0.237053 14.341 0.65901C14.7629 1.08097 15 1.65326 15 2.25V9.75C15 10.3467 14.7629 10.919 14.341 11.341C13.919 11.7629 13.3467 12 12.75 12H11.25C11.0511 12 10.8603 11.921 10.7197 11.7803C10.579 11.6397 10.5 11.4489 10.5 11.25C10.5 11.0511 10.421 10.8603 10.2803 10.7197C10.1397 10.579 9.94891 10.5 9.75 10.5C9.55109 10.5 9.36032 10.579 9.21967 10.7197C9.07902 10.8603 9 11.0511 9 11.25C9 11.4489 8.92098 11.6397 8.78033 11.7803C8.63968 11.921 8.44891 12 8.25 12H2.25C1.65326 12 1.08097 11.7629 0.65901 11.341C0.237053 10.919 0 10.3467 0 9.75V2.25ZM9.75 3.75C9.94891 3.75 10.1397 3.82902 10.2803 3.96967C10.421 4.11032 10.5 4.30109 10.5 4.5V4.875C10.5 5.07391 10.421 5.26468 10.2803 5.40533C10.1397 5.54598 9.94891 5.625 9.75 5.625C9.55109 5.625 9.36032 5.54598 9.21967 5.40533C9.07902 5.26468 9 5.07391 9 4.875V4.5C9 4.30109 9.07902 4.11032 9.21967 3.96967C9.36032 3.82902 9.55109 3.75 9.75 3.75ZM10.5 7.125C10.5 6.92609 10.421 6.73532 10.2803 6.59467C10.1397 6.45402 9.94891 6.375 9.75 6.375C9.55109 6.375 9.36032 6.45402 9.21967 6.59467C9.07902 6.73532 9 6.92609 9 7.125V7.5C9 7.69891 9.07902 7.88968 9.21967 8.03033C9.36032 8.17098 9.55109 8.25 9.75 8.25C9.94891 8.25 10.1397 8.17098 10.2803 8.03033C10.421 7.88968 10.5 7.69891 10.5 7.5V7.125Z",
}
```

---

## 3️⃣ FONTES

### Google Fonts utilizadas:

1. **DM Sans** (Regular + Bold)
2. **Sugar Peachy** (Regular)

### Links de Import:

**Opção 1: No HTML (`index.html`)**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,700&display=swap" rel="stylesheet">
```

**Opção 2: No CSS**
```css
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,700&display=swap');
```

**⚠️ IMPORTANTE - Fonte Sugar Peachy:**

A fonte **Sugar Peachy** não está disponível no Google Fonts. Você precisará:

1. **Fazer download** de uma fonte similar ou da fonte original
2. **Hospedar localmente** no seu projeto
3. **Adicionar no CSS**:

```css
@font-face {
  font-family: 'Sugar Peachy';
  src: url('/fonts/SugarPeachy-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}
```

**Alternativas gratuitas similares:**
- Leckerli One
- Pacifico
- Cookie
- Satisfy

Para usar uma alternativa, substitua no código:
```tsx
// De:
font-['Sugar_Peachy:Regular',sans-serif]

// Para (exemplo com Leckerli One):
font-['Leckerli_One',sans-serif]
```

E adicione no HTML:
```html
<link href="https://fonts.googleapis.com/css2?family=Leckerli+One&display=swap" rel="stylesheet">
```

---

## 4️⃣ CORES

Paleta de cores usadas no design:

| Nome/Função | Código Hex | Uso |
|-------------|------------|-----|
| **Laranja Principal** | `#F7A73C` | Background da seção |
| **Vermelho** | `#E12D3B` | Badge "IMPORTANTE" + Título |
| **Azul** | `#2260A1` | Botão CTA + Linha decorativa |
| **Verde-água** | `#79C3AB` | Linha decorativa |
| **Laranja Escuro** | `#EF7D25` | Linha decorativa |
| **Preto** | `#191919` | Bordas + sombras |
| **Branco Creme** | `#FFF6EF` | Textos + ícones |

---

## 5️⃣ IMAGENS

### ⚠️ ATENÇÃO CRÍTICA SOBRE IMAGENS

O código usa o sistema de importação `figma:asset` que é **exclusivo do Figma Make**:

```tsx
import imgStoryImage from "figma:asset/239920655d79e2ff35354faa5eea36208e65fa18.png";
import imgCep1721 from "figma:asset/7232522753cd74e6b77c0ef163b3662150974709.png";
```

**Isso NÃO funcionará na sua IDE!**

### ✅ Solução:

**1. Baixe as imagens diretamente do Figma:**
- Abra o design no Figma
- Selecione cada imagem
- Export → PNG → Download

**2. Coloque as imagens na pasta do projeto:**
```
seu-projeto/
├── public/
│   └── images/
│       ├── festival-audience.png  (imgCep1721)
│       └── festival-bg.png        (imgStoryImage)
```

**3. Atualize os imports no código:**

```tsx
// ANTES (Figma Make):
import imgStoryImage from "figma:asset/239920655d79e2ff35354faa5eea36208e65fa18.png";
import imgCep1721 from "figma:asset/7232522753cd74e6b77c0ef163b3662150974709.png";

// DEPOIS (Sua IDE):
const imgStoryImage = "/images/festival-bg.png";
const imgCep1721 = "/images/festival-audience.png";
```

Ou, se usar imports:
```tsx
import imgStoryImage from "../public/images/festival-bg.png";
import imgCep1721 from "../public/images/festival-audience.png";
```

---

## 6️⃣ INSTRUÇÕES PARA IDE

### Estrutura de pastas recomendada:

```
seu-projeto/
├── src/
│   ├── components/
│   │   └── Section9/
│   │       ├── Section9.tsx
│   │       └── svg-tt49jlq18y.ts
│   ├── App.tsx
│   └── index.css
├── public/
│   ├── fonts/              (se usar fonte local)
│   └── images/
│       ├── festival-audience.png
│       └── festival-bg.png
└── index.html
```

### Passo a passo:

#### **PASSO 1**: Criar pasta do componente
```bash
mkdir -p src/components/Section9
```

#### **PASSO 2**: Criar arquivo SVG
Criar arquivo: `src/components/Section9/svg-tt49jlq18y.ts`
- Cole o código da seção **2️⃣ ARQUIVOS SVG**

#### **PASSO 3**: Criar componente principal
Criar arquivo: `src/components/Section9/Section9.tsx`
- Cole o código da seção **1️⃣ COMPONENTE PRINCIPAL**
- **IMPORTANTE**: Atualize os imports das imagens conforme seção **5️⃣ IMAGENS**

#### **PASSO 4**: Adicionar fontes no HTML
Editar: `index.html` ou `public/index.html`
- Adicione os links da seção **3️⃣ FONTES** dentro da tag `<head>`

#### **PASSO 5**: Configurar Tailwind CSS (se necessário)

Se seu projeto usa Tailwind, garanta que o `tailwind.config.js` inclui:

```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

#### **PASSO 6**: Importar no App.tsx

```tsx
import Section9 from './components/Section9/Section9';

function App() {
  return (
    <div className="App">
      <Section9 />
    </div>
  );
}

export default App;
```

---

## 7️⃣ CHECKLIST DE IMPLEMENTAÇÃO

Use esta lista para garantir que tudo foi implementado corretamente:

### ✅ Arquivos

- [ ] Arquivo `Section9.tsx` criado
- [ ] Arquivo `svg-tt49jlq18y.ts` criado
- [ ] Imports de SVG atualizados (caminho correto)

### ✅ Imagens

- [ ] Imagens baixadas do Figma
- [ ] Imagens colocadas na pasta `public/images/`
- [ ] Imports de imagens atualizados no código
- [ ] Caminhos das imagens testados

### ✅ Fontes

- [ ] Link do Google Fonts adicionado no HTML
- [ ] Fonte **DM Sans** carregando
- [ ] Fonte **Sugar Peachy** configurada (ou alternativa escolhida)
- [ ] Fallback `sans-serif` mantido

### ✅ Estilos

- [ ] Tailwind CSS instalado e configurado
- [ ] Classes Tailwind funcionando
- [ ] Cores renderizando corretamente

### ✅ Funcionalidade

- [ ] Componente renderiza sem erros
- [ ] Layout está igual ao design
- [ ] Responsividade mantida (se aplicável)
- [ ] SVGs aparecem corretamente
- [ ] Imagens carregam

### ✅ Integração

- [ ] Componente importado no `App.tsx`
- [ ] Nenhum erro no console
- [ ] Build do projeto funciona

---

## 🐛 TROUBLESHOOTING

### Problema: Fontes não carregam

**Solução:**
- Verifique se os links estão dentro da tag `<head>` do HTML
- Limpe o cache do navegador (Ctrl+Shift+R)
- Confira se o nome da fonte no CSS está correto

### Problema: Imagens não aparecem

**Solução:**
- Verifique os caminhos das imagens (case-sensitive!)
- Confirme que as imagens estão em `public/images/`
- Use o DevTools para ver se há erro 404

### Problema: Tailwind não funciona

**Solução:**
- Reinstale: `npm install -D tailwindcss`
- Verifique o `tailwind.config.js`
- Adicione no CSS principal: `@tailwind base; @tailwind components; @tailwind utilities;`

### Problema: SVGs não aparecem

**Solução:**
- Verifique o import do `svg-tt49jlq18y.ts`
- Certifique-se que o caminho relativo está correto
- Exemplo: `import svgPaths from "./svg-tt49jlq18y";`

---

## 📝 NOTAS ADICIONAIS

- Este componente foi otimizado para **desktop** (largura 1280px)
- Para responsividade, você precisará adaptar os valores fixos (como `w-[1280px]`)
- O componente é **stateless** (sem estado interno)
- Todos os elementos decorativos usam `aria-hidden="true"` para acessibilidade
- As bordas e sombras são parte do design system "Neubrutalism"

---

## 🚀 PRÓXIMOS PASSOS

Após implementar:

1. **Teste em diferentes navegadores**
2. **Ajuste responsividade** se necessário
3. **Adicione interatividade** (hover states, clicks)
4. **Otimize imagens** (compressão, lazy loading)
5. **Adicione animações** se desejar

---

**✨ Pronto! Sua seção está completa e documentada.**

Se tiver dúvidas, revise este documento seção por seção. Boa sorte! 🎉
