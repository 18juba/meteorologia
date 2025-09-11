import "./home.scss";
import Header from "@/components/layout/Header";
import { TemperaturesMessages } from "@/components/temperatures/temperaturesMessages";
import { Card } from "@/components/ui/card";
import { TemperatureCard, UmidityCard } from "./Cards";

export default function Home({ temperature = 20 }: { temperature: number }) { 
    return (
        <>
        <Header /> 
        <div className="home-container flex flex-col md:flex-row py-6 gap-4">
            <div className="w-full md:w-2/5 px-6">
                <TemperatureCard temperature={temperature}  />
                <UmidityCard humidity={80}  />
            </div>
            <div className="w-full md:w-auto px-6 ">
                <h2 className="text-white text-2xl">Get started by creating an account</h2>
            </div>
        </div>
        </>
    )
}