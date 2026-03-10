import { MessageCircle, Instagram, ExternalLink } from 'lucide-react'

const WHATSAPP = 'https://wa.me/5511985327937?text=Ola!%20Gostaria%20de%20saber%20mais%20sobre%20os%20passeios.'
const LINKTREE = 'https://linktr.ee/brasileirandonochile'

function TikTokIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.77a4.85 4.85 0 01-1.01-.08z"/>
    </svg>
  )
}

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
              <span className="text-primary-400 italic"> no Chile</span>
            </h3>
            <p className="text-white/50">começa com uma mensagem.</p>
          </div>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-3 px-8 py-4 bg-primary-700 hover:bg-primary-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_8px_32px_rgba(139,26,26,0.4)] whitespace-nowrap"
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
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.PNG"
                alt="Brasileirando no Chile"
                className="h-14 w-14 rounded-full object-cover ring-2 ring-white/10"
              />
              <div>
                <span
                  className="block text-xl font-bold text-white"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Brasileirando
                </span>
                <span className="text-xs text-white/40 tracking-widest uppercase">no Chile</span>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-5">
              O jeito brasileiro de viver o Chile.
              Passeios privativos, atendimento em português
              e experiências inesquecíveis.
            </p>

            {/* Ícones sociais */}
            <div className="flex items-center gap-3">
              <a href="https://instagram.com/brasileirandonochile0" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                aria-label="Instagram">
                <Instagram size={15} />
              </a>
              <a href="https://tiktok.com/@brasileirandonochile" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                aria-label="TikTok">
                <TikTokIcon size={15} />
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                aria-label="WhatsApp">
                <MessageCircle size={15} />
              </a>
              <a href={LINKTREE} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                aria-label="Linktree">
                <ExternalLink size={15} />
              </a>
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
                { label: 'Avaliações', href: '#avaliacoes' },
                { label: 'Contato', href: '#contato' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/50 text-sm hover:text-primary-400 transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 — Redes */}
          <div>
            <h4 className="text-xs text-white/40 tracking-[0.3em] uppercase mb-5">
              Redes Sociais
            </h4>
            <ul className="space-y-4">

              <li>
                <a href="https://instagram.com/brasileirandonochile0" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/50 text-sm hover:text-primary-400 transition-colors duration-200">
                  <Instagram size={15} className="flex-shrink-0" />
                  @brasileirandonochile0
                </a>
              </li>

              <li>
                <a href="https://instagram.com/eukucmanski" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/50 text-sm hover:text-primary-400 transition-colors duration-200">
                  <Instagram size={15} className="flex-shrink-0" />
                  @eukucmanski
                </a>
              </li>

              <li>
                <a href="https://tiktok.com/@brasileirandonochile" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/50 text-sm hover:text-primary-400 transition-colors duration-200">
                  <TikTokIcon size={15} />
                  @brasileirandonochile
                </a>
              </li>

              <li>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/50 text-sm hover:text-primary-400 transition-colors duration-200">
                  <MessageCircle size={15} className="flex-shrink-0" />
                  +56 9 2759 4661
                </a>
              </li>

              <li className="pt-2">
                <a href={LINKTREE} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white/60 hover:text-white text-sm rounded-xl transition-all duration-200">
                  <ExternalLink size={14} />
                  Ver todos os links
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
            Desenvolvido por Bruno Jorge
          </p>
        </div>
      </div>

    </footer>
  )
}
