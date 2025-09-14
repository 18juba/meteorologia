'use client';
import Progress from './progress';

export default function LoadingPage() {
  const tempTranslations = {
    title: "Selecionando as melhores informações climáticas.",
  };
  return (
    <div className="min-h-[90dvh] flex items-center justify-center ">
      <div className="text-center">
        <div>
         <span className="icon-cloud-loading text-[8rem] sm:text-[10rem]  text-blue-500"></span>
        </div>
            <Progress/>
        <h1 className="text-xl flex font-light text-[#ffffff7c] relative top-[200px]">
          {tempTranslations.title}
        </h1>
      </div>
    </div>
  );
}
