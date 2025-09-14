
"use client";
import "./home.scss";
import Header from "@/components/layout/Header";

import { TemperatureCard, UmidityCard } from "./Cards";
import { sysStore } from '@/stores/sys';
import { useEffect, useState } from 'react';
import { getLabel } from '../../../langhandler';

export default function Home() {
    const { language } = sysStore();
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);
    if (!mounted) return null;

    const temperature = 28; // Example temperature value
    return (
        <>
        <Header /> 
        <div className="home-container flex flex-col md:flex-row py-6 gap-4">
            <div className="w-full md:w-2/5 px-6">
                <TemperatureCard temperature={temperature}  />
                <UmidityCard humidity={80}  />
            </div>
            <div className="w-full md:w-auto px-6 ">
                <h2 className="text-white text-2xl">{getLabel('home-get-started', language)}</h2>
            </div>
        </div>
        </>
    );
}