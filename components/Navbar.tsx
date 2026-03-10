'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const WHATSAPP = 'https://wa.me/5511985327937'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Quem Somos', href: '#quem-somos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Passeios', href: '#passeios' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#C9A84C]/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <span
            className="text-xl font-bold text-gold-gradient"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Brasileirando no Chile
          </span>
          <span>🇧🇷🇨🇱</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 hover:text-[#ffffff] transition-colors uppercase tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-[#8b1a1a] text-white text-sm font-bold rounded-full hover:bg-[#8B1A1A] transition-all"
          >
            WhatsApp
          </a>
        </nav>

        <button
          className="md:hidden text-[#C9A84C]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/95 px-4 py-6 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-[#8B1A1A] py-2 border-b border-white/10"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 py-3 bg-[#8B1A1A] text-white font-bold rounded-full text-center"
          >
            Fale no WhatsApp
          </a>
        </div>
      )}
    </header>
  )
}