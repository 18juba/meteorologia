"use client";
import Header from "@/components/layout/Header";
import { TemperaturesMessages } from "@/components/temperatures/temperaturesMessages";
import { Card } from "@/components/ui/card";
import { TemperatureCard, UmidityCard, CloudCard, ActivityCard, WindCard, UVCard } from "./Cards";
import { sysStore } from "@/stores/sys";
import { useEffect, useState } from "react";
import { getLabel } from "../../../langhandler";

export default function Home({ temperature = 20 }: { temperature: number }) {
  const { language } = sysStore();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <>
      <section className="flex flex-col gap-8 px-20 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full flex flex-col gap-8">
            <TemperatureCard temperature={temperature} />
            <UmidityCard humidity={80} />
            <CloudCard />
          </div>
          <div className="w-full flex flex-col gap-8">
            <ActivityCard />
            <WindCard />
          </div>
        </div>
        <UVCard />
      </section>
    </>
  );
}
