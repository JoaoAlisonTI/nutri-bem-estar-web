export default function CardArticle(){
  return (
      <>
        <div className="w-auto mb-10 rounded">
          <img className="w-full rounded-tl rounded-tr" src="/articles/nutricao-esportiva.jpg" alt="Imagem do Artigo" />
          <div className="w-full p-3 bg-white rounded-bl rounded-br">
            <h2 className="text-2xl text-lime-600">Nutrição Esportiva</h2>
            <p>
            Nutrição EsportivaAplicação dos conhecimentos em nutrição, bioquímica e fisiologia na área do esporte, a fim de manter o equilíbrio das necessidades energéticas, através da indicação de nutrientes necessários a cada organismo, conforme a modalidade.
            </p>
            <a className="decoration-0" href="https://www.ipgs.com.br/saiba-tudo-sobre-a-nutricao-esportiva-e-os-seus-segmentos/" target="_blank" >
            <button className="rounded mt-8 px-3 py-2 text-center font-bold bg-lime-500 text-white transition-all duration-300 hover:bg-lime-600 hover:transition-all hover:duration-300">
              Leia mais
            </button>
            </a>
          </div>
        </div>
      </>
    )
}