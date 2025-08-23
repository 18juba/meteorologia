"use client";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Thermometer, Droplets, Wind, Sun } from "lucide-react";

export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Insights climáticos{" "}
                <span className="text-cyan-400">personalizados</span> para sua
                localização
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                Crie sua conta, informe seu endereço e receba análises
                detalhadas sobre o clima da sua região. Dados precisos,
                previsões confiáveis e insights que importam.
              </p>
            </div>

            {/* Sign Up Form */}
            <Card className="w-full max-w-md bg-gradient-to-tr from-cyan-900 to-slate-900 text-white">
              <CardHeader>
                <CardTitle className="text-xl">Comece agora</CardTitle>
                <CardDescription className="text-slate-400">
                  Cadastre-se e receba seus primeiros insights climáticos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome completo</Label>
                  <Input id="name" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Endereço</Label>
                  <Input id="address" placeholder="Rua, cidade, estado" />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer">
                  <MapPin className="w-4 h-4 mr-2" />
                  Criar conta e começar
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Features Grid */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">
              O que você vai receber
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 bg-cyan-950/50">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Thermometer className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-sm text-white">Temperatura</h3>
                </div>
                <p className="text-xs text-slate-300">
                  Monitoramento em tempo real e previsões precisas
                </p>
              </Card>

              <Card className="p-4 bg-cyan-950/50">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Droplets className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm text-white">Umidade</h3>
                </div>
                <p className="text-xs text-slate-300">
                  Níveis de umidade e índice de conforto
                </p>
              </Card>

              <Card className="p-4 bg-cyan-950/50">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Wind className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm text-white">Vento</h3>
                </div>
                <p className="text-xs text-slate-300">
                  Velocidade, direção e rajadas
                </p>
              </Card>

              <Card className="p-4 bg-cyan-950/50">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Sun className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm text-white">UV Index</h3>
                </div>
                <p className="text-xs text-slate-300">
                  Proteção solar e recomendações
                </p>
              </Card>
            </div>

            {/* Sample Insight Card */}
            <Card className="p-6 bg-white/10 border-none text-white">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold">
                    Insight do dia
                  </h3>
                  <p className="text-sm text-slate-300">São Paulo, SP</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-cyan-400">24°C</div>
                  <div className="text-xs">
                    Parcialmente nublado
                  </div>
                </div>
              </div>
              <p className="text-sm">
                Temperatura ideal para atividades ao ar livre. Umidade baixa
                (45%) proporciona sensação de conforto. Sem previsão de chuva
                nas próximas 6 horas.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
