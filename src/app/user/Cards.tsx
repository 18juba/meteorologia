"use client";
import Image from "next/image";

const ICONS = {
  humidity: "/icons/icon_humidity.svg",
  temperature: "/icons/icon_temperature.svg",
};

import { TemperaturesMessages } from "@/components/temperatures/temperaturesMessages";
import { Card } from "@/components/ui/card";
import { UserStore } from "@/stores/user";

//small cards defaulting 204px

export function TemperatureCard({ temperature }: { temperature: any }) {
  const { city, state } = UserStore();

  return (
    <Card
      style={{ minWidth: "fit-content", minHeight: "204px" }}
      className="bg-transparent backdrop-blur-md col-span-12 md:col-span-12 lg:col-span-6 p-5 rounded-lg shadow-md shadow-black/80 border-2 border-white"
    >
      <h5 className="text-white flex md:flex-row flex-col justify-between items-center ">
        <div className="flex items-center gap-4">
          <Image
            src={ICONS.temperature}
            alt="Temperature icon"
            width={45}
            height={45}
          />
          <p className="text-cyan-400 text-4xl font-bold">?°C</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="text-3xl font-bold">
            {city}, {state.abreviation}
          </span>
          <span className="bg-slate-200/15 rounded w-full items-center text-center text-sm text-slate-200">
            Nublado
          </span>
        </div>
      </h5>
      <p className="text-white mt-2">
        {temperature}
      </p>
    </Card>
  );
}

export function ActivityCard({
  atividades_recomendadas,
}: {
  atividades_recomendadas?: string;
}) {
  const cleaned =
    atividades_recomendadas
      ?.replace(/```html|```/g, "")
      ?.match(/<section[^>]*>([\s\S]*?)<\/section>/)?.[1] || "";

  return (
    <Card
      style={{ minWidth: "fit-content", minHeight: "204px" }}
      className="bg-transparent backdrop-blur-md p-5 rounded-lg shadow-md shadow-black/80 border-2 border-white"
    >
      <h5 className="text-white text-3xl font-extrabold flex items-center gap-3">
        <Image
          src={ICONS.humidity}
          alt="Humidity icon"
          width={40}
          height={40}
        />
        O que fazer ?
      </h5>

      <div
        className="text-white text-justify"
        style={{
          lineHeight: "1.2",
        }}
        dangerouslySetInnerHTML={{
          __html: cleaned
            .replace(
              "<h2",
              `<h2 style="font-size:1.5rem;font-weight:700;margin-bottom:0.75rem;"`
            )
            .replace(
              "<p",
              `<p style="margin-bottom:0.75rem;font-size:1rem;opacity:0.9;"`
            )
            .replace(
              "<ul",
              `<ul style="padding-left:1.5rem;list-style-type:disc;display:flex;flex-direction:column;gap:0.5rem;"`
            )
            .replace("<li", `<li style="font-size:1rem;line-height:1.6;"`),
        }}
      />
    </Card>
  );
}

// Bigger cards 393px

export function UmidityCard({ humidity }: { humidity: any }) {
  const { city, state } = UserStore();
  return (
    <Card
      style={{ minWidth: "fit-content", minHeight: "393px" }}
      className="bg-transparent backdrop-blur-md col-span-12 md:col-span-12 lg:col-span-6 p-6 rounded-lg shadow-md shadow-black/80 border-2 border-white"
    >
      <h5 className="text-white text-3xl font-bold flex md:flex-row flex-col justify-between items-center ">
        <div className="flex items-center gap-2">
          <Image
            src={ICONS.humidity}
            alt="Humidity icon"
            width={45}
            height={45}
          />
          Humidade e conforto
        </div>
      </h5>
      <div className="flex justify-between gap-4">
        <div className="max-w-8/12">
          <p className="text-white text-justify">
            {humidity}
          </p>
        </div>
        <div className="bg-sky-300/10 rounded-sm border-2 border-white p-4 pb-0 w-fit text-center my-8">
          <p className="text-white text-xl font-bold">Índice U(%)</p>
          <Card className="bg-slate-200/15 rounded border-none text-slate-200 text-sm w-fit py-0.5 px-2">
            Umidade do Ar
          </Card>
          <h1 className="text-cyan-400 text-4xl font-bold py-6">?%</h1>
        </div>
      </div>
    </Card>
  );
}

export function WindCard({ wind }: { wind: any }) {
  return (
    <Card
      style={{ minWidth: "fit-content", minHeight: "393px" }}
      className="bg-transparent backdrop-blur-md p-5 rounded-lg shadow-md shadow-black/80 border-2 border-white"
    >
      <h5 className="text-white text-3xl font-bold flex md:flex-row flex-col justify-between items-center ">
        <div className="flex items-center gap-2">
          <Image
            src={ICONS.humidity}
            alt="Humidity icon"
            width={45}
            height={45}
          />
          Ventos
        </div>
      </h5>
      <p className="text-white text-justify">
        {wind}
      </p>
      <div className="flex items-center gap-8 p-4">
        <div className="bg-sky-300/10 rounded-sm border-2 border-white p-2 pb-0 w-full text-center">
          <p className="text-white text-xl font-bold">V(km/h)</p>
          <h1 className="text-cyan-400 text-4xl font-bold my-2">? km/h</h1>
        </div>
        <div className="bg-sky-300/10 rounded-sm border-2 border-white p-2 pb-0 w-full text-center">
          <p className="text-white text-xl font-bold">Direção</p>
          <h1 className="text-cyan-400 text-4xl font-bold my-2">?</h1>
        </div>
      </div>
    </Card>
  );
}

export function CloudCard() {
  return (
    <Card
      style={{ minWidth: "fit-content" }}
      className="bg-transparent backdrop-blur-md p-5 rounded-lg shadow-md shadow-black/80 border-2 border-white"
    >
      <h5 className="text-white text-3xl font-bold flex md:flex-row flex-col justify-between items-center ">
        <div className="flex items-center gap-2">
          <Image
            src={ICONS.humidity}
            alt="Humidity icon"
            width={45}
            height={45}
          />
          Nuvens e Precipitação
        </div>
      </h5>
      <p className="text-white text-justify">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book
      </p>
    </Card>
  );
}

export function UVCard() {
  return (
    <Card
      style={{ minWidth: "fit-content" }}
      className="bg-transparent backdrop-blur-md p-5 rounded-lg shadow-md shadow-black/80 border-2 border-white"
    >
      <h5 className="text-white text-3xl font-bold flex md:flex-row flex-col justify-between items-center ">
        <div className="flex items-center gap-2">
          <Image
            src={ICONS.humidity}
            alt="Humidity icon"
            width={45}
            height={45}
          />
          General information
        </div>
      </h5>
    </Card>
  );
}
