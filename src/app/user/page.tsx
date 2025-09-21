"use client";
import Header from "@/components/layout/Header";
import { TemperaturesMessages } from "@/components/temperatures/temperaturesMessages";
import { Card } from "@/components/ui/card";
import { TemperatureCard, UmidityCard, CloudCard, ActivityCard, WindCard, UVCard } from "./Cards";
import { sysStore } from "@/stores/sys";
import { useEffect, useState } from "react";
import { getLabel } from "../../../langhandler";
import { getDashboard } from "../../../api/routes/users";

export default function Home({ temperature = 20 }: { temperature: number }) {
  const { language } = sysStore();
  const [mounted, setMounted] = useState(false);
  const [cardInfos, setCardInfos] = useState<any>(null);

  useEffect(() => {
    getDashboard().then(({data}) => {
      setCardInfos(data.cards);
    })
  }, [])


  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <>
      <section className="flex flex-col gap-8 px-20 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full flex flex-col gap-8">
            <TemperatureCard temperature={cardInfos?.outros_cards?.Temperatura?.analise} />
            <UmidityCard humidity={cardInfos?.outros_cards.Umidade.analise} />
            {/* <CloudCard /> removed for layout adjustments  */}
          </div>
          <div className="w-full flex flex-col gap-8">
            <ActivityCard atividades_recomendadas={cardInfos?.atividades_recomendadas} />
            <WindCard wind={cardInfos?.outros_cards?.Ventos?.analise}/>
          </div>
        </div>
        <UVCard />
      </section>
    </>
  );
}
