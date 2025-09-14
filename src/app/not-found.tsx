import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "../components/layout/Header";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "Page not found (error 404)",
};

// TODO: Aguardando implementação do sistema de locales
export default function NotFound() {
  const tempTranslations = {
    title: "encontramos um erro",
    errorMessage: "Erro 404",
    description:
      "Recomendamos que recarregue a página, se o erro persistir, volte novamente mais tarde.",
    backButton: "Voltar para Home",
  };

  return (
    <>
      <Header />
      <div className="flex items-center justify-center mt-15">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-[#fff]">
            <span className="text-[#00D3F3]">Ops...</span>
            {tempTranslations.title}
          </h1>
          <Image
            src="/illustrations/404-error.svg"
            width={500}
            height={300}
            className="mx-auto mb-1 text-shadow-2xl"
            alt="illustration error page"
          />
          <h2 className="text-[#00D3F3] text-4xl font-semibold">
            {tempTranslations.errorMessage}
          </h2>
          <div className="bg-[#d9d9d915] px-6 py-2 rounded-sm mt-3 mb-5">
            <p className="text-[#ffffff8a] font-light text-sm">
              {tempTranslations.description}
            </p>
          </div>
          <Link href="/">
            <button className="py-2 px-5 bg-slate-900 rounded-md cursor-pointer font-medium text-[#ecebebec] transition-all duration-300  hover:bg-slate-700 hover:scale-105 shadow-2xl">
              {tempTranslations.backButton}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
