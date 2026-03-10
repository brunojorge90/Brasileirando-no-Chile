import type { Metadata } from 'next'
import './globals.css'

const SITE_URL = 'https://brasileirandonochile.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Brasileirando no Chile | Passeios Privativos em Português',
    template: '%s | Brasileirando no Chile',
  },
  description: 'Passeios privativos no Chile com atendimento em português. City Tour Santiago, Cajón del Maipo, Valle Nevado, vinícolas e muito mais. Motoristas experientes, roteiros personalizados e preço de passeio compartilhado.',
  keywords: [
    'passeios no Chile',
    'passeios privativos Chile',
    'turismo no Chile para brasileiros',
    'city tour Santiago',
    'Cajón del Maipo',
    'Valle Nevado',
    'Farellones neve',
    'vinícola Chile',
    'passeio em português Chile',
    'transfer aeroporto Santiago',
    'turismo privativo Santiago',
    'brasileiros no Chile',
    'guia brasileiro no Chile',
    'Portillo Chile',
    'Litoral Chileno',
  ],
  authors: [{ name: 'Brasileirando no Chile' }],
  creator: 'Brasileirando no Chile',
  publisher: 'Brasileirando no Chile',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: 'Brasileirando no Chile',
    title: 'Brasileirando no Chile | Passeios Privativos em Português',
    description: 'Passeios privativos no Chile com atendimento em português. City Tour Santiago, Cajón del Maipo, Valle Nevado e muito mais. Motoristas experientes e roteiros personalizados.',
    images: [
      {
        url: '/logo.PNG',
        width: 1200,
        height: 630,
        alt: 'Brasileirando no Chile - Passeios Privativos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brasileirando no Chile | Passeios Privativos em Português',
    description: 'Passeios privativos no Chile com atendimento em português. City Tour Santiago, Cajón del Maipo, Valle Nevado e muito mais.',
    images: ['/logo.PNG'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.PNG',
    apple: '/logo.PNG',
  },
  verification: {
    google: '', // adicionar código de verificação do Google Search Console depois
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristInformationCenter',
  name: 'Brasileirando no Chile',
  description: 'Passeios privativos no Chile com atendimento em português para turistas brasileiros.',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.PNG`,
  image: `${SITE_URL}/logo.PNG`,
  telephone: '+56927594661',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Santiago',
    addressRegion: 'Región Metropolitana',
    addressCountry: 'CL',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -33.4489,
    longitude: -70.6693,
  },
  areaServed: {
    '@type': 'Country',
    name: 'Chile',
  },
  availableLanguage: [
    { '@type': 'Language', name: 'Portuguese' },
    { '@type': 'Language', name: 'Spanish' },
  ],
  sameAs: [
    'https://instagram.com/brasileirandonochile0',
    'https://tiktok.com/@brasileirandonochile',
    'https://linktr.ee/brasileirandonochile',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Passeios no Chile',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'TouristTrip', name: 'City Tour Santiago' } },
      { '@type': 'Offer', itemOffered: { '@type': 'TouristTrip', name: 'Cajón del Maipo' } },
      { '@type': 'Offer', itemOffered: { '@type': 'TouristTrip', name: 'Valle Nevado' } },
      { '@type': 'Offer', itemOffered: { '@type': 'TouristTrip', name: 'Farellones' } },
      { '@type': 'Offer', itemOffered: { '@type': 'TouristTrip', name: 'Litoral Chileno' } },
      { '@type': 'Offer', itemOffered: { '@type': 'TouristTrip', name: 'Portillo' } },
      { '@type': 'Offer', itemOffered: { '@type': 'TouristTrip', name: 'Vinícola Concha y Toro' } },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
