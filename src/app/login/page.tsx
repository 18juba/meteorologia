"use client";

import { sysStore } from '@/stores/sys';
import React, { useEffect, useState } from "react";
import { getLabel } from '../../../langhandler';

export default function Login() {
  const { language } = sysStore();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="p-4 mx-auto max-w-md flex justify-center items-center border-2 border-cyan-400/50 rounded-md">
        <h1 className="text-white">{getLabel('login-title', language)}</h1>
        <form></form>
      </div>
    </div>
  );
}
