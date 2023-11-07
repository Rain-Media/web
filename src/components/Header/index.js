"use client"

import React from 'react';
import Image from "next/image";
import logo from "../../assets/images/oooo.png";
import Navigation from "./Navigation";
import Swiper from "./Swiper";

function Header() {
  
  return (
    <div className="relative">
      <header className="flex justify-between items-center w-full p-6 bg-transparent absolute z-20">
        <Image src={logo} alt="logo" width={100} height='auto'/>
        <div className={`flex gap-x-6 pr-10`}>
          <Navigation/>
          <div className="text-white font-bold">TR</div>
        </div>
      </header>
      <Swiper/>
    </div>
  );
}

export default Header
