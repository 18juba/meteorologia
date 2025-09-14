"use client";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/layout/Header";
import { getLabel } from "../../../langhandler";
import { sysStore } from '@/stores/sys';
import { useEffect, useState } from 'react';




export default function NotFound() {
  const { language } = sysStore();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  // Optionally, you can show a loading spinner or fallback here
  if (!mounted) return null;

  return (
    <>
      <Header />
      <div className="flex items-center justify-center mt-15">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-[#fff]">
            <span className="text-[#00D3F3]">Ops...</span>{' '}
            {getLabel("error-found", language)}
          </h1>
          <Image
            src="/illustrations/404-error.svg"
            width={500}
            height={300}
            className="mx-auto mb-1 text-shadow-2xl"
            alt="illustration error page"
          />
          <h2 className="text-[#00D3F3] text-4xl font-semibold">
            {getLabel("error-404", language)}
          </h2>
          <div className="bg-[#d9d9d915] px-6 py-2 rounded-sm mt-3 mb-5">
            <p className="text-[#ffffff8a] font-light text-sm">
              {getLabel("error-404-text", language)}
            </p>
          </div>
          <Link href="/">
            <button className="py-2 px-5 bg-slate-900 rounded-md cursor-pointer font-medium text-[#ecebebec] transition-all duration-300  hover:bg-slate-700 hover:scale-105 shadow-2xl">
              {getLabel("go-back-home", language)}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
