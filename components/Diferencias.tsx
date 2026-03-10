import { MessageCircle, Car, Map, Star } from 'lucide-react'

const diferenciais = [
  {
    icon: MessageCircle,
    titulo: 'Atendimento em Português',
    desc: 'Comunicação completa em português, do primeiro contato até o fim do passeio. Sem barreiras, sem ruídos.',
  },
  {
    icon: Star,
    titulo: 'Passeios Privativos',
    desc: 'Passeios 100% privativos. Exclusividade, conforto e atenção aos detalhes em cada percurso.',
  },
  {
    icon: Car,
    titulo: 'Motoristas Experientes',
    desc: 'Motoristas especializados na região. Segurança, experiência e profundo conhecimento local.',
  },
  {
    icon: Map,
    titulo: 'Roteiros Personalizados',
    desc: 'Roteiros planejados de acordo com o seu perfil. Cada viagem é estratégica e feita sob medida.',
  },
]

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="py-24 bg-gradient-to-b from-dark-900 to-dark-950 relative overflow-hidden">
      
      {/* Elementos decorativos de fundo */}
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
            <div
              key={i}
              className="group relative glass rounded-2xl p-8 hover:bg-white/10 hover:border-primary-600/50 transition-all duration-300 card-hover"
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
              <p className="text-white/60 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* Linha de destaque no hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 to-primary-700 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}