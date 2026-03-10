# CONTEXTO DO PROJETO — Brasileirando no Chile

> Use este arquivo como contexto para qualquer IA (GitHub Copilot, Cursor, Claude, etc.)
> Cole o conteúdo relevante no chat antes de fazer sua pergunta.

---

## Sobre a Empresa

**Nome:** Brasileirando no Chile
**Segmento:** Turismo privativo para brasileiros no Chile
**Slogan:** "O jeito brasileiro de viver o Chile."
**Proposta de valor:** Passeios privativos com valor equivalente ao de transporte compartilhado.

**Contatos:**
- WhatsApp: +56 9 2759 4661
- Instagram: @brasileirandonochile1 / @eukucmanski
- TikTok: @brasileirandonochile

**Link WhatsApp base:**
```
https://wa.me/56927594661?text=Ola!%20Gostaria%20de%20saber%20mais%20sobre%20os%20passeios.
```

---

## Stack Tecnológica

| Tecnologia | Versão | Uso |
|---|---|---|
| Next.js | 14 (App Router) | Framework principal |
| TypeScript | 5 | Tipagem |
| Tailwind CSS | 3 | Estilização |
| Lucide React | latest | Ícones |
| Node.js | 18+ | Runtime |

**Sem:** Framer Motion, banco de dados, sistema de pagamento, autenticação.
**Deploy:** Vercel (planejado)

---

## Identidade Visual

### Paleta de Cores

```css
--vermelho:        #8B1A1A   /* Cor principal da marca — botões, títulos, destaques */
--vermelho-hover:  #A52020   /* Hover dos botões vermelhos */
--azul-marinho:    #1B2A4A   /* Fundo de seções escuras, textos */
--fundo-escuro:    #0D1117   /* Fundo do Hero */
--fundo-claro:     #F5F0E8   /* Fundo de seções claras */
--branco-suave:    #F5F0E8   /* Textos sobre fundo escuro */
```

### Tipografia

```css
/* Títulos e destaques */
font-family: 'Playfair Display', serif;

/* Corpo de texto */
font-family: 'Lato', sans-serif;

/* Importação no globals.css */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,700&family=Lato:wght@300;400;700&display=swap');
```

### Estilo Geral
- Dark luxury com fundo escuro no Hero
- Seções alternando entre `#F5F0E8` (claro) e `#1B2A4A` (escuro)
- Elementos decorativos: linhas finas, pontos, bordas sutis
- Botões com `rounded-xl` ou `rounded-sm` dependendo do contexto
- Layout assimétrico, editorial, mobile-first

---

## Estrutura de Arquivos

```
/
├── app/
│   ├── globals.css          # Tailwind base + fontes Google
│   ├── layout.tsx           # Layout raiz com metadata SEO
│   └── page.tsx             # Página principal (importa todos os componentes)
├── components/
│   ├── Navbar.tsx           # Navegação fixa com links e botão WhatsApp
│   ├── Hero.tsx             # Seção hero fullscreen com parallax
│   ├── QuemSomos.tsx        # Seção institucional
│   ├── Diferenciais.tsx     # 4 cards com diferenciais da empresa
│   ├── Passeios.tsx         # Grid de cards dos passeios
│   ├── PasseioPersonalizado.tsx  # CTA para roteiros customizados
│   ├── Depoimentos.tsx      # Seção de depoimentos (placeholder)
│   ├── WhatsAppFloat.tsx    # Botão flutuante fixo do WhatsApp
│   └── Footer.tsx           # Rodapé com links e contatos
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Componentes — Resumo

### `Navbar.tsx`
- Fixa no topo com `sticky top-0 z-50`
- Logo "Brasileirando no Chile 🇧🇷🇨🇱"
- Links: Quem Somos, Diferenciais, Passeios, Contato
- Botão WhatsApp dourado no canto direito

### `Hero.tsx`
- Fullscreen com imagem de cordilheira (Pexels)
- Parallax no scroll via `useRef` + `addEventListener`
- Layout assimétrico — texto alinhado à esquerda
- Slogan em 3 linhas com tamanhos diferentes
- Botões: "Fale no WhatsApp" (vermelho) + "Ver Passeios" (outline)
- Stats no rodapé: 100% Privativo, PT-BR, 11+ Destinos, 5★

**Imagem atual:**
```
https://images.pexels.com/photos/31346452/pexels-photo-31346452.jpeg?auto=compress&cs=tinysrgb&w=1920
```

### `QuemSomos.tsx`
- Fundo `#F5F0E8`
- Grid 2 colunas: textos à esquerda, card azul à direita
- Textos reais do portfólio da empresa
- Frase destaque: *"Experiência privativa com investimento inteligente."*

### `Diferenciais.tsx`
- Fundo `#1B2A4A`
- 4 cards com hover animado
- Linha de destaque vermelha aparece no hover (`scale-x-0` → `scale-x-100`)
- Número decorativo no fundo de cada card

**Os 4 diferenciais:**
1. Atendimento em Português
2. Passeios Privativos
3. Motoristas Experientes
4. Roteiros Personalizados

### `Passeios.tsx`
- Fundo `#F5F0E8`
- Grid 3 colunas (responsivo: 1 col mobile, 2 tablet, 3 desktop)
- **Preços ocultos** — estratégia de marketing para forçar contato via WhatsApp
- Botão "Consultar disponibilidade" abre WhatsApp com mensagem pré-preenchida
- Imagens do Pexels (carregamento direto por URL)

**Os 11 passeios:**
| Passeio | Mínimo | Tag |
|---|---|---|
| City Tour Santiago | 4 pessoas | Mais Popular |
| Cajón del Maipo | 4 pessoas | — |
| Litoral Chileno | 4 pessoas | — |
| Portillo | 4 pessoas | — |
| Farellones | 3 pessoas | Aventura |
| Zoo Safari | 4 pessoas | — |
| Valle Nevado | 4 pessoas | Neve |
| Vinícola Alyan | 4 pessoas | Vinho |
| Vinícola Undurraga | 4 pessoas | Vinho |
| Vinícola Concha y Toro | 4 pessoas | Vinho |
| Transfer Aeroporto | por trecho | — |

**Obs:** Grupos acima do mínimo têm acréscimo de R$ 100,00 por pessoa.

### `PasseioPersonalizado.tsx`
- Fundo `#1B2A4A`
- CTA para roteiros sob medida
- 3 steps explicando o processo: Fale → Planejamos → Viva
- Efeito "glow" com círculos `blur-3xl` no fundo

### `WhatsAppFloat.tsx`
- Botão fixo no canto inferior direito
- Ícone do WhatsApp + animação de pulse
- Visível em todas as telas

### `Footer.tsx`
- Fundo `#0D1117`
- Logo + slogan
- Links de navegação
- Redes sociais: Instagram + TikTok
- WhatsApp + telefone
- Copyright

---

## Padrões de Código

### Componente padrão
```tsx
// Sem 'use client' se não usar hooks
export default function NomeComponente() {
  return (
    <section id="id-da-secao" className="py-24 bg-[#COR]">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        {/* conteúdo */}
      </div>
    </section>
  )
}
```

### Link WhatsApp com mensagem pré-preenchida
```tsx
const WA_BASE = 'https://wa.me/56927594661?text=Ola!%20Tenho%20interesse%20no%20passeio%3A%20'

// Uso:
<a href={`${WA_BASE}${encodeURIComponent(nomeDoPasseio)}`} target="_blank" rel="noopener noreferrer">
```

### Título de seção padrão
```tsx
<div className="mb-16">
  <span className="text-xs text-[#8B1A1A] tracking-[0.3em] uppercase">
    Subtítulo
  </span>
  <h2
    className="text-5xl sm:text-6xl font-bold text-[#1B2A4A] mt-3 leading-tight"
    style={{ fontFamily: 'Playfair Display, serif' }}
  >
    Título Principal
  </h2>
  <div className="flex items-center gap-3 mt-4">
    <div className="w-12 h-0.5 bg-[#8B1A1A]" />
    <div className="w-2 h-2 rounded-full bg-[#8B1A1A]" />
  </div>
</div>
```

### Botão primário (vermelho)
```tsx
<a
  href={WHATSAPP}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 px-8 py-4 bg-[#8B1A1A] text-white font-semibold rounded-xl hover:bg-[#A52020] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(139,26,26,0.4)]"
>
  Texto do botão
</a>
```

### Botão secundário (outline)
```tsx
<a
  href="#secao"
  className="flex items-center gap-2 px-8 py-4 border border-white/15 text-white/60 text-sm rounded-sm hover:border-white/40 hover:text-white/90 transition-all duration-300"
>
  Texto do botão
</a>
```

---

## Regras Importantes

1. **Todo conteúdo em português do Brasil**
2. **Sem sistema de pagamento** — conversão 100% via WhatsApp
3. **Preços não exibidos** — estratégia de marketing por consulta
4. **Mobile-first** — maioria dos clientes vem pelo Instagram/TikTok
5. **Sem localStorage** — não usar storage do navegador
6. **Imagens via Pexels** — URLs diretas sem autenticação
7. **Encoding:** sempre UTF-8 + LF (não CRLF) no VS Code
8. **Aspas:** sempre aspas retas `"` nunca tipográficas `" "`

---

## Próximos Passos (pendentes)

- [ ] `Depoimentos.tsx` — seção de reviews/prova social
- [ ] `WhatsAppFloat.tsx` — botão flutuante fixo
- [ ] `Footer.tsx` — rodapé completo
- [ ] SEO — meta tags e Open Graph no `layout.tsx`
- [ ] Deploy na Vercel

---

## Como usar este arquivo com uma IA

**Exemplo de prompt:**
```
Contexto: [cole as seções relevantes deste arquivo]

Tarefa: Crie um componente Footer.tsx seguindo os padrões de código
do projeto com as cores e tipografia definidas.
```

> Dica: Não precisa colar o arquivo inteiro. Cole apenas as seções
> relevantes para a tarefa — paleta de cores, padrões de código,
> e o resumo do componente que você quer criar ou editar.
