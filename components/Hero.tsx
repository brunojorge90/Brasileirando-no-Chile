'use client'

import { useEffect, useRef, useState } from 'react'
import { MessageCircle, ArrowRight, MapPin, Sparkles } from 'lucide-react'

const WHATSAPP = 'https://wa.me/5511985327937?text=Ola!%20Gostaria%20de%20saber%20mais%20sobre%20os%20passeios.'

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
    const onScroll = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950">

      {/* Imagem de fundo */}
      <div ref={parallaxRef} className="absolute inset-0 scale-110 will-change-transform">
        <div
          className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('https://images.pexels.com/photos/31346452/pexels-photo-31346452.jpeg?auto=compress&cs=tinysrgb&w=1920')` }}

        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950/95 via-dark-900/70 to-primary-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-dark-900/60" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
      />

      {/* Linha vertical decorativa esquerda com gradiente */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary-600/50 to-transparent hidden lg:block" />

      {/* Elementos flutuantes decorativos */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary-600/10 rounded-full blur-3xl animate-float hidden xl:block" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-700/5 rounded-full blur-3xl animate-float hidden xl:block" style={{ animationDelay: '1s' }} />

      {/* Layout principal — alinhado à esquerda, moderno */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 max-w-7xl">

        {/* Tag de localização */}
        <div
          className="flex items-center gap-2 mb-10"
          style={{ opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(16px)', transition: 'all 0.6s ease 0.1s' }}
        >
          <MapPin size={16} className="text-primary-500" />
          <span className="text-xs text-white/50 tracking-[0.3em] uppercase font-medium">Santiago, Chile</span>
          <div className="w-12 h-px bg-gradient-to-r from-primary-600/50 to-transparent ml-2" />
          <Sparkles size={14} className="text-primary-400 animate-pulse" />
        </div>

        {/* Headline — grande, editorial, à esquerda */}
        <div
          style={{ opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.7s ease 0.2s' }}
        >
                <h1 className="text-left font-display">
            <span className="block text-[clamp(2rem,5vw,4.5rem)] font-medium text-white/70 leading-[1.15] tracking-tight">
                O jeito brasileiro
            </span>
            <span className="block text-[clamp(2.5rem,7vw,6.5rem)] font-bold italic text-gradient-primary leading-[1.05] text-shadow-lg">
                de viver
            </span>
            <span className="block text-[clamp(2.5rem,7vw,6.5rem)] font-bold text-white leading-[1.05] text-shadow">
                o Chile.
            </span>
            </h1>
        </div>

        {/* Linha divisora com texto */}
        <div
          className="flex items-center gap-4 mt-8 mb-8"
          style={{ opacity: loaded ? 1 : 0, transition: 'all 0.7s ease 0.4s' }}
        >
          <div className="section-divider" />
          <span className="text-xs text-white/40 tracking-[0.25em] uppercase font-medium">
            Passeios privativos · Atendimento em português
          </span>
          <div className="section-divider" />
        </div>

        {/* Subtítulo */}
        <p
          className="text-white/65 text-base sm:text-lg max-w-lg leading-relaxed mb-12 font-light"
          style={{ opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(16px)', transition: 'all 0.7s ease 0.5s' }}
        >
          Passeios privativos com valor equivalente ao de transporte compartilhado.
          Motoristas experientes, roteiros sob medida, experiência{' '}
          <span className="text-white font-medium">inesquecível.</span>
        </p>

        {/* Botoes */}
        <div
          className="flex flex-col sm:flex-row items-start gap-4"
          style={{ opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(16px)', transition: 'all 0.7s ease 0.65s' }}
        >
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group flex items-center justify-center gap-3 text-sm font-semibold tracking-wide uppercase"
          >
            <MessageCircle size={18} />
            Fale no WhatsApp
            <ArrowRight size={16} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
          </a>

          <a
            href="#passeios"
            className="btn-secondary flex items-center justify-center gap-2 text-sm font-semibold tracking-wide uppercase group"
          >
            Ver Passeios
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        {/* Stats — linha horizontal na parte inferior */}
        <div
          className="flex items-center gap-10 mt-20 pt-8 border-t border-white/[0.08]"
          style={{ opacity: loaded ? 1 : 0, transition: 'all 0.7s ease 0.8s' }}
        >
          {[
            { value: '100%', label: 'Privativo' },
            { value: 'PT-BR', label: 'Em Português' },
            { value: '11+', label: 'Destinos' },
            { value: '5★', label: 'Avaliacao' },
          ].map((stat, i) => (
            <div key={i} className="text-left">
              <div
                className="text-2xl font-bold text-white"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {stat.value}
              </div>
              <div className="text-[10px] text-white/30 tracking-[0.2em] uppercase mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}

          {/* Bandeiras */}
          <div className="ml-auto hidden sm:flex items-center gap-2">
            <span className="text-2xl">🇧🇷</span>
            <div className="w-px h-6 bg-white/10" />
            <span className="text-2xl">🇨🇱</span>
          </div>
        </div>

      </div>

      {/* Barra lateral direita — scroll indicator moderno */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 hidden lg:flex">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-white/20" />
        <span
          className="text-[10px] text-white/20 tracking-[0.3em] uppercase"
          style={{ writingMode: 'vertical-rl' }}
        >
          Scroll
        </span>
        <div className="w-px h-16 bg-gradient-to-t from-transparent to-white/20" />
      </div>

    </section>
  )
}