import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import QuemSomos from '@/components/QuemSomos'
import Diferencias from '@/components/Diferencias'
import Passeios from '@/components/Passeios'
import PasseioPersonalizado from '@/components/PasseioPersonalizado'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <QuemSomos />
      <Diferencias />
      <Passeios /> 
      <PasseioPersonalizado />
      <Footer />
      <WhatsAppFloat />
    
    </main>
  )
}