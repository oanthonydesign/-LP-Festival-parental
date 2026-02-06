# 📦 Guia de Exportação - Seção Festival

Este documento contém tudo que você precisa para exportar esta seção para sua IDE.

---

## 1. 🎯 COMPONENTE PRINCIPAL

### Arquivo: `Section2.tsx`

```tsx
import svgPaths from "./svg-6roaenl62f";

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center leading-[0] relative shrink-0 text-center w-full whitespace-nowrap">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#fff6ee] text-[32px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-none">Muito mais do que um Festival.</p>
      </div>
      <div className="flex flex-col font-['Sugar_Peachy:Medium',sans-serif] justify-center not-italic relative shrink-0 text-[#ef7d25] text-[92px] uppercase">
        <p className="leading-none">É um movimento!</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 2">
      <Frame />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-[1280px] z-[4]" data-name="Container">
      <Heading />
    </div>
  );
}

function EventImage() {
  return (
    <div className="h-[598.499px] relative rounded-[19.95px] shrink-0 w-[1063.998px] z-[3]" data-name="Event Image">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute h-[730.113px] left-[-15.79px] top-[-123.86px] w-[1095.17px]" data-name="CEP-172 1">
          <video autoPlay className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop playsInline>
            <source src="/_videos/v1/b2065d8472e6d408867f67ebf583e1c06cb3b16c" />
          </video>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-3 border-[#fff6ef] border-solid inset-0 pointer-events-none rounded-[19.95px] shadow-[5px_6px_0px_0px_#fff6ef]" />
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex flex-col gap-[48px] isolate items-center pb-[86px] pt-[290px] relative size-full" data-name="Section - 2">
      <Container />
      <EventImage />
      <div className="absolute flex h-[1157.418px] items-center justify-center left-[221.5px] top-[540px] w-[1611.849px] z-[2]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-11.8deg]">
          <div className="h-[876.566px] relative w-[1463.477px]">
            <div className="absolute inset-[-5.93%_-3.55%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1567.39 980.48">
                <path d={svgPaths.p199e9d20} id="Vector 12" stroke="var(--stroke-0, #0B6FB5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="103.914" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[1157.418px] items-center justify-center left-[221.5px] top-[540px] w-[1611.849px] z-[1]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-11.8deg]">
          <div className="h-[876.566px] relative w-[1463.477px]">
            <div className="absolute inset-[-11.42%_-6.84%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1663.75 1076.83">
                <path d={svgPaths.p19f82e00} id="Vector 13" stroke="var(--stroke-0, #EF7D25)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="200.264" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

---

## 2. 📄 ARQUIVOS SVG

### Arquivo: `svg-6roaenl62f.ts`

```typescript
export default {
  p199e9d20: "M53.4649 230.678L220.899 165.018L51.9592 445.387L523.966 66.7307L215.362 588.731L753.777 66.7307L184.173 816.9L1044.32 51.9572L394.286 785.712L1262.64 189.844L753.777 844.806L1362.78 437.712L1142.81 785.712L1515.44 588.731L1280.7 928.523H1484.25",
  p19f82e00: "M101.642 278.854L269.076 213.193L100.136 493.562L572.143 114.906L263.539 636.906L801.954 114.906L232.35 865.076L1092.5 100.132L442.463 833.887L1310.82 238.019L801.954 892.981L1410.95 485.887L1190.99 833.887L1563.61 636.906L1328.88 976.698H1532.42",
}
```

**Descrição:**
- `p199e9d20` - Path SVG da linha azul decorativa
- `p19f82e00` - Path SVG da linha laranja decorativa

---

## 3. 🔤 FONTES

### Google Fonts necessárias:

1. **DM Sans** - Regular (400)
2. **Sugar Peachy** - Medium (500)

### Link de importação para HTML:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400&display=swap" rel="stylesheet">
```

### Importação para CSS:

```css
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400&display=swap');
```

**⚠️ ATENÇÃO:** A fonte **Sugar Peachy** pode não estar disponível no Google Fonts. Você precisará:
- Encontrar a fonte em outro lugar (como Adobe Fonts, DaFont, ou comprar)
- Ou substituir por uma fonte similar decorativa/script

### Alternativas para Sugar Peachy:
- Pacifico
- Lobster
- Righteous
- Permanent Marker

---

## 4. 🎨 CORES

### Paleta de cores usada:

| Cor | Hex Code | Uso |
|-----|----------|-----|
| **Background** | `#1a1a1a` | Fundo da seção |
| **Texto Primário** | `#fff6ee` | "Muito mais do que um Festival." + Bordas |
| **Texto Destaque** | `#ef7d25` | "É UM MOVIMENTO!" + Linha SVG laranja |
| **Linha Azul** | `#0B6FB5` | Linha SVG azul decorativa |

### Variações:
- `#fff6ef` - Variação do texto primário para bordas

---

## 5. 📋 INSTRUÇÕES PARA IDE

### Estrutura de pastas recomendada:

```
src/
├── components/
│   └── Section2.tsx          # Componente principal
├── assets/
│   └── svg-6roaenl62f.ts     # Paths SVG
└── App.tsx                    # Ou onde você vai importar
```

### Passo a passo:

#### **Passo 1:** Criar arquivo SVG
1. Crie a pasta `src/assets/` (se não existir)
2. Crie o arquivo `svg-6roaenl62f.ts`
3. Cole o conteúdo da seção "ARQUIVOS SVG"

#### **Passo 2:** Criar componente
1. Crie a pasta `src/components/` (se não existir)
2. Crie o arquivo `Section2.tsx`
3. Cole o conteúdo da seção "COMPONENTE PRINCIPAL"
4. **IMPORTANTE:** Ajuste o import do SVG de acordo com sua estrutura:
   ```tsx
   // Se SVG está em assets/
   import svgPaths from "../assets/svg-6roaenl62f";
   
   // Ou ajuste conforme sua estrutura
   ```

#### **Passo 3:** Adicionar fontes
1. Abra seu arquivo `index.html` ou `_document.tsx` (Next.js)
2. Adicione os links das fontes no `<head>`:
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400&display=swap" rel="stylesheet">
   ```

#### **Passo 4:** Substituir vídeo
O componente tem um vídeo placeholder. Você precisa substituir:

```tsx
// Substitua esta linha:
<source src="/_videos/v1/b2065d8472e6d408867f67ebf583e1c06cb3b16c" />

// Por seu vídeo real:
<source src="/path/to/your/video.mp4" />
// Ou
<source src={yourVideoUrl} />
```

#### **Passo 5:** Importar no App.tsx

```tsx
import Section2 from './components/Section2';

export default function App() {
  return (
    <div className="min-h-screen">
      <Section2 />
    </div>
  );
}
```

### Configuração Tailwind

Certifique-se de que seu `tailwind.config.js` tem estas configurações:

```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'],
        'sugar-peachy': ['Sugar Peachy', 'cursive'], // ou sua alternativa
      },
      colors: {
        'festival-bg': '#1a1a1a',
        'festival-light': '#fff6ee',
        'festival-orange': '#ef7d25',
        'festival-blue': '#0B6FB5',
      },
    },
  },
  plugins: [],
}
```

---

## 6. ✅ CHECKLIST

### Antes de começar:
- [ ] Tenho Node.js instalado
- [ ] Tenho um projeto React configurado
- [ ] Tenho Tailwind CSS instalado e configurado
- [ ] Tenho TypeScript configurado (ou vou converter para JS)

### Arquivos:
- [ ] Criei `svg-6roaenl62f.ts` com os paths SVG
- [ ] Criei `Section2.tsx` com o componente
- [ ] Ajustei o import do SVG no componente
- [ ] Adicionei as fontes no HTML/head

### Mídia:
- [ ] Substitui o vídeo placeholder pelo vídeo real
- [ ] Testei se o vídeo carrega corretamente
- [ ] Configurei autoplay e loop conforme necessário

### Estilos:
- [ ] Verifiquei que Tailwind está funcionando
- [ ] As fontes estão carregando corretamente
- [ ] As cores estão renderizando como esperado
- [ ] Os SVGs decorativos estão aparecendo

### Integração:
- [ ] Importei o componente no App.tsx
- [ ] O componente renderiza sem erros
- [ ] Layout está responsivo (ou ajustei para mobile)

### Testes finais:
- [ ] Testei em Chrome
- [ ] Testei em Firefox
- [ ] Testei em Safari (se possível)
- [ ] Testei no mobile
- [ ] Vídeo reproduz automaticamente
- [ ] Não há erros no console

---

## 🔧 TROUBLESHOOTING

### Problema: Fontes não aparecem
**Solução:** 
- Verifique se os links estão no `<head>` do HTML
- Limpe o cache do navegador
- Use alternativas caso Sugar Peachy não esteja disponível

### Problema: SVGs não aparecem
**Solução:**
- Verifique o caminho do import
- Certifique-se que exportou como `export default`
- Verifique o console por erros

### Problema: Vídeo não carrega
**Solução:**
- Substitua o source pelo caminho correto do seu vídeo
- Verifique o formato do vídeo (MP4, WebM)
- Certifique-se que o arquivo está acessível

### Problema: Layout quebrado
**Solução:**
- Verifique se Tailwind está configurado
- Certifique-se que as classes `content-stretch` e `size-full` funcionam
- Ajuste larguras fixas se necessário para responsividade

### Problema: TypeScript errors
**Solução:**
- Se usar JS puro, remova os tipos `: React.CSSProperties`
- Instale `@types/react` se necessário
- Converta `.tsx` para `.jsx` se não usar TypeScript

---

## 📱 RESPONSIVIDADE

O design original é desktop-first. Para torná-lo responsivo, considere:

```tsx
// Adicione classes responsive ao Container:
<div className="w-full max-w-[1280px] px-4 md:px-0">

// Ajuste o texto para mobile:
<div className="text-[24px] md:text-[32px]">
<div className="text-[48px] md:text-[92px]">

// Ajuste o EventImage:
<div className="w-full max-w-[1063.998px] h-auto aspect-video">
```

---

## 🎥 SOBRE O VÍDEO

O componente original usa um vídeo hospedado no Figma. Você precisará:

1. **Ter seu próprio vídeo** no formato MP4 ou WebM
2. **Hospedá-lo** em:
   - Pasta `public/videos/` do projeto
   - CDN (Cloudinary, AWS S3, etc.)
   - Serviço de vídeo (Vimeo, YouTube embed)

3. **Atualizar o source:**
   ```tsx
   {/* Para vídeo local */}
   <source src="/videos/seu-video.mp4" type="video/mp4" />
   
   {/* Para vídeo em CDN */}
   <source src="https://seu-cdn.com/video.mp4" type="video/mp4" />
   ```

---

## 📞 SUPORTE

Se encontrar problemas:

1. Verifique o console do navegador para erros
2. Confirme que todas as dependências estão instaladas
3. Revise o checklist acima
4. Consulte a documentação do Tailwind CSS
5. Verifique se os paths de import estão corretos

---

**Última atualização:** 03/02/2026  
**Versão:** 1.0  
**Compatibilidade:** React 18+, Tailwind CSS 3+

---

Boa sorte com a implementação! 🚀
