import { BsFacebook, BsWhatsapp, BsTwitter, BsLinkedin, BsArrowUp } from 'react-icons/bs'

export default function Footer(){
  
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  return (
      <footer className="w-full flex flex-col border-t-2 border-lime-700 p-8 mt-16">
        <h1 className="text-3xl font-bold text-center text-lime-500">Nutri Bem Estar</h1>
        <p className="text-center mt-4 mb-4">A Nutri Bem Estar é uma empresa fictícia dedicada ao bem-estar e saúde do corpo por meio da nutrição e boa alimentação. Seu objetivo é fornecer orientação personalizada em nutrição, oferecendo produtos e serviços que ajudem as pessoas a alcançarem um estilo de vida saudável. Com uma equipe de profissionais especializados, a empresa busca promover hábitos alimentares equilibrados e incentivar a melhoria da qualidade de vida de seus clientes.</p>
        <div className="w-full flex flex-row items-center justify-center text-3xl text-lime-500">
          <span className="m-4 p-2 rounded-full transition-all duration-4000 hover:bg-lime-500 hover:text-white hover:transition-all hover:duration-4000">
            <BsFacebook />
          </span>
          <span className="m-4 p-2 rounded-full transition-all duration-4000 hover:bg-lime-500 hover:text-white hover:transition-all hover:duration-4000">
            <BsWhatsapp />
          </span>
          <span className="m-4 p-2 rounded-full transition-all duration-4000 hover:bg-lime-500 hover:text-white hover:transition-all hover:duration-4000">
            <BsTwitter />
          </span>
          <span className="m-4 p-2 rounded-full transition-all duration-4000 hover:bg-lime-500 hover:text-white hover:transition-all hover:duration-4000">
            <BsLinkedin />
          </span>
        </div>
        <div className="w-full flex items-center justify-between mt-4">
        <div className="w-auto">
          <p>2023© All Rights Reserved</p>
          <p>Developed by <a className="decoration-0 font-bold" href="https://github.com/JoaoAlisonTI" target="_blank" >JoaoAlisonTI
          </a>
          </p>
        </div>
        <button onClick={handleBackToTop} className="p-1 text-2xl bg-lime-500 text-white rounded transition-all duration-300 hover:bg-lime-600 hover:transition-all hover:duration-300">
          <BsArrowUp />
        </button>
        </div>
      </footer>
    )
}