import { MessageCircle, Sparkles, ArrowRight } from 'lucide-react'

const WHATSAPP = 'https://wa.me/5511985327937?text=Ola!%20Gostaria%20de%20criar%20um%20roteiro%20personalizado%20no%20Chile.'

export default function PasseioPersonalizado() {
  return (
    <section id="personalizado" className="py-24 bg-[#1B2A4A] relative overflow-hidden">

      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#8B1A1A]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B1A1A]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-5xl mx-auto px-6 sm:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Esquerda — texto */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Sparkles size={16} className="text-[#8B1A1A]" />
              <span className="text-xs text-[#8B1A1A] tracking-[0.3em] uppercase">
                Roteiro sob medida
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Seu passeio
              <span className="text-[#8B1A1A] italic"> não está </span>
              na lista?
            </h2>

            <p className="text-white/60 leading-relaxed mb-4">
              Na Brasileirando, cada viagem é única e o seu roteiro também
              pode ser. Se o passeio dos seus sonhos não aparece na nossa
              lista principal, nós criamos um roteiro personalizado.
            </p>

            <p className="text-white/60 leading-relaxed mb-8">
              Feito sob medida para o seu estilo, tempo e preferências.
              Nosso objetivo é que você viva o Chile do seu jeito —
              <span className="text-white"> experiências autênticas, seguras
              e repletas de momentos inesquecíveis.</span>
            </p>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#8B1A1A] text-white font-semibold rounded-xl hover:bg-[#A52020] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(139,26,26,0.4)] hover:gap-5"
            >
              <MessageCircle size={18} />
              Criar meu roteiro
              <ArrowRight size={16} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
            </a>
          </div>

          {/* Direita — card com steps */}
          <div className="space-y-4">
            {[
              {
                step: '01',
                titulo: 'Fale com a gente',
                desc: 'Mande uma mensagem no WhatsApp contando o que você tem em mente.',
              },
              {
                step: '02',
                titulo: 'Planejamos juntos',
                desc: 'Nossa equipe monta um roteiro personalizado de acordo com seu perfil e preferências.',
              },
              {
                step: '03',
                titulo: 'Viva a experiência',
                desc: 'No dia, é só curtir. Motorista experiente, conforto e atendimento em português.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex items-start gap-5 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[#8B1A1A]/40 hover:bg-white/8 transition-all duration-300"
              >
                {/* Número */}
                <span
                  className="text-3xl font-black text-[#8B1A1A]/40 leading-none mt-1 flex-shrink-0"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {item.step}
                </span>

                {/* Texto */}
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    {item.titulo}
                  </h4>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}