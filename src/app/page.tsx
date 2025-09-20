"use client";
import { useState } from "react";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Thermometer, Droplets, Wind, Sun } from "lucide-react";
import TVNoise from "@/components/ui/tv-noise";

import { sysStore } from '@/stores/sys';
import { useEffect } from 'react';
import { getLabel } from '../../langhandler';
import { anonimousLogin } from "../../api/routes/users";

const cityData = {
  fortaleza: {
    name: getLabel('city-fortaleza'),
    temp: "31",
    condition: getLabel('city-fortaleza-condition'),
    insight: getLabel('city-fortaleza-insight'),
  },
  "rio-janeiro": {
    name: getLabel('city-rio-name'),
    temp: "28",
    condition: getLabel('city-rio-condition'),
    insight: getLabel('city-rio-insight'),
  },
  "belo-horizonte": {
    name: getLabel('city-bh-name'),
    temp: "22",
    condition: getLabel('city-bh-condition'),
    insight: getLabel('city-bh-insight'),
  },
  salvador: {
    name: getLabel('city-salvador-name'),
    temp: "30",
    condition: getLabel('city-salvador-condition'),
    insight: getLabel('city-salvador-insight'),
  },
};

export default function Home() {
  const { language } = sysStore();
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    anonimousLogin();
  }, []);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;


  const handleCityChange = (value: string) => {
    setIsLoading(true);
    setSelectedCity("");
    setTimeout(() => {
      setSelectedCity(value);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                {getLabel('home-hero-title', language)}{" "}
                <span className="text-cyan-400">{getLabel('home-hero-highlight', language)}</span> {getLabel('home-hero-after-highlight', language)}
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                {getLabel('home-hero-description', language)}
              </p>
            </div>

            <Card className="w-full max-w-md bg-gradient-to-tr from-cyan-900 to-slate-900 text-white">
              <CardHeader>
                <CardTitle className="text-xl">{getLabel('home-signup-title', language)}</CardTitle>
                <CardDescription className="text-slate-400">
                  {getLabel('home-signup-description', language)}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{getLabel('home-signup-name', language)}</Label>
                  <Input id="name" placeholder={getLabel('home-signup-name-placeholder', language)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{getLabel('home-signup-email', language)}</Label>
                  <Input id="email" type="email" placeholder={getLabel('home-signup-email-placeholder', language)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">{getLabel('home-signup-address', language)}</Label>
                  <Input id="address" placeholder={getLabel('home-signup-address-placeholder', language)} />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer">
                  <MapPin className="w-4 h-4 mr-2" />
                  {getLabel('home-signup-button', language)}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Features Grid */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">{getLabel('home-features-title', language)}</h2>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 bg-cyan-950/50">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Thermometer className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-sm text-white">
                    {getLabel('home-feature-temperature', language)}
                  </h3>
                </div>
                <p className="text-xs text-slate-300">
                  {getLabel('home-feature-temperature-desc', language)}
                </p>
              </Card>

              <Card className="p-4 bg-cyan-950/50">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Droplets className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-sm text-white">{getLabel('home-feature-humidity', language)}</h3>
                </div>
                <p className="text-xs text-slate-300">
                  {getLabel('home-feature-humidity-desc', language)}
                </p>
              </Card>

              <Card className="p-4 bg-cyan-950/50">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Wind className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-sm text-white">{getLabel('home-feature-wind', language)}</h3>
                </div>
                <p className="text-xs text-slate-300">
                  {getLabel('home-feature-wind-desc', language)}
                </p>
              </Card>

              <Card className="p-4 bg-cyan-950/50">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Sun className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-sm text-white">{getLabel('home-feature-uv', language)}</h3>
                </div>
                <p className="text-xs text-slate-300">
                  {getLabel('home-feature-uv-desc', language)}
                </p>
              </Card>
            </div>

            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{getLabel('home-insight-title', language)}</h3>
              <Select onValueChange={handleCityChange}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder={getLabel('home-select-city', language)} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fortaleza">{getLabel('city-fortaleza', language)}</SelectItem>
                  <SelectItem value="rio-janeiro">{getLabel('city-rio-name', language)}</SelectItem>
                  <SelectItem value="belo-horizonte">{getLabel('city-bh-name', language)}</SelectItem>
                  <SelectItem value="salvador">{getLabel('city-salvador-name', language)}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Card className="relative p-6 bg-white/5 border-none text-white">
              <div className="space-y-4">
                {isLoading ? (
                  <div className="h-32 rounded-lg flex items-center justify-center">
                    <TVNoise opacity={0.3} intensity={0.2} speed={40} />
                  </div>
                ) : selectedCity ? (
                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="">
                          {cityData[selectedCity as keyof typeof cityData].name}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-cyan-400">
                          {cityData[selectedCity as keyof typeof cityData].temp}{" "}
                          °C
                        </div>
                        <div className="text-xs text-slate-400">
                          {
                            cityData[selectedCity as keyof typeof cityData]
                              .condition
                          }
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-slate-200">
                      {cityData[selectedCity as keyof typeof cityData].insight}
                    </p>
                  </div>
                ) : (
                  <div className="h-32 rounded-lg flex items-center justify-center">
                    <TVNoise opacity={1} intensity={0.2} speed={20} />
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
