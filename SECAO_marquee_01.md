# 📦 Exportação do Componente Marquee01

## 1. COMPONENTE PRINCIPAL

### `marquee_01.tsx`

```tsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Marquee01() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current || !contentRef.current) return;

    const marqueeContent = contentRef.current;
    const marqueeWidth = marqueeContent.offsetWidth;

    // Anima o marquee da direita para esquerda baseado no scroll
    gsap.to(marqueeContent, {
      x: -marqueeWidth / 2,
      ease: 'none',
      scrollTrigger: {
        trigger: marqueeRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          // Loop infinito
          const progress = self.progress;
          const offset = (progress * marqueeWidth) % (marqueeWidth / 2);
          gsap.set(marqueeContent, { x: -offset });
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const MarqueeItem = ({ text }: { text: string }) => (
    <>
      <div className="flex flex-col font-['Sugar_Peachy:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[100px] whitespace-nowrap">
        <p className="leading-none">{text}</p>
      </div>
      <div className="relative shrink-0 size-[24px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #1A1A1A)" r="12" />
        </svg>
      </div>
    </>
  );

  return (
    <div 
      ref={marqueeRef}
      className="bg-[#f7a73c] relative w-full overflow-hidden"
      data-name="marquee_01"
    >
      <div className="absolute border-[#191919] border-b-5 border-solid border-t-5 inset-0 pointer-events-none" />
      
      <div 
        ref={contentRef}
        className="flex gap-[48px] items-center px-[100px] py-[10px] w-max"
      >
        {/* Primeiro conjunto */}
        <MarqueeItem text="4 DIAS" />
        <MarqueeItem text="+40 PALESTRANTES" />
        <MarqueeItem text="4 PALCOS" />
        <MarqueeItem text="4 DIAS" />
        <MarqueeItem text="+40 PALESTRANTES" />
        <MarqueeItem text="4 PALCOS" />
        
        {/* Segundo conjunto (duplicado para efeito infinito) */}
        <MarqueeItem text="4 DIAS" />
        <MarqueeItem text="+40 PALESTRANTES" />
        <MarqueeItem text="4 PALCOS" />
        <MarqueeItem text="4 DIAS" />
        <MarqueeItem text="+40 PALESTRANTES" />
        <MarqueeItem text="4 PALCOS" />
      </div>
    </div>
  );
}
```

---

## 2. ARQUIVOS SVG

### SVG Inline (Círculo Separador)

O SVG está embutido no componente. Caso queira extrair para um arquivo separado:

**`components/icons/CircleDot.tsx`**

```tsx
export default function CircleDot() {
  return (
    <svg 
      className="block size-full" 
      fill="none" 
      preserveAspectRatio="none" 
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" fill="#1A1A1A" r="12" />
    </svg>
  );
}
```

**Se optar por usar o componente separado, substitua no MarqueeItem:**

```tsx
import CircleDot from './icons/CircleDot';

const MarqueeItem = ({ text }: { text: string }) => (
  <>
    <div className="flex flex-col font-['Sugar_Peachy:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[100px] whitespace-nowrap">
      <p className="leading-none">{text}</p>
    </div>
    <div className="relative shrink-0 size-[24px]">
      <CircleDot />
    </div>
  </>
);
```

---

## 3. FONTES

### Google Fonts

**Fonte usada:** Sugar Peachy (weight: Black/900)

**Link de importação para o HTML:**

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Sugar+Peachy:wght@900&display=swap" rel="stylesheet">
```

**OU no CSS/SCSS:**

```css
@import url('https://fonts.googleapis.com/css2?family=Sugar+Peachy:wght@900&display=swap');
```

**Para Tailwind CSS (tailwind.config.js):**

```js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'sugar-peachy': ['"Sugar Peachy"', 'sans-serif'],
      },
    },
  },
}
```

---

## 4. CORES

### Paleta de Cores do Componente

| Cor | Código HEX | Uso |
|-----|------------|-----|
| **Laranja (fundo)** | `#F7A73C` | Background do marquee |
| **Preto (texto)** | `#1A1A1A` | Texto e círculos separadores |
| **Preto (bordas)** | `#191919` | Bordas superior e inferior |

**CSS Variables (opcional):**

```css
:root {
  --marquee-bg: #F7A73C;
  --marquee-text: #1A1A1A;
  --marquee-border: #191919;
}
```

---

## 5. INSTRUÇÕES PARA IDE

### Passo a Passo de Instalação

#### 5.1. Instalar Dependências

```bash
npm install gsap
# ou
yarn add gsap
# ou
pnpm add gsap
```

#### 5.2. Estrutura de Pastas

```
seu-projeto/
├── src/
│   ├── components/
│   │   └── marquee_01.tsx             ← Cole aqui
│   ├── App.tsx                        ← Importe aqui
│   └── index.html                     ← Adicione a fonte aqui
```

#### 5.3. Adicionar Fonte no HTML

No arquivo `index.html` ou `_document.tsx` (Next.js), adicione no `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Sugar+Peachy:wght@900&display=swap" rel="stylesheet">
```

#### 5.4. Importar no App.tsx

**Exemplo básico:**

```tsx
import Marquee01 from './components/marquee_01';

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Conteúdo antes do marquee */}
      <div className="h-screen bg-gray-900 flex items-center justify-center">
        <h1 className="text-6xl font-bold text-white">Role para baixo</h1>
      </div>
      
      {/* Componente Marquee */}
      <Marquee01 />
      
      {/* Conteúdo depois do marquee */}
      <div className="h-screen bg-gray-800 flex items-center justify-center">
        <h1 className="text-6xl font-bold text-white">Continue rolando</h1>
      </div>
    </div>
  );
}
```

#### 5.5. Configuração do Tailwind (se necessário)

Se a borda de `5px` não funcionar, adicione no `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      borderWidth: {
        '5': '5px',
      },
    },
  },
}
```

---

## 6. CHECKLIST

### ✅ Verificação de Instalação

- [ ] GSAP instalado (`npm install gsap`)
- [ ] Fonte Sugar Peachy adicionada no HTML
- [ ] Arquivo `marquee_01.tsx` criado em `src/components/`
- [ ] Componente importado no `App.tsx`
- [ ] Tailwind CSS configurado (se necessário adicionar `border-5`)
- [ ] Testado o scroll para ver a animação funcionando
- [ ] Verificado se o loop infinito está funcionando corretamente

### 🎨 Personalização (Opcional)

- [ ] Alterar cores no componente
- [ ] Modificar os textos do marquee
- [ ] Ajustar velocidade do scroll (propriedade `scrub`)
- [ ] Alterar tamanho da fonte (atualmente `100px`)
- [ ] Ajustar gap entre elementos (atualmente `48px`)
- [ ] Modificar padding horizontal (atualmente `100px`)

---

## 7. TROUBLESHOOTING

### Problema: Animação não funciona

**Solução:** Verifique se o GSAP e ScrollTrigger estão instalados corretamente.

```bash
npm install gsap
```

### Problema: Fonte não aparece

**Solução:** Verifique se o link do Google Fonts está no `<head>` do HTML.

### Problema: Borda de 5px não funciona

**Solução:** Adicione a configuração no `tailwind.config.js` conforme seção 5.5.

### Problema: Marquee não faz loop

**Solução:** Certifique-se de que o conteúdo está duplicado (dois conjuntos de itens).

---

## 8. CUSTOMIZAÇÃO RÁPIDA

### Alterar Velocidade do Scroll

No `useEffect`, modifique o valor de `scrub`:

```tsx
scrollTrigger: {
  // ...
  scrub: 1,  // ← Menor = mais rápido, Maior = mais lento
}
```

### Alterar Direção (Esquerda para Direita)

Mude o sinal do `x`:

```tsx
gsap.to(marqueeContent, {
  x: marqueeWidth / 2,  // ← Positivo = esquerda para direita
  // ...
});
```

### Alterar Textos

Modifique as props de `<MarqueeItem>`:

```tsx
<MarqueeItem text="SEU TEXTO AQUI" />
```

---

## 9. NOTAS IMPORTANTES

- ⚠️ Este componente requer **Tailwind CSS** e **React**
- ⚠️ Certifique-se de ter altura suficiente na página para ativar o scroll
- ⚠️ O componente usa `useRef` e `useEffect`, portanto funciona apenas no client-side
- ⚠️ Para Next.js, pode ser necessário usar `'use client'` no topo do arquivo
- ⚠️ A animação é acionada quando o componente entra na viewport

---

## 10. EXEMPLO COMPLETO PARA NEXT.JS

```tsx
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// ... resto do código igual
```

---

**Documento criado em:** 2026-02-03  
**Versão:** 1.0  
**Compatível com:** React 18+, GSAP 3+, Tailwind CSS 3+
