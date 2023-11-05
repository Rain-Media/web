"use client"

import React from 'react';
import Image from "next/image";
import logo from "../../assets/images/oooo.png";
import Navigation from "./Navigation";

Header.propTypes = {

};

function Header(props) {
  
  return (
    <header className="flex justify-between items-center p-6 bg-black">
      <Image src={logo} alt="logo" width={100} height='auto'/>
      <div className={`flex gap-x-6 pr-10`}>
        <Navigation/>
        <div className="text-white font-bold">TR</div>
      </div>
    </header>
  );
}

export default Header
