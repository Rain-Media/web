"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import logo from "../../assets/images/oooo.png";
import Navigation from "./Navigation";
import Swiper from "./Swiper";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import backOur from "../../assets/images/backour.png";
import Background from "./background";

function Header() {
  const router = usePathname();
  const { open } = useSelector((state) => state.hamburger);

  console.log(router);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  return (
    <div className="absolute top-0 overflow-hidden z-10 w-full">
      <header className={`flex justify-between items-center w-full p-6`}>
        <Image src={logo} alt="logo" width={100} height="auto" />
        <div className={`flex gap-x-6 pr-10`}>
          <Navigation />
          <div className="text-white font-bold">TR</div>
        </div>
      </header>
    </div>
  );
}

export default Header;
