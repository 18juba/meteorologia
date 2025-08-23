import React from 'react'

const Header = () => {
  return (
    <header className="px-6 py-3 bg-slate-900 border-b border-white/20 shadow text-white flex justify-between">
        <h1 className=" text-3xl">MP Soluções</h1>
        <nav className="flex items-center mx-auto">
            <ul className="flex gap-8 ">
                <li className="cursor-pointer transition-colors duration-150 hover:text-cyan-400">Rain</li>
                <li className="cursor-pointer transition-colors duration-150 hover:text-cyan-400">Rain</li>
                <li className="cursor-pointer transition-colors duration-150 hover:text-cyan-400">Rain</li>
                <li className="cursor-pointer transition-colors duration-150 hover:text-cyan-400">Neymar</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header