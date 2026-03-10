'use client'

import { useEffect, useState } from 'react'
import { Star, Quote } from 'lucide-react'

type Review = {
  author_name: string
  profile_photo_url: string
  rating: number
  relative_time_description: string
  text: string
}

type ReviewsData = {
  name: string
  rating: number
  user_ratings_total: number
  reviews: Review[]
}

function Stars({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={size}
          className={i <= rating ? 'text-[#D4AF37] fill-[#D4AF37]' : 'text-white/20 fill-white/10'}
        />
      ))}
    </div>
  )
}

export default function Reviews() {
  const [data, setData] = useState<ReviewsData | null>(null)
  const [erro, setErro] = useState(false)

  useEffect(() => {
    fetch('/api/reviews')
      .then((r) => r.json())
      .then((d) => {
        if (d.error) setErro(true)
        else setData(d)
      })
      .catch(() => setErro(true))
  }, [])

  if (erro || !data) return null

  const reviewsComTexto = data.reviews.filter((r) => r.text?.trim())

  return (
    <section id="avaliacoes" className="py-24 bg-[#0f172a] relative overflow-hidden">

      {/* Fundo decorativo */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-12 relative z-10">

        {/* Título */}
        <div className="text-center mb-16">
          <span className="text-xs text-primary-400 tracking-[0.3em] uppercase font-semibold">
            O que dizem sobre nós
          </span>
          <h2
            className="text-5xl sm:text-6xl font-bold text-white mt-3 leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Avaliações no
            <span className="text-gradient-primary"> Google</span>
          </h2>

          {/* Nota geral */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex flex-col items-center">
              <span className="text-6xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                {data.rating.toFixed(1)}
              </span>
              <Stars rating={Math.round(data.rating)} size={20} />
              <span className="text-white/40 text-sm mt-1">
                {data.user_ratings_total} avaliações
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="section-divider" />
            <div className="w-2 h-2 rounded-full bg-primary-600 shadow-glow-sm" />
            <div className="section-divider" />
          </div>
        </div>

        {/* Cards de reviews */}
        {reviewsComTexto.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviewsComTexto.map((review, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-6 flex flex-col gap-4 hover:bg-white/10 hover:border-primary-600/30 transition-all duration-300"
              >
                {/* Aspas */}
                <Quote size={24} className="text-primary-600/40" />

                {/* Texto */}
                <p className="text-white/70 text-sm leading-relaxed flex-1 line-clamp-5">
                  {review.text}
                </p>

                {/* Rodapé */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <img
                    src={review.profile_photo_url}
                    alt={review.author_name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-white/10"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(review.author_name)}&background=8B1A1A&color=fff&size=40`
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-semibold truncate">{review.author_name}</p>
                    <p className="text-white/30 text-xs">{review.relative_time_description}</p>
                  </div>
                  <Stars rating={review.rating} size={13} />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Link para o Google */}
        <div className="text-center mt-10">
          <a
            href="https://g.page/r/CW_UO6W0hPIaEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors"
          >
            <Star size={14} className="text-[#D4AF37]" />
            Deixe sua avaliação no Google
          </a>
        </div>

      </div>
    </section>
  )
}
