'use client'

import { MessageCircle, Car, Map, Star, X, ArrowRight, Check } from 'lucide-react'
import { useState, useEffect } from 'react'

const diferenciais = [
  {
    icon: MessageCircle,
    titulo: 'Atendimento em Português',
    desc: 'Comunicação completa em português, do primeiro contato até o fim do passeio. Sem barreiras, sem ruídos.',
    modal: {
      subtitulo: 'Você não precisa se preocupar com o idioma.',
      corpo: 'Viajar para um país de língua espanhola pode gerar insegurança — dificuldade de se comunicar, medo de entender errado os guias, ou não saber como agir em situações inesperadas. Na Brasileirando, isso não existe.',
      topicos: [
        'Atendimento 100% em português do Brasil desde o primeiro contato no WhatsApp',
        'Motoristas e guias que falam seu idioma e entendem sua cultura',
        'Explicações sobre cada ponto turístico sem ruído de comunicação',
        'Suporte em tempo real durante o passeio — dúvidas, imprevistos e tudo mais',
        'Você foca em aproveitar; a gente cuida de toda a comunicação local',
      ],
    },
  },
  {
    icon: Star,
    titulo: 'Passeios Privativos',
    desc: 'Passeios 100% privativos. Exclusividade, conforto e atenção aos detalhes em cada percurso.',
    modal: {
      subtitulo: 'Seu grupo. Seu ritmo. Sua viagem.',
      corpo: 'Nada de compartilhar van com desconhecidos, esperar grupos atrasados ou seguir um roteiro engessado. Nos passeios privativos da Brasileirando, você tem o veículo e o motorista exclusivamente para você e seu grupo.',
      topicos: [
        'Veículo exclusivo para o seu grupo — sem mistura com outros turistas',
        'Horários flexíveis: sair mais cedo, ficar mais tempo em um ponto, pausas quando quiser',
        'Atenção total do motorista somente para você e sua família',
        'Ideal para casais, famílias com crianças, grupos de amigos ou viagens corporativas',
        'Privacidade e conforto durante todo o percurso',
      ],
    },
  },
  {
    icon: Car,
    titulo: 'Motoristas Experientes',
    desc: 'Motoristas especializados na região. Segurança, experiência e profundo conhecimento local.',
    modal: {
      subtitulo: 'Mais do que um motorista — um guia local.',
      corpo: 'Nossos motoristas conhecem cada estrada, cada atalho e cada detalhe das regiões que percorrem. Com anos de experiência no turismo receptivo no Chile, eles transformam o trajeto em parte da experiência.',
      topicos: [
        'Amplo conhecimento das estradas chilenas, incluindo rotas de montanha e litoral',
        'Experiência com turistas brasileiros e entendimento do perfil do viajante BR',
        'Dicas exclusivas de lugares, restaurantes e pontos pouco conhecidos',
        'Condução segura em qualquer tipo de terreno ou condição climática',
        'Veículos confortáveis, higienizados e com manutenção em dia',
      ],
    },
  },
  {
    icon: Map,
    titulo: 'Roteiros Personalizados',
    desc: 'Roteiros planejados de acordo com o seu perfil. Cada viagem é estratégica e feita sob medida.',
    modal: {
      subtitulo: 'A viagem que você imaginou, do jeito que você quer.',
      corpo: 'Cada viajante tem um perfil diferente. Uns querem aventura nas montanhas; outros preferem vinícolas e gastronomia. Alguns viajam em família com crianças pequenas; outros são casais em lua de mel. Na Brasileirando, seu roteiro é pensado especificamente para você.',
      topicos: [
        'Consulta prévia para entender seus interesses, tempo disponível e estilo de viagem',
        'Roteiro montado com base no seu perfil — sem itinerários genéricos',
        'Combinação de destinos que fazem sentido para o seu grupo',
        'Sugestões personalizadas de horários, paradas e experiências extras',
        'Ajustes possíveis até o dia do passeio — flexibilidade total',
      ],
    },
  },
]

type Diferencial = typeof diferenciais[number]

function Modal({ item, onClose }: { item: Diferencial; onClose: () => void }) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in" />

      {/* Painel */}
      <div
        className="relative bg-[#0f1e36] border border-white/10 rounded-3xl max-w-lg w-full shadow-2xl animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Topo colorido */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#8B1A1A] to-[#A52020] rounded-t-3xl" />

        <div className="p-8">
          {/* Cabeçalho */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-600/30 to-primary-600/10 flex items-center justify-center shrink-0">
                <item.icon size={22} className="text-primary-400" />
              </div>
              <div>
                <h3
                  className="text-xl font-bold text-white leading-tight"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {item.titulo}
                </h3>
                <p className="text-primary-400 text-sm mt-0.5">{item.modal.subtitulo}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white/30 hover:text-white transition-colors ml-4 shrink-0"
              aria-label="Fechar"
            >
              <X size={20} />
            </button>
          </div>

          {/* Texto */}
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            {item.modal.corpo}
          </p>

          {/* Tópicos */}
          <ul className="space-y-3">
            {item.modal.topicos.map((t, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={11} className="text-primary-400" strokeWidth={3} />
                </div>
                <span className="text-white/70 text-sm leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function Diferenciais() {
  const [aberto, setAberto] = useState<Diferencial | null>(null)

  return (
    <section id="diferenciais" className="py-24 bg-gradient-to-b from-dark-900 to-dark-950 relative overflow-hidden">

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-700/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 sm:px-12 relative z-10">

        {/* Título */}
        <div className="mb-16 text-center">
          <span className="text-xs text-primary-500 tracking-[0.3em] uppercase font-semibold">
            Nossos diferenciais
          </span>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mt-3 leading-tight font-display">
            Por que escolher a
            <span className="text-gradient-primary"> Brasileirando?</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="section-divider" />
            <div className="w-2 h-2 rounded-full bg-primary-600 shadow-glow-sm" />
            <div className="section-divider" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {diferenciais.map((item, i) => (
            <button
              key={i}
              onClick={() => setAberto(item)}
              className="group relative glass rounded-2xl p-8 hover:bg-white/10 hover:border-primary-600/50 transition-all duration-300 card-hover text-left w-full"
            >
              {/* Número decorativo */}
              <span className="absolute top-6 right-6 text-5xl font-black text-white/[0.03] group-hover:text-primary-600/10 transition-all font-display">
                0{i + 1}
              </span>

              {/* Ícone */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-600/20 to-primary-700/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:from-primary-600/30 group-hover:to-primary-700/20 transition-all duration-300 shadow-glow-sm">
                <item.icon size={24} className="text-primary-500" />
              </div>

              {/* Texto */}
              <h3 className="text-lg font-bold text-white mb-3 font-display">
                {item.titulo}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                {item.desc}
              </p>

              {/* Link saiba mais */}
              <span className="flex items-center gap-1.5 text-xs text-primary-500 font-semibold group-hover:gap-2.5 transition-all duration-300">
                Saiba mais
                <ArrowRight size={12} />
              </span>

              {/* Linha de destaque no hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 to-primary-700 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </button>
          ))}
        </div>

      </div>

      {/* Modal */}
      {aberto && <Modal item={aberto} onClose={() => setAberto(null)} />}
    </section>
  )
}
