"use client";

import ProgressLine from "../../components/ui/ProgressLine";
import Header from "../../components/layout/Header";

import { getLabel } from "../../../langhandler";
import { sysStore } from "@/stores/sys";

export default function LoadingPage() {
  const { language } = sysStore();
  return (
    <>
      <Header />
      <div className="min-h-[90dvh] flex items-center justify-center ">
        <div className="text-center">
          <div>
            <span className="icon-cloud-loading text-[8rem] sm:text-[10rem]  text-blue-500"></span>
          </div>
          <ProgressLine />
          <h1 className="text-xl flex font-light text-[#ffffff7c] relative top-[200px]">
            {getLabel("loading-info", language)}
          </h1>
        </div>
      </div>
    </>
  );
}
