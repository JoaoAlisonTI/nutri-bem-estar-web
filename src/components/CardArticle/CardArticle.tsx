interface ObjetoArticle {
  id: number;
  imgSrc: string;
  imgAlt: string;
  tilte: string;
  description: string;
  linkSrc: string;
}

const arrayArticles: ObjetoArticle[] = [
  { 
    id: 1,
    imgSrc: "/articles/nutricao-esportiva.jpg", 
    imgAlt: "Imagem Nutrição Esportiva",
    title: "Nutrição Esportiva",
    description: "Aplicação dos conhecimentos em nutrição, bioquímica e fisiologia na área do esporte, a fim de manter o equilíbrio das necessidades energéticas, através da indicação de nutrientes necessários a cada organismo, conforme a modalidade.",
    linkSrc: "https://www.ipgs.com.br/saiba-tudo-sobre-a-nutricao-esportiva-e-os-seus-segmentos/"
  },
  {
    id: 2,
    imgSrc: "/articles/intolerancias-alimentares.jpg", 
    imgAlt: "Imagem Intolerâncias Alimentares",
    title: "Intolerâncias Alimentares",
    description: "Existem diversos tipos de intolerância e alergia alimentar. A nutrição tem como objetivo analisar quais alimentos causam alergia ou intolerância ao paciente e orientá-lo, indicando uma dieta adequada e individualizada.",
    linkSrc: "https://www.tuasaude.com/sintomas-de-intolerancia-alimentar/"
  },
  {
    id: 3,
    imgSrc: "/articles/nutricao-ortomolecular.jpg", 
    imgAlt: "Imagem Nutrição Ortomolecular",
    title: "Nutrição Ortomolecular",
    description: "Tem como principal objetivo promover o equilíbrio molecular do organismo, promovendo saúde através da análise do excesso ou da falta de nutrientes.",
    linkSrc: "https://sophiederam.com/br/nutricao-ortomolecular/"
  },
];

export default function CardArticle(){
  return (
      <>
        {arrayArticles.map((article) => (
          <div key={article.id} className="w-auto max-w-[18rem] mr-3 ml-3 mb-10 rounded">
          <img className="w-full max-h-[14rem] rounded-tl rounded-tr" src={article.imgSrc} alt={article.imgAlt} />
          <div className="w-full p-3 bg-white rounded-bl rounded-br">
            <h2 className="text-2xl text-lime-600">{article.title}</h2>
            <p>
            {article.description}
            </p>
            <a className="decoration-0" href={article.linkSrc} target="_blank" >
            <button className="rounded mt-8 px-3 py-2 text-center font-bold bg-lime-500 text-white transition-all duration-300 hover:bg-lime-600 hover:transition-all hover:duration-300">
              Leia mais
            </button>
            </a>
          </div>
        </div>
        ))}
        
        
      </>
    )
}