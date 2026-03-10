'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'

const WHATSAPP = 'https://wa.me/5511985327937?text=Ola!%20Gostaria%20de%20saber%20mais%20sobre%20os%20passeios.'

export default function WhatsAppFloat() {
  const [visivel, setVisivel] = useState(false)
  const [tooltip, setTooltip] = useState(true)

  // Aparece após 2 segundos na página
  useEffect(() => {
    const timer = setTimeout(() => setVisivel(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  // Esconde o tooltip após 5 segundos
  useEffect(() => {
    const timer = setTimeout(() => setTooltip(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  if (!visivel) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 animate-slide-in-right">

      {/* Tooltip */}
      {tooltip && (
        <div className="flex items-center gap-2 glass bg-white/95 rounded-xl shadow-2xl px-4 py-3 max-w-[220px] backdrop-blur-md animate-scale-in">
          <p className="text-dark-900 text-sm font-semibold leading-snug">
            Fale conosco agora! 🇧🇷🇨🇱
          </p>
          <button
            onClick={() => setTooltip(false)}
            className="text-dark-400 hover:text-dark-900 transition-colors flex-shrink-0"
            aria-label="Fechar tooltip"
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* Botão flutuante */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-full shadow-glow hover:from-primary-700 hover:to-primary-800 hover:scale-110 transition-all duration-300 group"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={28} className="group-hover:scale-110 transition-transform duration-300" />
        
        {/* Ping animation */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75 animate-ping" />
      </a>
    </div>
  )
}