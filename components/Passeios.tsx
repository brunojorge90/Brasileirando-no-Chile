import { MapPin, Users, ArrowRight } from 'lucide-react'

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

const WA_BASE = 'https://wa.me/5511985327937?text=Ola!%20Tenho%20interesse%20no%20passeio%3A%20'

export default function Passeios() {
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
          Cada detalhe planejado para que a experiência seja extraordinária.
          Entre em contato para saber{' '}
          <span className="text-[#8B1A1A] font-semibold">
            valores e disponibilidade.
          </span>
        </p>

        {/* Grid de cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {passeios.map((p, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl overflow-hidden border border-[#1B2A4A]/10 hover:border-[#8B1A1A]/30 hover:shadow-xl transition-all duration-300"
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

                {/* Botão */}
                <a
                  href={`${WA_BASE}${encodeURIComponent(p.nome)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn flex items-center justify-between w-full px-5 py-3 bg-[#8B1A1A] text-white text-sm font-semibold rounded-xl hover:bg-[#A52020] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(139,26,26,0.4)]"
                >
                  Consultar disponibilidade
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}