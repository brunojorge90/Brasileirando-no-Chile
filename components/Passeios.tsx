'use client'

import { MapPin, Users, ArrowRight, Check, ShoppingBag, X, Clock, ChevronLeft, ChevronRight, Lightbulb, Star } from 'lucide-react'
import { useState, useEffect, useCallback } from 'react'

type Passeio = {
  nome: string
  desc: string
  min: string
  duracao: string
  imgs: string[]
  tag: string | null
  sobre: string
  destaques: string[]
  curiosidades: string[]
}

const passeios: Passeio[] = [
  {
    nome: 'City Tour Santiago',
    desc: 'Cerro Santa Lúcia, Mercado Central, Plaza de las Armas, Palacio de la Moneda, Bairro Lastarria e mais.',
    min: '4 pessoas',
    duracao: '8h',
    tag: 'Mais Popular',
    imgs: [
      'https://images.pexels.com/photos/3876395/pexels-photo-3876395.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1486785/pexels-photo-1486785.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    sobre: 'Santiago é uma das cidades mais vibrantes da América do Sul — moderna, histórica e cheia de contrastes. Neste tour completo você vai percorrer os pontos mais icônicos da capital chilena com total conforto e atendimento em português.',
    destaques: [
      'Plaza de las Armas — coração histórico da cidade fundada em 1541',
      'Palacio de la Moneda — sede do governo chileno, símbolo da democracia',
      'Cerro Santa Lucía — mirante com vista panorâmica do centro',
      'Mercado Central — o maior e mais famoso mercado de frutos do mar do Chile',
      'Bairro Lastarria — cafés, galerias de arte e arquitetura boêmia',
      'Barrio Italia — ruas coloridas, ateliês e a melhor cena cultural da cidade',
    ],
    curiosidades: [
      'Santiago é a 7ª maior cidade da América Latina, com mais de 7 milhões de habitantes na região metropolitana.',
      'O Cerro Santa Lucía foi o local exato onde Pedro de Valdivia fundou Santiago em 12 de fevereiro de 1541.',
      'Em dias de céu limpo, dá para ver a Cordilheira dos Andes diretamente do centro da cidade — uma vista que impressiona qualquer visitante.',
    ],
  },
  {
    nome: 'Cajón del Maipo',
    desc: 'Embalse el Yeso, Casa de Chocolate e Termas Valle de Colina. Natureza e paisagens únicas.',
    min: '4 pessoas',
    duracao: '10h',
    tag: null,
    imgs: [
      'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    sobre: 'Um dos roteiros mais deslumbrantes próximos a Santiago. O Cajón del Maipo é um cânion andino de tirar o fôlego, com lagoas de cor esmeralda, fontes termais naturais e paradas gastronômicas únicas.',
    destaques: [
      'Embalse El Yeso — represa de água verde-esmeralda a 2.475m de altitude',
      'Casa de Chocolate — chocolateria artesanal chilena famosa na região',
      'Termas Valle de Colina — piscinas termais naturais nas montanhas andinas',
      'Paisagens da Cordilheira dos Andes ao longo de todo o percurso',
      'Paradas em vilarejos típicos do interior chileno',
    ],
    curiosidades: [
      'A cor verde-esmeralda única do Embalse El Yeso vem da dissolução de minerais da rocha andina na água glacial.',
      'As Termas Valle de Colina ficam a 2.800m de altitude — você vai tomar banho termal com vista para os picos nevados dos Andes.',
      'O Cajón del Maipo abastece de água potável mais de 5 milhões de habitantes de Santiago.',
    ],
  },
  {
    nome: 'Litoral Chileno',
    desc: 'Valparaíso, Viña del Mar, Dunas de Concon e Algarrobo. O melhor da costa chilena.',
    min: '4 pessoas',
    duracao: '10h',
    tag: null,
    imgs: [
      'https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1133505/pexels-photo-1133505.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    sobre: 'Do Pacífico às dunas, passando por uma cidade Patrimônio da Humanidade — o litoral chileno surpreende em cada parada. Um dia completo explorando a costa com toda a liberdade de um passeio privativo.',
    destaques: [
      'Valparaíso — cidade Patrimônio Mundial da UNESCO, famosa pelos murais e elevadores históricos',
      'Viña del Mar — praias, jardins e a icônica estátua do relógio de flores',
      'Dunas de Concon — dunas de areia à beira do Oceano Pacífico',
      'Algarrobo — cidade balneária tranquila com belas paisagens costeiras',
      'Mirantes com vista panorâmica para o Oceano Pacífico',
    ],
    curiosidades: [
      'Valparaíso tem mais de 40 cerros (morros) conectados por ascensores (elevadores) históricos do século XIX, muitos ainda em funcionamento.',
      'Pablo Neruda, o poeta chileno ganhador do Nobel, viveu em Valparaíso e deixou sua casa como museu aberto ao público.',
      'As Dunas de Concon são um fenômeno geográfico raro — dunas de areia viva que avançam sobre a vegetação costeira.',
    ],
  },
  {
    nome: 'Portillo',
    desc: 'Laguna del Inca, Estrada Los Caracoles. Uma das paisagens mais deslumbrantes dos Andes.',
    min: '4 pessoas',
    duracao: '8h',
    tag: null,
    imgs: [
      'https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1539225/pexels-photo-1539225.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    sobre: 'Portillo é um dos destinos mais espetaculares do Chile. A rota sobe pelos Andes em direção à fronteira com a Argentina, passando por paisagens alpinas, lagoas de altitude e a famosa estrada de caracóis.',
    destaques: [
      'Laguna del Inca — lago de montanha com água de cor turquesa a 2.835m de altitude',
      'Estrada Los Caracoles — uma das estradas de montanha mais impressionantes do mundo',
      'Vista do Aconcágua — a montanha mais alta das Américas (6.961m)',
      'Túnel Cristo Redentor — fronteira entre Chile e Argentina',
      'Mirantes com panoramas dos Andes nevados',
    ],
    curiosidades: [
      'Portillo sediou o Campeonato Mundial de Ski Alpino em 1966, o primeiro realizado no hemisfério sul.',
      'Segundo a lenda inca, um príncipe afogou a princesa Inca na Laguna del Inca após ela morrer em um acidente. Por isso a lagoa nunca foi dragada por respeito à tradição.',
      'A Laguna del Inca muda de cor ao longo do dia — do turquesa ao verde-esmeralda dependendo da incidência de luz solar.',
    ],
  },
  {
    nome: 'Farellones',
    desc: 'Tubing, Teleférico e Trenó. Diversão na neve para toda a família.',
    min: '3 pessoas',
    duracao: '8h',
    tag: 'Aventura',
    imgs: [
      'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/848612/pexels-photo-848612.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/376697/pexels-photo-376697.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    sobre: 'A apenas 36km de Santiago, Farellones é o destino de neve mais próximo da capital. Perfeito para quem nunca viu neve ou quer aproveitar a montanha com a família sem precisar ir longe.',
    destaques: [
      'Tubing — descida em boia inflável por pistas de neve (ideal para crianças e adultos)',
      'Teleférico — vista aérea espetacular dos Andes e do vale abaixo',
      'Trenó — clássico passeio de trenó em meio à neve',
      'Pista de esqui para iniciantes disponível na temporada',
      'Restaurantes e cafés com vista para as montanhas',
    ],
    curiosidades: [
      'Farellones fica a 2.470m de altitude e recebe neve regularmente entre junho e setembro.',
      'A estrada para Farellones tem mais de 40 curvas em zigue-zague — um espetáculo por si só, mesmo antes de chegar à neve.',
      'Nos dias mais claros, dá para ver o Oceano Pacífico ao longe enquanto você está rodeado de neve — um contraste único no mundo.',
    ],
  },
  {
    nome: 'Zoo Safari',
    desc: 'Portal do Safari, Encontro Selvagem e Imersão Safari Chile. Experiência única com animais.',
    min: '4 pessoas',
    duracao: '6h',
    tag: null,
    imgs: [
      'https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/39571/pexels-photo-39571.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    sobre: 'Uma experiência diferente de tudo que você já viu — animais em semiliberdade, safáris guiados e encontros de perto com a fauna africana e sul-americana em pleno Chile.',
    destaques: [
      'Portal do Safari — entrada e ambientação com guias especializados',
      'Encontro Selvagem — interação controlada e segura com animais selvagens',
      'Imersão Safari Chile — percurso em veículo especial entre os animais em semiliberdade',
      'Mais de 200 espécies de animais de diferentes continentes',
      'Ideal para famílias com crianças de qualquer idade',
    ],
    curiosidades: [
      'O Zoológico Nacional do Chile é o mais antigo do país, fundado em 1888, e fica dentro do Parque Metropolitano no Cerro San Cristóbal.',
      'O Safari Chile foi inspirado nos grandes safáris africanos e é um dos únicos parques desse tipo na América do Sul.',
      'O Cerro San Cristóbal, onde fica o zoo, tem 880m de altura e uma estátua da Virgem Maria de 14 metros no topo.',
    ],
  },
  {
    nome: 'Valle Nevado',
    desc: 'Valle Nevado, Experiência no Valle e Refúgio Andino. O ski resort mais famoso do Chile.',
    min: '4 pessoas',
    duracao: '8h',
    tag: 'Neve',
    imgs: [
      'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1232459/pexels-photo-1232459.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    sobre: 'Valle Nevado é o maior e mais famoso resort de ski da América do Sul. Mesmo quem não esquia vai se encantar com as paisagens, a estrutura de alto nível e a sensação de estar a 3.670m de altitude nos Andes.',
    destaques: [
      'Pistas de ski e snowboard para todos os níveis — do iniciante ao avançado',
      'Refúgio Andino — restaurante panorâmico com vista 360° dos Andes',
      'Atividades na neve: trenó, tubing, snowshoeing e snow freeride',
      'Teleféricos e bondas com vistas espetaculares',
      'Estrutura completa: lojas, restaurantes, escola de ski',
    ],
    curiosidades: [
      'Valle Nevado tem 35 pistas totalizando 7.000 hectares de área esquiável — é o maior resort de ski da América do Sul.',
      'A altitude máxima do resort é de 3.670m, onde o ar é mais rarefeito. Por isso é comum sentir um leve cansaço nos primeiros minutos.',
      'Valle Nevado fica integrado com os resorts vizinhos La Parva e El Colorado, formando um dos maiores complexos de neve do hemisfério sul.',
    ],
  },
  {
    nome: 'Vinícola Alyan',
    desc: '3 degustações harmonizadas com tábua de queijos, presuntos e frutas secas. Vista da Cordilheira.',
    min: '4 pessoas',
    duracao: '5h',
    tag: 'Vinho',
    imgs: [
      'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2702805/pexels-photo-2702805.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/442116/pexels-photo-442116.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    sobre: 'Uma experiência enológica completa com vista privilegiada da Cordilheira dos Andes. A Alyan combina vinhos de qualidade com harmonização gastronômica em um cenário cinematográfico.',
    destaques: [
      '3 degustações de vinhos selecionados da própria produção',
      'Harmonização com tábua de queijos chilenos, presuntos e frutas secas',
      'Vista panorâmica da Cordilheira dos Andes dos vinhedos',
      'Tour guiado pelos processos de produção do vinho',
      'Ambiente íntimo e exclusivo — ideal para casais e grupos pequenos',
    ],
    curiosidades: [
      'O Chile é o 5º maior exportador de vinho do mundo e o maior da América Latina, com vinhos premiados internacionalmente.',
      'O microclima do Vale Central chileno é considerado ideal para a viticultura: noites frias, dias quentes e quase nenhuma chuva na colheita.',
      'A videira Carménère, quase extinta na Europa, foi redescoberta no Chile na década de 1990 e hoje é a cepa símbolo do país.',
    ],
  },
  {
    nome: 'Vinícola Undurraga',
    desc: 'Tour guiado pelos vinhedos, adega e áreas subterrâneas. Degustação de 3 vinhos selecionados.',
    min: '4 pessoas',
    duracao: '4h',
    tag: 'Vinho',
    imgs: [
      'https://images.pexels.com/photos/434311/pexels-photo-434311.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1407845/pexels-photo-1407845.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2702804/pexels-photo-2702804.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    sobre: 'Uma das vinícolas mais históricas do Chile, fundada em 1885. A Undurraga combina tradição, arquitetura colonial e uma adega subterrânea impressionante para uma visita inesquecível.',
    destaques: [
      'Tour completo pelos vinhedos históricos fundados em 1885',
      'Visita à adega subterrânea — clima e ambiente únicos',
      'Degustação de 3 vinhos selecionados com guia especializado',
      'Jardins históricos desenhados por paisagista francês',
      'Loja com opção de compra de vinhos exclusivos',
    ],
    curiosidades: [
      'A Undurraga foi fundada em 1885 por Don Francisco Undurraga Vicuña e foi a primeira vinícola chilena a exportar vinho para os Estados Unidos.',
      'Os jardins da Undurraga foram desenhados pelo mesmo paisagista francês que projetou os jardins do Palácio de Versailles.',
      'A adega subterrânea mantém temperatura constante de 14°C o ano todo — perfeita para o envelhecimento dos vinhos.',
    ],
  },
  {
    nome: 'Vinícola Concha y Toro',
    desc: 'A mais renomada do Chile. Vinhedos, produção e a famosa história do Casillero del Diablo.',
    min: '4 pessoas',
    duracao: '4h',
    tag: 'Vinho',
    imgs: [
      'https://images.pexels.com/photos/1407847/pexels-photo-1407847.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3171197/pexels-photo-3171197.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    sobre: 'A Concha y Toro é a maior e mais famosa vinícola da América Latina. Com uma história de mais de 140 anos, é o lar do lendário Casillero del Diablo — uma das histórias mais fascinantes do mundo do vinho.',
    destaques: [
      'Tour pelos históricos vinhedos de Pirque, fundados em 1883',
      'Visita à lendária adega Casillero del Diablo',
      'Degustação de vinhos premium com sommelier',
      'Museu e acervo histórico da família Concha y Toro',
      'Loja conceito com toda a linha de produtos exclusivos',
    ],
    curiosidades: [
      'A Concha y Toro é a maior produtora de vinhos da América Latina e uma das maiores do mundo, exportando para mais de 150 países.',
      'A lenda do Casillero del Diablo conta que Don Melchor Concha y Toro espalhava rumores de que o diabo habitava sua adega particular para afastar ladrões de seus melhores vinhos.',
      'O vinho Don Melchor da Concha y Toro é consistentemente eleito um dos 100 melhores vinhos do mundo pela revista Wine Spectator.',
    ],
  },
  {
    nome: 'Transfer Aeroporto',
    desc: 'Chegue e retorne com total tranquilidade. Segurança, pontualidade e conforto desde o primeiro momento.',
    min: 'por trecho',
    duracao: '~45min',
    tag: null,
    imgs: [
      'https://images.pexels.com/photos/1004409/pexels-photo-1004409.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3608542/pexels-photo-3608542.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    sobre: 'Sua chegada ao Chile começa aqui. Com o transfer privativo você é recebido na saída do desembarque e levado com total conforto até seu hotel — sem fila de táxi, sem aplicativo, sem estresse.',
    destaques: [
      'Motorista aguardando na saída do desembarque com placa com seu nome',
      'Veículo confortável e climatizado',
      'Atendimento completo em português desde o primeiro momento',
      'Bagagem assistida durante todo o trajeto',
      'Disponível 24h — qualquer horário de chegada ou partida',
    ],
    curiosidades: [
      'O Aeroporto Internacional Arturo Merino Benítez (SCL) fica a 18km do centro de Santiago e é o maior hub aéreo da América do Sul.',
      'Com trânsito, o trajeto aeroporto-centro pode levar entre 30 e 60 minutos — ter um motorista que conhece as rotas faz toda a diferença.',
      'Santiago tem um sistema de metrô que não conecta diretamente ao aeroporto — o transfer privativo é a opção mais confortável e direta disponível.',
    ],
  },
]

const WA_NUMBER = '5511985327937'

function buildWhatsAppUrl(nomes: string[]) {
  const lista = nomes.map((n) => `• ${n}`).join('%0A')
  const msg = `Ol%C3%A1!%20Tenho%20interesse%20nos%20seguintes%20passeios%3A%0A${lista}%0A%0AGostaria%20de%20saber%20valores%20e%20disponibilidade.`
  return `https://wa.me/${WA_NUMBER}?text=${msg}`
}

function buildSingleWhatsApp(nome: string) {
  const msg = `Ol%C3%A1!%20Tenho%20interesse%20no%20passeio%3A%20${encodeURIComponent(nome)}.%20Gostaria%20de%20saber%20valores%20e%20disponibilidade.`
  return `https://wa.me/${WA_NUMBER}?text=${msg}`
}

// ——— Modal ———
function PasseioModal({
  passeio,
  selecionado,
  onClose,
  onToggle,
}: {
  passeio: Passeio
  selecionado: boolean
  onClose: () => void
  onToggle: () => void
}) {
  const [fotoIdx, setFotoIdx] = useState(0)

  const prev = useCallback(() => setFotoIdx((i) => (i === 0 ? passeio.imgs.length - 1 : i - 1)), [passeio.imgs.length])
  const next = useCallback(() => setFotoIdx((i) => (i === passeio.imgs.length - 1 ? 0 : i + 1)), [passeio.imgs.length])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm animate-fade-in" />

      <div
        className="relative bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Galeria de fotos */}
        <div className="relative h-72 sm:h-96 overflow-hidden rounded-t-3xl">
          <img
            key={fotoIdx}
            src={passeio.imgs[fotoIdx]}
            alt={passeio.nome}
            className="w-full h-full object-cover animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

          {/* Setas */}
          {passeio.imgs.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          {/* Thumbnails */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {passeio.imgs.map((_, i) => (
              <button
                key={i}
                onClick={() => setFotoIdx(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === fotoIdx ? 'bg-white w-6' : 'bg-white/50'}`}
              />
            ))}
          </div>

          {/* Tag */}
          {passeio.tag && (
            <span className="absolute top-4 left-4 px-3 py-1.5 bg-[#8B1A1A] text-white text-xs font-semibold rounded-full">
              {passeio.tag}
            </span>
          )}

          {/* Fechar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
          >
            <X size={18} />
          </button>
        </div>

        {/* Conteúdo */}
        <div className="p-6 sm:p-8">

          {/* Cabeçalho */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <h2
                className="text-3xl font-bold text-[#1B2A4A] leading-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {passeio.nome}
              </h2>
              <div className="flex items-center gap-4 mt-2 text-sm text-[#1B2A4A]/50">
                <span className="flex items-center gap-1.5">
                  <Clock size={14} />
                  {passeio.duracao}
                </span>
                <span className="flex items-center gap-1.5">
                  <Users size={14} />
                  Mín. {passeio.min}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} />
                  Chile
                </span>
              </div>
            </div>

            {/* Avaliação */}
            <div className="flex items-center gap-1 bg-[#F5F0E8] px-3 py-1.5 rounded-full">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="text-[#D4AF37] fill-[#D4AF37]" />
              ))}
            </div>
          </div>

          {/* Sobre */}
          <p className="text-[#1B2A4A]/70 leading-relaxed mb-8">
            {passeio.sobre}
          </p>

          <div className="grid sm:grid-cols-2 gap-8 mb-8">
            {/* Destaques */}
            <div>
              <h3 className="text-sm font-bold text-[#1B2A4A] uppercase tracking-widest mb-4 flex items-center gap-2">
                <div className="w-4 h-0.5 bg-[#8B1A1A]" />
                O que você vai ver
              </h3>
              <ul className="space-y-2.5">
                {passeio.destaques.map((d, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#8B1A1A]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={11} className="text-[#8B1A1A]" strokeWidth={3} />
                    </div>
                    <span className="text-sm text-[#1B2A4A]/70 leading-relaxed">{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Curiosidades */}
            <div>
              <h3 className="text-sm font-bold text-[#1B2A4A] uppercase tracking-widest mb-4 flex items-center gap-2">
                <div className="w-4 h-0.5 bg-[#D4AF37]" />
                Sabia que...
              </h3>
              <div className="space-y-3">
                {passeio.curiosidades.map((c, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-[#F5F0E8] rounded-xl">
                    <Lightbulb size={15} className="text-[#D4AF37] shrink-0 mt-0.5" />
                    <p className="text-sm text-[#1B2A4A]/70 leading-relaxed">{c}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-[#1B2A4A]/10">
            <button
              onClick={onToggle}
              className={`flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
                selecionado
                  ? 'bg-[#1B2A4A] text-white'
                  : 'bg-[#F5F0E8] text-[#1B2A4A] hover:bg-[#1B2A4A]/10'
              }`}
            >
              <Check size={16} strokeWidth={selecionado ? 3 : 2} />
              {selecionado ? 'Selecionado' : 'Adicionar à seleção'}
            </button>

            <a
              href={buildSingleWhatsApp(passeio.nome)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#8B1A1A] hover:bg-[#A52020] text-white text-sm font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_4px_20px_rgba(139,26,26,0.4)]"
            >
              Consultar via WhatsApp
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

// ——— Componente principal ———
export default function Passeios() {
  const [selecionados, setSelecionados] = useState<string[]>([])
  const [modalAberto, setModalAberto] = useState<Passeio | null>(null)

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

        <p className="text-[#1B2A4A]/60 text-sm mb-12 max-w-xl">
          Clique em qualquer passeio para ver detalhes, fotos e curiosidades. Selecione os que te interessam e envie tudo pelo WhatsApp.
        </p>

        {/* Grid */}
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
                {/* Imagem — clicável para abrir modal */}
                <div
                  className="relative h-48 overflow-hidden cursor-pointer"
                  onClick={() => setModalAberto(p)}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url('${p.imgs[0]}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/60 to-transparent" />

                  {p.tag && (
                    <span className="absolute top-3 left-3 px-3 py-1 bg-[#8B1A1A] text-white text-xs font-semibold rounded-full tracking-wide">
                      {p.tag}
                    </span>
                  )}

                  {selecionado && (
                    <div className="absolute top-3 right-3 w-8 h-8 bg-[#8B1A1A] rounded-full flex items-center justify-center shadow-lg">
                      <Check size={16} className="text-white" strokeWidth={3} />
                    </div>
                  )}

                  {/* Ver detalhes overlay */}
                  <div className="absolute inset-0 bg-[#1B2A4A]/0 group-hover:bg-[#1B2A4A]/30 transition-all duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 text-[#1B2A4A] text-xs font-bold px-4 py-2 rounded-full">
                      Ver detalhes
                    </span>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-6">
                  <h3
                    className="text-xl font-bold text-[#1B2A4A] mb-2 cursor-pointer hover:text-[#8B1A1A] transition-colors"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                    onClick={() => setModalAberto(p)}
                  >
                    {p.nome}
                  </h3>

                  <p className="text-[#1B2A4A]/60 text-sm leading-relaxed mb-4">
                    {p.desc}
                  </p>

                  <div className="flex items-center gap-3 text-xs text-[#1B2A4A]/40 mb-5">
                    <span className="flex items-center gap-1">
                      <Users size={11} />
                      Mín. {p.min}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={11} />
                      {p.duracao}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={11} />
                      Chile
                    </span>
                  </div>

                  {/* Botões */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => setModalAberto(p)}
                      className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 border border-[#1B2A4A]/15 text-[#1B2A4A]/70 text-xs font-semibold rounded-xl hover:border-[#1B2A4A]/30 hover:bg-[#1B2A4A]/5 transition-all duration-200"
                    >
                      Ver detalhes
                    </button>
                    <button
                      onClick={() => toggle(p.nome)}
                      className={`flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold rounded-xl transition-all duration-300 ${
                        selecionado
                          ? 'bg-[#1B2A4A] text-white'
                          : 'bg-[#8B1A1A] text-white hover:bg-[#A52020]'
                      }`}
                    >
                      <Check size={13} strokeWidth={selecionado ? 3 : 2} />
                      {selecionado ? 'Selecionado' : 'Selecionar'}
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Barra flutuante */}
      {selecionados.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-2xl">
          <div className="bg-[#1B2A4A] rounded-2xl shadow-2xl p-4 border border-white/10">
            <div className="flex flex-wrap gap-2 mb-4">
              {selecionados.map((nome) => (
                <span key={nome} className="flex items-center gap-1.5 bg-white/10 text-white text-xs px-3 py-1.5 rounded-full">
                  {nome}
                  <button onClick={() => remover(nome)} className="hover:text-red-300 transition-colors" aria-label={`Remover ${nome}`}>
                    <X size={12} />
                  </button>
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-white/60 text-sm">
                <span className="text-white font-bold">{selecionados.length}</span>{' '}
                {selecionados.length === 1 ? 'passeio selecionado' : 'passeios selecionados'}
              </span>
              <a
                href={buildWhatsAppUrl(selecionados)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#8B1A1A] hover:bg-[#A52020] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 shrink-0"
              >
                <ShoppingBag size={16} />
                Consultar via WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Modal */}
      {modalAberto && (
        <PasseioModal
          passeio={modalAberto}
          selecionado={selecionados.includes(modalAberto.nome)}
          onClose={() => setModalAberto(null)}
          onToggle={() => toggle(modalAberto.nome)}
        />
      )}
    </section>
  )
}
