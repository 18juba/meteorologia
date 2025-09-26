"use client";

import Header from "@/components/layout/Header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getLabel } from "../../../langhandler";
import { sysStore } from "@/stores/sys";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function changePassword() {
  const { language } = sysStore();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  //Optionally, you can show a loading spinner or fallback here
  if (!mounted) return null;

  return (
    <>
      <Header />
      <div className="w-full min-h-[90dvh] flex items-center justify-center overflow-hidden ">
        <Card className="w-full max-w-md bg-gradient-to-tr from-cyan-900 to-slate-900 text-white text-center">
          <CardHeader>
            <CardTitle className="text-2xl">
              {getLabel("change-password-title", language)}
            </CardTitle>
            <CardDescription className="text-slate-400">
              {getLabel("change-password-description", language)}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">{getLabel("email-label", language)}</Label>
              <Input
                id="email"
                placeholder={getLabel(
                  "home-signup-email-placeholder",
                  language
                )}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">
                {getLabel("change-password-new-password", language)}
              </Label>
              <Input id="password" type="password" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">
                {getLabel("change-password-confirm-password", language)}
              </Label>
              <Input id="password" />
            </div>

            <Button className="w-full bg-[#00D3F3] hover:bg-[#04b9d5] text-primary-foreground cursor-pointer font-bold">
              {getLabel("change-password-button", language)}
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
