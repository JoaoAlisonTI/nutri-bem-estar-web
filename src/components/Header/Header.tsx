import { HiMenuAlt3 } from 'react-icons/hi'

export default function Header(){
  return (
      <>
        <header className="top-0 fixed z-50 p-2 w-full bg-white flex items-center justify-between">
          <img className="h-14 w-30" src="/logo.png" alt="Logo do site" />
          <button className="p-1 text-2xl bg-lime-500 text-white rounded">
            <HiMenuAlt3 />
          </button>
        </header>
      </>
    )
}