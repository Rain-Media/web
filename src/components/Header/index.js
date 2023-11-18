"use client"

import React from 'react';
import Image from "next/image";
import logo from "../../assets/images/oooo.png";
import Navigation from "./Navigation";
import Swiper from "./Swiper";
import {useParams, usePathname, useRouter} from "next/navigation";

function Header() {
  const router = usePathname();
  const [ openBurger, setOpenBurger ] = React.useState(false );
  console.log(router,'bebek gel')
  
  return (
    <div className="relative">
      <header className={`flex justify-between items-center w-full p-6 ${ router === '/' ? 'absolute z-20 bg-transparent' : 'bg-black' }`}>
        <Image src={logo} alt="logo" width={100} height='auto'/>
        <div className={`flex gap-x-6 pr-10`}>
          <Navigation openBurger={openBurger} setOpenBurger={setOpenBurger} />
          <div className="text-white font-bold">TR</div>
        </div>
      </header>
      { router === '/' && <Swiper/> }
    </div>
  );
}

export default Header;
