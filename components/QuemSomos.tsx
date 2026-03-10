import { Sparkles } from 'lucide-react'

export default function QuemSomos() {
  return (
    <section id="quem-somos" className="py-24 bg-gradient-to-b from-accent-cream to-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">

        {/* Título */}
        <div className="mb-16">
          <span className="text-xs text-primary-600 tracking-[0.3em] uppercase font-semibold">
            Sobre nós
          </span>
          <h2 className="text-5xl sm:text-6xl font-bold text-dark-900 mt-3 leading-tight font-display">
            Quem Somos
          </h2>
          <div className="flex items-center gap-3 mt-4">
            <div className="section-divider" />
            <div className="w-2 h-2 rounded-full bg-primary-600 shadow-glow-sm" />
          </div>
        </div>

        {/* Conteúdo */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Esquerda — textos */}
          <div className="space-y-6">
            <p className="text-xl font-semibold text-dark-900 leading-relaxed">
              Somos brasileiros apaixonados por revelar o melhor do Chile
              para quem busca mais do que um simples passeio.
            </p>

            <p className="text-dark-700 leading-relaxed text-lg">
              Criamos experiências privativas, personalizadas e conduzidas
              no seu ritmo. Aqui, cada roteiro é pensado com estratégia,
              conforto e atenção aos detalhes.
            </p>

            <p className="text-dark-700 leading-relaxed text-lg">
              Atendimento em português, motoristas experientes e itinerários
              sob medida para você viver o Chile como um local — com
              segurança, exclusividade e tranquilidade.
            </p>

            {/* Frase destaque */}
            <div className="relative border-l-4 border-primary-600 pl-6 py-4 mt-8 bg-gradient-to-r from-primary-50 to-transparent rounded-r-lg">
              <Sparkles size={20} className="absolute -top-2 -left-3 text-primary-500 bg-white rounded-full p-0.5" />
              <p className="text-xl text-primary-700 italic font-serif font-semibold">
                "Experiência privativa com investimento inteligente."
              </p>
            </div>
          </div>

          {/* Direita — card escuro */}
          <div className="relative">

            {/* Detalhe decorativo */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary-600/30 rounded-tl-3xl" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary-600/30 rounded-br-3xl" />

            <div className="glass-dark rounded-2xl p-8 sm:p-10 text-white relative overflow-hidden bg-gradient-to-br from-dark-800 to-dark-900 shadow-2xl">
              
              {/* Efeito de brilho */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <span className="text-5xl mb-6 block relative z-10">🇧🇷🇨🇱</span>

              <p className="text-2xl font-bold leading-relaxed mb-8 font-display relative z-10">
                Queremos que você viva o Chile com a leveza de quem está
                de férias e a confiança de quem fez a melhor escolha.
              </p>

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 relative z-10">
                {[
                  { value: '100%', label: 'Privativo' },
                  { value: '11+', label: 'Destinos' },
                  { value: 'PT', label: 'Português' },
                ].map((s) => (
                  <div key={s.label} className="text-center group cursor-default">
                    <div className="text-2xl font-bold text-primary-500 font-display group-hover:scale-110 transition-transform duration-300">
                      {s.value}
                    </div>
                    <div className="text-[10px] text-white/50 tracking-widest uppercase mt-1 font-medium">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}