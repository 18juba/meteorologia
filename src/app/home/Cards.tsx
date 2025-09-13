
"use client";
import Image from "next/image";

const ICONS = {
    humidity: "/icons/icon_humidity.svg",
    temperature: "/icons/icon_temperature.svg",
};


import { TemperaturesMessages } from "@/components/temperatures/temperaturesMessages";
import { Card } from "@/components/ui/card";
import { UserStore } from "@/stores/user";

export function TemperatureCard({ temperature }: { temperature: number }) {
    const { city, state } = UserStore();

    return (
        <Card style={{ backgroundColor: 'rgba(55, 36, 100, 0.43)', minWidth: 'fit-content' }} className="temperature-card col-span-12 md:col-span-12 lg:col-span-6 px-6 py-6 rounded-lg shadow-lg backdrop-blur-md border border-white/20">
            <h5 className="text-white text-3xl font-bold flex md:flex-row flex-col justify-between items-center ">
                <div className="flex items-center gap-2">
                    <Image src={ICONS.temperature} alt="Temperature icon" width={32} height={32} />
                    {temperature}°C
                </div>
                <div className="flex flex-col justify-center items-center">  
                    <span>{city}, {state.abreviation}</span>
                    <span className="text-1x1 w-full items-center climate-info">Nublado</span>
                </div>
            </h5>
            <p className="text-white text-lg mt-4"><TemperaturesMessages temperature={temperature} /></p>
        </Card>
    )
}


export function UmidityCard({ humidity }: { humidity: number }) {
    return (
        <Card style={{ backgroundColor: 'rgba(55, 36, 100, 0.43)', minWidth: 'fit-content' }} className="humidity-card col-span-12 md:col-span-12 lg:col-span-6 px-6 py-6 rounded-lg shadow-lg backdrop-blur-md border border-white/20">
            <h5 className="text-white text-3xl font-bold flex md:flex-row flex-col justify-between items-center ">
                <div className="flex items-center gap-2">
                    <Image src={ICONS.humidity} alt="Humidity icon" width={32} height={32} />
                    Humidade e conforto
                </div>
            </h5>
            <div>
                <p className="text-white text-lg mt-4">Umidade do ar</p>
                <Card style={{ backgroundColor: 'rgba(217, 217, 217, 0.1)' }} className="climate-info p-2 mt-2">
                    {humidity}%
                </Card>
            </div>
        </Card>
    )
}