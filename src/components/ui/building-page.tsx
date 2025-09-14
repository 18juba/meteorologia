import Image from "next/image";
import Link from "next/link";

export default function BuldingPage() {
  const tempTranslations = {
    title: "Página em construção",
    backButton: "Voltar para Home",
  };
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="text-center">
        <Image
          src="/illustrations/building.svg"
          width={550}
          height={300}
          className="mx-auto mb-1 text-shadow-2xl"
          alt="illustration error page"
        />
        <h1 className="text-4xl font-semibold text-[#fff] py-5">{tempTranslations.title}</h1>
        <Link href="/">
          <button className="py-2 px-5 text-xl cursor-pointer font-medium text-[#00D3F3] ">
            {tempTranslations.backButton}
          </button>
        </Link>
      </div>
    </div>
  );
}
