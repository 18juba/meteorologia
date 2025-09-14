"use client";

import { sysStore } from '@/stores/sys';
import React, { useEffect, useState } from "react";
import { getLabel } from '../../../langhandler';

export default function Register() {
  const { language } = sysStore();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="p-4 mx-auto max-w-md flex flex-col gap-4 justify-center items-center border-2 border-cyan-400/50 rounded-md">
        <h1 className="text-white">{getLabel('register-title', language)}</h1>
        <form> 
          <label className="text-white">{getLabel('email-label', language)}</label><br></br>
          <input className="border-2 rounded-md border-cyan-400/50" type="text" id="name" name="name"></input><br></br>
          <label className="text-white">{getLabel('password-label', language)}</label><br></br>
          <input className="border-2 rounded-md border-cyan-400/50" type="text" id="password" name="password"></input><br></br>
          <input className="text-white" type="submit" value={getLabel('register-button', language)}></input>
        </form>
      </div>
    </div>
  );
}
