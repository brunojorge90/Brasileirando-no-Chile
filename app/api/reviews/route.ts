import { NextResponse } from 'next/server'

const PLACE_ID = 'ChIJtw-VyLAoxGkRb9Q7pbSE8ho'

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY

  if (!apiKey) {
    return NextResponse.json({ error: 'API key não configurada' }, { status: 500 })
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews,user_ratings_total&language=pt-BR&key=${apiKey}`

    const res = await fetch(url, { next: { revalidate: 3600 } }) // cache 1h
    const data = await res.json()

    if (data.status !== 'OK') {
      return NextResponse.json({ error: data.status }, { status: 400 })
    }

    const { name, rating, user_ratings_total, reviews } = data.result

    return NextResponse.json({ name, rating, user_ratings_total, reviews: reviews ?? [] })
  } catch (err) {
    return NextResponse.json({ error: 'Erro ao buscar reviews' }, { status: 500 })
  }
}
