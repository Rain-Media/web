"use client"

import React, {useEffect} from 'react';
import Image from "next/image";
import logo from "../../assets/images/oooo.png";
import Navigation from "./Navigation";
import Swiper from "./Swiper";
import {usePathname} from "next/navigation";
import {useSelector} from "react-redux";
import backOur from "../../assets/images/backour.png";
import Background from "./background";

function Header() {
  const router = usePathname();
  const { open } = useSelector(state => state.hamburger);
  
  console.log(router)
  
  useEffect(() => {
    if(open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  },[open]);
  
  return (
    <div className="relative h-[400px] md:h-screen md:max-h-[600px] overflow-hidden">
      <header className={`flex justify-between items-center w-full p-6 ${ router === '/' || router === '/about-us' ? 'absolute z-20 bg-transparent' : 'bg-black' }`}>
        <Image src={logo} alt="logo" width={100} height='auto'/>
        <div className={`flex gap-x-6 pr-10`}>
          <Navigation/>
          <div className="text-white font-bold">TR</div>
        </div>
      </header>
      { router === '/' && <Swiper/> }
      { router === '/about-us' && <Background src={backOur}/> }
    </div>
  );
}

export default Header;
