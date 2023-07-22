import Header from './components/Header/Header'
import CardArticle from './components/CardArticle/CardArticle'

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
         <section className="w-full mt-12 p-3 bg-slate-200 flex flex-wrap items-center justify-center">
         <h1 className="mb-12 text-3xl text-lime-500 font-bold text-center">ARTIGOS</h1>
          <CardArticle />
         </section>
      </main>
    </>
  )
}

export default App