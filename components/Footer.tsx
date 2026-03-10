import { MessageCircle, Instagram, Phone } from 'lucide-react'

const WHATSAPP = 'https://wa.me/5511985327937?text=Ola!%20Gostaria%20de%20saber%20mais%20sobre%20os%20passeios.'

export default function Footer() {
  return (
    <footer id="contato" className="bg-[#0D1117] text-white">

      {/* CTA principal */}
      <div className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-12 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3
              className="text-3xl sm:text-4xl font-bold leading-tight mb-2"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Sua experiência privativa
              <span className="text-[#8B1A1A] italic"> no Chile</span>
            </h3>
            <p className="text-white/50">começa com uma mensagem.</p>
          </div>
            <a
          
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-3 px-8 py-4 bg-[#8B1A1A] text-white font-semibold rounded-xl hover:bg-[#A52020] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(139,26,26,0.4)] whitespace-nowrap"
          >
            <MessageCircle size={18} />
            Falar no WhatsApp
          </a>
        </div>
      </div>

      {/* Corpo do footer */}
      <div className="max-w-6xl mx-auto px-6 sm:px-12 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Coluna 1 — Logo e slogan */}
          <div>
            <div className="mb-4">
              <span
                className="text-2xl font-bold text-white"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Brasileirando
              </span>
              <div className="flex items-center gap-2 mt-1">
                <div className="h-px w-8 bg-[#8B1A1A]" />
                <span className="text-xs text-white/40 tracking-widest uppercase">no Chile</span>
                <div className="h-px w-8 bg-[#8B1A1A]" />
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              O jeito brasileiro de viver o Chile.
              Passeios privativos, atendimento em português
              e experiências inesquecíveis.
            </p>
            <div className="flex items-center gap-1 mt-4">
              <span className="text-lg">🇧🇷</span>
              <div className="w-px h-4 bg-white/10 mx-1" />
              <span className="text-lg">🇨🇱</span>
            </div>
          </div>

          {/* Coluna 2 — Navegação */}
          <div>
            <h4 className="text-xs text-white/40 tracking-[0.3em] uppercase mb-5">
              Navegação
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Quem Somos', href: '#quem-somos' },
                { label: 'Diferenciais', href: '#diferenciais' },
                { label: 'Nossos Passeios', href: '#passeios' },
                { label: 'Passeio Personalizado', href: '#personalizado' },
                { label: 'Contato', href: '#contato' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 text-sm hover:text-[#8B1A1A] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 — Contato e redes */}
          <div>
            <h4 className="text-xs text-white/40 tracking-[0.3em] uppercase mb-5">
              Contato
            </h4>
            <ul className="space-y-4">

              <li>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/50 text-sm hover:text-[#8B1A1A] transition-colors duration-200"
                >
                  <MessageCircle size={15} className="flex-shrink-0" />
                  +56 9 2759 4661
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com/brasileirandonochile1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/50 text-sm hover:text-[#8B1A1A] transition-colors duration-200"
                >
                  <Instagram size={15} className="flex-shrink-0" />
                  @brasileirandonochile1
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com/eukucmanski"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/50 text-sm hover:text-[#8B1A1A] transition-colors duration-200"
                >
                  <Instagram size={15} className="flex-shrink-0" />
                  @eukucmanski
                </a>
              </li>

              <li>
                <a
                  href="https://tiktok.com/@brasileirandonochile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/50 text-sm hover:text-[#8B1A1A] transition-colors duration-200"
                >
                  <Phone size={15} className="flex-shrink-0" />
                  @brasileirandonochile (TikTok)
                </a>
              </li>

            </ul>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 sm:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} Brasileirando no Chile. Todos os direitos reservados.
          </p>
          <p className="text-white/20 text-xs">
            Turismo privativo para brasileiros no Chile 🇧🇷🇨🇱
          </p>
        </div>
      </div>

    </footer>
  )
}