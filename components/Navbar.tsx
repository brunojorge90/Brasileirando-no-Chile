'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const WHATSAPP = 'https://wa.me/5511985327937'

const LINKTREE = 'https://linktr.ee/brasileirandonochile'

const links = [
  { label: 'Quem Somos', href: '#quem-somos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Passeios', href: '#passeios' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10 py-3'
          : 'bg-gradient-to-b from-black/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <img
            src="/logo.PNG"
            alt="Brasileirando no Chile"
            className="h-11 w-11 rounded-full object-cover ring-2 ring-white/20 group-hover:ring-white/40 transition-all duration-300"
          />
          <div className="flex flex-col leading-none">
            <span
              className="text-[15px] font-bold text-white tracking-tight"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Brasileirando
            </span>
            <span
              className="text-[11px] font-medium text-primary-400 tracking-[0.15em] uppercase"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              no Chile
            </span>
          </div>
        </a>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/60 hover:text-white transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}

          <a
            href={LINKTREE}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 border border-white/15 hover:border-white/30 text-white/70 hover:text-white text-sm font-medium rounded-xl transition-all duration-300"
          >
            Redes Sociais
          </a>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-primary-700 hover:bg-primary-600 text-white text-sm font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_4px_20px_rgba(220,38,38,0.35)]"
          >
            WhatsApp
          </a>
        </nav>

        {/* Botão mobile */}
        <button
          className="md:hidden text-white/70 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-[#0A0A0A]/98 backdrop-blur-md border-t border-white/10 px-6 py-6 flex flex-col gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/70 hover:text-white hover:bg-white/5 py-3 px-3 rounded-lg transition-all duration-200 text-sm tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href={LINKTREE}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 py-3 border border-white/15 text-white/70 font-medium rounded-xl text-center text-sm transition-all duration-300"
          >
            Redes Sociais
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 py-3 bg-primary-700 hover:bg-primary-600 text-white font-semibold rounded-xl text-center text-sm transition-all duration-300"
          >
            Fale no WhatsApp
          </a>
        </div>
      )}
    </header>
  )
}
