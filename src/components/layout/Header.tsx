import React from 'react'
import Link from 'next/link';

const Header = () => {
  return (
    <header className="px-6 py-3 bg-slate-900 border-b border-white/20 shadow text-white flex justify-between">
        <h1 className=" text-3xl">MP Solutions</h1>
        <nav className="flex items-center mx-auto">
            <ul className="flex items-center gap-8 ">
                <Link href="" className="cursor-pointer transition-colors duration-150 hover:text-cyan-400">Destaques</Link>
                <Link href="/login" className="cursor-pointer transition-colors duration-150 hover:text-cyan-400">Login</Link>
                <Link href="/register" className="px-2 py-1 border border-white rounded-md cursor-pointer transition-colors duration-150 hover:text-cyan-400 hover:border-cyan-400">Register Now</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Header