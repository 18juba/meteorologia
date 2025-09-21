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

export function TemperatureCard({ temperature }: { temperature: number }) {
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
          <p className="text-cyan-400 text-4xl font-bold">{temperature}°C</p>
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
        <TemperaturesMessages temperature={temperature} />
      </p>
    </Card>
  );
}


export function ActivityCard({ atividades_recomendadas }: { atividades_recomendadas?: string }) {
  return (
    <Card
      style={{ minWidth: "fit-content", minHeight: "204px" }}
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
          Atividades Recomendadas
        </div>
      </h5>
       <p className="text-white text-justify" dangerouslySetInnerHTML={{__html: atividades_recomendadas || ""}}>
       </p>
    </Card>
  );
}

// Bigger cards 393px

export function UmidityCard({ humidity }: { humidity: number }) {
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
        </div>
        <div className="bg-sky-300/10 rounded-sm border-2 border-white p-4 pb-0 w-fit text-center my-8">
          <p className="text-white text-xl font-bold">Índice U(%)</p>
          <Card className="bg-slate-200/15 rounded border-none text-slate-200 text-sm w-fit py-0.5 px-2">
            Umidade do Ar
          </Card>
          <h1 className="text-cyan-400 text-4xl font-bold py-6">{humidity}%</h1>
        </div>
      </div>
    </Card>
  );
}



export function WindCard() {
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
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book
      </p>
      <div className="flex items-center gap-8 p-4">
        <div className="bg-sky-300/10 rounded-sm border-2 border-white p-2 pb-0 w-full text-center">
          <p className="text-white text-xl font-bold">V(km/h)</p>
          <h1 className="text-cyan-400 text-4xl font-bold my-2">20 km/h</h1>
        </div>
        <div className="bg-sky-300/10 rounded-sm border-2 border-white p-2 pb-0 w-full text-center">
          <p className="text-white text-xl font-bold">Direção</p>
          <h1 className="text-cyan-400 text-4xl font-bold my-2">Leste</h1>
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
