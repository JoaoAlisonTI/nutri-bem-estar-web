import Header from './components/Header/Header'

function App() {

  return (
    <>
      <div className="h-screen bg-slate-200">
        <Header />
        <div className="absolute w-full mt-16 text-white">
        <img className="absolute" src="/banner-home.jpg" alt="Banner do site" />
        <span className="relative flex flex-col m-10 text-center">
          <h2 className="text-3xl font-bold">Bem Estar</h2>
          <p>Saúde e Qualidade de Vida</p>
         </span>
         </div>
      </div>
    </>
  )
}

export default App