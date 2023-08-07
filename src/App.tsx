import Header from './components/Header/Header'
import CardArticle from './components/CardArticle/CardArticle'
import CardContacts from './components/CardContacts/CardContacts'
import Footer from './components/Footer/Footer'
import { BsWhatsapp } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { GrLocation } from 'react-icons/gr'

function App() {

  return (
    <>
      <main className="w-full h-screen bg-slate-200">
        <Header />
        <div className="relative w-full mt-12 text-white">
        <img className="" src="/banner-home.jpg" alt="Banner do site" />
        <span className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold">Bem Estar</h2>
          <p>Saúde e Qualidade de Vida</p>
         </span>
         </div>
         <section className="w-full mt-12 p-3 bg-slate-200">
         <h1 className="mb-12 text-3xl text-lime-500 font-bold text-center">SERVIÇOS</h1>
          <div className="w-full flex flex-wrap justify-center">
          <CardArticle />
          </div>
         </section>
         <section className="w-full p-3">
          <h1 className="text-3xl text-lime-500 font-bold text-center">AGENDE SUA CONSULTA</h1>
          <CardContacts 
            icon={BsWhatsapp}
            title="Mande uma mensagem"
            subtitle="(21)9999-9999"
          />
          <CardContacts 
            icon={HiOutlineMail}
            title="Nós envie um e-mail"
            subtitle="nutribem@gmail.com"
          />
          <CardContacts 
            icon={GrLocation}
            title="Onde estamos"
            subtitle="Av. Exemplo Número 501"
          />
         </section>
        <Footer />
      </main>
    </>
  )
}

export default App