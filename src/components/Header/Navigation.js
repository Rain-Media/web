import React from 'react';
import Image from "next/image";
import logo from "../../assets/images/oooo.png";
import Link from "next/link";
import {routes} from "./constant";

Navigation.propTypes = {

};

function Navigation(props) {
  return (
    <header className="flex justify-between items-center p-6 bg-black">
      <Image src={logo} alt="logo" width={100} height='auto'/>
      <div className="flex gap-x-6 pr-10">
        <nav>
          <div className="flex gap-x-14 box-border text-white">
            {
              routes.map((route, index) => <Link href={route.path} key={index}>{route.name}</Link>)}
          </div>
        </nav>
        <div className="text-white font-bold">TR</div>
      </div>
    </header>
  );
}

export default Navigation;
