'use client'

import { Sparkles, Send, Wand2 } from 'lucide-react'
import { useState } from 'react'

const WA_NUMBER = '5511985327937'

const sugestoes = [
  'Lua de mel romântica',
  'Aventura na neve',
  'Tour de vinícolas',
  'Passeio em família',
  'Trilha nos Andes',
  'Praias e litoral',
  'Gastronomia local',
  'Fotografia e paisagens',
]

const steps = [
  {
    step: '01',
    titulo: 'Descreva sua ideia',
    desc: 'Escreva o que você tem em mente: destino, estilo, número de pessoas.',
  },
  {
    step: '02',
    titulo: 'Planejamos juntos',
    desc: 'Nossa equipe monta um roteiro sob medida para o seu perfil.',
  },
  {
    step: '03',
    titulo: 'Viva a experiência',
    desc: 'Motorista experiente, conforto total e atendimento em português.',
  },
]

export default function PasseioPersonalizado() {
  const [mensagem, setMensagem] = useState('')

  function adicionarSugestao(s: string) {
    setMensagem((prev) => {
      if (prev.includes(s)) return prev
      return prev ? `${prev}, ${s}` : s
    })
  }

  function enviarWhatsApp() {
    const texto = mensagem.trim() || 'Gostaria de criar um roteiro personalizado no Chile.'
    const msg = encodeURIComponent(
      `Olá! Gostaria de criar um roteiro personalizado.\n\n${texto}\n\nAguardo o contato!`
    )
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank')
  }

  const limite = 300

  return (
    <section id="personalizado" className="py-24 bg-[#1B2A4A] relative overflow-hidden">

      {/* Fundo decorativo */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#8B1A1A]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B1A1A]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Esquerda — formulário */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Sparkles size={16} className="text-primary-400" />
              <span className="text-xs text-primary-400 tracking-[0.3em] uppercase">
                Roteiro sob medida
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Seu passeio
              <span className="text-primary-400 italic"> não está </span>
              na lista?
            </h2>

            <p className="text-white/50 text-sm leading-relaxed mb-8">
              Conte como seria o passeio dos seus sonhos e a gente cria um roteiro exclusivo para você.
            </p>

            {/* Caixa de mensagem */}
            <div className="relative mb-3">
              <textarea
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value.slice(0, limite))}
                placeholder="Ex: Quero um passeio romântico para 2 pessoas, com vista da Cordilheira e jantar ao pôr do sol..."
                rows={5}
                className="w-full bg-white/5 border border-white/15 hover:border-white/25 focus:border-primary-500/70 focus:outline-none focus:ring-2 focus:ring-primary-500/20 text-white placeholder-white/25 text-sm rounded-2xl px-5 py-4 resize-none transition-all duration-300 leading-relaxed"
              />
              {/* Contador */}
              <span className={`absolute bottom-4 right-4 text-xs tabular-nums transition-colors ${mensagem.length > limite * 0.9 ? 'text-primary-400' : 'text-white/20'}`}>
                {mensagem.length}/{limite}
              </span>
            </div>

            {/* Chips de sugestão */}
            <div className="flex flex-wrap gap-2 mb-6">
              {sugestoes.map((s) => {
                const ativo = mensagem.includes(s)
                return (
                  <button
                    key={s}
                    onClick={() => adicionarSugestao(s)}
                    className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-all duration-200 ${
                      ativo
                        ? 'bg-primary-700 border-primary-600 text-white'
                        : 'bg-white/5 border-white/10 text-white/50 hover:bg-white/10 hover:text-white hover:border-white/20'
                    }`}
                  >
                    <Wand2 size={10} />
                    {s}
                  </button>
                )
              })}
            </div>

            {/* Botão enviar */}
            <button
              onClick={enviarWhatsApp}
              className="group flex items-center gap-3 px-8 py-4 bg-[#8B1A1A] text-white font-semibold rounded-xl hover:bg-[#A52020] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(139,26,26,0.4)] w-full sm:w-auto justify-center"
            >
              <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              Enviar pelo WhatsApp
            </button>
          </div>

          {/* Direita — steps */}
          <div className="space-y-4 md:pt-28">
            {steps.map((item) => (
              <div
                key={item.step}
                className="flex items-start gap-5 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-primary-500/40 hover:bg-white/[0.07] transition-all duration-300"
              >
                <span
                  className="text-3xl font-black text-primary-500/50 leading-none mt-1 flex-shrink-0"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {item.step}
                </span>
                <div>
                  <h4 className="text-white font-semibold mb-1">{item.titulo}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
