"use client";

import React, { useState, useEffect } from "react";
import { sysStore } from "@/stores/sys";
import { getLabel } from "../../../langhandler";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import "./style.css";

export default function Login() {
  const { language } = sysStore();
  const [mounted, setMounted] = useState(false);
  const [activeClass, setActiveClass] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const handleLoginClick = () => {
    setActiveClass(true);
  };

  const handleRegisterClick = () => {
    setActiveClass(false);
  };

  return (
    <div
      className={`w-full h-screen relative main-container overflow-hidden ${
        activeClass ? "active" : ""
      }`}
    >
      <Header />
      <div className="body">
        {/*LOGIN*/}
        <div className="form-container login">
          <form>
            <h1 className="text-[40px] font-bold mt-[-10px] mb-5 text-center">
              {getLabel("login-title", language)}
            </h1>

            <div className=" flex justify-center">
              <div className="mb-6 text-left ">
                <label
                  className="block mb-1 text-[16px] font-light"
                  htmlFor="Email"
                >
                  Email:
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="Email"
                    placeholder="youremail@example.com"
                    className="w-[250px] md:w-[300px] lg:w-[500px] border border-gray-400 rounded-sm bg-transparent text-white px-3 py-2 pr-10 focus:outline-none"
                    required
                  />
                </div>
              </div>
            </div>

            <div className=" flex justify-center">
              <div className="mb-6 text-left ">
                <label className="block mb-1 text-[16px] font-light">
                  {" "}
                  {getLabel("password-label", language)}
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="Password"
                    className="w-[250px] md:w-[300px] lg:w-[500px] border border-gray-400 rounded-sm bg-transparent text-white px-3 py-2 pr-10 focus:outline-none"
                    required
                  />
                </div>
              </div>
            </div>

            <Link href="/change-password">
              <p className="text-[#00D3F3] text-[15px] font-light cursor-pointer">
                {getLabel("login-forgot-password", language)}
              </p>
            </Link>

            <button className="bg-[#00D3F3] font-bold text-[16px] mt-2 mb-5 px-[100px] py-2 rounded-lg cursor-pointer">
              {getLabel("login-button", language)}
            </button>
          </form>
        </div>

        {/*REGISTER*/}
        <div className="form-container register">
          <form>
            <h1 className="text-[40px] font-bold mt-[-10px] mb-5 text-center">
              {getLabel("register-title", language)}
            </h1>

            <div className="flex justify-center">
              <div className="mb-2 text-left">
                <label
                  className=" block mb-1 text-[16px] font-light"
                  htmlFor="Name"
                >
                  {getLabel("register-full-name", language)}:
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="Name"
                    className="w-[250px] md:w-[300px] lg:w-[500px] border border-gray-400 rounded-sm bg-transparent text-white px-3 py-2 pr-10 focus:outline-none"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="mb-2 text-left">
                <label
                  className="block mb-1 text-[16px] font-light"
                  htmlFor="Email"
                >
                  Email:
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="Email"
                    placeholder="youremail@example.com"
                    className="w-[250px] md:w-[300px] lg:w-[500px] border border-gray-400 rounded-sm bg-transparent text-white px-3 py-2 pr-10 focus:outline-none"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="mb-4 text-left">
                <label
                  className="block mb-1 text-[16px] font-light"
                  htmlFor="Password"
                >
                  {getLabel("password-label", language)}:
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="Password"
                    className="w-[250px] md:w-[300px] lg:w-[500px] border border-gray-400 rounded-sm bg-transparent text-white px-3 py-2 pr-10 focus:outline-none"
                    required
                  />
                </div>
              </div>
            </div>

            <button className="bg-[#00D3F3] font-bold text-[16px] mt-2 mb-5 px-[50px] md:px-[100px] lg:px-[150px] py-2 rounded-md cursor-pointer">
              {getLabel("register-button", language)}
            </button>
          </form>
        </div>

        <div className={`toggle-box ${activeClass ? "active" : ""}`}>
          {/*HELLO AGAIN*/}
          <div
            className="hello-again-container toggle-panel toggle-left 
          flex flex-col justify-center align-middle"
          >
            <div>
              <h2 className="text-[25px] md:text-[35px] w-[310px] font-bold md:mt-[-10px] mb-5 text-center mt-5">
                {getLabel("hello-again-title", language)}
              </h2>
            </div>

            <div>
              <p className="text-[15px] font-extralight space-x-4 ">
                {getLabel("hello-again-account", language)}
              </p>
              <button
                className="w-[250px] md:w-[350px] border border-gray-200 rounded-sm bg-transparent text-white py-1 mt-0.2 font-bold cursor-pointer"
                onClick={handleLoginClick}
              >
                {getLabel("hello-again-button", language)}
              </button>
            </div>

            <div className="mt-15 ml-[120px]">
              <Image
                src="/illustrations/panel.svg"
                width={450}
                height={300}
                className=""
                alt="illustration panel"
              />
            </div>
          </div>

          {/*WELCOME*/}
          <div
            className="welcome-container toggle-panel toggle-right  
          flex flex-col justify-center align-middle"
          >
            <div>
              <h2 className="text-[25px] md:text-[35px] lg:text-[40px] font-bold mt-[-10px] mb-0 text-center">
                {getLabel("welcome-container-title", language)}
              </h2>
              <p className="w-[280px] md:w-[380px] text-[13px] md:text-[15px] text-center font-medium">
                {getLabel("welcome-container-message", language)}
              </p>
            </div>

            <div className="body-welcome flex gap-15">
              <div className="mt-15">
                <Image
                  src="/illustrations/notifications.svg"
                  width={200}
                  height={300}
                  className=""
                  alt="illustration panel"
                />
              </div>
              <div className="flex flex-col justify-center align-middle">
                <p className="font-light mt-1">
                  {getLabel("welcome-container-account", language)}
                </p>
                <button
                  className="w-[250px] border border-gray-200 rounded-sm bg-transparent text-white py-1 mt-0.2 font-bold cursor-pointer
                "
                  onClick={handleRegisterClick}
                >
                  {getLabel("welcome-container-button", language)}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
