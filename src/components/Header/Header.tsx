import { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'

export default function Header(){
  
  const [isOpen, setIsOpen] = useState(false)
  
  const handleMenuOpen = () => {
    setIsOpen(true)
  }
  const handleMenuClose = () => {
    setIsOpen(false)
  }
  
  return (
      <>
        <header className="top-0 fixed z-40 p-2 w-full bg-white flex items-center justify-between">
          <img className="h-14 w-30" src="/logo.png" alt="Logo do site" />
          <button onClick={handleMenuOpen} className="p-1 text-2xl bg-lime-500 text-white rounded transition-all duration-300 hover:bg-lime-600 hover:transition-all hover:duration-300">
            <HiMenuAlt3 />
          </button>
        </header>
        {isOpen && (
        <div className="w-40 h-40 top-0 right-0 fixed z-50 bg-lime-500">
          <h1>Olá mundo</h1>
          <button onClick={handleMenuClose}>Fechar Menu</button>
        </div>
      )}
      </>
    )
}