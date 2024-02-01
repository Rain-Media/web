"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import logo from "../../assets/images/rain-logo.png";
import Navigation from "./Navigation";
import Swiper from "./Swiper";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import backOur from "../../assets/images/backour.png";
import Background from "./background";
import Link from "next/link";

function Header() {
  const router = usePathname();
  const { open } = useSelector((state) => state.hamburger);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  return (
    <div className="bg-white px-5 md:px-8 sticky top-0 z-50 shadow-md">
      <header className={`flex justify-between items-center w-full py-2`}>
        <Link href="/">
          <Image src={logo} alt="logo" width={100} height="auto" />
        </Link>
        <div className={`flex items-center`}>
          <Navigation />
          <div className="pl-5 font-bold">TR</div>
        </div>
      </header>
    </div>
  );
}

export default Header;
