# 📦 EXPORTAÇÃO - MARQUEE COM SCROLL TRIGGER

## 1. COMPONENTE PRINCIPAL

### App.tsx (ou ScrollMarquee.tsx)
```tsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Marquee from './components/marquee_02';

gsap.registerPlugin(ScrollTrigger);

function ScrollMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current || !wrapperRef.current) return;

    const marqueeContent = marqueeRef.current;
    const wrapper = wrapperRef.current;

    // Define a posição inicial do marquee para a esquerda
    gsap.set(marqueeContent, { x: '-10%' });

    // Cria a animação que move o marquee da esquerda para direita baseado no scroll
    const animation = gsap.to(marqueeContent, {
      x: '10%',
      ease: 'none',
      scrollTrigger: {
        trigger: wrapper,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      }
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div className="min-h-[200vh] bg-neutral-900">
      {/* Espaçador para permitir scroll */}
      <div className="h-screen bg-gradient-to-b from-neutral-800 to-neutral-900 flex items-center justify-center">
        <h1 className="text-6xl font-bold text-[#fff6ef]">Scroll para baixo</h1>
      </div>

      {/* Container do marquee */}
      <div ref={wrapperRef} className="h-screen flex items-center overflow-hidden">
        <div ref={marqueeRef} className="flex-shrink-0" style={{ willChange: 'transform' }}>
          <Marquee />
        </div>
      </div>

      {/* Espaçador adicional */}
      <div className="h-screen bg-gradient-to-b from-neutral-900 to-neutral-800 flex items-center justify-center">
        <h1 className="text-6xl font-bold text-[#fff6ef]">Continue scrolling</h1>
      </div>
    </div>
  );
}

export default ScrollMarquee;
```

---

## 2. COMPONENTE MARQUEE

### components/marquee_02.tsx
```tsx
export default function Marquee() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex gap-[78px] items-center justify-center px-[100px] py-[10px] relative size-full" data-name="marquee_02">
      <div aria-hidden="true" className="absolute border-[#fff6ef] border-b-5 border-solid border-t-5 inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Sugar_Peachy:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fff6ef] text-[100px] whitespace-nowrap">
        <p className="leading-none">FESTIVAL PARENTAL 2026</p>
      </div>
      <div className="relative shrink-0 size-[24px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #FFF6EF)" id="Ellipse 3" r="12" />
        </svg>
      </div>
      <div className="flex flex-col font-['Sugar_Peachy:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fff6ef] text-[100px] whitespace-nowrap">
        <p className="leading-none">FESTIVAL PARENTAL 2026</p>
      </div>
      <div className="relative shrink-0 size-[24px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #FFF6EF)" id="Ellipse 3" r="12" />
        </svg>
      </div>
      <div className="flex flex-col font-['Sugar_Peachy:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fff6ef] text-[100px] whitespace-nowrap">
        <p className="leading-none">FESTIVAL PARENTAL 2026</p>
      </div>
      <div className="relative shrink-0 size-[24px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #FFF6EF)" id="Ellipse 3" r="12" />
        </svg>
      </div>
      <div className="flex flex-col font-['Sugar_Peachy:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fff6ef] text-[100px] whitespace-nowrap">
        <p className="leading-none">FESTIVAL PARENTAL 2026</p>
      </div>
    </div>
  );
}
```

---

## 3. ARQUIVOS SVG

### ✅ SVGs já estão inline no componente
Os SVGs são círculos simples que já estão embutidos no código do componente Marquee02.tsx. Não é necessário criar arquivos separados.

**SVG usado (círculo decorativo):**
```svg
<svg fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
  <circle cx="12" cy="12" fill="#FFF6EF" r="12" />
</svg>
```

---

## 4. FONTES

### Google Fonts - Sugar Peachy

**Adicione no `<head>` do seu HTML ou no arquivo de configuração:**

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Sugar+Peachy&display=swap" rel="stylesheet">
```

**OU use @import no seu CSS global:**

```css
@import url('https://fonts.googleapis.com/css2?family=Sugar+Peachy&display=swap');
```

**Para Next.js (next/font):**

```tsx
import localFont from 'next/font/local';

// Se você tiver o arquivo da fonte local
const sugarPeachy = localFont({
  src: './fonts/SugarPeachy-Black.woff2',
  variable: '--font-sugar-peachy',
});
```

---

## 5. CORES

### Paleta de Cores Usada

| Nome | Hex | RGB | Uso |
|------|-----|-----|-----|
| **Off-white (Principal)** | `#FFF6EF` | `rgb(255, 246, 239)` | Texto e bordas |
| **Preto Escuro** | `#1A1A1A` | `rgb(26, 26, 26)` | Background do marquee |
| **Cinza Escuro 900** | `#171717` | `rgb(23, 23, 23)` | Background geral (neutral-900) |
| **Cinza Escuro 800** | `#262626` | `rgb(38, 38, 38)` | Background gradiente (neutral-800) |

### CSS Variables (opcional):
```css
:root {
  --color-text-primary: #FFF6EF;
  --color-bg-marquee: #1A1A1A;
  --color-bg-dark-900: #171717;
  --color-bg-dark-800: #262626;
}
```

---

## 6. INSTRUÇÕES PARA IDE

### 📁 Estrutura de Pastas

```
seu-projeto/
├── src/
│   ├── components/
│   │   └── marquee_02.tsx          ← Cole aqui o componente Marquee
│   ├── App.tsx                     ← Cole aqui o componente principal
│   └── index.css                   ← Adicione as fontes aqui
├── public/
└── package.json
```

### 📝 Passo a Passo

#### PASSO 1: Instalar dependências
```bash
npm install gsap
# ou
yarn add gsap
# ou
pnpm add gsap
```

#### PASSO 2: Criar a pasta de componentes
```bash
mkdir src/components
```

#### PASSO 3: Criar o arquivo marquee_02.tsx
- Crie o arquivo `src/components/marquee_02.tsx`
- Cole o código da **Seção 2**

#### PASSO 4: Atualizar ou criar App.tsx
- Abra ou crie `src/App.tsx`
- Cole o código da **Seção 1**
- **IMPORTANTE:** Ajuste o caminho de import se necessário:
  - Se estiver em `src/App.tsx`: `import Marquee from './components/marquee_02';`
  - Se estiver em outra pasta, ajuste o caminho relativo

#### PASSO 5: Adicionar a fonte
- Abra seu arquivo `index.html` (geralmente em `public/` ou raiz)
- Adicione no `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Sugar+Peachy&display=swap" rel="stylesheet">
```

#### PASSO 6: Configurar Tailwind CSS
Certifique-se de ter o Tailwind configurado. No seu `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sugar-peachy': ['Sugar Peachy', 'sans-serif'],
      },
      borderWidth: {
        '5': '5px',
      }
    },
  },
  plugins: [],
}
```

#### PASSO 7: Importar no seu projeto
Se você já tem um App.tsx existente e quer apenas adicionar o componente:

```tsx
import ScrollMarquee from './components/ScrollMarquee';

function App() {
  return (
    <div>
      {/* Seu conteúdo existente */}
      
      <ScrollMarquee />
      
      {/* Mais conteúdo */}
    </div>
  );
}

export default App;
```

---

## 7. CHECKLIST DE VERIFICAÇÃO

### ✅ Instalação
- [ ] GSAP instalado (`npm install gsap`)
- [ ] Tailwind CSS configurado no projeto
- [ ] React instalado (obviamente)

### ✅ Arquivos
- [ ] Arquivo `components/marquee_02.tsx` criado
- [ ] Arquivo `App.tsx` ou `ScrollMarquee.tsx` criado
- [ ] Caminho de import correto no arquivo principal

### ✅ Fontes
- [ ] Fonte Sugar Peachy adicionada no `<head>` do HTML
- [ ] Font family configurada no Tailwind (opcional, mas recomendado)

### ✅ Configuração Tailwind
- [ ] `borderWidth: { '5': '5px' }` adicionado no extend (para border-5)
- [ ] Arquivos .tsx incluídos no content do tailwind.config

### ✅ Testes
- [ ] Componente renderiza sem erros
- [ ] Scroll funciona e anima o marquee da esquerda para direita
- [ ] Fonte Sugar Peachy está carregando corretamente
- [ ] Bordas superior e inferior estão visíveis
- [ ] Texto não está cortado nas extremidades

---

## 8. PERSONALIZAÇÃO

### Ajustar velocidade da animação
No arquivo principal, altere o valor de `scrub`:
```tsx
scrollTrigger: {
  scrub: 1,  // Menor = mais rápido, Maior = mais suave
}
```

### Ajustar distância de movimento
Altere os valores de `x`:
```tsx
gsap.set(marqueeContent, { x: '-10%' });  // Posição inicial
// ...
x: '10%',  // Posição final
```

### Alterar pontos de início/fim do scroll
```tsx
scrollTrigger: {
  start: 'top bottom',    // Quando o topo do wrapper toca o bottom da viewport
  end: 'bottom top',      // Quando o bottom do wrapper toca o topo da viewport
}
```

### Duplicar mais textos no marquee
No `marquee_02.tsx`, copie e cole mais blocos de texto e círculos SVG para criar um marquee mais longo.

---

## 9. TROUBLESHOOTING

### ❌ Erro: "Cannot find module 'gsap'"
**Solução:** Instale o GSAP com `npm install gsap`

### ❌ Fonte não carrega
**Solução:** Verifique se o link do Google Fonts está no `<head>` e se a internet está conectada

### ❌ Bordas não aparecem (border-5)
**Solução:** Adicione `borderWidth: { '5': '5px' }` no `extend` do tailwind.config.js

### ❌ Animação não funciona
**Solução:** 
- Verifique se importou `ScrollTrigger`
- Certifique-se de ter registrado com `gsap.registerPlugin(ScrollTrigger)`
- Verifique o console do navegador para erros

### ❌ Texto cortado
**Solução:** Ajuste os valores de `x` inicial e final no GSAP, ou aumente o padding horizontal

---

## 10. TECNOLOGIAS USADAS

- **React** 18+
- **TypeScript**
- **GSAP** (GreenSock Animation Platform)
- **GSAP ScrollTrigger**
- **Tailwind CSS** 3+
- **Google Fonts** (Sugar Peachy)

---

## 📞 SUPORTE

Se tiver problemas:
1. Verifique o console do navegador
2. Confirme que todas as dependências estão instaladas
3. Valide que os caminhos de import estão corretos
4. Teste com `npm run dev` ou `yarn dev`

---

**🎉 Pronto! Seu marquee animado com scroll trigger está configurado.**