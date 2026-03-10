'use client'

import { MapPin, Users, ArrowRight, Check, ShoppingBag, X } from 'lucide-react'
import { useState } from 'react'

const passeios = [
  {
    nome: 'City Tour Santiago',
    desc: 'Cerro Santa Lúcia, Mercado Central, Plaza de las Armas, Palacio de la Moneda, Bairro Lastarria e mais.',
    min: '4 pessoas',
    img: 'https://images.pexels.com/photos/3876395/pexels-photo-3876395.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Mais Popular',
  },
  {
    nome: 'Cajón del Maipo',
    desc: 'Embalse el Yeso, Casa de Chocolate e Termas Valle de Colina. Natureza e paisagens únicas.',
    min: '4 pessoas',
    img: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: null,
  },
  {
    nome: 'Litoral Chileno',
    desc: 'Valparaíso, Viña del Mar, Dunas de Concon e Algarrobo. O melhor da costa chilena.',
    min: '4 pessoas',
    img: 'https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: null,
  },
  {
    nome: 'Portillo',
    desc: 'Laguna del Inca, Estrada Los Caracoles. Uma das paisagens mais deslumbrantes dos Andes.',
    min: '4 pessoas',
    img: 'https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: null,
  },
  {
    nome: 'Farellones',
    desc: 'Tubing, Teleférico e Trenó. Diversão na neve para toda a família.',
    min: '3 pessoas',
    img: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Aventura',
  },
  {
    nome: 'Zoo Safari',
    desc: 'Portal do Safari, Encontro Selvagem e Imersão Safari Chile. Experiência única com animais.',
    min: '4 pessoas',
    img: 'https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: null,
  },
  {
    nome: 'Valle Nevado',
    desc: 'Valle Nevado, Experiência no Valle e Refúgio Andino. O ski resort mais famoso do Chile.',
    min: '4 pessoas',
    img: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Neve',
  },
  {
    nome: 'Vinícola Alyan',
    desc: '3 degustações harmonizadas com tábua de queijos, presuntos e frutas secas. Vista da Cordilheira.',
    min: '4 pessoas',
    img: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Vinho',
  },
  {
    nome: 'Vinícola Undurraga',
    desc: 'Tour guiado pelos vinhedos, adega e áreas subterrâneas. Degustação de 3 vinhos selecionados.',
    min: '4 pessoas',
    img: 'https://images.pexels.com/photos/434311/pexels-photo-434311.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Vinho',
  },
  {
    nome: 'Vinícola Concha y Toro',
    desc: 'A mais renomada do Chile. Vinhedos, produção e a famosa história do Casillero del Diablo.',
    min: '4 pessoas',
    img: 'https://images.pexels.com/photos/1407847/pexels-photo-1407847.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Vinho',
  },
  {
    nome: 'Transfer Aeroporto',
    desc: 'Chegue e retorne com total tranquilidade. Segurança, pontualidade e conforto desde o primeiro momento.',
    min: 'por trecho',
    img: 'https://images.pexels.com/photos/1004409/pexels-photo-1004409.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: null,
  },
]

const WA_NUMBER = '5511985327937'

function buildWhatsAppUrl(selecionados: string[]) {
  const lista = selecionados.map((n) => `• ${n}`).join('%0A')
  const msg = `Ol%C3%A1!%20Tenho%20interesse%20nos%20seguintes%20passeios%3A%0A${lista}%0A%0AGostaria%20de%20saber%20valores%20e%20disponibilidade.`
  return `https://wa.me/${WA_NUMBER}?text=${msg}`
}

export default function Passeios() {
  const [selecionados, setSelecionados] = useState<string[]>([])

  function toggle(nome: string) {
    setSelecionados((prev) =>
      prev.includes(nome) ? prev.filter((n) => n !== nome) : [...prev, nome]
    )
  }

  function remover(nome: string) {
    setSelecionados((prev) => prev.filter((n) => n !== nome))
  }

  return (
    <section id="passeios" className="py-24 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">

        {/* Título */}
        <div className="mb-6">
          <span className="text-xs text-[#8B1A1A] tracking-[0.3em] uppercase">
            O que oferecemos
          </span>
          <h2
            className="text-5xl sm:text-6xl font-bold text-[#1B2A4A] mt-3 leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Nossos Passeios
          </h2>
          <div className="flex items-center gap-3 mt-4">
            <div className="w-12 h-0.5 bg-[#8B1A1A]" />
            <div className="w-2 h-2 rounded-full bg-[#8B1A1A]" />
          </div>
        </div>

        {/* Observação */}
        <p className="text-[#1B2A4A]/60 text-sm mb-12 max-w-xl">
          Selecione os passeios que te interessam e envie tudo de uma vez pelo WhatsApp para consultar valores e disponibilidade.
        </p>

        {/* Grid de cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {passeios.map((p) => {
            const selecionado = selecionados.includes(p.nome)
            return (
              <div
                key={p.nome}
                className={`group bg-white rounded-2xl overflow-hidden border transition-all duration-300 ${
                  selecionado
                    ? 'border-[#8B1A1A] shadow-[0_0_0_2px_rgba(139,26,26,0.15)] shadow-xl'
                    : 'border-[#1B2A4A]/10 hover:border-[#8B1A1A]/30 hover:shadow-xl'
                }`}
              >
                {/* Imagem */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url('${p.img}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/60 to-transparent" />

                  {/* Tag */}
                  {p.tag && (
                    <span className="absolute top-3 left-3 px-3 py-1 bg-[#8B1A1A] text-white text-xs font-semibold rounded-full tracking-wide">
                      {p.tag}
                    </span>
                  )}

                  {/* Checkmark quando selecionado */}
                  {selecionado && (
                    <div className="absolute top-3 right-3 w-8 h-8 bg-[#8B1A1A] rounded-full flex items-center justify-center shadow-lg">
                      <Check size={16} className="text-white" strokeWidth={3} />
                    </div>
                  )}
                </div>

                {/* Conteúdo */}
                <div className="p-6">
                  <h3
                    className="text-xl font-bold text-[#1B2A4A] mb-2"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {p.nome}
                  </h3>

                  <p className="text-[#1B2A4A]/60 text-sm leading-relaxed mb-4">
                    {p.desc}
                  </p>

                  <div className="flex items-center gap-1.5 text-xs text-[#1B2A4A]/40 mb-5">
                    <Users size={12} />
                    <span>Mínimo {p.min}</span>
                    <MapPin size={12} className="ml-2" />
                    <span>Chile</span>
                  </div>

                  {/* Botão selecionar */}
                  <button
                    onClick={() => toggle(p.nome)}
                    className={`flex items-center justify-between w-full px-5 py-3 text-sm font-semibold rounded-xl transition-all duration-300 ${
                      selecionado
                        ? 'bg-[#1B2A4A] text-white hover:bg-[#243655]'
                        : 'bg-[#8B1A1A] text-white hover:bg-[#A52020] hover:shadow-[0_4px_20px_rgba(139,26,26,0.4)]'
                    }`}
                  >
                    {selecionado ? (
                      <>
                        Selecionado
                        <Check size={16} strokeWidth={3} />
                      </>
                    ) : (
                      <>
                        Selecionar passeio
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Barra flutuante de seleção */}
      {selecionados.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-2xl">
          <div className="bg-[#1B2A4A] rounded-2xl shadow-2xl p-4 border border-white/10">

            {/* Lista de selecionados */}
            <div className="flex flex-wrap gap-2 mb-4">
              {selecionados.map((nome) => (
                <span
                  key={nome}
                  className="flex items-center gap-1.5 bg-white/10 text-white text-xs px-3 py-1.5 rounded-full"
                >
                  {nome}
                  <button
                    onClick={() => remover(nome)}
                    className="hover:text-red-300 transition-colors"
                    aria-label={`Remover ${nome}`}
                  >
                    <X size={12} />
                  </button>
                </span>
              ))}
            </div>

            {/* Rodapé da barra */}
            <div className="flex items-center justify-between gap-4">
              <span className="text-white/60 text-sm">
                <span className="text-white font-bold">{selecionados.length}</span>{' '}
                {selecionados.length === 1 ? 'passeio selecionado' : 'passeios selecionados'}
              </span>

              <a
                href={buildWhatsAppUrl(selecionados)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#8B1A1A] hover:bg-[#A52020] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 hover:shadow-[0_4px_20px_rgba(139,26,26,0.5)] shrink-0"
              >
                <ShoppingBag size={16} />
                Consultar via WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
