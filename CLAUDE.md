# CLAUDE.md — Br-Chile

Instruções para o Claude Code ao trabalhar neste projeto.

## Visão Geral

**Site de marketing** para passeios privativos no Chile com atendimento em português, voltado ao turista brasileiro.

- **Framework:** Next.js 14 (App Router)
- **Linguagem:** TypeScript + React 18
- **Estilização:** Tailwind CSS 3 + Framer Motion
- **Deploy:** Vercel (planejado)
- **Backend:** Nenhum — site estático, todas as conversões via WhatsApp

---

## Comandos

```bash
npm run dev    # Dev server (porta 3000)
npm run build  # Build de produção
npm start      # Servidor de produção
```

---

## Estrutura do Projeto

```
Br-Chile/
├── app/
│   ├── layout.tsx       # Layout raiz + metadata SEO
│   ├── page.tsx         # Página principal (monta todos os componentes)
│   └── globals.css      # Tailwind + Google Fonts + utilitários customizados
├── components/
│   ├── Navbar.tsx            # Header fixo com menu mobile
│   ├── Hero.tsx              # Seção hero com parallax
│   ├── QuemSomos.tsx         # Seção "Quem Somos"
│   ├── Diferencias.tsx       # 4 cards de diferenciais
│   ├── Passeios.tsx          # Grid de 11 passeios disponíveis
│   ├── PasseioPersonalizado.tsx  # CTA de passeio personalizado
│   ├── Footer.tsx            # Rodapé com contatos e redes sociais
│   └── WhatsAppFloat.tsx     # Botão flutuante do WhatsApp
├── public/                   # Vazio — imagens carregadas via URLs externas (Pexels)
├── tailwind.config.ts        # Tema customizado (cores, fontes, animações)
├── next.config.js            # Permite imagens do Unsplash
└── CONTEXTO_PROJETO.md       # Contexto de negócio e regras do projeto
```

---

## Arquitetura

- **Single-page:** Tudo em `app/page.tsx`, com seções como componentes separados
- **Sem rotas adicionais:** Nenhuma rota de API ou página extra
- **Sem estado global:** Apenas `useState`/`useEffect` locais onde necessário
- **Client components** (`use client`): Navbar, Hero, WhatsAppFloat
- **Server components** (padrão): QuemSomos, Diferencias, Passeios, PasseioPersonalizado, Footer

---

## Design System

### Paleta de Cores

| Token | Valor | Uso |
|-------|-------|-----|
| `primary-600` | `#dc2626` | Cor principal da marca (vermelho) |
| `primary-800` | `#991b1b` | Hover de botões |
| `accent-cream` | `#F5F0E8` | Fundo de seções claras |
| `accent-gold` | `#D4AF37` | Destaques premium |
| `dark-900` | `#0f172a` | Fundo de seções escuras |

### Tipografia

| Família | Variável Tailwind | Uso |
|---------|-------------------|-----|
| Inter | `font-sans` | Corpo / geral |
| Plus Jakarta Sans | `font-display` | Títulos principais |
| Playfair Display | `font-serif` | Elementos elegantes / nomes de passeios |

### Classes Utilitárias Customizadas

```css
.btn-primary          /* Botão vermelho gradiente com elevação no hover */
.btn-secondary        /* Botão outline */
.text-gradient-primary /* Texto com gradiente vermelho */
.text-gradient-gold   /* Texto com gradiente dourado */
.glass                /* Efeito glassmorphism claro */
.glass-dark           /* Efeito glassmorphism escuro */
.card-hover           /* Scale 1.05 + sombra no hover */
.shadow-glow          /* Sombra vermelha (40px, 30% opacidade) */
.section-divider      /* Linha decorativa com gradiente vermelho */
```

### Animações

```
animate-fade-in       0.6s ease-out (opacidade)
animate-slide-up      0.6s ease-out (translateY)
animate-slide-in-right 0.6s ease-out (translateX)
animate-scale-in      0.4s ease-out (scale)
animate-float         3s infinito (oscilação Y)
```

---

## Contatos e Links

| Canal | Valor |
|-------|-------|
| WhatsApp (Brasil) | `+5511985327937` |
| WhatsApp (Chile) | `+56 9 2759 4661` (exibido no footer) |
| Instagram | `@brasileirandonochile1` |
| Instagram pessoal | `@eukucmanski` |
| TikTok | `@brasileirandonochile` |

**Link base do WhatsApp:**
```
https://wa.me/5511985327937
```

Com mensagem pré-preenchida (usado nos cards de passeio):
```
https://wa.me/5511985327937?text=Ola!%20Tenho%20interesse%20no%20passeio%3A%20[Nome]
```

---

## Passeios Disponíveis (11)

| # | Nome | Tag | Mínimo |
|---|------|-----|--------|
| 1 | City Tour Santiago | Mais Popular | 4 pessoas |
| 2 | Cajón del Maipo | — | 4 pessoas |
| 3 | Litoral Chileno | — | 4 pessoas |
| 4 | Portillo | — | 4 pessoas |
| 5 | Farellones | Aventura | 3 pessoas |
| 6 | Zoo Safari | — | 4 pessoas |
| 7 | Valle Nevado | Neve | 4 pessoas |
| 8 | Vinícola Alyan | Vinho | 4 pessoas |
| 9 | Vinícola Undurraga | Vinho | 4 pessoas |
| 10 | Vinícola Concha y Toro | Vinho | 4 pessoas |
| 11 | Transfer Aeroporto | — | por trecho |

---

## Regras do Projeto

- **Preços não são exibidos** — estratégia deliberada para forçar contato via WhatsApp
- **Todos os CTAs levam ao WhatsApp** — nunca adicionar formulários ou checkout
- **Idioma:** Português BR em todo o conteúdo
- **Imagens externas:** Carregadas do Pexels/Unsplash — sem imagens locais em `/public`
- **Acessibilidade:** Manter conformidade com WCAG 2.1 AA (contraste mínimo 4.5:1)
- **Mobile-first:** Audiência principal vem do Instagram/TikTok via mobile

---

## Arquivos de Referência

| Arquivo | Conteúdo |
|---------|----------|
| `CONTEXTO_PROJETO.md` | Contexto de negócio, identidade de marca, estratégia de marketing |
| `ERROS_CORRIGIDOS.md` | Histórico de bugs resolvidos |
| `MELHORIAS_LAYOUT.md` | Melhorias de acessibilidade e layout já aplicadas |
