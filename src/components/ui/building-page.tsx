
import Image from "next/image";
import Link from "next/link";

import { getLabel } from "../../../langhandler";
import { sysStore } from '@/stores/sys';

export default function BuldingPage() {
  const { language } = sysStore();
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
        <h1 className="text-4xl font-semibold text-[#fff] py-5">
           {getLabel("building-page-title", language)}
        </h1>
        <Link href="/">
          <button className="py-2 px-5 text-xl cursor-pointer font-medium text-[#00D3F3] ">
            {getLabel("go-back-home", language)}
          </button>
        </Link>
      </div>
    </div>
  );
}
